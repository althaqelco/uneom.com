import { Metadata } from 'next';
import ExecutiveApparelClientPage from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'الأزياء التنفيذية | ملابس رسمية للمدراء وكبار المسؤولين | يونيوم المملكة العربية السعودية',
  description: 'تسوق أزياء تنفيذية فاخرة ومخصصة للمدراء وكبار المسؤولين من يونيوم. بدلات رسمية، قمصان، أزياء نسائية، وإكسسوارات عالية الجودة مع خدمة التفصيل الخاص في المملكة العربية السعودية.',
  keywords: ['أزياء تنفيذية', 'بدلات رسمية', 'ملابس مدراء', 'قمصان رسمية', 'أزياء نسائية للعمل', 'تفصيل خاص', 'أزياء فاخرة', 'أزياء رجال أعمال', 'يونيوم'],
  openGraph: {
    type: 'website',
    url: 'https://uneom.com/ar/shop/executive-apparel',
    siteName: 'يونيوم',
    images: [
      {
        url: 'https://uneom.com/images/og-executive-apparel-ar.jpg',
        width: 1200,
        height: 630,
        alt: 'الأزياء التنفيذية الفاخرة | يونيوم المملكة العربية السعودية',
      },
    ],
    locale: 'ar_SA',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ExecutiveApparelPage() {
  return <ExecutiveApparelClientPage />;
} 