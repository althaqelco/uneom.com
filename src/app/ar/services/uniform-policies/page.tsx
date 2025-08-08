import React from 'react';
import { Metadata } from 'next';
import UniformPoliciesServiceClientPage from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'سياسات الزي الموحد للشركات | يونيوم',
  description: 'خدمات تطوير سياسات الزي الموحد الشاملة المصممة لتعزيز حوكمة فعالة وامتثال تنظيمي لبرامج الزي الموحد المؤسسي.',
  keywords: ['سياسات الزي الموحد', 'حوكمة الزي الموحد', 'إرشادات الزي الموحد للشركات', 'تطوير سياسة الزي الموحد', 'السعودية'],
  alternates: {
    canonical: 'https://uneom.com/ar/services/uniform-policies/',
    languages: {
      'en': 'https://uneom.com/services/uniform-policies/'}},
  openGraph: {
    title: 'سياسات الزي الموحد للشركات | يونيوم',
    description: 'خدمات تطوير سياسات الزي الموحد الشاملة المصممة لتعزيز حوكمة فعالة وامتثال تنظيمي لبرامج الزي الموحد المؤسسي.',
    url: 'https://uneom.com/ar/services/uniform-policies/',
    siteName: 'UNEOM',
    images: [
      {
        url: 'https://uneom.com/images/services/uniform-policies-hero-ar.jpg',
        width: 1200,
        height: 630,
        alt: 'سياسات الزي الموحد للشركات - يونيوم'
      }
    ],
    locale: 'ar'
  }
};

export default function UniformPoliciesServicePage() {
  return <UniformPoliciesServiceClientPage />;
} 