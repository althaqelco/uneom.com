import React from 'react';
import { Metadata } from 'next';
import EnhancedManufacturingClient from './EnhancedManufacturingClient';

export const metadata: Metadata = {
  title: 'أزياء القطاع الصناعي | يونيوم السعودية - ملابس سلامة وحماية صناعية',
  description: 'أزياء موحدة متخصصة للقطاع الصناعي في السعودية. ملابس سلامة، حماية صناعية، أزياء مصانع. 350+ مصنع، 96% رضا، معايير سلامة عالمية، 25+ سنة خبرة، حماية شاملة، مقاومة كيميائية.',
  keywords: 'أزياء صناعية، ملابس سلامة، زي صناعي، أزياء مصانع، ملابس حماية، زي موحد صناعي، أزياء عمال، ملابس أمان، زي مهني صناعي، أزياء صناعة سعودية، ملابس بتروكيماويات، أزياء معدنية، حماية صناعية',
  openGraph: {
    title: 'أزياء القطاع الصناعي | يونيوم السعودية',
    description: 'أزياء موحدة متخصصة للقطاع الصناعي في السعودية. ملابس سلامة وحماية صناعية تلبي أعلى معايير السلامة العالمية.',
    url: 'https://uneom.com/ar/industries/manufacturing/',
    siteName: 'يونيوم للأزياء الموحدة',
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: 'https://uneom.com/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg',
        width: 1200,
        height: 630,
        alt: 'أزياء القطاع الصناعي من يونيوم - ملابس سلامة وحماية صناعية'},
    ]},
  alternates: {
    canonical: 'https://uneom.com/ar/industries/manufacturing/',
    languages: {
      'en': 'https://uneom.com/industries/manufacturing/',
      'ar': 'https://uneom.com/ar/industries/manufacturing/'}},
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

export default function ManufacturingIndustryPage() {
  return <EnhancedManufacturingClient />;
}
