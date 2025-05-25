import { Metadata } from 'next';
import EnhancedRetailClient from './EnhancedRetailClient';

export const metadata: Metadata = {
  title: 'أزياء قطاع التجارة والمتاجر | يونيوم السعودية - ملابس موظفي المبيعات والخدمة',
  description: 'أزياء موحدة متخصصة لقطاع التجارة والمتاجر في السعودية. ملابس مبيعات، خدمة عملاء، متاجر. 1,130+ متجر، 89% رضا، تصاميم أنيقة، 22+ سنة خبرة، تعزيز الهوية التجارية، أزياء صيدليات.',
  keywords: 'أزياء تجارية، ملابس مبيعات، زي متجر، أزياء متاجر، ملابس خدمة عملاء، زي موحد تجاري، أزياء صيدليات، ملابس مطاعم، زي كاشير، أزياء تجارة سعودية، ملابس هايبر ماركت، أزياء بوتيك، زي موظفي متاجر',
  openGraph: {
    title: 'أزياء قطاع التجارة والمتاجر | يونيوم السعودية',
    description: 'أزياء موحدة متخصصة لقطاع التجارة والمتاجر في السعودية. ملابس موظفي المبيعات والخدمة تعزز الهوية التجارية وتحسن تجربة العملاء.',
    url: 'https://uneom.com/ar/industries/retail-shops/',
    siteName: 'يونيوم للأزياء الموحدة',
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: 'https://uneom.com/images/woman-in-business-casual-attire-smiling-SBI-300979979.jpg',
        width: 1200,
        height: 630,
        alt: 'أزياء قطاع التجارة والمتاجر من يونيوم - ملابس موظفي المبيعات والخدمة',
      },
    ],
  },
  alternates: {
    canonical: 'https://uneom.com/ar/industries/retail-shops/',
    languages: {
      'en': 'https://uneom.com/industries/retail-shops/',
      'ar': 'https://uneom.com/ar/industries/retail-shops/',
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

export default function RetailShopsIndustryPage() {
  return <EnhancedRetailClient />;
}