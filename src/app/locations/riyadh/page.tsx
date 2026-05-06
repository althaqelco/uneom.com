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
// SEO 2026 OPTIMIZED METADATA
// ============================================
export const metadata: Metadata = generateMetadata2026({
  title: 'Uniforms in Riyadh Saudi Arabia | UNEOM Uniform Supplier Riyadh',
  titleAr: 'الزي الموحد في الرياض السعودية | يونيوم مورد الأزياء الرياض',
  description: 'UNEOM Riyadh - Leading uniform supplier in Riyadh, Saudi Arabia. Medical scrubs, corporate uniforms, school uniforms, hospitality attire. Headquarters with showroom, fast delivery. Visit us or order online!',
  descriptionAr: 'يونيوم الرياض - المورد الرائد للأزياء الموحدة في الرياض السعودية. سكراب طبي، زي شركات، زي مدرسي، زي ضيافة. مقر رئيسي مع صالة عرض، توصيل سريع. زورونا أو اطلب أونلاين!',
  keywords: [
    'uniforms riyadh',
    'uniform supplier riyadh',
    'uniforms in riyadh saudi arabia',
    'medical scrubs riyadh',
    'corporate uniforms riyadh',
    'school uniforms riyadh',
    'hotel uniforms riyadh',
    'workwear riyadh',
    'UNEOM riyadh',
    'uniform shop riyadh',
    'buy uniforms riyadh',
    'uniform store riyadh',
    'custom uniforms riyadh',
    'bulk uniforms riyadh',
  ],
  keywordsAr: [
    'يونيفورم الرياض',
    'مورد أزياء الرياض',
    'سكراب طبي الرياض',
    'زي شركات الرياض',
    'زي مدرسي الرياض',
    'زي فنادق الرياض',
    'يونيوم الرياض',
  ],
  locale: 'en',
  pageType: 'location',
  path: '/locations/riyadh',
  image: '/images/locations/riyadh-uneom-showroom.jpg',
  imageAlt: 'UNEOM Uniforms Showroom in Riyadh Saudi Arabia',
  aiSummary: 'UNEOM Riyadh is the headquarters and main showroom for Saudi Arabia\'s leading uniform manufacturer. Located on King Fahd Road, Olaya District, Riyadh. We provide medical scrubs, hospital uniforms, corporate attire, school uniforms, hotel uniforms, and industrial workwear. Services include custom design, bulk orders, embroidery, and same-day delivery in Riyadh. Open Sunday-Thursday 8:30 AM - 5:30 PM. Contact: +966 56 461 2017.',
  aiSummaryAr: 'يونيوم الرياض هو المقر الرئيسي وصالة العرض الرئيسية لأكبر مصنع أزياء موحدة في السعودية. يقع على طريق الملك فهد، حي العليا، الرياض. نقدم سكراب طبي، زي مستشفيات، ملابس شركات، زي مدرسي، زي فنادق، وملابس صناعية.'
});

export const dynamic = 'force-static';

