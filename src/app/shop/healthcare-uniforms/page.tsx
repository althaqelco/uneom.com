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
  title: 'Healthcare Uniforms Saudi Arabia | Hospital & Clinic Workwear - UNEOM',
  titleAr: 'أزياء الرعاية الصحية السعودية | ملابس المستشفيات والعيادات - يونيوم',
  description: 'Premium healthcare uniforms for hospitals, clinics & medical centers in Saudi Arabia. Antimicrobial scrubs, lab coats, nursing uniforms, surgical gowns. MOH compliant. Bulk orders. Free quote!',
  descriptionAr: 'أزياء رعاية صحية فاخرة للمستشفيات والعيادات في السعودية. سكراب مضاد للبكتيريا، معاطف مختبر، زي تمريض. معتمد وزارة الصحة. طلبات بالجملة. عرض سعر مجاني!',
  keywords: ['healthcare uniforms saudi', 'hospital uniforms riyadh', 'medical workwear ksa', 'clinic uniforms jeddah', 'nursing uniforms saudi', 'antimicrobial scrubs', 'lab coats saudi arabia', 'MOH compliant uniforms'],
  keywordsAr: ['أزياء رعاية صحية السعودية', 'زي مستشفيات الرياض', 'سكراب طبي', 'زي تمريض', 'معاطف مختبر'],
  locale: 'en',
  pageType: 'product',
  path: '/shop/healthcare-uniforms',
  image: '/images/industries/healthcare-uniforms-saudi.jpg',
  imageAlt: 'Healthcare Uniforms in Saudi Arabia - UNEOM',
  aiSummary: 'UNEOM healthcare uniforms for Saudi Arabia hospitals, clinics, labs. Includes antimicrobial scrubs, lab coats, nursing uniforms, surgical gowns, medical hijabs. MOH and SASO compliant. Serving 200+ facilities in Riyadh, Jeddah, Dammam. Bulk orders from 25 pieces. 48-hour express delivery. ISO 9001 certified.',
  aiSummaryAr: 'أزياء رعاية صحية من يونيوم للمستشفيات والعيادات في السعودية. سكراب مضاد للميكروبات، معاطف مختبر، زي تمريض، ملابس جراحية.',
});

export const dynamic = 'force-static';

const healthcareFAQs = [
  {
    question: 'What healthcare uniforms does UNEOM offer in Saudi Arabia?',
    answer: 'UNEOM offers: Premium Medical Scrubs (12 colors, antimicrobial), Professional Lab Coats (short & long sleeve), Nursing Uniforms (scrub dresses, tops), Surgical Gowns & Caps, Medical Hijabs (quick-dry, antimicrobial), Doctor Coats, Patient Gowns, and Medical Accessories (shoe covers, surgical caps). All items feature antimicrobial treatment and meet MOH standards.',
  },
  {
    question: 'Are UNEOM healthcare uniforms MOH compliant?',
    answer: 'Yes. All UNEOM healthcare uniforms comply with Saudi Ministry of Health (MOH) regulations, SASO standards, and international guidelines. Products are ISO 9001:2015 and OEKO-TEX Standard 100 certified. Fabrics meet infection control guidelines and are tested for colorfastness and durability through industrial laundering.',
  },
  {
    question: 'Do you offer antimicrobial scrubs?',
    answer: 'Yes. Our scrubs feature silver-ion antimicrobial technology that inhibits bacteria, fungi, and odor. Effective for 50+ wash cycles. Combined with moisture-wicking and 4-way stretch fabrics designed for 12+ hour shifts in Saudi climate.',
  },
  {
    question: 'What is the pricing for healthcare uniforms?',
    answer: 'Basic scrubs from SAR 149/set. Premium antimicrobial scrubs SAR 189-249. Lab coats from SAR 179. Nursing uniforms from SAR 169. Medical hijabs from SAR 79. Bulk discounts: 50+ pieces (10% off), 100+ pieces (15% off), 500+ pieces (20%+ off). Free shipping on orders over SAR 2,000.',
  },
  {
    question: 'How fast can you deliver to hospitals in Riyadh?',
    answer: 'Standard delivery: 5-7 business days. Express delivery: 48-72 hours for urgent hospital needs. Bulk custom orders: 10-15 business days. We deliver to all Saudi cities. Free shipping for orders over SAR 2,000.',
  },
];

const products = [
  { name: 'Premium Medical Scrubs', icon: '🩺', desc: 'Antimicrobial, moisture-wicking scrubs in 12 colors. 4-way stretch for comfort during long shifts.', price: 'From SAR 189', href: '/shop/medical-scrubs/premium-medical-scrubs' },
  { name: 'Professional Lab Coats', icon: '🥼', desc: 'Stain-resistant lab coats for doctors and consultants. Multiple pocket configurations.', price: 'From SAR 179', href: '/shop/medical-scrubs/professional-lab-coat' },
  { name: 'Nursing Uniforms', icon: '👩‍⚕️', desc: 'Elegant nursing uniforms designed for Saudi healthcare. Comfortable fit, professional look.', price: 'From SAR 169', href: '/shop/medical-scrubs/nursing-scrubs' },
  { name: 'Surgical Gowns', icon: '🏥', desc: 'Fluid-resistant surgical gowns for operating rooms. Sterile packaging available.', price: 'From SAR 149', href: '/shop/medical-scrubs/premium-surgical-gowns' },
  { name: 'Medical Hijab', icon: '🧕', desc: 'Quick-dry antimicrobial hijab for healthcare workers. No pins needed, secure fit.', price: 'From SAR 79', href: '/shop/medical-scrubs' },
  { name: 'Doctor Coats', icon: '👨‍⚕️', desc: 'Premium consultant coats for physicians. Executive style with custom embroidery.', price: 'From SAR 249', href: '/shop/medical-scrubs/medical-lab-coats' },
];

