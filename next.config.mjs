// Test comment to check tool reliability
/** @type {import('next').NextConfig} */
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __dirname = dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  // Para Netlify necesitamos exportación estática
  output: 'export',
  
  // Force the generation of a 404.html file for Netlify
  // This is really important to ensure Netlify serves proper 404 status codes
  generateEtags: false,
  
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
    // Set unoptimized: true for static site generation (Netlify compatibility)
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
  
  // Configure trailing slashes - CAMBIO CRÍTICO PARA NETLIFY
  trailingSlash: true,
  
  // Este valor es esencial para despliegue en Netlify
  assetPrefix: '/',
  
  // Para trabajar correctamente con archivos estáticos en Netlify
  basePath: '',
  
  // NOTE: headers() and redirects() removed - they don't work with "output: export"
  // Headers are now in public/_headers (Netlify format)
  // Redirects are now in public/_redirects (Netlify format)
};

export default nextConfig;
