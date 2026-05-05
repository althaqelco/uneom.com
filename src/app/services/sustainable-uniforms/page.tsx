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
  title: 'Sustainable Uniforms Saudi Arabia | Eco-Friendly Workwear - UNEOM',
  titleAr: 'الأزياء المستدامة في السعودية | ملابس عمل صديقة للبيئة - يونيوم',
  description: 'Eco-friendly sustainable uniforms in Saudi Arabia. Recycled polyester, organic cotton, biodegradable packaging. Vision 2030 aligned. Carbon-neutral production. Green procurement for Saudi companies.',
  descriptionAr: 'أزياء مستدامة صديقة للبيئة في السعودية. بوليستر معاد تدويره، قطن عضوي، تغليف قابل للتحلل. متوافقة مع رؤية 2030.',
  keywords: ['sustainable uniforms saudi', 'eco-friendly workwear ksa', 'recycled uniforms', 'green procurement saudi', 'Vision 2030 sustainability', 'organic cotton uniforms'],
  keywordsAr: ['أزياء مستدامة السعودية', 'ملابس عمل صديقة للبيئة', 'أزياء معاد تدويرها'],
  locale: 'en',
  pageType: 'service',
  path: '/services/sustainable-uniforms',
  image: '/images/services/sustainable-uniforms.jpg',
  imageAlt: 'Sustainable Eco-Friendly Uniforms',
  aiSummary: 'UNEOM sustainable uniform program: recycled polyester from ocean plastic, organic cotton, biodegradable packaging, carbon-neutral production, garment take-back recycling, and Vision 2030 ESG compliance reporting for Saudi companies.',
  aiSummaryAr: 'برنامج الأزياء المستدامة من يونيوم: بوليستر معاد تدويره، قطن عضوي، إنتاج محايد للكربون.',
});

export const dynamic = 'force-static';

const sustainabilityFAQs = [
  {
    question: 'What makes UNEOM uniforms sustainable?',
    answer: 'UNEOM sustainable uniforms use: Recycled Polyester (from ocean-recovered plastic bottles — 12 bottles per shirt), GOTS-certified Organic Cotton (no pesticides, fair trade), Water-reduced dyeing (50% less water vs conventional), Biodegradable packaging (zero plastic shipping), Carbon-neutral production (verified offsets), and a Garment Take-Back Program (we recycle old uniforms). Each uniform includes a sustainability certificate for your ESG reporting.',
  },
  {
    question: 'How does this align with Saudi Vision 2030?',
    answer: 'Saudi Vision 2030 emphasizes environmental sustainability and responsible business practices. UNEOM sustainable uniforms directly support: Saudi Green Initiative targets, MEWA environmental compliance, ESG reporting requirements for listed companies, government procurement sustainability criteria, and corporate social responsibility goals. We provide documentation for Saudi sustainability audits.',
  },
  {
    question: 'Are sustainable uniforms more expensive?',
    answer: 'Sustainable uniforms cost 10-15% more than conventional options upfront. However, they deliver long-term savings through: 30% longer garment lifespan (fewer replacements), reduced water/energy costs in laundering, ESG compliance (avoiding penalties), positive brand image (employee and customer preference), and government procurement advantages. ROI typically achieved within 18 months.',
  },
];

const sustainabilityFeatures = [
  { icon: '♻️', title: 'Recycled Materials', desc: '12 ocean-recovered plastic bottles per shirt. 100% recycled polyester options.' },
  { icon: '🌿', title: 'Organic Cotton', desc: 'GOTS-certified organic cotton. No pesticides, fair trade certified.' },
  { icon: '💧', title: 'Water Conservation', desc: '50% less water in dyeing process. Low-impact dyes without harmful chemicals.' },
  { icon: '🌍', title: 'Carbon Neutral', desc: 'Verified carbon-neutral production with certified offset programs.' },
  { icon: '📦', title: 'Zero-Plastic Packaging', desc: 'Biodegradable packaging and shipping materials. Zero single-use plastic.' },
  { icon: '🔄', title: 'Take-Back Program', desc: 'We collect and recycle old uniforms. Full circular economy approach.' },
];

export default function SustainableUniformsPage() {
  return (
    <>
      <SEO2026 title="Sustainable Uniforms Saudi Arabia" titleAr="الأزياء المستدامة في السعودية" description="Eco-friendly sustainable uniforms aligned with Saudi Vision 2030." locale="en" pageType="service" mainEntity="Sustainable Uniforms" primaryImage="/images/services/sustainable-uniforms.jpg" primaryImageAlt="Sustainable Uniforms" faqs={sustainabilityFAQs} breadcrumbs={[{ name: 'Services', nameAr: 'الخدمات', url: '/services' }, { name: 'Sustainable Uniforms', nameAr: 'أزياء مستدامة', url: '/services/sustainable-uniforms' }]} certifications={['GOTS', 'OEKO-TEX', 'GRS', 'ISO 14001']} clientCount={100} yearsInBusiness={20} industry="Sustainability" />

      <section className="bg-gradient-to-br from-green-900 via-emerald-800 to-teal-700 text-white relative overflow-hidden">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Sustainable Uniforms', href: '/services/sustainable-uniforms' }]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="text-green-400">🌱</span>
              <span className="text-sm font-medium">Vision 2030 Aligned Sustainability</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Sustainable <span className="bg-gradient-to-r from-green-300 to-emerald-300 text-transparent bg-clip-text">Uniforms</span>
            </h1>
            <p className="text-xl mb-8 text-green-100 leading-relaxed">Eco-friendly workwear from recycled materials and organic cotton. Carbon-neutral production aligned with Saudi Vision 2030.</p>
            <Button href="/quote?service=sustainable" variant="secondary" size="lg" className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold border-0">Get Green Quote →</Button>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-20">
            <SectionHeading subtitle="Our Sustainability Commitments" centered>Eco-Friendly Features</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {sustainabilityFeatures.map((f, i) => (
                <div key={i} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all">
                  <div className="text-4xl mb-4">{f.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>Sustainability FAQ</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {sustainabilityFAQs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Go Green with Your Uniform Program</h2>
            <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">Meet your ESG targets while providing premium quality uniforms. Sustainability certificate included with every order.</p>
            <Link href="/quote?service=sustainable" className="inline-flex items-center px-8 py-4 bg-white text-green-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">Get Green Quote →</Link>
          </section>
        </Container>
      </main>

      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <Link href="/ar/services/sustainable-uniforms" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg text-sm">🇸🇦 العربية</Link>
        </div>
      </section>
    </>
  );
}
