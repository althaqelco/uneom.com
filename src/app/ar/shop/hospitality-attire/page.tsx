import React from 'react';
import { Metadata } from 'next';
import HospitalityAttireClientPage from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'أزياء الضيافة | زي موحد للفنادق والمطاعم | يونيوم المملكة العربية السعودية',
  description: 'أزياء ضيافة عالية الجودة للفنادق والمطاعم ومؤسسات الضيافة في المملكة العربية السعودية. زي فندقي، أزياء مطاعم، ملابس طاقم التدبير المنزلي، وأزياء كونسيرج.',
  keywords: ['زي فندقي', 'أزياء مطاعم', 'ملابس ضيافة', 'زي طاقم المطعم', 'يونيفورم فندق', 'ملابس كونسيرج', 'زي التدبير المنزلي', 'أزياء الشيف'],
  openGraph: {
    title: 'أزياء الضيافة | زي موحد للفنادق والمطاعم | يونيوم',
    description: 'أزياء ضيافة عالية الجودة للفنادق والمطاعم ومؤسسات الضيافة في المملكة العربية السعودية. أناقة استثنائية وجودة متميزة.',
    url: 'https://uneom.com/ar/shop/hospitality-attire/',
    siteName: 'يونيوم - يونيفورم مهني في المملكة العربية السعودية',
    images: [
      {
        url: 'https://uneom.com/images/hospitality-uniforms.webp',
        width: 1200,
        height: 630,
        alt: 'أزياء الضيافة من يونيوم'},
    ],
    locale: 'ar_SA',
    type: 'website'},
  alternates: {
    canonical: 'https://uneom.com/ar/shop/hospitality-attire/',
    languages: {
      'en-SA': 'https://uneom.com/shop/hospitality-attire/',
      'ar-SA': 'https://uneom.com/ar/shop/hospitality-attire/'}},
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

export default function HospitalityAttirePage() {
  return <HospitalityAttireClientPage />;
} 