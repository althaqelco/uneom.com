import React from 'react';
import { Metadata } from 'next';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

// SEO 2026 Optimized Metadata
export const metadata: Metadata = generateMetadata2026({
  title: 'Leading Professional Uniforms & Workwear Manufacturer in Saudi Arabia',
  titleAr: 'الشركة الرائدة في تصنيع الأزياء المهنية وملابس العمل في السعودية',
  description: 'UNEOM is Saudi Arabia\'s premier uniform manufacturer. We provide high-quality healthcare scrubs, aviation uniforms, hospitality attire, corporate workwear, and industrial safety clothing. ISO certified with nationwide delivery.',
  descriptionAr: 'يونيوم هي الشركة الرائدة في تصنيع الأزياء المهنية في السعودية. نقدم سكرابز طبية وأزياء طيران وملابس ضيافة وأزياء شركات وملابس السلامة الصناعية. معتمدة من ISO مع التوصيل لجميع أنحاء المملكة.',
  keywords: [
    'professional uniforms Saudi Arabia',
    'uniform manufacturer KSA',
    'medical scrubs Saudi',
    'healthcare uniforms Riyadh',
    'corporate workwear Jeddah',
    'hospitality uniforms',
    'aviation uniforms Saudi',
    'industrial safety clothing',
    'school uniforms KSA',
    'security uniforms',
    'custom uniform design',
    'bulk uniform orders',
    'UNEOM uniforms'
  ],
  keywordsAr: [
    'الأزياء المهنية السعودية',
    'مصنع الزي الموحد',
    'سكرابز طبية',
    'أزياء الرعاية الصحية',
    'ملابس العمل المؤسسية',
    'أزياء الضيافة',
    'أزياء الطيران',
    'ملابس السلامة الصناعية',
    'الزي المدرسي',
    'أزياء الأمن',
    'تصميم الأزياء المخصصة',
    'طلبات الجملة',
    'يونيوم'
  ],
  locale: 'en',
  pageType: 'home',
  path: '/',
  image: '/images/og/uneom-og-image.jpg',
  imageAlt: 'UNEOM Professional Uniforms - Leading Manufacturer in Saudi Arabia',
  aiSummary: 'UNEOM is Saudi Arabia\'s leading professional uniform manufacturer, serving healthcare, aviation, hospitality, corporate, education, and industrial sectors. We offer custom designs, premium fabrics, ISO certification, and nationwide delivery.',
  aiSummaryAr: 'يونيوم هي الشركة الرائدة في تصنيع الأزياء المهنية في السعودية، نخدم قطاعات الرعاية الصحية والطيران والضيافة والشركات والتعليم والصناعة. نقدم تصاميم مخصصة وأقمشة فاخرة وشهادة ISO والتوصيل لجميع أنحاء المملكة.'
});

// Homepage content
const content = {
  hero: {
    title: '🇸🇦 Leading Professional Uniforms & Workwear Manufacturer in Saudi Arabia',
    subtitle: 'Premium quality uniforms for healthcare, aviation, hospitality, and corporate sectors',
    cta: 'Get Quote Now',
    secondaryCta: 'View Products'
  },
  stats: {
    clients: '500+ Satisfied Clients',
    pieces: '50,000+ Uniforms Delivered',
    cities: '13 Cities Served',
    experience: '10+ Years Experience'
  },
  trustSignals: {
    iso: 'ISO 9001 Certified',
    madeInSaudi: 'Made in Saudi Arabia',
    fastDelivery: '48-Hour Delivery',
    warranty: '12-Month Warranty'
  },
  industries: {
    title: 'Industries We Serve',
    subtitle: 'Professional uniforms tailored for every sector',
    healthcare: 'Healthcare',
    aviation: 'Aviation', 
    hospitality: 'Hospitality',
    corporate: 'Corporate',
    education: 'Education',
    manufacturing: 'Manufacturing',
    security: 'Security'
  }
};

