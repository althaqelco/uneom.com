'use client';

import React from 'react';
import ResourcePageLayout from '@/components/layout/ResourcePageLayout';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function FabricGuideClientPageArabic() {
  const fabricTypes = [
    {
      id: 'cotton',
      title: 'القطن',
      description: 'قماش طبيعي ناعم وتنفسي، مريح للارتداء طوال اليوم. مثالي للمناخات الحارة والبيئات الداخلية.',
      image: '/images/fabric-cotton-blends.webp',
      properties: {
        'المتانة': '3/5',
        'الراحة': '5/5',
        'سهولة العناية': '4/5',
        'الاستدامة': '4/5'}
    },
    {
      id: 'polyester',
      title: 'البوليستر',
      description: 'نسيج اصطناعي خفيف الوزن ومقاوم للتجاعيد. يحتفظ بشكله جيدًا ويبقى على مظهره الجديد لفترة أطول من الأقمشة الطبيعية.',
      image: '/images/fabric-material-2024-12-06-03-35-02-utc.jpg',
      properties: {
        'المتانة': '4/5',
        'الراحة': '3/5',
        'سهولة العناية': '5/5',
        'الاستدامة': '2/5'}
    },
    {
      id: 'polycotton',
      title: 'مزيج البوليستر والقطن',
      description: 'مزيج من القطن والبوليستر يجمع بين راحة القطن ومتانة البوليستر. يعتبر خيارًا شائعًا للعديد من تطبيقات الزي الموحد.',
      image: '/images/fabric-cotton-blends.webp',
      properties: {
        'المتانة': '4/5',
        'الراحة': '4/5',
        'سهولة العناية': '4/5',
        'الاستدامة': '3/5'}
    },
    {
      id: 'performance',
      title: 'أقمشة الأداء',
      description: 'أنسجة اصطناعية متقدمة مصممة خصيصًا للظروف الصعبة. توفر خصائص فنية متقدمة مثل مقاومة الماء أو تنظيم درجة الحرارة.',
      image: '/images/large-water-drop-on-red-waterproof-fabric-2024-12-02-06-46-07-utc.jpg',
      properties: {
        'المتانة': '5/5',
        'الراحة': '4/5',
        'سهولة العناية': '4/5',
        'الاستدامة': '3/5'}
    },
    {
      id: 'sustainable',
      title: 'الأقمشة المستدامة',
      description: 'أنسجة صديقة للبيئة مصنوعة من مواد معاد تدويرها أو مصادر مستدامة. اختيار مثالي للمؤسسات الملتزمة بالاستدامة البيئية.',
      image: '/images/colorful-samples-of-upholstery-fabrics-for-upholst-2025-01-08-10-15-26-utc.jpg',
      properties: {
        'المتانة': '3/5',
        'الراحة': '4/5',
        'سهولة العناية': '3/5',
        'الاستدامة': '5/5'}
    },
  ];

  const resourceData = {
    locale: 'ar',
    title: 'دليل الأقمشة للزي الموحد',
    subtitle: 'تعرف على خصائص وفوائد مختلف الأقمشة للأزياء المهنية',
    heroImage: '/images/colorful-samples-of-upholstery-fabrics-for-upholst-2025-01-08-10-15-26-utc.jpg',
    overview: {
      title: 'اختيار النسيج المناسب لمؤسستك',
      content: `
        <p class="mb-4">
          يُعد اختيار النسيج المناسب أحد أهم القرارات عند تصميم الزي الموحد لمؤسستك. 
          يؤثر نوع القماش على الراحة والأداء والمتانة والمظهر الكلي لزي موظفيك.
        </p>
        <p class="mb-4">
          استخدم هذا الدليل لفهم خصائص وفوائد كل نوع من أنواع الأقمشة لاتخاذ القرار الأفضل 
          لاحتياجات مؤسستك في المملكة العربية السعودية، مع مراعاة المناخ والاستخدام المقصود.
        </p>
      `
    },
    sections: [
      {
        title: 'أنواع الأقمشة الرئيسية',
        content: `
          <p class="mb-4">تختلف أنواع الأقمشة في خصائصها ومزاياها. فيما يلي الأقمشة الأكثر استخدامًا في الأزياء المهنية:</p>
          
          <div class="space-y-6 mt-8">
            <div class="p-6 bg-neutral-50 rounded-lg">
              <h3 class="text-xl font-semibold mb-2">القطن</h3>
              <p>قماش طبيعي ناعم وتنفسي، مريح للارتداء طوال اليوم. مثالي للمناخات الحارة مثل المملكة العربية السعودية.</p>
              <ul class="mt-2 list-disc pr-6">
                <li>مثالي لـ: الضيافة، الرعاية الصحية، المكاتب التنفيذية</li>
                <li>خصائص متميزة: تنفسية ممتازة، ناعم على الجلد، امتصاص العرق</li>
              </ul>
            </div>
            
            <div class="p-6 bg-neutral-50 rounded-lg">
              <h3 class="text-xl font-semibold mb-2">البوليستر</h3>
              <p>نسيج اصطناعي خفيف الوزن ومقاوم للتجاعيد. يحتفظ بشكله جيدًا ويدوم لفترة أطول.</p>
              <ul class="mt-2 list-disc pr-6">
                <li>مثالي لـ: الأمن، الصناعة، البيئات الخارجية</li>
                <li>خصائص متميزة: دائم، مقاوم للتجاعيد، سريع الجفاف</li>
              </ul>
            </div>
            
            <div class="p-6 bg-neutral-50 rounded-lg">
              <h3 class="text-xl font-semibold mb-2">مزيج البوليستر والقطن</h3>
              <p>يجمع بين راحة القطن ومتانة البوليستر. خيار متوازن شائع في العديد من الصناعات.</p>
              <ul class="mt-2 list-disc pr-6">
                <li>مثالي لـ: المستشفيات، المطاعم، المؤسسات التعليمية</li>
                <li>خصائص متميزة: سهل العناية، متعدد الاستخدامات، توازن جيد</li>
              </ul>
            </div>
          </div>
        `,
        image: '/images/fabric-cotton-blends.webp'},
      {
        title: 'اعتبارات المناخ السعودي',
        content: `
          <p class="mb-4">المملكة العربية السعودية معروفة بمناخها الحار، خاصة خلال أشهر الصيف. عند اختيار الأقمشة للزي الموحد في هذا المناخ، ضع في اعتبارك:</p>
          
          <ul class="list-disc pr-6 mb-4">
            <li class="mb-2">
              <span class="font-semibold">التنفسية</span>: الأقمشة التي تسمح بتدفق الهواء وتبخر العرق ستكون أكثر راحة
            </li>
            <li class="mb-2">
              <span class="font-semibold">امتصاص الرطوبة</span>: الأقمشة التي تنقل الرطوبة بعيدًا عن الجسم تحافظ على جفاف الجسم ومنع نمو البكتيريا
            </li>
            <li class="mb-2">
              <span class="font-semibold">الوزن</span>: الأقمشة الخفيفة تكون عادة أكثر راحة في الحرارة
            </li>
            <li class="mb-2">
              <span class="font-semibold">الحماية من الشمس</span>: للعاملين في الخارج، فكر في الأقمشة ذات عامل الحماية من الأشعة فوق البنفسجية
            </li>
          </ul>
          
          <p class="mb-4">أفضل الخيارات للمناخ السعودي:</p>
          <ol class="list-decimal pr-6">
            <li class="mb-2">القطن 100% للراحة القصوى في الداخل</li>
            <li class="mb-2">مزيج القطن والبوليستر للتوازن بين الراحة والمتانة</li>
            <li class="mb-2">أقمشة الأداء المتخصصة للعمل الخارجي والبيئات الصناعية</li>
          </ol>
        `,
        image: '/images/saudi-uniform-map.jpg'},
      {
        title: 'الأقمشة لصناعات محددة',
        content: `
          <p class="mb-4">تتطلب الصناعات المختلفة أنواعًا مختلفة من الأقمشة لتلبية احتياجاتها الخاصة:</p>
          
          <div class="space-y-6">
            <div class="p-6 bg-neutral-50 rounded-lg">
              <h3 class="text-xl font-semibold mb-2">الرعاية الصحية</h3>
              <p class="mb-2">تتطلب أقمشة يمكن تعقيمها عند درجات حرارة عالية ومقاومة للبقع.</p>
              <p><strong>الخيارات الموصى بها:</strong> مزيج البوليستر والقطن، أقمشة مقاومة للبكتيريا</p>
            </div>
            
            <div class="p-6 bg-neutral-50 rounded-lg">
              <h3 class="text-xl font-semibold mb-2">الضيافة والمطاعم</h3>
              <p class="mb-2">تحتاج إلى أقمشة سهلة العناية بها، مقاومة للبقع، وتحافظ على مظهر أنيق.</p>
              <p><strong>الخيارات الموصى بها:</strong> مزيج البوليستر والقطن، القطن المعالج، أقمشة مقاومة للماء لموظفي المطبخ</p>
            </div>
            
            <div class="p-6 bg-neutral-50 rounded-lg">
              <h3 class="text-xl font-semibold mb-2">الصناعة والإنشاءات</h3>
              <p class="mb-2">تتطلب أقمشة متينة ومقاومة للحرارة والشرر والاحتكاك.</p>
              <p><strong>الخيارات الموصى بها:</strong> القطن المعالج بمواد مقاومة للحريق، الدنيم، أقمشة الأداء الصناعي</p>
            </div>
            
            <div class="p-6 bg-neutral-50 rounded-lg">
              <h3 class="text-xl font-semibold mb-2">الشركات والمكاتب</h3>
              <p class="mb-2">تحتاج إلى أقمشة أنيقة مريحة تعطي مظهرًا احترافيًا.</p>
              <p><strong>الخيارات الموصى بها:</strong> خلطات صوف عالية الجودة، قطن مصري، أقمشة مقاومة للتجاعيد</p>
            </div>
          </div>
        `,
        image: '/images/professional-textile-expert-checking-the-quality-of-a-fabric-in-a-factory-man-SBI-300990818.jpg'}
    ],
    items: fabricTypes,
    relatedResources: [
      {
        title: 'دليل المقاسات',
        description: 'تعرف على كيفية اختيار المقاسات المناسبة للزي الموحد لفريقك.',
        link: '/ar/resources/size-guide',
        icon: 'M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122'
      },
      {
        title: 'تقنية الأقمشة',
        description: 'استكشف أحدث التقنيات والابتكارات في مجال صناعة الأقمشة للأزياء المهنية.',
        link: '/ar/resources/fabric-technology',
        icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
      },
      {
        title: 'العناية بالأقمشة',
        description: 'نصائح للعناية بالزي الموحد للحفاظ على جودته ومظهره لفترة أطول.',
        link: '/ar/blog/fabric-care-tips',
        icon: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
      }
    ],
    cta: {
      title: 'هل تحتاج إلى مساعدة في اختيار الأقمشة المناسبة؟',
      description: 'فريقنا من الخبراء جاهز لمساعدتك في اختيار الأقمشة المثالية لأزياء مؤسستك بناءً على احتياجاتك المحددة والميزانية وبيئة العمل.',
      buttonText: 'طلب استشارة مجانية',
      buttonUrl: '/ar/contact?inquiry=fabric-consultation'
    }
  };
  
  return <ResourcePageLayout resourceData={resourceData} />;
}
