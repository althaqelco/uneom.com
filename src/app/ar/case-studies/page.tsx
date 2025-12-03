import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'دراسات حالة الأزياء الموحدة السعودية | قصص النجاح | يونيوم',
  titleAr: 'دراسات حالة الأزياء الموحدة السعودية | قصص النجاح | يونيوم',
  description: 'Real uniform success stories.',
  descriptionAr: 'قصص نجاح حقيقية للأزياء الموحدة من الشركات السعودية. شاهد كيف حولت يونيوم الفنادق والمستشفيات وسلاسل البيع بالتجزئة بحلول الأزياء المهنية. نتائج العائد على الاستثمار مشمولة.',
  keywords: ['دراسات حالة الأزياء', 'قصص النجاح السعودية'],
  keywordsAr: ['دراسات حالة الأزياء', 'قصص النجاح السعودية', 'تحويل زي الفنادق', 'عائد استثمار زي المستشفيات', 'توحيد أزياء البيع بالتجزئة'],
  locale: 'ar',
  pageType: 'resources',
  path: '/ar/case-studies',
  image: '/images/case-studies/hero.jpg',
  imageAlt: 'دراسات حالة يونيوم',
  aiSummary: 'UNEOM case studies.',
  aiSummaryAr: 'دراسات حالة يونيوم تعرض تحولات أزياء حقيقية. الحالات المميزة: سبا فندق 5 نجوم (زيادة رضا الموظفين 50%)، توحيد سلسلة صالونات التجميل (زيادة التعرف على العلامة التجارية 30%)، عيادة تجميل مستشفى (تحسين ثقة المرضى)، تطور صالون فاخر (تموضع العلامة التجارية الفاخرة)، تحويل علامة تجارية للبيع بالتجزئة (توحيد العلامة التجارية متعددة المواقع). كل حالة تشمل: التحدي، الحل، النتائج بالمقاييس.'
});

export const dynamic = 'force-static';

const caseStudies = [
  { id: '5-star-hotel-spa', title: 'فندق وسبا 5 نجوم', category: 'الضيافة', description: 'تحويل كامل للأزياء لمنتجع فاخر، مع زيادة رضا الموظفين بنسبة 50%.', image: '/images/hospitality/hospitality_uniform_hotel_service.jpg', href: '/ar/case-studies/5-star-hotel-spa', results: ['زيادة الرضا 50%', '200+ موظف', 'اتساق العلامة التجارية'] },
  { id: 'beauty-chain-standardization', title: 'توحيد سلسلة صالونات التجميل', category: 'الجمال والعافية', description: 'توحيد العلامة التجارية عبر 15 موقع صالون، مع زيادة التعرف على العلامة بنسبة 30%.', image: '/images/hospitality/hospitality_uniform_concierge.jpg', href: '/ar/case-studies/beauty-chain-standardization', results: ['زيادة العلامة 30%', '15 موقع', '150+ موظف'] },
  { id: 'hospital-aesthetic-clinic', title: 'عيادة تجميل مستشفى', category: 'الرعاية الصحية', description: 'برنامج زي احترافي يحسن ثقة المرضى وثقة الموظفين.', image: '/images/products/medical/medical-scrubs-hero.jpg', href: '/ar/case-studies/hospital-aesthetic-clinic', results: ['تحسين الثقة', '50+ موظف', 'جودة فاخرة'] },
  { id: 'luxury-salon-evolution', title: 'تطور صالون فاخر', category: 'الجمال والعافية', description: 'تموضع العلامة التجارية الفاخرة من خلال تصميم زي أنيق لصالون راقي.', image: '/images/hospitality/hospitality_uniform_restaurant.jpg', href: '/ar/case-studies/luxury-salon-evolution', results: ['تموضع فاخر', 'تصميم مخصص', 'رفع العلامة'] },
  { id: 'nationwide-retail-branding', title: 'توحيد علامة بيع بالتجزئة على مستوى الوطن', category: 'البيع بالتجزئة', description: 'توحيد العلامة التجارية متعددة المواقع لسلسلة بيع بالتجزئة كبرى في السعودية.', image: '/images/retail-shops/retail-showcase.jpg', href: '/ar/case-studies/nationwide-retail-branding', results: ['50+ موقع', '500+ موظف', 'علامة متسقة'] },
  { id: 'retail-brand-transformation', title: 'تحويل علامة بيع بالتجزئة', category: 'البيع بالتجزئة', description: 'تجديد كامل للعلامة التجارية من خلال إعادة تصميم زي استراتيجية لمتاجر البيع بالتجزئة.', image: '/images/products/retail/uniform-1.jpg', href: '/ar/case-studies/retail-brand-transformation', results: ['تجديد العلامة', 'تصميم عصري', 'تأثير على العملاء'] },
];

