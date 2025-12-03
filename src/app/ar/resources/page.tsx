import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'موارد وأدلة الأزياء الموحدة السعودية | مركز معرفة يونيوم',
  titleAr: 'موارد وأدلة الأزياء الموحدة السعودية | مركز معرفة يونيوم',
  description: 'Free uniform resources and guides.',
  descriptionAr: 'موارد أزياء مجانية: أدلة الأقمشة، جداول المقاسات، قوالب السياسات، أدلة الشراء. معرفة متخصصة للرعاية الصحية والضيافة والشركات في السعودية.',
  keywords: ['موارد الأزياء', 'دليل الأقمشة'],
  keywordsAr: ['موارد الأزياء', 'دليل الأقمشة', 'جدول المقاسات', 'قالب سياسة الأزياء', 'دليل الشراء', 'تحسين القياس'],
  locale: 'ar',
  pageType: 'resources',
  path: '/ar/resources',
  image: '/images/resources/knowledge-hub.jpg',
  imageAlt: 'موارد وأدلة يونيوم',
  aiSummary: 'UNEOM Resources hub.',
  aiSummaryAr: 'مركز موارد يونيوم لمعرفة الأزياء. الموارد المتاحة: دليل الأقمشة (أنواع المواد، مواصفات الأداء)، دليل المقاسات (جداول قياس لجميع الصناعات)، تحسين القياس (نصائح التفصيل)، قوالب السياسات (سياسات أزياء الرعاية الصحية والشركات والضيافة)، دليل الشراء (عملية طلب عروض الأسعار، معايير التقييم). جميع الموارد مجانية للتحميل.'
});

export const dynamic = 'force-static';

const resourcesFAQsAr = [
  { question: 'هل جميع الموارد مجانية للتحميل؟', questionAr: 'هل جميع الموارد مجانية للتحميل؟', answer: 'Yes, all free.', answerAr: 'نعم، جميع أدلتنا وقوالبنا ومواردنا مجانية تماماً. نؤمن بمشاركة المعرفة لمساعدة الشركات على اتخاذ قرارات مدروسة حول برامج أزيائهم.' },
  { question: 'هل يمكنني تخصيص قوالب السياسات؟', questionAr: 'هل يمكنني تخصيص قوالب السياسات؟', answer: 'Yes, customizable.', answerAr: 'بالتأكيد! قوالب السياسات لدينا مصممة للتخصيص حسب احتياجات مؤسستكم. نوفر صيغ قابلة للتحرير حتى تتمكنوا من تعديلها لتناسب متطلباتكم الخاصة.' },
  { question: 'كيف أستخدم دليل المقاسات؟', questionAr: 'كيف أستخدم دليل المقاسات؟', answer: 'Step-by-step instructions.', answerAr: 'دليل المقاسات لدينا يشمل تعليمات قياس خطوة بخطوة مع رسوم توضيحية. قيسوا وفق إرشاداتنا وقارنوا مع جداول مقاساتنا للعثور على الأنسب لكل موظف.' },
];

