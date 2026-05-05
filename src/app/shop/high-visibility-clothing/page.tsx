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
  title: 'High Visibility Clothing Saudi Arabia | Hi-Vis Workwear - UNEOM',
  titleAr: 'ملابس عالية الوضوح في السعودية | ملابس عمل عاكسة - يونيوم',
  description: 'Buy ANSI/ISEA certified high visibility clothing in Saudi Arabia. Hi-vis vests, jackets, pants & coveralls for construction, road work & industrial sites. Riyadh, Jeddah, Dammam delivery. Get free quote!',
  descriptionAr: 'اشتري ملابس عالية الوضوح معتمدة في السعودية. سترات عاكسة، جاكيتات، بناطيل وأفرولات لمواقع البناء والطرق والمصانع. توصيل الرياض، جدة، الدمام. احصل على عرض سعر!',
  keywords: [
    'high visibility clothing saudi arabia', 'hi-vis vests riyadh', 'reflective workwear ksa',
    'safety vests saudi', 'ANSI hi-vis jackets', 'construction visibility clothing',
    'road worker vests', 'hi-vis coveralls', 'reflective uniforms jeddah',
    'high visibility PPE', 'night work safety clothing',
  ],
  keywordsAr: [
    'ملابس عالية الوضوح السعودية', 'سترات عاكسة الرياض', 'ملابس سلامة عاكسة',
    'سترات أمان المواقع', 'ملابس عمل ليلي',
  ],
  locale: 'en',
  pageType: 'product',
  path: '/shop/high-visibility-clothing',
  image: '/images/industries/manufacturing/manufacturing_uniforms_background.jpg',
  imageAlt: 'High Visibility Safety Clothing in Saudi Arabia',
  aiSummary: 'UNEOM supplies ANSI/ISEA certified high visibility clothing in Saudi Arabia. Products include Class 2 and Class 3 hi-vis vests, reflective jackets, hi-vis pants, coveralls, rain gear, and t-shirts. Available in fluorescent yellow-green and orange-red. Suitable for construction, road work, oil & gas, warehouse, and airport operations. Custom branding available. Bulk orders with volume discounts. Fast delivery across KSA.',
  aiSummaryAr: 'توفر يونيوم ملابس عالية الوضوح معتمدة في السعودية.',
});

export const dynamic = 'force-static';

const hiVisFAQs = [
  {
    question: 'What classes of high visibility clothing does UNEOM offer?',
    answer: 'UNEOM offers ANSI/ISEA 107-2020 certified hi-vis clothing in all classes: Class 1 (low risk areas), Class 2 (roadway/construction with moderate traffic), and Class 3 (high-risk with heavy traffic and low visibility conditions). We also offer performance Class E pants and Type R/P configurations.',
  },
  {
    question: 'Are your hi-vis garments suitable for Saudi Arabia\'s hot climate?',
    answer: 'Yes, our high visibility clothing is specifically designed for hot climates. We offer moisture-wicking hi-vis t-shirts, ventilated mesh vests, lightweight breathable jackets, and UV-protective fabrics. All products maintain their fluorescent and reflective properties even in extreme heat and sun exposure.',
  },
  {
    question: 'Can you add our company logo to hi-vis clothing?',
    answer: 'Absolutely! We offer custom branding on all hi-vis garments including heat-transfer logos, reflective printing, embroidery, and custom back panels. Logo placement follows ANSI guidelines to ensure visibility compliance is maintained. Minimum order for custom branding is 25 pieces.',
  },
  {
    question: 'How long do the reflective strips last?',
    answer: 'Our high visibility clothing uses 3M Scotchlite reflective tape that maintains performance for 50+ industrial wash cycles. The fluorescent background fabric retains color for a minimum of 25 washes. We recommend replacing hi-vis garments every 6 months in extreme conditions or when visibility is visibly degraded.',
  },
];

