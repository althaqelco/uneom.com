import { Metadata } from 'next';
import ClientPage from '@/app/ar/shop/[category]/[product]/ClientPage';
import Script from 'next/script';

// Define Arabic metadata for SEO optimization directly
export const metadata: Metadata = {
  title: 'خوذة السلامة المتطورة برو | حماية رأس صناعية معتمدة من ANSI | يونيوم',
  description: 'توفر خوذة السلامة المتطورة برو من يونيوم حماية متفوقة في البيئات الصناعية السعودية مع عزل كهربائي من الفئة E، ومقاومة للأشعة فوق البنفسجية، ونظام تبريد متكامل. معتمدة وفقًا لمعايير ANSI Z89.1 وSASO 1368.',
  keywords: 'خوذة سلامة السعودية, حماية الرأس الصناعية, معدات سلامة البناء, خوذة معتمدة من ANSI, خوذة عزل كهربائي, خوذة سلامة مقاومة للأشعة فوق البنفسجية, خوذات سلامة قابلة للتخصيص, معدات الحماية الشخصية الصناعية السعودية',
  openGraph: {
    title: 'خوذة السلامة المتطورة برو | حماية رأس رائدة في الصناعة لأماكن العمل السعودية',
    description: 'مصممة خصيصًا للبيئات الصناعية المتطلبة في المملكة العربية السعودية. حماية كهربائية من الفئة E، مقاومة للأشعة فوق البنفسجية، نظام تبريد متكامل للحرارة القصوى. تتجاوز معايير السلامة الخليجية والدولية.',
    images: [
      {
        url: 'https://uneom.com/images/products/safety/helmet-pro-1.webp',
        width: 1200,
        height: 630,
        alt: 'خوذة السلامة المتطورة برو من يونيوم'
      }
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/ar/shop/industrial-uniforms/safety-helmet-pro',
    languages: {
      'en': 'https://uneom.com/shop/industrial-uniforms/safety-helmet-pro',
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

export default function SafetyHelmetProPageArabic() {
  // Create product data for the Arabic version
  const productData = {
    id: 'safety-helmet-pro',
    name: 'خوذة السلامة المتطورة برو',
    description: 'تم تصميم خوذة السلامة المتطورة من يونيوم خصيصًا لبيئات البناء والصناعة المتطلبة في المملكة العربية السعودية. تتميز بنظام امتصاص الصدمات الثوري الذي يتجاوز معايير السلامة الخليجية والعالمية، وتوفر هذه الخوذة حماية فائقة ضد الأجسام المتساقطة ومخاطر الاصطدام.',
    features: [
      'حماية عزل كهربائي من الفئة E (20,000 فولت)',
      'نظام امتصاص صدمات متقدم يتجاوز معايير ANSI Z89.1',
      'غلاف مقاوم للأشعة فوق البنفسجية يحافظ على سلامته في الصحراء',
      'نظام تهوية متكامل للتبريد في درجات الحرارة العالية',
      'نظام تعليق قابل للتعديل بأربع نقاط لتثبيت آمن',
      'متوافقة مع واقيات الوجه وواقيات الأذن وملحقات أخرى'
    ],
    price: 189,
    images: [
      '/images/products/safety/helmet-pro-1.webp',
      '/images/products/safety/helmet-pro-2.webp',
      '/images/products/safety/helmet-pro-3.webp',
      '/images/products/safety/helmet-pro-4.webp'
    ],
    colors: ['#f1c40f', '#ecf0f1', '#2980b9', '#e67e22', '#27ae60'],
    sizes: ['مقاس موحد (53-64سم)', 'مقاس كبير (58-69سم)'],
    category: 'industrial-uniforms',
    tags: ['خوذة سلامة', 'معدات وقاية', 'حماية الرأس', 'صناعة', 'بناء'],
    rating: 4.8,
    reviews: 124
  };
  
  // Create related products for Arabic version
  const relatedProducts = [
    {
      id: 'industrial-coverall',
      name: 'بدلة عمل صناعية',
      description: 'بدلة عمل صناعية عالية الجودة مقاومة للحرارة والاشتعال',
      features: ['مقاومة للحرارة', 'مقاومة للاشتعال'],
      price: 349,
      images: ['/images/products/industrial/coverall-1.jpg'],
      colors: ['#e67e22', '#21618c', '#b7950b'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      category: 'industrial-uniforms',
      tags: ['بدلة عمل', 'صناعية', 'مقاومة للحرارة'],
      rating: 4.6,
      reviews: 98
    },
    {
      id: 'hi-vis-safety-uniform',
      name: 'زي سلامة عالي الوضوح',
      description: 'زي عمل عالي الوضوح للاستخدام في بيئات العمل منخفضة الإضاءة',
      features: ['عاكس للضوء', 'مرئية عالية'],
      price: 280,
      images: ['/images/products/industrial/hi-vis-1.jpg'],
      colors: ['#f39c12', '#f1c40f'],
      sizes: ['M', 'L', 'XL', 'XXL'],
      category: 'industrial-uniforms',
      tags: ['سلامة', 'عالي الوضوح', 'عاكس'],
      rating: 4.7,
      reviews: 76
    },
    {
      id: 'flame-resistant-workwear',
      name: 'ملابس عمل مقاومة للهب',
      description: 'ملابس عمل متطورة مقاومة للهب للاستخدام في البيئات الخطرة',
      features: ['مقاومة للهب', 'طويلة الأمد'],
      price: 420,
      images: ['/images/products/industrial/flame-resistant-1.jpg'],
      colors: ['#34495e', '#2c3e50'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      category: 'industrial-uniforms',
      tags: ['مقاومة للهب', 'ملابس واقية', 'صناعية'],
      rating: 4.9,
      reviews: 52
    }
  ];
  
  const locale = 'ar';
  
  return (
    <>
      {/* Schema.org structured data for enhanced SEO */}
      <Script
        id="product-structured-data-ar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "خوذة السلامة المتطورة برو من يونيوم",
            "image": [
              "https://uneom.com/images/products/safety/helmet-pro-1.webp",
              "https://uneom.com/images/products/safety/helmet-pro-2.webp",
              "https://uneom.com/images/products/safety/helmet-pro-3.webp"
            ],
            "description": "خوذة سلامة متقدمة مقاومة للصدمات مصممة خصيصًا للبيئات الصناعية وبيئات البناء السعودية، تتميز بعزل كهربائي من الفئة E ونظام تبريد متكامل.",
            "sku": "UNEOM-SH-PRO-01",
            "brand": {
              "@type": "Brand",
              "name": "يونيوم"
            },
            "manufacturer": "يونيوم للملابس المهنية",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/ar/shop/industrial-uniforms/safety-helmet-pro",
              "priceCurrency": "SAR",
              "price": "189",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "124"
            }
          })
        }}
      />
      
      {/* Main product page component */}
      <ClientPage product={productData} relatedProducts={relatedProducts} locale={locale} />
    </>
  );
}