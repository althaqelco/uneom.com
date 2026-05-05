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
  title: 'Security Accessories Saudi Arabia | Guard Equipment & Gear - UNEOM',
  titleAr: 'إكسسوارات أمنية السعودية | معدات وتجهيزات الحراسة - يونيوم',
  description: 'Buy professional security accessories in Saudi Arabia. Duty belts, handcuff pouches, radio holders, flashlight cases, tactical gloves, security badges. Bulk orders for security companies. Free quote!',
  descriptionAr: 'اشتري إكسسوارات أمنية احترافية في السعودية. أحزمة خدمة، حافظات أجهزة لاسلكي، قفازات تكتيكية، شارات أمن. طلبات بالجملة لشركات الأمن.',
  keywords: ['security accessories saudi', 'duty belt riyadh', 'security equipment ksa', 'guard gear saudi', 'tactical gloves', 'radio holder', 'security badges bulk'],
  keywordsAr: ['إكسسوارات أمنية السعودية', 'أحزمة خدمة', 'معدات حراسة', 'قفازات تكتيكية'],
  locale: 'en',
  pageType: 'product',
  path: '/shop/security-accessories',
  image: '/images/industries/security/security_uniforms_background.jpg',
  imageAlt: 'Security Accessories and Guard Equipment',
  aiSummary: 'UNEOM security accessories for Saudi Arabia: duty belts, handcuff pouches, radio holders, flashlight cases, tactical gloves, security badges, name plates, epaulettes, beret badges, whistles, and patrol boots. Professional-grade equipment for private security, government security, and facility management. Bulk orders for security companies.',
  aiSummaryAr: 'إكسسوارات أمنية من يونيوم للسعودية: أحزمة خدمة، حافظات، قفازات تكتيكية، شارات أمن.',
});

export const dynamic = 'force-static';

const securityFAQs = [
  {
    question: 'What security accessories does UNEOM supply in Saudi Arabia?',
    answer: 'UNEOM supplies complete security accessories: Duty Belts (leather & nylon), Handcuff Pouches, Radio Holders (Motorola compatible), Flashlight Cases, Tactical Gloves (kevlar & leather), Security Badges & Name Plates, Rank Epaulettes, Beret Badges, Security Whistles, Patrol Boots, Tactical Watches, and Notebook Holders. All professional-grade for daily security operations.',
  },
  {
    question: 'Do you supply security accessories for large security firms?',
    answer: 'Yes, UNEOM is a preferred supplier for major security companies in Saudi Arabia. We handle outfitting 500-5000+ guards with complete accessory packages. Volume discounts: 50+ sets (10% off), 100+ sets (15% off), 500+ sets (20%+ off). Dedicated account management and inventory planning included.',
  },
  {
    question: 'Can you customize security badges with company branding?',
    answer: 'Absolutely. We manufacture custom security badges, name plates, rank insignias, and beret badges with your company logo and branding. Options include metal casting, enamel finish, and PVC rubber badges. Minimum order 25 pieces per design. Turnaround 7-10 business days.',
  },
];

const accessories = [
  { name: 'Duty Belts', icon: '🪖', desc: 'Professional duty belts in leather and nylon. Multiple attachment points for accessories.', price: 'From SAR 89' },
  { name: 'Tactical Gloves', icon: '🧤', desc: 'Kevlar-reinforced and leather tactical gloves. Cut-resistant, touch-screen compatible.', price: 'From SAR 65' },
  { name: 'Radio Holders', icon: '📻', desc: 'Universal radio holders compatible with Motorola, Kenwood. Belt and chest mount options.', price: 'From SAR 35' },
  { name: 'Security Badges', icon: '🪪', desc: 'Custom metal and enamel security badges with company logos. Premium finish.', price: 'From SAR 25' },
  { name: 'Epaulettes & Ranks', icon: '⭐', desc: 'Professional rank epaulettes and shoulder boards. Gold/silver thread embroidery.', price: 'From SAR 15' },
  { name: 'Patrol Accessories Kit', icon: '🎒', desc: 'Complete patrol kit: flashlight holder, handcuff pouch, notebook case, whistle.', price: 'From SAR 149' },
];

export default function SecurityAccessoriesPage() {
  return (
    <>
      <SEO2026 title="Security Accessories Saudi Arabia" titleAr="إكسسوارات أمنية السعودية" description="Professional security accessories for guards in Saudi Arabia." locale="en" pageType="product" mainEntity="Security Accessories" primaryImage="/images/industries/security/security_uniforms_background.jpg" primaryImageAlt="Security Guard Accessories" faqs={securityFAQs} breadcrumbs={[{ name: 'Shop', nameAr: 'المتجر', url: '/shop' }, { name: 'Security Accessories', nameAr: 'إكسسوارات أمنية', url: '/shop/security-accessories' }]} certifications={['ISO 9001:2015']} clientCount={100} yearsInBusiness={20} industry="Security" />

      <section className="bg-gradient-to-br from-slate-900 via-gray-800 to-slate-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }, { label: 'Security Accessories', href: '/shop/security-accessories' }]} className="text-white/80 mb-6 relative z-10 pt-8" />
          <div className="py-16 lg:py-24 relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="text-amber-400">🔒</span>
              <span className="text-sm font-medium">Professional Security Equipment</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Security <span className="bg-gradient-to-r from-amber-300 to-yellow-300 text-transparent bg-clip-text">Accessories</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed max-w-2xl">Professional-grade security accessories for guards and patrol officers. Duty belts, tactical gloves, badges, and complete patrol kits.</p>
            <Button href="/quote?category=security-accessories" variant="secondary" size="lg" className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-bold border-0">Get Free Quote →</Button>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-20">
            <SectionHeading subtitle="Professional Guard Equipment" centered>Security Accessories Range</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {accessories.map((a, i) => (
                <div key={i} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
                  <div className="text-4xl mb-4">{a.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{a.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{a.desc}</p>
                  <div className="flex justify-between items-center pt-4 border-t">
                    <span className="text-lg font-bold text-amber-600">{a.price}</span>
                    <Link href="/quote?category=security" className="bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-900 transition-colors text-sm font-medium">Get Quote</Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>Security Accessories FAQ</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {securityFAQs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center bg-gradient-to-r from-slate-800 to-gray-700 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Equip Your Security Team</h2>
            <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">Bulk accessories for security companies. Volume discounts for 50+ sets.</p>
            <Link href="/quote?category=security" className="inline-flex items-center px-8 py-4 bg-amber-500 text-white hover:bg-amber-600 font-bold rounded-xl transition-all shadow-lg">Get Free Quote →</Link>
          </section>
        </Container>
      </main>

      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <Link href="/ar/shop/security-accessories" className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-800 text-white font-semibold py-2 px-4 rounded-lg text-sm">🇸🇦 العربية</Link>
        </div>
      </section>
    </>
  );
}
