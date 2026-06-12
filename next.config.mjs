// Test comment to check tool reliability
/** @type {import('next').NextConfig} */
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __dirname = dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  // Firebase App Hosting — SSR/ISR mode (no static export)
  // This enables: API Routes, Middleware, ISR, Server Actions, Image Optimization
  generateEtags: true,
  
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
  
  // Configure image optimization
  images: {
    // Disable Next.js image optimization API completely to fix broken images on Firebase App Hosting
    unoptimized: true,
    domains: [
      'uneom.com',
      'uneom-com.vercel.app',
      'vercel.app',
      'localhost',
      '127.0.0.1',
      'i.imgur.com',
      'fonts.gstatic.com',
      'lh3.googleusercontent.com',
      'assets.vercel.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'uneom.com',
      },
      {
        protocol: 'https',
        hostname: '**.uneom.com',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      }
    ],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60 * 60 * 24 * 7, // 7 days
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    path: '/_next/image',
    loader: 'default',
    disableStaticImages: false,
  },
  
  // Configure server components - May 2025 Optimizations
  experimental: {
    optimizeCss: false, // Disabled due to build issues with static export
    scrollRestoration: true,
    serverComponentsExternalPackages: ['web-vitals'],
    optimizePackageImports: ['@/components', '@/lib'],
    webVitalsAttribution: ['CLS', 'LCP', 'FCP', 'FID', 'TTFB'],
    instrumentationHook: true,
    ppr: false, // Partial Prerendering - enable when stable
  },
  
  // Fix NextRouter not mounted issue for static export
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Explicitly set the output directory for the build
  distDir: '.next',
  
  // Enable memory optimizations for builds
  swcMinify: true,
  
  // Configure webpack
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
    
    // Add support for image file types
    // config.module.rules.push({
    //   test: /\.(png|jpe?g|gif|svg|webp|avif)$/i,
    //   use: [
    //     {
    //       loader: 'file-loader',
    //       options: {
    //         name: '[name].[hash].[ext]',
    //         outputPath: 'static/images/',
    //         publicPath: '/_next/static/images/'
    //       }
    //     },
    //     // Add image optimization
    //     {
    //       loader: 'image-webpack-loader',
    //       options: {
    //         disable: process.env.NODE_ENV === 'development',
    //         mozjpeg: {
    //           progressive: true,
    //           quality: 65
    //         },
    //         optipng: {
    //           enabled: false,
    //         },
    //         pngquant: {
    //           quality: [0.65, 0.90],
    //           speed: 4
    //         },
    //         gifsicle: {
    //           interlaced: false,
    //         },
    //         webp: {
    //           quality: 75
    //         }
    //       }
    //     }
    //   ]
    // });
    
    return config;
  },
  
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Preserve trailing slashes to prevent 301 redirect storm during migration
  trailingSlash: true,
  
  assetPrefix: '/',
  basePath: '',
  
  async redirects() {
    return [
      // Consolidate Legal Pages
      {
        source: '/privacy/',
        destination: '/privacy-policy/',
        permanent: true,
      },
      {
        source: '/ar/privacy/',
        destination: '/ar/privacy-policy/',
        permanent: true,
      },
      {
        source: '/terms/',
        destination: '/terms-of-service/',
        permanent: true,
      },
      {
        source: '/ar/terms/',
        destination: '/ar/terms-of-service/',
        permanent: true,
      },
      {
        source: '/terms-conditions/',
        destination: '/terms-of-service/',
        permanent: true,
      },
      {
        source: '/ar/terms-conditions/',
        destination: '/ar/terms-of-service/',
        permanent: true,
      },
      // Legacy /sectors/ architecture still indexed by Google (e.g.
      // /sectors/education/, /sectors/business-wear-uniform-companies/).
      // Map known slugs to their /industries/ successors, then catch all.
      {
        source: '/sectors/business-wear-uniform-companies/',
        destination: '/industries/corporate/',
        permanent: true,
      },
      {
        source: '/ar/sectors/business-wear-uniform-companies/',
        destination: '/ar/industries/corporate/',
        permanent: true,
      },
      {
        source: '/sectors/:slug/',
        destination: '/industries/:slug/',
        permanent: true,
      },
      {
        source: '/ar/sectors/:slug/',
        destination: '/ar/industries/:slug/',
        permanent: true,
      },
      {
        source: '/sectors/',
        destination: '/industries/',
        permanent: true,
      },
      {
        source: '/ar/sectors/',
        destination: '/ar/industries/',
        permanent: true,
      },
      // City slug aliases — old links used jubail/jizan while the canonical
      // slugs in SAUDI_CITIES are al-jubail/jazan.
      {
        source: '/locations/jubail/:path*',
        destination: '/locations/al-jubail/:path*',
        permanent: true,
      },
      {
        source: '/ar/locations/jubail/:path*',
        destination: '/ar/locations/al-jubail/:path*',
        permanent: true,
      },
      {
        source: '/locations/jizan/:path*',
        destination: '/locations/jazan/:path*',
        permanent: true,
      },
      {
        source: '/ar/locations/jizan/:path*',
        destination: '/ar/locations/jazan/:path*',
        permanent: true,
      },
      // Dead-link aliases surfaced by the full-site crawl: content pages
      // reference shop categories / utility routes that never existed.
      // Map each to its closest real destination.
      { source: '/shop/education/', destination: '/shop/education-uniforms/', permanent: true },
      { source: '/ar/shop/education/', destination: '/ar/shop/education-uniforms/', permanent: true },
      { source: '/shop/manufacturing-attire/', destination: '/shop/industrial-uniforms/', permanent: true },
      { source: '/ar/shop/manufacturing-attire/', destination: '/ar/shop/industrial-uniforms/', permanent: true },
      { source: '/ar/shop/manufacturing-workwear/', destination: '/ar/shop/industrial-uniforms/', permanent: true },
      { source: '/ar/shop/corporate-uniforms/', destination: '/ar/shop/corporate-workwear/', permanent: true },
      { source: '/shop/medical-scrubs/nursing-scrubs/', destination: '/shop/medical-scrubs/', permanent: true },
      { source: '/industries/beauty-salons/', destination: '/industries/', permanent: true },
      { source: '/ar/services/consultations/', destination: '/ar/contact/', permanent: false },
      { source: '/ar/subscribe/', destination: '/ar/contact/', permanent: false },
      { source: '/resources/events/:slug/', destination: '/resources/events/', permanent: false },
      { source: '/ar/resources/events/:slug/', destination: '/ar/resources/events/', permanent: false },
      // (Arabic twins for corporate-uniforms-brand-perception,
      // fabrics-professional-attire, future-aviation-uniforms-gcc and
      // industrial-protective-clothing-advances now exist as full
      // translations — their temporary redirects to /ar/blog/ were removed.)
      // Redirect any stale shop product IDs that might have changed
      // This is a catch-all to prevent 404s for old catalog items
      // Example: If an item existed at /shop/category/old-id, it will now hit the dynamic route
      // which handles the 404 gracefully, but we can add specific high-traffic redirects here if needed.
    ];
  },
  // ============================================
  // SECURITY & PERFORMANCE HEADERS (Firebase App Hosting + Cloud CDN)
  // Migrated from public/_headers (Netlify) to next.config.mjs
  // ============================================
  async headers() {
    return [
      // Global security headers
      {
        source: '/(.*)',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self)' },
        ],
      },
      // Static assets — immutable long cache (Cloud CDN respects s-maxage)
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, s-maxage=31536000, immutable' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      },
      // Font files — immutable
      {
        source: '/:path*.woff2',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // ISR pages — CDN caches for 1 hour, stale-while-revalidate
      {
        source: '/locations/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, s-maxage=3600, stale-while-revalidate=60' },
        ],
      },
      // Shop pages — CDN caches for 6 hours
      {
        source: '/shop/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, s-maxage=21600, stale-while-revalidate=120' },
        ],
      },
      // Blog — CDN caches for 24 hours
      {
        source: '/blog/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, s-maxage=86400, stale-while-revalidate=300' },
        ],
      },
      // Utility files — noindex
      {
        source: '/css/image-fixes.css',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
      },
    ];
  },
};

export default nextConfig;
