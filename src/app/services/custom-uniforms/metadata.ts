import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Uniforms | Bespoke Workwear Solutions | UNEOM Saudi Arabia',
  description: 'Premium custom uniform design and manufacturing from UNEOM. Tailored workwear solutions for Saudi organizations with brand-aligned designs and quality fabrics.',
  keywords: 'custom uniforms Saudi Arabia, bespoke workwear design, tailored corporate uniforms, custom healthcare uniforms, personalized hospitality attire, UNEOM custom designs, branded uniform manufacturing, tailored workwear solutions, premium custom uniforms Riyadh, bespoke uniform supplier Jeddah',
  openGraph: {
    title: 'Custom Uniform Design & Manufacturing | UNEOM Saudi Arabia',
    description: 'Elevate your organization\'s image with UNEOM\'s premium custom uniform solutions. From design concept to manufacturing and delivery across Saudi Arabia.',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: '/images/services/custom-uniforms-service.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Custom Uniform Design and Manufacturing Service',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Uniforms | UNEOM Saudi Arabia',
    description: 'Premium custom uniform design and manufacturing for Saudi organizations. Tailored workwear solutions with your brand identity.',
    images: ['/images/services/custom-uniforms-service.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/services/custom-uniforms',
    languages: {
      'en': 'https://uneom.com/services/custom-uniforms',
      'ar': 'https://uneom.com/ar/services/custom-uniforms',
    },
  },
}; 