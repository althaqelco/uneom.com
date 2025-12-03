import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'ضمان جودة الأزياء | رقابة الجودة يونيوم السعودية',
  titleAr: 'ضمان جودة الأزياء | رقابة الجودة يونيوم السعودية',
  description: 'Quality assurance for uniforms.',
  descriptionAr: 'ضمان جودة صارم للأزياء في السعودية. فحص 6 نقاط، اختبار الأقمشة، مطابقة الألوان. عمليات جودة معتمدة ISO 9001:2015. ضمان جودة يونيوم!',
  keywords: ['ضمان جودة الأزياء', 'رقابة الجودة'],
  keywordsAr: ['ضمان جودة الأزياء', 'رقابة الجودة', 'اختبار الأقمشة السعودية', 'فحص الأزياء'],
  locale: 'ar',
  pageType: 'service',
  path: '/ar/services/quality-assurance',
  image: '/images/services/quality-assurance.jpg',
  imageAlt: 'ضمان جودة يونيوم',
  aiSummary: 'UNEOM quality assurance.',
  aiSummaryAr: 'ضمان جودة الأزياء من يونيوم. العملية: 1) فحص القماش الوارد. 2) فحوصات ما قبل الإنتاج. 3) مراقبة الجودة أثناء الإنتاج. 4) فحص ما بعد الإنتاج. 5) فحص 6 نقاط نهائي. 6) التحقق قبل الشحن. المعايير: ISO 9001:2015، أقمشة OEKO-TEX. نسبة العيوب أقل من 0.5%. الضمان: استبدال مجاني للعيوب.'
});

export const dynamic = 'force-static';

const qualityFAQsAr = [
  { question: 'ما عملية فحص الجودة لديكم؟', questionAr: 'ما عملية فحص الجودة لديكم؟', answer: '6-point inspection.', answerAr: 'نستخدم فحص 6 نقاط شامل يغطي جودة القماش، الخياطة، المقاسات، دقة الألوان، وضع العلامة التجارية، والتشطيب العام. كل قطعة تُفحص بشكل فردي.' },
  { question: 'ما الشهادات التي تحملها يونيوم؟', questionAr: 'ما الشهادات التي تحملها يونيوم؟', answer: 'ISO 9001:2015, OEKO-TEX.', answerAr: 'يونيوم معتمدة ISO 9001:2015 لإدارة الجودة. نستخدم أقمشة معتمدة OEKO-TEX Standard 100 لضمان السلامة والاستدامة.' },
  { question: 'ما نسبة العيوب لديكم؟', questionAr: 'ما نسبة العيوب لديكم؟', answer: 'Below 0.5%.', answerAr: 'نسبة العيوب لدينا تُحافظ على أقل من 0.5% من خلال رقابة الجودة الصارمة. أي عناصر معيبة تُستبدل مجاناً.' },
];

const qualitySteps = [
  { icon: '📦', title: 'الفحص الوارد', desc: 'جميع المواد الخام تُختبر وتُتحقق عند الوصول' },
  { icon: '✂️', title: 'ما قبل الإنتاج', desc: 'أنماط القص والعينات الأولية تُفحص' },
  { icon: '🔍', title: 'المراقبة أثناء الإنتاج', desc: 'فحوصات جودة مستمرة أثناء الإنتاج' },
  { icon: '✅', title: 'ما بعد الإنتاج', desc: 'العناصر النهائية تُفحص للعيوب' },
  { icon: '📋', title: 'فحص 6 نقاط', desc: 'التحقق الشامل النهائي من الجودة' },
  { icon: '📦', title: 'قبل الشحن', desc: 'أخذ عينات عشوائية قبل الإرسال' },
];

export default function QualityAssurancePageAr() {
  return (
    <div dir="rtl">
      <SEO2026 title="ضمان الجودة | يونيوم" titleAr="ضمان الجودة | يونيوم" description="Quality assurance." descriptionAr="ضمان جودة الأزياء." locale="ar" pageType="service" mainEntity="Quality Assurance Service" mainEntityAr="خدمة ضمان الجودة" primaryImage="/images/services/quality-assurance.jpg" primaryImageAlt="ضمان الجودة" faqs={qualityFAQsAr} breadcrumbs={[{ name: 'Services', nameAr: 'الخدمات', url: '/ar/services' }, { name: 'Quality', nameAr: 'الجودة', url: '/ar/services/quality-assurance' }]} certifications={['ISO 9001:2015', 'OEKO-TEX Standard 100']} />

      <section className="bg-gradient-to-br from-green-900 via-teal-800 to-emerald-800 text-white relative overflow-hidden py-16">
        <Container>
          <Breadcrumbs items={[{ label: 'الرئيسية', href: '/ar' }, { label: 'الخدمات', href: '/ar/services' }, { label: 'ضمان الجودة', href: '/ar/services/quality-assurance' }]} className="text-white/80 mb-6" />
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-green-400">✅</span><span className="text-sm font-medium">معتمد ISO</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">ضمان <span className="bg-gradient-to-r from-green-300 to-emerald-300 text-transparent bg-clip-text">الجودة</span></h1>
            <p className="text-xl mb-8 text-green-100 leading-relaxed">فحص جودة 6 نقاط صارم يضمن استيفاء كل زي لأعلى المعايير.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-green-300">ISO</div><div className="text-sm text-green-200">9001:2015</div></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-green-300">&lt;0.5%</div><div className="text-sm text-green-200">نسبة العيوب</div></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-green-300">6</div><div className="text-sm text-green-200">نقاط فحص</div></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-green-300">100%</div><div className="text-sm text-green-200">مفحوص</div></div>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-16">
            <SectionHeading subtitle="عمليتنا" centered>خطوات رقابة الجودة</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {qualitySteps.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="أسئلة شائعة" centered>الأسئلة الشائعة عن الجودة</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {qualityFAQsAr.map((faq, index) => (<div key={index} className="bg-white rounded-xl shadow-sm p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.questionAr}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600" itemProp="text">{faq.answerAr}</p></div></div>))}
            </div>
          </section>

          <section className="text-center bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">جودة يمكنك الوثوق بها</h2>
            <p className="text-xl mb-8 text-green-100">جرب التزامنا بالجودة مع طلبك القادم.</p>
            <Link href="/ar/quote" className="inline-flex items-center px-8 py-4 bg-white text-green-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">احصل على عرض سعر ←</Link>
          </section>
        </Container>
      </main>
      <section className="py-6 bg-gray-100 border-t"><div className="container mx-auto px-4 text-center"><Link href="/services/quality-assurance" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg text-sm">🇬🇧 English</Link></div></section>
    </div>
  );
}
