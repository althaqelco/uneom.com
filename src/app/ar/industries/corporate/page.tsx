import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ProductCard from '@/components/ui/ProductCard';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'الأزياء المؤسسية وملابس العمل | الأزياء المهنية للمكاتب | يونيوم',
  description: 'الأزياء المؤسسية الفاخرة وملابس العمل للشركات السعودية. تصاميم مهنية تعزز صورة العلامة التجارية وتعزز وحدة الفريق وتضمن الراحة في البيئات المؤسسية.',
  keywords: 'الأزياء المؤسسية، ملابس العمل، زي المكاتب، البدلات التنفيذية، الملابس المؤسسية، الملابس المهنية، البدلات التجارية السعودية، قواعد اللباس المؤسسي، ملابس المكاتب',
  openGraph: {
    title: 'الأزياء المؤسسية وملابس العمل | الأزياء المهنية للمكاتب | يونيوم',
    description: 'الأزياء المؤسسية الفاخرة وملابس العمل للشركات السعودية.',
    url: 'https://uneom.com/ar/industries/corporate/',
    siteName: 'يونيوم',
    images: [
      {
        url: 'https://uneom.com/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg',
        width: 1200,
        height: 630,
        alt: 'الأزياء المؤسسية من يونيوم'
      }
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/ar/industries/corporate/',
    languages: {
      'en-SA': 'https://uneom.com/industries/corporate/',
      'ar-SA': 'https://uneom.com/ar/industries/corporate/',
      'x-default': 'https://uneom.com/industries/corporate/'
    }
  }
};

export const dynamic = 'force-static';

// المنتجات المؤسسية المميزة
const featuredProducts = [
  {
    id: '1',
    name: 'البدلات التنفيذية',
    image: '/images/products/corporate-suit-executive.jpg',
    price: 'اطلب عرض سعر',
    href: '/ar/shop/corporate/executive-suits/',
    category: 'الملابس التنفيذية'
  },
  {
    id: '2',
    name: 'القمصان والبلوزات المهنية',
    image: '/images/products/corporate-shirts-blouses.jpg',
    price: 'اطلب عرض سعر',
    href: '/ar/shop/corporate/business-shirts/',
    category: 'القمصان التجارية'
  },
  {
    id: '3',
    name: 'قمصان البولو المؤسسية',
    image: '/images/products/corporate-polo-shirts.jpg',
    price: 'اطلب عرض سعر',
    href: '/ar/shop/corporate/casual-polo/',
    category: 'المؤسسية الكاجوال'
  }
];

// فوائد الأزياء المؤسسية
const corporateBenefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'اتساق العلامة التجارية',
    description: 'صورة مؤسسية موحدة تعزز هوية علامتك التجارية وقيمها عبر جميع الأقسام والمواقع.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'الصورة المهنية',
    description: 'ارفع من المظهر المهني لشركتك واخلق انطباعات أولى إيجابية مع العملاء والشركاء.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'رضا الموظفين',
    description: 'أزياء مريحة ومناسبة تعزز ثقة الموظفين ورضاهم في مكان العمل.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    ),
    title: 'الكفاءة في التكلفة',
    description: 'عملية شراء مبسطة ومزايا الطلب بالجملة التي تقلل من التكاليف الإجمالية للأزياء.'
  }
];

