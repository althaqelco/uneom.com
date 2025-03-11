'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

export default function ManufacturingAttirePage() {
  const locale = 'ar';
  
  // منتجات ملابس التصنيع
  const products = [
    {
      id: 'industrial-coveralls',
      name: 'أفرول صناعي',
      description: 'أفرول صناعي متين مصمم للحماية والراحة في بيئات التصنيع والصناعة الثقيلة.',
      price: 'من 249 ريال',
      image: '/images/products/industrial-coveralls.jpg',
      href: '/ar/shop/manufacturing-attire/industrial-coveralls'
    },
    {
      id: 'protective-workwear',
      name: 'ملابس العمل الواقية',
      description: 'ملابس عمل واقية مصممة خصيصاً لحماية العاملين في المصانع والمنشآت الصناعية.',
      price: 'من 279 ريال',
      image: '/images/products/protective-workwear.jpg',
      href: '/ar/shop/manufacturing-attire/protective-workwear'
    },
    {
      id: 'safety-vests',
      name: 'سترات السلامة',
      description: 'سترات سلامة عاكسة للضوء لزيادة الرؤية وضمان السلامة في بيئات العمل الصناعية.',
      price: 'من 129 ريال',
      image: '/images/products/safety-vests.jpg',
      href: '/ar/shop/manufacturing-attire/safety-vests'
    },
    {
      id: 'industrial-jackets',
      name: 'سترات صناعية',
      description: 'سترات صناعية متينة ومقاومة للعوامل الخارجية مناسبة للعمل في بيئات صناعية متنوعة.',
      price: 'من 299 ريال',
      image: '/images/products/industrial-jackets.jpg',
      href: '/ar/shop/manufacturing-attire/industrial-jackets'
    },
    {
      id: 'heat-resistant-workwear',
      name: 'ملابس عمل مقاومة للحرارة',
      description: 'ملابس عمل متخصصة مقاومة للحرارة مصممة للبيئات الصناعية ذات درجات الحرارة المرتفعة.',
      price: 'من 399 ريال',
      image: '/images/products/heat-resistant-workwear.jpg',
      href: '/ar/shop/manufacturing-attire/heat-resistant-workwear'
    },
    {
      id: 'industrial-protective-uniforms',
      name: 'أزياء واقية صناعية',
      description: 'أزياء واقية صناعية متكاملة توفر الحماية والراحة للعاملين في بيئات التصنيع.',
      price: 'من 349 ريال',
      image: '/images/products/industrial-protective-uniforms.jpg',
      href: '/ar/shop/manufacturing-attire/industrial-protective-uniforms',
      isNew: true
    }
  ];
  
  // فئات المنتجات
  const categories = [
    {
      title: 'ملابس المصانع',
      description: 'ملابس متخصصة للعاملين في المصانع',
      image: '/images/categories/factory-workwear.jpg',
      url: '/ar/shop/manufacturing-attire/factory-workwear'
    },
    {
      title: 'ملابس الورش',
      description: 'ملابس متينة مناسبة للعمل في ورش العمل',
      image: '/images/categories/workshop-attire.jpg',
      url: '/ar/shop/manufacturing-attire/workshop-attire'
    },
    {
      title: 'معدات السلامة',
      description: 'معدات سلامة للعاملين في بيئات التصنيع',
      image: '/images/categories/safety-equipment.jpg',
      url: '/ar/shop/manufacturing-attire/safety-equipment'
    },
    {
      title: 'ملابس مقاومة للحرارة',
      description: 'ملابس متخصصة لبيئات العمل الحارة',
      image: '/images/categories/heat-resistant.jpg',
      url: '/ar/shop/manufacturing-attire/heat-resistant'
    }
  ];
  
  return (
    <>
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
                  <span className="text-sm text-gray-500 mr-1 md:mr-2">ملابس التصنيع</span>
                </div>
              </li>
            </ol>
          </nav>
        </Container>
      </div>
      
      {/* بانر الصفحة */}
      <section className="relative py-16 bg-gradient-to-r from-neutral-800 to-neutral-900 text-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-right order-2 md:order-1">
              <h1 className="text-4xl font-bold mb-4">ملابس التصنيع</h1>
              <p className="text-xl mb-6 text-white/90">
                ملابس صناعية عالية الجودة مصممة للحماية والراحة في بيئات التصنيع والصناعة الثقيلة. توفر يونيوم مجموعة متكاملة من ملابس العمل المتينة والمريحة للعاملين في القطاع الصناعي.
              </p>
              <Button 
                variant="secondary" 
                href="#featured-products"
              >
                تصفح المنتجات
              </Button>
            </div>
            <div className="relative h-64 md:h-80 order-1 md:order-2">
              <Image 
                src="/images/factory-worker-portrait-industrial-man-looking-at-camera-close-up-of-industry-worker-p-SBI-351092701.jpg"
                alt="ملابس التصنيع"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </Container>
      </section>
      
      {/* الفئات */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionHeading centered>فئات ملابس التصنيع</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {categories.map((category, index) => (
              <Link 
                key={index} 
                href={category.url}
                className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-48">
                  <Image 
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-right">
                  <h3 className="font-bold text-lg mb-2">{category.title}</h3>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      
      {/* المنتجات المميزة */}
      <section id="featured-products" className="py-16">
        <Container>
          <SectionHeading centered>منتجاتنا المميزة</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <Link href={product.href} className="block relative h-64">
                  <Image 
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  {product.isNew && (
                    <span className="absolute top-2 left-2 bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded">جديد</span>
                  )}
                </Link>
                <div className="p-6 text-right">
                  <h3 className="font-bold text-lg mb-2">
                    <Link href={product.href} className="hover:text-primary-600 transition-colors">
                      {product.name}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <Button 
                      href={product.href}
                      variant="outline"
                      size="sm"
                    >
                      عرض المنتج
                    </Button>
                    <span className="font-bold text-primary-700">{product.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              href="/ar/shop"
              variant="primary"
            >
              عرض جميع المنتجات
            </Button>
          </div>
        </Container>
      </section>
      
      {/* ميزات المنتجات */}
      <section className="py-16 bg-gray-100">
        <Container>
          <SectionHeading centered>لماذا تختار ملابس التصنيع من يونيوم؟</SectionHeading>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm text-right">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">معايير السلامة العالية</h3>
              <p className="text-gray-600 text-center">
                تتوافق جميع منتجاتنا مع أعلى معايير السلامة المحلية والعالمية لضمان حماية العاملين في بيئات التصنيع.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-right">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">مواد متينة ومقاومة</h3>
              <p className="text-gray-600 text-center">
                نستخدم أفضل المواد المتينة والمقاومة للظروف القاسية لضمان عمر طويل للملابس في بيئات العمل الصناعية.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-right">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">التهوية والراحة</h3>
              <p className="text-gray-600 text-center">
                مصممة لتوفير التهوية المناسبة والراحة للعمال أثناء نوبات العمل الطويلة في البيئات الصناعية.
              </p>
            </div>
          </div>
        </Container>
      </section>
      
      {/* قسم الطلب المخصص */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 order-2 md:order-1">
              <Image 
                src="/images/custom-manufacturing-workwear.jpg"
                alt="ملابس تصنيع مخصصة"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="text-right order-1 md:order-2">
              <SectionHeading>خدمات التخصيص للشركات الصناعية</SectionHeading>
              <p className="text-lg text-gray-600 mb-6">
                تقدم يونيوم خدمات تخصيص شاملة لملابس التصنيع للشركات الصناعية. يمكننا تخصيص الملابس لتلبية المتطلبات المحددة لبيئة العمل الخاصة بك.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center justify-end">
                  <span>تطريز شعار الشركة على جميع الملابس</span>
                  <svg className="h-5 w-5 text-primary-600 ml-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </li>
                <li className="flex items-center justify-end">
                  <span>تعديل التصميم ليناسب احتياجات بيئة العمل</span>
                  <svg className="h-5 w-5 text-primary-600 ml-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </li>
                <li className="flex items-center justify-end">
                  <span>توفير حلول متكاملة للشركات ذات الاحتياجات المتنوعة</span>
                  <svg className="h-5 w-5 text-primary-600 ml-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </li>
              </ul>
              <Button
                href="/ar/contact?subject=Manufacturing%20Workwear%20Customization"
                variant="primary"
              >
                اطلب خدمة التخصيص
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
} 