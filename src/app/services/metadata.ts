import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Uniform Services | Custom Workwear Solutions | UNEOM Saudi Arabia',
  description: 'Comprehensive uniform services in Saudi Arabia including custom design, bulk manufacturing, embroidery, delivery, fitting, and maintenance for all professional sectors.',
  keywords: 'uniform services Saudi Arabia, custom workwear solutions, professional uniform design, bulk uniform manufacturing, corporate embroidery service, uniform delivery Saudi, staff fitting service, uniform maintenance, workwear customization, Saudi uniform provider',
  openGraph: {
    title: 'Premium Uniform Services for Professional Excellence | UNEOM Saudi Arabia',
    description: 'Discover UNEOM\'s comprehensive range of professional uniform services. From custom design to delivery and maintenance, we provide end-to-end workwear solutions for Saudi businesses.',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: '/images/services/services-header.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Professional Uniform Services in Saudi Arabia',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Uniform Services | UNEOM Saudi Arabia',
    description: 'End-to-end uniform solutions including custom design, manufacturing, embroidery, delivery, and maintenance for Saudi businesses.',
    images: ['/images/services/services-header.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/services',
    languages: {
      'en': 'https://uneom.com/services',
      'ar': 'https://uneom.com/ar/services',
    },
  },
}; 