import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uniform Supplier in Jeddah | Professional Workwear | UNEOM Saudi Arabia',
  description: 'Premium uniform supplier in Jeddah, providing custom workwear solutions for healthcare, corporate, hospitality and industrial sectors with local fitting and delivery.',
  keywords: 'uniform supplier Jeddah, professional workwear Jeddah, custom uniforms Red Sea city, corporate uniform supplier, healthcare uniforms Jeddah, hospitality workwear, industrial uniforms, Jeddah uniform delivery, uniform fitting service, Saudi workwear provider',
  openGraph: {
    title: 'Premium Uniform Solutions in Jeddah | UNEOM Saudi Arabia',
    description: 'UNEOM provides comprehensive uniform solutions in Jeddah with local fitting services, fast delivery, and custom workwear for all professional sectors across the Red Sea gateway.',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: '/images/locations/jeddah-office.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Jeddah Office - Premium Uniform Solutions',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uniform Supplier in Jeddah | UNEOM Saudi Arabia',
    description: 'Premium uniform solutions in Jeddah with local fitting, fast delivery, and custom workwear for all professional sectors.',
    images: ['/images/locations/jeddah-office.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/locations/jeddah',
    languages: {
      'en': 'https://uneom.com/locations/jeddah',
      'ar': 'https://uneom.com/ar/locations/jeddah',
    },
  },
}; 