import React from 'react';
import { Metadata } from 'next';
import CustomDesignServiceClientPage from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'تصميم مخصص وعلامات تجارية | يونيوم',
  description: 'خدمات تصميم الزي الموحد المخصصة لتعزيز هوية علامتك التجارية مع حلول أزياء موحدة مميزة تلبي احتياجات مؤسستك.',
  keywords: ['تصميم الزي الموحد', 'تصميم مخصص', 'علامات تجارية للزي الموحد', 'هوية العلامة التجارية', 'السعودية'],
  alternates: {
    canonical: 'https://uneom.com/ar/services/custom-design/',
    languages: {
      'en': 'https://uneom.com/services/custom-design/',
    },
  },
  openGraph: {
    title: 'تصميم مخصص وعلامات تجارية | يونيوم',
    description: 'خدمات تصميم الزي الموحد المخصصة لتعزيز هوية علامتك التجارية مع حلول أزياء موحدة مميزة تلبي احتياجات مؤسستك.',
    url: 'https://uneom.com/ar/services/custom-design/',
    siteName: 'UNEOM',
    images: [
      {
        url: 'https://uneom.com/images/services/custom-design-hero-ar.jpg',
        width: 1200,
        height: 630,
        alt: 'تصميم مخصص وعلامات تجارية - يونيوم'
      }
    ],
    locale: 'ar'
  }
};

export default function CustomDesignServicePage() {
  return <CustomDesignServiceClientPage />;
} 
