import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'معاطف المختبر الطبية الاحترافية | مضادة للميكروبات ومقاومة للبقع | يونيوم السعودية',
  description: 'معاطف مختبر طبية متميزة للمتخصصين في الرعاية الصحية في المملكة العربية السعودية. أقمشة مضادة للميكروبات ومقاومة للبقع مصممة خصيصاً لبيئات المستشفيات مع خيارات تخصيص للمستشفيات والعيادات.',
  keywords: 'معطف مختبر طبي السعودية، معاطف المستشفيات، معطف الطبيب، معطف مختبر مضاد للميكروبات، زي طبي مخصص، يونيفورم صحي الرياض، معطف مختبر مقاوم للبقع، ملابس طبية السعودية، معطف مختبر احترافي جدة، مورد الزي الصحي',
  openGraph: {
    title: 'معاطف المختبر الطبية المتميزة للمتخصصين في الرعاية الصحية | يونيوم السعودية',
    description: 'معاطف مختبر عالية الجودة مع معالجة مضادة للميكروبات، تكوينات جيوب متعددة، وخيارات تخصيص. مثالية للمستشفيات والعيادات في جميع أنحاء المملكة العربية السعودية.',
    type: 'website',
    locale: 'ar_SA',
    images: [
      {
        url: '/images/products/medical-lab-coat.jpg',
        width: 1200,
        height: 630,
        alt: 'معطف مختبر طبي احترافي من يونيوم',
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/ar/shop/medical-scrubs/medical-lab-coat',
    languages: {
      'en': 'https://uneom.com/shop/medical-scrubs/medical-lab-coat',
      'ar': 'https://uneom.com/ar/shop/medical-scrubs/medical-lab-coat',
    },
  },
}; 