import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'برنامج الحماية من عوامل الطقس السعودية | يونيوم',
  titleAr: 'برنامج الحماية من عوامل الطقس | حلول متكاملة - يونيوم',
  description: 'أزياء واقية مصممة للتعامل مع درجات الحرارة العالية، الغبار، والأجواء القاسية في السعودية.',
  descriptionAr: 'أزياء واقية مصممة للتعامل مع درجات الحرارة العالية، الغبار، والأجواء القاسية في السعودية.',
  keywords: ['ملابس واقية من الحرارة', 'أزياء حماية الطقس', 'ملابس عمل سعودية'],
  keywordsAr: ['ملابس واقية من الحرارة', 'أزياء حماية الطقس', 'ملابس عمل سعودية'],
  locale: 'ar',
  pageType: 'service',
  path: '/ar/services/weather-protection-program',
  image: '/images/services/weather-protection.jpg',
  imageAlt: 'برنامج الحماية من عوامل الطقس',
  aiSummary: 'أزياء واقية مصممة للتعامل مع درجات الحرارة العالية، الغبار، والأجواء القاسية في السعودية.',
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

export default function WeatherProtectionProgramPageAR() {
  return (
    <>
      <SEO2026 title="برنامج الحماية من عوامل الطقس" titleAr="برنامج الحماية من عوامل الطقس" description="أزياء واقية مصممة للتعامل مع درجات الحرارة العالية، الغبار، والأجواء القاسية في السعودية." locale="ar" pageType="service" mainEntity="برنامج الحماية من عوامل الطقس" primaryImage="/images/services/weather-protection.jpg" primaryImageAlt="برنامج الحماية من عوامل الطقس" faqs={faqs} breadcrumbs={[{ name: 'الرئيسية', url: '/ar' }, { name: 'الخدمات', url: '/ar/services' }, { name: 'برنامج الحماية من عوامل الطقس', url: '/ar/services/weather-protection-program' }]} certifications={['SASO', 'ISO 9001']} clientCount={300} yearsInBusiness={20} industry="الخدمات المؤسسية" />
      <section className="bg-gradient-to-bl from-slate-900 via-gray-800 to-slate-800 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[{ label: 'الرئيسية', href: '/ar' }, { label: 'الخدمات', href: '/ar/services' }, { label: 'برنامج الحماية من عوامل الطقس', href: '/ar/services/weather-protection-program' }]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">برنامج الحماية من عوامل الطقس</h1>
            <p className="text-xl text-gray-300 leading-relaxed">أزياء واقية مصممة للتعامل مع درجات الحرارة العالية، الغبار، والأجواء القاسية في السعودية.</p>
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
