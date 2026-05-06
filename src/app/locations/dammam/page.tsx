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
  title: 'Uniforms in Dammam Saudi Arabia | UNEOM Uniform Supplier Eastern Region',
  titleAr: 'الزي الموحد في الدمام السعودية | يونيوم مورد الأزياء المنطقة الشرقية',
  description: 'UNEOM Dammam - Leading uniform supplier in Eastern Province. Industrial workwear, oil & gas uniforms, medical scrubs, corporate attire for Dammam, Khobar, Dhahran. Fast delivery!',
  descriptionAr: 'يونيوم الدمام - المورد الرائد للأزياء في المنطقة الشرقية. ملابس صناعية، زي النفط والغاز، سكراب طبي، ملابس شركات للدمام والخبر والظهران!',
  keywords: [
    'uniforms dammam',
    'uniform supplier dammam',
    'industrial uniforms eastern province',
    'oil gas uniforms saudi',
    'medical scrubs dammam',
    'corporate uniforms khobar',
    'UNEOM dammam',
    'workwear dhahran',
  ],
  keywordsAr: ['يونيفورم الدمام', 'مورد أزياء الدمام', 'ملابس صناعية الشرقية', 'زي نفط وغاز'],
  locale: 'en',
  pageType: 'location',
  path: '/locations/dammam',
  image: '/images/locations/dammam-uneom.jpg',
  imageAlt: 'UNEOM Uniforms in Dammam Eastern Province Saudi Arabia',
  aiSummary: 'UNEOM Dammam is the Eastern Province hub serving Dammam, Khobar, Dhahran, Jubail, and surrounding industrial areas. Specializing in industrial and oil & gas uniforms for Aramco contractors, refineries, and petrochemical companies. Also providing medical, corporate, and hospitality uniforms for the Eastern Region.',
  aiSummaryAr: 'يونيوم الدمام هي مركز المنطقة الشرقية تخدم الدمام والخبر والظهران والجبيل. متخصصون في الأزياء الصناعية وزي النفط والغاز.'
});

export const dynamic = 'force-static';

const dammamFAQs = [
  {
    question: 'Where is UNEOM located in Dammam?',
    questionAr: 'أين يقع يونيوم في الدمام؟',
    answer: 'UNEOM Dammam showroom is located on Prince Mohammed Bin Fahd Road, Al Faisaliyah District, Dammam. We serve the entire Eastern Province including Khobar, Dhahran, and Jubail.',
    answerAr: 'تقع صالة عرض يونيوم الدمام على طريق الأمير محمد بن فهد، حي الفيصلية، الدمام. نخدم جميع المنطقة الشرقية بما فيها الخبر والظهران والجبيل.'
  },
  {
    question: 'Does UNEOM supply industrial uniforms for oil companies?',
    questionAr: 'هل يوفر يونيوم أزياء صناعية لشركات النفط؟',
    answer: 'Yes, UNEOM Dammam specializes in industrial uniforms for the oil & gas sector. We supply flame resistant coveralls, safety workwear, and industrial uniforms to Aramco contractors, refineries, and petrochemical companies.',
    answerAr: 'نعم، يتخصص يونيوم الدمام في الأزياء الصناعية لقطاع النفط والغاز. نوفر أفرول مقاوم للحريق وملابس سلامة وأزياء صناعية لمقاولي أرامكو والمصافي وشركات البتروكيماويات.'
  },
  {
    question: 'Can UNEOM deliver to Jubail Industrial City?',
    questionAr: 'هل يمكن ليونيوم التوصيل لمدينة الجبيل الصناعية؟',
    answer: 'Yes, we provide regular delivery to Jubail Industrial City, Ras Tanura, and all industrial areas in the Eastern Province. Special arrangements for large industrial orders.',
    answerAr: 'نعم، نوفر توصيل منتظم لمدينة الجبيل الصناعية ورأس تنورة وجميع المناطق الصناعية في المنطقة الشرقية.'
  },
  {
    question: 'What are UNEOM Dammam working hours?',
    questionAr: 'ما ساعات عمل يونيوم الدمام؟',
    answer: 'UNEOM Dammam is open Sunday to Thursday, 8:00 AM to 5:00 PM. Industrial clients can arrange after-hours appointments.',
    answerAr: 'يونيوم الدمام مفتوح من الأحد إلى الخميس، من 8:00 صباحاً إلى 5:00 مساءً. يمكن للعملاء الصناعيين ترتيب مواعيد خارج أوقات العمل.'
  },
];

const locationData = {
  name: 'Dammam',
  nameAr: 'الدمام',
  address: 'Prince Mohammed Bin Fahd Road, Al Faisaliyah District, Dammam 32241',
  phone: '+966 56 461 2017',
  email: 'dammam@uneom.com',
  whatsapp: '+966564612017',
  workingHours: 'Sunday - Thursday: 8:00 AM - 5:00 PM',
};

