import { Metadata } from 'next';
import CorporateAttireClientPage from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'أزياء الشركات | زي موحد مكتبي وبدلات رسمية | يونيوم المملكة العربية السعودية',
  description: 'أزياء شركات عالية الجودة مصممة للمؤسسات السعودية. نوفر ملابس رسمية للشركات، زي موحد مكتبي، وبدلات عمل أنيقة تعزز الهوية المؤسسية وتوفر مظهر احترافي متناسق.',
  keywords: ['أزياء شركات', 'ملابس مكتبية', 'زي موحد للشركات', 'بدلات رسمية', 'يونيفورم مؤسسات', 'قمصان شركات', 'أزياء تنفيذية', 'زي موحد سعودي'],
  openGraph: {
    title: 'أزياء الشركات | زي موحد مكتبي وبدلات رسمية | يونيوم',
    description: 'أزياء شركات عالية الجودة مصممة للمؤسسات السعودية. توفر مجموعتنا الراحة والأناقة لموظفي الشركات.',
    url: 'https://uneom.com/ar/shop/corporate-attire/',
    siteName: 'يونيوم',
    images: [
      {
        url: 'https://uneom.com/images/corporate-attire.webp',
        width: 1200,
        height: 630,
        alt: 'أزياء الشركات من يونيوم',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/ar/shop/corporate-attire/',
    languages: {
      'en-SA': 'https://uneom.com/shop/corporate-attire/',
      'ar-SA': 'https://uneom.com/ar/shop/corporate-attire/',
    },
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

export default function CorporateAttirePage() {
  return <CorporateAttireClientPage />;
} 