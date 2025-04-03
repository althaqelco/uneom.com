import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industrial Uniform Manufacturing Solutions | UNEOM Saudi Arabia',
  description: 'Premium industrial and manufacturing workwear for Saudi factories and production facilities. Safety-compliant, durable uniforms designed for industrial environments.',
  keywords: 'industrial uniforms, manufacturing workwear, Saudi factory uniforms, industrial safety clothing, production facility attire, heavy industry workwear, manufacturing PPE, UNEOM industrial',
  openGraph: {
    title: 'Industrial Uniform Manufacturing Solutions | UNEOM Saudi Arabia',
    description: 'Premium industrial and manufacturing workwear for Saudi factories and production facilities with safety compliance and climate adaptability.',
    locale: 'en',
    type: 'website',
    images: [
      {
        url: '/images/industries/manufacturing/manufacturing_uniform_hard-work.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Industrial Manufacturing Uniforms for Saudi Facilities'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industrial Uniform Manufacturing Solutions | UNEOM Saudi Arabia',
    description: 'Premium industrial and manufacturing workwear for Saudi factories and production facilities',
    images: ['/images/industries/manufacturing/manufacturing_uniform_hard-work.jpg']
  },
  alternates: {
    canonical: 'https://uneom.com/industries/manufacturing',
    languages: {
      'en': 'https://uneom.com/industries/manufacturing',
      'ar': 'https://uneom.com/ar/industries/manufacturing'
    }
  },
  robots: {
    index: true,
    follow: true
  }
}; 