import { Metadata } from 'next';
import CorporateWorkwearClientPage from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'ملابس العمل للشركات | زي موحد للمؤسسات | يونيوم المملكة العربية السعودية',
  description: 'ملابس عمل احترافية وأنيقة للشركات والمؤسسات في المملكة العربية السعودية. بدلات تنفيذية، أزياء مكتبية، وقمصان شركات مصممة للراحة والأناقة والمتانة مع خيارات تخصيص كاملة.',
  keywords: [
    'ملابس عمل للشركات',
    'بدلات تنفيذية',
    'أزياء مكتبية',
    'قمصان شركات',
    'ملابس عمل غير رسمية',
    'ملابس خارجية للشركات',
    'إكسسوارات شركات',
    'زي موحد مؤسسي',
    'ملابس شركات سعودية',
    'يونيوم السعودية'
  ],
  openGraph: {
    title: 'ملابس العمل للشركات | زي موحد للمؤسسات | يونيوم',
    description: 'ملابس عمل احترافية وأنيقة للشركات والمؤسسات في المملكة العربية السعودية.',
    url: 'https://uneom.com/ar/shop/corporate-workwear/',
    siteName: 'يونيوم - الزي الموحد الاحترافي في المملكة العربية السعودية',
    images: [
      {
        url: 'https://uneom.com/images/og/corporate-workwear-og-ar.jpg',
        width: 1200,
        height: 630,
        alt: 'ملابس عمل للشركات من يونيوم'
      }
    ],
    locale: 'ar_SA',
    type: 'website'
  },
  alternates: {
    canonical: 'https://uneom.com/ar/shop/corporate-workwear/',
    languages: {
      'en-SA': 'https://uneom.com/shop/corporate-workwear/',
      'ar-SA': 'https://uneom.com/ar/shop/corporate-workwear/',
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
      'max-snippet': -1
    }
  }
};

export default function CorporateWorkwearPage() {
  return <CorporateWorkwearClientPage />;
} 