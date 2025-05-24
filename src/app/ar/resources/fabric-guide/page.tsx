import { Metadata } from "next";
import FabricGuideClientPageArabic from "./client";
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'دليل الأقمشة للزي الموحد | خصائص المواد | يونيوم السعودية',
  description: 'دليل شامل لأقمشة ومواد الزي الموحد. تعرف على خصائص وفوائد مختلف المواد بما في ذلك القطن، البوليستر، أقمشة الأداء والخيارات المستدامة للمؤسسات السعودية.',
  keywords: 'أقمشة الزي الموحد، دليل خامات الملابس المهنية، قطن، بوليستر، أقمشة الأداء، نسيج مستدام، خصائص المواد، أقمشة مقاومة للماء، أقمشة تنفسية، مواد الزي الموحد السعودية',
  openGraph: {
    title: 'دليل الأقمشة للزي الموحد | خصائص المواد | يونيوم السعودية',
    description: 'دليل شامل لأقمشة ومواد الزي الموحد. تعرف على خصائص وفوائد مختلف المواد للمؤسسات السعودية.',
    type: 'website',
    locale: 'ar',
    images: [
      {
        url: '/images/resources/fabric-guide/fabric-guide-header.jpg',
        width: 1200,
        height: 630,
        alt: 'دليل الأقمشة والمواد للزي الموحد من يونيوم',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'دليل الأقمشة للزي الموحد | خصائص المواد | يونيوم السعودية',
    description: 'دليل شامل لأقمشة ومواد الزي الموحد. تعرف على خصائص وفوائد مختلف المواد.',
    images: ['/images/resources/fabric-guide/fabric-guide-header.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/ar/resources/fabric-guide',
    languages: {
      'en': 'https://uneom.com/resources/fabric-guide',
      'ar': 'https://uneom.com/ar/resources/fabric-guide',
    },
  },
};

export default function FabricGuidePage() {
  return <FabricGuideClientPageArabic />;
} 