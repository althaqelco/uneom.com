import { Metadata } from 'next';
import ClientPage from '@/app/ar/shop/[category]/[product]/ClientPage';
import Script from 'next/script';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Define Arabic metadata for SEO optimization
export const metadata: Metadata = {
  title: 'واقي الأذن الصناعي | حماية سمع معتمدة وفق معايير السلامة العالمية | يونيوم',
  description: 'يوفر واقي الأذن الصناعي من يونيوم تخفيضًا متفوقًا للضوضاء في البيئات الصناعية السعودية مع معدل تخفيض ضوضاء 31 ديسيبل، تصميم مريح، وشهادة OSHA/ANSI. مثالي لقطاعات النفط والغاز والتصنيع والإنشاءات.',
  keywords: 'واقي الأذن الصناعي السعودية, حماية السمع, سماعات تخفيض الضوضاء, واقي أذن معتمد OSHA, واقي أذن بمعدل تخفيض 31 ديسيبل, معدات السلامة الصناعية السعودية, المحافظة على السمع',
  openGraph: {
    title: 'واقي الأذن الصناعي | حماية سمع متفوقة للبيئات الصناعية السعودية',
    description: 'مصمم خصيصًا للبيئات الصناعية عالية الضوضاء في المملكة العربية السعودية. يتميز بمعدل تخفيض ضوضاء 31 ديسيبل، عصابة رأس موزعة للضغط، ووسائد أذن من الفوم المتكيف للراحة طوال اليوم. يتجاوز معايير OSHA وANSI S3.19.',
    images: [
      {
        url: 'https://uneom.com/images/products/safety/ear-protection-1.jpg',
        width: 1200,
        height: 630,
        alt: 'واقي الأذن الصناعي من يونيوم'
      }
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/ar/shop/industrial-uniforms/related-product-3',
    languages: {
      'en': 'https://uneom.com/shop/industrial-uniforms/related-product-3',
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

export default function IndustrialEarProtectionPageArabic() {
  // Create product data for the Arabic version
  const productData = {
    id: 'related-product-3',
    name: 'واقي الأذن الصناعي',
    description: 'واقي أذن صناعي مهني مصمم خصيصًا للبيئات عالية الضوضاء في القطاعات الصناعية السعودية. توفر هذه السماعات حماية متفوقة للسمع بمعدل تخفيض ضوضاء (NRR) يبلغ 31 ديسيبل، مما يقلل بفعالية من مستويات الضوضاء الضارة في بيئات النفط والغاز والتصنيع والإنشاءات. مصممة هندسيًا لتوفير الراحة طوال اليوم مع عصابة رأس موزعة للضغط ووسائد أذن من الفوم المتكيف.',
    features: [
      'تخفيض متفوق للضوضاء بمعدل 31 ديسيبل (معدل تخفيض الضوضاء)',
      'يلبي أو يتجاوز معايير OSHA وANSI S3.19 لحماية السمع',
      'عصابة رأس مبطنة موزعة للضغط لتقليل التعب',
      'وسائد أذن من الفوم المتكيف لإحكام مثالي وراحة',
      'عصابة رأس قابلة للتعديل لتناسب مختلف أحجام الرأس',
      'بناء متين للبيئات الصناعية القاسية',
      'تصميم قابل للطي لسهولة التخزين عند عدم الاستخدام'
    ],
    price: 165,
    images: [
      '/images/products/safety/ear-protection-1.jpg',
      '/images/products/safety/ear-protection-2.jpg',
      '/images/products/safety/ear-protection-3.jpg'
    ],
    colors: ['#2c3e50', '#c0392b', '#f39c12'],
    sizes: ['مقاس قياسي', 'مقاس كبير'],
    category: 'industrial-uniforms',
    tags: ['واقي الأذن', 'حماية السمع', 'تخفيض الضوضاء', 'معدات وقاية', 'سلامة صناعية'],
    rating: 4.8,
    reviews: 76
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
      id: 'related-product-2',
      name: 'نظارات السلامة المهنية',
      description: 'نظارات سلامة مهنية مصممة للبيئات الصناعية المتطلبة',
      features: ['مقاومة للصدمات', 'طلاء مضاد للضباب'],
      price: 175,
      images: ['/images/products/safety/goggles-1.jpg'],
      colors: ['#2c3e50', '#3498db', '#e74c3c'],
      sizes: ['مقاس قياسي', 'مقاس فوق النظارات الطبية'],
      category: 'industrial-uniforms',
      tags: ['نظارات السلامة', 'حماية العيون', 'معدات وقاية'],
      rating: 4.9,
      reviews: 87
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
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl rtl:font-arabic">واقي الأذن الصناعي | حماية سمع معتمدة وفق معايير السلامة العالمية | يونيوم</h1>
      
      {/* Schema.org structured data for enhanced SEO */}
      <Script
        id="product-structured-data-ar"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "واقي الأذن الصناعي من يونيوم",
            "image": [
              "https://uneom.com/images/products/safety/ear-protection-1.jpg",
              "https://uneom.com/images/products/safety/ear-protection-2.jpg",
              "https://uneom.com/images/products/safety/ear-protection-3.jpg"
            ],
            "description": "واقي أذن صناعي مهني مصمم للبيئات الصناعية السعودية، يتميز بمعدل تخفيض ضوضاء 31 ديسيبل، عصابة رأس موزعة للضغط، ووسائد أذن من الفوم المتكيف. معتمد من OSHA وANSI S3.19.",
            "sku": "UNEOM-EP-PRO-01",
            "brand": {
              "@type": "Brand",
              "name": "يونيوم"
            },
            "manufacturer": "يونيوم لمعدات السلامة المهنية",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/ar/shop/industrial-uniforms/related-product-3",
              "priceCurrency": "SAR",
              "price": "165",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "76"
            }
          })
        }}
      />
      
      {/* Main product page component */}
      <ClientPage product={productData} relatedProducts={relatedProducts} locale={locale} />
        </main>
  );
}
