import React from 'react';
import { Metadata } from 'next';
import ExecutiveProtectionClientPage from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'زي الحماية التنفيذية | أزياء أمنية للحماية الشخصية | يونيوم المملكة العربية السعودية',
    description: 'زي حماية متخصص مصمم للمهنيين العاملين في مجال حماية الشخصيات الهامة بالمملكة العربية السعودية. يوازن هذا الزي بين المظهر الاحترافي والوظائف التكتيكية، مع توفير توافق مع الدروع الواقية وتعزيز حرية الحركة.',
  keywords: ['زي الحماية التنفيذية', 'حماية الشخصيات', 'زي أمني', 'ملابس الحراسة', 'أزياء تنفيذية', 'ملابس تكتيكية', 'توافق مع الدروع الواقية', 'زي أمني احترافي', 'ملابس الأمن السعودية'],
  openGraph: {
    title: 'زي الحماية التنفيذية | أزياء أمنية للحماية الشخصية | يونيوم',
    description: 'زي حماية متخصص مصمم للمهنيين العاملين في مجال حماية الشخصيات الهامة بالمملكة العربية السعودية',
    url: 'https://uneom.com/ar/shop/security-uniforms/executive-protection',
    siteName: 'يونيوم',
    images: [
      {
        url: 'https://uneom.com/images/security/advanced-fabrics-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'زي الحماية التنفيذية للأفراد الأمنيين المحترفين'},
    ],
    locale: 'ar_SA',
    type: 'website'},
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

export default function ExecutiveProtectionPage() {
  return <ExecutiveProtectionClientPage />;
} 