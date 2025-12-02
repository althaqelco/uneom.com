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
  
  // Configure headers for better performance and security - May 2025 Standards
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
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
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, max-age=0',
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
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'cross-origin',
          },
        ],
      },
      {
        source: '/:path*\\.(css|js|woff|woff2|ttf|eot)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/manifest.json',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400',
          },
          {
            key: 'Content-Type',
            value: 'application/manifest+json',
          },
        ],
      },
      {
        source: '/css/image-fixes.css',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
        ],
      },
      {
        source: '/js/404-checker.js',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
        ],
      },
      {
        source: '/js/image-handler.js',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
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
  
  // Configure redirects
  async redirects() {
    return [
      // Redirect for /ar to /ar/ (ensuring trailing slash for Arabic base path)
      // Commenting out as trailingSlash:true should handle this for the /ar route.
      // This might be causing a loop with the built-in trailingSlash behavior.
      // {
      //   source: '/ar',
      //   destination: '/ar/',
      //   permanent: true,
      // },

      // Redirects for About Us
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
      // Redirects for Contact Us
      {
        source: '/contact-us',
        destination: '/contact/',
        permanent: true,
      },
      {
        source: '/contactus',
        destination: '/contact/',
        permanent: true,
      },
      {
        source: '/ar/contactus',
        destination: '/ar/contact/',
        permanent: true,
      },
      // Redirects for Quote page - trailingSlash:true handles /quote -> /quote/
      {
        source: '/request-a-quote',
        destination: '/quote/',
        permanent: true,
      },
      {
        source: '/book-a-demo',
        destination: '/quote/',
        permanent: true,
      },
      // Redirects for FAQ page - trailingSlash:true handles /faq -> /faq/
      {
        source: '/faqs',
        destination: '/faq/',
        permanent: true,
      },
      // Redirects for Industry Pages aliases/consolidations
      {
        source: '/industries/supply-manufacturing',
        destination: '/industries/manufacturing/',
        permanent: true,
      },
      {
        source: '/ar/industries/supply-manufacturing',
        destination: '/ar/industries/manufacturing/',
        permanent: true,
      },
      {
        source: '/industries/factory-industry',
        destination: '/industries/manufacturing/',
        permanent: true,
      },
      {
        source: '/ar/industries/factory-industry',
        destination: '/ar/industries/manufacturing/',
        permanent: true,
      },
      // NOTE: Industries landing page trailing slash redirects removed
      // trailingSlash: true in config handles this automatically
      // Redirects for Service Pages
      {
        source: '/services-page',
        destination: '/services/',
        permanent: true,
      },
      // Redirects for Location Pages (ensuring trailing slashes for key paths)
      {
        source: '/ar/locations',
        destination: '/ar/locations/',
        permanent: true,
      },
      {
        source: '/locations/riyadh',
        destination: '/locations/riyadh/',
        permanent: true,
      },
      {
        source: '/ar/locations/riyadh',
        destination: '/ar/locations/riyadh/',
        permanent: true,
      },
      {
        source: '/locations/jeddah',
        destination: '/locations/jeddah/',
        permanent: true,
      },
      {
        source: '/ar/locations/jeddah',
        destination: '/ar/locations/jeddah/',
        permanent: true,
      },
      {
        source: '/locations/dammam',
        destination: '/locations/dammam/',
        permanent: true,
      },
      {
        source: '/ar/locations/dammam',
        destination: '/ar/locations/dammam/',
        permanent: true,
      },
      {
        source: '/locations/mecca',
        destination: '/locations/mecca/',
        permanent: true,
      },
      {
        source: '/ar/locations/mecca',
        destination: '/ar/locations/mecca/',
        permanent: true,
      },
      {
        source: '/locations/medina',
        destination: '/locations/medina/',
        permanent: true,
      },
      {
        source: '/ar/locations/medina',
        destination: '/ar/locations/medina/',
        permanent: true,
      },
      // Redirect for main Arabic shop page (ensuring trailing slash)
      // Commenting out this redirect as it might be causing an infinite redirect loop
      // {
      //   source: '/ar/shop',
      //   destination: '/ar/shop/',
      //   permanent: true,
      // },
      // Redirects for problematic product URLs (related-product-n and product-n)
      {
        source: '/shop/:category*/related-product-:n(.*)',
        destination: '/shop/:category*/',
        permanent: true,
      },
      {
        source: '/ar/shop/:category*/related-product-:n(.*)',
        destination: '/ar/shop/:category*/',
        permanent: true,
      },
      {
        source: '/shop/:category*/product-:n(.*)',
        destination: '/shop/:category*/',
        permanent: true,
      },
      {
        source: '/ar/shop/:category*/product-:n(.*)',
        destination: '/ar/shop/:category*/',
        permanent: true,
      },
      // Blog related redirects (trailing slashes, date archives, pagination, specific old posts)
      // {
      //   source: '/ar/blog',
      //   destination: '/ar/blog/',
      //   permanent: true,
      // },
      // {
      //   source: '/blog/:year(\\d{4})',
      //   destination: '/blog/',
      //   permanent: true,
      // },
      // {
      //   source: '/blog/:year(\\d{4})/:month(\\d{1,2})',
      //   destination: '/blog/',
      //   permanent: true,
      // },
      // {
      //   source: '/ar/blog/:year(\\d{4})',
      //   destination: '/ar/blog/',
      //   permanent: true,
      // },
      // {
      //   source: '/ar/blog/:year(\\d{4})/:month(\\d{1,2})',
      //   destination: '/ar/blog/',
      //   permanent: true,
      // },
      {
        source: '/blog/page/1',
        destination: '/blog/',
        permanent: true,
      },
      {
        source: '/ar/blog/page/1',
        destination: '/ar/blog/',
        permanent: true,
      },
      {
        source: '/blog/the-science-behind-uneoms-heat-resistant-industrial-uniforms',
        destination: '/blog/',
        permanent: true,
      },
      {
        source: '/blog/customizing-your-corporate-identity-uneoms-design-process-revealed',
        destination: '/blog/',
        permanent: true,
      },
      {
        source: '/blog/from-design-to-delivery-inside-uneoms-quality-control-process',
        destination: '/blog/',
        permanent: true,
      },
      {
        source: '/blog/uniform-maintenance-tips-expert-advice-from-uneoms-specialists',
        destination: '/blog/',
        permanent: true,
      },
      {
        source: '/ar/blog/%d8%aa%d8%ac%d8%b1%d8%a8%d8%a9-%d9%8a%d9%88%d9%86%d9%8a%d9%88%d9%85-%d9%85%d8%b9-%d8%a7%d9%84%d9%82%d8%b7%d8%a7%d8%b9-%d8%a7%d9%84%d8%b7%d8%a8%d9%8a-%d8%af%d9%84%d9%8a%d9%84%d9%83-%d9%84%d8%a7%d8%ae',
        destination: '/ar/blog/',
        permanent: true,
      },
      {
        source: '/ar/blog/%d8%a3%d9%81%d8%b6%d9%84-%d8%a7%d9%84%d8%a3%d9%82%d9%85%d8%b4%d8%a9-%d8%a7%d9%84%d9%85%d9%86%d8%a7%d8%b3%d8%a8%d8%a9-%d9%84%d9%84%d9%85%d9%86%d8%a7%d8%ae-%d8%a7%d9%84%d8%b3%d8%b9%d9%88%d8%af%d9%8a',
        destination: '/ar/blog/',
        permanent: true,
      },
      {
        source: '/ar/blog/%d9%83%d9%8a%d9%81-%d9%8a%d8%ba%d9%8a%d8%b1-%d8%a7%d9%84%d8%b2%d9%8a-%d8%a7%d9%84%d9%85%d9%88%d8%ad%d8%af-%d9%85%d8%b3%d8%aa%d9%82%d8%a8%d9%84-%d8%b4%d8%b1%d9%83%d8%aa%d9%83',
        destination: '/ar/blog/',
        permanent: true,
      },
      {
        source: '/ar/blog/%d8%a3%d8%b3%d8%b1%d8%a7%d8%b1-%d9%86%d8%ac%d8%a7%d8%ad-%d8%a7%d9%84%d8%b2%d9%8a-%d8%a7%d9%84%d9%85%d8%af%d8%b1%d8%b3%d9%8a-%d9%81%d9%8a-%d8%aa%d8%ad%d8%b3%d9%8a%d9%86-%d8%a3%d8%af%d8%a7%d8%a1-%d8%a7',
        destination: '/ar/blog/',
        permanent: true,
      },
      // General alias redirects (sitemap, careers, search, categories)
      {
        source: '/sitemap',
        destination: '/', // Or /sitemap.xml if preferred, roadmap suggests / or remove
        permanent: true,
      },
      {
        source: '/careers',
        destination: '/about/',
        permanent: true,
      },
      {
        source: '/ar/careers',
        destination: '/ar/about/',
        permanent: true,
      },
      {
        source: '/search',
        destination: '/',
        permanent: true,
      },
      {
        source: '/ar/search',
        destination: '/ar/',
        permanent: true,
      },
      {
        source: '/categories',
        destination: '/shop/',
        permanent: true,
      },
      {
        source: '/ar/categories',
        destination: '/ar/shop/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
