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
  title: 'Professional Security Program Saudi Arabia | Executive Protection Uniforms - UNEOM',
  titleAr: 'برنامج الأمن الاحترافي في السعودية | أزياء الحماية التنفيذية - يونيوم',
  description: 'Premium professional security uniform program for executive protection, VIP security, corporate security & government facilities in Saudi Arabia. Bespoke tailoring, discreet design. Free consultation!',
  descriptionAr: 'برنامج زي أمن احترافي للحماية التنفيذية والأمن المؤسسي والمنشآت الحكومية في السعودية. تصميم حسب الطلب. استشارة مجانية!',
  keywords: ['professional security program', 'executive protection uniforms saudi', 'VIP security clothing', 'corporate security attire ksa', 'government security uniforms'],
  keywordsAr: ['برنامج أمن احترافي', 'زي حماية تنفيذية', 'ملابس أمن مؤسسي'],
  locale: 'en', pageType: 'service', path: '/services/professional-security-program',
  image: '/images/industries/security/security_uniforms_background.jpg', imageAlt: 'Professional Security Program',
  aiSummary: 'UNEOM professional security program: premium uniform solutions for executive protection teams, VIP security, corporate security directors, and government facility security. Bespoke tailoring, discreet designs, and premium fabrics.',
});

export const dynamic = 'force-static';

const proSecFAQs = [
  { question: 'What is the difference between standard and professional security programs?', answer: 'Professional security programs are designed for high-profile environments: Executive Protection Teams (close protection officers), VIP and Diplomatic Security, Corporate Security Directors, Government and Embassy Security, and High-End Hospitality Security. Uniforms feature bespoke tailoring, premium fabrics (Italian wool, Egyptian cotton), discreet design options, concealed carry compatibility, and executive-level accessories.' },
  { question: 'Do you offer concealed carry compatible uniforms?', answer: 'Yes. Our professional security line includes garments designed for concealed carry: jackets with integrated holster channels, shirts with reinforced waistband areas, blazers with weapon-accessible inner pockets, and casual options that maintain a discreet professional appearance while accommodating security equipment.' },
  { question: 'Can you outfit embassy and diplomatic security teams?', answer: 'Yes. UNEOM outfits embassy security, diplomatic protection details, and government VIP security teams. We provide: formal and informal uniform sets, climate-specific variations, country-specific branding requirements, rapid mobilization packages, and secure ordering/delivery protocols for sensitive facilities.' },
];

const tiers = [
  { icon: '🏢', title: 'Corporate Security', desc: 'Professional blazers and suits for corporate security directors. Executive appearance with tactical functionality.' },
  { icon: '🛡️', title: 'Executive Protection', desc: 'Discreet, premium clothing for close protection officers. Concealed carry compatible.' },
  { icon: '🏛️', title: 'Government & Embassy', desc: 'Formal security uniforms for government buildings, embassies, and diplomatic missions.' },
  { icon: '🏨', title: 'Hospitality Security', desc: 'Elegant security attire that blends with luxury hotel and resort environments.' },
  { icon: '👔', title: 'VIP Event Security', desc: 'Upscale event security clothing for galas, conferences, and private functions.' },
  { icon: '🎖️', title: 'Command & Control', desc: 'Distinguished uniforms for security operations managers and command staff.' },
];

export default function ProfessionalSecurityProgramPage() {
  return (
    <>
      <SEO2026 title="Professional Security Program" titleAr="برنامج الأمن الاحترافي" description="Premium professional security uniform program." locale="en" pageType="service" mainEntity="Professional Security Program" primaryImage="/images/industries/security/security_uniforms_background.jpg" primaryImageAlt="Professional Security Program" faqs={proSecFAQs} breadcrumbs={[{ name: 'Services', url: '/services' }, { name: 'Professional Security Program', url: '/services/professional-security-program' }]} certifications={['ISO 9001:2015']} clientCount={80} yearsInBusiness={20} industry="Security" />

      <section className="bg-gradient-to-br from-zinc-900 via-slate-900 to-gray-800 text-white relative overflow-hidden">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Professional Security Program', href: '/services/professional-security-program' }]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-yellow-400">🎖️</span><span className="text-sm font-medium">Premium Security Outfitting</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Professional Security <span className="bg-gradient-to-r from-yellow-300 to-amber-300 text-transparent bg-clip-text">Program</span></h1>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">Bespoke uniform solutions for executive protection, VIP security, and high-profile facilities. Premium fabrics with discreet tactical functionality.</p>
            <Button href="/quote?service=professional-security" variant="secondary" size="lg" className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white font-bold border-0">Get Free Consultation →</Button>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-20">
            <SectionHeading subtitle="Premium Security Solutions" centered>Security Tiers</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {tiers.map((t, i) => (<div key={i} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all"><div className="text-4xl mb-4">{t.icon}</div><h3 className="text-xl font-bold text-gray-900 mb-2">{t.title}</h3><p className="text-gray-600 text-sm">{t.desc}</p></div>))}
            </div>
          </section>
          <section className="mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>Professional Security FAQ</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {proSecFAQs.map((faq, i) => (<div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p></div></div>))}
            </div>
          </section>
          <section className="text-center bg-gradient-to-r from-zinc-800 to-slate-700 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Elevate Your Security Image</h2>
            <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">Bespoke security solutions for the most demanding environments. Discreet consultation available.</p>
            <Link href="/quote?service=professional-security" className="inline-flex items-center px-8 py-4 bg-yellow-600 text-white hover:bg-yellow-700 font-bold rounded-xl transition-all shadow-lg">Book Private Consultation →</Link>
          </section>
        </Container>
      </main>
      <section className="py-6 bg-gray-100 border-t"><div className="container mx-auto px-4 text-center"><Link href="/ar/services/professional-security-program" className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-800 text-white font-semibold py-2 px-4 rounded-lg text-sm">🇸🇦 العربية</Link></div></section>
    </>
  );
}
