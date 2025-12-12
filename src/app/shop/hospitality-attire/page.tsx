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
  title: 'Hospitality Uniforms Saudi Arabia | Hotel & Restaurant Attire | UNEOM',
  titleAr: 'أزياء الضيافة السعودية | زي الفنادق والمطاعم | يونيوم',
  description: 'Premium hospitality uniforms in Saudi Arabia. Hotel staff, restaurant, chef uniforms for hotels and hospitality industry. From SAR 249. Custom branding, fast delivery!',
  descriptionAr: 'أزياء ضيافة فاخرة في السعودية. زي موظفي الفنادق، المطاعم، الطهاة. من 249 ريال. علامة تجارية مخصصة، توصيل سريع!',
  keywords: ['hospitality uniforms saudi arabia', 'hotel uniforms ksa', 'restaurant uniforms', 'chef uniforms saudi', 'waiter uniforms', 'concierge attire'],
  keywordsAr: ['أزياء الضيافة السعودية', 'زي الفنادق', 'زي المطاعم', 'زي الطهاة', 'زي النادل'],
  locale: 'en',
  pageType: 'category',
  path: '/shop/hospitality-attire',
  image: '/images/hospitality/hospitality_uniform_concierge.jpg',
  imageAlt: 'Hospitality Uniforms Saudi Arabia - Hotel and Restaurant Staff',
  aiSummary: 'UNEOM hospitality uniforms for Saudi hotels and restaurants. Products: Luxury Hotel Uniforms (from SAR 399), Restaurant Staff Uniforms (from SAR 249), Chef Uniforms (from SAR 299), Concierge Attire (from SAR 349). Serving 5-star hotels, luxury resorts, and fine dining restaurants.',
  aiSummaryAr: 'أزياء الضيافة من يونيوم للفنادق والمطاعم السعودية. المنتجات: زي الفنادق الفاخرة (من 399 ريال)، زي موظفي المطاعم (من 249 ريال)، زي الطهاة (من 299 ريال)، زي الكونسيرج (من 349 ريال).'
});

export const dynamic = 'force-static';

const hospitalityFAQs = [
  { question: 'Do you supply uniforms to 5-star hotels?', answer: 'Yes, UNEOM supplies hospitality uniforms to numerous 5-star hotels and luxury resorts across Saudi Arabia. We provide complete uniform programs from front desk to housekeeping.' },
  { question: 'Can you match our hotel brand colors?', answer: 'Absolutely! We can match exact brand colors using Pantone references and incorporate your hotel logo through embroidery or printing.' },
  { question: 'What is included in a hotel uniform program?', answer: 'Our hotel uniform programs cover all staff: Front desk, concierge, bellhops, housekeeping, F&B service, kitchen staff, spa, and management. We provide design, production, and ongoing supply.' },
  { question: 'How quickly can you deliver for a new hotel opening?', answer: 'For new hotel openings, we recommend 8-12 weeks lead time. Rush orders of 4-6 weeks are available for priority projects.' },
];

