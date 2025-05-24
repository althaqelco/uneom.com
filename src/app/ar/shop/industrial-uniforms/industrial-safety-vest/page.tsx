import { Metadata } from 'next';
import IndustrialSafetyVestClientPage from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'سترات السلامة الصناعية المتينة | مقاومة للحرارة ومتوافقة مع معيار ANSI/ISEA 107 | يونيوم',
  description: 'سترات سلامة عالية الوضوح معتمدة لمواقع العمل في المملكة العربية السعودية، متوافقة مع معايير ANSI/ISEA 107 الفئة 2، توفر رؤية محسّنة وحماية في بيئات العمل منخفضة الإضاءة.',
  keywords: ['سترة سلامة صناعية', 'معدات سلامة عالية الوضوح', 'سترة أمان صناعية ANSI', 'سترة عاكسة للعمال', 'معدات السلامة المهنية', 'سترة سلامة متوافقة مع أرامكو', 'معدات حماية شخصية سعودية'],
  openGraph: {
    title: 'سترات السلامة الصناعية | متوافقة مع معيار ANSI/ISEA 107 | يونيوم المملكة العربية السعودية',
    description: 'سترات سلامة عالية الوضوح معتمدة لمواقع العمل في المملكة العربية السعودية.',
    url: 'https://uneom.com/ar/shop/industrial-uniforms/industrial-safety-vest/',
    siteName: 'يونيوم - الزي الموحد المهني في المملكة العربية السعودية',
    images: [
      {
        url: 'https://uneom.com/images/industries/Factory_Industrial/Safety_Vest_1.webp',
        width: 1200,
        height: 630,
        alt: 'سترات السلامة الصناعية من يونيوم'
      }
    ],
    locale: 'ar_SA',
    type: 'website'
  },
  alternates: {
    canonical: 'https://uneom.com/ar/shop/industrial-uniforms/industrial-safety-vest/',
    languages: {
      'en': 'https://uneom.com/shop/industrial-uniforms/industrial-safety-vest/'
    }
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function IndustrialSafetyVestPage() {
  return <IndustrialSafetyVestClientPage />;
} 