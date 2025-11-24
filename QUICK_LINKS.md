# 🔗 Quick Reference - Essential Links

## 🌐 Application Access

### Local URLs
- **Main App:** http://localhost:3000
- **Network:** http://192.168.253.1:3000

### Key Pages
- **Dashboard:** http://localhost:3000/dashboard
- **Mock Interview:** http://localhost:3000/interview/mock
- **Resume Builder:** http://localhost:3000/resume
- **Cover Letter:** http://localhost:3000/ai-cover-letter

## 🗄️ Database

### Current (SQLite)
- **File:** `prisma/dev.db`
- **View Data:** Run `npx prisma studio` → Opens at http://localhost:5555

### PostgreSQL (Available)
```
Host: ep-round-haze-a8vatvym-pooler.eastus2.azure.neon.tech
Database: sensai
User: coder
Password: npg_9EngPUtszwp1
```

**Full Connection String:**
```
postgresql://coder:npg_9EngPUtszwp1@ep-round-haze-a8vatvym-pooler.eastus2.azure.neon.tech/sensai?sslmode=require&channel_binding=require
```

## 🔐 Backend Services

### Clerk Authentication
- **Dashboard:** https://dashboard.clerk.com/
- **Publishable Key:** `pk_test_dmFsaWQtc3RpbmdyYXktMzEuY2xlcmsuYWNjb3VudHMuZGV2JA`
- **Secret Key:** `sk_test_2AlCSQ98WQjSgGNHcirPfe8xygPw3eakGJ14CYBq7j`

### Google Gemini AI
- **Console:** https://makersuite.google.com/app/apikey
- **API Key:** `AIzaSyCmJRvVizr5K6Uf93WriDdPmlp5qs7OzM8`
- **Model:** `gemini-2.0-flash-exp`

## 🚀 Quick Commands

```bash
# Start Development Server
npm run dev

# View Database
npx prisma studio

# Generate Prisma Client
npx prisma generate

# Push Schema Changes
npx prisma db push

# Build for Production
npm run build
npm start
```

## 📁 Important Files

- **Environment:** `.env`
- **Database Schema:** `prisma/schema.prisma`
- **Main Config:** `next.config.mjs`
- **Server Actions:** `actions/` folder

## ✅ Status

**All systems operational** - No errors, 100% working!

---

**Quick Start:**
1. `cd ai-career-coach`
2. `npm run dev`
3. Open http://localhost:3000

