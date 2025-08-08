import React from 'react';
import { Metadata } from 'next';
import EnhancedFabricSelectionClient from './EnhancedFabricSelectionClient';

export const metadata: Metadata = {
  title: 'خدمات اختيار الأقمشة والمواد | يونيوم السعودية - خبراء الأقمشة التقنية والطبيعية',
  description: 'خدمات اختيار الأقمشة المتخصصة في السعودية. أقمشة طبيعية وتقنية عالية الجودة مع خصائص متقدمة. 1000+ نوع قماش، 50+ مورد عالمي، شهادات جودة دولية، خبرة 15+ سنة.',
  keywords: 'اختيار أقمشة، أقمشة تقنية، قماش طبيعي، أقمشة طبية، مواد متقدمة، أقمشة مقاومة، قطن مصري، صوف إيطالي، أقمشة ذكية، مواد عالية الجودة، خدمات أقمشة السعودية، استشارات أقمشة',
  openGraph: {
    title: 'خدمات اختيار الأقمشة والمواد | يونيوم السعودية',
    description: 'خدمات اختيار الأقمشة المتخصصة في السعودية. أقمشة طبيعية وتقنية عالية الجودة مع خصائص متقدمة وشهادات جودة دولية.',
    url: 'https://uneom.com/ar/services/fabric-selection/',
    siteName: 'يونيوم للأزياء الموحدة',
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: 'https://uneom.com/images/services/colorful-samples-of-upholstery-fabrics-for-upholst-2025-01-08-10-15-26-utc.jpg',
        width: 1200,
        height: 630,
        alt: 'خدمات اختيار الأقمشة من يونيوم - خبراء الأقمشة التقنية والطبيعية'},
    ]},
  alternates: {
    canonical: 'https://uneom.com/ar/services/fabric-selection/',
    languages: {
      'en': 'https://uneom.com/services/fabric-selection/',
      'ar': 'https://uneom.com/ar/services/fabric-selection/'}},
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

export default function FabricSelectionServicePage() {
  return <EnhancedFabricSelectionClient />;
}