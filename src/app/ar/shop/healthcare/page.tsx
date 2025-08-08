import React from 'react';
import { Metadata } from 'next';
import { generateMetadata } from '@/components/seo/ServerSEO';
import HealthcareClientPage from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = generateMetadata({
  title: 'منتجات الرعاية الصحية والملابس الطبية | ملابس طبية للمستشفيات والعيادات | يونيوم المملكة العربية السعودية',
  description: 'منتجات رعاية صحية وملابس طبية عالية الجودة مصممة للراحة والمتانة للعاملين في القطاع الصحي في المملكة العربية السعودية. تشمل ملابس طبية، معاطف مختبر، وأزياء تمريض.',
  keywords: ['ملابس طبية', 'معاطف مختبر', 'زي تمريض', 'أزياء مستشفيات', 'ملابس صحية', 'ملابس مضادة للبكتيريا', 'يونيوم', 'المملكة العربية السعودية'],
  path: '/shop/healthcare',
  locale: 'ar',
  imageUrl: '/images/categories/healthcare.webp'});

export default function HealthcarePage() {
  return <HealthcareClientPage />;
}
