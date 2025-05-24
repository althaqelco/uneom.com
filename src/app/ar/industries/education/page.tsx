import { Metadata } from 'next';
import EducationClientPageArabic from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'أزياء وملابس قطاع التعليم | زي مدرسي وجامعي | يونيوم المملكة العربية السعودية',
  description: 'أزياء تعليمية عالية الجودة وزي مدرسي مصمم خصيصًا لمؤسسات التعليم في المملكة العربية السعودية، من المدارس الابتدائية إلى الجامعات، بتصاميم أنيقة ومريحة ومتينة',
  keywords: [
    'زي مدرسي',
    'يونيفورم تعليمي',
    'ملابس طلاب',
    'أزياء مدارس سعودية',
    'زي موحد للجامعات',
    'ملابس هيئة تدريس',
    'زي رياضي مدرسي',
    'يونيفورم جامعي',
    'أزياء أكاديمية',
    'ملابس مؤسسات تعليمية'
  ],
  openGraph: {
    title: 'أزياء وملابس قطاع التعليم | زي مدرسي وجامعي | يونيوم المملكة العربية السعودية',
    description: 'أزياء تعليمية عالية الجودة وزي مدرسي مصمم خصيصًا لمؤسسات التعليم في المملكة العربية السعودية',
    url: 'https://uneom.com/ar/industries/education',
    siteName: 'Uneom',
    images: [
      {
        url: 'https://uneom.com/images/og/education-industry.webp',
        width: 1200,
        height: 630,
        alt: 'أزياء قطاع التعليم | يونيوم'
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
    canonical: 'https://uneom.com/ar/industries/education',
    languages: {
      'en': 'https://uneom.com/industries/education',
      'ar': 'https://uneom.com/ar/industries/education',
    },
  },
};

export default function EducationArabicPage() {
  return <EducationClientPageArabic />;
} 