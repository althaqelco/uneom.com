'use client';

import React from 'react';
import ResourcePageLayout from '@/components/layout/ResourcePageLayout';

export default function ProcurementGuidePageArabic() {
  const resourceData = {
    locale: 'ar',
    title: 'دليل شراء الزي الموحد',
    subtitle: 'أساليب استراتيجية لتوريد وإدارة برامج الزي الموحد بفعالية',
    heroImage: '/images/default-placeholder.jpg',
    overview: {
      title: 'تحسين عملية شراء الزي الموحد',
      content: `
        <p class="mb-4">
          شراء الزي الموحد الفعّال يتجاوز مجرد طلب الملابس. فهو يتطلب تخطيطًا استراتيجيًا، 
          واختيارًا دقيقًا للموردين، وإدارة مستمرة للبرنامج لضمان فعالية التكلفة، 
          ومراقبة الجودة، ورضا الموظفين.
        </p>
        <p class="mb-4">
          يحدد هذا الدليل الشامل أفضل الممارسات لشراء الأزياء الموحدة على نطاق واسع، من 
          التقييم الأولي إلى التنفيذ وما بعده. سواء كنت تؤسس برنامج زي موحد جديد 
          أو تحسين برنامج موجود، ستساعدك هذه الاستراتيجيات على تحسين عملية الشراء.
        </p>
      `
    },
    sections: [
      {
        title: 'التخطيط الاستراتيجي',
        content: `
          <p class="mb-4">قبل البدء في عملية الشراء، طوّر استراتيجية واضحة تلبي الاحتياجات المحددة لمؤسستك:</p>
          
          <div class="mb-6 bg-neutral-50 p-5 rounded-lg">
            <h4 class="font-bold text-lg mb-3">تقييم الاحتياجات</h4>
            <p class="mb-2">أجرِ تقييمًا شاملاً لفهم:</p>
            <ul class="list-disc pr-5 mb-3">
              <li>المتطلبات الوظيفية بناءً على الأدوار والمهام الوظيفية</li>
              <li>معايير الامتثال للصناعة ومعايير السلامة</li>
              <li>الظروف البيئية التي سيتم ارتداء الزي الموحد فيها</li>
              <li>اعتبارات العلامة التجارية والصورة</li>
              <li>تفضيلات الموظفين واحتياجات الراحة</li>
            </ul>
          </div>
          
          <div class="mb-6 bg-neutral-50 p-5 rounded-lg">
            <h4 class="font-bold text-lg mb-3">تطوير الميزانية</h4>
            <p class="mb-2">أنشئ ميزانية شاملة تراعي:</p>
            <ul class="list-disc pr-5 mb-3">
              <li>تكاليف الشراء الأولية</li>
              <li>جداول الاستبدال والإمداد المستمر</li>
              <li>نفقات التخصيص والعلامات التجارية</li>
              <li>تكاليف التوزيع وإدارة المخزون</li>
              <li>وفورات التكلفة المحتملة من خلال الشراء بالجملة</li>
            </ul>
          </div>
          
          <div class="mb-6 bg-neutral-50 p-5 rounded-lg">
            <h4 class="font-bold text-lg mb-3">الجدول الزمني للشراء</h4>
            <p class="mb-2">ضع جدولًا زمنيًا واقعيًا يتضمن:</p>
            <ul class="list-disc pr-5 mb-3">
              <li>مرحلة تطوير طلب تقديم العروض واختيار المورد</li>
              <li>عمليات أخذ العينات والموافقة</li>
              <li>أوقات الإنتاج</li>
              <li>جدولة التوزيع</li>
              <li>تخطيط تجربة المقاسات وطرح الأزياء للموظفين</li>
            </ul>
          </div>
        `,
        image: '/images/default-placeholder.jpg',
      },
      {
        title: 'اختيار المورد',
        content: `
          <p class="mb-4">
            اختيار المورد المناسب أمر بالغ الأهمية لنجاح برنامج الزي الموحد. ضع في اعتبارك هذه العوامل 
            أثناء عملية الاختيار:
          </p>
          
          <div class="mb-6 bg-neutral-50 p-5 rounded-lg">
            <h4 class="font-bold text-lg mb-3">معايير تقييم المورد</h4>
            <ul class="list-disc pr-5 mb-3">
              <li>جودة المنتج ومعايير التصنيع</li>
              <li>قدرة الإنتاج وقابلية التوسع</li>
              <li>الخبرة في الصناعة والسمعة</li>
              <li>الاستقرار المالي واستمرارية الأعمال</li>
              <li>ممارسات التصنيع الأخلاقية والشهادات</li>
              <li>مبادرات الاستدامة والتأثير البيئي</li>
              <li>قدرات التخصيص والمرونة</li>
            </ul>
          </div>
          
          <div class="mb-6 bg-neutral-50 p-5 rounded-lg">
            <h4 class="font-bold text-lg mb-3">قدرات الخدمة</h4>
            <p class="mb-2">قيّم قدرة المورد على توفير:</p>
            <ul class="list-disc pr-5 mb-3">
              <li>إجراءات مراقبة الجودة المتسقة</li>
              <li>خدمة عملاء وإدارة حسابات استجابية</li>
              <li>معالجة الطلبات وتنفيذها بكفاءة</li>
              <li>حلول إدارة المخزون</li>
              <li>خيارات التوزيع المباشر للموظفين</li>
              <li>منصات رقمية للطلب وإدارة البرنامج</li>
            </ul>
          </div>
          
          <div class="mb-6 bg-neutral-50 p-5 rounded-lg">
            <h4 class="font-bold text-lg mb-3">تقييم العينات</h4>
            <p class="mb-2">اطلب وقيّم العينات بناءً على:</p>
            <ul class="list-disc pr-5 mb-3">
              <li>جودة المواد ومتانتها</li>
              <li>تفاصيل البناء والتشطيب</li>
              <li>اتساق المقاسات والتناسب</li>
              <li>دقة الألوان وثباتها</li>
              <li>الأداء بعد دورات غسيل متعددة</li>
              <li>الراحة أثناء اختبار الارتداء لفترات طويلة</li>
            </ul>
          </div>
        `,
        image: '/images/default-placeholder.jpg',
      },
      {
        title: 'تنفيذ البرنامج',
        content: `
          <p class="mb-4">
            التنفيذ المخطط له جيدًا يضمن انتقالًا سلسًا إلى الأزياء الموحدة الجديدة 
            ويقلل من اضطراب عملياتك:
          </p>
          
          <div class="mb-6 bg-neutral-50 p-5 rounded-lg">
            <h4 class="font-bold text-lg mb-3">استراتيجية المقاسات والتجربة</h4>
            <ul class="list-disc pr-5 mb-3">
              <li>تنسيق فعاليات تجربة المقاسات مع موظفين مدربين</li>
              <li>تطوير أدلة وتعليمات واضحة للمقاسات</li>
              <li>النظر في أدوات تحديد المقاسات الرقمية لتبسيط العملية</li>
              <li>وضع بروتوكولات للتعامل مع احتياجات المقاسات الخاصة</li>
              <li>إعداد عملية لتبادل المقاسات والتعديلات</li>
            </ul>
          </div>
          
          <div class="mb-6 bg-neutral-50 p-5 rounded-lg">
            <h4 class="font-bold text-lg mb-3">تخطيط التوزيع</h4>
            <ul class="list-disc pr-5 mb-3">
              <li>تحديد طريقة التوزيع الأكثر كفاءة لمؤسستك</li>
              <li>إنشاء جدول توزيع حسب القسم أو الموقع</li>
              <li>تطوير نظام لتتبع استلام الأزياء الموحدة</li>
              <li>إنشاء عملية لمعالجة مشكلات التوزيع</li>
              <li>النظر في الطرح المرحلي لتقليل الاضطرابات التشغيلية</li>
            </ul>
          </div>
          
          <div class="mb-6 bg-neutral-50 p-5 rounded-lg">
            <h4 class="font-bold text-lg mb-3">استراتيجية التواصل</h4>
            <ul class="list-disc pr-5 mb-3">
              <li>الإعلان عن برنامج الزي الموحد الجديد قبل وقت كافٍ</li>
              <li>توصيل الغرض من الأزياء الموحدة الجديدة وفوائدها بوضوح</li>
              <li>توفير معلومات مفصلة حول عملية تجربة المقاسات والتوزيع</li>
              <li>معالجة الأسئلة والمخاوف الشائعة بشكل استباقي</li>
              <li>إنشاء قنوات للتعليقات والأسئلة</li>
            </ul>
          </div>
        `,
        image: '/images/default-placeholder.jpg',
      }
    ],
    items: [
      {
        id: 'needs-assessment',
        title: 'تقييم الاحتياجات',
        description: 'دليل شامل لتحديد متطلبات الزي الموحد الخاصة بمؤسستك.',
        image: '/images/default-placeholder.jpg'
      },
      {
        id: 'vendor-selection',
        title: 'اختيار المورد',
        description: 'معايير وقوائم تدقيق لاختيار مورد الزي الموحد المناسب.',
        image: '/images/default-placeholder.jpg'
      },
      {
        id: 'budget-planning',
        title: 'تخطيط الميزانية',
        description: 'أدوات وقوالب لتقدير وإدارة ميزانية برنامج الزي الموحد الخاص بك.',
        image: '/images/default-placeholder.jpg'
      },
      {
        id: 'implementation',
        title: 'التنفيذ والتوزيع',
        description: 'استراتيجيات لطرح برنامج الزي الموحد بسلاسة في مؤسستك.',
        image: '/images/default-placeholder.jpg'
      }
    ],
    relatedResources: [
      {
        title: 'قوالب سياسة الزي الموحد',
        description: 'نماذج سياسات قابلة للتخصيص لمختلف القطاعات والمؤسسات.',
        link: '/ar/resources/policy-templates',
        icon: 'document'
      },
      {
        title: 'قائمة تدقيق برنامج الزي الموحد',
        description: 'قائمة شاملة لضمان تغطية جميع جوانب برنامج الزي الموحد الخاص بك.',
        link: '/ar/resources/uniform-program-checklist',
        icon: 'checklist'
      },
      {
        title: 'خدمة إدارة البرامج',
        description: 'تعرف على حلولنا الشاملة لإدارة برنامج الزي الموحد.',
        link: '/ar/services/program-management',
        icon: 'service'
      }
    ],
    cta: {
      title: 'هل تحتاج إلى مساعدة في عملية الشراء؟',
      description: 'يمكن لخبراء يونيوم مساعدتك في كل خطوة من عملية شراء الزي الموحد.',
      buttonText: 'تحدث مع مستشار المشتريات',
      buttonUrl: '/ar/contact'
    }
  };

  return <ResourcePageLayout resourceData={resourceData} skipMainLayout={true} />;
}
