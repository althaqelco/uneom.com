import React from 'react';
import { Metadata } from 'next';
import MedicalLabCoatsClientPage from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'معاطف المختبرات الطبية الفاخرة | ملابس مضادة للميكروبات | يونيوم المملكة العربية السعودية',
    description: 'معاطف طبية احترافية مصممة خصيصاً للمتخصصين في الرعاية الصحية في المملكة العربية السعودية، مع حماية مضادة للميكروبات، وراحة معززة، وخيارات تخصيص لتلبية متطلبات المنشآت الطبية.',
  keywords: ['معاطف مختبر طبية', 'معاطف مختبر مضادة للميكروبات', 'ملابس طبية سعودية', 'معاطف أطباء', 'يونيفورم مستشفيات', 'ملابس مختبرات طبية', 'معطف طبيب محتشم'],
  openGraph: {
    title: 'معاطف المختبرات الطبية الفاخرة | ملابس مضادة للميكروبات | يونيوم',
    description: 'معاطف طبية احترافية مصممة خصيصاً للمتخصصين في الرعاية الصحية في المملكة العربية السعودية، مع حماية مضادة للميكروبات وراحة معززة.',
    url: 'https://uneom.com/ar/shop/medical-scrubs/medical-lab-coats',
    siteName: 'يونيوم - يونيفورم مهني في المملكة العربية السعودية',
    images: [
      {
        url: 'https://uneom.com/images/products/medical-lab-coats.webp',
        width: 1200,
        height: 630,
        alt: 'معاطف المختبرات الطبية الفاخرة من يونيوم'},
    ],
    locale: 'ar_SA',
    type: 'website'},
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1}}};

export default function MedicalLabCoatsPage() {
  return <MedicalLabCoatsClientPage />;
} 