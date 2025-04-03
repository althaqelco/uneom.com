import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hospitality Uniforms & Hotel Staff Attire | Luxury Workwear | UNEOM',
  description: 'Shop premium hospitality uniforms and hotel staff attire designed for Saudi hospitality establishments. Elegant, durable workwear for hotels, restaurants, and resorts.',
  keywords: 'hospitality uniforms Saudi Arabia, hotel staff attire Riyadh, restaurant uniforms, resort staff clothing, front desk attire, food service uniforms, housekeeping uniforms, UNEOM hospitality uniforms',
  openGraph: {
    title: 'Hospitality Uniforms & Hotel Staff Attire | Luxury Workwear | UNEOM',
    description: 'Premium-quality hospitality uniforms engineered for Saudi Arabian hotels, restaurants, and resorts. Combining elegant design, practicality, and cultural considerations.',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: '/images/industries/hospitality.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Hospitality Uniforms Collection by UNEOM',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hospitality Uniforms & Hotel Staff Attire | UNEOM Saudi Arabia',
    description: 'Premium hospitality uniforms designed for Saudi hotels and restaurants. Luxury meets functionality with cultural sensitivity considerations.',
    images: ['/images/industries/hospitality.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/shop/hospitality-attire',
    languages: {
      'en': 'https://uneom.com/shop/hospitality-attire',
      'ar': 'https://uneom.com/ar/shop/hospitality-attire',
    },
  },
}; 