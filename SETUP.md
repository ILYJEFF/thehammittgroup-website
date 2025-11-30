# Database Setup Instructions

## Quick Setup Options

### Option 1: Supabase (Recommended - Free & Easy)

1. Go to [supabase.com](https://supabase.com) and sign up (free)
2. Click "New Project"
3. Fill in:
   - Project name: `thehammittgroup`
   - Database password: (create a strong password - save it!)
   - Region: Choose closest to you
4. Wait 2-3 minutes for project to be created
5. Go to **Settings** → **Database**
6. Find **Connection string** → **URI**
7. Copy the connection string (looks like: `postgresql://postgres:[YOUR-PASSWORD]@db.xxxxx.supabase.co:5432/postgres`)
8. Create `.env` file in project root with:

```env
DATABASE_URL="your-supabase-connection-string-here"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="aaUow/5qen9yGKrwRG3fQeIfyLEG33VgZtwsYROLELg="
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
```

### Option 2: Neon (Free PostgreSQL)

1. Go to [neon.tech](https://neon.tech) and sign up (free)
2. Click "Create Project"
3. Copy the connection string
4. Create `.env` file with the connection string

### Option 3: Local PostgreSQL

If you have PostgreSQL installed locally:

```env
DATABASE_URL="postgresql://your-username:your-password@localhost:5432/thehammittgroup?schema=public"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="aaUow/5qen9yGKrwRG3fQeIfyLEG33VgZtwsYROLELg="
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
```

## After Setting Up Database

1. **Generate Prisma Client:**
   ```bash
   npx prisma generate
   ```

2. **Push Schema to Database:**
   ```bash
   npx prisma db push
   ```

3. **Create Admin User:**
   ```bash
   npm run create-admin
   ```
   Enter:
   - Email: `jeff@thehammittgroup.com` (or your preferred email)
   - Password: `Founder1769!` (or your preferred password)

4. **Restart Dev Server:**
   ```bash
   npm run dev
   ```

5. **Login at:** `http://localhost:3000/admin/login`

## Troubleshooting

- If you get "DATABASE_URL not found" error, make sure `.env` file exists in the project root
- Restart the dev server after creating `.env` file
- Make sure the connection string includes your password (replace `[YOUR-PASSWORD]` with actual password)

