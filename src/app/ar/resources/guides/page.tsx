import { Metadata } from "next";
import GuidesClientPageArabic from "./client";
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'أدلة ومراجع الزي الموحد | موارد للمؤسسات | يونيوم السعودية',
  description: 'مجموعة شاملة من الأدلة والموارد لمساعدة المؤسسات في إدارة برامج الزي الموحد بكفاءة. تعرف على أفضل الممارسات والنصائح العملية.',
  keywords: 'أدلة الزي الموحد، موارد الزي المؤسسي، مراجع الأزياء المهنية، نصائح إدارة الزي الموحد، موارد المشتريات، أدلة المقاسات، معلومات الأقمشة، دليل العلامة التجارية، الزي الموحد في السعودية',
  openGraph: {
    title: 'أدلة ومراجع الزي الموحد | موارد للمؤسسات | يونيوم السعودية',
    description: 'مجموعة شاملة من الأدلة والموارد لمساعدة المؤسسات في إدارة برامج الزي الموحد بكفاءة.',
    type: 'website',
    locale: 'ar',
    images: [
      {
        url: '/images/resources/guides/guides-header.jpg',
        width: 1200,
        height: 630,
        alt: 'أدلة ومراجع الزي الموحد من يونيوم السعودية',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'أدلة ومراجع الزي الموحد | موارد للمؤسسات | يونيوم السعودية',
    description: 'مجموعة شاملة من الأدلة والموارد لمساعدة المؤسسات في إدارة برامج الزي الموحد.',
    images: ['/images/resources/guides/guides-header.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/ar/resources/guides',
    languages: {
      'en': 'https://uneom.com/resources/guides',
      'ar': 'https://uneom.com/ar/resources/guides',
    },
  },
};

export default function GuidesPage() {
  return <GuidesClientPageArabic />;
} 