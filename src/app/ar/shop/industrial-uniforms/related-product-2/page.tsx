import { Metadata } from 'next';
import ClientPage from '@/app/ar/shop/[category]/[product]/ClientPage';
import Script from 'next/script';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Define Arabic metadata for SEO optimization
export const metadata: Metadata = {
  title: 'نظارات السلامة المهنية | حماية للعيون معتمدة وفق المعايير الدولية | يونيوم',
  description: 'توفر نظارات السلامة المهنية من يونيوم حماية متفوقة للعيون في البيئات الصناعية السعودية مع مقاومة للصدمات، طلاء مضاد للضباب، وحماية من الأشعة فوق البنفسجية. تتوافق مع معايير ANSI Z87.1 وهيئة المواصفات السعودية.',
  keywords: 'نظارات السلامة السعودية, حماية العيون الصناعية, نظارات مضادة للضباب, نظارات مقاومة للصدمات, نظارات واقية من الأشعة فوق البنفسجية, نظارات معتمدة لحماية العيون, معدات السلامة الصناعية السعودية',
  openGraph: {
    title: 'نظارات السلامة المهنية | حماية متفوقة للعيون في البيئات الصناعية السعودية',
    description: 'مصممة خصيصًا للبيئات الصناعية المتطلبة في المملكة العربية السعودية. عدسات بولي كربونات مقاومة للصدمات، طلاء مضاد للضباب، وحماية من الأشعة فوق البنفسجية. تصميم مريح للاستخدام طوال اليوم. تتجاوز معايير ANSI Z87.1 وهيئة المواصفات السعودية.',
    images: [
      {
        url: 'https://uneom.com/images/products/safety/goggles-1.jpg',
        width: 1200,
        height: 630,
        alt: 'نظارات السلامة المهنية من يونيوم'
      }
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/ar/shop/industrial-uniforms/related-product-2',
    languages: {
      'en': 'https://uneom.com/shop/industrial-uniforms/related-product-2',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function SafetyGogglesPageArabic() {
  // Create product data for the Arabic version
  const productData = {
    id: 'related-product-2',
    name: 'نظارات السلامة المهنية',
    description: 'نظارات سلامة مهنية مصممة خصيصًا للاستخدام في البيئات الصناعية السعودية المتطلبة. توفر هذه النظارات حماية متفوقة للعيون من المخاطر الصناعية مثل الحطام المتطاير والمواد الكيميائية والأشعة فوق البنفسجية. بفضل عدسات البولي كربونات المقاومة للصدمات مع طلاء مضاد للضباب، تم تصميم هذه النظارات للحفاظ على رؤية واضحة في جميع الظروف مع توفير الراحة طوال اليوم.',
    features: [
      'عدسات بولي كربونات مقاومة للصدمات تتوافق مع معايير ANSI Z87.1',
      'طلاء متميز مضاد للضباب للرؤية الواضحة في جميع الظروف',
      'حماية من الأشعة فوق البنفسجية (99.9% حماية من UVA/UVB/UVC)',
      'حماية من تناثر المواد الكيميائية بتصميم محكم',
      'حزام مطاطي قابل للتعديل لضمان ثبات النظارة',
      'متوافقة مع معظم النظارات الطبية',
      'نظام تهوية لتقليل الضباب وتحسين الراحة'
    ],
    price: 175,
    images: [
      '/images/products/safety/goggles-1.jpg',
      '/images/products/safety/goggles-2.jpg',
      '/images/products/safety/goggles-3.jpg'
    ],
    colors: ['#2c3e50', '#3498db', '#e74c3c'],
    sizes: ['مقاس قياسي', 'مقاس فوق النظارات الطبية'],
    category: 'industrial-uniforms',
    tags: ['نظارات السلامة', 'حماية العيون', 'معدات وقاية', 'صناعة', 'سلامة مهنية'],
    rating: 4.9,
    reviews: 87
  };
  
  // Create related products for Arabic version
  const relatedProducts = [
    {
      id: 'safety-helmet-pro',
      name: 'خوذة السلامة المتطورة برو',
      description: 'خوذة سلامة متطورة توفر حماية فائقة في بيئات العمل الصناعية',
      features: ['عزل كهربائي', 'مقاومة للصدمات'],
      price: 189,
      images: ['/images/products/safety/helmet-pro-1.webp'],
      colors: ['#f1c40f', '#ecf0f1', '#2980b9'],
      sizes: ['مقاس موحد', 'مقاس كبير'],
      category: 'industrial-uniforms',
      tags: ['خوذة سلامة', 'معدات وقاية', 'حماية الرأس'],
      rating: 4.8,
      reviews: 124
    },
    {
      id: 'related-product-1',
      name: 'أحذية عمل صناعية متطورة',
      description: 'أحذية عمل متطورة مصممة للبيئات الصناعية المتطلبة مع حماية متفوقة',
      features: ['مقاومة للانزلاق', 'مقدمة فولاذية'],
      price: 320,
      images: ['/images/products/industrial/work-boots-1.jpg'],
      colors: ['#34495e', '#795548', '#212121'],
      sizes: ['42', '43', '44', '45'],
      category: 'industrial-uniforms',
      tags: ['أحذية عمل', 'أحذية سلامة', 'معدات وقاية'],
      rating: 4.8,
      reviews: 102
    },
    {
      id: 'heat-resistant-gloves',
      name: 'قفازات صناعية مقاومة للحرارة',
      description: 'قفازات مقاومة للحرارة مصممة خصيصًا للاستخدام في البيئات الصناعية السعودية المتطلبة',
      features: ['مقاومة حرارية', 'حماية من الثقب'],
      price: 145,
      images: ['/images/products/industrial/heat-resistant-gloves-1.jpg'],
      colors: ['#e74c3c', '#34495e', '#f1c40f'],
      sizes: ['S', 'M', 'L', 'XL'],
      category: 'industrial-uniforms',
      tags: ['قفازات مقاومة للحرارة', 'حماية اليدين', 'معدات وقاية'],
      rating: 4.7,
      reviews: 89
    }
  ];
  
  const locale = 'ar';
  
  return (
    <main>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl rtl:font-arabic">نظارات السلامة المهنية | حماية للعيون معتمدة وفق المعايير الدولية | يونيوم</h1>
      
      {/* Schema.org structured data for enhanced SEO */}
      <Script
        id="product-structured-data-ar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "نظارات السلامة المهنية من يونيوم",
            "image": [
              "https://uneom.com/images/products/safety/goggles-1.jpg",
              "https://uneom.com/images/products/safety/goggles-2.jpg",
              "https://uneom.com/images/products/safety/goggles-3.jpg"
            ],
            "description": "نظارات سلامة مهنية مصممة للبيئات الصناعية السعودية، تتميز بعدسات بولي كربونات مقاومة للصدمات، طلاء مضاد للضباب، وحماية من الأشعة فوق البنفسجية. معتمدة وفق معيار ANSI Z87.1.",
            "sku": "UNEOM-SG-PRO-01",
            "brand": {
              "@type": "Brand",
              "name": "يونيوم"
            },
            "manufacturer": "يونيوم لمعدات السلامة المهنية",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/ar/shop/industrial-uniforms/related-product-2",
              "priceCurrency": "SAR",
              "price": "175",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "87"
            }
          })
        }}
      />
      
      {/* Main product page component */}
      <ClientPage product={productData} relatedProducts={relatedProducts} locale={locale} />
        </main>
  );
}
