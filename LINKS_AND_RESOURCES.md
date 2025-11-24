# 🔗 All Links and Resources - AI Career Coach

## 🌐 Application URLs (After Running `npm run dev`)

### Main Application
- **Home Page**: http://localhost:3000
- **Dashboard**: http://localhost:3000/dashboard
- **Resume Builder**: http://localhost:3000/resume
- **Cover Letter Generator**: http://localhost:3000/ai-cover-letter
- **Interview Preparation**: http://localhost:3000/interview
- **Onboarding**: http://localhost:3000/onboarding

### Authentication Pages
- **Sign In**: http://localhost:3000/sign-in
- **Sign Up**: http://localhost:3000/sign-up

### API Endpoints
- **Inngest API**: http://localhost:3000/api/inngest

---

## 🔑 Get API Keys & Services

### 1. Database (PostgreSQL)

#### Neon (Recommended - Free)
- **Website**: https://console.neon.tech/
- **Free Tier**: ✅ 0.5 GB storage, 1 project
- **Setup Time**: 2 minutes
- **What you get**: PostgreSQL connection string

#### Supabase (Alternative - Free)
- **Website**: https://supabase.com/
- **Free Tier**: ✅ 500 MB database, unlimited API requests
- **Setup Time**: 3 minutes
- **What you get**: PostgreSQL connection string

#### Railway (Alternative - Free)
- **Website**: https://railway.app/
- **Free Tier**: ✅ $5 credit/month
- **Setup Time**: 2 minutes
- **What you get**: PostgreSQL connection string

---

### 2. Authentication - Clerk

- **Dashboard**: https://dashboard.clerk.com/
- **Documentation**: https://clerk.com/docs
- **Free Tier**: ✅ 10,000 monthly active users
- **What you need**: 
  - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
  - `CLERK_SECRET_KEY`

**Quick Setup**:
1. Go to https://dashboard.clerk.com/
2. Click "Add Application"
3. Choose "Next.js"
4. Copy the API keys
5. Paste into `.env` file

---

### 3. AI - Google Gemini

- **Get API Key**: https://makersuite.google.com/app/apikey
- **Alternative Link**: https://aistudio.google.com/app/apikey
- **Documentation**: https://ai.google.dev/docs
- **Free Tier**: ✅ 60 requests per minute
- **What you need**: `GEMINI_API_KEY`

**Quick Setup**:
1. Go to https://makersuite.google.com/app/apikey
2. Sign in with Google
3. Click "Create API Key"
4. Copy the key
5. Paste into `.env` file

---

## 📚 Documentation & Learning Resources

### Next.js
- **Official Docs**: https://nextjs.org/docs
- **Learn Next.js**: https://nextjs.org/learn

### Prisma
- **Official Docs**: https://www.prisma.io/docs
- **Prisma Studio**: Run `npx prisma studio` to view database

### Clerk
- **Next.js Integration**: https://clerk.com/docs/quickstarts/nextjs
- **Components**: https://clerk.com/docs/components/overview

### Tailwind CSS
- **Official Docs**: https://tailwindcss.com/docs
- **Cheat Sheet**: https://nerdcave.com/tailwind-cheat-sheet

### Shadcn UI
- **Official Docs**: https://ui.shadcn.com/
- **Components**: https://ui.shadcn.com/docs/components

---

## 🛠️ Development Tools

### Database Management
- **Prisma Studio**: http://localhost:5555 (run `npx prisma studio`)
- **Neon Console**: https://console.neon.tech/

### API Testing
- **Inngest Dev Server**: https://www.inngest.com/docs/local-development

### Code Quality
- **ESLint**: Run `npm run lint`
- **Format**: Configured with Next.js defaults

---

## 🚀 Deployment Platforms

### Vercel (Recommended for Next.js)
- **Website**: https://vercel.com/
- **Free Tier**: ✅ Unlimited deployments
- **Setup**: 
  1. Push code to GitHub
  2. Import to Vercel
  3. Add environment variables
  4. Deploy!

### Netlify
- **Website**: https://www.netlify.com/
- **Free Tier**: ✅ 100 GB bandwidth/month

### Railway
- **Website**: https://railway.app/
- **Free Tier**: ✅ $5 credit/month

---

## 📦 Package Documentation

### Core Dependencies
- **@clerk/nextjs**: https://www.npmjs.com/package/@clerk/nextjs
- **@prisma/client**: https://www.npmjs.com/package/@prisma/client
- **@google/generative-ai**: https://www.npmjs.com/package/@google/generative-ai
- **inngest**: https://www.npmjs.com/package/inngest
- **next**: https://www.npmjs.com/package/next
- **react**: https://www.npmjs.com/package/react
- **zod**: https://www.npmjs.com/package/zod

### UI Components
- **@radix-ui**: https://www.radix-ui.com/
- **lucide-react**: https://lucide.dev/
- **recharts**: https://recharts.org/
- **react-markdown**: https://github.com/remarkjs/react-markdown

---

## 🎓 Tutorial & Support

### Original Tutorial
- **YouTube**: https://youtu.be/UbXpRv5ApKA
- **Channel**: RoadsideCoder

### Community Support
- **Next.js Discord**: https://discord.gg/nextjs
- **Clerk Discord**: https://discord.com/invite/clerk
- **Prisma Discord**: https://discord.gg/prisma

---

## 🔧 Useful Commands

### Development
```bash
# Start dev server
npm run dev

# Open Prisma Studio
npx prisma studio

# View database
npx prisma db pull

# Reset database
npx prisma db push --force-reset
```

### Production
```bash
# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

### Database
```bash
# Generate Prisma Client
npx prisma generate

# Push schema to database
npx prisma db push

# Create migration
npx prisma migrate dev

# View database in browser
npx prisma studio
```

---

## 🎯 Quick Access Checklist

- [ ] Database: https://console.neon.tech/
- [ ] Auth: https://dashboard.clerk.com/
- [ ] AI Key: https://makersuite.google.com/app/apikey
- [ ] Local App: http://localhost:3000
- [ ] Prisma Studio: http://localhost:5555

---

## 📞 Support & Issues

If you encounter issues:

1. **Check the console** for error messages
2. **Verify .env file** has all required variables
3. **Check database connection** with `npx prisma db push`
4. **Restart dev server** after changing .env
5. **Clear cache**: Delete `.next` folder and restart

---

## 🎉 You're All Set!

All the links and resources you need are here. Happy coding! 🚀

**Made with 💗 by RoadsideCoder**

