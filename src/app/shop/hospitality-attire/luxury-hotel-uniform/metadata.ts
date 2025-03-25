import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Luxury Hotel Uniforms | Premium Hospitality Attire | UNEOM Saudi Arabia',
  description: 'Premium luxury hotel uniforms designed for Saudi Arabia\'s finest establishments. Exquisite fabrics, bespoke tailoring, and elegant designs for staff across all luxury hotel departments.',
  keywords: 'luxury hotel uniforms Saudi Arabia, premium hotel staff uniforms Riyadh, 5-star hotel attire, luxury hospitality uniforms, high-end hotel uniforms Jeddah, bespoke hotel staff attire, premium hospitality wear Dammam, luxury uniform supplier, exclusive hotel workwear, Saudi luxury uniforms',
  openGraph: {
    title: 'Premium Luxury Hotel Uniforms for Elite Establishments | UNEOM Saudi Arabia',
    description: 'Elevate your luxury hotel\'s prestige with our premium uniforms. Tailored for Saudi Arabia\'s finest hotels with exquisite fabrics, bespoke designs, and unmatched attention to detail.',
    type: 'website',
    locale: 'en',
    images: [
      {
        url: '/images/products/luxury-hotel-uniform.jpg',
        width: 1200,
        height: 630,
        alt: 'Premium Luxury Hotel Uniform Collection by UNEOM',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Hotel Uniforms | UNEOM Saudi Arabia',
    description: 'Premium luxury hotel uniforms designed for Saudi Arabia\'s elite establishments. Elegance meets excellence with superior quality and style.',
    images: ['/images/products/luxury-hotel-uniform.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/shop/hospitality-attire/luxury-hotel-uniform',
    languages: {
      'en': 'https://uneom.com/shop/hospitality-attire/luxury-hotel-uniform',
      'ar': 'https://uneom.com/ar/shop/hospitality-attire/luxury-hotel-uniform',
    },
  },
}; 