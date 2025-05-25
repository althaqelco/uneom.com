'use client';

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
    category: 'طيارين',
  },
  {
    id: 'flight-attendant-dress-ar',
    name: 'زي طاقم الضيافة الجوية الأنيق',
    image: '/images/products/aviation/airline-2.jpg', // Placeholder
    price: 'اطلب عرض سعر',
    href: '/ar/shop/aviation-uniforms/flight-attendant-dress/',
    category: 'طاقم الضيافة',
  },
];

export default function GroundCrewUniformPageAr() {
  return (
    <div dir="rtl" className="font-arabic">
      <EnhancedSEO2025
        title="زي الطاقم الأرضي | ملابس عمل متينة وعالية الوضوح لخدمات المطارات | يونيوم"
        description="اكتشف مجموعتنا من زي الطاقم الأرضي المتين والعملي في المملكة العربية السعودية. ملابس عالية الوضوح، مقاومة للعوامل الجوية، ومصممة لسلامة وكفاءة موظفي الخدمات الأرضية."
        canonicalUrl="https://uneom.com/ar/shop/aviation-uniforms/ground-crew-uniform/"
        locale="ar"
        image="/images/products/aviation/ground-crew-uniform-main.jpg" // Main product image
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-yellow-500 text-white py-20">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/products/aviation/ground-crew-hero-bg.jpg" // Placeholder
            alt="خلفية زي الطاقم الأرضي"
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
              { label: 'زي الطاقم الأرضي', href: '/ar/shop/aviation-uniforms/ground-crew-uniform' },
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">زي الطاقم الأرضي المتين والعملي</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl">
              ملابس عمل مصممة خصيصاً لفرق الخدمات الأرضية في المطارات. تجمع بين المتانة العالية، وميزات السلامة، والراحة لضمان أداء فعال في جميع الظروف الجوية والتشغيلية.
            </p>
            <Button 
              href="/ar/quote?product=ground-crew-uniform"
              variant="secondary" 
              size="lg"
              className="bg-white text-orange-700 hover:bg-gray-100"
            >
              اطلب عرض سعر لزي الطاقم الأرضي
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
                  src="/images/products/aviation/ground-crew-uniform-main.jpg" // Main Product Image
                  alt="زي طاقم أرضي متين من يونيوم"
                  fill
                  className="object-cover"
                />
              </div>
               {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-2 mt-4">
                {['/images/products/aviation/ground-crew-thumb1.jpg', 
                  '/images/products/aviation/ground-crew-thumb2.jpg', 
                  '/images/products/aviation/ground-crew-thumb3.jpg', 
                  '/images/products/aviation/ground-crew-thumb4.jpg'].map((thumb, idx) => (
                  <div key={idx} className="aspect-w-1 aspect-h-1 rounded overflow-hidden border border-gray-200">
                    <Image src={thumb} alt={`صورة مصغرة لزي الطاقم الأرضي ${idx+1}`} fill className="object-cover hover:opacity-75 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div>
              <SectionHeading subtitle="السلامة والكفاءة على الأرض">
                زي مصمم لمتطلبات العمل الأرضي
              </SectionHeading>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                يلعب الطاقم الأرضي دوراً حيوياً في ضمان سلاسة عمليات الطيران. زي الطاقم الأرضي من يونيوم مصمم خصيصاً لتوفير الحماية والراحة والرؤية العالية في بيئة المطار المزدحمة والمتغيرة.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-primary-700">مكونات الزي الأساسية:</h3>
              <ul className="list-disc pr-5 space-y-2 text-gray-600 mb-6">
                <li>سترات عمل عالية الوضوح (Hi-Vis) مع شرائط عاكسة.</li>
                <li>بناطيل عمل متينة ومقاومة للتآكل مع جيوب متعددة.</li>
                <li>قمصان بولو أو قمصان عمل مريحة.</li>
                <li>أغطية رأس واقية (قبعات، خوذات حسب الحاجة).</li>
                <li>ملابس واقية من العوامل الجوية (سترات مطر، ملابس شتوية).</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-primary-700">المميزات الرئيسية:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <IconsComponent name="check" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">أقمشة متينة مقاومة للتمزق والاهتراء والزيوت.</p>
                </div>
                <div className="flex items-start">
                  <IconsComponent name="check" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">مطابقة لمعايير السلامة الدولية للملابس عالية الوضوح.</p>
                </div>
                <div className="flex items-start">
                  <IconsComponent name="check" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">تصاميم مريحة تسمح بحرية الحركة أثناء العمل البدني.</p>
                </div>
                <div className="flex items-start">
                  <IconsComponent name="check" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">مقاومة للعوامل الجوية (الماء، الرياح، البرودة).</p>
                </div>
                <div className="flex items-start">
                  <IconsComponent name="check" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">جيوب عملية متعددة لحمل الأدوات وأجهزة الاتصال.</p>
                </div>
                <div className="flex items-start">
                  <IconsComponent name="check" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">خيارات تخصيص مع شعار شركة الطيران أو مزود الخدمة.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Button href="/ar/quote?product=ground-crew-uniform" variant="primary" size="lg">
                  اطلب عرض سعر الآن
                </Button>
                <Button href="/ar/contact" variant="outline" size="lg">
                  استفسر عن المواصفات
                </Button>
              </div>
            </div>
          </div>

          {/* Detailed Description / Tabs Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center text-primary-800">مصمم للأداء في أصعب الظروف</h2>
            <div className="bg-gray-50 p-8 rounded-lg shadow">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-secondary-700">المتانة والمقاومة:</h3>
                  <p className="text-gray-600 mb-4">
                    يتم تصنيع زي الطاقم الأرضي من أقمشة مختارة بعناية لتحمل ظروف العمل القاسية في المطارات:
                  </p>
                  <ul className="list-disc pr-5 space-y-1 text-gray-600">
                    <li>أقمشة كانفاس أو دينيم معززة لمقاومة التمزق.</li>
                    <li>معالجات خاصة لمقاومة الماء والزيوت والمواد الكيميائية.</li>
                    <li>خياطة مزدوجة ومعززة في مناطق الضغط العالي.</li>
                    <li>ألوان ثابتة لا تبهت مع الغسيل المتكرر والتعرض للشمس.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-secondary-700">السلامة والرؤية:</h3>
                  <p className="text-gray-600 mb-4">
                    تعتبر سلامة الطاقم الأرضي أولوية قصوى في تصميم أزيائنا:
                  </p>
                  <ul className="list-disc pr-5 space-y-1 text-gray-600">
                    <li>ألوان فلورية زاهية (برتقالي، أصفر، أخضر ليموني) للرؤية النهارية.</li>
                    <li>شرائط عاكسة عالية الجودة (3M Scotchlite™ أو ما يعادلها) للرؤية الليلية.</li>
                    <li>تصاميم مطابقة لمعايير EN ISO 20471 للملابس عالية الوضوح.</li>
                    <li>إمكانية إضافة ميزات حماية إضافية مثل مقاومة اللهب أو الحماية من الكهرباء الساكنة.</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button href="/ar/services/technical-finishes" variant="outline" size="md">
                  تعرف على المعالجات التقنية للأقمشة
                </Button>
              </div>
            </div>
          </section>
          
          {/* Related Products Section */}
          <section className="mb-16">
            <SectionHeading subtitle="منتجات ذات صلة" centered>
              استكمل تجهيزات فريق الطيران الخاص بك
            </SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} showAddToQuote={true} />
              ))}
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="text-center bg-yellow-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4 text-yellow-800">هل تبحث عن زي طاقم أرضي يجمع بين الأمان والكفاءة؟</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              تواصل معنا اليوم لمناقشة متطلباتك الخاصة بزي الطاقم الأرضي، ودعنا نقدم لك حلولاً مصممة خصيصاً لتعزيز سلامة وإنتاجية فريقك.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/ar/quote?product=ground-crew-uniform" variant="primary" size="lg" className="bg-orange-600 hover:bg-orange-700">
                اطلب عرض سعر لزي الطاقم الأرضي
              </Button>
              <Button href="/ar/contact" variant="outline" size="lg" className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
                اتصل بنا للاستشارة الفنية
              </Button>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}