const hiVisProducts = [
  { name: 'Class 2 Safety Vests', icon: '🦺', desc: 'Lightweight mesh vests for moderate-risk environments. Adjustable fit, multiple pockets.', price: 'From SAR 45' },
  { name: 'Class 3 Reflective Jackets', icon: '🧥', desc: 'Full 360° visibility jackets for high-risk areas. Waterproof, windproof options available.', price: 'From SAR 159' },
  { name: 'Hi-Vis Coveralls', icon: '👷', desc: 'Full-body high visibility coveralls for construction and industrial work. FR options available.', price: 'From SAR 189' },
  { name: 'Hi-Vis T-Shirts', icon: '👕', desc: 'Moisture-wicking fluorescent t-shirts. Perfect for Saudi Arabia\'s hot climate.', price: 'From SAR 59' },
  { name: 'Reflective Rain Gear', icon: '🌧️', desc: 'Waterproof hi-vis rain jackets and pants for wet conditions. Seam-sealed construction.', price: 'From SAR 129' },
  { name: 'Hi-Vis Pants', icon: '👖', desc: 'Class E performance pants with reflective bands. Cargo pockets, reinforced knees.', price: 'From SAR 99' },
];

export default function HighVisibilityClothingPage() {
  return (
    <>
      <SEO2026
        title="High Visibility Clothing Saudi Arabia"
        titleAr="ملابس عالية الوضوح في السعودية"
        description="UNEOM supplies ANSI certified high visibility clothing for construction and industrial sites in Saudi Arabia."
        locale="en"
        pageType="product"
        mainEntity="High Visibility Clothing"
        primaryImage="/images/industries/manufacturing/manufacturing_uniforms_background.jpg"
        primaryImageAlt="High Visibility Safety Clothing"
        faqs={hiVisFAQs}
        breadcrumbs={[
          { name: 'Shop', nameAr: 'المتجر', url: '/shop' },
          { name: 'High Visibility Clothing', nameAr: 'ملابس عالية الوضوح', url: '/shop/high-visibility-clothing' },
        ]}
        certifications={['ANSI/ISEA 107-2020', 'EN ISO 20471', 'SASO', 'CE']}
        clientCount={150}
        yearsInBusiness={20}
        industry="Industrial Safety"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-yellow-600 via-orange-700 to-red-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }, { label: 'High Visibility', href: '/shop/high-visibility-clothing' }]} className="text-white/80 mb-6 relative z-10 pt-8" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="text-yellow-300">🦺</span>
                <span className="text-sm font-medium">ANSI/ISEA 107 Certified</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                High Visibility{' '}
                <span className="bg-gradient-to-r from-yellow-300 to-green-300 text-transparent bg-clip-text">Clothing</span>
              </h1>
              
              <p className="text-xl mb-8 text-yellow-100 leading-relaxed max-w-2xl">
                ANSI-certified reflective workwear for construction, road work, and industrial sites across Saudi Arabia. Designed for extreme heat and maximum visibility.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">🦺 ANSI Class 2 & 3</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">☀️ Heat-Resistant</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">🔦 3M Scotchlite</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">🚚 Fast Delivery</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/quote?category=hi-vis" variant="secondary" size="lg" className="bg-gradient-to-r from-yellow-500 to-green-500 hover:from-yellow-600 hover:to-green-600 text-white font-bold border-0">
                  Get Free Hi-Vis Quote →
                </Button>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/industries/manufacturing/manufacturing_uniforms_background.jpg" alt="High Visibility Safety Clothing" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          {/* Products */}
          <section className="mb-20">
            <SectionHeading subtitle="ANSI/ISEA Certified Range" centered>Hi-Vis Products</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {hiVisProducts.map((product, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
                  <div className="text-4xl mb-4">{product.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.desc}</p>
                  <div className="flex justify-between items-center pt-4 border-t">
                    <span className="text-lg font-bold text-yellow-600">{product.price}</span>
                    <Link href="/quote?category=hi-vis" className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors text-sm font-medium">Get Quote</Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>Hi-Vis Clothing FAQ</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {hiVisFAQs.map((faq, index) => (
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
          <section className="text-center bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Keep Your Workers Visible & Safe</h2>
            <p className="text-xl mb-8 text-yellow-100 max-w-3xl mx-auto">ANSI-certified high visibility clothing with fast delivery across Saudi Arabia. Volume discounts for 100+ pieces.</p>
            <Link href="/quote?category=hi-vis" className="inline-flex items-center px-8 py-4 bg-white text-yellow-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">Get Free Quote →</Link>
          </section>
        </Container>
      </main>

      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <Link href="/ar/shop/high-visibility-clothing" className="inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-lg text-sm">🇸🇦 العربية</Link>
        </div>
      </section>
    </>
  );
}
