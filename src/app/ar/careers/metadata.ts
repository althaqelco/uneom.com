import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'الوظائف في يونيوم | انضم إلى شركة الزي الموحد في السعودية',
  description: 'استكشف فرص العمل في يونيوم، مزود الزي الموحد المتميز في السعودية. انضم إلى فريقنا من المحترفين في التصميم، التصنيع، المبيعات، وخدمة العملاء.',
  keywords: 'وظائف يونيوم، وظائف شركة اليونيفورم، وظائف ملابس العمل السعودية، وظائف تصميم الزي الموحد، وظائف التصنيع السعودية، وظائف صناعة الأزياء، وظائف النسيج الرياض، مناصب مبيعات اليونيفورم، خدمة عملاء ملابس العمل، توظيف السعودية',
  openGraph: {
    title: 'فرص العمل في يونيوم | مزود الزي الموحد المتميز في السعودية',
    description: 'انضم إلى فريق يونيوم من محترفي الزي الموحد. نقدم فرص عمل مميزة في التصميم، التصنيع، المبيعات، وخدمة العملاء في جميع أنحاء السعودية.',
    type: 'website',
    locale: 'ar_SA',
    images: [
      {
        url: '/images/careers/careers-header.jpg',
        width: 1200,
        height: 630,
        alt: 'الوظائف في يونيوم - مزود الزي الموحد المتميز في السعودية',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'الوظائف في يونيوم | السعودية',
    description: 'انضم إلى فريقنا من محترفي الزي الموحد. استكشف فرص العمل المميزة في التصميم، التصنيع، المبيعات، وخدمة العملاء.',
    images: ['/images/careers/careers-header.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/ar/careers',
    languages: {
      'en': 'https://uneom.com/careers',
      'ar': 'https://uneom.com/ar/careers',
    },
  },
}; 