'use client';

import React from 'react';
import ResourcePageLayout from '@/components/layout/ResourcePageLayout';

export default function PolicyTemplatesPageArabic() {
  const resourceData = {
    locale: 'ar',
    title: 'قوالب سياسة الزي الموحد',
    subtitle: 'أطر قابلة للتخصيص لتطوير إرشادات واضحة وشاملة للزي الموحد',
    heroImage: '/images/default-placeholder.jpg',
    overview: {
      title: 'إنشاء سياسات فعالة للزي الموحد',
      content: `
        <p class="mb-4">
          سياسات الزي الموحد المصممة جيدًا ضرورية للحفاظ على معايير مظهر متسقة، 
          وضمان الامتثال للوائح الصناعة، وتعزيز هوية المؤسسة. 
          تعمل هذه السياسات كمرجع لكل من الموظفين والإدارة، وتوضح بوضوح 
          التوقعات والمتطلبات.
        </p>
        <p class="mb-4">
          توفر قوالب السياسة القابلة للتخصيص من يونيوم أساسًا للمؤسسات لتطوير 
          إرشادات شاملة للزي الموحد مصممة خصيصًا لتلبية احتياجاتها المحددة. يمكن تعديل كل قالب 
          ليعكس ثقافة مؤسستك، ومتطلبات الصناعة، والاعتبارات التشغيلية.
        </p>
        <p class="mb-4">
          قم بتنزيل هذه القوالب وتخصيصها لإنشاء سياسات واضحة وفعالة للزي الموحد لمؤسستك.
        </p>
      `
    },
    sections: [
      {
        title: 'قالب سياسة الزي الموحد العام',
        content: `
          <p class="mb-4">
            يوفر قالب سياسة الزي الموحد العام الشامل إطارًا مناسبًا لمعظم الصناعات 
            وأنواع المؤسسات. يغطي هذا القالب جميع العناصر الأساسية لسياسة قوية للزي الموحد:
          </p>
          
          <div class="mb-6 bg-neutral-50 p-5 rounded-lg">
            <h4 class="font-bold text-lg mb-3">محتويات القالب</h4>
            <ul class="list-disc pr-5 mb-3">
              <li>غرض السياسة ونطاقها</li>
              <li>معايير المظهر العامة</li>
              <li>مكونات الزي الموحد القياسية حسب الدور الوظيفي</li>
              <li>إجراءات الحصول على عناصر الزي الموحد</li>
              <li>مسؤوليات العناية والصيانة</li>
              <li>إرشادات التنفيذ وعواقب عدم الامتثال</li>
              <li>إجراءات الاستيعاب الديني والطبي</li>
              <li>إجراءات إرجاع الزي الموحد عند إنهاء العمل</li>
            </ul>
          </div>
          
          <div class="border border-primary-200 rounded-lg p-6 mb-6 bg-primary-50">
            <h4 class="font-bold text-lg mb-3 text-primary-700">مثال: بيان الغرض</h4>
            <div class="bg-white p-4 rounded border border-gray-200 text-sm">
              <p class="font-medium italic text-neutral-700">
                "تطلب [اسم المؤسسة] من الموظفين ارتداء زي موحد لتقديم صورة مهنية ومتسقة 
                لعملائنا، وتعزيز هوية الفريق، وضمان السلامة والعملية للوظائف، 
                والامتثال للوائح الصناعة. توضح هذه السياسة المعايير والإجراءات والمسؤوليات 
                المتعلقة بالزي الموحد للشركة."
              </p>
            </div>
          </div>
          
          <a href="#" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 mb-6">
            <svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            تنزيل قالب السياسة العامة (DOCX)
          </a>
          
          <p class="text-sm italic text-neutral-500 mb-4">
            ملاحظة: يجب مراجعة هذا القالب من قبل قسمك القانوني أو مستشارك قبل التنفيذ لضمان 
            الامتثال لقوانين العمل المحلية واللوائح.
          </p>
        `,
        image: '/images/product-placeholder.jpg',
      },
      {
        title: 'قوالب سياسة خاصة بالصناعة',
        content: `
          <p class="mb-4">
            تختلف الصناعات المختلفة في متطلبات الزي الموحد بناءً على المعايير التنظيمية، 
            والاحتياجات الوظيفية، وتوقعات العملاء. تتناول قوالبنا الخاصة بالصناعة 
            هذه الاعتبارات المتخصصة:
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div class="border rounded-lg p-5 bg-white shadow-sm">
              <h4 class="font-bold text-lg mb-3 text-primary-700">سياسة الزي الموحد للرعاية الصحية</h4>
              <ul class="list-disc pr-5 mb-3">
                <li>معايير مكافحة العدوى</li>
                <li>أنظمة الترميز اللوني للأقسام</li>
                <li>مواصفات الأردية ومعاطف المختبر</li>
                <li>متطلبات معدات الحماية الشخصية</li>
                <li>بروتوكولات الغسيل</li>
                <li>معايير شارات التعريف</li>
              </ul>
              <a href="#" class="inline-flex items-center px-3 py-1.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                <svg class="-ml-1 mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                تنزيل
              </a>
            </div>
            
            <div class="border rounded-lg p-5 bg-white shadow-sm">
              <h4 class="font-bold text-lg mb-3 text-primary-700">سياسة الزي الموحد للضيافة</h4>
              <ul class="list-disc pr-5 mb-3">
                <li>معايير الواجهة الأمامية مقابل الخلفية</li>
                <li>متطلبات التأنق والنظافة الشخصية</li>
                <li>اختلافات الزي الموحد الموسمية</li>
                <li>اعتبارات سلامة الغذاء</li>
                <li>مواصفات الإكسسوارات ذات العلامات التجارية</li>
                <li>معايير العرض أمام العملاء</li>
              </ul>
              <a href="#" class="inline-flex items-center px-3 py-1.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                <svg class="-ml-1 mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                تنزيل
              </a>
            </div>
            
            <div class="border rounded-lg p-5 bg-white shadow-sm">
              <h4 class="font-bold text-lg mb-3 text-primary-700">سياسة الصناعة/التصنيع</h4>
              <ul class="list-disc pr-5 mb-3">
                <li>دمج معدات السلامة</li>
                <li>متطلبات الامتثال لـ OSHA ومعايير الصناعة</li>
                <li>اعتبارات البيئة الخطرة</li>
                <li>متطلبات الرؤية العالية</li>
                <li>التكيفات الموسمية لدرجات الحرارة القصوى</li>
                <li>الإكسسوارات والمواد المحظورة</li>
              </ul>
              <a href="#" class="inline-flex items-center px-3 py-1.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                <svg class="-ml-1 mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                تنزيل
              </a>
            </div>
            
            <div class="border rounded-lg p-5 bg-white shadow-sm">
              <h4 class="font-bold text-lg mb-3 text-primary-700">سياسة المكتب التجاري</h4>
              <ul class="list-disc pr-5 mb-3">
                <li>دمج قواعد اللباس المهني</li>
                <li>إرشادات الملابس ذات العلامات التجارية</li>
                <li>مواصفات اليوم العادي/الرسمي</li>
                <li>الاختلافات بين الأدوار المواجهة للعملاء والداخلية</li>
                <li>اعتبارات السفر التجاري</li>
                <li>إرشادات الإكسسوارات والتخصيص</li>
              </ul>
              <a href="#" class="inline-flex items-center px-3 py-1.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                <svg class="-ml-1 mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                تنزيل
              </a>
            </div>
          </div>
        `,
        image: '/images/avatar-placeholder.jpg',
      },
      {
        title: 'دليل تنفيذ السياسة',
        content: `
          <p class="mb-4">
            إنشاء سياسة هو مجرد الخطوة الأولى. التنفيذ الناجح يتطلب تخطيطًا دقيقًا، 
            وتواصلًا واضحًا، وإنفاذًا متسقًا:
          </p>
          
          <div class="mb-6 bg-neutral-50 p-5 rounded-lg">
            <h4 class="font-bold text-lg mb-3">خطوات التنفيذ</h4>
            <ol class="list-decimal pr-5 mb-3 space-y-2">
              <li>
                <span class="font-medium">مدخلات أصحاب المصلحة:</span> 
                <p class="mr-1">جمع التعليقات من الأقسام الرئيسية (الموارد البشرية، العمليات، ممثلي الموظفين) أثناء تطوير السياسة.</p>
              </li>
              <li>
                <span class="font-medium">المراجعة القانونية:</span> 
                <p class="mr-1">ضمان الامتثال لقوانين العمل المحلية، ومتطلبات الاستيعاب الديني، واللوائح الصناعية.</p>
              </li>
              <li>
                <span class="font-medium">التقديم المرحلي:</span> 
                <p class="mr-1">النظر في طرح تدريجي، خاصة بالنسبة للتغييرات الكبيرة في السياسات الحالية.</p>
              </li>
              <li>
                <span class="font-medium">التواصل الواضح:</span> 
                <p class="mr-1">توفير سياسات مكتوبة، وأدلة مرئية، وإحاطات شخصية حول متطلبات الزي الموحد الجديدة.</p>
              </li>
              <li>
                <span class="font-medium">تدريب المشرفين:</span> 
                <p class="mr-1">ضمان فهم المديرين لتفاصيل السياسة، وإرشادات التنفيذ، وإجراءات الاستيعاب.</p>
              </li>
              <li>
                <span class="font-medium">آلية التغذية الراجعة:</span> 
                <p class="mr-1">إنشاء عملية للموظفين لطرح الأسئلة أو الإبلاغ عن المشكلات المتعلقة بالزي الموحد.</p>
              </li>
              <li>
                <span class="font-medium">المراجعة المنتظمة:</span> 
                <p class="mr-1">جدولة مراجعات دورية للسياسة لمعالجة القضايا الناشئة أو المتطلبات المتغيرة.</p>
              </li>
            </ol>
          </div>
          
          <div class="border border-primary-200 rounded-lg p-6 mb-6 bg-primary-50">
            <h4 class="font-bold text-lg mb-3 text-primary-700">قائمة تحقق التنفيذ</h4>
            <p class="mb-3">تساعدك قائمة التحقق الشاملة على تتبع تقدم تنفيذ السياسة الخاصة بك:</p>
            <a href="#" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
              <svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              تنزيل قائمة تحقق التنفيذ (PDF)
            </a>
          </div>
        `,
        image: '/images/default-placeholder.jpg',
      }
    ],
    items: [
      {
        id: 'basic-policy',
        title: 'نموذج سياسة الزي الموحد الأساسية',
        description: 'نموذج سياسة أساسي يغطي المتطلبات الرئيسية للزي الموحد المناسب للشركات الصغيرة والمتوسطة.',
        image: '/images/default-placeholder.jpg'
      },
      {
        id: 'healthcare-policy',
        title: 'سياسة الزي الموحد للرعاية الصحية',
        description: 'سياسة شاملة للمؤسسات الطبية تتناول متطلبات النظافة والسلامة والمظهر المهني.',
        image: '/images/default-placeholder.jpg'
      },
      {
        id: 'hospitality-policy',
        title: 'سياسة الزي الموحد للضيافة',
        description: 'إرشادات مفصلة للفنادق والمطاعم والمنتجعات لضمان تمثيل العلامة التجارية بشكل متسق.',
        image: '/images/default-placeholder.jpg'
      },
      {
        id: 'corporate-policy',
        title: 'سياسة الزي الموحد للشركات',
        description: 'سياسة للبيئات المكتبية المهنية مع خيارات للأيام الرسمية وغير الرسمية.',
        image: '/images/default-placeholder.jpg'
      }
    ],
    relatedResources: [
      {
        title: 'دليل تصميم الزي الموحد',
        description: 'نصائح وإرشادات لتصميم زي موحد فعال يعزز هوية علامتك التجارية.',
        link: '/ar/resources/uniform-design-guide',
        icon: 'design'
      },
      {
        title: 'قائمة تدقيق برنامج الزي الموحد',
        description: 'قائمة شاملة لضمان تغطية جميع جوانب برنامج الزي الموحد الخاص بك.',
        link: '/ar/resources/uniform-program-checklist',
        icon: 'checklist'
      },
      {
        title: 'أفضل الممارسات للصيانة',
        description: 'إرشادات للحفاظ على الزي الموحد في حالة ممتازة لفترة أطول.',
        link: '/ar/resources/maintenance-best-practices',
        icon: 'maintenance'
      }
    ],
    cta: {
      title: 'هل تحتاج إلى تطوير سياسة مخصصة؟',
      description: 'يمكن لمستشاري الزي الموحد لدى يونيوم المساعدة في تطوير سياسات مخصصة خاصة بثقافة مؤسستك وصناعتك واحتياجاتك التشغيلية.',
      buttonText: 'اتصل بمتخصصي السياسات لدينا',
      buttonUrl: '/ar/contact'
    }
  };

  return <ResourcePageLayout resourceData={resourceData}  />;
} 
