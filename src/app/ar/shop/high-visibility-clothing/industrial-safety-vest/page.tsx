import React from 'react';
import { Metadata } from 'next';
import IndustrialSafetyVestClientPage from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Define SEO metadata
export const metadata: Metadata = {
  title: 'سترات السلامة عالية الرؤية | متوافقة مع معيار ANSI/ISEA 107 Class 2 | يونيوم المملكة العربية السعودية',
  description: 'سترات سلامة صناعية عالية الجودة لمواقع العمل السعودية. متوافقة مع معيار ANSI/ISEA 107 مع أقمشة عالية الرؤية ومواد عاكسة وبناء متين لتوفير أقصى درجات الحماية.',
  keywords: 'سترة سلامة صناعية السعودية، ملابس عالية الرؤية الرياض، سترة متوافقة مع ANSI 107 جدة، سترة سلامة من الفئة 2 الدمام، ملابس عاكسة سعودية، سترة سلامة للبناء المملكة العربية السعودية، ملابس سلامة للنفط والغاز',
  openGraph: {
    title: 'سترات السلامة الصناعية | متوافقة مع معيار ANSI/ISEA 107 | يونيوم المملكة العربية السعودية',
    description: 'سترات سلامة صناعية عالية الجودة لمواقع العمل السعودية. متوافقة مع معيار ANSI/ISEA 107 مع أقمشة عالية الرؤية ومواد عاكسة وبناء متين لتوفير أقصى درجات الحماية.',
    images: [
      {
        url: 'https://uneom.com/images/products/industrial-safety-vest.webp',
        width: 1200,
        height: 630,
        alt: 'سترة السلامة الصناعية من يونيوم'}
    ],
    locale: 'ar_SA',
    type: 'website'},
  alternates: {
    canonical: 'https://uneom.com/ar/shop/high-visibility-clothing/industrial-safety-vest',
    languages: {
      'en': 'https://uneom.com/shop/high-visibility-clothing/industrial-safety-vest'}},
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1}}};

export default function IndustrialSafetyVestArabicPage() {
  // Server component that renders the client component
  return <IndustrialSafetyVestClientPage />;
} 