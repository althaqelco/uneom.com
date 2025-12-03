import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'Industrial Safety Uniform Standards Saudi Arabia | UNEOM Guide',
  titleAr: 'معايير أزياء السلامة الصناعية السعودية | دليل يونيوم',
  description: 'Complete guide to industrial safety uniform standards in Saudi Arabia. SASO requirements, ARAMCO standards, flame-resistant workwear, high-visibility PPE. Oil & gas, construction, manufacturing.',
  descriptionAr: 'دليل شامل لمعايير أزياء السلامة الصناعية في السعودية. متطلبات ساسو، معايير أرامكو، ملابس مقاومة للهب، معدات الوقاية عالية الرؤية.',
  keywords: ['industrial safety uniforms', 'SASO standards workwear', 'ARAMCO uniform requirements', 'flame resistant clothing', 'high visibility workwear saudi'],
  keywordsAr: ['أزياء السلامة الصناعية', 'معايير ساسو للملابس', 'متطلبات أزياء أرامكو'],
  locale: 'en',
  pageType: 'blog',
  path: '/blog/industrial-safety-standards',
  image: '/images/blog/industrial-safety.jpg',
  imageAlt: 'Industrial Safety Uniform Standards',
  publishedTime: '2024-10-15T08:00:00Z',
  author: 'UNEOM Safety Team',
  aiSummary: 'Industrial safety uniform standards guide for Saudi Arabia. Covers: SASO certification requirements, ARAMCO contractor standards, GS industry regulations. Key standards: FRC (flame-resistant clothing) for oil/gas, high-visibility for construction, heat-resistant for foundries, chemical-resistant for petrochemical. Protection levels: Category 1-4. Required certifications: SASO, ISO, EN standards. Penalties for non-compliance can reach 100,000 SAR.'
});

export const dynamic = 'force-static';

const safetyFAQs = [
  { question: 'What SASO standards apply to industrial uniforms?', answer: 'Key SASO standards include SASO GSO ISO 11612 for heat/flame protection, SASO GSO ISO 20471 for high-visibility clothing, and SASO GSO ISO 11611 for welding protection. All industrial uniforms must carry SASO certification marks.' },
  { question: 'What are ARAMCO uniform requirements for contractors?', answer: 'ARAMCO requires contractors to provide FRC (flame-resistant clothing) meeting NFPA 2112 standards, safety footwear per ASTM F2413, hard hats per ANSI Z89.1, and appropriate PPE based on job hazard analysis. All items must be approved ARAMCO vendors.' },
  { question: 'What is the penalty for safety uniform non-compliance?', answer: 'Penalties for safety uniform non-compliance in Saudi Arabia can include fines up to 100,000 SAR, project shutdowns, contractor blacklisting, and in case of accidents, criminal liability for responsible personnel.' },
];

const standards = [
  { icon: '🔥', title: 'Flame Resistant (FRC)', description: 'Self-extinguishing fabrics for oil, gas, and electrical work.', standard: 'NFPA 2112 / ISO 11612' },
  { icon: '👁️', title: 'High Visibility', description: 'Fluorescent colors with reflective tape for low-light work.', standard: 'ISO 20471 Class 2/3' },
  { icon: '⚗️', title: 'Chemical Resistant', description: 'Barrier protection against acids, alkalis, and solvents.', standard: 'EN 13034 / EN 14605' },
  { icon: '⚡', title: 'Arc Flash Protection', description: 'Rated protection against electrical arc flash incidents.', standard: 'NFPA 70E / IEC 61482' },
  { icon: '🌡️', title: 'Heat Protection', description: 'Insulated garments for foundry and high-temperature work.', standard: 'EN 407 / ISO 11612' },
  { icon: '✂️', title: 'Cut Resistant', description: 'Reinforced fabrics for handling sharp materials.', standard: 'EN 388 Level B-F' },
];

