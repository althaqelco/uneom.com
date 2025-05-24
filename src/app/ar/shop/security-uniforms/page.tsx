import { Metadata } from 'next';
import SecurityUniformsClientPage from './client';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'أزياء الأمن | زي موحد لحراس الأمن والشركات الأمنية | يونيوم المملكة العربية السعودية',
  description: 'أزياء أمنية عالية الجودة للشركات والمؤسسات الأمنية في المملكة العربية السعودية. زي حراس أمن، أزياء تكتيكية، ملابس أمن الفعاليات، وإكسسوارات أمنية مع خيارات تخصيص.',
  keywords: ['زي أمني', 'ملابس حراس أمن', 'أزياء تكتيكية', 'زي أمن الشركات', 'يونيفورم أمني سعودي', 'أزياء حراسة', 'زي أمن الفعاليات', 'إكسسوارات أمنية'],
  openGraph: {
    title: 'أزياء الأمن | زي موحد لحراس الأمن والشركات الأمنية | يونيوم',
    description: 'أزياء أمنية عالية الجودة للشركات والمؤسسات الأمنية في المملكة العربية السعودية. متانة استثنائية وتصميم احترافي.',
    url: 'https://uneom.com/ar/shop/security-uniforms/',
    siteName: 'يونيوم - يونيفورم مهني في المملكة العربية السعودية',
    images: [
      {
        url: 'https://uneom.com/images/security-uniforms.webp',
        width: 1200,
        height: 630,
        alt: 'أزياء الأمن من يونيوم',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/ar/shop/security-uniforms/',
    languages: {
      'en-SA': 'https://uneom.com/shop/security-uniforms/',
      'ar-SA': 'https://uneom.com/ar/shop/security-uniforms/',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function SecurityUniformsPage() {
  return <SecurityUniformsClientPage />;
} 