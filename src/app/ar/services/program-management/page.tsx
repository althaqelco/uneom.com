import { Metadata } from 'next';
import ProgramManagementClientPageArabic from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'إدارة برامج الزي الموحد | خدمات إدارة برامج اليونيفورم المؤسسي | يونيوم',
  description: 'خدمات متكاملة لإدارة برامج الزي الموحد للمؤسسات والشركات، من التخطيط الاستراتيجي إلى التنفيذ والمتابعة المستمرة. حلول مخصصة تضمن أعلى معايير الجودة وكفاءة التوريد والتوزيع',
  keywords: [
    'إدارة برامج الزي الموحد',
    'خدمات إدارة اليونيفورم',
    'برنامج الزي المؤسسي',
    'إدارة مخزون الزي الموحد',
    'سياسات الزي الشركات',
    'توحيد الزي المؤسسي',
    'توريد الزي للشركات',
    'إدارة الزي الموحد للموظفين',
    'تخطيط برامج الزي',
    'خدمات يونيوم السعودية'
  ],
  openGraph: {
    title: 'إدارة برامج الزي الموحد | خدمات إدارة برامج اليونيفورم المؤسسي | يونيوم',
    description: 'خدمات متكاملة لإدارة برامج الزي الموحد للمؤسسات والشركات في المملكة العربية السعودية',
    url: 'https://uneom.com/ar/services/program-management',
    siteName: 'Uneom',
    images: [
      {
        url: 'https://uneom.com/images/og/program-management-service.webp',
        width: 1200,
        height: 630,
        alt: 'إدارة برامج الزي الموحد | يونيوم'
      }
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://uneom.com/ar/services/program-management',
    languages: {
      'en': 'https://uneom.com/services/program-management',
      'ar': 'https://uneom.com/ar/services/program-management',
    },
  },
};

export default function ProgramManagementArabicPage() {
  return <ProgramManagementClientPageArabic />;
} 
