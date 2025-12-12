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

// الزي المدرسي المميز
const featuredUniforms = [
  {
    id: '1',
    name: 'طقم الزي المدرسي الفاخر - بنين',
    image: '/images/education/uniform_school_product-1.jpg',
    price: 'اطلب عرض سعر',
    href: '/ar/shop/education-uniforms/school-uniforms/premium-boys-set/',
    category: 'زي البنين',
    isNew: true
  },
  {
    id: '2',
    name: 'الزي المدرسي الكلاسيكي - بنات',
    image: '/images/education/uniform_school_product-2.jpg',
    price: 'اطلب عرض سعر',
    href: '/ar/shop/education-uniforms/school-uniforms/classic-girls-set/',
    category: 'زي البنات',
    isFeatured: true
  },
  {
    id: '3',
    name: 'طقم الزي الرياضي المدرسي',
    image: '/images/education/uniform_school_product-4.jpg',
    price: 'اطلب عرض سعر',
    href: '/ar/shop/education-uniforms/school-uniforms/sports-set/',
    category: 'الزي الرياضي'
  }
];

// مميزات الزي المدرسي
const uniformFeatures = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'خامات عالية الجودة',
    description: 'أقمشة فاخرة تتحمل الاستخدام اليومي والغسيل المتكرر مع الحفاظ على المظهر الأنيق.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'راحة فائقة',
    description: 'تصميم مريح يناسب الأطفال في مراحل النمو مع حرية الحركة والنشاط.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3V1m0 18v2m8-10h2m-2 4h2m-2-8h2m-2-4h2" />
      </svg>
    ),
    title: 'سهولة العناية',
    description: 'أقمشة قابلة للغسيل في الغسالة تحافظ على جودتها ومظهرها مع الحد الأدنى من الصيانة.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'تطريز شعار المدرسة',
    description: 'خيارات تطريز شعار المدرسة والتخصيص لتعكس هوية المؤسسة التعليمية.'
  }
];

export default function SchoolUniformsPageAr() {
  return (
    <div dir="rtl" className="font-arabic">
      <EnhancedSEO2025
        title="الزي المدرسي | أزياء تعليمية فاخرة للطلاب | يونيوم"
        description="زي مدرسي عالي الجودة مصمم للراحة والمتانة والتميز الأكاديمي. أزياء تعليمية احترافية للمدارس في المملكة العربية السعودية مع خيارات التخصيص."
        canonicalUrl="https://uneom.com/ar/shop/education-uniforms/school-uniforms/"
        locale="ar"
      />

      {/* قسم البطل */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-700 text-white py-20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/group-of-elementary-school-pupils-wearing-uniform-folding-arms-against-red-studio-back-SBI-349929394.jpg"
            alt="الزي المدرسي من يونيوم"
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
              { label: 'التعليم', href: '/ar/shop/education-uniforms' },
              { label: 'الزي المدرسي', href: '/ar/shop/education-uniforms/school-uniforms' }
            ]}
            className="text-white/80 mb-6 relative z-10"
          />

          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">الزي المدرسي الفاخر</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl">
              زي مدرسي فاخر مصمم لتعزيز التميز الأكاديمي وفخر المدرسة وراحة الطلاب. أزياؤنا التعليمية تجمع بين المتانة والأناقة والوظائف العملية للبيئة التعليمية الحديثة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/ar/quote"
                variant="secondary"
                size="lg"
              >
                اطلب عرض سعر للمدرسة
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
                <SectionHeading subtitle="التميز التعليمي">
                  أزياء تلهم التعلم والإبداع
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  مجموعة الزي المدرسي لدينا مصممة لخلق بيئة تعليمية إيجابية حيث يمكن للطلاب التركيز على تعليمهم. كل زي مصنوع بعناية فائقة للراحة والمتانة والاحتياجات الفريدة للأطفال في مراحل النمو.
                </p>
                <p className="text-gray-600 mb-8">
                  من المرحلة الابتدائية إلى الثانوية، تعزز أزياؤنا المساواة وفخر المدرسة وأجواء التعلم المهنية مع ضمان شعور الطلاب بالراحة والثقة طوال يومهم الدراسي.
                </p>
                <Button href="/ar/contact" variant="primary" size="lg">
                  ناقش متطلبات مدرستك
                </Button>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/group-of-elementary-school-pupils-wearing-uniform-folding-arms-against-red-studio-back-SBI-349929394.jpg"
                  alt="طلاب في الزي المدرسي"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* المميزات الرئيسية */}
          <section className="mb-16">
            <SectionHeading subtitle="لماذا تختار زينا المدرسي" centered>
              جودة تدعم التعليم والتميز
            </SectionHeading>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {uniformFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* الأزياء المميزة */}
          <section id="featured-uniforms" className="mb-16">
            <SectionHeading subtitle="مجموعة الزي المدرسي" centered>
              أزياء تعليمية فاخرة
            </SectionHeading>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {featuredUniforms.map((uniform) => (
                <ProductCard key={uniform.id} product={uniform} showAddToQuote={true} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button href="/ar/shop/education-uniforms/" variant="primary" size="lg">
                استعرض جميع الأزياء التعليمية
              </Button>
            </div>
          </section>

          {/* فوائد للمدارس */}
          <section className="mb-16 bg-gray-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src="/images/education/education-uniforms.jpg"
                  alt="فوائد الزي المدرسي"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <SectionHeading subtitle="الفوائد التعليمية">
                  أكثر من مجرد ملابس
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  يوفر الزي المدرسي فوائد تعليمية واجتماعية عديدة تساهم في بيئة تعليمية إيجابية ونجاح الطلاب.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    يعزز المساواة ويقلل الضغط الاجتماعي
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    يعزز هوية المدرسة والفخر بالانتماء
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    يحسن التركيز على التعلم والدراسة
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    يبسط الروتين الصباحي للعائلات
                  </li>
                </ul>
                <Button href="/ar/services/custom-design/" variant="primary" size="lg">
                  خصص لمدرستك
                </Button>
              </div>
            </div>
          </section>

          {/* دعوة للعمل النهائية */}
          <section className="text-center bg-primary-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">هل أنت مستعد لتعزيز صورة مدرستك؟</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              انضم إلى المدارس في جميع أنحاء المملكة العربية السعودية التي تثق في يونيوم للحصول على زي مدرسي عالي الجودة ومتين ومريح يعزز التميز الأكاديمي.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/ar/quote" variant="primary" size="lg">
                احصل على عرض سعر الزي المدرسي
              </Button>
              <Button href="/ar/contact" variant="outline" size="lg">
                احجز استشارة مدرسية
              </Button>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}