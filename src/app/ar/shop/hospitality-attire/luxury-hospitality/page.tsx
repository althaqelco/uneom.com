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

const featuredHospitalityUniforms = [
  {
    id: '1',
    name: 'زي الاستقبال الفاخر',
    image: '/images/hospitality/hospitality_uniform_concierge.jpg',
    price: 'اطلب عرض سعر',
    href: '/ar/shop/hospitality-attire/luxury-hospitality/reception/',
    category: 'استقبال',
    isNew: true
  },
  {
    id: '2',
    name: 'زي خدمة الضيوف المتميز',
    image: '/images/hospitality/hospitality_uniform_formal.jpg',
    price: 'اطلب عرض سعر',
    href: '/ar/shop/hospitality-attire/luxury-hospitality/guest-service/',
    category: 'خدمة ضيوف',
    isFeatured: true
  },
  {
    id: '3',
    name: 'زي المطاعم الراقية',
    image: '/images/hospitality/hospitality_uniform_department.jpg',
    price: 'اطلب عرض سعر',
    href: '/ar/shop/hospitality-attire/luxury-hospitality/fine-dining/',
    category: 'مطاعم راقية'
  }
];

export default function LuxuryHospitalityPageAr() {
  return (
    <div dir="rtl" className="font-arabic">
      <EnhancedSEO2025 
        title="أزياء الضيافة الفاخرة | زي فندقي أنيق ومريح للفنادق والمنتجعات | يونيوم"
        description="أزياء ضيافة فاخرة وأنيقة للفنادق والمنتجعات والمطاعم الراقية في المملكة العربية السعودية. تصاميم عصرية تعكس الفخامة والاحترافية في خدمة الضيوف."
        canonicalUrl="https://uneom.com/ar/shop/hospitality-attire/luxury-hospitality/"
        locale="ar"
      />

      {/* قسم البطل */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-700 text-white py-20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/hospitality/hospitality_uniform_concierge.jpg"
            alt="أزياء الضيافة الفاخرة"
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
              { label: 'أزياء الضيافة', href: '/ar/shop/hospitality-attire' },
              { label: 'أزياء الضيافة الفاخرة', href: '/ar/shop/hospitality-attire/luxury-hospitality' }
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">أزياء الضيافة الفاخرة</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl">
              أزياء ضيافة مصممة لتعكس الفخامة والأناقة في صناعة الضيافة. تجمع بين التصميم الراقي والراحة العملية لتمنح ضيوفك انطباعاً لا يُنسى عن مستوى الخدمة المتميز.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href="/ar/quote"
                variant="secondary" 
                size="lg"
              >
                اطلب عرض سعر للفنادق والمنتجعات
              </Button>
              <Button 
                href="#featured-uniforms"
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-700"
              >
                استعرض المجموعة الفاخرة
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
                <SectionHeading subtitle="الضيافة الراقية">
                  انطباع أول يدوم للأبد
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  في عالم الضيافة الفاخرة، كل تفصيل يهم. من اللحظة الأولى التي يدخل فيها الضيف، يبدأ تكوين انطباعه عن مستوى الخدمة والجودة. أزياؤنا الفاخرة مصممة لتعكس التميز والاحترافية التي تتوقعها من مؤسسات الضيافة الراقية.
                </p>
                <p className="text-gray-600 mb-8">
                  من الفنادق الخمس نجوم إلى المنتجعات الفاخرة والمطاعم الراقية، تضمن مجموعتنا المتميزة أن يبدو فريقك بأفضل حالاته، مما يعزز من تجربة الضيف الإجمالية ويرفع من مكانة علامتك التجارية.
                </p>
                <Button href="/ar/contact" variant="primary" size="lg">
                  استشر خبراء أزياء الضيافة
                </Button>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/hospitality/hospitality_uniform_formal.jpg"
                  alt="البيئة الفندقية الفاخرة"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* الأزياء المميزة */}
          <section id="featured-uniforms" className="mb-16">
            <SectionHeading subtitle="مجموعة الضيافة الفاخرة" centered>
              تشكيلة راقية لكل قسم في مؤسستك
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {featuredHospitalityUniforms.map((uniform) => (
                <ProductCard key={uniform.id} product={uniform} showAddToQuote={true} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button href="/ar/shop/hospitality-attire/" variant="primary" size="lg">
                استعرض جميع أزياء الضيافة
              </Button>
            </div>
          </section>

          {/* عناصر التميز */}
          <section className="mb-16 bg-gray-50 rounded-2xl p-8">
            <SectionHeading subtitle="عناصر التميز" centered>
              ما يجعل أزياءنا الفاخرة استثنائية
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">تصميم راقي</h3>
                <p className="text-gray-600 text-sm">قصات عصرية وأنيقة تعكس الفخامة والاحترافية</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">راحة استثنائية</h3>
                <p className="text-gray-600 text-sm">أقمشة فاخرة ومريحة تسمح بالحركة الطبيعية</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">تخصيص كامل</h3>
                <p className="text-gray-600 text-sm">إمكانية تخصيص الألوان والشعارات والتفاصيل</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">جودة عالمية</h3>
                <p className="text-gray-600 text-sm">مواد فاخرة ومعايير تصنيع تضاهي العلامات العالمية</p>
              </div>
            </div>
          </section>

          {/* أقسام الضيافة */}
          <section className="mb-16">
            <SectionHeading subtitle="أقسام الضيافة المختلفة" centered>
              حلول متخصصة لكل قسم في مؤسستك
            </SectionHeading>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/hospitality/hospitality_uniform_concierge.jpg"
                    alt="زي الاستقبال والكونسيرج"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">الاستقبال والكونسيرج</h3>
                <p className="text-gray-600 mb-4">الانطباع الأول الذي يحدد تجربة الضيف بالكامل</p>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• بدل رسمية أنيقة ومريحة</li>
                  <li>• قمصان وربطات عنق راقية</li>
                  <li>• شارات الاسم والمنصب</li>
                  <li>• ألوان تعكس هوية الفندق</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/hospitality/hospitality_uniform_formal.jpg"
                    alt="زي خدمة الضيوف"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">خدمة الضيوف</h3>
                <p className="text-gray-600 mb-4">أزياء عملية وأنيقة لفريق خدمة الضيوف</p>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• تصاميم تسمح بحرية الحركة</li>
                  <li>• جيوب عملية للأدوات اللازمة</li>
                  <li>• أقمشة مقاومة للبقع</li>
                  <li>• سهولة في العناية والغسيل</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/hospitality/hospitality_uniform_department.jpg"
                    alt="زي المطاعم والبارات"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">المطاعم والبارات</h3>
                <p className="text-gray-600 mb-4">أزياء متخصصة لبيئة المطاعم والبارات الراقية</p>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• مآزر أنيقة ومقاومة للبقع</li>
                  <li>• قمصان مريحة وسهلة التنظيف</li>
                  <li>• أحذية مريحة ومانعة للانزلاق</li>
                  <li>• إكسسوارات مهنية متخصصة</li>
                </ul>
              </div>
            </div>
          </section>

          {/* الأقمشة والمواد */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/hospitality/hospitality_uniform_fabric.jpg"
                  alt="أقمشة الضيافة الفاخرة"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <SectionHeading subtitle="الأقمشة والمواد">
                  جودة تلمسها وتشعر بها
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  نختار أفضل الأقمشة والمواد لضمان الراحة والأناقة والمتانة في بيئة العمل المتطلبة في قطاع الضيافة.
                </p>
                <div className="space-y-4">
                  <div className="bg-blue-50 border-r-4 border-blue-500 p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">القطن المصري الفاخر</h4>
                    <p className="text-blue-700 text-sm">نعومة استثنائية وتهوية طبيعية مع مقاومة التجاعيد</p>
                  </div>
                  
                  <div className="bg-green-50 border-r-4 border-green-500 p-4">
                    <h4 className="font-semibold text-green-800 mb-2">الصوف الأسترالي المعالج</h4>
                    <p className="text-green-700 text-sm">أناقة طبيعية مع خصائص مقاومة البقع والروائح</p>
                  </div>
                  
                  <div className="bg-purple-50 border-r-4 border-purple-500 p-4">
                    <h4 className="font-semibold text-purple-800 mb-2">الألياف التقنية المتطورة</h4>
                    <p className="text-purple-700 text-sm">تقنيات حديثة لطرد الرطوبة ومقاومة التآكل</p>
                  </div>
                  
                  <div className="bg-orange-50 border-r-4 border-orange-500 p-4">
                    <h4 className="font-semibold text-orange-800 mb-2">الخلطات المبتكرة</h4>
                    <p className="text-orange-700 text-sm">مزج ذكي للمواد الطبيعية والتقنية للأداء الأمثل</p>
                  </div>
                </div>
                <Button href="/ar/services/fabric-selection/" variant="primary" size="lg" className="mt-6">
                  تعرف على خيارات الأقمشة
                </Button>
              </div>
            </div>
          </section>

          {/* التخصيص والعلامة التجارية */}
          <section className="mb-16 bg-gray-50 rounded-2xl p-8">
            <SectionHeading subtitle="التخصيص والعلامة التجارية" centered>
              اجعل أزياءك تحكي قصة علامتك التجارية
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 gap-12 mt-12">
              <div>
                <h3 className="text-xl font-semibold mb-6">خيارات التخصيص</h3>
                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">الألوان المؤسسية</h4>
                    <p className="text-gray-600 text-sm">تطبيق ألوان علامتك التجارية بدقة عالية</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">الشعارات والعلامات</h4>
                    <p className="text-gray-600 text-sm">تطريز أو طباعة الشعار بتقنيات متقدمة</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">التفاصيل الخاصة</h4>
                    <p className="text-gray-600 text-sm">أزرار مخصصة، بطانات ملونة، وتفاصيل فريدة</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">الأسماء والمناصب</h4>
                    <p className="text-gray-600 text-sm">شارات شخصية أنيقة ومقروءة</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-6">مستويات الخدمة</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">الباقة الأساسية</h4>
                    <p className="text-blue-700 text-sm">تخصيص الألوان والشعار الأساسي</p>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">الباقة المتقدمة</h4>
                    <p className="text-green-700 text-sm">تخصيص شامل مع تفاصيل إضافية</p>
                  </div>
                  
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-800 mb-2">الباقة الفاخرة</h4>
                    <p className="text-purple-700 text-sm">تصميم حصري مع استشارة متخصصة</p>
                  </div>
                  
                  <div className="bg-gold-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-800 mb-2">الباقة الملكية</h4>
                    <p className="text-yellow-700 text-sm">حلول مخصصة بالكامل مع خدمة VIP</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* العناية والصيانة */}
          <section className="mb-16">
            <SectionHeading subtitle="العناية والصيانة" centered>
              حافظ على أناقة أزياءك لأطول فترة ممكنة
            </SectionHeading>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3">الغسيل المهني</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• تنظيف جاف للقطع الحساسة</li>
                  <li>• غسيل بدرجات حرارة مناسبة</li>
                  <li>• استخدام منظفات لطيفة</li>
                  <li>• تجنب المبيضات القوية</li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3">الكي والتخزين</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• كي احترافي للحفاظ على الشكل</li>
                  <li>• تعليق صحيح على شماعات مناسبة</li>
                  <li>• تخزين في بيئة جافة ونظيفة</li>
                  <li>• حماية من الغبار والرطوبة</li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3">الصيانة الدورية</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• فحص دوري للأزرار والسحابات</li>
                  <li>• إصلاح التلف البسيط فوراً</li>
                  <li>• تجديد القطع المتآكلة</li>
                  <li>• خدمة صيانة شاملة دورية</li>
                </ul>
              </div>
            </div>
          </section>

          {/* شهادات العملاء */}
          <section className="mb-16">
            <SectionHeading subtitle="شهادات عملائنا" centered>
              ما يقوله شركاؤنا في قطاع الضيافة
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <blockquote className="text-blue-800 italic mb-4">
                  "الأزياء التي قدمتها يونيوم لفندقنا رفعت من مستوى الأناقة والاحترافية بشكل ملحوظ. الضيوف يعلقون باستمرار على المظهر المتميز لفريقنا."
                </blockquote>
                <cite className="text-blue-600 text-sm">- أحمد الراشد، مدير عام فندق الفيصلية الرياض</cite>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <blockquote className="text-green-800 italic mb-4">
                  "الجودة والراحة والتصميم الأنيق - كل ما نحتاجه في زي واحد. فريقنا يشعر بالثقة والراحة، وهذا ينعكس على جودة الخدمة المقدمة."
                </blockquote>
                <cite className="text-green-600 text-sm">- فاطمة العتيبي، مديرة العمليات منتجع البحر الأحمر</cite>
              </div>
            </div>
          </section>

          {/* دعوة للعمل النهائية */}
          <section className="text-center bg-primary-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">ارتق بمستوى الضيافة في مؤسستك</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              استثمر في أزياء ضيافة فاخرة تعكس مستوى الخدمة المتميز الذي تقدمه، واترك انطباعاً لا يُنسى لدى ضيوفك.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/ar/quote" variant="primary" size="lg">
                احصل على عرض سعر للفنادق والمنتجعات
              </Button>
              <Button href="/ar/contact" variant="outline" size="lg">
                تحدث مع خبير أزياء الضيافة
              </Button>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}