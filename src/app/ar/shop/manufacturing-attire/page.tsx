import React from 'react';
import { Metadata } from 'next';
import ManufacturingAttireClientPage from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'ملابس التصنيع | أفرولات وملابس واقية للعاملين في المصانع | يونيوم المملكة العربية السعودية',
  description: 'ملابس تصنيع عالية الجودة مصممة للحماية والراحة في بيئات المصانع والصناعة الثقيلة في المملكة العربية السعودية. تشمل أفرولات صناعية، ملابس واقية، وسترات سلامة معتمدة.',
  keywords: ['ملابس تصنيع', 'أفرول صناعي', 'ملابس واقية', 'أزياء عمل صناعي', 'سترات سلامة', 'ملابس مقاومة للحرارة', 'يونيوم', 'المملكة العربية السعودية'],
  openGraph: {
    url: 'https://uneom.com/ar/shop/manufacturing-attire/',
    siteName: 'يونيوم المملكة العربية السعودية',
    images: [
      {
        url: 'https://uneom.com/images/categories/manufacturing-attire.webp',
        width: 1200,
        height: 630,
        alt: 'ملابس التصنيع من يونيوم'},
    ],
    locale: 'ar_SA'},
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true}}};

export default function ManufacturingAttirePage() {
  return <ManufacturingAttireClientPage />;
} 