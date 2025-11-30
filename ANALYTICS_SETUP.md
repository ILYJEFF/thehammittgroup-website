# Analytics and Tracking Setup Guide

This guide will help you set up Google Analytics 4, Google Search Console, and other tracking features for The Hammitt Group website.

## Google Analytics 4 Setup

### Step 1: Create a Google Analytics 4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Admin" (gear icon) in the bottom left
4. In the "Property" column, click "Create Property"
5. Enter property name: "The Hammitt Group"
6. Select your time zone and currency
7. Click "Next" and complete the setup

### Step 2: Get Your Measurement ID

1. In your new property, go to "Admin" > "Data Streams"
2. Click "Add stream" > "Web"
3. Enter your website URL: `https://www.thehammittgroup.com`
4. Enter stream name: "The Hammitt Group Website"
5. Click "Create stream"
6. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

### Step 3: Add to Environment Variables

Add your Google Analytics Measurement ID to your Vercel environment variables:

1. Go to your Vercel project dashboard
2. Navigate to Settings > Environment Variables
3. Add a new variable:
   - **Name**: `NEXT_PUBLIC_GA_ID`
   - **Value**: Your Measurement ID (e.g., `G-XXXXXXXXXX`)
   - **Environment**: Production, Preview, Development (select all)
4. Click "Save"

### Step 4: Verify Installation

1. Deploy your changes to production
2. Visit your website
3. Open Google Analytics > Reports > Realtime
4. You should see activity within a few minutes

### Conversion Tracking

The website automatically tracks these conversions:
- **Contact Form Submissions**: `contact_form_submission`
- **Resume Submissions**: `resume_submission`

These events are automatically sent to Google Analytics when forms are submitted successfully.

## Google Search Console Setup

### Step 1: Add Your Property

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property"
3. Select "URL prefix"
4. Enter: `https://www.thehammittgroup.com`
5. Click "Continue"

### Step 2: Verify Ownership

Choose one of these verification methods:

#### Option A: HTML File Upload (Recommended)
1. Download the HTML verification file
2. Upload it to your `public` folder
3. Deploy to production
4. Click "Verify" in Search Console

#### Option B: HTML Tag
1. Copy the meta tag provided
2. Add it to `app/layout.tsx` in the `<head>` section
3. Deploy to production
4. Click "Verify" in Search Console

#### Option C: Domain Name Provider
1. Follow the DNS verification instructions
2. Add the TXT record to your domain
3. Click "Verify" in Search Console

### Step 3: Submit Your Sitemap

1. In Search Console, go to "Sitemaps"
2. Enter: `https://www.thehammittgroup.com/sitemap.xml`
3. Click "Submit"
4. Google will start crawling your site

### Step 4: Monitor Performance

- Check "Performance" to see search queries and impressions
- Review "Coverage" to identify indexing issues
- Use "URL Inspection" to test individual pages

## Admin Dashboard Analytics

The admin dashboard now includes analytics showing:
- Total form submissions (contacts + candidates)
- Breakdowns by city and location
- Daily trends
- Blog statistics

Access analytics at: `/admin/dashboard`

## RSS Feed

Your blog RSS feed is available at:
- URL: `https://www.thehammittgroup.com/api/rss`
- Add this to RSS readers, email marketing tools, or social media schedulers

## Newsletter Integration

The newsletter signup form is ready to integrate with:

### Option 1: Resend (Recommended - Already Using)
1. Go to [Resend](https://resend.com/)
2. Create an Audience
3. Copy the Audience ID
4. Add to Vercel environment variables:
   - **Name**: `RESEND_AUDIENCE_ID`
   - **Value**: Your audience ID

### Option 2: Mailchimp
1. Get your Mailchimp API key
2. Update `/app/api/newsletter/route.ts` to use Mailchimp API
3. Add API key to environment variables

### Option 3: ConvertKit
1. Get your ConvertKit API key
2. Update `/app/api/newsletter/route.ts` to use ConvertKit API
3. Add API key to environment variables

## Heat Mapping (Optional)

For heat mapping with Hotjar or similar:

1. Sign up for [Hotjar](https://www.hotjar.com/) or similar service
2. Get your tracking code
3. Add it to `app/layout.tsx` similar to Google Analytics
4. Create a new component: `components/analytics/hotjar.tsx`

Example:
```tsx
"use client";
import Script from "next/script";

export function Hotjar() {
  const hjId = process.env.NEXT_PUBLIC_HOTJAR_ID;
  if (!hjId) return null;
  
  return (
    <Script id="hotjar" strategy="afterInteractive">
      {`
        (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:${hjId},hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `}
    </Script>
  );
}
```

## Testing

1. **Google Analytics**: Check Realtime reports after visiting your site
2. **Conversion Tracking**: Submit a test form and check Events in GA4
3. **RSS Feed**: Visit `/api/rss` and verify XML format
4. **Newsletter**: Test signup form and check your email service

## Troubleshooting

### Google Analytics Not Working
- Verify `NEXT_PUBLIC_GA_ID` is set in environment variables
- Check browser console for errors
- Ensure you're on the production domain (not localhost)
- Wait a few minutes for data to appear

### Search Console Not Indexing
- Verify sitemap is accessible at `/sitemap.xml`
- Check robots.txt allows crawling
- Use URL Inspection tool to test individual pages
- Be patient - indexing can take days/weeks

### Newsletter Not Working
- Check API keys are set correctly
- Verify email service API is working
- Check server logs for errors

## Next Steps

1. Set up Google Analytics 4
2. Verify Google Search Console
3. Configure newsletter service (Resend recommended)
4. Monitor analytics dashboard regularly
5. Set up custom reports in GA4 for key metrics

