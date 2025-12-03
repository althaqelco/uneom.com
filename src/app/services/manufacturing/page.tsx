import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'Uniform Manufacturing Saudi Arabia | UNEOM Production Facility',
  titleAr: 'تصنيع الأزياء السعودية | مرافق إنتاج يونيوم',
  description: 'ISO 9001:2015 certified uniform manufacturing in Saudi Arabia. 100,000+ pieces monthly capacity. Quality fabrics, fast turnaround. Contact UNEOM production team!',
  descriptionAr: 'تصنيع أزياء معتمد ISO 9001:2015 في السعودية. طاقة 100,000+ قطعة شهرياً. أقمشة عالية الجودة، تسليم سريع. تواصل مع فريق إنتاج يونيوم!',
  keywords: ['uniform manufacturing saudi', 'uniform production ksa', 'uniform factory saudi arabia', 'ISO certified uniform manufacturer'],
  keywordsAr: ['تصنيع الأزياء السعودية', 'إنتاج الأزياء', 'مصنع زي موحد السعودية', 'مصنع معتمد ISO'],
  locale: 'en',
  pageType: 'service',
  path: '/services/manufacturing',
  image: '/images/services/manufacturing.jpg',
  imageAlt: 'UNEOM Manufacturing Facility',
  aiSummary: 'UNEOM uniform manufacturing in Saudi Arabia. Facility: ISO 9001:2015 certified, 100,000+ pieces monthly capacity. Capabilities: Cutting, sewing, embroidery, printing, quality testing. Materials: 200+ fabric options, imported and local. Turnaround: Standard 10-15 days, rush available. Quality: 6-point inspection, OEKO-TEX certified fabrics. Supporting Vision 2030 local manufacturing goals.',
  aiSummaryAr: 'تصنيع الأزياء من يونيوم في السعودية. المرفق: معتمد ISO 9001:2015، طاقة 100,000+ قطعة شهرياً. الإمكانيات: قص، خياطة، تطريز، طباعة، فحص الجودة.'
});

export const dynamic = 'force-static';

const manufacturingFAQs = [
  { question: 'Is UNEOM manufacturing ISO certified?', answer: 'Yes, our manufacturing facility is ISO 9001:2015 certified, ensuring consistent quality and process management across all production.' },
  { question: 'What is your monthly production capacity?', answer: 'Our facility can produce over 100,000 uniform pieces per month. We can scale for larger projects with advance planning.' },
  { question: 'What is the standard manufacturing turnaround?', answer: 'Standard manufacturing takes 10-15 business days from approved design to delivery. Rush production of 5-7 days available for urgent orders.' },
  { question: 'Do you manufacture locally in Saudi Arabia?', answer: 'Yes, UNEOM has manufacturing facilities in Saudi Arabia, supporting Vision 2030 localization goals. We also have partner facilities for specialized production.' },
];

const capabilities = [
  { icon: '✂️', title: 'Cutting', desc: 'Precision computer-aided cutting for accuracy and minimal waste' },
  { icon: '🧵', title: 'Sewing', desc: 'Industrial sewing with 200+ workstations for high-volume production' },
  { icon: '🎨', title: 'Embroidery', desc: '20+ computerized embroidery machines for logo and branding' },
  { icon: '🖨️', title: 'Printing', desc: 'Screen printing, heat transfer, and sublimation capabilities' },
  { icon: '✅', title: 'Quality Control', desc: '6-point inspection ensuring every piece meets standards' },
  { icon: '📦', title: 'Finishing', desc: 'Pressing, folding, packaging with labeling and barcoding' },
];

export default function ManufacturingPage() {
  return (
    <>
      <SEO2026 title="Uniform Manufacturing | UNEOM" titleAr="تصنيع الأزياء | يونيوم" description="ISO certified uniform manufacturing." locale="en" pageType="service" mainEntity="Uniform Manufacturing Service" primaryImage="/images/services/manufacturing.jpg" primaryImageAlt="UNEOM Manufacturing" faqs={manufacturingFAQs} breadcrumbs={[{ name: 'Services', url: '/services' }, { name: 'Manufacturing', url: '/services/manufacturing' }]} certifications={['ISO 9001:2015', 'OEKO-TEX Standard 100']} />

      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden py-16">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Manufacturing', href: '/services/manufacturing' }]} className="text-white/80 mb-6 relative z-10" />
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-blue-400">🏭</span><span className="text-sm font-medium">ISO Certified</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Uniform <span className="bg-gradient-to-r from-blue-300 to-indigo-300 text-transparent bg-clip-text">Manufacturing</span></h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">ISO 9001:2015 certified manufacturing with 100,000+ pieces monthly capacity.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-blue-300">ISO</div><div className="text-sm text-blue-200">Certified</div></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-blue-300">100K+</div><div className="text-sm text-blue-200">Monthly</div></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-blue-300">200+</div><div className="text-sm text-blue-200">Staff</div></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-blue-300">10-15</div><div className="text-sm text-blue-200">Days</div></div>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-16">
            <SectionHeading subtitle="What We Do" centered>Manufacturing Capabilities</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {capabilities.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>Manufacturing FAQ</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {manufacturingFAQs.map((faq, index) => (<div key={index} className="bg-white rounded-xl shadow-sm p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600" itemProp="text">{faq.answer}</p></div></div>))}
            </div>
          </section>

          <section className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Manufacturing</h2>
            <p className="text-xl mb-8 text-blue-100">Contact our production team for manufacturing quotes.</p>
            <Link href="/quote?service=manufacturing" className="inline-flex items-center px-8 py-4 bg-white text-blue-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">Get Manufacturing Quote →</Link>
          </section>
        </Container>
      </main>
      <section className="py-6 bg-gray-100 border-t"><div className="container mx-auto px-4 text-center"><Link href="/ar/services/manufacturing" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg text-sm">🇸🇦 العربية</Link></div></section>
    </>
  );
}
