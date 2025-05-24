import { Metadata } from 'next';
import RestaurantStaffUniformClientPage from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'أزياء طاقم المطعم الفاخرة | ملابس الضيافة السعودية | يونيوم',
  description: 'أزياء طاقم مطعم احترافية مصممة خصيصًا لمنشآت الضيافة السعودية. تتميز بأقمشة مضادة للميكروبات، ومقاومة للبقع، وتصميم يناسب حركة العمل في خدمة الطعام، وخيارات تخصيص لعلامة المطعم التجارية.',
  keywords: 'أزياء مطعم، زي موحد للضيافة، أزياء طاقم المطعم، ملابس الضيافة السعودية، زي نوادل المطعم، أزياء مطعم الرياض، أزياء مطعم جدة، أزياء المطعم الفاخر، ملابس مقاومة للبقع، زي موحد للطهاة، يونيوم، uneom',
  openGraph: {
    title: 'أزياء طاقم المطعم الفاخرة | ملابس الضيافة السعودية | يونيوم',
    description: 'أزياء طاقم مطعم احترافية مصممة خصيصًا لمنشآت الضيافة السعودية. تتميز بأقمشة مضادة للميكروبات، ومقاومة للبقع، وتصميم يناسب حركة العمل.',
    url: 'https://uneom.com/ar/shop/hospitality-attire/restaurant-staff-uniform',
    siteName: 'يونيوم - الزي الموحد للمؤسسات',
    images: [
      {
        url: 'https://uneom.com/images/products/restaurant-staff-uniform.webp',
        width: 1200,
        height: 630,
        alt: 'أزياء طاقم المطعم الفاخرة من يونيوم',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/ar/shop/hospitality-attire/restaurant-staff-uniform',
    languages: {
      'en': 'https://uneom.com/shop/hospitality-attire/restaurant-staff-uniform',
    },
  },
};

export default function RestaurantStaffUniformPage() {
  return <RestaurantStaffUniformClientPage />;
} 