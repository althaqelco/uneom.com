import { Metadata } from "next";
import SizeGuideClientPageArabic from "./client";
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'دليل مقاسات الزي الموحد | جداول القياسات | يونيوم السعودية',
  description: 'جداول شاملة لمقاسات الزي الموحد وأدلة القياسات للشركات والرعاية الصحية والضيافة وملابس العمل الصناعية. احصل على المقاس المثالي لمؤسستك السعودية.',
  keywords: 'دليل مقاسات الزي الموحد، جداول قياسات ملابس العمل، مقاسات الزي الموحد السعودية، قياسات ملابس الشركات، مقاسات ملابس العمل الصناعية، مقاس زي الرعاية الصحية، قياسات زي الضيافة',
  openGraph: {
    title: 'دليل مقاسات الزي الموحد | جداول القياسات | يونيوم السعودية',
    description: 'جداول شاملة لمقاسات الزي الموحد وأدلة القياسات للشركات والرعاية الصحية والضيافة وملابس العمل الصناعية. احصل على المقاس المثالي لمؤسستك السعودية.',
    type: 'website',
    locale: 'ar',
    images: [
      {
        url: '/images/professional-textile-expert-checking-the-quality-of-a-fabric-in-a-factory-man-SBI-300990818.jpg',
        width: 1200,
        height: 630,
        alt: 'دليل مقاسات وجداول قياسات الزي الموحد من يونيوم',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'دليل مقاسات الزي الموحد | جداول القياسات | يونيوم السعودية',
    description: 'جداول شاملة لمقاسات الزي الموحد وأدلة القياسات للشركات والرعاية الصحية والضيافة وملابس العمل الصناعية.',
    images: ['/images/professional-textile-expert-checking-the-quality-of-a-fabric-in-a-factory-man-SBI-300990818.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/ar/resources/size-guide',
    languages: {
      'en': 'https://uneom.com/resources/size-guide',
      'ar': 'https://uneom.com/ar/resources/size-guide',
    },
  },
};

export default function SizeGuidePage() {
  return <SizeGuideClientPageArabic />;
} 