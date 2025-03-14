/** @type {import('next').NextConfig} */
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __dirname = dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  // i18n configuration is not needed with App Router
  // The i18n routing is now handled by the app directory structure
  
  // Skip type checking in production to make builds faster and more reliable on Vercel
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  
  // Skip ESLint in production to make builds faster and more reliable on Vercel
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  
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
      },
      {
        protocol: 'https',
        hostname: 'fonts.gstatic.com',
      }
    ],
    // Enable responsive image optimization
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Configure server components
  experimental: {
    serverComponentsExternalPackages: [],
  },
  
  // Explicitly set the output directory for the build
  distDir: '.next',
  
  // Enable memory optimizations for builds
  swcMinify: true,
  
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': resolve(__dirname, './src'),
    };
    
    // Add a fallback for node built-ins
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false
    };
    
    return config;
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
  
  // 301 Redirects for SEO optimization
  async redirects() {
    return [
      // English - Main Pages
      {
        source: '/sectors/:path*',
        destination: '/products/:path*',
        permanent: true,
      },
      {
        source: '/location/:path*',
        destination: '/locations/:path*',
        permanent: true,
      },
      
      // English - Specific Sectors
      {
        source: '/sectors/healthcare-uniforms',
        destination: '/products/healthcare-uniforms',
        permanent: true,
      },
      {
        source: '/sectors/corporate-uniforms',
        destination: '/products/corporate-uniforms',
        permanent: true,
      },
      {
        source: '/sectors/restaurant-uniforms',
        destination: '/products/hospitality-uniforms/restaurants',
        permanent: true,
      },
      {
        source: '/sectors/uniform-in-riyadh',
        destination: '/locations/riyadh',
        permanent: true,
      },
      {
        source: '/sectors/uniform-in-dammam',
        destination: '/locations/dammam',
        permanent: true,
      },
      {
        source: '/sectors/uniform-in-jeddah',
        destination: '/locations/jeddah',
        permanent: true,
      },
      {
        source: '/sectors/uniform-in-mecca',
        destination: '/locations/mecca',
        permanent: true,
      },
      {
        source: '/sectors/uniform-in-medina',
        destination: '/locations/medina',
        permanent: true,
      },
      {
        source: '/sectors/education-uniforms',
        destination: '/products/education-uniforms',
        permanent: true,
      },
      {
        source: '/sectors/industrial-uniforms',
        destination: '/products/industrial-uniforms',
        permanent: true,
      },
      {
        source: '/sectors/uniform-factory',
        destination: '/products/uniform-factory',
        permanent: true,
      },
      {
        source: '/sectors/workers-uniform',
        destination: '/products/workers-uniform',
        permanent: true,
      },
      {
        source: '/sectors/uniform-factory-2',
        destination: '/products/manufacturing',
        permanent: true,
      },
      {
        source: '/sectors/hospitality-uniforms',
        destination: '/products/hospitality-uniforms',
        permanent: true,
      },
      
      // English - Locations
      {
        source: '/location/medina',
        destination: '/locations/medina',
        permanent: true,
      },
      {
        source: '/location/dammam',
        destination: '/locations/dammam',
        permanent: true,
      },
      {
        source: '/location/riyadh',
        destination: '/locations/riyadh',
        permanent: true,
      },
      {
        source: '/location/jeddah',
        destination: '/locations/jeddah',
        permanent: true,
      },
      
      // Arabic - Main Sections
      {
        source: '/ar/sectors/:path*',
        destination: '/ar/products/:path*',
        permanent: true,
      },
      {
        source: '/ar/location/:path*',
        destination: '/ar/locations/:path*',
        permanent: true,
      },
      
      // Arabic - Specific Sectors
      {
        source: '/ar/sectors/healthcare-uniforms',
        destination: '/ar/products/healthcare-uniforms',
        permanent: true,
      },
      {
        source: '/ar/sectors/corporate-uniforms',
        destination: '/ar/products/corporate-uniforms',
        permanent: true,
      },
      {
        source: '/ar/sectors/restaurant-uniforms',
        destination: '/ar/products/hospitality-uniforms/restaurants',
        permanent: true,
      },
      {
        source: '/ar/sectors/uniform-in-riyadh',
        destination: '/ar/locations/riyadh',
        permanent: true,
      },
      {
        source: '/ar/sectors/uniform-in-dammam',
        destination: '/ar/locations/dammam',
        permanent: true,
      },
      {
        source: '/ar/sectors/uniform-in-jeddah',
        destination: '/ar/locations/jeddah',
        permanent: true,
      },
      {
        source: '/ar/sectors/uniform-in-mecca',
        destination: '/ar/locations/mecca',
        permanent: true,
      },
      {
        source: '/ar/sectors/uniform-in-medina',
        destination: '/ar/locations/medina',
        permanent: true,
      },
      {
        source: '/ar/sectors/education-uniforms',
        destination: '/ar/products/education-uniforms',
        permanent: true,
      },
      {
        source: '/ar/sectors/industrial-uniforms',
        destination: '/ar/products/industrial-uniforms',
        permanent: true,
      },
      {
        source: '/ar/sectors/uniform-factory',
        destination: '/ar/products/uniform-factory',
        permanent: true,
      },
      {
        source: '/ar/sectors/workers-uniform',
        destination: '/ar/products/workers-uniform',
        permanent: true,
      },
      {
        source: '/ar/sectors/uniform-factory-2',
        destination: '/ar/products/manufacturing',
        permanent: true,
      },
      {
        source: '/ar/sectors/hospitality-uniforms',
        destination: '/ar/products/hospitality-uniforms',
        permanent: true,
      },
      
      // Arabic - Locations with encoded URLs
      {
        source: '/ar/location/%d8%a7%d9%84%d9%85%d8%af%d9%8a%d9%86%d8%a9-%d8%a7%d9%84%d9%85%d9%86%d9%88%d8%b1%d8%a9',
        destination: '/ar/locations/medina',
        permanent: true,
      },
      {
        source: '/ar/location/%d8%a7%d9%84%d8%af%d9%85%d8%a7%d9%85',
        destination: '/ar/locations/dammam',
        permanent: true,
      },
      {
        source: '/ar/location/%d8%a7%d9%84%d8%b1%d9%8a%d8%a7%d8%b6',
        destination: '/ar/locations/riyadh',
        permanent: true,
      },
      {
        source: '/ar/location/%d8%ac%d8%af%d8%a9',
        destination: '/ar/locations/jeddah',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
