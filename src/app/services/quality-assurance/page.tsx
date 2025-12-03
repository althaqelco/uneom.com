import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'Uniform Quality Assurance | UNEOM Quality Control Saudi Arabia',
  titleAr: 'ضمان جودة الأزياء | رقابة الجودة يونيوم السعودية',
  description: 'Rigorous quality assurance for uniforms in Saudi Arabia. 6-point inspection, fabric testing, color matching. ISO 9001:2015 certified quality processes. UNEOM quality guarantee!',
  descriptionAr: 'ضمان جودة صارم للأزياء في السعودية. فحص 6 نقاط، اختبار الأقمشة، مطابقة الألوان. عمليات جودة معتمدة ISO 9001:2015. ضمان جودة يونيوم!',
  keywords: ['uniform quality assurance', 'quality control uniforms', 'fabric testing saudi', 'uniform inspection'],
  keywordsAr: ['ضمان جودة الأزياء', 'رقابة الجودة', 'اختبار الأقمشة السعودية', 'فحص الأزياء'],
  locale: 'en',
  pageType: 'service',
  path: '/services/quality-assurance',
  image: '/images/services/quality-assurance.jpg',
  imageAlt: 'UNEOM Quality Assurance',
  aiSummary: 'UNEOM quality assurance for uniforms. Process: 1) Incoming fabric inspection. 2) Pre-production checks. 3) In-line quality monitoring. 4) Post-production inspection. 5) Final 6-point check. 6) Pre-shipment verification. Standards: ISO 9001:2015, OEKO-TEX fabrics. Defect rate <0.5%. Guarantee: Free replacement for defects.',
  aiSummaryAr: 'ضمان جودة الأزياء من يونيوم. العملية: 1) فحص القماش الوارد. 2) فحوصات ما قبل الإنتاج. 3) مراقبة الجودة أثناء الإنتاج. 4) فحص ما بعد الإنتاج. 5) فحص 6 نقاط نهائي. 6) التحقق قبل الشحن.'
});

export const dynamic = 'force-static';

const qualityFAQs = [
  { question: 'What is your quality inspection process?', answer: 'We use a comprehensive 6-point inspection covering fabric quality, stitching, measurements, color accuracy, branding placement, and overall finish. Every piece is individually checked.' },
  { question: 'What certifications does UNEOM hold?', answer: 'UNEOM is ISO 9001:2015 certified for quality management. We use OEKO-TEX Standard 100 certified fabrics to ensure safety and sustainability.' },
  { question: 'What is your defect rate?', answer: 'Our defect rate is maintained below 0.5% through rigorous quality control. Any defective items are replaced free of charge.' },
  { question: 'Do you conduct fabric testing?', answer: 'Yes, all fabrics undergo testing for color fastness, shrinkage, pilling resistance, and tensile strength before production approval.' },
];

const qualitySteps = [
  { icon: '📦', title: 'Incoming Inspection', desc: 'All raw materials tested and verified upon arrival' },
  { icon: '✂️', title: 'Pre-Production', desc: 'Cutting patterns and initial samples checked' },
  { icon: '🔍', title: 'In-Line Monitoring', desc: 'Continuous quality checks during production' },
  { icon: '✅', title: 'Post-Production', desc: 'Finished items inspected for defects' },
  { icon: '📋', title: '6-Point Check', desc: 'Final comprehensive quality verification' },
  { icon: '📦', title: 'Pre-Shipment', desc: 'Random sampling before dispatch' },
];

export default function QualityAssurancePage() {
  return (
    <>
      <SEO2026 title="Quality Assurance | UNEOM" titleAr="ضمان الجودة | يونيوم" description="Uniform quality assurance." locale="en" pageType="service" mainEntity="Uniform Quality Assurance Service" primaryImage="/images/services/quality-assurance.jpg" primaryImageAlt="UNEOM Quality" faqs={qualityFAQs} breadcrumbs={[{ name: 'Services', url: '/services' }, { name: 'Quality Assurance', url: '/services/quality-assurance' }]} certifications={['ISO 9001:2015', 'OEKO-TEX Standard 100']} />

      <section className="bg-gradient-to-br from-green-900 via-teal-800 to-emerald-800 text-white relative overflow-hidden py-16">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Quality Assurance', href: '/services/quality-assurance' }]} className="text-white/80 mb-6 relative z-10" />
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-green-400">✅</span><span className="text-sm font-medium">ISO Certified</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Quality <span className="bg-gradient-to-r from-green-300 to-emerald-300 text-transparent bg-clip-text">Assurance</span></h1>
            <p className="text-xl mb-8 text-green-100 leading-relaxed">Rigorous 6-point quality inspection ensuring every uniform meets the highest standards.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-green-300">ISO</div><div className="text-sm text-green-200">9001:2015</div></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-green-300">&lt;0.5%</div><div className="text-sm text-green-200">Defect Rate</div></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-green-300">6</div><div className="text-sm text-green-200">Checkpoints</div></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-green-300">100%</div><div className="text-sm text-green-200">Inspected</div></div>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-16">
            <SectionHeading subtitle="Our Process" centered>Quality Control Steps</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {qualitySteps.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>Quality FAQ</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {qualityFAQs.map((faq, index) => (<div key={index} className="bg-white rounded-xl shadow-sm p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600" itemProp="text">{faq.answer}</p></div></div>))}
            </div>
          </section>

          <section className="text-center bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Quality You Can Trust</h2>
            <p className="text-xl mb-8 text-green-100">Experience our commitment to quality with your next order.</p>
            <Link href="/quote" className="inline-flex items-center px-8 py-4 bg-white text-green-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">Get Quote →</Link>
          </section>
        </Container>
      </main>
      <section className="py-6 bg-gray-100 border-t"><div className="container mx-auto px-4 text-center"><Link href="/ar/services/quality-assurance" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg text-sm">🇸🇦 العربية</Link></div></section>
    </>
  );
}
