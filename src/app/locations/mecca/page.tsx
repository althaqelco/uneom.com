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

export const metadata: Metadata = generateMetadata2026({
  title: 'Uniforms in Mecca Saudi Arabia | UNEOM Hajj Umrah Hospitality Uniforms',
  titleAr: 'الزي الموحد في مكة المكرمة | يونيوم أزياء الحج والعمرة',
  description: 'UNEOM Mecca - Uniforms for Hajj/Umrah hospitality services. Hotel uniforms, healthcare attire, transport staff uniforms in the Holy City. Serving pilgrim service providers!',
  descriptionAr: 'يونيوم مكة المكرمة - أزياء لخدمات ضيافة الحج والعمرة. زي الفنادق، الملابس الصحية، زي موظفي النقل في المدينة المقدسة!',
  keywords: ['uniforms mecca', 'hajj uniforms', 'umrah hospitality uniforms', 'hotel uniforms mecca', 'UNEOM mecca'],
  keywordsAr: ['يونيفورم مكة', 'أزياء الحج', 'زي ضيافة العمرة', 'زي فنادق مكة'],
  locale: 'en',
  pageType: 'location',
  path: '/locations/mecca',
  image: '/images/locations/mecca-uneom.jpg',
  imageAlt: 'UNEOM Uniforms in Mecca for Hajj Umrah Services',
  aiSummary: 'UNEOM Mecca serves hospitality and service providers in the Holy City. Specialized in uniforms for Hajj and Umrah hospitality, hotels near Haram, transport services, healthcare providers, and pilgrim services. Fast delivery during peak seasons.',
  aiSummaryAr: 'يونيوم مكة تخدم مقدمي الضيافة والخدمات في المدينة المقدسة. متخصصون في أزياء ضيافة الحج والعمرة.'
});

export const dynamic = 'force-static';

const meccaFAQs = [
  {
    question: 'Does UNEOM provide uniforms for Hajj service providers in Mecca?',
    questionAr: 'هل يوفر يونيوم أزياء لمقدمي خدمات الحج في مكة؟',
    answer: 'Yes, UNEOM specializes in uniforms for Hajj and Umrah service providers. We supply hotels, transport companies, catering services, and healthcare providers serving pilgrims in Mecca.',
    answerAr: 'نعم، يتخصص يونيوم في أزياء مقدمي خدمات الحج والعمرة. نوفر للفنادق وشركات النقل وخدمات التموين ومقدمي الرعاية الصحية الذين يخدمون الحجاج في مكة.'
  },
  {
    question: 'Can UNEOM deliver uniforms during Hajj season?',
    questionAr: 'هل يمكن ليونيوم توصيل الأزياء خلال موسم الحج؟',
    answer: 'Yes, we maintain special operations during Hajj and Umrah seasons with extended hours and express delivery. We recommend ordering in advance for peak seasons.',
    answerAr: 'نعم، نحافظ على عمليات خاصة خلال مواسم الحج والعمرة مع ساعات ممتدة وتوصيل سريع. ننصح بالطلب مسبقاً للمواسم المزدحمة.'
  },
  {
    question: 'What types of uniforms are needed for Mecca hospitality?',
    questionAr: 'ما أنواع الأزياء المطلوبة لضيافة مكة؟',
    answer: 'Mecca hospitality requires hotel uniforms, transport staff attire, catering uniforms, healthcare wear for pilgrim clinics, and guide uniforms. All designed for comfort in hot weather.',
    answerAr: 'ضيافة مكة تتطلب أزياء فنادق، ملابس موظفي النقل، أزياء التموين، ملابس صحية لعيادات الحجاج، وأزياء المرشدين.'
  },
];

const services = [
  { icon: '🕌', title: 'Hajj/Umrah Hospitality', desc: 'Uniforms for pilgrim service providers' },
  { icon: '🏨', title: 'Hotel Uniforms', desc: 'Attire for Mecca hotels near Haram' },
  { icon: '🚌', title: 'Transport Staff', desc: 'Uniforms for pilgrim transport services' },
  { icon: '🏥', title: 'Healthcare Wear', desc: 'Medical uniforms for pilgrim clinics' },
  { icon: '🍽️', title: 'Catering Uniforms', desc: 'Food service attire for pilgrim meals' },
  { icon: '🎯', title: 'Guide Attire', desc: 'Uniforms for religious guides' },
];

export default function MeccaLocationPage() {
  return (
    <>
      <SEO2026
        title="Uniforms in Mecca Saudi Arabia | UNEOM"
        titleAr="الزي الموحد في مكة المكرمة | يونيوم"
        description="UNEOM Mecca - Uniforms for Hajj/Umrah hospitality services."
        descriptionAr="يونيوم مكة - أزياء لخدمات ضيافة الحج والعمرة."
        locale="en"
        pageType="location"
        mainEntity="UNEOM Mecca Uniform Services"
        mainEntityAr="خدمات يونيوم مكة للأزياء"
        primaryImage="/images/locations/mecca-uneom.jpg"
        primaryImageAlt="UNEOM Uniforms in Mecca"
        faqs={meccaFAQs}
        breadcrumbs={[
          { name: 'Locations', nameAr: 'المواقع', url: '/locations' },
          { name: 'Mecca', nameAr: 'مكة المكرمة', url: '/locations/mecca' },
        ]}
        serviceArea={['Mecca', 'Mina', 'Arafat', 'Muzdalifah']}
      />

      <section className="bg-gradient-to-br from-emerald-900 via-green-800 to-teal-800 text-white relative overflow-hidden">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Locations', href: '/locations' }, { label: 'Mecca', href: '/locations/mecca' }]} className="text-white/80 mb-6 relative z-10 pt-8" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="text-green-400">🕌</span>
                <span className="text-sm font-medium">Holy City Services</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Uniforms in <span className="bg-gradient-to-r from-green-300 to-emerald-300 text-transparent bg-clip-text">Mecca</span>
              </h1>
              
              <p className="text-xl mb-8 text-green-100 leading-relaxed max-w-2xl">
                Serving Hajj and Umrah hospitality providers with quality uniforms. 
                Hotels, transport, healthcare, and catering services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/quote?location=mecca" variant="secondary" size="lg" className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold border-0">Get Quote for Mecca →</Button>
                <Button href="/contact?location=mecca" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-900">Contact Us</Button>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/locations/mecca-cityscape.jpg" alt="Mecca cityscape" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-20">
            <SectionHeading subtitle="Hajj & Umrah Uniform Services" centered>What We Offer in Mecca</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>UNEOM Mecca FAQ</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {meccaFAQs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Serving Mecca's Hospitality Industry</h2>
            <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">Quality uniforms for Hajj and Umrah service providers.</p>
            <Link href="/quote?location=mecca" className="inline-flex items-center px-8 py-4 bg-white text-green-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">Get Free Quote →</Link>
          </section>
        </Container>
      </main>

      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <Link href="/ar/locations/mecca" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">🇸🇦 العربية</Link>
        </div>
      </section>
    </>
  );
}


