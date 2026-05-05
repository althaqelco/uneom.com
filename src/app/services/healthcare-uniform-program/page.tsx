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
  title: 'Healthcare Uniform Program Saudi Arabia | Hospital Staff Solutions - UNEOM',
  titleAr: 'برنامج الزي الصحي في السعودية | حلول موظفي المستشفيات - يونيوم',
  description: 'Managed healthcare uniform program for Saudi hospitals & clinics. Antimicrobial scrubs, laundry management, size tracking, automated replacement. MOH compliant. Serving 200+ facilities. Free consultation!',
  descriptionAr: 'برنامج إدارة الزي الصحي للمستشفيات والعيادات السعودية. سكراب مضاد للميكروبات، إدارة غسيل، تتبع مقاسات. معتمد وزارة الصحة. استشارة مجانية!',
  keywords: ['healthcare uniform program saudi', 'hospital uniform management', 'medical scrubs program ksa', 'clinic uniform service', 'MOH compliant uniform program'],
  keywordsAr: ['برنامج زي صحي السعودية', 'إدارة زي المستشفيات', 'برنامج سكراب طبي'],
  locale: 'en',
  pageType: 'service',
  path: '/services/healthcare-uniform-program',
  image: '/images/industries/healthcare-uniforms-saudi.jpg',
  imageAlt: 'Healthcare Uniform Program',
  aiSummary: 'UNEOM healthcare uniform program: managed service for hospitals and clinics including antimicrobial scrub supply, department color coding, laundry tracking with RFID, automated replacement cycles, infection control compliance, and MOH reporting. Serving 200+ healthcare facilities.',
  aiSummaryAr: 'برنامج الزي الصحي من يونيوم: خدمة مدارة للمستشفيات تشمل توريد سكراب مضاد للميكروبات وتتبع الغسيل.',
});

export const dynamic = 'force-static';

const healthcareProgramFAQs = [
  {
    question: 'What does the healthcare uniform program include?',
    answer: 'Our healthcare program includes: Antimicrobial scrub sets (color-coded by department), lab coats and doctor coats, nursing uniforms, surgical gowns and caps, medical hijabs, RFID laundry tracking, automated replacement scheduling (every 6-12 months), infection control compliance reporting, and 24/7 emergency stock for new hires. All garments MOH compliant.',
  },
  {
    question: 'How does the RFID laundry tracking work?',
    answer: 'Each garment has an embedded RFID chip that tracks: wash cycles completed, garment age, assigned department/employee, laundry turnaround time, and replacement triggers. Hospital administrators access a real-time dashboard showing inventory status, compliance metrics, and cost per employee. This reduces uniform loss by 40% and ensures infection control standards.',
  },
  {
    question: 'Can you handle department-specific color coding?',
    answer: 'Yes. We implement color-coded uniform systems: Surgery (green/blue), Emergency (red), ICU (navy), Pediatrics (pink/purple), Radiology (gray), Laboratory (white), Nursing (teal), Administration (black/charcoal). Custom colors available. Department logos and name embroidery included.',
  },
];

const programFeatures = [
  { icon: '🦠', title: 'Antimicrobial Guarantee', desc: 'All scrubs treated with silver-ion antimicrobial technology. Effective for 50+ wash cycles.' },
  { icon: '📡', title: 'RFID Laundry Tracking', desc: 'Real-time tracking of every garment through wash cycles, inventory, and replacement.' },
  { icon: '🎨', title: 'Department Color Coding', desc: 'Organized color system for easy department identification. Custom color schemes.' },
  { icon: '🔄', title: 'Auto Replacement', desc: 'Automated replacement scheduling based on wash cycles and garment condition.' },
  { icon: '📊', title: 'Compliance Dashboard', desc: 'Real-time reporting for MOH compliance, infection control, and budget tracking.' },
  { icon: '🚨', title: 'Emergency Stock', desc: '24/7 emergency inventory for new hires, replacements, and seasonal surges.' },
];

export default function HealthcareUniformProgramPage() {
  return (
    <>
      <SEO2026 title="Healthcare Uniform Program" titleAr="برنامج الزي الصحي" description="Managed healthcare uniform program for Saudi hospitals." locale="en" pageType="service" mainEntity="Healthcare Uniform Program" primaryImage="/images/industries/healthcare-uniforms-saudi.jpg" primaryImageAlt="Healthcare Uniform Program" faqs={healthcareProgramFAQs} breadcrumbs={[{ name: 'Services', nameAr: 'الخدمات', url: '/services' }, { name: 'Healthcare Uniform Program', nameAr: 'برنامج الزي الصحي', url: '/services/healthcare-uniform-program' }]} certifications={['MOH Compliant', 'ISO 9001:2015', 'SASO']} clientCount={200} yearsInBusiness={20} industry="Healthcare" />

      <section className="bg-gradient-to-br from-teal-900 via-cyan-800 to-blue-800 text-white relative overflow-hidden">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Healthcare Uniform Program', href: '/services/healthcare-uniform-program' }]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="text-cyan-400">🏥</span>
              <span className="text-sm font-medium">Serving 200+ Healthcare Facilities</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Healthcare Uniform <span className="bg-gradient-to-r from-cyan-300 to-teal-300 text-transparent bg-clip-text">Program</span>
            </h1>
            <p className="text-xl mb-8 text-teal-100 leading-relaxed">Fully managed uniform program for hospitals and clinics. From antimicrobial scrubs to RFID tracking and MOH compliance reporting.</p>
            <Button href="/quote?service=healthcare-program" variant="secondary" size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold border-0">Get Free Consultation →</Button>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-20">
            <SectionHeading subtitle="What's Included" centered>Program Features</SectionHeading>
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
            <SectionHeading subtitle="Common Questions" centered>Healthcare Program FAQ</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {healthcareProgramFAQs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Upgrade Your Hospital Uniform Operations</h2>
            <p className="text-xl mb-8 text-teal-100 max-w-3xl mx-auto">Reduce uniform costs by 30%, improve infection control compliance, and eliminate stockouts with UNEOM's managed program.</p>
            <Link href="/quote?service=healthcare-program" className="inline-flex items-center px-8 py-4 bg-white text-teal-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">Book Free Consultation →</Link>
          </section>
        </Container>
      </main>

      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <Link href="/ar/services/healthcare-uniform-program" className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-lg text-sm">🇸🇦 العربية</Link>
        </div>
      </section>
    </>
  );
}
