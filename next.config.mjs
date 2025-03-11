/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n configuration is not needed with App Router
  // The i18n routing is now handled by the app directory structure
  
  // Set up image optimization for all image domains
  images: {
    // Replacing domains with remotePatterns as recommended
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'uneom.com',
      },
      {
        protocol: 'https',
        hostname: '*.uneom.com',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      }
    ],
    // Enable responsive image optimization
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  // Configure trailing slashes
  trailingSlash: false,
  // Enhance security with headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
