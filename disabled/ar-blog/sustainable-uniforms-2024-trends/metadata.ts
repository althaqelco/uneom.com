import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "أزياء عمل مستدامة 2024: اتجاهات في السعودية | UNEOM",
  description: "اكتشف أحدث اتجاهات أزياء العمل المستدامة لعام 2024 في المملكة العربية السعودية. تعرف على الأقمشة المعاد تدويرها، الإنتاج الأخلاقي، والاقتصاد الدائري مع UNEOM.",
  keywords: [
    "أزياء عمل مستدامة",
    "زي موحد صديق للبيئة",
    "أقمشة معاد تدويرها",
    "الإنتاج الأخلاقي للملابس",
    "الاقتصاد الدائري في الأزياء",
    "ملابس عمل 2024",
    "استدامة الموضة",
    "زي موحد السعودية",
    "UNEOM",
    "رؤية 2030 الاستدامة"
  ],
  openGraph: {
    title: "أزياء عمل مستدامة 2024: اتجاهات في السعودية | UNEOM",
    description: "تعرف على الاتجاهات الرائدة في أزياء العمل المستدامة لعام 2024 وكيف تتبناها UNEOM في المملكة العربية السعودية.",
    url: 'https://uneom.com/ar/blog/sustainable-uniforms-2024-trends', // Replace with actual deployed URL
    images: [
      {
        url: '/images/og/sustainable-uniforms-ar-og.webp', // Suggest creating a specific OG image
        width: 1200,
        height: 630,
        alt: 'صورة تعرض أنواع مختلفة من أقمشة الزي الموحد المستدامة مع شعار UNEOM',
      },
    ],
    type: 'article',
    publishedTime: '2024-07-15T08:00:00Z', // Use ISO 8601 format with timezone
    authors: ['UNEOM'],
    tags: ["أزياء عمل مستدامة", "زي موحد صديق للبيئة", "استدامة", "المملكة العربية السعودية", "2024"],
  },
  twitter: {
    card: 'summary_large_image',
    title: "أزياء عمل مستدامة 2024: اتجاهات في السعودية | UNEOM",
    description: "اكتشف أحدث اتجاهات أزياء العمل المستدامة لعام 2024 في المملكة العربية السعودية. تعرف على الأقمشة المعاد تدويرها، الإنتاج الأخلاقي، والاقتصاد الدائري مع UNEOM.",
    images: ['/images/og/sustainable-uniforms-ar-og.webp'], // Use the same OG image or a Twitter-specific one
    creator: '@uneomksa', // Replace with your actual Twitter handle
  },
  alternates: {
    canonical: 'https://uneom.com/ar/blog/sustainable-uniforms-2024-trends', // Replace with actual deployed URL
    languages: {
      'en': 'https://uneom.com/en/blog/sustainable-uniforms-2024-trends', // Replace with actual deployed URL
    },
  },
}; 