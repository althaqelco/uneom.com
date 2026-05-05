import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'Electrical Safety PPE Guide Saudi Arabia | Protection Equipment - UNEOM',
  titleAr: 'دليل معدات السلامة الكهربائية في السعودية | معدات الحماية - يونيوم',
  description: 'Complete guide to electrical safety PPE in Saudi Arabia. Insulated gloves, face shields, FR clothing, voltage-rated tools, arc flash suits. NFPA 70E & SASO compliant. Free expert resource.',
  descriptionAr: 'دليل شامل لمعدات السلامة الكهربائية في السعودية. قفازات معزولة، دروع وجه، ملابس مقاومة اللهب.',
  keywords: ['electrical safety PPE saudi', 'insulated gloves ksa', 'arc flash suit', 'FR clothing guide', 'electrical PPE selection', 'voltage rated tools'],
  keywordsAr: ['معدات سلامة كهربائية', 'قفازات معزولة', 'بدلة قوس كهربائي'],
  locale: 'en', pageType: 'article', path: '/resources/electrical-safety-ppe-guide',
  image: '/images/industries/manufacturing/manufacturing_uniforms_background.jpg', imageAlt: 'Electrical Safety PPE Guide',
  aiSummary: 'Guide to electrical safety PPE: insulated gloves (Class 00-4), face shields, FR clothing, arc flash suits, voltage-rated tools, grounding equipment. Covers NFPA 70E compliance, ASTM standards, and Saudi-specific requirements.',
});

export const dynamic = 'force-static';

const sections = [
  { title: 'Insulated Gloves Classification', content: 'ASTM D120 insulated gloves by class: Class 00 (500V AC, beige), Class 0 (1,000V AC, red), Class 1 (7,500V AC, white), Class 2 (17,000V AC, yellow), Class 3 (26,500V AC, green), Class 4 (36,000V AC, orange). All gloves require leather protectors. Testing: before first use, every 6 months thereafter (ASTM D120). UNEOM supplies all classes with testing documentation.' },
  { title: 'Arc Flash Face & Head Protection', content: 'Face and head protection by category: Category 1-2: safety glasses + FR hard hat liner. Category 3: arc-rated face shield (8+ cal/cm²) + FR balaclava. Category 4: arc-rated hood with viewing window (40+ cal/cm²). All face shields must meet ANSI Z87.1. Hard hats must be ANSI Z89.1 Class E (electrical) rated to 20,000V.' },
  { title: 'FR Clothing Selection', content: 'FR clothing for electrical workers: Daily wear FR shirts and pants (ATPV 8+ cal/cm²), FR coveralls for maintenance tasks, arc flash suits for high-energy work, FR rainwear for outdoor electrical work, FR hi-vis for utility line workers. Fabrics: inherent FR (Nomex, Kevlar) or treated FR (Westex, Indura). UNEOM recommends inherent FR for Saudi climate (no wash-out risk).' },
  { title: 'Voltage-Rated Tools & Equipment', content: 'IEC 60900 insulated tools required for live electrical work: insulated screwdrivers, insulated pliers/cutters, insulated wrenches, voltage detectors, insulated socket sets, and insulated cable cutters. All tools must be rated to 1,000V AC and tested annually. Color coding: VDE orange for insulated tools.' },
  { title: 'Testing & Maintenance Schedule', content: 'PPE testing requirements: Insulated Gloves — every 6 months (ASTM D120), Insulated Blankets — every 12 months, Hot Sticks — every 12 months, Insulated Tools — annual visual + 12-month electrical test, Arc Flash Suits — visual before each use + annual certification, Hard Hats — replace every 5 years or after impact. Maintain test records for SASO compliance.' },
];

const faqs = [
  { question: 'What PPE is required for electrical work in Saudi Arabia?', answer: 'Minimum electrical PPE: Class E hard hat, safety glasses with side shields, FR clothing appropriate to hazard category, insulated gloves rated for voltage level, leather glove protectors, voltage-rated footwear, and insulated tools for live work. Additional PPE (face shield, arc flash suit) required based on incident energy analysis per NFPA 70E.' },
  { question: 'How often should insulated gloves be tested?', answer: 'Every 6 months per ASTM D120 standard. Gloves must also be inspected before each use (air test for leaks, visual check for damage). If gloves fail testing, they must be immediately removed from service. UNEOM offers glove testing coordination and replacement programs for Saudi electrical contractors.' },
  { question: 'What is the difference between inherent and treated FR fabrics?', answer: 'Inherent FR (Nomex, PBI, Kevlar): FR property is part of the fiber structure, cannot wash out, maintains protection for garment lifetime. Treated FR (cotton treated with chemicals): Lower initial cost, FR treatment can degrade over 50-100 washes, must follow specific laundering instructions. For Saudi Arabia, UNEOM recommends inherent FR due to frequent washing needed in hot climate.' },
];

export default function ElectricalSafetyPPEGuidePage() {
  return (
    <>
      <SEO2026 title="Electrical Safety PPE Guide" titleAr="دليل معدات السلامة الكهربائية" description="Complete electrical safety PPE guide for Saudi Arabia." locale="en" pageType="article" mainEntity="Electrical Safety PPE Guide" primaryImage="/images/industries/manufacturing/manufacturing_uniforms_background.jpg" primaryImageAlt="Electrical Safety PPE" faqs={faqs} breadcrumbs={[{ name: 'Resources', url: '/resources' }, { name: 'Electrical Safety PPE', url: '/resources/electrical-safety-ppe-guide' }]} certifications={['NFPA 70E', 'ASTM D120', 'IEC 60900']} clientCount={100} yearsInBusiness={20} industry="Electrical Safety" />
      <section className="bg-gradient-to-br from-amber-900 via-yellow-800 to-orange-700 text-white">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Resources', href: '/resources' }, { label: 'Electrical Safety PPE', href: '/resources/electrical-safety-ppe-guide' }]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-yellow-400">🔌</span><span className="text-sm font-medium">Expert Safety Resource</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Electrical Safety <span className="bg-gradient-to-r from-yellow-300 to-amber-300 text-transparent bg-clip-text">PPE Guide</span></h1>
            <p className="text-xl text-amber-100 leading-relaxed">Insulated gloves, arc flash suits, FR clothing, and voltage-rated tools for Saudi electrical workers.</p>
          </div>
        </Container>
      </section>
      <main className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            {sections.map((s, i) => (<article key={i} className="mb-10 bg-white rounded-xl shadow-sm border border-gray-100 p-8"><h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3"><span className="bg-yellow-100 text-yellow-700 text-sm font-mono px-3 py-1 rounded-full">{String(i+1).padStart(2,'0')}</span>{s.title}</h2><p className="text-gray-700 leading-relaxed text-lg">{s.content}</p></article>))}
          </div>
          <section className="max-w-4xl mx-auto mt-16 mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>Electrical PPE FAQ</SectionHeading>
            <div className="mt-12 space-y-4">
              {faqs.map((faq, i) => (<div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p></div></div>))}
            </div>
          </section>
          <section className="text-center bg-gradient-to-r from-yellow-600 to-amber-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6">Order Electrical Safety PPE</h2>
            <p className="text-xl mb-8 text-yellow-100">NFPA 70E compliant PPE for Saudi electrical contractors and utilities.</p>
            <Link href="/quote?category=electrical-ppe" className="inline-flex items-center px-8 py-4 bg-white text-yellow-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">Get PPE Quote →</Link>
          </section>
        </Container>
      </main>
    </>
  );
}
