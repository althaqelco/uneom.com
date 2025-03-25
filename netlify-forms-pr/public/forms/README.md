# Netlify Forms Integration

This directory contains HTML form prerendering files for Netlify Forms integration.

## How It Works

1. Netlify recognizes HTML forms with the `netlify` attribute during deployment
2. These HTML files contain hidden form elements that register the form structure with Netlify
3. The actual forms are implemented in React components in `src/components/forms/`
4. The main `public/index.html` file also includes all these forms to ensure proper recognition

## Form Structure

### Contact Form
- **Name**: `contact`
- **Fields**: name, email, phone, subject, message

### Quote Form
- **Name**: `quote`
- **Fields**: name, email, company, phone, product, quantity, requirements

### Request Info Form
- **Name**: `request-info`
- **Fields**: name, email, phone, industry, information, preferred_contact

## Implementation Notes

- Form submissions are automatically collected in the Netlify admin dashboard
- Form spam is handled via the `netlify-honeypot="bot-field"` attribute
- Each form redirects to a success page after submission 