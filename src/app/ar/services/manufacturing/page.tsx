import { Metadata } from 'next';
import EnhancedManufacturingClient from './EnhancedManufacturingClient';

export const metadata: Metadata = {
  title: 'خدمات التصنيع والإنتاج | يونيوم السعودية - مصانع متطورة ومعايير عالمية',
  description: 'خدمات التصنيع المتخصصة للأزياء الموحدة في السعودية. مصانع حديثة، تقنيات متطورة، مراقبة جودة شاملة. 200,000+ قطعة شهرياً، 99.5% معدل جودة، شهادات ISO، خبرة 15+ سنة.',
  keywords: 'تصنيع أزياء، إنتاج ملابس، مصانع أزياء، تصنيع يونيفورم، إنتاج ملابس موحدة، مصانع سعودية، جودة التصنيع، إنتاج متطور، تصنيع احترافي، مراقبة الجودة، خدمات تصنيع السعودية، مصانع معتمدة',
  openGraph: {
    title: 'خدمات التصنيع والإنتاج | يونيوم السعودية',
    description: 'خدمات التصنيع المتخصصة للأزياء الموحدة في السعودية. مصانع حديثة مجهزة بأحدث التقنيات ومعايير جودة عالمية.',
    url: 'https://uneom.com/ar/services/manufacturing/',
    siteName: 'يونيوم للأزياء الموحدة',
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: 'https://uneom.com/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg',
        width: 1200,
        height: 630,
        alt: 'خدمات التصنيع من يونيوم - مصانع متطورة ومعايير عالمية',
      },
    ],
  },
  alternates: {
    canonical: 'https://uneom.com/ar/services/manufacturing/',
    languages: {
      'en': 'https://uneom.com/services/manufacturing/',
      'ar': 'https://uneom.com/ar/services/manufacturing/',
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
      'max-video-preview': -1
    }
  }
};

export default function ManufacturingServicePage() {
  return <EnhancedManufacturingClient />;
}