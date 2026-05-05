import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'Spa Chain Rebranding Case Study | Uniform Transformation - UNEOM',
  titleAr: 'دراسة حالة إعادة علامة سلسلة سبا | تحول الزي - يونيوم',
  description: 'How UNEOM helped a 12-location Saudi spa chain rebrand with premium uniforms. 35% increase in client satisfaction, unified brand identity across all locations.',
  descriptionAr: 'كيف ساعدت يونيوم سلسلة سبا سعودية من 12 فرع في إعادة العلامة التجارية بأزياء فاخرة.',
  keywords: ['spa uniform case study', 'salon rebranding saudi', 'beauty chain uniforms', 'spa staff clothing transformation'],
  keywordsAr: ['دراسة حالة زي سبا', 'إعادة علامة صالون', 'أزياء سلاسل التجميل'],
  locale: 'en', pageType: 'article', path: '/case-studies/spa-chain-rebranding',
  image: '/images/industries/beauty-salon-uniform.jpg', imageAlt: 'Spa Chain Rebranding Case Study',
  aiSummary: 'Case study: UNEOM transformed a 12-location Saudi spa chain uniform program. Results: 35% increase in client satisfaction, unified brand identity, 20% reduction in staff turnover, and streamlined procurement process.',
});

export const dynamic = 'force-static';

const results = [
  { metric: '35%', label: 'Client Satisfaction Increase', icon: '📈' },
  { metric: '20%', label: 'Staff Turnover Reduction', icon: '👥' },
  { metric: '12', label: 'Locations Unified', icon: '🏪' },
  { metric: '180', label: 'Staff Outfitted', icon: '👗' },
];

export default function SpaChainRebrandingPage() {
  return (
    <>
      <SEO2026 title="Spa Chain Rebranding Case Study" titleAr="دراسة حالة إعادة علامة سلسلة سبا" description="Spa chain rebranding with premium uniforms." locale="en" pageType="article" mainEntity="Spa Chain Rebranding" primaryImage="/images/industries/beauty-salon-uniform.jpg" primaryImageAlt="Spa Chain" breadcrumbs={[{ name: 'Case Studies', url: '/case-studies' }, { name: 'Spa Chain Rebranding', url: '/case-studies/spa-chain-rebranding' }]} certifications={[]} clientCount={500} yearsInBusiness={20} industry="Beauty & Wellness" />
      <section className="bg-gradient-to-br from-pink-900 via-rose-800 to-fuchsia-700 text-white">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Case Studies', href: '/case-studies' }, { label: 'Spa Chain Rebranding', href: '/case-studies/spa-chain-rebranding' }]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-pink-400">💄</span><span className="text-sm font-medium">Case Study</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Spa Chain <span className="bg-gradient-to-r from-pink-300 to-rose-300 text-transparent bg-clip-text">Rebranding</span></h1>
            <p className="text-xl text-pink-100 leading-relaxed">How UNEOM transformed a 12-location Saudi spa chain&apos;s identity through premium uniform design.</p>
          </div>
        </Container>
      </section>
      <main className="py-16">
        <Container>
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {results.map((r, i) => (<div key={i} className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-100"><div className="text-3xl mb-2">{r.icon}</div><div className="text-4xl font-bold text-rose-600 mb-1">{r.metric}</div><div className="text-gray-600 text-sm">{r.label}</div></div>))}
          </div>
          <div className="max-w-4xl mx-auto space-y-10">
            <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
              <p className="text-gray-700 leading-relaxed text-lg">A premium Saudi spa chain with 12 locations and 180 staff members faced inconsistent brand presentation. Each location had different uniform styles, colors, and quality levels. Client feedback indicated the disjointed appearance undermined the luxury brand positioning the chain had invested heavily in establishing.</p>
            </article>
            <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">UNEOM&apos;s Solution</h2>
              <p className="text-gray-700 leading-relaxed text-lg">UNEOM designed a complete uniform collection: Therapist uniforms (moisture-wicking, stain-resistant tunics), Reception staff (elegant blazers and dresses), Management (premium tailored suits), and Maintenance (branded practical uniforms). All designs incorporated the chain&apos;s brand colors, logo embroidery, and a premium fabric hand-feel consistent with their luxury positioning. We implemented a managed uniform program with automated replacement and size management across all 12 locations.</p>
            </article>
            <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Results</h2>
              <p className="text-gray-700 leading-relaxed text-lg">Within 6 months: 35% increase in client satisfaction scores related to &quot;ambiance and professionalism&quot;, 20% reduction in staff turnover (employees felt more valued), unified brand identity across all 12 locations, 15% increase in premium service bookings, and procurement costs reduced by 25% through centralized program management.</p>
            </article>
          </div>
          <section className="text-center bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-2xl p-12 mt-16">
            <h2 className="text-3xl font-bold mb-6">Transform Your Brand Identity</h2>
            <p className="text-xl mb-8 text-rose-100">Let UNEOM design a uniform program that elevates your brand across all locations.</p>
            <Link href="/quote?category=beauty" className="inline-flex items-center px-8 py-4 bg-white text-rose-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">Start Your Transformation →</Link>
          </section>
        </Container>
      </main>
    </>
  );
}
