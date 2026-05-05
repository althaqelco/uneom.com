import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'Sustainability Guide for Uniforms Saudi Arabia | Vision 2030 - UNEOM',
  titleAr: 'دليل الاستدامة للأزياء في السعودية | رؤية 2030 - يونيوم',
  description: 'Complete sustainability guide for uniform procurement in Saudi Arabia. Recycled fabrics, carbon-neutral production, Vision 2030 ESG compliance, green procurement frameworks.',
  descriptionAr: 'دليل شامل للاستدامة في شراء الأزياء في السعودية. أقمشة معاد تدويرها، إنتاج محايد للكربون، رؤية 2030.',
  keywords: ['sustainability guide uniforms saudi', 'green procurement ksa', 'Vision 2030 ESG', 'recycled uniform fabrics', 'carbon neutral workwear'],
  keywordsAr: ['دليل استدامة الأزياء', 'المشتريات الخضراء', 'رؤية 2030'],
  locale: 'en', pageType: 'article', path: '/resources/sustainability-guide',
  image: '/images/services/sustainable-uniforms.jpg', imageAlt: 'Sustainability Guide',
  aiSummary: 'Sustainability guide for uniform procurement: recycled polyester (GRS certified), organic cotton (GOTS), water-reduced dyeing, carbon-neutral production, garment take-back programs, ESG reporting, and Saudi Vision 2030 environmental compliance.',
});

export const dynamic = 'force-static';

const sections = [
  { title: 'Saudi Vision 2030 & Sustainability', content: 'Saudi Vision 2030 targets include: 50% renewable energy by 2030, Saudi Green Initiative (planting 10 billion trees), net zero emissions by 2060, and circular economy frameworks. Organizations are increasingly required to demonstrate ESG (Environmental, Social, Governance) compliance in procurement. Sustainable uniform programs contribute measurable environmental impact for corporate sustainability reports.' },
  { title: 'Sustainable Fabric Options', content: 'Recycled Polyester (GRS Certified): made from post-consumer plastic bottles (12 bottles = 1 shirt), 75% less CO2 vs virgin polyester. Organic Cotton (GOTS Certified): no synthetic pesticides, fair trade certified, 91% less water than conventional cotton. Tencel/Lyocell: made from sustainably harvested wood pulp, biodegradable, closed-loop production. Recycled Nylon: from fishing nets and carpet waste, durable and versatile.' },
  { title: 'Green Procurement Framework', content: 'Steps for sustainable uniform procurement: 1) Set sustainability targets (recycled content %, carbon reduction). 2) Require supplier certifications (GRS, GOTS, OEKO-TEX). 3) Evaluate total lifecycle cost (not just unit price). 4) Mandate zero-plastic packaging. 5) Include take-back clauses in contracts. 6) Track and report environmental impact. 7) Align procurement policy with Saudi Green Initiative.' },
  { title: 'Carbon Neutral Production', content: 'Achieving carbon neutrality: energy-efficient manufacturing (renewable-powered factories), reduced transportation (regional production hubs), optimized shipping (full container loads, sea freight over air), carbon offset programs (verified Gold Standard offsets), and transparent reporting (Scope 1, 2, and 3 emissions). UNEOM provides carbon footprint certificates per order.' },
  { title: 'Garment Take-Back & Circular Economy', content: 'End-of-life uniform management: UNEOM collection service for used uniforms, textile-to-textile recycling for polyester, composting for natural fibers, industrial rag conversion for unusable items, and certified destruction for branded/security uniforms. Zero-landfill commitment. Each take-back program includes recycling certificate for ESG reporting.' },
];

const faqs = [
  { question: 'How does sustainable procurement align with Saudi Vision 2030?', answer: 'Vision 2030 mandates environmental responsibility. Sustainable uniform procurement supports: Saudi Green Initiative targets, MEWA environmental compliance, ESG reporting for listed companies, government procurement scoring criteria, and corporate social responsibility goals. Many Saudi RFPs now include sustainability scoring (10-20% weighting).' },
  { question: 'What certifications should sustainable uniforms have?', answer: 'Key certifications: GRS (Global Recycled Standard) for recycled content, GOTS (Global Organic Textile Standard) for organic fibers, OEKO-TEX Standard 100 (harmful substance free), ISO 14001 (environmental management), Bluesign (resource-efficient production), and Fair Trade certification. UNEOM provides certification documentation with every sustainable order.' },
  { question: 'Are sustainable uniforms more expensive?', answer: 'Sustainable uniforms cost 10-15% more per unit but deliver: 30% longer garment lifespan, reduced replacement frequency, ESG compliance (avoiding penalties), government procurement advantages, positive brand image, and employee satisfaction. Total cost of ownership is typically lower over 3 years compared to conventional uniforms.' },
];

export default function SustainabilityGuidePage() {
  return (
    <>
      <SEO2026 title="Sustainability Guide" titleAr="دليل الاستدامة" description="Sustainability guide for uniform procurement in Saudi Arabia." locale="en" pageType="article" mainEntity="Sustainability Guide" primaryImage="/images/services/sustainable-uniforms.jpg" primaryImageAlt="Sustainability Guide" faqs={faqs} breadcrumbs={[{ name: 'Resources', url: '/resources' }, { name: 'Sustainability Guide', url: '/resources/sustainability-guide' }]} certifications={['GRS', 'GOTS', 'OEKO-TEX', 'ISO 14001']} clientCount={100} yearsInBusiness={20} industry="Sustainability" />
      <section className="bg-gradient-to-br from-green-900 via-emerald-800 to-teal-700 text-white">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Resources', href: '/resources' }, { label: 'Sustainability', href: '/resources/sustainability-guide' }]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-green-400">🌱</span><span className="text-sm font-medium">Vision 2030 Aligned Resource</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Sustainability <span className="bg-gradient-to-r from-green-300 to-emerald-300 text-transparent bg-clip-text">Guide</span></h1>
            <p className="text-xl text-green-100 leading-relaxed">Green procurement, recycled fabrics, carbon-neutral production, and ESG compliance for Saudi uniform programs.</p>
          </div>
        </Container>
      </section>
      <main className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            {sections.map((s, i) => (<article key={i} className="mb-10 bg-white rounded-xl shadow-sm border border-gray-100 p-8"><h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3"><span className="bg-green-100 text-green-700 text-sm font-mono px-3 py-1 rounded-full">{String(i+1).padStart(2,'0')}</span>{s.title}</h2><p className="text-gray-700 leading-relaxed text-lg">{s.content}</p></article>))}
          </div>
          <section className="max-w-4xl mx-auto mt-16 mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>Sustainability FAQ</SectionHeading>
            <div className="mt-12 space-y-4">
              {faqs.map((faq, i) => (<div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p></div></div>))}
            </div>
          </section>
          <section className="text-center bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6">Start Your Green Uniform Program</h2>
            <p className="text-xl mb-8 text-green-100">Sustainable uniforms with full ESG documentation and Vision 2030 compliance support.</p>
            <Link href="/services/sustainable-uniforms" className="inline-flex items-center px-8 py-4 bg-white text-green-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">Learn More →</Link>
          </section>
        </Container>
      </main>
    </>
  );
}