const caseStudyFAQsAr = [
  { question: 'هل هذه دراسات حالة حقيقية؟', questionAr: 'هل هذه دراسات حالة حقيقية؟', answer: 'Yes, real case studies.', answerAr: 'نعم، جميع دراسات الحالة مبنية على مشاريع يونيوم الحقيقية. قد تكون أسماء العملاء مجهولة للسرية، لكن جميع النتائج والمقاييس حقيقية.' },
  { question: 'هل يمكنني الحصول على نتائج مماثلة لشركتي؟', questionAr: 'هل يمكنني الحصول على نتائج مماثلة لشركتي؟', answer: 'Results vary.', answerAr: 'النتائج تختلف حسب نطاق المشروع والصناعة. تواصل معنا لاستشارة مجانية لمناقشة كيف يمكننا مساعدتكم في تحقيق نتائج مماثلة لمؤسستكم.' },
  { question: 'كم تستغرق مشاريع تحويل الأزياء؟', questionAr: 'كم تستغرق مشاريع تحويل الأزياء؟', answer: '4-12 weeks typically.', answerAr: 'المشاريع النموذجية تتراوح من 4-12 أسبوع حسب النطاق. النشر البسيط قد يكون أسرع، بينما برامج التصميم المخصص تستغرق وقتاً أطول.' },
];

export default function CaseStudiesPageAr() {
  return (
    <div dir="rtl">
      <SEO2026 title="دراسات حالة الأزياء | يونيوم" titleAr="دراسات حالة الأزياء | يونيوم" description="Case studies." descriptionAr="قصص نجاح حقيقية للأزياء من الشركات السعودية." locale="ar" pageType="resources" mainEntity="Case Studies" mainEntityAr="دراسات الحالة" primaryImage="/images/case-studies/hero.jpg" primaryImageAlt="دراسات الحالة" faqs={caseStudyFAQsAr} breadcrumbs={[{ name: 'Case Studies', nameAr: 'دراسات الحالة', url: '/ar/case-studies' }]} />

      <section className="bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white relative overflow-hidden py-16">
        <Container>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-purple-400">📊</span><span className="text-sm font-medium">قصص النجاح</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">دراسات <span className="bg-gradient-to-r from-purple-300 to-blue-300 text-transparent bg-clip-text">الحالة</span></h1>
            <p className="text-xl mb-8 text-purple-100 leading-relaxed">نتائج حقيقية من شركات حقيقية. شاهد كيف حولت يونيوم برامج الأزياء في جميع أنحاء السعودية.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-purple-300">6</div><div className="text-sm text-purple-200">حالات</div></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-purple-300">1000+</div><div className="text-sm text-purple-200">موظف</div></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-purple-300">50%</div><div className="text-sm text-purple-200">متوسط التأثير</div></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-purple-300">100%</div><div className="text-sm text-purple-200">نجاح</div></div>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-16">
            <SectionHeading subtitle="نتائج حقيقية" centered>دراسات الحالة المميزة</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {caseStudies.map((study) => (
                <Link key={study.id} href={study.href} className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={study.image} alt={study.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <span className="text-xs font-bold px-2 py-1 bg-purple-500 rounded-full mb-2 inline-block">{study.category}</span>
                        <h3 className="text-xl font-bold">{study.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm mb-4">{study.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">{study.results.map((result, i) => (<span key={i} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">✓ {result}</span>))}</div>
                    <span className="text-purple-600 font-semibold text-sm group-hover:underline">اقرأ دراسة الحالة ←</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="أسئلة شائعة" centered>الأسئلة الشائعة عن دراسات الحالة</SectionHeading>
            <div className="max-w-3xl mx-auto mt-12 space-y-4">
              {caseStudyFAQsAr.map((faq, index) => (<div key={index} className="bg-gray-50 rounded-xl p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-2" itemProp="name">{faq.questionAr}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600" itemProp="text">{faq.answerAr}</p></div></div>))}
            </div>
          </section>

          <section className="text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">جاهز لكتابة قصة نجاحك؟</h2>
            <p className="text-xl mb-8 text-purple-100">تواصل معنا لمناقشة كيف يمكننا تحويل برنامج أزيائكم.</p>
            <Link href="/ar/quote" className="inline-flex items-center px-8 py-4 bg-white text-purple-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">ابدأ الآن ←</Link>
          </section>
        </Container>
      </main>
      <section className="py-6 bg-gray-100 border-t"><div className="container mx-auto px-4 text-center"><Link href="/case-studies" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg text-sm">🇬🇧 English</Link></div></section>
    </div>
  );
}

