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
    id: 'business-shirts-ar',
    name: 'قمصان العمل الرسمية الأنيقة',
    image: '/images/products/corporate/business-shirt-featured.jpg', // Placeholder
    price: 'اطلب عرض سعر',
    href: '/ar/shop/corporate/business-shirts/',
    category: 'قمصان رسمية',
  },
];

export default function ExecutiveOfficeAttirePageAr() {
  return (
    <div dir="rtl" className="font-arabic">
      <EnhancedSEO2025
        title="ملابس المكتب التنفيذية | أزياء مكتبية راقية للرجال والنساء | يونيوم"
        description="مجموعة أنيقة من ملابس المكتب التنفيذية للرجال والنساء في المملكة العربية السعودية. بدل، فساتين، تنانير، وقمصان مصممة لبيئة العمل الاحترافية."
        canonicalUrl="https://uneom.com/ar/shop/corporate/executive-office-attire/"
        locale="ar"
        image="/images/products/corporate/office-attire-main.jpg" 
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-700 to-purple-600 text-white py-20">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/products/corporate/office-attire-hero-bg.jpg" // Placeholder
            alt="خلفية ملابس مكتب تنفيذية"
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
              { label: 'ملابس المكتب التنفيذية', href: '/ar/shop/corporate/executive-office-attire' },
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">ملابس المكتب التنفيذية الراقية</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl">
              تشكيلة متكاملة من ملابس المكتب التنفيذية التي تجمع بين الأناقة العصرية والراحة العملية. حلول مصممة خصيصاً للمديرين التنفيذيين والمهنيين في بيئة الشركات.
            </p>
            <Button 
              href="/ar/quote?product=executive-office-attire"
              variant="secondary" 
              size="lg"
              className="bg-white text-indigo-700 hover:bg-gray-100"
            >
              اطلب عرض سعر لملابس المكتب
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
                  src="/images/products/corporate/office-attire-main.jpg" 
                  alt="سيدة أعمال ترتدي ملابس مكتب تنفيذية من يونيوم"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-2 mt-4">
                {['/images/products/corporate/office-thumb1.jpg', 
                  '/images/products/corporate/office-thumb2.jpg', 
                  '/images/products/corporate/office-thumb3.jpg', 
                  '/images/products/corporate/office-thumb4.jpg'].map((thumb, idx) => (
                  <div key={idx} className="aspect-w-1 aspect-h-1 rounded overflow-hidden border border-gray-200">
                    <Image src={thumb} alt={`ملابس مكتب - صورة مصغرة ${idx+1}`} fill className="object-cover hover:opacity-75 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div>
              <SectionHeading subtitle="أناقة تعكس مكانتك المهنية">
                ملابس مكتبية تجمع بين الرقي والعملية
              </SectionHeading>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                في بيئة العمل التنفيذية، يعتبر المظهر الشخصي جزءاً لا يتجزأ من الهوية المهنية والقيادية. نقدم في يونيوم مجموعة مختارة من ملابس المكتب التنفيذية التي تضمن لك مظهراً أنيقاً ومريحاً يعزز من ثقتك وحضورك.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-primary-700">تشكيلتنا تشمل:</h3>
              <ul className="list-disc pr-5 space-y-2 text-gray-600 mb-6">
                <li>بدل نسائية ورجالية بقصات عصرية ومريحة.</li>
                <li>فساتين مكتبية أنيقة ومحتشمة.</li>
                <li>تنانير وبناطيل رسمية بقصات متنوعة.</li>
                <li>بليزرات وجاكيتات يمكن تنسيقها بسهولة.</li>
                <li>قمصان وبلوزات من أجود الخامات.</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-primary-700">المميزات الرئيسية:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <IconsComponent name="check" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">أقمشة فاخرة ومريحة (صوف، حرير، قطن، خلطات تقنية).</p>
                </div>
                <div className="flex items-start">
                  <IconsComponent name="check" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">تصاميم عصرية وكلاسيكية تناسب مختلف الأذواق والمناصب.</p>
                </div>
                <div className="flex items-start">
                  <IconsComponent name="check" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">قصات مدروسة تضمن حرية الحركة والملاءمة المثالية.</p>
                </div>
                <div className="flex items-start">
                  <IconsComponent name="check" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">مقاومة للتجاعيد وسهولة في العناية اليومية.</p>
                </div>
                <div className="flex items-start">
                  <IconsComponent name="check" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">ألوان متنوعة وتفاصيل دقيقة تعكس الاهتمام بالجودة.</p>
                </div>
                <div className="flex items-start">
                  <IconsComponent name="check" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">إمكانية التنسيق بين القطع المختلفة لإنشاء إطلالات متنوعة.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Button href="/ar/quote?product=executive-office-attire" variant="primary" size="lg">
                  اطلب عرض سعر الآن
                </Button>
                <Button href="/ar/contact" variant="outline" size="lg">
                  استشر مصمم أزياء
                </Button>
              </div>
            </div>
          </div>

          {/* Detailed Description / Tabs Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center text-primary-800">الخيار الأمثل للمهنيين الطموحين</h2>
            <div className="bg-gray-50 p-8 rounded-lg shadow">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-secondary-700">الأناقة والاحترافية:</h3>
                  <p className="text-gray-600 mb-4">
                    تم تصميم ملابس المكتب التنفيذية لدينا لتعزيز صورتك المهنية:
                  </p>
                  <ul className="list-disc pr-5 space-y-1 text-gray-600">
                    <li>قصات تعزز الثقة وتبرز الحضور القيادي.</li>
                    <li>ألوان محايدة وكلاسيكية مع إمكانية إضافة لمسات لونية عصرية.</li>
                    <li>تفاصيل دقيقة مثل الخياطة المتباينة أو الأزرار المميزة.</li>
                    <li>تصاميم تحافظ على مظهر أنيق طوال يوم العمل.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-secondary-700">الراحة والعملية:</h3>
                  <p className="text-gray-600 mb-4">
                    نؤمن بأن الراحة هي مفتاح الأداء المتميز:
                  </p>
                  <ul className="list-disc pr-5 space-y-1 text-gray-600">
                    <li>أقمشة قابلة للتمدد تسمح بحرية الحركة.</li>
                    <li>بطانات ناعمة ومريحة.</li>
                    <li>تصاميم عملية مع جيوب مخفية أو وظيفية.</li>
                    <li>سهولة في العناية ومقاومة للبقع والتجاعيد.</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button href="/ar/services/custom-design" variant="outline" size="md">
                  اكتشف خدمة التصميم حسب الطلب
                </Button>
              </div>
            </div>
          </section>
          
          {/* Related Products Section */}
          <section className="mb-16">
            <SectionHeading subtitle="منتجات مكملة" centered>
              استكمل إطلالتك التنفيذية
            </SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} showAddToQuote={true} />
              ))}
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="text-center bg-indigo-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4 text-indigo-800">هل أنت مستعد لملابس مكتبية تعكس تميزك؟</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              تواصل معنا اليوم لاستكشاف مجموعتنا من ملابس المكتب التنفيذية، ودعنا نساعدك في اختيار القطع التي تبرز احترافيتك وأناقتك في بيئة العمل.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/ar/quote?product=executive-office-attire" variant="primary" size="lg" className="bg-indigo-700 hover:bg-indigo-800">
                اطلب عرض سعر لملابس المكتب
              </Button>
              <Button href="/ar/contact" variant="outline" size="lg" className="border-indigo-700 text-indigo-700 hover:bg-indigo-700 hover:text-white">
                اتصل بنا للاستشارة الشخصية
              </Button>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}