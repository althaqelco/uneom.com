import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'دراسة حالة إعادة علامة سلسلة سبا | تحول الزي - يونيوم',
  titleAr: 'دراسة حالة إعادة علامة سلسلة سبا | تحول الزي - يونيوم',
  description: 'كيف ساعدت يونيوم سلسلة سبا سعودية من 12 فرع في إعادة العلامة التجارية بأزياء فاخرة. زيادة بنسبة 35% في رضا العملاء، وهوية موحدة عبر جميع الفروع.',
  descriptionAr: 'كيف ساعدت يونيوم سلسلة سبا سعودية من 12 فرع في إعادة العلامة التجارية بأزياء فاخرة. زيادة بنسبة 35% في رضا العملاء، وهوية موحدة عبر جميع الفروع.',
  keywords: ['spa uniform case study', 'salon rebranding saudi', 'beauty chain uniforms', 'spa staff clothing transformation'],
  keywordsAr: ['دراسة حالة زي سبا', 'إعادة علامة صالون', 'أزياء سلاسل التجميل', 'أزياء موظفي السبا', 'قصة نجاح صالون تجميل'],
  locale: 'ar', pageType: 'article', path: '/ar/case-studies/spa-chain-rebranding',
  image: '/images/industries/beauty-salon-uniform.jpg', imageAlt: 'دراسة حالة إعادة علامة سلسلة سبا',
  aiSummary: 'Case study: UNEOM transformed a 12-location Saudi spa chain uniform program. Results: 35% increase in client satisfaction, unified brand identity, 20% reduction in staff turnover, and streamlined procurement process.',
  aiSummaryAr: 'دراسة حالة: قامت يونيوم بتحويل برنامج الزي الموحد لسلسلة سبا سعودية مكونة من 12 فرعاً. النتائج: زيادة بنسبة 35٪ في رضا العملاء، توحيد هوية العلامة التجارية، انخفاض بنسبة 20٪ في معدل دوران الموظفين، وتبسيط عملية المشتريات.'
});

export const dynamic = 'force-static';

const results = [
  { metric: '35%', label: 'زيادة في رضا العملاء', icon: '📈' },
  { metric: '20%', label: 'انخفاض في دوران الموظفين', icon: '👥' },
  { metric: '12', label: 'فرعاً تم توحيدهم', icon: '🏪' },
  { metric: '180', label: 'موظفاً تم تجهيزهم', icon: '👗' },
];

export default function SpaChainRebrandingPageAr() {
  return (
    <>
      <SEO2026 title="دراسة حالة إعادة علامة سلسلة سبا" titleAr="دراسة حالة إعادة علامة سلسلة سبا" description="إعادة العلامة التجارية لسلسلة سبا بأزياء فاخرة." locale="ar" pageType="article" mainEntity="دراسة حالة إعادة علامة سلسلة سبا" primaryImage="/images/industries/beauty-salon-uniform.jpg" primaryImageAlt="سلسلة سبا" breadcrumbs={[{ name: 'دراسات الحالة', url: '/ar/case-studies' }, { name: 'إعادة علامة سلسلة سبا', url: '/ar/case-studies/spa-chain-rebranding' }]} certifications={[]} clientCount={500} yearsInBusiness={20} industry="Beauty & Wellness" />
      <section className="bg-gradient-to-br from-pink-900 via-rose-800 to-fuchsia-700 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[{ label: 'الرئيسية', href: '/ar' }, { label: 'دراسات الحالة', href: '/ar/case-studies' }, { label: 'إعادة علامة سلسلة سبا', href: '/ar/case-studies/spa-chain-rebranding' }]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-pink-400">💄</span><span className="text-sm font-medium">دراسة حالة</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">إعادة الهوية لسلسلة <span className="bg-gradient-to-r from-pink-300 to-rose-300 text-transparent bg-clip-text">سبا وتجميل</span></h1>
            <p className="text-xl text-pink-100 leading-relaxed">كيف نجحت يونيوم في تحويل الهوية البصرية لسلسلة سبا سعودية من 12 فرعاً من خلال تصميمات الأزياء الفاخرة.</p>
          </div>
        </Container>
      </section>
      <main className="py-16" dir="rtl">
        <Container>
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {results.map((r, i) => (<div key={i} className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-100"><div className="text-3xl mb-2">{r.icon}</div><div className="text-4xl font-bold text-rose-600 mb-1">{r.metric}</div><div className="text-gray-600 text-sm">{r.label}</div></div>))}
          </div>
          <div className="max-w-4xl mx-auto space-y-10">
            <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">التحدي</h2>
              <p className="text-gray-700 leading-relaxed text-lg">واجهت سلسلة سبا سعودية فاخرة تضم 12 فرعاً و 180 موظفاً مشكلة في تقديم هوية تجارية متسقة. كان لكل فرع أنماط وألوان ومستويات جودة مختلفة من الزي الرسمي. وأشارت تعليقات العملاء إلى أن المظهر غير المتناسق يقوض مكانة العلامة التجارية الفاخرة التي استثمرت السلسلة بكثافة في تأسيسها.</p>
            </article>
            <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">حل يونيوم</h2>
              <p className="text-gray-700 leading-relaxed text-lg">قامت يونيوم بتصميم مجموعة أزياء كاملة: أزياء المعالجات (تمتص الرطوبة ومقاومة للبقع)، طاقم الاستقبال (بليزرات وفساتين أنيقة)، الإدارة (بدل فاخرة مفصلة)، والصيانة (أزياء عملية تحمل علامة تجارية). دمجت جميع التصاميم ألوان العلامة التجارية للسلسلة، وتطريز الشعار، وملمس الأقمشة الفاخر المتوافق مع مكانتها. نفذنا برنامج إدارة الزي الرسمي مع الاستبدال الآلي وإدارة المقاسات عبر جميع الفروع الـ 12.</p>
            </article>
            <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">النتائج</h2>
              <p className="text-gray-700 leading-relaxed text-lg">خلال 6 أشهر: زيادة بنسبة 35٪ في درجات رضا العملاء المتعلقة بـ "الأجواء والاحترافية"، وانخفاض بنسبة 20٪ في معدل دوران الموظفين (شعر الموظفون بقيمة أكبر)، وتوحيد هوية العلامة التجارية عبر جميع الفروع الـ 12، وزيادة بنسبة 15٪ في حجوزات الخدمات الفاخرة، وانخفاض تكاليف المشتريات بنسبة 25٪ من خلال الإدارة المركزية للبرنامج.</p>
            </article>
          </div>
          <section className="text-center bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-2xl p-12 mt-16">
            <h2 className="text-3xl font-bold mb-6">ارتقِ بهوية علامتك التجارية</h2>
            <p className="text-xl mb-8 text-rose-100">دع يونيوم تصمم برنامج زي موحد يرتقي بعلامتك التجارية في جميع فروعك.</p>
            <Link href="/ar/quote?category=beauty" className="inline-flex items-center px-8 py-4 bg-white text-rose-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">ابدأ التحول الآن ←</Link>
          </section>
        </Container>
      </main>
    </>
  );
}
