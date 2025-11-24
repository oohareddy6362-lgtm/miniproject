# AI Career Coach - Complete Setup Guide

## 🚀 Quick Start

This is a complete working AI Career Coach application built with Next.js, Prisma, Clerk Auth, and Google Gemini AI.

## ✅ Current Status

- ✅ All dependencies installed
- ✅ Environment variables configured
- ✅ Prisma schema ready
- ⚠️ Database connection needs to be updated

## 📋 Prerequisites

- Node.js 18+ installed
- A Neon Database account (or any PostgreSQL database)
- Clerk account for authentication
- Google Gemini API key

## 🔧 Setup Instructions

### Step 1: Database Setup (REQUIRED)

The current database URL in `.env` appears to be inaccessible. You need to:

#### Option A: Create a New Neon Database (Recommended - Free)

1. Go to [Neon Console](https://console.neon.tech/)
2. Sign up or log in
3. Click "Create Project"
4. Name your project (e.g., "ai-career-coach")
5. Select a region close to you
6. Click "Create Project"
7. Copy the connection string (it looks like: `postgresql://username:password@host/database?sslmode=require`)
8. Update the `DATABASE_URL` in your `.env` file

#### Option B: Use Another PostgreSQL Database

You can use:
- **Supabase**: https://supabase.com/ (Free tier available)
- **Railway**: https://railway.app/ (Free tier available)
- **Local PostgreSQL**: Install PostgreSQL locally

### Step 2: Update Environment Variables

Open the `.env` file in the `ai-career-coach` folder and update:

```env
# Update this with your new database URL
DATABASE_URL=your_new_database_url_here

# If Clerk keys are expired, get new ones from https://dashboard.clerk.com/
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# If Gemini API key doesn't work, get a new one from https://makersuite.google.com/app/apikey
GEMINI_API_KEY=your_gemini_api_key
```

### Step 3: Initialize Database

Once you have a valid database URL, run:

```bash
cd ai-career-coach
npx prisma db push
```

This will create all the necessary tables in your database.

### Step 4: Start the Development Server

```bash
npm run dev
```

The application will be available at: **http://localhost:3000**

## 🔑 Getting API Keys

### Clerk Authentication (Free)

1. Go to [Clerk Dashboard](https://dashboard.clerk.com/)
2. Sign up or log in
3. Create a new application
4. Choose "Next.js" as the framework
5. Copy the API keys and update your `.env` file

### Google Gemini API (Free)

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the key and update your `.env` file

## 📱 Application Features

- **User Authentication**: Secure sign-up/sign-in with Clerk
- **Onboarding**: Industry and skills selection
- **Dashboard**: Career insights and analytics
- **Resume Builder**: AI-powered resume creation with ATS scoring
- **Cover Letter Generator**: Customized cover letters for job applications
- **Interview Prep**: AI-generated interview questions and assessments
- **Industry Insights**: Salary ranges, trends, and skill recommendations

## 🌐 Access URLs

Once the server is running:

- **Home Page**: http://localhost:3000
- **Sign In**: http://localhost:3000/sign-in
- **Sign Up**: http://localhost:3000/sign-up
- **Dashboard**: http://localhost:3000/dashboard (requires login)
- **Resume Builder**: http://localhost:3000/resume (requires login)
- **Cover Letter**: http://localhost:3000/ai-cover-letter (requires login)
- **Interview Prep**: http://localhost:3000/interview (requires login)

## 🐛 Troubleshooting

### Database Connection Error

**Error**: `Can't reach database server`

**Solution**: 
1. Verify your `DATABASE_URL` is correct
2. Make sure the database server is running
3. Check if your IP is whitelisted (for cloud databases)
4. Try creating a new database connection string

### Clerk Authentication Error

**Error**: `Clerk: Missing publishable key`

**Solution**: 
1. Get new API keys from [Clerk Dashboard](https://dashboard.clerk.com/)
2. Update `.env` file with new keys
3. Restart the development server

### Gemini API Error

**Error**: `API key not valid`

**Solution**: 
1. Get a new API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Update `GEMINI_API_KEY` in `.env`
3. Restart the development server

### Port Already in Use

**Error**: `Port 3000 is already in use`

**Solution**: 
```bash
# Kill the process using port 3000
npx kill-port 3000

# Or run on a different port
npm run dev -- -p 3001
```

## 📦 Project Structure

```
ai-career-coach/
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication pages
│   ├── (main)/            # Main application pages
│   └── api/               # API routes
├── actions/               # Server actions
├── components/            # React components
├── lib/                   # Utility functions
├── prisma/                # Database schema and migrations
├── public/                # Static assets
└── .env                   # Environment variables
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/)
3. Import your repository
4. Add environment variables from `.env`
5. Deploy!

### Important for Production

- Update Clerk URLs in `.env` to your production domain
- Use production database (not the same as development)
- Keep API keys secure (never commit `.env` to git)

## 📝 Next Steps

1. ✅ Fix database connection
2. ✅ Start the development server
3. ✅ Create an account
4. ✅ Complete onboarding
5. ✅ Explore all features!

## 🆘 Need Help?

If you encounter any issues:

1. Check the console for error messages
2. Verify all environment variables are set correctly
3. Make sure all dependencies are installed (`npm install`)
4. Try deleting `node_modules` and `.next` folders, then run `npm install` again

## 📄 License

This project is for educational purposes.

---

**Made with 💗 by RoadsideCoder**

