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

const featuredAviationUniforms = [
  {
    id: '1',
    name: 'زي الطيارين الاحترافي',
    image: '/images/products/aviation/airline-1.jpg', // Placeholder - replace with actual image
    price: 'اطلب عرض سعر',
    href: '/ar/shop/aviation-uniforms/pilot-uniform/',
    category: 'طيارين',
    isNew: true},
  {
    id: '2',
    name: 'زي طاقم الضيافة الجوية الأنيق',
    image: '/images/products/aviation/airline-2.jpg', // Placeholder - replace with actual image
    price: 'اطلب عرض سعر',
    href: '/ar/shop/aviation-uniforms/flight-attendant-dress/',
    category: 'طاقم الضيافة',
    isFeatured: true},
  {
    id: '3',
    name: 'زي الطاقم الأرضي المتين',
    image: '/images/products/aviation/airline-3.jpg', // Placeholder - replace with actual image
    price: 'اطلب عرض سعر',
    href: '/ar/shop/aviation-uniforms/ground-crew-uniform/',
    category: 'طاقم أرضي'},
];

export default function AviationUniformsPageAr() {
  return (
    <div dir="rtl" className="font-arabic">
      <EnhancedSEO2025
        title="أزياء الطيران | زي طيارين وطاقم ضيافة وطاقم أرضي | يونيوم"
        description="مجموعة متكاملة من أزياء الطيران الاحترافية في المملكة العربية السعودية. زي طيارين، طاقم ضيافة جوية، وطاقم أرضي بتصاميم عصرية وجودة عالية."
        canonicalUrl="https://uneom.com/ar/shop/aviation-uniforms/"
        locale="ar"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-sky-600 text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/industries/aviation/hero-aviation-uniforms.jpg" // Placeholder
            alt="أزياء الطيران الاحترافية"
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
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">أزياء الطيران الاحترافية</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl">
              مجموعة متكاملة من أزياء الطيران المصممة لتعكس الاحترافية والأمان والراحة. حلول متخصصة للطيارين وطواقم الضيافة الجوية والطواقم الأرضية.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href="/ar/quote"
                variant="secondary" 
                size="lg"
              >
                اطلب عرض سعر لشركات الطيران
              </Button>
              <Button 
                href="#featured-uniforms"
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-700"
              >
                استعرض مجموعة الطيران
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          {/* Introduction Section */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading subtitle="التميز في الأجواء">
                  أزياء تعكس احترافية قطاع الطيران
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  في عالم الطيران، يمثل الزي الرسمي جزءاً لا يتجزأ من هوية شركات الطيران ويعكس معايير السلامة والاحترافية. نقدم حلولاً متكاملة لأزياء الطيران تلبي أعلى معايير الجودة والأناقة.
                </p>
                <p className="text-gray-600 mb-8">
                  من قمرة القيادة إلى مقصورة الركاب والمناطق الأرضية، تضمن مجموعتنا أن يبدو فريقك بأفضل صورة، مع التركيز على الراحة والمتانة لتلبية متطلبات العمل في بيئة الطيران الديناميكية.
                </p>
                <Button href="/ar/contact" variant="primary" size="lg">
                  استشر خبراء أزياء الطيران
                </Button>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/products/aviation/airline-crew-uniform-group.jpg" // Placeholder
                  alt="فريق طيران يرتدي أزياء يونيوم"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Featured Uniforms Section */}
          <section id="featured-uniforms" className="mb-16">
            <SectionHeading subtitle="مجموعة أزياء الطيران" centered>
              حلول متخصصة لكل دور في قطاع الطيران
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {featuredAviationUniforms.map((uniform) => (
                <ProductCard key={uniform.id} product={uniform} showAddToQuote={true} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button href="/ar/industries/aviation" variant="primary" size="lg">
                اكتشف المزيد عن حلولنا لقطاع الطيران
              </Button>
            </div>
          </section>

          {/* Key Features Section */}
          <section className="mb-16 bg-gray-50 rounded-2xl p-8">
            <SectionHeading subtitle="المميزات الرئيسية" centered>
              لماذا تختار يونيوم لأزياء الطيران؟
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  {/* Placeholder for Icon */}
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.422M12 14L5.84 10.578M12 14v7m-4-3.5l4 2 4-2" /></svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">تصاميم احترافية</h3>
                <p className="text-gray-600 text-sm">أزياء تعكس الهيبة والاحترافية لقطاع الطيران.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  {/* Placeholder for Icon */}
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">راحة فائقة</h3>
                <p className="text-gray-600 text-sm">أقمشة مريحة تسمح بحرية الحركة خلال ساعات العمل الطويلة.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                  {/* Placeholder for Icon */}
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">متانة عالية</h3>
                <p className="text-gray-600 text-sm">مواد مقاومة للتآكل والاستخدام المتكرر في بيئة الطيران.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  {/* Placeholder for Icon */}
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a4 4 0 00-5.656 0M14 10l-4 4m0 0l-4-4m4 4V3" /></svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">معايير السلامة</h3>
                <p className="text-gray-600 text-sm">أزياء تلبي معايير السلامة الدولية لقطاع الطيران.</p>
              </div>
            </div>
          </section>

          {/* Uniform Types Section */}
          <section className="mb-16">
            <SectionHeading subtitle="أنواع أزياء الطيران" centered>
              حلول متخصصة لكل دور في قطاع الطيران
            </SectionHeading>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/products/aviation/pilot-uniform-showcase.jpg" // Placeholder
                    alt="زي الطيارين الاحترافي"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">زي الطيارين</h3>
                <p className="text-gray-600 mb-4">تصاميم كلاسيكية وعصرية تعكس الهيبة والاحترافية.</p>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• قمصان وبدل رسمية مريحة</li>
                  <li>• أقمشة مقاومة للتجاعيد</li>
                  <li>• تفاصيل دقيقة وشارات رتب</li>
                  <li>• خيارات تخصيص كاملة</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/products/aviation/flight-attendant-uniform-showcase.jpg" // Placeholder
                    alt="زي طاقم الضيافة الجوية"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">زي طاقم الضيافة الجوية</h3>
                <p className="text-gray-600 mb-4">أزياء أنيقة وعملية تعكس هوية شركة الطيران.</p>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• فساتين، تنانير، وبدل نسائية ورجالية</li>
                  <li>• أقمشة مريحة وسهلة العناية</li>
                  <li>• ألوان وتصاميم تعكس العلامة التجارية</li>
                  <li>• إكسسوارات متناسقة</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/products/aviation/ground-crew-uniform-showcase.jpg" // Placeholder
                    alt="زي الطاقم الأرضي"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">زي الطاقم الأرضي</h3>
                <p className="text-gray-600 mb-4">أزياء متينة وعملية لمهام الخدمات الأرضية.</p>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• سترات وبناطيل مقاومة للتآكل</li>
                  <li>• أقمشة عالية الوضوح للسلامة</li>
                  <li>• جيوب متعددة للأدوات</li>
                  <li>• مقاومة للعوامل الجوية</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Customization Section */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/services/custom-design-aviation.jpg" // Placeholder
                  alt="تخصيص أزياء الطيران"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <SectionHeading subtitle="التخصيص والعلامة التجارية">
                  أزياء تعكس هوية شركتك الفريدة
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  نقدم خدمات تخصيص شاملة لضمان أن تعكس أزياء الطيران هوية علامتك التجارية بدقة وتميز.
                </p>
                <div className="space-y-4">
                  <div className="bg-blue-50 border-r-4 border-blue-500 p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">الألوان المؤسسية</h4>
                    <p className="text-blue-700 text-sm">تطبيق دقيق لألوان علامتك التجارية على جميع قطع الزي.</p>
                  </div>
                  
                  <div className="bg-green-50 border-r-4 border-green-500 p-4">
                    <h4 className="font-semibold text-green-800 mb-2">الشعارات والتطريز</h4>
                    <p className="text-green-700 text-sm">تطريز أو طباعة شعار الشركة بجودة عالية على الأزياء.</p>
                  </div>
                  
                  <div className="bg-purple-50 border-r-4 border-purple-500 p-4">
                    <h4 className="font-semibold text-purple-800 mb-2">التصاميم الحصرية</h4>
                    <p className="text-purple-700 text-sm">إمكانية تطوير تصاميم حصرية بالتعاون مع فريقنا.</p>
                  </div>
                </div>
                <Button href="/ar/services/custom-design/" variant="primary" size="lg" className="mt-6">
                  اكتشف خدمات التصميم المخصص
                </Button>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="text-center bg-primary-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">ارتقِ بمستوى أزياء الطيران في شركتك</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              استثمر في أزياء طيران احترافية تعزز من صورة علامتك التجارية وتضمن راحة وأمان فريقك.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/ar/quote" variant="primary" size="lg">
                اطلب عرض سعر مخصص لشركتك
              </Button>
              <Button href="/ar/contact" variant="outline" size="lg">
                تواصل مع فريقنا المختص
              </Button>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}