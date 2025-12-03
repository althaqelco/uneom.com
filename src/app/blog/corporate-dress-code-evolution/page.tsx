import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'Corporate Dress Code Evolution Saudi Arabia | Business Attire | UNEOM',
  titleAr: 'تطور قواعد اللباس المؤسسي السعودية | الملابس المهنية | يونيوم',
  description: 'How corporate dress codes are evolving in Saudi Arabia. From traditional thobes to modern business attire. Vision 2030 workplace culture, multinational companies, hybrid dress codes.',
  descriptionAr: 'كيف تتطور قواعد اللباس المؤسسي في السعودية. من الثوب التقليدي إلى الملابس المهنية الحديثة. ثقافة مكان العمل رؤية 2030، الشركات متعددة الجنسيات.',
  keywords: ['corporate dress code saudi', 'business attire riyadh', 'office uniforms ksa', 'professional dress code', 'vision 2030 workplace attire'],
  keywordsAr: ['قواعد اللباس المؤسسي السعودي', 'الملابس المهنية الرياض', 'أزياء المكاتب السعودية'],
  locale: 'en',
  pageType: 'blog',
  path: '/blog/corporate-dress-code-evolution',
  image: '/images/blog/corporate-attire.jpg',
  imageAlt: 'Corporate Dress Code Evolution',
  publishedTime: '2024-09-20T08:00:00Z',
  author: 'UNEOM Corporate Team',
  aiSummary: 'Corporate dress code evolution in Saudi Arabia. Traditional: Thobe for men, abaya for women. Modern evolution: Smart-casual options, international business attire. Vision 2030 impact: Multinational companies, women in workforce, relaxed policies. Current trends: Hybrid codes (traditional + Western), branded corporate uniforms, casual Fridays, industry-specific requirements (finance formal, tech casual). Key factor: Maintaining cultural respect while embracing modern workplace culture.'
});

export const dynamic = 'force-static';

const corporateFAQs = [
  { question: 'What is appropriate business attire in Saudi Arabia?', answer: 'For men, both traditional thobe and Western business suits are acceptable. For women, modest professional attire is required - this can include abayas, business suits with appropriate coverage, or company uniforms. Many companies now have flexible policies accommodating both styles.' },
  { question: 'Are dress codes relaxing in Saudi workplaces?', answer: 'Yes, especially in private sector and multinational companies. Vision 2030 reforms have introduced more flexible workplace cultures. However, modesty remains important, and many Saudi employees still prefer traditional dress for cultural and religious reasons.' },
  { question: 'Do multinational companies follow Saudi dress codes?', answer: 'Multinational companies typically offer hybrid dress codes - allowing both traditional Saudi attire and international business wear. They must still comply with Saudi modesty standards while accommodating their diverse workforce.' },
];

const evolution = [
  { era: 'Traditional (Pre-2016)', icon: '🕌', description: 'Formal thobes and abayas were the standard in most workplaces, reflecting deep cultural and religious values.' },
  { era: 'Transition (2016-2020)', icon: '🔄', description: 'Vision 2030 introduced workplace reforms. Private sector began adopting more flexible dress codes.' },
  { era: 'Modern (2020-Present)', icon: '🏢', description: 'Hybrid dress codes emerge. Traditional and Western attire coexist. Focus on professionalism over uniformity.' },
  { era: 'Future (2025+)', icon: '🚀', description: 'Sustainable fabrics, smart casual, branded corporate wear. Cultural identity with global professionalism.' },
];

