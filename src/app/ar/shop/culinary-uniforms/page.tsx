import { Metadata } from 'next';
import CulinaryUniformsClientPage from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'أزياء الطهي الاحترافية | سترات الشيف وملابس المطبخ للمطاعم والفنادق | يونيوم المملكة العربية السعودية',
  description: 'أزياء طهي عالية الجودة للمطاعم والفنادق، تشمل سترات الشيف وأطقم المطبخ الكاملة والمرايل الاحترافية. مصممة للراحة وسهولة الحركة مع خيارات تخصيص الشعارات والألوان.',
  keywords: [
    'أزياء الطهي',
    'سترات الشيف',
    'ملابس المطبخ',
    'زي الطباخ',
    'مريلة الشيف',
    'زي طاقم المطبخ',
    'ملابس المطاعم',
    'أزياء الشيف التنفيذي',
    'زي طلاب الطهي',
    'زي مدير المطبخ',
    'يونيوم السعودية'
  ],
  openGraph: {
    title: 'أزياء الطهي الاحترافية | سترات الشيف وملابس المطبخ للمطاعم والفنادق | يونيوم',
    description: 'أزياء طهي عالية الجودة للمطاعم والفنادق، تشمل سترات الشيف وأطقم المطبخ الكاملة والمرايل الاحترافية. مصممة للراحة وسهولة الحركة مع خيارات تخصيص الشعارات والألوان.',
    url: 'https://uneom.com/ar/shop/culinary-uniforms/',
    siteName: 'يونيوم - الزي الموحد الاحترافي في المملكة العربية السعودية',
    images: [
      {
        url: 'https://uneom.com/images/og/culinary-uniforms-og-ar.jpg',
        width: 1200,
        height: 630,
        alt: 'أزياء طهي احترافية للمطاعم والفنادق في السعودية'
      }
    ],
    locale: 'ar_SA',
    type: 'website'
  },
  alternates: {
    canonical: 'https://uneom.com/ar/shop/culinary-uniforms/',
    languages: {
      'en-SA': 'https://uneom.com/shop/culinary-uniforms/',
      'ar-SA': 'https://uneom.com/ar/shop/culinary-uniforms/',
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

export default function CulinaryUniformsPage() {
  return <CulinaryUniformsClientPage />;
} 