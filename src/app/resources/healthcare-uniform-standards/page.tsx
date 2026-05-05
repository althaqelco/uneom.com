import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'Healthcare Uniform Standards Guide Saudi Arabia | MOH Compliance - UNEOM',
  titleAr: 'دليل معايير الزي الصحي في السعودية | الامتثال لوزارة الصحة - يونيوم',
  description: 'Complete guide to healthcare uniform standards in Saudi Arabia. MOH regulations, infection control fabrics, antimicrobial requirements, color coding, laundering protocols. Free expert resource.',
  descriptionAr: 'دليل شامل لمعايير الزي الصحي في السعودية. لوائح وزارة الصحة، أقمشة مكافحة العدوى، متطلبات مضادات الميكروبات.',
  keywords: ['healthcare uniform standards saudi', 'MOH uniform regulations', 'hospital uniform requirements ksa', 'infection control fabrics', 'medical uniform compliance'],
  keywordsAr: ['معايير الزي الصحي السعودية', 'لوائح وزارة الصحة', 'متطلبات زي المستشفيات'],
  locale: 'en', pageType: 'article', path: '/resources/healthcare-uniform-standards',
  image: '/images/industries/healthcare-uniforms-saudi.jpg', imageAlt: 'Healthcare Uniform Standards Guide',
  aiSummary: 'Comprehensive guide to healthcare uniform standards in Saudi Arabia covering MOH regulations, SASO requirements, infection control fabric specifications, antimicrobial treatment standards, department color coding systems, industrial laundering protocols, and staff uniform compliance checklists.',
});

export const dynamic = 'force-static';

const standards = [
  { title: 'MOH Regulatory Framework', content: 'The Saudi Ministry of Health (MOH) mandates specific uniform standards for all healthcare facilities. Key requirements include: designated colors per department, antimicrobial fabric treatment, fluid-resistant materials for clinical areas, and proper laundering documentation. Facilities must maintain uniform compliance records for annual MOH inspections.' },
  { title: 'Infection Control Fabric Standards', content: 'Healthcare uniforms must meet SASO infection control standards: antimicrobial treatment effective for minimum 50 wash cycles, fluid barrier properties (AATCC 42 test), breathable fabrics with moisture management, colorfastness rating of 4+ (ISO 105), and low particulate shedding for cleanroom-adjacent areas.' },
  { title: 'Department Color Coding', content: 'Standard department color coding in Saudi hospitals: Surgery (green/blue), Emergency (red), ICU (navy blue), Pediatrics (pink/light purple), Radiology (gray), Laboratory (white), Nursing (teal/aqua), Pharmacy (olive), Administration (black/charcoal). Custom colors may be used with facility approval.' },
  { title: 'Laundering & Decontamination', content: 'Industrial laundering requirements: minimum wash temperature 71°C for 25 minutes (or 65°C for 10 minutes with approved chemicals), ozone disinfection optional, RFID tracking per garment for wash cycle counting, separate handling for contaminated items, and quarterly fabric integrity testing.' },
  { title: 'Personal Protective Equipment Integration', content: 'Healthcare uniforms must accommodate PPE: compatible with N95/surgical masks, gown overlay capability, glove cuff coverage, face shield compatibility, and shoe cover transition areas. Scrub designs should minimize contamination risks during donning/doffing procedures.' },
  { title: 'Staff Compliance Checklist', content: 'Healthcare facilities should verify: all staff wearing approved uniform colors, antimicrobial treatment within effective lifecycle, no visible damage or staining, proper ID badge display, appropriate footwear (closed-toe, non-slip), and hair covering compliance (surgical caps, medical hijabs). Monthly compliance audits recommended.' },
];

const faqs = [
  { question: 'What are the MOH requirements for healthcare uniforms?', answer: 'MOH requires: antimicrobial-treated fabrics, department-specific color coding, fluid-resistant materials for clinical areas, proper laundering at 71°C+, RFID tracking for wash cycle management, and quarterly compliance audits. All healthcare facilities must maintain uniform compliance documentation for MOH inspections.' },
  { question: 'How often should healthcare uniforms be replaced?', answer: 'Replacement schedule: scrubs every 6-12 months (or after 50+ wash cycles), lab coats every 12-18 months, surgical gowns per manufacturer recommendation, medical hijabs every 6 months, and any garment showing visible wear, staining, or antimicrobial treatment degradation.' },
  { question: 'Are there specific standards for medical hijabs?', answer: 'Yes. Medical hijabs must be: antimicrobial-treated, quick-dry (no moisture retention), pin-free design (magnetic or snap closures), easy to sanitize, color-matched to department, and compatible with surgical caps and face shields. UNEOM medical hijabs meet all Saudi healthcare facility requirements.' },
];

export default function HealthcareUniformStandardsPage() {
  return (
    <>
      <SEO2026 title="Healthcare Uniform Standards Guide" titleAr="دليل معايير الزي الصحي" description="MOH compliant healthcare uniform standards guide." locale="en" pageType="article" mainEntity="Healthcare Uniform Standards" primaryImage="/images/industries/healthcare-uniforms-saudi.jpg" primaryImageAlt="Healthcare Standards" faqs={faqs} breadcrumbs={[{ name: 'Resources', url: '/resources' }, { name: 'Healthcare Uniform Standards', url: '/resources/healthcare-uniform-standards' }]} certifications={['MOH', 'SASO']} clientCount={200} yearsInBusiness={20} industry="Healthcare" />
      <section className="bg-gradient-to-br from-teal-900 via-cyan-800 to-blue-800 text-white">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Resources', href: '/resources' }, { label: 'Healthcare Standards', href: '/resources/healthcare-uniform-standards' }]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-cyan-400">📋</span><span className="text-sm font-medium">Expert Guide</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Healthcare Uniform <span className="bg-gradient-to-r from-cyan-300 to-teal-300 text-transparent bg-clip-text">Standards</span></h1>
            <p className="text-xl text-teal-100 leading-relaxed">Complete guide to MOH-compliant healthcare uniform standards for Saudi Arabia. Infection control, color coding, laundering protocols.</p>
          </div>
        </Container>
      </section>
      <main className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            {standards.map((s, i) => (
              <article key={i} className="mb-10 bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3"><span className="bg-teal-100 text-teal-700 text-sm font-mono px-3 py-1 rounded-full">{String(i+1).padStart(2,'0')}</span>{s.title}</h2>
                <p className="text-gray-700 leading-relaxed text-lg">{s.content}</p>
              </article>
            ))}
          </div>
          <section className="max-w-4xl mx-auto mt-16 mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>Standards FAQ</SectionHeading>
            <div className="mt-12 space-y-4">
              {faqs.map((faq, i) => (<div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p></div></div>))}
            </div>
          </section>
          <section className="text-center bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6">Need Help Meeting These Standards?</h2>
            <p className="text-xl mb-8 text-teal-100">UNEOM healthcare uniforms meet all MOH and SASO standards. Free compliance consultation.</p>
            <Link href="/quote?category=healthcare" className="inline-flex items-center px-8 py-4 bg-white text-teal-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">Get Free Consultation →</Link>
          </section>
        </Container>
      </main>
    </>
  );
}
