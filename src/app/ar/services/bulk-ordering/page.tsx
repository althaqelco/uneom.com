import React from 'react';
import { Metadata } from 'next';
import BulkOrderingServiceClientPage from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: "UNEOM - Professional Uniforms",
  description: 'خدمات طلبات الزي الموحد بالجملة من يونيوم، توفر حلول فعالة من حيث التكلفة للشركات والمؤسسات في المملكة العربية السعودية.',
  keywords: ['طلبات الشراء بالجملة', 'زي موحد بالجملة', 'توريد زي موحد', 'تسعير تنافسي', 'السعودية'],
  alternates: {
    canonical: 'https://uneom.com/ar/services/bulk-ordering/',
    languages: {
      'en': 'https://uneom.com/services/bulk-ordering/'}},
  openGraph: {
    title: 'طلبات الشراء بالجملة | يونيوم',
    description: 'خدمات طلبات الزي الموحد بالجملة من يونيوم، توفر حلول فعالة من حيث التكلفة للشركات والمؤسسات في المملكة العربية السعودية.',
    url: 'https://uneom.com/ar/services/bulk-ordering/',
    siteName: 'UNEOM',
    images: [
      {
        url: 'https://uneom.com/images/services/bulk-ordering-hero-ar.jpg',
        width: 1200,
        height: 630,
        alt: 'طلبات الشراء بالجملة - يونيوم'
      }
    ],
    locale: 'ar'
  }
};

export default function BulkOrderingServicePage() {
  return <BulkOrderingServiceClientPage />;
} 
