import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'University Staff Uniforms Saudi Arabia | Campus Support Wear - UNEOM',
  titleAr: 'أزياء موظفي الجامعات في السعودية | ملابس دعم الحرم الجامعي - يونيوم',
  description: 'Durable and professional uniforms for university administrative and support staff in Saudi Arabia. Security, maintenance, and admin uniforms.',
  descriptionAr: 'أزياء متينة واحترافية لموظفي الإدارة والدعم بالجامعات السعودية. أزياء أمن، صيانة، وإدارة.',
  keywords: ['university staff uniforms saudi', 'college admin clothing', 'campus support wear riyadh', 'university security uniforms', 'maintenance staff uniforms ksa'],
  keywordsAr: ['أزياء موظفي الجامعات', 'ملابس أمن جامعي', 'زي عمال الصيانة'],
  locale: 'en', pageType: 'product', path: '/shop/education/university-attire/staff',
  image: '/images/education/students.jpg', imageAlt: 'University Staff Uniforms',
  aiSummary: 'UNEOM university staff uniforms: durable and professional clothing for administrative, security, and maintenance personnel in Saudi educational institutions.',
});

export const dynamic = 'force-static';

const products = [
  { name: 'Admin Staff Uniform', price: 'SAR 150', desc: 'Professional poly-cotton dress shirts and tailored trousers for administrative and library staff.' },
  { name: 'Campus Security Uniform', price: 'SAR 195', desc: 'Durable tactical shirts, cargo pants, and high-visibility options for university security personnel.' },
  { name: 'Maintenance Coveralls', price: 'SAR 120', desc: 'Heavy-duty poly-cotton coveralls with multiple pockets for campus maintenance teams.' },
  { name: 'Event Staff Polo', price: 'SAR 65', desc: 'Bright, easily identifiable polo shirts for open days and university event coordinators.' },
  { name: 'Lab Technician Coat', price: 'SAR 85', desc: 'Knee-length white lab coats with custom department embroidery for university laboratories.' },
  { name: 'Transportation Staff Wear', price: 'SAR 110', desc: 'Comfortable shirts and trousers for campus bus drivers, featuring reflective safety elements.' },
];

const faqs = [
  { question: 'Do you provide uniforms for all university departments?', answer: 'Yes, we provide specialized uniforms for every department: administration, security, maintenance, laboratory technicians, healthcare clinic staff, and transportation drivers. This ensures a cohesive university brand across all roles.' },
  { question: 'Are security uniforms SASO compliant?', answer: 'Yes. Our security uniforms meet all Saudi safety and standard regulations (SASO), including appropriate durability, high-visibility components for night patrols, and weather-appropriate fabrics for Saudi summers.' },
  { question: 'Can we setup an automated ordering portal for our staff?', answer: 'Yes! For large universities, we can create a dedicated B2B portal. Your staff can log in, view their specific department uniform allowance, and order directly online, vastly simplifying your procurement process.' },
];

export default function UniversityStaffPage() {
  return (
    <>
      <SEO2026 title="University Staff Uniforms" titleAr="أزياء موظفي الجامعات" description="Durable uniforms for university support staff." locale="en" pageType="product" mainEntity="University Staff Uniforms" primaryImage="/images/education/students.jpg" primaryImageAlt="University Staff Uniforms" faqs={faqs} breadcrumbs={[{ name: 'Shop', url: '/shop' }, { name: 'Education', url: '/shop/education' }, { name: 'Staff', url: '/shop/education/university-attire/staff' }]} certifications={['SASO']} clientCount={120} yearsInBusiness={20} industry="Education" />
      <section className="bg-gradient-to-br from-cyan-900 via-blue-800 to-indigo-900 text-white">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }, { label: 'Education', href: '/shop/education' }, { label: 'Staff', href: '/shop/education/university-attire/staff' }]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">University Staff <span className="bg-gradient-to-r from-cyan-300 to-blue-300 text-transparent bg-clip-text">Uniforms</span></h1>
            <p className="text-xl text-blue-100 leading-relaxed">Cohesive and durable uniforms for administration, security, and maintenance teams across campus.</p>
          </div>
        </Container>
      </section>
      <main className="py-16">
        <Container>
          <SectionHeading subtitle="Campus Support Wear" centered>Staff Departments</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {products.map((p, i) => (<div key={i} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all"><div className="flex justify-between items-start mb-3"><h3 className="text-lg font-bold text-gray-900">{p.name}</h3><span className="text-cyan-600 font-bold">{p.price}</span></div><p className="text-gray-600 text-sm">{p.desc}</p><Link href="/quote?product=university-staff" className="inline-block mt-4 text-cyan-600 font-medium text-sm hover:underline">Request Quote →</Link></div>))}
          </div>
          <section className="mt-20 mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>Staff Uniforms FAQ</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {faqs.map((faq, i) => (<div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p></div></div>))}
            </div>
          </section>
        </Container>
      </main>
    </>
  );
}
