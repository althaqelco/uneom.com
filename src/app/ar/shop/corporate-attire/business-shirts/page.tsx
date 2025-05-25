'use client';

import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ProductCard from '@/components/ui/ProductCard';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const dynamic = 'force-static';

const featuredShirts = [
  {
    id: '1',
    name: 'القميص التجاري الكلاسيكي',
    image: '/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg',
    price: 'اطلب عرض سعر',
    href: '/ar/shop/corporate-attire/business-shirts/classic-business/',
    category: 'كلاسيكي',
    isNew: true
  },
  {
    id: '2',
    name: 'قميص الأعمال المطور',
    image: '/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg',
    price: 'اطلب عرض سعر',
    href: '/ar/shop/corporate-attire/business-shirts/premium/',
    category: 'مطور',
    isFeatured: true
  },
  {
    id: '3',
    name: 'قميص الأعمال العصري',
    image: '/images/businessman-checking-documents-and-using-laptop-w-2024-11-01-23-29-12-utc.jpg',
    price: 'اطلب عرض سعر',
    href: '/ar/shop/corporate-attire/business-shirts/modern/',
    category: 'عصري'
  }
];

export default function BusinessShirtsPageAr() {
  return (
    <div dir="rtl" className="font-arabic">
      <EnhancedSEO2025 
        title="القمصان التجارية | أزياء الأعمال المهنية للرجال | يونيوم"
        description="قمصان تجارية أنيقة ومهنية للرجال في بيئة الأعمال. تصاميم عصرية وكلاسيكية عالية الجودة مناسبة للمكاتب والاجتماعات التجارية في المملكة العربية السعودية."
        canonicalUrl="https://uneom.com/ar/shop/corporate-attire/business-shirts/"
        locale="ar"
      />

      {/* قسم البطل */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-700 text-white py-20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg"
            alt="القمصان التجارية"
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
              { label: 'القمصان التجارية', href: '/ar/shop/corporate-attire/business-shirts' }
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">القمصان التجارية الأنيقة</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl">
              قمصان تجارية مصممة خصيصاً للرجل المهني العصري. تجمع بين الأناقة الكلاسيكية والراحة العملية لتمنحك إطلالة مهنية متميزة في جميع المناسبات التجارية.
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
                href="#featured-shirts"
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
                <SectionHeading subtitle="الأناقة المهنية">
                  قمصان تعكس احترافيتك وذوقك
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  مجموعة القمصان التجارية لدينا مصممة للرجل المهني الذي يقدر التفاصيل ويسعى للتميز في إطلالته. كل قميص مصنوع من أجود الخامات ومصمم ليمنحك الراحة والثقة في بيئة العمل.
                </p>
                <p className="text-gray-600 mb-8">
                  من الاجتماعات الصباحية إلى العشاء التجاري، تضمن قمصاننا أن تبدو في أفضل حالاتك مع الحفاظ على الراحة طوال اليوم.
                </p>
                <Button href="/ar/contact" variant="primary" size="lg">
                  استشر خبراء الأزياء
                </Button>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg"
                  alt="الرجل المهني"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* القمصان المميزة */}
          <section id="featured-shirts" className="mb-16">
            <SectionHeading subtitle="مجموعة القمصان التجارية" centered>
              تشكيلة متنوعة لكل مناسبة
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {featuredShirts.map((shirt) => (
                <ProductCard key={shirt.id} product={shirt} showAddToQuote={true} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button href="/ar/shop/corporate-attire/" variant="primary" size="lg">
                استعرض جميع الأزياء المؤسسية
              </Button>
            </div>
          </section>

          {/* أنواع القمصان */}
          <section className="mb-16">
            <SectionHeading subtitle="أنواع القمصان" centered>
              تشكيلة متكاملة لكل احتياج
            </SectionHeading>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">القميص الرسمي</h3>
                <p className="text-gray-600 mb-4">مثالي للاجتماعات المهمة والمناسبات الرسمية</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• ياقة كلاسيكية أنيقة</li>
                  <li>• أكمام طويلة مع أزرار كفة</li>
                  <li>• قصة مفصلة ومريحة</li>
                  <li>• ألوان محايدة وأنيقة</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">القميص اليومي</h3>
                <p className="text-gray-600 mb-4">مناسب للعمل اليومي والاجتماعات العادية</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• تصميم عملي ومريح</li>
                  <li>• أقمشة تتحمل الاستخدام اليومي</li>
                  <li>• سهولة في العناية والكي</li>
                  <li>• تنوع في الألوان والأنماط</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">القميص المطور</h3>
                <p className="text-gray-600 mb-4">تقنيات متقدمة للراحة والأداء الفائق</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• أقمشة مقاومة للتجاعيد</li>
                  <li>• تقنية طرد الرطوبة</li>
                  <li>• حماية من البقع</li>
                  <li>• مرونة في الحركة</li>
                </ul>
              </div>
            </div>
          </section>

          {/* مميزات الجودة */}
          <section className="mb-16 bg-gray-50 rounded-2xl p-8">
            <SectionHeading subtitle="مميزات الجودة" centered>
              تفاصيل تصنع الفرق
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">أقمشة فاخرة</h3>
                <p className="text-gray-600 text-sm">قطن مصري فاخر وخلطات عالية الجودة</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">خياطة متقنة</h3>
                <p className="text-gray-600 text-sm">حرفية عالية في التفصيل والتشطيب</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">راحة فائقة</h3>
                <p className="text-gray-600 text-sm">تصميم مريح يسمح بحرية الحركة</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">متانة عالية</h3>
                <p className="text-gray-600 text-sm">مقاومة للاستخدام المكثف والغسيل المتكرر</p>
              </div>
            </div>
          </section>

          {/* دليل الاختيار */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/businessman-checking-documents-and-using-laptop-w-2024-11-01-23-29-12-utc.jpg"
                  alt="دليل اختيار القميص المناسب"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <SectionHeading subtitle="دليل الاختيار">
                  كيف تختار القميص المناسب؟
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  اختيار القميص المناسب يعتمد على عدة عوامل مهمة تضمن لك الإطلالة المثالية والراحة القصوى في بيئة العمل.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 ml-3 flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold mb-1">حدد المناسبة</h4>
                      <p className="text-gray-600 text-sm">اختر التصميم المناسب حسب طبيعة العمل والمناسبة</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 ml-3 flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold mb-1">اختر القصة المناسبة</h4>
                      <p className="text-gray-600 text-sm">قصة مفصلة للمناسبات الرسمية أو عادية للاستخدام اليومي</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 ml-3 flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold mb-1">انتبه للألوان</h4>
                      <p className="text-gray-600 text-sm">الألوان المحايدة للمناسبات الرسمية والألوان الزاهية للتنويع</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 ml-3 flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold mb-1">فكر في العناية</h4>
                      <p className="text-gray-600 text-sm">اختر الأقمشة التي تناسب نمط حياتك وسهولة العناية</p>
                    </div>
                  </div>
                </div>
                <Button href="/ar/services/custom-design/" variant="primary" size="lg" className="mt-6">
                  احصل على استشارة مجانية
                </Button>
              </div>
            </div>
          </section>

          {/* دعوة للعمل النهائية */}
          <section className="text-center bg-primary-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">ارتق بإطلالتك المهنية اليوم</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              استثمر في قمصان تجارية عالية الجودة تعكس احترافيتك وتمنحك الثقة في كل اجتماع ومناسبة عمل.
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