'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  href: string;
  features?: string[];
  colors?: string[];
  isNew?: boolean;
  isBestseller?: boolean;
}

export default function IndustrialAttireClientPage() {
  const locale = 'ar';
  
  // Industrial attire products
  const products: Product[] = [
    {
      id: 'flame-resistant-coveralls',
      name: 'أفرهولات مقاومة للهب',
      description: 'أفرهولات مقاومة للهب للعاملين في بيئات صناعية عالية المخاطر، مصممة للحماية القصوى مع راحة طويلة الأمد.',
      price: 'من 599 ريال',
      image: '/images/default-placeholder.jpg',
      href: '/ar/shop/industrial-attire/flame-resistant-coveralls',
      features: ['مقاومة للهب', 'متينة', 'معتمدة حسب معايير السلامة', 'مريحة للارتداء لساعات طويلة'],
      colors: ['برتقالي سلامة', 'أزرق داكن', 'أحمر', 'رمادي سلامة'],
      isBestseller: true
    },
    {
      id: 'high-visibility-jackets',
      name: 'سترات عالية الرؤية',
      description: 'سترات سلامة عالية الرؤية متوافقة مع معايير الصناعة، مصممة للاستخدام في بيئات العمل منخفضة الإضاءة.',
      price: 'من 349 ريال',
      image: '/images/default-placeholder.jpg',
      href: '/ar/shop/industrial-attire/high-visibility-jackets',
      features: ['عاكسات 3M', 'مقاومة للماء', 'مضادة للرياح', 'جيوب متعددة للأدوات'],
      colors: ['أصفر ساطع', 'برتقالي ساطع', 'أصفر/أسود', 'برتقالي/أسود'],
      isNew: true
    },
    {
      id: 'safety-work-pants',
      name: 'بناطيل العمل الآمنة',
      description: 'بناطيل عمل متينة مصممة لتحمل ظروف العمل الصناعية القاسية، مع ميزات سلامة وجيوب عملية.',
      price: 'من 249 ريال',
      image: '/images/default-placeholder.jpg',
      href: '/ar/shop/industrial-attire/safety-work-pants',
      features: ['قماش متين', 'مقاوم للتمزق', 'جيوب متعددة', 'عناصر عاكسة'],
      colors: ['أسود', 'كاكي', 'أزرق داكن', 'رمادي']
    },
    {
      id: 'industrial-shirts',
      name: 'قمصان صناعية',
      description: 'قمصان عمل صناعية متينة مصممة للراحة مع تقنيات تبريد وعناصر سلامة مدمجة.',
      price: 'من 199 ريال',
      image: '/images/default-placeholder.jpg',
      href: '/ar/shop/industrial-attire/industrial-shirts',
      features: ['تقنية تبريد', 'سهولة الحركة', 'عناصر عاكسة', 'متوافقة مع معايير السلامة'],
      colors: ['أزرق داكن', 'رمادي', 'أخضر زيتي', 'بيج']
    },
    {
      id: 'industrial-safety-sets',
      name: 'أطقم السلامة الصناعية',
      description: 'مجموعات كاملة من ملابس السلامة الصناعية تتضمن الجاكيت والبنطلون والقميص، مصممة للحماية المتكاملة.',
      price: 'من 799 ريال',
      image: '/images/default-placeholder.jpg',
      href: '/ar/shop/industrial-attire/industrial-safety-sets',
      features: ['طقم متكامل', 'حماية شاملة', 'متين', 'مريح'],
      colors: ['أزرق/أسود', 'أخضر زيتي/أسود', 'رمادي/أسود', 'برتقالي/كحلي']
    },
    {
      id: 'welding-protection-wear',
      name: 'ملابس الحماية للحام',
      description: 'ملابس متخصصة للحماية من شرارات اللحام والحرارة والمخاطر المتعلقة بها، مصنوعة من مواد عالية المقاومة.',
      price: 'من 649 ريال',
      image: '/images/default-placeholder.jpg',
      href: '/ar/shop/industrial-attire/welding-protection-wear',
      features: ['مقاوم للشرارات', 'عازل للحرارة', 'متين للغاية', 'تصميم مريح'],
      colors: ['أسود', 'رمادي داكن', 'بني داكن']
    }
  ];
  
  // Department filters
  const departments = [
    { id: 'all', name: 'جميع الأقسام' },
    { id: 'factory-wear', name: 'ملابس المصانع' },
    { id: 'safety-wear', name: 'ملابس السلامة' },
    { id: 'oil-gas', name: 'النفط والغاز' },
    { id: 'construction', name: 'البناء والإنشاءات' },
    { id: 'maintenance', name: 'الصيانة' }
  ];
  
  return (
    <div className="bg-gray-50 min-h-screen" dir="rtl">
      <div className="bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="py-16">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">الزي الصناعي وملابس العمل الآمنة للمصانع ومواقع العمل | ملابس واقية وأفرهولات مقاومة للهب | يونيوم المملكة العربية السعودية</h1>
              <p className="mt-4 text-lg text-gray-600">
                ملابس صناعية عالية الجودة مصممة للحماية والسلامة في بيئات العمل الصناعي.
                توفر مجموعتنا الصناعية أقصى درجات المتانة والحماية مع الراحة للعاملين في المصانع ومواقع البناء والمنشآت الصناعية المختلفة.
              </p>
            </div>
            
            {/* Hero Image */}
            <div className="mt-12 relative rounded-xl overflow-hidden shadow-xl">
              <div className="aspect-w-16 aspect-h-7 w-full">
                <Image 
                  src="/images/default-placeholder.jpg"
                  alt="مجموعة الزي الصناعي"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-primary-900/80 to-transparent flex items-center">
                  <div className="p-8 md:p-12 lg:p-16 max-w-xl mr-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">سلامة القوى العاملة لديك</h2>
                    <p className="text-white/90 text-lg mb-6">
                      ارتقِ بسلامة قوتك العاملة مع أزيائنا الصناعية عالية الجودة،
                      المصممة للحماية والراحة والمتانة.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Button href="/ar/quote" variant="primary">
                        طلب عرض سعر
                      </Button>
                      <Button href="/ar/contact" variant="outline">
                        اتصل بنا
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      
      {/* Products Section */}
      <section className="py-16">
        <Container>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters - Desktop */}
            <div className="hidden md:block w-64 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h3 className="font-bold text-lg mb-4">الأقسام</h3>
                <ul className="space-y-2">
                  {departments.map((dept) => (
                    <li key={dept.id}>
                      <button className="text-gray-700 hover:text-primary-600 transition w-full text-right py-1">
                        {dept.name}
                      </button>
                    </li>
                  ))}
                </ul>
                
                <div className="border-t border-gray-200 my-6 pt-6">
                  <h3 className="font-bold text-lg mb-4">بحاجة للمساعدة؟</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    متخصصو الزي الصناعي لدينا جاهزون لمساعدتك في طلبات الجملة وخيارات التخصيص.
                  </p>
                  <Button href="/ar/contact" fullWidth variant="outline">
                    اتصل بنا
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">مجموعة الزي الصناعي</h2>
                
                {/* Mobile Filters Button */}
                <button className="md:hidden bg-white rounded-lg shadow-sm px-4 py-2 text-sm font-medium text-gray-700">
                  الفلاتر
                </button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <Link 
                    href={product.href} 
                    key={product.id}
                    className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition"
                  >
                    <div className="relative h-64">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.isNew && (
                        <span className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                          جديد
                        </span>
                      )}
                      {product.isBestseller && (
                        <span className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
                          الأكثر مبيعًا
                        </span>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-900">{product.price}</span>
                        <span className="text-primary-600 group-hover:-translate-x-1 transition-transform duration-300 inline-flex items-center">
                          عرض التفاصيل
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 rotate-180" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary-900 text-white py-16">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">بحاجة إلى زي صناعي مخصص؟</h2>
            <p className="text-lg text-white/80 mb-8">
              نقدم خدمات التصميم المخصص وخيارات طلبات الجملة للمصانع والشركات الصناعية.
              اتصل بفريقنا لمناقشة متطلباتك الخاصة وخيارات ملابس السلامة.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/ar/quote" variant="primary">
                طلب عرض سعر
              </Button>
              <Button href="/ar/contact" variant="secondary">
                تحدث مع متخصص
              </Button>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Features */}
      <section className="py-16">
        <Container>
          <SectionHeading centered>لماذا تختار الزي الصناعي من يونيوم؟</SectionHeading>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">سلامة قصوى</h3>
              <p className="text-gray-600 text-sm">
                ملابس مصممة وفقًا لأعلى معايير السلامة الصناعية، موفرة الحماية اللازمة ضد المخاطر المختلفة في بيئات العمل.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">تخصيص كامل</h3>
              <p className="text-gray-600 text-sm">
                خيارات تخصيص للعلامة التجارية لشركتك، بما في ذلك الشعارات والألوان المؤسسية والمميزات المخصصة.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">متانة استثنائية</h3>
              <p className="text-gray-600 text-sm">
                ملابس مصنوعة من أقوى المواد المصممة لتتحمل الاستخدام المكثف في بيئات العمل القاسية، مع عمر افتراضي طويل.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">راحة وظيفية</h3>
              <p className="text-gray-600 text-sm">
                تصميمات مدروسة توازن بين السلامة والراحة، مع ميزات تحسن الأداء والحركة أثناء العمل في البيئات الصناعية.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
} 