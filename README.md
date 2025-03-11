# UNEOM - Clothing Manufacturing Company

This is a Next.js project for UNEOM, a premium clothing manufacturing company specializing in uniforms and workwear. The website is deployed at [uneom.com](https://uneom.com).

## Getting Started

First, run the development server:

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/src/app` - Application routes and pages using Next.js App Router
- `/src/components` - Reusable UI components
- `/src/contexts` - React contexts for state management
- `/src/app/api` - API routes and serverless functions

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in the required values:

```bash
cp .env.local.example .env.local
```

## Deployment on Vercel

This project is optimized for deployment on Vercel. The repository includes:

- `vercel.json` configuration file with optimized settings
- Headers configuration for security and caching
- Domain configuration for uneom.com
- Cron job setup for scheduled tasks

### Deployment Steps

1. Connect your GitHub repository to Vercel
2. Set up required environment variables in the Vercel dashboard
3. Configure the custom domain uneom.com in Vercel project settings
4. Deploy automatically on push to the main branch

### Vercel Cron Jobs

The project includes a daily cleanup cron job that runs at midnight. To set up:

1. Add the `CRON_SECRET_TOKEN` environment variable in your Vercel project settings
2. Vercel will automatically schedule and run the cron job based on the configuration in `vercel.json`

## Performance Optimizations

- Properly configured cache headers for static assets
- Region-specific deployments for faster response times
- Image optimization with Next.js Image component
- Domain-specific redirects and route handling

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Cron Jobs](https://vercel.com/docs/cron-jobs)
- [Vercel Custom Domains](https://vercel.com/docs/concepts/projects/domains)