// ============================================
// FAQ DATA
// ============================================
const riyadhFAQs = [
  {
    question: 'Where is UNEOM located in Riyadh?',
    questionAr: 'أين يقع يونيوم في الرياض؟',
    answer: 'UNEOM\'s Riyadh headquarters and main showroom is located on King Fahd Road, Olaya District, Riyadh 12214. We are easily accessible from all areas of Riyadh and provide free parking for visitors. The showroom features samples of all our uniform collections.',
    answerAr: 'يقع المقر الرئيسي ليونيوم وصالة العرض الرئيسية على طريق الملك فهد، حي العليا، الرياض 12214. يمكن الوصول إلينا بسهولة من جميع مناطق الرياض ونوفر موقف سيارات مجاني للزوار.'
  },
  {
    question: 'What types of uniforms are available at UNEOM Riyadh?',
    questionAr: 'ما أنواع الأزياء المتوفرة في يونيوم الرياض؟',
    answer: 'UNEOM Riyadh offers all uniform types: Medical scrubs and healthcare uniforms, Corporate and office attire, School uniforms for all grades, Hotel and restaurant uniforms, Industrial and safety workwear, Security guard uniforms. Our Riyadh showroom has samples of all products.',
    answerAr: 'يقدم يونيوم الرياض جميع أنواع الأزياء: سكراب طبي وأزياء رعاية صحية، ملابس شركات ومكاتب، زي مدرسي لجميع المراحل، زي فنادق ومطاعم، ملابس صناعية وسلامة، زي حراسة أمنية.'
  },
  {
    question: 'Does UNEOM offer same-day delivery in Riyadh?',
    questionAr: 'هل يوفر يونيوم توصيل في نفس اليوم في الرياض؟',
    answer: 'Yes, UNEOM offers same-day delivery for stock items within Riyadh city. Orders placed before 12 PM can be delivered the same day. For custom orders, we offer 48-hour express service in Riyadh. All deliveries within Riyadh are free for orders over SAR 500.',
    answerAr: 'نعم، يوفر يونيوم توصيل في نفس اليوم للمنتجات المتوفرة داخل مدينة الرياض. الطلبات قبل 12 ظهراً يمكن توصيلها في نفس اليوم. للطلبات المخصصة، نقدم خدمة سريعة 48 ساعة في الرياض.'
  },
  {
    question: 'What are UNEOM Riyadh showroom hours?',
    questionAr: 'ما ساعات عمل صالة عرض يونيوم الرياض؟',
    answer: 'UNEOM Riyadh showroom is open Sunday to Thursday, 8:30 AM to 5:30 PM. We are closed on Fridays and Saturdays. Appointments are recommended for custom design consultations. Walk-ins are welcome for viewing samples and placing orders.',
    answerAr: 'صالة عرض يونيوم الرياض مفتوحة من الأحد إلى الخميس، من 8:30 صباحاً إلى 5:30 مساءً. نحن مغلقون أيام الجمعة والسبت. يُنصح بحجز موعد لاستشارات التصميم المخصص.'
  },
  {
    question: 'Can I visit UNEOM Riyadh to see uniform samples?',
    questionAr: 'هل يمكنني زيارة يونيوم الرياض لرؤية عينات الأزياء؟',
    answer: 'Absolutely! We encourage customers to visit our Riyadh showroom to see and feel our uniform quality. Our showroom displays samples from all categories including medical, corporate, hospitality, education, and industrial uniforms. Our staff can provide personalized consultations.',
    answerAr: 'بالتأكيد! نشجع العملاء على زيارة صالة عرضنا في الرياض لرؤية جودة أزياءنا ولمسها. تعرض صالة العرض لدينا عينات من جميع الفئات. يمكن لموظفينا تقديم استشارات شخصية.'
  },
  {
    question: 'Does UNEOM Riyadh serve hospitals and medical centers?',
    questionAr: 'هل يخدم يونيوم الرياض المستشفيات والمراكز الطبية؟',
    answer: 'Yes, UNEOM Riyadh is a trusted supplier for many major hospitals and medical centers in the capital. We serve King Faisal Specialist Hospital, King Saud Medical City, and numerous private hospitals and clinics. We offer specialized antimicrobial medical uniforms and bulk ordering for healthcare facilities.',
    answerAr: 'نعم، يونيوم الرياض مورد موثوق للعديد من المستشفيات والمراكز الطبية الكبرى في العاصمة. نخدم مستشفى الملك فيصل التخصصي ومدينة الملك سعود الطبية والعديد من المستشفيات والعيادات الخاصة.'
  },
];

// ============================================
// LOCATION DATA
// ============================================
const locationData = {
  name: 'Riyadh',
  nameAr: 'الرياض',
  address: 'King Fahd Road, Olaya District, Riyadh 12214, Saudi Arabia',
  addressAr: 'طريق الملك فهد، حي العليا، الرياض 12214، المملكة العربية السعودية',
  phone: '+966 56 461 2017',
  email: 'riyadh@uneom.com',
  whatsapp: '+966564612017',
  workingHours: 'Sunday - Thursday: 8:30 AM - 5:30 PM',
  workingHoursAr: 'الأحد - الخميس: 8:30 صباحاً - 5:30 مساءً',
  isHeadquarters: true,
};

const services = [
  { icon: '🏥', title: 'Medical Uniforms', titleAr: 'الأزياء الطبية', desc: 'Scrubs, lab coats, nursing uniforms for Riyadh hospitals' },
  { icon: '🏢', title: 'Corporate Attire', titleAr: 'الملابس المؤسسية', desc: 'Business suits, office uniforms for Riyadh companies' },
  { icon: '🎓', title: 'School Uniforms', titleAr: 'الزي المدرسي', desc: 'Student uniforms for Riyadh schools' },
  { icon: '🏨', title: 'Hospitality Wear', titleAr: 'أزياء الضيافة', desc: 'Hotel, restaurant uniforms for Riyadh hospitality' },
  { icon: '🏭', title: 'Industrial Workwear', titleAr: 'الملابس الصناعية', desc: 'Safety workwear for Riyadh factories' },
  { icon: '🛡️', title: 'Security Uniforms', titleAr: 'أزياء الأمن', desc: 'Guard uniforms for Riyadh security companies' },
];

