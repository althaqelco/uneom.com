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
  title: 'About UNEOM | Leading Uniform Manufacturer in Saudi Arabia',
  titleAr: 'عن يونيوم | الشركة الرائدة في تصنيع الأزياء الموحدة في السعودية',
  description: 'UNEOM is Saudi Arabia\'s leading uniform manufacturer since 2004. 20+ years experience, ISO certified, serving 500+ clients. Medical, corporate, hospitality, school, industrial uniforms. Headquartered in Riyadh.',
  descriptionAr: 'يونيوم هي الشركة الرائدة في تصنيع الأزياء الموحدة في السعودية منذ 2004. خبرة 20+ سنة، معتمدة ISO، نخدم 500+ عميل. أزياء طبية، شركات، ضيافة، مدارس، صناعية.',
  keywords: [
    'about UNEOM',
    'uniform manufacturer saudi arabia',
    'uniform company riyadh',
    'UNEOM history',
    'saudi uniform supplier',
    'uniform factory saudi',
    'professional uniforms ksa',
    'UNEOM team',
    'uniform manufacturer experience',
  ],
  keywordsAr: ['عن يونيوم', 'مصنع أزياء السعودية', 'شركة أزياء الرياض', 'تاريخ يونيوم'],
  locale: 'en',
  pageType: 'about',
  path: '/about',
  image: '/images/about/uneom-factory.jpg',
  imageAlt: 'UNEOM Uniform Manufacturing Facility in Saudi Arabia',
  aiSummary: 'UNEOM is Saudi Arabia\'s leading uniform manufacturer, established in 2004 in Riyadh. With 20+ years of experience, we serve 500+ clients across healthcare, corporate, hospitality, education, and industrial sectors. ISO 9001:2015 certified, we have modern manufacturing facilities producing 100,000+ uniforms monthly. Our team of 200+ professionals includes designers, tailors, and industry experts. Headquarters in Riyadh with showrooms in Jeddah and Dammam. We are committed to quality, innovation, and supporting Saudi Vision 2030.',
  aiSummaryAr: 'يونيوم هي الشركة الرائدة في تصنيع الأزياء الموحدة في السعودية، تأسست في 2004 في الرياض. بخبرة 20+ سنة، نخدم 500+ عميل في قطاعات الرعاية الصحية والشركات والضيافة والتعليم والصناعة.'
});

export const dynamic = 'force-static';

// ============================================
// FAQ DATA
// ============================================
const aboutFAQs = [
  {
    question: 'When was UNEOM established?',
    questionAr: 'متى تأسست يونيوم؟',
    answer: 'UNEOM was established in 2004 in Riyadh, Saudi Arabia. We have over 20 years of experience in uniform manufacturing and have grown to become the leading uniform supplier in the Kingdom.',
    answerAr: 'تأسست يونيوم في عام 2004 في الرياض، السعودية. لدينا أكثر من 20 عاماً من الخبرة في تصنيع الأزياء الموحدة ونمت لتصبح المورد الرائد للأزياء في المملكة.'
  },
  {
    question: 'How many clients does UNEOM serve?',
    questionAr: 'كم عدد العملاء الذين تخدمهم يونيوم؟',
    answer: 'UNEOM proudly serves over 500 clients across Saudi Arabia, including major hospitals, corporations, hotel chains, schools, and government institutions.',
    answerAr: 'تفخر يونيوم بخدمة أكثر من 500 عميل في جميع أنحاء السعودية، بما في ذلك المستشفيات الكبرى والشركات وسلاسل الفنادق والمدارس والمؤسسات الحكومية.'
  },
  {
    question: 'Is UNEOM ISO certified?',
    questionAr: 'هل يونيوم معتمدة ISO؟',
    answer: 'Yes, UNEOM is ISO 9001:2015 certified, demonstrating our commitment to quality management systems. We also hold OEKO-TEX Standard 100 certification for our fabrics.',
    answerAr: 'نعم، يونيوم معتمدة ISO 9001:2015، مما يدل على التزامنا بأنظمة إدارة الجودة. نحمل أيضاً شهادة OEKO-TEX Standard 100 لأقمشتنا.'
  },
  {
    question: 'Where is UNEOM headquartered?',
    questionAr: 'أين يقع المقر الرئيسي ليونيوم؟',
    answer: 'UNEOM\'s headquarters is located in Riyadh on King Fahd Road. We also have showrooms and service centers in Jeddah and Dammam to serve clients across the Kingdom.',
    answerAr: 'يقع المقر الرئيسي ليونيوم في الرياض على طريق الملك فهد. لدينا أيضاً صالات عرض ومراكز خدمة في جدة والدمام لخدمة العملاء في جميع أنحاء المملكة.'
  },
  {
    question: 'What industries does UNEOM serve?',
    questionAr: 'ما الصناعات التي تخدمها يونيوم؟',
    answer: 'UNEOM serves multiple industries including healthcare (hospitals, clinics), corporate (banks, offices), hospitality (hotels, restaurants), education (schools, universities), industrial (factories, oil & gas), and security sectors.',
    answerAr: 'تخدم يونيوم صناعات متعددة تشمل الرعاية الصحية (مستشفيات، عيادات)، الشركات (بنوك، مكاتب)، الضيافة (فنادق، مطاعم)، التعليم (مدارس، جامعات)، الصناعة (مصانع، نفط وغاز)، والأمن.'
  },
  {
    question: 'Does UNEOM manufacture locally in Saudi Arabia?',
    questionAr: 'هل يونيوم تصنع محلياً في السعودية؟',
    answer: 'Yes, UNEOM has modern manufacturing facilities in Saudi Arabia, supporting Saudi Vision 2030\'s localization goals. We produce over 100,000 uniform pieces monthly with a team of 200+ skilled professionals.',
    answerAr: 'نعم، لدى يونيوم مرافق تصنيع حديثة في السعودية، تدعم أهداف التوطين في رؤية السعودية 2030. ننتج أكثر من 100,000 قطعة زي شهرياً مع فريق من 200+ متخصص ماهر.'
  },
];

