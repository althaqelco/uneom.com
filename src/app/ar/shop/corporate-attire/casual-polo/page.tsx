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

const featuredPolos = [
  {
    id: '1',
    name: 'بولو الأعمال الكلاسيكي',
    image: '/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg',
    price: 'اطلب عرض سعر',
    href: '/ar/shop/corporate-attire/casual-polo/classic-business/',
    category: 'كلاسيكي',
    isNew: true
  },
  {
    id: '2',
    name: 'بولو الأعمال المطور',
    image: '/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg',
    price: 'اطلب عرض سعر',
    href: '/ar/shop/corporate-attire/casual-polo/premium/',
    category: 'مطور',
    isFeatured: true
  },
  {
    id: '3',
    name: 'بولو الأعمال الرياضي',
    image: '/images/businessman-checking-documents-and-using-laptop-w-2024-11-01-23-29-12-utc.jpg',
    price: 'اطلب عرض سعر',
    href: '/ar/shop/corporate-attire/casual-polo/sport/',
    category: 'رياضي'
  }
];

export default function CasualPoloPageAr() {
  return (
    <div dir="rtl" className="font-arabic">
      <EnhancedSEO2025 
        title="بولو الأعمال الكاجوال | أزياء مهنية مريحة للرجال | يونيوم"
        description="قمصان بولو أنيقة ومريحة للبيئة المهنية الكاجوال. تصاميم عصرية تجمع بين الراحة والأناقة المهنية للرجال في المملكة العربية السعودية."
        canonicalUrl="https://uneom.com/ar/shop/corporate-attire/casual-polo/"
        locale="ar"
      />

      {/* قسم البطل */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-700 text-white py-20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg"
            alt="بولو الأعمال الكاجوال"
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
              { label: 'بولو الأعمال الكاجوال', href: '/ar/shop/corporate-attire/casual-polo' }
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">بولو الأعمال الكاجوال</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl">
              قمصان بولو مصممة خصيصاً للبيئة المهنية الحديثة. تجمع بين الراحة والأناقة لتمنحك إطلالة مهنية مريحة تناسب أجواء العمل الكاجوال والاجتماعات غير الرسمية.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href="/ar/quote"
                variant="secondary" 
                size="lg"
              >
                اطلب عرض سعر مخصص
              </Button>
              <Button 
                href="#featured-polos"
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
                <SectionHeading subtitle="الأناقة المريحة">
                  مهنية بلا تعقيد، راحة بلا تنازل
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  في عالم الأعمال الحديث، تتطلب البيئة المهنية مرونة في الأزياء تواكب التطور في ثقافة العمل. قمصان البولو الخاصة بنا تلبي هذه الحاجة بتوفير إطلالة مهنية أنيقة مع راحة استثنائية.
                </p>
                <p className="text-gray-600 mb-8">
                  مثالية للمكاتب ذات الطابع الكاجوال، والاجتماعات غير الرسمية، وأيام الجمعة المريحة، وحتى الفعاليات الخارجية للشركة.
                </p>
                <Button href="/ar/contact" variant="primary" size="lg">
                  استشر خبراء الأزياء
                </Button>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg"
                  alt="بيئة العمل الكاجوال"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* البولو المميز */}
          <section id="featured-polos" className="mb-16">
            <SectionHeading subtitle="مجموعة بولو الأعمال" centered>
              راحة وأناقة في تصميم واحد
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {featuredPolos.map((polo) => (
                <ProductCard key={polo.id} product={polo} showAddToQuote={true} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button href="/ar/shop/corporate-attire/" variant="primary" size="lg">
                استعرض جميع الأزياء المؤسسية
              </Button>
            </div>
          </section>

          {/* مميزات البولو */}
          <section className="mb-16 bg-gray-50 rounded-2xl p-8">
            <SectionHeading subtitle="مميزات بولو الأعمال" centered>
              تقنيات متقدمة للراحة والأداء
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">تقنية طرد الرطوبة</h3>
                <p className="text-gray-600 text-sm">أقمشة متطورة تحافظ على جفاف الجسم وراحته</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">راحة فائقة</h3>
                <p className="text-gray-600 text-sm">تصميم مريح يسمح بحرية الحركة طوال اليوم</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">سهولة العناية</h3>
                <p className="text-gray-600 text-sm">مقاوم للتجاعيد وسهل الغسيل والعناية</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">تصميم أنيق</h3>
                <p className="text-gray-600 text-sm">قصة عصرية تناسب البيئة المهنية الحديثة</p>
              </div>
            </div>
          </section>

          {/* أنواع البولو */}
          <section className="mb-16">
            <SectionHeading subtitle="أنواع بولو الأعمال" centered>
              تشكيلة متنوعة لكل مناسبة
            </SectionHeading>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg"
                    alt="البولو الكلاسيكي"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">البولو الكلاسيكي</h3>
                <p className="text-gray-600 mb-4">تصميم تقليدي أنيق مناسب للاستخدام اليومي في المكتب</p>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• ياقة كلاسيكية مع أزرار</li>
                  <li>• أكمام قصيرة مريحة</li>
                  <li>• ألوان محايدة وأنيقة</li>
                  <li>• قطن عالي الجودة</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg"
                    alt="البولو المطور"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">البولو المطور</h3>
                <p className="text-gray-600 mb-4">تقنيات متقدمة للأداء الفائق والراحة القصوى</p>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• تقنية طرد الرطوبة</li>
                  <li>• مقاومة للبقع والروائح</li>
                  <li>• حماية من الأشعة فوق البنفسجية</li>
                  <li>• مرونة في الحركة</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/businessman-checking-documents-and-using-laptop-w-2024-11-01-23-29-12-utc.jpg"
                    alt="البولو الرياضي"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">البولو الرياضي</h3>
                <p className="text-gray-600 mb-4">مثالي للفعاليات الخارجية وأنشطة الشركة</p>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• أقمشة رياضية متطورة</li>
                  <li>• تهوية محسنة</li>
                  <li>• مقاومة للتمدد والانكماش</li>
                  <li>• تصميم ديناميكي وعملي</li>
                </ul>
              </div>
            </div>
          </section>

          {/* دليل التنسيق */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading subtitle="دليل التنسيق">
                  كيف تنسق بولو الأعمال؟
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  التنسيق الصحيح لبولو الأعمال يضمن لك إطلالة مهنية أنيقة تناسب مختلف المناسبات في بيئة العمل الحديثة.
                </p>
                <div className="space-y-6">
                  <div className="bg-blue-50 border-r-4 border-blue-500 p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">للاجتماعات غير الرسمية</h4>
                    <p className="text-blue-700 text-sm">بولو كلاسيكي + بنطلون كاكي + حذاء جلدي كاجوال</p>
                  </div>
                  
                  <div className="bg-green-50 border-r-4 border-green-500 p-4">
                    <h4 className="font-semibold text-green-800 mb-2">للعمل اليومي</h4>
                    <p className="text-green-700 text-sm">بولو مطور + بنطلون قطني + حذاء رياضي أنيق</p>
                  </div>
                  
                  <div className="bg-purple-50 border-r-4 border-purple-500 p-4">
                    <h4 className="font-semibold text-purple-800 mb-2">للفعاليات الخارجية</h4>
                    <p className="text-purple-700 text-sm">بولو رياضي + شورت أو بنطلون رياضي + حذاء رياضي</p>
                  </div>
                </div>
                <Button href="/ar/services/custom-design/" variant="primary" size="lg" className="mt-6">
                  احصل على استشارة تنسيق
                </Button>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/businessman-checking-documents-and-using-laptop-w-2024-11-01-23-29-12-utc.jpg"
                  alt="تنسيق بولو الأعمال"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* الألوان والأحجام */}
          <section className="mb-16 bg-gray-50 rounded-2xl p-8">
            <SectionHeading subtitle="الألوان والأحجام" centered>
              خيارات متنوعة تناسب جميع الأذواق
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 gap-12 mt-12">
              <div>
                <h3 className="text-xl font-semibold mb-6">الألوان المتاحة</h3>
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white border-2 border-gray-300 rounded-full mx-auto mb-2"></div>
                    <span className="text-sm text-gray-600">أبيض</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto mb-2"></div>
                    <span className="text-sm text-gray-600">أزرق</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gray-800 rounded-full mx-auto mb-2"></div>
                    <span className="text-sm text-gray-600">رمادي</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-600 rounded-full mx-auto mb-2"></div>
                    <span className="text-sm text-gray-600">أخضر</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-600 rounded-full mx-auto mb-2"></div>
                    <span className="text-sm text-gray-600">أحمر</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full mx-auto mb-2"></div>
                    <span className="text-sm text-gray-600">أصفر</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-full mx-auto mb-2"></div>
                    <span className="text-sm text-gray-600">بنفسجي</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-black rounded-full mx-auto mb-2"></div>
                    <span className="text-sm text-gray-600">أسود</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-6">الأحجام المتاحة</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                    <div className="text-lg font-semibold mb-1">S</div>
                    <div className="text-sm text-gray-600">صغير</div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                    <div className="text-lg font-semibold mb-1">M</div>
                    <div className="text-sm text-gray-600">متوسط</div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                    <div className="text-lg font-semibold mb-1">L</div>
                    <div className="text-sm text-gray-600">كبير</div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                    <div className="text-lg font-semibold mb-1">XL</div>
                    <div className="text-sm text-gray-600">كبير جداً</div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                    <div className="text-lg font-semibold mb-1">XXL</div>
                    <div className="text-sm text-gray-600">كبير جداً جداً</div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                    <div className="text-lg font-semibold mb-1">مخصص</div>
                    <div className="text-sm text-gray-600">حسب الطلب</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* دعوة للعمل النهائية */}
          <section className="text-center bg-primary-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">اكتشف راحة الأناقة المهنية</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              جرب الفرق مع قمصان بولو الأعمال التي تجمع بين الراحة والأناقة المهنية. مثالية للبيئة المهنية الحديثة والمرنة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/ar/quote" variant="primary" size="lg">
                احصل على عرض سعر مخصص
              </Button>
              <Button href="/ar/contact" variant="outline" size="lg">
                تحدث مع خبير الأزياء
              </Button>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}