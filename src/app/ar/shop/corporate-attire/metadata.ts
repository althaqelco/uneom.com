import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'زي الشركات | ملابس العمل التجارية | يونيوم السعودية',
  description: 'زي الشركات المتميز وملابس العمل التجارية للشركات السعودية. توفر يونيوم البدلات التنفيذية، ملابس المكاتب، الملابس المؤسسية المميزة بالعلامة التجارية وملابس العمل المهنية.',
  keywords: 'زي الشركات السعودية، ملابس العمل التجارية، زي المكاتب الرياض، البدلات التنفيذية السعودية، ملابس الشركات المميزة بالعلامة التجارية، الملابس المهنية، زي الشركات السعودية، قواعد اللباس المؤسسي، ملابس موظفي المكاتب، زي الشركات يونيوم',
  openGraph: {
    title: 'زي الشركات المتميز وملابس العمل التجارية | يونيوم السعودية',
    description: 'عزز الصورة المهنية لشركتك مع زي الشركات المتميز من يونيوم. ملابس أعمال عالية الجودة ترتقي بهوية العلامة التجارية في جميع أنحاء المملكة العربية السعودية.',
    type: 'website',
    locale: 'ar',
    images: [
      {
        url: '/images/shop/corporate/corporate-category.jpg',
        width: 1200,
        height: 630,
        alt: 'زي الشركات يونيوم - ملابس العمل التجارية المتميزة',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'زي الشركات | يونيوم السعودية',
    description: 'ملابس العمل التجارية المتميزة للشركات السعودية. استكشف زي الشركات عالي الجودة من يونيوم الذي يعزز هوية العلامة التجارية المهنية.',
    images: ['/images/shop/corporate/corporate-category.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/ar/shop/corporate-attire',
    languages: {
      'en': 'https://uneom.com/shop/corporate-attire',
      'ar': 'https://uneom.com/ar/shop/corporate-attire',
    },
  },
}; 