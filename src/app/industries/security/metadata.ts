import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Security Uniforms & Guard Attire | UNEOM Saudi Arabia',
  description: 'Premium security uniforms and guard attire for Saudi security companies. Authoritative, functional workwear designed for security personnel and facilities in Saudi Arabia.',
  keywords: 'security uniforms, guard attire, Saudi security workwear, security officer uniforms, tactical security clothing, executive protection uniforms, Saudi security companies, UNEOM security',
  openGraph: {
    title: 'Professional Security Uniforms & Guard Attire | UNEOM Saudi Arabia',
    description: 'Premium security uniforms and guard attire designed for Saudi security companies with comfort, functionality, and professional authority.',
    locale: 'en',
    type: 'website',
    images: [
      {
        url: '/images/industries/security/security-uniform-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional UNEOM Security Uniforms for Saudi Security Personnel'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Security Uniforms & Guard Attire | UNEOM Saudi Arabia',
    description: 'Premium security uniforms and guard attire for Saudi security companies',
    images: ['/images/industries/security/security-uniform-1.jpg']
  },
  alternates: {
    canonical: 'https://uneom.com/industries/security',
    languages: {
      'en': 'https://uneom.com/industries/security',
      'ar': 'https://uneom.com/ar/industries/security'
    }
  },
  robots: {
    index: true,
    follow: true
  }
}; 