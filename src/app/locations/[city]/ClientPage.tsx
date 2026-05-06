"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';
import { getLocationById } from '@/lib/data/locations';

interface ClientPageProps {
  params: {
    city: string;
  };
}

export default function ClientPage({ params }: ClientPageProps) {
  const pathname = usePathname();
  const isArabic = pathname?.startsWith('/ar');
  const locale = isArabic ? 'ar' : 'en';
  
  const location = getLocationById(params.city, locale);
  
  if (!location) {
    return (
      <Container className="py-20 text-center">
        <h1 className="text-2xl font-bold">{isArabic ? 'الموقع غير موجود' : 'Location Not Found'}</h1>
        <Button href={isArabic ? '/ar/locations' : '/locations'} className="mt-4">
          {isArabic ? 'العودة للمواقع' : 'Back to Locations'}
        </Button>
      </Container>
    );
  }

  const labels = {
    home: isArabic ? 'الرئيسية' : 'Home',
    locations: isArabic ? 'المواقع' : 'Locations',
    headquarters: isArabic ? 'المقر الرئيسي' : 'UNEOM Headquarters',
    getQuote: isArabic ? 'طلب عرض سعر في ' + location.name : 'Get Quote in ' + location.name,
    visitShowroom: isArabic ? 'زيارة صالة العرض' : 'Visit Showroom',
    whatWeOffer: isArabic ? 'ماذا نقدم في ' + location.name : 'What We Offer in ' + location.name,
    commonQuestions: isArabic ? 'أسئلة شائعة' : 'Common Questions',
    contactInfo: isArabic ? 'معلومات الاتصال' : 'Contact Information',
    workingHours: isArabic ? 'ساعات العمل' : 'Working Hours',
    whatsappUs: isArabic ? 'تواصل عبر واتساب' : 'WhatsApp Us',
    viewOnMap: isArabic ? 'عرض على الخريطة' : 'View on Map',
    alsoAvailableIn: isArabic ? 'هذه الصفحة متوفرة أيضاً باللغة الإنجليزية' : 'This page is also available in Arabic',
    switchLang: isArabic ? 'English' : '🇸🇦 العربية'
  };

  return (
    <div dir={isArabic ? 'rtl' : 'ltr'} className={isArabic ? 'text-right' : 'text-left'}>
      <EnhancedSEO2025 
        title={`${isArabic ? 'الزي الموحد في' : 'Uniforms in'} ${location.name} | UNEOM Saudi Arabia`}
        description={isArabic ? `يونيوم ${location.name} - المورد الرائد للأزياء الموحدة في ${location.name} السعودية.` : `UNEOM ${location.name} - Leading uniform supplier in ${location.name}, Saudi Arabia.`}
        locale={locale}
        pageType="location"
        location={{
          name: `UNEOM ${location.name}`,
          address: location.address,
          city: location.name,
          region: location.name + ' Province',
          country: 'Saudi Arabia',
          postalCode: location.postalCode,
          phone: location.phone,
          email: location.email,
          latitude: location.coordinates.lat,
          longitude: location.coordinates.lng
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
        
        <Container>
          <Breadcrumbs
            items={[
              { label: labels.home, href: isArabic ? '/ar' : '/' },
              { label: labels.locations, href: isArabic ? '/ar/locations' : '/locations' },
              { label: location.name, href: location.href }
            ]}
            className="text-white/60 mb-6 relative z-10 pt-8"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24 relative z-10">
            <div className="text-content">
              {location.isHeadquarters && (
                <div className="inline-flex items-center gap-2 bg-primary-500/20 backdrop-blur-md border border-primary-500/30 rounded-full px-4 py-2 mb-6">
                  <span className="animate-pulse w-2 h-2 rounded-full bg-primary-400"></span>
                  <span className="text-sm font-medium text-primary-100">{labels.headquarters}</span>
                </div>
              )}
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                {isArabic ? 'الزي الموحد في' : 'Uniforms in'}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-indigo-300">
                  {location.name}
                </span>
              </h1>
              
              <p className="text-xl mb-8 text-slate-300 leading-relaxed max-w-2xl">
                {isArabic 
                  ? `قم بزيارة صالة عرض يونيوم في ${location.name}. شاهد مجموعتنا الكاملة واحصل على استشارة خبراء لتصميم الزي الموحد الخاص بك.`
                  : `Visit UNEOM's showroom in ${location.name}. See our complete uniform collection and get expert consultation for your custom uniform needs.`}
              </p>
              
              {/* Floating Contact Card */}
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 mb-8 border border-white/20 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <span className="text-primary-300 mt-1">📍</span>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">{isArabic ? 'العنوان' : 'Address'}</h4>
                      <p className="text-sm">{location.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary-300 mt-1">📞</span>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">{isArabic ? 'الهاتف' : 'Phone'}</h4>
                      <p className="text-sm font-mono" dir="ltr">{location.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  href={`/quote?location=${location.id}`}
                  variant="primary" 
                  size="lg"
                  className="px-8 shadow-xl shadow-primary-500/20"
                >
                  {labels.getQuote}
                </Button>
                <Button 
                  href={`https://wa.me/${location.whatsapp.replace(/[^0-9]/g, '')}`}
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  {labels.whatsappUs}
                </Button>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-indigo-500 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src={location.image}
                  alt={location.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                  <div className="flex justify-between items-center text-sm font-medium">
                    <span>{labels.workingHours}</span>
                    <span className="text-primary-300">{location.workingHours}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-20 bg-slate-50">
        <Container>
          {/* Services Grid */}
          <section className="mb-32">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary-600 font-bold tracking-widest uppercase text-xs mb-3 block">{labels.locations}</span>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">{labels.whatWeOffer}</h2>
              <div className="h-1.5 w-24 bg-primary-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {location.services.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 border border-slate-100 group">
                  <div className="text-5xl mb-6 transform transition-transform group-hover:scale-110 duration-300">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-32 bg-white rounded-3xl p-8 lg:p-16 shadow-sm border border-slate-100">
            <div className="grid lg:grid-cols-3 gap-16">
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">{labels.commonQuestions}</h2>
                <p className="text-slate-500 mb-8 leading-relaxed">
                  {isArabic 
                    ? `إليك بعض الإجابات على الأسئلة المتداولة حول خدمات يونيوم في ${location.name}.`
                    : `Here are some answers to frequently asked questions about UNEOM services in ${location.name}.`}
                </p>
                <Link 
                  href={isArabic ? '/ar/contact' : '/contact'}
                  className="inline-flex items-center text-primary-600 font-bold hover:gap-2 transition-all"
                >
                  {isArabic ? 'هل لديك المزيد من الأسئلة؟' : 'Have more questions?'}
                  <span className={isArabic ? 'rotate-180 mr-2' : 'ml-2'}>→</span>
                </Link>
              </div>
              
              <div className="lg:col-span-2 space-y-6">
                {location.faqs.map((faq, index) => (
                  <details key={index} className="group bg-slate-50 rounded-2xl border border-transparent hover:border-primary-100 transition-colors overflow-hidden">
                    <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                      <span className="font-bold text-slate-800 text-lg pr-4">{faq.question}</span>
                      <span className="text-primary-500 transform group-open:rotate-180 transition-transform duration-300">▼</span>
                    </summary>
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* Map CTA Section */}
          <section className="relative rounded-3xl overflow-hidden bg-slate-900 text-white">
            <div className="absolute inset-0 opacity-40">
              <Image 
                src="/images/map-bg.jpg" 
                alt="Map texture" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="relative z-10 p-12 lg:p-20 text-center max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">{isArabic ? 'تفضل بزيارتنا في' : 'Visit Us in'} {location.name}</h2>
              <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                {location.address}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  href={`https://www.google.com/maps/search/?api=1&query=${location.coordinates.lat},${location.coordinates.lng}`}
                  target="_blank"
                  variant="primary" 
                  size="lg"
                  className="px-10"
                >
                  {labels.viewOnMap}
                </Button>
                <Link 
                  href={isArabic ? '/ar/contact' : '/contact'}
                  className="inline-flex items-center justify-center px-10 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 transition-all"
                >
                  {isArabic ? 'اتصل بنا' : 'Contact Us'}
                </Link>
              </div>
            </div>
          </section>
        </Container>
      </main>

      {/* Language Switcher Footer */}
      <div className="py-12 bg-white border-t border-slate-100 text-center">
        <p className="text-slate-400 text-sm mb-4">{labels.alsoAvailableIn}</p>
        <Link
          href={isArabic ? `/locations/${location.id}` : `/ar/locations/${location.id}`}
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-all"
        >
          {labels.switchLang}
        </Link>
      </div>
    </div>
  );
}
