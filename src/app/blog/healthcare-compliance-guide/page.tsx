import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'Healthcare Uniform Compliance Guide Saudi Arabia | UNEOM',
  titleAr: 'دليل الامتثال لأزياء الرعاية الصحية السعودية | يونيوم',
  description: 'Complete guide to healthcare uniform compliance in Saudi Arabia. MOH regulations, infection control standards, CBAHI requirements. Essential for hospitals and clinics.',
  descriptionAr: 'دليل شامل لامتثال أزياء الرعاية الصحية في السعودية. لوائح وزارة الصحة، معايير مكافحة العدوى، متطلبات CBAHI. أساسي للمستشفيات والعيادات.',
  keywords: ['healthcare uniform compliance', 'MOH uniform regulations', 'hospital dress code saudi', 'CBAHI uniform standards', 'infection control uniforms'],
  keywordsAr: ['امتثال أزياء الرعاية الصحية', 'لوائح وزارة الصحة للأزياء', 'قواعد لباس المستشفى السعودية'],
  locale: 'en',
  pageType: 'blog',
  path: '/blog/healthcare-compliance-guide',
  image: '/images/blog/healthcare-uniforms.jpg',
  imageAlt: 'Healthcare Uniform Compliance Guide',
  publishedTime: '2024-11-20T08:00:00Z',
  author: 'UNEOM Healthcare Team',
  aiSummary: 'Healthcare uniform compliance guide for Saudi Arabia. Covers: MOH regulations (color coding, fabric standards), CBAHI accreditation requirements, infection control protocols, department-specific guidelines. Key requirements: antimicrobial fabrics, daily laundering, proper storage, PPE integration. Applies to: hospitals, clinics, laboratories, pharmacies. Updated for 2024 standards.',
  aiSummaryAr: 'دليل امتثال أزياء الرعاية الصحية للسعودية. يغطي: لوائح وزارة الصحة، متطلبات اعتماد CBAHI، بروتوكولات مكافحة العدوى، إرشادات خاصة بالأقسام.'
});

export const dynamic = 'force-static';

const complianceFAQs = [
  { question: 'What are MOH uniform requirements for hospitals?', answer: 'MOH requires healthcare uniforms to meet specific standards including antimicrobial fabric treatment, color-coding by department, daily laundering protocols, and proper storage procedures. Scrubs must be facility-laundered, not home-washed.' },
  { question: 'Is CBAHI uniform compliance mandatory?', answer: 'Yes, for accredited facilities. CBAHI (Central Board for Accreditation of Healthcare Institutions) requires documented uniform policies, infection control compliance, and regular audits of uniform management practices.' },
  { question: 'What fabric standards apply to medical uniforms?', answer: 'Medical uniforms should be made from fluid-resistant, antimicrobial-treated fabrics with at least 60% cotton content. They must withstand high-temperature industrial laundering (above 60°C) and maintain integrity after repeated washing.' },
];

const requirements = [
  { icon: '🏥', title: 'MOH Regulations', items: ['Color-coded by department', 'Antimicrobial treatment', 'Facility laundering only', 'Proper storage protocols'] },
  { icon: '✅', title: 'CBAHI Standards', items: ['Documented policies', 'Regular audits', 'Staff training records', 'Compliance monitoring'] },
  { icon: '🦠', title: 'Infection Control', items: ['Fluid-resistant fabrics', 'Daily change requirements', 'PPE integration', 'Contamination protocols'] },
  { icon: '👔', title: 'Professional Standards', items: ['Proper fit guidelines', 'Name badge requirements', 'Grooming standards', 'Footwear specifications'] },
];

