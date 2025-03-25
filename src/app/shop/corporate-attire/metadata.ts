import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Uniforms | Business Workwear | UNEOM Saudi Arabia',
  description: 'Premium corporate uniforms and business workwear for Saudi companies. UNEOM offers executive suits, office attire, branded corporate clothing and professional wear.',
  keywords: 'corporate uniforms Saudi Arabia, business workwear, office uniforms Riyadh, executive suits Saudi, branded corporate clothing, professional attire, Saudi company uniforms, corporate dress code, office staff clothing, UNEOM corporate uniforms',
  openGraph: {
    title: 'Premium Corporate Uniforms & Business Workwear | UNEOM Saudi Arabia',
    description: 'Enhance your company\'s professional image with UNEOM\'s premium corporate uniforms. Quality business attire that elevates brand identity across Saudi Arabia.',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: '/images/shop/corporate/corporate-category.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Corporate Uniforms - Premium Business Workwear',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Uniforms | UNEOM Saudi Arabia',
    description: 'Premium business workwear for Saudi companies. Explore UNEOM\'s high-quality corporate uniforms that enhance professional brand identity.',
    images: ['/images/shop/corporate/corporate-category.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/shop/corporate-attire',
    languages: {
      'en': 'https://uneom.com/shop/corporate-attire',
      'ar': 'https://uneom.com/ar/shop/corporate-attire',
    },
  },
}; 