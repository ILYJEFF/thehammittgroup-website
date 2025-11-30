# Deployment Guide - Vercel

## Prerequisites

1. GitHub account
2. Vercel account (connected to GitHub)
3. Database (Supabase, Neon, or PostgreSQL)

## Step 1: Push to GitHub

```bash
# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: The Hammitt Group website"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/thehammittgroup-website.git
git branch -M main
git push -u origin main
```

## Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings

## Step 3: Configure Environment Variables

In Vercel project settings, add these environment variables:

### Required Variables:

```
DATABASE_URL=your-postgresql-connection-string
NEXTAUTH_URL=https://your-domain.vercel.app
NEXTAUTH_SECRET=aaUow/5qen9yGKrwRG3fQeIfyLEG33VgZtwsYROLELg=
NEXT_PUBLIC_BASE_URL=https://your-domain.vercel.app
```

### Getting Your Database URL:

**Supabase:**
- Go to Project Settings → Database
- Copy "Connection string" (URI format)

**Neon:**
- Go to Dashboard → Your Project
- Copy connection string

## Step 4: Deploy

1. Vercel will automatically deploy on push to main branch
2. After first deployment, run database migrations:

```bash
# In Vercel dashboard, go to your project → Settings → Environment Variables
# Or use Vercel CLI:
vercel env pull .env.local
npx prisma db push
npm run create-admin
```

## Step 5: Post-Deployment Setup

After deployment:

1. **Set up database:**
   - Connect to your database
   - Run: `npx prisma db push`
   - Create admin user: `npm run create-admin`

2. **Update NEXTAUTH_URL:**
   - Change to your actual Vercel domain
   - Update in Vercel environment variables

3. **Custom Domain (Optional):**
   - Add your domain in Vercel project settings
   - Update DNS records as instructed

## Vercel CLI (Alternative)

If you prefer CLI:

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Link to existing project
vercel link

# Set environment variables
vercel env add DATABASE_URL
vercel env add NEXTAUTH_URL
vercel env add NEXTAUTH_SECRET
vercel env add NEXT_PUBLIC_BASE_URL
```

## Database Setup on Vercel

Since Vercel doesn't run migrations automatically, you have two options:

### Option 1: Run migrations locally pointing to production DB

```bash
# Set DATABASE_URL to production database
export DATABASE_URL="your-production-db-url"
npx prisma db push
npm run create-admin
```

### Option 2: Use Vercel CLI

```bash
vercel env pull .env.local
npx prisma db push
npm run create-admin
```

## Troubleshooting

- **Build fails:** Check that all environment variables are set
- **Database errors:** Verify DATABASE_URL is correct and database is accessible
- **Auth not working:** Ensure NEXTAUTH_URL matches your Vercel domain
- **404 errors:** Check that all routes are properly exported

## Post-Deployment Checklist

- [ ] Database connected and schema pushed
- [ ] Admin user created
- [ ] Environment variables set in Vercel
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active
- [ ] Test login functionality
- [ ] Test form submissions
- [ ] Verify all pages load correctly

