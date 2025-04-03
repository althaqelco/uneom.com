import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aviation Uniforms & Airline Staff Attire | Premium Workwear | UNEOM',
  description: 'Shop premium aviation uniforms and airline staff attire designed for Saudi carriers. Professional, GACA-compliant workwear for pilots, cabin crew, and ground staff.',
  keywords: 'aviation uniforms Saudi Arabia, airline staff attire Riyadh, pilot uniforms, cabin crew clothing, flight attendant uniforms, ground staff workwear, GACA compliant uniforms, UNEOM aviation uniforms',
  openGraph: {
    title: 'Aviation Uniforms & Airline Staff Attire | Premium Workwear | UNEOM',
    description: 'Premium-quality aviation uniforms engineered for Saudi Arabian airlines and carriers. Combining professional appearance, comfort, and GACA compliance.',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: '/images/industries/aviation.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Aviation Uniforms Collection by UNEOM',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aviation Uniforms & Airline Staff Attire | UNEOM Saudi Arabia',
    description: 'Premium aviation uniforms designed for Saudi airlines. Professional appearance meets comfort with Islamic principles consideration.',
    images: ['/images/industries/aviation.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/shop/aviation-uniforms',
    languages: {
      'en': 'https://uneom.com/shop/aviation-uniforms',
      'ar': 'https://uneom.com/ar/shop/aviation-uniforms',
    },
  },
}; 