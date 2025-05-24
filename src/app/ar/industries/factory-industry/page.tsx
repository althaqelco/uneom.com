import { Metadata } from 'next';
import FactoryIndustryClientPageArabic from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'أزياء وملابس القطاع الصناعي | يونيوم',
  description: 'توفر يونيوم ملابس عمل احترافية للمصانع والمنشآت الصناعية في المملكة العربية السعودية، مصممة خصيصًا لتلبية متطلبات بيئة التصنيع المختلفة.',
  keywords: 'ملابس مصانع, زي عمال, ملابس عمل صناعية, ملابس أمان, يونيفورم مصانع, أزياء قطاع صناعي, ملابس عمل, ملابس عمل سعودية',
};

export default function FactoryIndustryPageArabic() {
  return <FactoryIndustryClientPageArabic />;
}