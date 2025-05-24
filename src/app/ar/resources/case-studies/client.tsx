'use client';

import React from 'react';
import ResourcePageLayout from '@/components/layout/ResourcePageLayout';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

const caseStudies = [
  {
    id: 'hospitality-resort-chain',
    title: 'سلسلة منتجعات ضيافة فاخرة',
    industry: 'الضيافة',
    challenge: 'توحيد مظهر 2000+ موظف في 12 منتجع بجودة عالية تعكس الفخامة والتراث السعودي',
    solution: 'أزياء موحدة مخصصة بألوان متناسقة وأقمشة عالية الجودة تناسب المناخ المحلي، مع برنامج إدارة مخزون فعّال',
    results: 'تحسين رضا الموظفين بنسبة 40%، وتقليل تكاليف الصيانة السنوية بنسبة 25%، وتعزيز تقييمات العملاء للخدمة',
    image: '/images/hospitality/hospitality_hotel_staff.jpg',
    testimonial: {
      quote: 'ساعدنا يونيوم في إنشاء برنامج زي موحد مميز يعكس مستوى الفخامة في منتجعاتنا ويتحمل ظروف العمل المختلفة.',
      author: 'محمد الفهد',
      position: 'مدير العمليات، سلسلة منتجعات الشاطئ الذهبي'
    }
  },
  {
    id: 'healthcare-hospital-network',
    title: 'شبكة مستشفيات رعاية صحية',
    industry: 'الرعاية الصحية',
    challenge: 'توفير زي طبي عملي لـ 5000+ من الكوادر الطبية يجمع بين الراحة والمتانة والامتثال للمعايير الطبية',
    solution: 'زي موحد مضاد للميكروبات مع نظام ألوان للتمييز بين الأقسام وميزات عملية تتناسب مع بيئة العمل الطبية',
    results: 'تقليل معدل العدوى بنسبة 15%، وزيادة رضا الكوادر الطبية بنسبة 35%، وخفض نفقات الزي السنوية بنسبة 20%',
    image: '/images/healthcare/healthcare_doctor_consultation.jpg',
    testimonial: {
      quote: 'تم تصميم الزي الموحد من يونيوم خصيصًا لتلبية احتياجاتنا المتخصصة، مع مراعاة الجوانب العملية والمعايير الطبية.',
      author: 'د. سارة العمري',
      position: 'المدير الطبي، مجموعة مستشفيات الشفاء'
    }
  },
  {
    id: 'aviation-airline',
    title: 'شركة طيران وطنية',
    industry: 'الطيران',
    challenge: 'إعادة تصميم الزي الموحد لـ 3500 من أفراد الطاقم الجوي والأرضي بما يعكس الهوية الوطنية ويوفر راحة طويلة المدى',
    solution: 'تصميم زي فريد يجمع بين العناصر التقليدية السعودية والتصميم العصري، مع أقمشة تقنية متطورة مقاومة للتجاعيد',
    results: 'ارتفاع مؤشر تقييم العلامة التجارية بنسبة 28%، وتحسين رضا الموظفين، وتقليل تكاليف الاستبدال بنسبة 30%',
    image: '/images/aviation/aviation_staff.jpg',
    testimonial: {
      quote: 'ساهم الزي الموحد الجديد في تعزيز هويتنا الوطنية وتقديم صورة موحدة تمثل رؤية المملكة في قطاع الطيران.',
      author: 'عبدالله المالكي',
      position: 'نائب الرئيس للعمليات، شركة الطيران السعودية'
    }
  },
  {
    id: 'security-company',
    title: 'شركة خدمات أمنية',
    industry: 'الأمن',
    challenge: 'توفير زي أمني وظيفي لـ 1000+ من أفراد الأمن في مواقع متعددة بظروف مناخية متنوعة',
    solution: 'زي أمني متين مع خيارات للظروف المناخية المختلفة، مدمج بميزات وظيفية وتكنولوجية تلبي متطلبات العمل الأمني',
    results: 'زيادة كفاءة العمل بنسبة 25%، وتحسين مستوى السلامة، وخفض معدل دوران الموظفين بنسبة 18%',
    image: '/images/security/security_guard.jpg',
    testimonial: {
      quote: 'قدم يونيوم حلاً متكاملاً يجمع بين الشكل الاحترافي والأداء العملي، مما ساهم في تعزيز فعالية فريق الأمن لدينا.',
      author: 'خالد المطيري',
      position: 'مدير العمليات، شركة الحماية للخدمات الأمنية'
    }
  },
  {
    id: 'manufacturing-company',
    title: 'شركة تصنيع كبرى',
    industry: 'التصنيع',
    challenge: 'تطوير زي عمل آمن ومتين لـ 2500 عامل في بيئات تصنيع متنوعة ومناطق صناعية مختلفة',
    solution: 'أزياء صناعية معتمدة بمعايير السلامة الدولية مع ميزات حماية متخصصة لكل قسم وبيئة عمل',
    results: 'انخفاض حوادث العمل بنسبة 32%، وزيادة إنتاجية العمال بنسبة 15%، وتحسين الامتثال للوائح السلامة',
    image: '/images/manufacturing/manufacturing_workers.jpg',
    testimonial: {
      quote: 'ساهمت حلول يونيوم للزي الصناعي في تعزيز بيئة عمل أكثر أمانًا وإنتاجية في منشآتنا الصناعية.',
      author: 'م. فيصل الغامدي',
      position: 'مدير السلامة والجودة، شركة التصنيع الوطنية'
    }
  },
  {
    id: 'education-institution',
    title: 'مؤسسة تعليمية رائدة',
    industry: 'التعليم',
    challenge: 'توحيد زي 15000 طالب وطالبة في 20 مدرسة مع الحفاظ على الهوية المميزة وتلبية معايير الراحة',
    solution: 'نظام زي مدرسي متكامل بتصاميم عصرية وألوان مميزة، مع حلول رقمية لإدارة الطلبات والمخزون',
    results: 'تحسين الانضباط المدرسي، وزيادة رضا أولياء الأمور بنسبة 45%، وخفض تكاليف التوريد السنوية',
    image: '/images/education/education_students.jpg',
    testimonial: {
      quote: 'وفر يونيوم حلاً متكاملاً لبرنامج الزي المدرسي، ممًا عزز هوية مدارسنا وحقق رضا الطلاب وأولياء الأمور.',
      author: 'نورة السعدي',
      position: 'مديرة الشؤون الإدارية، مجموعة مدارس المستقبل التعليمية'
    }
  }
];

