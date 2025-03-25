import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security Uniforms | Professional Guard Attire | UNEOM Saudi Arabia',
  description: 'Premium security uniforms designed for security professionals in Saudi Arabia. Durable, professional attire with tactical features for security personnel and guards.',
  keywords: 'security uniforms Saudi Arabia, guard uniforms Riyadh, security guard workwear, professional security attire, security staff uniforms Jeddah, tactical security wear, guard clothing Dammam, uniform supplier, security workwear, Saudi security uniforms',
  openGraph: {
    title: 'Premium Security Uniforms for Professional Protection | UNEOM Saudi Arabia',
    description: 'Enhance your security team\'s presence with our premium uniforms. Designed for Saudi Arabia\'s security sector with durable materials, tactical features, and superior comfort for security personnel.',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: '/images/products/security-uniforms.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Security Uniforms Collection by UNEOM',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Security Uniforms | UNEOM Saudi Arabia',
    description: 'Premium security uniforms designed for Saudi Arabia\'s security sector. Professionalism meets functionality with tactical features.',
    images: ['/images/products/security-uniforms.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/shop/security-attire/security-uniforms',
    languages: {
      'en': 'https://uneom.com/shop/security-attire/security-uniforms',
      'ar': 'https://uneom.com/ar/shop/security-attire/security-uniforms',
    },
  },
}; 