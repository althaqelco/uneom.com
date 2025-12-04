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
  title: 'Uniforms in Jeddah Saudi Arabia | UNEOM Uniform Supplier Jeddah',
  titleAr: 'الزي الموحد في جدة السعودية | يونيوم مورد الأزياء جدة',
  description: 'UNEOM Jeddah - Premium uniform supplier in Jeddah, Saudi Arabia. Medical scrubs, hotel uniforms, corporate attire, school uniforms. Western Region showroom, fast delivery. Visit us!',
  descriptionAr: 'يونيوم جدة - مورد الأزياء الرائد في جدة. سكراب طبي، زي فنادق، ملابس شركات، زي مدرسي. صالة عرض المنطقة الغربية، توصيل سريع!',
  keywords: [
    'uniforms jeddah',
    'uniform supplier jeddah',
    'medical scrubs jeddah',
    'hotel uniforms jeddah',
    'corporate uniforms jeddah',
    'school uniforms jeddah',
    'UNEOM jeddah',
    'workwear jeddah',
  ],
  keywordsAr: ['يونيفورم جدة', 'مورد أزياء جدة', 'سكراب طبي جدة', 'زي فنادق جدة'],
  locale: 'en',
  pageType: 'location',
  path: '/locations/jeddah',
  image: '/images/locations/jeddah-uneom.jpg',
  imageAlt: 'UNEOM Uniforms in Jeddah Saudi Arabia',
  aiSummary: 'UNEOM Jeddah is the Western Region showroom serving Jeddah, Mecca, Medina, and surrounding areas. Located on Tahlia Street, Al Andalus District. We provide medical uniforms, hotel staff attire, corporate wear, and school uniforms. Special expertise in hospitality uniforms for Jeddah hotels and Hajj/Umrah services.',
  aiSummaryAr: 'يونيوم جدة هي صالة عرض المنطقة الغربية تخدم جدة ومكة والمدينة. تقع على شارع التحلية، حي الأندلس.'
});

export const dynamic = 'force-static';

const jeddahFAQs = [
  {
    question: 'Where is UNEOM located in Jeddah?',
    questionAr: 'أين يقع يونيوم في جدة؟',
    answer: 'UNEOM Jeddah showroom is located on Tahlia Street, Al Andalus District, Jeddah. We serve the entire Western Region including Mecca and Medina.',
    answerAr: 'تقع صالة عرض يونيوم جدة على شارع التحلية، حي الأندلس، جدة. نخدم جميع المنطقة الغربية بما فيها مكة والمدينة.'
  },
  {
    question: 'Does UNEOM Jeddah supply hotel uniforms?',
    questionAr: 'هل يوفر يونيوم جدة أزياء الفنادق؟',
    answer: 'Yes, UNEOM Jeddah specializes in hospitality uniforms for the many hotels and resorts in the Western Region. We serve major hotel chains on the Red Sea coast and provide Hajj/Umrah hospitality uniforms.',
    answerAr: 'نعم، يتخصص يونيوم جدة في أزياء الضيافة للعديد من الفنادق والمنتجعات في المنطقة الغربية. نخدم سلاسل الفنادق الكبرى على ساحل البحر الأحمر.'
  },
  {
    question: 'Can UNEOM deliver to Mecca and Medina from Jeddah?',
    questionAr: 'هل يمكن ليونيوم التوصيل لمكة والمدينة من جدة؟',
    answer: 'Yes, our Jeddah branch provides fast delivery to Mecca, Medina, and all cities in the Western Region. We offer same-day delivery to nearby areas.',
    answerAr: 'نعم، يوفر فرع جدة توصيل سريع لمكة والمدينة وجميع مدن المنطقة الغربية. نقدم توصيل في نفس اليوم للمناطق القريبة.'
  },
  {
    question: 'What are UNEOM Jeddah working hours?',
    questionAr: 'ما ساعات عمل يونيوم جدة؟',
    answer: 'UNEOM Jeddah is open Sunday to Thursday, 9:00 AM to 6:00 PM. Extended hours available during Hajj and Umrah seasons.',
    answerAr: 'يونيوم جدة مفتوح من الأحد إلى الخميس، من 9:00 صباحاً إلى 6:00 مساءً. ساعات ممتدة خلال مواسم الحج والعمرة.'
  },
];

