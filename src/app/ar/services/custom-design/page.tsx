import { Metadata } from 'next';
import EnhancedCustomDesignClient from './EnhancedCustomDesignClient';

export const metadata: Metadata = {
  title: 'خدمات التصميم المخصص والعلامات التجارية | يونيوم السعودية - تصاميم فريدة تعكس هويتك',
  description: 'خدمات تصميم الأزياء الموحدة المخصصة في السعودية. تصاميم فريدة تعكس هوية علامتك التجارية مع خبرة 15+ سنة. 500+ تصميم مخصص، 98% رضا العملاء، فريق مصممين محترفين.',
  keywords: 'تصميم أزياء مخصص، تصميم يونيفورم، علامة تجارية أزياء، تصميم ملابس موحدة، هوية بصرية أزياء، تخصيص ملابس عمل، تصميم زي موحد سعودي، شعارات مطرزة، ألوان مخصصة، تصميم احترافي، خدمات تصميم السعودية',
  openGraph: {
    title: 'خدمات التصميم المخصص والعلامات التجارية | يونيوم السعودية',
    description: 'خدمات تصميم الأزياء الموحدة المخصصة في السعودية. تصاميم فريدة تعكس هوية علامتك التجارية مع خبرة 15+ سنة وفريق مصممين محترفين.',
    url: 'https://uneom.com/ar/services/custom-design/',
    siteName: 'يونيوم للأزياء الموحدة',
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: '/images/tailor-working-on-a-suit-in-his-workshop-2023-11-27-05-01-04-utc.jpg',
        width: 1200,
        height: 630,
        alt: 'خدمات التصميم المخصص من يونيوم - تصاميم فريدة تعكس هوية علامتك التجارية',
      },
    ],
  },
  alternates: {
    canonical: 'https://uneom.com/ar/services/custom-design/',
    languages: {
      'en': 'https://uneom.com/services/custom-design/',
      'ar': 'https://uneom.com/ar/services/custom-design/',
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

export default function CustomDesignServicePage() {
  return <EnhancedCustomDesignClient />;
}
