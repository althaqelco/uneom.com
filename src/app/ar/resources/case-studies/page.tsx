import React from 'react';
import { Metadata } from "next";
import CaseStudiesClientPageArabic from "./client";
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'قصص نجاح عملاء يونيوم | دراسات حالة | الزي الموحد المتميز',
  description: 'استكشف قصص نجاح حقيقية من عملائنا الذين حسنوا صورة علامتهم التجارية وكفاءة العمليات من خلال برامج الزي الموحد المخصصة من يونيوم في المملكة العربية السعودية.',
  keywords: 'قصص نجاح العملاء، دراسات حالة الزي الموحد، نجاحات يونيوم، حلول الزي الموحد في السعودية، تحسين الزي المؤسسي، شهادات العملاء، مشاريع ناجحة للزي الموحد',
  openGraph: {
    title: 'قصص نجاح عملاء يونيوم | دراسات حالة | الزي الموحد المتميز',
    description: 'استكشف كيف ساعدت حلول يونيوم للزي الموحد المؤسسات في جميع أنحاء المملكة العربية السعودية.',
    type: 'website',
    locale: 'ar',
    images: [
      {
        url: '/images/hero/case-studies-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'قصص نجاح عملاء يونيوم للزي الموحد'},
    ]},
  twitter: {
    card: 'summary_large_image',
    title: 'قصص نجاح عملاء يونيوم | دراسات حالة | الزي الموحد المتميز',
    description: 'استكشف كيف ساعدت حلول يونيوم للزي الموحد المؤسسات في السعودية.',
    images: ['/images/hero/case-studies-hero.jpg']},
  robots: {
    index: true,
    follow: true},
  alternates: {
    canonical: 'https://uneom.com/ar/resources/case-studies',
    languages: {
      'en': 'https://uneom.com/resources/case-studies',
      'ar': 'https://uneom.com/ar/resources/case-studies'}}};

export default function CaseStudiesPage() {
  return <CaseStudiesClientPageArabic />;
} 