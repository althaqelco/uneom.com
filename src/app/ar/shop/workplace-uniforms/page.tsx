import { Metadata } from 'next';
import WorkplaceUniformsClientPage from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'ملابس العمل المهنية | أزياء مكتبية وبدلات تنفيذية للشركات السعودية | يونيوم المملكة العربية السعودية',
  description: 'ملابس مؤسسية احترافية للشركات السعودية، بما في ذلك البدلات التنفيذية، والقمصان المؤسسية، والعباءات المهنية. تجمع ملابس العمل لدينا بين المظهر المهني والراحة لساعات العمل الطويلة.',
  keywords: [
    'ملابس عمل',
    'أزياء مكتبية',
    'بدلات تنفيذية',
    'ملابس مؤسسية',
    'قمصان للشركات',
    'عباءات مهنية',
    'ملابس احترافية',
    'زي موحد للشركات',
    'ملابس رسمية للعمل',
    'ملابس مكتبية رجالية',
    'ملابس مكتبية نسائية',
    'يونيوم السعودية'
  ],
  openGraph: {
    title: 'ملابس العمل المهنية | أزياء مكتبية وبدلات تنفيذية للشركات السعودية | يونيوم',
    description: 'ملابس مؤسسية احترافية للشركات السعودية، بما في ذلك البدلات التنفيذية، والقمصان المؤسسية، والعباءات المهنية. تجمع ملابس العمل لدينا بين المظهر المهني والراحة لساعات العمل الطويلة.',
    url: 'https://uneom.com/ar/shop/workplace-uniforms/',
    siteName: 'يونيوم - الزي الموحد الاحترافي في المملكة العربية السعودية',
    images: [
      {
        url: 'https://uneom.com/images/og/workplace-uniforms-og-ar.jpg',
        width: 1200,
        height: 630,
        alt: 'ملابس مهنية احترافية للشركات في السعودية'
      }
    ],
    locale: 'ar_SA',
    type: 'website'
  },
  alternates: {
    canonical: 'https://uneom.com/ar/shop/workplace-uniforms/',
    languages: {
      'en-SA': 'https://uneom.com/shop/workplace-uniforms/',
      'ar-SA': 'https://uneom.com/ar/shop/workplace-uniforms/',
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

export default function WorkplaceUniformsPage() {
  return <WorkplaceUniformsClientPage />;
} 