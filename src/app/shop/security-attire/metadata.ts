import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security Uniforms | Professional Guard Workwear | UNEOM Saudi Arabia',
  description: 'Premium security uniforms and guard workwear for Saudi security companies and facilities. UNEOM offers professional security attire, tactical uniforms, and guard accessories.',
  keywords: 'security uniforms Saudi Arabia, guard workwear, security officer uniforms Riyadh, professional security attire, tactical security clothing, security guard uniforms Saudi, facility protection workwear, security company uniforms, private security attire, UNEOM security uniforms',
  openGraph: {
    title: 'Premium Security Uniforms | UNEOM Saudi Arabia',
    description: 'Professional security guard uniforms designed for Saudi Arabia\'s protection services. UNEOM offers durable, authoritative workwear for security personnel at all levels.',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: '/images/shop/security/security-category.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Security Uniforms - Professional Guard Workwear',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Security Uniforms | UNEOM Saudi Arabia',
    description: 'Premium security guard workwear for Saudi protection services. Explore UNEOM\'s high-quality, professional security uniforms.',
    images: ['/images/shop/security/security-category.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/shop/security-attire',
    languages: {
      'en': 'https://uneom.com/shop/security-attire',
      'ar': 'https://uneom.com/ar/shop/security-attire',
    },
  },
}; 