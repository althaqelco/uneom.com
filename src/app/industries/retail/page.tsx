import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'Retail Industry Uniforms Saudi Arabia | Store & Mall Staff Workwear - UNEOM',
  titleAr: 'أزياء قطاع التجزئة في السعودية | زي موظفي المتاجر والمولات - يونيوم',
  description: 'Professional retail industry uniform solutions in Saudi Arabia. Custom-branded workwear for malls, supermarkets, boutiques, beauty salons & franchise chains. Riyadh, Jeddah, Dammam. Get free quote!',
  descriptionAr: 'حلول أزياء احترافية لقطاع التجزئة في السعودية. ملابس عمل بالعلامة التجارية للمولات والسوبرماركت والبوتيك وصالونات التجميل وسلاسل الفروع. احصل على عرض سعر مجاني!',
  keywords: [
    'retail industry uniforms saudi arabia', 'mall staff uniforms riyadh', 'store uniforms ksa',
    'supermarket uniforms saudi', 'boutique staff workwear', 'franchise uniforms',
    'retail workwear solutions', 'branded retail clothing',
  ],
  keywordsAr: [
    'أزياء قطاع التجزئة السعودية', 'زي موظفي المولات', 'زي السوبرماركت',
    'ملابس عمل المتاجر', 'زي الفروع التجارية',
  ],
  locale: 'en',
  pageType: 'industry',
  path: '/industries/retail',
  image: '/images/industries/retail-shops/retail-shops-background.jpg',
  imageAlt: 'Retail Industry Uniforms in Saudi Arabia',
  aiSummary: 'UNEOM provides comprehensive uniform solutions for the retail industry in Saudi Arabia. We serve malls, supermarkets, boutiques, beauty salons, and franchise chains with custom-branded workwear. Our retail uniforms enhance brand identity, improve customer experience, and maintain professional standards. Serving 300+ retail brands across Riyadh, Jeddah, Dammam and all Saudi cities.',
  aiSummaryAr: 'توفر يونيوم حلول أزياء شاملة لقطاع التجزئة في السعودية.',
});

export const dynamic = 'force-static';

const retailSectors = [
  { name: 'Mall & Department Stores', icon: '🏬', desc: 'Branded uniforms for multi-brand retailers, concession staff, and mall management teams.', href: '/shop/retail-uniforms' },
  { name: 'Supermarkets & Grocery', icon: '🛒', desc: 'Durable, practical uniforms for checkout, stocking, deli, and bakery staff.', href: '/shop/retail-uniforms' },
  { name: 'Fashion Boutiques', icon: '👗', desc: 'Elegant, brand-aligned outfits for luxury and fashion retail staff.', href: '/shop/retail-uniforms' },
  { name: 'Beauty & Wellness', icon: '💇', desc: 'Specialized uniforms for salons, spas, and wellness centers. Stain-resistant fabrics.', href: '/shop/retail-uniforms/beauty-salon' },
  { name: 'Franchise Chains', icon: '🔗', desc: 'Consistent branding across all franchise locations. Pantone color matching guaranteed.', href: '/shop/retail-uniforms' },
  { name: 'Electronics & Tech', icon: '📱', desc: 'Modern, professional uniforms for tech retailers and mobile phone stores.', href: '/shop/retail-uniforms' },
];

