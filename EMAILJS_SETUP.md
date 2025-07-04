# EmailJS Setup Guide for Contact Form

This guide will help you set up EmailJS to handle contact form submissions in your Vesko website.

## Prerequisites

1. An EmailJS account (free tier available)
2. A Gmail account or other email service
3. Node.js and npm installed

## Step 1: Install EmailJS

```bash
npm install @emailjs/browser
```

## Step 2: Set up EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and create an account
2. Verify your email address
3. Add your email service (Gmail recommended for beginners)

### Adding Gmail Service:

1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail"
4. Connect your Gmail account
5. Note down the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. In EmailJS dashboard, go to "Email Templates"
2. Click "Create New Template"
3. Use this template structure:

```html
Subject: New Contact Form Submission from {{from_name}} Hello Vesko Team, You have received a new
contact form submission: **Name:** {{from_name}} **Email:** {{from_email}} **Phone:**
{{phone_number}} **Message:** {{message}} This email was sent from your website contact form. Best
regards, Vesko Website
```

4. Save the template and note down the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. In EmailJS dashboard, go to "Account" → "API Keys"
2. Copy your **Public Key** (e.g., `user_def456`)

## Step 5: Initialize EmailJS

Update your `src/main.tsx` file:

```typescript
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import emailjs from '@emailjs/browser';

import { App } from './App';
import { i18n } from './locales/i18n.config';
import './index.css';

// Initialize EmailJS
emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your actual public key

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);

root.render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
);
```

## Step 6: Update ContactForm Component

Replace the commented EmailJS section in `src/shared/components/common/ContactForm.tsx` with:

```typescript
import emailjs from "@emailjs/browser";

// In the handleSubmit function, replace the simulation with:
const templateParams = {
  from_name: formData.fullName,
  from_email: formData.email,
  phone_number: formData.phoneNumber,
  message: formData.message,
  to_name: "Vesko Team",
  reply_to: formData.email,
};

const result = await emailjs.send(
  "YOUR_SERVICE_ID", // Replace with your service ID
  "YOUR_TEMPLATE_ID", // Replace with your template ID
  templateParams,
  "YOUR_PUBLIC_KEY" // Replace with your public key
);

if (result.status === 200) {
  setSubmitStatus("success");
  setFormData({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
} else {
  throw new Error("EmailJS failed to send");
}
```

## Step 7: Environment Variables (Recommended)

For better security, use environment variables:

1. Create a `.env` file in your project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Update the ContactForm component to use environment variables:

```typescript
const result = await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  templateParams,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);
```

3. Add `.env` to your `.gitignore` file:

```gitignore
# Environment variables
.env
.env.local
.env.production
```

## Step 8: Testing

1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check your email for the received message
5. Check the browser console for any errors

## Troubleshooting

### Common Issues:

1. **"Service not found" error:**

   - Verify your Service ID is correct
   - Ensure your email service is properly connected

2. **"Template not found" error:**

   - Verify your Template ID is correct
   - Check that the template is published

3. **"Public key not found" error:**

   - Verify your Public Key is correct
   - Ensure EmailJS is properly initialized

4. **Form not sending:**
   - Check browser console for errors
   - Verify all environment variables are set
   - Ensure you're not in development mode with strict CORS

### Rate Limiting:

- Free tier: 200 emails/month
- Paid plans: Higher limits available
- Consider upgrading if you expect high volume

## Security Considerations

1. **Never expose private keys in client-side code**
2. **Use environment variables for sensitive data**
3. **Consider implementing CAPTCHA for spam prevention**
4. **Validate form data on both client and server side**
5. **Monitor for unusual activity**

## Advanced Features

### CAPTCHA Integration:

```bash
npm install react-google-recaptcha
```

### Form Validation:

Consider adding more robust validation:

```typescript
const validateForm = () => {
  const errors = [];

  if (!formData.fullName.trim()) {
    errors.push("Name is required");
  }

  if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    errors.push("Valid email is required");
  }

  if (!formData.message.trim()) {
    errors.push("Message is required");
  }

  return errors;
};
```

### Analytics Integration:

Track form submissions with Google Analytics or similar:

```typescript
// After successful submission
gtag("event", "form_submit", {
  event_category: "Contact",
  event_label: "Contact Form",
});
```

## Support

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Community: [https://community.emailjs.com/](https://community.emailjs.com/)
- Vesko Support: Contact the development team

---

**Note:** This setup provides a production-ready contact form with proper error handling, loading states, and user feedback. The form is fully responsive and follows the existing design patterns in your Vesko website.
