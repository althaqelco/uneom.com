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
  title: 'أزياء الضيافة وزي موظفي الفنادق | الأزياء المهنية للخدمات | يونيوم',
  description: 'أزياء الضيافة الفاخرة للفنادق والمطاعم وصناعات الخدمات في المملكة العربية السعودية. تصاميم مهنية تعزز صورة العلامة التجارية مع ضمان الراحة والمتانة لموظفي الضيافة.',
  keywords: 'أزياء الضيافة، زي الفنادق، زي المطاعم، زي الطهاة، زي التدبير المنزلي، زي الكونسيرج، أزياء الضيافة السعودية، زي صناعة الخدمات',
  openGraph: {
    title: 'أزياء الضيافة وزي موظفي الفنادق | الأزياء المهنية للخدمات | يونيوم',
    description: 'أزياء الضيافة الفاخرة للفنادق والمطاعم وصناعات الخدمات في المملكة العربية السعودية.',
    url: 'https://uneom.com/ar/industries/hospitality/',
    siteName: 'يونيوم',
    images: [
      {
        url: 'https://uneom.com/images/Luxury_Hotel Staff_Uniform.png',
        width: 1200,
        height: 630,
        alt: 'أزياء الضيافة من يونيوم'
      }
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/ar/industries/hospitality/',
    languages: {
      'en-SA': 'https://uneom.com/industries/hospitality/',
      'ar-SA': 'https://uneom.com/ar/industries/hospitality/',
      'x-default': 'https://uneom.com/industries/hospitality/'
    }
  }
};

export const dynamic = 'force-static';

// المنتجات المميزة للضيافة
const featuredProducts = [
  {
    id: '1',
    name: 'زي موظفي الفندق الفاخر',
    image: '/images/Luxury_Hotel Staff_Uniform.png',
    price: 'اطلب عرض سعر',
    href: '/ar/shop/hospitality-attire/luxury-hotel-uniform/',
    category: 'أزياء الفنادق'
  },
  {
    id: '2',
    name: 'زي الطهاة المهني',
    image: '/images/cook-flavoring-his-best-meal-2024-11-29-22-42-39-utc.jpg',
    price: 'اطلب عرض سعر',
    href: '/ar/shop/hospitality-attire/chef-uniform/',
    category: 'أزياء الطهاة'
  },
  {
    id: '3',
    name: 'زي خدمة الكونسيرج',
    image: '/images/hospitality/hospitality_uniform_concierge.jpg',
    price: 'اطلب عرض سعر',
    href: '/ar/shop/hospitality-attire/concierge-uniform/',
    category: 'أزياء الخدمة'
  }
];

export default function HospitalityIndustryPage() {
  return (
    <div dir="rtl">
      <EnhancedSEO2025
        title="أزياء الضيافة وزي موظفي الفنادق | الأزياء المهنية للخدمات | يونيوم"
        description="أزياء الضيافة الفاخرة للفنادق والمطاعم وصناعات الخدمات في المملكة العربية السعودية. تصاميم مهنية تعزز صورة العلامة التجارية."
        canonicalUrl="https://uneom.com/ar/industries/hospitality/"
        locale="ar"
      />

      {/* قسم البطل */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-700 text-white py-20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/Luxury_Hotel Staff_Uniform.png"
            alt="أزياء الضيافة من يونيوم"
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
              { label: 'الضيافة', href: '/ar/industries/hospitality' }
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">أزياء الضيافة وزي موظفي الفنادق</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl">
              أزياء الضيافة المهنية المصممة لتعزيز صورة علامتك التجارية مع ضمان راحة الموظفين والمتانة. مثالية للفنادق والمطاعم وصناعات الخدمات في جميع أنحاء المملكة العربية السعودية.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/ar/quote"
                variant="secondary"
                size="lg"
              >
                اطلب عرض سعر للضيافة
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
                <SectionHeading subtitle="أزياء الضيافة المهنية">
                  رفع مستوى التميز في الخدمة
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  في صناعة الضيافة، الانطباعات الأولى مهمة. تجمع مجموعة أزياء الضيافة لدينا بين الجماليات المهنية والوظائف العملية لإنشاء أزياء تعزز صورة علامتك التجارية مع ضمان راحة الموظفين طوال خدمتهم.
                </p>
                <p className="text-gray-600 mb-8">
                  من بهو الفنادق الفاخرة إلى مطابخ المطاعم المزدحمة، تم تصميم أزياءنا لتلبية الاحتياجات المتنوعة لقطاع الضيافة المزدهر في المملكة العربية السعودية.
                </p>
                <Button href="/ar/contact" variant="primary" size="lg">
                  ناقش رؤية علامتك التجارية
                </Button>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/hospitality/hospitality_uniform_hotel.jpg"
                  alt="أزياء الفنادق المهنية"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* المنتجات المميزة */}
          <section id="featured-products" className="mb-16">
            <SectionHeading subtitle="مجموعة الضيافة لدينا" centered>
              أزياء الضيافة المميزة
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} locale="ar" />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button href="/ar/shop/hospitality-attire/" variant="primary" size="lg">
                عرض جميع منتجات الضيافة
              </Button>
            </div>
          </section>

          {/* الدعوة النهائية للعمل */}
          <section className="text-center bg-primary-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">هل أنت مستعد لرفع مستوى علامة الضيافة التجارية؟</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              انضم إلى الفنادق والمطاعم ومؤسسات الخدمة الرائدة في جميع أنحاء المملكة العربية السعودية التي تثق في يونيوم لأزياء الضيافة المهنية.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/ar/quote" variant="primary" size="lg">
                احصل على عرض سعر للضيافة
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