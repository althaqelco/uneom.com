// This is now a server component that handles metadata
import { Metadata } from 'next';
import PremiumSchoolUniformsClientPage from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Define metadata for SEO optimization
export const metadata: Metadata = {
  title: 'زي مدرسي متميز | أزياء تعليمية سعودية | UNEOM المملكة العربية السعودية',
  description: 'زي مدرسي عالي الجودة مصمم للمؤسسات التعليمية السعودية. يتميز بتصاميم متينة ومريحة ومناسبة ثقافياً لجميع الأعمار. متوفر خدمة التطريز المخصص للمدارس.',
  keywords: 'زي مدرسي السعودية, أزياء تعليمية سعودية, زي مدرسي متميز الرياض, ملابس مدرسية إسلامية, زي مدرسي للمدارس الخاصة, تطريز شعارات المدارس, زي أكاديميات سعودية, قواعد الزي المدرسي السعودية',
  openGraph: {
    title: 'زي مدرسي متميز | أزياء تعليمية سعودية | UNEOM المملكة العربية السعودية',
    description: 'زي مدرسي عالي الجودة مصمم للمؤسسات التعليمية السعودية. يتميز بتصاميم متينة ومريحة ومناسبة ثقافياً لجميع الأعمار. متوفر خدمة التطريز المخصص للمدارس.',
    images: [
      {
        url: 'https://uneom.com/images/products/premium-school-uniforms.webp',
        width: 1200,
        height: 630,
        alt: 'الزي المدرسي المتميز من UNEOM للمؤسسات التعليمية السعودية'
      }
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/ar/shop/education-uniforms/premium-school-uniforms',
    languages: {
      'en': 'https://uneom.com/shop/education-uniforms/premium-school-uniforms',
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

export default function PremiumSchoolUniformsArabicPage() {
  // Server component that renders the client component
  return <PremiumSchoolUniformsClientPage />;
} 