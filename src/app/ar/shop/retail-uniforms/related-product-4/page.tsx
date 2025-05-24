import { Metadata } from 'next';
import ClientPage from '@/app/shop/[category]/[product]/ClientPage';
import Script from 'next/script';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Define metadata for SEO optimization
export const metadata: Metadata = {
  title: 'زي فريق التجزئة غير الرسمي | أزياء متاجر عصرية | يونيوم المملكة العربية السعودية',
  description: 'أزياء عصرية وغير رسمية مصممة خصيصًا لمتاجر التجزئة المعاصرة في المملكة العربية السعودية. زي مريح وأنيق يناسب العلامات التجارية الشبابية والمتاجر المتخصصة التي تسعى لخلق بيئة ودية مع الحفاظ على مظهر مهني.',
  keywords: 'زي تجزئة غير رسمي, ملابس موظفي المتاجر العصرية, يونيفورم كاجوال للبيع بالتجزئة, أزياء متاجر التكنولوجيا السعودية, ملابس الفرق الشبابية, يونيفورم متاجر الإلكترونيات, زي موحد عصري للشركات الناشئة',
  openGraph: {
    title: 'زي فريق التجزئة غير الرسمي | أزياء متاجر شبابية',
    description: 'أزياء عصرية وغير رسمية لمتاجر التجزئة المعاصرة في السعودية. مزيج مثالي من الأناقة المعاصرة والراحة العملية مع خيارات تخصيص مبتكرة تناسب العلامات التجارية الشبابية.',
    images: [
      {
        url: 'https://uneom.com/images/products/retail/casual-1.jpg',
        width: 1200,
        height: 630,
        alt: 'زي فريق التجزئة غير الرسمي من يونيوم'
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

export default function CasualRetailTeamUniformPageArabic() {
  // Create params object to match ClientPageProps interface
  const params = {
    category: 'retail-uniforms',
    product: 'related-product-4'
  };
  
  // Create product data
  const productData = {
    id: 'related-product-4',
    name: 'زي فريق التجزئة غير الرسمي',
    description: 'أزياء عصرية وغير رسمية مصممة خصيصًا لتلبية احتياجات متاجر التجزئة العصرية في المملكة العربية السعودية. يوفر هذا الزي مزيجًا مثاليًا من الأناقة المعاصرة والراحة العملية، مما يعزز تجربة التسوق من خلال إنشاء بيئة ودية وعصرية. مثالي للعلامات التجارية الشبابية ومتاجر التكنولوجيا والترفيه التي تستهدف الزبائن الشباب في السوق السعودي المتطور.',
    features: [
      'قماش قطني فائق النعومة (95% قطن عضوي، 5% إيلاستين) يوفر المرونة والراحة الاستثنائية طوال فترات العمل',
      'تصميم عصري بقصات محدثة تناسب الذوق السعودي المعاصر مع الحفاظ على الحشمة المناسبة',
      'ألوان حيوية مع تقنية الصباغة المتطورة المقاومة للبهتان حتى بعد غسيل متكرر',
      'معالجة خاصة مضادة للروائح والبكتيريا تناسب ساعات العمل الطويلة في بيئة تجارية نشطة',
      'إمكانية التكيف مع المواسم المختلفة (وحدات قابلة للتبديل - قمصان بولو، تي شيرت، قمصان بأكمام طويلة)'
    ],
    price: 150,
    images: [
      '/images/products/retail/casual-1.jpg',
      '/images/industries/retail-shops/retail-shops-uniform-casual.jpg',
      '/images/industries/retail-shops/retail-shops-uniform-identity-2.jpg',
      '/images/industries/retail-shops/retail-shops-uniform-identity-3.jpg'
    ],
    colors: ['#2ac3e2', '#7f8c8d', '#60714F', '#e67e22', '#8e44ad', '#f39c12'],
    sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', 'تصميمات شاملة لجميع أنواع الجسم'],
    category: 'retail-uniforms',
    tags: ['زي كاجوال للمتاجر', 'ملابس متاجر الإلكترونيات', 'أزياء شبابية للبيع بالتجزئة', 'يونيفورم متاجر التكنولوجيا', 'ملابس متاجر الألعاب', 'زي المقاهي المتخصصة'],
    rating: 4.6,
    reviews: 92
  };
  
  // Create related products
  const relatedProducts = [
    {
      id: 'related-product-1',
      name: 'بولو فاخر لموظفي المتاجر',
      description: 'قميص بولو فاخر مصمم خصيصًا لموظفي المتاجر الراقية في المملكة العربية السعودية',
      features: ['قماش فاخر مريح', 'مقاوم للبقع', 'خيارات تخصيص متعددة'],
      price: 185,
      images: ['/images/products/retail/uniform-1.jpg'],
      colors: ['#2c3e50', '#34495e', '#000000', '#ffffff'],
      sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
      category: 'retail-uniforms',
      tags: ['بولو فاخر', 'زي المتاجر', 'قميص موظفين'],
      rating: 4.9,
      reviews: 78
    },
    {
      id: 'related-product-2',
      name: 'طقم بليزر فاخر للبيع بالتجزئة',
      description: 'طقم بليزر راقي مصمم خصيصًا لبيئات البيع بالتجزئة الفاخرة في المملكة العربية السعودية',
      features: ['نسيج فاخر', 'مقاوم للتجاعيد', 'تفاصيل أنيقة لإبراز هوية العلامة التجارية'],
      price: 650,
      images: ['/images/products/retail/luxury-1.jpg'],
      colors: ['#2c3e50', '#34495e', '#000000', '#7f0000'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
      category: 'retail-uniforms',
      tags: ['زي البيع بالتجزئة الفاخر', 'بليزر للمتاجر', 'يونيفورم البوتيكات'],
      rating: 4.8,
      reviews: 62
    },
    {
      id: 'related-product-3',
      name: 'طقم متجر متعدد الأقسام',
      description: 'أزياء متكاملة وعملية مصممة خصيصًا للعاملين في متاجر متعددة الأقسام في السوق السعودي',
      features: ['نسيج متين', 'تصميم متعدد الطبقات', 'جيوب عملية'],
      price: 320,
      images: ['/images/products/retail/department-1.jpg'],
      colors: ['#1d3f6e', '#4a4a4a', '#556b2f', '#654321'],
      sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
      category: 'retail-uniforms',
      tags: ['زي متاجر الهايبر ماركت', 'يونيفورم المتاجر الكبرى', 'ملابس مراكز التسوق'],
      rating: 4.7,
      reviews: 85
    }
  ];
  
  const locale = 'ar';
  
  return (
    <main>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl rtl:font-arabic">زي فريق التجزئة غير الرسمي | أزياء متاجر عصرية | يونيوم المملكة العربية السعودية</h1>
      
      {/* Schema.org structured data for enhanced SEO */}
      <Script
        id="product-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "زي فريق التجزئة غير الرسمي من يونيوم",
            "image": [
              "https://uneom.com/images/products/retail/casual-1.jpg",
              "https://uneom.com/images/industries/retail-shops/retail-shops-uniform-casual.jpg",
              "https://uneom.com/images/industries/retail-shops/retail-shops-uniform-identity-2.jpg"
            ],
            "description": "زي فريق التجزئة غير الرسمي مصمم خصيصًا لمتاجر التجزئة العصرية في المملكة العربية السعودية، يتميز بقماش قطني مريح وتصميم عصري وألوان حيوية.",
            "sku": "UNEOM-RT-CAS-04",
            "brand": {
              "@type": "Brand",
              "name": "UNEOM"
            },
            "manufacturer": "UNEOM للأزياء المهنية",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/ar/shop/retail-uniforms/related-product-4",
              "priceCurrency": "SAR",
              "price": "150",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.6",
              "reviewCount": "92"
            }
          })
        }}
      />
      
      {/* Main product page component */}
      <ClientPage params={params} />
        </main>
  );
} 