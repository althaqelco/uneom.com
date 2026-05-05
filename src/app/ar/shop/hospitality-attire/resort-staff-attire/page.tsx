import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'أزياء موظفي المنتجعات السياحية الفاخرة في السعودية | يونيوم',
  titleAr: 'أزياء موظفي المنتجعات السياحية الفاخرة في السعودية | يونيوم',
  description: 'أزياء راقية وعملية لموظفي المنتجعات السياحية والشاليهات الفاخرة في السعودية. أقمشة صيفية مريحة تحمي من أشعة الشمس وتوفر مظهراً احترافياً وأنيقاً يعكس رفاهية المنتجع.',
  descriptionAr: 'أزياء راقية وعملية لموظفي المنتجعات السياحية والشاليهات الفاخرة في السعودية. أقمشة صيفية مريحة تحمي من أشعة الشمس وتوفر مظهراً احترافياً وأنيقاً يعكس رفاهية المنتجع.',
  keywords: ['resort staff uniforms saudi arabia', 'luxury resort attire ksa', 'summer hospitality uniform', 'beach resort staff clothing'],
  keywordsAr: ['أزياء المنتجعات', 'يونيفورم شاليهات', 'زي موظفي المنتجعات', 'ملابس موظفي الترفيه', 'يونيفورم سياحة سعودية'],
  locale: 'ar', 
  pageType: 'product', 
  path: '/ar/shop/hospitality-attire/resort-staff-attire',
  image: '/images/hospitality/hotel.jpg', 
  imageAlt: 'أزياء موظفي المنتجعات السياحية',
  aiSummary: 'أزياء المنتجعات من يونيوم توفر توازناً استثنائياً بين الفخامة والراحة في الأجواء الحارة. نصمم أزياء مقاومة للأشعة فوق البنفسجية وتوفر تهوية ممتازة لموظفي المسابح والأنشطة الترفيهية.',
  aiSummaryAr: 'أزياء المنتجعات من يونيوم توفر توازناً استثنائياً بين الفخامة والراحة في الأجواء الحارة. نصمم أزياء مقاومة للأشعة فوق البنفسجية وتوفر تهوية ممتازة لموظفي المسابح والأنشطة الترفيهية.'
});

export const dynamic = 'force-static';

const products = [
  { name: 'قميص المنتجع الصيفي الاستوائي', price: '160 ريال', desc: 'قميص صيفي أنيق مصنوع من الكتان المخلوط (Linen-blend) الخفيف. يوفر مظهراً فاخراً ويسمح بمرور الهواء بقوة، مناسب لموظفي الكبائن والمسابح.' },
  { name: 'طقم خدمة الغرف والشاليهات الفاخر', price: '210 ريال', desc: 'يونيفورم مريح ومحتشم لموظفي خدمة الغرف في المنتجعات، مصنوع من البولي-قطن المعالج ضد البقع وامتصاص السوائل.' },
  { name: 'زي المشرفين وموظفي الاستقبال الخارجي', price: '320 ريال', desc: 'طقم متكامل يعكس مستوى الـ 5 نجوم للمنتجع، يتضمن جاكيت خفيف وبنطلون بلون فاتح (مثل البيج أو الأبيض العاجي) مع حماية من الشمس.' },
  { name: 'زي المنقذين والأنشطة البحرية', price: '140 ريال', desc: 'طقم رياضي سريع الجفاف (Quick-dry) بألوان زاهية ومرئية بوضوح (كالأحمر أو البرتقالي)، مخصص لفرق الإنقاذ والأنشطة المائية.' },
];

