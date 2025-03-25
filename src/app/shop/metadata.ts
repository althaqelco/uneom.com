import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Uniforms Shop | Premium Workwear in Saudi Arabia | UNEOM',
  description: 'Shop premium quality professional uniforms in Saudi Arabia. UNEOM offers healthcare, corporate, hospitality, industrial and security workwear with nationwide delivery.',
  keywords: 'buy uniforms Saudi Arabia, professional workwear shop, healthcare uniforms online, corporate attire Saudi, hospitality uniforms purchase, industrial workwear Saudi, security uniforms online, UNEOM uniform shop, premium workwear Saudi Arabia, professional uniform store',
  openGraph: {
    title: 'Premium Professional Uniform Shop | UNEOM Saudi Arabia',
    description: 'Browse and purchase high-quality professional uniforms for all industries. UNEOM offers premium workwear solutions delivered across Saudi Arabia.',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: '/images/shop/shop-header.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Professional Uniform Shop - Premium Workwear Solutions',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Uniforms Shop | UNEOM Saudi Arabia',
    description: 'Shop premium quality uniforms for healthcare, corporate, hospitality, industrial and security sectors. Nationwide delivery across Saudi Arabia.',
    images: ['/images/shop/shop-header.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/shop',
    languages: {
      'en': 'https://uneom.com/shop',
      'ar': 'https://uneom.com/ar/shop',
    },
  },
}; 