const resourceCategories = [
  {
    title: 'الأقمشة والمواد',
    resources: [
      { id: 'fabric-guide', name: 'دليل الأقمشة', description: 'دليل شامل لأقمشة الأزياء والمواد وخصائص الأداء.', image: '/images/blog/sustainable-uniforms.jpg', href: '/ar/resources/fabric-guide' },
      { id: 'fabric-technology', name: 'تقنية الأقمشة', description: 'تقنيات النسيج المبتكرة للراحة والمتانة والوظائف.', image: '/images/services/fabric-selection.jpg', href: '/ar/resources/fabric-technology' },
    ]
  },
  {
    title: 'المقاسات والقياس',
    resources: [
      { id: 'size-guide', name: 'دليل المقاسات', description: 'جداول مقاسات مفصلة وتعليمات قياس لجميع أنواع الأجسام.', image: '/images/tailor-working-on-a-suit-in-his-workshop-2023-11-27-05-01-04-utc.jpg', href: '/ar/resources/size-guide' },
      { id: 'fit-optimization', name: 'تحسين القياس', description: 'نصائح وتقنيات لتحقيق القياس المثالي للزي.', image: '/images/resources/fit-optimization-hero.jpg', href: '/ar/resources/fit-optimization' },
    ]
  },
  {
    title: 'السياسات والشراء',
    resources: [
      { id: 'policy-templates', name: 'قوالب السياسات', description: 'قوالب سياسات أزياء جاهزة للاستخدام لمختلف الصناعات.', image: '/images/resources/hospital-policies-cover.jpg', href: '/ar/resources/policy-templates' },
      { id: 'procurement-guide', name: 'دليل الشراء', description: 'أفضل الممارسات لشراء الأزياء وتقييم الموردين.', image: '/images/service-overview.jpg', href: '/ar/resources/procurement-guide' },
    ]
  },
];

export default function ResourcesPageAr() {
  return (
    <div dir="rtl">
      <SEO2026 title="موارد وأدلة الأزياء | يونيوم" titleAr="موارد وأدلة الأزياء | يونيوم" description="Free resources." descriptionAr="موارد وأدلة أزياء مجانية." locale="ar" pageType="resources" mainEntity="Uniform Resources" mainEntityAr="موارد الأزياء" primaryImage="/images/resources/knowledge-hub.jpg" primaryImageAlt="موارد يونيوم" faqs={resourcesFAQsAr} breadcrumbs={[{ name: 'Resources', nameAr: 'الموارد', url: '/ar/resources' }]} />

      <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-800 text-white relative overflow-hidden py-16">
        <Container>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-blue-400">📚</span><span className="text-sm font-medium">مركز المعرفة</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">موارد <span className="bg-gradient-to-r from-blue-300 to-purple-300 text-transparent bg-clip-text">الأزياء</span></h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">أدلة وقوالب وأدوات مجانية لمساعدتكم على إدارة برنامج الأزياء بفعالية.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-blue-300">+6</div><div className="text-sm text-blue-200">أدلة</div></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-blue-300">مجاني</div><div className="text-sm text-blue-200">تحميل</div></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-blue-300">PDF</div><div className="text-sm text-blue-200">الصيغة</div></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-blue-300">EN/AR</div><div className="text-sm text-blue-200">اللغات</div></div>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          {resourceCategories.map((category, catIndex) => (
            <section key={catIndex} className="mb-16">
              <SectionHeading subtitle={`الفئة ${catIndex + 1}`} centered>{category.title}</SectionHeading>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {category.resources.map((resource) => (
                  <Link key={resource.id} href={resource.href} className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex">
                    <div className="relative w-1/3 min-h-[160px]"><Image src={resource.image} alt={resource.name} fill className="object-cover" /></div>
                    <div className="p-6 flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{resource.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                      <span className="text-blue-600 font-semibold text-sm group-hover:underline">عرض المورد ←</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}

          <section className="mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="أسئلة شائعة" centered>الأسئلة الشائعة عن الموارد</SectionHeading>
            <div className="max-w-3xl mx-auto mt-12 space-y-4">
              {resourcesFAQsAr.map((faq, index) => (<div key={index} className="bg-gray-50 rounded-xl p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-2" itemProp="name">{faq.questionAr}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600" itemProp="text">{faq.answerAr}</p></div></div>))}
            </div>
          </section>

          <section className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">تحتاج موارد مخصصة؟</h2>
            <p className="text-xl mb-8 text-blue-100">تواصل معنا لأدلة وقوالب مخصصة لمؤسستكم.</p>
            <Link href="/ar/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">تواصل معنا ←</Link>
          </section>
        </Container>
      </main>
      <section className="py-6 bg-gray-100 border-t"><div className="container mx-auto px-4 text-center"><Link href="/resources" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg text-sm">🇬🇧 English</Link></div></section>
    </div>
  );
}
