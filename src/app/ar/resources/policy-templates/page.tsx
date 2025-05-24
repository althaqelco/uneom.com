import { Metadata } from "next";
import PolicyTemplatesClientPageArabic from "./client";
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'قوالب سياسة الزي الموحد | يونيوم السعودية',
  description: 'نماذج سياسات زي موحد قابلة للتخصيص للمؤسسات في السعودية. قم بتنزيل قوالب لسياسات الزي الموحد للرعاية الصحية، الضيافة، الصناعة والمكاتب.',
  keywords: 'قوالب سياسة الزي الموحد، نماذج سياسات الزي، سياسة الزي الموحد للشركات، إرشادات الزي الموحد، سياسة الزي للرعاية الصحية، سياسة الزي للضيافة، يونيوم السعودية',
  openGraph: {
    title: 'قوالب سياسة الزي الموحد | يونيوم السعودية',
    description: 'نماذج سياسات زي موحد قابلة للتخصيص للمؤسسات في السعودية. قم بتنزيل قوالب لسياسات الزي الموحد.',
    url: 'https://uneom.com/ar/resources/policy-templates',
    type: 'website',
    locale: 'ar_SA',
    images: [
      {
        url: '/images/resources/policy-templates-og.jpg', // تأكد من وجود هذه الصورة
        width: 1200,
        height: 630,
        alt: 'قوالب سياسة الزي الموحد من يونيوم',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'قوالب سياسة الزي الموحد | يونيوم السعودية',
    description: 'نماذج سياسات زي موحد قابلة للتخصيص للمؤسسات في السعودية.',
    images: ['/images/resources/policy-templates-og.jpg'], // تأكد من وجود هذه الصورة
  },
  alternates: {
    canonical: 'https://uneom.com/ar/resources/policy-templates',
    languages: {
      'en': 'https://uneom.com/resources/policy-templates',
      'ar': 'https://uneom.com/ar/resources/policy-templates',
    },
  },
};

export default function PolicyTemplatesPage() {
  return <PolicyTemplatesClientPageArabic />;
} 