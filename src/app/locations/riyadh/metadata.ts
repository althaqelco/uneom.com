import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uniform Supplier in Riyadh | Professional Workwear | UNEOM Saudi Arabia',
  description: 'Premium uniform supplier in Riyadh, providing custom workwear solutions for healthcare, corporate, hospitality and industrial sectors with local fitting and delivery.',
  keywords: 'uniform supplier Riyadh, professional workwear Riyadh, custom uniforms Saudi capital, corporate uniform supplier, healthcare uniforms Riyadh, hospitality workwear, industrial uniforms, Riyadh uniform delivery, uniform fitting service, Saudi workwear provider',
  openGraph: {
    title: 'Premium Uniform Solutions in Riyadh | UNEOM Saudi Arabia',
    description: 'UNEOM provides comprehensive uniform solutions in Riyadh with local fitting services, fast delivery, and custom workwear for all professional sectors across the Saudi capital.',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: '/images/locations/riyadh-office.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Riyadh Office - Premium Uniform Solutions',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uniform Supplier in Riyadh | UNEOM Saudi Arabia',
    description: 'Premium uniform solutions in Riyadh with local fitting, fast delivery, and custom workwear for all professional sectors.',
    images: ['/images/locations/riyadh-office.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/locations/riyadh',
    languages: {
      'en': 'https://uneom.com/locations/riyadh',
      'ar': 'https://uneom.com/ar/locations/riyadh',
    },
  },
}; 