// ============================================
// RIYADH LOCATION PAGE
// ============================================
export default function RiyadhLocationPage() {
  return (
    <>
      <SEO2026
        title="Uniforms in Riyadh Saudi Arabia | UNEOM"
        titleAr="الزي الموحد في الرياض السعودية | يونيوم"
        description="UNEOM Riyadh headquarters - Leading uniform supplier in Riyadh for medical, corporate, school, and hospitality uniforms."
        descriptionAr="مقر يونيوم الرياض - المورد الرائد للأزياء الموحدة في الرياض للقطاعات الطبية والشركات والمدارس والضيافة."
        locale="en"
        pageType="location"
        mainEntity="UNEOM Riyadh Uniform Store"
        mainEntityAr="متجر يونيوم للأزياء الرياض"
        primaryImage="/images/locations/riyadh-uneom-showroom.jpg"
        primaryImageAlt="UNEOM Uniforms Showroom in Riyadh"
        faqs={riyadhFAQs}
        breadcrumbs={[
          { name: 'Locations', nameAr: 'المواقع', url: '/locations' },
          { name: 'Riyadh', nameAr: 'الرياض', url: '/locations/riyadh' },
        ]}
        location={{
          name: 'UNEOM Riyadh',
          address: locationData.address,
          city: 'Riyadh',
          region: 'Riyadh Province',
          country: 'Saudi Arabia',
          postalCode: '12214',
          phone: locationData.phone,
          email: locationData.email,
          latitude: 24.7136,
          longitude: 46.6753,
        }}
        conversationalKeywords={[
          'uniform shop near me riyadh',
          'where to buy uniforms in riyadh',
          'best uniform supplier riyadh',
        ]}
        voiceSearchQueries={[
          'Find uniform store in Riyadh',
          'UNEOM location Riyadh',
        ]}
        certifications={['ISO 9001:2015']}
        clientCount={500}
        yearsInBusiness={20}
        serviceArea={['Riyadh', 'Central Region', 'Saudi Arabia']}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Locations', href: '/locations' },
              { label: 'Riyadh', href: '/locations/riyadh' }
            ]}
            className="text-white/80 mb-6 relative z-10 pt-8"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24 relative z-10">
            <div className="text-content">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="text-yellow-400">🏢</span>
                <span className="text-sm font-medium">UNEOM Headquarters</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Uniforms in{' '}
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 text-transparent bg-clip-text">
                  Riyadh
                </span>
              </h1>
              
              <p className="text-xl mb-6 text-blue-100 leading-relaxed max-w-2xl">
                Visit UNEOM's headquarters and main showroom in Riyadh. 
                See our complete uniform collection and get expert consultation.
              </p>
              
              {/* Contact Info */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-3">
                    <span>📍</span>
                    <span>{locationData.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>📞</span>
                    <span dir="ltr">{locationData.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>📧</span>
                    <span>{locationData.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>🕐</span>
                    <span>{locationData.workingHours}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  href="/quote?location=riyadh"
                  variant="secondary" 
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold border-0"
                >
                  Get Quote in Riyadh →
                </Button>
                <Button 
                  href="/contact?location=riyadh"
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-900"
                >
                  Visit Showroom
                </Button>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/locations/riyadh-cityscape.jpg"
                  alt="Riyadh cityscape - UNEOM uniform supplier location"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          {/* Services in Riyadh */}
          <section className="mb-20">
            <SectionHeading subtitle="What We Offer in Riyadh" centered>
              Uniform Services Available
            </SectionHeading>
            
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

          {/* FAQ Section */}
          <section className="mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>
              UNEOM Riyadh FAQ
            </SectionHeading>
            
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {riyadhFAQs.map((faq, index) => (
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
              Visit UNEOM Riyadh Today
            </h2>
            <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto text-blue-100">
              Experience our quality uniforms firsthand at our Riyadh showroom. 
              Expert consultation and fast service available.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/quote?location=riyadh" 
                className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all duration-300 shadow-lg"
              >
                Get Free Quote →
              </Link>
              <Link 
                href={`https://wa.me/${locationData.whatsapp.replace(/[^0-9]/g, '')}`}
                className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all duration-300"
              >
                WhatsApp Us
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
            href="/ar/locations/riyadh"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
          >
            🇸🇦 العربية
          </Link>
        </div>
      </section>
    </>
  );
}
