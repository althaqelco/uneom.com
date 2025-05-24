import { Metadata } from 'next';
import MechanicsOverallsClientPage from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Define SEO metadata
export const metadata: Metadata = {
  title: 'أفرولات الميكانيكا عالية الجودة | ملابس عمل مقاومة للزيوت | يونيوم المملكة العربية السعودية',
  description: 'أفرولات ميكانيكا متينة مصممة لقطاع السيارات والصناعة السعودي. تتميز بقماش مقاوم للزيوت، وركب معززة، وجيوب متعددة للأدوات، وخصر قابل للتعديل لتوفير أقصى درجات الراحة والحماية في البيئات الصعبة.',
  keywords: ['أفرول ميكانيكي السعودية', 'ملابس عمل السيارات الرياض', 'أفرولات مقاومة للزيوت', 'زي ميكانيكي صناعي', 'ملابس ورش السعودية', 'ملابس ميكانيكا متينة', 'معدات حماية شخصية للإصلاح السيارات', 'أفرولات ميكانيكا متينة المملكة'],
  openGraph: {
    title: 'أفرولات الميكانيكا عالية الجودة | ملابس عمل مقاومة للزيوت | يونيوم المملكة العربية السعودية',
    description: 'أفرولات ميكانيكا متينة مصممة لقطاع السيارات والصناعة السعودي. تتميز بقماش مقاوم للزيوت، وركب معززة، وجيوب متعددة للأدوات، وخصر قابل للتعديل لتوفير أقصى درجات الراحة والحماية في البيئات الصعبة.',
    images: [
      {
        url: 'https://uneom.com/images/products/industrial-coverall.jpg',
        width: 1200,
        height: 630,
        alt: 'أفرولات الميكانيكا عالية الجودة من يونيوم'
      }
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/ar/shop/industrial-uniforms/mechanics-overalls',
    languages: {
      'en': 'https://uneom.com/shop/industrial-uniforms/mechanics-overalls',
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

export default function MechanicsOverallsArabicPage() {
  return <MechanicsOverallsClientPage />;
} 