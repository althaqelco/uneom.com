import { Metadata } from 'next';
import IndustrialCoverallClientPage from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'بدلة العمل الصناعية المقاومة للهب | متوافقة مع معايير NFPA 2112 | يونيوم المملكة العربية السعودية',
  description: 'بدلة عمل صناعية مقاومة للهب ومصممة خصيصاً للبيئات الصناعية في المملكة العربية السعودية، متوافقة مع معايير NFPA 2112، توفر حماية فائقة لقطاعات النفط والغاز والتصنيع.',
  keywords: ['بدلة عمل مقاومة للهب', 'أفرول صناعي', 'ملابس واقية من اللهب', 'بدلة نفط وغاز', 'ملابس صناعية', 'معدات حماية NFPA 2112', 'زي صناعي سعودي'],
  openGraph: {
    title: 'بدلة العمل الصناعية المقاومة للهب | متوافقة مع معايير NFPA 2112 | يونيوم المملكة العربية السعودية',
    description: 'بدلة عمل صناعية مقاومة للهب ومصممة خصيصاً للبيئات الصناعية في المملكة العربية السعودية، متوافقة مع معايير NFPA 2112، توفر حماية فائقة لقطاعات النفط والغاز والتصنيع.',
    url: 'https://uneom.com/ar/shop/industrial-uniforms/industrial-coverall/',
    siteName: 'يونيوم المملكة العربية السعودية',
    images: [
      {
        url: 'https://uneom.com/images/industries/Factory_Industrial/Industrial_Coverall_1.webp',
        width: 1200,
        height: 630,
        alt: 'بدلة العمل الصناعية المقاومة للهب من يونيوم',
      },
    ],
    locale: 'ar_SA',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function IndustrialCoverallPage() {
  return <IndustrialCoverallClientPage />;
} 