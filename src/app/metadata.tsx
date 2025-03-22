import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UNEOM | #1 Professional Uniform Supplier in Saudi Arabia - Riyadh, Jeddah, Dammam',
  description: 'UNEOM is Saudi Arabia\'s leading uniform manufacturer and supplier. Premium quality uniforms for healthcare, corporate, hospitality and industrial sectors in all Saudi cities including Riyadh, Jeddah, and Dammam.',
  keywords: [
    'uniform Saudi Arabia', 
    'uniform Riyadh', 
    'uniform Jeddah', 
    'uniform Dammam', 
    'uniforms Saudi', 
    'Saudi uniforms', 
    'uniform supplier Saudi Arabia',
    'uniform manufacturer Saudi',
    'professional uniforms Saudi',
    'corporate uniforms',
    'medical uniforms',
    'hospital uniforms',
    'hotel uniforms',
    'industrial uniforms',
    'Saudi uniform company',
    'custom uniforms Saudi Arabia'
  ],
  openGraph: {
    title: 'UNEOM | #1 Professional Uniform Supplier in Saudi Arabia',
    description: 'Saudi Arabia\'s leading uniform manufacturer for all cities including Riyadh, Jeddah, and Dammam. Premium quality uniforms for all industries.',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: '/images/uneom-social-share.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM - Saudi Arabia\'s #1 Uniform Supplier',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UNEOM | #1 Uniform Supplier in Saudi Arabia',
    description: 'Saudi Arabia\'s leading uniform manufacturer for Riyadh, Jeddah, Dammam and all Saudi cities.',
    images: ['/images/uneom-social-share.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://uneom.com',
    languages: {
      'en': 'https://uneom.com',
      'ar': 'https://uneom.com/ar',
    },
  },
  verification: {
    google: 'google-site-verification-code-here',
  },
  other: {
    'baidu-site-verification': 'baidu-verification-code-here',
  },
}; 