import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'زي أمن المجمعات التجارية والمولات في السعودية | يونيوم',
  titleAr: 'زي أمن المجمعات التجارية والمولات في السعودية | يونيوم',
  description: 'أزياء أمنية احترافية لحراس ومسؤولي الأمن في المجمعات التجارية (المولات) بالسعودية. تصميمات تفرض الاحترام وتمنح راحة عالية خلال جولات المشي الطويلة.',
  descriptionAr: 'أزياء أمنية احترافية لحراس ومسؤولي الأمن في المجمعات التجارية (المولات) بالسعودية. تصميمات تفرض الاحترام وتمنح راحة عالية خلال جولات المشي الطويلة.',
  keywords: ['mall security uniforms saudi arabia', 'shopping center guard attire riyadh', 'retail security clothing ksa', 'commercial security apparel'],
  keywordsAr: ['زي أمن المولات', 'يونيفورم حراس مجمعات تجارية', 'ملابس سكيورتي أسواق', 'بدل أمن مدني', 'أزياء حراسات أمنية'],
  locale: 'ar', 
  pageType: 'product', 
  path: '/ar/shop/security-uniforms/mall-security',
  image: '/images/security/mall-security.jpg', 
  imageAlt: 'أزياء حراس أمن المجمعات التجارية',
  aiSummary: 'أزياء أمن المجمعات التجارية من يونيوم مصممة لتعكس السلطة بطريقة ودية تناسب بيئة التسوق. نستخدم أقمشة متينة وقابلة للتهوية لدعم حراس الأمن خلال نوبات المشي الطويلة.',
  aiSummaryAr: 'أزياء أمن المجمعات التجارية من يونيوم مصممة لتعكس السلطة بطريقة ودية تناسب بيئة التسوق. نستخدم أقمشة متينة وقابلة للتهوية لدعم حراس الأمن خلال نوبات المشي الطويلة.'
});

export const dynamic = 'force-static';

const products = [
  { name: 'بدلة الأمن المكتبي (Soft Security)', price: '210 ريال', desc: 'طقم مكون من بليزر أو جاكيت خفيف وبنطلون رسمي، مناسب لمشرفي الأمن داخل المولات الفاخرة ليعطي طابعاً ترحيبياً واحترافياً في نفس الوقت.' },
  { name: 'قميص الأمن التكتيكي الخفيف', price: '120 ريال', desc: 'قميص مصمم بجيوب متعددة لحمل أجهزة اللاسلكي، مصنوع من قماش معالج (Wicking) يطرد العرق ليحافظ على جفاف وراحة الحارس أثناء التجوال المستمر.' },
  { name: 'بنطلون المشي التكتيكي', price: '145 ريال', desc: 'بنطلون مزود بمرونة إضافية عند الركبتين والخصر، مع جيوب عميقة مؤمنة بسحابات، مثالي لفرق التدخل السريع داخل المركز التجاري.' },
  { name: 'جاكيت الأمن التوجيهي (Hi-Vis)', price: '160 ريال', desc: 'جاكيت خفيف مزود بأشرطة عاكسة بشكل أنيق، يلبسه حراس المواقف والساحات الخارجية للمول لتوجيه حركة المرور بأمان.' },
];

const faqs = [
  { question: 'هل تصميم الزي يراعي حمل معدات مثل أجهزة اللاسلكي؟', answer: 'نعم، جميع قمصان وسترات الأمن لدينا مزودة بـ "عروات تثبيت" (Mic Loops) مخصصة على الكتف والصدر لتثبيت ميكروفون جهاز اللاسلكي (Walkie-Talkie) بوضوح وسهولة.' },
  { question: 'هل أقمشة زي الأمن تسبب التعرق خلال فصل الصيف؟', answer: 'لا، نحن نستخدم أقمشة تحتوي على ألياف طاردة للرطوبة وفتحات تهوية مخفية (Mesh Vents) تحت الإبطين وفي منطقة الظهر للحفاظ على برودة الجسم قدر الإمكان.' },
  { question: 'هل تقومون بتوفير الشعارات الأمنية المعتمدة؟', answer: 'نعم، نوفر خدمة تطريز أو إضافة شارات معدنية وقماشية (Badges / Epaulettes) معتمدة تتضمن شعار شركة الحراسات الأمنية واسم المجمع التجاري لتأكيد هوية الحارس.' },
];

export default function MallSecurityUniformsPageAr() {
  return (
    <>
      <SEO2026 
        title="أزياء أمن المجمعات التجارية والمولات" 
        titleAr="أزياء أمن المجمعات التجارية والمولات" 
        description="يونيفورم أمني احترافي ومريح لحراس الأسواق والمجمعات." 
        locale="ar" 
        pageType="product" 
        mainEntity="أزياء حراس أمن المجمعات والمولات" 
        primaryImage="/images/security/mall-security.jpg" 
        primaryImageAlt="أزياء أمن المجمعات التجارية" 
        faqs={faqs} 
        breadcrumbs={[
          { name: 'المتجر', url: '/ar/shop' }, 
          { name: 'الأزياء الأمنية', url: '/ar/shop/security-uniforms' }, 
          { name: 'أمن المجمعات', url: '/ar/shop/security-uniforms/mall-security' }
        ]} 
        certifications={['Tactical Mobility', 'Mic Loops Integrated']} 
        clientCount={85} 
        yearsInBusiness={15} 
        industry="Private Security" 
      />
      <section className="bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' }, 
            { label: 'المتجر', href: '/ar/shop' }, 
            { label: 'الأزياء الأمنية', href: '/ar/shop/security-uniforms' }, 
            { label: 'أمن المجمعات', href: '/ar/shop/security-uniforms/mall-security' }
          ]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              أزياء أمن <span className="text-blue-400">المجمعات التجارية</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              هيبة الحضور وراحة الأداء. أزياء مصممة خصيصاً لشركات الحراسة وأمن المولات الكبرى في المملكة لضمان بيئة تسوق آمنة.
            </p>
          </div>
        </Container>
      </section>
      
      <main className="py-16" dir="rtl">
        <Container>
          <SectionHeading subtitle="أناقة تفرض الاحترام" centered>تشكيلة الأمن المدني والتجاري</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
            {products.map((p, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg hover:border-blue-500 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
                  <span className="text-blue-800 font-bold bg-blue-50 px-3 py-1 rounded-full">{p.price}</span>
                </div>
                <p className="text-gray-600 text-base leading-relaxed mt-4">{p.desc}</p>
                <Link href="/ar/quote?product=mall-security-uniform" className="inline-flex items-center gap-2 mt-6 text-blue-700 font-medium hover:text-blue-900 hover:underline">
                  طلب تجهيز فرق الأمن <span aria-hidden="true">←</span>
                </Link>
              </div>
            ))}
          </div>

          <section className="mt-20 mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="تجهيزات أمنية متكاملة" centered>الأسئلة الشائعة لشركات الحراسة</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
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
