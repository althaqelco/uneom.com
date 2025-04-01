import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UNEOM | Premium Uniform Supplier in Saudi Arabia - Riyadh, Jeddah, Dammam',
  description: 'UNEOM delivers premium quality professional uniforms for healthcare, corporate, hospitality and industrial sectors across Saudi Arabia. Custom designs, high-quality fabrics, and nationwide delivery to Riyadh, Jeddah, Dammam and all Saudi cities.',
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
  icons: {
    icon: '/favicon/UNEOM_FAVICON.png',
    shortcut: '/favicon/UNEOM_FAVICON.png',
    apple: '/favicon/UNEOM_FAVICON.png',
  },
  openGraph: {
    title: 'UNEOM | Premium Uniform Supplier in Saudi Arabia - Custom Designs & Quality Fabrics',
    description: 'Saudi Arabia\'s leading uniform manufacturer for all industries. Premium custom-designed uniforms delivered to Riyadh, Jeddah, Dammam and all Saudi cities.',
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
    title: 'UNEOM | Premium Uniform Supplier in Saudi Arabia',
    description: 'Custom-designed professional uniforms manufactured with premium fabrics for all sectors across Riyadh, Jeddah, Dammam and all Saudi cities.',
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