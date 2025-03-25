# UNEOM - Uniform Manufacturing in Saudi Arabia

## Image Loading Improvements for Vercel Deployment

This project includes several enhancements to improve image loading, especially when deployed on Vercel. The following components and utilities have been added:

### New Components

1. **EnhancedImage**: A robust image component with retry logic, fallback images, and error handling.
   - Located at: `src/components/ui/EnhancedImage.tsx`
   - Features: Multiple retry attempts, alternative path testing, fallback images, and regular img tag fallback.

2. **VercelCompatibleImage**: An image component specifically optimized for Vercel deployment.
   - Located at: `src/components/ui/VercelCompatibleImage.tsx`
   - Features: Path normalization for Vercel, automatic unoptimized mode on Vercel, and fallback mechanisms.

3. **ImagePreloader**: Preloads critical images to improve perceived performance.
   - Located at: `src/components/ui/ImagePreloader.tsx`
   - Features: Parallel image loading, progress tracking, and graceful error handling.

4. **EmergencyImageLoader**: A last-resort image loader for troubleshooting.
   - Located at: `src/components/ui/EmergencyImageLoader.tsx`
   - Features: Multiple path variations, detailed debug info, and visual loading states.

5. **ImageDebugger**: A debugging tool for identifying image loading issues.
   - Located at: `src/components/ui/ImageDebugger.tsx`
   - Features: Real-time image tracking, error identification, and manual fix options.

6. **VercelImageFixer**: Automatically fixes image paths in Vercel environment.
   - Located at: `src/components/VercelImageFixer.tsx`
   - Features: DOM mutation observation, multiple path variations, and automatic fallback.

7. **ImageResolver**: Resolves image paths to ensure they load correctly.
   - Located at: `src/components/ImageResolver.tsx`
   - Features: Path normalization, error handling, and alternative path testing.

### Utilities

1. **vercelImageLoader**: Custom image loader optimized for Vercel.
   - Located at: `src/lib/utils/vercelImageLoader.ts`
   - Features: Path normalization, environment detection, and multiple loading strategies.

2. **CSS Fixes**: CSS rules to improve image display and provide fallbacks.
   - Located at: `public/css/image-fixes.css`
   - Features: Fallback styles, loading animations, and Vercel-specific fixes.

3. **Fallback Images**: Default placeholder images for failed loads.
   - Located at: `public/images/default-placeholder.jpg` and `public/images/default-placeholder.svg`

### Configuration Updates

1. **next.config.mjs**: Updated configuration for better image handling.
   - Features: 
     - Disabled image optimization for Vercel
     - Added domains and remote patterns
     - Configured caching headers
     - Added webpack loaders for image optimization

2. **Layout Updates**: Enhanced the root layout to use the new components.
   - Located at: `src/app/layout.tsx`
   - Features: Image preloading, CSP headers, and client-side image fixing.

## Usage

To use these enhanced image components in your project:

### Basic Usage

```tsx
import EnhancedImage from '@/components/ui/EnhancedImage';

// In your component
<EnhancedImage 
  src="/path/to/image.jpg"
  alt="Description"
  width={500}
  height={300}
/>
```

### Vercel-Specific Usage

```tsx
import VercelCompatibleImage from '@/components/ui/VercelCompatibleImage';

// In your component
<VercelCompatibleImage 
  src="/path/to/image.jpg"
  alt="Description"
  width={500}
  height={300}
/>
```

### Preloading Critical Images

```tsx
import ImagePreloader from '@/components/ui/ImagePreloader';

// In your component
<ImagePreloader 
  imagePaths={['/path/to/image1.jpg', '/path/to/image2.jpg']}
  onComplete={() => console.log('All images preloaded')}
>
  <YourComponent />
</ImagePreloader>
```

## Troubleshooting

If you encounter image loading issues:

1. Press `Ctrl+Shift+I` to toggle the image debugger (only works on Vercel environments)
2. Check the browser console for image loading errors
3. Try using the `EmergencyImageLoader` component with `showDebugInfo={true}` to diagnose specific images

## Build and Deployment

To build the project:

```bash
npm run build
```

To start the production server:

```bash
npm run start
```

## Dependencies

The project uses the following dependencies for image optimization:

- `file-loader`: For handling image files in webpack
- `image-webpack-loader`: For optimizing images during build
- `critters`: For CSS optimization

## License

This project is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.

# Uneom.com Website

Uneom.com is a website for a uniform manufacturing company based in Saudi Arabia.

## Netlify Forms Integration

The website uses Netlify Forms to handle form submissions. There are three forms implemented:

### 1. Contact Form
- **Component**: `src/components/forms/ContactForm.tsx`
- **Fields**: name, email, phone, subject, message
- **Form Name**: `contact`

### 2. Quote Form
- **Component**: `src/components/forms/QuoteForm.tsx`
- **Fields**: name, email, company, phone, product, quantity, requirements
- **Form Name**: `quote`

### 3. Request Information Form
- **Component**: `src/components/forms/RequestInfoForm.tsx`
- **Fields**: name, email, phone, industry, information, preferred_contact
- **Form Name**: `request-info`

## How Netlify Forms Work

1. Forms are defined in React components with the `data-netlify="true"` attribute
2. Pre-rendered HTML versions are placed in the `public/forms` directory and `public/index.html`
3. The `netlify.toml` file contains form configuration settings
4. Spam protection is enabled via honeypot fields

## Form Submission Handling

All form submissions are:
- Collected in the Netlify admin dashboard
- Redirected to a success page after submission
- Protected from spam with Netlify's built-in spam filtering

## Development

The site is built with:
- Next.js
- React
- Tailwind CSS
- Deployed on Netlify
