# EmailJS Setup Guide

Follow these steps to receive emails from your contact form to **yehdhruvkr@gmail.com**.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (it's free for up to 200 emails/month)
3. Sign up with your Google account or create an account

## Step 2: Add Email Service

1. After logging in, go to **"Email Services"** in the dashboard
2. Click **"Add New Service"**
3. Select **"Gmail"** (since you want emails sent to Gmail)
4. Click **"Connect Account"** and authorize EmailJS to send emails from your Gmail
5. Note down the **Service ID** (you'll need this)

## Step 3: Create Email Template

1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Use this template:

**Template Name:** Contact Form Submission

**Subject:** New Contact Form Submission from SOPify.ai

**Content:**

```
New contact form submission from SOPify.ai landing page:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Role: {{role}}

Message:
{{message}}

---
This email was sent from the SOPify.ai contact form.
```

4. Click **"Save"**
5. Note down the **Template ID** (you'll need this)

## Step 4: Get Your Public Key

1. Go to **"Account"** → **"General"** in the dashboard
2. Find your **Public Key** (also called API Key)
3. Copy it (you'll need this)

## Step 5: Configure the React app

Create `.env.local` in the project root (same folder as `package.json`) with:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

If you omit `.env.local`, the defaults in `src/components/ContactForm.tsx` are used (same values you had in the old `script.js`).

## Step 6: Test It!

1. Run `npm run dev` and open the URL shown in the terminal
2. Fill out the contact form
3. Submit it
4. Check your email inbox at **yehdhruvkr@gmail.com**

## Troubleshooting

### Emails not arriving?

- Check your spam/junk folder
- Verify all three IDs are correctly set in `.env.local` (or in `ContactForm.tsx`)
- Check the browser console (F12) for any error messages
- Make sure EmailJS service is connected and active

### Need help?

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: support@emailjs.com

## Alternative: Use Formspree (Even Simpler)

If you prefer an even simpler solution:

1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up for free
3. Create a new form
4. Get your form endpoint URL
5. Point the contact form at Formspree (replace the EmailJS submit handler in `ContactForm.tsx` or use a plain `action` form).
