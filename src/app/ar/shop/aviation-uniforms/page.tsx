import { Metadata } from 'next';
import AviationUniformsClientPage from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'أزياء الطيران | زي موحد لشركات الطيران والطيارين | يونيوم المملكة العربية السعودية',
  description: 'أزياء طيران احترافية لجميع أقسام شركات الطيران في المملكة العربية السعودية. أزياء طيارين، زي مضيفي الطيران، ملابس طاقم الأرض، وأزياء صيانة الطائرات.',
  keywords: ['زي طيار', 'أزياء طيران', 'ملابس مضيفين', 'زي طاقم أرضي', 'يونيفورم شركات طيران', 'ملابس صيانة طائرات', 'زي أمن طيران', 'أزياء مكاتب شركات طيران'],
  openGraph: {
    title: 'أزياء الطيران | زي موحد لشركات الطيران والطيارين | يونيوم',
    description: 'أزياء طيران احترافية لشركات الطيران في المملكة العربية السعودية. جودة عالية ومظهر احترافي لجميع الأقسام.',
    url: 'https://uneom.com/ar/shop/aviation-uniforms/',
    siteName: 'يونيوم - يونيفورم مهني في المملكة العربية السعودية',
    images: [
      {
        url: 'https://uneom.com/images/aviation-uniforms.webp',
        width: 1200,
        height: 630,
        alt: 'أزياء الطيران من يونيوم',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/ar/shop/aviation-uniforms/',
    languages: {
      'en-SA': 'https://uneom.com/shop/aviation-uniforms/',
      'ar-SA': 'https://uneom.com/ar/shop/aviation-uniforms/',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function AviationUniformsPage() {
  return <AviationUniformsClientPage />;
} 