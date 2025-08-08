'use client';

import React from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ProductCard from '@/components/ui/ProductCard';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const dynamic = 'force-static';

const featuredSuits = [
  {
    id: '1',
    name: 'البدلة التنفيذية الفاخرة',
    image: '/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg',
    price: 'اطلب عرض سعر',
    href: '/ar/shop/corporate-attire/executive-suits/premium-business/',
    category: 'فاخرة',
    isNew: true
  },
  {
    id: '2',
    name: 'البدلة التنفيذية الكلاسيكية',
    image: '/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg',
    price: 'اطلب عرض سعر',
    href: '/ar/shop/corporate-attire/executive-suits/classic/',
    category: 'كلاسيكية',
    isFeatured: true
  },
  {
    id: '3',
    name: 'البدلة التنفيذية العصرية',
    image: '/images/businessman-checking-documents-and-using-laptop-w-2024-11-01-23-29-12-utc.jpg',
    price: 'اطلب عرض سعر',
    href: '/ar/shop/corporate-attire/executive-suits/modern/',
    category: 'عصرية'
  }
];

export default function ExecutiveSuitsPageAr() {
  return (
    <div dir="rtl" className="font-arabic">
      <EnhancedSEO2025 
        title="البدل التنفيذية | أزياء الأعمال الفاخرة للمديرين | يونيوم"
        description="بدل تنفيذية فاخرة للمهنيين في الشركات. أزياء أعمال عالية الجودة مصممة للمديرين التنفيذيين والمدراء وقادة الشركات في المملكة العربية السعودية."
        canonicalUrl="https://uneom.com/ar/shop/corporate-attire/executive-suits/"
        locale="ar"
      />

      {/* قسم البطل */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-700 text-white py-20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg"
            alt="البدل التنفيذية"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <Container>
          <Breadcrumbs
            items={[
              { label: 'الرئيسية', href: '/ar' },
              { label: 'المتجر', href: '/ar/shop' },
              { label: 'الأزياء المؤسسية', href: '/ar/shop/corporate-attire' },
              { label: 'البدل التنفيذية', href: '/ar/shop/corporate-attire/executive-suits' }
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">البدل التنفيذية الفاخرة</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl">
              بدل تنفيذية فاخرة مصممة لقادة الشركات والمهنيين المتميزين. تجمع بين الأناقة المتطورة والحرفية الفائقة والتميز المهني للبيئة التجارية الحديثة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href="/ar/quote"
                variant="secondary" 
                size="lg"
              >
                اطلب عرض سعر تنفيذي
              </Button>
              <Button 
                href="#featured-suits"
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-700"
              >
                استعرض المجموعة
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          {/* المقدمة */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading subtitle="التميز التنفيذي">
                  بدل تفرض الاحترام والهيبة
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  مجموعة البدل التنفيذية لدينا مصنوعة لقادة الشركات الذين يطالبون بأفضل ما في الأزياء المهنية. كل بدلة تجمع بين الأناقة الخالدة والتصميم المعاصر لخلق حضور مهني قوي ومؤثر.
                </p>
                <p className="text-gray-600 mb-8">
                  من اجتماعات مجلس الإدارة إلى العروض التقديمية للعملاء، تضمن بدلنا التنفيذية أن تعكس الثقة والسلطة والنجاح في كل بيئة مهنية تدخلها.
                </p>
                <Button href="/ar/contact" variant="primary" size="lg">
                  ناقش المتطلبات التنفيذية
                </Button>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg"
                  alt="المهني التنفيذي"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* البدل المميزة */}
          <section id="featured-suits" className="mb-16">
            <SectionHeading subtitle="مجموعة البدل التنفيذية" centered>
              أزياء مؤسسية فاخرة
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {featuredSuits.map((suit) => (
                <ProductCard key={suit.id} product={suit} showAddToQuote={true} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button href="/ar/shop/corporate-attire/" variant="primary" size="lg">
                استعرض جميع الأزياء المؤسسية
              </Button>
            </div>
          </section>

          {/* المميزات التنفيذية */}
          <section className="mb-16 bg-gray-50 rounded-2xl p-8">
            <SectionHeading subtitle="المميزات التنفيذية" centered>
              مصنوعة للقيادة والتميز
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">أقمشة فاخرة</h3>
                <p className="text-gray-600 text-sm">أجود أنواع الصوف وخلطات الأقمشة الفاخرة للجودة الفائقة</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.414-4.414a2 2 0 00-2.828 0L12 9.172 9.414 6.586a2 2 0 00-2.828 0l-4 4a2 2 0 000 2.828l4 4a2 2 0 002.828 0L12 14.828l2.586 2.586a2 2 0 002.828 0l4-4a2 2 0 000-2.828l-4-4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">قصة مثالية</h3>
                <p className="text-gray-600 text-sm">خياطة مخصصة للحصول على قصة مثالية وشكل مهني أنيق</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">أناقة خالدة</h3>
                <p className="text-gray-600 text-sm">تصاميم كلاسيكية تبقى أنيقة ومهنية عبر الزمن</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">العلامة التجارية المؤسسية</h3>
                <p className="text-gray-600 text-sm">خيارات تطريز الشعار والتخصيص المؤسسي الراقي</p>
              </div>
            </div>
          </section>

          {/* قسم الفوائد المهنية */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/businessman-checking-documents-and-using-laptop-w-2024-11-01-23-29-12-utc.jpg"
                  alt="الفوائد المهنية للبدل التنفيذية"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <SectionHeading subtitle="التأثير المهني">
                  استثمار في صورتك القيادية
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  البدلة التنفيذية الفاخرة ليست مجرد ملابس، بل استثمار في صورتك المهنية وحضورك القيادي. تعكس التزامك بالتميز والجودة في كل تفصيل.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    تعزز الثقة والحضور القيادي
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    تترك انطباعاً مهنياً قوياً ودائماً
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    تعكس قيم الشركة ومعايير الجودة
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    تناسب جميع المناسبات المهنية الرسمية
                  </li>
                </ul>
                <Button href="/ar/services/custom-design/" variant="primary" size="lg">
                  خصص بدلتك التنفيذية
                </Button>
              </div>
            </div>
          </section>

          {/* دعوة للعمل النهائية */}
          <section className="text-center bg-primary-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">هل أنت مستعد لترقية صورتك التنفيذية؟</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              استثمر في بدل تنفيذية فاخرة تعكس منصبك القيادي والتزامك بالتميز. اترك انطباعاً قوياً ومؤثراً في كل بيئة مهنية.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/ar/quote" variant="primary" size="lg">
                احصل على عرض سعر البدلة التنفيذية
              </Button>
              <Button href="/ar/contact" variant="outline" size="lg">
                احجز استشارة تنفيذية
              </Button>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}