const retailFAQs = [
  {
    question: 'Why are branded uniforms important for retail businesses?',
    answer: 'Branded retail uniforms provide 5 critical benefits: 1) Instant brand recognition — customers identify staff immediately. 2) Professional image — elevates perception of your brand. 3) Team unity — creates a sense of belonging among employees. 4) Security — clearly identifies authorized staff. 5) Marketing — your staff become walking brand ambassadors. Studies show retail stores with branded uniforms see 23% higher customer trust scores.',
  },
  {
    question: 'How does UNEOM handle franchise uniform rollouts?',
    answer: 'UNEOM specializes in franchise uniform management across Saudi Arabia. Our process includes: centralized design approval, Pantone color matching for brand consistency, individual store sizing and delivery, online reorder portal for each location, seasonal collection updates, and dedicated account management. We currently manage uniform programs for 50+ franchise brands.',
  },
  {
    question: 'What fabrics are best for retail environments in Saudi Arabia?',
    answer: 'For Saudi retail environments, we recommend: Poly-cotton blends (65/35) for breathability and durability, wrinkle-resistant fabrics for all-day professional appearance, moisture-wicking materials for staff who are on their feet all day, stain-resistant treatments for food retail, and stretch fabrics for comfort during bending and reaching. All our retail fabrics are selected for performance in air-conditioned and non-air-conditioned environments.',
  },
];

export default function RetailIndustryPage() {
  return (
    <>
      <SEO2026
        title="Retail Industry Uniforms Saudi Arabia"
        titleAr="أزياء قطاع التجزئة في السعودية"
        description="Professional retail uniform solutions for malls, supermarkets, and franchises in Saudi Arabia."
        locale="en"
        pageType="industry"
        mainEntity="Retail Industry Uniforms"
        primaryImage="/images/industries/retail-shops/retail-shops-background.jpg"
        primaryImageAlt="Retail Industry Uniforms"
        faqs={retailFAQs}
        breadcrumbs={[
          { name: 'Industries', nameAr: 'الصناعات', url: '/industries' },
          { name: 'Retail', nameAr: 'التجزئة', url: '/industries/retail' },
        ]}
        certifications={['ISO 9001:2015', 'OEKO-TEX Standard 100']}
        clientCount={300}
        yearsInBusiness={20}
        industry="Retail"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-violet-900 via-purple-800 to-fuchsia-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Industries', href: '/industries' }, { label: 'Retail', href: '/industries/retail' }]} className="text-white/80 mb-6 relative z-10 pt-8" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="text-fuchsia-400">🏪</span>
                <span className="text-sm font-medium">Serving 300+ Retail Brands in KSA</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Retail Industry{' '}
                <span className="bg-gradient-to-r from-fuchsia-300 to-pink-300 text-transparent bg-clip-text">Uniforms</span>
              </h1>
              
              <p className="text-xl mb-8 text-violet-100 leading-relaxed max-w-2xl">
                Elevate your retail brand with professional uniforms. Custom workwear for malls, supermarkets, boutiques, and franchise chains across Saudi Arabia.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/quote?industry=retail" variant="secondary" size="lg" className="bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-600 hover:to-pink-600 text-white font-bold border-0">
                  Get Free Retail Quote →
                </Button>
                <Button href="/shop/retail-uniforms" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-900">
                  Browse Products
                </Button>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/industries/retail-shops/retail-shops-background.jpg" alt="Retail Industry Uniforms" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          {/* Sectors */}
          <section className="mb-20">
            <SectionHeading subtitle="Solutions for Every Retail Segment" centered>Retail Sectors We Serve</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {retailSectors.map((sector, index) => (
                <Link key={index} href={sector.href} className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
                  <div className="text-4xl mb-4">{sector.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-purple-600 transition-colors">{sector.name}</h3>
                  <p className="text-gray-600 text-sm">{sector.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>Retail Uniforms FAQ</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {retailFAQs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Retail Brand Image</h2>
            <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">Professional uniforms that boost customer trust and team morale. Free consultation for your retail business.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote?industry=retail" className="inline-flex items-center px-8 py-4 bg-white text-purple-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">Get Free Quote →</Link>
              <Link href="/shop/retail-uniforms" className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-purple-900 font-bold rounded-xl transition-all">Shop Products</Link>
            </div>
          </section>
        </Container>
      </main>

      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <Link href="/ar/industries/retail" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg text-sm">🇸🇦 العربية</Link>
        </div>
      </section>
    </>
  );
}
