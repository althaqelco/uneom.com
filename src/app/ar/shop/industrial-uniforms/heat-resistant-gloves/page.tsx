import { Metadata } from 'next';
import ClientPage from '@/app/ar/shop/[category]/[product]/ClientPage';
import Script from 'next/script';

// Define Arabic metadata for SEO optimization
export const metadata: Metadata = {
  title: 'قفازات مقاومة للحرارة للاستخدام الصناعي | حماية 1000 درجة مئوية | يونيوم المملكة العربية السعودية',
  description: 'توفر قفازات يونيوم المقاومة للحرارة حماية متفوقة في البيئات الصناعية السعودية مع مقاومة حرارية تصل إلى 1000 درجة مئوية، وحماية من الثقب، وتصميم مريح. معتمدة وفقًا لمعايير EN 407 وSASO لأقصى درجات السلامة في مكان العمل.',
  keywords: 'قفازات مقاومة للحرارة السعودية, قفازات مقاومة للحرارة 1000 درجة مئوية, حماية اليدين الصناعية, قفازات سلامة مضادة للحرارة, قفازات معتمدة EN 407, قفازات عمل مقاومة للثقب, معدات الحماية الحرارية, معدات الحماية الشخصية الصناعية السعودية, قفازات سلامة قابلة للتخصيص',
  openGraph: {
    title: 'قفازات صناعية مقاومة للحرارة | حماية حرارية 1000 درجة مئوية لأماكن العمل السعودية',
    description: 'مصممة خصيصًا للبيئات الصناعية المتطلبة في المملكة العربية السعودية. مقاومة حرارية متقدمة تصل إلى 1000 درجة مئوية، راحة اليد معززة للحماية من الثقب، وتصميم مريح للاستخدام المطول. تتجاوز معايير السلامة الخليجية والدولية.',
    images: [
      {
        url: 'https://uneom.com/images/products/industrial/heat-resistant-gloves-1.jpg',
        width: 1200,
        height: 630,
        alt: 'قفازات يونيوم الصناعية المقاومة للحرارة'
      }
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/ar/shop/industrial-uniforms/heat-resistant-gloves',
    languages: {
      'en': 'https://uneom.com/shop/industrial-uniforms/heat-resistant-gloves',
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

export default function HeatResistantGlovesPageArabic() {
  // Create product data for the Arabic version
  const productData = {
    id: 'heat-resistant-gloves',
    name: 'قفازات صناعية مقاومة للحرارة',
    description: 'قفازات مقاومة للحرارة مصممة خصيصًا للاستخدام في البيئات الصناعية السعودية المتطلبة. توفر هذه القفازات حماية متميزة من الحرارة العالية تصل إلى 1000 درجة مئوية، مع تعزيز منطقة راحة اليد للحماية من الثقب ومقاومة الاحتكاك. تم تصميمها بعناية لتوفير الراحة والمرونة مع الحفاظ على أقصى درجات الحماية للعاملين في القطاعات الصناعية.',
    features: [
      'مقاومة حرارية متقدمة تصل إلى 1000 درجة مئوية',
      'تعزيز منطقة راحة اليد للحماية من الثقب',
      'مقاومة للزيوت والمواد الكيميائية الصناعية',
      'تصميم مريح يسمح بالحركة المرنة للأصابع',
      'متوفرة بعدة مقاسات لضمان الملاءمة المثالية',
      'معتمدة وفقًا لمعايير EN 407 وSASO للسلامة الصناعية'
    ],
    price: 349,
    images: [
      '/images/products/industrial/heat-resistant-gloves-1.jpg',
      '/images/products/industrial/heat-resistant-gloves-2.jpg',
      '/images/products/industrial/heat-resistant-gloves-3.jpg'
    ],
    colors: ['#e74c3c', '#34495e', '#f1c40f'],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'industrial-uniforms',
    tags: ['قفازات مقاومة للحرارة', 'حماية اليدين', 'معدات وقاية', 'صناعة', 'سلامة مهنية'],
    rating: 4.7,
    reviews: 89
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
            "name": "قفازات يونيوم الصناعية المقاومة للحرارة",
            "image": [
              "https://uneom.com/images/products/industrial/heat-resistant-gloves-1.jpg",
              "https://uneom.com/images/products/industrial/heat-resistant-gloves-2.jpg",
              "https://uneom.com/images/products/industrial/heat-resistant-gloves-3.jpg"
            ],
            "description": "قفازات متقدمة مقاومة للحرارة مصممة للبيئات الصناعية السعودية، تتميز بمقاومة حرارية متقدمة تصل إلى 1000 درجة مئوية وراحة يد معززة للحماية من الثقب.",
            "sku": "UNEOM-HRG-PRO-01",
            "brand": {
              "@type": "Brand",
              "name": "يونيوم"
            },
            "manufacturer": "يونيوم للملابس المهنية",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/ar/shop/industrial-uniforms/heat-resistant-gloves",
              "priceCurrency": "SAR",
              "price": "349",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.7",
              "reviewCount": "89"
            }
          })
        }}
      />
      
      {/* Main product page component */}
      <ClientPage product={productData} relatedProducts={relatedProducts} locale={locale} />
    </>
  );
}
