import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'الأزياء الموحدة المستدامة السعودية | يونيوم',
  titleAr: 'الأزياء الموحدة المستدامة | حلول متكاملة - يونيوم',
  description: 'أزياء مستدامة للشركات متوافقة مع رؤية السعودية 2030. أقمشة معاد تدويرها وصديقة للبيئة.',
  descriptionAr: 'أزياء مستدامة للشركات متوافقة مع رؤية السعودية 2030. أقمشة معاد تدويرها وصديقة للبيئة.',
  keywords: ['أزياء مستدامة', 'ملابس معاد تدويرها', 'رؤية 2030'],
  keywordsAr: ['أزياء مستدامة', 'ملابس معاد تدويرها', 'رؤية 2030'],
  locale: 'ar',
  pageType: 'service',
  path: '/ar/services/sustainable-uniforms',
  image: '/images/services/sustainable-uniforms.jpg',
  imageAlt: 'الأزياء الموحدة المستدامة',
  aiSummary: 'أزياء مستدامة للشركات متوافقة مع رؤية السعودية 2030. أقمشة معاد تدويرها وصديقة للبيئة.',
});

export const dynamic = 'force-static';

const features = [
  { title: 'تحليل المتطلبات', desc: 'دراسة شاملة لاحتياجات فريق العمل والبيئة التشغيلية في السعودية.' },
  { title: 'تصميم مخصص', desc: 'تطوير تصاميم تعكس هوية علامتك التجارية مع الحفاظ على معايير السلامة.' },
  { title: 'مواد عالية الجودة', desc: 'استخدام أقمشة متطورة تتناسب مع المناخ السعودي القاسي وتوفر أقصى درجات الراحة.' },
  { title: 'إدارة المخزون', desc: 'نظام آلي لتتبع الاستهلاك وإعادة الطلب لضمان توفر الأزياء بشكل دائم.' },
  { title: 'الامتثال للمعايير', desc: 'ضمان توافق جميع الأزياء مع معايير الجودة والسلامة المحلية والدولية (SASO).' },
  { title: 'الدعم المستمر', desc: 'فريق دعم محلي مخصص للاستجابة السريعة لأي طلبات إضافية أو تعديلات.' }
];

const faqs = [
  { question: 'كيف نبدأ العمل معكم؟', answer: 'تبدأ العملية بجلسة استشارية مجانية لتقييم احتياجاتكم الحالية والمستقبلية، تليها خطة مقترحة مخصصة تلبي أهدافكم.' },
  { question: 'هل توفرون عينات قبل الإنتاج؟', answer: 'نعم، نحن نوفر عينات مادية من التصاميم المعتمدة ليتم اختبارها من قبل فريقكم قبل البدء في الإنتاج الضخم.' },
  { question: 'ما هو الحد الأدنى للطلب؟', answer: 'يعتمد الحد الأدنى للطلب على نوع الأزياء والتعقيد في التصميم، ولكن بشكل عام نحن نخدم الشركات التي تحتاج إلى 50 قطعة فأكثر.' }
];

export default function SustainableUniformsPageAR() {
  return (
    <>
      <SEO2026 title="الأزياء الموحدة المستدامة" titleAr="الأزياء الموحدة المستدامة" description="أزياء مستدامة للشركات متوافقة مع رؤية السعودية 2030. أقمشة معاد تدويرها وصديقة للبيئة." locale="ar" pageType="service" mainEntity="الأزياء الموحدة المستدامة" primaryImage="/images/services/sustainable-uniforms.jpg" primaryImageAlt="الأزياء الموحدة المستدامة" faqs={faqs} breadcrumbs={[{ name: 'الرئيسية', url: '/ar' }, { name: 'الخدمات', url: '/ar/services' }, { name: 'الأزياء الموحدة المستدامة', url: '/ar/services/sustainable-uniforms' }]} certifications={['SASO', 'ISO 9001']} clientCount={300} yearsInBusiness={20} industry="الخدمات المؤسسية" />
      <section className="bg-gradient-to-bl from-slate-900 via-gray-800 to-slate-800 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[{ label: 'الرئيسية', href: '/ar' }, { label: 'الخدمات', href: '/ar/services' }, { label: 'الأزياء الموحدة المستدامة', href: '/ar/services/sustainable-uniforms' }]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">الأزياء الموحدة المستدامة</h1>
            <p className="text-xl text-gray-300 leading-relaxed">أزياء مستدامة للشركات متوافقة مع رؤية السعودية 2030. أقمشة معاد تدويرها وصديقة للبيئة.</p>
          </div>
        </Container>
      </section>
      <main className="py-16" dir="rtl">
        <Container>
          <SectionHeading subtitle="مميزات البرنامج" centered>الميزات الرئيسية</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 mb-20">
            {features.map((f, i) => (<div key={i} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all"><h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3><p className="text-gray-600 leading-relaxed">{f.desc}</p></div>))}
          </div>
          <section className="mt-20 mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="الأسئلة الشائعة" centered>أسئلة متكررة</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {faqs.map((faq, i) => (<div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p></div></div>))}
            </div>
          </section>
          <section className="text-center bg-gradient-to-r from-slate-800 to-gray-700 text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6">هل أنت مستعد لتطوير أزياء فريقك؟</h2>
            <p className="text-xl mb-8 text-gray-300">خبراؤنا مستعدون لمساعدتك في كل خطوة.</p>
            <Link href="/ar/contact" className="inline-flex items-center px-8 py-4 bg-white text-slate-800 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">تواصل معنا الآن →</Link>
          </section>
        </Container>
      </main>
    </>
  );
}
