import { Metadata } from 'next';
import EnhancedCorporateClient from './EnhancedCorporateClient';

export const metadata: Metadata = {
  title: 'أزياء الشركات والمكاتب المؤسسية | يونيوم السعودية - رائد الأزياء المهنية',
  description: 'أزياء مؤسسية احترافية للشركات والمكاتب في السعودية. بدلات تنفيذية وأزياء مكتبية مخصصة تعكس هوية علامتك التجارية. خبرة 15+ سنة، 500+ شركة تثق بنا.',
  keywords: 'أزياء مؤسسية، بدلات تنفيذية، أزياء مكتبية، زي موحد للشركات، ملابس رسمية سعودية، أزياء الاستقبال، يونيفورم الشركات، ملابس العمل الرسمية، تفصيل بدلات، شعارات الشركات',
  openGraph: {
    title: 'أزياء الشركات والمكاتب المؤسسية | يونيوم السعودية',
    description: 'أزياء مؤسسية احترافية للشركات والمكاتب في المملكة العربية السعودية. حلول شاملة تعكس هوية علامتك التجارية مع خبرة 15+ سنة.',
    url: 'https://uneom.com/ar/industries/corporate/',
    siteName: 'يونيوم للأزياء الموحدة',
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: 'https://uneom.com/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg',
        width: 1200,
        height: 630,
        alt: 'أزياء مؤسسية احترافية من يونيوم للشركات السعودية',
      },
    ],
  },
  alternates: {
    canonical: 'https://uneom.com/ar/industries/corporate/',
    languages: {
      'en': 'https://uneom.com/industries/corporate/',
      'ar': 'https://uneom.com/ar/industries/corporate/',
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

export default function CorporateIndustryPage() {
  return <EnhancedCorporateClient />;
}
