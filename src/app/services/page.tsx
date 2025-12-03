import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

// ============================================
// SEO 2026 METADATA
// ============================================
export const metadata: Metadata = generateMetadata2026({
  title: 'Uniform Services Saudi Arabia | UNEOM Custom Design & Manufacturing',
  titleAr: 'خدمات الأزياء الموحدة السعودية | يونيوم تصميم وتصنيع مخصص',
  description: 'UNEOM uniform services in Saudi Arabia: Custom design, manufacturing, embroidery, bulk ordering, program management, and quality assurance. ISO certified, serving 500+ clients nationwide.',
  descriptionAr: 'خدمات يونيوم للأزياء في السعودية: تصميم مخصص، تصنيع، تطريز، طلبات بالجملة، إدارة البرامج، وضمان الجودة. معتمدة ISO، نخدم 500+ عميل في جميع أنحاء المملكة.',
  keywords: [
    'uniform services saudi arabia',
    'custom uniform design',
    'uniform manufacturing ksa',
    'logo embroidery service',
    'bulk uniform ordering',
    'uniform program management',
    'corporate uniform services',
    'uniform quality assurance',
    'uniform measurement services',
    'UNEOM services',
  ],
  keywordsAr: ['خدمات الأزياء السعودية', 'تصميم زي مخصص', 'تصنيع أزياء', 'خدمة تطريز الشعار', 'طلبات بالجملة', 'إدارة برنامج الأزياء'],
  locale: 'en',
  pageType: 'service',
  path: '/services',
  image: '/images/services/uneom-services-banner.jpg',
  imageAlt: 'UNEOM Uniform Services in Saudi Arabia',
  aiSummary: 'UNEOM offers comprehensive uniform services in Saudi Arabia: Custom Design - Our design team creates unique uniforms tailored to your brand. Manufacturing - ISO 9001:2015 certified facilities producing 100,000+ pieces monthly. Logo Embroidery/Printing - Professional branding starting from SAR 15 per piece. Bulk Ordering - Discounts up to 25% for large orders. Program Management - End-to-end uniform program management for corporations. Measurement Services - On-site measurement for accurate sizing. Quality Assurance - Every product undergoes rigorous quality checks. Fast Delivery - Nationwide delivery with same-day options in major cities.',
  aiSummaryAr: 'تقدم يونيوم خدمات أزياء شاملة في السعودية: تصميم مخصص - فريق التصميم لدينا ينشئ أزياء فريدة مخصصة لعلامتك التجارية. التصنيع - مرافق معتمدة ISO 9001:2015 تنتج 100,000+ قطعة شهرياً. تطريز/طباعة الشعار - علامة تجارية احترافية تبدأ من 15 ريال للقطعة. الطلبات بالجملة - خصومات حتى 25% للطلبات الكبيرة.'
});

export const dynamic = 'force-static';

