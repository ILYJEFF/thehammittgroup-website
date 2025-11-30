# The Hammitt Group Website

Enterprise-level website for The Hammitt Group, a boutique recruiting agency specializing in Texas manufacturing recruitment.

## Features

- **SEO Optimized**: Full SEO implementation with dynamic metadata, sitemap, and structured data
- **Manufacturing Focus**: Dedicated pages for industries and positions
- **Contact & Candidate Forms**: Secure form submissions with validation
- **Admin Dashboard**: Complete admin portal for managing submissions and blog posts
- **Blog System**: Full-featured blog with categories, tags, and rich content
- **Responsive Design**: Clean, professional design optimized for all devices

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Forms**: React Hook Form with Zod validation
- **Content**: React Markdown for blog posts

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your database URL and NextAuth secret.

4. Set up the database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. Create an admin user (run in Node REPL or create a script):
   ```javascript
   const bcrypt = require('bcryptjs');
   const { PrismaClient } = require('@prisma/client');
   const prisma = new PrismaClient();
   
   async function createAdmin() {
     const hashedPassword = await bcrypt.hash('your-password', 10);
     await prisma.admin.create({
       data: {
         email: 'admin@example.com',
         password: hashedPassword,
       },
     });
   }
   createAdmin();
   ```

6. Run the development server:
   ```bash
   npm run dev
   ```

7. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
/
├── app/
│   ├── (marketing)/     # Public pages
│   ├── admin/          # Admin dashboard
│   └── api/            # API routes
├── components/         # React components
├── lib/               # Utilities and config
└── prisma/            # Database schema
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Environment Variables

- `DATABASE_URL`: PostgreSQL connection string
- `NEXTAUTH_URL`: Your site URL
- `NEXTAUTH_SECRET`: Secret key for NextAuth (generate with `openssl rand -base64 32`)
- `NEXT_PUBLIC_BASE_URL`: Your public site URL

## Admin Access

- Login: `/admin/login`
- Dashboard: `/admin/dashboard`
- Blog Management: `/admin/blog`

## SEO Features

- Dynamic metadata for all pages
- XML sitemap generation
- robots.txt configuration
- Structured data (JSON-LD)
- Open Graph tags
- Twitter Card support

## License

Proprietary - The Hammitt Group

