import { Metadata } from "next";
import ProcurementGuideClientPageArabic from "./client";
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'دليل مشتريات الزي الموحد | إرشادات للمؤسسات | يونيوم السعودية',
  description: 'دليل شامل لشراء الزي الموحد للمؤسسات في السعودية. نصائح استراتيجية وإرشادات خطوة بخطوة لاختيار وشراء زي موحد عالي الجودة وفعال من حيث التكلفة.',
  keywords: 'دليل مشتريات الزي الموحد، شراء الزي الموحد للشركات، اختيار مورد الملابس المهنية، ميزانية الزي الموحد، مواصفات الأزياء المؤسسية، استراتيجية شراء الملابس المهنية، مشتريات الزي الموحد في السعودية',
  openGraph: {
    title: 'دليل مشتريات الزي الموحد | إرشادات للمؤسسات | يونيوم السعودية',
    description: 'دليل شامل لشراء الزي الموحد للمؤسسات في السعودية. نصائح استراتيجية لاختيار وشراء زي موحد عالي الجودة.',
    type: 'website',
    locale: 'ar',
    images: [
      {
        url: '/images/resources/procurement-guide/header-image.jpg',
        width: 1200,
        height: 630,
        alt: 'دليل مشتريات الزي الموحد للمؤسسات في السعودية',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'دليل مشتريات الزي الموحد | إرشادات للمؤسسات | يونيوم السعودية',
    description: 'دليل شامل لشراء الزي الموحد للمؤسسات في السعودية.',
    images: ['/images/resources/procurement-guide/header-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/ar/resources/procurement-guide',
    languages: {
      'en': 'https://uneom.com/resources/procurement-guide',
      'ar': 'https://uneom.com/ar/resources/procurement-guide',
    },
  },
};

export default function ProcurementGuidePage() {
  return <ProcurementGuideClientPageArabic />;
}
