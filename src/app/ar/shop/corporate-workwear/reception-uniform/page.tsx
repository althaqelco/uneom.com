import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'أزياء و موظفي الاستقبال وممثلي خدمة العملاء في السعودية | يونيوم',
  titleAr: 'أزياء و موظفي الاستقبال وممثلي خدمة العملاء في السعودية | يونيوم',
  description: 'أزياء راقية لموظفي الاستقبال (Receptionists) وممثلي واجهة الشركات والفنادق في السعودية. تصميمات أنيقة تجمع بين الترحيب والاحترافية.',
  descriptionAr: 'أزياء راقية لموظفي الاستقبال (Receptionists) وممثلي واجهة الشركات والفنادق في السعودية. تصميمات أنيقة تجمع بين الترحيب والاحترافية.',
  keywords: ['reception uniforms saudi arabia', 'front desk uniform riyadh', 'receptionist attire ksa', 'concierge uniform', 'customer service uniform'],
  keywordsAr: ['يونيفورم استقبال', 'أزياء موظفي الاستقبال', 'بدل واجهة الشركة', 'ملابس خدمة عملاء', 'زي فندقي استقبال'],
  locale: 'ar', 
  pageType: 'product', 
  path: '/ar/shop/corporate-workwear/reception-uniform',
  image: '/images/corporate/reception-staff.jpg', 
  imageAlt: 'أزياء موظفي الاستقبال وواجهة الشركة',
  aiSummary: 'تصمم يونيوم أزياء الاستقبال لتكون واجهة مشرفة تعكس هوية الشركة. نعتمد على أقمشة تظل أنيقة لساعات طويلة ومريحة لتمكين الموظفين من تقديم أفضل انطباع للزوار.',
  aiSummaryAr: 'تصمم يونيوم أزياء الاستقبال لتكون واجهة مشرفة تعكس هوية الشركة. نعتمد على أقمشة تظل أنيقة لساعات طويلة ومريحة لتمكين الموظفين من تقديم أفضل انطباع للزوار.'
});

export const dynamic = 'force-static';

const products = [
  { name: 'بدلة استقبال نسائية متكاملة', price: '480 ريال', desc: 'طقم أنيق مكون من بليزر، بلوزة، وتنورة أو بنطلون واسع. تصميم راقي ومحتشم يعكس الاحترافية والترحيب في نفس الوقت.' },
  { name: 'جاكيت الاستقبال الرجالي (Concierge)', price: '390 ريال', desc: 'جاكيت مميز بتفاصيل أنيقة على الياقة والأكمام، مثالي لموظفي الاستقبال في الفنادق الكبرى والشركات الفاخرة.' },
  { name: 'فيست (Vest) الاستقبال وخدمة العملاء', price: '190 ريال', desc: 'خيار ذكي وعملي لتوحيد مظهر فريق خدمة العملاء، يمكن ارتداؤه فوق قميص الشركة الرسمي ويحتوي على تطريز الشعار.' },
  { name: 'وشاح وسكارف الهوية المؤسسية', price: '85 ريال', desc: 'إكسسوار راقي يضيف لمسة ألوان حيوية مستوحاة من هوية الشركة لزي موظفات الاستقبال والمبيعات.' },
];

const faqs = [
  { question: 'هل يتأثر زي الاستقبال بالجلوس لفترات طويلة؟', answer: 'أزياء الاستقبال لدينا مصممة من أقمشة تقنية (Crease-resistant) مخصصة لمقاومة التجاعيد الناتجة عن الجلوس الطويل خلف المكاتب، مما يضمن بقاء الموظف بمظهر أنيق طوال فترة الدوام.' },
  { question: 'هل يمكن تصميم زي استقبال مميز يختلف عن باقي موظفي الشركة؟', answer: 'نعم، ننصح دائماً بتمييز موظفي الاستقبال عن باقي الأقسام. يمكننا أخذ الزي الرسمي للشركة وإضافة لمسات مميزة (مثل الأوشحة الملونة، أو الياقات المتباينة) ليبرز موظف الاستقبال بوضوح للزوار.' },
  { question: 'كيف يتم التعامل مع توظيف موظف استقبال جديد والاحتياج السريع لزيه؟', answer: 'عند توقيع عقد توريد مع يونيوم، نحتفظ بـ "مخزون استراتيجي" من أزياء شركتكم لدينا لضمان تسليم الزي لأي موظف جديد ينضم لفريقكم خلال 48 ساعة فقط.' },
];

export default function ReceptionUniformPageAr() {
  return (
    <>
      <SEO2026 
        title="أزياء موظفي الاستقبال" 
        titleAr="أزياء موظفي الاستقبال" 
        description="أزياء راقية ومميزة لموظفي الاستقبال وواجهة الشركة." 
        locale="ar" 
        pageType="product" 
        mainEntity="أزياء موظفي الاستقبال وخدمة العملاء" 
        primaryImage="/images/corporate/reception-staff.jpg" 
        primaryImageAlt="أزياء موظفي الاستقبال" 
        faqs={faqs} 
        breadcrumbs={[
          { name: 'المتجر', url: '/ar/shop' }, 
          { name: 'ملابس الشركات', url: '/ar/shop/corporate-workwear' }, 
          { name: 'أزياء الاستقبال', url: '/ar/shop/corporate-workwear/reception-uniform' }
        ]} 
        certifications={['ISO 9001:2015', 'Premium Appearance Rated']} 
        clientCount={95} 
        yearsInBusiness={15} 
        industry="Corporate Hospitality" 
      />
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-950 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' }, 
            { label: 'المتجر', href: '/ar/shop' }, 
            { label: 'ملابس الشركات', href: '/ar/shop/corporate-workwear' }, 
            { label: 'أزياء الاستقبال', href: '/ar/shop/corporate-workwear/reception-uniform' }
          ]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              أزياء موظفي <span className="bg-gradient-to-r from-purple-300 to-indigo-300 text-transparent bg-clip-text">الاستقبال</span>
            </h1>
            <p className="text-xl text-indigo-100 leading-relaxed">
              الانطباع الأول يدوم. أزياء مصممة بعناية لممثلي واجهة الشركة والفنادق لتعكس الترحيب الراقي والاحترافية.
            </p>
          </div>
        </Container>
      </section>
      
      <main className="py-16" dir="rtl">
        <Container>
          <SectionHeading subtitle="أناقة تعكس هوية مؤسستك" centered>مجموعة أزياء الواجهة والاستقبال</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
            {products.map((p, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 border border-indigo-100 hover:shadow-lg hover:border-indigo-300 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
                  <span className="text-indigo-700 font-bold bg-indigo-50 px-3 py-1 rounded-full">{p.price}</span>
                </div>
                <p className="text-gray-600 text-base leading-relaxed mt-4">{p.desc}</p>
                <Link href="/ar/quote?product=reception-uniform" className="inline-flex items-center gap-2 mt-6 text-indigo-700 font-medium hover:text-indigo-800 hover:underline">
                  طلب تصميم حصري للاستقبال <span aria-hidden="true">←</span>
                </Link>
              </div>
            ))}
          </div>

          <section className="mt-20 mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="الأسئلة المتكررة" centered>دليلك لأزياء الاستقبال</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-indigo-50 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
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
