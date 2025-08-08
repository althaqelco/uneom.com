import React from 'react';
import { Metadata } from 'next';
import EnhancedQualityAssuranceClient from './EnhancedQualityAssuranceClient';

export const metadata: Metadata = {
  title: 'خدمات ضمان الجودة | يونيوم السعودية - معايير عالمية ومراقبة شاملة',
  description: 'خدمات ضمان الجودة المتخصصة للأزياء الموحدة في السعودية. معايير ISO 9001، مراقبة شاملة، 99.5% معدل جودة، 50+ نقطة فحص، شهادات دولية معتمدة، نظام مراقبة 24/7.',
  keywords: 'ضمان الجودة، مراقبة الجودة، معايير الجودة، اختبارات الجودة، شهادات ISO، فحص المنتجات، جودة الأزياء، معايير التصنيع، مراقبة الإنتاج، ضمان المطابقة، خدمات جودة السعودية، شهادات معتمدة',
  openGraph: {
    title: 'خدمات ضمان الجودة | يونيوم السعودية',
    description: 'خدمات ضمان الجودة المتخصصة للأزياء الموحدة في السعودية. معايير ISO 9001 ومراقبة شاملة لضمان أعلى مستويات الجودة.',
    url: 'https://uneom.com/ar/services/quality-assurance/',
    siteName: 'يونيوم للأزياء الموحدة',
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: '/images/tailor-working-on-a-suit-in-his-workshop-2023-11-27-05-01-04-utc.jpg',
        width: 1200,
        height: 630,
        alt: 'خدمات ضمان الجودة من يونيوم - معايير عالمية ومراقبة شاملة'},
    ]},
  alternates: {
    canonical: 'https://uneom.com/ar/services/quality-assurance/',
    languages: {
      'en': 'https://uneom.com/services/quality-assurance/',
      'ar': 'https://uneom.com/ar/services/quality-assurance/'}},
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  }
};

export default function QualityAssuranceServicePage() {
  return <EnhancedQualityAssuranceClient />;
}