import DammamPage from '../../[locale]/locations/dammam/page';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'Locations | Dammam | UNEOM Saudi Arabia',
  description: 'High-quality professional uniforms and workwear solutions tailored for Saudi Arabian businesses and institutions.',
  keywords: ['uniform', 'workwear', 'Saudi Arabia', 'locations | dammam'],
  openGraph: {
    title: 'Locations | Dammam | UNEOM Saudi Arabia',
    description: 'High-quality professional uniforms and workwear solutions tailored for Saudi Arabian businesses and institutions.',
    url: 'https://uneom.com/locations/dammam/',
    siteName: 'UNEOM',
    images: [
      {
        url: 'https://uneom.com/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Locations | Dammam - UNEOM Saudi Arabia'
      }
    ],
    locale: 'en_US'
  }
};


export default function DammamRedirectPage() {
  // Use the localized component with English locale
  return <DammamPage params={{ locale: 'en' }} />;
} 