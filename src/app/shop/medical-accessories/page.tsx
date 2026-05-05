import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'Medical Accessories Saudi Arabia | Healthcare Supplies - UNEOM',
  titleAr: 'إكسسوارات طبية السعودية | مستلزمات الرعاية الصحية - يونيوم',
  description: 'Buy medical accessories in Saudi Arabia. Surgical caps, shoe covers, medical badges, stethoscope holders, scrub caps, medical bags. Bulk orders for hospitals. Free quote!',
  descriptionAr: 'اشتري إكسسوارات طبية في السعودية. قبعات جراحية، أغطية أحذية، شارات طبية، حاملات سماعات. طلبات بالجملة للمستشفيات. عرض سعر مجاني!',
  keywords: ['medical accessories saudi', 'surgical caps riyadh', 'medical supplies ksa', 'hospital accessories', 'scrub caps saudi', 'medical badges', 'shoe covers bulk'],
  keywordsAr: ['إكسسوارات طبية السعودية', 'قبعات جراحية', 'مستلزمات مستشفيات', 'أغطية أحذية طبية'],
  locale: 'en',
  pageType: 'product',
  path: '/shop/medical-accessories',
  image: '/images/healthcare/scrubs-collections.jpg',
  imageAlt: 'Medical Accessories in Saudi Arabia',
  aiSummary: 'UNEOM medical accessories for Saudi hospitals: surgical caps, scrub caps (printed & solid), disposable shoe covers, medical ID badge holders, stethoscope holders, nurse fob watches, medical bags, compression socks. SASO certified. Bulk orders from 50 pieces. Serving 200+ facilities.',
  aiSummaryAr: 'إكسسوارات طبية من يونيوم للمستشفيات السعودية.',
});

export const dynamic = 'force-static';

const accessoryFAQs = [
  {
    question: 'What medical accessories does UNEOM supply?',
    answer: 'UNEOM supplies: Surgical Caps (disposable & reusable), Scrub Caps (printed, solid colors), Disposable Shoe Covers (non-slip), Medical ID Badge Holders (retractable), Stethoscope Holders, Nurse Fob Watches, Medical Instrument Bags, Compression Socks for long shifts, Surgical Masks (bulk), and Protective Eyewear. All available for bulk hospital orders.',
  },
  {
    question: 'Can you customize scrub caps with hospital logos?',
    answer: 'Yes! We offer custom printed scrub caps with hospital logos, department colors, and staff names. Options include embroidered logos, sublimation printing, and tie-back or bouffant styles. Minimum order is 25 pieces per design.',
  },
  {
    question: 'Do you offer bulk pricing for shoe covers?',
    answer: 'Yes. Disposable shoe covers: 100 pairs from SAR 89, 500 pairs from SAR 349 (30% savings), 1000+ pairs custom pricing. Non-slip options available. Anti-static versions for operating rooms.',
  },
];

const accessories = [
  { name: 'Surgical Caps', icon: '🧢', desc: 'Disposable and reusable surgical caps. Bouffant and tie-back styles. Multiple colors.', price: 'From SAR 15' },
  { name: 'Scrub Caps', icon: '👒', desc: 'Printed and solid color scrub caps. Custom hospital logo printing available.', price: 'From SAR 25' },
  { name: 'Shoe Covers', icon: '👟', desc: 'Non-slip disposable shoe covers for operating rooms and clean areas.', price: 'From SAR 0.89/pair' },
  { name: 'ID Badge Holders', icon: '🪪', desc: 'Retractable medical ID badge holders. Antimicrobial clip options.', price: 'From SAR 12' },
  { name: 'Medical Bags', icon: '👜', desc: 'Professional medical instrument bags for nurses and doctors on rounds.', price: 'From SAR 129' },
  { name: 'Compression Socks', icon: '🧦', desc: 'Medical-grade compression socks for long hospital shifts. Graduated compression.', price: 'From SAR 45' },
];

export default function MedicalAccessoriesPage() {
  return (
    <>
      <SEO2026 title="Medical Accessories Saudi Arabia" titleAr="إكسسوارات طبية السعودية" description="Medical accessories for hospitals in Saudi Arabia." locale="en" pageType="product" mainEntity="Medical Accessories" primaryImage="/images/healthcare/scrubs-collections.jpg" primaryImageAlt="Medical Accessories" faqs={accessoryFAQs} breadcrumbs={[{ name: 'Shop', nameAr: 'المتجر', url: '/shop' }, { name: 'Medical Accessories', nameAr: 'إكسسوارات طبية', url: '/shop/medical-accessories' }]} certifications={['SASO', 'CE', 'ISO 9001:2015']} clientCount={200} yearsInBusiness={20} industry="Healthcare" />

      <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }, { label: 'Medical Accessories', href: '/shop/medical-accessories' }]} className="text-white/80 mb-6 relative z-10 pt-8" />
          <div className="py-16 lg:py-24 relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="text-blue-400">🩺</span>
              <span className="text-sm font-medium">Complete Medical Accessories Range</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Medical <span className="bg-gradient-to-r from-blue-300 to-cyan-300 text-transparent bg-clip-text">Accessories</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed max-w-2xl">Essential medical accessories for hospitals and clinics. Surgical caps, shoe covers, badges, and more. SASO certified with bulk pricing.</p>
            <Button href="/quote?category=medical-accessories" variant="secondary" size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold border-0">Get Free Quote →</Button>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-20">
            <SectionHeading subtitle="Essential Hospital Supplies" centered>Medical Accessories</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {accessories.map((a, i) => (
                <div key={i} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
                  <div className="text-4xl mb-4">{a.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{a.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{a.desc}</p>
                  <div className="flex justify-between items-center pt-4 border-t">
                    <span className="text-lg font-bold text-blue-600">{a.price}</span>
                    <Link href="/quote?category=medical-accessories" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">Get Quote</Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>Medical Accessories FAQ</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {accessoryFAQs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Order Medical Accessories in Bulk</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">Volume discounts for hospitals and clinic chains. SASO certified supplies with express delivery.</p>
            <Link href="/quote?category=medical-accessories" className="inline-flex items-center px-8 py-4 bg-white text-blue-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">Get Free Quote →</Link>
          </section>
        </Container>
      </main>

      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <Link href="/ar/shop/medical-accessories" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg text-sm">🇸🇦 العربية</Link>
        </div>
      </section>
    </>
  );
}
