import { Metadata } from 'next';
import HealthcareIndustryClientPage from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'أزياء موحدة لقطاع الرعاية الصحية | يونيوم المملكة العربية السعودية',
  description: 'توفير أزياء مهنية متخصصة لقطاع الرعاية الصحية في المملكة العربية السعودية',
  keywords: ['أزياء الرعاية الصحية', 'ملابس طبية', 'زي التمريض'],
  openGraph: {
    locale: 'ar_SA',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HealthcareIndustryPage() {
  return <HealthcareIndustryClientPage />;
}