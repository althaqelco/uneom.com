'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SearchBar from '@/components/shop/SearchBar';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function WorkplaceUniformsClientPage() {
  const locale = 'ar';
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState({
    priceRange: [0, 3000],
    colors: [],
    sizes: [],
    inStock: true
  });
  
  // Workplace uniforms products in Arabic
  const products = [
    {
      id: 'executive-suits',
      name: 'بدلات تنفيذية مصممة',
      price: 'من ١,٢٩٩ ريال',
      image: '/images/products/corporate-suit-executive.jpg',
      rating: 4.9,
      reviews: 87,
      description: 'بدلات مصممة فاخرة للمدراء التنفيذيين الذين يتطلبون الأناقة والراحة والمظهر المهني المتميز.',
      href: '/ar/shop/workplace-uniforms/executive-suits'
    },
    {
      id: 'corporate-shirts',
      name: 'قمصان مؤسسية',
      price: 'من ١٩٩ ريال',
      image: '/images/products/corporate-shirt.jpg',
      rating: 4.7,
      reviews: 124,
      description: 'قمصان مؤسسية عالية الجودة بمجموعة متنوعة من الألوان، تتميز بقماش يمتص الرطوبة وخصائص سهلة العناية للارتداء المهني اليومي.',
      href: '/ar/shop/workplace-uniforms/corporate-shirts'
    },
    {
      id: 'business-blazers',
      name: 'سترات أعمال',
      price: 'من ٧٩٩ ريال',
      image: '/images/products/business-blazer.jpg',
      rating: 4.6,
      reviews: 58,
      description: 'سترات أنيقة ومريحة للمهنيين في مجال الأعمال، متوفرة بأنماط متنوعة مناسبة للبيئات المؤسسية السعودية.',
      href: '/ar/shop/workplace-uniforms/business-blazers'
    },
    {
      id: 'professional-abayas',
      name: 'عباءات مهنية',
      price: 'من ٦٩٩ ريال',
      image: '/images/products/professional-abaya.jpg',
      rating: 4.8,
      reviews: 92,
      description: 'عباءات مهنية مصممة خصيصًا للبيئات المؤسسية، تجمع بين الحشمة التقليدية وجماليات الأعمال المعاصرة.',
      href: '/ar/shop/workplace-uniforms/professional-abayas'
    },
    {
      id: 'formal-pants',
      name: 'بناطيل رسمية',
      price: 'من ٢٩٩ ريال',
      image: '/images/products/formal-pants.jpg',
      rating: 4.5,
      reviews: 77,
      description: 'بناطيل رسمية متينة مع قماش مرن مريح، مصممة لأيام طويلة في بيئة المكتب.',
      href: '/ar/shop/workplace-uniforms/formal-pants'
    },
    {
      id: 'corporate-skirts',
      name: 'تنانير مؤسسية',
      price: 'من ٣٩٩ ريال',
      image: '/images/products/corporate-skirts.jpg',
      rating: 4.6,
      reviews: 64,
      description: 'تنانير بطول مهني مصممة للبيئات المؤسسية، تحافظ على الحشمة مع توفير مظهر أنيق للأعمال.',
      href: '/ar/shop/workplace-uniforms/corporate-skirts'
    }
  ];

  const breadcrumbs = [
    { label: 'الرئيسية', href: '/ar' },
    { label: 'المتجر', href: '/ar/shop' },
    { label: 'ملابس العمل', href: '#' }
  ];

  const toggleView = (newView: 'grid' | 'list') => {
    setView(newView);
  };

  return (
    <>
      {/* Enhanced SEO for Google May 2025 Standards */}
      <EnhancedSEO2025 
        title="UNEOM - Professional Uniforms Saudi Arabia"
        description="Premium quality professional uniforms and workwear solutions in Saudi Arabia."
        keywords={["uniform shop","buy uniforms","professional workwear","uniform store"]}
        author="UNEOM Expert Team"
        expertise="Uniform Manufacturing & Design"
        contentType="product"
        trustSignals={[
          'ISO certified manufacturing',
          'Premium quality materials',
          'Custom design solutions',
          'Saudi Arabia market leader'
        ]}
        locale="en"
      />

      <Container className="py-8">
        <Breadcrumbs items={breadcrumbs} />
        
        <div className="mt-6">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900">ملابس العمل المهنية وأزياء الشركات | بدلات تنفيذية وزي موحد احترافي للمؤسسات السعودية | يونيوم المملكة العربية السعودية</h1>
          <p className="mt-3 text-lg text-neutral-700">
            ملابس مؤسسية احترافية للشركات السعودية، من البدلات التنفيذية إلى ملابس المكتب اليومية.
            تجمع ملابس العمل لدينا بين المظهر المهني والراحة لساعات العمل الطويلة في المملكة العربية السعودية.
          </p>
        </div>
        
        {/* Filter and Search Bar */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="w-full sm:w-auto flex gap-2">
            <button 
              className={`p-2 rounded ${view === 'grid' ? 'bg-primary-100 text-primary-700' : 'bg-white text-neutral-500'}`}
              onClick={() => toggleView('grid')}
              aria-label="عرض الشبكة"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button 
              className={`p-2 rounded ${view === 'list' ? 'bg-primary-100 text-primary-700' : 'bg-white text-neutral-500'}`}
              onClick={() => toggleView('list')}
              aria-label="عرض القائمة"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <button className="flex items-center gap-1 px-3 py-2 border border-neutral-300 rounded bg-white text-neutral-700">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              <span>تصفية</span>
            </button>
          </div>
          <div className="w-full sm:w-64">
            <SearchBar placeholder="ابحث عن ملابس العمل..." locale={locale} />
          </div>
        </div>
        
        {/* Featured Product Banner */}
        <div className="mt-8 relative rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-l from-primary-900/80 to-primary-800/40 z-10"></div>
          <Image 
            src="/images/corporate/corporate-team.jpg"
            alt="فريق مؤسسي يرتدي ملابس مهنية"
            width={1200}
            height={400}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">حلول متكاملة لملابس الشركات</h2>
            <p className="text-white/90 max-w-lg mb-4">
              برامج شاملة لملابس العمل مصممة للشركات السعودية، 
              من الإدارة التنفيذية إلى موظفي المكاتب. أنشئ صورة مؤسسية متماسكة مع ملابسنا عالية الجودة.
            </p>
            <div>
              <Link href="/ar/contact">
                <Button variant="secondary">طلب استشارة مؤسسية</Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Products Grid/List */}
        <div className="mt-12">
          <SectionHeading>مجموعة ملابس العمل</SectionHeading>
          
          {view === 'grid' ? (
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white border border-neutral-200 rounded-lg overflow-hidden">
                  <div className="relative h-64">
                    <Image 
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">
                      <Link href={product.href} className="text-neutral-900 hover:text-primary-700">
                        {product.name}
                      </Link>
                    </h3>
                    <p className="text-primary-700 font-medium mt-1">{product.price}</p>
                    <div className="flex items-center mt-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-neutral-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="text-neutral-600 mr-2 text-sm">{product.rating} ({product.reviews} تقييم)</span>
                      </div>
                    </div>
                    <p className="mt-3 text-neutral-600 text-sm line-clamp-2">{product.description}</p>
                    <div className="mt-4">
                      <Link href={product.href}>
                        <Button variant="primary" fullWidth>عرض التفاصيل</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-6 space-y-6">
              {products.map((product) => (
                <div 
                  key={product.id}
                  className="flex flex-col sm:flex-row-reverse gap-6 p-4 border border-neutral-200 rounded-lg"
                >
                  <div className="sm:w-48 h-48 relative rounded-md overflow-hidden">
                    <Image 
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">
                      <Link href={product.href} className="text-neutral-900 hover:text-primary-700">
                        {product.name}
                      </Link>
                    </h3>
                    <p className="text-primary-700 font-medium mt-1">{product.price}</p>
                    <div className="flex items-center mt-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-neutral-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="text-neutral-600 mr-2 text-sm">{product.rating} ({product.reviews} تقييم)</span>
                      </div>
                    </div>
                    <p className="mt-2 text-neutral-600">{product.description}</p>
                    <div className="mt-4">
                      <Link href={product.href}>
                        <Button variant="primary">عرض التفاصيل</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Categories Section */}
        <div className="mt-20">
          <SectionHeading centered>أقسام ملابس العمل</SectionHeading>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/images/products/corporate-suit-executive.jpg"
                  alt="بدلات تنفيذية"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">بدلات وأزياء تنفيذية</h3>
                <p className="mt-2 text-neutral-600 text-sm">ملابس احترافية تعكس الدور القيادي، مصممة للمدراء التنفيذيين والقيادات.</p>
                <div className="mt-4">
                  <Link href="/ar/shop/workplace-uniforms/executive-wear">
                    <Button variant="outline" fullWidth>استكشاف القسم</Button>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/images/corporate/corporate-team.jpg"
                  alt="ملابس المكتب اليومية"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">ملابس المكتب اليومية</h3>
                <p className="mt-2 text-neutral-600 text-sm">ملابس مهنية مريحة لبيئة المكتب، تجمع بين الأناقة والراحة للاستخدام اليومي.</p>
                <div className="mt-4">
                  <Link href="/ar/shop/workplace-uniforms/daily-office-wear">
                    <Button variant="outline" fullWidth>استكشاف القسم</Button>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/images/products/corporate-suit-executive.jpg"
                  alt="برامج ملابس الشركات"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">برامج ملابس الشركات</h3>
                <p className="mt-2 text-neutral-600 text-sm">حلول متكاملة للملابس المؤسسية، مصممة لتلبية احتياجات الشركات من جميع الأحجام.</p>
                <div className="mt-4">
                  <Link href="/ar/shop/workplace-uniforms/corporate-programs">
                    <Button variant="outline" fullWidth>استكشاف القسم</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Value Proposition */}
        <div className="mt-20 bg-neutral-50 p-8 rounded-xl">
          <SectionHeading centered>لماذا تختار ملابس العمل من يونيوم؟</SectionHeading>
          
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">راحة فائقة</h3>
              <p className="text-neutral-600 text-sm">أقمشة مختارة بعناية لتوفير الراحة خلال يوم العمل الطويل، مع الحفاظ على المظهر المهني.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">جودة ممتازة</h3>
              <p className="text-neutral-600 text-sm">معايير صناعة عالية لضمان ملابس مهنية طويلة الأمد تحافظ على مظهرها بعد غسلها المتكرر.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">تخصيص كامل</h3>
              <p className="text-neutral-600 text-sm">خيارات تخصيص للعلامة التجارية، بما في ذلك التطريز والشعارات والألوان المؤسسية الخاصة بشركتك.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">خدمات سلسة</h3>
              <p className="text-neutral-600 text-sm">من الاستشارة الأولية إلى التسليم والدعم المستمر، نقدم تجربة سلسة للشركات من جميع الأحجام.</p>
            </div>
          </div>
        </div>
      </Container>
      
      {/* Call to Action */}
      <div className="bg-primary-900 text-white py-16 mt-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">جاهز لرفع مستوى ملابس العمل في شركتك؟</h2>
            <p className="text-white/80 mb-8">
              تواصل مع فريقنا المتخصص لمناقشة احتياجات ملابس العمل في شركتك.
              نقدم استشارات مجانية لمساعدتك في إنشاء برنامج ملابس مؤسسية يعكس قيمك وثقافتك.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/ar/quote">
                <Button size="lg" variant="primary">
                  طلب عرض سعر
                </Button>
              </Link>
              <Link href="/ar/contact">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  تحدث مع متخصص
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
} 