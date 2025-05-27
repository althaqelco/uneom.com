'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function HealthcareAccessoriesClientPage() {
  const locale = 'ar';

  // Products data
  const products = [
    {
      id: 'medical-stethoscope',
      name: 'سماعات طبية احترافية',
      description: 'سماعات طبية عالية الجودة مصممة للاستخدام في المجال الطبي والممارسة السريرية',
      price: 'من ريال 150',
      image: '/images/products/medical-stethoscope.jpg',
      href: '/ar/images/products/medical-watch.jpg',
      href: '/ar/images/products/medical-bag.jpg',
      href: '/ar/images/products/medical-clogs.jpg',
      href: '/ar/images/products/id-badge-holders.jpg',
      href: '/ar/images/products/medical-penlight.jpg',
      href: '/ar/shop/healthcare-accessories/medical-penlight',
      features: [
        'إضاءة LED عالية الجودة',
        'خفيف الوزن وسهل الحمل',
        'بطارية طويلة العمر'
      ],
      isNew: false,
      isBestseller: false
    },
  ];

  // Healthcare departments/categories
  const departments = [
    { name: 'مستشفيات', count: 42 },
    { name: 'عيادات', count: 36 },
    { name: 'مراكز طبية', count: 28 },
    { name: 'مختبرات', count: 15 },
    { name: 'رعاية صحية منزلية', count: 10 },
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

      {/* Hero Section */}
      <section className="bg-gray-50">
        <Container>
          <div className="py-16 md:py-24 text-center">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary-700 bg-primary-50 rounded-full mb-3">اكسسوارات الرعاية الصحية</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">اكسسوارات احترافية للعاملين في المجال الصحي</h1>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
              مجموعة واسعة من الإكسسوارات الطبية عالية الجودة المصممة خصيصًا للأطباء والممرضين والعاملين في مجال الرعاية الصحية، توفر الأداء المهني والراحة طوال اليوم.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="#products" variant="primary" size="lg">
                تصفح المنتجات
              </Button>
              <Button href="/ar/contact" variant="outline" size="lg">
                طلب عرض سعر مخصص
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16" id="products">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sidebar Filters - Right side for RTL */}
            <div className="order-2 md:order-1">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="font-semibold text-lg mb-4 text-right">تصفية حسب</h2>
                
                {/* Department Filter */}
                <div className="mb-6">
                  <h3 className="font-medium text-sm mb-3 text-gray-900 text-right">القسم</h3>
                  <div className="space-y-2">
                    {departments.map((department, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">({department.count})</span>
                        <label className="flex items-center cursor-pointer text-right">
                          <span className="text-sm mr-2">{department.name}</span>
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"
                          />
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Price Range Filter */}
                <div className="mb-6">
                  <h3 className="font-medium text-sm mb-3 text-gray-900 text-right">نطاق السعر</h3>
                  <div className="space-y-2">
                    {['أقل من ريال 50', 'ريال 50 - ريال 100', 'ريال 100 - ريال 200', 'أكثر من ريال 200'].map((range, index) => (
                      <div key={index} className="flex items-center justify-end">
                        <label className="flex items-center cursor-pointer">
                          <span className="text-sm mr-2">{range}</span>
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"
                          />
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Availability Filter */}
                <div>
                  <h3 className="font-medium text-sm mb-3 text-gray-900 text-right">التوفر</h3>
                  <div className="space-y-2">
                    {['متوفر للشحن الفوري', 'تخصيص متاح'].map((option, index) => (
                      <div key={index} className="flex items-center justify-end">
                        <label className="flex items-center cursor-pointer">
                          <span className="text-sm mr-2">{option}</span>
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"
                          />
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Product Grid - Left side for RTL */}
            <div className="order-1 md:order-2 md:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <select className="pr-8 py-2 text-sm border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500">
                    <option>الأحدث</option>
                    <option>السعر (الأقل إلى الأعلى)</option>
                    <option>السعر (الأعلى إلى الأقل)</option>
                    <option>الأكثر شهرة</option>
                  </select>
                  <span className="text-sm text-gray-500 mr-2">ترتيب حسب:</span>
                </div>
                <p className="text-sm text-gray-500">{products.length} منتج</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <Link
                    key={product.id}
                    href={product.href}
                    className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition relative"
                  >
                    {product.isNew && (
                      <div className="absolute top-2 right-2 z-10 bg-primary-500 text-white px-2 py-1 rounded text-xs font-semibold">
                        جديد
                      </div>
                    )}
                    {product.isBestseller && (
                      <div className="absolute top-2 left-2 z-10 bg-amber-500 text-white px-2 py-1 rounded text-xs font-semibold">
                        الأكثر مبيعًا
                      </div>
                    )}
                    <div className="relative h-56 md:h-64 bg-gray-100">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5 text-right">
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="mb-4">
                        <ul className="text-xs text-gray-500 space-y-1">
                          {product.features.map((feature, index) => (
                            <li key={index} className="flex items-center justify-end gap-1">
                              <span>{feature}</span>
                              <svg className="w-3.5 h-3.5 text-primary-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">عرض التفاصيل</span>
                        <p className="font-semibold text-gray-900">{product.price}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <Container>
          <SectionHeading centered>لماذا تختار اكسسوارات الرعاية الصحية من يونيوم؟</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">جودة احترافية</h3>
              <p className="text-gray-600">
                تم اختيار جميع اكسسواراتنا الطبية بعناية لتقديم أعلى مستويات الجودة والمتانة للاستخدام اليومي في بيئات الرعاية الصحية.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">تخصيص للمؤسسات</h3>
              <p className="text-gray-600">
                نقدم خدمات تخصيص متكاملة للمستشفيات والمراكز الصحية، بما في ذلك طباعة الشعارات وتصميم مجموعات مخصصة.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">دعم محلي</h3>
              <p className="text-gray-600">
                فريق خدمة عملاء متخصص في المملكة العربية السعودية لدعم المستشفيات والمؤسسات الصحية في اختيار المنتجات المناسبة.
              </p>
            </div>
          </div>
        </Container>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-600 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">هل تبحث عن حلول مخصصة؟</h2>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              نحن نقدم خدمات تخصيص كاملة للمستشفيات والمراكز الطبية. تواصل معنا اليوم للحصول على عرض سعر مخصص لاحتياجات مؤسستك.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                href="/ar/contact" 
                variant="primary"
                size="lg"
              >
                طلب عرض سعر
              </Button>
              <Button 
                href="/ar/about" 
                variant="outline"
                size="lg"
              >
                تعرف علينا أكثر
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
} 