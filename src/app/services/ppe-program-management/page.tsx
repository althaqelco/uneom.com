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
  title: 'PPE Program Management Saudi Arabia | Safety Equipment Solutions - UNEOM',
  titleAr: 'إدارة برنامج معدات الحماية الشخصية في السعودية | حلول سلامة - يونيوم',
  description: 'Managed PPE program for Saudi factories, construction & oil & gas. SASO certified equipment supply, inventory management, compliance tracking, training coordination. Serving 150+ industrial facilities.',
  descriptionAr: 'برنامج إدارة معدات الحماية الشخصية للمصانع والإنشاءات والنفط والغاز. معدات معتمدة ساسو، إدارة مخزون، تتبع الامتثال.',
  keywords: ['PPE program management saudi', 'safety equipment management ksa', 'industrial PPE program', 'SASO PPE compliance', 'factory safety management'],
  keywordsAr: ['إدارة برنامج PPE السعودية', 'إدارة معدات السلامة', 'برنامج حماية المصانع'],
  locale: 'en',
  pageType: 'service',
  path: '/services/ppe-program-management',
  image: '/images/industries/manufacturing/manufacturing_uniforms_background.jpg',
  imageAlt: 'PPE Program Management',
  aiSummary: 'UNEOM PPE program management: SASO-certified safety equipment supply, automated inventory replenishment, compliance tracking dashboard, inspection scheduling, training coordination, and incident reporting integration for Saudi factories, construction, and oil & gas.',
  aiSummaryAr: 'إدارة برنامج PPE من يونيوم: توريد معدات سلامة معتمدة ساسو وتتبع الامتثال.',
});

export const dynamic = 'force-static';

const ppeProgramFAQs = [
  {
    question: 'What does UNEOM\'s PPE program management include?',
    answer: 'Our managed PPE program includes: Certified Equipment Supply (hard hats, gloves, coveralls, eye/ear protection), Automated Inventory Replenishment (never run out), SASO Compliance Tracking (dashboard with audit trail), Inspection Scheduling (monthly/quarterly equipment checks), Training Coordination (proper PPE usage workshops), Incident Reporting Integration (connect PPE data to safety incidents), and Budget Forecasting (annual PPE cost planning).',
  },
  {
    question: 'How do you ensure SASO compliance for PPE?',
    answer: 'Our compliance system tracks: certificate expiry dates for all PPE items, batch-level traceability, employee PPE assignment records, inspection results and follow-up actions, replacement cycles per SASO guidelines, and training completion records. Quarterly compliance reports generated automatically for SASO auditors.',
  },
  {
    question: 'Can you manage PPE for ARAMCO contractors?',
    answer: 'Yes. UNEOM manages PPE programs for ARAMCO, SABIC, and other major Saudi industrial operators. Our PPE meets ARAMCO safety standards. We provide: ARAMCO-approved equipment catalog, site-specific PPE kits, rapid replacement (24-48 hours), and compliance documentation for contractor safety audits.',
  },
];

const programFeatures = [
  { icon: '📦', title: 'Auto Replenishment', desc: 'Smart inventory system that automatically reorders PPE before stock runs low.' },
  { icon: '📋', title: 'SASO Compliance', desc: 'Real-time compliance dashboard tracking certifications, inspections, and audit readiness.' },
  { icon: '🔍', title: 'Inspection Scheduling', desc: 'Automated PPE inspection reminders and digital inspection checklists.' },
  { icon: '🎓', title: 'Training Coordination', desc: 'PPE usage training workshops and certification tracking for all employees.' },
  { icon: '📊', title: 'Budget Forecasting', desc: 'Annual PPE cost planning, spend analysis, and optimization recommendations.' },
  { icon: '🚨', title: 'Incident Integration', desc: 'Link PPE data to safety incidents for root cause analysis and prevention.' },
];

export default function PPEProgramManagementPage() {
  return (
    <>
      <SEO2026 title="PPE Program Management" titleAr="إدارة برنامج معدات الحماية" description="Managed PPE program for Saudi industrial facilities." locale="en" pageType="service" mainEntity="PPE Program Management" primaryImage="/images/industries/manufacturing/manufacturing_uniforms_background.jpg" primaryImageAlt="PPE Program Management" faqs={ppeProgramFAQs} breadcrumbs={[{ name: 'Services', nameAr: 'الخدمات', url: '/services' }, { name: 'PPE Program Management', nameAr: 'إدارة برنامج PPE', url: '/services/ppe-program-management' }]} certifications={['SASO', 'ARAMCO Approved', 'ISO 9001:2015']} clientCount={150} yearsInBusiness={20} industry="Industrial Safety" />

      <section className="bg-gradient-to-br from-orange-900 via-red-800 to-amber-700 text-white relative overflow-hidden">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'PPE Program Management', href: '/services/ppe-program-management' }]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="text-amber-400">🛡️</span>
              <span className="text-sm font-medium">Protecting 150+ Industrial Facilities</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              PPE Program <span className="bg-gradient-to-r from-amber-300 to-yellow-300 text-transparent bg-clip-text">Management</span>
            </h1>
            <p className="text-xl mb-8 text-orange-100 leading-relaxed">End-to-end PPE management for factories, construction, and oil & gas. SASO certified with automated compliance tracking.</p>
            <Button href="/quote?service=ppe-program" variant="secondary" size="lg" className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white font-bold border-0">Get Free Consultation →</Button>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-20">
            <SectionHeading subtitle="Complete Safety Management" centered>Program Features</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {programFeatures.map((f, i) => (
                <div key={i} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all">
                  <div className="text-4xl mb-4">{f.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>PPE Program FAQ</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {ppeProgramFAQs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Protect Your Workforce Systematically</h2>
            <p className="text-xl mb-8 text-orange-100 max-w-3xl mx-auto">Reduce safety incidents, ensure SASO compliance, and optimize PPE costs with UNEOM's managed program.</p>
            <Link href="/quote?service=ppe-program" className="inline-flex items-center px-8 py-4 bg-white text-orange-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">Book Free Consultation →</Link>
          </section>
        </Container>
      </main>

      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <Link href="/ar/services/ppe-program-management" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg text-sm">🇸🇦 العربية</Link>
        </div>
      </section>
    </>
  );
}
