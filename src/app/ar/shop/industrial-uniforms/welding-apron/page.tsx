import React from 'react';
import { Metadata } from 'next';
import WeldingApronClientPage from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'مريلة اللحام الجلدية الفاخرة | معدات الحماية الشخصية من يونيوم',
  description: 'مرايل لحام جلدية مقاومة للهب مصنوعة من جلد البقر الفاخر بسمك 1.2-1.4 ملم مع خياطة مقواة بخيط الكيفلار، مصممة للحماية في البيئات الصناعية السعودية.',
  keywords: ['مريلة لحام جلدية', 'معدات حماية للحام', 'مريلة مقاومة للهب', 'معدات سلامة صناعية', 'ملابس واقية للمهنيين', 'ملابس مهنية', 'السعودية'],
  openGraph: {
    title: 'مريلة اللحام الجلدية الفاخرة | معدات الحماية الشخصية من يونيوم',
    description: 'مرايل لحام جلدية مقاومة للهب مصنوعة من جلد البقر الفاخر بسمك 1.2-1.4 ملم مع خياطة مقواة بخيط الكيفلار، مصممة للحماية في البيئات الصناعية السعودية.',
    url: 'https://uneom.com/ar/shop/industrial-uniforms/welding-apron/',
    siteName: 'يونيوم المملكة العربية السعودية',
    images: [
      {
        url: 'https://uneom.com/images/industries/Factory_Industrial/Welding_Apron_1.webp',
        width: 1200,
        height: 630,
        alt: 'مريلة اللحام الجلدية الفاخرة من يونيوم'},
    ],
    locale: 'ar_SA'},
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true}}};

export default function WeldingApronPage() {
  return <WeldingApronClientPage />;
} 