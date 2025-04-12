import { Metadata } from 'next';
import ClientPage from '@/app/ar/shop/[category]/[product]/ClientPage';
import Script from 'next/script';

// Define Arabic metadata for SEO optimization
export const metadata: Metadata = {
  title: 'سترة صناعية متينة | مقاومة للحرارة والاشتعال | يونيوم المملكة العربية السعودية',
  description: 'سترة صناعية متينة مصممة خصيصاً لبيئات العمل القاسية في المملكة العربية السعودية، توفر حماية ممتازة ضد الحرارة والاشتعال، مع مواد عالية التحمل ومقاومة للزيوت والكيماويات.',
  keywords: 'سترة صناعية السعودية, ملابس عمال مقاومة للحرارة, سترة مقاومة للاشتعال الرياض, معدات الحماية الشخصية الصناعية, ملابس عمال النفط والغاز, سترة عمل صناعية, ملابس أمان للمصانع السعودية',
  openGraph: {
    title: 'سترة صناعية متينة | مقاومة للحرارة والاشتعال | يونيوم المملكة العربية السعودية',
    description: 'سترة صناعية متينة مصممة خصيصاً لبيئات العمل القاسية في المملكة العربية السعودية، توفر حماية ممتازة ضد الحرارة والاشتعال، مع مواد عالية التحمل ومقاومة للزيوت والكيماويات.',
    images: [
      {
        url: 'https://uneom.com/images/industries/Factory_Industrial/Factory_Industrial_Workwear_2.jpg',
        width: 1200,
        height: 630,
        alt: 'سترة صناعية متينة من يونيوم'
      }
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/ar/shop/industrial-uniforms/industrial-jacket',
    languages: {
      'en': 'https://uneom.com/shop/industrial-uniforms/industrial-jacket',
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

export default function IndustrialJacketPageArabic() {
  // Create product data for the Arabic version
  const productData = {
    id: 'industrial-jacket',
    name: 'سترة صناعية متينة',
    description: 'سترة صناعية متينة مصممة خصيصاً لقطاعات النفط والغاز والتصنيع في المملكة العربية السعودية. مصنوعة من مواد مقاومة للحرارة والاشتعال، توفر هذه السترة حماية ممتازة في بيئات العمل القاسية. تتميز بمقاومتها للزيوت والكيماويات وتصميمها العملي الذي يشمل جيوب متعددة وعاكسات للضوء لتحسين الرؤية.',
    features: [
      'مقاومة للحرارة حتى 370 درجة مئوية',
      'معالجة مقاومة للاشتعال',
      'قماش متين مقاوم للتمزق',
      'مقاومة للزيوت والكيماويات',
      'أشرطة عاكسة بتقنية 3M™',
      'جيوب متعددة للأدوات والمعدات',
      'سحاب مزدوج الاتجاه مع غطاء واقي'
    ],
    price: 399,
    images: [
      '/images/industries/Factory_Industrial/Factory_Industrial_Workwear_2.jpg',
      '/images/industries/Factory_Industrial/Factory_Industrial_Workwear_post_1.webp',
      '/images/industries/manufacturing/manufacturing_uniform_for_eng.jpg'
    ],
    colors: ['#00008B', '#1C2841', '#343434'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    category: 'industrial-uniforms',
    tags: ['سترة صناعية', 'ملابس عمال', 'معدات الحماية', 'صناعة', 'نفط وغاز'],
    rating: 4.8,
    reviews: 95
  };
  
  // Create related products for Arabic version
  const relatedProducts = [
    {
      id: 'industrial-safety-vest',
      name: 'سترة أمان عاكسة للضوء',
      description: 'سترة أمان عالية الوضوح مع أشرطة عاكسة للاستخدام في بيئات العمل الصناعية',
      features: ['شهادة ANSI/ISEA 107 الفئة 2', 'أشرطة عاكسة بزاوية 360 درجة'],
      price: 189,
      images: ['/images/industries/Factory_Industrial/Factory_Industrial_Workwear_post_3.webp'],
      colors: ['#FF6700', '#FFFF00', '#7FFF00'],
      sizes: ['S/M', 'L/XL', '2XL/3XL'],
      category: 'industrial-uniforms',
      tags: ['سترة أمان', 'عاكس للضوء', 'معدات وقاية'],
      rating: 4.8,
      reviews: 95
    },
    {
      id: 'mechanics-overalls',
      name: 'أفرول ميكانيكي متين',
      description: 'أفرول ميكانيكي متين مقاوم للزيوت مع تقوية في مناطق الركبتين والمرفقين',
      features: ['مقاوم للزيوت والكيماويات', 'تقوية CORDURA® في الركبتين'],
      price: 329,
      images: ['/images/products/industrial-coverall.jpg'],
      colors: ['#0a2463', '#121212', '#4b5358'],
      sizes: ['48', '50', '52', '54', '56'],
      category: 'industrial-uniforms',
      tags: ['أفرول ميكانيكي', 'ملابس عمل', 'مقاوم للزيوت'],
      rating: 4.8,
      reviews: 112
    },
    {
      id: 'welding-apron',
      name: 'مريلة لحام جلدية',
      description: 'مريلة لحام جلدية متينة توفر حماية من الحرارة حتى 1100 درجة مئوية',
      features: ['مقاومة للحرارة حتى 1100 درجة مئوية', 'خياطة كيفلار مقاومة للهب'],
      price: 279,
      images: ['/images/industries/manufacturing/manufacturing_uniform_product2.jpg'],
      colors: ['#8B4513', '#2C3539', '#D2B48C'],
      sizes: ['مقاس موحد', 'مقاس ممتد'],
      category: 'industrial-uniforms',
      tags: ['مريلة لحام', 'معدات وقاية', 'مقاومة للحرارة'],
      rating: 4.9,
      reviews: 78
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
            "name": "سترة صناعية متينة من يونيوم",
            "image": [
              "https://uneom.com/images/industries/Factory_Industrial/Factory_Industrial_Workwear_2.jpg",
              "https://uneom.com/images/industries/Factory_Industrial/Factory_Industrial_Workwear_post_1.webp",
              "https://uneom.com/images/industries/manufacturing/manufacturing_uniform_for_eng.jpg"
            ],
            "description": "سترة صناعية متينة مصممة خصيصاً لقطاعات النفط والغاز والتصنيع في المملكة العربية السعودية. مصنوعة من مواد مقاومة للحرارة والاشتعال تصل إلى 370 درجة مئوية، مع تقنيات متقدمة لمقاومة الزيوت والكيماويات.",
            "sku": "UNEOM-IJ-400",
            "brand": {
              "@type": "Brand",
              "name": "يونيوم"
            },
            "manufacturer": "يونيوم للملابس المهنية",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/ar/shop/industrial-uniforms/industrial-jacket",
              "priceCurrency": "SAR",
              "price": "399",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "95"
            }
          })
        }}
      />
      
      {/* Main product page component */}
      <ClientPage product={productData} relatedProducts={relatedProducts} locale={locale} />
    </>
  );
} 