'use client';

import React from 'react';
import ServicePageLayout from '@/components/layout/ServicePageLayout';

export default function MeasurementServicesPageArabic() {
  const serviceData = {
    locale: 'ar',
    title: 'خدمات القياس',
    subtitle: 'حلول قياس احترافية للحصول على أزياء موحدة مثالية المقاس',
    heroImage: '/images/banner-placeholder.jpg',
    
    overview: [
      "توفر خدمات القياس من يونيوم حلول قياس احترافية لضمان حصول كل موظف على أزياء موحدة مقاسة بدقة تعزز الراحة والمظهر والوظائف. يستخدم متخصصو القياس الخبراء لدينا تقنيات وتكنولوجيات قياس متقدمة لالتقاط بيانات مقاسات دقيقة، مما يلغي التخمين وعدم الاتساق المرتبط غالبًا بالقياس الذاتي.",
      "سواء كنت بحاجة إلى جلسات قياس في الموقع للفرق الكبيرة، أو مواعيد فردية للموظفين التنفيذيين، أو حلول قياس عن بعد، تضمن خدمتنا الشاملة توحيد المقاسات في مؤسستك بأكملها. نحن نفهم أن الأزياء الموحدة المناسبة لا تبدو أكثر احترافية فحسب، بل تحسن أيضًا رضا الموظفين وتطيل عمر الملابس."
    ],
    
    steps: [
      {
        icon: '/images/default-placeholder.jpg',
        title: 'التخطيط والتحليل',
        description: 'نبدأ بفهم احتياجات مؤسستك المحددة ومتطلبات الزي الموحد. يحلل فريقنا أفضل نهج للقياس بناءً على عدد الموظفين والمواقع واللوجستيات.'
      },
      {
        icon: '/images/default-placeholder.jpg',
        title: 'التنفيذ والقياس',
        description: 'ينشر فريق القياس المدرب لدينا في موقعك (أو مواقعك) لإجراء قياسات دقيقة لكل موظف. نستخدم طرق القياس القياسية الصناعية ونوثق بيانات المقاس بنظام آمن.'
      },
      {
        icon: '/images/default-placeholder.jpg',
        title: 'إدارة البيانات وإعداد التقارير',
        description: 'نقوم بمعالجة وتنظيم بيانات القياس في تقارير تفصيلية، مما يوفر نظرة عامة واضحة على متطلبات المقاسات لبرنامج الزي الموحد الخاص بك. يتم مشاركة هذه البيانات معك بتنسيق سهل الاستخدام للتخطيط والطلب.'
      }
    ],
    
    benefits: [
      {
        icon: '/images/default-placeholder.jpg',
        title: 'دقة محسنة',
        description: 'منع مشاكل المقاسات والعائدات من خلال الحصول على قياسات دقيقة من البداية.'
      },
      {
        icon: '/images/default-placeholder.jpg',
        title: 'كفاءة محسنة',
        description: 'توفير الوقت والموارد من خلال تبسيط عملية قياس الموظفين.'
      },
      {
        icon: '/images/default-placeholder.jpg',
        title: 'اتساق في المقاسات',
        description: 'ضمان قياسات موحدة لجميع الموظفين بغض النظر عن الموقع.'
      },
      {
        icon: '/images/default-placeholder.jpg',
        title: 'راحة محسنة للموظفين',
        description: 'ضمان أن جميع الموظفين يرتدون أزياء موحدة مقاسة بشكل صحيح تعزز الراحة والأداء.'
      },
      {
        icon: '/images/default-placeholder.jpg',
        title: 'مظهر احترافي',
        description: 'تعزيز صورة علامتك التجارية من خلال زي موحد مناسب تمامًا لكل موظف.'
      },
      {
        icon: '/images/default-placeholder.jpg',
        title: 'إدارة بيانات شاملة',
        description: 'الاستفادة من البيانات المنظمة للمقاسات للتخطيط المستقبلي واستبدال الزي الموحد.'
      }
    ],
    
    caseStudies: [
      {
        id: "luxury-hotel-measurement",
        title: 'برنامج قياس سلسلة الضيافة',
        description: 'قياس أكثر من 1200 موظف عبر 4 عقارات مع متطلبات زي موحد متنوعة. تنفيذ برنامج قياس شامل مع محطات قياس متنقلة، وتكنولوجيا قياس رقمية، ونظام جدولة المواعيد.',
        result: 'تقليل معدل التبادل من 32٪ إلى 4٪ فقط، وإكمال جميع القياسات خلال فترة 5 أيام، وتحسين تقييمات مظهر الزي الموحد بنسبة 27٪.',
        image: '/images/default-placeholder.jpg'
      },
      {
        id: "healthcare-measurement",
        title: 'حل قياس شبكة الرعاية الصحية',
        description: 'تنسيق قياسات لـ 3500 متخصص في الرعاية الصحية عبر 12 منشأة مع عمليات على مدار 24/7. تطوير برنامج قياس متخصص للرعاية الصحية يتميز بمحطات قياس معقمة وجدولة على مدار 24 ساعة.',
        result: 'قياس 100٪ من الموظفين بدون أي تأثير على رعاية المرضى، وتقليل الشكاوى المتعلقة بالزي الموحد بنسبة 92٪، وتحسين تقييمات المقاس الوظيفي من 68٪ إلى 94٪.',
        image: '/images/default-placeholder.jpg'
      }
    ],
    
    testimonials: [
      {
        id: "1",
        quote: "لقد حولت خدمة القياس من يونيوم برنامج الزي الموحد لدينا. قام فريقهم المحترف بقياس موظفينا بالكامل عبر أربع عقارات بكفاءة ودقة ملحوظة. كان الفرق في جودة المقاس ملحوظًا على الفور، حيث بدا موظفونا أكثر أناقة بشكل ملحوظ وأبلغوا عن مستويات راحة أعلى بكثير. كما أثبتت بيانات المقاسات المفصلة أنها لا تقدر بثمن لإدارة الزي الموحد المستمرة لدينا.",
        author: 'فاطمة آل سعود',
        position: 'مديرة الموارد البشرية',
        company: 'فنادق المملكة الفاخرة',
        image: '/images/avatar-placeholder.jpg'
      },
      {
        id: "2",
        quote: "كان مستوى الخبرة والتنظيم الذي قدمته يونيوم لعملية القياس لدينا استثنائيًا. فهم فريقهم التحديات الفريدة لقياس موظفي الرعاية الصحية وابتكر حلولًا تعمل ضمن قيود التشغيل لدينا. أحدثت دقة القياسات فرقًا ملحوظًا في كيفية مناسبة وعمل الأزياء الموحدة لدينا، وهو أمر بالغ الأهمية في بيئة الرعاية الصحية.",
        author: 'د. خالد العمري',
        position: 'الرئيس التنفيذي للعمليات',
        company: 'شبكة الرياض الطبية',
        image: '/images/avatar-placeholder.jpg'
      }
    ],
    
    faqs: [
      {
        question: 'كيف تعمل عملية القياس في الموقع؟',
        answer: 'تتبع خدمة القياس في الموقع لدينا عملية منظمة مصممة للكفاءة والدقة. أولاً، نعمل مع فريقك لجدولة جلسات القياس بناءً على متطلبات التشغيل الخاصة بك. في التواريخ المحددة، يصل متخصصو القياس لدينا مع جميع المعدات اللازمة ويقومون بإعداد محطات القياس في المناطق المخصصة. يحضر الموظفون مواعيدهم في الأوقات المحددة، حيث يأخذ متخصصونا قياسات شاملة باستخدام تقنيات وأدوات رقمية موحدة. تستغرق كل جلسة قياس عادة 5-7 دقائق لكل شخص. يتلقى الموظفون تأكيدًا لقياساتهم، ويتم تحميل جميع البيانات بشكل آمن إلى نظامنا في الوقت الفعلي. نقدم تقارير تقدم يومية خلال المهام متعددة الأيام وملخصًا شاملاً عند الانتهاء.'
      },
      {
        question: 'ما هي تقنيات القياس التي تستخدمونها؟',
        answer: 'نستخدم مجموعة من تقنيات القياس اعتمادًا على متطلبات المشروع والميزانية. للمشاريع القياسية، يستخدم متخصصونا أدوات قياس رقمية توفر دقة تصل إلى 1/8 بوصة (3 مم). للبرامج الأكبر، نقدم تقنية المسح ثلاثي الأبعاد للجسم التي تلتقط قياسات شاملة في ثوانٍ بدقة استثنائية. تتضمن خدمتنا المتميزة مسحًا متقدمًا للجسم ينشئ ملفات رقمية مفصلة للملابس المناسبة تمامًا. تتم معالجة جميع بيانات القياس من خلال برنامجنا الخاص الذي يحدد التناقضات المحتملة ويضمن دقة القياس. بالنسبة للملابس المتخصصة مثل معدات السلامة أو الملابس الرسمية المصممة، نستخدم تقنيات قياس تكميلية خاصة بتلك الأنواع من الملابس.'
      },
      {
        question: 'كم عدد الموظفين الذين يمكنكم قياسهم في يوم واحد؟',
        answer: 'تعتمد قدرتنا على طريقة القياس ومستوى التفاصيل المطلوبة. مع عملية القياس القياسية لدينا، يمكن لكل متخصص قياس حوالي 40-50 موظفًا في الساعة بدقة. ليوم كامل مع متخصصين متعددين، يمكننا عادة قياس 300-500 موظف. مع تقنية المسح ثلاثي الأبعاد، تزداد الإنتاجية إلى 60-80 موظفًا في الساعة لكل ماسح. بالنسبة للمؤسسات الكبيرة، يمكننا نشر فرق ومحطات قياس متعددة في وقت واحد عبر مناطق أو ورديات مختلفة لتقليل اضطراب العمليات. نعمل مع فريق الجدولة الخاص بك لإنشاء خطة قياس فعالة تستوعب حجم القوى العاملة لديك وقيود التشغيل.'
      },
      {
        question: 'هل تقدمون خدمات قياس للموظفين عن بعد؟',
        answer: 'نعم، نقدم عدة حلول للموظفين عن بعد. خيارنا الأساسي عن بعد هو برنامج القياس الذاتي الموجه، والذي يتضمن مقاطع فيديو تعليمية مفصلة، وأدوات قياس متخصصة يتم شحنها إلى الموظف، وجلسات توجيه افتراضية مع متخصصي القياس لدينا. للأدوار التنفيذية أو المتخصصة، نقدم خدمات قياس فردية متنقلة حيث ينتقل متخصص إلى موقع الموظف. كما نتعاون مع مؤسسات الخياطة في جميع أنحاء المملكة العربية السعودية ومنطقة الخليج لإجراء قياسات شخصية باتباع بروتوكولاتنا. يتم التحقق من جميع بيانات القياس عن بعد من خلال نظام فحص الجودة لدينا لتحديد التناقضات المحتملة، ولدينا إجراءات متابعة لحل أي مخاوف تتعلق بالقياس.'
      },
      {
        question: 'كيف تضمنون دقة واتساق القياس؟',
        answer: 'يتم ضمان دقة واتساق القياس من خلال نهج متعددة. يخضع جميع متخصصي القياس لدينا لتدريب شامل على تقنيات القياس الموحدة ويجب أن يحصلوا على شهادة قبل العمل بشكل مستقل. نستخدم أدوات قياس معايرة يتم فحصها يوميًا للتأكد من دقتها. تتضمن عمليتنا خطوات تحقق مدمجة حيث يتم أخذ القياسات الحرجة مرتين لتأكيد الاتساق. بالنسبة للمشاريع ذات المتخصصين المتعددين، نجري فحوصات متبادلة منتظمة لضمان الاتساق بين أعضاء الفريق المختلفين. تخضع جميع بيانات القياس لمراجعة خوارزمية لتحديد القياسات أو الأنماط غير العادية التي قد تشير إلى أخطاء. بالإضافة إلى ذلك، نحتفظ بسجلات مفصلة تسمح لنا بتحسين قياسات الفرد بناءً على التعليقات بعد تسليم الزي الموحد.'
      }
    ],
    
    cta: {
      title: 'هل أنت مستعد لضمان أزياء موحدة مثالية المقاس لفريقك؟',
      description: 'فريق القياس المتخصص لدينا جاهز لمساعدتك.',
      buttonText: 'جدولة استشارة قياس',
      buttonUrl: '/ar/contact?service=measurement-services'
    },
    
    secondaryCta: {
      title: 'تعرف على سياسات الزي الرسمي للشركات لدينا',
      buttonText: 'سياسات الزي الرسمي للشركات',
      buttonUrl: '/ar/services/uniform-policies'
    }
  };
  
  return <ServicePageLayout locale="ar" serviceData={serviceData} skipMainLayout={true} />;
} 
