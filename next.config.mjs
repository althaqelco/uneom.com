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
  
  // i18n configuration - this is commented out because we're using app router with [locale] parameter
  // but the configuration below documents our approach for reference
  /* 
  i18n: {
    // These are all the locales you want to support
    locales: ['en', 'ar'],
    // The default locale is English - no /en/ prefix
    defaultLocale: 'en',
    // We don't use automatic locale detection
    localeDetection: false,
  },
  */
  
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
  
  // Configure server components
  experimental: {
    optimizeCss: false,
    scrollRestoration: true,
    serverComponentsExternalPackages: [],
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
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|webp|avif)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'static/images/',
            publicPath: '/_next/static/images/'
          }
        },
        // Add image optimization
        {
          loader: 'image-webpack-loader',
          options: {
            disable: process.env.NODE_ENV === 'development',
            mozjpeg: {
              progressive: true,
              quality: 65
            },
            optipng: {
              enabled: false,
            },
            pngquant: {
              quality: [0.65, 0.90],
              speed: 4
            },
            gifsicle: {
              interlaced: false,
            },
            webp: {
              quality: 75
            }
          }
        }
      ]
    });
    
    return config;
  },
  
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Configure trailing slashes - CRITICAL FOR SEO AND NETLIFY
  trailingSlash: true,
  
  // Este valor es esencial para despliegue en Netlify
  assetPrefix: '/',
  
  // Para trabajar correctamente con archivos estáticos en Netlify
  basePath: '',
  
  // Configure headers for better image loading
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
      {
        source: '/_next/image/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ];
  },
  
  // Redirects for SEO optimization - these will work in development but not in static export
  // For static export, see the redirects in netlify.toml
  async redirects() {
    // Don't return redirects if using static export
    if (process.env.NEXT_PHASE === 'phase-export') {
      return [];
    }
    
    // Otherwise return the full list of redirects for development
    return [
      // Basic redirects that should work in development
      {
        source: '/en/:path*',
        destination: '/:path*',
        permanent: true,
      },
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
      {
        source: '/category/:path*',
        destination: '/blog/categories/:path*', 
        permanent: true,
      },
      
      // Arabic - Main Pages
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
      {
        source: '/ar/category/:path*',
        destination: '/ar/blog/categories/:path*',
        permanent: true,
      },
      
      // Common redirects
      {
        source: '/about-us',
        destination: '/about/',
        permanent: true,
      },
      {
        source: '/ar/about-us',
        destination: '/ar/about/',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact/',
        permanent: true,
      },
      {
        source: '/ar/contact-us',
        destination: '/ar/contact/',
        permanent: true,
      },
      {
        source: '/request-a-quote',
        destination: '/quote/',
        permanent: true,
      },
      {
        source: '/ar/request-a-quote',
        destination: '/ar/quote/',
        permanent: true,
      },
      {
        source: '/faqs',
        destination: '/faq/',
        permanent: true,
      },
      {
        source: '/ar/faqs',
        destination: '/ar/faq/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
