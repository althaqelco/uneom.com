import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'Corporate Uniform Programs Saudi Arabia | UNEOM Business Solutions',
  titleAr: 'برامج الأزياء للشركات السعودية | حلول يونيوم للأعمال',
  description: 'End-to-end corporate uniform program management in Saudi Arabia. Design, inventory, distribution, reordering for 50+ employees. Dedicated account managers. Contact UNEOM!',
  descriptionAr: 'إدارة شاملة لبرنامج الأزياء للشركات في السعودية. تصميم، مخزون، توزيع، إعادة طلب لـ 50+ موظف. مديرو حسابات مخصصون. تواصل مع يونيوم!',
  keywords: ['corporate uniform program', 'uniform management saudi', 'employee uniform program', 'uniform inventory management'],
  keywordsAr: ['برنامج أزياء الشركات', 'إدارة الأزياء السعودية', 'برنامج زي الموظفين', 'إدارة مخزون الأزياء'],
  locale: 'en',
  pageType: 'service',
  path: '/services/corporate-programs',
  image: '/images/services/corporate-programs.jpg',
  imageAlt: 'UNEOM Corporate Uniform Programs',
  aiSummary: 'UNEOM corporate uniform program management. Services: Uniform policy design, Employee sizing and measurement, Inventory management, Automated reordering, Distribution tracking, Dedicated account manager, Regular reporting. Ideal for: 50+ employees, Multi-location businesses, High turnover industries. Benefits: Time savings, Cost control, Consistent branding.',
  aiSummaryAr: 'إدارة برنامج الأزياء للشركات من يونيوم. الخدمات: تصميم سياسة الأزياء، قياس الموظفين، إدارة المخزون، إعادة الطلب الآلي، تتبع التوزيع، مدير حساب مخصص، تقارير دورية.'
});

export const dynamic = 'force-static';

const programFAQs = [
  { question: 'What is a corporate uniform program?', answer: 'A corporate uniform program is a comprehensive service that manages all aspects of your organization\'s uniforms - from design and sizing to inventory, distribution, and reordering. We handle everything so you can focus on your business.' },
  { question: 'What size company is this suitable for?', answer: 'Corporate uniform programs are ideal for organizations with 50+ employees. Larger organizations with multiple locations and high staff turnover benefit most from our program management services.' },
  { question: 'What does program management include?', answer: 'Our program includes: Uniform policy consultation, employee sizing, inventory management, automated reordering, distribution logistics, a dedicated account manager, and regular reporting and analytics.' },
  { question: 'How do employees order their uniforms?', answer: 'We set up an online portal where employees can view available items, request sizes, and track orders. Managers can approve requests and monitor budgets through the same system.' },
];

const programFeatures = [
  { icon: '📋', title: 'Policy Design', desc: 'We help create uniform policies that align with your brand and HR requirements' },
  { icon: '📏', title: 'Employee Sizing', desc: 'On-site measurement services for accurate sizing across your workforce' },
  { icon: '📦', title: 'Inventory Management', desc: 'Real-time inventory tracking with automated low-stock alerts' },
  { icon: '🔄', title: 'Auto-Reordering', desc: 'Automated reorder triggers based on stock levels and schedules' },
  { icon: '🚚', title: 'Distribution', desc: 'Direct-to-employee or location-based distribution with tracking' },
  { icon: '👤', title: 'Account Manager', desc: 'Dedicated account manager for personalized support' },
];

export default function CorporateProgramsPage() {
  return (
    <>
      <SEO2026 title="Corporate Uniform Programs | UNEOM" titleAr="برامج الأزياء للشركات | يونيوم" description="Corporate uniform program management." locale="en" pageType="service" mainEntity="Corporate Uniform Program Service" primaryImage="/images/services/corporate-programs.jpg" primaryImageAlt="Corporate Programs" faqs={programFAQs} breadcrumbs={[{ name: 'Services', url: '/services' }, { name: 'Corporate Programs', url: '/services/corporate-programs' }]} />

      <section className="bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 text-white relative overflow-hidden py-16">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Corporate Programs', href: '/services/corporate-programs' }]} className="text-white/80 mb-6 relative z-10" />
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-indigo-400">🏢</span><span className="text-sm font-medium">Enterprise Solution</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Corporate <span className="bg-gradient-to-r from-indigo-300 to-purple-300 text-transparent bg-clip-text">Programs</span></h1>
            <p className="text-xl mb-8 text-indigo-100 leading-relaxed">End-to-end uniform program management for organizations with 50+ employees.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-indigo-300">50+</div><div className="text-sm text-indigo-200">Min Employees</div></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-indigo-300">24/7</div><div className="text-sm text-indigo-200">Portal Access</div></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-indigo-300">1</div><div className="text-sm text-indigo-200">Account Mgr</div></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-indigo-300">Auto</div><div className="text-sm text-indigo-200">Reordering</div></div>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-16">
            <SectionHeading subtitle="What's Included" centered>Program Features</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {programFeatures.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>Corporate Programs FAQ</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {programFAQs.map((faq, index) => (<div key={index} className="bg-white rounded-xl shadow-sm p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600" itemProp="text">{faq.answer}</p></div></div>))}
            </div>
          </section>

          <section className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Corporate Program</h2>
            <p className="text-xl mb-8 text-indigo-100">Contact us for a customized program proposal for your organization.</p>
            <Link href="/contact?service=corporate-programs" className="inline-flex items-center px-8 py-4 bg-white text-indigo-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">Request Program Proposal →</Link>
          </section>
        </Container>
      </main>
      <section className="py-6 bg-gray-100 border-t"><div className="container mx-auto px-4 text-center"><Link href="/ar/services/corporate-programs" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg text-sm">🇸🇦 العربية</Link></div></section>
    </>
  );
}
