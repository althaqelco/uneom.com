import React from 'react';
import { Metadata } from 'next';
import { generateMetadata as generateSEO } from '@/components/seo/ServerSEO';
import SurgicalScrubsClient from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = generateSEO({
  title: 'الأزياء الجراحية المتقدمة | ملابس طبية عالية الجودة | يونيوم المملكة العربية السعودية',
    description: 'أزياء جراحية عالية الأداء مصممة خصيصاً لبيئات غرف العمليات في المنشآت الصحية السعودية، تتميز بتقنية متقدمة مقاومة للسوائل، وراحة استثنائية، ومبادئ تصميم معقمة.',
  keywords: [
    'أزياء جراحية',
    'ملابس طبية',
    'زي موحد للمستشفيات',
    'أزياء غرف العمليات',
    'ملابس طبية مقاومة للسوائل',
    'يونيوم المملكة العربية السعودية'
  ],
  path: '/ar/images/products/surgical-scrubs.jpg',
  locale: 'ar'
});

export default function SurgicalScrubsPage() {
  return <SurgicalScrubsClient />;
} 