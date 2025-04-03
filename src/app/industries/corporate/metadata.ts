import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Uniform Solutions for Saudi Businesses | UNEOM',
  description: 'Professional corporate attire and business uniforms for Saudi companies. Tailored workwear solutions that balance international standards with Saudi workplace culture.',
  keywords: 'corporate uniforms, business attire Saudi Arabia, professional workwear, Saudi corporate clothing, office uniforms, executive attire, corporate identity uniforms, business casual Saudi, UNEOM corporate',
  openGraph: {
    title: 'Corporate Uniform Solutions for Saudi Businesses | UNEOM',
    description: 'Professional corporate attire and business uniforms designed for Saudi companies that balance international standards with local workplace culture.',
    locale: 'en',
    type: 'website',
    images: [
      {
        url: '/images/corporate/corporate_uniform_formal.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional UNEOM Corporate Uniforms for Saudi Businesses'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Uniform Solutions for Saudi Businesses | UNEOM',
    description: 'Professional corporate attire and business uniforms for Saudi companies',
    images: ['/images/corporate/corporate_uniform_formal.jpg']
  },
  alternates: {
    canonical: 'https://uneom.com/industries/corporate',
    languages: {
      'en': 'https://uneom.com/industries/corporate',
      'ar': 'https://uneom.com/ar/industries/corporate'
    }
  },
  robots: {
    index: true,
    follow: true
  }
}; 