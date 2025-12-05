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
  title: 'Security Uniforms Saudi Arabia | Guard Attire | UNEOM',
  titleAr: 'أزياء الأمن السعودية | زي الحراسة | يونيوم',
  description: 'Premium security uniforms in Saudi Arabia. Security guard uniforms, tactical wear, patrol jackets for security companies. From SAR 199. Custom branding!',
  descriptionAr: 'أزياء أمن فاخرة في السعودية. زي حراسة أمنية، ملابس تكتيكية، جاكيت دوريات لشركات الأمن. من 199 ريال. علامة تجارية مخصصة!',
  keywords: ['security uniforms saudi arabia', 'guard uniforms ksa', 'tactical wear', 'patrol jackets', 'security company uniforms'],
  keywordsAr: ['أزياء الأمن السعودية', 'زي الحراسة', 'ملابس تكتيكية', 'جاكيت دوريات', 'زي شركات الأمن'],
  locale: 'en',
  pageType: 'category',
  path: '/shop/security-uniforms',
  image: '/images/products/security/security-patrol-jacket-main.jpg',
  imageAlt: 'Security Uniforms Saudi Arabia',
  aiSummary: 'UNEOM security uniforms for Saudi security companies. Products: Security Officer Uniforms (from SAR 199), Tactical Security Vests (from SAR 149), Patrol Jackets (from SAR 229), Security Accessories (from SAR 49). Serving private security companies, mall security, hotel security, and event security.',
  aiSummaryAr: 'أزياء الأمن من يونيوم لشركات الأمن السعودية. المنتجات: زي ضابط أمن (من 199 ريال)، سترات أمنية تكتيكية (من 149 ريال)، جاكيت دوريات (من 229 ريال).'
});

export const dynamic = 'force-static';

const securityFAQs = [
  { question: 'Do you supply to security companies?', answer: 'Yes, UNEOM supplies security uniforms to private security companies, government facilities, malls, hotels, and corporate security teams across Saudi Arabia.' },
  { question: 'Can you add security company logos?', answer: 'Yes, we provide professional embroidery and badge attachment for security company logos, rank insignia, and name badges.' },
  { question: 'Do you offer tactical accessories?', answer: 'Yes, we supply security accessories including utility belts, radio pouches, ID holders, and tactical boots to complement our uniform range.' },
  { question: 'What is the durability of security uniforms?', answer: 'Our security uniforms are made from heavy-duty fabrics designed for daily wear and harsh conditions. They maintain appearance through 100+ wash cycles.' },
];

const products = [
  { id: 'security-officer-uniform', name: 'Security Officer Uniform', description: 'Professional uniform for security officers', price: 'From SAR 199', image: '/images/products/security/security-patrol-jacket-main.jpg', href: '/shop/security-uniforms/security-officer-uniform', features: ['Professional', 'Durable', 'Comfortable'] },
  { id: 'tactical-security-vest', name: 'Tactical Security Vest', description: 'Utility vest for security personnel', price: 'From SAR 149', image: '/images/products/tactical-vest.jpg', href: '/shop/security-uniforms/tactical-security-vest', features: ['Multi-pocket', 'Durable', 'Adjustable'] },
  { id: 'security-patrol-jacket', name: 'Security Patrol Jacket', description: 'Weather-resistant patrol jacket', price: 'From SAR 229', image: '/images/products/security-jacket.jpg', href: '/shop/security-uniforms/security-patrol-jacket', features: ['Waterproof', 'Reflective', 'Warm'] },
  { id: 'security-accessories', name: 'Security Accessories Kit', description: 'Complete security accessories package', price: 'From SAR 49', image: '/images/products/security-accessories.jpg', href: '/shop/security-uniforms/security-accessories-kit', features: ['Utility belt', 'ID holder', 'Radio pouch'] },
];

export default function SecurityUniformsPage() {
  return (
    <>
      <SEO2026 title="Security Uniforms Saudi Arabia | UNEOM" titleAr="أزياء الأمن السعودية | يونيوم" description="Security uniforms for Saudi Arabia." locale="en" pageType="category" mainEntity="Security Uniforms" primaryImage="/images/products/security/security-patrol-jacket-main.jpg" primaryImageAlt="Security Uniforms" faqs={securityFAQs} breadcrumbs={[{ name: 'Shop', url: '/shop' }, { name: 'Security Uniforms', url: '/shop/security-uniforms' }]} industry="Security" />

      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden py-16">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }, { label: 'Security Uniforms', href: '/shop/security-uniforms' }]} className="text-white/80 mb-6 relative z-10" />
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-gray-400">🛡️</span><span className="text-sm font-medium">Security Industry</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Security <span className="bg-gradient-to-r from-gray-300 to-white text-transparent bg-clip-text">Uniforms</span></h1>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">Professional security uniforms and tactical wear for Saudi security companies.</p>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-16">
            <SectionHeading subtitle="Shop Security Attire" centered>Security Uniforms Collection</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {products.map((product) => (
                <Link key={product.id} href={product.href} className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="relative aspect-[4/3] overflow-hidden"><Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" /></div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                    <div className="flex items-center gap-2 mb-3 flex-wrap">{product.features?.map((f, i) => (<span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{f}</span>))}</div>
                    <div className="flex justify-between items-center"><span className="text-lg font-bold text-gray-800">{product.price}</span><span className="text-gray-400 group-hover:text-gray-600">→</span></div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>Security Uniforms FAQ</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {securityFAQs.map((faq, index) => (<div key={index} className="bg-white rounded-xl shadow-sm p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600" itemProp="text">{faq.answer}</p></div></div>))}
            </div>
          </section>

          <section className="text-center bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Security Uniform Program?</h2>
            <p className="text-xl mb-8 text-gray-300">Contact us for security company uniform solutions with custom branding.</p>
            <Link href="/quote?category=security" className="inline-flex items-center px-8 py-4 bg-white text-gray-800 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">Get Security Quote →</Link>
          </section>
        </Container>
      </main>
      <section className="py-6 bg-gray-100 border-t"><div className="container mx-auto px-4 text-center"><Link href="/ar/shop/security-uniforms" className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-lg text-sm">🇸🇦 العربية</Link></div></section>
    </>
  );
}