export default function CaseStudiesClientPageArabic() {
  const resourceData = {
    locale: 'ar',
    title: 'قصص نجاح عملاء يونيوم',
    subtitle: 'كيف ساعدنا المؤسسات في المملكة العربية السعودية على تطوير برامج زي موحد ناجحة',
    heroImage: '/images/hero/case-studies-hero.jpg',
    overview: {
      title: 'شراكات ناجحة في مختلف القطاعات',
      content: `
        <p class="mb-4">
          نفخر في يونيوم بالشراكات الناجحة التي أقمناها مع مجموعة متنوعة من المؤسسات في 
          جميع أنحاء المملكة العربية السعودية. تعرض دراسات الحالة هذه كيف ساعدنا عملاءنا 
          على التغلب على تحديات محددة وتحقيق أهدافهم من خلال حلول الزي الموحد المبتكرة.
        </p>
        <p class="mb-4">
          من سلاسل الفنادق الفاخرة إلى المؤسسات التعليمية، ومن شبكات الرعاية الصحية إلى شركات 
          التصنيع، قدمنا حلولاً مخصصة تلبي الاحتياجات الفريدة لكل قطاع وتساهم في تحقيق النتائج التجارية.
        </p>
      `
    },
    sections: [
      {
        title: 'قطاع الضيافة والسياحة',
        content: `
          <p class="mb-6">
            نساعد مقدمي خدمات الضيافة على تعزيز تجربة الضيوف من خلال أزياء موحدة أنيقة وعملية.
          </p>
          
          <div class="bg-white rounded-lg border border-neutral-200 shadow-sm overflow-hidden mb-6">
            <div class="md:flex">
              <div class="md:w-1/3 relative">
                <img src="${caseStudies[0].image}" alt="${caseStudies[0].title}" class="w-full h-full object-cover" />
              </div>
              <div class="p-6 md:w-2/3">
                <div class="text-sm font-medium text-primary-600 mb-2">${caseStudies[0].industry}</div>
                <h3 class="text-xl font-bold mb-3">${caseStudies[0].title}</h3>
                
                <div class="mb-4">
                  <div class="font-medium mb-1">التحدي:</div>
                  <p class="text-neutral-700">${caseStudies[0].challenge}</p>
                </div>
                
                <div class="mb-4">
                  <div class="font-medium mb-1">الحل:</div>
                  <p class="text-neutral-700">${caseStudies[0].solution}</p>
                </div>
                
                <div class="mb-4">
                  <div class="font-medium mb-1">النتائج:</div>
                  <p class="text-neutral-700">${caseStudies[0].results}</p>
                </div>
                
                <blockquote class="italic border-r-4 border-primary-300 pr-4 text-neutral-600 mt-6">
                  "${caseStudies[0].testimonial.quote}"
                  <footer class="mt-2 font-medium">
                    ${caseStudies[0].testimonial.author}، ${caseStudies[0].testimonial.position}
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        `,
        image: '/images/hospitality/hospitality_hotel_staff.jpg',
      },
      {
        title: 'قطاع الرعاية الصحية',
        content: `
          <p class="mb-6">
            نوفر للمؤسسات الطبية أزياء موحدة تجمع بين الاحترافية والراحة والالتزام بالمعايير الصحية.
          </p>
          
          <div class="bg-white rounded-lg border border-neutral-200 shadow-sm overflow-hidden mb-6">
            <div class="md:flex">
              <div class="md:w-1/3 relative">
                <img src="${caseStudies[1].image}" alt="${caseStudies[1].title}" class="w-full h-full object-cover" />
              </div>
              <div class="p-6 md:w-2/3">
                <div class="text-sm font-medium text-primary-600 mb-2">${caseStudies[1].industry}</div>
                <h3 class="text-xl font-bold mb-3">${caseStudies[1].title}</h3>
                
                <div class="mb-4">
                  <div class="font-medium mb-1">التحدي:</div>
                  <p class="text-neutral-700">${caseStudies[1].challenge}</p>
                </div>
                
                <div class="mb-4">
                  <div class="font-medium mb-1">الحل:</div>
                  <p class="text-neutral-700">${caseStudies[1].solution}</p>
                </div>
                
                <div class="mb-4">
                  <div class="font-medium mb-1">النتائج:</div>
                  <p class="text-neutral-700">${caseStudies[1].results}</p>
                </div>
                
                <blockquote class="italic border-r-4 border-primary-300 pr-4 text-neutral-600 mt-6">
                  "${caseStudies[1].testimonial.quote}"
                  <footer class="mt-2 font-medium">
                    ${caseStudies[1].testimonial.author}، ${caseStudies[1].testimonial.position}
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        `,
        image: '/images/healthcare/healthcare_doctor_consultation.jpg',
      },
      {
        title: 'قطاع التعليم',
        content: `
          <p class="mb-6">
            نساعد المؤسسات التعليمية على تطوير برامج زي مدرسي تعزز الانتماء والهوية المؤسسية.
          </p>
          
          <div class="bg-white rounded-lg border border-neutral-200 shadow-sm overflow-hidden mb-6">
            <div class="md:flex">
              <div class="md:w-1/3 relative">
                <img src="${caseStudies[5].image}" alt="${caseStudies[5].title}" class="w-full h-full object-cover" />
              </div>
              <div class="p-6 md:w-2/3">
                <div class="text-sm font-medium text-primary-600 mb-2">${caseStudies[5].industry}</div>
                <h3 class="text-xl font-bold mb-3">${caseStudies[5].title}</h3>
                
                <div class="mb-4">
                  <div class="font-medium mb-1">التحدي:</div>
                  <p class="text-neutral-700">${caseStudies[5].challenge}</p>
                </div>
                
                <div class="mb-4">
                  <div class="font-medium mb-1">الحل:</div>
                  <p class="text-neutral-700">${caseStudies[5].solution}</p>
                </div>
                
                <div class="mb-4">
                  <div class="font-medium mb-1">النتائج:</div>
                  <p class="text-neutral-700">${caseStudies[5].results}</p>
                </div>
                
                <blockquote class="italic border-r-4 border-primary-300 pr-4 text-neutral-600 mt-6">
                  "${caseStudies[5].testimonial.quote}"
                  <footer class="mt-2 font-medium">
                    ${caseStudies[5].testimonial.author}، ${caseStudies[5].testimonial.position}
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        `,
        image: '/images/education/education_students.jpg',
      }
    ],
    items: caseStudies.map(study => ({
      id: study.id,
      title: study.title,
      description: study.challenge,
      image: study.image,
      properties: {
        'الصناعة': study.industry,
        'النتائج': study.results.split('،')[0]
      }
    })),
    relatedResources: [
      {
        title: 'دليل المشتريات',
        description: 'دليل شامل لشراء الزي الموحد للمؤسسات الكبيرة.',
        link: '/ar/resources/procurement-guide',
        icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
      },
      {
        title: 'نماذج سياسات الزي الموحد',
        description: 'نماذج جاهزة لسياسات الزي الموحد يمكن تخصيصها حسب احتياجات مؤسستك.',
        link: '/ar/resources/policy-templates',
        icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
      },
      {
        title: 'دليل الأقمشة',
        description: 'تعرف على خصائص وفوائد مختلف الأقمشة المستخدمة في الزي الموحد.',
        link: '/ar/resources/fabric-guide',
        icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
      }
    ],
    cta: {
      title: 'هل تحتاج إلى حلول زي موحد لمؤسستك؟',
      description: 'اتصل بفريقنا اليوم لمناقشة كيف يمكننا مساعدة مؤسستك على تطوير برنامج زي موحد يلبي احتياجاتك الخاصة ويساهم في تحقيق أهدافك.',
      buttonText: 'التواصل مع فريق المبيعات',
      buttonUrl: '/ar/contact?inquiry=uniform-program'
    }
  };

  return <ResourcePageLayout resourceData={resourceData} skipMainLayout={true} />;
} 