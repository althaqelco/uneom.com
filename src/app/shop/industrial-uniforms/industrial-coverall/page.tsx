import { Metadata } from 'next';
import { IndustrialCoverallClientPage } from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata = {
  title: 'Premium Fire-Resistant Industrial Coveralls | UNEOM Saudi Arabia',
  description: 'UNEOM\'s high-quality fire-resistant coveralls designed for industrial environments in Saudi Arabia. NFPA 2112 compliant with superior protection for oil & gas, manufacturing, and petrochemical sectors.',
  keywords: 'fire-resistant coveralls Saudi Arabia, industrial FR workwear, flame-resistant coveralls Riyadh, NFPA 2112 compliant workwear, oil and gas protective clothing, petrochemical industry uniforms',
  openGraph: {
    title: 'Premium Fire-Resistant Industrial Coveralls | UNEOM Saudi Arabia',
    description: 'UNEOM\'s high-quality fire-resistant coveralls designed for industrial environments in Saudi Arabia. NFPA 2112 compliant with superior protection for oil & gas, manufacturing, and petrochemical sectors.',
    type: 'website',
    locale: 'en_US',
    url: 'https://uneom.com/shop/industrial-uniforms/industrial-coverall/',
    images: [
      {
        url: 'https://uneom.com/images/industries/Factory_Industrial/Industrial_Coverall_1.webp',
        width: 1200,
        height: 630,
        alt: 'UNEOM Fire-Resistant Industrial Coveralls',
      },
    ],
  },
  alternates: {
    canonical: 'https://uneom.com/shop/industrial-uniforms/industrial-coverall',
    languages: {
      'ar': 'https://uneom.com/ar/shop/industrial-uniforms/industrial-coverall',
    },
  },
}

export default function IndustrialCoverallPage() {
  return <IndustrialCoverallClientPage />;
}
