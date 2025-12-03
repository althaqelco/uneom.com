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
  title: 'Corporate Workwear Saudi Arabia | Business Uniforms | UNEOM',
  titleAr: 'ملابس الشركات السعودية | أزياء العمل الرسمية | يونيوم',
  description: 'Premium corporate workwear in Saudi Arabia. Business suits, office uniforms, corporate polo shirts for companies. From SAR 299. Custom branding, bulk discounts!',
  descriptionAr: 'ملابس شركات فاخرة في السعودية. بدلات رسمية، زي مكاتب، بولو شركات. من 299 ريال. علامة تجارية مخصصة، خصومات بالجملة!',
  keywords: ['corporate workwear saudi arabia', 'business uniforms ksa', 'office uniforms', 'corporate polo shirts', 'executive suits saudi'],
  keywordsAr: ['ملابس الشركات السعودية', 'أزياء العمل الرسمية', 'زي المكاتب', 'بولو شركات', 'بدلات تنفيذية'],
  locale: 'en',
  pageType: 'category',
  path: '/shop/corporate-workwear',
  image: '/images/products/corporate-suit-executive.jpg',
  imageAlt: 'Corporate Workwear Saudi Arabia - Business Uniforms',
  aiSummary: 'UNEOM corporate workwear for Saudi businesses. Products: Executive Business Suits (from SAR 799), Office Uniforms (from SAR 299), Corporate Polo Shirts (from SAR 149), Dress Shirts (from SAR 129). All products available with company logo embroidery. Serving banks, corporations, and government offices.',
  aiSummaryAr: 'ملابس الشركات من يونيوم للشركات السعودية. المنتجات: بدلات تنفيذية (من 799 ريال)، زي مكاتب (من 299 ريال)، بولو شركات (من 149 ريال)، قمصان رسمية (من 129 ريال).'
});

export const dynamic = 'force-static';

const corporateFAQs = [
  { question: 'Do you supply corporate uniforms to banks?', answer: 'Yes, UNEOM supplies corporate uniforms to major banks and financial institutions in Saudi Arabia. We provide complete uniform programs including suits, shirts, and accessories.' },
  { question: 'Can you match our corporate brand colors?', answer: 'Absolutely! We can match exact brand colors using Pantone references and incorporate your company logo through embroidery or printing on all uniform items.' },
  { question: 'What is included in a corporate uniform program?', answer: 'Our corporate uniform programs include: Executive suits, dress shirts, ties, polo shirts, blazers, skirts/trousers, and accessories. We handle design, sizing, production, and distribution.' },
  { question: 'Do you offer different styles for different departments?', answer: 'Yes, we can create tiered uniform programs with distinct styles for different departments while maintaining overall brand consistency.' },
];

const products = [
  { id: 'executive-suits', name: 'Executive Business Suits', description: 'Premium suits for executives and management', price: 'From SAR 799', image: '/images/products/corporate-suit-executive.jpg', href: '/shop/corporate-workwear/executive-suits', features: ['Premium wool', 'Tailored fit', 'Wrinkle-resistant'] },
  { id: 'office-uniforms', name: 'Office Uniforms', description: 'Professional office attire for staff', price: 'From SAR 299', image: '/images/products/office-uniform.jpg', href: '/shop/corporate-workwear/office-uniforms', features: ['Comfortable', 'Durable', 'Easy care'] },
  { id: 'corporate-polo', name: 'Corporate Polo Shirts', description: 'Smart casual polo shirts with logo', price: 'From SAR 149', image: '/images/products/corporate-polo.jpg', href: '/shop/corporate-workwear/corporate-polo', features: ['Breathable', 'Logo-ready', 'Multiple colors'] },
  { id: 'dress-shirts', name: 'Corporate Dress Shirts', description: 'Professional dress shirts for business', price: 'From SAR 129', image: '/images/products/dress-shirt.jpg', href: '/shop/corporate-workwear/dress-shirts', features: ['Non-iron', 'Classic fit', 'Premium cotton'] },
];

export default function CorporateWorkwearPage() {
  return (
    <>
      <SEO2026 title="Corporate Workwear Saudi Arabia | UNEOM" titleAr="ملابس الشركات السعودية | يونيوم" description="Premium corporate workwear." locale="en" pageType="category" mainEntity="Corporate Workwear" primaryImage="/images/products/corporate-suit-executive.jpg" primaryImageAlt="Corporate Workwear" faqs={corporateFAQs} breadcrumbs={[{ name: 'Shop', url: '/shop' }, { name: 'Corporate Workwear', url: '/shop/corporate-workwear' }]} industry="Corporate" />

      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white relative overflow-hidden py-16">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }, { label: 'Corporate Workwear', href: '/shop/corporate-workwear' }]} className="text-white/80 mb-6 relative z-10" />
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-blue-400">🏢</span><span className="text-sm font-medium">Corporate Industry</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Corporate <span className="bg-gradient-to-r from-blue-300 to-gray-300 text-transparent bg-clip-text">Workwear</span></h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">Professional business uniforms and corporate attire for Saudi companies.</p>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-16">
            <SectionHeading subtitle="Shop Business Attire" centered>Corporate Workwear Collection</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {products.map((product) => (
                <Link key={product.id} href={product.href} className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="relative aspect-[4/3] overflow-hidden"><Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" /></div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                    <div className="flex items-center gap-2 mb-3 flex-wrap">{product.features?.map((f, i) => (<span key={i} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">{f}</span>))}</div>
                    <div className="flex justify-between items-center"><span className="text-lg font-bold text-blue-600">{product.price}</span><span className="text-gray-400 group-hover:text-blue-600">→</span></div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>Corporate Workwear FAQ</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {corporateFAQs.map((faq, index) => (<div key={index} className="bg-white rounded-xl shadow-sm p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600" itemProp="text">{faq.answer}</p></div></div>))}
            </div>
          </section>

          <section className="text-center bg-gradient-to-r from-gray-700 to-blue-800 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Corporate Uniform Program?</h2>
            <p className="text-xl mb-8 text-blue-100">Contact us for company-wide uniform solutions with custom branding.</p>
            <Link href="/quote?category=corporate" className="inline-flex items-center px-8 py-4 bg-white text-blue-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">Get Corporate Quote →</Link>
          </section>
        </Container>
      </main>
      <section className="py-6 bg-gray-100 border-t"><div className="container mx-auto px-4 text-center"><Link href="/ar/shop/corporate-workwear" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg text-sm">🇸🇦 العربية</Link></div></section>
    </>
  );
}