// ============================================
// TEAM DATA
// ============================================
const teamMembers = [
  {
    name: 'Abdullah Al-Qahtani',
    nameAr: 'عبدالله القحطاني',
    role: 'CEO & Founder',
    roleAr: 'الرئيس التنفيذي والمؤسس',
    image: '/images/about/Team/Abdullah_Al-Qahtani-2.png',
    bio: 'With over 20 years in the textile industry, Abdullah founded UNEOM with a vision to revolutionize professional uniforms in Saudi Arabia.'
  },
  {
    name: 'Sara Al-Harbi',
    nameAr: 'سارة الحربي',
    role: 'Chief Design Officer',
    roleAr: 'رئيسة قسم التصميم',
    image: '/images/about/Team/Sara_Al-Harbi.png',
    bio: 'Sara brings over 15 years of fashion design experience, specializing in uniform design that merges functionality with style.'
  },
  {
    name: 'Mohammed Al-Otaibi',
    nameAr: 'محمد العتيبي',
    role: 'Operations Director',
    roleAr: 'مدير العمليات',
    image: '/images/about/Team/Mohammed_Al-Otaibi.png',
    bio: 'Mohammed oversees production and supply chain, ensuring uniforms are produced to the highest quality standards.'
  },
  {
    name: 'Lina Al-Rashid',
    nameAr: 'لينا الراشد',
    role: 'Client Relations Manager',
    roleAr: 'مديرة علاقات العملاء',
    image: '/images/about/Team/Lina_Al-Rashid.png',
    bio: 'Lina leads our client relations team, ensuring every customer receives personalized attention.'
  }
];

// ============================================
// STATS DATA
// ============================================
const stats = [
  { number: '20+', label: 'Years Experience', labelAr: 'سنة خبرة' },
  { number: '500+', label: 'Happy Clients', labelAr: 'عميل سعيد' },
  { number: '100K+', label: 'Uniforms Monthly', labelAr: 'قطعة شهرياً' },
  { number: '200+', label: 'Team Members', labelAr: 'فريق العمل' },
];

// ============================================
// ABOUT PAGE
// ============================================
export default function AboutPage() {
  return (
    <>
      <SEO2026
        title="About UNEOM | Leading Uniform Manufacturer Saudi Arabia"
        titleAr="عن يونيوم | الشركة الرائدة في تصنيع الأزياء السعودية"
        description="UNEOM is Saudi Arabia's leading uniform manufacturer since 2004."
        descriptionAr="يونيوم هي الشركة الرائدة في تصنيع الأزياء في السعودية منذ 2004."
        locale="en"
        pageType="about"
        mainEntity="UNEOM Uniform Manufacturing Company"
        mainEntityAr="شركة يونيوم لتصنيع الأزياء"
        primaryImage="/images/about/uneom-factory.jpg"
        primaryImageAlt="UNEOM Factory in Saudi Arabia"
        faqs={aboutFAQs}
        breadcrumbs={[
          { name: 'About', nameAr: 'عنا', url: '/about' },
        ]}
        certifications={['ISO 9001:2015', 'OEKO-TEX Standard 100']}
        clientCount={500}
        yearsInBusiness={20}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'About', href: '/about' }
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              About <span className="bg-gradient-to-r from-yellow-300 to-orange-300 text-transparent bg-clip-text">UNEOM</span>
            </h1>
            
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Saudi Arabia's leading uniform manufacturer since 2004. 
              20+ years of excellence in professional attire.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">{stat.number}</div>
                  <div className="text-sm text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          {/* Our Story */}
          <section className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading subtitle="Our Story">
                  Building Saudi Arabia's Uniform Industry
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  Founded in 2004 in Riyadh, UNEOM began with a simple mission: to provide Saudi Arabia 
                  with world-class professional uniforms that combine quality, comfort, and style.
                </p>
                <p className="text-gray-600 mb-6">
                  Today, we are proud to be the Kingdom's leading uniform manufacturer, serving over 500 
                  clients across healthcare, corporate, hospitality, education, and industrial sectors.
                </p>
                <p className="text-gray-600 mb-8">
                  With our modern manufacturing facilities, ISO 9001:2015 certification, and a dedicated 
                  team of 200+ professionals, we continue to set the standard for uniform excellence in 
                  Saudi Arabia and support the Kingdom's Vision 2030 goals.
                </p>
                <Button href="/contact" variant="primary" size="lg">
                  Get in Touch →
                </Button>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/about/uneom-factory.jpg"
                  alt="UNEOM Manufacturing Facility"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Our Team */}
          <section className="mb-20">
            <SectionHeading subtitle="Leadership Team" centered>
              Meet the People Behind UNEOM
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative aspect-square">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>
              About UNEOM FAQ
            </SectionHeading>
            
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {aboutFAQs.map((faq, index) => (
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
          <section className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work with Saudi Arabia's Best?
            </h2>
            <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto text-blue-100">
              Join 500+ satisfied clients who trust UNEOM for their uniform needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/quote" 
                className="inline-flex items-center px-8 py-4 bg-white text-blue-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg"
              >
                Get Free Quote →
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold rounded-xl transition-all"
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
            href="/ar/about"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
          >
            🇸🇦 العربية
          </Link>
        </div>
      </section>
    </>
  );
}