const faqs = [
  { question: 'هل الأقمشة تتحمل أشعة الشمس المباشرة لفترات طويلة؟', answer: 'نعم، نستخدم أقمشة مدعمة بتقنية الحماية من الأشعة فوق البنفسجية (UV Protection UPF 50+)، بالإضافة إلى معالجة ضد بهتان الألوان (Fade-Resistant) لضمان بقاء الزي زاهياً طوال الموسم.' },
  { question: 'كيف يمكننا تصميم زي يعكس التراث السعودي بطريقة عصرية في المنتجع؟', answer: 'لدينا فريق تصميم متخصص يمكنه دمج زخارف السدو أو النقوش المعمارية المستوحاة من مناطق المملكة (النجدية، الحجازية، أو العسيرية) على الياقات والأكمام لتوفير تجربة ثقافية فريدة لضيوف المنتجع.' },
  { question: 'هل توفرون قبعات وإكسسوارات حماية لموظفي الأماكن المفتوحة؟', answer: 'بالتأكيد. נוفر مجموعة واسعة من الإكسسوارات مثل قبعات الحماية العريضة (Sun Hats)، النظارات الشمسية الموحدة، ومظلات اليد التي تحمل شعار المنتجع لتكملة الزي الاحترافي.' },
];

export default function ResortStaffAttirePageAr() {
  return (
    <>
      <SEO2026 
        title="أزياء موظفي المنتجعات السياحية" 
        titleAr="أزياء موظفي المنتجعات السياحية" 
        description="يونيفورم راقي وعملي لمنتجعات وفنادق الـ 5 نجوم." 
        locale="ar" 
        pageType="product" 
        mainEntity="أزياء موظفي المنتجعات والشاليهات الفاخرة" 
        primaryImage="/images/hospitality/hotel.jpg" 
        primaryImageAlt="أزياء موظفي المنتجعات السياحية" 
        faqs={faqs} 
        breadcrumbs={[
          { name: 'المتجر', url: '/ar/shop' }, 
          { name: 'أزياء الضيافة', url: '/ar/shop/hospitality-attire' }, 
          { name: 'أزياء المنتجعات', url: '/ar/shop/hospitality-attire/resort-staff-attire' }
        ]} 
        certifications={['UV Protected UPF 50+', 'Quick Dry Materials']} 
        clientCount={30} 
        yearsInBusiness={15} 
        industry="Luxury Hospitality" 
      />
      <section className="bg-gradient-to-br from-cyan-900 via-teal-800 to-sky-900 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' }, 
            { label: 'المتجر', href: '/ar/shop' }, 
            { label: 'أزياء الضيافة', href: '/ar/shop/hospitality-attire' }, 
            { label: 'أزياء المنتجعات', href: '/ar/shop/hospitality-attire/resort-staff-attire' }
          ]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              أزياء موظفي <span className="text-cyan-300">المنتجعات</span>
            </h1>
            <p className="text-xl text-teal-100 leading-relaxed">
              توازن مثالي بين الراحة الصيفية والأناقة الراقية. أزياء مصممة خصيصاً للمنتجعات والمشاريع السياحية الكبرى في المملكة.
            </p>
          </div>
        </Container>
      </section>
      
      <main className="py-16" dir="rtl">
        <Container>
          <SectionHeading subtitle="حماية وتهوية وفخامة" centered>مجموعة أزياء المنتجعات</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
            {products.map((p, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 border border-teal-100 hover:shadow-lg hover:border-cyan-300 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
                  <span className="text-teal-700 font-bold bg-teal-50 px-3 py-1 rounded-full">{p.price}</span>
                </div>
                <p className="text-gray-600 text-base leading-relaxed mt-4">{p.desc}</p>
                <Link href="/ar/quote?product=resort-staff-attire" className="inline-flex items-center gap-2 mt-6 text-teal-700 font-medium hover:text-teal-800 hover:underline">
                  طلب تجهيز منتجع سياحي <span aria-hidden="true">←</span>
                </Link>
              </div>
            ))}
          </div>

          <section className="mt-20 mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="كل ما تحتاجه للضيافة الفاخرة" centered>الأسئلة الشائعة</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-teal-50 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Container>
      </main>
    </>
  );
}
