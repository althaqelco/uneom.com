import React from 'react';
import { Metadata } from 'next';
import SecurityOfficerUniformClientPage from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'زي ضابط الأمن الاحترافي | أزياء أمنية متينة ومريحة | يونيوم المملكة العربية السعودية',
    description: 'زي ضابط أمن عالي الجودة مصمم للمتانة والراحة ومظهر احترافي آمر. مصنوع من مواد متميزة لتحمل الارتداء اليومي في بيئات الأمن الصعبة في جميع أنحاء المملكة العربية السعودية.',
  keywords: ['زي ضابط أمن', 'يونيفورم أمني', 'بدلة حراسة', 'ملابس أمن', 'زي أمن سعودي', 'أزياء حراسة', 'ملابس شركات أمنية', 'يونيوم'],
  openGraph: {
    title: 'زي ضابط الأمن الاحترافي | أزياء أمنية متينة ومريحة | يونيوم',
    description: 'زي ضابط أمن عالي الجودة مصمم للمتانة والراحة ومظهر احترافي آمر. خيارات تخصيص متعددة متاحة.',
    url: 'https://uneom.com/ar/shop/security-uniforms/security-officer-uniform/',
    siteName: 'يونيوم',
    images: [
      {
        url: 'https://uneom.com/images/security-officer-uniform.webp',
        width: 1200,
        height: 630,
        alt: 'زي ضابط الأمن من يونيوم'},
    ],
    locale: 'ar_SA',
    type: 'website'},
  alternates: {
    canonical: 'https://uneom.com/ar/shop/security-uniforms/security-officer-uniform/',
    languages: {
      'en-SA': 'https://uneom.com/shop/security-uniforms/security-officer-uniform/',
      'ar-SA': 'https://uneom.com/ar/shop/security-uniforms/security-officer-uniform/'}},
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1}}};

export default function SecurityOfficerUniformPage() {
  return <SecurityOfficerUniformClientPage />;
} 