"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { generateAIInsights } from "./dashboard";


export async function updateUser(data) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });
  if (!user) throw new Error("User not found");
  try {
    // Prepare update data - only include fields that exist in the User model
    const updateData = {
      industry: data.industry,
      bio: data.bio,
      skills: data.skills ? JSON.stringify(data.skills) : null,
    };

    // Only add experience if it's provided and is a valid number
    if (data.experience !== undefined && data.experience !== null) {
      updateData.experience = parseInt(data.experience, 10);
    }

    // First, update the user profile (this should always work)
    const updatedUser = await db.user.update({
      where: {
        id: user.id,
      },
      data: updateData,
    });

    // Then try to create/get industry insights (this might fail if AI is down)
    try {
      let industryInsight = await db.industryInsight.findUnique({
        where: {
          industry: data.industry,
        },
      });

      // If industry doesn't exist, create it with AI-generated insights
      if (!industryInsight) {
        const insights = await generateAIInsights(data.industry);

        industryInsight = await db.industryInsight.create({
          data: {
            industry: data.industry,
            ...insights,
            nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          },
        });
      }
    } catch (aiError) {
      console.error("Failed to generate AI insights, but user profile was updated:", aiError.message);
      // Continue anyway - user profile is updated
    }

    revalidatePath("/");
    return updatedUser;
  } catch (error) {
    console.error("Error updating user and industry:", error);
    console.error("Error details:", {
      message: error.message,
      stack: error.stack,
      data: data
    });
    throw new Error(`Failed to update profile: ${error.message}`);
  }
}

export async function getUserOnboardingStatus() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) throw new Error("User not found");

  try {
    const user = await db.user.findUnique({
      where: {
        clerkUserId: userId,
      },
      select: {
        industry: true,
      },
    });

    return {
      isOnboarded: !!user?.industry,
    };
  } catch (error) {
    console.error("Error checking onboarding status:", error);
    throw new Error("Failed to check onboarding status");
  }
}
