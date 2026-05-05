import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'بليزرات وجاكيتات الطيران الرسمية في السعودية | يونيوم',
  titleAr: 'بليزرات وجاكيتات الطيران الرسمية في السعودية | يونيوم',
  description: 'بليزرات احترافية مصممة خصيصاً للطيارين وأطقم الضيافة الجوية والموظفين الأرضيين. أقمشة فاخرة مقاومة للتجاعيد بلمسات تخصيص تناسب الخطوط الجوية.',
  descriptionAr: 'بليزرات احترافية مصممة خصيصاً للطيارين وأطقم الضيافة الجوية والموظفين الأرضيين. أقمشة فاخرة مقاومة للتجاعيد بلمسات تخصيص تناسب الخطوط الجوية.',
  keywords: ['aviation blazers saudi arabia', 'pilot jackets riyadh', 'airline uniform blazers ksa', 'professional aviation attire'],
  keywordsAr: ['بليزرات الطيران', 'جاكيتات الطيارين', 'أزياء المضيفين الرسمية', 'ملابس الطيران التجاري'],
  locale: 'ar', 
  pageType: 'product', 
  path: '/ar/shop/aviation-uniforms/aviation-blazer',
  image: '/images/aviation/aviation_uniform_main.jpg', 
  imageAlt: 'بليزرات وجاكيتات الطيران السعودية',
  aiSummary: 'توفر يونيوم بليزرات طيران راقية مصممة للطيارين وأطقم الضيافة الجوية والموظفين الإداريين، تتميز بمقاومتها للتجعد وتحملها للاستخدام اليومي والسفر الطويل.',
  aiSummaryAr: 'توفر يونيوم بليزرات طيران راقية مصممة للطيارين وأطقم الضيافة الجوية والموظفين الإداريين، تتميز بمقاومتها للتجعد وتحملها للاستخدام اليومي والسفر الطويل.'
});

export const dynamic = 'force-static';

const products = [
  { name: 'بليزر كابتن طيار (4 خطوط)', price: '580 ريال', desc: 'بليزر فاخر باللون الكحلي الداكن أو الأسود، مصمم بـ 4 خطوط ذهبية أو فضية مع أزرار معدنية تحمل شعار الخطوط الجوية.' },
  { name: 'بليزر طاقم الضيافة الجوية', price: '450 ريال', desc: 'جاكيت أنيق ومقاوم للتجاعيد مصمم خصيصاً للمضيفين والمضيفات ليتحمل ساعات العمل الطويلة مع الحفاظ على مظهر مثالي.' },
  { name: 'بليزر الموظفين الأرضيين', price: '410 ريال', desc: 'بليزر عملي وأنيق مخصص لموظفي الاستقبال وبوابات الصعود، مزود بجيوب إضافية مخفية للوثائق وتصاريح المرور.' },
  { name: 'بليزر إداري تنفيذي', price: '490 ريال', desc: 'بليزر فائق الجودة لمسؤولي المحطة والإدارة التنفيذية لشركة الطيران، يمنح مظهراً قيادياً وموثوقاً.' },
];

const faqs = [
  { question: 'هل يمكنكم تصنيع البليزرات بمقاسات مخصصة لأفراد الطاقم؟', answer: 'نعم، نحن نقدم خدمة التفصيل والمقاسات المخصصة (Made-to-Measure) لأطقم الطيران لضمان ملاءمة مثالية لكل فرد، مع إمكانية أخذ المقاسات في مقر الشركة.' },
  { question: 'ما هو نوع القماش المستخدم في بليزرات الطيران؟', answer: 'نستخدم مزيجاً فاخراً من الصوف (Wool Blend) عالي الجودة مع نسب دقيقة من الإيلاستين والبوليستر لضمان المتانة العالية، الراحة القصوى، ومقاومة التجاعيد الناتجة عن الجلوس لفترات طويلة أثناء الرحلات.' },
  { question: 'هل توفرون خدمة التطريز لأجنحة وشعارات الخطوط الجوية؟', answer: 'بالتأكيد، نحن متخصصون في التطريز الاحترافي للرموز الجوية، الأجنحة (Aviation Wings)، والشعارات بدقة متناهية وبخيوط ذهبية أو فضية مقاومة للبهتان.' },
];

export default function AviationBlazerPageAr() {
  return (
    <>
      <SEO2026 
        title="بليزرات وجاكيتات الطيران" 
        titleAr="بليزرات وجاكيتات الطيران" 
        description="بليزرات احترافية مصممة للطيارين وأطقم الضيافة الجوية." 
        locale="ar" 
        pageType="product" 
        mainEntity="بليزرات الطيران" 
        primaryImage="/images/aviation/aviation_uniform_main.jpg" 
        primaryImageAlt="بليزرات الطيران" 
        faqs={faqs} 
        breadcrumbs={[
          { name: 'المتجر', url: '/ar/shop' }, 
          { name: 'أزياء الطيران', url: '/ar/shop/aviation-uniforms' }, 
          { name: 'بليزرات الطيران', url: '/ar/shop/aviation-uniforms/aviation-blazer' }
        ]} 
        certifications={['ISO 9001:2015', 'Aviation Safety Compliant']} 
        clientCount={8} 
        yearsInBusiness={15} 
        industry="Aviation" 
      />
      <section className="bg-gradient-to-br from-neutral-900 via-slate-800 to-sky-950 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' }, 
            { label: 'المتجر', href: '/ar/shop' }, 
            { label: 'أزياء الطيران', href: '/ar/shop/aviation-uniforms' }, 
            { label: 'بليزرات الطيران', href: '/ar/shop/aviation-uniforms/aviation-blazer' }
          ]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              بليزرات وجاكيتات <span className="bg-gradient-to-r from-sky-400 to-indigo-400 text-transparent bg-clip-text">الطيران</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              أناقة لا تضاهى ومظهر قيادي للطيارين، المضيفين، وموظفي الخدمات الأرضية في شركات الطيران السعودية.
            </p>
          </div>
        </Container>
      </section>
      
      <main className="py-16" dir="rtl">
        <Container>
          <SectionHeading subtitle="الهيبة والأناقة في كل التفاصيل" centered>مجموعة جاكيتات وبليزرات الطيران</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
            {products.map((p, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg hover:border-sky-100 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
                  <span className="text-sky-700 font-bold bg-sky-50 px-3 py-1 rounded-full">{p.price}</span>
                </div>
                <p className="text-gray-600 text-base leading-relaxed mt-4">{p.desc}</p>
                <Link href="/ar/quote?product=aviation-blazer" className="inline-flex items-center gap-2 mt-6 text-sky-700 font-medium hover:text-sky-800 hover:underline">
                  طلب عرض سعر وتخصيص <span aria-hidden="true">←</span>
                </Link>
              </div>
            ))}
          </div>

          <section className="mt-20 mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="أسئلة شائعة" centered>الأسئلة الشائعة حول بليزرات الطيران</SectionHeading>
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
