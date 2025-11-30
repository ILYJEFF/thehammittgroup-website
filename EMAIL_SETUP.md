# Email Notification Setup Guide

## Overview

The website now sends email notifications when:
- Someone submits a contact form
- Someone submits a resume/candidate form

Notifications are sent to `jeff@thehammittgroup.com` (or the email you configure).

## Setting Up Resend (Email Service)

We use [Resend](https://resend.com) for sending emails. It's free to start and works great with Vercel.

### Step 1: Create Resend Account

1. Go to [resend.com](https://resend.com) and sign up (free)
2. Verify your email address

### Step 2: Get API Key

1. Go to [Resend Dashboard](https://resend.com/api-keys)
2. Click "Create API Key"
3. Name it: `The Hammitt Group Website`
4. Copy the API key (starts with `re_`)

### Step 3: Add Domain (Optional but Recommended)

For production, you should add your domain:

1. Go to [Resend Domains](https://resend.com/domains)
2. Click "Add Domain"
3. Enter: `thehammittgroup.com`
4. Follow the DNS setup instructions to verify your domain
5. Once verified, you can use `notifications@thehammittgroup.com` as the from address

**Note**: For testing, you can use the default `onboarding@resend.dev` address without domain verification.

### Step 4: Add Environment Variables to Vercel

Go to your Vercel project → **Settings** → **Environment Variables** and add:

#### Required:

```
RESEND_API_KEY = re_your_api_key_here
```

#### Optional (defaults provided):

```
CONTACT_NOTIFICATION_EMAIL = jeff@thehammittgroup.com
RESEND_FROM_EMAIL = notifications@thehammittgroup.com
```

(If you haven't verified your domain yet, use `onboarding@resend.dev` for `RESEND_FROM_EMAIL`)

### Step 5: Redeploy

After adding environment variables:
1. Go to Vercel → Deployments
2. Click "Redeploy" on the latest deployment
3. Wait for deployment to complete

## Testing

1. Submit a test contact form on your website
2. Check `jeff@thehammittgroup.com` for the notification email
3. Check the email includes all the form details
4. Click the "View in Admin Dashboard" link to verify it works

## Email Features

### Contact Form Notifications Include:
- Contact name
- Company name (if provided)
- Email (clickable)
- Phone (clickable)
- City
- Industry (if provided)
- Message
- Link to view in admin dashboard
- Submission timestamp

### Resume Submission Notifications Include:
- Candidate name
- Email (clickable)
- Phone (clickable)
- Current and desired locations
- Industry and position type
- Cover letter (if provided)
- Link to view resume
- Link to view in admin dashboard
- Submission timestamp

## Troubleshooting

### Emails Not Sending

1. **Check Environment Variables**: Verify `RESEND_API_KEY` is set in Vercel
2. **Check API Key**: Make sure the API key is correct and active
3. **Check Logs**: Look at Vercel function logs for error messages
4. **Test API Key**: Try sending a test email from Resend dashboard

### Emails Going to Spam

1. **Verify Domain**: Add and verify your domain in Resend
2. **Use Custom From Address**: Use `notifications@thehammittgroup.com` instead of `onboarding@resend.dev`
3. **Check SPF/DKIM**: Resend will provide DNS records when you add your domain

### Still Having Issues?

- Check Vercel function logs for errors
- Verify the email address in `CONTACT_NOTIFICATION_EMAIL` is correct
- Make sure Resend API key has sending permissions

## Free Tier Limits

Resend free tier includes:
- 3,000 emails per month
- 100 emails per day
- Perfect for most websites

## Alternative: Using Your Own SMTP

If you prefer to use your own email service (Gmail, Outlook, etc.), you can modify `lib/email.ts` to use nodemailer instead of Resend. However, Resend is recommended for production use as it's designed for serverless functions and has better deliverability.

## Security Notes

- Never commit API keys to git
- Always use environment variables
- Rotate API keys periodically
- Monitor email sending for unusual activity

