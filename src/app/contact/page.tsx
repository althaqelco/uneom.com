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

// ============================================
// SEO 2026 METADATA
// ============================================
export const metadata: Metadata = generateMetadata2026({
  title: 'Contact UNEOM | Uniform Supplier Saudi Arabia | Get Quote',
  titleAr: 'تواصل مع يونيوم | مورد أزياء السعودية | احصل على عرض سعر',
  description: 'Contact UNEOM for uniform orders in Saudi Arabia. Offices in Riyadh, Jeddah, Dammam. Call +966 56 461 2017, email info@uneom.com, or visit our showrooms. Free quotes, fast response!',
  descriptionAr: 'تواصل مع يونيوم لطلبات الأزياء في السعودية. مكاتب في الرياض وجدة والدمام. اتصل +966 56 461 2017، أو أرسل info@uneom.com، أو زر صالات العرض. عروض أسعار مجانية!',
  keywords: [
    'contact UNEOM',
    'uniform supplier contact saudi',
    'UNEOM phone number',
    'UNEOM email',
    'uniform quote saudi arabia',
    'UNEOM riyadh address',
    'UNEOM jeddah location',
    'uniform order saudi',
  ],
  keywordsAr: ['تواصل يونيوم', 'رقم يونيوم', 'إيميل يونيوم', 'عنوان يونيوم الرياض'],
  locale: 'en',
  pageType: 'contact',
  path: '/contact',
  image: '/images/contact/uneom-office.jpg',
  imageAlt: 'UNEOM Office and Showroom in Saudi Arabia',
  aiSummary: 'Contact UNEOM, Saudi Arabia\'s leading uniform supplier. Headquarters: King Fahd Road, Olaya District, Riyadh. Phone: +966 56 461 2017. Email: info@uneom.com. WhatsApp: +966 56 461 2017. We have offices in Riyadh, Jeddah, and Dammam. Working hours: Sunday-Thursday 8:30 AM - 5:30 PM. Free quotes available. Fast response within 24 hours.',
  aiSummaryAr: 'تواصل مع يونيوم، المورد الرائد للأزياء في السعودية. المقر الرئيسي: طريق الملك فهد، حي العليا، الرياض. هاتف: +966 56 461 2017. إيميل: info@uneom.com.'
});

export const dynamic = 'force-static';

// ============================================
// FAQ DATA
// ============================================
const contactFAQs = [
  {
    question: 'What is UNEOM\'s phone number?',
    questionAr: 'ما هو رقم هاتف يونيوم؟',
    answer: 'UNEOM\'s main phone number is +966 56 461 2017. For quick inquiries, you can also WhatsApp us at the same number.',
    answerAr: 'رقم هاتف يونيوم الرئيسي هو +966 56 461 2017. للاستفسارات السريعة، يمكنك أيضاً واتساب على نفس الرقم.'
  },
  {
    question: 'What is UNEOM\'s email address?',
    questionAr: 'ما هو البريد الإلكتروني ليونيوم؟',
    answer: 'You can email UNEOM at info@uneom.com for general inquiries, sales@uneom.com for orders and quotes, or support@uneom.com for customer service. We respond within 24 business hours.',
    answerAr: 'يمكنك مراسلة يونيوم على info@uneom.com للاستفسارات العامة، sales@uneom.com للطلبات وعروض الأسعار، أو support@uneom.com لخدمة العملاء.'
  },
  {
    question: 'Where is UNEOM located in Riyadh?',
    questionAr: 'أين يقع يونيوم في الرياض؟',
    answer: 'UNEOM\'s Riyadh headquarters is located on King Fahd Road, Olaya District, Riyadh 12214. Our showroom is open Sunday to Thursday, 8:30 AM to 5:30 PM. Free parking is available.',
    answerAr: 'يقع المقر الرئيسي ليونيوم في الرياض على طريق الملك فهد، حي العليا، الرياض 12214. صالة العرض مفتوحة من الأحد إلى الخميس، 8:30 صباحاً - 5:30 مساءً.'
  },
  {
    question: 'How can I get a uniform quote from UNEOM?',
    questionAr: 'كيف يمكنني الحصول على عرض سعر من يونيوم؟',
    answer: 'You can get a free quote by: 1) Filling out the quote form on our website, 2) Calling us at +966 56 461 2017, 3) Emailing sales@uneom.com, or 4) Visiting any of our showrooms. We provide quotes within 24-48 hours.',
    answerAr: 'يمكنك الحصول على عرض سعر مجاني عبر: 1) ملء نموذج العرض على موقعنا، 2) الاتصال بنا على +966 56 461 2017، 3) مراسلة sales@uneom.com، أو 4) زيارة أي من صالات العرض.'
  },
  {
    question: 'What are UNEOM\'s working hours?',
    questionAr: 'ما ساعات عمل يونيوم؟',
    answer: 'UNEOM is open Sunday to Thursday, 8:30 AM to 5:30 PM. We are closed on Fridays and Saturdays. During Ramadan, hours may be adjusted. Our customer service phone line is available during working hours.',
    answerAr: 'يونيوم مفتوح من الأحد إلى الخميس، 8:30 صباحاً - 5:30 مساءً. نحن مغلقون أيام الجمعة والسبت. خلال رمضان، قد يتم تعديل الساعات.'
  },
  {
    question: 'Does UNEOM have a WhatsApp number?',
    questionAr: 'هل لدى يونيوم رقم واتساب؟',
    answer: 'Yes, you can reach UNEOM on WhatsApp at +966 56 461 2017. WhatsApp is available for quick inquiries, order status, and general questions during business hours.',
    answerAr: 'نعم، يمكنك الوصول إلى يونيوم على واتساب على +966 56 461 2017. واتساب متاح للاستفسارات السريعة وحالة الطلب والأسئلة العامة خلال ساعات العمل.'
  },
];

