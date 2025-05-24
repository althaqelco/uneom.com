import { Metadata } from 'next';
import FabricSelectionClientPage from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'خدمة اختيار الأقمشة | استشارات النسيج للأزياء الموحدة | يونيوم المملكة العربية السعودية',
  description: 'خدمة استشارات متخصصة لاختيار الأقمشة المثالية للأزياء الموحدة المهنية في المملكة العربية السعودية. نطابق خصائص أداء النسيج مع احتياجات الصناعة والظروف المناخية.',
  keywords: ['اختيار الأقمشة', 'استشارات النسيج', 'أقمشة الأزياء الموحدة', 'خدمة اختيار الخامات', 'أقمشة مناسبة للمناخ السعودي', 'أقمشة مهنية'],
  openGraph: {
    title: 'خدمة اختيار الأقمشة | استشارات النسيج للأزياء الموحدة | يونيوم المملكة العربية السعودية',
    description: 'خدمة استشارات متخصصة لاختيار الأقمشة المثالية للأزياء الموحدة المهنية في المملكة العربية السعودية. نطابق خصائص أداء النسيج مع احتياجات الصناعة والظروف المناخية.',
    url: 'https://uneom.com/ar/services/fabric-selection',
    siteName: 'يونيوم - الأزياء الموحدة والمهنية في المملكة العربية السعودية',
    images: [
      {
        url: 'https://uneom.com/images/og/fabric-selection-og.jpg',
        width: 1200,
        height: 630,
        alt: 'خدمة اختيار الأقمشة المهنية من يونيوم',
      },
    ],
    locale: 'ar_SA',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FabricSelectionPage() {
  return <FabricSelectionClientPage />;
} 