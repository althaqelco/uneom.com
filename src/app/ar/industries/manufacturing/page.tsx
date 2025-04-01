'use client';

import React from 'react';
import IndustryPageLayout from '@/components/layout/IndustryPageLayout';

export default function ManufacturingPageArabic() {
  // Set locale to Arabic
  const locale = 'ar';
  
  // All content for this industry page in Arabic
  const manufacturingIndustryData = {
    title: "أزياء الصناعة والتصنيع في المملكة العربية السعودية",
    subtitle: "ملابس العمل المتوافقة مع معايير السلامة مصممة للبيئات الصناعية مع مراعاة مناخ المملكة العربية السعودية",
    heroImage: "/images/banner-placeholder.jpg",
    
    introduction: [
      "في قطاعات التصنيع والصناعة المتنامية في المملكة العربية السعودية، تعد ملابس العمل المتخصصة ضرورية لضمان السلامة والامتثال والإنتاجية. توفر يونيوم أزياء صناعية عالية الجودة مصممة خصيصًا للبيئات التصنيع السعودية، مع الجمع بين معايير السلامة والراحة في ظروف درجات الحرارة المرتفعة.",
      
      "تشمل مجموعتنا الصناعية الشاملة بدلات العمل، وملابس العمل عالية الرؤية، والملابس المقاومة للهب، ومعدات الحماية المتخصصة المصنوعة من أقمشة متينة تتحمل الظروف الصناعية القاسية مع الحفاظ على الراحة أثناء المناوبات الطويلة. تم تصميم كل قطعة ملابس لتوفير أقصى قدر من الحماية مع تعزيز الحركة والإنتاجية في البيئات الصناعية المتطلبة.",
      
      "مع فهم المتطلبات الفريدة للمنشآت الصناعية السعودية، نقدم خيارات تخصيص تحترم الاعتبارات الثقافية مع الحفاظ على معايير السلامة الدولية. من مصانع البتروكيماويات ومواقع البناء إلى منشآت تصنيع الأغذية ومصانع السيارات، تم تصميم أزياءنا الموحدة لتعزيز سلامة العمال والكفاءة التشغيلية في منشأتك الصناعية."
    ],
    
    benefits: [
      {
        title: "مقاومة الحرارة",
        description: "أقمشة متكيفة مع المناخ مصممة لتوفير الراحة والحماية في البيئات الصناعية ذات درجات الحرارة المرتفعة في المملكة العربية السعودية.",
        icon: "/icons/fire.svg"
      },
      {
        title: "الامتثال لمعايير السلامة",
        description: "ملابس عمل تلبي المعايير السعودية والدولية للسلامة، بما في ذلك شهادات OSHA وISO.",
        icon: "/icons/shield-check.svg"
      },
      {
        title: "متانة معززة",
        description: "أقمشة ذات جودة صناعية وتصميم مقوى يتحمل الظروف القاسية والغسيل الصناعي المتكرر.",
        icon: "/icons/adjustments.svg"
      },
      {
        title: "قابلية التكيف الثقافي",
        description: "تصميمات ملابس عمل معدلة تحترم المتطلبات الثقافية السعودية مع الحفاظ على وظائف السلامة.",
        icon: "/icons/globe.svg"
      }
    ],
    
    products: [
      {
        id: "industrial-coveralls",
        name: "أفرهولات صناعية فاخرة",
        description: "حماية كاملة للجسم ومتينة مصممة لمختلف البيئات الصناعية مع خيارات مقاومة للحرارة والمقاومة للهب.",
        image: "/images/banner-placeholder.jpg",
        href: "/ar/shop/industrial-coveralls"
      },
      {
        id: "hi-vis-workwear",
        name: "ملابس عمل عالية الرؤية",
        description: "ملابس عالية الرؤية متوافقة مع معايير ANSI/ISEA مع عناصر عاكسة للبيئات الخطرة والعمل الليلي.",
        image: "/images/default-placeholder.jpg",
        href: "/ar/shop/hi-vis-workwear"
      },
      {
        id: "flame-resistant-clothing",
        name: "ملابس مقاومة للهب",
        description: "ملابس FR متخصصة لصناعات النفط والغاز والكيماويات والكهرباء مع تقنيات حماية متقدمة.",
        image: "/images/default-placeholder.jpg",
        href: "/ar/shop/flame-resistant-clothing"
      },
      {
        id: "food-processing-uniforms",
        name: "أزياء تصنيع الأغذية",
        description: "ملابس عمل صحية ومضادة للميكروبات لتصنيع الأغذية مع الامتثال لنظام HACCP وميزات منع التلوث.",
        image: "/images/product-placeholder.jpg",
        href: "/ar/shop/food-processing-uniforms"
      }
    ],
    
    fabricTechnologies: [
      {
        name: "قماش ثيرموريجوليت™",
        description: "تقنية متقدمة لتنظيم درجة الحرارة تساعد في الحفاظ على راحة الجسم في البيئات الصناعية ذات الحرارة العالية.",
        icon: "/icons/thermometer.svg"
      },
      {
        name: "بناء ديوراتاف™",
        description: "خياطة معززة وأقمشة مقاومة للتآكل تطيل عمر الملابس في الظروف الصناعية المتطلبة.",
        icon: "/icons/shield-check.svg"
      },
      {
        name: "تصميم فليكس وورك™",
        description: "تصميم ملابس مريح مع ألواح مرنة استراتيجية تعزز الحركة أثناء المهام الصناعية.",
        icon: "/icons/refresh.svg"
      },
      {
        name: "تقنية كيم شيلد™",
        description: "معالجات نسيجية مقاومة للمواد الكيميائية توفر الحماية من المواد الكيميائية الصناعية الشائعة والزيوت والمذيبات.",
        icon: "/icons/beaker.svg"
      }
    ],
    
    customizationOptions: [
      {
        name: "ترميز الألوان حسب القسم",
        description: "مخططات ألوان منهجية تحدد بصريًا الأقسام والأدوار المختلفة داخل منشأتك الصناعية.",
        icon: "/icons/color-swatch.svg"
      },
      {
        name: "العلامة التجارية للشركة",
        description: "دمج شعار شركتك وعناصر العلامة التجارية في جميع أنواع ملابس العمل مع أساليب تطبيق متينة.",
        icon: "/icons/template.svg"
      },
      {
        name: "الجيوب والميزات المتخصصة",
        description: "تكوينات جيوب مخصصة وحاملات أدوات مصممة خصيصًا لوظائف العمل المحددة واحتياجات المعدات.",
        icon: "/icons/puzzle.svg"
      },
      {
        name: "تحديد الاسم والمنصب",
        description: "علامات أسماء مختومة بالحرارة أو مطرزة، ومؤشرات المناصب، وشارات الشهادات التي تتحمل الغسيل الصناعي.",
        icon: "/icons/identification.svg"
      }
    ],
    
    testimonials: [
      {
        id: "jubail-industrial",
        quote: "قامت يونيوم بتحويل برنامج السلامة لدينا بأزياء صناعية لا تلبي المعايير الدولية فحسب، بل هي أيضًا مريحة في بيئتنا ذات درجات الحرارة المرتفعة. أثبتت الأفرهولات المقاومة للهب متانة استثنائية، ويذكر عمالنا تحسنًا كبيرًا في الراحة خلال المناوبات الطويلة في ظروف صعبة.",
        author: "م. محمد العتيبي",
        position: "مدير السلامة",
        company: "التطوير الصناعي بالجبيل",
        image: "/images/avatar-placeholder.jpg"
      }
    ],
    
    cta: {
      title: "تعزيز السلامة والكفاءة",
      description: "تواصل مع متخصصي الأزياء الصناعية لدينا لتطوير برنامج شامل لملابس العمل مصمم خصيصًا لمتطلبات منشأتك الفريدة.",
      buttonText: "طلب استشارة صناعية",
      buttonUrl: "/contact?industry=manufacturing"
    }
  };
  
  return (
    <IndustryPageLayout 
      locale={locale}
      industryData={manufacturingIndustryData}
      
    />
  );
} 
