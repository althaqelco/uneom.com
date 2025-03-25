import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hotel Front Desk Uniforms | Premium Reception Attire | UNEOM Saudi Arabia',
  description: 'Premium front desk uniforms designed for Saudi Arabia\'s hotels. Professional, elegant attire with comfortable fabrics for reception staff who represent your brand\'s first impression.',
  keywords: 'hotel front desk uniforms Saudi Arabia, reception staff uniforms Riyadh, hotel lobby attire, professional reception uniforms, front office uniforms Jeddah, hotel staff workwear, premium reception attire Dammam, hotel uniform supplier, front desk workwear, Saudi hospitality uniforms',
  openGraph: {
    title: 'Premium Hotel Front Desk Uniforms for First Impressions | UNEOM Saudi Arabia',
    description: 'Make lasting first impressions with our premium front desk uniforms. Designed for Saudi Arabia\'s hotels with elegant styling, professional appearance, and superior comfort for reception excellence.',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: '/images/products/front-desk-uniform.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Front Desk Uniform Collection by UNEOM',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hotel Front Desk Uniforms | UNEOM Saudi Arabia',
    description: 'Premium front desk uniforms designed for Saudi Arabia\'s hotels. Elegance meets professionalism with superior comfort and style.',
    images: ['/images/products/front-desk-uniform.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/shop/hospitality-attire/front-desk-uniform',
    languages: {
      'en': 'https://uneom.com/shop/hospitality-attire/front-desk-uniform',
      'ar': 'https://uneom.com/ar/shop/hospitality-attire/front-desk-uniform',
    },
  },
}; 