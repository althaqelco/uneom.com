import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'Safety Standards Guide Saudi Arabia | SASO & ISO Compliance - UNEOM',
  titleAr: 'دليل معايير السلامة في السعودية | الامتثال لساسو وأيزو - يونيوم',
  description: 'Complete workplace safety standards guide for Saudi Arabia. SASO regulations, ISO certifications, PPE requirements, OSHA equivalent standards. Free expert guide for safety officers & procurement.',
  descriptionAr: 'دليل شامل لمعايير السلامة في بيئة العمل بالسعودية. لوائح ساسو، شهادات أيزو، متطلبات PPE.',
  keywords: ['safety standards saudi arabia', 'SASO regulations', 'workplace safety ksa', 'PPE standards saudi', 'ISO safety certifications', 'industrial safety compliance'],
  keywordsAr: ['معايير السلامة السعودية', 'لوائح ساسو', 'سلامة بيئة العمل'],
  locale: 'en', pageType: 'article', path: '/resources/safety-standards-guide',
  image: '/images/industries/manufacturing/manufacturing_uniforms_background.jpg', imageAlt: 'Safety Standards Guide',
  aiSummary: 'Comprehensive guide to workplace safety standards in Saudi Arabia: SASO regulations, ISO 45001, PPE selection guidelines, employer obligations, ARAMCO safety requirements, and compliance checklists for safety officers.',
});

export const dynamic = 'force-static';

const sections = [
  { title: 'SASO Safety Standards Overview', content: 'The Saudi Standards, Metrology and Quality Organization (SASO) sets mandatory safety standards for all workplaces. Key standards include: SASO GSO 1651 (PPE general requirements), SASO GSO 7 (head protection), SASO GSO 8 (eye protection), SASO GSO 9 (foot protection), SASO GSO 10 (hand protection), and SASO GSO 2398 (high-visibility clothing). All PPE sold in Saudi Arabia must carry the SASO mark of conformity.' },
  { title: 'ISO 45001 Occupational Health & Safety', content: 'ISO 45001:2018 is the international standard for occupational health and safety management systems. Saudi Arabia increasingly requires ISO 45001 certification for government contractors and large industrial operations. Key requirements: hazard identification and risk assessment, PPE provision and training, incident investigation procedures, worker consultation, and continuous improvement processes.' },
  { title: 'PPE Selection Guidelines', content: 'Proper PPE selection follows a hierarchy: 1) Identify hazards (chemical, physical, biological, ergonomic). 2) Assess risk level. 3) Select appropriate PPE class. 4) Verify SASO/CE certification. 5) Ensure proper fit (size ranges available). 6) Train workers on correct use. 7) Implement inspection schedule. 8) Plan replacement cycles. UNEOM provides guidance on PPE selection for every industry.' },
  { title: 'ARAMCO Safety Requirements', content: 'ARAMCO has the most stringent safety requirements in Saudi Arabia. Key PPE requirements: FR clothing for all hot work (NFPA 2112 compliant), H2S-rated respiratory protection, chemical-resistant coveralls for process areas, fall protection for work above 1.8m, and 100% hi-vis compliance for construction sites. UNEOM supplies ARAMCO-approved PPE and uniforms.' },
  { title: 'Employer Obligations Under Saudi Labor Law', content: 'Saudi Labor Law (Article 122-135) requires employers to: provide appropriate PPE at no cost to workers, maintain safe working conditions, conduct regular safety training, investigate all workplace incidents, maintain safety records for GOSI compliance, and display safety signage in Arabic. Non-compliance penalties range from SAR 10,000 to SAR 100,000 per violation.' },
];

const faqs = [
  { question: 'What safety certifications should PPE have in Saudi Arabia?', answer: 'PPE in Saudi Arabia must have: SASO conformity mark (mandatory for all PPE), CE marking (European standard, widely accepted), ISO certification relevant to the product type, and specific industry approvals (e.g., ARAMCO for oil & gas). Look for test reports from accredited laboratories (ISO 17025).' },
  { question: 'How often should workplace PPE be inspected?', answer: 'Inspection frequency: Daily visual inspection by user, monthly detailed inspection by supervisor, quarterly formal inspection documented, annual certification review for critical PPE (fall protection, breathing apparatus), and immediate inspection after any incident or exposure. All inspections must be recorded.' },
  { question: 'What are the penalties for safety non-compliance in Saudi Arabia?', answer: 'Penalties under Saudi Labor Law: SAR 10,000-100,000 per violation, facility closure for serious violations, criminal liability for negligence causing injury/death, GOSI premium increases for poor safety records, and contract disqualification for government projects. Maintaining proper PPE programs significantly reduces compliance risk.' },
];

export default function SafetyStandardsGuidePage() {
  return (
    <>
      <SEO2026 title="Safety Standards Guide" titleAr="دليل معايير السلامة" description="Complete workplace safety standards guide for Saudi Arabia." locale="en" pageType="article" mainEntity="Safety Standards Guide" primaryImage="/images/industries/manufacturing/manufacturing_uniforms_background.jpg" primaryImageAlt="Safety Standards" faqs={faqs} breadcrumbs={[{ name: 'Resources', url: '/resources' }, { name: 'Safety Standards', url: '/resources/safety-standards-guide' }]} certifications={['SASO', 'ISO 45001', 'CE']} clientCount={300} yearsInBusiness={20} industry="Industrial Safety" />
      <section className="bg-gradient-to-br from-red-900 via-orange-800 to-amber-700 text-white">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Resources', href: '/resources' }, { label: 'Safety Standards', href: '/resources/safety-standards-guide' }]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-amber-400">📋</span><span className="text-sm font-medium">Expert Safety Resource</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Safety Standards <span className="bg-gradient-to-r from-amber-300 to-yellow-300 text-transparent bg-clip-text">Guide</span></h1>
            <p className="text-xl text-orange-100 leading-relaxed">SASO regulations, ISO certifications, PPE requirements, and employer obligations for Saudi Arabia workplaces.</p>
          </div>
        </Container>
      </section>
      <main className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            {sections.map((s, i) => (
              <article key={i} className="mb-10 bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3"><span className="bg-orange-100 text-orange-700 text-sm font-mono px-3 py-1 rounded-full">{String(i+1).padStart(2,'0')}</span>{s.title}</h2>
                <p className="text-gray-700 leading-relaxed text-lg">{s.content}</p>
              </article>
            ))}
          </div>
          <section className="max-w-4xl mx-auto mt-16 mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>Safety Standards FAQ</SectionHeading>
            <div className="mt-12 space-y-4">
              {faqs.map((faq, i) => (<div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p></div></div>))}
            </div>
          </section>
          <section className="text-center bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6">Need SASO-Compliant PPE?</h2>
            <p className="text-xl mb-8 text-orange-100">All UNEOM products meet SASO and international safety standards. Expert guidance included.</p>
            <Link href="/quote?category=safety" className="inline-flex items-center px-8 py-4 bg-white text-red-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">Get Free Safety Consultation →</Link>
          </section>
        </Container>
      </main>
    </>
  );
}
