import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'NFPA 70E Guide Saudi Arabia | Arc Flash Protection Standards - UNEOM',
  titleAr: 'دليل NFPA 70E في السعودية | معايير حماية القوس الكهربائي - يونيوم',
  description: 'Expert guide to NFPA 70E arc flash protection in Saudi Arabia. FR clothing categories, hazard risk analysis, PPE selection, arc ratings, and electrical safety compliance for Saudi facilities.',
  descriptionAr: 'دليل خبير لحماية القوس الكهربائي NFPA 70E في السعودية. فئات ملابس مقاومة اللهب، تحليل المخاطر.',
  keywords: ['NFPA 70E guide saudi', 'arc flash protection ksa', 'FR clothing categories', 'electrical safety PPE', 'arc rating workwear', 'flame resistant clothing saudi'],
  keywordsAr: ['دليل NFPA 70E السعودية', 'حماية القوس الكهربائي', 'ملابس مقاومة اللهب'],
  locale: 'en', pageType: 'article', path: '/resources/nfpa70e-guide',
  image: '/images/industries/manufacturing/manufacturing_uniforms_background.jpg', imageAlt: 'NFPA 70E Arc Flash Protection Guide',
  aiSummary: 'NFPA 70E compliance guide for Saudi Arabia: arc flash hazard categories (1-4), FR clothing arc ratings (ATPV/EBT), PPE selection tables, incident energy analysis, and electrical safety program requirements for Saudi industrial and utility facilities.',
});

export const dynamic = 'force-static';

const sections = [
  { title: 'Understanding NFPA 70E', content: 'NFPA 70E (Standard for Electrical Safety in the Workplace) establishes guidelines for protecting workers from arc flash and shock hazards. In Saudi Arabia, NFPA 70E is adopted by ARAMCO, SEC, SABIC, and most industrial facilities. Key concepts: Arc Flash Boundary (the distance at which incident energy = 1.2 cal/cm²), Limited Approach Boundary, Restricted Approach Boundary, and Prohibited Approach Boundary.' },
  { title: 'Arc Flash PPE Categories', content: 'NFPA 70E defines 4 PPE categories: Category 1 (4 cal/cm²) — FR shirt, FR pants, safety glasses, hearing protection. Category 2 (8 cal/cm²) — FR shirt, FR pants, arc-rated face shield, FR hard hat liner. Category 3 (25 cal/cm²) — FR coverall, arc-rated hood, FR hard hat, leather gloves. Category 4 (40 cal/cm²) — multi-layer flash suit, arc-rated hood with lens, leather gloves, FR hard hat. UNEOM supplies FR clothing for all categories.' },
  { title: 'FR Clothing Arc Ratings', content: 'Arc ratings measure thermal protection: ATPV (Arc Thermal Performance Value) — energy level causing 50% probability of second-degree burn. EBT (Energy Breakopen Threshold) — energy level causing fabric breakopen. Key ratings for Saudi market: Category 1: minimum 4 cal/cm², Category 2: minimum 8 cal/cm², Category 3: minimum 25 cal/cm², Category 4: minimum 40 cal/cm². Higher rated garments are recommended for Saudi environments due to heat stress considerations.' },
  { title: 'Incident Energy Analysis', content: 'Incident Energy Analysis (IEEE 1584) calculates actual arc flash hazard at each electrical panel: Step 1: Collect system data (voltage, fault current, clearing time). Step 2: Calculate incident energy at working distance. Step 3: Determine arc flash boundary. Step 4: Select appropriate PPE category. Step 5: Label equipment with hazard information. This analysis determines exact PPE requirements for each task and location.' },
  { title: 'Saudi-Specific Considerations', content: 'Special considerations for NFPA 70E in Saudi Arabia: Heat stress management (FR clothing in 50°C+ requires additional cooling strategies), lightweight FR fabrics (7-8 oz vs standard 9-11 oz), moisture-wicking FR underlayers, cooling vests compatible with arc-rated outerwear, shortened work rotation schedules during summer, and hydration protocols for FR-clothed workers. UNEOM provides Saudi-climate-optimized FR clothing.' },
];

