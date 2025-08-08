import React from 'react';
import { Metadata } from 'next';
import IndustrialAttireClientPage from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'الملابس الصناعية | أزياء العمل والأفرهولات المقاومة للهب | يونيوم المملكة العربية السعودية',
  description: 'تسوق أزياء العمل الصناعية عالية الجودة والأفرهولات المقاومة للهب من يونيوم. منتجات مصممة للسلامة والمتانة في بيئات العمل القاسية، مع خيارات تخصيص للشركات الصناعية في المملكة العربية السعودية.',
  keywords: ['ملابس صناعية', 'أفرهولات مقاومة للهب', 'أزياء عمل', 'ملابس سلامة', 'أزياء مصانع', 'زي صناعي سعودي', 'ملابس واقية', 'أزياء النفط والغاز', 'ملابس الإنشاءات', 'يونيوم'],
  openGraph: {
    type: 'website',
    url: 'https://uneom.com/ar/shop/industrial-attire',
    siteName: 'يونيوم',
    images: [
      {
        url: 'https://uneom.com/images/og-industrial-attire-ar.jpg',
        width: 1200,
        height: 630,
        alt: 'الملابس الصناعية وأزياء العمل | يونيوم المملكة العربية السعودية'},
    ],
    locale: 'ar_SA'},
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true}}};

export default function IndustrialAttirePage() {
  return <IndustrialAttireClientPage />;
} 