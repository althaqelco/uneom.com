'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ResourcePageLayout from '@/components/layout/ResourcePageLayout';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Event data
const upcomingEvents = [
  {
    id: 'saudi-uniform-expo-2024',
    title: "UNEOM - Professional Uniforms",
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

export default function EventsPageArabic() {
  const resourceData = {
    locale: 'ar',
    title: 'فعاليات يونيوم',
    subtitle: 'انضم إلينا في فعاليات وورش عمل ومعارض رائدة في الصناعة تركز على ابتكار الزي الموحد وأفضل الممارسات في جميع أنحاء المملكة العربية السعودية',
    heroImage: '/images/professional-business-seminar-with-audience-2022-12-16-07-11-04-utc.jpg',
    overview: {
      title: 'تواصل وتعلم وتطور مع خبراء الصناعة',
      content: `
        <p class="mb-4">
          في يونيوم، نلتزم بتعزيز تبادل المعرفة وتقدم الصناعة من خلال فعاليات عالية الجودة. تجمع ورش العمل والمعارض والمؤتمرات التي نقدمها المتخصصين من جميع أنحاء المملكة العربية السعودية لمناقشة أحدث الاتجاهات والابتكارات وأفضل الممارسات في برامج الزي الموحد.
        </p>
        <p class="mb-4">
          سواء كنت تتطلع إلى التواصل مع الزملاء، أو اكتساب رؤى من قادة الصناعة، أو استكشاف أحدث حلول الزي الموحد، توفر فعالياتنا فرصًا قيمة للتطوير المهني ونمو الأعمال.
        </p>
      `
    },
    sections: [
      {
        title: 'الفعاليات القادمة',
        content: `
          <p class="mb-6">
            انضم إلينا في هذه الفعاليات القادمة لاكتساب الرؤى والتواصل مع المتخصصين في الصناعة واكتشاف أحدث الابتكارات في حلول الزي الموحد.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${upcomingEvents.map(event => `
              <div class="bg-neutral-50 rounded-lg overflow-hidden shadow-md border border-neutral-100">
                <div class="relative h-48">
                  <img src="${event.image}" alt="${event.title}" class="w-full h-full object-cover" />
                </div>
                <div class="p-5">
                  <h3 class="text-xl font-bold mb-2">${event.title}</h3>
                  <div class="mb-3">
                    <div class="flex items-center text-neutral-600 mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span class="text-sm">${event.date}</span>
                    </div>
                    <div class="flex items-center text-neutral-600">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span class="text-sm">${event.location}</span>
                    </div>
                  </div>
                  <p class="text-neutral-600 mb-4">
                    ${event.description}
                  </p>
                  <a href="${event.registrationLink}" class="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium rounded px-4 py-2 transition-colors">التسجيل</a>
                </div>
              </div>
            `).join('')}
          </div>
        `,
        image: '/images/healthcare/medical_hijab_uniform.jpg',
      },
      {
        title: 'الفعاليات السابقة',
        content: `
          <p class="mb-6">
            اطلع على الفعاليات السابقة واستكشف الموارد والتسجيلات المتاحة من هذه البرامج.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${pastEvents.map(event => `
              <div class="bg-neutral-50 rounded-lg overflow-hidden shadow-md border border-neutral-100">
                <div class="relative h-48">
                  <img src="${event.image}" alt="${event.title}" class="w-full h-full object-cover" />
                </div>
                <div class="p-5">
                  <h3 class="text-xl font-bold mb-2">${event.title}</h3>
                  <div class="mb-3">
                    <div class="flex items-center text-neutral-600 mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span class="text-sm">${event.date}</span>
                    </div>
                    <div class="flex items-center text-neutral-600">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span class="text-sm">${event.location}</span>
                    </div>
                  </div>
                  <p class="text-neutral-600 mb-4">
                    ${event.description}
                  </p>
                  <a href="${event.resourceLink}" class="inline-block bg-neutral-100 hover:bg-neutral-200 text-primary-600 font-medium rounded px-4 py-2 transition-colors">عرض الموارد</a>
                </div>
              </div>
            `).join('')}
          </div>
        `,
        image: '/images/avatar-placeholder.jpg',
      }
    ],
    relatedResources: [
      {
        title: 'دليل المقاسات',
        description: 'معلومات مفصلة عن المقاسات لمساعدتك على اختيار الزي الموحد المناسب للمؤسسة.',
        link: '/ar/resources/size-guide',
        icon: 'ruler'
      },
      {
        title: 'دليل الأقمشة',
        description: 'فهم الأقمشة المختلفة وخصائصها للزي الموحد.',
        link: '/ar/resources/fabric-guide',
        icon: 'fabric'
      },
      {
        title: 'دراسات الحالة',
        description: 'استكشف كيف ساعدنا المؤسسات الأخرى على تطوير برامج زي موحد ناجحة.',
        link: '/ar/resources/case-studies',
        icon: 'case-study'
      }
    ],
    cta: {
      title: 'هل ترغب في التواصل معنا؟',
      description: 'اشترك في نشرتنا الإخبارية للحصول على تحديثات حول الفعاليات القادمة والموارد المفيدة.',
      buttonText: 'اشترك في النشرة الإخبارية',
      buttonUrl: '/ar/subscribe'
    }
  };

  return <ResourcePageLayout resourceData={resourceData} />;
} 