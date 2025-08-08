'use client';

import React from 'react';
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
    id: 'business-shirts-ar',
    name: 'قمصان العمل الرسمية الأنيقة',
    image: '/images/products/corporate/business-shirt-featured.jpg', // Placeholder
    price: 'اطلب عرض سعر',
    href: '/ar/shop/corporate/business-shirts/',
    category: 'قمصان رسمية'},
  {
    id: 'executive-office-attire-ar',
    name: 'ملابس المكتب التنفيذية',
    image: '/images/products/corporate/office-attire-featured.jpg', // Placeholder
    price: 'اطلب عرض سعر',
    href: '/ar/shop/corporate/executive-office-attire/',
    category: 'ملابس مكتبية'},
];

export default function ExecutiveSuitsPageAr() {
  return (
    <div dir="rtl" className="font-arabic">
      <EnhancedSEO2025
        title="البدل التنفيذية الفاخرة | بدل رجالية ونسائية للشركات | يونيوم"
        description="اكتشف مجموعتنا الراقية من البدل التنفيذية للرجال والنساء في المملكة العربية السعودية. تصاميم عصرية، أقمشة فاخرة، وتفصيل دقيق يعكس الاحترافية والنجاح."
        canonicalUrl="https://uneom.com/ar/shop/corporate/executive-suits/"
        locale="ar"
        image="/images/products/corporate/executive-suit-main.jpg" 
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-800 to-gray-700 text-white py-20">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/products/corporate/executive-suits-hero-bg.jpg" // Placeholder
            alt="خلفية بدل تنفيذية فاخرة"
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
              { label: 'البدل التنفيذية', href: '/ar/shop/corporate/executive-suits' },
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">البدل التنفيذية الفاخرة</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl">
              مجموعة حصرية من البدل التنفيذية للرجال والنساء، مصممة لتعكس القيادة والاحترافية. أجود أنواع الأقمشة، تفصيل دقيق، وتصاميم عصرية وكلاسيكية تناسب بيئة العمل الراقية.
            </p>
            <Button 
              href="/ar/quote?product=executive-suits"
              variant="secondary" 
              size="lg"
              className="bg-primary-500 hover:bg-primary-600"
            >
              اطلب عرض سعر للبدل التنفيذية
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
                  src="/images/products/corporate/executive-suit-main.jpg" 
                  alt="بدلة تنفيذية رجالية فاخرة من يونيوم"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-2 mt-4">
                {['/images/products/corporate/suit-thumb1.jpg', 
                  '/images/products/corporate/suit-thumb2.jpg', 
                  '/images/products/corporate/suit-thumb3.jpg', 
                  '/images/products/corporate/suit-thumb4.jpg'].map((thumb, idx) => (
                  <div key={idx} className="aspect-w-1 aspect-h-1 rounded overflow-hidden border border-gray-200">
                    <Image src={thumb} alt={`بدلة تنفيذية - صورة مصغرة ${idx+1}`} fill className="object-cover hover:opacity-75 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div>
              <SectionHeading subtitle="رمز القيادة والنجاح">
                بدل تنفيذية تعكس احترافيتك
              </SectionHeading>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                البدلة التنفيذية هي أكثر من مجرد قطعة ملابس؛ إنها تعبير عن الثقة والاحترافية والاهتمام بالتفاصيل. نقدم في يونيوم مجموعة فاخرة من البدل التنفيذية المصممة خصيصاً لتلبية احتياجات القادة والمديرين التنفيذيين في بيئة الأعمال الحديثة.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-primary-700">أنواع البدل المتوفرة:</h3>
              <ul className="list-disc pr-5 space-y-2 text-gray-600 mb-6">
                <li>بدل رجالية كلاسيكية بقصات عصرية (Slim Fit, Modern Fit, Classic Fit).</li>
                <li>بدل نسائية أنيقة (بدل بنطلون، بدل تنورة، بليزرات منفصلة).</li>
                <li>بدل بثلاث قطع (جاكيت، بنطلون/تنورة، وفيست).</li>
                <li>بدل مصنوعة من أقمشة فاخرة مثل الصوف الإيطالي والخلطات المتميزة.</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-primary-700">المميزات الرئيسية:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <IconsComponent name="check" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">أقمشة فاخرة توفر راحة استثنائية ومظهراً أنيقاً.</p>
                </div>
                <div className="flex items-start">
                  <IconsComponent name="check" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">تفصيل دقيق وخياطة متقنة تضمن ملاءمة مثالية.</p>
                </div>
                <div className="flex items-start">
                  <IconsComponent name="check" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">تصاميم عصرية وكلاسيكية تناسب مختلف الأذواق والمناسبات.</p>
                </div>
                <div className="flex items-start">
                  <IconsComponent name="check" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">مقاومة للتجاعيد وسهولة في العناية للمحافظة على المظهر.</p>
                </div>
                <div className="flex items-start">
                  <IconsComponent name="check" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">خيارات تخصيص واسعة للألوان والبطانات والأزرار.</p>
                </div>
                <div className="flex items-start">
                  <IconsComponent name="check" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">إمكانية إضافة تطريز دقيق للشعار أو الأحرف الأولى.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Button href="/ar/quote?product=executive-suits" variant="primary" size="lg">
                  اطلب عرض سعر الآن
                </Button>
                <Button href="/ar/contact" variant="outline" size="lg">
                  تحدث إلى خبير تفصيل
                </Button>
              </div>
            </div>
          </div>

          {/* Detailed Description / Tabs Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center text-primary-800">أناقة لا تضاهى وجودة تدوم</h2>
            <div className="bg-gray-50 p-8 rounded-lg shadow">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-secondary-700">الأقمشة والتفصيل:</h3>
                  <p className="text-gray-600 mb-4">
                    نستخدم أجود أنواع الأقمشة العالمية ونعتمد على حرفيين مهرة لضمان بدلة تنفيذية تليق بمكانتك:
                  </p>
                  <ul className="list-disc pr-5 space-y-1 text-gray-600">
                    <li>صوف ميرينو فائق النعومة، كشمير، حرير، وخلطات فاخرة.</li>
                    <li>بطانات داخلية من الحرير أو الكوبرو لراحة إضافية.</li>
                    <li>أزرار من مواد طبيعية مثل القرن أو عرق اللؤلؤ.</li>
                    <li>تقنيات خياطة متقدمة مثل الخياطة نصف كانفاس أو كانفاس كامل.</li>
                    <li>إمكانية التفصيل حسب المقاس (Made-to-Measure) أو التفصيل الشخصي (Bespoke).</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-secondary-700">العناية بالبدلة:</h3>
                  <p className="text-gray-600 mb-4">
                    للحفاظ على بدلتك التنفيذية في أفضل حال لسنوات قادمة:
                  </p>
                  <ul className="list-disc pr-5 space-y-1 text-gray-600">
                    <li>التنظيف الجاف الاحترافي فقط عند الحاجة.</li>
                    <li>استخدام شماعات مناسبة للحفاظ على شكل الجاكيت.</li>
                    <li>تهوية البدلة بعد كل ارتداء.</li>
                    <li>تجنب الكي المباشر؛ استخدم قطعة قماش واقية.</li>
                    <li>تخزين البدلة في كيس ملابس جيد التهوية.</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button href="/ar/services/custom-design" variant="outline" size="md">
                  تعرف على خدمة التفصيل المخصص
                </Button>
              </div>
            </div>
          </section>
          
          {/* Related Products Section */}
          <section className="mb-16">
            <SectionHeading subtitle="منتجات مكملة" centered>
              استكمل مظهرك التنفيذي
            </SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} showAddToQuote={true} />
              ))}
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="text-center bg-slate-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-800">هل أنت مستعد لترك انطباع لا يُنسى؟</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              استثمر في بدلة تنفيذية من يونيوم تعكس طموحك ونجاحك. تواصل معنا اليوم لبدء تصميم بدلتك المثالية.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/ar/quote?product=executive-suits" variant="primary" size="lg" className="bg-slate-700 hover:bg-slate-800">
                اطلب عرض سعر للبدل التنفيذية
              </Button>
              <Button href="/ar/contact" variant="outline" size="lg" className="border-slate-700 text-slate-700 hover:bg-slate-700 hover:text-white">
                احجز موعد استشارة تفصيل
              </Button>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}