// ============================================
// FAQ DATA
// ============================================
const servicesFAQs = [
  {
    question: 'What uniform services does UNEOM offer?',
    questionAr: 'ما خدمات الأزياء التي تقدمها يونيوم؟',
    answer: 'UNEOM offers comprehensive uniform services: Custom design and consultation, manufacturing and production, logo embroidery and printing, bulk ordering with discounts, uniform program management, measurement services, quality assurance, and nationwide delivery.',
    answerAr: 'تقدم يونيوم خدمات أزياء شاملة: تصميم واستشارة مخصصة، تصنيع وإنتاج، تطريز وطباعة الشعار، طلبات بالجملة مع خصومات، إدارة برنامج الأزياء، خدمات القياس، ضمان الجودة، وتوصيل في جميع أنحاء المملكة.'
  },
  {
    question: 'How does the custom design service work?',
    questionAr: 'كيف تعمل خدمة التصميم المخصص؟',
    answer: 'Our custom design process: 1) Consultation to understand your needs and brand, 2) Design concept development, 3) Fabric and color selection, 4) Sample creation and fitting, 5) Revisions based on feedback, 6) Final production. Minimum order is 25 pieces for custom designs.',
    answerAr: 'عملية التصميم المخصص لدينا: 1) استشارة لفهم احتياجاتك وعلامتك التجارية، 2) تطوير مفهوم التصميم، 3) اختيار القماش واللون، 4) إنشاء العينة والقياس، 5) المراجعات بناءً على الملاحظات، 6) الإنتاج النهائي. الحد الأدنى للطلب 25 قطعة للتصاميم المخصصة.'
  },
  {
    question: 'What is the turnaround time for uniform manufacturing?',
    questionAr: 'ما الوقت المستغرق لتصنيع الأزياء؟',
    answer: 'Standard manufacturing: 10-15 business days. Custom designed uniforms: 15-21 business days. Rush production available for urgent orders (additional fee). Large orders may require additional time.',
    answerAr: 'التصنيع القياسي: 10-15 يوم عمل. الأزياء المصممة خصيصاً: 15-21 يوم عمل. الإنتاج السريع متاح للطلبات العاجلة (رسوم إضافية). الطلبات الكبيرة قد تتطلب وقتاً إضافياً.'
  },
  {
    question: 'How much does logo embroidery cost?',
    questionAr: 'كم تكلفة تطريز الشعار؟',
    answer: 'Logo embroidery starts from SAR 15 per piece for simple logos. Pricing depends on logo size, stitch count, and number of colors. First-time logos require a one-time digitization fee of SAR 150-300. Volume discounts available.',
    answerAr: 'تطريز الشعار يبدأ من 15 ريال للقطعة للشعارات البسيطة. السعر يعتمد على حجم الشعار وعدد الغرز وعدد الألوان. الشعارات الجديدة تتطلب رسوم رقمنة لمرة واحدة 150-300 ريال. خصومات متاحة للكميات.'
  },
  {
    question: 'What is uniform program management?',
    questionAr: 'ما هي إدارة برنامج الأزياء؟',
    answer: 'Uniform program management is an end-to-end service for corporations. It includes: Designing uniform policies, managing inventory, coordinating employee measurements, handling reorders, tracking distribution, and providing regular reports. Ideal for organizations with 50+ employees.',
    answerAr: 'إدارة برنامج الأزياء هي خدمة شاملة للشركات. تشمل: تصميم سياسات الأزياء، إدارة المخزون، تنسيق قياسات الموظفين، التعامل مع إعادة الطلب، تتبع التوزيع، وتقديم تقارير دورية. مثالية للمؤسسات التي لديها 50+ موظف.'
  },
  {
    question: 'Does UNEOM offer measurement services?',
    questionAr: 'هل تقدم يونيوم خدمات القياس؟',
    answer: 'Yes, we offer professional measurement services. For orders of 50+ pieces, our team can visit your location for on-site measurements. We also provide detailed size guides and measurement instructions for self-measurement.',
    answerAr: 'نعم، نقدم خدمات قياس احترافية. للطلبات من 50+ قطعة، يمكن لفريقنا زيارة موقعك للقياسات في الموقع. نوفر أيضاً أدلة مقاسات مفصلة وإرشادات للقياس الذاتي.'
  },
];

