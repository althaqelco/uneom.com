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
  title: 'Lightweight Tactical Program Saudi Arabia | Light Duty Security Gear - UNEOM',
  titleAr: 'برنامج تكتيكي خفيف في السعودية | معدات أمن خفيفة - يونيوم',
  description: 'Lightweight tactical uniform program for Saudi Arabia. Breathable tactical shirts, stretch cargo pants, low-profile vests & soft-shell jackets. Ideal for plainclothes, event & corporate security.',
  descriptionAr: 'برنامج زي تكتيكي خفيف للسعودية. قمصان تكتيكية خفيفة، بناطيل كارجو مطاطية، سترات منخفضة.',
  keywords: ['lightweight tactical program saudi', 'light duty security gear', 'plainclothes security uniforms', 'breathable tactical wear', 'event security clothing ksa'],
  keywordsAr: ['برنامج تكتيكي خفيف', 'معدات أمن خفيفة', 'زي أمن مدني'],
  locale: 'en', pageType: 'service', path: '/services/lightweight-tactical-program',
  image: '/images/industries/security/security_uniforms_background.jpg', imageAlt: 'Lightweight Tactical Program',
  aiSummary: 'UNEOM lightweight tactical program: breathable tactical shirts, stretch cargo pants, low-profile concealment vests, soft-shell jackets. Designed for plainclothes security, event security, and corporate protection in Saudi Arabia hot climate.',
});

export const dynamic = 'force-static';

const lightTacFAQs = [
  { question: 'What is the lightweight tactical program?', answer: 'The lightweight tactical program provides covert and semi-covert security uniforms: Breathable Tactical Polo Shirts (moisture-wicking, pen pockets), Stretch Tactical Pants (4-way stretch, reinforced), Low-Profile Concealment Vests (under-jacket carry), Soft-Shell Jackets (weather resistant, professional look), Covert Radio Accessories (earpiece-compatible collars), and Professional Footwear (tactical sneakers). Designed to look professional while providing tactical functionality.' },
  { question: 'Who uses lightweight tactical uniforms?', answer: 'Ideal for: Plainclothes Security Officers, Event Security Teams (concerts, conferences, exhibitions), Corporate Protection Details, Retail Loss Prevention, Hotel Security, and Close Protection Officers requiring discreet appearance. These uniforms blend professional appearance with tactical capability.' },
  { question: 'How do lightweight tactical fabrics perform in Saudi heat?', answer: 'Our lightweight tactical line uses: 37.5 Technology (active particle moisture management), mesh ventilation in high-heat zones, UPF 50+ sun protection, antimicrobial treatment to prevent odor, quick-dry technology (dries 40% faster than cotton), and lightweight ripstop (30% lighter than standard tactical). Tested for 12+ hour shifts in 45°C+ conditions.' },
];

const products = [
  { icon: '👕', title: 'Tactical Polo Shirts', desc: 'Moisture-wicking polo with pen pockets and reinforced collar for covert radio earpiece.' },
  { icon: '👖', title: 'Stretch Tactical Pants', desc: '4-way stretch cargo pants with concealed zip pockets and reinforced seat/knees.' },
  { icon: '🧥', title: 'Soft-Shell Jackets', desc: 'Weather-resistant jacket with clean lines that conceals tactical equipment underneath.' },
  { icon: '🦺', title: 'Low-Profile Vests', desc: 'Concealment vests for under-jacket carry. Adjustable for various body types.' },
  { icon: '👟', title: 'Tactical Sneakers', desc: 'Professional appearance with tactical sole grip, toe protection, and all-day comfort.' },
  { icon: '🎧', title: 'Covert Accessories', desc: 'Earpiece-compatible collars, concealed badge holders, and discreet radio pouches.' },
];

export default function LightweightTacticalProgramPage() {
  return (
    <>
      <SEO2026 title="Lightweight Tactical Program" titleAr="برنامج تكتيكي خفيف" description="Lightweight tactical uniform program for Saudi security." locale="en" pageType="service" mainEntity="Lightweight Tactical Program" primaryImage="/images/industries/security/security_uniforms_background.jpg" primaryImageAlt="Lightweight Tactical" faqs={lightTacFAQs} breadcrumbs={[{ name: 'Services', url: '/services' }, { name: 'Lightweight Tactical', url: '/services/lightweight-tactical-program' }]} certifications={['ISO 9001:2015']} clientCount={70} yearsInBusiness={20} industry="Security" />
      <section className="bg-gradient-to-br from-gray-900 via-slate-800 to-blue-900 text-white relative overflow-hidden">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Lightweight Tactical', href: '/services/lightweight-tactical-program' }]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-blue-400">🕶️</span><span className="text-sm font-medium">Covert & Professional Security Wear</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Lightweight Tactical <span className="bg-gradient-to-r from-blue-300 to-slate-300 text-transparent bg-clip-text">Program</span></h1>
            <p className="text-xl mb-8 text-slate-300 leading-relaxed">Professional-looking tactical uniforms for plainclothes, event, and corporate security. Discreet functionality in Saudi climate-adapted fabrics.</p>
            <Button href="/quote?service=lightweight-tactical" variant="secondary" size="lg" className="bg-gradient-to-r from-blue-500 to-slate-500 text-white font-bold border-0">Get Free Quote →</Button>
          </div>
        </Container>
      </section>
      <main className="py-16">
        <Container>
          <section className="mb-20">
            <SectionHeading subtitle="Discreet Tactical Solutions" centered>Lightweight Tactical Range</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {products.map((p, i) => (<div key={i} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all"><div className="text-4xl mb-4">{p.icon}</div><h3 className="text-xl font-bold text-gray-900 mb-2">{p.title}</h3><p className="text-gray-600 text-sm">{p.desc}</p></div>))}
            </div>
          </section>
          <section className="mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>Lightweight Tactical FAQ</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {lightTacFAQs.map((faq, i) => (<div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p></div></div>))}
            </div>
          </section>
          <section className="text-center bg-gradient-to-r from-slate-800 to-blue-800 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Discreet Security, Professional Appearance</h2>
            <p className="text-xl mb-8 text-slate-300 max-w-3xl mx-auto">Lightweight tactical uniforms that blend professionalism with operational capability.</p>
            <Link href="/quote?service=lightweight-tactical" className="inline-flex items-center px-8 py-4 bg-white text-slate-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">Get Free Quote →</Link>
          </section>
        </Container>
      </main>
      <section className="py-6 bg-gray-100 border-t"><div className="container mx-auto px-4 text-center"><Link href="/ar/services/lightweight-tactical-program" className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-800 text-white font-semibold py-2 px-4 rounded-lg text-sm">🇸🇦 العربية</Link></div></section>
    </>
  );
}
