'use client';

import React from 'react';
import ServicePageLayout from '@/components/layout/ServicePageLayout';

export default function BulkOrderingServicePageArabic() {
  const serviceData = {
    locale: 'ar',
    title: 'طلبات بالجملة',
    subtitle: 'حلول شراء مبسطة لمتطلبات الزي الموحد واسعة النطاق',
    heroImage: '/images/banner-placeholder.jpg',
    
    overview: [
      "توفر خدمة الطلب بالجملة من يونيوم حلاً مبسطًا للمؤسسات التي تتطلب كميات كبيرة من الأزياء الموحدة عبر أقسام أو مواقع متعددة. يعمل فريق المشتريات المتخصص لدينا معك لتنسيق الطلبات المعقدة، وإدارة الخدمات اللوجستية، وضمان جودة متسقة عبر برنامج الزي الموحد بأكمله.",
      "نحن نفهم تحديات شراء الزي الموحد واسع النطاق وقد طورنا أنظمة وعمليات مصممة خصيصًا للتعامل مع الطلبات ذات الحجم الكبير بكفاءة. من تحسين التصنيع إلى إدارة المخزون وتنسيق التسليم، يضمن نهجنا الشامل أن تتلقى مؤسستك بالضبط ما تحتاجه، عندما تحتاجه، بأكثر نقطة سعر تنافسية ممكنة."
    ],
    
    steps: [
      {
        icon: '/images/default-placeholder.jpg',
        title: 'تحديد المتطلبات',
        description: 'نعمل معك لفهم متطلبات الكميات الكبيرة الخاصة بك، بما في ذلك التصميم، والمواصفات الفنية، والموعد النهائي للتسليم، واعتبارات الميزانية. يقوم فريقنا بتوثيق متطلباتك بالتفصيل لضمان تلبية جميع احتياجاتك.'
      },
      {
        icon: '/images/default-placeholder.jpg',
        title: 'تطوير العرض',
        description: 'بناءً على متطلباتك، نقوم بإنشاء عرض شامل يتضمن خيارات التصميم والأقمشة، ومواصفات المنتج، والتسعير التفصيلي، وجداول التسليم. نقدم عينات حسب الحاجة للتحقق من الجودة والمقاس قبل التصنيع بكميات كبيرة.'
      },
      {
        icon: '/images/product-placeholder.jpg',
        title: 'الإنتاج والمراقبة',
        description: 'بمجرد الموافقة على العرض، نبدأ دورة الإنتاج مع ضوابط صارمة لمراقبة الجودة في كل مرحلة. نقدم تحديثات منتظمة حول التقدم المحرز، ونتعامل بشكل استباقي مع أي مشكلات قد تنشأ أثناء عملية التصنيع.'
      },
      {
        icon: '/images/default-placeholder.jpg',
        title: 'الشحن والتسليم',
        description: 'نتولى جميع جوانب الشحن والخدمات اللوجستية، بما في ذلك التخليص الجمركي، عند الاقتضاء، لضمان وصول طلبك إلى وجهته في الوقت المحدد وبحالة ممتازة. نوفر خدمات التوزيع والتخزين للطلبات المستمرة.'
      }
    ],
    
    benefits: [
      {
        icon: '/images/default-placeholder.jpg',
        title: 'وفورات ملموسة',
        description: 'وفر ما يصل إلى 25٪ على الطلبات الكبيرة مقارنة بالمشتريات الفردية، مع معدلات تخفيض تصاعدية للكميات الأكبر.'
      },
      {
        icon: '/images/default-placeholder.jpg',
        title: 'جودة متفوقة',
        description: 'فحوصات مراقبة الجودة المتعددة خلال عملية الإنتاج تضمن أعلى معايير المنتجات النهائية.'
      },
      {
        icon: '/images/default-placeholder.jpg',
        title: 'توفير الوقت',
        description: 'عملية طلب مبسطة مع مدير حساب مخصص يتعامل مع جميع التفاصيل، مما يوفر وقت موظفيك.'
      },
      {
        icon: '/images/default-placeholder.jpg',
        title: 'خيارات مرنة',
        description: 'حلول تصميم مخصصة ومتطلبات العلامة التجارية وبرنامج طلب مستمر متاح للمؤسسات الكبيرة.'
      },
      {
        icon: '/images/default-placeholder.jpg',
        title: 'دعم لوجستي',
        description: 'إدارة مخزون متكاملة وحلول تخزين وتوزيع لضمان توفر الأزياء الموحدة عند الحاجة.'
      },
      {
        icon: '/images/default-placeholder.jpg',
        title: 'تتبع وتقارير',
        description: 'تحليلات المشتريات المفصلة والإبلاغ لمساعدتك في مراقبة الإنفاق وتحسين ميزانيات الزي الموحد المستقبلية.'
      }
    ],
    
    caseStudies: [
      {
        id: "hospital-uniform",
        title: "برنامج الزي الطبي على مستوى المستشفى",
        description: "كانت مجموعة مستشفيات الرياض تدير أكثر من 5000 من العاملين في القطاع الصحي عبر خمسة مواقع، مع ضرورة توفير أزياء طبية متسقة وعالية الجودة. قمنا بتطوير نظام توريد بالجملة مع رموز ألوان مخصصة للأقسام وتطريز للشعارات.",
        result: "تخفيض التكاليف بنسبة 22٪ وتحسين معدل رضا الموظفين وتوفير 15 ساعة أسبوعيًا من وقت الموظفين الإداريين.",
        image: '/images/banner-placeholder.jpg'
      },
      {
        id: "campus-uniform",
        title: "برنامج الزي الموحد للحرم الجامعي المتعدد",
        description: "تدير مؤسسة الفيصل 12 مدرسة في جميع أنحاء المملكة العربية السعودية، حيث يحتاج أكثر من 15000 طالب إلى زي مدرسي موحد. قمنا بإنشاء خط إنتاج مخصص للزي المدرسي مع مراقبة صارمة للجودة وشبكة لوجستية متقدمة.",
        result: "تحقيق دقة مخزون بنسبة 99.8٪ وتسليم جميع الأزياء المدرسية قبل أسبوعين من بداية الفصل الدراسي وتقليل معدل العائد بنسبة 64٪.",
        image: '/images/default-placeholder.jpg'
      }
    ],
    
    testimonials: [
      {
        id: "1",
        quote: "لقد قدمت خدمة الطلب بالجملة من يونيوم حلاً سلسًا لمتطلبات الزي الطبي المعقدة لدينا. أحدثت عمليتهم المنظمة والمنتجات ذات الجودة الفائقة تحولاً في أزيائنا الموحدة عبر جميع مرافقنا.",
        author: "د. إبراهيم الحربي",
        position: "مدير العمليات",
        company: "مجموعة مستشفيات الرياض",
        image: '/images/avatar-placeholder.jpg'
      },
      {
        id: "2",
        quote: "عند إدارة الأزياء الموحدة لآلاف الطلاب عبر حرم جامعي متعدد، الدقة والموثوقية أمران أساسيان. قدمت خدمة الطلب بالجملة من يونيوم أداءً استثنائيًا، وقدمت منتجات ممتازة في الوقت المحدد بكل مرة.",
        author: "نادية الفيصل",
        position: "مديرة المشتريات",
        company: "مؤسسة الفيصل التعليمية",
        image: '/images/avatar-placeholder.jpg'
      }
    ],
    
    faqs: [
      {
        question: 'ما هي الحد الأدنى للكميات المطلوبة للطلب بالجملة؟',
        answer: 'تم تصميم خدمة الطلب بالجملة لدينا للمؤسسات التي تتطلب أكثر من 100 قطعة زي موحد، على الرغم من أن الحد الأدنى المحدد يمكن أن يختلف بناءً على تعقيد العناصر ومتطلبات التخصيص. نقدم هياكل تسعير متدرجة مع خصومات متزايدة عادة عند 100 و250 و500 و1000 و5000+ وحدة. بالنسبة للطلبات التي لا تلبي عتبات الجملة القياسية لدينا، ما زلنا نقدم أسعارًا تنافسية ويمكننا التوصية باستراتيجيات التحسين لمساعدتك في الوصول إلى مستويات خصم أعلى.'
      },
      {
        question: 'كيف تتعاملون مع توزيع المقاسات للطلبات الكبيرة؟',
        answer: 'نقدم عدة طرق لتوزيع المقاسات للطلبات بالجملة. بالنسبة للمؤسسات التي لديها برامج زي موحد حالية، يمكننا استخدام البيانات التاريخية لإنشاء ملفات مقاسات دقيقة. بالنسبة للبرامج الجديدة، يمكننا توفير توقعات المقاسات بناءً على معايير الصناعة أو إجراء جلسات قياس في الموقع. نقدم أيضًا تخصيصات مقاسات مرنة تسمح بإجراء تعديلات بعد الطلب الأولي ويمكننا الاحتفاظ بمخزون احتياطي من المقاسات الشائعة للاستبدال السريع أو المعينين الجدد. تتضمن جميع الطلبات بالجملة تقارير مفصلة عن توزيع المقاسات.'
      },
      {
        question: 'ما هو وقت التسليم النموذجي لطلبات الزي الموحد بالجملة؟',
        answer: 'تتراوح أوقات التسليم القياسية للطلبات بالجملة عادة من 4-8 أسابيع اعتمادًا على حجم الطلب ومتطلبات التخصيص وقدرة الإنتاج الحالية. بالنسبة للعملاء ذوي الاحتياجات العاجلة، نقدم خيارات إنتاج معجلة يمكن أن تقلل أوقات التسليم إلى 2-3 أسابيع مقابل رسوم إضافية. نقدم أيضًا برامج طلب مجدولة تخطط للإنتاج حول احتياجاتك المحددة مسبقًا، مما يضمن التوافر دون رسوم الاستعجال. بالنسبة لمتطلبات الزي الموحد المتكررة، نوصي بخدمة التنبؤ لدينا التي تجدول الإنتاج قبل وقت طويل من الاحتياجات.'
      },
      {
        question: 'كيف تضمنون اتساق الجودة عبر الطلبات الكبيرة؟',
        answer: 'يتم ضمان اتساق الجودة من خلال عملية مراقبة الجودة متعددة المراحل لدينا. بالنسبة للطلبات بالجملة، نقوم بتنفيذ أنظمة التحكم في الدفعات التي تتتبع دفعات الإنتاج، وإجراء فحوصات عينات منتظمة طوال عملية التصنيع، وإجراء فحوصات شاملة قبل الشحن. تستخدم فرق الجودة لدينا مواصفات قياس موحدة وبروتوكولات مطابقة الألوان للحفاظ على الاتساق. بالنسبة للطلبات الكبيرة جدًا، غالبًا ما ننتج دفعة عينة ما قبل الإنتاج للموافقة عليها قبل بدء الإنتاج الكامل، ونحتفظ بعينات مرجعية طوال الإنتاج لضمان الاتساق.'
      },
      {
        question: 'هل يمكنكم التعامل مع التسليم إلى مواقع متعددة للطلبات بالجملة؟',
        answer: 'نعم، تم تصميم نظام الخدمات اللوجستية لدينا خصيصًا للتعامل مع توزيعات متعددة المواقع المعقدة. نقدم العديد من خيارات التوزيع: التسليم المركزي إلى مركز التوزيع الرئيسي الخاص بك؛ الشحن المباشر إلى كل موقع مع قوائم تعبئة مخصصة؛ عمليات تسليم مرحلية بناءً على الأولوية أو جدول التنفيذ؛ وخدمات الاختيار والتعبئة الفردية لتوزيعات الموظفين المسماة. يتتبع نظامنا كل مكون شحنة ويوفر تقارير مفصلة عن حالة التسليم. يمكننا أيضًا التكامل مع أنظمة التوزيع الداخلية الخاصة بك أو توفير تتبع RFID للشحنات ذات القيمة العالية أو الحساسة.'
      }
    ],
    
    cta: {
      title: 'هل أنت مستعد لتبسيط عملية شراء الزي الموحد واسعة النطاق؟',
      description: 'فريق المشتريات لدينا جاهز لمساعدتك.',
      buttonText: 'طلب استشارة طلب بالجملة',
      buttonUrl: '/ar/contact?service=bulk-ordering'
    },
    
    secondaryCta: {
      title: 'تعرف على خدمات القياس لدينا',
      buttonText: 'خدمات القياس',
      buttonUrl: '/ar/services/measurement-services'
    }
  };
  
  return <ServicePageLayout locale="ar" serviceData={serviceData}  />;
} 
