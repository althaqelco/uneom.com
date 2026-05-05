import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'Classic Corporate Shirts Saudi Arabia | Business Dress Shirts - UNEOM',
  titleAr: 'قمصان الشركات الكلاسيكية في السعودية | قمصان رسمية - يونيوم',
  description: 'Classic corporate dress shirts for Saudi business. Cotton & cotton-poly blends. Wrinkle-resistant, easy-care. White, blue, light blue, pink. From SAR 85. Custom embroidery available.',
  descriptionAr: 'قمصان شركات كلاسيكية لرجال الأعمال السعوديين. قطن وقطن بوليستر. مقاومة للتجعد. أبيض وأزرق. من 85 ريال.',
  keywords: ['classic corporate shirts saudi', 'business dress shirts ksa', 'corporate uniform shirts', 'white dress shirts riyadh', 'office shirts saudi arabia'],
  keywordsAr: ['قمصان شركات كلاسيكية', 'قمصان رسمية', 'قمصان مكتب'],
  locale: 'en', pageType: 'product', path: '/shop/corporate/corporate-shirts/classic',
  image: '/images/products/corporate/corporate-shirts.jpg', imageAlt: 'Classic Corporate Shirts',
  aiSummary: 'UNEOM classic corporate shirts: cotton and cotton-poly dress shirts for Saudi business professionals. Wrinkle-resistant, easy-care fabrics. Available in white, blue, light blue, pink, and gray. From SAR 85 with custom logo embroidery.',
});

export const dynamic = 'force-static';

const products = [
  { name: 'Egyptian Cotton Classic', price: 'SAR 145', fabric: '100% Egyptian Cotton, 120s', desc: 'Premium long-staple cotton. Superior softness and breathability. Point collar.' },
  { name: 'Cotton-Poly Easy Care', price: 'SAR 95', fabric: '65/35 Cotton-Polyester', desc: 'Wrinkle-resistant blend. Minimal ironing needed. Ideal for daily corporate wear.' },
  { name: 'Non-Iron Classic', price: 'SAR 120', fabric: '100% Cotton, Non-Iron Treated', desc: 'Straight from dryer to office. No ironing required. Professional appearance all day.' },
  { name: 'Stretch Comfort Fit', price: 'SAR 110', fabric: '97/3 Cotton-Spandex', desc: 'Added stretch for comfort during long office hours. Modern tailored fit.' },
  { name: 'Budget Corporate Shirt', price: 'SAR 85', fabric: '60/40 Poly-Cotton', desc: 'Cost-effective option for large staff programs. Durable and easy-care.' },
  { name: 'Custom Logo Shirt', price: 'SAR 105+', fabric: 'Cotton or Cotton-Poly', desc: 'Embroidered company logo on chest/cuff. MOQ: 25 pieces.' },
];

const faqs = [
  { question: 'What fabric is best for corporate shirts in Saudi Arabia?', answer: 'For Saudi climate: Cotton-polyester blend (65/35) is most popular — wrinkle-resistant and breathable. Pure cotton (Egyptian or Supima) offers superior comfort but requires ironing. Non-iron treated cotton provides the best of both worlds. We recommend cotton-poly for daily wear and pure cotton for executive occasions.' },
  { question: 'Do you offer slim fit and regular fit?', answer: 'Yes. Three fit options: Classic Fit (generous cut for comfort), Tailored Fit (slightly shaped through body), and Slim Fit (modern close-fitting). Available in sizes 14.5-19 collar, 32-37 sleeve. Plus sizes available on request. Free size guide and fit consultation for bulk orders.' },
  { question: 'What is the minimum order for custom logo shirts?', answer: 'Minimum order: 25 shirts for embroidered logos, 50 shirts for custom woven labels. Embroidery positions: left chest, right chest, cuff, or collar back. Logo digitization included free for first orders. Turnaround: 2-3 weeks from approval. Volume pricing for 100+ shirts.' },
];

export default function ClassicCorporateShirtsPage() {
  return (
    <>
      <SEO2026 title="Classic Corporate Shirts" titleAr="قمصان الشركات الكلاسيكية" description="Classic corporate dress shirts." locale="en" pageType="product" mainEntity="Classic Corporate Shirts" primaryImage="/images/products/corporate/corporate-shirts.jpg" primaryImageAlt="Corporate Shirts" faqs={faqs} breadcrumbs={[{ name: 'Shop', url: '/shop' }, { name: 'Corporate', url: '/shop/corporate' }, { name: 'Classic Shirts', url: '/shop/corporate/corporate-shirts/classic' }]} certifications={[]} clientCount={400} yearsInBusiness={20} industry="Corporate" />
      <section className="bg-gradient-to-br from-blue-900 via-slate-800 to-indigo-800 text-white">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }, { label: 'Corporate', href: '/shop/corporate' }, { label: 'Classic Shirts', href: '/shop/corporate/corporate-shirts/classic' }]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Classic Corporate <span className="bg-gradient-to-r from-blue-300 to-slate-300 text-transparent bg-clip-text">Shirts</span></h1>
            <p className="text-xl text-blue-100">Premium dress shirts for Saudi business professionals. From SAR 85 with custom embroidery options.</p>
          </div>
        </Container>
      </section>
      <main className="py-16">
        <Container>
          <SectionHeading subtitle="Professional Business Wear" centered>Our Shirt Collection</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {products.map((p, i) => (<div key={i} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all"><div className="flex justify-between items-start mb-3"><h3 className="text-lg font-bold text-gray-900">{p.name}</h3><span className="text-blue-600 font-bold text-lg">{p.price}</span></div><p className="text-xs text-blue-500 font-medium mb-2">{p.fabric}</p><p className="text-gray-600 text-sm">{p.desc}</p><Link href="/quote?product=corporate-shirts" className="inline-block mt-4 text-blue-600 font-medium text-sm hover:underline">Request Quote →</Link></div>))}
          </div>
          <section className="mt-20 mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>Corporate Shirts FAQ</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {faqs.map((faq, i) => (<div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p></div></div>))}
            </div>
          </section>
        </Container>
      </main>
    </>
  );
}
