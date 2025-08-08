'use client';

import React from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ProductCard from '@/components/ui/ProductCard'; // For related products
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';
import IconsComponent from '@/components/ui/Icons';

export const dynamic = 'force-static';

const relatedProducts = [
  {
    id: 'pilot-uniform-ar',
    name: 'زي الطيارين الاحترافي',
    image: '/images/products/aviation/airline-1.jpg', // Placeholder
    price: 'اطلب عرض سعر',
    href: '/ar/shop/aviation-uniforms/pilot-uniform/',
    category: 'طيارين'},
  {
    id: 'ground-crew-uniform-ar',
    name: 'زي الطاقم الأرضي المتين',
    image: '/images/products/aviation/airline-3.jpg', // Placeholder
    price: 'اطلب عرض سعر',
    href: '/ar/shop/aviation-uniforms/ground-crew-uniform/',
    category: 'طاقم أرضي'},
];

export default function FlightAttendantDressPageAr() {
  return (
    <div dir="rtl" className="font-arabic">
      <EnhancedSEO2025
        title="زي طاقم الضيافة الجوية | فساتين وبدل أنيقة لمضيفات الطيران | يونيوم"
        description="اكتشف مجموعتنا الراقية من زي طاقم الضيافة الجوية في المملكة العربية السعودية. فساتين، تنانير، وبدل مصممة للأناقة والراحة والمتانة لمضيفات الطيران."
        canonicalUrl="https://uneom.com/ar/shop/aviation-uniforms/flight-attendant-dress/"
        locale="ar"
        image="/images/products/aviation/flight-attendant-dress-main.jpg" // Main product image
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-700 to-pink-600 text-white py-20">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/products/aviation/flight-attendant-hero-bg.jpg" // Placeholder
            alt="خلفية زي طاقم الضيافة الجوية"
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
              { label: 'زي طاقم الضيافة الجوية', href: '/ar/shop/aviation-uniforms/flight-attendant-dress' },
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">زي طاقم الضيافة الجوية الأنيق</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl">
              مجموعة متنوعة من فساتين وتنانير وبدل طاقم الضيافة الجوية، مصممة لتعكس الأناقة والاحترافية مع توفير أقصى درجات الراحة خلال الرحلات الجوية.
            </p>
            <Button 
              href="/ar/quote?product=flight-attendant-dress"
              variant="secondary" 
              size="lg"
              className="bg-white text-purple-700 hover:bg-gray-100"
            >
              اطلب عرض سعر لزي طاقم الضيافة
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
                  src="/images/products/aviation/flight-attendant-dress-main.jpg" // Main Product Image
                  alt="فستان مضيفة طيران أنيق من يونيوم"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Add thumbnails: e.g., different angles, colors, or styles */}
              <div className="grid grid-cols-4 gap-2 mt-4">
                {['/images/products/aviation/flight-attendant-thumbnail1.jpg', 
                  '/images/products/aviation/flight-attendant-thumbnail2.jpg', 
                  '/images/products/aviation/flight-attendant-thumbnail3.jpg', 
                  '/images/products/aviation/flight-attendant-thumbnail4.jpg'].map((thumb, idx) => (
                  <div key={idx} className="aspect-w-1 aspect-h-1 rounded overflow-hidden border border-gray-200">
                    <Image src={thumb} alt={`صورة مصغرة ${idx+1}`} fill className="object-cover hover:opacity-75 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div>
              <SectionHeading subtitle="الأناقة والراحة في الأجواء">
                زي يعكس الترحيب والاحترافية
              </SectionHeading>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                يمثل طاقم الضيافة الجوية واجهة شركة الطيران، وزيهم الرسمي يلعب دوراً محورياً في ترك انطباع إيجابي لدى الركاب. نقدم في يونيوم تشكيلة واسعة من أزياء طاقم الضيافة التي تجمع بين الأناقة العصرية والراحة العملية.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-primary-700">خيارات التصميم:</h3>
              <ul className="list-disc pr-5 space-y-2 text-gray-600 mb-6">
                <li>فساتين بقصات متنوعة (قلم رصاص، A-line، ملفوفة).</li>
                <li>تنانير وبليزرات متناسقة.</li>
                <li>بدل نسائية ورجالية أنيقة.</li>
                <li>قمصان وبلوزات مريحة.</li>
                <li>أوشحة وإكسسوارات مكملة تعكس هوية العلامة التجارية.</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-primary-700">المميزات الرئيسية:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <IconsComponent name="check" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">أقمشة عالية الجودة مقاومة للتجاعيد وسهلة العناية.</p>
                </div>
                <div className="flex items-start">
                  <IconsComponent name="check" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">تصاميم مريحة تسمح بحرية الحركة أثناء تأدية المهام.</p>
                </div>
                <div className="flex items-start">
                  <IconsComponent name="check" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">متانة عالية لتحمل الاستخدام اليومي والغسيل المتكرر.</p>
                </div>
                <div className="flex items-start">
                  <IconsComponent name="check" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">ألوان وتفاصيل تعكس هوية شركة الطيران بدقة.</p>
                </div>
                <div className="flex items-start">
                  <IconsComponent name="check" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">خيارات متنوعة تناسب مختلف الأذواق والمتطلبات.</p>
                </div>
                <div className="flex items-start">
                  <IconsComponent name="check" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">إمكانية إضافة تقنيات أقمشة متطورة (مثل طاردة للسوائل).</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Button href="/ar/quote?product=flight-attendant-dress" variant="primary" size="lg">
                  اطلب عرض سعر الآن
                </Button>
                <Button href="/ar/contact" variant="outline" size="lg">
                  تحدث إلى مصمم أزياء
                </Button>
              </div>
            </div>
          </div>

          {/* Detailed Description / Tabs Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center text-primary-800">تفاصيل تعكس التميز</h2>
            <div className="bg-gray-50 p-8 rounded-lg shadow">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-secondary-700">الأقمشة والألوان:</h3>
                  <p className="text-gray-600 mb-4">
                    نحرص على اختيار أجود أنواع الأقمشة التي توفر الراحة والأناقة والمتانة. تشمل خياراتنا:
                  </p>
                  <ul className="list-disc pr-5 space-y-1 text-gray-600">
                    <li>خلطات الصوف والليكرا لمظهر فاخر ومرونة عالية.</li>
                    <li>أقمشة بوليستر وفيسكوز عالية الجودة لسهولة العناية ومقاومة التجاعيد.</li>
                    <li>أقمشة قطنية مريحة للقمصان والبلوزات.</li>
                    <li>مجموعة واسعة من الألوان لتتناسب مع هوية علامتك التجارية.</li>
                    <li>إمكانية تطوير ألوان مخصصة حسب الطلب.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-secondary-700">التصميم والتخصيص:</h3>
                  <p className="text-gray-600 mb-4">
                    فريق التصميم لدينا مستعد للعمل معكم لابتكار زي يعكس رؤيتكم الفريدة:
                  </p>
                  <ul className="list-disc pr-5 space-y-1 text-gray-600">
                    <li>تصاميم عصرية وكلاسيكية تناسب مختلف الأذواق.</li>
                    <li>تخصيص التفاصيل مثل الياقات، الأكمام، الأزرار، والبطانات.</li>
                    <li>تطريز أو طباعة شعار الشركة بدقة متناهية.</li>
                    <li>إضافة لمسات تعكس الثقافة المحلية أو هوية الوجهة.</li>
                    <li>توفير مقاسات متنوعة لتناسب جميع أفراد الطاقم.</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button href="/ar/services/custom-design" variant="outline" size="md">
                  اكتشف إمكانيات التصميم المخصص
                </Button>
              </div>
            </div>
          </section>
          
          {/* Related Products Section */}
          <section className="mb-16">
            <SectionHeading subtitle="منتجات ذات صلة" centered>
              استكمل أناقة طاقم الطيران الخاص بك
            </SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} showAddToQuote={true} />
              ))}
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="text-center bg-pink-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4 text-pink-800">هل أنت مستعد لزي يعكس فخامة علامتك الجوية؟</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              تواصل معنا اليوم لمناقشة احتياجاتك من زي طاقم الضيافة الجوية، ودعنا نساعدك في تصميم زي يترك انطباعاً لا يُنسى لدى ركابك.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/ar/quote?product=flight-attendant-dress" variant="primary" size="lg" className="bg-pink-700 hover:bg-pink-800">
                اطلب عرض سعر لزي طاقم الضيافة
              </Button>
              <Button href="/ar/contact" variant="outline" size="lg" className="border-pink-700 text-pink-700 hover:bg-pink-700 hover:text-white">
                اتصل بنا للاستشارة
              </Button>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}