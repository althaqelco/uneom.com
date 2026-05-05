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
  title: 'Tactical Patrol Program Saudi Arabia | Patrol Officer Uniforms - UNEOM',
  titleAr: 'برنامج الدوريات التكتيكية في السعودية | زي ضباط الدوريات - يونيوم',
  description: 'Tactical patrol uniform program for Saudi security companies. Patrol shirts, tactical pants, duty boots, weather gear & patrol accessories. Complete outfitting for mobile security teams.',
  descriptionAr: 'برنامج زي الدوريات التكتيكية لشركات الأمن السعودية. قمصان دورية، بناطيل تكتيكية، أحذية خدمة.',
  keywords: ['tactical patrol program saudi', 'patrol uniforms ksa', 'mobile security uniforms', 'patrol officer clothing', 'tactical pants saudi'],
  keywordsAr: ['برنامج دوريات تكتيكية', 'زي دوريات أمن', 'ملابس تكتيكية'],
  locale: 'en', pageType: 'service', path: '/services/tactical-patrol-program',
  image: '/images/industries/security/security_uniforms_background.jpg', imageAlt: 'Tactical Patrol Program',
  aiSummary: 'UNEOM tactical patrol program: specialized uniforms for mobile security patrols including tactical shirts with reinforced elbows, patrol pants with cargo pockets, duty boots, weather protection gear, and patrol accessories. Designed for 24/7 outdoor operations in Saudi climate.',
});

export const dynamic = 'force-static';

const patrolFAQs = [
  { question: 'What is included in the tactical patrol program?', answer: 'Complete patrol outfitting: Tactical Patrol Shirts (reinforced elbows, mesh ventilation), Patrol Cargo Pants (ripstop fabric, reinforced knees), Duty Boots (non-slip, steel toe options), Seasonal Weather Gear (rain jackets, cold weather layers), Patrol Accessories (duty belt, radio holder, flashlight case), and Vehicle Kit (seat covers, organizational accessories). All designed for 24/7 outdoor operations.' },
  { question: 'Are your patrol uniforms suitable for Saudi heat?', answer: 'Yes. Our tactical patrol uniforms feature: Moisture-wicking fabrics rated for 50°C+, ventilation panels in high-heat zones, UV-protective treatment (UPF 50+), lightweight ripstop materials (30% lighter than standard tactical), and quick-dry technology. Tested in Saudi outdoor conditions for 12+ hour patrol shifts.' },
  { question: 'What is the minimum order for patrol programs?', answer: 'Minimum 25 patrol officers per program. Includes initial fitting, 2 sets per officer, seasonal variations, and replacement scheduling. Volume pricing for 50+ (10% discount), 100+ (15%), and 500+ (custom pricing). Emergency add-on stock maintained for new hires.' },
];

const features = [
  { icon: '🏃', title: 'Mobility Design', desc: 'Stretch panels and articulated knees for unrestricted movement during patrol.' },
  { icon: '☀️', title: 'Heat Management', desc: 'Moisture-wicking, UV-protective fabrics rated for Saudi extreme heat.' },
  { icon: '🌙', title: 'Night Visibility', desc: 'Integrated reflective elements for safe nighttime patrol operations.' },
  { icon: '🔧', title: 'Tactical Pockets', desc: 'Purpose-designed cargo pockets for radio, flashlight, notebook, and phone.' },
  { icon: '🌧️', title: 'Weather Ready', desc: 'Seasonal layering system from summer mesh to winter weather protection.' },
  { icon: '💪', title: 'Reinforced Build', desc: 'Ripstop fabric with reinforced elbows, knees, and seat for durability.' },
];

export default function TacticalPatrolProgramPage() {
  return (
    <>
      <SEO2026 title="Tactical Patrol Program" titleAr="برنامج الدوريات التكتيكية" description="Tactical patrol uniform program for Saudi security." locale="en" pageType="service" mainEntity="Tactical Patrol Program" primaryImage="/images/industries/security/security_uniforms_background.jpg" primaryImageAlt="Tactical Patrol" faqs={patrolFAQs} breadcrumbs={[{ name: 'Services', url: '/services' }, { name: 'Tactical Patrol Program', url: '/services/tactical-patrol-program' }]} certifications={['ISO 9001:2015']} clientCount={80} yearsInBusiness={20} industry="Security" />
      <section className="bg-gradient-to-br from-stone-900 via-amber-900 to-stone-800 text-white relative overflow-hidden">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Tactical Patrol', href: '/services/tactical-patrol-program' }]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-amber-400">🚔</span><span className="text-sm font-medium">Designed for 24/7 Saudi Patrol Operations</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Tactical Patrol <span className="bg-gradient-to-r from-amber-300 to-orange-300 text-transparent bg-clip-text">Program</span></h1>
            <p className="text-xl mb-8 text-stone-300 leading-relaxed">Specialized patrol uniforms for mobile security teams. Heat-resistant, reinforced, and equipped for 24/7 outdoor operations in Saudi Arabia.</p>
            <Button href="/quote?service=tactical-patrol" variant="secondary" size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold border-0">Get Free Quote →</Button>
          </div>
        </Container>
      </section>
      <main className="py-16">
        <Container>
          <section className="mb-20">
            <SectionHeading subtitle="Built for Saudi Patrol Operations" centered>Program Features</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {features.map((f, i) => (<div key={i} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all"><div className="text-4xl mb-4">{f.icon}</div><h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3><p className="text-gray-600 text-sm">{f.desc}</p></div>))}
            </div>
          </section>
          <section className="mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>Tactical Patrol FAQ</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {patrolFAQs.map((faq, i) => (<div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p></div></div>))}
            </div>
          </section>
          <section className="text-center bg-gradient-to-r from-stone-800 to-amber-800 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Equip Your Patrol Teams</h2>
            <p className="text-xl mb-8 text-stone-300 max-w-3xl mx-auto">Purpose-built patrol uniforms for Saudi Arabia&apos;s demanding climate and security requirements.</p>
            <Link href="/quote?service=tactical-patrol" className="inline-flex items-center px-8 py-4 bg-amber-500 text-white hover:bg-amber-600 font-bold rounded-xl transition-all shadow-lg">Get Free Quote →</Link>
          </section>
        </Container>
      </main>
      <section className="py-6 bg-gray-100 border-t"><div className="container mx-auto px-4 text-center"><Link href="/ar/services/tactical-patrol-program" className="inline-flex items-center gap-2 bg-stone-700 hover:bg-stone-800 text-white font-semibold py-2 px-4 rounded-lg text-sm">🇸🇦 العربية</Link></div></section>
    </>
  );
}
