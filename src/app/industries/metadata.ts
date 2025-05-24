import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industry-Specific Uniform Solutions | UNEOM Saudi Arabia',
  description: 'Specialized uniform solutions for every industry sector in Saudi Arabia. Premium workwear tailored for healthcare, hospitality, corporate, education, manufacturing, and security industries.',
  // Removed generic meta keywords as they're no longer relevant for modern SEO
  openGraph: {
    title: 'Industry-Specific Uniform Solutions | UNEOM Saudi Arabia',
    description: 'Specialized uniform solutions for every industry sector in Saudi Arabia with premium quality and cultural considerations.',
    locale: 'en',
    type: 'website',
    images: [
      {
        url: '/images/banner-placeholder.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Industry-Specific Uniform Solutions'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industry-Specific Uniform Solutions | UNEOM Saudi Arabia',
    description: 'Specialized uniform solutions for every industry sector in Saudi Arabia',
    images: ['/images/banner-placeholder.jpg']
  },
  alternates: {
    canonical: 'https://uneom.com/industries/',
    languages: {
      'en': 'https://uneom.com/industries/',
      'ar': 'https://uneom.com/ar/industries/'
    }
  },
  robots: {
    index: true,
    follow: true
  }
};