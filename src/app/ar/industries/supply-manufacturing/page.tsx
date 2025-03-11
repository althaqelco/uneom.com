'use client';

import React from 'react';
import IndustryPageLayout from '@/components/layout/IndustryPageLayout';

export default function SupplyManufacturingPageArabic() {
  // Use Arabic locale
  const locale = 'ar';
  
  // All content for this industry page in Arabic
  const supplyManufacturingData = {
    title: "حلول توريد وتصنيع الأزياء الموحدة في المملكة العربية السعودية",
    subtitle: "خدمات متكاملة لتصنيع وتوريد الزي الموحد للمؤسسات والشركات في جميع أنحاء المملكة",
    heroImage: "/images/industries/supply-manufacturing-hero.jpg",
    
    introduction: [
      "تعد يونيوم شركة رائدة في مجال تصنيع وتوريد الأزياء الموحدة في المملكة العربية السعودية، حيث نقدم حلولاً شاملة من الإنتاج المحلي والتوريد العالمي إلى التسليم في الوقت المحدد للمؤسسات من جميع الأحجام والقطاعات.",
      
      "تمكننا قدرات التصنيع المحلية المتطورة من تقديم مزايا فريدة لعملائنا في السعودية، بما في ذلك أوقات تسليم أسرع، وأحجام طلبات أكثر مرونة، وتحكم أفضل في الجودة، وقدرة على الاستجابة للمتطلبات المحددة. نعمل بموجب معايير ISO الصارمة لضمان جودة متميزة في كل مرحلة من مراحل عملية التصنيع.",
      
      "تكمل شبكة التوريد العالمية الخاصة بنا قدرات التصنيع المحلية لدينا، مما يتيح لنا الوصول إلى مجموعة واسعة من المواد والتقنيات المتخصصة. سواء كنت تمثل شركة خاصة أو مؤسسة حكومية أو سلسلة متاجر تجزئة متعددة الفروع، فإن حلولنا للتوريد والتصنيع مصممة لتلبية متطلباتك المحددة من حيث الكمية والجودة والميزانية والتسليم."
    ],
    
    benefits: [
      {
        title: "قدرات التصنيع المحلي",
        description: "منشآت إنتاج متطورة في المملكة العربية السعودية توفر أوقات تسليم أسرع وتحكمًا أفضل في الجودة وتقليل تكاليف الشحن.",
        icon: "/icons/local-manufacturing.svg"
      },
      {
        title: "شبكة توريد عالمية",
        description: "علاقات مع موردين عالميين موثوقين تضمن الوصول إلى مجموعة واسعة من المواد ذات الجودة العالية والتقنيات المتخصصة.",
        icon: "/icons/global-sourcing.svg"
      },
      {
        title: "أنظمة ضمان الجودة",
        description: "عمليات فحص صارمة متعددة المراحل تضمن أن كل قطعة من الزي الموحد تلبي المعايير العالية من حيث المواد والتصنيع والمتانة.",
        icon: "/icons/quality-assurance.svg"
      },
      {
        title: "قدرة إنتاج قابلة للتوسع",
        description: "مرافق تصنيع واسعة النطاق قادرة على التعامل مع أحجام طلبات صغيرة أو كبيرة بنفس مستوى الدقة والاهتمام بالتفاصيل.",
        icon: "/icons/scalable-production.svg"
      },
      {
        title: "شفافية سلسلة التوريد",
        description: "تتبع كامل لسلسلة التوريد من مصدر المواد إلى التسليم النهائي، مما يوفر الشفافية والامتثال لمعايير المسؤولية الاجتماعية.",
        icon: "/icons/supply-chain.svg"
      }
    ],
    
    products: [
      {
        id: "uniform-manufacturing",
        name: "خدمات تصنيع الزي الموحد",
        description: "تصنيع الأزياء الموحدة بالكامل من مرحلة التصميم إلى الإنتاج النهائي باستخدام مرافق الإنتاج المحلية المتطورة.",
        image: "/images/products/uniform-manufacturing.jpg",
        href: "/ar/services/manufacturing"
      },
      {
        id: "riyadh-uniform-supply",
        name: "توريد الزي الموحد في الرياض",
        description: "خدمات توريد الزي الموحد المخصصة للشركات والمؤسسات في منطقة الرياض مع خيارات تسليم سريعة.",
        image: "/images/products/riyadh-uniform-supply.jpg",
        href: "/ar/services/manufacturing/riyadh"
      },
      {
        id: "jeddah-uniform-supply",
        name: "توريد الزي الموحد في جدة",
        description: "حلول توريد الزي الموحد الشاملة للشركات في المنطقة الغربية مع خدمات دعم مخصصة.",
        image: "/images/products/jeddah-uniform-supply.jpg",
        href: "/ar/services/manufacturing/jeddah"
      },
      {
        id: "uniform-wholesale",
        name: "تصنيع الزي الموحد بالجملة",
        description: "خدمات تصنيع وتفصيل بالجملة للشركات التي تحتاج إلى كميات كبيرة من الأزياء الموحدة عالية الجودة.",
        image: "/images/products/uniform-wholesale.jpg",
        href: "/ar/services/manufacturing/wholesale"
      },
      {
        id: "government-uniform-supply",
        name: "توريد الزي الموحد للجهات الحكومية",
        description: "خدمات متخصصة لتوريد الأزياء الموحدة للمؤسسات الحكومية مع الامتثال الكامل لمتطلبات المناقصات والمواصفات.",
        image: "/images/products/government-uniform-supply.jpg",
        href: "/ar/services/manufacturing/government"
      },
      {
        id: "hospital-uniform-production",
        name: "إنتاج الزي الموحد للمستشفيات",
        description: "تصنيع ملابس طبية وزي موحد للمستشفيات ومرافق الرعاية الصحية بأعلى معايير النظافة والجودة.",
        image: "/images/products/hospital-uniform-production.jpg",
        href: "/ar/services/manufacturing/healthcare"
      }
    ],
    
    fabricTechnologies: [
      {
        name: "إنتاج الأقمشة المحلية",
        description: "منشآت إنتاج أقمشة متطورة تصنع أقمشة عالية الجودة مصممة خصيصًا للظروف المناخية في المملكة العربية السعودية.",
        icon: "/icons/local-fabric.svg"
      },
      {
        name: "ضبط جودة الاستيراد",
        description: "عمليات تدقيق وفحص صارمة للمواد المستوردة لضمان أن جميع الأقمشة والمكونات تلبي معاييرنا العالية.",
        icon: "/icons/import-quality.svg"
      },
      {
        name: "معدات تصنيع متقدمة",
        description: "آلات قص ليزر وخياطة آلية وتطريز رقمي متطورة لضمان الدقة والاتساق في جميع منتجاتنا.",
        icon: "/icons/advanced-equipment.svg"
      },
      {
        name: "ممارسات إنتاج مستدامة",
        description: "عمليات تصنيع مصممة لتقليل النفايات وتوفير الطاقة واستخدام مواد صديقة للبيئة حيثما أمكن ذلك.",
        icon: "/icons/sustainable-production.svg"
      }
    ],
    
    customizationOptions: [
      {
        name: "مرونة حجم الإنتاج",
        description: "القدرة على إنتاج طلبات بمختلف الأحجام، من كميات صغيرة للشركات الناشئة إلى إنتاج واسع النطاق للمؤسسات الكبيرة.",
        icon: "/icons/volume-flexibility.svg"
      },
      {
        name: "خيارات اختيار المواد",
        description: "مجموعة واسعة من خيارات المواد لتلبية متطلبات مختلفة من حيث المناخ، والوظيفة، والمتانة، والميزانية.",
        icon: "/icons/material-selection.svg"
      },
      {
        name: "تخصيص برنامج التسليم",
        description: "جداول تسليم مخصصة تناسب احتياجات عملك، سواء كانت شحنة واحدة كبيرة أو تسليمات منتظمة أصغر حجمًا.",
        icon: "/icons/delivery-program.svg"
      },
      {
        name: "خيارات مستويات الجودة",
        description: "مستويات متعددة من الزي الموحد لتناسب مختلف الميزانيات واحتياجات الاستخدام، مع الحفاظ على معايير الجودة الأساسية.",
        icon: "/icons/quality-tiers.svg"
      }
    ],
    
    testimonials: [
      {
        id: "testimonial-1",
        quote: "اخترنا يونيوم لتزويد فريقنا البالغ عدده 500 موظف بالزي الموحد لجميع الفروع البالغ عددها 25 فرعًا. كانت جودة المنتج متسقة، وعملية التوريد سلسة، والتسليم في الوقت المحدد. قدرتهم على التعامل مع طلبنا الكبير مع الاهتمام الشخصي كانت مثيرة للإعجاب.",
        author: "فهد العتيبي",
        position: "مدير المشتريات",
        company: "سلسلة مطاعم الذواق"
      },
      {
        id: "testimonial-2",
        quote: "كجهة حكومية تخضع لضوابط صارمة في المشتريات، وجدنا أن نهج يونيوم الشفاف والمنظم في تصنيع وتوريد الزي الموحد يلبي جميع متطلباتنا. استوفت جميع المواصفات الفنية ووثائق الامتثال توقعاتنا، مما سهل عملية المصادقة لدينا.",
        author: "د. سارة الحربي",
        position: "رئيسة قسم المشتريات",
        company: "وزارة الصحة"
      }
    ],
    
    faq: [
      {
        question: "ما هي قدرة التصنيع القصوى لديكم للأزياء الموحدة؟",
        answer: "تمتلك مرافق التصنيع لدينا قدرة إنتاجية تصل إلى 10,000 قطعة زي موحد أسبوعيًا، مما يسمح لنا بتلبية احتياجات المؤسسات الكبيرة والمشاريع الواسعة النطاق. كما نقدم حلول إنتاج مرنة للطلبات الأصغر دون المساس بالجودة."
      },
      {
        question: "من أين تحصلون على موادكم ومكوناتكم؟",
        answer: "نحن نجمع بين المصادر المحلية والعالمية للمواد. نستخدم الأقمشة المنتجة محليًا حيثما أمكن، ونستورد المواد المتخصصة من موردين معتمدين في آسيا وأوروبا، مع ضمان أن جميع المواد تخضع لاختبارات جودة صارمة قبل استخدامها في الإنتاج."
      },
      {
        question: "كيف تضمنون جودة الأزياء الموحدة المصنعة؟",
        answer: "نطبق نظام ضمان جودة صارم يتضمن اختبارات المواد الأولية، وفحص الجودة أثناء الإنتاج، وفحص نهائي شامل لكل قطعة. تم اعتماد منشآت التصنيع لدينا وفقًا لمعايير ISO 9001، ونستخدم أحدث معدات الاختبار لتقييم المتانة وثبات اللون ومقاومة التآكل."
      },
      {
        question: "هل يمكنكم تلبية متطلبات المناقصات الحكومية لتوريد الزي الموحد؟",
        answer: "نعم، لدينا خبرة واسعة في تلبية متطلبات المناقصات الحكومية السعودية. فريقنا المتخصص على دراية تامة بإجراءات المناقصات الحكومية، ويمكننا تقديم جميع الوثائق والشهادات المطلوبة، والامتثال للمواصفات الفنية المحددة، والالتزام بجداول التسليم الصارمة المطلوبة في المشاريع الحكومية."
      }
    ],
    
    cta: {
      title: "حلول توريد وتصنيع الأزياء الموحدة المخصصة لاحتياجاتك",
      description: "تواصل معنا اليوم لمناقشة متطلبات تصنيع وتوريد الزي الموحد الخاصة بك واكتشف كيف يمكن لخبرتنا المحلية وشبكتنا العالمية أن تقدم حلاً متكاملاً لمؤسستك.",
      buttonText: "استفسر عن خدمات التصنيع",
      buttonUrl: "/ar/contact?service=manufacturing-supply"
    }
  };

  return <IndustryPageLayout locale={locale} industryData={supplyManufacturingData} skipMainLayout={true} />;
} 