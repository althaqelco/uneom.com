'use client';

import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ProductCard from '@/components/ui/ProductCard';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';
import IconsComponent from '@/components/ui/Icons';

export const dynamic = 'force-static';

const relatedProducts = [
  {
    id: 'executive-suits-ar',
    name: 'البدل التنفيذية الفاخرة',
    image: '/images/products/corporate/executive-suit-featured.jpg', // Placeholder
    price: 'اطلب عرض سعر',
    href: '/ar/shop/corporate/executive-suits/',
    category: 'بدل تنفيذية',
  },
  {
    id: 'casual-polo-ar',
    name: 'قمصان بولو مريحة للشركات',
    image: '/images/products/corporate/polo-shirt-featured.jpg', // Placeholder
    price: 'اطلب عرض سعر',
    href: '/ar/shop/corporate/casual-polo/',
    category: 'قمصان بولو',
  },
];

export default function BusinessShirtsPageAr() {
  return (
    <div dir="rtl" className="font-arabic">
      <EnhancedSEO2025
        title="قمصان العمل الرسمية | قمصان رجالية ونسائية أنيقة للشركات | يونيوم"
        description="مجموعة متنوعة من قمصان العمل الرسمية للرجال والنساء في المملكة العربية السعودية. أقمشة قطنية فاخرة، تصاميم عصرية، وخيارات تخصيص لتعزيز هوية شركتك."
        canonicalUrl="https://uneom.com/ar/shop/corporate/business-shirts/"
        locale="ar"
        image="/images/products/corporate/business-shirt-main.jpg" 
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-sky-700 to-blue-600 text-white py-20">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/products/corporate/business-shirts-hero-bg.jpg" // Placeholder
            alt="خلفية قمصان عمل رسمية"
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
              { label: 'أزياء الشركات', href: '/ar/shop/corporate' },
              { label: 'قمصان العمل الرسمية', href: '/ar/shop/corporate/business-shirts' },
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">قمصان العمل الرسمية الأنيقة</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl">
              تشكيلة واسعة من قمصان العمل الرسمية للرجال والنساء، مصممة لتوفير مظهر احترافي وراحة تدوم طوال اليوم. أجود أنواع الأقمشة القطنية والخلطات المتميزة، مع خيارات تخصيص متعددة.
            </p>
            <Button 
              href="/ar/quote?product=business-shirts"
              variant="secondary" 
              size="lg"
              className="bg-white text-sky-700 hover:bg-gray-100"
            >
              اطلب عرض سعر للقمصان الرسمية
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
                  src="/images/products/corporate/business-shirt-main.jpg" 
                  alt="قميص عمل رسمي أبيض من يونيوم"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-2 mt-4">
                {['/images/products/corporate/shirt-thumb1.jpg', 
                  '/images/products/corporate/shirt-thumb2.jpg', 
                  '/images/products/corporate/shirt-thumb3.jpg', 
                  '/images/products/corporate/shirt-thumb4.jpg'].map((thumb, idx) => (
                  <div key={idx} className="aspect-w-1 aspect-h-1 rounded overflow-hidden border border-gray-200">
                    <Image src={thumb} alt={`قميص عمل - صورة مصغرة ${idx+1}`} fill className="object-cover hover:opacity-75 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div>
              <SectionHeading subtitle="أساس المظهر الاحترافي">
                قمصان عمل تجمع بين الأناقة والراحة
              </SectionHeading>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                يعتبر قميص العمل الرسمي حجر الزاوية في أي زي مهني ناجح. نقدم في يونيوم مجموعة متنوعة من القمصان المصممة لتلبية احتياجات بيئة العمل الحديثة، مع التركيز على الجودة، الراحة، والمظهر الأنيق الذي يعزز من ثقة موظفيك.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-primary-700">أنواع القمصان المتوفرة:</h3>
              <ul className="list-disc pr-5 space-y-2 text-gray-600 mb-6">
                <li>قمصان قطنية 100% (قطن مصري، قطن بيما، قطن أوكسفورد).</li>
                <li>قمصان من خلطات القطن والبوليستر لسهولة العناية ومقاومة التجاعيد.</li>
                <li>قصات متنوعة (كلاسيك فيت، سليم فيت، مودرن فيت).</li>
                <li>قمصان بأكمام طويلة وأكمام قصيرة.</li>
                <li>خيارات ياقات وأساور متعددة (ياقة كلاسيكية، ياقة منتشرة، أساور فرنسية).</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-primary-700">المميزات الرئيسية:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <IconsComponent name="check" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">أقمشة عالية الجودة توفر تهوية ممتازة وراحة طوال اليوم.</p>
                </div>
                <div className="flex items-start">
                  <IconsComponent name="check" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">مقاومة للتجاعيد وسهولة في الكي والعناية.</p>
                </div>
                <div className="flex items-start">
                  <IconsComponent name="check" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">تصاميم أنيقة تناسب مختلف بيئات العمل الرسمية.</p>
                </div>
                <div className="flex items-start">
                  <IconsComponent name="check" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">متانة عالية لتحمل الاستخدام اليومي والغسيل المتكرر.</p>
                </div>
                <div className="flex items-start">
                  <IconsComponent name="check" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">مجموعة واسعة من الألوان والنقشات (سادة، مقلم، مربعات).</p>
                </div>
                <div className="flex items-start">
                  <IconsComponent name="check" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">إمكانية تطريز شعار الشركة أو الأحرف الأولى بدقة.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Button href="/ar/quote?product=business-shirts" variant="primary" size="lg">
                  اطلب عرض سعر الآن
                </Button>
                <Button href="/ar/contact" variant="outline" size="lg">
                  تحدث إلى خبير أقمشة
                </Button>
              </div>
            </div>
          </div>

          {/* Detailed Description / Tabs Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center text-primary-800">الجودة في كل تفصيل</h2>
            <div className="bg-gray-50 p-8 rounded-lg shadow">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-secondary-700">اختيار الأقمشة:</h3>
                  <p className="text-gray-600 mb-4">
                    نولي اهتماماً خاصاً لاختيار الأقمشة لضمان أفضل تجربة لعملائنا:
                  </p>
                  <ul className="list-disc pr-5 space-y-1 text-gray-600">
                    <li><strong>القطن الفاخر:</strong> مثل القطن المصري طويل التيلة لنعومة فائقة ومظهر فاخر.</li>
                    <li><strong>قطن أوكسفورد:</strong> لمتانة ومظهر كلاسيكي مناسب لبيئة العمل.</li>
                    <li><strong>خلطات القطن والبوليستر:</strong> لتوازن مثالي بين الراحة وسهولة العناية ومقاومة التجاعيد.</li>
                    <li><strong>أقمشة معالجة:</strong> بتقنيات Non-Iron أو Easy-Care لتقليل الحاجة للكي.</li>
                    <li><strong>أقمشة قابلة للتنفس:</strong> لراحة مثالية في المناخات الحارة.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-secondary-700">التصميم والتخصيص:</h3>
                  <p className="text-gray-600 mb-4">
                    نقدم خيارات تخصيص متنوعة لتلبية احتياجات شركتك الفريدة:
                  </p>
                  <ul className="list-disc pr-5 space-y-1 text-gray-600">
                    <li>اختيار نوع الياقة (كلاسيكية، منتشرة، بأزرار، ماندارين).</li>
                    <li>اختيار نوع الأساور (عادية، فرنسية مزدوجة).</li>
                    <li>إضافة جيب أو إزالته حسب الرغبة.</li>
                    <li>تطريز شعار الشركة على الصدر، الياقة، أو الأساور.</li>
                    <li>اختيار ألوان الخيوط والأزرار لتتناسب مع هوية العلامة التجارية.</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button href="/ar/services/custom-design" variant="outline" size="md">
                  تعرف على خيارات التخصيص
                </Button>
              </div>
            </div>
          </section>
          
          {/* Related Products Section */}
          <section className="mb-16">
            <SectionHeading subtitle="منتجات مكملة" centered>
              استكمل مظهر فريقك الاحترافي
            </SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} showAddToQuote={true} />
              ))}
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="text-center bg-sky-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4 text-sky-800">هل تبحث عن قمصان عمل تعكس احترافية شركتك؟</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              تواصل معنا اليوم لمناقشة احتياجاتك من قمصان العمل الرسمية، ودعنا نساعدك في اختيار أو تصميم القمصان المثالية التي تليق بفريقك وتعزز من صورة علامتك التجارية.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/ar/quote?product=business-shirts" variant="primary" size="lg" className="bg-sky-700 hover:bg-sky-800">
                اطلب عرض سعر للقمصان الرسمية
              </Button>
              <Button href="/ar/contact" variant="outline" size="lg" className="border-sky-700 text-sky-700 hover:bg-sky-700 hover:text-white">
                اتصل بنا للاستشارة
              </Button>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}