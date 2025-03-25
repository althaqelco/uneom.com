import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resort Staff Uniforms | Premium Leisure Hospitality Attire | UNEOM Saudi Arabia',
  description: 'Premium resort uniforms designed for Saudi Arabia\'s luxury leisure destinations. Stylish, climate-adapted attire with practical designs for all resort staff roles.',
  keywords: 'resort uniforms Saudi Arabia, leisure staff uniforms Riyadh, hotel resort attire, beach resort uniforms, resort staff workwear Jeddah, luxury resort uniforms, premium resort attire Dammam, resort uniform supplier, leisure hospitality wear, Saudi resort uniforms',
  openGraph: {
    title: 'Premium Resort Staff Uniforms for Luxury Leisure | UNEOM Saudi Arabia',
    description: 'Elevate your resort\'s image with our premium staff uniforms. Designed for Saudi Arabia\'s luxury resorts with climate-adapted fabrics, elegant styling, and superior comfort for hospitality excellence.',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: '/images/products/resort-staff-uniform.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Resort Staff Uniform Collection by UNEOM',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resort Staff Uniforms | UNEOM Saudi Arabia',
    description: 'Premium resort uniforms designed for Saudi Arabia\'s leisure destinations. Style meets functionality with climate-adapted comfort.',
    images: ['/images/products/resort-staff-uniform.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/shop/hospitality-attire/resort-staff-attire',
    languages: {
      'en': 'https://uneom.com/shop/hospitality-attire/resort-staff-attire',
      'ar': 'https://uneom.com/ar/shop/hospitality-attire/resort-staff-attire',
    },
  },
}; 