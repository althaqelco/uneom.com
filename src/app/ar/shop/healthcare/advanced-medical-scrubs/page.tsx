import { Metadata } from 'next';
import AdvancedMedicalScrubsClientPage from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// إضافة البيانات الوصفية للتحسين لمحركات البحث
export const metadata: Metadata = {
  title: 'الأزياء الطبية المتطورة | ملابس صحية مضادة للميكروبات | يونيوم المملكة العربية السعودية',
  description: 'أزياء طبية مبتكرة وعالية الجودة مصممة خصيصاً للكوادر الصحية في المملكة العربية السعودية، مع تقنيات مضادة للميكروبات، راحة فائقة ومظهر احترافي يليق بالقطاع الطبي. متوفرة للمستشفيات والعيادات في جميع أنحاء الرياض وجدة والدمام.',
  keywords: 'ملابس طبية السعودية, زي طبي مضاد للميكروبات, ملابس طاقم المستشفى الرياض, زي طبي للمستشفيات السعودية, ملابس للأطباء والممرضين, ملابس طبية متوافقة مع الحجاب',
  openGraph: {
    title: 'الأزياء الطبية المتطورة | ملابس صحية مضادة للميكروبات | يونيوم المملكة العربية السعودية',
    description: 'أزياء طبية مبتكرة وعالية الجودة مصممة خصيصاً للكوادر الصحية في المملكة العربية السعودية، مع تقنيات مضادة للميكروبات، راحة فائقة ومظهر احترافي يليق بالقطاع الطبي.',
    images: [
      {
        url: 'https://uneom.com/images/healthcare/medical_hijab_uniform.jpg',
        width: 1200,
        height: 630,
        alt: 'الأزياء الطبية المتطورة من يونيوم للكوادر الصحية',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/ar/shop/healthcare/advanced-medical-scrubs',
    languages: {
      'en': 'https://uneom.com/shop/healthcare/advanced-medical-scrubs',
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
};

export default function AdvancedMedicalScrubsPage() {
  // Server component that renders the client component
  return <AdvancedMedicalScrubsClientPage />;
} 