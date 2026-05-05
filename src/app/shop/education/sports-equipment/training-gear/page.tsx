import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'School Training Gear & Sports Uniforms Saudi Arabia - UNEOM',
  titleAr: 'معدات التدريب والزي الرياضي للمدارس في السعودية - يونيوم',
  description: 'Premium training gear and sports uniforms for Saudi educational institutions. Moisture-wicking PE kits, team jerseys, tracksuits, and custom school branding. Bulk pricing.',
  descriptionAr: 'معدات تدريب وزي رياضي فاخر للمدارس والجامعات السعودية. أطقم رياضية، قمصان فرق، وملابس رياضية بشعار المدرسة.',
  keywords: ['school sports uniforms saudi', 'PE kits ksa', 'training gear for schools riyadh', 'custom team jerseys saudi', 'physical education clothing'],
  keywordsAr: ['زي رياضي للمدارس', 'معدات تدريب مدرسية', 'أطقم رياضية للجامعات', 'ملابس تربية بدنية'],
  locale: 'en', pageType: 'product', path: '/shop/education/sports-equipment/training-gear',
  image: '/images/education/students.jpg', imageAlt: 'School Training Gear',
  aiSummary: 'UNEOM school sports uniforms and training gear: high-performance moisture-wicking fabrics, custom team jerseys, PE kits, and tracksuits for Saudi schools and universities.',
});

export const dynamic = 'force-static';

const products = [
  { name: 'Standard PE Kit', price: 'SAR 75', desc: 'Moisture-wicking t-shirt and breathable shorts. Custom school logo print.' },
  { name: 'Premium Tracksuit', price: 'SAR 145', desc: 'Lightweight zip-up jacket and track pants. Ideal for winter sports in KSA.' },
  { name: 'Team Sports Jersey', price: 'SAR 95', desc: 'Sublimated custom team jerseys for football, basketball, and volleyball.' },
  { name: 'Performance Polo', price: 'SAR 85', desc: 'Athletic fit polo shirt for sports coaches and PE teachers. Anti-odor technology.' },
  { name: 'Training Bibs', price: 'SAR 25', desc: 'High-visibility mesh training bibs. Pack of 10 available in multiple neon colors.' },
  { name: 'Sports Accessories', price: 'SAR 35+', desc: 'Custom branded sports bags, water bottles, and caps for school teams.' },
];

const faqs = [
  { question: 'What fabrics do you use for school PE kits?', answer: 'We use high-performance, moisture-wicking micro-polyester blends. These fabrics pull sweat away from the body, dry 4x faster than cotton, and are treated with anti-odor technology—making them perfect for the Saudi climate.' },
  { question: 'Do you offer custom sublimation printing for team jerseys?', answer: 'Yes! Sublimation printing allows for unlimited colors, patterns, and sponsor logos to be permanently dyed into the fabric. The design will never crack, peel, or fade. Minimum order for sublimated jerseys is 25 pieces.' },
  { question: 'How do we manage sizing for hundreds of students?', answer: 'For large educational institutions, UNEOM provides full sizing sets for students to try on during enrollment. We also offer a custom online portal where parents can order the exact sizes needed for their children directly.' },
];

export default function TrainingGearPage() {
  return (
    <>
      <SEO2026 title="School Training Gear" titleAr="معدات التدريب والزي الرياضي" description="Premium training gear for Saudi educational institutions." locale="en" pageType="product" mainEntity="School Training Gear" primaryImage="/images/education/students.jpg" primaryImageAlt="School Training Gear" faqs={faqs} breadcrumbs={[{ name: 'Shop', url: '/shop' }, { name: 'Education', url: '/shop/education' }, { name: 'Training Gear', url: '/shop/education/sports-equipment/training-gear' }]} certifications={[]} clientCount={150} yearsInBusiness={20} industry="Education" />
      <section className="bg-gradient-to-br from-indigo-900 via-blue-800 to-cyan-800 text-white">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }, { label: 'Education', href: '/shop/education' }, { label: 'Training Gear', href: '/shop/education/sports-equipment/training-gear' }]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">School Training <span className="bg-gradient-to-r from-blue-300 to-cyan-300 text-transparent bg-clip-text">Gear</span></h1>
            <p className="text-xl text-blue-100 leading-relaxed">High-performance sports uniforms and PE kits for Saudi schools and universities.</p>
          </div>
        </Container>
      </section>
      <main className="py-16">
        <Container>
          <SectionHeading subtitle="Athletic Wear" centered>Sports Collection</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {products.map((p, i) => (<div key={i} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all"><div className="flex justify-between items-start mb-3"><h3 className="text-lg font-bold text-gray-900">{p.name}</h3><span className="text-blue-600 font-bold">{p.price}</span></div><p className="text-gray-600 text-sm">{p.desc}</p><Link href="/quote?product=training-gear" className="inline-block mt-4 text-blue-600 font-medium text-sm hover:underline">Request Quote →</Link></div>))}
          </div>
          <section className="mt-20 mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>Training Gear FAQ</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {faqs.map((faq, i) => (<div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p></div></div>))}
            </div>
          </section>
        </Container>
      </main>
    </>
  );
}
