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
  title: 'الزي الموحد للرعاية الصحية والسكراب الطبي | الأزياء الطبية المهنية | يونيوم',
  description: 'أزياء الرعاية الصحية الفاخرة والسكراب الطبي المصمم للمهنيين الصحيين في المملكة العربية السعودية. أقمشة مضادة للميكروبات، قصات مريحة، وتصاميم مهنية.',
  keywords: 'الزي الموحد للرعاية الصحية، السكراب الطبي، زي المستشفيات، زي التمريض، سكراب الأطباء، الزي المضاد للميكروبات، الأزياء الطبية السعودية',
  openGraph: {
    title: 'الزي الموحد للرعاية الصحية والسكراب الطبي | الأزياء الطبية المهنية | يونيوم',
    description: 'أزياء الرعاية الصحية الفاخرة والسكراب الطبي المصمم للمهنيين الصحيين في المملكة العربية السعودية.',
    url: 'https://uneom.com/ar/industries/healthcare/',
    siteName: 'يونيوم',
    images: [
      {
        url: 'https://uneom.com/images/Healthcare_Uniforms.png',
        width: 1200,
        height: 630,
        alt: 'أزياء الرعاية الصحية من يونيوم'
      }
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/ar/industries/healthcare/',
    languages: {
      'en-SA': 'https://uneom.com/industries/healthcare/',
      'ar-SA': 'https://uneom.com/ar/industries/healthcare/',
      'x-default': 'https://uneom.com/industries/healthcare/'
    }
  }
};

export const dynamic = 'force-static';

const featuredProducts = [
  {
    id: '1',
    name: 'السكراب الطبي الفاخر',
    image: '/images/PremiumـMedicalـScrubs.png',
    price: 'اطلب عرض سعر',
    href: '/ar/shop/medical-scrubs/premium-medical-scrubs/',
    category: 'السكراب الطبي'
  },
  {
    id: '2',
    name: 'معاطف المختبر المهنية',
    image: '/images/Healthcare_Uniforms.png',
    price: 'اطلب عرض سعر',
    href: '/ar/shop/medical-scrubs/professional-lab-coat/',
    category: 'معاطف المختبر'
  },
  {
    id: '3',
    name: 'زي التمريض',
    image: '/images/healthcare/medical_hijab_uniform.jpg',
    price: 'اطلب عرض سعر',
    href: '/ar/shop/medical-scrubs/nursing-scrubs/',
    category: 'زي التمريض'
  }
];

export default function HealthcareIndustryPage() {
  return (
    <div dir="rtl">
      <EnhancedSEO2025 
        title="الزي الموحد للرعاية الصحية والسكراب الطبي | الأزياء الطبية المهنية | يونيوم"
        description="أزياء الرعاية الصحية الفاخرة والسكراب الطبي المصمم للمهنيين الصحيين في المملكة العربية السعودية."
        canonicalUrl="https://uneom.com/ar/industries/healthcare/"
        locale="ar"
      />

      {/* قسم البطل */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-700 text-white py-20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/Healthcare_Uniforms.png"
            alt="أزياء الرعاية الصحية من يونيوم"
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
              { label: 'الرعاية الصحية', href: '/ar/industries/healthcare' }
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">الزي الموحد للرعاية الصحية والسكراب الطبي</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl">
              الأزياء الطبية المهنية المصممة للمهنيين الصحيين في المملكة العربية السعودية. تتميز بالحماية المضادة للميكروبات وإدارة الرطوبة والراحة الفائقة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href="/ar/quote"
                variant="secondary" 
                size="lg"
              >
                اطلب عرض سعر للرعاية الصحية
              </Button>
              <Button 
                href="#featured-products"
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-700"
              >
                عرض المنتجات
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
                <SectionHeading subtitle="الأزياء الطبية المهنية">
                  التميز في أزياء الرعاية الصحية
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  في يونيوم، نفهم أن المهنيين الصحيين يحتاجون إلى أزياء تعمل بجد مثلهم. تجمع مجموعة أزياء الرعاية الصحية لدينا بين تقنية الأقمشة المتطورة والتصميم المهني.
                </p>
                <p className="text-gray-600 mb-8">
                  من المعالجات المضادة للميكروبات إلى الأقمشة التي تمتص الرطوبة، كل تفصيل مصمم مع وضع المهنيين الصحيين في الاعتبار.
                </p>
                <Button href="/ar/contact" variant="primary" size="lg">
                  ناقش متطلباتك
                </Button>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/PremiumـMedicalـScrubs.png"
                  alt="السكراب الطبي الفاخر"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* المنتجات المميزة */}
          <section id="featured-products" className="mb-16">
            <SectionHeading subtitle="مجموعة الرعاية الصحية لدينا" centered>
              الأزياء الطبية المميزة
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} locale="ar" />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button href="/ar/shop/medical-scrubs/" variant="primary" size="lg">
                عرض جميع منتجات الرعاية الصحية
              </Button>
            </div>
          </section>

          {/* الدعوة النهائية للعمل */}
          <section className="text-center bg-primary-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">هل أنت مستعد لترقية أزياء الرعاية الصحية؟</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              انضم إلى مئات مرافق الرعاية الصحية في جميع أنحاء المملكة العربية السعودية التي تثق في يونيوم لاحتياجات الأزياء الطبية المهنية.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/ar/quote" variant="primary" size="lg">
                احصل على عرض سعر للرعاية الصحية
              </Button>
              <Button href="/ar/contact" variant="outline" size="lg">
                جدولة استشارة
              </Button>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}