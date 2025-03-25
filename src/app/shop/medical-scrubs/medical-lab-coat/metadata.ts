import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Medical Lab Coats | Antimicrobial & Stain-Resistant | UNEOM Saudi Arabia',
  description: 'Premium medical lab coats for healthcare professionals in Saudi Arabia. Antimicrobial, stain-resistant fabric designed for hospital environments with customization options for hospitals and clinics.',
  keywords: 'medical lab coat Saudi Arabia, hospital lab coats, doctor coat, antimicrobial lab coat, customized medical uniform, healthcare uniform Riyadh, stain-resistant lab coat, medical attire Saudi, professional lab coat Jeddah, healthcare uniform supplier',
  openGraph: {
    title: 'Premium Medical Lab Coats for Healthcare Professionals | UNEOM Saudi Arabia',
    description: 'High-quality lab coats with antimicrobial treatment, multiple pocket configurations, and customization options. Perfect for hospitals and clinics across Saudi Arabia.',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: '/images/products/medical-lab-coat.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Medical Lab Coat by UNEOM',
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/shop/medical-scrubs/medical-lab-coat',
    languages: {
      'en': 'https://uneom.com/shop/medical-scrubs/medical-lab-coat',
      'ar': 'https://uneom.com/ar/shop/medical-scrubs/medical-lab-coat',
    },
  },
}; 