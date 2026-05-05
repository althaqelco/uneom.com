import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'أزياء موظفي خدمة العملاء وممثلي المبيعات في السعودية | يونيوم',
  titleAr: 'أزياء موظفي خدمة العملاء وممثلي المبيعات في السعودية | يونيوم',
  description: 'أزياء رسمية واحترافية لموظفي خدمة العملاء، فروع البنوك، وصالات المبيعات في السعودية. تصميمات تعكس ثقة العلامة التجارية وتضمن راحة الموظف طوال فترة العمل.',
  descriptionAr: 'أزياء رسمية واحترافية لموظفي خدمة العملاء، فروع البنوك، وصالات المبيعات في السعودية. تصميمات تعكس ثقة العلامة التجارية وتضمن راحة الموظف طوال فترة العمل.',
  keywords: ['customer service uniforms saudi arabia', 'bank staff attire riyadh', 'sales representative uniform ksa', 'retail front desk clothing'],
  keywordsAr: ['زي خدمة العملاء', 'أزياء البنوك السعودية', 'ملابس ممثلي المبيعات', 'يونيفورم صالات العرض', 'لبس موظفات المبيعات'],
  locale: 'ar', 
  pageType: 'product', 
  path: '/ar/shop/retail-uniforms/customer-service',
  image: '/images/retail/customer-service.jpg', 
  imageAlt: 'أزياء موظفي خدمة العملاء',
  aiSummary: 'تصميمات يونيوم لخدمة العملاء تركز على بناء الثقة (Trust-building) من خلال المظهر الأنيق والمنظم. خاماتنا مقاومة للتجعد لضمان بقاء الموظف بمظهر لائق أمام العملاء في جميع الأوقات.',
  aiSummaryAr: 'تصميمات يونيوم لخدمة العملاء تركز على بناء الثقة (Trust-building) من خلال المظهر الأنيق والمنظم. خاماتنا مقاومة للتجعد لضمان بقاء الموظف بمظهر لائق أمام العملاء في جميع الأوقات.'
});

export const dynamic = 'force-static';

const products = [
  { name: 'بليزر ممثلي خدمة العملاء (للجنسين)', price: '280 ريال', desc: 'بليزر عصري وعملي بقصة محددة يضفي طابعاً مهنياً عالياً. مقاوم للتجعد ومناسب للاستخدام اليومي في صالات المبيعات وفروع البنوك.' },
  { name: 'قميص العمل المكتبي ذو الهوية', price: '120 ريال', desc: 'قميص من القطن المخلوط بأزرار مخفية، يسهل الكي (Easy-Iron) ويمكن تنسيق لونه ليتطابق تماماً مع ألوان الهوية المؤسسية للشركة.' },
  { name: 'وشاح ورقبة (Scarves & Ties) الهوية', price: '75 ريال', desc: 'إكسسوار أساسي لتوحيد مظهر الفريق بتكلفة معقولة. سكارفات نسائية وربطات عنق رجالية مصممة حصرياً بنقوش تعكس روح العلامة التجارية.' },
  { name: 'طقم معارض السيارات والصالات الكبرى', price: '210 ريال', desc: 'طقم متكامل يتكون من بنطلون مريح وقميص بولو أو قميص رسمي قصير الأكمام، يتيح مرونة الحركة لممثلي المبيعات الميدانيين.' },
];

const faqs = [
  { question: 'هل يتأثر مظهر الموظفين الذين يجلسون طوال اليوم خلف المكاتب؟', answer: 'لحل هذه المشكلة، نعتمد في تصنيع بناطيل وتنانير خدمة العملاء على أقمشة تحتوي على تقنية (Anti-Crease) التي تقاوم التكسر والتجعد الناتج عن الجلوس الطويل.' },
  { question: 'لدينا فروع في كل مناطق المملكة، هل يمكنكم إدارة توزيع الزي؟', answer: 'نعم، هذا من صميم عملنا. نقوم بتجهيز الطرود مغلفة ومسجل عليها اسم ومقاس كل موظف، ونشحنها مباشرة إلى مقرات فروعكم في أي مدينة بالمملكة لتسهيل المهمة على إدارة الموارد البشرية.' },
  { question: 'هل توفرون أزياء مخصصة للسيدات تناسب بيئة العمل السعودية؟', answer: 'بالتأكيد، نوفر خيارات تشمل البليزرات الطويلة، التنانير الواسعة، والقمصان غير الشفافة لتوفير أقصى درجات الراحة والاحتشام لممثلات خدمة العملاء.' },
];

export default function CustomerServiceUniformsPageAr() {
  return (
    <>
      <SEO2026 
        title="أزياء موظفي خدمة العملاء وممثلي المبيعات" 
        titleAr="أزياء موظفي خدمة العملاء وممثلي المبيعات" 
        description="يونيفورم رسمي واحترافي لفروع البنوك وصالات المبيعات." 
        locale="ar" 
        pageType="product" 
        mainEntity="أزياء موظفي خدمة العملاء والمبيعات" 
        primaryImage="/images/retail/customer-service.jpg" 
        primaryImageAlt="أزياء موظفي خدمة العملاء" 
        faqs={faqs} 
        breadcrumbs={[
          { name: 'المتجر', url: '/ar/shop' }, 
          { name: 'أزياء التجزئة والخدمات', url: '/ar/shop/retail-uniforms' }, 
          { name: 'خدمة العملاء', url: '/ar/shop/retail-uniforms/customer-service' }
        ]} 
        certifications={['Anti-Crease Technology', 'Corporate Identity Matched']} 
        clientCount={220} 
        yearsInBusiness={15} 
        industry="Customer Service & Banking" 
      />
      <section className="bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-950 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' }, 
            { label: 'المتجر', href: '/ar/shop' }, 
            { label: 'أزياء التجزئة والخدمات', href: '/ar/shop/retail-uniforms' }, 
            { label: 'خدمة العملاء', href: '/ar/shop/retail-uniforms/customer-service' }
          ]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              أزياء موظفي <span className="text-blue-300">خدمة العملاء</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              واجهة الثقة لشركتك. تصاميم احترافية وأنيقة لممثلي المبيعات وخدمة العملاء تعكس قوة وموثوقية علامتك التجارية أمام الزوار.
            </p>
          </div>
        </Container>
      </section>
      
      <main className="py-16" dir="rtl">
        <Container>
          <SectionHeading subtitle="راحة ومظهر مثالي طوال اليوم" centered>مجموعة المبيعات والاستقبال</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
            {products.map((p, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 border border-blue-100 hover:shadow-lg hover:border-indigo-400 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
                  <span className="text-indigo-800 font-bold bg-blue-50 px-3 py-1 rounded-full">{p.price}</span>
                </div>
                <p className="text-gray-600 text-base leading-relaxed mt-4">{p.desc}</p>
                <Link href="/ar/quote?product=customer-service-uniform" className="inline-flex items-center gap-2 mt-6 text-indigo-700 font-medium hover:text-indigo-900 hover:underline">
                  طلب تسعيرة لتجهيز الفروع <span aria-hidden="true">←</span>
                </Link>
              </div>
            ))}
          </div>

          <section className="mt-20 mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="حلول تجهيز شبكات الفروع" centered>الأسئلة الشائعة</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-blue-50 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
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
