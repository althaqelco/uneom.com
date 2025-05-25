import { Metadata } from 'next';
import EnhancedSecurityClient from './EnhancedSecurityClient';

export const metadata: Metadata = {
  title: 'أزياء قطاع الأمن | يونيوم السعودية - ملابس أمنية وحراسات مهنية',
  description: 'أزياء موحدة متخصصة لقطاع الأمن في السعودية. ملابس أمنية، حراسات، أمن خاص. 670+ شركة أمنية، 93% رضا، تصاميم مهنية، 18+ سنة خبرة، هيبة واحترام، رؤية عالية، أزياء تكتيكية.',
  keywords: 'أزياء أمنية، ملابس أمن، زي أمني، أزياء حراسات، ملابس حراس، زي موحد أمني، أزياء أمن خاص، ملابس حماية، زي تكتيكي، أزياء أمن سعودية، ملابس أمن مطارات، أزياء حراسة شخصية، زي أمن صناعي',
  openGraph: {
    title: 'أزياء قطاع الأمن | يونيوم السعودية',
    description: 'أزياء موحدة متخصصة لقطاع الأمن في السعودية. ملابس أمنية وحراسات مهنية تعزز الهيبة والاحترام وكفاءة الأداء الأمني.',
    url: 'https://uneom.com/ar/industries/security/',
    siteName: 'يونيوم للأزياء الموحدة',
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: 'https://uneom.com/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg',
        width: 1200,
        height: 630,
        alt: 'أزياء قطاع الأمن من يونيوم - ملابس أمنية وحراسات مهنية',
      },
    ],
  },
  alternates: {
    canonical: 'https://uneom.com/ar/industries/security/',
    languages: {
      'en': 'https://uneom.com/industries/security/',
      'ar': 'https://uneom.com/ar/industries/security/',
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

export default function SecurityIndustryPage() {
  return <EnhancedSecurityClient />;
}
