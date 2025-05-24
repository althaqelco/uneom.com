import { Metadata } from 'next';
import HealthcareAccessoriesClientPage from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'اكسسوارات الرعاية الصحية | إكسسوارات طبية للمستشفيات والكوادر الطبية | يونيوم',
  description: 'مجموعة واسعة من الإكسسوارات الطبية عالية الجودة المصممة خصيصًا للأطباء والممرضين والعاملين في مجال الرعاية الصحية في المملكة العربية السعودية. متوفر مستلزمات طبية متنوعة مثل حاملات بطاقات التعريف، أقلام الإضاءة الطبية، الساعات والحقائب الطبية المتخصصة.',
  keywords: ['اكسسوارات طبية', 'مستلزمات طبية', 'سماعة طبيب', 'ساعات طبية', 'حقائب طبية', 'أحذية طبية', 'حاملات بطاقات', 'أقلام إضاءة طبية', 'اكسسوارات للممرضين', 'مستلزمات المستشفيات السعودية'],
  openGraph: {
    title: 'اكسسوارات الرعاية الصحية | إكسسوارات طبية احترافية | يونيوم المملكة العربية السعودية',
    description: 'اكسسوارات طبية عالية الجودة للمتخصصين في الرعاية الصحية في المملكة العربية السعودية',
    url: 'https://uneom.com/ar/shop/healthcare-accessories',
    siteName: 'يونيوم',
    images: [
      {
        url: 'https://uneom.com/images/og/healthcare-accessories.jpg',
        width: 1200,
        height: 630,
        alt: 'اكسسوارات الرعاية الصحية من يونيوم',
      },
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
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function HealthcareAccessoriesPage() {
  return <HealthcareAccessoriesClientPage />;
} 