// FAQ Data for AI Search Optimization
const homeFAQs = [
  {
    question: 'What types of uniforms does UNEOM manufacture?',
    questionAr: 'ما أنواع الأزياء التي تصنعها يونيوم؟',
    answer: 'UNEOM manufactures a comprehensive range of professional uniforms including healthcare scrubs and medical attire, aviation uniforms for pilots and cabin crew, hospitality uniforms for hotels and restaurants, corporate workwear and business attire, industrial safety clothing, school uniforms, and security uniforms. All products are made with premium fabrics and can be customized with your brand logo.',
    answerAr: 'تصنع يونيوم مجموعة شاملة من الأزياء المهنية تشمل السكرابز الطبية والملابس الطبية، وأزياء الطيران للطيارين وطاقم الطائرة، وأزياء الضيافة للفنادق والمطاعم، وملابس العمل المؤسسية، وملابس السلامة الصناعية، والزي المدرسي، وأزياء الأمن.'
  },
  {
    question: 'Does UNEOM deliver uniforms across Saudi Arabia?',
    questionAr: 'هل توصل يونيوم الأزياء في جميع أنحاء السعودية؟',
    answer: 'Yes, UNEOM provides nationwide delivery across Saudi Arabia including Riyadh, Jeddah, Dammam, Mecca, Medina, and all other cities. We offer fast 48-hour delivery for urgent orders and free shipping on bulk orders over 50 pieces.',
    answerAr: 'نعم، توفر يونيوم التوصيل لجميع أنحاء المملكة العربية السعودية بما في ذلك الرياض وجدة والدمام ومكة والمدينة وجميع المدن الأخرى. نقدم توصيل سريع خلال 48 ساعة للطلبات العاجلة وشحن مجاني على طلبات الجملة.'
  },
  {
    question: 'Can UNEOM create custom uniforms with our company logo?',
    questionAr: 'هل يمكن ليونيوم تصميم أزياء مخصصة بشعار شركتنا؟',
    answer: 'Absolutely! UNEOM specializes in custom uniform design and branding. We offer embroidery, screen printing, and heat transfer services to add your company logo, name badges, and custom designs. Our design team works with you to create uniforms that perfectly represent your brand identity.',
    answerAr: 'بالتأكيد! تتخصص يونيوم في تصميم الأزياء المخصصة والعلامات التجارية. نقدم خدمات التطريز والطباعة الحريرية ونقل الحرارة لإضافة شعار شركتك وشارات الأسماء والتصاميم المخصصة.'
  },
  {
    question: 'What is the minimum order quantity for bulk uniforms?',
    questionAr: 'ما الحد الأدنى لطلبات الجملة؟',
    answer: 'UNEOM accepts orders starting from 10 pieces for most products. For bulk orders of 50+ pieces, we offer significant discounts of up to 30%. Corporate clients with ongoing uniform needs can benefit from our uniform management programs with even better pricing.',
    answerAr: 'تقبل يونيوم الطلبات بدءاً من 10 قطع لمعظم المنتجات. للطلبات بالجملة من 50 قطعة فأكثر، نقدم خصومات كبيرة تصل إلى 30%. يمكن للعملاء من الشركات الاستفادة من برامج إدارة الأزياء بأسعار أفضل.'
  },
  {
    question: 'Is UNEOM ISO certified?',
    questionAr: 'هل يونيوم معتمدة من ISO؟',
    answer: 'Yes, UNEOM is ISO 9001:2015 certified for quality management. We also hold OEKO-TEX Standard 100 certification ensuring our fabrics are free from harmful substances. Our manufacturing processes meet international quality standards.',
    answerAr: 'نعم، يونيوم معتمدة بشهادة ISO 9001:2015 لإدارة الجودة. نحمل أيضاً شهادة OEKO-TEX Standard 100 التي تضمن خلو أقمشتنا من المواد الضارة. عمليات التصنيع لدينا تلبي المعايير الدولية للجودة.'
  }
];

