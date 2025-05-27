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

export default function CulinaryUniformsClientPage() {
  const locale = 'ar';
  
  // منتجات الأزياء المطبخية
  const products: Product[] = [
    {
      id: 'premium-chef-coat',
      name: 'سترة الشيف الفاخرة',
      description: 'سترة شيف احترافية مصنوعة من قماش فاخر، مصممة للراحة والأناقة في بيئة المطبخ.',
      price: 'من 189 ريال',
      image: '/images/products/industrial-coverall.jpg',
      href: '/ar/images/products/industrial-coverall.jpg',
      href: '/ar/images/products/industrial-coverall.jpg',
      href: '/ar/images/products/industrial-coverall.jpg',
      href: '/ar/images/products/industrial-coverall.jpg',
      href: '/ar/images/products/industrial-coverall.jpg',
      href: '/ar/shop/culinary-uniforms/culinary-student-uniform',
      features: ['فعال من حيث التكلفة', 'متين', 'سهل العناية', 'طقم كامل'],
      colors: ['أبيض']
    }
  ];
  
  // تصنيفات الأقسام
  const departments = [
    { id: 'all', name: 'جميع الأقسام' },
    { id: 'executive-chef', name: 'الشيف التنفيذي' },
    { id: 'sous-chef', name: 'الشيف المساعد' },
    { id: 'line-cook', name: 'طباخ القسم' },
    { id: 'pastry-chef', name: 'شيف الحلويات' }
  ];
  
  // فلاتر الميزات
  const featureFilters = [
    { id: 'stain-resistant', name: 'مقاوم للبقع' },
    { id: 'breathable', name: 'قماش قابل للتنفس' },
    { id: 'premium-fabric', name: 'قماش فاخر' },
    { id: 'heat-resistant', name: 'مقاوم للحرارة' },
    { id: 'easy-care', name: 'سهل العناية' }
  ];
  
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

      {/* فتات الخبز */}
      <div className="bg-gray-100 py-4">
        <Container>
          <nav className="flex justify-end" aria-label="فتات الخبز">
            <ol className="inline-flex items-center space-x-1 md:space-x-3 space-x-reverse">
              <li className="inline-flex items-center">
                <Link href="/ar" className="text-sm text-gray-700 hover:text-primary-600">الرئيسية</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1 transform rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <Link href="/ar/shop" className="text-sm text-gray-700 hover:text-primary-600 mr-1 md:mr-2">المتجر</Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1 transform rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="text-sm text-gray-500 mr-1 md:mr-2">أزياء الطهي</span>
                </div>
              </li>
            </ol>
          </nav>
        </Container>
      </div>
      
      {/* صورة الفئة الرئيسية */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/products/industrial-coverall.jpg"
            alt="أزياء الطهي"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-2xl text-white mr-auto text-right">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">أزياء الطهي الاحترافية للمطاعم والفنادق في المملكة العربية السعودية | سترات الشيف وملابس المطبخ | يونيوم</h1>
            <p className="text-xl mb-8">
              ملابس مطبخ احترافية مصممة للراحة والوظائف العملية والأناقة. توفر يونيوم سترات الشيف عالية الجودة وأزياء المطبخ والملابس الطهوية للمطاعم وشركات الضيافة في المملكة العربية السعودية.
            </p>
            <div className="flex flex-wrap gap-4 justify-end">
              <Button variant="primary" href="#products">
                عرض المجموعة
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900" href="/ar/contact?subject=Culinary%20Uniforms">
                طلب تصميم مخصص
              </Button>
            </div>
          </div>
        </Container>
      </section>
      
      {/* قسم المتجر */}
      <section className="py-16" id="products">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* شريط الفلاتر الجانبي */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="bg-white border rounded-lg p-6 sticky top-24">
                <h2 className="text-lg font-bold mb-4 text-right">الفلاتر</h2>
                
                {/* فلتر القسم */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2 text-right">القسم</h3>
                  <div className="space-y-2">
                    {departments.map((department) => (
                      <div key={department.id} className="flex items-center justify-end">
                        <label htmlFor={`department-${department.id}`} className="mr-2 text-sm text-gray-700">
                          {department.name}
                        </label>
                        <input
                          type="checkbox"
                          id={`department-${department.id}`}
                          className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* فلتر الميزات */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2 text-right">الميزات</h3>
                  <div className="space-y-2">
                    {featureFilters.map((feature) => (
                      <div key={feature.id} className="flex items-center justify-end">
                        <label htmlFor={`feature-${feature.id}`} className="mr-2 text-sm text-gray-700">
                          {feature.name}
                        </label>
                        <input
                          type="checkbox"
                          id={`feature-${feature.id}`}
                          className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* نطاق السعر */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2 text-right">نطاق السعر</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label htmlFor="max-price" className="sr-only">الحد الأقصى للسعر</label>
                      <input
                        type="number"
                        id="max-price"
                        placeholder="الحد الأقصى"
                        className="w-full border border-gray-300 rounded py-1.5 px-3 text-sm text-right"
                      />
                    </div>
                    <div>
                      <label htmlFor="min-price" className="sr-only">الحد الأدنى للسعر</label>
                      <input
                        type="number"
                        id="min-price"
                        placeholder="الحد الأدنى"
                        className="w-full border border-gray-300 rounded py-1.5 px-3 text-sm text-right"
                      />
                    </div>
                  </div>
                </div>
                
                <button className="w-full bg-primary-600 text-white rounded py-2 text-sm font-medium hover:bg-primary-700 transition">
                  تطبيق الفلاتر
                </button>
              </div>
            </div>
            
            {/* عرض المنتجات */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
                <div className="flex justify-end w-full">
                  <h2 className="text-2xl font-bold">منتجات أزياء الطهي</h2>
                </div>
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <select className="border border-gray-300 rounded py-1.5 px-3 text-sm bg-white text-right">
                    <option>الأحدث</option>
                    <option>الأكثر شعبية</option>
                    <option>السعر: من الأعلى للأقل</option>
                    <option>السعر: من الأقل للأعلى</option>
                  </select>
                  <label className="text-sm text-gray-700">ترتيب حسب:</label>
                </div>
              </div>
              
              {/* شبكة المنتجات */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">
                    <div className="relative">
                      <Link href={product.href} className="block aspect-square relative overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                        />
                      </Link>
                      <div className="absolute top-2 left-2 flex flex-col gap-1 items-start">
                        {product.isNew && (
                          <span className="bg-teal-600 text-white px-2 py-1 text-xs font-medium rounded">جديد</span>
                        )}
                        {product.isBestseller && (
                          <span className="bg-amber-500 text-white px-2 py-1 text-xs font-medium rounded">الأكثر مبيعًا</span>
                        )}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-1 text-right">
                        <Link href={product.href} className="text-gray-900 hover:text-primary-600 transition">
                          {product.name}
                        </Link>
                      </h3>
                      <p className="text-primary-600 font-medium text-lg text-right">{product.price}</p>
                      <p className="mt-2 text-gray-600 text-sm line-clamp-2 text-right">
                        {product.description}
                      </p>
                      
                      {/* الميزات */}
                      {product.features && (
                        <div className="mt-3">
                          <div className="flex flex-wrap gap-2 justify-end">
                            {product.features.slice(0, 3).map((feature, index) => (
                              <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* الألوان */}
                      {product.colors && (
                        <div className="mt-3 flex items-center justify-end gap-2">
                          <div className="flex flex-wrap gap-1">
                            {product.colors.map((color, index) => (
                              <span key={index} className="text-gray-600 text-xs">
                                {color}{index < product.colors!.length - 1 ? '، ' : ''}
                              </span>
                            ))}
                          </div>
                          <span className="text-xs text-gray-500">الألوان:</span>
                        </div>
                      )}
                      
                      <div className="mt-4">
                        <Link href={product.href} className="block">
                          <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 rounded text-sm font-medium transition">
                            عرض التفاصيل
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* الميزات والفوائد */}
      <section className="bg-gray-100 py-16">
        <Container>
          <SectionHeading centered>لماذا تختار أزياء الطهي من يونيوم؟</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 text-right">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-center">جودة استثنائية</h3>
              <p className="text-gray-600 text-center">مصنوعة من أفضل الأقمشة المتينة والمقاومة للبقع والمصممة لتحمل بيئات المطبخ المكثفة.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-center">تخصيص متقدم</h3>
              <p className="text-gray-600 text-center">خيارات تخصيص شاملة تشمل التطريز والشعارات المخصصة وخيارات الألوان المؤسسية.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-center">راحة متفوقة</h3>
              <p className="text-gray-600 text-center">مصممة لضمان الراحة المثلى طوال يوم العمل الطويل في بيئات المطابخ الحارة والمزدحمة.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-center">حلول مؤسسية</h3>
              <p className="text-gray-600 text-center">حلول شاملة للمطاعم والفنادق وشركات تقديم الطعام، مع برامج الزي الموحد الكاملة.</p>
            </div>
          </div>
        </Container>
      </section>
      
      {/* خدمات التخصيص */}
      <section className="bg-gray-50 py-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-right order-2 md:order-1">
              <SectionHeading>خدمات تخصيص أزياء الطهي</SectionHeading>
              <p className="text-lg text-gray-600 mb-6">
                يمكننا تخصيص أزياء الطهي الخاصة بك لتناسب متطلبات مطعمك أو فندقك. تشمل خدماتنا:
              </p>
              <ul className="space-y-4">
                <li className="flex justify-end">
                  <span className="text-gray-700">تطريز شعار العلامة التجارية على جميع الأزياء</span>
                  <svg className="w-5 h-5 text-primary-600 ml-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </li>
                <li className="flex justify-end">
                  <span className="text-gray-700">تخصيص الألوان لتناسب ديكور المطعم</span>
                  <svg className="w-5 h-5 text-primary-600 ml-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </li>
                <li className="flex justify-end">
                  <span className="text-gray-700">تصميم أزياء فريدة لتمييز طاقم المطبخ الخاص بك</span>
                  <svg className="w-5 h-5 text-primary-600 ml-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </li>
                <li className="flex justify-end">
                  <span className="text-gray-700">مقاسات مخصصة لضمان الراحة المثالية لجميع أفراد الطاقم</span>
                  <svg className="w-5 h-5 text-primary-600 ml-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </li>
              </ul>
              <div className="mt-8 text-right">
                <Button href="/ar/contact?subject=Culinary%20Uniforms%20Customization" variant="primary">
                  طلب خدمة التخصيص
                </Button>
              </div>
            </div>
            <div className="relative h-80 md:h-full order-1 md:order-2">
              <Image
                src="/images/products/industrial-coverall.jpg"
                alt="خدمات تخصيص أزياء الطهي"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
} 