const locationData = {
  name: 'Jeddah',
  nameAr: 'جدة',
  address: 'Tahlia Street, Al Andalus District, Jeddah 23432, Saudi Arabia',
  addressAr: 'شارع التحلية، حي الأندلس، جدة 23432',
  phone: '+971 55 816 4922',
  email: 'jeddah@uneom.com',
  whatsapp: '+971558164922',
  workingHours: 'Sunday - Thursday: 9:00 AM - 6:00 PM',
};

const services = [
  { icon: '🏨', title: 'Hotel Uniforms', desc: 'Hospitality attire for Jeddah hotels and resorts' },
  { icon: '🏥', title: 'Medical Uniforms', desc: 'Healthcare wear for Jeddah hospitals' },
  { icon: '🏢', title: 'Corporate Attire', desc: 'Business uniforms for Jeddah companies' },
  { icon: '🕌', title: 'Hajj/Umrah Services', desc: 'Hospitality uniforms for pilgrimage services' },
  { icon: '🎓', title: 'School Uniforms', desc: 'Student wear for Jeddah schools' },
  { icon: '🏭', title: 'Industrial Wear', desc: 'Safety workwear for Jeddah factories' },
];

export default function JeddahLocationPage() {
  return (
    <>
      <SEO2026
        title="Uniforms in Jeddah Saudi Arabia | UNEOM"
        titleAr="الزي الموحد في جدة السعودية | يونيوم"
        description="UNEOM Jeddah - Leading uniform supplier for the Western Region."
        descriptionAr="يونيوم جدة - المورد الرائد للأزياء في المنطقة الغربية."
        locale="en"
        pageType="location"
        mainEntity="UNEOM Jeddah Uniform Store"
        mainEntityAr="متجر يونيوم جدة للأزياء"
        primaryImage="/images/locations/jeddah-uneom.jpg"
        primaryImageAlt="UNEOM Uniforms in Jeddah"
        faqs={jeddahFAQs}
        breadcrumbs={[
          { name: 'Locations', nameAr: 'المواقع', url: '/locations' },
          { name: 'Jeddah', nameAr: 'جدة', url: '/locations/jeddah' },
        ]}
        location={{
          name: 'UNEOM Jeddah',
          address: locationData.address,
          city: 'Jeddah',
          region: 'Makkah Province',
          country: 'Saudi Arabia',
          phone: locationData.phone,
          email: locationData.email,
          latitude: 21.5433,
          longitude: 39.1728,
        }}
        certifications={['ISO 9001:2015']}
        clientCount={200}
        yearsInBusiness={20}
        serviceArea={['Jeddah', 'Mecca', 'Medina', 'Western Region']}
      />

      <section className="bg-gradient-to-br from-cyan-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Locations', href: '/locations' },
              { label: 'Jeddah', href: '/locations/jeddah' }
            ]}
            className="text-white/80 mb-6 relative z-10 pt-8"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24 relative z-10">
            <div className="text-content">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="text-cyan-400">🌊</span>
                <span className="text-sm font-medium">Western Region Showroom</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Uniforms in <span className="bg-gradient-to-r from-cyan-300 to-blue-300 text-transparent bg-clip-text">Jeddah</span>
              </h1>
              
              <p className="text-xl mb-6 text-blue-100 leading-relaxed max-w-2xl">
                UNEOM Jeddah serves the Western Region with premium uniforms. 
                Specialized in hospitality and Hajj/Umrah services.
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
                <Button href="/quote?location=jeddah" variant="secondary" size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold border-0">
                  Get Quote in Jeddah →
                </Button>
                <Button href="/contact?location=jeddah" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
                  Visit Showroom
                </Button>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/locations/jeddah-cityscape.jpg" alt="Jeddah cityscape" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-20">
            <SectionHeading subtitle="What We Offer in Jeddah" centered>Uniform Services Available</SectionHeading>
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
            <SectionHeading subtitle="Common Questions" centered>UNEOM Jeddah FAQ</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {jeddahFAQs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Visit UNEOM Jeddah Today</h2>
            <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto text-blue-100">
              Experience our quality uniforms at our Jeddah showroom. Serving the Western Region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote?location=jeddah" className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-lg">Get Free Quote →</Link>
              <Link href={`https://wa.me/${locationData.whatsapp.replace(/[^0-9]/g, '')}`} className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all">WhatsApp Us</Link>
            </div>
          </section>
        </Container>
      </main>

      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-3 text-sm">This page is also available in Arabic</p>
          <Link href="/ar/locations/jeddah" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">🇸🇦 العربية</Link>
        </div>
      </section>
    </>
  );
}
