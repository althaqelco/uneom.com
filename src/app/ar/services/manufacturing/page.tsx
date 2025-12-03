import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'تصنيع الأزياء السعودية | مرافق إنتاج يونيوم',
  titleAr: 'تصنيع الأزياء السعودية | مرافق إنتاج يونيوم',
  description: 'ISO certified uniform manufacturing.',
  descriptionAr: 'تصنيع أزياء معتمد ISO 9001:2015 في السعودية. طاقة 100,000+ قطعة شهرياً. أقمشة عالية الجودة، تسليم سريع. تواصل مع فريق إنتاج يونيوم!',
  keywords: ['تصنيع الأزياء السعودية', 'إنتاج الأزياء'],
  keywordsAr: ['تصنيع الأزياء السعودية', 'إنتاج الأزياء', 'مصنع زي موحد السعودية', 'مصنع معتمد ISO'],
  locale: 'ar',
  pageType: 'service',
  path: '/ar/services/manufacturing',
  image: '/images/services/manufacturing.jpg',
  imageAlt: 'مرافق تصنيع يونيوم',
  aiSummary: 'UNEOM uniform manufacturing.',
  aiSummaryAr: 'تصنيع الأزياء من يونيوم في السعودية. المرفق: معتمد ISO 9001:2015، طاقة 100,000+ قطعة شهرياً. الإمكانيات: قص، خياطة، تطريز، طباعة، فحص الجودة. المواد: 200+ خيار قماش، مستورد ومحلي. مدة التنفيذ: قياسي 10-15 يوم، عاجل متاح. الجودة: فحص 6 نقاط، أقمشة معتمدة OEKO-TEX. دعم أهداف رؤية 2030 للتصنيع المحلي.'
});

export const dynamic = 'force-static';

const manufacturingFAQsAr = [
  { question: 'هل تصنيع يونيوم معتمد ISO؟', questionAr: 'هل تصنيع يونيوم معتمد ISO؟', answer: 'Yes, ISO 9001:2015 certified.', answerAr: 'نعم، مرفق التصنيع لدينا معتمد ISO 9001:2015، مما يضمن جودة متسقة وإدارة عمليات عبر جميع الإنتاج.' },
  { question: 'ما طاقتكم الإنتاجية الشهرية؟', questionAr: 'ما طاقتكم الإنتاجية الشهرية؟', answer: 'Over 100,000 pieces per month.', answerAr: 'مرفقنا يمكنه إنتاج أكثر من 100,000 قطعة زي شهرياً. يمكننا التوسع لمشاريع أكبر مع التخطيط المسبق.' },
  { question: 'ما مدة التصنيع القياسية؟', questionAr: 'ما مدة التصنيع القياسية؟', answer: '10-15 business days.', answerAr: 'التصنيع القياسي يستغرق 10-15 يوم عمل من التصميم المعتمد حتى التسليم. إنتاج عاجل من 5-7 أيام متاح للطلبات العاجلة.' },
  { question: 'هل تصنعون محلياً في السعودية؟', questionAr: 'هل تصنعون محلياً في السعودية؟', answer: 'Yes, local manufacturing.', answerAr: 'نعم، يونيوم لديها مرافق تصنيع في السعودية، تدعم أهداف رؤية 2030 للتوطين. لدينا أيضاً مرافق شريكة للإنتاج المتخصص.' },
];

const capabilities = [
  { icon: '✂️', title: 'القص', desc: 'قص دقيق بمساعدة الكمبيوتر للدقة وتقليل الهدر' },
  { icon: '🧵', title: 'الخياطة', desc: 'خياطة صناعية مع 200+ محطة عمل للإنتاج بكميات كبيرة' },
  { icon: '🎨', title: 'التطريز', desc: '20+ ماكينة تطريز محوسبة للشعارات والعلامات التجارية' },
  { icon: '🖨️', title: 'الطباعة', desc: 'إمكانيات طباعة شاشة ونقل حراري وتسامي' },
  { icon: '✅', title: 'رقابة الجودة', desc: 'فحص 6 نقاط يضمن استيفاء كل قطعة للمعايير' },
  { icon: '📦', title: 'التشطيب', desc: 'كي، طي، تعبئة مع وضع العلامات والباركود' },
];

export default function ManufacturingPageAr() {
  return (
    <div dir="rtl">
      <SEO2026 title="تصنيع الأزياء | يونيوم" titleAr="تصنيع الأزياء | يونيوم" description="ISO certified manufacturing." descriptionAr="تصنيع معتمد ISO." locale="ar" pageType="service" mainEntity="Manufacturing Service" mainEntityAr="خدمة التصنيع" primaryImage="/images/services/manufacturing.jpg" primaryImageAlt="تصنيع يونيوم" faqs={manufacturingFAQsAr} breadcrumbs={[{ name: 'Services', nameAr: 'الخدمات', url: '/ar/services' }, { name: 'Manufacturing', nameAr: 'التصنيع', url: '/ar/services/manufacturing' }]} certifications={['ISO 9001:2015', 'OEKO-TEX Standard 100']} />

      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden py-16">
        <Container>
          <Breadcrumbs items={[{ label: 'الرئيسية', href: '/ar' }, { label: 'الخدمات', href: '/ar/services' }, { label: 'التصنيع', href: '/ar/services/manufacturing' }]} className="text-white/80 mb-6" />
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-blue-400">🏭</span><span className="text-sm font-medium">معتمد ISO</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">تصنيع <span className="bg-gradient-to-r from-blue-300 to-indigo-300 text-transparent bg-clip-text">الأزياء</span></h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">تصنيع معتمد ISO 9001:2015 بطاقة 100,000+ قطعة شهرياً.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-blue-300">ISO</div><div className="text-sm text-blue-200">معتمد</div></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-blue-300">100K+</div><div className="text-sm text-blue-200">شهرياً</div></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-blue-300">200+</div><div className="text-sm text-blue-200">موظف</div></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-blue-300">10-15</div><div className="text-sm text-blue-200">يوم</div></div>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-16">
            <SectionHeading subtitle="ما نفعله" centered>إمكانيات التصنيع</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {capabilities.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="أسئلة شائعة" centered>الأسئلة الشائعة عن التصنيع</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {manufacturingFAQsAr.map((faq, index) => (<div key={index} className="bg-white rounded-xl shadow-sm p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.questionAr}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600" itemProp="text">{faq.answerAr}</p></div></div>))}
            </div>
          </section>

          <section className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">ابدأ التصنيع</h2>
            <p className="text-xl mb-8 text-blue-100">تواصل مع فريق الإنتاج للحصول على عروض أسعار التصنيع.</p>
            <Link href="/ar/quote?service=manufacturing" className="inline-flex items-center px-8 py-4 bg-white text-blue-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">احصل على عرض سعر التصنيع ←</Link>
          </section>
        </Container>
      </main>
      <section className="py-6 bg-gray-100 border-t"><div className="container mx-auto px-4 text-center"><Link href="/services/manufacturing" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg text-sm">🇬🇧 English</Link></div></section>
    </div>
  );
}
