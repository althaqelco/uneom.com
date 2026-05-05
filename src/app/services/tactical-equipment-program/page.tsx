import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'Tactical Equipment Program Saudi Arabia | Security Gear Management - UNEOM',
  titleAr: 'برنامج المعدات التكتيكية في السعودية | إدارة تجهيزات الأمن - يونيوم',
  description: 'Managed tactical equipment program for Saudi security operations. Body armor, communication systems, tactical vests, helmets, night vision mounts. Complete gear lifecycle management.',
  descriptionAr: 'برنامج معدات تكتيكية مدار لعمليات الأمن السعودية. دروع واقية، أنظمة اتصالات، سترات تكتيكية.',
  keywords: ['tactical equipment program saudi', 'security gear management ksa', 'tactical vest program', 'body armor management', 'security equipment lifecycle'],
  keywordsAr: ['برنامج معدات تكتيكية', 'إدارة تجهيزات أمن', 'سترات تكتيكية'],
  locale: 'en', pageType: 'service', path: '/services/tactical-equipment-program',
  image: '/images/industries/security/security_uniforms_background.jpg', imageAlt: 'Tactical Equipment Program',
  aiSummary: 'UNEOM tactical equipment program: managed lifecycle service for security gear including tactical vests, body armor, communication equipment mounts, helmets, night vision brackets, and protective equipment. Includes inspection, maintenance, and replacement scheduling.',
});

export const dynamic = 'force-static';

const tacEqFAQs = [
  { question: 'What equipment does the tactical program cover?', answer: 'Our program covers: Tactical Load-Bearing Vests (MOLLE compatible), Ballistic Protection (Level IIIA body armor), Tactical Helmets (MICH/PASGT), Communication Mounts (radio, earpiece brackets), Protective Eyewear (ballistic-rated), Tactical Knee/Elbow Pads, Equipment Pouches (magazine, utility, medical), and Night Operations Accessories. All equipment tracked via serial number with lifecycle management.' },
  { question: 'How do you manage equipment maintenance and inspection?', answer: 'Our maintenance protocol includes: Monthly visual inspections, quarterly functionality testing, annual certification verification (body armor), condition-based replacement triggers, digital maintenance logs per serial number, and compliance reporting for security auditors. Equipment nearing end-of-life triggers automatic replacement orders.' },
  { question: 'What is the typical lifecycle of tactical equipment?', answer: 'Equipment lifecycles vary: Body Armor — 5 years (manufacturer warranty), Tactical Vests — 3-5 years, Helmets — 5-7 years, Communication Mounts — 3 years, Protective Eyewear — 2 years, Knee/Elbow Pads — 1-2 years. We track each item individually and schedule replacements before equipment degrades below safety standards.' },
];

const equipment = [
  { icon: '🦺', title: 'Tactical Vests', desc: 'MOLLE-compatible load-bearing vests with modular pouch attachment system.' },
  { icon: '🛡️', title: 'Body Armor', desc: 'Level IIIA ballistic protection with 5-year certified lifespan.' },
  { icon: '⛑️', title: 'Tactical Helmets', desc: 'MICH and PASGT helmets with NVG mount brackets and accessory rails.' },
  { icon: '📻', title: 'Communication Mounts', desc: 'Radio holders, earpiece brackets, and PTT switch integration systems.' },
  { icon: '🥽', title: 'Protective Eyewear', desc: 'Ballistic-rated goggles and glasses with anti-fog and scratch resistance.' },
  { icon: '🧰', title: 'Equipment Pouches', desc: 'Magazine, utility, medical, and general-purpose MOLLE pouches.' },
];

export default function TacticalEquipmentProgramPage() {
  return (
    <>
      <SEO2026 title="Tactical Equipment Program" titleAr="برنامج المعدات التكتيكية" description="Managed tactical equipment program for Saudi security." locale="en" pageType="service" mainEntity="Tactical Equipment Program" primaryImage="/images/industries/security/security_uniforms_background.jpg" primaryImageAlt="Tactical Equipment" faqs={tacEqFAQs} breadcrumbs={[{ name: 'Services', url: '/services' }, { name: 'Tactical Equipment', url: '/services/tactical-equipment-program' }]} certifications={['NIJ Standard', 'ISO 9001:2015']} clientCount={60} yearsInBusiness={20} industry="Security" />
      <section className="bg-gradient-to-br from-neutral-900 via-zinc-800 to-stone-700 text-white relative overflow-hidden">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Tactical Equipment', href: '/services/tactical-equipment-program' }]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-red-400">⚔️</span><span className="text-sm font-medium">Complete Gear Lifecycle Management</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Tactical Equipment <span className="bg-gradient-to-r from-red-400 to-orange-400 text-transparent bg-clip-text">Program</span></h1>
            <p className="text-xl mb-8 text-stone-300 leading-relaxed">Managed tactical gear program covering procurement, inspection, maintenance, and lifecycle replacement for security operations.</p>
            <Button href="/quote?service=tactical-equipment" variant="secondary" size="lg" className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold border-0">Get Free Consultation →</Button>
          </div>
        </Container>
      </section>
      <main className="py-16">
        <Container>
          <section className="mb-20">
            <SectionHeading subtitle="Managed Tactical Gear" centered>Equipment Categories</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {equipment.map((e, i) => (<div key={i} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all"><div className="text-4xl mb-4">{e.icon}</div><h3 className="text-xl font-bold text-gray-900 mb-2">{e.title}</h3><p className="text-gray-600 text-sm">{e.desc}</p></div>))}
            </div>
          </section>
          <section className="mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>Tactical Equipment FAQ</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {tacEqFAQs.map((faq, i) => (<div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p></div></div>))}
            </div>
          </section>
          <section className="text-center bg-gradient-to-r from-neutral-800 to-stone-700 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Manage Your Tactical Gear Professionally</h2>
            <p className="text-xl mb-8 text-stone-300 max-w-3xl mx-auto">Serial-number tracked equipment with automated inspection and replacement scheduling.</p>
            <Link href="/quote?service=tactical-equipment" className="inline-flex items-center px-8 py-4 bg-red-500 text-white hover:bg-red-600 font-bold rounded-xl transition-all shadow-lg">Book Consultation →</Link>
          </section>
        </Container>
      </main>
      <section className="py-6 bg-gray-100 border-t"><div className="container mx-auto px-4 text-center"><Link href="/ar/services/tactical-equipment-program" className="inline-flex items-center gap-2 bg-neutral-700 hover:bg-neutral-800 text-white font-semibold py-2 px-4 rounded-lg text-sm">🇸🇦 العربية</Link></div></section>
    </>
  );
}
