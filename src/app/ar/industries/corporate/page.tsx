import { Metadata } from 'next';
import CorporateIndustryClientPage from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'زي موحد للشركات | يونيوم للأزياء الموحدة',
  description: 'زي موحد احترافي للشركات في المملكة العربية السعودية. تصميم وتنفيذ أزياء موحدة تعكس هوية علامتك التجارية بأعلى معايير الجودة.',
  keywords: 'زي موحد للشركات، يونيفورم شركات، ملابس تنفيذية، ملابس مكتبية، بدلات رسمية، زي مؤسسي، أزياء شركات في السعودية',
  openGraph: {
    title: 'زي موحد للشركات | يونيوم للأزياء الموحدة',
    description: 'زي موحد احترافي للشركات في المملكة العربية السعودية. تصميم وتنفيذ أزياء موحدة تعكس هوية علامتك التجارية بأعلى معايير الجودة.',
    url: 'https://uneom.com/ar/industries/corporate',
    siteName: 'يونيوم للأزياء الموحدة',
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: 'https://uneom.com/images/corporate-industry-og.jpg',
        width: 1200,
        height: 630,
        alt: 'زي موحد للشركات من يونيوم',
      },
    ],
  },
  alternates: {
    canonical: 'https://uneom.com/ar/industries/corporate/',
    languages: {
      'en-SA': 'https://uneom.com/industries/corporate/',
      'ar-SA': 'https://uneom.com/ar/industries/corporate/',
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
      'max-snippet': -1
    }
  }
};

export default function CorporateIndustryPage() {
  return <CorporateIndustryClientPage />;
} 
