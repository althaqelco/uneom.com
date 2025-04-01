'use client';

import React from 'react';
import ServicePageLayout from '@/components/layout/ServicePageLayout';

export default function CustomDesignServicePageArabic() {
  const serviceData = {
    locale: 'ar',
    title: 'تصميم مخصص وعلامات تجارية',
    subtitle: 'حلول أزياء موحدة مميزة ترتقي بهوية علامتك التجارية',
    heroImage: '/images/banner-placeholder.jpg',
    
    overview: [
      "تقدم خدمة التصميم المخصص والعلامات التجارية من يونيوم حلولًا فريدة للأزياء الموحدة تعكس هوية وقيم مؤسستك المميزة. يعمل فريق التصميم المتخصص لدينا بشكل وثيق معك لإنشاء أزياء موحدة لا تلبي المتطلبات الوظيفية فحسب، بل تعمل أيضًا كسفراء قويين لعلامتك التجارية.",
      "من عناصر العلامة التجارية البسيطة إلى التصاميم المخصصة بالكامل، نجمع بين الإبداع الفني والخبرة العملية لتطوير أزياء موحدة سيفتخر موظفوك بارتدائها. سواء كنت تتطلع إلى تحديث برنامج الزي الموحد الحالي أو تطوير تصاميم جديدة تمامًا، فإن نهجنا الشامل يضمن حلاً يتوافق تمامًا مع رؤية علامتك التجارية واحتياجاتك التشغيلية."
    ],
    
    steps: [
      {
        icon: '/images/banner-placeholder.jpg',
        title: 'اكتشاف العلامة التجارية',
        description: 'نبدأ بمرحلة اكتشاف شاملة لفهم قيم علامتك التجارية وعناصر الهوية وتفضيلات التصميم. يحلل فريقنا هويتك البصرية الحالية والجمهور المستهدف وموقع الصناعة لتحديد أهداف تصميم واضحة.'
      },
      {
        icon: '/images/default-placeholder.jpg',
        title: 'تطوير المفهوم',
        description: 'يقوم فريق التصميم لدينا بإنشاء مفاهيم أولية تجمع بين الجاذبية الجمالية والمتطلبات الوظيفية. نقدم اتجاهات تصميم متعددة مع لوحات الأفكار وألواح الألوان والرسومات الأولية لتصور الأساليب المختلفة.'
      },
      {
        icon: '/images/default-placeholder.jpg',
        title: 'التحسين وإنشاء النماذج الأولية',
        description: 'بناءً على ملاحظاتك، نقوم بتحسين المفاهيم المختارة وتطوير تصاميم مفصلة. يتم إنشاء نماذج أولية لقطع الزي الموحد الرئيسية، مما يسمح باختبار المقاس وتقييم المواد وإجراء تعديلات إضافية على التصميم.'
      },
      {
        icon: '/images/product-placeholder.jpg',
        title: 'الإنتاج والتنفيذ',
        description: 'بمجرد الموافقة على التصاميم، ندير عملية الإنتاج بمعايير صارمة لمراقبة الجودة. ينسق فريقنا القياسات والتصنيع والتسليم لضمان طرح سلس لبرنامج الزي الموحد المخصص الخاص بك.'
      }
    ],
    
    benefits: [
      {
        icon: '/images/default-placeholder.jpg',
        title: 'تعزيز هوية العلامة التجارية',
        description: 'تعزز الأزياء الموحدة المخصصة هويتك البصرية وتخلق اعترافًا فوريًا بالعلامة التجارية داخليًا ومع العملاء.'
      },
      {
        icon: '/images/default-placeholder.jpg',
        title: 'التمييز التنافسي',
        description: 'تميز عن المنافسين بأزياء موحدة مميزة توصل موقعك الفريد وقيمك في السوق.'
      },
      {
        icon: '/images/default-placeholder.jpg',
        title: 'تعزيز ثقافة الشركة',
        description: 'تعزز الأزياء الموحدة المصممة جيدًا الشعور بالانتماء والفخر بين الموظفين، مما يقوي ثقافة مؤسستك.'
      },
      {
        icon: '/images/default-placeholder.jpg',
        title: 'الاتساق البصري',
        description: 'ضمان عرض متسق للعلامة التجارية عبر جميع المواقع والأقسام ونقاط اتصال العملاء.'
      },
      {
        icon: '/images/default-placeholder.jpg',
        title: 'تحسين الوظائف',
        description: 'تتيح التصاميم المخصصة ميزات وتكييفات خاصة بالصناعة تحسن الراحة والأداء لبيئة عملك المحددة.'
      },
      {
        icon: '/images/default-placeholder.jpg',
        title: 'تحسين إدراك العملاء',
        description: 'ترفع الأزياء الموحدة المهنية والتي تحمل العلامة التجارية من تصور العملاء لجودة الخدمة والاحترافية التنظيمية.'
      }
    ],
    
    caseStudies: [
      {
        id: "luxury-hotel",
        title: 'تحول العلامة التجارية للفندق الفاخر',
        description: 'إنشاء مجموعة أزياء موحدة مميزة لعلامة فندقية فاخرة جديدة تطلق في المملكة العربية السعودية. تطوير نظام تصميم زي موحد شامل يضم 12 قطعة ملابس فريدة عبر 5 أقسام مع تطوير أقمشة مخصصة.',
        result: 'ذكر 92٪ من الضيوف مظهر الموظفين المميز كعنصر لا ينسى، وتم عرضه في معرض التصميم السنوي، وتم تقييم رضا الموظفين بـ 4.8/5.',
        image: '/images/default-placeholder.jpg'
      },
      {
        id: "banking-identity",
        title: 'تجديد هوية الخدمات المصرفية للشركات',
        description: 'تحديث برنامج زي موحد قديم لمؤسسة مالية رائدة تضم أكثر من 1200 موظف. إنشاء مجموعة أزياء موحدة محدثة تحافظ على لوحة ألوان التراث مع إدخال صور ظلية معاصرة وأقمشة متميزة.',
        result: 'زيادة بنسبة 86٪ في رضا الموظفين، وتقليل تكاليف الصيانة بنسبة 25٪، وزيادة مقاييس تصور العملاء للاحترافية بنسبة 18٪.',
        image: '/images/default-placeholder.jpg'
      }
    ],
    
    testimonials: [
      {
        id: "1",
        quote: "لقد حول العمل مع فريق التصميم في يونيوم مظهر موظفينا بما يفوق توقعاتنا. لقد التقطوا جوهر علامتنا التجارية أثناء إنشاء أزياء موحدة عالية الوظائف يحب فريقنا ارتداؤها. أصبحت العناصر المخصصة التي طوروها تفاصيل مميزة يتعرف عليها موظفونا وضيوفنا على الفور على أنها فريدة من نوعها.",
        author: 'نورة الفيصل',
        position: 'مديرة العلامة التجارية',
        company: 'فنادق ومنتجعات المملكة',
        image: '/images/avatar-placeholder.jpg'
      },
      {
        id: "2",
        quote: "كانت عملية تصميم يونيوم شاملة وتعاونية من البداية إلى النهاية. لقد فهموا حاجتنا لاحترام تراثنا مع تحديث مظهرنا. يحقق برنامج الزي الموحد المخصص الذي طوروه التوازن المثالي بين الابتكار والتقاليد، وقد ساهم بشكل كبير في جهود تجديد علامتنا التجارية.",
        author: 'فهد العتيبي',
        position: 'رئيس التسويق',
        company: 'مجموعة الرياض المالية',
        image: '/images/avatar-placeholder.jpg'
      }
    ],
    
    faqs: [
      {
        question: 'كيف تعمل عملية التصميم المخصص وكم تستغرق عادة؟',
        answer: 'تتبع عملية التصميم المخصص لدينا منهجية منظمة من الاكتشاف الأولي من خلال تطوير المفهوم والتحسين والإنتاج. الجدول الزمني النموذجي لبرنامج مخصص شامل هو 12-16 أسبوعًا، على الرغم من أن هذا يمكن أن يختلف بناءً على تعقيد المشروع وعدد عناصر الزي الموحد، وما إذا كان تطوير الأقمشة المخصصة مطلوبًا. للعملاء ذوي الاحتياجات المتسارعة، نقدم خدمات تصميم معجلة يمكن أن تقدم حلولاً مخصصة في أقل من 8 أسابيع.'
      },
      {
        question: 'هل يمكنكم دمج عناصر علامتنا التجارية الحالية في تصاميم الزي الموحد المخصصة؟',
        answer: 'بالتأكيد. يتخصص فريق التصميم لدينا في دمج عناصر علامتك التجارية الحالية بشكل مدروس - من لوحات الألوان والشعارات إلى خصائص العلامة التجارية الأكثر دقة - في تصاميم الزي الموحد. نتبع نهجًا استراتيجيًا لدمج العلامة التجارية، مما يضمن دمج العناصر بطرق جذابة بصريًا وعملية للارتداء اليومي. يمكن تعديل مستوى الرؤية للعلامة التجارية بناءً على تفضيلاتك، من إشارات العلامة التجارية الدقيقة إلى بيانات الهوية الأكثر بروزًا.'
      },
      {
        question: 'هل تقومون بإنشاء ملابس مخصصة بالكامل أم تعديل أنماط الزي الموحد الحالية؟',
        answer: 'نقدم كلا النهجين حسب احتياجاتك وميزانيتك. بالنسبة للعديد من العملاء، نقوم بإنشاء ملابس مصممة بالكامل حسب مواصفاتك. بالنسبة للآخرين، نقوم بتعديل مجموعتنا الواسعة من التصاميم الأساسية مع ألوان وأقمشة وعناصر علامة تجارية مخصصة. تستخدم العديد من البرامج الناجحة نهجًا هجينًا، حيث تتلقى المناصب المواجهة للعملاء قطعًا مخصصة بالكامل بينما تستفيد الأدوار الداعمة من التصاميم القياسية المعدلة لتحقيق كفاءة التكلفة.'
      },
      {
        question: 'ما هي خيارات التخصيص المتاحة للأزياء الموحدة؟',
        answer: 'خيارات التخصيص لدينا واسعة وتشمل: تطوير أقمشة مخصصة بألوان أو أنماط أو ميزات أداء مسجلة الملكية؛ تصاميم ملابس مصممة خصيصًا مع صور ظلية وتفاصيل تصميم فريدة؛ تقنيات التطريز والطباعة والتطبيق المخصصة؛ أزرار وحواف وأجهزة متخصصة مع عناصر العلامة التجارية؛ ملصقات مخصصة وعلامات تجارية داخلية؛ تعديلات مناسبة متخصصة لأنواع الجسم المختلفة؛ وأنظمة تصميم معيارية تسمح بالتغييرات الموسمية أو التخصيص الشخصي للموظف ضمن إرشادات العلامة التجارية.'
      },
      {
        question: 'كيف تضمنون أن تكون التصاميم المخصصة جذابة ووظيفية للاستخدام اليومي؟',
        answer: 'يعد التوازن بين الجماليات والوظائف أمرًا مركزيًا في فلسفة التصميم لدينا. نحقق ذلك من خلال عملية تعاونية تتضمن مدخلات من كل من الإدارة والموظفين الذين سيرتدون الأزياء الموحدة. تخضع جميع التصاميم لاختبار الارتداء في بيئات العمل الفعلية قبل الموافقة النهائية. يتمتع فريق التصميم الفني لدينا بخبرة واسعة في إنشاء ملابس تستوعب الحركة واعتبارات المناخ والمتطلبات الخاصة بالوظيفة مع الحفاظ على مظهر أنيق طوال يوم العمل.'
      }
    ],
    
    cta: {
      title: 'هل أنت مستعد لتحويل علامتك التجارية من خلال الأزياء الموحدة المخصصة؟',
      description: 'فريق التصميم لدينا جاهز لتحويل رؤيتك إلى واقع.',
      buttonText: 'طلب استشارة تصميم',
      buttonUrl: '/ar/contact?service=custom-design'
    },
    
    secondaryCta: {
      title: 'تعرف على خدمات الطلب بالجملة لدينا',
      buttonText: 'خدمات الطلب بالجملة',
      buttonUrl: '/ar/services/bulk-ordering'
    }
  };
  
  return <ServicePageLayout locale="ar" serviceData={serviceData}  />;
} 
