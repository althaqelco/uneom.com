import { Metadata } from 'next';
import AdvancedMedicalScrubsClientPage from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'Advanced Medical Scrubs | Antimicrobial Healthcare Uniforms | UNEOM Saudi Arabia',
  description: 'Premium medical scrubs designed for healthcare professionals in Saudi Arabia, featuring antimicrobial technology, superior comfort, and professional appearance. Available for hospitals and clinics throughout Riyadh, Jeddah, and Dammam.',
  keywords: 'medical scrubs Saudi Arabia, antimicrobial healthcare uniforms, hospital staff uniforms Riyadh, medical attire Saudi hospitals, scrubs for doctors nurses, premium healthcare clothing, Islamic-friendly medical uniforms',
  openGraph: {
    title: 'Advanced Medical Scrubs | Antimicrobial Healthcare Uniforms | UNEOM Saudi Arabia',
    description: 'Premium medical scrubs designed for healthcare professionals in Saudi Arabia, featuring antimicrobial technology, superior comfort, and professional appearance.',
    images: [
      {
        url: 'https://uneom.com/images/default-placeholder.jpg',
        width: 1200,
        height: 630,
        alt: 'UNEOM Advanced Medical Scrubs for Healthcare Professionals',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/shop/healthcare/advanced-medical-scrubs',
    languages: {
      'ar': 'https://uneom.com/ar/shop/healthcare/advanced-medical-scrubs',
    },
  },
};

export default function AdvancedMedicalScrubsPage() {
  return <AdvancedMedicalScrubsClientPage />;
}