const products = [
  { id: 'luxury-hotel-uniform', name: 'Luxury Hotel Uniform', description: 'Premium uniforms for 5-star hotels', price: 'From SAR 399', image: '/images/products/hotel-uniform.jpg', href: '/shop/hospitality-attire/luxury-hotel-uniform', features: ['Elegant design', 'Stain-resistant', 'Breathable'] },
  { id: 'restaurant-staff-uniform', name: 'Restaurant Staff Uniform', description: 'Professional waiter and service attire', price: 'From SAR 249', image: '/images/hospitality/hospitality_uniform_resturant.jpg', href: '/shop/hospitality-attire/restaurant-staff-uniform', features: ['Easy care', 'Durable', 'Comfortable'] },
  { id: 'chef-uniform', name: 'Chef Uniform', description: 'Professional chef coats and kitchen attire', price: 'From SAR 299', image: '/images/hospitality/hospitality_uniform_chef.jpg', href: '/shop/hospitality-attire/chef-uniform', features: ['Heat-resistant', 'Stain-resistant', 'Breathable'] },
  { id: 'concierge-attire', name: 'Concierge Attire', description: 'Sophisticated uniforms for guest services', price: 'From SAR 349', image: '/images/hospitality/hospitality_uniform_concierge.jpg', href: '/shop/hospitality-attire/concierge-attire', features: ['Premium fabric', 'Tailored fit', 'Professional'] },
  { id: 'housekeeping-uniform', name: 'Housekeeping Uniform', description: 'Practical uniforms for housekeeping staff', price: 'From SAR 199', image: '/images/products/housekeeping-uniform.jpg', href: '/shop/hospitality-attire/housekeeping-uniform', features: ['Durable', 'Easy wash', 'Comfortable'] },
  { id: 'spa-uniform', name: 'Spa & Wellness Uniform', description: 'Relaxed uniforms for spa therapists', price: 'From SAR 229', image: '/images/products/spa-uniform.jpg', href: '/shop/hospitality-attire/spa-uniform', features: ['Soft fabric', 'Relaxed fit', 'Professional'] },
];

export default function HospitalityAttirePage() {
  return (
    <>
      <SEO2026 title="Hospitality Uniforms Saudi Arabia | UNEOM" titleAr="أزياء الضيافة السعودية | يونيوم" description="Premium hospitality uniforms." descriptionAr="أزياء ضيافة فاخرة." locale="en" pageType="category" mainEntity="Hospitality Uniforms" primaryImage="/images/hospitality/hospitality_uniform_concierge.jpg" primaryImageAlt="Hospitality Uniforms" faqs={hospitalityFAQs} breadcrumbs={[{ name: 'Shop', url: '/shop' }, { name: 'Hospitality Attire', url: '/shop/hospitality-attire' }]} industry="Hospitality" />

      <section className="bg-gradient-to-br from-amber-900 via-orange-800 to-red-800 text-white relative overflow-hidden py-16">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }, { label: 'Hospitality Attire', href: '/shop/hospitality-attire' }]} className="text-white/80 mb-6 relative z-10" />
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-amber-400">🏨</span><span className="text-sm font-medium">Hospitality Industry</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Hospitality <span className="bg-gradient-to-r from-amber-300 to-orange-300 text-transparent bg-clip-text">Uniforms</span></h1>
            <p className="text-xl mb-8 text-amber-100 leading-relaxed">Premium uniforms for hotels, restaurants, and hospitality services in Saudi Arabia.</p>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-16">
            <SectionHeading subtitle="Shop Hospitality Attire" centered>Hospitality Uniforms Collection</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {products.map((product) => (
                <Link key={product.id} href={product.href} className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="relative aspect-[4/3] overflow-hidden"><Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" /></div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                    <div className="flex items-center gap-2 mb-3 flex-wrap">{product.features?.map((f, i) => (<span key={i} className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded">{f}</span>))}</div>
                    <div className="flex justify-between items-center"><span className="text-lg font-bold text-amber-600">{product.price}</span><span className="text-gray-400 group-hover:text-amber-600">→</span></div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>Hospitality Uniforms FAQ</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {hospitalityFAQs.map((faq, index) => (<div key={index} className="bg-white rounded-xl shadow-sm p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600" itemProp="text">{faq.answer}</p></div></div>))}
            </div>
          </section>

          <section className="text-center bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Custom Hotel Uniforms?</h2>
            <p className="text-xl mb-8 text-amber-100">Contact us for hotel-specific uniform programs with custom branding.</p>
            <Link href="/quote?category=hospitality" className="inline-flex items-center px-8 py-4 bg-white text-amber-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">Get Hotel Quote →</Link>
          </section>
        </Container>
      </main>
      <section className="py-6 bg-gray-100 border-t"><div className="container mx-auto px-4 text-center"><Link href="/ar/shop/hospitality-attire" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded-lg text-sm">🇸🇦 العربية</Link></div></section>
    </>
  );
}
