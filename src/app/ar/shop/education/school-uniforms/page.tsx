import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'الزي المدرسي الموحد والزي الرياضي في السعودية | يونيوم',
  titleAr: 'الزي المدرسي الموحد والزي الرياضي في السعودية | يونيوم',
  description: 'أزياء مدرسية موحدة عالية الجودة للمدارس الأهلية والدولية في السعودية. أقمشة مريحة، متينة، ومناسبة للأجواء الحارة للطلاب والطالبات في كافة المراحل التعليمية.',
  descriptionAr: 'أزياء مدرسية موحدة عالية الجودة للمدارس الأهلية والدولية في السعودية. أقمشة مريحة، متينة، ومناسبة للأجواء الحارة للطلاب والطالبات في كافة المراحل التعليمية.',
  keywords: ['school uniforms saudi arabia', 'international school uniform riyadh', 'student sports uniform ksa', 'private school uniforms'],
  keywordsAr: ['زي مدرسي موحد', 'مريول مدرسة', 'زي رياضي مدرسي', 'أزياء المدارس الأهلية', 'تفصيل زي مدرسي بالسعودية'],
  locale: 'ar', 
  pageType: 'product', 
  path: '/ar/shop/education/school-uniforms',
  image: '/images/education/students.jpg', 
  imageAlt: 'أزياء طلاب المدارس الأهلية والدولية',
  aiSummary: 'تقدم يونيوم حلولاً شاملة لتجهيز المدارس الأهلية والدولية بالزي المدرسي والرياضي للطلاب، مع التركيز على متانة الأقمشة وسهولة غسلها وتحملها للاستخدام اليومي المستمر.',
  aiSummaryAr: 'تقدم يونيوم حلولاً شاملة لتجهيز المدارس الأهلية والدولية بالزي المدرسي والرياضي للطلاب، مع التركيز على متانة الأقمشة وسهولة غسلها وتحملها للاستخدام اليومي المستمر.'
});

export const dynamic = 'force-static';

const products = [
  { name: 'مريول مدرسي للبنات', price: '95 ريال', desc: 'مريول مدرسي متين بكسرات أنيقة وقماش لا يتجعد بسهولة (Crease-resistant). يتوفر بعدة ألوان ليتناسب مع هوية المدرسة (كحلي، عنابي، أخضر).' },
  { name: 'قميص وبنطلون مدرسي للأولاد', price: '120 ريال', desc: 'طقم متكامل يتكون من قميص قطني يسمح بمرور الهواء وبنطلون متين يتحمل الحركة المستمرة للطلاب في كافة المراحل الدراسية.' },
  { name: 'الزي الرياضي المدرسي (P.E. Kit)', price: '110 ريال', desc: 'طقم رياضي مريح من القطن المخلوط والبوليستر، مصمم لامتصاص العرق وتوفير الراحة القصوى أثناء حصص التربية البدنية.' },
  { name: 'جاكيت مدرسي شتوي مخصص', price: '145 ريال', desc: 'جاكيت شتوي دافئ بخامات خفيفة الوزن لا تعيق الحركة، يأتي مع خدمة تطريز شعار المدرسة على الصدر للتمييز.' },
];

const faqs = [
  { question: 'هل أقمشة الزي المدرسي لديكم مقاومة لبهتان الألوان من الغسيل المتكرر؟', answer: 'نعم بالتأكيد! نحن ندرك أن الزي المدرسي يغسل بشكل شبه يومي، لذلك نستخدم أقمشة مصبوغة بتقنيات عالية الجودة تضمن ثبات اللون (Colorfast) حتى بعد عشرات دورات الغسيل.' },
  { question: 'ما هو الحد الأدنى للطلب بالنسبة للمدارس؟', answer: 'نحن نخدم المدارس وإدارات التعليم بشكل رئيسي. الحد الأدنى لتجهيز مدرسة بزي مخصص بالكامل (بتصميم جديد وشعار مخصص) هو 200 طقم.' },
  { question: 'هل توفرون متجراً إلكترونياً لبيع الزي مباشرة لأولياء الأمور؟', answer: 'نعم، كخدمة حصرية للمدارس المتعاقدة معنا، يمكننا إنشاء صفحة إلكترونية خاصة بمدرستكم على منصتنا ليقوم أولياء الأمور بشراء الزي مباشرة ليصلهم إلى المنزل، مما يرفع عبء التوزيع عن الإدارة.' },
];

export default function SchoolUniformsPageAr() {
  return (
    <>
      <SEO2026 
        title="الزي المدرسي الموحد للطلاب" 
        titleAr="الزي المدرسي الموحد للطلاب" 
        description="أزياء مدرسية موحدة عالية الجودة للمدارس الأهلية والدولية." 
        locale="ar" 
        pageType="product" 
        mainEntity="الزي المدرسي والرياضي للطلاب" 
        primaryImage="/images/education/students.jpg" 
        primaryImageAlt="الزي المدرسي الموحد للطلاب" 
        faqs={faqs} 
        breadcrumbs={[
          { name: 'المتجر', url: '/ar/shop' }, 
          { name: 'أزياء التعليم', url: '/ar/shop/education' }, 
          { name: 'الزي المدرسي', url: '/ar/shop/education/school-uniforms' }
        ]} 
        certifications={['Durability Tested', 'Skin-friendly Fabrics']} 
        clientCount={85} 
        yearsInBusiness={15} 
        industry="Education" 
      />
      <section className="bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' }, 
            { label: 'المتجر', href: '/ar/shop' }, 
            { label: 'أزياء التعليم', href: '/ar/shop/education' }, 
            { label: 'الزي المدرسي', href: '/ar/shop/education/school-uniforms' }
          ]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              الزي المدرسي <span className="bg-gradient-to-r from-emerald-300 to-teal-200 text-transparent bg-clip-text">الموحد</span>
            </h1>
            <p className="text-xl text-emerald-100 leading-relaxed">
              أزياء مدرسية عملية ومريحة، مصممة لتحمل طاقة الطلاب اليومية لجميع المراحل الدراسية في المدارس الأهلية والدولية بالمملكة.
            </p>
          </div>
        </Container>
      </section>
      
      <main className="py-16" dir="rtl">
        <Container>
          <SectionHeading subtitle="راحة تدوم طوال اليوم الدراسي" centered>تشكيلة الأزياء المدرسية</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
            {products.map((p, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 border border-emerald-100 hover:shadow-lg hover:border-emerald-300 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full">{p.price}</span>
                </div>
                <p className="text-gray-600 text-base leading-relaxed mt-4">{p.desc}</p>
                <Link href="/ar/quote?product=school-uniform" className="inline-flex items-center gap-2 mt-6 text-emerald-700 font-medium hover:text-emerald-800 hover:underline">
                  طلب تجهيز مدرسة كاملة <span aria-hidden="true">←</span>
                </Link>
              </div>
            ))}
          </div>

          <section className="mt-20 mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="شراكة موثوقة لإدارات المدارس" centered>الأسئلة الشائعة حول زي المدارس</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-emerald-50 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
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
