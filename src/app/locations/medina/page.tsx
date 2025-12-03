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
  title: 'Uniforms in Medina Saudi Arabia | UNEOM Hospitality & Hotel Uniforms',
  titleAr: 'الزي الموحد في المدينة المنورة | يونيوم أزياء الضيافة والفنادق',
  description: 'UNEOM Medina - Uniforms for hotels and hospitality near Prophet\'s Mosque. Hotel staff attire, healthcare uniforms, transport staff wear. Serving pilgrim service providers!',
  descriptionAr: 'يونيوم المدينة المنورة - أزياء للفنادق والضيافة قرب المسجد النبوي. زي موظفي الفنادق، أزياء صحية، ملابس النقل!',
  keywords: ['uniforms medina', 'hotel uniforms medina', 'hospitality medina', 'UNEOM medina'],
  keywordsAr: ['يونيفورم المدينة', 'زي فنادق المدينة', 'ضيافة المدينة المنورة'],
  locale: 'en',
  pageType: 'location',
  path: '/locations/medina',
  image: '/images/locations/medina-uneom.jpg',
  imageAlt: 'UNEOM Uniforms in Medina Saudi Arabia',
  aiSummary: 'UNEOM Medina serves the hospitality sector in Al-Madinah Al-Munawwarah. Providing uniforms for hotels near Prophet\'s Mosque, pilgrim transport services, healthcare facilities, and hospitality providers serving visitors to the Holy City.',
  aiSummaryAr: 'يونيوم المدينة تخدم قطاع الضيافة في المدينة المنورة. توفير أزياء للفنادق قرب المسجد النبوي وخدمات نقل الزوار.'
});

export const dynamic = 'force-static';

const medinaFAQs = [
  {
    question: 'Does UNEOM provide uniforms for Medina hotels?',
    questionAr: 'هل يوفر يونيوم أزياء لفنادق المدينة؟',
    answer: 'Yes, UNEOM serves many hotels in Medina, especially those near the Prophet\'s Mosque. We provide hotel staff uniforms, housekeeping attire, and front desk wear.',
    answerAr: 'نعم، يخدم يونيوم العديد من الفنادق في المدينة، خاصة تلك القريبة من المسجد النبوي. نقدم أزياء موظفي الفنادق والتدبير المنزلي والاستقبال.'
  },
  {
    question: 'Can UNEOM deliver during Umrah season in Medina?',
    questionAr: 'هل يمكن ليونيوم التوصيل خلال موسم العمرة في المدينة؟',
    answer: 'Yes, we maintain special operations during peak seasons with express delivery to Medina from our Jeddah branch. Extended hours available.',
    answerAr: 'نعم، نحافظ على عمليات خاصة خلال المواسم المزدحمة مع توصيل سريع للمدينة من فرع جدة. ساعات ممتدة متاحة.'
  },
  {
    question: 'What uniform services are available in Medina?',
    questionAr: 'ما خدمات الأزياء المتوفرة في المدينة؟',
    answer: 'We provide hotel uniforms, healthcare attire for clinics, transport staff uniforms, restaurant wear, and guide attire. All designed for comfort in Medina\'s climate.',
    answerAr: 'نقدم أزياء فنادق، ملابس صحية للعيادات، أزياء موظفي النقل، ملابس المطاعم، وأزياء المرشدين.'
  },
];

const services = [
  { icon: '🕌', title: 'Hotel Uniforms', desc: 'Attire for hotels near Prophet\'s Mosque' },
  { icon: '🏨', title: 'Hospitality Wear', desc: 'Complete hospitality uniform solutions' },
  { icon: '🚌', title: 'Transport Staff', desc: 'Uniforms for visitor transport services' },
  { icon: '🏥', title: 'Healthcare Wear', desc: 'Medical uniforms for visitor clinics' },
  { icon: '🍽️', title: 'Restaurant Uniforms', desc: 'F&B service attire' },
  { icon: '🎯', title: 'Guide Attire', desc: 'Professional guide uniforms' },
];

export default function MedinaLocationPage() {
  return (
    <>
      <SEO2026
        title="Uniforms in Medina Saudi Arabia | UNEOM"
        titleAr="الزي الموحد في المدينة المنورة | يونيوم"
        description="UNEOM Medina - Uniforms for hotels and hospitality."
        descriptionAr="يونيوم المدينة - أزياء للفنادق والضيافة."
        locale="en"
        pageType="location"
        mainEntity="UNEOM Medina Uniform Services"
        mainEntityAr="خدمات يونيوم المدينة للأزياء"
        primaryImage="/images/locations/medina-uneom.jpg"
        primaryImageAlt="UNEOM Uniforms in Medina"
        faqs={medinaFAQs}
        breadcrumbs={[
          { name: 'Locations', nameAr: 'المواقع', url: '/locations' },
          { name: 'Medina', nameAr: 'المدينة المنورة', url: '/locations/medina' },
        ]}
        serviceArea={['Medina', 'Al-Madinah Region']}
      />

      <section className="bg-gradient-to-br from-teal-900 via-emerald-800 to-green-800 text-white relative overflow-hidden">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Locations', href: '/locations' }, { label: 'Medina', href: '/locations/medina' }]} className="text-white/80 mb-6 relative z-10 pt-8" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="text-emerald-400">🕌</span>
                <span className="text-sm font-medium">Medina Services</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Uniforms in <span className="bg-gradient-to-r from-emerald-300 to-green-300 text-transparent bg-clip-text">Medina</span>
              </h1>
              
              <p className="text-xl mb-8 text-emerald-100 leading-relaxed max-w-2xl">
                Serving the hospitality industry in Al-Madinah Al-Munawwarah. 
                Quality uniforms for hotels and visitor services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/quote?location=medina" variant="secondary" size="lg" className="bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold border-0">Get Quote for Medina →</Button>
                <Button href="/contact?location=medina" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-900">Contact Us</Button>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/locations/medina-cityscape.jpg" alt="Medina cityscape" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-20">
            <SectionHeading subtitle="Hospitality Uniform Services" centered>What We Offer in Medina</SectionHeading>
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
            <SectionHeading subtitle="Common Questions" centered>UNEOM Medina FAQ</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {medinaFAQs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Serving Medina's Hospitality Industry</h2>
            <p className="text-xl mb-8 text-emerald-100 max-w-3xl mx-auto">Quality uniforms for hotels and visitor service providers.</p>
            <Link href="/quote?location=medina" className="inline-flex items-center px-8 py-4 bg-white text-emerald-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">Get Free Quote →</Link>
          </section>
        </Container>
      </main>

      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <Link href="/ar/locations/medina" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">🇸🇦 العربية</Link>
        </div>
      </section>
    </>
  );
}


