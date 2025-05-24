import { Metadata } from 'next';

export function generateMetadata(): Metadata {
  return {
    title: 'دليل الامتثال للسلامة الصناعية | يونيوم',
    description: 'إرشادات شاملة للامتثال لمعايير السلامة الصناعية مع فهم للمتطلبات التنظيمية وأفضل الممارسات.',
    openGraph: {
      title: 'دليل الامتثال للسلامة الصناعية | يونيوم',
      description: 'إرشادات شاملة للامتثال لمعايير السلامة الصناعية مع فهم للمتطلبات التنظيمية وأفضل الممارسات.',
      url: 'https://uneom.com/ar/blog/industrial-safety-compliance-guide',
      siteName: 'يونيوم - Uneom',
      images: [
        {
          url: 'https://uneom.com/images/blog/industrial-safety-compliance-guide.jpg',
          width: 1200,
          height: 630,
          alt: 'دليل الامتثال للسلامة الصناعية',
        },
      ],
      locale: 'ar_SA',
      type: 'article',
    },
  };
} 