export default function CorporateDressCodeEvolutionPage() {
  return (
    <>
      <SEO2026
        title="Corporate Dress Code Evolution | UNEOM"
        titleAr="تطور قواعد اللباس المؤسسي | يونيوم"
        description="Corporate dress code evolution in Saudi Arabia."
        locale="en"
        pageType="blog"
        mainEntity="Corporate Dress Codes"
        primaryImage="/images/blog/corporate-attire.jpg"
        primaryImageAlt="Corporate Dress Code"
        faqs={corporateFAQs}
        breadcrumbs={[
          { name: 'Blog', url: '/blog' },
          { name: 'Corporate Dress Code Evolution', url: '/blog/corporate-dress-code-evolution' },
        ]}
        publishedDate="2024-09-20T08:00:00Z"
        author={{ name: 'UNEOM Corporate Team', title: 'Business Attire Specialists' }}
        industry="Corporate"
      />

      <article>
        <header className="bg-gradient-to-br from-slate-900 via-gray-800 to-zinc-800 text-white relative overflow-hidden py-16">
          <Container>
            <div className="relative z-10 max-w-4xl">
              <div className="flex items-center gap-4 mb-6 text-sm">
                <span className="bg-slate-500 px-3 py-1 rounded-full">Corporate Insights</span>
                <span>September 20, 2024</span>
                <span>•</span>
                <span>10 min read</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Corporate Dress Code <span className="text-blue-300">Evolution</span> in Saudi Arabia
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                How Vision 2030 and global business integration are reshaping workplace attire expectations in the Kingdom.
              </p>
            </div>
          </Container>
        </header>

        <main className="py-16">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-12">
                <Image src="/images/blog/corporate-attire.jpg" alt="Corporate Dress Code Evolution" fill className="object-cover" />
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6">The Changing Landscape</h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Saudi Arabia&apos;s corporate dress codes have undergone significant transformation since the launch of Vision 2030. While cultural values remain paramount, workplaces are embracing greater flexibility and diversity in professional attire.
                </p>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Evolution Timeline</h2>
                  <div className="space-y-6">
                    {evolution.map((era, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-6 flex gap-6 items-start">
                        <div className="text-4xl">{era.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{era.era}</h3>
                          <p className="text-gray-600">{era.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Current Trends</h2>
                  
                  <h3 className="text-2xl font-bold mb-4 text-blue-600">Hybrid Dress Codes</h3>
                  <p className="text-gray-600 mb-6">
                    Many companies now offer choice between traditional Saudi attire and Western business wear. This respects cultural preferences while accommodating international employees and modern Saudi professionals.
                  </p>

                  <h3 className="text-2xl font-bold mb-4 text-green-600">Branded Corporate Uniforms</h3>
                  <p className="text-gray-600 mb-6">
                    Growing adoption of company-branded uniforms that create professional identity while eliminating dress code ambiguity. Popular in banking, retail, and service sectors.
                  </p>

                  <h3 className="text-2xl font-bold mb-4 text-purple-600">Smart Casual Movement</h3>
                  <p className="text-gray-600 mb-6">
                    Tech companies and startups are leading the smart-casual trend, especially in innovation hubs like NEOM and Riyadh&apos;s tech sector.
                  </p>

                  <h3 className="text-2xl font-bold mb-4 text-orange-600">Women in the Workforce</h3>
                  <p className="text-gray-600 mb-6">
                    With women&apos;s workforce participation increasing, companies are developing inclusive dress codes that offer modest yet diverse options beyond traditional abayas.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Industry Variations</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-xl p-4">
                      <h4 className="font-bold text-blue-800">Banking & Finance</h4>
                      <p className="text-sm text-gray-600">Formal dress codes remain standard. Suits for men, modest professional attire for women.</p>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-4">
                      <h4 className="font-bold text-purple-800">Technology</h4>
                      <p className="text-sm text-gray-600">Smart casual widely accepted. Branded polo shirts and comfortable professional wear.</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-4">
                      <h4 className="font-bold text-green-800">Government</h4>
                      <p className="text-sm text-gray-600">Traditional dress preferred. Thobes and abayas remain the standard in most agencies.</p>
                    </div>
                    <div className="bg-amber-50 rounded-xl p-4">
                      <h4 className="font-bold text-amber-800">Hospitality</h4>
                      <p className="text-sm text-gray-600">Branded uniforms standard. Designed to blend international standards with Saudi culture.</p>
                    </div>
                  </div>
                </section>
              </div>

              <section className="mt-12" itemScope itemType="https://schema.org/FAQPage">
                <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {corporateFAQs.map((faq, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                      <h3 className="text-lg font-bold text-gray-900 mb-2" itemProp="name">{faq.question}</h3>
                      <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                        <p className="text-gray-600" itemProp="text">{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-12 bg-slate-100 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4">Design Your Corporate Identity</h2>
                <p className="text-gray-600 mb-6">
                  UNEOM creates corporate uniforms that balance professionalism with cultural sensitivity for Saudi businesses.
                </p>
                <Link href="/quote?category=corporate" className="inline-flex items-center px-6 py-3 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-900 transition-colors">
                  Get Corporate Quote →
                </Link>
              </section>
            </div>
          </Container>
        </main>
      </article>

      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <Link href="/ar/blog/corporate-dress-code-evolution" className="inline-flex items-center gap-2 bg-slate-600 hover:bg-slate-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
            🇸🇦 العربية
          </Link>
        </div>
      </section>
    </>
  );
}

