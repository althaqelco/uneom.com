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
  title: 'Security Uniform Program Saudi Arabia | Guard Outfitting Service - UNEOM',
  titleAr: 'برنامج زي الأمن في السعودية | خدمة تجهيز الحراسة - يونيوم',
  description: 'Managed security uniform program for Saudi security companies. Guard uniforms, tactical gear, rank insignias, duty belts & accessories. Outfitting 100-5000+ guards. Free consultation!',
  descriptionAr: 'برنامج إدارة زي الأمن لشركات الأمن السعودية. زي حراس، معدات تكتيكية، شارات رتب. تجهيز 100-5000+ حارس. استشارة مجانية!',
  keywords: ['security uniform program saudi', 'guard outfitting service', 'security company uniforms ksa', 'guard uniform management', 'tactical gear program'],
  keywordsAr: ['برنامج زي أمن السعودية', 'تجهيز حراس', 'زي شركات أمن'],
  locale: 'en', pageType: 'service', path: '/services/security-uniform-program',
  image: '/images/industries/security/security_uniforms_background.jpg', imageAlt: 'Security Uniform Program',
  aiSummary: 'UNEOM security uniform program: complete guard outfitting including patrol uniforms, tactical gear, rank insignias, duty belts, boots, and accessories. Serving private security, government, facility management. Programs for 100-5000+ guards with inventory management and replacement scheduling.',
});

export const dynamic = 'force-static';

const securityFAQs = [
  { question: 'What does the security uniform program include?', answer: 'Complete guard outfitting: Patrol Uniforms (shirts, trousers, jackets), Tactical Gear (vests, belts, holsters), Rank Insignias & Epaulettes, Duty Accessories (radio holders, flashlight cases, handcuff pouches), Headwear (berets, caps, helmets), Footwear (patrol boots, tactical boots), and Seasonal Variations (summer/winter). Inventory management and automated replacement included.' },
  { question: 'How quickly can you outfit a new security contract?', answer: 'Standard outfitting: 10-15 business days for 50-200 guards. Express service: 5-7 days with rush surcharge. Emergency outfitting: 48-72 hours for basic uniform sets. We maintain ready-stock in common sizes. For contracts of 500+ guards, we recommend 3-4 weeks lead time for full customization.' },
  { question: 'Do you offer different grades of security uniforms?', answer: 'Yes: Grade A (Executive Security) — premium fabrics, custom tailoring, executive accessories. Grade B (Corporate Security) — professional quality, branded, standard accessories. Grade C (Facility Security) — durable, practical, cost-effective. Grade D (Event Security) — temporary, identifiable vests and shirts. Each grade has matching accessories and pricing.' },
];

const features = [
  { icon: '👮', title: 'Complete Guard Outfitting', desc: 'Head-to-toe uniform packages for every security role and rank.' },
  { icon: '⭐', title: 'Rank & Grade System', desc: '4 uniform grades from executive to event security with matching insignias.' },
  { icon: '📦', title: 'Inventory Management', desc: 'Real-time stock tracking with automated reorder for all guard sizes.' },
  { icon: '🔄', title: 'Replacement Cycles', desc: 'Scheduled replacement every 6-12 months based on wear assessment.' },
  { icon: '⚡', title: '48hr Emergency Stock', desc: 'Ready-stock for urgent new hires and contract mobilizations.' },
  { icon: '🎨', title: 'Custom Branding', desc: 'Your security company logo, colors, and branding on all uniform items.' },
];

export default function SecurityUniformProgramPage() {
  return (
    <>
      <SEO2026 title="Security Uniform Program" titleAr="برنامج زي الأمن" description="Managed security uniform program." locale="en" pageType="service" mainEntity="Security Uniform Program" primaryImage="/images/industries/security/security_uniforms_background.jpg" primaryImageAlt="Security Uniform Program" faqs={securityFAQs} breadcrumbs={[{ name: 'Services', url: '/services' }, { name: 'Security Uniform Program', url: '/services/security-uniform-program' }]} certifications={['ISO 9001:2015']} clientCount={100} yearsInBusiness={20} industry="Security" />

      <section className="bg-gradient-to-br from-gray-900 via-slate-800 to-zinc-700 text-white relative overflow-hidden">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Security Uniform Program', href: '/services/security-uniform-program' }]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-amber-400">🔒</span><span className="text-sm font-medium">Outfitting 100+ Security Companies</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Security Uniform <span className="bg-gradient-to-r from-amber-300 to-yellow-300 text-transparent bg-clip-text">Program</span></h1>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">Complete guard outfitting from head to toe. Patrol uniforms, tactical gear, rank insignias, and all accessories for security companies across Saudi Arabia.</p>
            <Button href="/quote?service=security-program" variant="secondary" size="lg" className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-bold border-0">Get Free Consultation →</Button>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-20">
            <SectionHeading subtitle="Complete Guard Outfitting" centered>Program Features</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {features.map((f, i) => (<div key={i} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all"><div className="text-4xl mb-4">{f.icon}</div><h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3><p className="text-gray-600 text-sm">{f.desc}</p></div>))}
            </div>
          </section>
          <section className="mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>Security Program FAQ</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {securityFAQs.map((faq, i) => (<div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p></div></div>))}
            </div>
          </section>
          <section className="text-center bg-gradient-to-r from-slate-800 to-gray-700 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Outfit Your Security Force</h2>
            <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">From 100 to 5,000+ guards. One partner for all uniform and equipment needs.</p>
            <Link href="/quote?service=security-program" className="inline-flex items-center px-8 py-4 bg-amber-500 text-white hover:bg-amber-600 font-bold rounded-xl transition-all shadow-lg">Book Free Consultation →</Link>
          </section>
        </Container>
      </main>
      <section className="py-6 bg-gray-100 border-t"><div className="container mx-auto px-4 text-center"><Link href="/ar/services/security-uniform-program" className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-800 text-white font-semibold py-2 px-4 rounded-lg text-sm">🇸🇦 العربية</Link></div></section>
    </>
  );
}