export default function HealthcareComplianceGuidePage() {
  return (
    <>
      <SEO2026
        title="Healthcare Uniform Compliance Guide | UNEOM"
        titleAr="دليل امتثال أزياء الرعاية الصحية | يونيوم"
        description="Complete healthcare uniform compliance guide."
        locale="en"
        pageType="blog"
        mainEntity="Healthcare Uniform Compliance"
        primaryImage="/images/blog/healthcare-uniforms.jpg"
        primaryImageAlt="Healthcare Compliance"
        faqs={complianceFAQs}
        breadcrumbs={[
          { name: 'Blog', url: '/blog' },
          { name: 'Healthcare Compliance Guide', url: '/blog/healthcare-compliance-guide' },
        ]}
        publishedDate="2024-11-20T08:00:00Z"
        author={{ name: 'UNEOM Healthcare Team', title: 'Healthcare Specialists' }}
        industry="Healthcare"
      />

      <article>
        <header className="bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-800 text-white relative overflow-hidden py-16">
          <Container>
            <div className="relative z-10 max-w-4xl">
              <div className="flex items-center gap-4 mb-6 text-sm">
                <span className="bg-emerald-500 px-3 py-1 rounded-full">Healthcare Guide</span>
                <span>November 20, 2024</span>
                <span>•</span>
                <span>15 min read</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Healthcare Uniform <span className="text-emerald-300">Compliance Guide</span> Saudi Arabia
              </h1>
              <p className="text-xl text-emerald-100 mb-8">
                Essential guide to MOH regulations, CBAHI standards, and infection control requirements for medical uniforms in Saudi healthcare facilities.
              </p>
            </div>
          </Container>
        </header>

        <main className="py-16">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-12">
                <Image src="/images/blog/healthcare-uniforms.jpg" alt="Healthcare Uniform Compliance" fill className="object-cover" />
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6">Introduction</h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Healthcare uniform compliance in Saudi Arabia is governed by multiple regulatory bodies including the Ministry of Health (MOH) and CBAHI. This comprehensive guide covers all requirements healthcare facilities must meet to ensure patient safety and regulatory compliance.
                </p>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Key Compliance Requirements</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {requirements.map((req, index) => (
                      <div key={index} className="bg-emerald-50 rounded-xl p-6">
                        <div className="text-4xl mb-4">{req.icon}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">{req.title}</h3>
                        <ul className="space-y-2">
                          {req.items.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-600">
                              <span className="text-emerald-500">✓</span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">MOH Uniform Regulations</h2>
                  <p className="text-gray-600 mb-4">
                    The Saudi Ministry of Health mandates specific uniform standards for all healthcare workers:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li><strong>Color Coding:</strong> Different departments must use designated colors (e.g., surgical green, nursing blue).</li>
                    <li><strong>Fabric Standards:</strong> Uniforms must be made from approved antimicrobial materials.</li>
                    <li><strong>Laundering:</strong> All uniforms must be facility-laundered at temperatures above 60°C.</li>
                    <li><strong>Storage:</strong> Clean uniforms must be stored in designated areas away from patient areas.</li>
                    <li><strong>Change Frequency:</strong> Daily changes required; immediate change if contaminated.</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">CBAHI Accreditation Requirements</h2>
                  <p className="text-gray-600 mb-4">
                    For CBAHI-accredited facilities, additional documentation and processes are required:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Written uniform policy approved by administration</li>
                    <li>Staff training documentation on uniform protocols</li>
                    <li>Regular compliance audits with documented results</li>
                    <li>Corrective action procedures for non-compliance</li>
                    <li>Annual policy review and updates</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Department-Specific Guidelines</h2>
                  
                  <h3 className="text-2xl font-bold mb-4 text-emerald-600">Surgery & OR</h3>
                  <p className="text-gray-600 mb-4">Surgical scrubs must be sterile, changed between procedures, and disposed of or laundered according to infection control protocols.</p>

                  <h3 className="text-2xl font-bold mb-4 text-blue-600">Emergency Department</h3>
                  <p className="text-gray-600 mb-4">High-risk exposure area requiring fluid-resistant uniforms with easy change access and immediate contamination protocols.</p>

                  <h3 className="text-2xl font-bold mb-4 text-purple-600">Laboratory</h3>
                  <p className="text-gray-600 mb-4">Lab coats must meet chemical resistance standards and be removed before leaving the laboratory area.</p>
                </section>
              </div>

              <section className="mt-12" itemScope itemType="https://schema.org/FAQPage">
                <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {complianceFAQs.map((faq, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                      <h3 className="text-lg font-bold text-gray-900 mb-2" itemProp="name">{faq.question}</h3>
                      <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                        <p className="text-gray-600" itemProp="text">{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-12 bg-emerald-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4">Need Compliant Healthcare Uniforms?</h2>
                <p className="text-gray-600 mb-6">
                  UNEOM provides MOH and CBAHI-compliant healthcare uniforms for Saudi hospitals and clinics.
                </p>
                <Link href="/quote?category=healthcare" className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors">
                  Get Healthcare Quote →
                </Link>
              </section>
            </div>
          </Container>
        </main>
      </article>

      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <Link href="/ar/blog/healthcare-compliance-guide" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
            🇸🇦 العربية
          </Link>
        </div>
      </section>
    </>
  );
}
