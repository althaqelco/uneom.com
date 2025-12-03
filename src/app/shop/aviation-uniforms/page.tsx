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
  title: 'Aviation Uniforms Saudi Arabia | Pilot & Cabin Crew Attire | UNEOM',
  titleAr: 'أزياء الطيران السعودية | زي الطيارين وطاقم الطائرة | يونيوم',
  description: 'Premium aviation uniforms in Saudi Arabia. Pilot uniforms, cabin crew attire, ground staff uniforms for airlines. From SAR 899. Custom designs, fast delivery!',
  descriptionAr: 'أزياء طيران فاخرة في السعودية. زي الطيارين، ملابس طاقم الطائرة، زي موظفي الأرض للخطوط الجوية. من 899 ريال. تصاميم مخصصة، توصيل سريع!',
  keywords: ['aviation uniforms saudi arabia', 'pilot uniforms ksa', 'cabin crew attire', 'airline uniforms', 'flight attendant uniforms', 'ground crew uniforms'],
  keywordsAr: ['أزياء الطيران السعودية', 'زي الطيارين', 'ملابس طاقم الطائرة', 'زي الخطوط الجوية', 'زي المضيفات'],
  locale: 'en',
  pageType: 'category',
  path: '/shop/aviation-uniforms',
  image: '/images/airline-1.jpg',
  imageAlt: 'Aviation Uniforms Saudi Arabia - Pilot and Cabin Crew',
  aiSummary: 'UNEOM aviation uniforms for Saudi airlines. Products: Pilot Uniforms (from SAR 1,299) - professional, epaulettes included. Cabin Crew Attire (from SAR 899) - elegant, comfortable for long flights. Ground Staff Uniforms (from SAR 599) - durable, branded. All uniforms can be customized with airline logos.',
  aiSummaryAr: 'أزياء الطيران من يونيوم للخطوط الجوية السعودية. المنتجات: زي الطيارين (من 1,299 ريال) - احترافي، شارات الكتف مشمولة. ملابس طاقم الطائرة (من 899 ريال) - أنيقة، مريحة للرحلات الطويلة. زي موظفي الأرض (من 599 ريال) - متينة، ذات علامة تجارية.'
});

export const dynamic = 'force-static';

const aviationFAQs = [
  { question: 'Do you supply aviation uniforms to Saudi airlines?', answer: 'Yes, UNEOM supplies aviation uniforms to multiple Saudi airlines and aviation academies. We provide complete uniform solutions including pilot uniforms, cabin crew attire, and ground staff uniforms.' },
  { question: 'Can you customize aviation uniforms with our airline logo?', answer: 'Yes, we offer full customization including embroidered airline logos, custom epaulettes, wings, and name badges. We match exact brand colors using Pantone references.' },
  { question: 'What is the minimum order for aviation uniforms?', answer: 'Minimum order for standard aviation uniforms is 25 pieces per style. For custom designed uniforms, minimum is 50 pieces. Sample orders are available for approval.' },
  { question: 'Do aviation uniforms meet international standards?', answer: 'Yes, all our aviation uniforms comply with international aviation authority standards and are made from flame-retardant, antistatic materials as required.' },
];

const products = [
  { id: 'pilot-uniform', name: 'Pilot Uniform Set', description: 'Complete pilot uniform with jacket, trousers, and epaulettes', price: 'From SAR 1,299', image: '/images/products/pilot-uniform.jpg', href: '/shop/aviation-uniforms/pilot-uniform', features: ['4-stripe captain', 'Flame-retardant', 'Premium wool blend'] },
  { id: 'cabin-crew-female', name: 'Female Cabin Crew Uniform', description: 'Elegant cabin crew attire for female flight attendants', price: 'From SAR 899', image: '/images/products/cabin-crew-female.jpg', href: '/shop/aviation-uniforms/cabin-crew-female', features: ['Wrinkle-resistant', 'Elegant design', 'Comfortable fit'] },
  { id: 'cabin-crew-male', name: 'Male Cabin Crew Uniform', description: 'Professional cabin crew attire for male flight attendants', price: 'From SAR 899', image: '/images/products/cabin-crew-male.jpg', href: '/shop/aviation-uniforms/cabin-crew-male', features: ['Professional look', 'Durable fabric', 'Easy care'] },
  { id: 'ground-crew', name: 'Ground Crew Uniform', description: 'Durable uniforms for airport ground staff', price: 'From SAR 599', image: '/images/products/ground-crew.jpg', href: '/shop/aviation-uniforms/ground-crew', features: ['Hi-vis options', 'Weather-resistant', 'Reflective strips'] },
];

export default function AviationUniformsPage() {
  return (
    <>
      <SEO2026 title="Aviation Uniforms Saudi Arabia | UNEOM" titleAr="أزياء الطيران السعودية | يونيوم" description="Premium aviation uniforms." descriptionAr="أزياء طيران فاخرة." locale="en" pageType="category" mainEntity="Aviation Uniforms" primaryImage="/images/airline-1.jpg" primaryImageAlt="Aviation Uniforms" faqs={aviationFAQs} breadcrumbs={[{ name: 'Shop', url: '/shop' }, { name: 'Aviation Uniforms', url: '/shop/aviation-uniforms' }]} industry="Aviation" />

      <section className="bg-gradient-to-br from-blue-900 via-sky-800 to-indigo-800 text-white relative overflow-hidden py-16">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }, { label: 'Aviation Uniforms', href: '/shop/aviation-uniforms' }]} className="text-white/80 mb-6 relative z-10" />
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-sky-400">✈️</span><span className="text-sm font-medium">Aviation Industry</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Aviation <span className="bg-gradient-to-r from-sky-300 to-blue-300 text-transparent bg-clip-text">Uniforms</span></h1>
            <p className="text-xl mb-8 text-sky-100 leading-relaxed">Premium aviation uniforms for Saudi airlines. Pilot, cabin crew, and ground staff attire with custom branding.</p>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-16">
            <SectionHeading subtitle="Shop Aviation Attire" centered>Aviation Uniforms Collection</SectionHeading>
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
            <SectionHeading subtitle="Common Questions" centered>Aviation Uniforms FAQ</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {aviationFAQs.map((faq, index) => (<div key={index} className="bg-white rounded-xl shadow-sm p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600" itemProp="text">{faq.answer}</p></div></div>))}
            </div>
          </section>

          <section className="text-center bg-gradient-to-r from-blue-600 to-sky-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Custom Aviation Uniforms?</h2>
            <p className="text-xl mb-8 text-blue-100">Contact us for airline-specific uniform solutions with custom branding.</p>
            <Link href="/quote?category=aviation" className="inline-flex items-center px-8 py-4 bg-white text-blue-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">Get Airline Quote →</Link>
          </section>
        </Container>
      </main>
      <section className="py-6 bg-gray-100 border-t"><div className="container mx-auto px-4 text-center"><Link href="/ar/shop/aviation-uniforms" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg text-sm">🇸🇦 العربية</Link></div></section>
    </>
  );
}
