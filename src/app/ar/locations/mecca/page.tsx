import MeccaLocationPage from '../../../[locale]/locations/mecca/page';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'Ar | Locations | Mecca | يونيوم المملكة العربية السعودية',
  description: 'توفر يونيوم حلول الزي الموحد والملابس المهنية عالية الجودة المصممة خصيصًا للشركات والمؤسسات السعودية.',
  keywords: ['زي موحد', 'ملابس مهنية', 'يونيوم', 'المملكة العربية السعودية', 'ar | locations | mecca'],
  openGraph: {
    title: 'Ar | Locations | Mecca | يونيوم المملكة العربية السعودية',
    description: 'توفر يونيوم حلول الزي الموحد والملابس المهنية عالية الجودة المصممة خصيصًا للشركات والمؤسسات السعودية.',
    url: 'https://uneom.com/ar/locations/mecca/',
    siteName: 'UNEOM',
    images: [
      {
        url: 'https://uneom.com/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Ar | Locations | Mecca - يونيوم المملكة العربية السعودية'
      }
    ],
    locale: 'ar'
  }
};


export default function ArabicMeccaLocationPage() {
  // Use the localized component with Arabic locale
  return <MeccaLocationPage params={{ locale: 'ar' }} />;
} 