'use client';

import React from 'react';
import ResourcePageLayout from '@/components/layout/ResourcePageLayout';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function ProcurementGuideClientPageArabic() {
  const steps = [
    {
      id: 'assess-needs',
      title: 'تقييم الاحتياجات',
      description: 'تحديد المتطلبات المحددة لمختلف الأقسام والأدوار في مؤسستك',
      image: '/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg',
      details: {
        'الكمية': 'تحديد عدد القطع المطلوبة لكل موظف',
        'الجودة': 'تحديد معايير الجودة المناسبة لبيئة العمل',
        'الوظائف': 'تحديد المتطلبات الخاصة مثل المقاومة للحرارة أو البقع'
      }
    },
    {
      id: 'budget-planning',
      title: 'تخطيط الميزانية',
      description: 'وضع ميزانية واقعية تأخذ في الاعتبار التكلفة الإجمالية للملكية',
      image: '/images/arabic-businessman-in-the-middle-east-SBI-300984430.jpg',
      details: {
        'الاستثمار الأولي': 'تكلفة الشراء الأولي للزي الموحد',
        'الاستبدال': 'معدل الاستبدال المتوقع والتكاليف المستقبلية',
        'العناية': 'تكاليف الغسيل والعناية المستمرة'
      }
    },
    {
      id: 'vendor-selection',
      title: 'اختيار المورد',
      description: 'تقييم واختيار شريك موثوق للزي الموحد مع سجل حافل',
      image: '/images/men-shaking-hands-over-business-meeting-2025-01-25-05-47-49-utc.jpg',
      details: {
        'الخبرة': 'تاريخ المورد في صناعتك المحددة',
        'القدرات': 'قدرات التخصيص والتصنيع والتسليم',
        'المراجع': 'التقييمات والشهادات من العملاء الحاليين'
      }
    },
    {
      id: 'trial-testing',
      title: 'الاختبار التجريبي',
      description: 'اختبار عينات في بيئات العمل الحقيقية قبل الطلب الكامل',
      image: '/images/professional-textile-expert-checking-the-quality-of-a-fabric-in-a-factory-man-SBI-300990818.jpg',
      details: {
        'المتانة': 'اختبار تحمل الملابس للاستخدام اليومي',
        'الراحة': 'تقييم ملاحظات الموظفين حول الراحة',
        'الوظائف': 'التأكد من تلبية المتطلبات العملية'
      }
    },
    {
      id: 'rollout-planning',
      title: 'خطة التنفيذ',
      description: 'تطوير استراتيجية فعالة للتوزيع والتنفيذ',
      image: '/images/group-of-successful-people-with-various-profession-2024-11-14-15-58-51-utc.jpg',
      details: {
        'الجدول الزمني': 'وضع جدول زمني واقعي للتنفيذ',
        'التوزيع': 'خطة لضمان التسليم السلس لجميع المواقع',
        'التدريب': 'إرشادات للموظفين حول العناية والصيانة'
      }
    }
  ];

  const resourceData = {
    locale: 'ar',
    title: 'دليل مشتريات الزي الموحد للمؤسسات',
    subtitle: 'خطوة بخطوة لشراء زي موحد عالي الجودة وفعال من حيث التكلفة للمؤسسات في المملكة العربية السعودية',
    heroImage: '/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg',
    overview: {
      title: 'الشراء الاستراتيجي للزي الموحد',
      content: `
        <p class="mb-4">
          يعد شراء الزي الموحد لمؤسستك عملية معقدة تتطلب تخطيطًا استراتيجيًا. 
          عند إدارتها بشكل صحيح، تؤدي هذه العملية إلى زي موحد يلبي متطلبات المؤسسة، 
          ويعزز صورة علامتك التجارية، ويوفر قيمة ممتازة على المدى الطويل.
        </p>
        <p class="mb-4">
          يقدم هذا الدليل نهجًا منظمًا لعملية الشراء، من تقييم احتياجات مؤسستك 
          إلى اختيار المورد المناسب وتنفيذ برنامج الزي الموحد الخاص بك.
        </p>
      `
    },
    sections: [
      {
        title: 'الفوائد الرئيسية للشراء الاستراتيجي',
        content: `
          <div class="space-y-6">
            <div class="bg-neutral-50 p-6 rounded-lg">
              <h3 class="text-xl font-semibold mb-2">تحسين إدارة التكاليف</h3>
              <p>
                يمكن أن يؤدي النهج الاستراتيجي للشراء إلى تحقيق وفورات كبيرة في التكاليف على مدار عمر برنامج الزي الموحد. 
                من خلال التخطيط المناسب، يمكنك:
              </p>
              <ul class="list-disc pr-6 mt-2">
                <li>تجنب الإنفاق المفرط على الميزات غير الضرورية</li>
                <li>تحديد المجالات التي تتطلب استثمارًا أعلى للمتانة</li>
                <li>تحسين عمليات الشراء للحصول على أسعار تنافسية من الموردين</li>
              </ul>
            </div>
            
            <div class="bg-neutral-50 p-6 rounded-lg">
              <h3 class="text-xl font-semibold mb-2">تعزيز رضا الموظفين</h3>
              <p>
                عندما تستثمر في عملية شراء شاملة تأخذ في الاعتبار احتياجات الموظفين، ستكون النتيجة زيًا موحدًا:
              </p>
              <ul class="list-disc pr-6 mt-2">
                <li>أكثر راحة ومناسب للمهام اليومية</li>
                <li>يتوافق بشكل أفضل مع تفضيلات الموظفين المختلفة</li>
                <li>يعكس بشكل أفضل قيم المؤسسة والثقافة</li>
              </ul>
            </div>
            
            <div class="bg-neutral-50 p-6 rounded-lg">
              <h3 class="text-xl font-semibold mb-2">تحسين جودة الزي وعمره</h3>
              <p>
                يساعد الشراء الاستراتيجي في ضمان اختيار الزي الموحد الذي يلبي معايير الجودة المطلوبة ويدوم لفترة أطول:
              </p>
              <ul class="list-disc pr-6 mt-2">
                <li>تقييم دقيق لخيارات المواد المناسبة لبيئة العمل</li>
                <li>التركيز على معايير الجودة ذات الصلة بمتطلبات العمل</li>
                <li>اختبار شامل للمتانة والأداء طويل المدى</li>
              </ul>
            </div>
          </div>
        `,
        image: '/images/arabic-businessman-in-the-middle-east-SBI-300984430.jpg',
      },
      {
        title: 'تطوير مواصفات الزي الموحد',
        content: `
          <p class="mb-4">
            تعتبر المواصفات الدقيقة والشاملة أمرًا أساسيًا لنجاح شراء الزي الموحد. 
            تحدد هذه المواصفات بوضوح ما تتوقعه من الموردين وتوفر معايير لتقييم العروض.
          </p>
          
          <h3 class="text-xl font-semibold mb-2">العناصر الأساسية للمواصفات الفعالة:</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div class="border border-neutral-200 p-4 rounded-lg">
              <h4 class="font-medium mb-2">متطلبات المواد</h4>
              <ul class="list-disc pr-6">
                <li>تكوين القماش ووزنه</li>
                <li>متطلبات المتانة والقوة</li>
                <li>خصائص المقاومة (للماء، الحرارة، البقع)</li>
                <li>معايير الراحة والتنفس</li>
              </ul>
            </div>
            
            <div class="border border-neutral-200 p-4 rounded-lg">
              <h4 class="font-medium mb-2">معايير التصميم</h4>
              <ul class="list-disc pr-6">
                <li>المواصفات الدقيقة للقص والأسلوب</li>
                <li>شعارات وعناصر العلامة التجارية</li>
                <li>نطاق وموقع التخصيص</li>
                <li>خيارات الألوان والحاجة إلى التماثل</li>
              </ul>
            </div>
            
            <div class="border border-neutral-200 p-4 rounded-lg">
              <h4 class="font-medium mb-2">معايير الصناعة</h4>
              <ul class="list-disc pr-6">
                <li>تقنيات الخياطة والاتصال</li>
                <li>الامتثال لمعايير السلامة والأمان</li>
                <li>متطلبات الجودة والتشطيب</li>
                <li>الشهادات والضمانات المطلوبة</li>
              </ul>
            </div>
            
            <div class="border border-neutral-200 p-4 rounded-lg">
              <h4 class="font-medium mb-2">الاعتبارات العملية</h4>
              <ul class="list-disc pr-6">
                <li>نطاق المقاسات والملاءمة</li>
                <li>تعليمات العناية والغسيل</li>
                <li>خيارات الترقية أو التعديل</li>
                <li>العمر المتوقع وسياسة الاستبدال</li>
              </ul>
            </div>
          </div>
          
          <div class="bg-primary-50 p-4 rounded-lg border border-primary-100 mb-4">
            <p class="font-semibold text-primary-800 mb-1">نصيحة هامة:</p>
            <p>
              قم بتضمين معلومات السياق والغرض في المواصفات لمساعدة الموردين على فهم احتياجاتك الفعلية. 
              إعطاء معلومات عن بيئة العمل والمهام اليومية للموظفين يمكن أن يؤدي إلى اقتراحات أفضل 
              وحلول مخصصة من الموردين المحتملين.
            </p>
          </div>
        `,
        image: '/images/resources/procurement-guide/specifications-development.jpg',
      },
      {
        title: 'اعتبارات خاصة لشراء الزي الموحد في السعودية',
        content: `
          <p class="mb-6">
            يجب مراعاة عدة عوامل فريدة عند شراء الزي الموحد للمؤسسات في المملكة العربية السعودية، بما في ذلك المناخ المحلي والاعتبارات الثقافية والمتطلبات التنظيمية.
          </p>
          
          <div class="space-y-6 mb-6">
            <div class="bg-neutral-50 p-6 rounded-lg">
              <h3 class="text-xl font-semibold mb-2">الملاءمة للمناخ</h3>
              <p>
                يتميز مناخ المملكة العربية السعودية بدرجات حرارة عالية في معظم المناطق، مما يتطلب اعتبارات خاصة:
              </p>
              <ul class="list-disc pr-6 mt-2">
                <li>اختيار أقمشة تنفسية تسمح بتبخر العرق</li>
                <li>البحث عن تقنيات معالجة الأقمشة للتحكم في الرائحة</li>
                <li>النظر في مقاومة الأشعة فوق البنفسجية للأدوار الخارجية</li>
                <li>تحديد خيارات مناسبة للمناطق ذات التكييف العالي وخارجها</li>
              </ul>
            </div>
            
            <div class="bg-neutral-50 p-6 rounded-lg">
              <h3 class="text-xl font-semibold mb-2">الاعتبارات الثقافية والدينية</h3>
              <p>
                ضمان توافق الزي الموحد مع القيم الثقافية والدينية المحلية:
              </p>
              <ul class="list-disc pr-6 mt-2">
                <li>خيارات للحشمة تتوافق مع القيم الإسلامية</li>
                <li>مراعاة تفضيلات الملابس المختلفة للموظفين الذكور والإناث</li>
                <li>إدماج الهوية السعودية والتراث بطريقة محترمة</li>
                <li>الجمع بين التقاليد المحلية والمعايير المهنية العالمية</li>
              </ul>
            </div>
            
            <div class="bg-neutral-50 p-6 rounded-lg">
              <h3 class="text-xl font-semibold mb-2">المتطلبات التنظيمية</h3>
              <p>
                مراعاة اللوائح والمتطلبات المحلية التي قد تؤثر على اختيار الزي الموحد:
              </p>
              <ul class="list-disc pr-6 mt-2">
                <li>الامتثال لمعايير السلامة السعودية (SASO) ذات الصلة</li>
                <li>متطلبات الصناعات المنظمة (مثل الرعاية الصحية، الأغذية)</li>
                <li>لوائح الاستيراد والمحتوى المحلي حسب رؤية 2030</li>
                <li>معايير السلامة المهنية للصناعات المتخصصة</li>
              </ul>
            </div>
            
            <div class="bg-neutral-50 p-6 rounded-lg">
              <h3 class="text-xl font-semibold mb-2">الشراء المحلي مقابل الاستيراد</h3>
              <p>
                تقييم فوائد وتحديات كل نهج:
              </p>
              <ul class="list-disc pr-6 mt-2">
                <li>الموردين المحليين: أوقات تسليم أسرع، دعم رؤية 2030، فهم أفضل للاحتياجات المحلية</li>
                <li>الموردين الدوليين: مجموعة أوسع من الخيارات، تقنيات متقدمة، خبرة محددة في صناعات معينة</li>
                <li>النهج المختلط: شراكات بين الموردين الدوليين والمصنعين المحليين</li>
              </ul>
            </div>
          </div>
        `,
        image: '/images/resources/procurement-guide/saudi-considerations.jpg',
      }
    ],
    items: steps,
    relatedResources: [
      {
        title: 'دليل الأقمشة',
        description: 'تعرف على خصائص وفوائد مختلف الأقمشة للزي الموحد.',
        link: '/ar/resources/fabric-guide',
        icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
      },
      {
        title: 'نماذج سياسات الزي الموحد',
        description: 'نماذج جاهزة لسياسات الزي الموحد يمكن تخصيصها حسب احتياجات مؤسستك.',
        link: '/ar/resources/policy-templates',
        icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
      },
      {
        title: 'قصص نجاح العملاء',
        description: 'اقرأ عن كيفية استفادة المؤسسات الأخرى من نهج الشراء الاستراتيجي.',
        link: '/ar/resources/case-studies',
        icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
      }
    ],
    cta: {
      title: 'هل تحتاج إلى مساعدة في شراء الزي الموحد لمؤسستك؟',
      description: 'يمكن لفريق الخبراء لدينا مساعدتك في كل خطوة من عملية الشراء، من تحديد المتطلبات إلى اختيار المورد المناسب وإدارة التنفيذ.',
      buttonText: 'احصل على استشارة مجانية',
      buttonUrl: '/ar/contact?inquiry=procurement'
    }
  };

  return <ResourcePageLayout resourceData={resourceData} />;
} 