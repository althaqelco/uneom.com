import { Metadata } from 'next';
import EnhancedEducationClient from './EnhancedEducationClient';

export const metadata: Metadata = {
  title: 'أزياء القطاع التعليمي | يونيوم السعودية - ملابس مدرسية وجامعية عالية الجودة',
  description: 'أزياء موحدة متخصصة للقطاع التعليمي في السعودية. ملابس مدرسية، جامعية، ومعاهد تقنية. 480+ مؤسسة تعليمية، 97% رضا، مطابقة لمعايير وزارة التعليم، تصاميم محتشمة، خبرة 15+ سنة.',
  keywords: 'أزياء تعليمية، ملابس مدرسية، زي مدرسي، أزياء جامعية، ملابس طلاب، زي موحد مدرسي، أزياء معاهد، ملابس مختبرات، زي أكاديمي، أزياء تعليم سعودي، ملابس مدارس، أزياء طلاب، زي جامعي',
  openGraph: {
    title: 'أزياء القطاع التعليمي | يونيوم السعودية',
    description: 'أزياء موحدة متخصصة للقطاع التعليمي في السعودية. ملابس مدرسية وجامعية عالية الجودة مطابقة لمعايير وزارة التعليم.',
    url: 'https://uneom.com/ar/industries/education/',
    siteName: 'يونيوم للأزياء الموحدة',
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: 'https://uneom.com/images/education/school-uniform-post-1.jpg',
        width: 1200,
        height: 630,
        alt: 'أزياء القطاع التعليمي من يونيوم - ملابس مدرسية وجامعية عالية الجودة',
      },
    ],
  },
  alternates: {
    canonical: 'https://uneom.com/ar/industries/education/',
    languages: {
      'en': 'https://uneom.com/industries/education/',
      'ar': 'https://uneom.com/ar/industries/education/',
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

export default function EducationIndustryPage() {
  return <EnhancedEducationClient />;
}