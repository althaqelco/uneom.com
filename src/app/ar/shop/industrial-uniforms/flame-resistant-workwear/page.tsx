import React from 'react';
import { Metadata } from 'next';
import { generateMetadata } from '@/components/seo/ServerSEO';
import FlameResistantWorkwearClientPage from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = generateMetadata({
  title: 'ملابس مقاومة للحريق | معتمدة من NFPA 2112 | يونيوم المملكة العربية السعودية',
  description: 'ملابس عمل مقاومة للهب والحريق للعاملين في النفط والغاز والصناعات الخطرة في المملكة العربية السعودية. معتمدة من NFPA 2112 وISO 11612 ومعايير SASO.',
  keywords: [
    'ملابس مقاومة للحريق',
    'ملابس مقاومة للهب',
    'زي مقاوم للحرارة',
    'ملابس السلامة الصناعية',
    'ملابس النفط والغاز',
    'ملابس NFPA 2112',
    'ملابس صناعية سعودية',
    'زي مقاوم للهب',
    'ملابس حماية من الحريق',
    'يونيوم السعودية'
  ],
  path: '/images/products/flame-resistant-workwear.webp',
  locale: 'ar'
});

export default function FlameResistantWorkwearPage() {
  return <FlameResistantWorkwearClientPage />;
} 