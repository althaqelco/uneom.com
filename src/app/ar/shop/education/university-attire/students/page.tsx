import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'أزياء طلاب الجامعات في السعودية | ملابس الحرم الجامعي - يونيوم',
  titleAr: 'أزياء طلاب الجامعات في السعودية | ملابس الحرم الجامعي - يونيوم',
  description: 'أزياء طلاب الجامعات في السعودية. بليزرات، بولو، هوديز وعباءات أكاديمية. تطريز مخصص لشعارات الجامعات. خصومات للكميات الكبيرة.',
  descriptionAr: 'أزياء طلاب الجامعات في السعودية. بليزرات، بولو، هوديز وعباءات أكاديمية. تطريز مخصص لشعارات الجامعات. خصومات للكميات الكبيرة.',
  keywords: ['university student uniforms saudi', 'academic wear ksa', 'college uniforms riyadh'],
  keywordsAr: ['أزياء طلاب الجامعات', 'ملابس جامعية', 'عباءات تخرج', 'هودي جامعي'],
  locale: 'ar', pageType: 'product', path: '/ar/shop/education/university-attire/students',
  image: '/images/education/students.jpg', imageAlt: 'أزياء طلاب الجامعات',
  aiSummary: 'أزياء يونيوم لطلاب الجامعات: بليزرات، قمصان بولو، هوديز، وعباءات تخرج مع تطريز مخصص لشعارات الجامعات السعودية.',
  aiSummaryAr: 'أزياء يونيوم لطلاب الجامعات: بليزرات، قمصان بولو، هوديز، وعباءات تخرج مع تطريز مخصص لشعارات الجامعات السعودية.'
});

export const dynamic = 'force-static';

const products = [
  { name: 'بليزر جامعي', price: '195 ريال', desc: 'بليزر مخصص مع تطريز شعار الجامعة. متوفر باللون الكحلي، الأسود، أو العنابي.' },
  { name: 'قميص بولو للحرم الجامعي', price: '65 ريال', desc: 'شعار الجامعة مطرز. نسيج يمتص الرطوبة. متوفر بأكثر من 10 ألوان.' },
  { name: 'هودي جامعي', price: '85 ريال', desc: 'مزيج قطن وبوليستر عالي الجودة. طباعة شعار الجامعة من الأمام أو الخلف.' },
  { name: 'عباءة أكاديمية (روب تخرج)', price: '150 ريال', desc: 'روب تخرج بألوان الجامعة وحواف مخصصة.' },
  { name: 'تيشيرت جامعي', price: '45 ريال', desc: 'ملابس غير رسمية للحرم الجامعي مع شعار الجامعة. أسعار خاصة لفعاليات الجامعة.' },
  { name: 'قميص رياضي', price: '75 ريال', desc: 'قمصان فرق رياضية مخصصة مع طباعة اسم الطالب ورقمه.' },
];

const faqs = [
  { question: 'ما هو الحد الأدنى للطلب لأزياء الجامعات؟', answer: 'الحد الأدنى القياسي للطلب: 25 قطعة لكل نمط. بالنسبة للجامعات الكبيرة (أكثر من 500 طالب)، نقدم عقود توريد سنوية مع عمليات تسليم ربع سنوية وبرامج تبديل المقاسات. تسعير الكميات: أكثر من 100 (خصم 15٪)، أكثر من 500 (خصم 25٪)، أكثر من 1000 (تسعير مخصص).' },
  { question: 'هل يمكنكم مطابقة ألوان شعار جامعتنا بالضبط؟', answer: 'نعم. نستخدم نظام بانتون (Pantone) لضمان مطابقة ألوان جامعتك بدقة. مطابقة ألوان مجانية للطلبات الكبيرة. نحتفظ بصيغ الألوان المخصصة الخاصة بك في ملفنا لإعادة الطلب المتسق.' },
  { question: 'هل توفرون أرواب (عباءات) التخرج؟', answer: 'نعم. الملابس الأكاديمية بما في ذلك أرواب البكالوريوس والماجستير والدكتوراه مع ألوان الوشاح الخاصة بالجامعة، وأطقم القبعات/الشراشيب. تتوفر خيارات الإيجار والشراء. مصممة خصيصاً لاحتفالات الجامعات السعودية.' },
];

export default function UniversityStudentsPageAr() {
  return (
    <>
      <SEO2026 title="أزياء طلاب الجامعات" titleAr="أزياء طلاب الجامعات" description="أزياء طلاب الجامعات." locale="ar" pageType="product" mainEntity="أزياء طلاب الجامعات" primaryImage="/images/education/students.jpg" primaryImageAlt="أزياء طلاب الجامعات" faqs={faqs} breadcrumbs={[{ name: 'المتجر', url: '/ar/shop' }, { name: 'التعليم', url: '/ar/shop/education' }, { name: 'الطلاب', url: '/ar/shop/education/university-attire/students' }]} certifications={[]} clientCount={50} yearsInBusiness={20} industry="Education" />
      <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-800 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[{ label: 'الرئيسية', href: '/ar' }, { label: 'المتجر', href: '/ar/shop' }, { label: 'التعليم', href: '/ar/shop/education' }, { label: 'الطلاب', href: '/ar/shop/education/university-attire/students' }]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">أزياء طلاب <span className="bg-gradient-to-r from-indigo-300 to-purple-300 text-transparent bg-clip-text">الجامعات</span></h1>
            <p className="text-xl text-indigo-100">ملابس الحرم الجامعي تحمل هوية جامعتك. بأسعار تبدأ من 45 ريال.</p>
          </div>
        </Container>
      </section>
      <main className="py-16" dir="rtl">
        <Container>
          <SectionHeading subtitle="ملابس الحرم الجامعي" centered>تشكيلة الطلاب</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {products.map((p, i) => (<div key={i} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all"><div className="flex justify-between items-start mb-3"><h3 className="text-lg font-bold text-gray-900">{p.name}</h3><span className="text-indigo-600 font-bold">{p.price}</span></div><p className="text-gray-600 text-sm">{p.desc}</p><Link href="/ar/quote?product=university" className="inline-block mt-4 text-indigo-600 font-medium text-sm hover:underline">طلب عرض سعر ←</Link></div>))}
          </div>
          <section className="mt-20 mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="أسئلة شائعة" centered>الأسئلة الشائعة حول أزياء الطلاب</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {faqs.map((faq, i) => (<div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p></div></div>))}
            </div>
          </section>
        </Container>
      </main>
    </>
  );
}
