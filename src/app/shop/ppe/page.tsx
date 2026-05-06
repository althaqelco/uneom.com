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
  title: 'Personal Protective Equipment (PPE) Saudi Arabia | Safety Gear - UNEOM',
  titleAr: 'معدات الحماية الشخصية (PPE) في السعودية | معدات السلامة - يونيوم',
  description: 'Buy certified PPE & safety equipment in Saudi Arabia. Hard hats, safety gloves, protective coveralls, eye protection & more. SASO certified, bulk orders for factories in Riyadh, Jeddah, Dammam. Get free quote!',
  descriptionAr: 'اشتري معدات الحماية الشخصية المعتمدة في السعودية. خوذات سلامة، قفازات حماية، أفرولات واقية، نظارات حماية والمزيد. معتمدة من ساسو. طلبات بالجملة للمصانع. احصل على عرض سعر مجاني!',
  keywords: [
    'PPE saudi arabia', 'personal protective equipment KSA', 'safety equipment riyadh',
    'industrial safety gear', 'hard hats saudi', 'safety gloves riyadh', 'protective coveralls',
    'eye protection ksa', 'hearing protection saudi', 'fall protection equipment',
    'SASO certified PPE', 'bulk PPE orders saudi', 'factory safety equipment',
    'construction PPE riyadh', 'oil gas PPE saudi arabia',
  ],
  keywordsAr: [
    'معدات حماية شخصية السعودية', 'معدات سلامة الرياض', 'أفرولات واقية', 'قفازات سلامة',
    'خوذات حماية', 'نظارات حماية', 'معدات وقاية المصانع',
  ],
  locale: 'en',
  pageType: 'product',
  path: '/shop/ppe',
  image: '/images/shop/ppe-hero.jpg',
  imageAlt: 'Personal Protective Equipment PPE in Saudi Arabia - UNEOM Safety Gear',
  aiSummary: 'UNEOM supplies certified Personal Protective Equipment (PPE) across Saudi Arabia. Product range includes hard hats, safety gloves (electrical, chemical, heat-resistant), protective coveralls, eye protection, hearing protection, fall protection harnesses, and high-visibility vests. All products are SASO and CE certified. Serving factories, construction sites, oil & gas facilities in Riyadh, Jeddah, Dammam and all Saudi cities. Bulk orders with volume discounts. 48-hour express delivery available.',
  aiSummaryAr: 'توفر يونيوم معدات الحماية الشخصية المعتمدة في جميع أنحاء السعودية. تشمل المنتجات خوذات السلامة، قفازات الحماية، أفرولات واقية، نظارات حماية، واقيات السمع، أحزمة الحماية من السقوط، وسترات عالية الوضوح.',
});

export const dynamic = 'force-static';

