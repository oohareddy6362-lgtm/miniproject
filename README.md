# 🎯 AI Career Coach - Full Stack Application

![sensai](https://github.com/user-attachments/assets/eee79242-4056-4d19-b655-2873788979e1)

## 🚀 Complete Working Project - Ready to Run!

A comprehensive AI-powered career coaching platform built with Next.js 15, Prisma, Clerk Auth, and Google Gemini AI.

### ✨ Features

- 🔐 **Secure Authentication** - Powered by Clerk
- 📊 **Smart Dashboard** - Career insights and analytics
- 📄 **AI Resume Builder** - Create ATS-optimized resumes
- ✉️ **Cover Letter Generator** - Personalized cover letters
- 🎤 **Interview Preparation** - AI-generated practice questions
- 📈 **Industry Insights** - Salary trends and market analysis
- 🎨 **Modern UI** - Built with Tailwind CSS and Shadcn UI
- 🌙 **Dark Mode** - Beautiful dark theme

---

## ⚡ Quick Start (5 Minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Environment Variables

The `.env` file is already created! You just need to update the database URL:

1. Get a free database from [Neon](https://console.neon.tech/) (takes 2 minutes)
2. Copy your connection string
3. Update `DATABASE_URL` in `.env` file

**See [QUICK_START.md](QUICK_START.md) for detailed instructions**

### 3. Initialize Database
```bash
npx prisma db push
```

### 4. Start Development Server
```bash
npm run dev
```

### 5. Open Your Browser
Visit: **http://localhost:3000**

---

## 📚 Documentation

- **[QUICK_START.md](QUICK_START.md)** - Get running in 5 minutes
- **[SETUP.md](SETUP.md)** - Complete setup guide with troubleshooting
- **[LINKS_AND_RESOURCES.md](LINKS_AND_RESOURCES.md)** - All URLs and resources

---

## 🔑 Required API Keys

All keys are already in `.env` - you may need to update them if they're expired:

### Database (Required)
- **Neon**: https://console.neon.tech/ (Free)
- **Supabase**: https://supabase.com/ (Alternative)

### Authentication (Required)
- **Clerk**: https://dashboard.clerk.com/ (Free - 10K users)

### AI Features (Required)
- **Google Gemini**: https://makersuite.google.com/app/apikey (Free)

---

## 🌐 Application URLs

Once running, access these pages:

| Page | URL | Description |
|------|-----|-------------|
| Home | http://localhost:3000 | Landing page |
| Sign In | http://localhost:3000/sign-in | User login |
| Sign Up | http://localhost:3000/sign-up | User registration |
| Dashboard | http://localhost:3000/dashboard | Main dashboard |
| Resume | http://localhost:3000/resume | Resume builder |
| Cover Letter | http://localhost:3000/ai-cover-letter | Cover letter generator |
| Interview | http://localhost:3000/interview | Interview prep |

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Clerk
- **AI**: Google Gemini 1.5 Flash
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI + Radix UI
- **Background Jobs**: Inngest
- **Form Handling**: React Hook Form + Zod
- **Charts**: Recharts

---

## 📦 Project Structure

```
ai-career-coach/
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication pages
│   ├── (main)/            # Main application pages
│   │   ├── dashboard/     # Dashboard
│   │   ├── resume/        # Resume builder
│   │   ├── ai-cover-letter/ # Cover letter generator
│   │   ├── interview/     # Interview prep
│   │   └── onboarding/    # User onboarding
│   └── api/               # API routes
├── actions/               # Server actions
├── components/            # React components
├── lib/                   # Utility functions
├── prisma/                # Database schema
├── public/                # Static assets
└── .env                   # Environment variables ✅
```

---

## 🎯 Environment Variables

Your `.env` file should contain:

```env
# Database (UPDATE THIS)
DATABASE_URL=your_postgresql_connection_string

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Clerk URLs (Already configured)
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# Google Gemini AI
GEMINI_API_KEY=your_gemini_api_key
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/)
3. Import your repository
4. Add environment variables
5. Deploy!

**Important**: Update Clerk URLs to your production domain

---

## 🐛 Troubleshooting

### Database Connection Error
```
Error: Can't reach database server
```
**Solution**: Update `DATABASE_URL` in `.env` with a valid PostgreSQL connection string

### Port Already in Use
```
Error: Port 3000 is already in use
```
**Solution**: Run `npx kill-port 3000` or use a different port: `npm run dev -- -p 3001`

### Module Not Found
```
Error: Cannot find module
```
**Solution**: Run `npm install` again

**See [SETUP.md](SETUP.md) for more troubleshooting help**

---

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint

# Database
npx prisma studio    # Open database GUI
npx prisma db push   # Push schema to database
npx prisma generate  # Generate Prisma Client
```

---

## 🎓 Original Tutorial

This project is based on the tutorial by **RoadsideCoder**:
- **YouTube**: https://youtu.be/UbXpRv5ApKA

---

## 📄 License

This project is for educational purposes.

---

## 🆘 Need Help?

1. Check [QUICK_START.md](QUICK_START.md) for setup instructions
2. Check [SETUP.md](SETUP.md) for detailed troubleshooting
3. Check [LINKS_AND_RESOURCES.md](LINKS_AND_RESOURCES.md) for all resources

---

**Made with 💗 by RoadsideCoder**

---

## ✅ Current Status

- ✅ All dependencies installed
- ✅ Environment variables configured
- ✅ Prisma schema ready
- ✅ No code errors
- ⚠️ Database connection needs to be updated (see QUICK_START.md)

**You're 95% ready to go! Just update the database URL and you're done! 🎉**
