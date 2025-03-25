import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lab Coats | Professional Medical Attire | UNEOM Saudi Arabia',
  description: 'Premium lab coats for healthcare professionals in Saudi Arabia. Antimicrobial, stain-resistant fabric with multiple pocket configurations and customization options for hospitals and clinics.',
  keywords: 'lab coats Saudi Arabia, medical lab coats, doctor white coat, hospital lab coat, healthcare uniforms Riyadh, antimicrobial lab coat, stain-resistant medical wear, customized lab coats, professional medical attire, healthcare workwear',
  openGraph: {
    title: 'Premium Lab Coats for Healthcare Professionals | UNEOM Saudi Arabia',
    description: 'Professional-grade lab coats with antimicrobial protection, multiple pocket configurations, and customization options. Designed for medical environments across Saudi Arabia.',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: '/images/products/lab-coats.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Lab Coats by UNEOM',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lab Coats | Professional Medical Attire | UNEOM Saudi Arabia',
    description: 'Premium lab coats for healthcare professionals in Saudi Arabia.',
    images: ['/images/products/lab-coats.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/shop/healthcare-attire/lab-coats',
    languages: {
      'en': 'https://uneom.com/shop/healthcare-attire/lab-coats',
      'ar': 'https://uneom.com/ar/shop/healthcare-attire/lab-coats',
    },
  },
}; 