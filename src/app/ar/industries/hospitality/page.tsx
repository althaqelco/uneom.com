import { Metadata } from 'next';
import EnhancedHospitalityClient from './EnhancedHospitalityClient';

export const metadata: Metadata = {
  title: 'أزياء قطاع الضيافة | يونيوم السعودية - ملابس فنادق ومطاعم فاخرة',
  description: 'أزياء موحدة متخصصة لقطاع الضيافة في السعودية. ملابس فنادق، مطاعم، منتجعات. 550+ منشأة ضيافة، 94% رضا، تصاميم فاخرة، 20+ سنة خبرة، مطابقة للثقافة السعودية، أزياء استقبال وخدمة.',
  keywords: 'أزياء ضيافة، ملابس فنادق، زي فندقي، أزياء مطاعم، ملابس خدمة، زي موحد فندقي، أزياء منتجعات، ملابس كونسيرج، زي استقبال، أزياء ضيافة سعودية، ملابس طهاة، أزياء فاخرة، زي خدمة طعام',
  openGraph: {
    title: 'أزياء قطاع الضيافة | يونيوم السعودية',
    description: 'أزياء موحدة متخصصة لقطاع الضيافة في السعودية. ملابس فنادق ومطاعم فاخرة تعزز تجربة الضيوف وتعكس مستوى الخدمة المتميز.',
    url: 'https://uneom.com/ar/industries/hospitality/',
    siteName: 'يونيوم للأزياء الموحدة',
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: 'https://uneom.com/images/hospitality/hospitality_uniform_formal.jpg',
        width: 1200,
        height: 630,
        alt: 'أزياء قطاع الضيافة من يونيوم - ملابس فنادق ومطاعم فاخرة',
      },
    ],
  },
  alternates: {
    canonical: 'https://uneom.com/ar/industries/hospitality/',
    languages: {
      'en': 'https://uneom.com/industries/hospitality/',
      'ar': 'https://uneom.com/ar/industries/hospitality/',
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

export default function HospitalityIndustryPage() {
  return <EnhancedHospitalityClient />;
}