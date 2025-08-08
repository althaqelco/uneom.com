import React from 'react';
import { Metadata } from 'next';
import ServicesClientPage from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'خدماتنا | يونيوم - حلول الزي الموحد المبتكرة',
  description: 'نقدم حلول شاملة للزي الموحد للشركات والمؤسسات في المملكة العربية السعودية. تعرف على خدماتنا المتميزة في التصميم والإنتاج والتوريد.',
  keywords: ['خدمات الزي الموحد', 'تصميم الزي الموحد', 'إنتاج الزي الموحد', 'خدمات يونيوم', 'خدمات التصميم', 'خدمات التوريد', 'السعودية', 'الرياض', 'جدة'],
  alternates: {
    canonical: 'https://uneom.com/ar/services/',
    languages: {
      'en': 'https://uneom.com/services/'}},
  openGraph: {
    title: 'خدماتنا | يونيوم - حلول الزي الموحد المبتكرة',
    description: 'نقدم حلول شاملة للزي الموحد للشركات والمؤسسات في المملكة العربية السعودية. تعرف على خدماتنا المتميزة في التصميم والإنتاج والتوريد.',
    url: 'https://uneom.com/ar/services/',
    siteName: 'UNEOM',
    images: [
      {
        url: 'https://uneom.com/images/services/services-hero-ar.jpg',
        width: 1200,
        height: 630,
        alt: 'خدمات يونيوم - حلول الزي الموحد'
      }
    ],
    locale: 'ar'
  }
};

export default function ServicesPageArabic() {
  return <ServicesClientPage />;
} 