export default function CorporateIndustryPage() {
  return (
    <div dir="rtl">
      <EnhancedSEO2025 
        title="الأزياء المؤسسية وملابس العمل | الأزياء المهنية للمكاتب | يونيوم"
        description="الأزياء المؤسسية الفاخرة وملابس العمل للشركات السعودية. تصاميم مهنية تعزز صورة العلامة التجارية وتعزز وحدة الفريق."
        canonicalUrl="https://uneom.com/ar/industries/corporate/"
        locale="ar"
      />

      {/* قسم البطل */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-700 text-white py-20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg"
            alt="الأزياء المؤسسية من يونيوم"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <Container>
          <Breadcrumbs
            items={[
              { label: 'الرئيسية', href: '/ar' },
              { label: 'الصناعات', href: '/ar/industries' },
              { label: 'المؤسسات', href: '/ar/industries/corporate' }
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">الأزياء المؤسسية وملابس العمل</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl">
              الأزياء المؤسسية المهنية المصممة لتعزيز صورة علامتك التجارية وتعزيز وحدة الفريق. مثالية للشركات في جميع أنحاء المملكة العربية السعودية التي تسعى لإنشاء مظهر مهني ومتسق.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href="/ar/quote"
                variant="secondary" 
                size="lg"
              >
                اطلب عرض سعر مؤسسي
              </Button>
              <Button 
                href="#featured-products"
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-700"
              >
                عرض المجموعة
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
                <SectionHeading subtitle="الأزياء المؤسسية المهنية">
                  بناء علامتك التجارية من خلال الأزياء
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  زيك المؤسسي أكثر من مجرد ملابس - إنه أداة قوية لبناء العلامة التجارية ووحدة الفريق. تجمع مجموعة الأزياء المؤسسية لدينا بين الجماليات المهنية والوظائف العملية لإنشاء أزياء تمثل قيم ومعايير شركتك.
                </p>
                <p className="text-gray-600 mb-8">
                  من قاعات اجتماعات المديرين التنفيذيين إلى الأدوار التي تواجه العملاء، تم تصميم أزياءنا لترك انطباع دائم مع ضمان الراحة والثقة لفريقك.
                </p>
                <Button href="/ar/contact" variant="primary" size="lg">
                  ناقش احتياجاتك المؤسسية
                </Button>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg"
                  alt="الأزياء المؤسسية المهنية"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* الفوائد الرئيسية */}
          <section className="mb-16">
            <SectionHeading subtitle="لماذا تختار الأزياء المؤسسية من يونيوم" centered>
              التميز في العلامة التجارية المؤسسية
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {corporateBenefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* المنتجات المميزة */}
          <section id="featured-products" className="mb-16">
            <SectionHeading subtitle="مجموعتنا المؤسسية" centered>
              الأزياء المؤسسية المميزة
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} locale="ar" />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button href="/ar/shop/corporate/" variant="primary" size="lg">
                عرض جميع المنتجات المؤسسية
              </Button>
            </div>
          </section>

          {/* خيارات التخصيص */}
          <section className="mb-16 bg-gray-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src="/images/diverse-business-meeting-manager-brainstorming-with-meeting-participants-in-office-conf-SBI-391494217.jpg"
                  alt="الأزياء المؤسسية المخصصة"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <SectionHeading subtitle="حلول متوافقة مع العلامة التجارية">
                  الأزياء المؤسسية المخصصة
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  كل شركة لها ثقافة وهوية علامة تجارية فريدة. تضمن خدمات التخصيص لدينا أن تتماشى أزياءك المؤسسية تماماً مع إرشادات علامتك التجارية وقيم شركتك.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    تطريز الشعار المخصص والعلامة التجارية
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    تنسيق ألوان العلامة التجارية
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    تنويعات خاصة بالأقسام
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    تمييز مستويات التنفيذيين والموظفين
                  </li>
                </ul>
                <Button href="/ar/services/custom-design/" variant="primary" size="lg">
                  استكشف التخصيص
                </Button>
              </div>
            </div>
          </section>

          {/* الدعوة النهائية للعمل */}
          <section className="text-center bg-primary-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">هل أنت مستعد لرفع صورتك المؤسسية؟</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              انضم إلى الشركات الرائدة في جميع أنحاء المملكة العربية السعودية التي تثق في يونيوم لاحتياجات الأزياء المؤسسية المهنية.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/ar/quote" variant="primary" size="lg">
                احصل على عرض سعر مؤسسي
              </Button>
              <Button href="/ar/contact" variant="outline" size="lg">
                جدولة استشارة العلامة التجارية
              </Button>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}
