import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'Cleanroom Best Practices Saudi Arabia | ISO 14644 Garment Guide - UNEOM',
  titleAr: 'أفضل ممارسات الغرف النظيفة في السعودية | دليل ملابس أيزو 14644 - يونيوم',
  description: 'Expert cleanroom garment guide for Saudi Arabia. ISO 14644 standards, gowning procedures, contamination control, particle shedding specs. For pharma, electronics & semiconductor facilities.',
  descriptionAr: 'دليل خبير لملابس الغرف النظيفة في السعودية. معايير أيزو 14644، إجراءات الارتداء، مكافحة التلوث.',
  keywords: ['cleanroom best practices saudi', 'ISO 14644 garments', 'cleanroom gowning procedure', 'contamination control ksa', 'cleanroom coveralls', 'pharmaceutical cleanroom uniforms'],
  keywordsAr: ['ممارسات الغرف النظيفة', 'ملابس أيزو 14644', 'إجراءات الارتداء'],
  locale: 'en', pageType: 'article', path: '/resources/cleanroom-best-practices',
  image: '/images/industries/manufacturing/manufacturing_uniforms_background.jpg', imageAlt: 'Cleanroom Best Practices',
  aiSummary: 'Cleanroom garment guide: ISO 14644 classification system, gowning procedures, particle shedding specifications, laundry and sterilization protocols, garment lifecycle management for Saudi pharmaceutical, electronics, and semiconductor facilities.',
});

export const dynamic = 'force-static';

const sections = [
  { title: 'ISO 14644 Cleanroom Classifications', content: 'ISO 14644-1 classifies cleanrooms by particle count: ISO 1 (10 particles ≥0.1μm per m³), ISO 5 (3,520 particles ≥0.5μm — semiconductor fabrication), ISO 7 (352,000 particles ≥0.5μm — pharmaceutical production), ISO 8 (3,520,000 particles — general manufacturing). Each class requires specific garment specifications: ISO 5 requires full coveralls with integrated hood, boots, and double gloving. ISO 7-8 may use frocks, head covers, and shoe covers.' },
  { title: 'Gowning Procedures', content: 'Standard cleanroom gowning sequence: 1) Remove street clothing in anteroom. 2) Don cleanroom undergarments. 3) Apply hand sanitizer. 4) Put on shoe covers. 5) Don hood/head cover. 6) Put on coverall (top-down). 7) Apply first pair of gloves. 8) Put on boot covers. 9) Apply second pair of gloves (ISO 5). 10) Enter cleanroom through airlock. Reverse sequence for de-gowning. UNEOM provides gowning training materials.' },
  { title: 'Garment Particle Shedding Specifications', content: 'Cleanroom garments are tested per IEST-RP-CC003: Helmke Drum Test measures particles shed per minute. ISO 5 garments: <1,000 particles ≥0.5μm/min. ISO 7 garments: <10,000 particles. Fabric specifications: polyester filament (not spun), sealed seams (no particle-shedding thread), no pockets in ISO 5 (particle traps), and antistatic treatment (surface resistivity 10⁵-10¹¹ ohms).' },
  { title: 'Laundry & Sterilization Protocols', content: 'Cleanroom garment processing: laundering in ISO 5 laundry facility, DI water rinse (18 MΩ resistivity), particle counting verification post-wash, gamma or EtO sterilization for pharmaceutical use, individual packaging in cleanroom-grade bags, tracking via barcode/RFID for wash cycle counting, and garment retirement after 50-100 wash cycles (based on particle shedding tests).' },
  { title: 'Saudi Market Considerations', content: 'Cleanroom industries in Saudi Arabia: NEOM Oxagon advanced manufacturing, pharmaceutical facilities (SPIMACO, Jamjoom Pharma, Tabuk Pharma), electronics assembly (Samsung, Lucid Motors), food processing (ISO 7-8 equivalent), and medical device manufacturing. UNEOM supplies cleanroom garments for all Saudi cleanroom classes with local inventory and rapid delivery.' },
];

