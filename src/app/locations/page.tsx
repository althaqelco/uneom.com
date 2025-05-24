import LocationsPage from '../[locale]/locations/page';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'Locations | UNEOM Saudi Arabia',
  description: 'High-quality professional uniforms and workwear solutions tailored for Saudi Arabian businesses and institutions.',
  keywords: ['uniform', 'workwear', 'Saudi Arabia', 'locations'],
  openGraph: {
    title: 'Locations | UNEOM Saudi Arabia',
    description: 'High-quality professional uniforms and workwear solutions tailored for Saudi Arabian businesses and institutions.',
    url: 'https://uneom.com/locations/',
    siteName: 'UNEOM',
    images: [
      {
        url: 'https://uneom.com/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Locations - UNEOM Saudi Arabia'
      }
    ],
    locale: 'en_US'
  }
};


export default function LocationsRedirectPage() {
  // Use the localized component with English locale
  return <LocationsPage params={{ locale: 'en' }} />;
} 