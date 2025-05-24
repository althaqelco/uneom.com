import { Metadata } from 'next';
import IndustrialJacketClientPage from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'سترة صناعية متينة | مقاومة للحرارة والاشتعال | يونيوم المملكة العربية السعودية',
  description: 'سترة صناعية متينة مصممة خصيصاً لبيئات العمل القاسية في المملكة العربية السعودية، توفر حماية ممتازة ضد الحرارة والاشتعال، مع مواد عالية التحمل ومقاومة للزيوت والكيماويات.',
  keywords: 'سترة صناعية السعودية, ملابس عمال مقاومة للحرارة, سترة مقاومة للاشتعال الرياض, معدات الحماية الشخصية الصناعية, ملابس عمال النفط والغاز, سترة عمل صناعية, ملابس أمان للمصانع السعودية',
  openGraph: {
    title: 'سترة صناعية متينة | مقاومة للحرارة والاشتعال | يونيوم المملكة العربية السعودية',
    description: 'سترة صناعية متينة مصممة خصيصاً لبيئات العمل القاسية في المملكة العربية السعودية، توفر حماية ممتازة ضد الحرارة والاشتعال، مع مواد عالية التحمل ومقاومة للزيوت والكيماويات.',
    images: [
      {
        url: 'https://uneom.com/images/industries/Factory_Industrial/Factory_Industrial_Workwear_2.jpg',
        width: 1200,
        height: 630,
        alt: 'سترة صناعية متينة من يونيوم'
      }
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/ar/shop/industrial-uniforms/industrial-jacket',
    languages: {
      'en': 'https://uneom.com/shop/industrial-uniforms/industrial-jacket',
    },
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
};

export default function IndustrialJacketArabicPage() {
  return <IndustrialJacketClientPage />;
} 