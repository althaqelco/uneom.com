import React from 'react';
import { Metadata } from 'next';
import FactorySecurityClientPageAr from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// SEO metadata
export const metadata: Metadata = {
  title: 'يونيفورم الأمن للمصانع والمنشآت الصناعية في السعودية | يونيوم',
  description: 'يونيفورم أمني متميز للمنشآت الصناعية والمصانع في المملكة العربية السعودية. ملابس مهنية متينة مصممة لتوفير أقصى درجات الحماية والراحة.',
  keywords: 'يونيفورم أمن المصانع, ملابس الأمن الصناعي, يونيفورم أمني سعودي, معدات الحماية الأمنية, يونيفورم السلامة للمصانع, أمن المنشآت الصناعية',
  openGraph: {
    title: 'يونيفورم الأمن للمصانع والمنشآت الصناعية في السعودية | يونيوم',
    description: 'يونيفورم أمني متميز للمنشآت الصناعية والمصانع في المملكة العربية السعودية. ملابس مهنية متينة مصممة لتوفير أقصى درجات الحماية والراحة.',
    images: ['/images/industries/factory_industry/factory-security-uniform-main.jpg']}
};

export default function FactorySecurityPageAr() {
  return <FactorySecurityClientPageAr />;
} 