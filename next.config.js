/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['uneom.com', 'localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  async redirects() {
    return [
      // Factory Industry redirects to Manufacturing
      {
        source: '/industries/factory-industry',
        destination: '/industries/manufacturing/',
        permanent: true,
      },
      {
        source: '/industries/factory-industry/',
        destination: '/industries/manufacturing/',
        permanent: true,
      },
      {
        source: '/ar/industries/factory-industry',
        destination: '/ar/industries/manufacturing/',
        permanent: true,
      },
      {
        source: '/ar/industries/factory-industry/',
        destination: '/ar/industries/manufacturing/',
        permanent: true,
      },
      
      // Supply Manufacturing redirects to Manufacturing
      {
        source: '/industries/supply-manufacturing',
        destination: '/industries/manufacturing/',
        permanent: true,
      },
      {
        source: '/industries/supply-manufacturing/',
        destination: '/industries/manufacturing/',
        permanent: true,
      },
      {
        source: '/ar/industries/supply-manufacturing',
        destination: '/ar/industries/manufacturing/',
        permanent: true,
      },
      {
        source: '/ar/industries/supply-manufacturing/',
        destination: '/ar/industries/manufacturing/',
        permanent: true,
      },

      // Quote page redirects (ensure trailing slash)
      {
        source: '/quote',
        destination: '/quote/',
        permanent: true,
      },
      {
        source: '/ar/quote',
        destination: '/ar/quote/',
        permanent: true,
      },
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

      // Industries page redirects (ensure trailing slash)
      {
        source: '/industries',
        destination: '/industries/',
        permanent: true,
      },
      {
        source: '/ar/industries',
        destination: '/ar/industries/',
        permanent: true,
      },

      // About page redirects
      {
        source: '/about',
        destination: '/about/',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about/',
        permanent: true,
      },
      {
        source: '/ar/about',
        destination: '/ar/about/',
        permanent: true,
      },
      {
        source: '/ar/about-us',
        destination: '/ar/about/',
        permanent: true,
      },

      // Contact page redirects
      {
        source: '/contact',
        destination: '/contact/',
        permanent: true,
      },
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
        source: '/ar/contact',
        destination: '/ar/contact/',
        permanent: true,
      },
      {
        source: '/ar/contactus',
        destination: '/ar/contact/',
        permanent: true,
      },

      // FAQ redirects
      {
        source: '/faq',
        destination: '/faq/',
        permanent: true,
      },
      {
        source: '/faqs',
        destination: '/faq/',
        permanent: true,
      },
      {
        source: '/ar/faq',
        destination: '/ar/faq/',
        permanent: true,
      },

      // Services redirects
      {
        source: '/services',
        destination: '/services/',
        permanent: true,
      },
      {
        source: '/services-page',
        destination: '/services/',
        permanent: true,
      },
      {
        source: '/ar/services',
        destination: '/ar/services/',
        permanent: true,
      },

      // Shop redirects
      {
        source: '/shop',
        destination: '/shop/',
        permanent: true,
      },
      {
        source: '/ar/shop',
        destination: '/ar/shop/',
        permanent: true,
      },

      // Blog redirects
      {
        source: '/blog',
        destination: '/blog/',
        permanent: true,
      },
      {
        source: '/ar/blog',
        destination: '/ar/blog/',
        permanent: true,
      },

      // Resources redirects
      {
        source: '/resources',
        destination: '/resources/',
        permanent: true,
      },
      {
        source: '/ar/resources',
        destination: '/ar/resources/',
        permanent: true,
      },

      // Location redirects
      {
        source: '/locations',
        destination: '/locations/',
        permanent: true,
      },
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

      // Privacy and Terms redirects
      {
        source: '/privacy-policy',
        destination: '/privacy-policy/',
        permanent: true,
      },
      {
        source: '/ar/privacy-policy',
        destination: '/ar/privacy-policy/',
        permanent: true,
      },
      {
        source: '/terms-of-service',
        destination: '/terms-of-service/',
        permanent: true,
      },
      {
        source: '/ar/terms-of-service',
        destination: '/ar/terms-of-service/',
        permanent: true,
      },

      // Category redirects
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

      // Search redirects
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

      // Sitemap redirect
      {
        source: '/sitemap',
        destination: '/',
        permanent: true,
      },

      // Careers redirect
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

      // Blog date archives redirects
      {
        source: '/blog/:year(\\d{4})',
        destination: '/blog/',
        permanent: true,
      },
      {
        source: '/blog/:year(\\d{4})/:month(\\d{1,2})',
        destination: '/blog/',
        permanent: true,
      },
      {
        source: '/ar/blog/:year(\\d{4})',
        destination: '/ar/blog/',
        permanent: true,
      },
      {
        source: '/ar/blog/:year(\\d{4})/:month(\\d{1,2})',
        destination: '/ar/blog/',
        permanent: true,
      },

      // Blog pagination redirects
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
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig