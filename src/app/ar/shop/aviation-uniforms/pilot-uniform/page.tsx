'use client';

import React from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ProductCard from '@/components/ui/ProductCard'; // For related products
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';
import IconsComponent from '@/components/ui/Icons'; // Changed import for default export

export const dynamic = 'force-static';

const relatedProducts = [
  {
    id: 'flight-attendant-dress-ar',
    name: 'زي طاقم الضيافة الجوية الأنيق',
    image: '/images/products/aviation/airline-2.jpg', // Placeholder
    price: 'اطلب عرض سعر',
    href: '/ar/shop/aviation-uniforms/flight-attendant-dress/',
    category: 'طاقم الضيافة'},
  {
    id: 'ground-crew-uniform-ar',
    name: 'زي الطاقم الأرضي المتين',
    image: '/images/products/aviation/airline-3.jpg', // Placeholder
    price: 'اطلب عرض سعر',
    href: '/ar/shop/aviation-uniforms/ground-crew-uniform/',
    category: 'طاقم أرضي'},
];

export default function PilotUniformPageAr() {
  return (
    <div dir="rtl" className="font-arabic">
      <EnhancedSEO2025
        title="زي الطيارين الاحترافي | بدلة طيار وقميص طيار عالي الجودة | يونيوم"
        description="اكتشف مجموعتنا من زي الطيارين الاحترافي في المملكة العربية السعودية. بدلات طيارين، قمصان، وإكسسوارات مصممة للراحة والأناقة والمتانة."
        canonicalUrl="https://uneom.com/ar/shop/aviation-uniforms/pilot-uniform/"
        locale="ar"
        image="/images/products/aviation/pilot-uniform-main.jpg" // Changed from images array to image string
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-sky-700 to-blue-800 text-white py-20">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/products/aviation/pilot-uniform-hero-bg.jpg" // Placeholder
            alt="خلفية زي طيارين"
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
              { label: 'أزياء الطيران', href: '/ar/shop/aviation-uniforms' },
              { label: 'زي الطيارين', href: '/ar/shop/aviation-uniforms/pilot-uniform' },
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">زي الطيارين الاحترافي</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl">
              مجموعة متكاملة من زي الطيارين المصمم ليعكس الهيبة والاحترافية. بدلات، قمصان، وإكسسوارات عالية الجودة تضمن الراحة والأداء الأمثل في قمرة القيادة.
            </p>
            <Button 
              href="/ar/quote?product=pilot-uniform"
              variant="secondary" 
              size="lg"
            >
              اطلب عرض سعر لزي الطيارين
            </Button>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Product Image Gallery */}
            <div className="relative">
              <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/products/aviation/pilot-uniform-main.jpg" // Main Product Image
                  alt="بدلة طيار احترافية من يونيوم"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Add thumbnails or carousel for more images if available */}
            </div>

            {/* Product Details */}
            <div>
              <SectionHeading subtitle="الأناقة في قمرة القيادة">
                زي طيارين يجمع بين الهيبة والراحة
              </SectionHeading>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                يمثل زي الطيار رمزاً للمسؤولية والاحترافية. نقدم في يونيوم مجموعة متكاملة من زي الطيارين المصمم بدقة ليلبي أعلى معايير الجودة والأناقة والراحة، مما يضمن أداءً مثالياً وثقة عالية في قمرة القيادة.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-primary-700">المكونات الرئيسية للزي:</h3>
              <ul className="list-disc pr-5 space-y-2 text-gray-600 mb-6">
                <li>بدلة طيار رسمية (جاكيت وبنطلون) بقصات كلاسيكية وعصرية.</li>
                <li>قمصان طيارين بيضاء بأكمام طويلة وقصيرة، مصنوعة من أجود أنواع القطن.</li>
                <li>ربطات عنق وأوشحة متناسقة.</li>
                <li>شارات الرتب والأجنحة المطرزة بدقة.</li>
                <li>قبعات طيارين رسمية.</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-primary-700">المميزات:</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <IconsComponent name="check" className="h-6 w-6 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">أقمشة فاخرة ومريحة (صوف، قطن، خلطات عالية الجودة).</p>
                </div>
                <div className="flex items-start">
                  <IconsComponent name="check" className="h-6 w-6 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">مقاومة للتجاعيد وسهولة في العناية.</p>
                </div>
                <div className="flex items-start">
                  <IconsComponent name="check" className="h-6 w-6 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">تصاميم تضمن حرية الحركة والراحة خلال الرحلات الطويلة.</p>
                </div>
                <div className="flex items-start">
                  <IconsComponent name="check" className="h-6 w-6 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">متانة عالية لتحمل الاستخدام المتكرر.</p>
                </div>
                <div className="flex items-start">
                  <IconsComponent name="check" className="h-6 w-6 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">خيارات تخصيص كاملة لتناسب هوية شركة الطيران.</p>
                </div>
                <div className="flex items-start">
                  <IconsComponent name="check" className="h-6 w-6 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">مطابقة لمعايير الطيران الدولية.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Button href="/ar/quote?product=pilot-uniform" variant="primary" size="lg">
                  اطلب عرض سعر الآن
                </Button>
                <Button href="/ar/contact" variant="outline" size="lg">
                  تحدث إلى خبير
                </Button>
              </div>
            </div>
          </div>

          {/* Detailed Description / Tabs Section */}
          <section className="mb-16">
            {/* Consider using a TabNavigation component here if content is extensive */}
            <h2 className="text-2xl font-semibold mb-6 text-center text-primary-800">تفاصيل إضافية عن زي الطيارين</h2>
            <div className="bg-gray-50 p-8 rounded-lg shadow">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-secondary-700">الأقمشة المستخدمة:</h3>
                  <p className="text-gray-600 mb-4">
                    نستخدم مزيجاً من الأقمشة الطبيعية والاصطناعية عالية الجودة لضمان التوازن المثالي بين الراحة والمتانة والمظهر الاحترافي. تشمل خياراتنا:
                  </p>
                  <ul className="list-disc pr-5 space-y-1 text-gray-600">
                    <li>الصوف الخالص أو المخلوط للبدل لمظهر فاخر ومقاومة للتجاعيد.</li>
                    <li>القطن المصري أو قطن البيما للقمصان لنعومة وتهوية فائقة.</li>
                    <li>خلطات البوليستر والفسكوز لسهولة العناية والمتانة.</li>
                    <li>أقمشة معالجة بتقنيات طاردة للبقع ومقاومة للكهرباء الساكنة.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-secondary-700">خيارات التخصيص:</h3>
                  <p className="text-gray-600 mb-4">
                    نقدم مجموعة واسعة من خيارات التخصيص لتلبية احتياجات شركات الطيران المختلفة:
                  </p>
                  <ul className="list-disc pr-5 space-y-1 text-gray-600">
                    <li>اختيار الألوان والتصاميم التي تعكس هوية العلامة التجارية.</li>
                    <li>تطريز شعار الشركة وشارات الرتب بدقة عالية.</li>
                    <li>تعديل القصات لتناسب مختلف الأحجام والأشكال.</li>
                    <li>إضافة تفاصيل خاصة مثل الأزرار المخصصة أو البطانات المميزة.</li>
                    <li>خيارات للأزياء الصيفية والشتوية.</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button href="/ar/services/custom-design" variant="outline" size="md">
                  تعرف على خدمة التصميم المخصص
                </Button>
              </div>
            </div>
          </section>
          
          {/* Related Products Section */}
          <section className="mb-16">
            <SectionHeading subtitle="منتجات ذات صلة" centered>
              استكمل طقم أزياء الطيران الخاص بك
            </SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} showAddToQuote={true} />
              ))}
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="text-center bg-sky-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4 text-sky-800">هل أنت مستعد لتجهيز طياريك بأفضل زي؟</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              تواصل معنا اليوم لمناقشة احتياجاتك من زي الطيارين واحصل على عرض سعر مخصص يعكس الجودة والاحترافية التي تستحقها شركتك.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/ar/quote?product=pilot-uniform" variant="primary" size="lg">
                اطلب عرض سعر لزي الطيارين
              </Button>
              <Button href="/ar/contact" variant="outline" size="lg" className="border-sky-700 text-sky-700 hover:bg-sky-700 hover:text-white">
                اتصل بنا للمزيد من المعلومات
              </Button>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}