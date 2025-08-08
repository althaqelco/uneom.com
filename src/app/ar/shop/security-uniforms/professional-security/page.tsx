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

const featuredSecurityUniforms = [
  {
    id: '1',
    name: 'زي الأمن التنفيذي',
    image: '/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg',
    price: 'اطلب عرض سعر',
    href: '/ar/shop/security-uniforms/professional-security/executive/',
    category: 'تنفيذي',
    isNew: true
  },
  {
    id: '2',
    name: 'زي الأمن التكتيكي',
    image: '/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg',
    price: 'اطلب عرض سعر',
    href: '/ar/shop/security-uniforms/professional-security/tactical/',
    category: 'تكتيكي',
    isFeatured: true
  },
  {
    id: '3',
    name: 'زي أمن المرافق',
    image: '/images/businessman-checking-documents-and-using-laptop-w-2024-11-01-23-29-12-utc.jpg',
    price: 'اطلب عرض سعر',
    href: '/ar/shop/security-uniforms/professional-security/facility/',
    category: 'مرافق'
  }
];

export default function ProfessionalSecurityPageAr() {
  return (
    <div dir="rtl" className="font-arabic">
      <EnhancedSEO2025 
        title="الأزياء الأمنية المهنية | زي أمن مريح وقوي للحراس والأمن | يونيوم"
        description="أزياء أمنية مهنية ومتينة للحراس وأفراد الأمن في المملكة العربية السعودية. تصاميم عملية مع جيوب متعددة ومواد مقاومة للتآكل والاستخدام المكثف."
        canonicalUrl="https://uneom.com/ar/shop/security-uniforms/professional-security/"
        locale="ar"
      />

      {/* قسم البطل */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-700 text-white py-20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg"
            alt="الأزياء الأمنية المهنية"
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
              { label: 'الأزياء الأمنية', href: '/ar/shop/security-uniforms' },
              { label: 'الأزياء الأمنية المهنية', href: '/ar/shop/security-uniforms/professional-security' }
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">الأزياء الأمنية المهنية</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl">
              أزياء أمنية مصممة لتوفير الحماية والراحة والمظهر المهني لأفراد الأمن والحراس. تجمع بين القوة والأناقة لتعكس الثقة والاحترافية في العمل الأمني.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href="/ar/quote"
                variant="secondary" 
                size="lg"
              >
                اطلب عرض سعر للمؤسسات الأمنية
              </Button>
              <Button 
                href="#featured-uniforms"
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
                <SectionHeading subtitle="الأمن والحماية">
                  أزياء تعكس القوة والاحترافية
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  في عالم الأمن والحماية، يلعب المظهر المهني دوراً حاسماً في إرساء الثقة والاحترام. أزياؤنا الأمنية مصممة لتوفير الحماية والراحة مع إبراز الهيبة والاحترافية المطلوبة في العمل الأمني.
                </p>
                <p className="text-gray-600 mb-8">
                  من أمن المباني التجارية إلى الحراسات الشخصية، تضمن مجموعتنا المتنوعة توفير الزي المناسب لكل نوع من أنواع العمل الأمني مع الحفاظ على أعلى معايير الجودة والمتانة.
                </p>
                <Button href="/ar/contact" variant="primary" size="lg">
                  استشر خبراء الأزياء الأمنية
                </Button>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg"
                  alt="البيئة الأمنية المهنية"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* الأزياء المميزة */}
          <section id="featured-uniforms" className="mb-16">
            <SectionHeading subtitle="مجموعة الأزياء الأمنية" centered>
              تشكيلة متكاملة لكل نوع من العمل الأمني
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {featuredSecurityUniforms.map((uniform) => (
                <ProductCard key={uniform.id} product={uniform} showAddToQuote={true} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button href="/ar/shop/security-uniforms/" variant="primary" size="lg">
                استعرض جميع الأزياء الأمنية
              </Button>
            </div>
          </section>

          {/* المميزات التقنية */}
          <section className="mb-16 bg-gray-50 rounded-2xl p-8">
            <SectionHeading subtitle="المميزات التقنية" centered>
              تقنيات متقدمة للحماية والأداء
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">مقاومة التمزق</h3>
                <p className="text-gray-600 text-sm">أقمشة عالية المقاومة تتحمل الاستخدام المكثف</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">تهوية محسنة</h3>
                <p className="text-gray-600 text-sm">تصميم يسمح بالتهوية الطبيعية للراحة</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">جيوب متعددة</h3>
                <p className="text-gray-600 text-sm">تصميم عملي مع جيوب للمعدات الأمنية</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">مظهر مهني</h3>
                <p className="text-gray-600 text-sm">تصميم أنيق يعكس الاحترافية والثقة</p>
              </div>
            </div>
          </section>

          {/* أنواع الأزياء الأمنية */}
          <section className="mb-16">
            <SectionHeading subtitle="أنواع الأزياء الأمنية" centered>
              تشكيلة متخصصة لكل مجال أمني
            </SectionHeading>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg"
                    alt="الزي الأمني التنفيذي"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">الزي الأمني التنفيذي</h3>
                <p className="text-gray-600 mb-4">مصمم للمناصب الإدارية والإشرافية في المجال الأمني</p>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• قميص وبنطلون رسمي أنيق</li>
                  <li>• ربطة عنق أو بابيون</li>
                  <li>• شارات الرتب والتخصص</li>
                  <li>• أقمشة عالية الجودة</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg"
                    alt="الزي الأمني التكتيكي"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">الزي الأمني التكتيكي</h3>
                <p className="text-gray-600 mb-4">للعمليات الأمنية الخاصة والمهام عالية المخاطر</p>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• مواد مقاومة للتمزق والثقب</li>
                  <li>• جيوب تكتيكية متعددة</li>
                  <li>• أحزمة وحمالات للمعدات</li>
                  <li>• ألوان تمويهية أو سوداء</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/businessman-checking-documents-and-using-laptop-w-2024-11-01-23-29-12-utc.jpg"
                    alt="زي أمن المرافق"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">زي أمن المرافق</h3>
                <p className="text-gray-600 mb-4">للحراسة اليومية في المباني والمرافق التجارية</p>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• تصميم مريح للعمل الطويل</li>
                  <li>• ألوان هادئة ومهنية</li>
                  <li>• سهولة في الحركة</li>
                  <li>• مقاومة للاتساخ والبقع</li>
                </ul>
              </div>
            </div>
          </section>

          {/* الإكسسوارات الأمنية */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading subtitle="الإكسسوارات الأمنية">
                  تجهيزات كاملة للمظهر المهني
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  نوفر مجموعة شاملة من الإكسسوارات الأمنية التي تكمل الزي وتعزز من المظهر المهني والوظائف العملية.
                </p>
                <div className="space-y-4">
                  <div className="bg-blue-50 border-r-4 border-blue-500 p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">الشارات والرتب</h4>
                    <p className="text-blue-700 text-sm">شارات مطرزة أو معدنية تحدد الرتبة والتخصص</p>
                  </div>
                  
                  <div className="bg-green-50 border-r-4 border-green-500 p-4">
                    <h4 className="font-semibold text-green-800 mb-2">الأحزمة والحمالات</h4>
                    <p className="text-green-700 text-sm">أحزمة جلدية قوية مع حمالات للمعدات الأمنية</p>
                  </div>
                  
                  <div className="bg-purple-50 border-r-4 border-purple-500 p-4">
                    <h4 className="font-semibold text-purple-800 mb-2">القبعات والطواقي</h4>
                    <p className="text-purple-700 text-sm">قبعات رسمية وطواقي تكتيكية حسب نوع العمل</p>
                  </div>
                  
                  <div className="bg-orange-50 border-r-4 border-orange-500 p-4">
                    <h4 className="font-semibold text-orange-800 mb-2">الأحذية الأمنية</h4>
                    <p className="text-orange-700 text-sm">أحذية مريحة ومقاومة مع نعل مانع للانزلاق</p>
                  </div>
                </div>
                <Button href="/ar/services/custom-design/" variant="primary" size="lg" className="mt-6">
                  صمم إكسسوارات مخصصة
                </Button>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/businessman-checking-documents-and-using-laptop-w-2024-11-01-23-29-12-utc.jpg"
                  alt="الإكسسوارات الأمنية"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* معايير الجودة والأمان */}
          <section className="mb-16 bg-gray-50 rounded-2xl p-8">
            <SectionHeading subtitle="معايير الجودة والأمان" centered>
              التزام بأعلى المعايير الأمنية
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">اختبارات المقاومة</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">مقاومة التمزق</span>
                    <span className="font-semibold text-green-600">عالية جداً</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">مقاومة الاحتكاك</span>
                    <span className="font-semibold text-green-600">ممتازة</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">ثبات الألوان</span>
                    <span className="font-semibold text-green-600">مضمون</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">مقاومة الماء</span>
                    <span className="font-semibold text-green-600">متوفرة</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">الشهادات والمعايير</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full ml-3"></div>
                    <span className="text-gray-700">معايير الجودة ISO 9001</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full ml-3"></div>
                    <span className="text-gray-700">اختبارات السلامة الأوروبية</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full ml-3"></div>
                    <span className="text-gray-700">معايير الأمان السعودية</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full ml-3"></div>
                    <span className="text-gray-700">شهادات البيئة والاستدامة</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* التخصيص للمؤسسات */}
          <section className="mb-16">
            <SectionHeading subtitle="التخصيص للمؤسسات الأمنية" centered>
              حلول مخصصة لكل مؤسسة أمنية
            </SectionHeading>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3">الشعارات والعلامات</h3>
                <p className="text-gray-600 text-sm">
                  تطريز أو طباعة شعار الشركة والعلامات التجارية بأعلى جودة ودقة في التفاصيل.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3">الألوان المؤسسية</h3>
                <p className="text-gray-600 text-sm">
                  تطبيق الألوان المؤسسية للشركة مع الحفاظ على المعايير الأمنية والمهنية.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3">الأسماء والرتب</h3>
                <p className="text-gray-600 text-sm">
                  تطريز الأسماء الشخصية والرتب والتخصصات بخطوط واضحة ومقروءة.
                </p>
              </div>
            </div>
          </section>

          {/* العناية والصيانة */}
          <section className="mb-16">
            <SectionHeading subtitle="العناية والصيانة" centered>
              إرشادات للحفاظ على جودة الزي الأمني
            </SectionHeading>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3 text-blue-800">الغسيل اليومي</h4>
                <ul className="text-blue-700 text-sm space-y-2">
                  <li>• غسيل منفصل عن الملابس العادية</li>
                  <li>• استخدام مساحيق لطيفة</li>
                  <li>• تجنب المبيضات القوية</li>
                  <li>• تجفيف في الظل</li>
                </ul>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3 text-green-800">الكي والتخزين</h4>
                <ul className="text-green-700 text-sm space-y-2">
                  <li>• كي على درجة حرارة متوسطة</li>
                  <li>• تعليق على شماعات مناسبة</li>
                  <li>• تخزين في مكان جاف</li>
                  <li>• حماية من أشعة الشمس المباشرة</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3 text-yellow-800">الصيانة الدورية</h4>
                <ul className="text-yellow-700 text-sm space-y-2">
                  <li>• فحص دوري للأزرار والسحابات</li>
                  <li>• إصلاح التمزقات الصغيرة فوراً</li>
                  <li>• تجديد الطلبية عند الحاجة</li>
                  <li>• الاحتفاظ بقطع احتياطية</li>
                </ul>
              </div>
            </div>
          </section>

          {/* دعوة للعمل النهائية */}
          <section className="text-center bg-primary-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">عزز الثقة والاحترافية الأمنية</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              استثمر في أزياء أمنية متطورة تعكس قوة واحترافية فريقك الأمني، وتعزز من ثقة العملاء في خدماتكم الأمنية.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/ar/quote" variant="primary" size="lg">
                احصل على عرض سعر للمؤسسات الأمنية
              </Button>
              <Button href="/ar/contact" variant="outline" size="lg">
                تحدث مع خبير الأزياء الأمنية
              </Button>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}