import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'دليل أقمشة الزي الموحد | اختيار المواد | يونيوم السعودية',
  description: 'دليل شامل لأقمشة الزي الموحد - افهم المتانة والراحة والوظائف للصناعات المختلفة. نصائح خبيرة لاختيار الأقمشة المناسبة للظروف المناخية السعودية.',
  keywords: 'دليل أقمشة الزي الموحد، مواد الزي الموحد للشركات، اختيار أقمشة ملابس العمل، أقمشة الزي الموحد السعودية، مواد الزي الموحد الجيدة التهوية، أقمشة ملابس العمل المتينة، أقمشة مخصصة للصناعات',
  openGraph: {
    title: 'دليل أقمشة الزي الموحد | اختيار المواد | يونيوم السعودية',
    description: 'دليل شامل لأقمشة الزي الموحد - افهم المتانة والراحة والوظائف للصناعات المختلفة. نصائح خبيرة لاختيار الأقمشة المناسبة للظروف المناخية السعودية.',
    type: 'website',
    locale: 'ar',
    images: [
      {
        url: '/images/resources/fabric-guide/fabric-guide-header.jpg',
        width: 1200,
        height: 630,
        alt: 'دليل أقمشة الزي الموحد من يونيوم',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'دليل أقمشة الزي الموحد | اختيار المواد | يونيوم السعودية',
    description: 'دليل شامل لأقمشة الزي الموحد - افهم المتانة والراحة والوظائف للصناعات المختلفة.',
    images: ['/images/resources/fabric-guide/fabric-guide-header.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/ar/resources/fabric-guide',
    languages: {
      'en': 'https://uneom.com/resources/fabric-guide',
      'ar': 'https://uneom.com/ar/resources/fabric-guide',
    },
  },
}; 