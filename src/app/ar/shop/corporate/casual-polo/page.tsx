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
    id: 'business-shirts-ar',
    name: 'قمصان العمل الرسمية الأنيقة',
    image: '/images/products/corporate/business-shirt-featured.jpg', // Placeholder
    price: 'اطلب عرض سعر',
    href: '/ar/shop/corporate/business-shirts/',
    category: 'قمصان رسمية',
  },
  {
    id: 'executive-office-attire-ar',
    name: 'ملابس المكتب التنفيذية',
    image: '/images/products/corporate/office-attire-featured.jpg', // Placeholder
    price: 'اطلب عرض سعر',
    href: '/ar/shop/corporate/executive-office-attire/',
    category: 'ملابس مكتبية',
  },
];

export default function CasualPoloPageAr() {
  return (
    <div dir="rtl" className="font-arabic">
      <EnhancedSEO2025
        title="قمصان بولو للشركات | قمصان بولو مريحة وأنيقة بشعار شركتك | يونيوم"
        description="مجموعة متنوعة من قمصان بولو المريحة والأنيقة للشركات والمؤسسات في المملكة العربية السعودية. خيارات تخصيص واسعة لتضمين شعار شركتك وألوان هويتك."
        canonicalUrl="https://uneom.com/ar/shop/corporate/casual-polo/"
        locale="ar"
        image="/images/products/corporate/polo-shirt-main.jpg" 
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-600 to-green-500 text-white py-20">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/products/corporate/polo-shirts-hero-bg.jpg" // Placeholder
            alt="خلفية قمصان بولو للشركات"
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
              { label: 'قمصان بولو كاجوال', href: '/ar/shop/corporate/casual-polo' },
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">قمصان بولو مريحة وأنيقة للشركات</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl">
              اكتشف مجموعتنا من قمصان البولو عالية الجودة، الخيار المثالي للملابس الكاجوال الأنيقة في بيئة العمل، الفعاليات المؤسسية، أو كجزء من الهدايا الترويجية.
            </p>
            <Button 
              href="/ar/quote?product=casual-polo"
              variant="secondary" 
              size="lg"
              className="bg-white text-teal-700 hover:bg-gray-100"
            >
              اطلب عرض سعر لقمصان البولو
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
                  src="/images/products/corporate/polo-shirt-main.jpg" 
                  alt="قميص بولو أزرق بشعار شركة من يونيوم"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-2 mt-4">
                {['/images/products/corporate/polo-thumb1.jpg', 
                  '/images/products/corporate/polo-thumb2.jpg', 
                  '/images/products/corporate/polo-thumb3.jpg', 
                  '/images/products/corporate/polo-thumb4.jpg'].map((thumb, idx) => (
                  <div key={idx} className="aspect-w-1 aspect-h-1 rounded overflow-hidden border border-gray-200">
                    <Image src={thumb} alt={`قميص بولو - صورة مصغرة ${idx+1}`} fill className="object-cover hover:opacity-75 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div>
              <SectionHeading subtitle="أناقة عملية لكل يوم">
                قمصان بولو تعزز هوية فريقك
              </SectionHeading>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                تعتبر قمصان البولو خياراً مثالياً للشركات التي تبحث عن زي موحد يجمع بين المظهر الاحترافي والراحة اليومية. نقدم في يونيوم تشكيلة واسعة من قمصان البولو المصنوعة من أجود الخامات، مع خيارات تخصيص لتعزيز علامتك التجارية.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-primary-700">لماذا تختار قمصان البولو من يونيوم؟</h3>
              <ul className="list-disc pr-5 space-y-2 text-gray-600 mb-6">
                <li>أقمشة عالية الجودة (قطن بيكيه، خلطات قطن وبوليستر، أقمشة تقنية).</li>
                <li>تصاميم مريحة تسمح بحرية الحركة ومناسبة للاستخدام اليومي.</li>
                <li>مجموعة واسعة من الألوان لتناسب هوية شركتك.</li>
                <li>خيارات تطريز أو طباعة شعار الشركة بدقة عالية.</li>
                <li>متانة عالية لتحمل الغسيل المتكرر والاستخدام المكثف.</li>
                <li>مثالية للموظفين، الفعاليات، الفرق الرياضية، والهدايا الترويجية.</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-primary-700">المميزات الرئيسية:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <IconsComponent name="check" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">أقمشة قابلة للتنفس توفر راحة طوال اليوم.</p>
                </div>
                <div className="flex items-start">
                  <IconsComponent name="check" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">مقاومة للانكماش وبهتان الألوان.</p>
                </div>
                <div className="flex items-start">
                  <IconsComponent name="check" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">قصات عصرية تناسب الرجال والنساء.</p>
                </div>
                <div className="flex items-start">
                  <IconsComponent name="check" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">ياقات وأساور محبوكة لمزيد من المتانة والأناقة.</p>
                </div>
                <div className="flex items-start">
                  <IconsComponent name="check" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">إمكانية إضافة تفاصيل مخصصة مثل أشرطة ملونة أو أزرار خاصة.</p>
                </div>
                <div className="flex items-start">
                  <IconsComponent name="check" className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">متوفرة بكميات كبيرة للشركات والمؤسسات.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Button href="/ar/quote?product=casual-polo" variant="primary" size="lg">
                  اطلب عرض سعر الآن
                </Button>
                <Button href="/ar/contact" variant="outline" size="lg">
                  تحدث إلى متخصص
                </Button>
              </div>
            </div>
          </div>

          {/* Detailed Description / Tabs Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center text-primary-800">جودة وراحة تعزز أداء فريقك</h2>
            <div className="bg-gray-50 p-8 rounded-lg shadow">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-secondary-700">أنواع الأقمشة:</h3>
                  <p className="text-gray-600 mb-4">
                    نقدم مجموعة متنوعة من الأقمشة لتلبية مختلف الاحتياجات والميزانيات:
                  </p>
                  <ul className="list-disc pr-5 space-y-1 text-gray-600">
                    <li><strong>قطن بيكيه (Piqué Cotton):</strong> المظهر الكلاسيكي لقمصان البولو، يوفر تهوية جيدة وملمساً مميزاً.</li>
                    <li><strong>قطن جيرسي (Jersey Cotton):</strong> ناعم ومريح، مثالي للاستخدام اليومي.</li>
                    <li><strong>خلطات القطن والبوليستر:</strong> تجمع بين نعومة القطن ومتانة البوليستر ومقاومته للتجاعيد.</li>
                    <li><strong>أقمشة تقنية (Performance Fabrics):</strong> طاردة للرطوبة، سريعة الجفاف، ومناسبة للأنشطة الخارجية أو البيئات الحارة.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-secondary-700">التخصيص والعلامة التجارية:</h3>
                  <p className="text-gray-600 mb-4">
                    اجعل قمصان البولو جزءاً من هوية علامتك التجارية:
                  </p>
                  <ul className="list-disc pr-5 space-y-1 text-gray-600">
                    <li>تطريز شعار الشركة بدقة عالية على الصدر، الكم، أو الياقة.</li>
                    <li>طباعة حريرية أو رقمية للشعارات والتصاميم المعقدة.</li>
                    <li>اختيار ألوان القمصان والأزرار والخيوط لتتناسب مع ألوان هويتك.</li>
                    <li>إضافة بطاقات عنق مخصصة أو ملصقات جانبية.</li>
                    <li>تصاميم خاصة للرجال والنساء والأطفال.</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button href="/ar/services/custom-design" variant="outline" size="md">
                  اكتشف خيارات التخصيص الكاملة
                </Button>
              </div>
            </div>
          </section>
          
          {/* Related Products Section */}
          <section className="mb-16">
            <SectionHeading subtitle="منتجات ذات صلة" centered>
              استكمل مظهر فريقك الموحد
            </SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} showAddToQuote={true} />
              ))}
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="text-center bg-teal-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4 text-teal-800">هل تبحث عن قمصان بولو عالية الجودة لشركتك؟</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              تواصل معنا اليوم لمناقشة احتياجاتك من قمصان البولو، ودعنا نساعدك في اختيار أو تصميم القمصان المثالية التي تعزز من صورة فريقك وراحتهم.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/ar/quote?product=casual-polo" variant="primary" size="lg" className="bg-teal-700 hover:bg-teal-800">
                اطلب عرض سعر لقمصان البولو
              </Button>
              <Button href="/ar/contact" variant="outline" size="lg" className="border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white">
                اتصل بنا للاستشارة
              </Button>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}