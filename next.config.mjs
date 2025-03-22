/** @type {import('next').NextConfig} */
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __dirname = dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  // Comment out static export for development
  // output: 'export',
  
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
  // Configure trailing slashes
  trailingSlash: false,
  
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
  
  // Redirects for SEO optimization
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
      {
        source: '/category/:path*',
        destination: '/blog/categories/:path*', 
        permanent: true,
      },
      
      // English - Specific Sectors/Products
      {
        source: '/sectors/healthcare-uniforms',
        destination: '/industries/healthcare',
        permanent: true,
      },
      {
        source: '/sectors/corporate-uniforms',
        destination: '/industries/corporate',
        permanent: true,
      },
      {
        source: '/sectors/restaurant-uniforms',
        destination: '/industries/hospitality/restaurants',
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
        destination: '/industries/education',
        permanent: true,
      },
      {
        source: '/sectors/industrial-uniforms',
        destination: '/industries/factory-industry',
        permanent: true,
      },
      {
        source: '/sectors/uniform-factory',
        destination: '/industries/manufacturing',
        permanent: true,
      },
      {
        source: '/sectors/workers-uniform',
        destination: '/industries/factory-industry',
        permanent: true,
      },
      {
        source: '/sectors/uniform-factory-2',
        destination: '/industries/manufacturing',
        permanent: true,
      },
      {
        source: '/sectors/hospitality-uniforms',
        destination: '/industries/hospitality',
        permanent: true,
      },
      {
        source: '/sectors/school-uniforms',
        destination: '/industries/education',
        permanent: true,
      },
      {
        source: '/sectors/business-wear-uniform-companies',
        destination: '/industries/corporate',
        permanent: true,
      },
      {
        source: '/sectors/jackets-for-scrubs',
        destination: '/industries/healthcare',
        permanent: true,
      },
      {
        source: '/sectors/waitress-uniforms',
        destination: '/industries/hospitality/restaurants',
        permanent: true,
      },
      {
        source: '/sectors/uniform-for-security',
        destination: '/industries/security',
        permanent: true,
      },
      {
        source: '/sectors/company-uniforms',
        destination: '/industries/corporate',
        permanent: true,
      },
      {
        source: '/sectors/uniforms-for-hotels',
        destination: '/industries/hospitality',
        permanent: true,
      },
      {
        source: '/sectors/pilot-uniforms',
        destination: '/industries/aviation',
        permanent: true,
      },
      {
        source: '/sectors/professional-uniforms',
        destination: '/industries',
        permanent: true,
      },
      {
        source: '/sectors/med-scrubs',
        destination: '/industries/healthcare',
        permanent: true,
      },
      {
        source: '/sectors/medical-scrubs',
        destination: '/industries/healthcare',
        permanent: true,
      },
      {
        source: '/sectors/greys-anatomy-scrubs',
        destination: '/industries/healthcare',
        permanent: true,
      },
      {
        source: '/sectors/scrub-suits',
        destination: '/industries/healthcare',
        permanent: true,
      },
      {
        source: '/sectors/restaurants',
        destination: '/industries/hospitality/restaurants',
        permanent: true,
      },
      {
        source: '/sectors/aviation-uniforms',
        destination: '/industries/aviation',
        permanent: true,
      },
      
      // Blog redirects
      {
        source: '/blog/the-science-behind-uneoms-heat-resistant-industrial-uniforms',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/customizing-your-corporate-identity-uneoms-design-process-revealed',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/from-design-to-delivery-inside-uneoms-quality-control-process',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/uniform-maintenance-tips-expert-advice-from-uneoms-specialists',
        destination: '/blog',
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
      
      // Category redirects
      {
        source: '/category/blog',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/category/sectors',
        destination: '/industries',
        permanent: true,
      },
      
      // Arabic - Main Sections
      {
        source: '/ar/sectors/:path*',
        destination: '/ar/industries/:path*',
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
        destination: '/ar/industries/healthcare',
        permanent: true,
      },
      {
        source: '/ar/sectors/corporate-uniforms',
        destination: '/ar/industries/corporate',
        permanent: true,
      },
      {
        source: '/ar/sectors/restaurant-uniforms',
        destination: '/ar/industries/hospitality/restaurants',
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
        destination: '/ar/industries/education',
        permanent: true,
      },
      {
        source: '/ar/sectors/industrial-uniforms',
        destination: '/ar/industries/factory-industry',
        permanent: true,
      },
      {
        source: '/ar/sectors/uniform-factory',
        destination: '/ar/industries/manufacturing',
        permanent: true,
      },
      {
        source: '/ar/sectors/workers-uniform',
        destination: '/ar/industries/factory-industry',
        permanent: true,
      },
      {
        source: '/ar/sectors/uniform-factory-2',
        destination: '/ar/industries/manufacturing',
        permanent: true,
      },
      {
        source: '/ar/sectors/hospitality-uniforms',
        destination: '/ar/industries/hospitality',
        permanent: true,
      },
      
      // Arabic blog redirects with encoded URLs
      {
        source: '/ar/blog/%d8%aa%d8%ac%d8%b1%d8%a8%d8%a9-%d9%8a%d9%88%d9%86%d9%8a%d9%88%d9%85-%d9%85%d8%b9-%d8%a7%d9%84%d9%82%d8%b7%d8%a7%d8%b9-%d8%a7%d9%84%d8%b7%d8%a8%d9%8a-%d8%af%d9%84%d9%8a%d9%84%d9%83-%d9%84%d8%a7%d8%ae',
        destination: '/ar/blog',
        permanent: true,
      },
      {
        source: '/ar/blog/%d8%a3%d9%81%d8%b6%d9%84-%d8%a7%d9%84%d8%a3%d9%82%d9%85%d8%b4%d8%a9-%d8%a7%d9%84%d9%85%d9%86%d8%a7%d8%b3%d8%a8%d8%a9-%d9%84%d9%84%d9%85%d9%86%d8%a7%d8%ae-%d8%a7%d9%84%d8%b3%d8%b9%d9%88%d8%af%d9%8a',
        destination: '/ar/blog',
        permanent: true,
      },
      {
        source: '/ar/blog/%d9%83%d9%8a%d9%81-%d9%8a%d8%ba%d9%8a%d8%b1-%d8%a7%d9%84%d8%b2%d9%8a-%d8%a7%d9%84%d9%85%d9%88%d8%ad%d8%af-%d9%85%d8%b3%d8%aa%d9%82%d8%a8%d9%84-%d8%b4%d8%b1%d9%83%d8%aa%d9%83',
        destination: '/ar/blog',
        permanent: true,
      },
      {
        source: '/ar/blog/%d8%a3%d8%b3%d8%b1%d8%a7%d8%b1-%d9%86%d8%ac%d8%a7%d8%ad-%d8%a7%d9%84%d8%b2%d9%8a-%d8%a7%d9%84%d9%85%d8%af%d8%b1%d8%b3%d9%8a-%d9%81%d9%8a-%d8%aa%d8%ad%d8%b3%d9%8a%d9%86-%d8%a3%d8%af%d8%a7%d8%a1-%d8%a7',
        destination: '/ar/blog',
        permanent: true,
      },
      
      // Arabic - Pages
      {
        source: '/ar/contact-us',
        destination: '/ar/contact',
        permanent: true,
      },
      {
        source: '/ar/request-a-quote',
        destination: '/ar/quote',
        permanent: true,
      },
      {
        source: '/ar/services',
        destination: '/ar/services',
        permanent: true,
      },
      {
        source: '/ar/faqs',
        destination: '/ar/resources/faqs',
        permanent: true,
      },
      {
        source: '/ar/about-us',
        destination: '/ar/about',
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