const ppeFAQs = [
  {
    question: 'What types of PPE does UNEOM supply in Saudi Arabia?',
    questionAr: 'ما أنواع معدات الحماية الشخصية التي توفرها يونيوم في السعودية؟',
    answer: 'UNEOM provides a full range of PPE including: Head Protection (hard hats, bump caps), Eye & Face Protection (safety goggles, face shields), Hand Protection (electrical gloves, chemical-resistant gloves, heat-resistant gloves), Body Protection (coveralls, aprons, lab coats), Foot Protection (safety boots, shoe covers), Hearing Protection (earplugs, earmuffs), Fall Protection (harnesses, lanyards), and High-Visibility Clothing (vests, jackets).',
    answerAr: 'توفر يونيوم مجموعة كاملة من معدات الحماية الشخصية تشمل: حماية الرأس، حماية العيون والوجه، حماية اليدين، حماية الجسم، حماية القدمين، حماية السمع، حماية السقوط، وملابس عالية الوضوح.',
  },
  {
    question: 'Are UNEOM PPE products SASO certified?',
    questionAr: 'هل منتجات PPE من يونيوم معتمدة من ساسو؟',
    answer: 'Yes, all UNEOM PPE products meet Saudi Standards Organization (SASO) requirements and carry CE marking. Our products comply with international standards including ANSI/ISEA, EN standards, and OSHA regulations. We provide full documentation and certificates of compliance for all safety equipment.',
    answerAr: 'نعم، جميع منتجات PPE من يونيوم تلبي متطلبات هيئة المواصفات والمقاييس السعودية (ساسو) وتحمل علامة CE. منتجاتنا متوافقة مع المعايير الدولية.',
  },
  {
    question: 'What is the minimum order for PPE in Saudi Arabia?',
    questionAr: 'ما الحد الأدنى لطلب معدات الحماية الشخصية في السعودية؟',
    answer: 'For standard PPE items, minimum order is 25 pieces per item. For customized PPE with company branding, minimum is 50 pieces. We offer volume discounts starting from 100+ pieces (10% off) and 500+ pieces (20% off). Contact us for enterprise-level pricing for large industrial operations.',
    answerAr: 'للمنتجات القياسية، الحد الأدنى 25 قطعة. للمنتجات المخصصة بشعار الشركة، الحد الأدنى 50 قطعة. نقدم خصومات على الكميات تبدأ من 100+ قطعة.',
  },
  {
    question: 'Does UNEOM supply PPE for oil and gas companies?',
    questionAr: 'هل توفر يونيوم معدات حماية لشركات النفط والغاز؟',
    answer: 'Yes, UNEOM is a trusted PPE supplier for oil & gas operations across Saudi Arabia. We provide flame-resistant coveralls, chemical-resistant gloves, gas detection equipment accessories, arc flash protection, and H2S-rated respiratory equipment. Our products meet ARAMCO and SABIC safety standards.',
    answerAr: 'نعم، يونيوم مورد موثوق لمعدات الحماية لعمليات النفط والغاز في السعودية. نوفر أفرولات مقاومة للهب، قفازات مقاومة للمواد الكيميائية، ومعدات حماية القوس الكهربائي.',
  },
];

const ppeCategories = [
  { name: 'Electrical Safety Gloves', nameAr: 'قفازات السلامة الكهربائية', icon: '⚡', href: '/shop/ppe/electrical-gloves', desc: 'Insulated gloves rated for high-voltage electrical work. Class 00 to Class 4.' },
  { name: 'Protective Coveralls', nameAr: 'أفرولات واقية', icon: '🛡️', href: '/shop/industrial-uniforms', desc: 'Full-body protection for chemical, biological, and particulate hazards.' },
  { name: 'Safety Helmets', nameAr: 'خوذات السلامة', icon: '⛑️', href: '/shop/industrial-uniforms', desc: 'ANSI Type I & Type II hard hats with customizable colors and logos.' },
  { name: 'Eye Protection', nameAr: 'حماية العيون', icon: '🥽', href: '/shop/industrial-uniforms', desc: 'Safety goggles, face shields, and welding helmets for every application.' },
  { name: 'High-Visibility Gear', nameAr: 'ملابس عالية الوضوح', icon: '🦺', href: '/shop/high-visibility-clothing', desc: 'ANSI Class 2 & 3 vests, jackets, and pants for maximum visibility.' },
  { name: 'Hearing Protection', nameAr: 'حماية السمع', icon: '🔇', href: '/shop/industrial-uniforms', desc: 'NRR-rated earplugs and earmuffs for noisy industrial environments.' },
];

const certifications = [
  { name: 'SASO Certified', icon: '🏛️' },
  { name: 'CE Marked', icon: '🇪🇺' },
  { name: 'ISO 9001:2015', icon: '📋' },
  { name: 'ANSI/ISEA', icon: '🇺🇸' },
  { name: 'OSHA Compliant', icon: '✅' },
  { name: 'ARAMCO Approved', icon: '🛢️' },
];

