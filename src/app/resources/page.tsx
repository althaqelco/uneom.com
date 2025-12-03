import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'Uniform Resources & Guides Saudi Arabia | UNEOM Knowledge Hub',
  titleAr: 'موارد وأدلة الأزياء الموحدة السعودية | مركز معرفة يونيوم',
  description: 'Free uniform resources: fabric guides, size charts, policy templates, procurement guides. Expert knowledge for healthcare, hospitality, corporate uniforms in Saudi Arabia.',
  descriptionAr: 'موارد أزياء مجانية: أدلة الأقمشة، جداول المقاسات، قوالب السياسات، أدلة الشراء. معرفة متخصصة للرعاية الصحية والضيافة والشركات في السعودية.',
  keywords: ['uniform resources', 'fabric guide', 'size chart', 'uniform policy template', 'procurement guide', 'fit optimization'],
  keywordsAr: ['موارد الأزياء', 'دليل الأقمشة', 'جدول المقاسات', 'قالب سياسة الأزياء', 'دليل الشراء'],
  locale: 'en',
  pageType: 'resources',
  path: '/resources',
  image: '/images/resources/knowledge-hub.jpg',
  imageAlt: 'UNEOM Resources and Guides',
  aiSummary: 'UNEOM Resources hub for uniform knowledge. Available resources: Fabric Guide (material types, performance specs), Size Guide (measurement charts for all industries), Fit Optimization (tailoring tips), Policy Templates (healthcare, corporate, hospitality uniform policies), Procurement Guide (RFQ process, evaluation criteria). All resources free to download.',
  aiSummaryAr: 'مركز موارد يونيوم لمعرفة الأزياء. الموارد المتاحة: دليل الأقمشة، دليل المقاسات، تحسين القياس، قوالب السياسات، دليل الشراء. جميع الموارد مجانية للتحميل.'
});

export const dynamic = 'force-static';

const resourcesFAQs = [
  { question: 'Are all resources free to download?', questionAr: 'هل جميع الموارد مجانية للتحميل؟', answer: 'Yes, all our guides, templates, and resources are completely free. We believe in sharing knowledge to help businesses make informed decisions about their uniform programs.', answerAr: 'نعم، جميع أدلتنا وقوالبنا ومواردنا مجانية تماماً. نؤمن بمشاركة المعرفة لمساعدة الشركات على اتخاذ قرارات مدروسة حول برامج أزيائهم.' },
  { question: 'Can I customize the policy templates?', questionAr: 'هل يمكنني تخصيص قوالب السياسات؟', answer: 'Absolutely! Our policy templates are designed to be customized to your organization needs. We provide editable formats so you can modify them to fit your specific requirements.', answerAr: 'بالتأكيد! قوالب السياسات لدينا مصممة للتخصيص حسب احتياجات مؤسستكم. نوفر صيغ قابلة للتحرير حتى تتمكنوا من تعديلها لتناسب متطلباتكم الخاصة.' },
  { question: 'How do I use the size guide?', questionAr: 'كيف أستخدم دليل المقاسات؟', answer: 'Our size guide includes step-by-step measurement instructions with diagrams. Measure according to our guidelines and compare with our size charts to find the best fit for each employee.', answerAr: 'دليل المقاسات لدينا يشمل تعليمات قياس خطوة بخطوة مع رسوم توضيحية. قيسوا وفق إرشاداتنا وقارنوا مع جداول مقاساتنا للعثور على الأنسب لكل موظف.' },
];

