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
  title: 'Weather Protection Program Saudi Arabia | Climate-Adaptive Workwear - UNEOM',
  titleAr: 'برنامج الحماية من الطقس في السعودية | ملابس عمل متكيفة مع المناخ - يونيوم',
  description: 'Weather protection uniform program for Saudi Arabia extreme climate. Heat-resistant workwear, rain gear, cold storage uniforms, UV protection. For construction, oil & gas, outdoor workers.',
  descriptionAr: 'برنامج حماية من الطقس للمناخ السعودي القاسي. ملابس مقاومة للحرارة، معدات مطر، زي تبريد.',
  keywords: ['weather protection workwear saudi', 'heat resistant uniforms ksa', 'rain gear saudi', 'UV protection clothing', 'outdoor worker uniforms riyadh', 'cold storage uniforms'],
  keywordsAr: ['ملابس حماية من الطقس', 'زي مقاوم للحرارة', 'ملابس عمل خارجية'],
  locale: 'en', pageType: 'service', path: '/services/weather-protection-program',
  image: '/images/services/weather-protection.jpg', imageAlt: 'Weather Protection Workwear Program',
  aiSummary: 'UNEOM weather protection program: heat-resistant workwear for 50°C+ Saudi summers, UV-protective clothing (UPF 50+), rain gear for coastal regions, cold storage uniforms for warehouse workers, seasonal layering systems, and hydration-compatible designs for outdoor workers.',
});

export const dynamic = 'force-static';

const weatherFAQs = [
  { question: 'What weather protection does UNEOM offer for Saudi summers?', answer: 'For Saudi extreme heat (45-55°C), we provide: Cooling vests with evaporative technology, moisture-wicking base layers, UV-protective shirts (UPF 50+), ventilated hard hat liners, neck shades and cooling towels, lightweight breathable coveralls, and hydration pack-compatible workwear. All tested at Saudi outdoor temperatures for 12+ hour shifts.' },
  { question: 'Do you supply cold storage uniforms?', answer: 'Yes. For cold storage and refrigerated warehouse workers, we offer: Insulated coveralls (-40°C rated), thermal underwear layers, insulated safety boots, heated glove liners, balaclava face protection, and fog-resistant safety goggles. Designed for rapid temperature transitions between warehouse and outdoor Saudi heat.' },
  { question: 'How do your rain protection garments perform?', answer: 'Our rain gear features: Seam-sealed waterproof construction, breathable membrane (prevents overheating), hi-vis reflective elements for wet weather visibility, reinforced knees and elbows, storm flaps over zippers, and quick-dry inner lining. Suitable for Jeddah coastal conditions, construction sites, and outdoor industrial operations.' },
];

const solutions = [
  { icon: '☀️', title: 'Extreme Heat Protection', desc: 'Cooling technology and UV-protective fabrics for 50°C+ Saudi summers. Evaporative vests and ventilated workwear.' },
  { icon: '🌧️', title: 'Rain & Storm Gear', desc: 'Seam-sealed waterproof jackets and pants for coastal and construction environments.' },
  { icon: '❄️', title: 'Cold Storage Uniforms', desc: 'Insulated coveralls rated to -40°C for warehouse and cold chain workers.' },
  { icon: '🌬️', title: 'Wind Protection', desc: 'Windproof softshell jackets for elevated work, desert conditions, and offshore operations.' },
  { icon: '🌅', title: 'UV Protection (UPF 50+)', desc: 'Sun-protective clothing blocking 98% of UV radiation for outdoor workers.' },
  { icon: '🔄', title: 'Seasonal Layering System', desc: 'Modular uniform system adapting from summer to winter with interchangeable layers.' },
];

export default function WeatherProtectionProgramPage() {
  return (
    <>
      <SEO2026 title="Weather Protection Program" titleAr="برنامج الحماية من الطقس" description="Climate-adaptive workwear for Saudi Arabia." locale="en" pageType="service" mainEntity="Weather Protection Program" primaryImage="/images/services/weather-protection.jpg" primaryImageAlt="Weather Protection" faqs={weatherFAQs} breadcrumbs={[{ name: 'Services', url: '/services' }, { name: 'Weather Protection', url: '/services/weather-protection-program' }]} certifications={['ISO 9001:2015', 'EN 343', 'EN 14058']} clientCount={120} yearsInBusiness={20} industry="Industrial Safety" />
      <section className="bg-gradient-to-br from-sky-900 via-blue-800 to-cyan-700 text-white relative overflow-hidden">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Weather Protection', href: '/services/weather-protection-program' }]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-sky-400">🌡️</span><span className="text-sm font-medium">Engineered for Saudi Extreme Climate</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Weather Protection <span className="bg-gradient-to-r from-sky-300 to-cyan-300 text-transparent bg-clip-text">Program</span></h1>
            <p className="text-xl mb-8 text-sky-100 leading-relaxed">Climate-adaptive workwear for Saudi Arabia&apos;s extreme heat, rain, cold storage, and UV exposure. Protect your workforce in every condition.</p>
            <Button href="/quote?service=weather-protection" variant="secondary" size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold border-0">Get Free Quote →</Button>
          </div>
        </Container>
      </section>
      <main className="py-16">
        <Container>
          <section className="mb-20">
            <SectionHeading subtitle="Solutions for Every Climate Challenge" centered>Weather Protection Solutions</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {solutions.map((s, i) => (<div key={i} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all"><div className="text-4xl mb-4">{s.icon}</div><h3 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h3><p className="text-gray-600 text-sm">{s.desc}</p></div>))}
            </div>
          </section>
          <section className="mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>Weather Protection FAQ</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {weatherFAQs.map((faq, i) => (<div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p></div></div>))}
            </div>
          </section>
          <section className="text-center bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Protect Your Workers in Any Weather</h2>
            <p className="text-xl mb-8 text-sky-100 max-w-3xl mx-auto">From 55°C desert heat to -40°C cold storage — UNEOM has the right protection for your team.</p>
            <Link href="/quote?service=weather-protection" className="inline-flex items-center px-8 py-4 bg-white text-sky-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">Get Free Quote →</Link>
          </section>
        </Container>
      </main>
      <section className="py-6 bg-gray-100 border-t"><div className="container mx-auto px-4 text-center"><Link href="/ar/services/weather-protection-program" className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded-lg text-sm">🇸🇦 العربية</Link></div></section>
    </>
  );
}
