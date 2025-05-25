import { Metadata } from 'next';
import EnhancedTechnicalFinishesClient from './EnhancedTechnicalFinishesClient';

export const metadata: Metadata = {
  title: 'خدمات المعالجات التقنية | يونيوم السعودية - تقنيات متقدمة للأقمشة والأزياء',
  description: 'خدمات متخصصة للمعالجات التقنية للأقمشة في السعودية. مقاومة البكتيريا، طرد الرطوبة، حماية UV. 20+ تقنية، 98% فعالية، 500+ مشروع، 15+ سنة خبرة، معالجات آمنة بيئياً، أقمشة ذكية.',
  keywords: 'معالجات تقنية، مقاومة البكتيريا، طرد الرطوبة، حماية الأشعة، معالجة أقمشة، تقنيات متقدمة، مقاومة البقع، أقمشة ذكية، معالجات آمنة، تقنيات سعودية، معالجة مضادة للميكروبات، تقنية الجفاف السريع',
  openGraph: {
    title: 'خدمات المعالجات التقنية | يونيوم السعودية',
    description: 'خدمات متخصصة للمعالجات التقنية للأقمشة في السعودية. تقنيات متقدمة تحول الأقمشة العادية إلى أزياء ذكية بخصائص فائقة.',
    url: 'https://uneom.com/ar/services/technical-finishes/',
    siteName: 'يونيوم للأزياء الموحدة',
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: 'https://uneom.com/images/uneom_antimicrobial_treatment.webp',
        width: 1200,
        height: 630,
        alt: 'خدمات المعالجات التقنية من يونيوم - تقنيات متقدمة للأقمشة والأزياء',
      },
    ],
  },
  alternates: {
    canonical: 'https://uneom.com/ar/services/technical-finishes/',
    languages: {
      'en': 'https://uneom.com/services/technical-finishes/',
      'ar': 'https://uneom.com/ar/services/technical-finishes/',
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

export default function TechnicalFinishesServicePage() {
  return <EnhancedTechnicalFinishesClient />;
}