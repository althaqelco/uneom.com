'use client';

import React from 'react';
import IndustryPageLayout from '@/components/layout/IndustryPageLayout';

export default function CorporatePageArabic() {
  // Set locale to Arabic
  const locale = 'ar';
  
  // All content for this industry page in Arabic
  const corporateIndustryData = {
    title: "أزياء الشركات المهنية في المملكة العربية السعودية",
    subtitle: "ملابس عمل مخصصة للبيئات المؤسسية توازن بين الاحترافية وثقافة العمل السعودية",
    heroImage: "/images/banner-placeholder.jpg",
    
    introduction: [
      "في المشهد التجاري المتطور في المملكة العربية السعودية، تلعب أزياء الشركات دورًا حاسمًا في تأسيس المصداقية المهنية وتعزيز هوية العلامة التجارية. تقدم يونيوم حلول أزياء مؤسسية فاخرة تساعد المنظمات على الحفاظ على صورة أنيقة ومتناسقة مع احترام القيم الثقافية السعودية.",
      
      "تشمل مجموعاتنا المؤسسية البدلات المصممة، والقمصان الرسمية، والبلوزات، والفساتين الرسمية، وإكسسوارات مكان العمل المصممة لإظهار الاحترافية مع ضمان الراحة طوال يوم العمل. يتم تصنيع كل قطعة من أقمشة عالية الجودة تم اختيارها خصيصًا لمناخ المملكة العربية السعودية وبيئات الشركات.",
      
      "نحن ندرك أن الصناعات المختلفة والتسلسلات الهرمية المؤسسية لها متطلبات زي فريدة. من البنوك والتمويل إلى الاتصالات والمقرات المؤسسية، يضمن نهجنا المخصص أن مظهر موظفيك يتماشى تمامًا مع تموضع علامتك التجارية وتوقعات الصناعة."
    ],
    
    benefits: [
      {
        title: "التميز المهني",
        description: "أزياء مؤسسية فاخرة ترتقي بصورة شركتك وتميز علامتك التجارية في السوق السعودي.",
        icon: "/icons/briefcase.svg"
      },
      {
        title: "التكيف الثقافي",
        description: "خيارات أزياء مؤسسية تحترم التقاليد السعودية مع الحفاظ على معايير الأعمال المعاصرة.",
        icon: "/icons/globe.svg"
      },
      {
        title: "راحة مكان العمل",
        description: "أقمشة مناسبة للمناخ وتصاميم مريحة للراحة طوال اليوم في بيئات المكاتب.",
        icon: "/icons/thumb-up.svg"
      },
      {
        title: "اتساق العلامة التجارية",
        description: "برامج موحدة تضمن العرض المتسق عبر جميع الأقسام والمواقع.",
        icon: "/icons/template.svg"
      }
    ],
    
    products: [
      {
        id: "executive-attire",
        name: "مجموعة ملابس المديرين التنفيذيين",
        description: "بدلات فاخرة، وسترات، وملابس رسمية مصممة لمناصب القيادة والإدارة مع تفصيل وأقمشة متفوقة.",
        image: "/images/default-placeholder.jpg",
        href: "/ar/shop/executive-attire"
      },
      {
        id: "corporate-uniforms",
        name: "أزياء موظفي الشركات",
        description: "مجموعات أزياء مهنية للموظفين الإداريين، وممثلي خدمة العملاء، وموظفي المكاتب.",
        image: "/images/product-placeholder.jpg",
        href: "/ar/shop/corporate-uniforms"
      },
      {
        id: "islamic-business-wear",
        name: "ملابس العمل الإسلامية",
        description: "أزياء مؤسسية أنيقة مصممة مع مراعاة قواعد اللباس الإسلامي، بما في ذلك العباءات المهنية والحجاب للنساء.",
        image: "/images/default-placeholder.jpg",
        href: "/ar/shop/islamic-business-wear"
      },
      {
        id: "corporate-accessories",
        name: "إكسسوارات الشركات",
        description: "إكسسوارات مهنية تشمل ربطات العنق، والأوشحة، والدبابيس، والشارات التي تكمل مظهر الزي المؤسسي مع عناصر العلامة التجارية.",
        image: "/images/default-placeholder.jpg",
        href: "/ar/shop/corporate-accessories"
      }
    ],
    
    fabricTechnologies: [
      {
        name: "أقمشة كلايمت سمارت™",
        description: "تقنية أقمشة متقدمة تنظم درجة الحرارة لبيئات المكاتب الداخلية مع الحفاظ على مظهر رسمي أنيق.",
        icon: "/icons/thermometer.svg"
      },
      {
        name: "تقنية رينكل فري™",
        description: "معالجة مبتكرة للأقمشة تحافظ على مظهر جديد ومكوي طوال يوم العمل، حتى بعد الاجتماعات الطويلة.",
        icon: "/icons/sparkles.svg"
      },
      {
        name: "تصميم كومفورت ستريتش™",
        description: "مرونة استراتيجية في التفصيل تسمح بحركة مريحة مع الحفاظ على المظهر المنظم للملابس الرسمية.",
        icon: "/icons/refresh.svg"
      },
      {
        name: "بناء دورا سوت™",
        description: "غرز معززة ومواد متينة تطيل عمر الأزياء المؤسسية رغم الارتداء اليومي.",
        icon: "/icons/shield-check.svg"
      }
    ],
    
    customizationOptions: [
      {
        name: "دمج هوية الشركة",
        description: "دمج سلس لشعار شركتك وألوانها وعناصر العلامة التجارية في تصميمات الزي الموحد.",
        icon: "/icons/color-swatch.svg"
      },
      {
        name: "التسلسل الهرمي التنظيمي",
        description: "اختلافات تصميم دقيقة تميز بين مستويات الإدارة المختلفة ومناصب الموظفين.",
        icon: "/icons/user-group.svg"
      },
      {
        name: "تصاميم خاصة بالأقسام",
        description: "عناصر زي مخصصة تحدد الأقسام المختلفة مع الحفاظ على التماسك العام للعلامة التجارية.",
        icon: "/icons/template.svg"
      },
      {
        name: "التكييف الثقافي",
        description: "تصاميم قابلة للتكيف تحترم التفضيلات الثقافية والدينية الفردية ضمن إرشادات الشركة.",
        icon: "/icons/globe.svg"
      }
    ],
    
    testimonials: [
      {
        id: "saudi-financial",
        quote: "قدمت يونيوم حلاً كاملاً للزي المؤسسي يوازن بشكل مثالي بين موقع علامتنا التجارية الحديث واحترام تقاليد الأعمال السعودية. يذكر موظفونا راحة استثنائية، والجودة واضحة في كيفية محافظة الملابس على مظهرها شهرًا بعد شهر.",
        author: "عبدالله آل سعود",
        position: "رئيس الشؤون المؤسسية",
        company: "المجموعة المالية السعودية",
        image: "/images/avatar-placeholder.jpg"
      }
    ],
    
    cta: {
      title: "قم بتحويل صورة شركتك",
      description: "اتصل بمتخصصي الزي المؤسسي لدينا لتطوير برنامج زي موحد مخصص يرفع من مستوى علامتك التجارية ويدعم أهدافك التنظيمية.",
      buttonText: "طلب استشارة للشركات",
      buttonUrl: "/contact?industry=corporate"
    }
  };
  
  return (
    <IndustryPageLayout 
      locale={locale}
      industryData={corporateIndustryData}
      skipMainLayout={true}
    />
  );
} 
