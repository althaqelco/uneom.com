import { Metadata } from 'next';
import EnhancedFactoryIndustryClient from './EnhancedFactoryIndustryClient';

export const metadata: Metadata = {
  title: 'أزياء المصانع والصناعات التحويلية | يونيوم السعودية',
  description: 'أزياء موحدة متخصصة للمصانع والصناعات التحويلية في السعودية. ملابس سلامة، حماية عمال، أزياء مصانع بتروكيماويات، أغذية، تعدين. 400+ مصنع، 95% رضا، معايير سلامة عالمية.',
  keywords: 'أزياء مصانع, ملابس سلامة صناعية, زي عمال مصانع, أزياء صناعات تحويلية, ملابس حماية للمصانع, زي موحد للمصانع, أزياء قطاع الصناعة, ملابس أمان للمصانع, زي مهني للمصانع, أزياء مصانع سعودية, أزياء مصانع بتروكيماويات, أزياء مصانع أغذية, أزياء مصانع تعدين',
  openGraph: {
    title: 'أزياء المصانع والصناعات التحويلية | يونيوم السعودية',
    description: 'حلول أزياء متخصصة للمصانع والصناعات التحويلية، تجمع بين السلامة، المتانة، والراحة لتعزيز كفاءة وأمان العاملين.',
    url: 'https://uneom.com/ar/industries/factory-industry/',
    siteName: 'يونيوم للأزياء الموحدة',
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: 'https://uneom.com/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg', // Main hero image for factory industry
        width: 1200,
        height: 630,
        alt: 'أزياء المصانع والصناعات التحويلية من يونيوم السعودية',
      },
    ],
  },
  alternates: {
    canonical: 'https://uneom.com/ar/industries/factory-industry/',
    languages: {
      'en': 'https://uneom.com/industries/factory-industry/', // Assuming English version exists or will exist
      'ar': 'https://uneom.com/ar/industries/factory-industry/',
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

export default function FactoryIndustryPage() {
  return <EnhancedFactoryIndustryClient />;
}