import React from 'react';
import { Metadata } from 'next';
import PremiumSchoolUniformClientPage from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'الزي المدرسي الفاخر | أزياء تعليمية عالية الجودة | يونيوم المملكة العربية السعودية',
  description: 'زي مدرسي فاخر مصمم خصيصًا للمؤسسات التعليمية في المملكة العربية السعودية، يتميز بجودة عالية وراحة مثالية للطلاب. متوفر بمختلف الألوان والمقاسات مع خيارات تخصيص كاملة.',
  keywords: ['زي مدرسي فاخر', 'أزياء تعليمية', 'يونيفورم مدارس', 'ملابس طلاب', 'يونيفورم مخصص للمدارس', 'زي مدرسي سعودي', 'ملابس مؤسسات تعليمية', 'يونيوم'],
  openGraph: {
    title: 'الزي المدرسي الفاخر | أزياء تعليمية عالية الجودة | يونيوم',
    description: 'زي مدرسي فاخر مصمم خصيصًا للمؤسسات التعليمية في المملكة العربية السعودية، يتميز بجودة عالية وراحة مثالية للطلاب.',
    url: 'https://uneom.com/ar/shop/education-uniforms/premium-school-uniform',
    siteName: 'يونيوم',
    images: [
      {
        url: 'https://uneom.com/images/products/premium-school-uniform.webp',
        width: 1200,
        height: 630,
        alt: 'الزي المدرسي الفاخر من يونيوم'},
    ],
    locale: 'ar_SA',
    type: 'website'},
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1}}};

export default function PremiumSchoolUniformPage() {
  return <PremiumSchoolUniformClientPage />;
} 