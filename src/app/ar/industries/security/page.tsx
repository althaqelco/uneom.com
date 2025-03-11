'use client';

import React from 'react';
import IndustryPageLayout from '@/components/layout/IndustryPageLayout';

export default function SecurityPageArabic() {
  // Set locale to Arabic
  const locale = 'ar';
  
  // All content for this industry page in Arabic
  const securityIndustryData = {
    title: "أزياء الأمن المهنية في المملكة العربية السعودية",
    subtitle: "ملابس عمل ذات سلطة ووظيفة مصممة لأفراد ومنشآت الأمن السعودية",
    heroImage: "/images/industries/security-hero.jpg",
    
    introduction: [
      "في قطاع الأمن المتوسع في المملكة العربية السعودية، يعد المظهر المهني جانبًا حاسمًا من السلطة والموثوقية والفعالية التشغيلية. توفر يونيوم أزياء أمن فاخرة مصممة خصيصًا لبيئات الأمن السعودية، مع الجمع بين الحضور القيادي والوظائف العملية والتصميم المناسب للمناخ.",
      
      "تشمل مجموعتنا الشاملة للأمن أزياء الحراس، وملابس الحماية التنفيذية، وملابس عمل أمن الفعاليات، والمعدات التكتيكية المتخصصة المصنوعة من أقمشة متينة تتحمل الاستخدام اليومي مع الحفاظ على مظهر مهني. تم تصميم كل قطعة ملابس لتوفير الراحة أثناء المناوبات الطويلة مع نقل السلطة والاحترافية المطلوبة في عمليات الأمن.",
      
      "مع فهم المتطلبات الفريدة لمزودي الأمن السعودي، نقدم خيارات تخصيص تحترم الاعتبارات الثقافية مع الحفاظ على معايير الأمن الدولية. من المرافق الحكومية والمقرات الرئيسية للشركات إلى الفعاليات الخاصة والمجمعات السكنية، تم تصميم أزياءنا لتعزيز فعالية أفراد الأمن وثقة الجمهور في عمليات الأمن الخاصة بك."
    ],
    
    benefits: [
      {
        title: "إظهار السلطة",
        description: "تصاميم مهنية تنقل سلطة الأمن على الفور وتؤسس الاحترام في مختلف السيناريوهات والبيئات.",
        icon: "/icons/shield-check.svg"
      },
      {
        title: "الوظائف التكتيكية",
        description: "ميزات متخصصة تشمل جيوب معززة، ومرفقات للمعدات، ووضع استراتيجي للخياطة للحركات التشغيلية.",
        icon: "/icons/lightning-bolt.svg"
      },
      {
        title: "التكيف المناخي",
        description: "أقمشة تتنفس وتمتص الرطوبة مصممة للراحة أثناء عمليات الأمن في مناخ المملكة العربية السعودية ذو درجات الحرارة المرتفعة.",
        icon: "/icons/sun.svg"
      },
      {
        title: "هوية المؤسسة",
        description: "أزياء أمن متناسقة ومتوافقة مع العلامة التجارية تعزز هوية مؤسستك ومعاييرها المهنية.",
        icon: "/icons/identification.svg"
      }
    ],
    
    products: [
      {
        id: "formal-security",
        name: "أزياء الأمن الرسمية",
        description: "ملابس أمن من الدرجة المهنية للمرافق التجارية والمباني الحكومية والمواقع رفيعة المستوى التي تتطلب حضوراً ذا سلطة.",
        image: "/images/ar/shop/formal-security.jpg",
        href: "/ar/shop/formal-security"
      },
      {
        id: "tactical-security",
        name: "ملابس الأمن التكتيكية",
        description: "أزياء ذات متانة معززة مع جيوب متخصصة وتقوية وميزات تكتيكية لأفراد الأمن النشطين.",
        image: "/images/ar/shop/tactical-security.jpg",
        href: "/ar/shop/tactical-security"
      },
      {
        id: "event-security",
        name: "ملابس أمن الفعاليات",
        description: "أزياء عالية الرؤية، يسهل التعرف عليها لطاقم الفعاليات، وإدارة الحشود، وعمليات أمن الأماكن العامة.",
        image: "/images/ar/shop/event-security.jpg",
        href: "/ar/shop/event-security"
      },
      {
        id: "executive-protection",
        name: "ملابس الحماية التنفيذية",
        description: "ملابس متحفظة ومهنية لضباط الحماية الشخصية وتفاصيل الأمن التنفيذي مع ميزات تكتيكية مخفية.",
        image: "/images/ar/shop/executive-protection.jpg",
        href: "/ar/shop/executive-protection"
      }
    ],
    
    fabricTechnologies: [
      {
        name: "قماش ديوراجارد™",
        description: "نسيج منسوج عالي الكثافة مع مقاومة معززة للتمزق والتآكل مصمم خصيصًا لعمليات الأمن.",
        icon: "/icons/shield-check.svg"
      },
      {
        name: "تقنية كلايما كول™",
        description: "تقنية متقدمة لامتصاص الرطوبة تزيد من الراحة أثناء مناوبات الأمن الممتدة في البيئات ذات درجات الحرارة المرتفعة.",
        icon: "/icons/thermometer.svg"
      },
      {
        name: "بناء فليكس تاك™",
        description: "لوحات مرنة استراتيجية ومفاصل مفصلية تعزز الحركة أثناء تدخلات الأمن والواجبات النشطة.",
        icon: "/icons/refresh.svg"
      },
      {
        name: "عناصر نايت فيز™",
        description: "عناصر عاكسة وفسفورية تعزز الرؤية أثناء عمليات الأمن الليلية دون المساس بالمظهر المهني.",
        icon: "/icons/eye.svg"
      }
    ],
    
    customizationOptions: [
      {
        name: "مؤشرات الرتبة والمنصب",
        description: "أكتاف قابلة للتخصيص وشارات وشعارات تحدد بوضوح رتبة ومستوى سلطة أفراد الأمن.",
        icon: "/icons/badge-check.svg"
      },
      {
        name: "العلامة التجارية للأمن المؤسسي",
        description: "شعارات وشارات وعناصر هوية مؤسسية مطبقة بشكل احترافي على جميع مكونات زي الأمن.",
        icon: "/icons/template.svg"
      },
      {
        name: "التخصيص التكتيكي",
        description: "تكوينات جيوب معدلة، ومرفقات للمعدات، وعناصر تصميم خاصة بالوظيفة بناءً على المتطلبات التشغيلية.",
        icon: "/icons/adjustments.svg"
      },
      {
        name: "التكيفات الثقافية",
        description: "تصميمات زي الأمن التي تحترم المتطلبات الثقافية السعودية مع الحفاظ على معايير الأمن المهنية.",
        icon: "/icons/globe.svg"
      }
    ],
    
    testimonials: [
      {
        id: "riyadh-security",
        quote: "لقد أحدثت يونيوم ثورة في الصورة المهنية لقسم الأمن لدينا مع توفير أزياء تعمل بالفعل في بيئتنا المتطلبة. يفيد حراسنا بتحسن كبير في الراحة خلال المناوبات التي تستمر 12 ساعة، وقد عزز المظهر السلطوي بشكل ملحوظ امتثال الزوار لمرافقنا.",
        author: "عبدالله القحطاني",
        position: "مدير عمليات الأمن",
        company: "خدمات الأمن الملكية",
        image: "/images/testimonials/abdullah-al-qahtani.jpg"
      }
    ],
    
    cta: {
      title: "ارتقِ بعمليات الأمن الخاصة بك",
      description: "تواصل مع متخصصي أزياء الأمن لدينا لتطوير برنامج شامل لملابس الأمن مصمم خصيصًا لمتطلباتك التشغيلية.",
      buttonText: "طلب استشارة أمنية",
      buttonUrl: "/contact?industry=security"
    }
  };
  
  return (
    <IndustryPageLayout 
      locale={locale}
      industryData={securityIndustryData}
      skipMainLayout={true}
    />
  );
} 