// ============================================
// OFFICE LOCATIONS
// ============================================
const officeLocations = [
  {
    id: 'riyadh',
    city: 'Riyadh',
    cityAr: 'الرياض',
    address: 'King Fahd Road, Olaya District, Riyadh 12214',
    addressAr: 'طريق الملك فهد، حي العليا، الرياض 12214',
    phone: '+966 56 461 2017',
    email: 'riyadh@uneom.com',
    whatsapp: '+966564612017',
    isHQ: true,
  },
  {
    id: 'jeddah',
    city: 'Jeddah',
    cityAr: 'جدة',
    address: 'Tahlia Street, Al Andalus District, Jeddah 23432',
    addressAr: 'شارع التحلية، حي الأندلس، جدة 23432',
    phone: '+966 56 461 2017',
    email: 'jeddah@uneom.com',
    whatsapp: '+966564612017',
    isHQ: false,
  },
  {
    id: 'dammam',
    city: 'Dammam',
    cityAr: 'الدمام',
    address: 'Prince Mohammed Bin Fahd Road, Al Faisaliyah, Dammam 32241',
    addressAr: 'طريق الأمير محمد بن فهد، حي الفيصلية، الدمام 32241',
    phone: '+966 56 461 2017',
    email: 'dammam@uneom.com',
    whatsapp: '+966564612017',
    isHQ: false,
  },
];

// ============================================
// CONTACT PAGE
// ============================================
export default function ContactPage() {
  return (
    <>
      <SEO2026
        title="Contact UNEOM | Uniform Supplier Saudi Arabia"
        titleAr="تواصل مع يونيوم | مورد أزياء السعودية"
        description="Contact UNEOM for uniform orders in Saudi Arabia."
        descriptionAr="تواصل مع يونيوم لطلبات الأزياء في السعودية."
        locale="en"
        pageType="contact"
        mainEntity="UNEOM Contact Information"
        mainEntityAr="معلومات التواصل مع يونيوم"
        primaryImage="/images/contact/uneom-office.jpg"
        primaryImageAlt="UNEOM Office"
        faqs={contactFAQs}
        breadcrumbs={[
          { name: 'Contact', nameAr: 'تواصل', url: '/contact' },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-teal-800 to-cyan-800 text-white relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Contact', href: '/contact' }
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Contact <span className="bg-gradient-to-r from-green-300 to-cyan-300 text-transparent bg-clip-text">UNEOM</span>
            </h1>
            
            <p className="text-xl mb-8 text-green-100 leading-relaxed">
              Get in touch with Saudi Arabia's leading uniform supplier. 
              We're here to help with your uniform needs.
            </p>
            
            {/* Quick Contact */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a href="tel:+966564612017" className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all flex items-center gap-4">
                <span className="text-3xl">📞</span>
                <div>
                  <div className="font-semibold">Call Us</div>
                  <div className="text-green-200 text-sm" dir="ltr">+966 56 461 2017</div>
                </div>
              </a>
              <a href="mailto:info@uneom.com" className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all flex items-center gap-4">
                <span className="text-3xl">📧</span>
                <div>
                  <div className="font-semibold">Email Us</div>
                  <div className="text-green-200 text-sm">info@uneom.com</div>
                </div>
              </a>
              <a href="https://wa.me/966564612017" className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all flex items-center gap-4">
                <span className="text-3xl">💬</span>
                <div>
                  <div className="font-semibold">WhatsApp</div>
                  <div className="text-green-200 text-sm" dir="ltr">+966 56 461 2017</div>
                </div>
              </a>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          {/* Office Locations */}
          <section className="mb-20">
            <SectionHeading subtitle="Our Locations" centered>
              Visit Our Showrooms
            </SectionHeading>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {officeLocations.map((office) => (
                <div key={office.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl">📍</span>
                      <h3 className="text-xl font-bold text-gray-900">
                        {office.city}
                        {office.isHQ && <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">HQ</span>}
                      </h3>
                    </div>
                    
                    <div className="space-y-3 text-sm text-gray-600">
                      <p>{office.address}</p>
                      <p><span className="font-medium">Phone:</span> <span dir="ltr">{office.phone}</span></p>
                      <p><span className="font-medium">Email:</span> {office.email}</p>
                    </div>
                    
                    <div className="mt-6 flex gap-2">
                      <a 
                        href={`tel:${office.phone.replace(/\s/g, '')}`}
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white text-center py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        Call
                      </a>
                      <a 
                        href={`https://wa.me/${office.whatsapp.replace(/[^0-9]/g, '')}`}
                        className="flex-1 bg-green-500 hover:bg-green-600 text-white text-center py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>
              Contact FAQ
            </SectionHeading>
            
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {contactFAQs.map((faq, index) => (
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
          <section className="text-center bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto text-green-100">
              Request a free quote or speak with our uniform experts today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/quote" 
                className="inline-flex items-center px-8 py-4 bg-white text-green-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg"
              >
                Get Free Quote →
              </Link>
              <a 
                href="tel:+966564612017"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-green-900 font-bold rounded-xl transition-all"
              >
                📞 Call Now
              </a>
            </div>
          </section>
        </Container>
      </main>

      {/* Language Switcher */}
      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-3 text-sm">This page is also available in Arabic</p>
          <Link
            href="/ar/contact"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
          >
            🇸🇦 العربية
          </Link>
        </div>
      </section>
    </>
  );
}
