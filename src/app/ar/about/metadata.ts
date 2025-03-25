import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'عن يونيوم | مورد الزي الموحد المتميز في السعودية',
  description: 'يونيوم هي الشركة الرائدة في تصنيع الزي الموحد في السعودية مع أكثر من 15 عاماً من الخبرة في توفير حلول ملابس العمل المتميزة عبر قطاعات الرعاية الصحية والشركات والضيافة والصناعة.',
  keywords: 'عن يونيوم، مورد الزي الموحد السعودي، شركة ملابس العمل المهنية، مصنع اليونيفورم السعودية، تاريخ يونيوم، مزود ملابس العمل السعودي، قيم شركة اليونيفورم، مورد الزي الموحد المخصص، فريق يونيوم، رائد صناعة اليونيفورم',
  openGraph: {
    title: 'عن يونيوم | المزود الرائد للزي الموحد في السعودية',
    description: 'اكتشف رحلة يونيوم لتصبح المزود الرائد للزي الموحد في السعودية. تعرف على تاريخنا، قيمنا، فريقنا، والتزامنا بالتميز في ملابس العمل المهنية.',
    type: 'website',
    locale: 'ar_SA',
    images: [
      {
        url: '/images/about/about-header.jpg',
        width: 1200,
        height: 630,
        alt: 'عن يونيوم - مزود الزي الموحد المتميز في السعودية',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'عن يونيوم | السعودية',
    description: 'رحلة يونيوم لتصبح المزود الرائد للزي الموحد في السعودية مع التزامنا بالجودة والابتكار ورضا العملاء.',
    images: ['/images/about/about-header.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/ar/about',
    languages: {
      'en': 'https://uneom.com/about',
      'ar': 'https://uneom.com/ar/about',
    },
  },
}; 