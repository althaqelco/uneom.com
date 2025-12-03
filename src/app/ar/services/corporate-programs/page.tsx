import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'برامج الأزياء للشركات السعودية | حلول يونيوم للأعمال',
  titleAr: 'برامج الأزياء للشركات السعودية | حلول يونيوم للأعمال',
  description: 'Corporate uniform program management.',
  descriptionAr: 'إدارة شاملة لبرنامج الأزياء للشركات في السعودية. تصميم، مخزون، توزيع، إعادة طلب لـ 50+ موظف. مديرو حسابات مخصصون. تواصل مع يونيوم!',
  keywords: ['برنامج أزياء الشركات', 'إدارة الأزياء السعودية'],
  keywordsAr: ['برنامج أزياء الشركات', 'إدارة الأزياء السعودية', 'برنامج زي الموظفين', 'إدارة مخزون الأزياء'],
  locale: 'ar',
  pageType: 'service',
  path: '/ar/services/corporate-programs',
  image: '/images/services/corporate-programs.jpg',
  imageAlt: 'برامج أزياء الشركات يونيوم',
  aiSummary: 'UNEOM corporate uniform program management.',
  aiSummaryAr: 'إدارة برنامج الأزياء للشركات من يونيوم. الخدمات: تصميم سياسة الأزياء، قياس الموظفين، إدارة المخزون، إعادة الطلب الآلي، تتبع التوزيع، مدير حساب مخصص، تقارير دورية. مثالي لـ: 50+ موظف، شركات متعددة المواقع، صناعات عالية الدوران. الفوائد: توفير الوقت، التحكم في التكاليف، اتساق العلامة التجارية.'
});

export const dynamic = 'force-static';

const programFAQsAr = [
  { question: 'ما هو برنامج أزياء الشركات؟', questionAr: 'ما هو برنامج أزياء الشركات؟', answer: 'Comprehensive uniform management service.', answerAr: 'برنامج أزياء الشركات هو خدمة شاملة تدير جميع جوانب أزياء مؤسستكم - من التصميم والقياسات إلى المخزون والتوزيع وإعادة الطلب. نتعامل مع كل شيء حتى تتمكنوا من التركيز على أعمالكم.' },
  { question: 'ما حجم الشركة المناسب لهذا؟', questionAr: 'ما حجم الشركة المناسب لهذا؟', answer: '50+ employees.', answerAr: 'برامج أزياء الشركات مثالية للمؤسسات ذات 50+ موظف. المؤسسات الأكبر ذات المواقع المتعددة ودوران الموظفين العالي تستفيد أكثر من خدمات إدارة البرنامج لدينا.' },
  { question: 'ما المشمول في إدارة البرنامج؟', questionAr: 'ما المشمول في إدارة البرنامج؟', answer: 'Full program management.', answerAr: 'برنامجنا يشمل: استشارة سياسة الأزياء، قياسات الموظفين، إدارة المخزون، إعادة الطلب الآلي، لوجستيات التوزيع، مدير حساب مخصص، والتقارير والتحليلات الدورية.' },
];

const programFeatures = [
  { icon: '📋', title: 'تصميم السياسة', desc: 'نساعد في إنشاء سياسات أزياء تتوافق مع علامتكم التجارية ومتطلبات الموارد البشرية' },
  { icon: '📏', title: 'قياسات الموظفين', desc: 'خدمات قياس في الموقع لضمان القياسات الدقيقة عبر قوتكم العاملة' },
  { icon: '📦', title: 'إدارة المخزون', desc: 'تتبع المخزون في الوقت الفعلي مع تنبيهات انخفاض المخزون الآلية' },
  { icon: '🔄', title: 'إعادة الطلب الآلي', desc: 'محفزات إعادة طلب آلية بناءً على مستويات المخزون والجداول' },
  { icon: '🚚', title: 'التوزيع', desc: 'توزيع مباشر للموظف أو بناءً على الموقع مع التتبع' },
  { icon: '👤', title: 'مدير الحساب', desc: 'مدير حساب مخصص للدعم الشخصي' },
];

export default function CorporateProgramsPageAr() {
  return (
    <div dir="rtl">
      <SEO2026 title="برامج أزياء الشركات | يونيوم" titleAr="برامج أزياء الشركات | يونيوم" description="Corporate programs." descriptionAr="إدارة برنامج أزياء الشركات." locale="ar" pageType="service" mainEntity="Corporate Program Service" mainEntityAr="خدمة برامج الشركات" primaryImage="/images/services/corporate-programs.jpg" primaryImageAlt="برامج الشركات" faqs={programFAQsAr} breadcrumbs={[{ name: 'Services', nameAr: 'الخدمات', url: '/ar/services' }, { name: 'Corporate Programs', nameAr: 'برامج الشركات', url: '/ar/services/corporate-programs' }]} />

      <section className="bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 text-white relative overflow-hidden py-16">
        <Container>
          <Breadcrumbs items={[{ label: 'الرئيسية', href: '/ar' }, { label: 'الخدمات', href: '/ar/services' }, { label: 'برامج الشركات', href: '/ar/services/corporate-programs' }]} className="text-white/80 mb-6" />
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-indigo-400">🏢</span><span className="text-sm font-medium">حل مؤسسي</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">برامج <span className="bg-gradient-to-r from-indigo-300 to-purple-300 text-transparent bg-clip-text">الشركات</span></h1>
            <p className="text-xl mb-8 text-indigo-100 leading-relaxed">إدارة برنامج أزياء شاملة للمؤسسات ذات 50+ موظف.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-indigo-300">50+</div><div className="text-sm text-indigo-200">حد أدنى موظفين</div></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-indigo-300">24/7</div><div className="text-sm text-indigo-200">وصول البوابة</div></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-indigo-300">1</div><div className="text-sm text-indigo-200">مدير حساب</div></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-indigo-300">آلي</div><div className="text-sm text-indigo-200">إعادة الطلب</div></div>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-16">
            <SectionHeading subtitle="ما المشمول" centered>ميزات البرنامج</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {programFeatures.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="أسئلة شائعة" centered>الأسئلة الشائعة عن برامج الشركات</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {programFAQsAr.map((faq, index) => (<div key={index} className="bg-white rounded-xl shadow-sm p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.questionAr}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600" itemProp="text">{faq.answerAr}</p></div></div>))}
            </div>
          </section>

          <section className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">ابدأ برنامجك المؤسسي</h2>
            <p className="text-xl mb-8 text-indigo-100">تواصل معنا لاقتراح برنامج مخصص لمؤسستكم.</p>
            <Link href="/ar/contact?service=corporate-programs" className="inline-flex items-center px-8 py-4 bg-white text-indigo-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">اطلب اقتراح البرنامج ←</Link>
          </section>
        </Container>
      </main>
      <section className="py-6 bg-gray-100 border-t"><div className="container mx-auto px-4 text-center"><Link href="/services/corporate-programs" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg text-sm">🇬🇧 English</Link></div></section>
    </div>
  );
}