const resourceCategories = [
  {
    title: 'Fabric & Materials',
    resources: [
      { id: 'fabric-guide', name: 'Fabric Guide', description: 'Comprehensive guide to uniform fabrics, materials, and performance characteristics.', image: '/images/blog/sustainable-uniforms.jpg', href: '/resources/fabric-guide' },
      { id: 'fabric-technology', name: 'Fabric Technology', description: 'Innovative textile technologies for comfort, durability, and functionality.', image: '/images/services/fabric-selection.jpg', href: '/resources/fabric-technology' },
    ]
  },
  {
    title: 'Sizing & Fit',
    resources: [
      { id: 'size-guide', name: 'Size Guide', description: 'Detailed sizing charts and measurement instructions for all body types.', image: '/images/tailor-working-on-a-suit-in-his-workshop-2023-11-27-05-01-04-utc.jpg', href: '/resources/size-guide' },
      { id: 'fit-optimization', name: 'Fit Optimization', description: 'Tips and techniques for achieving the perfect uniform fit.', image: '/images/resources/fit-optimization-hero.jpg', href: '/resources/fit-optimization' },
    ]
  },
  {
    title: 'Policy & Procurement',
    resources: [
      { id: 'policy-templates', name: 'Policy Templates', description: 'Ready-to-use uniform policy templates for various industries.', image: '/images/resources/hospital-policies-cover.jpg', href: '/resources/policy-templates' },
      { id: 'procurement-guide', name: 'Procurement Guide', description: 'Best practices for uniform procurement and supplier evaluation.', image: '/images/service-overview.jpg', href: '/resources/procurement-guide' },
    ]
  },
];

export default function ResourcesPage() {
  return (
    <>
      <SEO2026
        title="Uniform Resources & Guides | UNEOM"
        titleAr="موارد وأدلة الأزياء | يونيوم"
        description="Free uniform resources and guides."
        descriptionAr="موارد وأدلة أزياء مجانية."
        locale="en"
        pageType="resources"
        mainEntity="Uniform Resources Hub"
        mainEntityAr="مركز موارد الأزياء"
        primaryImage="/images/resources/knowledge-hub.jpg"
        primaryImageAlt="UNEOM Resources"
        faqs={resourcesFAQs}
        breadcrumbs={[
          { name: 'Resources', nameAr: 'الموارد', url: '/resources' },
        ]}
      />

      <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-800 text-white relative overflow-hidden py-16">
        <Container>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="text-blue-400">📚</span>
              <span className="text-sm font-medium">Knowledge Hub</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Uniform <span className="bg-gradient-to-r from-blue-300 to-purple-300 text-transparent bg-clip-text">Resources</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Free guides, templates, and tools to help you manage your uniform program effectively.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-blue-300">6+</div>
                <div className="text-sm text-blue-200">Guides</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-blue-300">Free</div>
                <div className="text-sm text-blue-200">Download</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-blue-300">PDF</div>
                <div className="text-sm text-blue-200">Format</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-blue-300">EN/AR</div>
                <div className="text-sm text-blue-200">Languages</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          {resourceCategories.map((category, catIndex) => (
            <section key={catIndex} className="mb-16">
              <SectionHeading subtitle={`Category ${catIndex + 1}`} centered>{category.title}</SectionHeading>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {category.resources.map((resource) => (
                  <Link key={resource.id} href={resource.href} className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex">
                    <div className="relative w-1/3 min-h-[160px]">
                      <Image src={resource.image} alt={resource.name} fill className="object-cover" />
                    </div>
                    <div className="p-6 flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{resource.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                      <span className="text-blue-600 font-semibold text-sm group-hover:underline">View Resource →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}

          <section className="mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>Resources FAQ</SectionHeading>
            <div className="max-w-3xl mx-auto mt-12 space-y-4">
              {resourcesFAQs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="text-lg font-bold text-gray-900 mb-2" itemProp="name">{faq.question}</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-gray-600" itemProp="text">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Custom Resources?</h2>
            <p className="text-xl mb-8 text-blue-100">Contact us for tailored guides and templates for your organization.</p>
            <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">Contact Us →</Link>
          </section>
        </Container>
      </main>

      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <Link href="/ar/resources" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
            🇸🇦 العربية
          </Link>
        </div>
      </section>
    </>
  );
}
