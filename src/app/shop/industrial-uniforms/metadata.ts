import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industrial Uniforms & Manufacturing Workwear | Safety Attire | UNEOM',
  description: 'Shop premium industrial uniforms and manufacturing workwear designed for Saudi factories and production facilities. Safety-compliant, durable attire for industrial environments.',
  keywords: 'industrial uniforms Saudi Arabia, manufacturing workwear Riyadh, factory safety clothing, production facility attire, industrial safety uniforms, heavy industry workwear, manufacturing PPE, UNEOM industrial uniforms',
  openGraph: {
    title: 'Industrial Uniforms & Manufacturing Workwear | Safety Attire | UNEOM',
    description: 'Premium-quality industrial uniforms engineered for Saudi Arabian manufacturing and production environments. Combining safety compliance, durability, and climate adaptability.',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: '/images/industries/manufacturing/manufacturing_uniform_hard-work.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Industrial Uniforms Collection by UNEOM',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industrial Uniforms & Manufacturing Workwear | UNEOM Saudi Arabia',
    description: 'Premium industrial uniforms designed for Saudi manufacturing facilities. Safety compliance meets durability with climate-adaptive features.',
    images: ['/images/industries/manufacturing/manufacturing_uniform_hard-work.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/shop/industrial-uniforms',
    languages: {
      'en': 'https://uneom.com/shop/industrial-uniforms',
      'ar': 'https://uneom.com/ar/shop/industrial-uniforms',
    },
  },
}; 