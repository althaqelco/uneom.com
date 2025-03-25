import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uniform Supplier in Dammam | Professional Workwear | UNEOM Saudi Arabia',
  description: 'Premium uniform supplier in Dammam, providing custom workwear solutions for healthcare, corporate, hospitality and industrial sectors with local fitting and delivery.',
  keywords: 'uniform supplier Dammam, professional workwear Dammam, custom uniforms Eastern Province, corporate uniform supplier, healthcare uniforms Dammam, hospitality workwear, industrial uniforms, Dammam uniform delivery, uniform fitting service, Saudi workwear provider',
  openGraph: {
    title: 'Premium Uniform Solutions in Dammam | UNEOM Saudi Arabia',
    description: 'UNEOM provides comprehensive uniform solutions in Dammam with local fitting services, fast delivery, and custom workwear for all professional sectors across the Eastern Province.',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: '/images/locations/dammam-office.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Dammam Office - Premium Uniform Solutions',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uniform Supplier in Dammam | UNEOM Saudi Arabia',
    description: 'Premium uniform solutions in Dammam with local fitting, fast delivery, and custom workwear for all professional sectors.',
    images: ['/images/locations/dammam-office.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/locations/dammam',
    languages: {
      'en': 'https://uneom.com/locations/dammam',
      'ar': 'https://uneom.com/ar/locations/dammam',
    },
  },
}; 