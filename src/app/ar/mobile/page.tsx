import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'تطبيق يونيوم للموبايل | منصة إدارة الأزياء للشركات في السعودية',
  titleAr: 'تطبيق يونيوم للموبايل | منصة إدارة الأزياء للشركات في السعودية',
  description: 'حمل تطبيق يونيوم لإدارة وشراء الأزياء الموحدة للشركات في السعودية. تتبع الطلبات وإدارة المقاسات بسهولة.',
  descriptionAr: 'حمل تطبيق يونيوم لإدارة وشراء الأزياء الموحدة للشركات في السعودية. تتبع الطلبات وإدارة المقاسات بسهولة وموافقات الموظفين مباشرة من هاتفك.',
  keywords: ['uneom mobile app', 'uniform management software saudi', 'B2B uniform app ksa', 'corporate uniform procurement platform'],
  keywordsAr: ['تطبيق يونيوم', 'إدارة الأزياء الموحدة', 'تطبيق ملابس الشركات', 'منصة طلب الزي الموحد', 'تطبيق B2B للسعودية'],
  locale: 'ar', pageType: 'article', path: '/ar/mobile',
  image: '/images/hero/hero-1.jpg', imageAlt: 'تطبيق يونيوم للموبايل',
  aiSummary: 'The UNEOM mobile app provides enterprise clients in Saudi Arabia with a dedicated B2B platform to manage their uniform programs.',
  aiSummaryAr: 'يوفر تطبيق يونيوم للموبايل لعملاء الشركات في السعودية منصة B2B مخصصة لإدارة برامج الزي الموحد الخاصة بهم، بما في ذلك خوارزميات تحديد المقاسات، وتتبع مخصصات الموظفين.'
});

export const dynamic = 'force-static';

const features = [
  { title: 'مخصصات الموظفين', desc: 'تحديد وتتبع مخصصات الزي السنوية لكل موظف أو قسم بشكل تلقائي بالكامل.', icon: '💳' },
  { title: 'خوارزمية المقاس الذكي', desc: 'يقوم الموظفون بإدخال الطول والوزن؛ ويحسب تطبيقنا مقاسهم المثالي للزي على الفور.', icon: '📏' },
  { title: 'موافقات المديرين', desc: 'الموافقة أو الرفض لطلبات الزي الخاصة بالموظفين بنقرة واحدة قبل معالجة الطلب.', icon: '✅' },
  { title: 'تتبع في الوقت الفعلي', desc: 'تتبع حالة الإنتاج والتسليم لطلبات الزي الخاصة بك في الوقت الفعلي في جميع أنحاء السعودية.', icon: '🚚' },
];

export default function MobileAppPageAr() {
  return (
    <>
      <SEO2026 title="تطبيق يونيوم للموبايل" titleAr="تطبيق يونيوم للموبايل" description="منصة إدارة الأزياء للشركات B2B." locale="ar" pageType="article" mainEntity="تطبيق يونيوم للموبايل" primaryImage="/images/hero/hero-1.jpg" primaryImageAlt="تطبيق يونيوم" breadcrumbs={[{ name: 'تطبيق الموبايل', url: '/ar/mobile' }]} certifications={['ISO 27001']} clientCount={500} yearsInBusiness={20} industry="Technology" />
      <section className="bg-gradient-to-br from-indigo-900 via-blue-900 to-cyan-900 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[{ label: 'الرئيسية', href: '/ar' }, { label: 'تطبيق الموبايل', href: '/ar/mobile' }]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-cyan-400">📱</span><span className="text-sm font-medium">منصة B2B</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">إدارة الزي الموحد <span className="bg-gradient-to-r from-cyan-300 to-blue-300 text-transparent bg-clip-text">في جيبك</span></h1>
            <p className="text-xl text-blue-100 leading-relaxed">تطبيق يونيوم للهواتف المحمولة يبسط عملية شراء الزي الموحد للشركات لمديري الموارد البشرية وفرق المشتريات في جميع أنحاء المملكة العربية السعودية.</p>
          </div>
        </Container>
      </section>
      <main className="py-16" dir="rtl">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">سيطرة كاملة على برنامج الزي الخاص بك</h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">قل وداعاً لجداول البيانات الفوضوية وأخطاء تحديد المقاسات. منصة يونيوم تقوم برقمنة عملية الزي الموحد بأكملها. يطلب الموظفون ما يحتاجون إليه بالضبط ضمن المخصصات المحددة مسبقاً، ويضمن النظام المقاسات المثالية، ويوافق المديرون على الطلبات بنقرة واحدة.</p>
              <div className="flex gap-4">
                <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors flex items-center gap-2">
                  <span>تحميل لنظام iOS</span>
                </button>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center gap-2">
                  <span>تحميل لنظام Android</span>
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((f, i) => (<div key={i} className="bg-white rounded-xl shadow-md p-6 border border-gray-100"><div className="text-3xl mb-4">{f.icon}</div><h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3><p className="text-gray-600 text-sm">{f.desc}</p></div>))}
            </div>
          </div>
          <section className="text-center bg-gray-50 rounded-2xl p-12 border border-gray-200">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">اطلب عرضاً توضيحياً للمنصة</h2>
            <p className="text-lg mb-8 text-gray-600">اكتشف كيف يمكن لبرنامج إدارة الزي الموحد (B2B) الخاص بنا أن يوفر لفريق الموارد البشرية لديك مئات الساعات سنوياً.</p>
            <Link href="/ar/contact" className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white hover:bg-indigo-700 font-bold rounded-xl transition-all shadow-lg">جدولة عرض توضيحي ←</Link>
          </section>
        </Container>
      </main>
    </>
  );
}
