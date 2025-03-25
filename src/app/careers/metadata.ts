import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers at UNEOM | Join Our Uniform Company in Saudi Arabia',
  description: 'Explore career opportunities at UNEOM, Saudi Arabia\'s premium uniform provider. Join our team of professionals in design, manufacturing, sales, and customer service.',
  keywords: 'UNEOM careers, uniform company jobs, Saudi workwear careers, uniform design jobs, manufacturing jobs Saudi, fashion industry careers, textile jobs Riyadh, uniform sales positions, workwear customer service, Saudi Arabia employment',
  openGraph: {
    title: 'Career Opportunities at UNEOM | Premium Uniform Provider in Saudi Arabia',
    description: 'Join UNEOM\'s team of uniform professionals. We offer exciting career opportunities in design, manufacturing, sales, and customer service across Saudi Arabia.',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: '/images/careers/careers-header.jpg',
        width: 1200,
        height: 630,
        alt: 'Careers at UNEOM - Premium Uniform Provider in Saudi Arabia',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at UNEOM | Saudi Arabia',
    description: 'Join our team of uniform professionals. Explore exciting career opportunities in design, manufacturing, sales, and customer service.',
    images: ['/images/careers/careers-header.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/careers',
    languages: {
      'en': 'https://uneom.com/careers',
      'ar': 'https://uneom.com/ar/careers',
    },
  },
}; 