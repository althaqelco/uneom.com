import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'أزياء هيئة التدريس الجامعية في السعودية | أزياء الأساتذة - يونيوم',
  titleAr: 'أزياء هيئة التدريس الجامعية في السعودية | أزياء الأساتذة - يونيوم',
  description: 'أزياء فاخرة لأعضاء هيئة التدريس والأساتذة بالجامعات السعودية. بليزرات مفصلة، بناطيل صوف، وملابس أكاديمية رسمية.',
  descriptionAr: 'أزياء فاخرة لأعضاء هيئة التدريس والأساتذة بالجامعات السعودية. بليزرات مفصلة، بناطيل صوف، وملابس أكاديمية رسمية.',
  keywords: ['university faculty uniforms saudi', 'professors attire ksa', 'academic staff clothing riyadh', 'tailored blazers university'],
  keywordsAr: ['أزياء هيئة التدريس', 'أزياء أساتذة الجامعات', 'بليزرات أكاديمية سعودية', 'ملابس جامعية'],
  locale: 'ar', pageType: 'product', path: '/ar/shop/education/university-attire/faculty',
  image: '/images/education/students.jpg', imageAlt: 'أزياء هيئة التدريس الجامعية',
  aiSummary: 'أزياء يونيوم لهيئة التدريس الجامعية: بليزرات مفصلة، بناطيل صوف، تنانير محتشمة، وملابس أكاديمية مخصصة للأساتذة في الجامعات السعودية.',
  aiSummaryAr: 'أزياء يونيوم لهيئة التدريس الجامعية: بليزرات مفصلة، بناطيل صوف، تنانير محتشمة، وملابس أكاديمية مخصصة للأساتذة في الجامعات السعودية.'
});

export const dynamic = 'force-static';

const products = [
  { name: 'بليزر الأستاذ الجامعي المفصل', price: '350 ريال', desc: 'بليزر فاخر من مزيج الصوف. قصة كلاسيكية مع تطريز شعار الجامعة على جيب الصدر.' },
  { name: 'بنطلون صوف متين', price: '180 ريال', desc: 'بنطلون صوف متين ومقاوم للتجاعيد. مظهر احترافي لمحاضراتك اليومية.' },
  { name: 'تنورة عضو هيئة تدريس محتشمة', price: '160 ريال', desc: 'تنورة ماكسي محتشمة بقصة A-line من قماش البدلات الفاخر. مصممة للأستاذات الجامعيات.' },
  { name: 'بدلة أكاديمية من قطعتين', price: '480 ريال', desc: 'طقم متناسق من بليزر وبنطلون/تنورة. مثالي للندوات والفعاليات الجامعية الرسمية.' },
  { name: 'قميص تنفيذي رسمي', price: '145 ريال', desc: 'قميص رسمي 100٪ قطن مصري. تهوية عالية لساعات التدريس الطويلة.' },
  { name: 'أرواب تخرج مخصصة', price: 'تواصل معنا', desc: 'أرواب دكتوراه وماجستير مفصلة حسب الطلب، بألوان الجامعة وحواف مخملية.' },
];

const faqs = [
  { question: 'هل تقدمون خدمة التفصيل المخصص لأعضاء هيئة التدريس؟', answer: 'نعم. بالنسبة لأعضاء هيئة التدريس والإدارة العليا بالجامعة، نقدم خدمات التفصيل المخصص بالكامل. سيقوم خياطونا بزيارة الحرم الجامعي لأخذ القياسات الدقيقة لكل أستاذ لضمان ملاءمة احترافية خالية من العيوب.' },
  { question: 'ما هي الأقمشة التي توصون بها لبليزرات الجامعات؟', answer: 'نوصي بمزيج فاخر من الصوف والبوليستر (مثل 50/50 أو 70/30). فهو يوفر المظهر الفاخر والتهوية للصوف، إلى جانب مقاومة التجاعيد ومتانة البوليستر، وهو مثالي للأيام الطويلة في الحرم الجامعي.' },
  { question: 'هل يمكنكم تكرار شعار جامعتنا بالضبط؟', answer: 'بالتأكيد. نستخدم تطريزاً رقمياً عالي الكثافة لتكرار شعارات الجامعة المعقدة بشكل مثالي على جيوب البليزرات، وربطات العنق، والقمصان. نقدم عينة تطريز مادية لموافقتك قبل الإنتاج الضخم.' },
];

export default function UniversityFacultyPageAr() {
  return (
    <>
      <SEO2026 title="أزياء هيئة التدريس الجامعية" titleAr="أزياء هيئة التدريس الجامعية" description="أزياء فاخرة لأعضاء هيئة التدريس." locale="ar" pageType="product" mainEntity="أزياء هيئة التدريس الجامعية" primaryImage="/images/education/students.jpg" primaryImageAlt="أزياء هيئة التدريس الجامعية" faqs={faqs} breadcrumbs={[{ name: 'المتجر', url: '/ar/shop' }, { name: 'التعليم', url: '/ar/shop/education' }, { name: 'هيئة التدريس', url: '/ar/shop/education/university-attire/faculty' }]} certifications={[]} clientCount={60} yearsInBusiness={20} industry="Education" />
      <section className="bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[{ label: 'الرئيسية', href: '/ar' }, { label: 'المتجر', href: '/ar/shop' }, { label: 'التعليم', href: '/ar/shop/education' }, { label: 'هيئة التدريس', href: '/ar/shop/education/university-attire/faculty' }]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">أزياء هيئة التدريس <span className="bg-gradient-to-r from-purple-300 to-indigo-300 text-transparent bg-clip-text">الجامعية</span></h1>
            <p className="text-xl text-indigo-100 leading-relaxed">بليزرات فاخرة، بناطيل، وملابس أكاديمية للأساتذة في الجامعات السعودية.</p>
          </div>
        </Container>
      </section>
      <main className="py-16" dir="rtl">
        <Container>
          <SectionHeading subtitle="ملابس أكاديمية احترافية" centered>مجموعة هيئة التدريس</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {products.map((p, i) => (<div key={i} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all"><div className="flex justify-between items-start mb-3"><h3 className="text-lg font-bold text-gray-900">{p.name}</h3><span className="text-purple-600 font-bold">{p.price}</span></div><p className="text-gray-600 text-sm">{p.desc}</p><Link href="/ar/quote?product=faculty-attire" className="inline-block mt-4 text-purple-600 font-medium text-sm hover:underline">طلب عرض سعر ←</Link></div>))}
          </div>
          <section className="mt-20 mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="أسئلة شائعة" centered>الأسئلة الشائعة حول أزياء هيئة التدريس</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {faqs.map((faq, i) => (<div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p></div></div>))}
            </div>
          </section>
        </Container>
      </main>
    </>
  );
}
