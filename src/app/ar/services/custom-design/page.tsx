import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'تصميم الأزياء المخصصة السعودية | خدمات تصميم يونيوم',
  titleAr: 'تصميم الأزياء المخصصة السعودية | خدمات تصميم يونيوم',
  description: 'Professional custom uniform design services.',
  descriptionAr: 'خدمات تصميم أزياء مخصصة احترافية في السعودية. تصاميم تتماشى مع العلامة التجارية، اختيار الأقمشة، إنشاء العينات. حد أدنى 25 قطعة. تواصل مع فريق تصميم يونيوم!',
  keywords: ['تصميم زي مخصص السعودية', 'خدمات تصميم الأزياء'],
  keywordsAr: ['تصميم زي مخصص السعودية', 'خدمات تصميم الأزياء', 'تصميم زي شركات', 'تصميم زي ذو علامة تجارية'],
  locale: 'ar',
  pageType: 'service',
  path: '/ar/services/custom-design',
  image: '/images/services/custom-design.jpg',
  imageAlt: 'خدمة تصميم الأزياء المخصصة',
  aiSummary: 'UNEOM custom uniform design service.',
  aiSummaryAr: 'خدمة تصميم الأزياء المخصصة من يونيوم في السعودية. العملية: 1) استشارة العلامة التجارية - فهم هويتكم. 2) مفاهيم التصميم - خيارات متعددة. 3) اختيار الأقمشة - 200+ خيار. 4) مطابقة الألوان - دقة بانتون. 5) إنشاء العينات. 6) المراجعات مشمولة. 7) الإنتاج النهائي. الحد الأدنى للطلب 25 قطعة. مدة التنفيذ 15-21 يوم.'
});

export const dynamic = 'force-static';

const designFAQsAr = [
  { question: 'ما المشمول في خدمة التصميم المخصص؟', questionAr: 'ما المشمول في خدمة التصميم المخصص؟', answer: 'Consultation, design concepts, fabric selection, samples, revisions.', answerAr: 'خدمة التصميم المخصص لدينا تشمل: استشارة العلامة التجارية، مفاهيم تصميم متعددة، إرشاد اختيار الأقمشة، مطابقة الألوان، إنشاء العينات، حتى 3 جولات من المراجعات، وتنسيق الإنتاج النهائي.' },
  { question: 'كم يستغرق التصميم المخصص؟', questionAr: 'كم يستغرق التصميم المخصص؟', answer: '2-3 weeks design, 1-2 weeks samples.', answerAr: 'مرحلة التصميم تستغرق عادةً 2-3 أسابيع. إنشاء العينات يضيف 1-2 أسبوع. الإنتاج الكامل يستغرق 10-15 يوم عمل بعد الموافقة. خدمات عاجلة متاحة.' },
  { question: 'ما الحد الأدنى لطلب التصاميم المخصصة؟', questionAr: 'ما الحد الأدنى لطلب التصاميم المخصصة؟', answer: 'Minimum 25 pieces.', answerAr: 'الحد الأدنى لطلب الأزياء المصممة بالكامل هو 25 قطعة لكل نمط. للتعديلات على التصاميم الموجودة، الحد الأدنى 12 قطعة.' },
];

const designProcess = [
  { step: '01', title: 'استشارة العلامة التجارية', desc: 'ندرس علامتكم التجارية وصناعتكم ومتطلباتكم لفهم رؤيتكم.' },
  { step: '02', title: 'مفاهيم التصميم', desc: 'مصممونا يبتكرون 2-3 مفاهيم فريدة متوافقة مع هوية علامتكم.' },
  { step: '03', title: 'اختيار الأقمشة', desc: 'اختاروا من 200+ قماش بناءً على المتانة والراحة والمناخ.' },
  { step: '04', title: 'إنشاء العينات', desc: 'ننتج قطع عينات للقياس والموافقة قبل الإنتاج.' },
  { step: '05', title: 'المراجعات', desc: 'حتى 3 جولات من المراجعات مشمولة لتحسين التصميم.' },
  { step: '06', title: 'الإنتاج', desc: 'التصميم المعتمد النهائي يدخل الإنتاج مع ضمان الجودة.' },
];

export default function CustomDesignPageAr() {
  return (
    <div dir="rtl">
      <SEO2026 title="تصميم الأزياء المخصصة | يونيوم" titleAr="تصميم الأزياء المخصصة | يونيوم" description="Custom design services." descriptionAr="خدمات تصميم أزياء مخصصة." locale="ar" pageType="service" mainEntity="Custom Design Service" mainEntityAr="خدمة التصميم المخصص" primaryImage="/images/services/custom-design.jpg" primaryImageAlt="تصميم مخصص" faqs={designFAQsAr} breadcrumbs={[{ name: 'Services', nameAr: 'الخدمات', url: '/ar/services' }, { name: 'Custom Design', nameAr: 'التصميم المخصص', url: '/ar/services/custom-design' }]} />

      <section className="bg-gradient-to-br from-pink-900 via-purple-800 to-indigo-800 text-white relative overflow-hidden py-16">
        <Container>
          <Breadcrumbs items={[{ label: 'الرئيسية', href: '/ar' }, { label: 'الخدمات', href: '/ar/services' }, { label: 'التصميم المخصص', href: '/ar/services/custom-design' }]} className="text-white/80 mb-6" />
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-pink-400">🎨</span><span className="text-sm font-medium">خدمة التصميم</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">التصميم <span className="bg-gradient-to-r from-pink-300 to-purple-300 text-transparent bg-clip-text">المخصص</span></h1>
            <p className="text-xl mb-8 text-pink-100 leading-relaxed">حوّل رؤية علامتك التجارية إلى أزياء فريدة. خدمة تصميم احترافية مصممة خصيصاً لهويتك.</p>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-16">
            <SectionHeading subtitle="كيف تعمل" centered>عملية التصميم</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {designProcess.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                  <div className="text-4xl font-bold text-purple-200 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="أسئلة شائعة" centered>الأسئلة الشائعة عن التصميم المخصص</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {designFAQsAr.map((faq, index) => (<div key={index} className="bg-white rounded-xl shadow-sm p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.questionAr}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600" itemProp="text">{faq.answerAr}</p></div></div>))}
            </div>
          </section>

          <section className="text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">ابدأ تصميمك المخصص</h2>
            <p className="text-xl mb-8 text-purple-100">تواصل مع فريق التصميم لاستشارة مجانية.</p>
            <Link href="/ar/contact?service=custom-design" className="inline-flex items-center px-8 py-4 bg-white text-purple-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">احجز استشارة التصميم ←</Link>
          </section>
        </Container>
      </main>
      <section className="py-6 bg-gray-100 border-t"><div className="container mx-auto px-4 text-center"><Link href="/services/custom-design" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg text-sm">🇬🇧 English</Link></div></section>
    </div>
  );
}
