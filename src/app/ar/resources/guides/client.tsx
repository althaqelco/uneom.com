'use client';

import React from 'react';
import ResourcePageLayout from '@/components/layout/ResourcePageLayout';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function GuidesClientPageArabic() {
  const guides = [
    {
      id: 'procurement-guide',
      title: 'دليل مشتريات الزي الموحد',
      description: 'نهج استراتيجي لشراء وتوريد الزي الموحد للمؤسسات الكبيرة، مع التركيز على الجودة والقيمة والاستدامة.',
      image: '/images/resources/guides/procurement.jpg',
      properties: {
        'نوع المورد': 'مشتريات الشركات',
        'الصفحات': '25+',
        'اللغات': 'العربية، الإنجليزية'
      },
      url: '/ar/resources/procurement-guide'
    },
    {
      id: 'sizing-guide',
      title: 'دليل المقاسات',
      description: 'شرح مفصل لأنظمة المقاسات وكيفية قياس الموظفين بدقة لضمان ملاءمة مثالية للزي الموحد.',
      image: '/images/resources/guides/sizing.jpg',
      properties: {
        'نوع المورد': 'مرجع فني',
        'الصفحات': '15+',
        'اللغات': 'العربية، الإنجليزية'
      },
      url: '/ar/resources/size-guide'
    },
    {
      id: 'fabric-guide',
      title: 'دليل الأقمشة',
      description: 'معلومات شاملة عن مختلف الأقمشة وخصائصها وملاءمتها للصناعات والبيئات المختلفة.',
      image: '/images/resources/guides/fabrics.jpg',
      properties: {
        'نوع المورد': 'مرجع فني',
        'الصفحات': '20+',
        'اللغات': 'العربية، الإنجليزية'
      },
      url: '/ar/resources/fabric-guide'
    },
    {
      id: 'branding-guidelines',
      title: 'إرشادات العلامة التجارية',
      description: 'نصائح وأفضل الممارسات لتطبيق علامتك التجارية بفعالية على الزي الموحد للحصول على مظهر احترافي ومتناسق.',
      image: '/images/resources/guides/branding.jpg',
      properties: {
        'نوع المورد': 'دليل تصميم',
        'الصفحات': '18+',
        'اللغات': 'العربية، الإنجليزية'
      },
      url: '/ar/resources/branding-guidelines'
    },
    {
      id: 'uniform-maintenance',
      title: 'دليل صيانة الزي الموحد',
      description: 'إرشادات للحفاظ على جودة ومظهر الزي الموحد لفترة أطول، بما في ذلك تعليمات الغسيل والتخزين والإصلاح.',
      image: '/images/resources/guides/maintenance.jpg',
      properties: {
        'نوع المورد': 'دليل عملي',
        'الصفحات': '12+',
        'اللغات': 'العربية، الإنجليزية'
      },
      url: '/ar/blog/uniform-maintenance-tips'
    },
    {
      id: 'customization-options',
      title: 'خيارات التخصيص',
      description: 'استكشاف خيارات التخصيص المختلفة المتاحة للزي الموحد، من التطريز إلى الطباعة والملحقات المخصصة.',
      image: '/images/resources/guides/customization.jpg',
      properties: {
        'نوع المورد': 'كتالوج',
        'الصفحات': '15+',
        'اللغات': 'العربية، الإنجليزية'
      },
      url: '/ar/images/services/resources/guides/guides-header.jpg'
    }
  ];

  const resourceData = {
    locale: 'ar' as const,
    title: 'أدلة الزي الموحد',
    subtitle: 'موارد شاملة لبرامج الزي الموحد الناجحة',
    heroImage: '/images/resources/guides/guides-header.jpg',
    overview: {
      title: 'معرفة متخصصة لبرامج الزي الموحد الناجحة',
      content: `
        <p class="mb-4">
          قمنا بتطوير مجموعة من الأدلة المتخصصة لمساعدة المؤسسات في جميع جوانب برامج الزي الموحد. 
          تستند هذه الموارد إلى سنوات من الخبرة في تزويد المؤسسات في جميع أنحاء المملكة العربية السعودية 
          بحلول زي موحد عالية الجودة.
        </p>
        <p class="mb-4">
          سواء كنت تقوم بإنشاء برنامج زي موحد جديد أو تحسين برنامج موجود، ستجد معلومات قيمة 
          وإرشادات عملية في هذه الأدلة المجانية. اكتشف مواردنا أدناه وقم بتنزيل أي دليل 
          لمساعدتك في تطوير وإدارة برنامج زي موحد ناجح.
        </p>
      `
    },
    sections: [
      {
        title: 'استخدام أدلتنا',
        content: `
          <p class="mb-6">
            صممنا هذه الأدلة لتكون موارد عملية وسهلة الاستخدام لمديري المؤسسات والمشتريات وفرق الموارد البشرية. إليك كيفية الاستفادة من هذه الموارد:
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div class="bg-neutral-50 p-6 rounded-lg">
              <h3 class="text-xl font-semibold mb-3">التخطيط والبحث</h3>
              <p class="mb-3">
                استخدم أدلتنا كنقطة انطلاق للبحث والتخطيط لبرنامج الزي الموحد الخاص بك. ستساعدك في:
              </p>
              <ul class="list-disc pr-6">
                <li>فهم الخيارات المتاحة للأقمشة والتصاميم</li>
                <li>اتخاذ قرارات مستنيرة حول المواصفات</li>
                <li>تطوير ميزانية واقعية</li>
                <li>إنشاء جدول زمني للتنفيذ</li>
              </ul>
            </div>
            
            <div class="bg-neutral-50 p-6 rounded-lg">
              <h3 class="text-xl font-semibold mb-3">المرجع والتدريب</h3>
              <p class="mb-3">
                شارك هذه الأدلة مع فريقك كمواد تدريبية ومراجع، مما يساعد في:
              </p>
              <ul class="list-disc pr-6">
                <li>توحيد المعرفة داخل مؤسستك</li>
                <li>تدريب مديري الأقسام على سياسات الزي الموحد</li>
                <li>تثقيف الموظفين الجدد حول معايير الزي الموحد</li>
                <li>الإجابة على الأسئلة الشائعة بشكل متسق</li>
              </ul>
            </div>
            
            <div class="bg-neutral-50 p-6 rounded-lg">
              <h3 class="text-xl font-semibold mb-3">التنفيذ والإدارة</h3>
              <p class="mb-3">
                استخدم الأدلة العملية لمساعدتك خلال مرحلة التنفيذ:
              </p>
              <ul class="list-disc pr-6">
                <li>الالتزام بأفضل الممارسات في تجربة المقاسات والتوزيع</li>
                <li>تنفيذ عمليات إدارة المخزون الفعالة</li>
                <li>إنشاء إجراءات العناية والصيانة</li>
                <li>مراقبة وتقييم فعالية برنامج الزي الموحد</li>
              </ul>
            </div>
            
            <div class="bg-neutral-50 p-6 rounded-lg">
              <h3 class="text-xl font-semibold mb-3">الاستشارات المتخصصة</h3>
              <p class="mb-3">
                إذا كنت بحاجة إلى مزيد من المساعدة المخصصة بعد مراجعة أدلتنا:
              </p>
              <ul class="list-disc pr-6">
                <li>تواصل مع فريق الخبراء لدينا للحصول على استشارة مجانية</li>
                <li>استكشف خدمات إدارة البرامج المخصصة</li>
                <li>احصل على حلول مصممة خصيصًا لاحتياجاتك المحددة</li>
                <li>انضم إلى ورش العمل والندوات عبر الإنترنت التي نقدمها</li>
              </ul>
            </div>
          </div>
        `,
        image: '/images/resources/guides/using-guides.jpg',
      },
      {
        title: 'إنشاء سياسة الزي الموحد',
        content: `
          <p class="mb-6">
            سياسة الزي الموحد المكتوبة بشكل جيد أمر أساسي لضمان الالتزام المستمر واستخدام الأزياء الموحدة بشكل صحيح داخل مؤسستك.
          </p>
          
          <div class="bg-white rounded-lg border border-neutral-200 shadow-sm overflow-hidden mb-6">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-4">عناصر سياسة الزي الموحد الفعالة</h3>
              
              <div class="space-y-4 mb-6">
                <div>
                  <h4 class="font-semibold text-lg">🎯 الغرض والنطاق</h4>
                  <p>حدد بوضوح الغرض من سياسة الزي الموحد ومن ينطبق عليها داخل المؤسسة.</p>
                </div>
                
                <div>
                  <h4 class="font-semibold text-lg">📋 المعايير والمتطلبات</h4>
                  <p>حدد بالتفصيل ما يشكل الزي الموحد المناسب لكل دور أو قسم، بما في ذلك الملحقات والأحذية والشارات وغيرها.</p>
                </div>
                
                <div>
                  <h4 class="font-semibold text-lg">⚠️ الآثار المترتبة على عدم الامتثال</h4>
                  <p>وضح العواقب المحتملة لعدم الالتزام بمعايير الزي الموحد والإجراءات التصحيحية.</p>
                </div>
                
                <div>
                  <h4 class="font-semibold text-lg">🧼 مسؤوليات العناية والصيانة</h4>
                  <p>حدد من المسؤول عن العناية بالزي الموحد والحفاظ عليه وإصلاحه واستبداله عند الضرورة.</p>
                </div>
                
                <div>
                  <h4 class="font-semibold text-lg">📝 إجراءات الطلب والاستبدال</h4>
                  <p>اشرح كيفية طلب قطع جديدة أو بديلة من الزي الموحد، بما في ذلك الجداول الزمنية والموافقات المطلوبة.</p>
                </div>
              </div>
              
              <div class="bg-primary-50 p-4 rounded-lg">
                <p class="font-semibold text-primary-800">📥 قم بتنزيل نماذج سياسات الزي الموحد</p>
                <p>للحصول على قوالب جاهزة للاستخدام يمكن تخصيصها لمؤسستك، راجع <a href="/ar/resources/policy-templates" class="text-primary-600 underline">نماذج سياسات الزي الموحد</a> لدينا.</p>
              </div>
            </div>
          </div>
        `,
        image: '/images/resources/guides/policy-creation.jpg',
      }
    ],
    items: guides,
    relatedResources: [
      {
        title: 'دراسات الحالة',
        description: 'تعرف على كيف استفادت المؤسسات الأخرى من هذه الأدلة والموارد.',
        link: '/ar/resources/case-studies',
        icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
      },
      {
        title: 'نماذج سياسات الزي الموحد',
        description: 'نماذج جاهزة لسياسات الزي الموحد يمكن تخصيصها حسب احتياجات مؤسستك.',
        link: '/ar/resources/policy-templates',
        icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
      },
      {
        title: 'استشارات الزي الموحد',
        description: 'احصل على مساعدة متخصصة من الخبراء لبرنامج الزي الموحد الخاص بك.',
        link: '/ar/services/consultations',
        icon: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z'
      }
    ],
    cta: {
      title: 'هل تحتاج إلى مساعدة في تنفيذ هذه النصائح؟',
      description: 'تواصل مع فريق الخبراء لدينا للحصول على استشارة مخصصة لمساعدتك في تطوير وتحسين برنامج الزي الموحد لمؤسستك.',
      buttonText: 'تحدث مع أحد الخبراء',
      buttonUrl: '/ar/contact?inquiry=uniform-guides'
    },
  };

  return <ResourcePageLayout resourceData={resourceData} />;
} 