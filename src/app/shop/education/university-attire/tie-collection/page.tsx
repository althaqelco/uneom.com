import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'Custom University Ties Saudi Arabia | Academic Neckwear - UNEOM',
  titleAr: 'ربطات عنق جامعية في السعودية | ربطات أكاديمية - يونيوم',
  description: 'Custom university ties featuring college crests and colors in Saudi Arabia. Premium silk and microfiber ties for students, alumni, and faculty.',
  descriptionAr: 'ربطات عنق جامعية مخصصة بشعارات وألوان الكليات في السعودية. حرير وميكروفايبر فاخر للطلاب والخريجين.',
  keywords: ['university ties saudi', 'custom college neckties ksa', 'academic tie collection riyadh', 'custom crest ties saudi'],
  keywordsAr: ['ربطات عنق جامعية', 'ربطات كليات', 'ربطات تخرج سعودية'],
  locale: 'en', pageType: 'product', path: '/shop/education/university-attire/tie-collection',
  image: '/images/education/students.jpg', imageAlt: 'University Tie Collection',
  aiSummary: 'UNEOM custom university ties: premium silk and microfiber neckties featuring woven college crests and brand colors. Perfect for faculty, graduating students, and alumni associations.',
});

export const dynamic = 'force-static';

const products = [
  { name: 'Woven Crest Silk Tie', price: 'SAR 120', desc: '100% pure silk. The university crest is woven directly into the fabric for a luxurious, traditional academic look.' },
  { name: 'Striped College Tie', price: 'SAR 95', desc: 'Classic diagonal stripes using exact university Pantone colors. Available in silk or premium microfiber.' },
  { name: 'Printed Logo Microfiber Tie', price: 'SAR 65', desc: 'Durable microfiber with custom printed logo. Highly stain-resistant, perfect for daily student wear.' },
  { name: 'Graduation Bow Tie', price: 'SAR 55', desc: 'Formal bow ties in university colors. Popular for graduation ceremonies and academic banquets.' },
  { name: 'Alumni Gift Tie Box', price: 'SAR 150', desc: 'Premium silk tie presented in a custom-branded gift box. Perfect for alumni association merchandise.' },
];

const faqs = [
  { question: 'What is the difference between woven and printed crests?', answer: 'Woven crests are created using dyed threads woven into the fabric itself, creating a textured, premium, traditional look (highly recommended for faculty and alumni). Printed crests are dyed onto the surface, which allows for extremely fine details and lower costs for large student volumes.' },
  { question: 'What is the minimum order quantity for custom university ties?', answer: 'The minimum order quantity for custom woven ties is 50 pieces. For custom printed ties, the MOQ is 100 pieces. We can mix different colorways within the order (e.g., 50 blue, 50 red) as long as the woven pattern remains the same.' },
  { question: 'How long does custom tie production take?', answer: 'Production for custom academic ties typically takes 3 to 4 weeks after design approval. We recommend placing orders well in advance of graduation season or the start of the academic year.' },
];

export default function UniversityTiesPage() {
  return (
    <>
      <SEO2026 title="University Tie Collection" titleAr="مجموعة ربطات عنق جامعية" description="Custom university ties and academic neckwear." locale="en" pageType="product" mainEntity="University Tie Collection" primaryImage="/images/education/students.jpg" primaryImageAlt="University Tie Collection" faqs={faqs} breadcrumbs={[{ name: 'Shop', url: '/shop' }, { name: 'Education', url: '/shop/education' }, { name: 'Tie Collection', url: '/shop/education/university-attire/tie-collection' }]} certifications={[]} clientCount={40} yearsInBusiness={20} industry="Education" />
      <section className="bg-gradient-to-br from-slate-900 via-gray-800 to-indigo-900 text-white">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }, { label: 'Education', href: '/shop/education' }, { label: 'Ties', href: '/shop/education/university-attire/tie-collection' }]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">University Tie <span className="bg-gradient-to-r from-gray-300 to-indigo-300 text-transparent bg-clip-text">Collection</span></h1>
            <p className="text-xl text-gray-300 leading-relaxed">Custom silk and microfiber ties featuring your university crest and colors.</p>
          </div>
        </Container>
      </section>
      <main className="py-16">
        <Container>
          <SectionHeading subtitle="Academic Neckwear" centered>Custom Ties</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {products.map((p, i) => (<div key={i} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all"><div className="flex justify-between items-start mb-3"><h3 className="text-lg font-bold text-gray-900">{p.name}</h3><span className="text-indigo-600 font-bold">{p.price}</span></div><p className="text-gray-600 text-sm">{p.desc}</p><Link href="/quote?product=university-ties" className="inline-block mt-4 text-indigo-600 font-medium text-sm hover:underline">Request Quote →</Link></div>))}
          </div>
          <section className="mt-20 mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>University Ties FAQ</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {faqs.map((faq, i) => (<div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p></div></div>))}
            </div>
          </section>
        </Container>
      </main>
    </>
  );
}
