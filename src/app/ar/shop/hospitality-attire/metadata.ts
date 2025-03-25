import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'زي الضيافة | ملابس عمل الفنادق والمطاعم | يونيوم السعودية',
  description: 'زي ضيافة متميز للفنادق والمطاعم والمنتجعات السعودية. توفر يونيوم زي موظفي الفنادق عالي الجودة، ملابس الطهاة، أزياء النادلين، وملابس عمل مكتب الاستقبال.',
  keywords: 'زي الضيافة السعودية، ملابس عمل موظفي الفنادق، زي المطاعم الرياض، زي الطهاة السعودية، ملابس النادلين، زي مكتب استقبال الفندق، ملابس عمل الفنادق الفاخرة، ملابس موظفي المنتجعات، زي موظفي المطاعم السعودية، زي الضيافة يونيوم',
  openGraph: {
    title: 'زي الضيافة المتميز | يونيوم السعودية',
    description: 'ارتقِ بمؤسسة الضيافة الخاصة بك مع زي يونيوم المتميز. ملابس عمل عالية الجودة للفنادق والمطاعم والمنتجعات في جميع أنحاء المملكة العربية السعودية.',
    type: 'website',
    locale: 'ar',
    images: [
      {
        url: '/images/shop/hospitality/hospitality-category.jpg',
        width: 1200,
        height: 630,
        alt: 'زي الضيافة يونيوم - ملابس عمل الفنادق والمطاعم المتميزة',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'زي الضيافة | يونيوم السعودية',
    description: 'زي الفنادق والمطاعم المتميز في المملكة العربية السعودية. استكشف ملابس عمل الضيافة عالية الجودة من يونيوم لجميع أدوار الموظفين.',
    images: ['/images/shop/hospitality/hospitality-category.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/ar/shop/hospitality-attire',
    languages: {
      'en': 'https://uneom.com/shop/hospitality-attire',
      'ar': 'https://uneom.com/ar/shop/hospitality-attire',
    },
  },
}; 