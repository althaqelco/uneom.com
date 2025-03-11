'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

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

export default function CulinaryUniformsPage() {
  const locale = 'ar';
  
  // منتجات الأزياء المطبخية
  const products: Product[] = [
    {
      id: 'premium-chef-coat',
      name: 'سترة الشيف الفاخرة',
      description: 'سترة شيف احترافية مصنوعة من قماش فاخر، مصممة للراحة والأناقة في بيئة المطبخ.',
      price: 'من 189 ريال',
      image: '/images/group-of-chefs-standing-with-arms-crossed-in-kitch-2023-11-27-05-01-36-utc.jpg',
      href: '/ar/shop/culinary-uniforms/premium-chef-coat',
      features: ['مقاومة للبقع', 'تصميم مزدوج الصدر', 'قماش قابل للتنفس', 'سهلة العناية'],
      colors: ['أبيض', 'أسود', 'كحلي'],
      isBestseller: true
    },
    {
      id: 'executive-chef-set',
      name: 'طقم الشيف التنفيذي',
      description: 'طقم زي شيف كامل يشمل سترة فاخرة وبنطلون وقبعة لطاقم المطبخ الاحترافي.',
      price: 'من 349 ريال',
      image: '/images/smiling-handsome-african-american-chef-squeezing-l-2024-11-18-08-59-30-utc.jpg',
      href: '/ar/shop/culinary-uniforms/executive-chef-set',
      features: ['طقم كامل', 'خامات ممتازة', 'مظهر احترافي', 'معيار مطاعم'],
      colors: ['أبيض', 'أسود'],
      isNew: true
    },
    {
      id: 'kitchen-staff-uniform',
      name: 'زي طاقم المطبخ',
      description: 'زي عملي ومريح مصمم لجميع طاقم المطبخ، بما في ذلك الطهاة والمساعدين.',
      price: 'من 279 ريال',
      image: '/images/cook-flavoring-his-best-meal-2024-11-29-22-42-39-utc.jpg',
      href: '/ar/shop/culinary-uniforms/kitchen-staff-uniform',
      features: ['قماش متين', 'مقاوم للحرارة', 'مقاس مريح', 'سهل الصيانة'],
      colors: ['أبيض', 'أسود', 'رمادي']
    },
    {
      id: 'professional-chef-apron',
      name: 'مريلة الشيف الاحترافية',
      description: 'مريلة احترافية متينة مع حزام رقبة قابل للتعديل وأربطة خصر لمقاس مثالي في المطابخ المزدحمة.',
      price: 'من 99 ريال',
      image: '/images/judge-chef-and-courier-isolated-on-white-2024-11-17-23-15-00-utc.jpg',
      href: '/ar/shop/culinary-uniforms/professional-chef-apron',
      features: ['قماش متين', 'جيوب متعددة', 'مقاس قابل للتعديل', 'مقاوم للبقع'],
      colors: ['أسود', 'أبيض', 'نبيذي', 'كحلي']
    },
    {
      id: 'kitchen-manager-uniform',
      name: 'زي مدير المطبخ',
      description: 'زي مميز لمديري المطبخ ورؤساء الطهاة، مصمم لمظهر احترافي.',
      price: 'من 449 ريال',
      image: '/images/cook-flavoring-his-best-meal-2024-11-29-22-42-39-utc.jpg',
      href: '/ar/shop/culinary-uniforms/kitchen-manager-uniform',
      features: ['قماش فاخر', 'تصميم مميز', 'مقاس مريح', 'مظهر احترافي'],
      colors: ['أسود', 'أبيض', 'رمادي']
    },
    {
      id: 'culinary-student-uniform',
      name: 'زي طالب الطهي',
      description: 'طقم زي بأسعار معقولة وجودة عالية لطلاب الطهي والمؤسسات التدريبية.',
      price: 'من 219 ريال',
      image: '/images/group-of-chefs-standing-with-arms-crossed-in-kitch-2023-11-27-05-01-36-utc.jpg',
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
            src="/images/smiling-handsome-african-american-chef-squeezing-l-2024-11-18-08-59-30-utc.jpg"
            alt="أزياء الطهي"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-2xl text-white mr-auto text-right">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">أزياء الطهي</h1>
            <p className="text-xl mb-8">
              ملابس مطبخ احترافية مصممة للراحة والوظائف العملية والأناقة. توفر يونيوم سترات الشيف عالية الجودة وأزياء المطبخ والملابس الطهوية للمطاعم وشركات الضيافة.
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
              <div className="flex flex-wrap justify-between items-center mb-8">
                <div className="w-full md:w-auto mb-4 md:mb-0">
                  <h2 className="text-2xl font-bold text-right">أزياء الطهي</h2>
                  <p className="text-gray-600 text-right">عرض {products.length} منتج</p>
                </div>
                
                <div className="w-full md:w-auto flex justify-end">
                  <div className="inline-block relative w-full md:w-48">
                    <select className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-primary-500">
                      <option>الترتيب الافتراضي</option>
                      <option>الترتيب حسب الشهرة</option>
                      <option>الترتيب حسب الأحدث</option>
                      <option>الترتيب: السعر من الأدنى للأعلى</option>
                      <option>الترتيب: السعر من الأعلى للأدنى</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* شبكة المنتجات */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                    <Link href={product.href} className="block relative aspect-square">
                      <Image 
                        src={product.image} 
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                      {product.isNew && (
                        <span className="absolute top-2 left-2 bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded">جديد</span>
                      )}
                      {product.isBestseller && (
                        <span className="absolute top-2 left-2 bg-secondary-500 text-white text-xs font-bold px-2 py-1 rounded">الأكثر مبيعاً</span>
                      )}
                    </Link>
                    
                    <div className="p-4 text-right">
                      <h3 className="text-lg font-semibold mb-2">
                        <Link href={product.href} className="text-gray-900 hover:text-primary-600">
                          {product.name}
                        </Link>
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <Button 
                          href={product.href}
                          variant="outline"
                          size="sm"
                        >
                          عرض التفاصيل
                        </Button>
                        <span className="font-bold text-primary-700">{product.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* قسم خدمات التخصيص */}
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
                src="/images/group-of-chefs-standing-with-arms-crossed-in-kitch-2023-11-27-05-01-36-utc.jpg"
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