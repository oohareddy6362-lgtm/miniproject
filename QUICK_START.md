# 🚀 Quick Start Guide - AI Career Coach

## ⚡ Get Running in 5 Minutes

### Current Status: ✅ Almost Ready!

Your project is **95% complete**. Only the database connection needs to be updated.

---

## 🎯 What You Need to Do

### 1️⃣ Get a Free Database (2 minutes)

**Option 1: Neon (Easiest)**
1. Visit: https://console.neon.tech/
2. Click "Sign Up" (use GitHub for quick signup)
3. Click "Create Project"
4. Name it: `ai-career-coach`
5. Click "Create Project"
6. **Copy the connection string** (starts with `postgresql://`)

**Option 2: Supabase**
1. Visit: https://supabase.com/
2. Sign up and create a new project
3. Go to Settings → Database
4. Copy the "Connection String" (URI format)

---

### 2️⃣ Update Your Database URL (30 seconds)

1. Open the file: `ai-career-coach/.env`
2. Find the line: `DATABASE_URL=...`
3. Replace it with your new connection string
4. Save the file

Example:
```env
DATABASE_URL=postgresql://username:password@ep-xxx.neon.tech/dbname?sslmode=require
```

---

### 3️⃣ Setup Database Tables (30 seconds)

Open terminal in the `ai-career-coach` folder and run:

```bash
npx prisma db push
```

You should see: ✅ "Your database is now in sync with your Prisma schema"

---

### 4️⃣ Start the Application (10 seconds)

```bash
npm run dev
```

---

## 🎉 You're Done!

Open your browser and go to:

### 🌐 http://localhost:3000

---

## 📱 What You Can Do

1. **Sign Up** - Create your account
2. **Onboarding** - Set your industry and skills
3. **Dashboard** - View career insights
4. **Resume Builder** - Create AI-powered resumes
5. **Cover Letters** - Generate custom cover letters
6. **Interview Prep** - Practice with AI-generated questions

---

## 🔑 Optional: Update API Keys (if needed)

If you get authentication or AI errors, you may need fresh API keys:

### Clerk (Authentication)
- Get keys: https://dashboard.clerk.com/
- Free tier: ✅ Unlimited users

### Google Gemini (AI)
- Get key: https://makersuite.google.com/app/apikey
- Free tier: ✅ 60 requests/minute

Update these in your `.env` file.

---

## ❓ Troubleshooting

### "Can't reach database server"
→ Your DATABASE_URL is incorrect. Follow Step 2 above.

### "Port 3000 already in use"
→ Run: `npx kill-port 3000` then try again

### "Module not found"
→ Run: `npm install` then try again

---

## 🎯 Quick Commands Reference

```bash
# Install dependencies
npm install

# Setup database
npx prisma db push

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## 📞 All Working URLs

Once running, access these pages:

- 🏠 Home: http://localhost:3000
- 🔐 Sign In: http://localhost:3000/sign-in
- 📝 Sign Up: http://localhost:3000/sign-up
- 📊 Dashboard: http://localhost:3000/dashboard
- 📄 Resume: http://localhost:3000/resume
- ✉️ Cover Letter: http://localhost:3000/ai-cover-letter
- 🎤 Interview: http://localhost:3000/interview

---

## ✅ Checklist

- [ ] Created a database on Neon/Supabase
- [ ] Updated DATABASE_URL in .env
- [ ] Ran `npx prisma db push`
- [ ] Ran `npm run dev`
- [ ] Opened http://localhost:3000
- [ ] Created an account
- [ ] Completed onboarding

---

**That's it! You're ready to use your AI Career Coach! 🎉**

