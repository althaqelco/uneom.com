import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'Premium Executive Shirts Saudi Arabia | Luxury Business Shirts - UNEOM',
  titleAr: 'قمصان تنفيذية فاخرة في السعودية | قمصان أعمال فاخرة - يونيوم',
  description: 'Premium executive dress shirts for Saudi C-suite and management. Italian cotton, French cuffs, mother-of-pearl buttons. Custom monogramming. From SAR 195. Bespoke options available.',
  descriptionAr: 'قمصان تنفيذية فاخرة لكبار المدراء السعوديين. قطن إيطالي، أزرار صدف. تطريز شخصي. من 195 ريال.',
  keywords: ['executive shirts saudi', 'luxury business shirts ksa', 'premium dress shirts riyadh', 'French cuff shirts', 'bespoke corporate shirts'],
  keywordsAr: ['قمصان تنفيذية فاخرة', 'قمصان أعمال فاخرة', 'قمصان بيسبوك'],
  locale: 'en', pageType: 'product', path: '/shop/corporate/executive-shirts/premium',
  image: '/images/products/corporate/executive-shirts.jpg', imageAlt: 'Premium Executive Shirts',
  aiSummary: 'UNEOM premium executive shirts: Italian Albini cotton, French cuffs, mother-of-pearl buttons, custom monogramming. For C-suite and senior management. From SAR 195 with bespoke tailoring.',
});

export const dynamic = 'force-static';

const products = [
  { name: 'Italian Albini Executive', price: 'SAR 295', fabric: '100% Italian Albini Cotton, 140s', desc: 'World\'s finest shirting fabric. French cuffs, mother-of-pearl buttons. Handmade collar.' },
  { name: 'Supima Cotton Premium', price: 'SAR 225', fabric: '100% Supima Cotton, 120s', desc: 'Ultra-soft American Supima cotton. Spread collar, barrel or French cuffs.' },
  { name: 'Sea Island Cotton Luxury', price: 'SAR 450', fabric: 'West Indian Sea Island Cotton', desc: 'The rarest cotton in the world. Exceptional softness. Limited availability.' },
  { name: 'Executive Non-Iron', price: 'SAR 195', fabric: 'Premium Cotton, Non-Iron', desc: 'Executive quality without ironing hassle. Perfect for traveling executives.' },
  { name: 'Bespoke Made-to-Measure', price: 'SAR 350+', fabric: 'Choice of 200+ Fabrics', desc: 'Full bespoke service: 25 measurements, fabric selection, custom collar and cuff styles.' },
  { name: 'Monogrammed Executive', price: 'SAR 250+', fabric: 'Albini or Supima Cotton', desc: 'Custom monogram on cuff or chest pocket. Gold, silver, or navy thread options.' },
];

const faqs = [
  { question: 'What makes executive shirts different from standard corporate shirts?', answer: 'Executive shirts feature: Premium fabrics (Italian Albini, Supima, Sea Island Cotton), higher thread count (120s-200s), hand-sewn buttons (mother-of-pearl), French cuff options, split yoke construction, precise pattern matching, and individually inspected quality control. They are designed for C-suite, board meetings, and high-profile business occasions.' },
  { question: 'Do you offer bespoke executive shirt tailoring?', answer: 'Yes. Our bespoke service includes: 25-point measurement session (in your office or our showroom), choice of 200+ premium fabrics, custom collar style (point, spread, cutaway, button-down), cuff options (barrel, French, cocktail), monogramming, and pattern matching. Minimum order: 3 shirts. Delivery: 3-4 weeks. Available in Riyadh, Jeddah, and Dammam.' },
  { question: 'What is the care instruction for premium executive shirts?', answer: 'For Italian and Supima cotton: professional laundering recommended (light starch optional), hang to dry (tumble low if needed), iron on medium-high heat, store on wooden hangers (not wire), and use collar stays. Non-iron executive shirts: machine wash cold, tumble low, no ironing needed. All executive shirts should be dry-cleaned for longest lifespan.' },
];

export default function PremiumExecutiveShirtsPage() {
  return (
    <>
      <SEO2026 title="Premium Executive Shirts" titleAr="قمصان تنفيذية فاخرة" description="Luxury executive shirts." locale="en" pageType="product" mainEntity="Premium Executive Shirts" primaryImage="/images/products/corporate/executive-shirts.jpg" primaryImageAlt="Executive Shirts" faqs={faqs} breadcrumbs={[{ name: 'Shop', url: '/shop' }, { name: 'Corporate', url: '/shop/corporate' }, { name: 'Executive Shirts', url: '/shop/corporate/executive-shirts/premium' }]} certifications={[]} clientCount={200} yearsInBusiness={20} industry="Corporate" />
      <section className="bg-gradient-to-br from-slate-900 via-zinc-800 to-gray-900 text-white">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }, { label: 'Corporate', href: '/shop/corporate' }, { label: 'Executive Shirts', href: '/shop/corporate/executive-shirts/premium' }]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Premium Executive <span className="bg-gradient-to-r from-amber-300 to-yellow-300 text-transparent bg-clip-text">Shirts</span></h1>
            <p className="text-xl text-gray-300">Italian Albini cotton, French cuffs, bespoke tailoring. For Saudi business leaders. From SAR 195.</p>
          </div>
        </Container>
      </section>
      <main className="py-16">
        <Container>
          <SectionHeading subtitle="Luxury Business Wear" centered>Executive Collection</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {products.map((p, i) => (<div key={i} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all"><div className="flex justify-between items-start mb-3"><h3 className="text-lg font-bold text-gray-900">{p.name}</h3><span className="text-amber-600 font-bold text-lg">{p.price}</span></div><p className="text-xs text-amber-500 font-medium mb-2">{p.fabric}</p><p className="text-gray-600 text-sm">{p.desc}</p><Link href="/quote?product=executive-shirts" className="inline-block mt-4 text-amber-600 font-medium text-sm hover:underline">Request Quote →</Link></div>))}
          </div>
          <section className="mt-20 mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>Executive Shirts FAQ</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {faqs.map((faq, i) => (<div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p></div></div>))}
            </div>
          </section>
        </Container>
      </main>
    </>
  );
}