const faqs = [
  { question: 'What cleanroom garments are needed for pharmaceutical production?', answer: 'Pharmaceutical cleanrooms (typically ISO 7): sterile coveralls with hood, boot covers, double gloves, face mask, and safety goggles. For aseptic processing (ISO 5): full body coverall with integrated boots, sterile hood, sterile gloves (double), and sterile goggles. All garments must be gamma sterilized and individually packaged. UNEOM provides validated sterile cleanroom garments.' },
  { question: 'How many times can cleanroom garments be laundered?', answer: 'Typical lifecycle: ISO 5 garments — 50-75 wash cycles, ISO 7 garments — 75-100 cycles, ISO 8 garments — 100-150 cycles. Each garment should be particle-count tested after every 25 washes. UNEOM RFID tracking monitors wash cycles automatically and triggers replacement orders when garments approach end-of-life.' },
  { question: 'Do you supply cleanroom garments for NEOM projects?', answer: 'Yes. UNEOM supplies cleanroom garments for NEOM Oxagon advanced manufacturing facilities. We provide ISO 5-8 classified garments, managed laundry programs, gowning training, and on-site inventory management. Our regional warehouse in KSA ensures rapid delivery for NEOM and other mega-project cleanroom facilities.' },
];

export default function CleanroomBestPracticesPage() {
  return (
    <>
      <SEO2026 title="Cleanroom Best Practices" titleAr="أفضل ممارسات الغرف النظيفة" description="ISO 14644 cleanroom garment guide for Saudi Arabia." locale="en" pageType="article" mainEntity="Cleanroom Best Practices" primaryImage="/images/industries/manufacturing/manufacturing_uniforms_background.jpg" primaryImageAlt="Cleanroom Best Practices" faqs={faqs} breadcrumbs={[{ name: 'Resources', url: '/resources' }, { name: 'Cleanroom Best Practices', url: '/resources/cleanroom-best-practices' }]} certifications={['ISO 14644', 'IEST-RP-CC003', 'ISO 9001:2015']} clientCount={50} yearsInBusiness={20} industry="Cleanroom" />
      <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-violet-800 text-white">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Resources', href: '/resources' }, { label: 'Cleanroom', href: '/resources/cleanroom-best-practices' }]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-violet-400">🧪</span><span className="text-sm font-medium">Expert Cleanroom Resource</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Cleanroom <span className="bg-gradient-to-r from-violet-300 to-blue-300 text-transparent bg-clip-text">Best Practices</span></h1>
            <p className="text-xl text-indigo-100 leading-relaxed">ISO 14644 cleanroom garment standards, gowning procedures, and contamination control for Saudi facilities.</p>
          </div>
        </Container>
      </section>
      <main className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            {sections.map((s, i) => (<article key={i} className="mb-10 bg-white rounded-xl shadow-sm border border-gray-100 p-8"><h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3"><span className="bg-violet-100 text-violet-700 text-sm font-mono px-3 py-1 rounded-full">{String(i+1).padStart(2,'0')}</span>{s.title}</h2><p className="text-gray-700 leading-relaxed text-lg">{s.content}</p></article>))}
          </div>
          <section className="max-w-4xl mx-auto mt-16 mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>Cleanroom FAQ</SectionHeading>
            <div className="mt-12 space-y-4">
              {faqs.map((faq, i) => (<div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p></div></div>))}
            </div>
          </section>
          <section className="text-center bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6">Need Cleanroom Garments?</h2>
            <p className="text-xl mb-8 text-indigo-100">ISO 14644 certified cleanroom garments with managed laundry programs for Saudi facilities.</p>
            <Link href="/quote?category=cleanroom" className="inline-flex items-center px-8 py-4 bg-white text-indigo-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">Get Cleanroom Quote →</Link>
          </section>
        </Container>
      </main>
    </>
  );
}
