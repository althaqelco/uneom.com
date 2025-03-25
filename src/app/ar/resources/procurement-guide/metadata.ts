import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'دليل شراء الزي الموحد | أفضل ممارسات الشراء | يونيوم السعودية',
  description: 'دليل خبير لشراء الزي الموحد للمؤسسات السعودية. تعرف على أفضل الممارسات لوضع الميزانية والطلب واختيار المورد وضمان الجودة وإدارة برنامج الزي الموحد.',
  keywords: 'دليل شراء الزي الموحد، شراء ملابس العمل للشركات، مصادر الزي الموحد السعودية، اختيار مورد الزي الموحد، وضع ميزانية ملابس العمل، ضمان جودة الزي الموحد، أفضل ممارسات الطلب بالجملة',
  openGraph: {
    title: 'دليل شراء الزي الموحد | أفضل ممارسات الشراء | يونيوم السعودية',
    description: 'دليل خبير لشراء الزي الموحد للمؤسسات السعودية. تعرف على أفضل الممارسات لوضع الميزانية والطلب واختيار المورد وضمان الجودة وإدارة برنامج الزي الموحد.',
    type: 'website',
    locale: 'ar',
    images: [
      {
        url: '/images/resources/procurement-guide/procurement-guide-header.jpg',
        width: 1200,
        height: 630,
        alt: 'دليل شراء الزي الموحد وأفضل ممارسات الشراء من يونيوم',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'دليل شراء الزي الموحد | أفضل ممارسات الشراء | يونيوم السعودية',
    description: 'دليل خبير لشراء الزي الموحد للمؤسسات السعودية. تعرف على أفضل الممارسات لوضع الميزانية والطلب واختيار المورد.',
    images: ['/images/resources/procurement-guide/procurement-guide-header.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://uneom.com/ar/resources/procurement-guide',
    languages: {
      'en': 'https://uneom.com/resources/procurement-guide',
      'ar': 'https://uneom.com/ar/resources/procurement-guide',
    },
  },
}; 