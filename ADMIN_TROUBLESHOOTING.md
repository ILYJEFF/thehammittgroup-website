# Admin Portal Troubleshooting Guide

## Common Issues and Solutions

### Issue: GET /api/auth/error 500 (Internal Server Error)

This error typically occurs due to missing or incorrect environment variables in Vercel.

## Step 1: Check Environment Variables in Vercel

Go to your Vercel project → **Settings** → **Environment Variables** and verify you have:

### Required Variables:

1. **DATABASE_URL**
   - Should be: `postgresql://neondb_owner:npg_ClxM7vZB4syI@ep-patient-moon-a4gj0npc-pooler.us-east-1.aws.neon.tech/neondb?connect_timeout=15&sslmode=require`
   - ✅ You already have this set

2. **NEXTAUTH_SECRET**
   - Should be: `aaUow/5qen9yGKrwRG3fQeIfyLEG33VgZtwsYROLELg=`
   - ⚠️ **Check if this is set in Vercel**

3. **NEXTAUTH_URL**
   - Should be: `https://www.thehammittgroup.com` (your actual domain)
   - ⚠️ **This MUST match your actual Vercel domain**

4. **NEXT_PUBLIC_BASE_URL**
   - Should be: `https://www.thehammittgroup.com` (your actual domain)

## Step 2: Verify Environment Variables

After updating, visit: `https://www.thehammittgroup.com/api/auth/health`

This will show you:
- ✅ Database connection status
- ✅ Which environment variables are set
- ✅ Number of admin users in database

## Step 3: Common Fixes

### Fix 1: NEXTAUTH_SECRET Missing

If `NEXTAUTH_SECRET` is not set:
1. Go to Vercel → Settings → Environment Variables
2. Add: `NEXTAUTH_SECRET` = `aaUow/5qen9yGKrwRG3fQeIfyLEG33VgZtwsYROLELg=`
3. Redeploy

### Fix 2: NEXTAUTH_URL Incorrect

If `NEXTAUTH_URL` doesn't match your domain:
1. Update `NEXTAUTH_URL` to: `https://www.thehammittgroup.com`
2. Update `NEXT_PUBLIC_BASE_URL` to: `https://www.thehammittgroup.com`
3. Redeploy

### Fix 3: Database Connection Issues

If database connection fails:
1. Verify `DATABASE_URL` is correct in Vercel
2. Check Neon dashboard to ensure database is active (not paused)
3. Test connection using the health endpoint

## Step 4: Redeploy After Changes

After updating environment variables:
1. Go to Vercel → Deployments
2. Click the three dots on the latest deployment
3. Click "Redeploy"
4. Wait for deployment to complete

## Step 5: Test Login

1. Visit: `https://www.thehammittgroup.com/admin/login`
2. Use credentials:
   - Email: `jeff@thehammittgroup.com`
   - Password: `Founder1769!`

## Quick Diagnostic Checklist

- [ ] `DATABASE_URL` is set in Vercel
- [ ] `NEXTAUTH_SECRET` is set in Vercel
- [ ] `NEXTAUTH_URL` matches your actual domain (`https://www.thehammittgroup.com`)
- [ ] `NEXT_PUBLIC_BASE_URL` matches your actual domain
- [ ] All variables are set for "Production" environment
- [ ] Vercel deployment completed successfully
- [ ] Database is active in Neon dashboard

## Still Having Issues?

1. Check Vercel deployment logs for errors
2. Visit `/api/auth/health` to see detailed diagnostics
3. Check browser console for client-side errors
4. Verify admin user exists in database (should have 1 admin user)

