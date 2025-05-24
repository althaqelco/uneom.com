import { Metadata } from 'next';
import { IndustrialSafetyVestClientPage } from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata = {
  title: 'Industrial Safety Vests | ANSI/ISEA 107 Compliant | UNEOM Saudi Arabia',
  description: 'Premium industrial safety vests for Saudi Arabian worksites. ANSI/ISEA 107 compliant with high-visibility fabrics, reflective materials, and durable construction for maximum protection.',
  keywords: 'industrial safety vest Saudi Arabia, high visibility workwear Riyadh, ANSI 107 compliant vest Jeddah, class 2 safety vest Dammam, reflective workwear Saudi, construction safety vest KSA, oil and gas safety apparel',
  openGraph: {
    title: 'Industrial Safety Vests | ANSI/ISEA 107 Compliant | UNEOM Saudi Arabia',
    description: 'Premium industrial safety vests for Saudi Arabian worksites. ANSI/ISEA 107 compliant with high-visibility fabrics, reflective materials, and durable construction for maximum protection.',
    images: [
      {
        url: 'https://uneom.com/images/products/industrial-safety-vest.webp',
        width: 1200,
        height: 630,
        alt: 'UNEOM Industrial Safety Vest',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/shop/high-visibility-clothing/industrial-safety-vest',
    languages: {
      'ar': 'https://uneom.com/ar/shop/high-visibility-clothing/industrial-safety-vest',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function IndustrialSafetyVestPage() {
  return <IndustrialSafetyVestClientPage />;
}
