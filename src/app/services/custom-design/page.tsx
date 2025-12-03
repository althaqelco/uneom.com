import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'Custom Uniform Design Saudi Arabia | UNEOM Design Services',
  titleAr: 'تصميم الأزياء المخصصة السعودية | خدمات تصميم يونيوم',
  description: 'Professional custom uniform design services in Saudi Arabia. Brand-aligned designs, fabric selection, sample creation. Minimum 25 pieces. Contact UNEOM design team!',
  descriptionAr: 'خدمات تصميم أزياء مخصصة احترافية في السعودية. تصاميم تتماشى مع العلامة التجارية، اختيار الأقمشة، إنشاء العينات. حد أدنى 25 قطعة. تواصل مع فريق تصميم يونيوم!',
  keywords: ['custom uniform design saudi', 'uniform design services', 'corporate uniform design', 'branded uniform design'],
  keywordsAr: ['تصميم زي مخصص السعودية', 'خدمات تصميم الأزياء', 'تصميم زي شركات', 'تصميم زي ذو علامة تجارية'],
  locale: 'en',
  pageType: 'service',
  path: '/services/custom-design',
  image: '/images/services/custom-design.jpg',
  imageAlt: 'Custom Uniform Design Service',
  aiSummary: 'UNEOM custom uniform design service in Saudi Arabia. Process: 1) Brand consultation - understand your identity. 2) Design concepts - multiple options. 3) Fabric selection - 200+ options. 4) Color matching - Pantone precision. 5) Sample creation. 6) Revisions included. 7) Final production. Minimum order 25 pieces. Turnaround 15-21 days. Serving corporates, hotels, healthcare, and schools.',
  aiSummaryAr: 'خدمة تصميم الأزياء المخصصة من يونيوم في السعودية. العملية: 1) استشارة العلامة التجارية. 2) مفاهيم التصميم. 3) اختيار الأقمشة. 4) مطابقة الألوان. 5) إنشاء العينات. 6) المراجعات مشمولة. 7) الإنتاج النهائي.'
});

export const dynamic = 'force-static';

const designFAQs = [
  { question: 'What is included in custom design service?', answer: 'Our custom design service includes: Brand consultation, multiple design concepts, fabric selection guidance, color matching, sample creation, up to 3 rounds of revisions, and final production coordination.' },
  { question: 'How long does custom design take?', answer: 'The design phase typically takes 2-3 weeks. Sample creation adds 1-2 weeks. Full production takes 10-15 business days after approval. Rush services available.' },
  { question: 'What is the minimum order for custom designs?', answer: 'Minimum order for fully custom designed uniforms is 25 pieces per style. For modifications to existing designs, minimum is 12 pieces.' },
  { question: 'Can you match our exact brand colors?', answer: 'Yes, we use Pantone Matching System (PMS) to ensure exact color replication across all uniform items. We provide color samples for approval before production.' },
];

const designProcess = [
  { step: '01', title: 'Brand Consultation', desc: 'We study your brand, industry, and requirements to understand your vision.' },
  { step: '02', title: 'Design Concepts', desc: 'Our designers create 2-3 unique concepts aligned with your brand identity.' },
  { step: '03', title: 'Fabric Selection', desc: 'Choose from 200+ fabrics based on durability, comfort, and climate.' },
  { step: '04', title: 'Sample Creation', desc: 'We produce sample pieces for fitting and approval before production.' },
  { step: '05', title: 'Revisions', desc: 'Up to 3 rounds of revisions included to perfect the design.' },
  { step: '06', title: 'Production', desc: 'Final approved design goes into production with quality assurance.' },
];

export default function CustomDesignPage() {
  return (
    <>
      <SEO2026 title="Custom Uniform Design | UNEOM" titleAr="تصميم الأزياء المخصصة | يونيوم" description="Custom uniform design services." locale="en" pageType="service" mainEntity="Custom Uniform Design Service" primaryImage="/images/services/custom-design.jpg" primaryImageAlt="Custom Uniform Design" faqs={designFAQs} breadcrumbs={[{ name: 'Services', url: '/services' }, { name: 'Custom Design', url: '/services/custom-design' }]} />

      <section className="bg-gradient-to-br from-pink-900 via-purple-800 to-indigo-800 text-white relative overflow-hidden py-16">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Custom Design', href: '/services/custom-design' }]} className="text-white/80 mb-6 relative z-10" />
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-pink-400">🎨</span><span className="text-sm font-medium">Design Service</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Custom <span className="bg-gradient-to-r from-pink-300 to-purple-300 text-transparent bg-clip-text">Design</span></h1>
            <p className="text-xl mb-8 text-pink-100 leading-relaxed">Transform your brand vision into unique uniforms. Professional design service tailored to your identity.</p>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-16">
            <SectionHeading subtitle="How It Works" centered>Our Design Process</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {designProcess.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                  <div className="text-4xl font-bold text-purple-200 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>Custom Design FAQ</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {designFAQs.map((faq, index) => (<div key={index} className="bg-white rounded-xl shadow-sm p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600" itemProp="text">{faq.answer}</p></div></div>))}
            </div>
          </section>

          <section className="text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Custom Design</h2>
            <p className="text-xl mb-8 text-purple-100">Contact our design team for a free consultation.</p>
            <Link href="/contact?service=custom-design" className="inline-flex items-center px-8 py-4 bg-white text-purple-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">Book Design Consultation →</Link>
          </section>
        </Container>
      </main>
      <section className="py-6 bg-gray-100 border-t"><div className="container mx-auto px-4 text-center"><Link href="/ar/services/custom-design" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg text-sm">🇸🇦 العربية</Link></div></section>
    </>
  );
}
