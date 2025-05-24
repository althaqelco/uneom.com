import { Metadata } from 'next';
import IndustrialUniformsClientPage from './client';
import { generateMetadata } from '@/components/seo/ServerSEO';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = generateMetadata({
  title: 'ملابس العمل الصناعية | زي موحد للقطاعات الصناعية | يونيوم المملكة العربية السعودية',
  description: 'ملابس عمل صناعية عالية الجودة للشركات السعودية. زي موحد متين ومريح يلبي معايير السلامة للقطاعات الصناعية المختلفة مثل النفط والغاز والإنشاءات والتصنيع.',
  keywords: ['ملابس صناعية', 'زي موحد صناعي', 'بدلات عمل', 'سترات سلامة', 'ملابس مقاومة للحرارة', 'يونيفورم صناعي سعودي', 'زي موحد للمصانع', 'ملابس قطاع النفط'],
  path: '/shop/industrial-uniforms',
  locale: 'ar',
  imageUrl: '/images/industrial-uniforms.webp',
});

export default function IndustrialUniformsPage() {
  return <IndustrialUniformsClientPage />;
} 