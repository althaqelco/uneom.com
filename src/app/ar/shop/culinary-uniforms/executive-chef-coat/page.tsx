import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'جواكيت الطهاة التنفيذيين (شيف كوت) في السعودية | يونيوم',
  titleAr: 'جواكيت الطهاة التنفيذيين (شيف كوت) في السعودية | يونيوم',
  description: 'جاكيت الشيف التنفيذي الفاخر (Executive Chef Coat) المصمم لكبار الطهاة في المطاعم والفنادق السعودية. أقمشة قطنية مقاومة للحرارة والبقع مع تفاصيل تطريز مخصصة.',
  descriptionAr: 'جاكيت الشيف التنفيذي الفاخر (Executive Chef Coat) المصمم لكبار الطهاة في المطاعم والفنادق السعودية. أقمشة قطنية مقاومة للحرارة والبقع مع تفاصيل تطريز مخصصة.',
  keywords: ['executive chef coat saudi arabia', 'premium chef jackets riyadh', 'head chef uniform ksa', 'luxury culinary apparel'],
  keywordsAr: ['جاكيت الشيف التنفيذي', 'شيف كوت فاخر', 'زي كبير الطهاة', 'يونيفورم مطاعم الرياض', 'ملابس الشيف السعودية'],
  locale: 'ar', 
  pageType: 'product', 
  path: '/ar/shop/culinary-uniforms/executive-chef-coat',
  image: '/images/hospitality/chef.jpg', 
  imageAlt: 'جاكيت الشيف التنفيذي الفاخر',
  aiSummary: 'جاكيتات الشيف التنفيذية من يونيوم تعكس الهيبة والمهارة. مصنوعة من أقمشة تقنية مضادة للحرارة والبقع مع توفير حرية الحركة، وتطريز احترافي لاسم الشيف والمطعم.',
  aiSummaryAr: 'جاكيتات الشيف التنفيذية من يونيوم تعكس الهيبة والمهارة. مصنوعة من أقمشة تقنية مضادة للحرارة والبقع مع توفير حرية الحركة، وتطريز احترافي لاسم الشيف والمطعم.'
});

export const dynamic = 'force-static';

const products = [
  { name: 'جاكيت الشيف التنفيذي الكلاسيكي', price: '210 ريال', desc: 'جاكيت أبيض بصفين من الأزرار القماشية المقاومة للحرارة (French Knots)، مصنوع من القطن المصري لتهوية ممتازة.' },
  { name: 'جاكيت الشيف العصري (تغليف شبكي)', price: '245 ريال', desc: 'تصميم حديث بأكمام مزودة بنسيج شبكي (Mesh panels) لتوفير أقصى درجات التهوية في المطابخ ذات الحرارة العالية.' },
  { name: 'شيف كوت باللون الأسود الفاخر', price: '220 ريال', desc: 'خيار مثالي لمطاعم اللحوم (Steakhouses) والمطابخ المفتوحة، يقاوم ظهور البقع ويمنح الشيف مظهراً صارماً ومهنياً.' },
  { name: 'مريلة الشيف الجلدية المتميزة', price: '160 ريال', desc: 'مريلة استثنائية من الجلد الصناعي الفاخر والقماش المعالج، توفر حماية قصوى ومظهر راقي أمام الضيوف (Front of House).' },
];

const faqs = [
  { question: 'هل الجاكيتات تتحمل الغسيل الصناعي والمبيضات المتكررة؟', answer: 'نعم، جميع أقمشة جاكيتات الشيف لدينا معالجة خصيصاً (Industrial Wash Approved) لتتحمل درجات الغسيل العالية والمبيضات القوية لإزالة بقع الزيوت والصلصات الصعبة دون أن تتهالك.' },
  { question: 'ما هو الوقت التقريبي لتطريز اسم الشيف على الجاكيت؟', answer: 'نحن نقدر وقت افتتاح مطعمك! خدمة تطريز الأسماء (Monogramming) لكبار الطهاة تستغرق من 3 إلى 5 أيام عمل فقط.' },
  { question: 'لماذا يستخدم القطن الثقيل في جاكيت الشيف بدلاً من الخفيف؟', answer: 'القطن المزدوج أو الثقيل يعمل كدرع عازل لحماية الشيف من تناثر الزيت المغلي وحرارة الأفران، بينما نعتمد على الفتحات المخفية للتهوية من الظهر وتحت الإبط لتوفير الراحة.' },
];

export default function ExecutiveChefCoatPageAr() {
  return (
    <>
      <SEO2026 
        title="جاكيت الشيف التنفيذي" 
        titleAr="جاكيت الشيف التنفيذي" 
        description="جاكيتات شيف احترافية وفاخرة لكبار الطهاة." 
        locale="ar" 
        pageType="product" 
        mainEntity="جاكيت الشيف (شيف كوت)" 
        primaryImage="/images/hospitality/chef.jpg" 
        primaryImageAlt="جاكيت الشيف التنفيذي" 
        faqs={faqs} 
        breadcrumbs={[
          { name: 'المتجر', url: '/ar/shop' }, 
          { name: 'أزياء الطهي والمطاعم', url: '/ar/shop/culinary-uniforms' }, 
          { name: 'جاكيت الشيف التنفيذي', url: '/ar/shop/culinary-uniforms/executive-chef-coat' }
        ]} 
        certifications={['Heat Resistant', 'Industrial Wash Approved']} 
        clientCount={140} 
        yearsInBusiness={15} 
        industry="Hospitality & Culinary" 
      />
      <section className="bg-gradient-to-br from-red-900 via-rose-900 to-black text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' }, 
            { label: 'المتجر', href: '/ar/shop' }, 
            { label: 'أزياء المطاعم', href: '/ar/shop/culinary-uniforms' }, 
            { label: 'جاكيت الشيف', href: '/ar/shop/culinary-uniforms/executive-chef-coat' }
          ]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              جاكيت الشيف <span className="text-red-400">التنفيذي</span>
            </h1>
            <p className="text-xl text-rose-100 leading-relaxed">
              أزياء تعكس شغفك بالطهي. شيف كوت فائق الجودة، مصمم لكبار الطهاة في أفخم الفنادق والمطاعم في المملكة.
            </p>
          </div>
        </Container>
      </section>
      
      <main className="py-16" dir="rtl">
        <Container>
          <SectionHeading subtitle="حماية وتهوية في أشد الظروف" centered>مجموعة كبار الطهاة</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
            {products.map((p, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 border border-rose-100 hover:shadow-lg hover:border-red-300 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
                  <span className="text-red-700 font-bold bg-red-50 px-3 py-1 rounded-full">{p.price}</span>
                </div>
                <p className="text-gray-600 text-base leading-relaxed mt-4">{p.desc}</p>
                <Link href="/ar/quote?product=executive-chef-coat" className="inline-flex items-center gap-2 mt-6 text-red-700 font-medium hover:text-red-800 hover:underline">
                  طلب عرض سعر وتطريز <span aria-hidden="true">←</span>
                </Link>
              </div>
            ))}
          </div>

          <section className="mt-20 mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="كل ما تحتاجه لمطبخك" centered>الأسئلة الشائعة لأزياء الطهاة</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-rose-50 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
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