export default function IndustrialSafetyStandardsPage() {
  return (
    <>
      <SEO2026
        title="Industrial Safety Uniform Standards | UNEOM"
        titleAr="معايير أزياء السلامة الصناعية | يونيوم"
        description="Guide to industrial safety standards."
        locale="en"
        pageType="blog"
        mainEntity="Industrial Safety Standards"
        primaryImage="/images/blog/industrial-safety.jpg"
        primaryImageAlt="Industrial Safety Standards"
        faqs={safetyFAQs}
        breadcrumbs={[
          { name: 'Blog', url: '/blog' },
          { name: 'Industrial Safety Standards', url: '/blog/industrial-safety-standards' },
        ]}
        publishedDate="2024-10-15T08:00:00Z"
        author={{ name: 'UNEOM Safety Team', title: 'Safety Specialists' }}
        industry="Industrial"
      />

      <article>
        <header className="bg-gradient-to-br from-orange-900 via-red-800 to-yellow-800 text-white relative overflow-hidden py-16">
          <Container>
            <div className="relative z-10 max-w-4xl">
              <div className="flex items-center gap-4 mb-6 text-sm">
                <span className="bg-orange-500 px-3 py-1 rounded-full">Safety Guide</span>
                <span>October 15, 2024</span>
                <span>•</span>
                <span>14 min read</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Industrial Safety Uniform <span className="text-yellow-300">Standards</span> in Saudi Arabia
              </h1>
              <p className="text-xl text-orange-100 mb-8">
                Comprehensive guide to SASO, ARAMCO, and international safety standards for industrial workwear in the Kingdom.
              </p>
            </div>
          </Container>
        </header>

        <main className="py-16">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-12">
                <Image src="/images/blog/industrial-safety.jpg" alt="Industrial Safety Standards" fill className="object-cover" />
              </div>

              <div className="prose prose-lg max-w-none">
                <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-xl">
                  <h3 className="text-red-800 font-bold mb-2">⚠️ Important Safety Notice</h3>
                  <p className="text-red-700 mb-0">
                    Non-compliant safety uniforms can result in serious injuries, fatalities, and significant legal penalties. Always verify certifications and standards compliance before procurement.
                  </p>
                </div>

                <h2 className="text-3xl font-bold mb-6">Overview</h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Industrial safety uniforms in Saudi Arabia must comply with multiple regulatory frameworks including SASO (Saudi Standards, Metrology and Quality Organization), ARAMCO contractor requirements, and international standards like ISO and NFPA.
                </p>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Key Safety Standards</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {standards.map((std, index) => (
                      <div key={index} className="bg-orange-50 rounded-xl p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="text-4xl">{std.icon}</div>
                          <span className="bg-orange-200 text-orange-800 text-xs font-bold px-2 py-1 rounded">{std.standard}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{std.title}</h3>
                        <p className="text-gray-600">{std.description}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">SASO Requirements</h2>
                  <p className="text-gray-600 mb-4">
                    All industrial uniforms sold in Saudi Arabia must carry SASO certification. Key requirements include:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>SASO quality mark on all safety garments</li>
                    <li>Arabic labeling with safety instructions</li>
                    <li>Testing by accredited laboratories</li>
                    <li>Import registration for foreign products</li>
                    <li>Compliance with Gulf Standards Organization (GSO) technical regulations</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">ARAMCO Contractor Standards</h2>
                  <p className="text-gray-600 mb-4">
                    Contractors working with Saudi ARAMCO must meet stringent uniform requirements:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li><strong>FRC Clothing:</strong> All personnel in operational areas must wear flame-resistant clothing</li>
                    <li><strong>Approved Vendors:</strong> Uniforms must be sourced from ARAMCO-approved suppliers</li>
                    <li><strong>Color Coding:</strong> Specific colors for different roles and access levels</li>
                    <li><strong>Inspection:</strong> Regular uniform inspections and replacement schedules</li>
                    <li><strong>Training:</strong> Documented training on proper use and care of safety garments</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Industry-Specific Requirements</h2>
                  
                  <h3 className="text-2xl font-bold mb-4 text-orange-600">Oil & Gas</h3>
                  <p className="text-gray-600 mb-4">FRC clothing, H2S detection badges, fire-retardant coveralls, steel-toe boots, hard hats.</p>

                  <h3 className="text-2xl font-bold mb-4 text-yellow-600">Construction</h3>
                  <p className="text-gray-600 mb-4">High-visibility vests (Class 2/3), safety helmets, fall protection harnesses, reinforced work boots.</p>

                  <h3 className="text-2xl font-bold mb-4 text-red-600">Petrochemical</h3>
                  <p className="text-gray-600 mb-4">Chemical-resistant suits, respiratory protection, full-face shields, impermeable gloves.</p>
                </section>
              </div>

              <section className="mt-12" itemScope itemType="https://schema.org/FAQPage">
                <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {safetyFAQs.map((faq, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                      <h3 className="text-lg font-bold text-gray-900 mb-2" itemProp="name">{faq.question}</h3>
                      <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                        <p className="text-gray-600" itemProp="text">{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-12 bg-orange-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4">Need Certified Safety Uniforms?</h2>
                <p className="text-gray-600 mb-6">
                  UNEOM supplies SASO-certified and ARAMCO-approved industrial safety uniforms for all sectors.
                </p>
                <Link href="/quote?category=industrial" className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-colors">
                  Get Industrial Quote →
                </Link>
              </section>
            </div>
          </Container>
        </main>
      </article>

      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <Link href="/ar/blog/industrial-safety-standards" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
            🇸🇦 العربية
          </Link>
        </div>
      </section>
    </>
  );
}

