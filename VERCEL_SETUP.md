# Vercel Deployment Setup

## Repository Created ✅

Your code is now on GitHub: **https://github.com/ILYJEFF/thehammittgroup-website**

## Connect to Vercel

### Option 1: Connect to Existing Vercel Project

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Select your existing project
3. Go to **Settings** → **Git**
4. Click **"Disconnect"** if connected to a different repo
5. Click **"Connect Git Repository"**
6. Select **ILYJEFF/thehammittgroup-website**
7. Vercel will auto-detect Next.js settings

### Option 2: Create New Vercel Project

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **"Import Git Repository"**
3. Select **ILYJEFF/thehammittgroup-website**
4. Vercel will auto-detect Next.js - click **"Deploy"**

## Required Environment Variables

After connecting, go to **Settings** → **Environment Variables** and add:

```
DATABASE_URL=your-postgresql-connection-string
NEXTAUTH_URL=https://your-project.vercel.app
NEXTAUTH_SECRET=aaUow/5qen9yGKrwRG3fQeIfyLEG33VgZtwsYROLELg=
NEXT_PUBLIC_BASE_URL=https://your-project.vercel.app
```

**Important:** After first deployment, update `NEXTAUTH_URL` and `NEXT_PUBLIC_BASE_URL` with your actual Vercel domain.

## Post-Deployment Steps

1. **Set up database** (Supabase or Neon recommended)
2. **Add DATABASE_URL** to Vercel environment variables
3. **Redeploy** (Vercel will auto-deploy on next push)
4. **Run migrations:**
   ```bash
   # Point to production database temporarily
   export DATABASE_URL="your-production-db-url"
   npx prisma db push
   npm run create-admin
   ```

## Security Note

⚠️ **Important:** The GitHub token you provided should be revoked after setup for security:
1. Go to GitHub → Settings → Developer settings → Personal access tokens
2. Revoke the token used

## Next Steps

1. ✅ Repository created and code pushed
2. ⏳ Connect to Vercel (follow steps above)
3. ⏳ Add environment variables
4. ⏳ Set up database
5. ⏳ Deploy!