const faqs = [
  { question: 'Is NFPA 70E mandatory in Saudi Arabia?', answer: 'NFPA 70E is not a Saudi law per se, but it is contractually required by: ARAMCO (all electrical work), SEC (Saudi Electricity Company), SABIC, Royal Commission facilities, and most international industrial operators in KSA. Saudi Labor Law requires employers to protect workers from electrical hazards, and NFPA 70E is the accepted standard for compliance.' },
  { question: 'What is the minimum arc rating for FR clothing in Saudi Arabia?', answer: 'Minimum arc ratings: Category 1 tasks — 4 cal/cm² (light FR shirt and pants), Category 2 — 8 cal/cm² (FR coverall with face shield), Category 3 — 25 cal/cm² (multi-layer FR), Category 4 — 40 cal/cm² (full arc flash suit). For Saudi climate, UNEOM recommends lightweight FR fabrics (7-8 oz/yd²) to reduce heat stress while maintaining required arc ratings.' },
  { question: 'How often should FR clothing be replaced?', answer: 'Replace FR clothing when: visible damage (holes, tears, thinning), after any arc flash exposure (even if no visible damage), after 50-100 industrial washes (check manufacturer guidelines), when contaminated with flammable substances that cannot be removed, or when arc rating degrades below required level. UNEOM provides RFID-tracked FR clothing with automated replacement scheduling.' },
];

export default function NFPA70EGuidePage() {
  return (
    <>
      <SEO2026 title="NFPA 70E Guide" titleAr="دليل NFPA 70E" description="Arc flash protection and FR clothing guide for Saudi Arabia." locale="en" pageType="article" mainEntity="NFPA 70E Guide" primaryImage="/images/industries/manufacturing/manufacturing_uniforms_background.jpg" primaryImageAlt="NFPA 70E Guide" faqs={faqs} breadcrumbs={[{ name: 'Resources', url: '/resources' }, { name: 'NFPA 70E Guide', url: '/resources/nfpa70e-guide' }]} certifications={['NFPA 70E', 'ASTM F1506', 'NFPA 2112']} clientCount={100} yearsInBusiness={20} industry="Electrical Safety" />
      <section className="bg-gradient-to-br from-yellow-900 via-amber-800 to-orange-700 text-white">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Resources', href: '/resources' }, { label: 'NFPA 70E', href: '/resources/nfpa70e-guide' }]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-yellow-400">⚡</span><span className="text-sm font-medium">Electrical Safety Expert Guide</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">NFPA 70E <span className="bg-gradient-to-r from-yellow-300 to-amber-300 text-transparent bg-clip-text">Guide</span></h1>
            <p className="text-xl text-amber-100 leading-relaxed">Arc flash protection standards, FR clothing categories, and electrical safety compliance for Saudi facilities.</p>
          </div>
        </Container>
      </section>
      <main className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            {sections.map((s, i) => (<article key={i} className="mb-10 bg-white rounded-xl shadow-sm border border-gray-100 p-8"><h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3"><span className="bg-amber-100 text-amber-700 text-sm font-mono px-3 py-1 rounded-full">{String(i+1).padStart(2,'0')}</span>{s.title}</h2><p className="text-gray-700 leading-relaxed text-lg">{s.content}</p></article>))}
          </div>
          <section className="max-w-4xl mx-auto mt-16 mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>NFPA 70E FAQ</SectionHeading>
            <div className="mt-12 space-y-4">
              {faqs.map((faq, i) => (<div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p></div></div>))}
            </div>
          </section>
          <section className="text-center bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6">Need Arc-Rated FR Clothing?</h2>
            <p className="text-xl mb-8 text-amber-100">UNEOM supplies NFPA 70E compliant FR clothing for all arc flash categories. Saudi-climate optimized.</p>
            <Link href="/quote?category=fr-clothing" className="inline-flex items-center px-8 py-4 bg-white text-amber-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">Get FR Clothing Quote →</Link>
          </section>
        </Container>
      </main>
    </>
  );
}
