import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'University Trousers & Academic Pants Saudi Arabia - UNEOM',
  titleAr: 'بناطيل جامعية في السعودية | بناطيل أكاديمية - يونيوم',
  description: 'Durable and comfortable university trousers for students and staff in Saudi Arabia. Poly-wool blends, wrinkle-resistant chinos, and modesty-compliant fits.',
  descriptionAr: 'بناطيل جامعية متينة ومريحة للطلاب والموظفين في السعودية. أقمشة صوف بوليستر مقاومة للتجعد ومقاسات محتشمة.',
  keywords: ['university trousers saudi', 'college uniform pants ksa', 'academic trousers riyadh', 'student pants saudi arabia'],
  keywordsAr: ['بناطيل جامعية', 'بناطيل زي جامعي', 'سراويل طلاب'],
  locale: 'en', pageType: 'product', path: '/shop/education/university-attire/trousers',
  image: '/images/education/students.jpg', imageAlt: 'University Trousers',
  aiSummary: 'UNEOM university trousers: durable poly-wool and poly-cotton blends for Saudi college students and staff. Features wrinkle-resistance, modest fits, and expandable waistbands for all-day comfort.',
});

export const dynamic = 'force-static';

const products = [
  { name: 'Classic Poly-Wool Trousers', price: 'SAR 120', desc: 'Premium blend of polyester and wool. Excellent drape, highly durable, and perfect for professional campus wear.' },
  { name: 'Easy-Care Student Chinos', price: 'SAR 95', desc: 'Wrinkle-resistant cotton blend chinos. Casual yet uniform-compliant. Available in navy, black, and khaki.' },
  { name: 'Faculty Tailored Trousers', price: 'SAR 150', desc: 'High-end worsted wool trousers designed for professors and university management. Lined to the knee.' },
  { name: 'Expandable Waist Pants', price: 'SAR 110', desc: 'Features a hidden expandable waistband offering up to 2 inches of extra stretch for all-day comfort during lectures.' },
  { name: 'Women’s Modest Trousers', price: 'SAR 105', desc: 'Wide-leg and straight-cut options tailored for modesty. Opaque fabrics suitable for female students and staff.' },
];

const faqs = [
  { question: 'What is the most durable trouser fabric for students?', answer: 'For daily student wear, a Poly-Viscose or Poly-Wool blend is the most durable. It offers excellent resistance to pilling, holds a sharp crease without ironing, and withstands frequent washing better than pure cotton.' },
  { question: 'Do you offer tailoring and hemming services?', answer: 'Yes. For bulk university orders, trousers can be delivered pre-hemmed to specified lengths, or delivered unhemmed with an on-campus tailoring event organized by UNEOM to perfectly fit each student.' },
  { question: 'What fit options are available?', answer: 'We offer Classic Fit (straight leg, comfortable), Tailored Fit (slightly tapered), and Modest Fit (wider leg). All trousers are available in a comprehensive size range to accommodate all body types.' },
];

export default function UniversityTrousersPage() {
  return (
    <>
      <SEO2026 title="University Trousers" titleAr="بناطيل جامعية" description="Durable and comfortable university trousers." locale="en" pageType="product" mainEntity="University Trousers" primaryImage="/images/education/students.jpg" primaryImageAlt="University Trousers" faqs={faqs} breadcrumbs={[{ name: 'Shop', url: '/shop' }, { name: 'Education', url: '/shop/education' }, { name: 'Trousers', url: '/shop/education/university-attire/trousers' }]} certifications={[]} clientCount={75} yearsInBusiness={20} industry="Education" />
      <section className="bg-gradient-to-br from-gray-900 via-slate-800 to-zinc-800 text-white">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }, { label: 'Education', href: '/shop/education' }, { label: 'Trousers', href: '/shop/education/university-attire/trousers' }]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">University <span className="bg-gradient-to-r from-gray-300 to-zinc-300 text-transparent bg-clip-text">Trousers</span></h1>
            <p className="text-xl text-gray-300 leading-relaxed">Durable, wrinkle-resistant, and comfortable trousers for Saudi students and academic staff.</p>
          </div>
        </Container>
      </section>
      <main className="py-16">
        <Container>
          <SectionHeading subtitle="Academic Bottoms" centered>Trouser Collection</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {products.map((p, i) => (<div key={i} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all"><div className="flex justify-between items-start mb-3"><h3 className="text-lg font-bold text-gray-900">{p.name}</h3><span className="text-gray-800 font-bold">{p.price}</span></div><p className="text-gray-600 text-sm">{p.desc}</p><Link href="/quote?product=university-trousers" className="inline-block mt-4 text-slate-800 font-medium text-sm hover:underline">Request Quote →</Link></div>))}
          </div>
          <section className="mt-20 mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>Trousers FAQ</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {faqs.map((faq, i) => (<div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p></div></div>))}
            </div>
          </section>
        </Container>
      </main>
    </>
  );
}
