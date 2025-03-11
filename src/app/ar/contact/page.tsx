import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { Metadata } from 'next';
import ContactForm from '@/components/forms/ContactForm';
import ClientMotion from '@/components/ui/ClientMotion';

// SEO metadata for the page
export const metadata: Metadata = {
  title: 'اتصل بنا | يونيوم - حلول الزي الموحد في المملكة العربية السعودية',
  description: 'تواصل مع فريق يونيوم للحصول على استشارة مجانية أو للاستفسار عن خدماتنا المتخصصة في الزي الموحد للشركات والمؤسسات.',
  keywords: 'اتصل بنا, يونيوم, حلول الزي الموحد, المملكة العربية السعودية, استشارة مجانية, خدمات الزي الموحد',
  alternates: {
    canonical: 'https://uneom.com/ar/contact',
    languages: {
      'en': 'https://uneom.com/contact',
    },
  },
};

// بيانات معلومات الاتصال
const contactInfo = [
  {
    title: 'البريد الإلكتروني',
    value: 'info@uneom.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'رقم الهاتف',
    value: '+971 55 816 4922',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: 'موقعنا',
    value: 'العليا العام، حي العليا، الرياض 12213، المملكة العربية السعودية',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'واتساب',
    value: '+971 55 816 4922',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-800 text-white py-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">تواصل معنا</h1>
            <p className="text-lg md:text-xl text-slate-300">
              نحن هنا للإجابة على جميع استفساراتك ومساعدتك في العثور على الحل المثالي للزي الموحد
            </p>
          </div>
        </Container>
      </section>

      {/* قسم نموذج الاتصال والمعلومات */}
      <div className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* معلومات الاتصال */}
            <ClientMotion
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-primary-50 p-8 md:p-10 rounded-lg"
            >
              <div className="max-w-md">
                <SectionHeading>كيفية الوصول إلينا</SectionHeading>
                <p className="text-gray-600 mt-4 mb-8">
                  لا تتردد في التواصل معنا بأي طريقة مناسبة لك. فريقنا المتخصص جاهز للإجابة على استفساراتك وتقديم الاستشارة المناسبة لاحتياجاتك.
                </p>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <ClientMotion
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <div className="h-10 w-10 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center ml-4">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{info.title}</h3>
                        <p className="text-gray-600">{info.value}</p>
                      </div>
                    </ClientMotion>
                  ))}
                </div>
                
                <div className="mt-10">
                  <h3 className="font-semibold text-gray-900 mb-4">تابعنا على وسائل التواصل الاجتماعي</h3>
                  <div className="flex space-x-4 space-x-reverse">
                    <a 
                      href="https://twitter.com/uneom" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a 
                      href="https://www.linkedin.com/company/uneom" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a 
                      href="https://www.instagram.com/uneom" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </ClientMotion>
            
            {/* نموذج الاتصال */}
            <ClientMotion
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <SectionHeading>أرسل لنا رسالة</SectionHeading>
              <p className="text-gray-600 mt-4 mb-8">
                يرجى ملء النموذج أدناه وسنقوم بالرد عليك في أقرب وقت ممكن.
              </p>
              
              <ContactForm locale="ar" />
            </ClientMotion>
          </div>
        </Container>
      </div>

      {/* خريطة الموقع */}
      <div className="relative">
        <div className="w-full h-[500px] overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7249.504499556513!2d46.680808!3d24.701042!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f033b6b026437%3A0xa912ef63d592ccdb!2sSilverShadow%20Media%20Production!5e0!3m2!1sen!2seg!4v1741650574107!5m2!1sen!2seg" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="موقع يونيوم في الرياض"
            aria-label="خريطة تظهر موقع مكتب يونيوم في الرياض"
          />
        </div>
        <div className="absolute top-4 right-4 z-10 bg-white p-4 rounded-lg shadow-lg max-w-xs text-right">
          <h3 className="font-bold text-primary-800 text-lg mb-2">مكتبنا الرئيسي</h3>
          <p className="text-gray-700">
            العليا العام، حي العليا<br />
            الرياض 12213<br />
            المملكة العربية السعودية
          </p>
          <div className="mt-3 text-sm text-gray-600">
            <div className="flex items-center justify-end mb-1">
              <span>+971 55 816 4922</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <a 
              href="https://wa.me/971558164922" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-end text-primary-600 hover:text-primary-800"
            >
              <span>تواصل معنا عبر واتساب</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
          </div>
          <a 
            href="https://goo.gl/maps/YourActualGoogleMapsLink" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center text-primary-600 hover:text-primary-800"
          >
            <span>الحصول على الاتجاهات</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
      
      {/* قسم الأسئلة الشائعة */}
      <div className="py-16 bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionHeading centered>أسئلة شائعة</SectionHeading>
            <p className="text-gray-600 mt-4">
              إليك إجابات على بعض الأسئلة الشائعة التي قد تكون لديك
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {/* سؤال 1 */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">كيف يمكنني الحصول على عرض سعر؟</h3>
                <p className="text-gray-600">
                  يمكنك طلب عرض سعر من خلال ملء نموذج الاتصال أعلاه، أو الاتصال بنا مباشرة على الرقم المذكور. سنحتاج إلى بعض المعلومات الأساسية مثل نوع الزي المطلوب، الكميات، والمواصفات الخاصة إن وجدت.
                </p>
              </div>
              
              {/* سؤال 2 */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">كم من الوقت يستغرق الرد على استفساري؟</h3>
                <p className="text-gray-600">
                  نحن نسعى للرد على جميع الاستفسارات خلال 24 ساعة عمل. للاستفسارات العاجلة، يرجى الاتصال بنا مباشرة للحصول على مساعدة فورية.
                </p>
              </div>
              
              {/* سؤال 3 */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">هل يمكنني زيارة مكتبكم لمناقشة مشروعي؟</h3>
                <p className="text-gray-600">
                  نعم بالتأكيد! نرحب بك في مكتبنا في الرياض لمناقشة احتياجاتك ومشاهدة عينات من أعمالنا. يرجى تحديد موعد مسبق لضمان توفر فريقنا المتخصص لمساعدتك.
                </p>
              </div>
              
              {/* سؤال 4 */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">هل تقدمون خدماتكم في جميع مناطق المملكة؟</h3>
                <p className="text-gray-600">
                  نعم، نحن نقدم خدماتنا في جميع مناطق المملكة العربية السعودية، ولدينا نظام توصيل فعال يضمن وصول منتجاتنا إلى عملائنا في مختلف المدن والمحافظات.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
} 