// ============================================
// SERVICES DATA
// ============================================
const services = [
  { id: 'custom-design', name: 'Custom Uniform Design', nameAr: 'تصميم الأزياء المخصصة', description: 'Bespoke uniform designs tailored to your brand identity and specific requirements.', icon: '🎨', href: '/services/custom-design', features: ['Brand consultation', 'Design concepts', 'Sample creation', 'Revisions included'] },
  { id: 'manufacturing', name: 'Manufacturing', nameAr: 'التصنيع', description: 'ISO certified manufacturing facility producing 100,000+ uniform pieces monthly.', icon: '🏭', href: '/services/manufacturing', features: ['ISO 9001:2015 certified', 'Quality materials', 'Scalable production', 'Fast turnaround'] },
  { id: 'fabric-selection', name: 'Fabric Selection', nameAr: 'اختيار الأقمشة', description: 'Expert guidance on fabric selection for comfort, durability, and climate suitability.', icon: '🧵', href: '/services/fabric-selection', features: ['200+ fabric options', 'Climate-appropriate', 'Antimicrobial options', 'Fire-resistant (FR)'] },
  { id: 'technical-finishes', name: 'Technical Finishes', nameAr: 'التشطيبات التقنية', description: 'Advanced fabric treatments for specific industry requirements.', icon: '⚙️', href: '/services/technical-finishes', features: ['Stain resistance', 'Wrinkle-free', 'UV protection', 'Moisture-wicking'] },
  { id: 'quality-assurance', name: 'Quality Assurance', nameAr: 'ضمان الجودة', description: 'Rigorous quality control at every stage of production.', icon: '✅', href: '/services/quality-assurance', features: ['Multiple checkpoints', 'Lab testing', 'Defect-free guarantee', 'Consistent quality'] },
  { id: 'corporate-programs', name: 'Corporate Programs', nameAr: 'برامج الشركات', description: 'End-to-end uniform program management for large organizations.', icon: '🏢', href: '/services/corporate-programs', features: ['Inventory management', 'Employee tracking', 'Reorder automation', 'Dedicated account manager'] },
  { id: 'bulk-ordering', name: 'Bulk Ordering', nameAr: 'الطلبات بالجملة', description: 'Volume discounts up to 25% for large uniform orders.', icon: '📦', href: '/services/bulk-ordering', features: ['Up to 25% discount', 'Flexible quantities', 'Staggered delivery', 'Credit terms available'] },
  { id: 'measurement-services', name: 'Measurement Services', nameAr: 'خدمات القياس', description: 'On-site measurement services for accurate uniform sizing.', icon: '📏', href: '/services/measurement-services', features: ['On-site visits', 'Professional fitters', 'Size guarantee', 'Free for 50+ orders'] },
];

// ============================================
// SERVICES PAGE
// ============================================
export default function ServicesPage() {
  return (
    <>
      <SEO2026
        title="Uniform Services Saudi Arabia | UNEOM"
        titleAr="خدمات الأزياء الموحدة السعودية | يونيوم"
        description="Comprehensive uniform services in Saudi Arabia."
        descriptionAr="خدمات أزياء شاملة في السعودية."
        locale="en"
        pageType="service"
        mainEntity="UNEOM Uniform Services"
        mainEntityAr="خدمات يونيوم للأزياء"
        primaryImage="/images/services/uneom-services-banner.jpg"
        primaryImageAlt="UNEOM Uniform Services"
        faqs={servicesFAQs}
        breadcrumbs={[
          { name: 'Services', nameAr: 'الخدمات', url: '/services' },
        ]}
        certifications={['ISO 9001:2015', 'OEKO-TEX Standard 100']}
        clientCount={500}
        yearsInBusiness={20}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-800 text-white relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' }
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Uniform <span className="bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text">Services</span>
            </h1>
            
            <p className="text-xl mb-8 text-purple-100 leading-relaxed">
              From custom design to manufacturing and delivery, UNEOM provides 
              comprehensive uniform services for businesses across Saudi Arabia.
            </p>
            
            {/* Service Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-purple-300">8+</div>
                <div className="text-sm text-purple-200">Services</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-purple-300">ISO</div>
                <div className="text-sm text-purple-200">Certified</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-purple-300">100K+</div>
                <div className="text-sm text-purple-200">Monthly Capacity</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-purple-300">500+</div>
                <div className="text-sm text-purple-200">Clients Served</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          {/* Services Grid */}
          <section className="mb-20">
            <SectionHeading subtitle="What We Offer" centered>
              Our Uniform Services
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={service.href}
                  className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="p-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-xs text-gray-500 flex items-center gap-2">
                          <span className="text-green-500">✓</span> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>
              Services FAQ
            </SectionHeading>
            
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {servicesFAQs.map((faq, index) => (
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
          <section className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto text-purple-100">
              Contact our team to discuss your uniform requirements and 
              get a customized service proposal.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/quote" 
                className="inline-flex items-center px-8 py-4 bg-white text-indigo-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg"
              >
                Request a Quote →
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-indigo-900 font-bold rounded-xl transition-all"
              >
                Contact Us
              </Link>
            </div>
          </section>
        </Container>
      </main>

      {/* Language Switcher */}
      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-3 text-sm">This page is also available in Arabic</p>
          <Link
            href="/ar/services"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
          >
            🇸🇦 العربية
          </Link>
        </div>
      </section>
    </>
  );
}
