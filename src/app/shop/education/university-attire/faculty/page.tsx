import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'University Faculty Uniforms Saudi Arabia | Professors Attire - UNEOM',
  titleAr: 'أزياء هيئة التدريس الجامعية في السعودية | أزياء الأساتذة - يونيوم',
  description: 'Premium attire for university faculty and professors in Saudi Arabia. Tailored blazers, worsted wool trousers, modest skirts, and formal academic wear.',
  descriptionAr: 'أزياء فاخرة لأعضاء هيئة التدريس والأساتذة بالجامعات السعودية. بليزرات مفصلة، بناطيل صوف، وملابس أكاديمية رسمية.',
  keywords: ['university faculty uniforms saudi', 'professors attire ksa', 'academic staff clothing riyadh', 'tailored blazers university'],
  keywordsAr: ['أزياء هيئة التدريس', 'أزياء أساتذة الجامعات', 'بليزرات أكاديمية سعودية'],
  locale: 'en', pageType: 'product', path: '/shop/education/university-attire/faculty',
  image: '/images/education/students.jpg', imageAlt: 'University Faculty Uniforms',
  aiSummary: 'UNEOM university faculty uniforms: tailored blazers, worsted wool trousers, modest skirts, and custom academic wear for professors in Saudi universities.',
});

export const dynamic = 'force-static';

const products = [
  { name: 'Professor Tailored Blazer', price: 'SAR 350', desc: 'Premium wool-blend tailored blazer. Classic fit with university crest embroidered on the chest pocket.' },
  { name: 'Worsted Wool Trousers', price: 'SAR 180', desc: 'Durable, wrinkle-resistant worsted wool trousers. Professional look for daily lectures.' },
  { name: 'Modest Faculty Skirt', price: 'SAR 160', desc: 'A-line modest maxi skirt in premium suiting fabric. Designed for female professors.' },
  { name: 'Academic Two-Piece Suit', price: 'SAR 480', desc: 'Matching blazer and trousers/skirt set. Perfect for symposiums and formal university events.' },
  { name: 'Executive Dress Shirt', price: 'SAR 145', desc: '100% Egyptian cotton dress shirt. High breathability for long teaching hours.' },
  { name: 'Custom Graduation Regalia', price: 'Contact Us', desc: 'Bespoke doctoral and masters gowns, tailored to university-specific colors and velvet trims.' },
];

const faqs = [
  { question: 'Do you offer made-to-measure services for faculty?', answer: 'Yes. For university faculty and senior management, we offer full made-to-measure services. Our tailors will visit your campus to take exact measurements for each professor to ensure a flawless, professional fit.' },
  { question: 'What fabrics do you recommend for university blazers?', answer: 'We recommend a premium Wool-Polyester blend (e.g., 50/50 or 70/30). It provides the luxurious drape and breathability of wool, combined with the wrinkle resistance and durability of polyester, perfect for long days on campus.' },
  { question: 'Can you replicate our exact university crest?', answer: 'Absolutely. We use high-density digitized embroidery to replicate intricate university crests perfectly on blazer pockets, ties, and shirts. We submit a physical embroidery sample for your approval before mass production.' },
];

export default function UniversityFacultyPage() {
  return (
    <>
      <SEO2026 title="University Faculty Uniforms" titleAr="أزياء هيئة التدريس الجامعية" description="Premium attire for university faculty." locale="en" pageType="product" mainEntity="University Faculty Uniforms" primaryImage="/images/education/students.jpg" primaryImageAlt="University Faculty Uniforms" faqs={faqs} breadcrumbs={[{ name: 'Shop', url: '/shop' }, { name: 'Education', url: '/shop/education' }, { name: 'Faculty', url: '/shop/education/university-attire/faculty' }]} certifications={[]} clientCount={60} yearsInBusiness={20} industry="Education" />
      <section className="bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }, { label: 'Education', href: '/shop/education' }, { label: 'Faculty', href: '/shop/education/university-attire/faculty' }]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">University Faculty <span className="bg-gradient-to-r from-purple-300 to-indigo-300 text-transparent bg-clip-text">Attire</span></h1>
            <p className="text-xl text-indigo-100 leading-relaxed">Premium blazers, trousers, and academic wear for professors in Saudi universities.</p>
          </div>
        </Container>
      </section>
      <main className="py-16">
        <Container>
          <SectionHeading subtitle="Professional Academic Wear" centered>Faculty Collection</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {products.map((p, i) => (<div key={i} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all"><div className="flex justify-between items-start mb-3"><h3 className="text-lg font-bold text-gray-900">{p.name}</h3><span className="text-purple-600 font-bold">{p.price}</span></div><p className="text-gray-600 text-sm">{p.desc}</p><Link href="/quote?product=faculty-attire" className="inline-block mt-4 text-purple-600 font-medium text-sm hover:underline">Request Quote →</Link></div>))}
          </div>
          <section className="mt-20 mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>Faculty Attire FAQ</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {faqs.map((faq, i) => (<div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p></div></div>))}
            </div>
          </section>
        </Container>
      </main>
    </>
  );
}
