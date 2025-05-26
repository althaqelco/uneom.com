'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025'; // Assuming this component handles locale

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

export default function SecurityUniformsPageAR() {
  const locale = 'ar'; // Set locale to Arabic
  
  const products: Product[] = [
    {
      id: 'executive-security-suit',
      name: 'بدلة أمن تنفيذية',
      description: 'زي أمن تنفيذي احترافي مصمم للأماكن الفاخرة وخدمات حماية كبار الشخصيات بتصميم أنيق وميزات عملية.',
      price: 'من 399 ريال سعودي',
      image: '/images/security/uniform-durability-test.jpg', // Updated image
      href: '/ar/shop/security-uniforms/executive-protection',
      features: ['قماش فاخر', 'تصميم احترافي', 'خياطة معززة', 'حامل شارة'],
      colors: ['أسود', 'كحلي', 'رمادي', 'أبيض'],
      isBestseller: true
    },
    {
      id: 'tactical-security-uniform',
      name: 'زي أمن تكتيكي',
      description: 'زي أمن تكتيكي بهيكل معزز وجيوب وظيفية متعددة، مصمم لأفراد الأمن النشطين في البيئات الصعبة.',
      price: 'من 349 ريال سعودي',
      image: '/images/security/stab-resistant-fabric.jpg', // Updated image
      href: '/ar/shop/security-uniforms/tactical-security-uniforms',
      features: ['قماش ريبستوب متين', 'جيوب متعددة', 'ركب/أكواع معززة', 'حلقات حزام'],
      colors: ['أسود', 'كحلي', 'كاكي', 'زيتي'],
      isNew: true
    },
    {
      id: 'hotel-security-uniform',
      name: 'زي أمن الفنادق',
      description: 'زي أمن أنيق مصمم لقطاع الفنادق والضيافة، يوازن بين المظهر الاحترافي وميزات الأمن الوظيفية.',
      price: 'من 299 ريال سعودي',
      image: '/images/security/smart-fabric-technology.jpg', // Updated image
      href: '/ar/shop/security-uniforms/hotel-security-uniform',
      features: ['مظهر رسمي', 'مقاس مريح', 'خيار علامة الفندق التجارية', 'تصميم احترافي'],
      colors: ['أسود', 'كحلي', 'عنابي', 'أبيض']
    },
    {
      id: 'security-guard-uniform',
      name: 'زي حارس أمن قياسي',
      description: 'زي حارس أمن قياسي مصمم لخدمات الأمن التجارية بميزات عملية ومظهر احترافي.',
      price: 'من 249 ريال سعودي',
      image: '/images/security/uniform-durability-test.jpg', // Updated image (re-used)
      href: '/ar/shop/security-uniforms/security-officer-uniform',
      features: ['قماش متين', 'حامل شارة', 'جيوب متعددة', 'بطاقة اسم'],
      colors: ['أسود', 'كحلي', 'كاكي']
    },
    {
      id: 'event-security-uniform',
      name: 'زي أمن الفعاليات',
      description: 'زي أمن فعاليات عالي الوضوح مصمم لإدارة الحشود وخدمات أمن الفعاليات بميزات الراحة والتمييز.',
      price: 'من 219 ريال سعودي',
      image: '/images/security/saudi-events-security.jpg', // Updated image
      href: '/ar/shop/security-uniforms/event-security-uniform',
      features: ['خيار عالي الوضوح', 'قماش يسمح بالتهوية', 'علامة الشركة التجارية', 'مقاوم للطقس'],
      colors: ['أسود', 'أصفر عالي الوضوح', 'برتقالي عالي الوضوح']
    },
    {
      id: 'security-winter-jacket',
      name: 'جاكيت أمن شتوي',
      description: 'جاكيت أمن معزول مصمم لظروف الطقس البارد بميزات أمنية وتصميم احترافي للمراقبة الخارجية.',
      price: 'من 329 ريال سعودي',
      image: '/images/security/advanced-fabrics-hero.jpg', // Updated image
      href: '/ar/shop/security-uniforms/security-winter-jacket',
      features: ['عزل حراري', 'مقاوم للماء', 'عناصر عاكسة', 'حامل شارة'],
      colors: ['أسود', 'كحلي', 'رمادي']
    }
  ];
  
  const departments = [
    { id: 'all', name: 'جميع الأقسام' },
    { id: 'corporate', name: 'أمن الشركات' },
    { id: 'hotel', name: 'الفنادق والضيافة' },
    { id: 'event', name: 'أمن الفعاليات' },
    { id: 'tactical', name: 'الأمن التكتيكي' }
  ];
  
  const featureFilters = [
    { id: 'professional-look', name: 'مظهر احترافي' },
    { id: 'high-visibility', name: 'رؤية عالية' },
    { id: 'tactical-features', name: 'ميزات تكتيكية' },
    { id: 'badge-holder', name: 'حامل شارة' },
    { id: 'weather-resistant', name: 'مقاوم للطقس' }
  ];
  
  return (
    <div className="bg-white" dir="rtl">
    
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <Container>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3 space-x-reverse">
              <li className="inline-flex items-center">
                <Link href="/ar/" className="text-sm text-gray-700 hover:text-primary-600">الرئيسية</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1 transform scale-x-[-1]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <Link href="/ar/shop" className="text-sm text-gray-700 hover:text-primary-600 mr-1 md:mr-2">المتجر</Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1 transform scale-x-[-1]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="text-sm text-gray-500 mr-1 md:mr-2">أزياء الأمن</span>
                </div>
              </li>
            </ol>
          </nav>
        </Container>
      </div>
      
      {/* Category Hero */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/security/advanced-fabrics-hero.jpg" // Updated hero image
            alt="أزياء الأمن"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">أزياء الأمن</h1>
            <p className="text-xl mb-8">
              ملابس أمن احترافية مصممة للسلطة والتمييز والوظائف. توفر أزياء الأمن من يونيوم التوازن المثالي بين المظهر الاحترافي والميزات العملية لأفراد الأمن.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" href="#products">
                عرض المجموعة
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900" href="/ar/contact?subject=Security%20Uniforms">
                طلب تصميم مخصص
              </Button>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Shop Section */}
      <section className="py-16" id="products">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white border rounded-lg p-6 sticky top-24">
                <h2 className="text-lg font-bold mb-4">الفلاتر</h2>
                
                <div className="mb-6">
                  <h3 className="font-medium mb-2">القسم</h3>
                  <div className="space-y-2">
                    {departments.map((department) => (
                      <div key={department.id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`department-ar-${department.id}`}
                          className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        />
                        <label htmlFor={`department-ar-${department.id}`} className="mr-2 text-sm text-gray-700">
                          {department.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium mb-2">الميزات</h3>
                  <div className="space-y-2">
                    {featureFilters.map((feature) => (
                      <div key={feature.id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`feature-ar-${feature.id}`}
                          className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        />
                        <label htmlFor={`feature-ar-${feature.id}`} className="mr-2 text-sm text-gray-700">
                          {feature.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium mb-2">نطاق السعر</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label htmlFor="min-price-ar" className="sr-only">السعر الأدنى</label>
                      <input
                        type="number"
                        id="min-price-ar"
                        placeholder="الأدنى"
                        className="w-full border border-gray-300 rounded py-1.5 px-3 text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="max-price-ar" className="sr-only">السعر الأعلى</label>
                      <input
                        type="number"
                        id="max-price-ar"
                        placeholder="الأعلى"
                        className="w-full border border-gray-300 rounded py-1.5 px-3 text-sm"
                      />
                    </div>
                  </div>
                </div>
                
                <button className="w-full bg-primary-600 text-white rounded py-2 text-sm font-medium hover:bg-primary-700 transition">
                  تطبيق الفلاتر
                </button>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="lg:col-span-3">
              <div className="flex flex-wrap items-center justify-between mb-6">
                <h2 className="text-xl font-bold">أزياء الأمن ({products.length})</h2>
                
                <div className="flex items-center space-x-4 space-x-reverse">
                  <label htmlFor="sort-ar" className="text-sm text-gray-700">الترتيب حسب:</label>
                  <select
                    id="sort-ar"
                    className="border-gray-300 rounded-md text-sm focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option>الأكثر شيوعًا</option>
                    <option>السعر: من الأقل إلى الأعلى</option>
                    <option>السعر: من الأعلى إلى الأقل</option>
                    <option>الأحدث</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <Link key={product.id} href={product.href} className="group">
                    <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
                      <div className="relative h-64 overflow-hidden bg-gray-200">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {product.isNew && (
                          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                            جديد
                          </div>
                        )}
                        {product.isBestseller && (
                          <div className="absolute top-2 right-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
                            الأكثر مبيعًا
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1 mb-2 line-clamp-2">{product.description}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="font-medium text-gray-900">{product.price}</span>
                          <span className="text-primary-600 text-sm font-medium group-hover:underline">عرض التفاصيل</span>
                        </div>
                        {product.features && (
                          <div className="mt-3 flex flex-wrap gap-1">
                            {product.features.slice(0, 2).map((feature, index) => (
                              <span key={index} className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                                {feature}
                              </span>
                            ))}
                            {product.features.length > 2 && (
                              <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                                +{product.features.length - 2} إضافية
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionHeading centered>لماذا تختار أزياء الأمن من يونيوم</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                {/* Placeholder for Professional Authority Icon */}
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6-4l-6 6-6-6"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">سلطة احترافية</h3>
              <p className="text-gray-600">
                تم تصميم أزياء الأمن لدينا لنقل السلطة والاحترافية، مما يضمن أن يترك أفراد الأمن لديك الانطباع الصحيح.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                 {/* Placeholder for Functional Features Icon */}
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">ميزات وظيفية</h3>
              <p className="text-gray-600">
                من حاملي الشارات إلى الجيوب التكتيكية، تتضمن أزياء الأمن لدينا ميزات وظيفية مصممة خصيصًا لمحترفي الأمن.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                {/* Placeholder for Brand Integration Icon */}
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">تكامل العلامة التجارية</h3>
              <p className="text-gray-600">
                ندمج علامة شركتك التجارية في أزياء الأمن لدينا، مما يساعد على تأسيس هوية علامة تجارية متماسكة عبر فريق الأمن لديك.
              </p>
            </div>
          </div>
        </Container>
      </section>
      
      <section className="py-16">
        <Container>
          <SectionHeading centered>عناصر تصميم الأمن</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <div className="flex gap-6">
              <div className="relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                <Image
                  src="/images/icons/compliance-shield.svg"
                  alt="تكامل الشارات والهويات"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">تكامل الشارات والهويات</h3>
                <p className="text-gray-600">
                  تتميز أزياء الأمن لدينا بحاملي شارات احترافيين، وفتحات لبطاقات الهوية، وكتافيات تسمح لأفراد الأمن بعرض أوراق اعتمادهم بشكل مناسب، مما يعزز التمييز والسلطة.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                <Image
                  src="/images/security/saudi-events-security.jpg" // Updated image
                  alt="عناصر التمييز"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">عناصر التمييز</h3>
                <p className="text-gray-600">
                  تتضمن أزياء الأمن عناصر عالية الوضوح وميزات تصميم مميزة لضمان سهولة التعرف على الأفراد من قبل الجمهور، مما يؤسس وجودًا أمنيًا واضحًا.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                <Image
                  src="/images/icons/customization-icon.svg" 
                  alt="الوظائف التكتيكية"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">الوظائف التكتيكية</h3>
                <p className="text-gray-600">
                  تتضمن أزياء الأمن التكتيكية لدينا هيكلًا معززًا، ووضع جيوب استراتيجي، ونقاط ربط للمعدات، وحرية الحركة - كلها ضرورية لعمل الأمن النشط.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                <Image
                  src="/images/icons/premium-quality.svg"
                  alt="جماليات احترافية"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">جماليات احترافية</h3>
                <p className="text-gray-600">
                  تم تصميم الخطوط النظيفة، والمقاس الدقيق، والتفاصيل المعمارية لأزياء الأمن لدينا لنقل الاحترافية مع الحفاظ على الراحة أثناء المناوبات الطويلة.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionHeading centered>فئات ذات صلة</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <Link href="/ar/shop/corporate-workwear" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/products/corporate-suit-executive.jpg"
                    alt="ملابس عمل شركات"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold group-hover:text-primary-600 transition-colors duration-200">
                    ملابس عمل شركات
                  </h3>
                </div>
              </div>
            </Link>
            <Link href="/ar/shop/hospitality-attire" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/hospitality/hospitality_uniform_formal.jpg"
                    alt="أزياء الضيافة"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold group-hover:text-primary-600 transition-colors duration-200">
                    أزياء الضيافة
                  </h3>
                </div>
              </div>
            </Link>
            <Link href="/ar/shop/industrial-uniforms" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/products/industrial-coverall.jpg"
                    alt="أزياء صناعية"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold group-hover:text-primary-600 transition-colors duration-200">
                    أزياء صناعية
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </Container>
      </section>
      
      <section className="py-16 bg-primary-600 text-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">هل أنت مستعد لتعزيز أمنك؟</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              تواصل مع متخصصي أزياء الأمن لدينا اليوم لمناقشة احتياجاتك الخاصة والحصول على عرض أسعار مخصص.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" href="/ar/contact?subject=Security%20Uniforms%20Inquiry">
                اتصل بنا الآن
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary-600" href="/ar/quote?category=security-uniforms">
                طلب عرض أسعار
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}