import { Metadata } from 'next';
import HighVisibilityClothingClientPage from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'ملابس عالية الرؤية | سترات وجاكيتات سلامة | يونيوم المملكة العربية السعودية',
  description: 'تسوق ملابس سلامة عالية الرؤية من يونيوم. سترات سلامة، جاكيتات عاكسة، وبدلات عمل متوافقة مع المعايير العالمية مثل ANSI/ISEA 107 و ISO 20471، مصممة للمواقع الإنشائية والصناعية.',
  keywords: ['ملابس عالية الرؤية', 'سترات سلامة', 'جاكيتات عاكسة', 'بدلات سلامة', 'ملابس متوافقة مع أنسي', 'سترات عاكسة', 'ملابس سلامة صناعية', 'يونيوم'],
  openGraph: {
    title: 'ملابس عالية الرؤية | سترات وجاكيتات سلامة | يونيوم',
    description: 'تسوق ملابس سلامة عالية الرؤية من يونيوم. منتجات متوافقة مع المعايير العالمية للسلامة.',
    url: 'https://uneom.com/ar/shop/high-visibility-clothing/',
    siteName: 'يونيوم',
    images: [
      {
        url: 'https://uneom.com/images/high-visibility-clothing.webp',
        width: 1200,
        height: 630,
        alt: 'ملابس عالية الرؤية من يونيوم',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/ar/shop/high-visibility-clothing/',
    languages: {
      'en-SA': 'https://uneom.com/shop/high-visibility-clothing/',
      'ar-SA': 'https://uneom.com/ar/shop/high-visibility-clothing/',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function HighVisibilityClothingPage() {
  return <HighVisibilityClothingClientPage />;
} 