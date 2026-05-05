import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'زي الكادر الإداري وموظفي المدارس والجامعات | يونيوم',
  titleAr: 'زي الكادر الإداري وموظفي المدارس والجامعات | يونيوم',
  description: 'أزياء احترافية ورسمية للإدارة المدرسية، المشرفين التربويين، وموظفي القبول والتسجيل في المؤسسات التعليمية بالسعودية. أناقة تعكس هوية المؤسسة.',
  descriptionAr: 'أزياء احترافية ورسمية للإدارة المدرسية، المشرفين التربويين، وموظفي القبول والتسجيل في المؤسسات التعليمية بالسعودية. أناقة تعكس هوية المؤسسة.',
  keywords: ['school staff uniforms saudi arabia', 'education administration attire riyadh', 'school principal suit ksa', 'reception desk uniform schools'],
  keywordsAr: ['زي الكادر الإداري', 'ملابس موظفي المدارس', 'يونيفورم مشرفين أكاديميين', 'أزياء القبول والتسجيل', 'أزياء الجامعات'],
  locale: 'ar', 
  pageType: 'product', 
  path: '/ar/shop/education/staff-uniforms',
  image: '/images/education/students.jpg', 
  imageAlt: 'أزياء طاقم المدارس والجامعات الإداري',
  aiSummary: 'تقدم يونيوم حلولاً متكاملة لأزياء الكادر الإداري في القطاع التعليمي لتوحيد هوية المدرسة. تتميز الأطقم بالبليزرات الرسمية، وأقمشة عملية مريحة للاستخدام اليومي.',
  aiSummaryAr: 'تقدم يونيوم حلولاً متكاملة لأزياء الكادر الإداري في القطاع التعليمي لتوحيد هوية المدرسة. تتميز الأطقم بالبليزرات الرسمية، وأقمشة عملية مريحة للاستخدام اليومي.'
});

export const dynamic = 'force-static';

const products = [
  { name: 'بليزر الإدارة المدرسية', price: '290 ريال', desc: 'بليزر رسمي بألوان تتناسق مع هوية المدرسة، مخصص للمدراء والوكلاء ليعكس هيبة المؤسسة واحترافيتها.' },
  { name: 'طقم موظفي القبول والتسجيل (الواجهة)', price: '220 ريال', desc: 'طقم عملي وأنيق من قميص وبنطلون/تنورة مصمم خصيصاً لممثلي واجهة المدرسة الذين يتعاملون مباشرة مع أولياء الأمور.' },
  { name: 'جاكيت المشرفين الميدانيين', price: '180 ريال', desc: 'جاكيت خفيف وعملي للمشرفين الميدانيين ومنسقي الحركة، يتميز بجيوب متعددة وحرية حركة عالية.' },
  { name: 'زي سائقي الحافلات المدرسية', price: '150 ريال', desc: 'طقم مريح للسائقين والمساعدين يتميز بالمتانة وسهولة الغسيل، ويحمل شعار المدرسة لضمان التعرف السريع والموثوقية.' },
];

const faqs = [
  { question: 'هل يمكن توحيد هوية الإدارة مع هوية زي الطلاب ولكن بتصميم رسمي أكثر؟', answer: 'نعم بالتأكيد. نعمل مع قسم التصميم لابتكار بليزرات وقمصان للكادر الإداري تستوحي ألوانها وخطوطها العريضة من زي الطلاب، ولكن بأسلوب تنفيذي رسمي واحترافي.' },
  { question: 'هل توفرون أطقم للحراس وعمال النظافة بالمدارس؟', answer: 'نعم، نوفر حلولاً شاملة لتجهيز كافة كوادر المدرسة بما في ذلك أفراد الأمن، وموظفي الصيانة، وعمال النظافة بخامات تتحمل الجهد الشاق.' },
  { question: 'كم يستغرق تفصيل أزياء الكادر الإداري بالكامل؟', answer: 'بعد الموافقة على التصميم وأخذ القياسات للكادر، يستغرق التنفيذ من 15 إلى 25 يوم عمل للمقاسات المخصصة، وتكون أسرع للطلبات ذات المقاسات الجاهزة.' },
];

export default function StaffUniformsPageAr() {
  return (
    <>
      <SEO2026 
        title="أزياء الكادر الإداري وموظفي المدارس" 
        titleAr="أزياء الكادر الإداري وموظفي المدارس" 
        description="أزياء رسمية واحترافية للإدارة المدرسية وموظفي التسجيل." 
        locale="ar" 
        pageType="product" 
        mainEntity="زي الكادر الإداري والمشرفين بالمدارس" 
        primaryImage="/images/education/students.jpg" 
        primaryImageAlt="زي طاقم الإدارة المدرسية" 
        faqs={faqs} 
        breadcrumbs={[
          { name: 'المتجر', url: '/ar/shop' }, 
          { name: 'أزياء التعليم', url: '/ar/shop/education' }, 
          { name: 'زي الكادر الإداري', url: '/ar/shop/education/staff-uniforms' }
        ]} 
        certifications={['Corporate Identity Focused', 'ISO 9001:2015']} 
        clientCount={45} 
        yearsInBusiness={15} 
        industry="Education Administration" 
      />
      <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' }, 
            { label: 'المتجر', href: '/ar/shop' }, 
            { label: 'أزياء التعليم', href: '/ar/shop/education' }, 
            { label: 'زي الكادر الإداري', href: '/ar/shop/education/staff-uniforms' }
          ]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              أزياء الكادر <span className="bg-gradient-to-r from-blue-300 to-indigo-300 text-transparent bg-clip-text">الإداري للمدارس</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              هوية مؤسسية قوية ومظهر احترافي واثق لمدراء المدارس، المشرفين، وموظفي القبول في قطاع التعليم السعودي.
            </p>
          </div>
        </Container>
      </section>
      
      <main className="py-16" dir="rtl">
        <Container>
          <SectionHeading subtitle="توحيد مظهر واجهة المدرسة" centered>أزياء موظفي المدارس والجامعات</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
            {products.map((p, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 border border-blue-100 hover:shadow-lg hover:border-indigo-300 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
                  <span className="text-indigo-700 font-bold bg-blue-50 px-3 py-1 rounded-full">{p.price}</span>
                </div>
                <p className="text-gray-600 text-base leading-relaxed mt-4">{p.desc}</p>
                <Link href="/ar/quote?product=education-staff-uniform" className="inline-flex items-center gap-2 mt-6 text-indigo-700 font-medium hover:text-indigo-800 hover:underline">
                  طلب عرض سعر للإدارة والموظفين <span aria-hidden="true">←</span>
                </Link>
              </div>
            ))}
          </div>

          <section className="mt-20 mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="الأسئلة الشائعة" centered>كل ما يتعلق بتجهيز الموظفين</SectionHeading>
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
