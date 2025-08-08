import React from 'react';
import { Metadata } from 'next';
import IndustrialCoverallProClientPage from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Define SEO metadata
export const metadata: Metadata = {
  title: 'أفرول صناعي بروفيشنال | أزياء موحدة للمصانع والمنشآت الصناعية | يونيوم المملكة العربية السعودية',
  description: 'أفرول صناعي متين للاستخدام الشاق في بيئات العمل المتطلبة. مصمم خصيصاً لتوفير الحماية والراحة وسهولة الحركة للعاملين في المنشآت الصناعية في المملكة العربية السعودية.',
  keywords: ['أفرول صناعي متين', 'ملابس العمل الصناعية', 'أفرول مقاوم للزيوت', 'أزياء عمل للمصانع', 'ملابس موحدة للعمال', 'أفرولات يونيوم', 'زي عمل صناعي سعودي', 'ملابس السلامة المهنية', 'أفرول بمواصفات عالية للصناعة'],
  openGraph: {
    title: 'أفرول صناعي بروفيشنال | أزياء موحدة للمصانع والمنشآت الصناعية | يونيوم المملكة العربية السعودية',
    description: 'أفرول صناعي متين للاستخدام الشاق في بيئات العمل المتطلبة. مصمم خصيصاً لتوفير الحماية والراحة وسهولة الحركة للعاملين في المنشآت الصناعية في المملكة العربية السعودية.',
    images: [
      {
        url: 'https://uneom.com/images/products/industrial-coverall-pro.webp',
        width: 1200,
        height: 630,
        alt: 'أفرول صناعي بروفيشنال من يونيوم'
      }
    ],
    locale: 'ar_SA',
    type: 'website'},
  alternates: {
    canonical: 'https://uneom.com/ar/shop/industrial-uniforms/industrial-coverall-pro',
    languages: {
      'en': 'https://uneom.com/shop/industrial-uniforms/industrial-coverall-pro'}},
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1}}};

export default function IndustrialCoverallProPage() {
  return <IndustrialCoverallProClientPage />;
} 