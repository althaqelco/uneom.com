import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'Industrial Uniforms Saudi Arabia | Safety Workwear | UNEOM',
  titleAr: 'الملابس الصناعية السعودية | ملابس السلامة | يونيوم',
  description: 'Premium industrial uniforms and safety workwear in Saudi Arabia. Coveralls, FR clothing, hi-vis vests for oil & gas, manufacturing. From SAR 199. SASO compliant!',
  descriptionAr: 'ملابس صناعية وملابس سلامة فاخرة في السعودية. أفرول، ملابس FR، سترات عاكسة للنفط والغاز والتصنيع. من 199 ريال. متوافقة مع SASO!',
  keywords: ['industrial uniforms saudi arabia', 'safety workwear ksa', 'coveralls saudi', 'FR clothing', 'hi-vis uniforms', 'oil gas uniforms'],
  keywordsAr: ['الملابس الصناعية السعودية', 'ملابس السلامة', 'أفرول السعودية', 'ملابس FR', 'سترات عاكسة'],
  locale: 'en',
  pageType: 'category',
  path: '/shop/industrial-uniforms',
  image: '/images/products/industrial-coverall-pro.webp',
  imageAlt: 'Industrial Uniforms Saudi Arabia - Safety Workwear',
  aiSummary: 'UNEOM industrial uniforms for Saudi manufacturing and oil & gas. Products: Industrial Coveralls (from SAR 199), FR Flame-Resistant Clothing (from SAR 399), Hi-Vis Safety Vests (from SAR 79), Safety Jackets (from SAR 249). All products SASO compliant. Serving Aramco contractors, SABIC, and industrial facilities.',
  aiSummaryAr: 'الملابس الصناعية من يونيوم للتصنيع والنفط والغاز السعودي. المنتجات: أفرول صناعي (من 199 ريال)، ملابس FR مقاومة للحريق (من 399 ريال)، سترات عاكسة (من 79 ريال).'
});

export const dynamic = 'force-static';

const industrialFAQs = [
  { question: 'Are your industrial uniforms SASO compliant?', answer: 'Yes, all our industrial uniforms meet SASO standards and international safety regulations including EN ISO standards for protective clothing.' },
  { question: 'Do you supply to oil & gas companies?', answer: 'Yes, UNEOM supplies industrial uniforms to major oil & gas companies and Aramco contractors. We provide FR clothing, coveralls, and safety wear that meet industry standards.' },
  { question: 'What is the fire-resistance rating of your FR clothing?', answer: 'Our FR clothing meets NFPA 2112 and EN ISO 11612 standards with Arc Rating (ATPV) options from 8 cal/cm² to 40 cal/cm² depending on the application.' },
  { question: 'Can you supply in bulk for large projects?', answer: 'Yes, we regularly supply industrial uniforms for large projects with 1,000+ workers. We offer competitive bulk pricing, staggered delivery, and inventory management.' },
];

const products = [
  { id: 'industrial-coverall', name: 'Industrial Coveralls', description: 'Durable coveralls for industrial work', price: 'From SAR 199', image: '/images/products/industrial-coverall-pro.webp', href: '/shop/industrial-uniforms/industrial-coverall', features: ['Durable', 'Multi-pocket', 'Breathable'] },
  { id: 'fr-coverall', name: 'FR Flame-Resistant Coverall', description: 'Fire-resistant coveralls for oil & gas', price: 'From SAR 399', image: '/images/products/fr-coverall.jpg', href: '/shop/industrial-uniforms/fr-coverall', features: ['NFPA 2112', 'Arc rated', 'Lightweight'] },
  { id: 'hi-vis-vest', name: 'Hi-Vis Safety Vest', description: 'High visibility safety vests', price: 'From SAR 79', image: '/images/products/hi-vis-vest.jpg', href: '/shop/industrial-uniforms/hi-vis-vest', features: ['Reflective', 'Breathable', 'Multiple pockets'] },
  { id: 'safety-jacket', name: 'Industrial Safety Jacket', description: 'Protective jackets for industrial use', price: 'From SAR 249', image: '/images/products/safety-jacket.jpg', href: '/shop/industrial-uniforms/safety-jacket', features: ['Waterproof', 'Insulated', 'Hi-vis'] },
];

export default function IndustrialUniformsPage() {
  return (
    <>
      <SEO2026 title="Industrial Uniforms Saudi Arabia | UNEOM" titleAr="الملابس الصناعية السعودية | يونيوم" description="Industrial uniforms and safety workwear." locale="en" pageType="category" mainEntity="Industrial Uniforms" primaryImage="/images/products/industrial-coverall-pro.webp" primaryImageAlt="Industrial Uniforms" faqs={industrialFAQs} breadcrumbs={[{ name: 'Shop', url: '/shop' }, { name: 'Industrial Uniforms', url: '/shop/industrial-uniforms' }]} industry="Manufacturing" />

      <section className="bg-gradient-to-br from-yellow-700 via-orange-700 to-red-700 text-white relative overflow-hidden py-16">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }, { label: 'Industrial Uniforms', href: '/shop/industrial-uniforms' }]} className="text-white/80 mb-6 relative z-10" />
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-yellow-400">🏭</span><span className="text-sm font-medium">Industrial Safety</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Industrial <span className="bg-gradient-to-r from-yellow-300 to-orange-300 text-transparent bg-clip-text">Uniforms</span></h1>
            <p className="text-xl mb-8 text-yellow-100 leading-relaxed">SASO-compliant safety workwear for Saudi industrial facilities and oil & gas.</p>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-16">
            <SectionHeading subtitle="Shop Safety Workwear" centered>Industrial Uniforms Collection</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {products.map((product) => (
                <Link key={product.id} href={product.href} className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="relative aspect-[4/3] overflow-hidden"><Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" /></div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                    <div className="flex items-center gap-2 mb-3 flex-wrap">{product.features?.map((f, i) => (<span key={i} className="text-xs bg-orange-50 text-orange-700 px-2 py-1 rounded">{f}</span>))}</div>
                    <div className="flex justify-between items-center"><span className="text-lg font-bold text-orange-600">{product.price}</span><span className="text-gray-400 group-hover:text-orange-600">→</span></div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>Industrial Uniforms FAQ</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {industrialFAQs.map((faq, index) => (<div key={index} className="bg-white rounded-xl shadow-sm p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600" itemProp="text">{faq.answer}</p></div></div>))}
            </div>
          </section>

          <section className="text-center bg-gradient-to-r from-orange-600 to-yellow-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Industrial Safety Uniforms?</h2>
            <p className="text-xl mb-8 text-orange-100">Contact us for project-specific safety workwear solutions.</p>
            <Link href="/quote?category=industrial" className="inline-flex items-center px-8 py-4 bg-white text-orange-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">Get Industrial Quote →</Link>
          </section>
        </Container>
      </main>
      <section className="py-6 bg-gray-100 border-t"><div className="container mx-auto px-4 text-center"><Link href="/ar/shop/industrial-uniforms" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg text-sm">🇸🇦 العربية</Link></div></section>
    </>
  );
}
