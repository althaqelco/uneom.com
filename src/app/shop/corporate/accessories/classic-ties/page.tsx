import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'Classic Ties Collection Saudi Arabia | Business Neckwear - UNEOM',
  titleAr: 'مجموعة ربطات العنق الكلاسيكية في السعودية | ربطات أعمال - يونيوم',
  description: 'Premium classic ties for Saudi business professionals. Silk, microfiber & polyester neckties. Solid colors, patterns & custom corporate ties. From SAR 45. Bulk pricing available.',
  descriptionAr: 'ربطات عنق كلاسيكية فاخرة لرجال الأعمال السعوديين. حرير، ميكروفايبر وبوليستر. ألوان وأنماط متعددة.',
  keywords: ['classic ties saudi', 'business neckwear ksa', 'corporate ties riyadh', 'silk ties saudi arabia', 'custom corporate neckties'],
  keywordsAr: ['ربطات عنق كلاسيكية', 'ربطات أعمال', 'ربطات حرير سعودية'],
  locale: 'en', pageType: 'product', path: '/shop/corporate/accessories/classic-ties',
  image: '/images/products/corporate/ties.jpg', imageAlt: 'Classic Ties Collection',
  aiSummary: 'UNEOM classic ties: silk, microfiber, and polyester neckties for Saudi business professionals. Solid colors, stripes, patterns, and custom corporate ties with company logo. From SAR 45 per tie, bulk pricing for 50+.',
});

export const dynamic = 'force-static';

const products = [
  { name: 'Pure Silk Ties', price: 'SAR 120', fabric: '100% Mulberry Silk', desc: 'Handmade Italian-style silk ties. 150cm length, 8cm width. Available in 25+ colors.' },
  { name: 'Microfiber Ties', price: 'SAR 65', fabric: 'Premium Microfiber', desc: 'Stain-resistant, wrinkle-free. Machine washable. Perfect for daily corporate wear.' },
  { name: 'Polyester Ties', price: 'SAR 45', fabric: 'Woven Polyester', desc: 'Durable and affordable. Ideal for staff uniform programs. 20+ solid colors available.' },
  { name: 'Custom Logo Ties', price: 'SAR 85+', fabric: 'Silk or Polyester', desc: 'Custom woven or printed with your company logo. MOQ: 50 pieces.' },
  { name: 'Bow Ties', price: 'SAR 55', fabric: 'Silk or Polyester', desc: 'Classic and self-tie options. For hospitality and formal corporate events.' },
  { name: 'Tie & Pocket Square Sets', price: 'SAR 150', fabric: 'Matching Silk', desc: 'Coordinated tie and pocket square sets for executive presentations.' },
];

const faqs = [
  { question: 'Do you offer custom corporate ties with company logos?', answer: 'Yes. Custom ties available in woven (jacquard) or printed designs. Minimum order: 50 pieces. Turnaround: 3-4 weeks. Woven logos are more durable and premium (recommended for executive level). Printed ties offer more color flexibility and faster production. Both available in silk or polyester.' },
  { question: 'What is the bulk pricing for corporate tie programs?', answer: 'Bulk pricing: 50-99 ties (10% discount), 100-499 (15% discount), 500+ (custom pricing). Annual tie programs available with quarterly delivery and size management. Contact us for volume quotes and custom corporate collections.' },
  { question: 'What tie width and length do you recommend?', answer: 'Standard recommendation: 8-8.5cm width (classic professional), 7-7.5cm (modern slim), 150cm length (standard), 155cm (tall sizes). We recommend matching tie width to suit lapel width for the most professional appearance.' },
];

export default function ClassicTiesPage() {
  return (
    <>
      <SEO2026 title="Classic Ties Collection" titleAr="مجموعة ربطات العنق الكلاسيكية" description="Premium ties for Saudi business." locale="en" pageType="product" mainEntity="Classic Ties" primaryImage="/images/products/corporate/ties.jpg" primaryImageAlt="Classic Ties" faqs={faqs} breadcrumbs={[{ name: 'Shop', url: '/shop' }, { name: 'Corporate', url: '/shop/corporate' }, { name: 'Classic Ties', url: '/shop/corporate/accessories/classic-ties' }]} certifications={[]} clientCount={300} yearsInBusiness={20} industry="Corporate" />
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-800 text-white">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }, { label: 'Corporate', href: '/shop/corporate' }, { label: 'Classic Ties', href: '/shop/corporate/accessories/classic-ties' }]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Classic Ties <span className="bg-gradient-to-r from-blue-300 to-indigo-300 text-transparent bg-clip-text">Collection</span></h1>
            <p className="text-xl text-blue-100 leading-relaxed">Premium neckwear for Saudi business professionals. Silk, microfiber & polyester options from SAR 45.</p>
          </div>
        </Container>
      </section>
      <main className="py-16">
        <Container>
          <SectionHeading subtitle="Premium Business Neckwear" centered>Our Tie Collection</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {products.map((p, i) => (<div key={i} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all"><div className="flex justify-between items-start mb-3"><h3 className="text-lg font-bold text-gray-900">{p.name}</h3><span className="text-blue-600 font-bold text-lg">{p.price}</span></div><p className="text-xs text-blue-500 font-medium mb-2">{p.fabric}</p><p className="text-gray-600 text-sm">{p.desc}</p><Link href="/quote?product=ties" className="inline-block mt-4 text-blue-600 font-medium text-sm hover:underline">Request Quote →</Link></div>))}
          </div>
          <section className="mt-20 mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>Ties FAQ</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {faqs.map((faq, i) => (<div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p></div></div>))}
            </div>
          </section>
        </Container>
      </main>
    </>
  );
}