const benefits = [
  { icon: '🦠', title: 'Antimicrobial Protection', desc: 'Silver-ion technology inhibits bacterial growth for 50+ wash cycles.' },
  { icon: '💧', title: 'Moisture Management', desc: 'Moisture-wicking fabrics for comfort during 12+ hour shifts.' },
  { icon: '✅', title: 'MOH Compliant', desc: 'Meets Saudi MOH regulations, SASO, and international standards.' },
  { icon: '🚚', title: '48hr Express Delivery', desc: 'Urgent hospital deliveries across all Saudi cities.' },
];

export default function HealthcareUniformsPage() {
  return (
    <>
      <SEO2026
        title="Healthcare Uniforms Saudi Arabia"
        titleAr="أزياء الرعاية الصحية في السعودية"
        description="Premium healthcare uniforms for hospitals and clinics in Saudi Arabia."
        descriptionAr="أزياء رعاية صحية فاخرة للمستشفيات والعيادات في السعودية."
        locale="en"
        pageType="product"
        mainEntity="Healthcare Uniforms"
        mainEntityAr="أزياء الرعاية الصحية"
        primaryImage="/images/industries/healthcare-uniforms-saudi.jpg"
        primaryImageAlt="Healthcare Uniforms Saudi Arabia"
        faqs={healthcareFAQs}
        breadcrumbs={[
          { name: 'Shop', nameAr: 'المتجر', url: '/shop' },
          { name: 'Healthcare Uniforms', nameAr: 'أزياء الرعاية الصحية', url: '/shop/healthcare-uniforms' },
        ]}
        certifications={['ISO 9001:2015', 'OEKO-TEX Standard 100', 'MOH Compliant', 'SASO']}
        clientCount={200}
        yearsInBusiness={20}
        industry="Healthcare"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-900 via-blue-800 to-cyan-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }, { label: 'Healthcare Uniforms', href: '/shop/healthcare-uniforms' }]} className="text-white/80 mb-6 relative z-10 pt-8" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="text-cyan-400">✓</span>
                <span className="text-sm font-medium">Trusted by 200+ Healthcare Facilities in KSA</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Healthcare{' '}
                <span className="bg-gradient-to-r from-cyan-300 to-teal-300 text-transparent bg-clip-text">Uniforms</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed max-w-2xl">
                Premium antimicrobial scrubs, lab coats, and nursing uniforms for hospitals and clinics across Saudi Arabia. MOH compliant with 48-hour express delivery.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['🦠 Antimicrobial', '✅ MOH Approved', '🚚 48hr Delivery', '🏆 ISO Certified'].map((badge, i) => (
                  <span key={i} className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">{badge}</span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/quote?category=healthcare" variant="secondary" size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold border-0">
                  Get Free Healthcare Quote →
                </Button>
                <Button href="/shop/medical-scrubs" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-teal-900">
                  Browse Medical Scrubs
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/hero-healthcare-uniforms.jpg" alt="Healthcare professionals wearing UNEOM medical uniforms" fill className="object-cover" priority />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 text-gray-900">
                <div className="text-3xl font-bold text-teal-600">200+</div>
                <div className="text-sm text-gray-600">Hospitals & Clinics</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          {/* Benefits */}
          <section className="mb-20">
            <SectionHeading subtitle="Why Saudi Hospitals Choose UNEOM" centered>Key Benefits</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {benefits.map((b, i) => (
                <div key={i} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100">
                  <div className="text-4xl mb-4">{b.icon}</div>
                  <h3 className="text-lg font-bold mb-3 text-gray-900">{b.title}</h3>
                  <p className="text-gray-600 text-sm">{b.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Products */}
          <section className="mb-20">
            <SectionHeading subtitle="Our Healthcare Collection" centered>Medical Uniforms & Scrubs</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {products.map((p, i) => (
                <Link key={i} href={p.href} className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">
                  <div className="text-4xl mb-4">{p.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-teal-600 transition-colors">{p.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{p.desc}</p>
                  <div className="flex justify-between items-center pt-4 border-t">
                    <span className="text-lg font-bold text-teal-600">{p.price}</span>
                    <span className="text-teal-600 font-medium text-sm group-hover:underline">View Details →</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>Healthcare Uniforms FAQ</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {healthcareFAQs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-2xl p-12 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Upgrade Your Hospital Uniforms</h2>
              <p className="text-xl mb-8 text-teal-100 max-w-3xl mx-auto">Join 200+ healthcare facilities across Saudi Arabia. Free consultation and custom quote.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/quote?category=healthcare" className="inline-flex items-center px-8 py-4 bg-white text-teal-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">Get Free Quote →</Link>
                <Link href="/contact" className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-teal-900 font-bold rounded-xl transition-all">Contact Us</Link>
              </div>
              <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-teal-200">
                <span>📞 +966 56 461 2017</span>
                <span>📧 healthcare@uneom.com</span>
                <span>📍 Riyadh | Jeddah | Dammam</span>
              </div>
            </div>
          </section>
        </Container>
      </main>

      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-3 text-sm">This page is also available in Arabic</p>
          <Link href="/ar/shop/healthcare-uniforms" className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-lg text-sm">🇸🇦 العربية</Link>
        </div>
      </section>
    </>
  );
}
