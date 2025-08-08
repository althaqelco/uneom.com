import React from 'react';
import { Metadata } from 'next';
import MedicalScrubsClientPage from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'الأزياء الطبية | ملابس طبية مضادة للميكروبات | يونيوم المملكة العربية السعودية',
  description: 'ملابس طبية عالية الجودة للمتخصصين في الرعاية الصحية في المملكة العربية السعودية. أزياء احترافية مضادة للميكروبات مصممة للراحة أثناء المناوبات الطويلة.',
  keywords: ['ملابس طبية', 'أزياء طبية', 'يونيفورم طبي', 'سكرابس', 'معاطف مختبر', 'أزياء ممرضين', 'ملابس مضادة للميكروبات', 'زي موحد للمستشفيات'],
  openGraph: {
    title: 'الأزياء الطبية | ملابس طبية مضادة للميكروبات | يونيوم',
    description: 'ملابس طبية عالية الجودة للمتخصصين في الرعاية الصحية في المملكة العربية السعودية. تقنية مضادة للميكروبات وراحة فائقة.',
    url: 'https://uneom.com/ar/shop/medical-scrubs',
    siteName: 'يونيوم - يونيفورم مهني في المملكة العربية السعودية',
    images: [
      {
        url: 'https://uneom.com/images/medical-scrubs.webp',
        width: 1200,
        height: 630,
        alt: 'الأزياء الطبية من يونيوم'},
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

export default function MedicalScrubsPage() {
  return <MedicalScrubsClientPage />;
} 