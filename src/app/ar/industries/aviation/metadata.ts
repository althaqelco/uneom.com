import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'يونيفورم الطيران | زي موحد للطيارين وطاقم الضيافة | معايير GACA | يونيوم',
  description: 'يونيفورم طيران احترافي وزي موحد لشركات الطيران السعودية. تصاميم متميزة لطاقم الضيافة والطيارين وموظفي الخدمات الأرضية متوافقة مع معايير الهيئة العامة للطيران المدني (GACA) ومبادئ الشريعة الإسلامية.',
  keywords: 'يونيفورم طيران، زي موحد طيارين، ملابس طاقم الضيافة، أزياء شركات الطيران السعودية، GACA، يونيفورم محتشم للمضيفات، زي الطيران الإسلامي، ملابس موظفي المطار، يونيفورم الخطوط السعودية، أزياء الخدمات الأرضية، يونيوم',
  openGraph: {
    title: 'يونيفورم الطيران | زي موحد للطيارين وطاقم الضيافة | معايير GACA | يونيوم',
    description: 'يونيفورم طيران احترافي وزي موحد لشركات الطيران السعودية. تصاميم متميزة لطاقم الضيافة والطيارين وموظفي الخدمات الأرضية متوافقة مع معايير الهيئة العامة للطيران المدني (GACA) ومبادئ الشريعة الإسلامية.',
    locale: 'ar',
    type: 'website',
    images: [
      {
        url: '/images/industries/aviation.jpg',
        width: 1200,
        height: 630,
        alt: 'يونيفورم طيران احترافي من يونيوم متوافق مع معايير الهيئة العامة للطيران المدني السعودية'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'يونيفورم الطيران | زي موحد للطيارين وطاقم الضيافة | معايير GACA',
    description: 'يونيفورم طيران احترافي وزي موحد لشركات الطيران السعودية متوافق مع معايير GACA ومتطلبات الشريعة الإسلامية',
    images: ['/images/industries/aviation.jpg']
  },
  alternates: {
    canonical: 'https://uneom.com/ar/industries/aviation',
    languages: {
      'en': 'https://uneom.com/industries/aviation',
      'ar': 'https://uneom.com/ar/industries/aviation'
    }
  },
  robots: {
    index: true,
    follow: true
  }
}; 