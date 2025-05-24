import { redirect } from 'next/navigation';
import MeccaPage from '../../[locale]/locations/mecca/page';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'Locations | Mecca | UNEOM Saudi Arabia',
  description: 'High-quality professional uniforms and workwear solutions tailored for Saudi Arabian businesses and institutions.',
  keywords: ['uniform', 'workwear', 'Saudi Arabia', 'locations | mecca'],
  openGraph: {
    title: 'Locations | Mecca | UNEOM Saudi Arabia',
    description: 'High-quality professional uniforms and workwear solutions tailored for Saudi Arabian businesses and institutions.',
    url: 'https://uneom.com/locations/mecca/',
    siteName: 'UNEOM',
    images: [
      {
        url: 'https://uneom.com/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Locations | Mecca - UNEOM Saudi Arabia'
      }
    ],
    locale: 'en_US'
  }
};


export default function MeccaRedirectPage() {
  // Use the localized component with English locale
  return <MeccaPage params={{ locale: 'en' }} />;
} 