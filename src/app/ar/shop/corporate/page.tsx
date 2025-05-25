'use client';

import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ProductCard from '@/components/ui/ProductCard';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const dynamic = 'force-static';

const featuredCorporateUniforms = [
  {
    id: 'executive-suits-ar',
    name: 'البدل التنفيذية الفاخرة',
    image: '/images/products/corporate/executive-suit-featured.jpg', // Placeholder
    price: 'اطلب عرض سعر',
    href: '/ar/shop/corporate/executive-suits/',
    category: 'بدل تنفيذية',
    isNew: true,
  },
  {
    id: 'business-shirts-ar',
    name: 'قمصان العمل الرسمية الأنيقة',
    image: '/images/products/corporate/business-shirt-featured.jpg', // Placeholder
    price: 'اطلب عرض سعر',
    href: '/ar/shop/corporate/business-shirts/',
    category: 'قمصان رسمية',
    isFeatured: true,
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

export default function CorporateUniformsPageAr() {
  return (
    <div dir="rtl" className="font-arabic">
      <EnhancedSEO2025
        title="أزياء الشركات | ملابس رسمية وبدل تنفيذية وقمصان بولو | يونيوم"
        description="مجموعة متكاملة من أزياء الشركات والمؤسسات في المملكة العربية السعودية. بدل تنفيذية، قمصان عمل رسمية، قمصان بولو، وملابس مكتبية تعكس الاحترافية والهوية المؤسسية."
        canonicalUrl="https://uneom.com/ar/shop/corporate/"
        locale="ar"
        image="/images/industries/corporate/hero-corporate-uniforms.jpg" 
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-800 to-slate-700 text-white py-20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/industries/corporate/hero-corporate-uniforms.jpg" 
            alt="أزياء الشركات الاحترافية"
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
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">أزياء الشركات والمؤسسات</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl">
              مجموعة متكاملة من الملابس الرسمية والتنفيذية للشركات والمؤسسات. حلول مصممة لتعزيز الهوية المؤسسية، وترك انطباع احترافي، وضمان راحة الموظفين.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href="/ar/quote?category=corporate"
                variant="secondary" 
                size="lg"
                className="bg-primary-500 hover:bg-primary-600"
              >
                اطلب عرض سعر لمؤسستك
              </Button>
              <Button 
                href="#featured-corporate-uniforms"
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-slate-700"
              >
                استعرض مجموعة الشركات
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
                <SectionHeading subtitle="الهوية المؤسسية والاحترافية">
                  أزياء تعكس قيم شركتك
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  في عالم الأعمال التنافسي، يمثل الزي الموحد للموظفين عنصراً أساسياً في بناء صورة العلامة التجارية وتعزيز الثقة لدى العملاء والشركاء. نقدم حلولاً متكاملة لأزياء الشركات تجمع بين الأناقة والراحة والجودة العالية.
                </p>
                <p className="text-gray-600 mb-8">
                  سواء كنتم تبحثون عن بدل تنفيذية فاخرة، أو قمصان عمل رسمية، أو ملابس مكتبية مريحة، فإن مجموعتنا المتنوعة تلبي جميع احتياجاتكم لضمان ظهور فريقكم بأفضل مظهر احترافي.
                </p>
                <Button href="/ar/contact" variant="primary" size="lg">
                  استشر خبراء أزياء الشركات
                </Button>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/products/corporate/corporate-team-uniforms.jpg" // Placeholder
                  alt="فريق عمل يرتدي أزياء شركات من يونيوم"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Featured Uniforms Section */}
          <section id="featured-corporate-uniforms" className="mb-16">
            <SectionHeading subtitle="مجموعة أزياء الشركات" centered>
              حلول متنوعة لكل مستوى وظيفي واحتياج
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {featuredCorporateUniforms.map((uniform) => (
                <ProductCard key={uniform.id} product={uniform} showAddToQuote={true} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button href="/ar/industries/corporate" variant="primary" size="lg">
                اكتشف المزيد عن حلولنا لقطاع الشركات
              </Button>
            </div>
          </section>

          {/* Key Benefits Section */}
          <section className="mb-16 bg-gray-50 rounded-2xl p-8">
            <SectionHeading subtitle="فوائد أزياء الشركات من يونيوم" centered>
              لماذا تختار يونيوم لملابس موظفيك؟
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                   {/* Placeholder Icon */}
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a3.002 3.002 0 013.292-2.143A3.001 3.001 0 0112 15c1.105 0 2.07.612 2.596 1.5M12 12V9m0 3H9m3 0h3m-3-3V6m0 3H9m3 0h3m-3-3V3m0 3H9m3 0h3"/></svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">تعزيز الهوية المؤسسية</h3>
                <p className="text-gray-600 text-sm">أزياء موحدة تعكس قيم وهوية علامتك التجارية.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  {/* Placeholder Icon */}
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">مظهر احترافي</h3>
                <p className="text-gray-600 text-sm">ترك انطباع إيجابي لدى العملاء والشركاء.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                  {/* Placeholder Icon */}
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">راحة الموظفين</h3>
                <p className="text-gray-600 text-sm">أقمشة مريحة وتصاميم عملية لزيادة الإنتاجية.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  {/* Placeholder Icon */}
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">جودة ومتانة</h3>
                <p className="text-gray-600 text-sm">مواد عالية الجودة تضمن عمراً طويلاً للزي.</p>
              </div>
            </div>
          </section>

          {/* Customization Section */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/services/custom-design-corporate.jpg" // Placeholder
                  alt="تخصيص أزياء الشركات"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <SectionHeading subtitle="التصميم المخصص لشركتك">
                  أزياء فريدة تعبر عن تميزك
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  نؤمن بأن كل شركة لها هويتها الفريدة. لذلك، نقدم خدمات تصميم مخصصة لابتكار أزياء تعكس بدقة قيم ورؤية علامتك التجارية، مع مراعاة متطلبات العمل وطبيعة الأدوار المختلفة لموظفيك.
                </p>
                <ul className="list-disc pr-5 space-y-2 text-gray-600 mb-6">
                  <li>اختيار الأقمشة والألوان التي تناسب هوية شركتك.</li>
                  <li>تطريز أو طباعة شعار الشركة بأعلى معايير الجودة.</li>
                  <li>تصميم تفاصيل فريدة تميز أزياء موظفيك.</li>
                  <li>توفير مقاسات متنوعة لضمان راحة جميع الموظفين.</li>
                </ul>
                <Button href="/ar/services/custom-design/" variant="primary" size="lg">
                  اكتشف خدمات التصميم المخصص
                </Button>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="text-center bg-primary-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">هل أنت مستعد لرفع مستوى المظهر الاحترافي لشركتك؟</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              تواصل معنا اليوم لمناقشة احتياجاتك من أزياء الشركات، ودع فريق خبرائنا يساعدك في اختيار أو تصميم الزي المثالي الذي يعكس احترافية وتميز مؤسستك.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/ar/quote?category=corporate" variant="primary" size="lg">
                اطلب عرض سعر الآن
              </Button>
              <Button href="/ar/contact" variant="outline" size="lg">
                تواصل مع فريقنا
              </Button>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}