import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Workwear & Business Attire | Professional Uniforms | UNEOM',
  description: 'Shop premium corporate workwear and business attire designed for Saudi companies. Professional, tailored uniforms for corporate environments across the Kingdom.',
  keywords: 'corporate workwear Saudi Arabia, business attire Riyadh, professional uniforms, office clothing, executive attire, corporate identity uniforms, Saudi business casual, UNEOM corporate uniforms',
  openGraph: {
    title: 'Corporate Workwear & Business Attire | Professional Uniforms | UNEOM',
    description: 'Premium-quality corporate workwear engineered for Saudi Arabian business environments. Combining professional appearance, comfort, and cultural considerations.',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: '/images/corporate/corporate_uniform_formal.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Corporate Workwear Collection by UNEOM',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Workwear & Business Attire | UNEOM Saudi Arabia',
    description: 'Premium corporate uniforms designed for Saudi business environments. Professionalism meets comfort with cultural sensitivity considerations.',
    images: ['/images/corporate/corporate_uniform_formal.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/shop/corporate-workwear',
    languages: {
      'en': 'https://uneom.com/shop/corporate-workwear',
      'ar': 'https://uneom.com/ar/shop/corporate-workwear',
    },
  },
}; 