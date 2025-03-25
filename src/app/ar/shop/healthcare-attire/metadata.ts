import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'زي الرعاية الصحية | ملابس العمل الطبية | يونيوم السعودية',
  description: 'زي الرعاية الصحية وملابس العمل الطبية المتميزة للمستشفيات والعيادات ومرافق الرعاية السعودية. توفر يونيوم معاطف المختبر، السكراب، زي الممرضات والإكسسوارات الطبية.',
  keywords: 'زي الرعاية الصحية السعودية، ملابس العمل الطبية، زي المستشفيات الرياض، زي الممرضات السعودية، معاطف المختبر للأطباء، سكراب طبي السعودية، زي موظفي العيادات، ملابس محترفي الرعاية الصحية، ملابس عمل المرافق الطبية، زي الرعاية الصحية يونيوم',
  openGraph: {
    title: 'زي الرعاية الصحية وملابس العمل الطبية المتميزة | يونيوم السعودية',
    description: 'زي الرعاية الصحية المهني للمتخصصين الطبيين السعوديين. توفر يونيوم سكراب متميز، معاطف مختبر، زي التمريض وملابس العمل الطبية مع توصيل في جميع أنحاء البلاد.',
    type: 'website',
    locale: 'ar',
    images: [
      {
        url: '/images/shop/healthcare/healthcare-category.jpg',
        width: 1200,
        height: 630,
        alt: 'زي الرعاية الصحية يونيوم - ملابس العمل الطبية المتميزة',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'زي الرعاية الصحية | يونيوم السعودية',
    description: 'ملابس العمل الطبية المتميزة لمحترفي الرعاية الصحية في المملكة العربية السعودية. استكشف سكراب، معاطف مختبر وزي التمريض عالي الجودة من يونيوم.',
    images: ['/images/shop/healthcare/healthcare-category.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/ar/shop/healthcare-attire',
    languages: {
      'en': 'https://uneom.com/shop/healthcare-attire',
      'ar': 'https://uneom.com/ar/shop/healthcare-attire',
    },
  },
}; 