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

export default function ExecutiveApparelClientPage() {
  const locale = 'ar';
  
  // Executive apparel products
  const products: Product[] = [
    {
      id: 'business-suits',
      name: 'بدلات رسمية',
      description: 'بدلات رجالية أنيقة مصممة من أفخم الأقمشة، بقصات عصرية تناسب المدراء التنفيذيين والمناسبات الرسمية.',
      price: 'من 1,599 ريال',
      image: '/images/default-placeholder.jpg',
      href: '/ar/shop/executive-apparel/business-suits',
      features: ['قماش فاخر', 'خياطة دقيقة', 'قصات عصرية', 'متوفر بقياسات مخصصة'],
      colors: ['كحلي', 'رمادي', 'أسود', 'أزرق'],
      isBestseller: true
    },
    {
      id: 'formal-shirts',
      name: 'قمصان رسمية',
      description: 'قمصان تنفيذية أنيقة من القطن المصري الفاخر، مناسبة لبيئة العمل الاحترافية والمناسبات الرسمية.',
      price: 'من 349 ريال',
      image: '/images/default-placeholder.jpg',
      href: '/ar/shop/executive-apparel/formal-shirts',
      features: ['قطن مصري', 'أزرار أصلية', 'قصة مريحة', 'سهلة العناية'],
      colors: ['أبيض', 'أزرق فاتح', 'رمادي فاتح', 'وردي فاتح'],
      isNew: true
    },
    {
      id: 'women-business-attire',
      name: 'أزياء رسمية نسائية',
      description: 'مجموعة متكاملة من الأزياء الرسمية النسائية للمديرات التنفيذيات، تجمع بين الأناقة والراحة في بيئة العمل.',
      price: 'من 1,299 ريال',
      image: '/images/default-placeholder.jpg',
      href: '/ar/shop/executive-apparel/women-business-attire',
      features: ['تصاميم أنيقة', 'أقمشة فاخرة', 'خيارات متنوعة', 'قصات مريحة'],
      colors: ['أسود', 'كحلي', 'رمادي', 'بيج']
    },
    {
      id: 'executive-accessories',
      name: 'إكسسوارات تنفيذية',
      description: 'إكسسوارات راقية تكمل المظهر الرسمي للمدراء التنفيذيين، بما في ذلك ربطات العنق وأزرار الأكمام والمحافظ الجلدية.',
      price: 'من 199 ريال',
      image: '/images/default-placeholder.jpg',
      href: '/ar/shop/executive-apparel/executive-accessories',
      features: ['تصنيع فاخر', 'مواد عالية الجودة', 'تصاميم أنيقة', 'هدايا مثالية'],
      colors: ['متعدد']
    },
    {
      id: 'formal-footwear',
      name: 'أحذية رسمية',
      description: 'أحذية جلدية فاخرة مصممة خصيصاً للمدراء التنفيذيين، تجمع بين الأناقة والراحة للاستخدام اليومي.',
      price: 'من 799 ريال',
      image: '/images/default-placeholder.jpg',
      href: '/ar/shop/executive-apparel/formal-footwear',
      features: ['جلد طبيعي', 'صناعة يدوية', 'نعل مريح', 'تصاميم كلاسيكية'],
      colors: ['أسود', 'بني داكن', 'بني فاتح']
    },
    {
      id: 'business-casual',
      name: 'أزياء العمل غير الرسمية',
      description: 'مجموعة من الأزياء شبه الرسمية المناسبة لأيام العمل غير الرسمية أو المناسبات الترفيهية للشركات.',
      price: 'من 699 ريال',
      image: '/images/default-placeholder.jpg',
      href: '/ar/shop/executive-apparel/business-casual',
      features: ['أنيقة وعملية', 'خامات عالية الجودة', 'مريحة', 'مناسبة للعمل والمناسبات الاجتماعية'],
      colors: ['متنوعة']
    }
  ];
  
  // Categories
  const categories = [
    { id: 'all', name: 'جميع الفئات' },
    { id: 'mens', name: 'أزياء رجالية' },
    { id: 'womens', name: 'أزياء نسائية' },
    { id: 'accessories', name: 'إكسسوارات' },
    { id: 'footwear', name: 'أحذية' },
    { id: 'custom', name: 'تفصيل خاص' }
  ];
  
  return (
    <div className="bg-gray-50 min-h-screen" dir="rtl">
      <div className="bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="py-16">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">الأزياء التنفيذية الفاخرة | ملابس رسمية للمدراء والتنفيذيين | يونيوم المملكة العربية السعودية</h1>
              <p className="mt-4 text-lg text-gray-600">
                أزياء تنفيذية فاخرة مصممة للمدراء والمسؤولين التنفيذيين في بيئات العمل الاحترافية.
                تجمع مجموعتنا التنفيذية بين الأناقة والرقي مع أعلى معايير الجودة في التصنيع والخامات.
              </p>
            </div>
            
            {/* Hero Image */}
            <div className="mt-12 relative rounded-xl overflow-hidden shadow-xl">
              <div className="aspect-w-16 aspect-h-7 w-full">
                <Image 
                  src="/images/default-placeholder.jpg"
                  alt="مجموعة الأزياء التنفيذية"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-gray-900/80 to-transparent flex items-center">
                  <div className="p-8 md:p-12 lg:p-16 max-w-xl mr-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">ارتقِ بمظهرك المهني</h2>
                    <p className="text-white/90 text-lg mb-6">
                      أزياء فاخرة تعكس مكانتك المهنية وتمنحك الثقة في الاجتماعات والمناسبات الرسمية.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Button href="/ar/quote" variant="primary">
                        طلب عرض سعر
                      </Button>
                      <Button href="/ar/contact" variant="outline">
                        استشارة مجانية
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
                <h3 className="font-bold text-lg mb-4">الفئات</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button className="text-gray-700 hover:text-primary-600 transition w-full text-right py-1">
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
                
                <div className="border-t border-gray-200 my-6 pt-6">
                  <h3 className="font-bold text-lg mb-4">خدمة التفصيل الخاص</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    نقدم خدمة التفصيل الخاص للمدراء التنفيذيين مع أخذ القياسات في موقعك.
                  </p>
                  <Button href="/ar/contact" fullWidth variant="outline">
                    استفسر الآن
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">مجموعة الأزياء التنفيذية</h2>
                
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
      
      {/* Custom Tailoring Section */}
      <section className="bg-gray-100 py-16">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden">
                <div className="aspect-w-4 aspect-h-3">
                  <Image 
                    src="/images/default-placeholder.jpg"
                    alt="خدمة التفصيل الخاص"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <SectionHeading>خدمة التفصيل الخاص للمدراء التنفيذيين</SectionHeading>
              <p className="mt-4 text-gray-600">
                تفتخر يونيوم بتقديم خدمة التفصيل الخاص للمدراء التنفيذيين والمسؤولين في الشركات السعودية.
                نوفر تجربة فريدة تشمل:
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>زيارة خاصة لأخذ القياسات في مكتبك أو المكان الذي تفضله</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>اختيار من بين مئات الأقمشة الفاخرة المستوردة من أفضل المصادر العالمية</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>تصميم خاص يراعي تفضيلاتك الشخصية وطبيعة عملك</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>صناعة يدوية فاخرة بواسطة خياطين محترفين بخبرة تتجاوز 20 عامًا</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>خدمة ما بعد البيع وتعديلات مجانية لضمان الرضا التام</p>
                </li>
              </ul>
              <div className="mt-8">
                <Button href="/ar/contact" variant="primary">
                  احجز استشارتك المجانية
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Features */}
      <section className="py-16">
        <Container>
          <SectionHeading centered>لماذا تختار الأزياء التنفيذية من يونيوم؟</SectionHeading>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">أقمشة فاخرة</h3>
              <p className="text-gray-600 text-sm">
                نستخدم أفضل الأقمشة من إيطاليا وبريطانيا، المعروفة بمتانتها ونعومتها وجودتها الاستثنائية.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">خياطة احترافية</h3>
              <p className="text-gray-600 text-sm">
                فريق من الخياطين ذوي الخبرة يتقنون الحرفية التقليدية مع استخدام تقنيات الخياطة الحديثة.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">تصاميم عصرية</h3>
              <p className="text-gray-600 text-sm">
                تصاميم تجمع بين الأسلوب الكلاسيكي والتفاصيل العصرية، مناسبة لبيئة الأعمال السعودية والعالمية.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">توصيل سريع</h3>
              <p className="text-gray-600 text-sm">
                نقدم خدمة توصيل سريعة للمنتجات الجاهزة، وجدولة زمنية دقيقة للمنتجات المصممة خصيصًا لك.
              </p>
            </div>
          </div>
        </Container>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary-900 text-white py-16">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">أزياء تنفيذية مخصصة لشركتك</h2>
            <p className="text-lg text-white/80 mb-8">
              نقدم خدمات تصميم وتنفيذ الأزياء التنفيذية المخصصة للشركات السعودية،
              مع إمكانية إضافة شعارات الشركة والألوان المؤسسية لتعزيز هويتك التجارية.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/ar/quote" variant="primary">
                طلب عرض سعر للشركات
              </Button>
              <Button href="/ar/contact" variant="secondary">
                تحدث مع مستشار أزياء
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}