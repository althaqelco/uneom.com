'use client';

import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ProductCard from '@/components/ui/ProductCard';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const dynamic = 'force-static';

const featuredMedicalUniforms = [
  {
    id: '1',
    name: 'الزي الطبي المتطور للأطباء',
    image: '/images/products/lab-coat.jpg',
    price: 'اطلب عرض سعر',
    href: '/ar/shop/medical-scrubs/premium-medical-uniforms/doctor/',
    category: 'أطباء',
    isNew: true
  },
  {
    id: '2',
    name: 'زي التمريض المريح',
    image: '/images/products/nursing-uniform.jpg',
    price: 'اطلب عرض سعر',
    href: '/ar/shop/medical-scrubs/premium-medical-uniforms/nursing/',
    category: 'تمريض',
    isFeatured: true
  },
  {
    id: '3',
    name: 'الزي الجراحي المعقم',
    image: '/images/products/lab-coat.jpg',
    price: 'اطلب عرض سعر',
    href: '/ar/shop/medical-scrubs/premium-medical-uniforms/surgical/',
    category: 'جراحة'
  }
];

export default function PremiumMedicalUniformsPageAr() {
  return (
    <div dir="rtl" className="font-arabic">
      <EnhancedSEO2025 
        title="الأزياء الطبية المتطورة | زي طبي مريح وآمن للأطباء والممرضين | يونيوم"
        description="أزياء طبية متطورة ومريحة للأطباء والممرضين في المملكة العربية السعودية. تصاميم عصرية مع تقنيات مضادة للبكتيريا وسهولة في العناية والتعقيم."
        canonicalUrl="https://uneom.com/ar/shop/medical-scrubs/premium-medical-uniforms/"
        locale="ar"
      />

      {/* قسم البطل */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-700 text-white py-20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/products/lab-coat.jpg"
            alt="الأزياء الطبية المتطورة"
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
              { label: 'الأزياء الطبية', href: '/ar/shop/medical-scrubs' },
              { label: 'الأزياء الطبية المتطورة', href: '/ar/shop/medical-scrubs/premium-medical-uniforms' }
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">الأزياء الطبية المتطورة</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl">
              أزياء طبية مصممة خصيصاً للمهنيين الصحيين. تجمع بين الراحة والأمان والأناقة المهنية لتمنحك الثقة والحماية في بيئة العمل الطبية.
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
                <SectionHeading subtitle="الرعاية الصحية المتميزة">
                  أزياء طبية تواكب التطور العلمي
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  في عالم الرعاية الصحية المتطور، تلعب الأزياء الطبية دوراً محورياً في ضمان الأمان والراحة للمهنيين الصحيين. مجموعتنا المتطورة مصممة لتلبية أعلى معايير الجودة والسلامة في البيئة الطبية.
                </p>
                <p className="text-gray-600 mb-8">
                  من غرف العمليات إلى العيادات الخارجية، تضمن أزياؤنا الطبية الحماية الكاملة مع الحفاظ على الراحة والحرية في الحركة طوال ساعات العمل الطويلة.
                </p>
                <Button href="/ar/contact" variant="primary" size="lg">
                  استشر خبراء الأزياء الطبية
                </Button>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/products/nursing-uniform.jpg"
                  alt="البيئة الطبية المتطورة"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* الأزياء المميزة */}
          <section id="featured-uniforms" className="mb-16">
            <SectionHeading subtitle="مجموعة الأزياء الطبية" centered>
              تشكيلة متكاملة لكل تخصص طبي
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {featuredMedicalUniforms.map((uniform) => (
                <ProductCard key={uniform.id} product={uniform} showAddToQuote={true} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button href="/ar/shop/medical-scrubs/" variant="primary" size="lg">
                استعرض جميع الأزياء الطبية
              </Button>
            </div>
          </section>

          {/* التقنيات المتقدمة */}
          <section className="mb-16 bg-gray-50 rounded-2xl p-8">
            <SectionHeading subtitle="التقنيات المتقدمة" centered>
              ابتكارات تقنية للحماية والراحة
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">مضاد للبكتيريا</h3>
                <p className="text-gray-600 text-sm">تقنية متقدمة تمنع نمو البكتيريا والفطريات</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">طرد الرطوبة</h3>
                <p className="text-gray-600 text-sm">يحافظ على جفاف الجسم وراحته طوال اليوم</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">سهولة التعقيم</h3>
                <p className="text-gray-600 text-sm">مقاوم للمواد الكيميائية والتعقيم المتكرر</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">راحة فائقة</h3>
                <p className="text-gray-600 text-sm">تصميم مريح يسمح بحرية الحركة الكاملة</p>
              </div>
            </div>
          </section>

          {/* أنواع الأزياء الطبية */}
          <section className="mb-16">
            <SectionHeading subtitle="أنواع الأزياء الطبية" centered>
              تشكيلة متخصصة لكل مجال طبي
            </SectionHeading>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/products/lab-coat.jpg"
                    alt="زي الأطباء"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">زي الأطباء المتطور</h3>
                <p className="text-gray-600 mb-4">مصمم خصيصاً للأطباء مع تركيز على الأناقة المهنية والوظائف العملية</p>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• معطف طبي بقصة أنيقة</li>
                  <li>• جيوب متعددة للأدوات الطبية</li>
                  <li>• أقمشة مقاومة للبقع</li>
                  <li>• تطريز الاسم والتخصص</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/products/nursing-uniform.jpg"
                    alt="زي التمريض"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">زي التمريض المريح</h3>
                <p className="text-gray-600 mb-4">مصمم للراحة القصوى أثناء ساعات العمل الطويلة مع الحفاظ على المظهر المهني</p>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• تصميم مريح ومرن</li>
                  <li>• أقمشة تتحمل الغسيل المتكرر</li>
                  <li>• ألوان متنوعة حسب القسم</li>
                  <li>• مقاومة للتجاعيد</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/products/lab-coat.jpg"
                    alt="الزي الجراحي"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">الزي الجراحي المعقم</h3>
                <p className="text-gray-600 mb-4">مصمم لغرف العمليات مع أعلى معايير التعقيم والحماية</p>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• مواد معقمة ومضادة للبكتيريا</li>
                  <li>• تصميم يمنع تسرب السوائل</li>
                  <li>• سهولة في الارتداء والخلع</li>
                  <li>• متوفر بأحجام دقيقة</li>
                </ul>
              </div>
            </div>
          </section>

          {/* معايير الجودة */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/products/nursing-uniform.jpg"
                  alt="معايير الجودة الطبية"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <SectionHeading subtitle="معايير الجودة">
                  التزام بأعلى المعايير الطبية
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  نلتزم بأعلى معايير الجودة والسلامة في تصنيع الأزياء الطبية، مع الحصول على الشهادات الدولية المطلوبة.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 ml-3 flex-shrink-0">✓</div>
                    <div>
                      <h4 className="font-semibold mb-1">شهادة ISO 13485</h4>
                      <p className="text-gray-600 text-sm">معيار دولي لأنظمة إدارة الجودة للأجهزة الطبية</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 ml-3 flex-shrink-0">✓</div>
                    <div>
                      <h4 className="font-semibold mb-1">اختبارات مضادة للبكتيريا</h4>
                      <p className="text-gray-600 text-sm">فحوصات مخبرية تؤكد فعالية الحماية من البكتيريا</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 ml-3 flex-shrink-0">✓</div>
                    <div>
                      <h4 className="font-semibold mb-1">مقاومة المواد الكيميائية</h4>
                      <p className="text-gray-600 text-sm">اختبارات صرامة لضمان المقاومة للمطهرات الطبية</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 ml-3 flex-shrink-0">✓</div>
                    <div>
                      <h4 className="font-semibold mb-1">اختبارات الراحة والمتانة</h4>
                      <p className="text-gray-600 text-sm">فحوصات شاملة لضمان الراحة والمتانة طويلة المدى</p>
                    </div>
                  </div>
                </div>
                <Button href="/ar/services/quality-assurance/" variant="primary" size="lg" className="mt-6">
                  تعرف على معايير الجودة
                </Button>
              </div>
            </div>
          </section>

          {/* التخصيص والألوان */}
          <section className="mb-16 bg-gray-50 rounded-2xl p-8">
            <SectionHeading subtitle="التخصيص والألوان" centered>
              خيارات متنوعة تناسب كل مؤسسة طبية
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 gap-12 mt-12">
              <div>
                <h3 className="text-xl font-semibold mb-6">ألوان الأقسام الطبية</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto mb-2"></div>
                    <span className="text-sm text-gray-600">الطوارئ</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-600 rounded-full mx-auto mb-2"></div>
                    <span className="text-sm text-gray-600">الجراحة</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-pink-500 rounded-full mx-auto mb-2"></div>
                    <span className="text-sm text-gray-600">الأطفال</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-full mx-auto mb-2"></div>
                    <span className="text-sm text-gray-600">الأورام</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-600 rounded-full mx-auto mb-2"></div>
                    <span className="text-sm text-gray-600">القلب</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white border-2 border-gray-300 rounded-full mx-auto mb-2"></div>
                    <span className="text-sm text-gray-600">المختبر</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-6">خيارات التخصيص</h3>
                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">التطريز الشخصي</h4>
                    <p className="text-gray-600 text-sm">اسم الطبيب، التخصص، شعار المستشفى</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">القياسات المخصصة</h4>
                    <p className="text-gray-600 text-sm">تفصيل حسب المقاسات الشخصية</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">الإكسسوارات الطبية</h4>
                    <p className="text-gray-600 text-sm">حاملات الأقلام، جيوب إضافية، أحزمة</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* العناية والصيانة */}
          <section className="mb-16">
            <SectionHeading subtitle="العناية والصيانة" centered>
              إرشادات للحفاظ على جودة الزي الطبي
            </SectionHeading>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3">الغسيل والتعقيم</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• غسيل في درجة حرارة 60°م</li>
                  <li>• استخدام مطهرات طبية معتمدة</li>
                  <li>• تجفيف في درجة حرارة منخفضة</li>
                  <li>• تجنب المبيضات القوية</li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3">التخزين السليم</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• تخزين في مكان جاف ونظيف</li>
                  <li>• تجنب التعرض المباشر للشمس</li>
                  <li>• استخدام أكياس واقية</li>
                  <li>• فصل الأزياء النظيفة عن المتسخة</li>
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
                  <li>• فحص دوري للتآكل والتلف</li>
                  <li>• استبدال الأزياء التالفة فوراً</li>
                  <li>• إصلاح الأضرار البسيطة</li>
                  <li>• تجديد الطلبية حسب الحاجة</li>
                </ul>
              </div>
            </div>
          </section>

          {/* دعوة للعمل النهائية */}
          <section className="text-center bg-primary-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">ارتق بمستوى الرعاية الصحية</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              استثمر في أزياء طبية متطورة تضمن الأمان والراحة لفريقك الطبي، وتعكس احترافية مؤسستك الصحية.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/ar/quote" variant="primary" size="lg">
                احصل على عرض سعر للمؤسسات الطبية
              </Button>
              <Button href="/ar/contact" variant="outline" size="lg">
                تحدث مع خبير الأزياء الطبية
              </Button>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}