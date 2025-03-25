import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hospitality Uniforms | Hotel & Restaurant Workwear | UNEOM Saudi Arabia',
  description: 'Premium hospitality uniforms for Saudi hotels, restaurants, and resorts. UNEOM offers high-quality hotel staff uniforms, chef wear, waitstaff attire, and front desk workwear.',
  keywords: 'hospitality uniforms Saudi Arabia, hotel staff workwear, restaurant uniforms Riyadh, chef uniforms Saudi, waitstaff attire, hotel front desk uniforms, luxury hotel workwear, resort staff clothing, Saudi restaurant staff uniforms, UNEOM hospitality uniforms',
  openGraph: {
    title: 'Premium Hospitality Uniforms | UNEOM Saudi Arabia',
    description: 'Elevate your hospitality establishment with UNEOM\'s premium uniforms. Quality workwear for hotels, restaurants, and resorts across Saudi Arabia.',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: '/images/shop/hospitality/hospitality-category.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Hospitality Uniforms - Premium Hotel & Restaurant Workwear',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hospitality Uniforms | UNEOM Saudi Arabia',
    description: 'Premium hotel and restaurant uniforms in Saudi Arabia. Explore UNEOM\'s high-quality hospitality workwear for all staff roles.',
    images: ['/images/shop/hospitality/hospitality-category.jpg'],
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