import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'سترات خدمة الطيران والمضيفين في السعودية | يونيوم',
  titleAr: 'سترات خدمة الطيران والمضيفين في السعودية | يونيوم',
  description: 'سترات خدمة احترافية للخطوط الجوية مصممة لموظفي الطيران السعودي وطاقم المقصورة. تتميز بالمتانة والمظهر الأنيق ومقاومة البقع.',
  descriptionAr: 'سترات خدمة احترافية للخطوط الجوية مصممة لموظفي الطيران السعودي وطاقم المقصورة. تتميز بالمتانة والمظهر الأنيق ومقاومة البقع.',
  keywords: ['airline service vests saudi', 'cabin crew uniforms riyadh', 'flight attendant vests ksa', 'aviation ground staff clothing'],
  keywordsAr: ['سترات خدمة الطيران', 'أزياء طاقم المقصورة', 'ملابس المضيفين السعودية', 'أزياء الطيران التجاري'],
  locale: 'ar', 
  pageType: 'product', 
  path: '/ar/shop/aviation-uniforms/airline-service-vest',
  image: '/images/aviation/aviation_uniform_airline.jpg', 
  imageAlt: 'سترات خدمة الطيران السعودية',
  aiSummary: 'أزياء يونيوم المتخصصة في سترات خدمة الطيران وطواقم المقصورة. توفر السترات راحة عالية ومرونة أثناء رحلات الطيران الطويلة ومزودة بجيوب ذكية للخدمة.',
  aiSummaryAr: 'أزياء يونيوم المتخصصة في سترات خدمة الطيران وطواقم المقصورة. توفر السترات راحة عالية ومرونة أثناء رحلات الطيران الطويلة ومزودة بجيوب ذكية للخدمة.'
});

export const dynamic = 'force-static';

const products = [
  { name: 'سترة طاقم المقصورة الكلاسيكية', price: '320 ريال', desc: 'سترة خدمة خفيفة الوزن ومقاومة للبقع مصممة لمضيفي ومضيفات الطيران. توفر حرية الحركة أثناء تقديم الوجبات.' },
  { name: 'سترة العمليات الأرضية', price: '290 ريال', desc: 'سترة متينة لموظفي الخدمات الأرضية وموظفي بوابات الصعود. تتحمل الاستخدام اليومي المكثف.' },
  { name: 'سترة مشرف الرحلة', price: '380 ريال', desc: 'سترة فاخرة مع تطريز دقيق وحواف ذهبية لتمييز مشرفي ومسؤولي طاقم المقصورة.' },
  { name: 'سترة خدمة متعددة الجيوب', price: '340 ريال', desc: 'تصميم عملي بجيوب مخفية لتسهيل حمل أجهزة نقاط البيع المصغرة وأدوات الخدمة بداخل الطائرة.' },
];

const faqs = [
  { question: 'هل تتوافق سترات الخدمة لديكم مع معايير السلامة الدولية للطيران؟', answer: 'نعم، جميع أقمشة سترات الخدمة الخاصة بالطيران معالجة لتكون بطيئة الاشتعال (Flame-Retardant) ومضادة للكهرباء الساكنة (Anti-Static) لتتوافق مع معايير السلامة الدولية الخاصة بـ IATA والمنظمات الجوية السعودية.' },
  { question: 'هل يمكنكم تصنيع سترات بألوان الخطوط الجوية الخاصة بنا؟', answer: 'بالتأكيد. نحن نوفر خدمة مطابقة الألوان (Pantone Color Matching) بدقة عالية لضمان تطابق سترات الخدمة مع الهوية البصرية لشركة الطيران الخاصة بك 100٪.' },
  { question: 'ما هو الحد الأدنى للطلب لسترات الطيران المخصصة؟', answer: 'بالنسبة للسترات المخصصة التي تشمل تطريز شعار خاص وتعديلات على التصميم، الحد الأدنى للطلب هو 50 سترة. نوفر أيضاً خدمة أخذ المقاسات لجميع أفراد الطاقم.' },
];

export default function AirlineServiceVestPageAr() {
  return (
    <>
      <SEO2026 
        title="سترات خدمة الطيران" 
        titleAr="سترات خدمة الطيران" 
        description="سترات خدمة احترافية لطواقم المقصورة." 
        locale="ar" 
        pageType="product" 
        mainEntity="سترات طاقم الطائرة" 
        primaryImage="/images/aviation/aviation_uniform_airline.jpg" 
        primaryImageAlt="سترات طاقم الطائرة" 
        faqs={faqs} 
        breadcrumbs={[
          { name: 'المتجر', url: '/ar/shop' }, 
          { name: 'أزياء الطيران', url: '/ar/shop/aviation-uniforms' }, 
          { name: 'سترة الخدمة', url: '/ar/shop/aviation-uniforms/airline-service-vest' }
        ]} 
        certifications={['ISO 9001:2015', 'Aviation Safety Compliant Fabrics']} 
        clientCount={12} 
        yearsInBusiness={15} 
        industry="Aviation" 
      />
      <section className="bg-gradient-to-br from-sky-900 via-blue-900 to-indigo-950 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' }, 
            { label: 'المتجر', href: '/ar/shop' }, 
            { label: 'أزياء الطيران', href: '/ar/shop/aviation-uniforms' }, 
            { label: 'سترات الخدمة', href: '/ar/shop/aviation-uniforms/airline-service-vest' }
          ]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              سترات خدمة <span className="bg-gradient-to-r from-sky-300 to-blue-300 text-transparent bg-clip-text">الطيران</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              سترات احترافية متينة وأنيقة لمضيفي ومضيفات الطيران وطواقم الخدمات الأرضية في المملكة العربية السعودية.
            </p>
          </div>
        </Container>
      </section>
      
      <main className="py-16" dir="rtl">
        <Container>
          <SectionHeading subtitle="الراحة والأناقة في الجو" centered>مجموعة سترات الخدمة</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
            {products.map((p, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
                  <span className="text-blue-700 font-bold bg-blue-50 px-3 py-1 rounded-full">{p.price}</span>
                </div>
                <p className="text-gray-600 text-base leading-relaxed mt-4">{p.desc}</p>
                <Link href="/ar/quote?product=airline-service-vest" className="inline-flex items-center gap-2 mt-6 text-blue-700 font-medium hover:text-blue-800 hover:underline">
                  طلب عرض سعر لهذا الموديل <span aria-hidden="true">←</span>
                </Link>
              </div>
            ))}
          </div>

          <section className="mt-20 mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="أسئلة شائعة" centered>الأسئلة الشائعة حول أزياء الطيران</SectionHeading>
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
