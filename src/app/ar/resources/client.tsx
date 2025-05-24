'use client';

import React from 'react';
import ResourcePageLayout from '@/components/layout/ResourcePageLayout';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function ResourcesClientPageArabic() {
  // Resources content in Arabic
  const resourceCategories = [
    {
      title: 'الأقمشة والمواد',
      resources: [
        {
          id: 'fabric-guide',
          name: 'دليل الأقمشة',
          description: 'دليل شامل لأقمشة ومواد الزي الموحد، بما في ذلك خصائص الأداء والتطبيقات المثالية.',
          image: '/images/blog/sustainable-uniforms.jpg',
          href: '/ar/resources/fabric-guide'
        },
        {
          id: 'fabric-technology',
          name: 'تقنية الأقمشة',
          description: 'استكشف تقنيات النسيج المبتكرة التي تعزز الراحة والمتانة والوظائف للأزياء الموحدة الحديثة.',
          image: '/images/avatar-placeholder.jpg',
          href: '/ar/resources/fabric-technology'
        }
      ]
    },
    {
      title: 'المقاسات والتناسب',
      resources: [
        {
          id: 'size-guide',
          name: 'دليل المقاسات',
          description: 'مخططات مقاسات مفصلة وتعليمات القياس لضمان أزياء موحدة مناسبة تمامًا لجميع أنواع الجسم.',
          image: '/images/default-placeholder.jpg',
          href: '/ar/resources/size-guide'
        },
        {
          id: 'fit-optimization',
          name: 'تحسين التناسب',
          description: 'تعرف على كيفية تحسين تناسب الزي الموحد لتحقيق أقصى قدر من الراحة والمظهر المهني في جميع أنحاء مؤسستك.',
          image: '/images/default-placeholder.jpg',
          href: '/ar/resources/fit-optimization'
        }
      ]
    },
    {
      title: 'الشراء والإدارة',
      resources: [
        {
          id: 'procurement-guide',
          name: 'دليل الشراء',
          description: 'أفضل الممارسات لشراء الزي الموحد بكفاءة، من تقييم الاحتياجات إلى التسليم والتنفيذ.',
          image: '/images/default-placeholder.jpg',
          href: '/ar/resources/procurement-guide'
        },
        {
          id: 'policy-templates',
          name: 'قوالب سياسة الزي الموحد',
          description: 'قوالب قابلة للتخصيص لتطوير سياسات وإرشادات شاملة للزي الموحد للشركات.',
          image: '/images/default-placeholder.jpg',
          href: '/ar/resources/policy-templates'
        }
      ]
    }
  ];
  
  const educationalResources = [
    {
      id: 'blog',
      name: 'مدونة الصناعة',
      description: 'ابق على اطلاع بأحدث الاتجاهات والرؤى وأفضل الممارسات في إدارة وتصميم الزي الموحد.',
      image: '/images/blog/healthcare-uniforms.jpg',
      href: '/ar/blog'
    },
    {
      id: 'case-studies',
      name: 'دراسات الحالة',
      description: 'أمثلة واقعية توضح كيف حلت حلول الزي الموحد لدينا التحديات للمؤسسات عبر الصناعات المختلفة.',
      image: '/images/product-placeholder.jpg',
      href: '/ar/resources/case-studies'
    },
    {
      id: 'webinars',
      name: 'الندوات عبر الإنترنت والفعاليات',
      description: 'انضم إلى ندواتنا التعليمية عبر الإنترنت وفعاليات الصناعة لتعميق معرفتك والتواصل مع النظراء.',
      image: '/images/product-placeholder.jpg',
      href: '/ar/resources/events'
    }
  ];

  const resourceData = {
    locale: 'ar',
    title: 'مركز موارد يونيوم',
    subtitle: 'موارد متخصصة لمساعدتك على تطوير برامج زي موحد ناجحة لمؤسستك',
    heroImage: '/images/blog/sustainable-uniforms.jpg',
    overview: {
      title: 'معرفة متخصصة لدعم احتياجات الزي الموحد الخاص بك',
      content: `
        <p class="mb-4">
          مرحبًا بك في مركز موارد يونيوم، مصدرك الشامل للمعلومات والأدوات المتخصصة 
          في مجال الزي الموحد. سواء كنت تخطط لبرنامج جديد أو تبحث عن طرق لتحسين 
          برنامجك الحالي، فإن مواردنا المتنوعة مصممة لمساعدتك في اتخاذ قرارات مستنيرة.
        </p>
        <p class="mb-4">
          تصفح مجموعتنا من الأدلة المتخصصة، ودراسات الحالة، والمقالات التعليمية التي 
          تغطي كل جانب من جوانب الزي الموحد - من اختيار الأقمشة والمقاسات إلى 
          إدارة المشتريات وتطوير سياسات الزي.
        </p>
      `
    },
    sections: [
      {
        title: 'دلائل الأقمشة والمواد',
        content: `
          <p class="mb-6">
            تعرف على خصائص ومزايا مختلف أنواع الأقمشة وكيفية اختيار المواد المناسبة لاحتياجات مؤسستك.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            ${resourceCategories[0].resources.map(resource => `
              <a href="${resource.href}" class="bg-white rounded-lg shadow-sm hover:shadow-md border border-neutral-200 overflow-hidden transition">
                <div class="relative h-48 overflow-hidden">
                  <img src="${resource.image}" alt="${resource.name}" class="w-full h-full object-cover transition-transform hover:scale-105" />
                </div>
                <div class="p-5">
                  <h3 class="text-lg font-bold mb-2">${resource.name}</h3>
                  <p class="text-neutral-600 mb-4">
                    ${resource.description}
                  </p>
                  <span class="text-primary-600 font-medium">معرفة المزيد →</span>
                </div>
              </a>
            `).join('')}
          </div>
        `,
        image: '/images/blog/sustainable-uniforms.jpg',
      },
      {
        title: 'دلائل المقاسات والتناسب',
        content: `
          <p class="mb-6">
            استكشف كيفية ضمان التناسب المثالي للزي الموحد لموظفيك من خلال مخططات المقاسات وأدلة القياس.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            ${resourceCategories[1].resources.map(resource => `
              <a href="${resource.href}" class="bg-white rounded-lg shadow-sm hover:shadow-md border border-neutral-200 overflow-hidden transition">
                <div class="relative h-48 overflow-hidden">
                  <img src="${resource.image}" alt="${resource.name}" class="w-full h-full object-cover transition-transform hover:scale-105" />
                </div>
                <div class="p-5">
                  <h3 class="text-lg font-bold mb-2">${resource.name}</h3>
                  <p class="text-neutral-600 mb-4">
                    ${resource.description}
                  </p>
                  <span class="text-primary-600 font-medium">معرفة المزيد →</span>
                </div>
              </a>
            `).join('')}
          </div>
        `,
        image: '/images/default-placeholder.jpg',
      },
      {
        title: 'الموارد التعليمية',
        content: `
          <p class="mb-6">
            وسع معرفتك بصناعة الزي الموحد من خلال مدونتنا التخصصية ودراسات الحالة وفعاليات الصناعة.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            ${educationalResources.map(resource => `
              <a href="${resource.href}" class="bg-white rounded-lg shadow-sm hover:shadow-md border border-neutral-200 overflow-hidden transition">
                <div class="relative aspect-video overflow-hidden">
                  <img src="${resource.image}" alt="${resource.name}" class="w-full h-full object-cover transition-transform hover:scale-105" />
                </div>
                <div class="p-5">
                  <h3 class="text-lg font-bold mb-2">${resource.name}</h3>
                  <p class="text-neutral-600 mb-4">
                    ${resource.description}
                  </p>
                  <span class="text-primary-600 font-medium">استكشاف →</span>
                </div>
              </a>
            `).join('')}
          </div>
        `,
        image: '/images/blog/healthcare-uniforms.jpg',
      }
    ],
    items: [...resourceCategories.flatMap(cat => cat.resources), ...educationalResources].map(resource => ({
      id: resource.id,
      title: resource.name,
      description: resource.description,
      image: resource.image,
      href: resource.href
    })),
    relatedResources: [
      {
        title: 'استشارات متخصصة',
        description: 'احصل على مشورة خبيرة مخصصة لاحتياجات الزي الموحد لمؤسستك.',
        link: '/ar/services/consultations',
        icon: 'service'
      },
      {
        title: 'التصميم المخصص',
        description: 'استكشف خدمات التصميم المخصص لتطوير زي موحد فريد يعكس هوية علامتك التجارية.',
        link: '/ar/services/custom-uniform-design',
        icon: 'customize'
      },
      {
        title: 'المدونة',
        description: 'اطلع على أحدث الاتجاهات والمقالات حول صناعة الزي الموحد.',
        link: '/ar/blog',
        icon: 'article'
      }
    ],
    cta: {
      title: 'لم تجد ما تبحث عنه؟',
      description: 'فريق خبراء الزي الموحد لدينا جاهز للإجابة على أسئلتك وتقديم الإرشاد المخصص.',
      buttonText: 'تواصل مع مستشارينا',
      buttonUrl: '/ar/contact'
    }
  };

  return <ResourcePageLayout resourceData={resourceData} skipMainLayout={true} />;
} 