export default function HomePage() {
  const locale = 'en';

  return (
    <>
      {/* SEO 2026 Structured Data */}
      <SEO2026
        title="Leading Professional Uniforms & Workwear Manufacturer in Saudi Arabia"
        titleAr="الشركة الرائدة في تصنيع الأزياء المهنية في السعودية"
        description="UNEOM is Saudi Arabia's premier uniform manufacturer serving healthcare, aviation, hospitality, corporate, education, and industrial sectors."
        descriptionAr="يونيوم هي الشركة الرائدة في تصنيع الأزياء المهنية في السعودية"
        locale="en"
        pageType="home"
        mainEntity="Professional Uniform Manufacturing"
        mainEntityAr="تصنيع الأزياء المهنية"
        primaryImage="/images/og/uneom-og-image.jpg"
        primaryImageAlt="UNEOM Professional Uniforms Manufacturing"
        faqs={homeFAQs}
        breadcrumbs={[]}
        conversationalKeywords={[
          'where to buy uniforms in Saudi Arabia',
          'best uniform manufacturer KSA',
          'medical scrubs supplier Riyadh',
          'corporate uniform company Jeddah',
          'custom uniform design Saudi'
        ]}
        voiceSearchQueries={[
          'Find uniform supplier near me',
          'Order medical scrubs in Saudi Arabia',
          'Get quote for company uniforms',
          'Buy hospitality uniforms Riyadh'
        ]}
        certifications={['ISO 9001:2015', 'OEKO-TEX Standard 100']}
        clientCount={500}
        yearsInBusiness={10}
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {content.hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
              {content.hero.subtitle}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="/quote"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-block"
              >
                {content.hero.cta}
              </a>
              <a
                href="/shop"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all inline-block"
              >
                {content.hero.secondaryCta}
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-2">500+</div>
                <div className="text-sm opacity-80">{content.stats.clients}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-2">50K+</div>
                <div className="text-sm opacity-80">{content.stats.pieces}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-2">13</div>
                <div className="text-sm opacity-80">{content.stats.cities}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-2">10+</div>
                <div className="text-sm opacity-80">{content.stats.experience}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">{content.trustSignals.iso}</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🇸🇦</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">{content.trustSignals.madeInSaudi}</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">{content.trustSignals.fastDelivery}</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">{content.trustSignals.warranty}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {content.industries.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {content.industries.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Healthcare */}
            <a href="/industries/healthcare" className="group block">
              <div className="bg-blue-50 hover:bg-blue-100 rounded-lg p-6 transition-colors text-center">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">
                  {content.industries.healthcare}
                </h3>
              </div>
            </a>
            
            {/* Aviation */}
            <a href="/industries/aviation" className="group block">
              <div className="bg-sky-50 hover:bg-sky-100 rounded-lg p-6 transition-colors text-center">
                <div className="text-4xl mb-4">✈️</div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-sky-600">
                  {content.industries.aviation}
                </h3>
              </div>
            </a>
            
            {/* Hospitality */}
            <a href="/industries/hospitality" className="group block">
              <div className="bg-orange-50 hover:bg-orange-100 rounded-lg p-6 transition-colors text-center">
                <div className="text-4xl mb-4">🏨</div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-orange-600">
                  {content.industries.hospitality}
                </h3>
              </div>
            </a>
            
            {/* Corporate */}
            <a href="/industries/corporate" className="group block">
              <div className="bg-gray-50 hover:bg-gray-100 rounded-lg p-6 transition-colors text-center">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                  {content.industries.corporate}
                </h3>
              </div>
            </a>
            
            {/* Education */}
            <a href="/industries/education" className="group block">
              <div className="bg-green-50 hover:bg-green-100 rounded-lg p-6 transition-colors text-center">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-green-600">
                  {content.industries.education}
                </h3>
              </div>
            </a>
            
            {/* Manufacturing */}
            <a href="/industries/manufacturing" className="group block">
              <div className="bg-yellow-50 hover:bg-yellow-100 rounded-lg p-6 transition-colors text-center">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-yellow-600">
                  {content.industries.manufacturing}
                </h3>
              </div>
            </a>
            
            {/* Security */}
            <a href="/industries/security" className="group block">
              <div className="bg-red-50 hover:bg-red-100 rounded-lg p-6 transition-colors text-center">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-red-600">
                  {content.industries.security}
                </h3>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section - AI Search Optimized */}
      <section className="py-20 bg-gray-50" itemScope itemType="https://schema.org/FAQPage">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about UNEOM professional uniforms
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {homeFAQs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md p-6"
                itemScope 
                itemProp="mainEntity" 
                itemType="https://schema.org/Question"
              >
                <h3 
                  className="text-lg font-semibold text-gray-800 mb-3 flex items-start"
                  itemProp="name"
                >
                  <span className="text-blue-600 mr-3">Q:</span>
                  {faq.question}
                </h3>
                <div 
                  itemScope 
                  itemProp="acceptedAnswer" 
                  itemType="https://schema.org/Answer"
                >
                  <p className="text-gray-600 leading-relaxed pl-8" itemProp="text">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <a
              href="/faq"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              View All FAQs
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Elevate Your Team's Professional Image?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get a custom quote for your organization's uniform needs. Free consultation and design services included.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/quote"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Get Free Quote
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Language Switcher */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">Also available in Arabic | متوفر أيضاً باللغة العربية</p>
          <a
            href="/ar"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            العربية
          </a>
        </div>
      </section>
    </>
  );
}
