import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'فئات مدونة اليونيفورم | رؤى الصناعة حسب الموضوع | يونيوم السعودية',
  description: 'استكشف فئات مدونة صناعة اليونيفورم التي تغطي الرعاية الصحية، الشركات، الضيافة، وملابس العمل الصناعية. اعثر على رؤى الخبراء والأدلة حسب الموضوع.',
  keywords: 'فئات مدونة اليونيفورم، مواضيع ملابس العمل، مدونة يونيفورم الرعاية الصحية، رؤى أزياء الشركات، أدلة يونيفورم الضيافة، مقالات ملابس العمل الصناعية، صناعة اليونيفورم السعودية، أدلة اللباس المهني، نصائح صيانة اليونيفورم، اتجاهات ملابس العمل',
  openGraph: {
    title: 'فئات مدونة صناعة اليونيفورم المهني | يونيوم السعودية',
    description: 'تصفح مجموعتنا الشاملة من رؤى صناعة اليونيفورم حسب الفئة. من الرعاية الصحية إلى الضيافة، اعثر على التوجيه المتخصص لكل قطاع مهني.',
    type: 'website',
    locale: 'ar_SA',
    images: [
      {
        url: '/images/blog/categories-header.jpg',
        width: 1200,
        height: 630,
        alt: 'فئات مدونة يونيوم - رؤى صناعة اليونيفورم المهني',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'فئات مدونة اليونيفورم | يونيوم السعودية',
    description: 'استكشف رؤى صناعة اليونيفورم حسب الفئة. اعثر على التوجيه المتخصص والاتجاهات لكل قطاع مهني.',
    images: ['/images/blog/categories-header.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/ar/blog/categories',
    languages: {
      'en': 'https://uneom.com/blog/categories',
      'ar': 'https://uneom.com/ar/blog/categories',
    },
  },
}; 