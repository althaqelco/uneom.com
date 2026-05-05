import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'أزياء صالونات التجميل والعناية بالبشرة في السعودية | يونيوم',
  titleAr: 'أزياء صالونات التجميل والعناية بالبشرة في السعودية | يونيوم',
  description: 'يونيفورم راقي وعصري لموظفات صالونات التجميل، السبا، ومراكز العناية بالبشرة في السعودية. أقمشة مريحة مقاومة للمواد الكيميائية والألوان لتجربة عمل انسيابية.',
  descriptionAr: 'يونيفورم راقي وعصري لموظفات صالونات التجميل، السبا، ومراكز العناية بالبشرة في السعودية. أقمشة مريحة مقاومة للمواد الكيميائية والألوان لتجربة عمل انسيابية.',
  keywords: ['beauty salon uniforms saudi arabia', 'spa therapist uniform riyadh', 'hairdresser tunic ksa', 'nail salon attire'],
  keywordsAr: ['زي صالونات التجميل', 'يونيفورم سبا', 'أزياء خبيرات التجميل', 'ملابس مراكز المساج', 'أطقم صالونات نسائية'],
  locale: 'ar', 
  pageType: 'product', 
  path: '/ar/shop/retail-uniforms/beauty-salon',
  image: '/images/retail/beauty-salon.jpg', 
  imageAlt: 'أزياء صالونات التجميل والسبا',
  aiSummary: 'يوفر يونيوم أزياء مخصصة لصالونات التجميل تمنح الموظفات مظهراً شديد الأناقة، وتتميز بأقمشة مقاومة للصبغات والمواد الكيميائية، وتدعم حرية الحركة التامة لمصففات الشعر وخبيرات العناية.',
  aiSummaryAr: 'يوفر يونيوم أزياء مخصصة لصالونات التجميل تمنح الموظفات مظهراً شديد الأناقة، وتتميز بأقمشة مقاومة للصبغات والمواد الكيميائية، وتدعم حرية الحركة التامة لمصففات الشعر وخبيرات العناية.'
});

export const dynamic = 'force-static';

const products = [
  { name: 'تونيك السبا الكلاسيكي (Spa Tunic)', price: '140 ريال', desc: 'تصميم أنيق بياقة ماندرين وفتحات جانبية لتسهيل الحركة، مصنوع من قماش ناعم وخفيف يمنح مظهراً مريحاً وجذاباً للعملاء.' },
  { name: 'طقم مصففات الشعر (Bleach Resistant)', price: '180 ريال', desc: 'طقم عملي (تونيك وبنطلون) مصنوع من نسيج خاص مقاوم لبقع الصبغات والمواد الكيميائية وسهل التنظيف جداً.' },
  { name: 'مريلة خبيرات التجميل (Beauty Apron)', price: '85 ريال', desc: 'مريلة احترافية بخاصية مقاومة الماء، مزودة بجيوب مقسمة بدقة لحمل المقصات وأدوات العناية لتكون في متناول اليد.' },
  { name: 'زي عيادات التجميل والليزر', price: '210 ريال', desc: 'طقم يشبه السكراب الطبي ولكن بلمسة عصرية وأنثوية أكثر، مناسب للممرضات وخبيرات البشرة في عيادات التجميل.' },
];

const faqs = [
  { question: 'هل أزياء الصالون تتلف من بقع الصبغات والمقشرات؟', answer: 'لقد طورنا أقمشة مخصصة لقطاع التجميل تحتوي على معالجة كيميائية (Stain-Resistant Technology) تمنع التصاق أغلب الصبغات والمواد الزيتية لتسهيل غسلها والحفاظ على المظهر الأنيق.' },
  { question: 'هل يمكن تطريز شعار الصالون بألوان ذهبية وفضية؟', answer: 'بالتأكيد. الصالونات الفاخرة تفضل التطريز بالخيوط المعدنية (Metallic Threads) كالذهبي أو الذهبي الوردي (Rose Gold)، ونحن نقدم هذه الخدمة بأعلى دقة لتعزيز الهوية البصرية لعلامتكم.' },
  { question: 'ما هو التصميم الأنسب للصالونات التي تقدم خدمات متنوعة؟', answer: 'ننصح بتوحيد اللون العام للصالون (مثلاً الأسود أو الزيتي) واستخدام تصاميم مختلفة حسب الوظيفة: التونيك لعمال السبا، المريلة المقاومة للماء لمصففات الشعر، والسكراب لعيادات البشرة.' },
];

export default function BeautySalonUniformsPageAr() {
  return (
    <>
      <SEO2026 
        title="أزياء صالونات التجميل والسبا" 
        titleAr="أزياء صالونات التجميل والسبا" 
        description="يونيفورم أنيق ومقاوم للمواد الكيميائية لصالونات التجميل ومراكز العناية بالبشرة." 
        locale="ar" 
        pageType="product" 
        mainEntity="أزياء صالونات التجميل وخبيرات العناية" 
        primaryImage="/images/retail/beauty-salon.jpg" 
        primaryImageAlt="أزياء صالونات التجميل ومراكز السبا" 
        faqs={faqs} 
        breadcrumbs={[
          { name: 'المتجر', url: '/ar/shop' }, 
          { name: 'أزياء التجزئة', url: '/ar/shop/retail-uniforms' }, 
          { name: 'صالونات التجميل', url: '/ar/shop/retail-uniforms/beauty-salon' }
        ]} 
        certifications={['Bleach Resistant', 'Stain Repellent', 'Style & Comfort Focused']} 
        clientCount={85} 
        yearsInBusiness={15} 
        industry="Beauty & Wellness" 
      />
      <section className="bg-gradient-to-br from-pink-950 via-rose-900 to-purple-950 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' }, 
            { label: 'المتجر', href: '/ar/shop' }, 
            { label: 'أزياء التجزئة والخدمات', href: '/ar/shop/retail-uniforms' }, 
            { label: 'صالونات التجميل', href: '/ar/shop/retail-uniforms/beauty-salon' }
          ]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              أزياء <span className="text-pink-300">صالونات التجميل</span> والسبا
            </h1>
            <p className="text-xl text-rose-200 leading-relaxed">
              أناقة تليق بصناع الجمال. أزياء عصرية لمراكز التجميل والسبا في المملكة، مصممة لمقاومة بقع الصبغات وتوفير مرونة فائقة طوال اليوم.
            </p>
          </div>
        </Container>
      </section>
      
      <main className="py-16" dir="rtl">
        <Container>
          <SectionHeading subtitle="حماية وعصرية في كل تفصيلة" centered>تشكيلة الأزياء التجميلية</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
            {products.map((p, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 border border-pink-100 hover:shadow-lg hover:border-pink-400 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
                  <span className="text-pink-800 font-bold bg-pink-50 px-3 py-1 rounded-full">{p.price}</span>
                </div>
                <p className="text-gray-600 text-base leading-relaxed mt-4">{p.desc}</p>
                <Link href="/ar/quote?product=beauty-salon-uniform" className="inline-flex items-center gap-2 mt-6 text-pink-700 font-medium hover:text-pink-900 hover:underline">
                  طلب عرض لصالونك أو مركزك <span aria-hidden="true">←</span>
                </Link>
              </div>
            ))}
          </div>

          <section className="mt-20 mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="أسئلة متكررة من خبيرات التجميل" centered>دليلك لاختيار أزياء السبا</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-pink-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
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