export default function PPEShopPage() {
  return (
    <>
      <SEO2026
        title="PPE & Safety Equipment Saudi Arabia"
        titleAr="معدات الحماية الشخصية والسلامة في السعودية"
        description="UNEOM supplies certified PPE and safety equipment across Saudi Arabia for factories, construction, and oil & gas."
        descriptionAr="توفر يونيوم معدات الحماية الشخصية المعتمدة في جميع أنحاء السعودية للمصانع والبناء والنفط والغاز."
        locale="en"
        pageType="product"
        mainEntity="Personal Protective Equipment"
        mainEntityAr="معدات الحماية الشخصية"
        primaryImage="/images/shop/ppe-hero.jpg"
        primaryImageAlt="PPE Safety Equipment in Saudi Arabia"
        faqs={ppeFAQs}
        breadcrumbs={[
          { name: 'Shop', nameAr: 'المتجر', url: '/shop' },
          { name: 'PPE', nameAr: 'معدات الحماية', url: '/shop/ppe' },
        ]}
        conversationalKeywords={[
          'where to buy PPE in Saudi Arabia',
          'best safety equipment supplier Riyadh',
          'SASO certified safety gear',
          'bulk PPE orders for factories',
        ]}
        voiceSearchQueries={[
          'Find safety equipment near me in Riyadh',
          'Buy PPE for construction workers Saudi Arabia',
          'Order electrical safety gloves online KSA',
        ]}
        certifications={['SASO', 'CE', 'ISO 9001:2015', 'ANSI/ISEA', 'OSHA']}
        clientCount={150}
        yearsInBusiness={20}
        industry="Industrial Safety"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-900 via-red-800 to-yellow-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Shop', href: '/shop' },
              { label: 'PPE & Safety', href: '/shop/ppe' }
            ]}
            className="text-white/80 mb-6 relative z-10 pt-8"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="text-yellow-400">🛡️</span>
                <span className="text-sm font-medium">Trusted by 150+ Industrial Facilities in KSA</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Personal Protective{' '}
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 text-transparent bg-clip-text">
                  Equipment
                </span>
              </h1>
              
              <p className="text-xl mb-8 text-orange-100 leading-relaxed max-w-2xl">
                SASO-certified safety equipment for factories, construction sites, and oil & gas operations across Saudi Arabia. Fast delivery to Riyadh, Jeddah, Dammam & all cities.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">🛡️ SASO Certified</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">🇪🇺 CE Marked</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">🚚 48hr Delivery</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">🛢️ ARAMCO Approved</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  href="/quote?category=ppe"
                  variant="secondary" 
                  size="lg"
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold border-0"
                >
                  Get Free PPE Quote →
                </Button>
                <Button 
                  href="/contact"
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-orange-900"
                >
                  Talk to Safety Expert
                </Button>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/industries/manufacturing/manufacturing_uniforms_background.jpg"
                  alt="Personal Protective Equipment PPE in Saudi Arabia - UNEOM Safety Gear"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 text-gray-900">
                <div className="text-3xl font-bold text-orange-600">150+</div>
                <div className="text-sm text-gray-600">Industrial Facilities Served</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          {/* Certifications Bar */}
          <section className="mb-16">
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow-sm border border-gray-100">
                  <span className="text-xl">{cert.icon}</span>
                  <span className="font-bold text-sm text-gray-800">{cert.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* PPE Categories */}
          <section className="mb-20">
            <SectionHeading subtitle="Browse Our Safety Equipment Range" centered>
              PPE Categories
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {ppeCategories.map((cat, index) => (
                <Link key={index} href={cat.href} className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="p-6">
                    <div className="text-4xl mb-4">{cat.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-orange-600 transition-colors">{cat.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{cat.desc}</p>
                    <span className="text-orange-600 font-medium text-sm group-hover:underline">View Products →</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>
              PPE & Safety Equipment FAQ
            </SectionHeading>
            
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {ppeFAQs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6"
                  itemScope 
                  itemProp="mainEntity" 
                  itemType="https://schema.org/Question"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">
                    {faq.question}
                  </h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-gray-600 leading-relaxed" itemProp="text">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/patterns/dots.svg')] opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Protect Your Workforce Today
              </h2>
              <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto text-orange-100">
                Get SASO-certified PPE delivered to your facility within 48 hours. Volume discounts available for orders of 100+ pieces.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/quote?category=ppe" 
                  className="inline-flex items-center px-8 py-4 bg-white text-orange-700 hover:bg-gray-100 font-bold rounded-xl transition-all duration-300 shadow-lg"
                >
                  Get Free PPE Quote →
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-orange-900 font-bold rounded-xl transition-all duration-300"
                >
                  Contact Safety Expert
                </Link>
              </div>
              
              <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-orange-200">
                <span>📞 +966 56 461 2017</span>
                <span>📧 safety@uneom.com</span>
                <span>📍 Riyadh | Jeddah | Dammam</span>
              </div>
            </div>
          </section>
        </Container>
      </main>

      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-3 text-sm">This page is also available in Arabic</p>
          <Link
            href="/ar/shop/ppe"
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
          >
            🇸🇦 العربية
          </Link>
        </div>
      </section>
    </>
  );
}
