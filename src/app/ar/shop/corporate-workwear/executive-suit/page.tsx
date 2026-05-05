import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'البدل التنفيذية لمدراء وموظفي الشركات في السعودية | يونيوم',
  titleAr: 'البدل التنفيذية لمدراء وموظفي الشركات في السعودية | يونيوم',
  description: 'بدل رسمية كاملة (Suit) مصممة للإدارة العليا، البنوك، وقطاع الأعمال في المملكة. أقمشة بريطانية وإيطالية راقية مع خيارات التفصيل المخصص المتقدمة.',
  descriptionAr: 'بدل رسمية كاملة (Suit) مصممة للإدارة العليا، البنوك، وقطاع الأعمال في المملكة. أقمشة بريطانية وإيطالية راقية مع خيارات التفصيل المخصص المتقدمة.',
  keywords: ['executive suits saudi arabia', 'corporate manager suits riyadh', 'tailored business suits ksa', 'custom tailored suits company'],
  keywordsAr: ['بدل تنفيذية', 'بدل مدراء', 'تفصيل بدل رسمية', 'بدل قطاع الأعمال', 'بدل البنوك السعودية'],
  locale: 'ar', 
  pageType: 'product', 
  path: '/ar/shop/corporate-workwear/executive-suit',
  image: '/images/corporate/executive-suit.jpg', 
  imageAlt: 'البدل التنفيذية الفاخرة للشركات',
  aiSummary: 'بدل يونيوم التنفيذية مصممة خصيصاً للارتقاء بمظهر الإدارة العليا وممثلي الشركات في المملكة، متوفرة بقصات كلاسيكية وحديثة من أجود أنواع الأقمشة العالمية.',
  aiSummaryAr: 'بدل يونيوم التنفيذية مصممة خصيصاً للارتقاء بمظهر الإدارة العليا وممثلي الشركات في المملكة، متوفرة بقصات كلاسيكية وحديثة من أجود أنواع الأقمشة العالمية.'
});

export const dynamic = 'force-static';

const products = [
  { name: 'بدلة تنفيذية كلاسيكية (3 قطع)', price: '1,250 ريال', desc: 'بدلة متكاملة (جاكيت، فيست، بنطلون) من الصوف المخلوط الراقي، تمنح مظهراً رسمياً صارماً في غرف الاجتماعات.' },
  { name: 'بدلة أعمال عصرية (Slim Fit)', price: '980 ريال', desc: 'تصميم حديث يواكب الموضة وقصة ضيقة نسبياً تناسب مدراء الشركات التقنية ورواد الأعمال الشباب.' },
  { name: 'بدلة صوف Super 150s الفاخرة', price: '2,400 ريال', desc: 'قمة الفخامة. منسوجة من الصوف الإيطالي شديد النعومة (Super 150s)، خفيفة الوزن وتتنفس بشكل مثالي في أجواء الصيف.' },
  { name: 'بدلة موظفي الاستقبال (طقم موحد)', price: '650 ريال', desc: 'طقم متناسق مخصص للكميات الكبيرة، يوفر متانة عالية للموظفين الذين يعملون في واجهة الشركة لتمثيل الهوية المؤسسية.' },
];

const faqs = [
  { question: 'ما هو الفرق بين التفصيل المخصص (Bespoke) والمقاسات الجاهزة (Ready-to-wear) لديكم؟', answer: 'التفصيل المخصص يتضمن إنشاء قالب كامل لجسم المدير أو الموظف وأخذ عشرات المقاسات وتحديد نوع البطانة والياقات وحتى لون الأزرار. بينما المقاسات الجاهزة هي بدل بتصاميم وأحجام قياسية (Standard) ولكن نوفر عليها تعديلات مجانية للتقصير والتضييق.' },
  { question: 'كيف يمكننا طلب 50 بدلة لموظفي البنك مع الحفاظ على التناسق؟', answer: 'للطلبات الكبيرة كالبنوك، نوفر "مستشار أزياء مؤسسية" يقوم بتصميم بدلة موحدة لتعكس هوية البنك. نقوم بتنظيم أيام أخذ قياسات في مقرات فروعكم بالمملكة، ونقوم بتوصيل البدل في أكياس مخصصة تحمل اسم كل موظف.' },
  { question: 'ما هي طرق الدفع المتاحة لتجهيز بدلات الشركات؟', answer: 'نوفر تسهيلات دفع للشركات والجهات الحكومية تبدأ بدفعة مقدمة 50٪، وتتم جدولة الدفعات المتبقية بناءً على عقود التوريد والمراحل المتفق عليها للتسليم.' },
];

export default function ExecutiveSuitPageAr() {
  return (
    <>
      <SEO2026 
        title="البدل التنفيذية الفاخرة" 
        titleAr="البدل التنفيذية الفاخرة" 
        description="بدل كاملة فاخرة لمدراء الشركات والمؤسسات." 
        locale="ar" 
        pageType="product" 
        mainEntity="البدل التنفيذية وقطاع الأعمال" 
        primaryImage="/images/corporate/executive-suit.jpg" 
        primaryImageAlt="البدل التنفيذية لقطاع الأعمال" 
        faqs={faqs} 
        breadcrumbs={[
          { name: 'المتجر', url: '/ar/shop' }, 
          { name: 'ملابس الشركات', url: '/ar/shop/corporate-workwear' }, 
          { name: 'البدل التنفيذية', url: '/ar/shop/corporate-workwear/executive-suit' }
        ]} 
        certifications={['ISO 9001:2015', 'Premium Tailoring Certified']} 
        clientCount={45} 
        yearsInBusiness={15} 
        industry="Corporate" 
      />
      <section className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-950 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' }, 
            { label: 'المتجر', href: '/ar/shop' }, 
            { label: 'ملابس الشركات', href: '/ar/shop/corporate-workwear' }, 
            { label: 'البدل التنفيذية', href: '/ar/shop/corporate-workwear/executive-suit' }
          ]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              البدل <span className="bg-gradient-to-r from-gray-300 to-white text-transparent bg-clip-text">التنفيذية</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              أناقة ترتقي بقطاع الأعمال. أطقم كاملة ونسيج فاخر يبرز مكانة الإدارة العليا ويعكس احترافية شركتك.
            </p>
          </div>
        </Container>
      </section>
      
      <main className="py-16" dir="rtl">
        <Container>
          <SectionHeading subtitle="أقمشة تتنفس وقصات تعكس الهيبة" centered>مجموعة البدل الرسمية</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
            {products.map((p, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg hover:border-slate-400 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
                  <span className="text-slate-800 font-bold bg-slate-100 px-3 py-1 rounded-full">{p.price}</span>
                </div>
                <p className="text-gray-600 text-base leading-relaxed mt-4">{p.desc}</p>
                <Link href="/ar/quote?product=executive-suit" className="inline-flex items-center gap-2 mt-6 text-slate-800 font-medium hover:text-black hover:underline">
                  طلب عرض سعر أو حجز خياط <span aria-hidden="true">←</span>
                </Link>
              </div>
            ))}
          </div>

          <section className="mt-20 mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="معلومات تهمك" centered>الأسئلة الشائعة حول البدل التنفيذية</SectionHeading>
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