const services = [
  { icon: '🛢️', title: 'Oil & Gas Uniforms', desc: 'FR coveralls and industrial wear for petroleum sector' },
  { icon: '🏭', title: 'Industrial Workwear', desc: 'Safety uniforms for factories and plants' },
  { icon: '🏥', title: 'Medical Uniforms', desc: 'Healthcare wear for Eastern Province hospitals' },
  { icon: '🏢', title: 'Corporate Attire', desc: 'Business uniforms for Dammam companies' },
  { icon: '⚗️', title: 'Petrochemical Wear', desc: 'Specialized uniforms for chemical industry' },
  { icon: '🛡️', title: 'Safety Gear', desc: 'Hi-vis and protective clothing' },
];

export default function DammamLocationPage() {
  return (
    <>
      <SEO2026
        title="Uniforms in Dammam Saudi Arabia | UNEOM"
        titleAr="الزي الموحد في الدمام السعودية | يونيوم"
        description="UNEOM Dammam - Leading uniform supplier for the Eastern Province."
        descriptionAr="يونيوم الدمام - المورد الرائد للأزياء في المنطقة الشرقية."
        locale="en"
        pageType="location"
        mainEntity="UNEOM Dammam Uniform Store"
        mainEntityAr="متجر يونيوم الدمام للأزياء"
        primaryImage="/images/locations/dammam-uneom.jpg"
        primaryImageAlt="UNEOM Uniforms in Dammam"
        faqs={dammamFAQs}
        breadcrumbs={[
          { name: 'Locations', nameAr: 'المواقع', url: '/locations' },
          { name: 'Dammam', nameAr: 'الدمام', url: '/locations/dammam' },
        ]}
        location={{
          name: 'UNEOM Dammam',
          address: locationData.address,
          city: 'Dammam',
          region: 'Eastern Province',
          country: 'Saudi Arabia',
          phone: locationData.phone,
          email: locationData.email,
          latitude: 26.4207,
          longitude: 50.0888,
        }}
        certifications={['ISO 9001:2015', 'SASO Approved']}
        clientCount={150}
        yearsInBusiness={20}
        serviceArea={['Dammam', 'Khobar', 'Dhahran', 'Jubail', 'Eastern Province']}
      />

      <section className="bg-gradient-to-br from-orange-900 via-yellow-800 to-orange-800 text-white relative overflow-hidden">
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Locations', href: '/locations' },
              { label: 'Dammam', href: '/locations/dammam' }
            ]}
            className="text-white/80 mb-6 relative z-10 pt-8"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24 relative z-10">
            <div className="text-content">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="text-yellow-400">🛢️</span>
                <span className="text-sm font-medium">Eastern Province Hub</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Uniforms in <span className="bg-gradient-to-r from-yellow-300 to-orange-300 text-transparent bg-clip-text">Dammam</span>
              </h1>
              
              <p className="text-xl mb-6 text-orange-100 leading-relaxed max-w-2xl">
                UNEOM Dammam serves the Eastern Province with industrial workwear and professional uniforms. 
                Specialized in oil & gas sector requirements.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-3"><span>📍</span><span>{locationData.address}</span></div>
                  <div className="flex items-center gap-3"><span>📞</span><span dir="ltr">{locationData.phone}</span></div>
                  <div className="flex items-center gap-3"><span>📧</span><span>{locationData.email}</span></div>
                  <div className="flex items-center gap-3"><span>🕐</span><span>{locationData.workingHours}</span></div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/quote?location=dammam" variant="secondary" size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-bold border-0">Get Quote in Dammam →</Button>
                <Button href="/contact?location=dammam" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-orange-900">Visit Showroom</Button>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/locations/dammam-cityscape.jpg" alt="Dammam cityscape" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-20">
            <SectionHeading subtitle="What We Offer in Dammam" centered>Uniform Services Available</SectionHeading>
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
            <SectionHeading subtitle="Common Questions" centered>UNEOM Dammam FAQ</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {dammamFAQs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center bg-gradient-to-r from-orange-600 to-yellow-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Visit UNEOM Dammam Today</h2>
            <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto text-orange-100">
              Serving the Eastern Province with quality industrial and professional uniforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote?location=dammam" className="inline-flex items-center px-8 py-4 bg-white text-orange-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">Get Free Quote →</Link>
              <Link href={`https://wa.me/${locationData.whatsapp.replace(/[^0-9]/g, '')}`} className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all">WhatsApp Us</Link>
            </div>
          </section>
        </Container>
      </main>

      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-3 text-sm">This page is also available in Arabic</p>
          <Link href="/ar/locations/dammam" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">🇸🇦 العربية</Link>
        </div>
      </section>
    </>
  );
}


