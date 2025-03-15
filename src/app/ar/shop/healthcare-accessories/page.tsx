'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

export default function HealthcareAccessoriesPage() {
  const locale = 'ar';
  
  // منتجات اكسسوارات الرعاية الصحية
  const products = [
    {
      id: 'stethoscope-cover',
      name: 'غطاء سماعة الطبيب',
      description: 'غطاء مخصص لسماعة الطبيب مصنوع من مواد مضادة للبكتيريا وبألوان متعددة.',
      price: 'من 45 ريال',
      image: '/images/product-placeholder.jpg',
      href: '/ar/shop/healthcare-accessories/stethoscope-cover'
    },
    {
      id: 'id-badge-holder',
      name: 'حامل بطاقة الهوية',
      description: 'حامل بطاقة هوية متين وقابل للسحب للاستخدام في المستشفيات والعيادات الطبية.',
      price: 'من 35 ريال',
      image: '/images/product-placeholder.jpg',
      href: '/ar/shop/healthcare-accessories/id-badge-holder'
    },
    {
      id: 'medical-cap',
      name: 'قبعة طبية',
      description: 'قبعات طبية مريحة ومتوفرة بأشكال متعددة لتناسب احتياجات الكادر الطبي.',
      price: 'من 29 ريال',
      image: '/images/product-placeholder.jpg',
      href: '/ar/shop/healthcare-accessories/medical-cap'
    },
    {
      id: 'pocket-organizer',
      name: 'منظم الجيب',
      description: 'منظم جيب متعدد الأقسام للأدوات الطبية الضرورية، يتناسب مع جيوب الملابس الطبية.',
      price: 'من 49 ريال',
      image: '/images/product-placeholder.jpg',
      href: '/ar/shop/healthcare-accessories/pocket-organizer'
    },
    {
      id: 'medical-mask',
      name: 'كمامة طبية',
      description: 'كمامات طبية عالية الجودة توفر حماية ممتازة وراحة أثناء الارتداء لساعات طويلة.',
      price: 'من 25 ريال',
      image: '/images/product-placeholder.jpg',
      href: '/ar/shop/healthcare-accessories/medical-mask'
    },
    {
      id: 'nursing-watch',
      name: 'ساعة التمريض',
      description: 'ساعة مخصصة للممرضين والممرضات مقاومة للماء ومضادة للصدمات.',
      price: 'من 120 ريال',
      image: '/images/product-placeholder.jpg',
      href: '/ar/shop/healthcare-accessories/nursing-watch'
    }
  ];
  
  // فئات المنتجات
  const categories = [
    {
      title: 'اكسسوارات للممرضين',
      description: 'اكسسوارات متخصصة للممرضين والممرضات',
      image: '/images/default-placeholder.jpg',
      url: '/ar/shop/healthcare-accessories/nursing'
    },
    {
      title: 'اكسسوارات للأطباء',
      description: 'اكسسوارات عملية للأطباء والاستشاريين',
      image: '/images/default-placeholder.jpg',
      url: '/ar/shop/healthcare-accessories/doctor'
    },
    {
      title: 'اكسسوارات للصيادلة',
      description: 'اكسسوارات متخصصة للعاملين في الصيدليات',
      image: '/images/default-placeholder.jpg',
      url: '/ar/shop/healthcare-accessories/pharmacy'
    },
    {
      title: 'اكسسوارات المختبرات',
      description: 'اكسسوارات للعاملين في المختبرات الطبية',
      image: '/images/default-placeholder.jpg',
      url: '/ar/shop/healthcare-accessories/laboratory'
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
                  <span className="text-sm text-gray-500 mr-1 md:mr-2">اكسسوارات الرعاية الصحية</span>
                </div>
              </li>
            </ol>
          </nav>
        </Container>
      </div>
      
      {/* بانر الصفحة */}
      <section className="relative py-16 bg-gradient-to-r from-blue-800 to-primary-900 text-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-right order-2 md:order-1">
              <h1 className="text-4xl font-bold mb-4">اكسسوارات الرعاية الصحية</h1>
              <p className="text-xl mb-6 text-white/90">
                أكمل زيك الطبي بالإكسسوارات الطبية المتميزة المصممة للراحة والوظائف العملية والاحترافية. تقدم يونيوم مجموعة شاملة من الإكسسوارات الطبية عالية الجودة للمتخصصين في الرعاية الصحية في جميع أنحاء المملكة العربية السعودية.
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
                src="/images/product-placeholder.jpg"
                alt="اكسسوارات الرعاية الصحية"
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
          <SectionHeading centered>فئات اكسسوارات الرعاية الصحية</SectionHeading>
          
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
      
      {/* قسم الطلب المخصص */}
      <section className="py-16 bg-gray-100">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 order-2 md:order-1">
              <Image 
                src="/images/default-placeholder.jpg"
                alt="اكسسوارات طبية مخصصة"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="text-right order-1 md:order-2">
              <SectionHeading>خدمات التخصيص</SectionHeading>
              <p className="text-lg text-gray-600 mb-6">
                نقدم في يونيوم خدمات تخصيص اكسسوارات الرعاية الصحية حسب احتياجات مؤسستك الطبية. يمكننا إضافة شعار مؤسستك وألوانها على مجموعة واسعة من الاكسسوارات الطبية.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center justify-end">
                  <span>تطريز شعارات المستشفيات والعيادات</span>
                  <svg className="h-5 w-5 text-primary-600 ml-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </li>
                <li className="flex items-center justify-end">
                  <span>خيارات ألوان تتماشى مع هوية العلامة التجارية</span>
                  <svg className="h-5 w-5 text-primary-600 ml-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </li>
                <li className="flex items-center justify-end">
                  <span>حلول طلبات الكميات الكبيرة للمؤسسات الطبية</span>
                  <svg className="h-5 w-5 text-primary-600 ml-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </li>
              </ul>
              <Button
                href="/ar/contact?subject=Healthcare%20Accessories%20Customization"
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