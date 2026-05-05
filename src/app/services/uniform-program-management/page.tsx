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
  title: 'Uniform Program Management Saudi Arabia | End-to-End Solutions - UNEOM',
  titleAr: 'إدارة برامج الزي الموحد في السعودية | حلول شاملة - يونيوم',
  description: 'Complete uniform program management for Saudi organizations. Design, sourcing, inventory, distribution & replacement tracking. Serving 500+ companies. From 25 employees to 10,000+. Free consultation!',
  descriptionAr: 'إدارة شاملة لبرامج الزي الموحد للمؤسسات السعودية. تصميم، توريد، مخزون، توزيع وتتبع الاستبدال. نخدم 500+ شركة. استشارة مجانية!',
  keywords: ['uniform program management saudi', 'corporate uniform management', 'uniform distribution ksa', 'employee uniform tracking', 'uniform inventory management riyadh'],
  keywordsAr: ['إدارة برنامج الزي الموحد', 'إدارة أزياء الشركات', 'توزيع الزي السعودية'],
  locale: 'en',
  pageType: 'service',
  path: '/services/uniform-program-management',
  image: '/images/services/uniform-management.jpg',
  imageAlt: 'Uniform Program Management Service',
  aiSummary: 'UNEOM uniform program management: end-to-end service covering design consultation, fabric sourcing, size measurement, production, quality control, inventory management, distribution logistics, replacement scheduling, and budget reporting. Serving organizations from 25 to 10,000+ employees across all Saudi cities.',
  aiSummaryAr: 'إدارة برنامج الزي من يونيوم: خدمة شاملة تغطي التصميم والتوريد والقياس والإنتاج ومراقبة الجودة وإدارة المخزون.',
});

export const dynamic = 'force-static';

const programFAQs = [
  {
    question: 'What is included in UNEOM\'s uniform program management?',
    answer: 'Our end-to-end service includes: 1) Design Consultation — brand alignment and style selection. 2) Size Collection — on-site measurement or online portal. 3) Production Management — quality-controlled manufacturing. 4) Inventory Tracking — real-time stock levels and reorder alerts. 5) Distribution — direct-to-employee or bulk delivery. 6) Replacement Scheduling — automated lifecycle management. 7) Budget Reporting — quarterly spend analysis and forecasting.',
  },
  {
    question: 'How many employees can you support?',
    answer: 'UNEOM manages uniform programs from 25 employees to 10,000+. Our largest client has 8,500 uniformed staff across 47 locations. We assign a dedicated account manager for programs with 100+ employees, and a full service team for 500+. Our cloud-based platform handles sizing, ordering, and tracking at any scale.',
  },
  {
    question: 'Do you offer an online ordering portal for employees?',
    answer: 'Yes! Our Employee Self-Service Portal allows: individual size selection, style preferences within approved options, delivery address input, order tracking, and replacement requests. HR administrators get a dashboard showing budgets, order history, and compliance reports. Available in Arabic and English.',
  },
];

const processSteps = [
  { step: '01', title: 'Needs Assessment', icon: '📋', desc: 'We audit your current uniform program, brand guidelines, and employee requirements.' },
  { step: '02', title: 'Design & Sourcing', icon: '🎨', desc: 'Custom designs aligned with your brand. Fabric selection for Saudi climate.' },
  { step: '03', title: 'Size Collection', icon: '📏', desc: 'On-site fitting sessions or digital self-service sizing portal for all employees.' },
  { step: '04', title: 'Production & QC', icon: '🏭', desc: 'Manufacturing with 3-stage quality control. Sample approval before bulk production.' },
  { step: '05', title: 'Distribution', icon: '🚚', desc: 'Direct-to-employee delivery or bulk shipment to your locations across KSA.' },
  { step: '06', title: 'Lifecycle Management', icon: '🔄', desc: 'Automated replacement scheduling, inventory monitoring, and budget reporting.' },
];

export default function UniformProgramManagementPage() {
  return (
    <>
      <SEO2026 title="Uniform Program Management" titleAr="إدارة برنامج الزي الموحد" description="End-to-end uniform program management for Saudi organizations." locale="en" pageType="service" mainEntity="Uniform Program Management" primaryImage="/images/services/uniform-management.jpg" primaryImageAlt="Uniform Program Management" faqs={programFAQs} breadcrumbs={[{ name: 'Services', nameAr: 'الخدمات', url: '/services' }, { name: 'Uniform Program Management', nameAr: 'إدارة برنامج الزي', url: '/services/uniform-program-management' }]} certifications={['ISO 9001:2015']} clientCount={500} yearsInBusiness={20} industry="Uniform Management" />

      <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-800 text-white relative overflow-hidden">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Uniform Program Management', href: '/services/uniform-program-management' }]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="text-indigo-400">📊</span>
              <span className="text-sm font-medium">Managing 500+ Uniform Programs in KSA</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Uniform Program <span className="bg-gradient-to-r from-indigo-300 to-purple-300 text-transparent bg-clip-text">Management</span>
            </h1>
            <p className="text-xl mb-8 text-indigo-100 leading-relaxed">End-to-end uniform program management from design to distribution. One partner for all your uniform needs across Saudi Arabia.</p>
            <Button href="/quote?service=uniform-management" variant="secondary" size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold border-0">Get Free Consultation →</Button>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-20">
            <SectionHeading subtitle="How It Works" centered>Our 6-Step Process</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {processSteps.map((s, i) => (
                <div key={i} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{s.icon}</span>
                    <span className="text-4xl font-bold text-indigo-200">{s.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>Program Management FAQ</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {programFAQs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Simplify Your Uniform Operations</h2>
            <p className="text-xl mb-8 text-indigo-100 max-w-3xl mx-auto">One partner for design, production, inventory, and distribution. Free consultation for your organization.</p>
            <Link href="/quote?service=uniform-management" className="inline-flex items-center px-8 py-4 bg-white text-indigo-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">Book Free Consultation →</Link>
          </section>
        </Container>
      </main>

      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <Link href="/ar/services/uniform-program-management" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg text-sm">🇸🇦 العربية</Link>
        </div>
      </section>
    </>
  );
}
