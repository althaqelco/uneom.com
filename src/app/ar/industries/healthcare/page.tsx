import { Metadata } from 'next';
import EnhancedHealthcareClient from './EnhancedHealthcareClient';

export const metadata: Metadata = {
  title: 'أزياء الرعاية الصحية والملابس الطبية | يونيوم السعودية - معتمد من وزارة الصحة',
  description: 'أزياء طبية احترافية للمستشفيات والعيادات في السعودية. سكراب طبي، أردية جراحية، معاطف مختبر مع تقنيات مضادة للبكتيريا. معتمد من وزارة الصحة، 200+ مؤسسة صحية تثق بنا.',
  keywords: 'أزياء طبية، سكراب طبي، ملابس طبية، أردية جراحية، معاطف مختبر، زي تمريض، ملابس مستشفيات، أزياء صحية سعودية، يونيفورم طبي، ملابس أطباء، زي طبي محتشم، معتمد وزارة الصحة',
  openGraph: {
    title: 'أزياء الرعاية الصحية والملابس الطبية | يونيوم السعودية',
    description: 'أزياء طبية احترافية معتمدة من وزارة الصحة للمستشفيات والعيادات في المملكة العربية السعودية. تقنيات مضادة للبكتيريا وحلول شاملة.',
    url: 'https://uneom.com/ar/industries/healthcare/',
    siteName: 'يونيوم للأزياء الموحدة',
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: 'https://uneom.com/images/hero/doctors-team-walking-in-modern-hospital-corridor-indoors-poeople-group-sbi-322343728.jpg',
        width: 1200,
        height: 630,
        alt: 'أزياء الرعاية الصحية المعتمدة من يونيوم للمؤسسات الطبية السعودية',
      },
    ],
  },
  alternates: {
    canonical: 'https://uneom.com/ar/industries/healthcare/',
    languages: {
      'en': 'https://uneom.com/industries/healthcare/',
      'ar': 'https://uneom.com/ar/industries/healthcare/',
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

export default function HealthcareIndustryPage() {
  return <EnhancedHealthcareClient />;
}