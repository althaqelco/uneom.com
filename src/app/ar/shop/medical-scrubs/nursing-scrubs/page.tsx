import { Metadata } from 'next';
import NursingScrubsClientPage from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'أزياء التمريض الفاخرة | ملابس طبية مضادة للميكروبات | يونيوم المملكة العربية السعودية',
    description: 'أزياء تمريض فاخرة مصممة خصيصاً للممرضين والممرضات في المملكة العربية السعودية، مع ميزات راحة متطورة، حماية مضادة للميكروبات، وتصاميم محتشمة تحترم الخصوصية الثقافية.',
  keywords: ['أزياء تمريض', 'يونيفورم تمريض', 'ملابس طبية', 'أزياء طبية سعودية', 'ملابس ممرضات', 'يونيفورم مستشفيات', 'أزياء تمريض محتشمة', 'ملابس تمريض مضادة للميكروبات'],
  openGraph: {
    title: 'أزياء التمريض الفاخرة | ملابس طبية مضادة للميكروبات | يونيوم',
    description: 'أزياء تمريض فاخرة مصممة خصيصاً للممرضين والممرضات في المملكة العربية السعودية، مع ميزات راحة متطورة، حماية مضادة للميكروبات، وتصاميم محتشمة.',
    url: 'https://uneom.com/ar/shop/medical-scrubs/nursing-scrubs',
    siteName: 'يونيوم - يونيفورم مهني في المملكة العربية السعودية',
    images: [
      {
        url: 'https://uneom.com/images/products/nursing-scrubs.webp',
        width: 1200,
        height: 630,
        alt: 'أزياء التمريض الفاخرة من يونيوم',
      },
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
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function NursingScrubsPage() {
  return <NursingScrubsClientPage />;
} 