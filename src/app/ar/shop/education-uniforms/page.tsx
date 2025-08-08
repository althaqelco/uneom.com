import React from 'react';
import { Metadata } from 'next';
import EducationUniformsClientPage from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'أزياء ومستلزمات المدارس والجامعات | زي موحد تعليمي عالي الجودة | يونيوم المملكة العربية السعودية',
  description: 'أزياء تعليمية عالية الجودة للمدارس والجامعات والمؤسسات التعليمية في المملكة العربية السعودية. زي مدرسي، أزياء جامعية، ملابس أعضاء هيئة التدريس، وأزياء التخرج.',
  keywords: ['زي مدرسي', 'أزياء تعليمية', 'ملابس جامعات', 'زي هيئة تدريس', 'يونيفورم طلاب', 'أزياء تخرج', 'زي مدرسي سعودي', 'ملابس مؤسسات تعليمية'],
  openGraph: {
    title: 'أزياء ومستلزمات المدارس والجامعات | زي موحد تعليمي عالي الجودة | يونيوم',
    description: 'أزياء تعليمية عالية الجودة للمدارس والجامعات والمؤسسات التعليمية في المملكة العربية السعودية.',
    url: 'https://uneom.com/ar/shop/education-uniforms/',
    siteName: 'يونيوم - يونيفورم مهني في المملكة العربية السعودية',
    images: [
      {
        url: 'https://uneom.com/images/education-uniforms.webp',
        width: 1200,
        height: 630,
        alt: 'الأزياء التعليمية من يونيوم'},
    ],
    locale: 'ar_SA',
    type: 'website'},
  alternates: {
    canonical: 'https://uneom.com/ar/shop/education-uniforms/',
    languages: {
      'en-SA': 'https://uneom.com/shop/education-uniforms/',
      'ar-SA': 'https://uneom.com/ar/shop/education-uniforms/'}},
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1}}};

export default function EducationUniformsPage() {
  return <EducationUniformsClientPage />;
} 