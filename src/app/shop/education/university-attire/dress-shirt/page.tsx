import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'University Dress Shirts Saudi Arabia | Academic Formal Wear - UNEOM',
  titleAr: 'قمصان رسمية للجامعات في السعودية | ملابس أكاديمية - يونيوم',
  description: 'Premium dress shirts for university students and staff in Saudi Arabia. Oxford cotton, wrinkle-resistant fabrics, custom university logo embroidery.',
  descriptionAr: 'قمصان رسمية فاخرة لطلاب وموظفي الجامعات في السعودية. قطن أكسفورد، أقمشة مقاومة للتجعد، وتطريز شعار الجامعة.',
  keywords: ['university dress shirts saudi', 'college uniform shirts ksa', 'academic dress shirts riyadh', 'oxford shirts university'],
  keywordsAr: ['قمصان جامعية', 'قمصان رسمية للطلاب', 'زي جامعي سعودي'],
  locale: 'en', pageType: 'product', path: '/shop/education/university-attire/dress-shirt',
  image: '/images/education/students.jpg', imageAlt: 'University Dress Shirts',
  aiSummary: 'UNEOM university dress shirts: Oxford cotton and wrinkle-resistant options for Saudi college students and staff. Available in white, light blue, and custom colors with embroidered university crests.',
});

export const dynamic = 'force-static';

const products = [
  { name: 'Oxford Cotton Shirt', price: 'SAR 95', desc: 'Classic Oxford weave cotton. Durable, breathable, and perfect for daily campus wear. Button-down collar.' },
  { name: 'Easy-Care Poplin Shirt', price: 'SAR 85', desc: 'Wrinkle-resistant poly-cotton blend. Requires minimal ironing, ideal for busy students.' },
  { name: 'Premium Faculty Shirt', price: 'SAR 145', desc: '100% Egyptian cotton. Executive style with spread collar and French cuffs for professors.' },
  { name: 'Short Sleeve Summer Shirt', price: 'SAR 80', desc: 'Lightweight breathable fabric designed specifically for the Saudi summer climate.' },
  { name: 'Women’s Tailored Blouse', price: 'SAR 90', desc: 'Modest, tailored fit with opaque fabrics. Perfect for female university students and staff.' },
];

const faqs = [
  { question: 'Do you offer custom embroidery for university crests?', answer: 'Yes. We provide high-precision embroidery for university crests and department logos. Embroidery can be placed on the left chest, pocket, or collar. We ensure brand guidelines are strictly followed.' },
  { question: 'What is the most durable fabric for student daily wear?', answer: 'For daily student wear, we highly recommend our Poly-Cotton Poplin (65% polyester / 35% cotton). It offers the breathability of cotton but is highly durable, resists wrinkles, and withstands frequent washing.' },
  { question: 'Do you provide sizing samples?', answer: 'Yes, for university contracts (100+ students), we provide a full sizing matrix set. We organize fitting days on campus to ensure every student and staff member gets the perfect fit before mass production begins.' },
];

export default function UniversityDressShirtsPage() {
  return (
    <>
      <SEO2026 title="University Dress Shirts" titleAr="قمصان رسمية للجامعات" description="Premium dress shirts for university students and staff." locale="en" pageType="product" mainEntity="University Dress Shirts" primaryImage="/images/education/students.jpg" primaryImageAlt="University Dress Shirts" faqs={faqs} breadcrumbs={[{ name: 'Shop', url: '/shop' }, { name: 'Education', url: '/shop/education' }, { name: 'Dress Shirts', url: '/shop/education/university-attire/dress-shirt' }]} certifications={[]} clientCount={80} yearsInBusiness={20} industry="Education" />
      <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-800 text-white">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }, { label: 'Education', href: '/shop/education' }, { label: 'Dress Shirts', href: '/shop/education/university-attire/dress-shirt' }]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">University Dress <span className="bg-gradient-to-r from-indigo-300 to-purple-300 text-transparent bg-clip-text">Shirts</span></h1>
            <p className="text-xl text-indigo-100 leading-relaxed">Classic Oxford and wrinkle-resistant dress shirts for Saudi students and academic staff.</p>
          </div>
        </Container>
      </section>
      <main className="py-16">
        <Container>
          <SectionHeading subtitle="Academic Formal Wear" centered>Shirt Collection</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {products.map((p, i) => (<div key={i} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all"><div className="flex justify-between items-start mb-3"><h3 className="text-lg font-bold text-gray-900">{p.name}</h3><span className="text-indigo-600 font-bold">{p.price}</span></div><p className="text-gray-600 text-sm">{p.desc}</p><Link href="/quote?product=university-shirts" className="inline-block mt-4 text-indigo-600 font-medium text-sm hover:underline">Request Quote →</Link></div>))}
          </div>
          <section className="mt-20 mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>Dress Shirts FAQ</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {faqs.map((faq, i) => (<div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p></div></div>))}
            </div>
          </section>
        </Container>
      </main>
    </>
  );
}
