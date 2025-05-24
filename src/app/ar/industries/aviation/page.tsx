import { Metadata } from 'next';
import AviationClientPageArabic from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'أزياء وملابس قطاع الطيران | يونيفورم للخطوط الجوية والمطارات | يونيوم',
  description: 'أزياء احترافية عالية الجودة لقطاع الطيران مصممة خصيصًا لتلبية متطلبات الخطوط الجوية والمطارات في المملكة العربية السعودية، بتصاميم أنيقة وعملية تعكس هوية شركات الطيران',
  keywords: [
    'أزياء طيران',
    'زي طيارين',
    'يونيفورم مضيفات طيران',
    'ملابس عاملين مطار',
    'أزياء شركات طيران سعودية',
    'ملابس طاقم الضيافة الجوية',
    'يونيفورم الخطوط الجوية',
    'أزياء مخصصة للطيران',
    'بدلة طيار',
    'ملابس طاقم أرضي'
  ],
  openGraph: {
    title: 'أزياء وملابس قطاع الطيران | يونيفورم للخطوط الجوية والمطارات | يونيوم',
    description: 'أزياء احترافية عالية الجودة لقطاع الطيران مصممة خصيصًا لتلبية متطلبات الخطوط الجوية والمطارات في المملكة العربية السعودية',
    url: 'https://uneom.com/ar/industries/aviation',
    siteName: 'Uneom',
    images: [
      {
        url: 'https://uneom.com/images/og/aviation-industry.webp',
        width: 1200,
        height: 630,
        alt: 'أزياء قطاع الطيران | يونيوم'
      }
    ],
    locale: 'ar_SA',
    type: 'website',
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
  alternates: {
    canonical: 'https://uneom.com/ar/industries/aviation',
    languages: {
      'en': 'https://uneom.com/industries/aviation',
      'ar': 'https://uneom.com/ar/industries/aviation',
    },
  },
};

export default function AviationArabicPage() {
  return <AviationClientPageArabic />;
} 
