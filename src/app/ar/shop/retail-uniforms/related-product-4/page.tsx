import { Metadata } from 'next';
import ClientPage from '@/app/shop/[category]/[product]/ClientPage';
import Script from 'next/script';

// Define metadata for SEO optimization
export const metadata: Metadata = {
  title: 'طقم زي سفراء العلامة التجارية | ملابس فرق الترويج | يونيوم المملكة العربية السعودية',
  description: 'أزياء سفراء العلامة التجارية عالية التأثير للفعاليات الترويجية في السعودية. تصاميم لافتة للنظر وقابلة للتخصيص مع راحة لساعات الترويج الطويلة. ارتقِ بتمثيل علامتك التجارية في المولات وبيئات التجزئة في الرياض وجدة وجميع أنحاء المملكة.',
  keywords: 'زي سفراء العلامة التجارية السعودية, ملابس فرق الترويج, أزياء التسويق للفعاليات, ملابس الترويج في المولات السعودية, يونيفورم العروض التوضيحية الرياض, أزياء تمثيل العلامة التجارية السعودية, حلول فرق الفعاليات التجارية',
  openGraph: {
    title: 'طقم زي سفراء العلامة التجارية | تميز في الفعاليات الترويجية السعودية',
    description: 'مصممة لتحقيق أقصى قدر من ظهور العلامة التجارية في الفعاليات الترويجية للبيع بالتجزئة في المملكة العربية السعودية. أزياء لافتة للنظر ومريحة تساعد سفراءك على إحداث تأثير مع الحفاظ على الملاءمة الثقافية. خيارات تخصيص متعددة للتوافق المثالي مع العلامة التجارية.',
    images: [
      {
        url: 'https://uneom.com/images/industries/retail-shops/retail-shops-uniform-identity-4.jpg',
        width: 1200,
        height: 630,
        alt: 'طقم زي سفراء العلامة التجارية من يونيوم'
      }
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/ar/shop/retail-uniforms/related-product-4',
    languages: {
      'en': 'https://uneom.com/shop/retail-uniforms/related-product-4',
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

export default function BrandAmbassadorUniformPageArabic() {
  // Create params object to match ClientPageProps interface
  const params = {
    category: 'retail-uniforms',
    product: 'related-product-4'
  };
  
  // Create product data
  const productData = {
    id: 'related-product-4',
    name: 'طقم زي سفراء العلامة التجارية',
    description: 'اصنع انطباعًا قويًا للعلامة التجارية مع طقم زي سفراء العلامة التجارية، المصمم خصيصًا للفعاليات الترويجية في بيئات البيع بالتجزئة السعودية. تجمع هذه المجموعة متعددة الاستخدامات بين التصميم اللافت للنظر والوظائف العملية، مما يضمن بقاء سفراء علامتك التجارية مرتاحين طوال المناوبات الترويجية الطويلة مع تحقيق أقصى قدر من ظهور العلامة التجارية. يمكن تخصيص كل مكون بالكامل بألوان علامتك التجارية وشعاراتها ورسائلها الترويجية، مما يخلق تجربة ترويجية متكاملة تجذب انتباه العملاء.',
    features: [
      'أقمشة أداء خفيفة الوزن ومريحة (60% قطن، 40% بوليستر) مثالية للعمل الترويجي النشط',
      'عناصر تصميم عالية الوضوح مع مساحة تخصيص واسعة للشعارات والرسائل',
      'تقنية التجفيف السريع للراحة خلال فعاليات الترويج الطويلة في المولات',
      'مكونات قابلة للمزج والمطابقة تشمل قميص/بولو بالعلامة التجارية، وسترة/جاكيت إضافية اختيارية، وملابس سفلية منسقة',
      'خيارات تصميم محتشمة مناسبة للبيئات الترويجية السعودية',
      'بناء متين ليتحمل الاستخدام المتكرر عبر فعاليات ترويجية متعددة'
    ],
    price: 480,
    images: [
      '/images/industries/retail-shops/retail-shops-uniform-identity-4.jpg',
      '/images/industries/retail-shops/retail-shops-uniform-brands-logo.jpg',
      '/images/industries/retail-shops/retail-shops-uniform-brands-logo-2.jpg'
    ],
    colors: ['#2c3e50', '#e74c3c', '#3498db', '#f1c40f', '#ecf0f1'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    category: 'retail-uniforms',
    tags: ['زي سفراء العلامة التجارية', 'ملابس فرق الترويج', 'ملابس التسويق للفعاليات', 'زي الترويج في المولات', 'ملابس العروض التوضيحية للتجزئة'],
    rating: 4.8,
    reviews: 47
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
      id: 'related-product-1',
      name: 'زي موظف المتجر الفاخر',
      description: 'ارتقِ بعلامتك التجارية مع مجموعة أزياء موظفي المتاجر الفاخرة',
      features: ['قصة محكمة', 'مزيج قماش فاخر مريح', 'خيارات تخصيص'],
      price: 450,
      images: ['/images/industries/retail-shops/retail-shops-uniform-identity.jpg'],
      colors: ['#2c3e50', '#34495e', '#7f8c8d', '#ecf0f1'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'],
      category: 'retail-uniforms',
      tags: ['زي البيع بالتجزئة', 'ملابس موظفي المتجر', 'أزياء البيع بالتجزئة الفاخرة'],
      rating: 4.9,
      reviews: 78
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
    }
  ];
  
  const locale = 'ar';
  
  return (
    <>
      {/* Schema.org structured data for enhanced SEO */}
      <Script
        id="product-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "طقم زي سفراء العلامة التجارية من يونيوم",
            "image": [
              "https://uneom.com/images/industries/retail-shops/retail-shops-uniform-identity-4.jpg",
              "https://uneom.com/images/industries/retail-shops/retail-shops-uniform-brands-logo.jpg",
              "https://uneom.com/images/industries/retail-shops/retail-shops-uniform-brands-logo-2.jpg"
            ],
            "description": "طقم زي سفراء العلامة التجارية عالي التأثير مصمم للفعاليات الترويجية السعودية، يتميز بأقمشة أداء خفيفة الوزن، وعناصر تصميم عالية الوضوح، وخيارات تخصيص واسعة لرسائل العلامة التجارية.",
            "sku": "UNEOM-RT-AMB-04",
            "brand": {
              "@type": "Brand",
              "name": "UNEOM"
            },
            "manufacturer": "UNEOM للأزياء المهنية",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/ar/shop/retail-uniforms/related-product-4",
              "priceCurrency": "SAR",
              "price": "480",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "47"
            }
          })
        }}
      />
      
      {/* Main product page component */}
      <ClientPage params={params} />
    </>
  );
} 