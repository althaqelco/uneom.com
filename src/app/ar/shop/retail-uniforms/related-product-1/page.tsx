import { Metadata } from 'next';
import ClientPage from '@/app/shop/[category]/[product]/ClientPage';
import Script from 'next/script';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Define metadata for SEO optimization
export const metadata: Metadata = {
  title: 'زي موظف المتجر الفاخر | ملابس موظفين متاجر أنيقة | يونيوم المملكة العربية السعودية',
  description: 'ارتقِ بعلامتك التجارية مع مجموعة أزياء موظفي المتاجر الفاخرة من يونيوم. تصاميم عملية متوافقة مع البيئة السعودية بأقمشة مريحة وخيارات تخصيص متعددة. مثالية لبيئات البيع بالتجزئة الفاخرة في الرياض وجدة وجميع أنحاء المملكة.',
  keywords: 'زي موظفين المتاجر السعودية, ملابس موظفي البيع بالتجزئة, يونيفورم محلات تجارية, ملابس متاجر فاخرة السعودية, يونيفورم موظفين الرياض, ملابس احترافية للبيع بالتجزئة, حلول أزياء موظفين المتاجر السعودية',
  openGraph: {
    title: 'زي موظف المتجر الفاخر | ارتقِ بهوية علامتك التجارية',
    description: 'مصممة خصيصًا لبيئات البيع بالتجزئة الفاخرة في المملكة العربية السعودية. أزياء أنيقة ومريحة ومصممة باحترافية تعزز إنتاجية الموظفين وانطباع العلامة التجارية. تتوفر خيارات تخصيص متعددة.',
    images: [
      {
        url: 'https://uneom.com/images/industries/retail-shops/retail-shops-uniform-identity.jpg',
        width: 1200,
        height: 630,
        alt: 'زي موظف المتجر الفاخر من يونيوم'
      }
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/ar/shop/retail-uniforms/related-product-1',
    languages: {
      'en': 'https://uneom.com/shop/retail-uniforms/related-product-1',
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

export default function RetailStoreUniformPageArabic() {
  // Create params object to match ClientPageProps interface
  const params = {
    category: 'retail-uniforms',
    product: 'related-product-1'
  };
  
  // Create product data
  const productData = {
    id: 'related-product-1',
    name: 'زي موظف المتجر الفاخر',
    description: 'ارتقِ بعلامتك التجارية مع مجموعة أزياء موظفي المتاجر الفاخرة، المصممة خصيصًا لبيئات البيع بالتجزئة الراقية في المملكة العربية السعودية. تجمع هذه المجموعة الأنيقة بين المظهر الاحترافي والراحة الاستثنائية، وتتميز بأقمشة مريحة مثالية لبيئات المولات التي تتطلب ساعات عمل طويلة. يمكن تخصيص كل زي موحد بألوان علامتك التجارية وموضع الشعار، مما يخلق مظهرًا متناسقًا للموظفين يعزز هوية علامتك التجارية ويزيد من ثقة العملاء.',
    features: [
      'قصة محكمة بتصميم عصري مناسب لبيئات البيع بالتجزئة السعودية',
      'مزيج قماش فاخر (65% قطن، 35% بوليستر) للراحة طوال اليوم',
      'مقاومة للتجاعيد وسهلة العناية للحفاظ على المظهر الاحترافي',
      'خيارات تخصيص متعددة تشمل التطريز ومطابقة الألوان',
      'تصاميم محتشمة مناسبة للمتطلبات الثقافية السعودية',
      'متوفرة مع إكسسوارات متناسقة (شارات الأسماء، الأوشحة/ربطات العنق)'
    ],
    price: 450,
    images: [
      '/images/industries/retail-shops/retail-shops-uniform-identity.jpg',
      '/images/industries/retail-shops/retail-shops-uniform-identity-2.jpg',
      '/images/industries/retail-shops/retail-shops-uniform-identity-3.jpg'
    ],
    colors: ['#2c3e50', '#34495e', '#7f8c8d', '#ecf0f1'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'],
    category: 'retail-uniforms',
    tags: ['زي البيع بالتجزئة', 'ملابس موظفي المتجر', 'أزياء البيع بالتجزئة الفاخرة', 'زي احترافي', 'ملابس المتاجر ذات العلامات التجارية'],
    rating: 4.9,
    reviews: 78
  };
  
  // Create related products
  const relatedProducts = [
    {
      id: 'luxury-retail-collection',
      name: 'مجموعة أزياء البيع بالتجزئة الفاخرة',
      description: 'مجموعة كاملة من أزياء البيع بالتجزئة الفاخرة للمتاجر والبوتيكات الراقية',
      features: ['أقمشة فاخرة', 'قصة محكمة', 'مخططات ألوان قابلة للتخصيص'],
      price: 795,
      images: ['/images/industries/retail-shops/retail-shops-uniform-identity-4.jpg'],
      colors: ['#2c3e50', '#34495e', '#7f8c8d'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      category: 'retail-uniforms',
      tags: ['البيع بالتجزئة الفاخر', 'زي البوتيك', 'ملابس المتاجر الراقية'],
      rating: 4.9,
      reviews: 92
    },
    {
      id: 'customer-service',
      name: 'زي مكتب خدمة العملاء',
      description: 'ملابس احترافية مصممة خصيصًا لممثلي خدمة العملاء',
      features: ['مظهر احترافي', 'راحة للمناوبات الطويلة', 'تخصيص العلامة التجارية'],
      price: 380,
      images: ['/images/industries/retail-shops/retail-shops-uniform-brand.jpg'],
      colors: ['#2c3e50', '#34495e', '#7f8c8d', '#ecf0f1'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'],
      category: 'retail-uniforms',
      tags: ['خدمة العملاء', 'مكتب المساعدة', 'موظفي دعم البيع بالتجزئة'],
      rating: 4.7,
      reviews: 63
    },
    {
      id: 'store-staff',
      name: 'طقم الزي الكامل لموظفي المتجر',
      description: 'طقم زي موحد كامل لموظفي متاجر البيع بالتجزئة العامة مع خيارات متعددة',
      features: ['تصاميم متعددة الاستخدامات', 'تشمل قطع متعددة', 'خيارات أنماط متنوعة'],
      price: 520,
      images: ['/images/industries/retail-shops/retail-shops-uniform.jpg'],
      colors: ['#2c3e50', '#34495e', '#7f8c8d', '#ecf0f1'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      category: 'retail-uniforms',
      tags: ['موظفي البيع بالتجزئة', 'زي المتجر', 'ملابس مساعدي المبيعات'],
      rating: 4.8,
      reviews: 85
    }
  ];
  
  const locale = 'ar';
  
  return (
    <main>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl rtl:font-arabic">زي موظف المتجر الفاخر | ملابس موظفين متاجر أنيقة | يونيوم المملكة العربية السعودية</h1>
      
      {/* Schema.org structured data for enhanced SEO */}
      <Script
        id="product-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "زي موظف المتجر الفاخر من يونيوم",
            "image": [
              "https://uneom.com/images/industries/retail-shops/retail-shops-uniform-identity.jpg",
              "https://uneom.com/images/industries/retail-shops/retail-shops-uniform-identity-2.jpg",
              "https://uneom.com/images/industries/retail-shops/retail-shops-uniform-identity-3.jpg"
            ],
            "description": "زي موظف المتجر الفاخر مصمم لبيئات البيع بالتجزئة السعودية، يتميز بأقمشة مريحة، وتصميم عصري، وخيارات تخصيص لتعزيز هوية العلامة التجارية.",
            "sku": "UNEOM-RT-PRO-01",
            "brand": {
              "@type": "Brand",
              "name": "UNEOM"
            },
            "manufacturer": "UNEOM للأزياء المهنية",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/ar/shop/retail-uniforms/related-product-1",
              "priceCurrency": "SAR",
              "price": "450",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "78"
            }
          })
        }}
      />
      
      {/* Main product page component */}
      <ClientPage params={params} />
        </main>
  );
} 