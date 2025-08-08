import React from 'react';
import { Metadata } from 'next';
import RetailUniformsClientPage from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'أزياء البيع بالتجزئة | زي موحد للمتاجر والمولات | يونيوم المملكة العربية السعودية',
  description: 'أزياء احترافية وأنيقة للعاملين في قطاع البيع بالتجزئة في المملكة العربية السعودية. زي موحد مريح وعملي لموظفي المتاجر والمولات والمراكز التجارية مع خيارات تخصيص كاملة.',
  keywords: [
    'أزياء البيع بالتجزئة',
    'زي موظفي المتاجر',
    'ملابس موظفي المولات',
    'زي أمناء الصندوق',
    'أزياء مدراء المتاجر',
    'زي موحد للمراكز التجارية',
    'ملابس البيع بالتجزئة',
    'يونيفورم متاجر سعودية',
    'زي سفراء العلامة التجارية',
    'يونيوم السعودية'
  ],
  openGraph: {
    title: 'أزياء البيع بالتجزئة | زي موحد للمتاجر والمولات | يونيوم',
    description: 'أزياء احترافية وأنيقة للعاملين في قطاع البيع بالتجزئة في المملكة العربية السعودية.',
    url: 'https://uneom.com/ar/shop/retail-uniforms/',
    siteName: 'يونيوم - الزي الموحد الاحترافي في المملكة العربية السعودية',
    images: [
      {
        url: 'https://uneom.com/images/og/retail-uniforms-og-ar.jpg',
        width: 1200,
        height: 630,
        alt: 'أزياء البيع بالتجزئة من يونيوم'
      }
    ],
    locale: 'ar_SA',
    type: 'website'
  },
  alternates: {
    canonical: 'https://uneom.com/ar/shop/retail-uniforms/',
    languages: {
      'en-SA': 'https://uneom.com/shop/retail-uniforms/',
      'ar-SA': 'https://uneom.com/ar/shop/retail-uniforms/'}},
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function RetailUniformsPage() {
  return <RetailUniformsClientPage />;
} 