import { Metadata } from 'next';
import EnhancedAviationClient from './EnhancedAviationClient';

export const metadata: Metadata = {
  title: 'أزياء الطيران والخطوط الجوية | يونيوم السعودية - مطابق لمعايير الطيران المدني',
  description: 'أزياء طيران احترافية لشركات الطيران السعودية. أزياء طيارين، مضيفات طيران، خدمات أرضية مع تصاميم محتشمة وأناقة عالمية. مطابق لمعايير الطيران المدني، 25+ شركة طيران تثق بنا.',
  keywords: 'أزياء طيران، زي طيار، مضيفة طيران، يونيفورم طيران، ملابس طاقم طيران، أزياء خطوط جوية، زي خدمات أرضية، ملابس مطار، أزياء طيران سعودية، يونيفورم مضيفات، معايير الطيران المدني',
  openGraph: {
    title: 'أزياء الطيران والخطوط الجوية | يونيوم السعودية',
    description: 'أزياء طيران احترافية مطابقة لمعايير الطيران المدني لشركات الطيران السعودية. تصاميم محتشمة وأناقة عالمية لجميع أطقم الطيران.',
    url: 'https://uneom.com/ar/industries/aviation/',
    siteName: 'يونيوم للأزياء الموحدة',
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: 'https://uneom.com/images/cheerful-women-stewardesses-standing-on-airplane-s-2023-11-27-05-08-55-utc.jpg',
        width: 1200,
        height: 630,
        alt: 'أزياء الطيران المعتمدة من يونيوم لشركات الطيران السعودية',
      },
    ],
  },
  alternates: {
    canonical: 'https://uneom.com/ar/industries/aviation/',
    languages: {
      'en': 'https://uneom.com/industries/aviation/',
      'ar': 'https://uneom.com/ar/industries/aviation/',
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

export default function AviationIndustryPage() {
  return <EnhancedAviationClient />;
}
