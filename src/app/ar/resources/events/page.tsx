'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

// Event data
const upcomingEvents = [
  {
    id: 'saudi-uniform-expo-2024',
    title: 'معرض الزي الموحد السعودي 2024',
    date: '15-17 سبتمبر 2024',
    location: 'مركز الرياض للمعارض والمؤتمرات',
    description: 'انضم إلينا في أكبر معرض لصناعة الزي الموحد في المملكة. اكتشف أحدث تصاميمنا وقابل فريق الخبراء لدينا لمناقشة احتياجات برنامج الزي الموحد الخاص بك.',
    image: '/images/corporate/corporate_team_meeting.jpg',
    registrationLink: '/ar/resources/events/saudi-uniform-expo-registration'
  },
  {
    id: 'healthcare-uniform-conference',
    title: 'مؤتمر ابتكارات الزي الطبي',
    date: '8-9 أكتوبر 2024',
    location: 'مدينة الملك فهد الطبية، الرياض',
    description: 'تعرف على أحدث التطورات في الأزياء الطبية، بما في ذلك الأقمشة المضادة للميكروبات والتصاميم المحسنة لبيئات الرعاية الصحية.',
    image: '/images/healthcare/healthcare_doctor_consultation.jpg',
    registrationLink: '/ar/resources/events/healthcare-uniform-conference-registration'
  },
  {
    id: 'hospitality-uniform-workshop',
    title: 'ورشة عمل تصميم أزياء الضيافة',
    date: '12 نوفمبر 2024',
    location: 'فندق هيلتون جدة',
    description: 'ورشة عمل عملية لمديري الضيافة تركز على إنشاء برامج زي موحد مميزة تعزز تجربة الضيوف مع الحفاظ على الوظائف العملية.',
    image: '/images/hospitality/hospitality_hotel_reception.jpg',
    registrationLink: '/ar/resources/events/hospitality-workshop-registration'
  }
];

const pastEvents = [
  {
    id: 'corporate-identity-seminar',
    title: 'ندوة الهوية المؤسسية من خلال الزي الموحد',
    date: '15 مارس 2024',
    location: 'مركز الملك عبدالله المالي، الرياض',
    description: 'ندوة تستكشف كيف يساهم الزي الموحد للشركات في هوية العلامة التجارية وثقافة الشركة، مع عرض دراسات حالة من شركات سعودية رائدة.',
    image: '/images/corporate/corporate_uniform_office.jpg',
    resourceLink: '/ar/resources/events/corporate-identity-seminar-recording'
  },
  {
    id: 'sustainable-uniforms-forum',
    title: 'منتدى الأزياء الموحدة المستدامة',
    date: '8 فبراير 2024',
    location: 'مركز الملك عبدالعزيز للمؤتمرات، الرياض',
    description: 'ناقش قادة الصناعة الممارسات المستدامة في إنتاج الزي الموحد، مع التركيز على المواد المعاد تدويرها وتقليل البصمة الكربونية في صناعة النسيج.',
    image: '/images/sustainable_fabrics.jpg',
    resourceLink: '/ar/resources/events/sustainable-uniforms-forum-materials'
  }
];

// Filter options
const eventTypes = [
  { value: 'all', label: 'جميع الفعاليات' },
  { value: 'exhibitions', label: 'المعارض' },
  { value: 'workshops', label: 'ورش العمل والتدريب' },
  { value: 'conferences', label: 'المؤتمرات' },
  { value: 'webinars', label: 'الندوات عبر الإنترنت' }
];

const locations = [
  { value: 'all', label: 'جميع المواقع' },
  { value: 'riyadh', label: 'الرياض' },
  { value: 'jeddah', label: 'جدة' },
  { value: 'dammam', label: 'الدمام' },
  { value: 'online', label: 'عبر الإنترنت' }
];

