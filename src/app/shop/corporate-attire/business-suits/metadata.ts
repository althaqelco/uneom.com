import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Suits | Corporate Uniforms | UNEOM Saudi Arabia',
  description: 'Premium business suits designed for corporate professionals in Saudi Arabia. Tailored, sophisticated attire with premium fabrics and modern designs for executive presence.',
  keywords: 'business suits Saudi Arabia, corporate uniforms Riyadh, executive suits, professional workwear, office uniforms Jeddah, premium business attire, corporate suits Dammam, uniform supplier, executive workwear, Saudi business uniforms',
  openGraph: {
    title: 'Premium Business Suits for Corporate Excellence | UNEOM Saudi Arabia',
    description: 'Elevate your corporate image with our premium business suits. Designed for Saudi Arabia\'s professionals with premium fabrics, modern tailoring, and superior comfort for executive presence.',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: '/images/products/business-suits.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Business Suits Collection by UNEOM',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Suits | UNEOM Saudi Arabia',
    description: 'Premium business suits designed for Saudi Arabia\'s corporate professionals. Sophistication meets comfort with modern tailoring.',
    images: ['/images/products/business-suits.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/shop/corporate-attire/business-suits',
    languages: {
      'en': 'https://uneom.com/shop/corporate-attire/business-suits',
      'ar': 'https://uneom.com/ar/shop/corporate-attire/business-suits',
    },
  },
}; 