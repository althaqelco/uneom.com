import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Reusable components
const HeroSection = ({ title, subtitle, image }) => (
  <div className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white">
    <div className="absolute inset-0 opacity-30">
      <Image 
        src={image} 
        alt={title} 
        layout="fill" 
        objectFit="cover" 
        priority 
      />
    </div>
    <div className="relative container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl text-primary-100">{subtitle}</p>
      </div>
    </div>
  </div>
);

const FilterButton = ({ text, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-md text-sm font-medium transition duration-300 ml-2 mb-2 ${
      isActive
        ? 'bg-primary-600 text-white'
        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
    }`}
  >
    {text}
  </button>
);

const ProductCard = ({ product }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg">
    <div className="relative h-64">
      <Image 
        src={product.image} 
        alt={product.name} 
        layout="fill" 
        objectFit="cover" 
      />
      {product.isBestseller && (
        <div className="absolute top-0 left-0 bg-secondary-500 text-primary-900 font-bold py-1 px-3 m-2 rounded-md text-sm">
          الأكثر مبيعاً
        </div>
      )}
    </div>
    <div className="p-4">
      <h3 className="text-lg font-bold mb-1 text-gray-800">{product.name}</h3>
      <p className="text-sm text-gray-600 mb-2">{product.shortDescription}</p>
      <div className="flex justify-between items-center">
        <p className="font-bold text-primary-600">{product.price.toFixed(2)} ريال</p>
        <Link href={`/ar/shop/products/${product.id}`} legacyBehavior>
          <a className="bg-primary-600 hover:bg-primary-700 text-white text-sm py-1 px-3 rounded transition duration-300">
            عرض التفاصيل
          </a>
        </Link>
      </div>
    </div>
  </div>
);

export default function HealthcareAccessoriesPageArabic() {
  const router = useRouter();
  const { locale } = router;
  
  // State for filters
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  
  // Product data
  const productsData = {
    title: "مستلزمات الرعاية الصحية والمعدات الطبية",
    subtitle: "إكسسوارات مهنية لمتخصصي الرعاية الصحية في المملكة العربية السعودية، من سماعات الطبيب إلى قبعات الجراحة",
    heroImage: "/images/shop/healthcare/accessories-hero.jpg",
    introduction: `
      أكمل زيك الطبي بإكسسوارات احترافية مصممة للراحة والوظائف العملية والتوافق مع معايير الرعاية الصحية السعودية. توفر يونيوم مجموعة شاملة من الإكسسوارات الطبية، من أدوات التشخيص إلى معدات الحماية الشخصية، وحاملات الشارات المخصصة، والكثير غير ذلك.
      
      تلبي جميع إكسسوارات الرعاية الصحية لدينا معايير الجودة الصارمة وتأتي من مصنعين موثوقين لضمان الموثوقية في البيئات السريرية.
    `,
    categories: [
      { id: 'all', name: 'جميع الإكسسوارات' },
      { id: 'diagnostic', name: 'أدوات التشخيص' },
      { id: 'ppe', name: 'معدات الحماية' },
      { id: 'comfort', name: 'إكسسوارات الراحة' },
      { id: 'identification', name: 'الهويات والشارات' },
      { id: 'utility', name: 'المنظمات والتخزين' }
    ],
    sortOptions: [
      { id: 'featured', name: 'الأكثر تميزاً' },
      { id: 'price-low', name: 'السعر: من الأقل إلى الأعلى' },
      { id: 'price-high', name: 'السعر: من الأعلى إلى الأقل' },
      { id: 'newest', name: 'أحدث المنتجات' }
    ],
    products: [
      {
        id: 'stethoscope-premium',
        name: 'سماعة طبيب قلب احترافية',
        shortDescription: 'سماعة طبيب عالية الجودة للقلب مع صوتيات استثنائية',
        category: 'diagnostic',
        price: 349.99,
        image: '/images/shop/healthcare/stethoscope-premium.jpg',
        isBestseller: true,
        isNew: false,
        dateAdded: '2023-02-15'
      },
      {
        id: 'scrub-cap-surgical',
        name: 'قبعة جراحية - قابلة للتعديل',
        shortDescription: 'قبعة جراحية مريحة قابلة للتعديل بتصاميم متنوعة',
        category: 'comfort',
        price: 59.99,
        image: '/images/shop/healthcare/scrub-cap.jpg',
        isBestseller: true,
        isNew: false,
        dateAdded: '2023-03-10'
      },
      {
        id: 'badge-holder-retractable',
        name: 'حامل شارة قابل للسحب',
        shortDescription: 'بكرة شارة متينة مع مشبك بجودة المستشفيات',
        category: 'identification',
        price: 39.99,
        image: '/images/shop/healthcare/badge-holder.jpg',
        isBestseller: false,
        isNew: false,
        dateAdded: '2023-01-20'
      },
      {
        id: 'compression-socks',
        name: 'جوارب طبية ضاغطة',
        shortDescription: 'جوارب ضغط متدرجة للمناوبات الطويلة - عبوة من 3 قطع',
        category: 'comfort',
        price: 89.99,
        image: '/images/shop/healthcare/compression-socks.jpg',
        isBestseller: true,
        isNew: false,
        dateAdded: '2023-04-05'
      },
      {
        id: 'face-shield-medical',
        name: 'واقي وجه طبي',
        shortDescription: 'واقي وجه شفاف مع طلاء مضاد للضباب',
        category: 'ppe',
        price: 49.99,
        image: '/images/shop/healthcare/face-shield.jpg',
        isBestseller: false,
        isNew: true,
        dateAdded: '2023-06-01'
      },
      {
        id: 'penlight-diagnostic',
        name: 'قلم إضاءة تشخيصي LED',
        shortDescription: 'قلم إضاءة LED ساطع لفحص حدقة العين',
        category: 'diagnostic',
        price: 69.99,
        image: '/images/shop/healthcare/penlight.jpg',
        isBestseller: false,
        isNew: false,
        dateAdded: '2023-02-28'
      },
      {
        id: 'pocket-organizer',
        name: 'منظم جيب تمريض',
        shortDescription: 'منظم متعدد الجيوب للزي الطبي مع أقسام سريعة الوصول',
        category: 'utility',
        price: 49.99,
        image: '/images/shop/healthcare/pocket-organizer.jpg',
        isBestseller: false,
        isNew: true,
        dateAdded: '2023-05-15'
      },
      {
        id: 'medical-scissors',
        name: 'مقص طوارئ ومقص ضمادات',
        shortDescription: 'مقص طوارئ من الفولاذ المقاوم للصدأ بطرف غير حاد',
        category: 'utility',
        price: 79.99,
        image: '/images/shop/healthcare/medical-scissors.jpg',
        isBestseller: false,
        isNew: false,
        dateAdded: '2023-03-20'
      },
      {
        id: 'pulse-oximeter',
        name: 'جهاز قياس التأكسج الإصبعي',
        shortDescription: 'جهاز محمول لقياس تشبع الأكسجين ومعدل النبض',
        category: 'diagnostic',
        price: 129.99,
        image: '/images/shop/healthcare/pulse-oximeter.jpg',
        isBestseller: false,
        isNew: true,
        dateAdded: '2023-05-28'
      },
      {
        id: 'name-badge-custom',
        name: 'شارة اسم طبية مخصصة',
        shortDescription: 'شارة اسم مخصصة مع شعار المستشفى والمؤهلات',
        category: 'identification',
        price: 29.99,
        image: '/images/shop/healthcare/name-badge.jpg',
        isBestseller: false,
        isNew: false,
        dateAdded: '2023-02-10'
      },
      {
        id: 'safety-glasses',
        name: 'نظارات أمان طبية',
        shortDescription: 'نظارات أمان مضادة للضباب ومقاومة للخدش لمتخصصي الرعاية الصحية',
        category: 'ppe',
        price: 69.99,
        image: '/images/shop/healthcare/safety-glasses.jpg',
        isBestseller: false,
        isNew: false,
        dateAdded: '2023-04-12'
      },
      {
        id: 'stethoscope-holder',
        name: 'حامل سماعة طبية سيليكون',
        shortDescription: 'حامل سماعة طبية مريح يتصل بالزي الطبي',
        category: 'utility',
        price: 24.99,
        image: '/images/shop/healthcare/stethoscope-holder.jpg',
        isBestseller: false,
        isNew: true,
        dateAdded: '2023-06-05'
      }
    ]
  };

  // Filter products based on selected category
  const filteredProducts = productsData.products.filter(product => {
    if (categoryFilter === 'all') return true;
    return product.category === categoryFilter;
  });

  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return new Date(b.dateAdded) - new Date(a.dateAdded);
      case 'featured':
      default:
        // Featured sorting - bestsellers first, then new items, then the rest
        if (a.isBestseller && !b.isBestseller) return -1;
        if (!a.isBestseller && b.isBestseller) return 1;
        if (a.isNew && !b.isNew) return -1;
        if (!a.isNew && b.isNew) return 1;
        return 0;
    }
  });

  return (
    <>
      <Head>
        <title>{productsData.title} | يونيوم</title>
        <meta 
          name="description" 
          content="تسوق مستلزمات الرعاية الصحية المهنية في المملكة العربية السعودية. أدوات طبية، معدات حماية، إكسسوارات مريحة والمزيد لمتخصصي الرعاية الصحية." 
        />
        <meta 
          property="og:title" 
          content={productsData.title} 
        />
        <meta 
          property="og:description" 
          content="تسوق مستلزمات الرعاية الصحية المهنية في المملكة العربية السعودية. معدات طبية عالية الجودة مصممة للعاملين في مجال الرعاية الصحية." 
        />
        <meta 
          property="og:image" 
          content="https://uneom.com/images/og/healthcare-accessories-ar.jpg" 
        />
        <link 
          rel="canonical" 
          href="https://uneom.com/ar/shop/healthcare-accessories" 
        />
        <link 
          rel="alternate" 
          hreflang="en" 
          href="https://uneom.com/shop/healthcare-accessories" 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <html lang="ar" dir="rtl" />
      </Head>

      <main className="rtl">
        {/* Hero Section */}
        <HeroSection 
          title={productsData.title}
          subtitle={productsData.subtitle}
          image={productsData.heroImage}
        />
        
        {/* Introduction */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg mx-auto text-gray-600">
                <p>{productsData.introduction}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Listing Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            
            {/* Filter Bar */}
            <div className="mb-8 pb-6 border-b border-gray-200">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="mb-4 md:mb-0">
                  <h2 className="text-xl font-bold mb-3 text-gray-800">الفئات</h2>
                  <div className="flex flex-wrap">
                    {productsData.categories.map(category => (
                      <FilterButton 
                        key={category.id}
                        text={category.name}
                        isActive={categoryFilter === category.id}
                        onClick={() => setCategoryFilter(category.id)}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-3 text-gray-800">ترتيب حسب</h2>
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    {productsData.sortOptions.map(option => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {sortedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            {/* No Results */}
            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">لم يتم العثور على منتجات تطابق معايير البحث.</p>
                <button 
                  onClick={() => {
                    setCategoryFilter('all');
                    setSortBy('featured');
                  }}
                  className="mt-4 bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded transition duration-300"
                >
                  مسح الفلاتر
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-primary-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">هل تحتاج إلى مستلزمات طبية مخصصة؟</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              تواصل مع متخصصي الرعاية الصحية لدينا للطلبات بكميات كبيرة، أو العناصر المخصصة، أو المتطلبات المحددة لمنشأتك الطبية في المملكة العربية السعودية.
            </p>
            <Link href="/ar/contact?department=healthcare" legacyBehavior>
              <a className="bg-secondary-500 hover:bg-secondary-600 text-primary-900 font-bold py-3 px-8 rounded-md text-lg transition duration-300 inline-block">
                طلب عرض سعر مخصص
              </a>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
} 