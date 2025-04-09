import { Metadata } from 'next';
import Script from 'next/script';
import ClientPage from '@/app/ar/shop/[category]/[product]/ClientPage';

// Define metadata for SEO optimization
export const metadata: Metadata = {
  title: 'زي سلامة عالي الوضوح | ملابس عمل صناعية معتمدة | يونيوم',
  description: 'توفر أزياء السلامة عالية الوضوح من يونيوم رؤية قصوى في البيئات الصناعية السعودية مع عناصر عاكسة من الفئة 3، ونسيج طارد للرطوبة، وخصائص مقاومة للحرارة. معتمدة وفقًا لمعايير ISO 20471 وSASO.',
  keywords: 'ملابس عالية الوضوح السعودية, ملابس عمل صناعية آمنة, ملابس سلامة عاكسة, زي معتمد ISO 20471, زي سلامة طارد للرطوبة, زي عمل مقاوم للحرارة, ملابس عالية الوضوح قابلة للتخصيص, معدات السلامة الصناعية السعودية',
  openGraph: {
    title: 'زي سلامة عالي الوضوح | حماية رؤية رائدة في الصناعة لأماكن العمل السعودية',
    description: 'مصمم خصيصًا للبيئات الصناعية المتطلبة في المملكة العربية السعودية. عناصر عاكسة من الفئة 3، نسيج طارد للرطوبة للحرارة القصوى، وخصائص مقاومة للاشتعال. يتجاوز معايير السلامة الخليجية والدولية.',
    images: [
      {
        url: 'https://uneom.com/images/products/industrial/hi-vis-1.jpg',
        width: 1200,
        height: 630,
        alt: 'زي السلامة عالي الوضوح من يونيوم'
      }
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/ar/shop/industrial-uniforms/hi-vis-safety-uniform',
    languages: {
      'en': 'https://uneom.com/shop/industrial-uniforms/hi-vis-safety-uniform',
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

export default function HiVisSafetyUniformArabicPage() {
  // Create params object to match ClientPageProps interface
  const params = {
    category: 'industrial-uniforms',
    product: 'hi-vis-safety-uniform'
  };
  
  // Define product data
  const product = {
    id: 'hi-vis-safety-uniform',
    name: 'زي السلامة عالي الرؤية',
    description: 'زي مهني عالي الرؤية مصمم خصيصاً لبيئات العمل الخطرة والمناطق منخفضة الإضاءة، يوفر وضوح استثنائي مع الحفاظ على المتانة والراحة للعاملين في الصناعات المختلفة.',
    features: [
      'ألوان فلورية عالية الوضوح لضمان الرؤية',
      'شرائط ميكروبريزم عاكسة توفر رؤية 360 درجة',
      'مقاومة للأشعة فوق البنفسجية والاتساخ والبقع',
      'مصنوع من أقمشة قوية مقاومة للتمزق',
      'تصميم يسمح بحرية الحركة مع جيوب متعددة',
      'يلبي معايير ANSI/ISEA 107 و EN 20471 ومعايير SASO'
    ],
    price: 390,
    images: [
      '/images/products/industrial/hi-vis-1.jpg',
      '/images/products/industrial/hi-vis-2.jpg',
      '/images/products/industrial/hi-vis-3.jpg'
    ],
    colors: ['#ffde00', '#ff7800', '#ccb100', '#cc5000'],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'],
    category: 'industrial-uniforms',
    tags: ['زي سلامة', 'ملابس عالية الوضوح', 'ملابس عمل صناعية', 'معدات سلامة'],
    rating: 4.8,
    reviews: 94
  };
  
  // Define related products
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
      id: 'flame-resistant-workwear',
      name: 'طقم ملابس مقاومة للحريق',
      description: 'ملابس عمل مقاومة للحريق للبيئات الصناعية الخطرة',
      features: ['مقاومة للحريق', 'مقاومة للحرارة'],
      price: 549,
      images: ['/images/products/flame-resistant-workwear.webp'],
      colors: ['#192a56', '#273c75', '#353b48'],
      sizes: ['S', 'M', 'L', 'XL', '2XL'],
      category: 'industrial-uniforms',
      tags: ['ملابس مقاومة للحريق', 'ملابس واقية', 'زي صناعي'],
      rating: 4.9,
      reviews: 78
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
    <>
      {/* Schema.org structured data for enhanced SEO */}
      <Script
        id="product-structured-data-ar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "زي السلامة عالي الرؤية من يونيوم",
            "image": [
              "https://uneom.com/images/products/industrial/hi-vis-1.jpg",
              "https://uneom.com/images/products/industrial/hi-vis-2.jpg",
              "https://uneom.com/images/products/industrial/hi-vis-3.jpg"
            ],
            "description": "زي مهني عالي الرؤية مصمم خصيصاً لبيئات العمل الخطرة والمناطق منخفضة الإضاءة، يوفر وضوح استثنائي مع الحفاظ على المتانة والراحة للعاملين في الصناعات المختلفة.",
            "sku": "UNEOM-HV-01",
            "brand": {
              "@type": "Brand",
              "name": "يونيوم"
            },
            "manufacturer": "يونيوم للملابس الصناعية",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/ar/shop/industrial-uniforms/hi-vis-safety-uniform",
              "priceCurrency": "SAR",
              "price": "390",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "94"
            }
          })
        }}
      />
      
      {/* Main product page component */}
      <ClientPage product={product} relatedProducts={relatedProducts} locale={locale} />
    </>
  );
} 