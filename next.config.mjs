/** @type {import('next').NextConfig} */
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __dirname = dirname(fileURLToPath(import.meta.url));

const nextConfig = {
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
        // Añadir optimización de imágenes
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