export default function EventsPageArabic() {
  const [eventTypeFilter, setEventTypeFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');

  return (
    <div dir="rtl" className="bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-primary-700 text-white py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              فعاليات يونيوم
            </h1>
            <p className="text-xl text-white/90 mb-8">
              انضم إلينا في فعاليات وورش عمل ومعارض رائدة في الصناعة تركز على ابتكار الزي الموحد وأفضل الممارسات في جميع أنحاء المملكة العربية السعودية
            </p>
            <Link href="#upcoming-events">
              <Button size="lg" className="bg-white text-primary-700 hover:bg-neutral-100">
                عرض الفعاليات القادمة
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading>
                تواصل وتعلم وتطور مع خبراء الصناعة
              </SectionHeading>
              <p className="text-lg text-neutral-700 mb-6">
                في يونيوم، نلتزم بتعزيز تبادل المعرفة وتقدم الصناعة من خلال فعاليات عالية الجودة. تجمع ورش العمل والمعارض والمؤتمرات التي نقدمها المتخصصين من جميع أنحاء المملكة العربية السعودية لمناقشة أحدث الاتجاهات والابتكارات وأفضل الممارسات في برامج الزي الموحد.
              </p>
              <p className="text-neutral-700 mb-6">
                سواء كنت تتطلع إلى التواصل مع الزملاء، أو اكتساب رؤى من قادة الصناعة، أو استكشاف أحدث حلول الزي الموحد، توفر فعالياتنا فرصًا قيمة للتطوير المهني ونمو الأعمال.
              </p>
            </div>
            <div className="relative h-80 lg:h-96 rounded-lg shadow-lg overflow-hidden">
              <Image 
                src="/images/professional-business-seminar-with-audience-2022-12-16-07-11-04-utc.jpg" 
                alt="فعالية يونيوم المهنية" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Upcoming Events */}
      <section id="upcoming-events" className="py-16 bg-white">
        <Container>
          <SectionHeading centered>
            الفعاليات القادمة
          </SectionHeading>
          <p className="text-center text-neutral-700 max-w-3xl mx-auto mb-12">
            انضم إلينا في هذه الفعاليات القادمة لاكتساب الرؤى والتواصل مع المتخصصين في الصناعة واكتشاف أحدث الابتكارات في حلول الزي الموحد
          </p>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">
            <div className="flex items-center">
              <span className="ml-3 text-neutral-600 font-medium">نوع الفعالية:</span>
              <select 
                className="rounded-md border-neutral-300 focus:border-primary-500 focus:ring focus:ring-primary-200 transition-all"
                value={eventTypeFilter}
                onChange={(e) => setEventTypeFilter(e.target.value)}
              >
                {eventTypes.map(type => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center">
              <span className="ml-3 text-neutral-600 font-medium">الموقع:</span>
              <select 
                className="rounded-md border-neutral-300 focus:border-primary-500 focus:ring focus:ring-primary-200 transition-all"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
              >
                {locations.map(location => (
                  <option key={location.value} value={location.value}>{location.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Event Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-neutral-50 rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="relative h-56">
                  <Image 
                    src={event.image} 
                    alt={event.title} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <div className="mb-4">
                    <div className="flex items-center text-neutral-600 mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-neutral-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                  <p className="text-neutral-600 mb-6">
                    {event.description}
                  </p>
                  <Link href={event.registrationLink}>
                    <Button className="w-full">سجل الآن</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <SectionHeading centered>
            الفعاليات السابقة
          </SectionHeading>
          <p className="text-center text-neutral-700 max-w-3xl mx-auto mb-12">
            استكشف التسجيلات والعروض التقديمية والموارد من فعالياتنا السابقة
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row">
                <div className="md:w-1/3 relative h-48 md:h-auto">
                  <Image 
                    src={event.image} 
                    alt={event.title} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                  <div className="mb-3">
                    <div className="flex items-center text-neutral-600 mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-neutral-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                  <p className="text-neutral-600 mb-4 text-sm">
                    {event.description}
                  </p>
                  <Link href={event.resourceLink}>
                    <Button variant="outline" size="sm">الوصول إلى الموارد</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/ar/resources/events/archive">
              <Button variant="outline">عرض جميع الفعاليات السابقة</Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Host an Event */}
      <section className="py-16 bg-primary-50">
        <Container>
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">استضافة فعالية في صناعة الزي الموحد</h2>
              <p className="text-neutral-700">
                هل أنت مهتم بالتعاون مع يونيوم في فعالية صناعية؟ نحن نتعاون مع المؤسسات في جميع أنحاء المملكة العربية السعودية لاستضافة ورش العمل وجلسات التدريب ومشاركات المتحدثين.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-neutral-50 p-5 rounded-lg text-center">
                <div className="bg-primary-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">متحدثون خبراء</h3>
                <p className="text-sm text-neutral-600">
                  الوصول إلى فريقنا من خبراء الصناعة للمشاركة في المحادثات حول تصميم الزي الموحد وإدارته وابتكاره.
                </p>
              </div>
              
              <div className="bg-neutral-50 p-5 rounded-lg text-center">
                <div className="bg-primary-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">ورش عمل مخصصة</h3>
                <p className="text-sm text-neutral-600">
                  يمكننا تصميم ورش عمل مخصصة لفريقك حول مواضيع مثل إدارة برنامج الزي الموحد واختيار الأقمشة.
                </p>
              </div>
              
              <div className="bg-neutral-50 p-5 rounded-lg text-center">
                <div className="bg-primary-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">التواصل الصناعي</h3>
                <p className="text-sm text-neutral-600">
                  تواصل مع شبكتنا من متخصصي صناعة الزي الموحد والمصنعين والاستشاريين لفعاليتك.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <Link href="/ar/contact">
                <Button size="lg">استفسر عن التعاون في الفعاليات</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-neutral-800 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">ابق على اطلاع بالفعاليات المستقبلية</h2>
            <p className="text-neutral-300 mb-8">
              اشترك في نشرة الفعاليات الإخبارية لتلقي إشعارات حول ورش العمل والمعارض والتجمعات الصناعية القادمة في جميع أنحاء المملكة العربية السعودية.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="عنوان بريدك الإلكتروني" 
                className="flex-grow rounded-md px-4 py-3 text-neutral-800 focus:ring focus:ring-primary-300 focus:border-primary-500 transition-all"
              />
              <Button>اشترك</Button>
            </div>
            
            <p className="text-sm text-neutral-400 mt-4">
              بالاشتراك، فإنك توافق على تلقي اتصالات متعلقة بالفعاليات من يونيوم. يمكنك إلغاء الاشتراك في أي وقت.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
} 