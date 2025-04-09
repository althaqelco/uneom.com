import React from 'react';
import { Metadata } from 'next';
import IndustryPageLayout from '@/components/layout/IndustryPageLayout';

// SEO metadata
export const metadata: Metadata = {
  title: 'يونيفورم الأمن للمصانع والمنشآت الصناعية في السعودية | يونيوم',
  description: 'يونيفورم أمني متميز للمنشآت الصناعية والمصانع في المملكة العربية السعودية. ملابس مهنية متينة مصممة لتوفير أقصى درجات الحماية والراحة.',
  keywords: 'يونيفورم أمن المصانع, ملابس الأمن الصناعي, يونيفورم أمني سعودي, معدات الحماية الأمنية, يونيفورم السلامة للمصانع, أمن المنشآت الصناعية',
  openGraph: {
    title: 'يونيفورم الأمن للمصانع والمنشآت الصناعية في السعودية | يونيوم',
    description: 'يونيفورم أمني متميز للمنشآت الصناعية والمصانع في المملكة العربية السعودية. ملابس مهنية متينة مصممة لتوفير أقصى درجات الحماية والراحة.',
    images: ['/images/industries/factory_industry/factory-security-uniform-main.jpg'],
  }
};

export default function FactorySecurityPageAr() {
  const locale = 'ar';
  
  const factorySecurityData = {
    title: "يونيفورم الأمن للمصانع والمنشآت الصناعية",
    subtitle: "حلول أمنية احترافية للبيئات الصناعية",
    heroImage: "/images/industries/factory_industry/factory-security-uniform-main.jpg",
    
    introduction: [
      "في البيئة المتطلبة للمنشآت الصناعية والمصانع، يحتاج أفراد الأمن إلى يونيفورم يجمع بين المتانة والوظائف العملية والمظهر المهني. تقدم يونيوم يونيفورم أمني متميز مصمم خصيصاً لتحديات العمليات الأمنية الصناعية.",
      
      "تتضمن مجموعتنا الشاملة من يونيفورم الأمن الصناعي مواد متطورة وميزات تصميم مدروسة تعزز الأداء مع الحفاظ على المظهر المهيب. من عناصر الرؤية العالية إلى خصائص مقاومة اللهب، تم تصميم كل تفصيل للسلامة والفعالية.",
      
      "مع خبرتنا العميقة في متطلبات القطاع الصناعي السعودي، نقدم حلول يونيفورم أمني مخصصة تلبي معايير السلامة الدولية مع احترام القيم الثقافية المحلية."
    ],
    
    benefits: [
      {
        title: "ميزات سلامة معززة",
        description: "عناصر عالية الرؤية ومواد مقاومة للهب لأقصى درجات الحماية.",
        icon: "/icons/safety.svg",
        gradient: "from-yellow-500 to-amber-600"
      },
      {
        title: "سلطة مهنية",
        description: "مظهر مهيب يؤسس سلطة وموثوقية أفراد الأمن.",
        icon: "/icons/authority.svg",
        gradient: "from-blue-600 to-indigo-700"
      },
      {
        title: "المتانة والراحة",
        description: "مواد متميزة تتحمل الظروف الصناعية مع ضمان الراحة طوال اليوم.",
        icon: "/icons/durability.svg",
        gradient: "from-green-600 to-emerald-700"
      },
      {
        title: "تكيف مع الطقس",
        description: "تصاميم ذكية للمناخ للعمليات الأمنية الداخلية والخارجية.",
        icon: "/icons/weather.svg",
        gradient: "from-cyan-500 to-blue-600"
      },
      {
        title: "التعريف والوصول",
        description: "ميزات متكاملة للشارات وبطاقات الوصول وأجهزة الاتصال.",
        icon: "/icons/identification.svg",
        gradient: "from-purple-600 to-violet-700"
      }
    ],
    
    products: [
      {
        id: "industrial-security-uniform",
        name: "طقم يونيفورم الأمن الصناعي",
        description: "طقم يونيفورم أمني كامل مصمم للبيئات الصناعية، يتميز بعناصر عالية الرؤية وبناء متين.",
        image: "/images/industries/factory_industry/factory-security-uniform-1.jpg",
        href: "/shop/security-uniforms/industrial-security-set",
        features: ["قماش مقاوم للهب", "عناصر عالية الرؤية", "جيوب متعددة الاستخدامات"]
      },
      {
        id: "factory-patrol-uniform",
        name: "يونيفورم دوريات المصنع",
        description: "يونيفورم دوريات متخصص مع ميزات تعزيز الحركة والحماية من الطقس.",
        image: "/images/industries/factory_industry/factory-security-uniform-2.jpg",
        href: "/shop/security-uniforms/factory-patrol",
        features: ["مقاوم للطقس", "حركة معززة", "دمج أجهزة الاتصال"]
      },
      {
        id: "security-supervisor-uniform",
        name: "زي مشرف الأمن",
        description: "طقم يونيفورم مميز لمشرفي الأمن، يجمع بين السلطة والوظائف العملية.",
        image: "/images/industries/factory_industry/factory-security-uniform-3.jpg",
        href: "/shop/security-uniforms/supervisor-set",
        features: ["تصميم احترافي", "مواد متميزة", "شارات المشرف"]
      }
    ],
    
    fabricTechnologies: [
      {
        name: "حماية ديوراتاف™",
        description: "تقنية قماش متقدمة توفر متانة وحماية فائقة في البيئات الصناعية.",
        icon: "/icons/protection.svg",
        animation: "fade-right"
      },
      {
        name: "راحة التحكم بالمناخ",
        description: "تنظيم مبتكر لدرجة الحرارة للراحة المثلى في الظروف المتغيرة.",
        icon: "/icons/temperature.svg",
        animation: "fade-up"
      },
      {
        name: "تقنية سيفتي فلكس",
        description: "ميزات حركة معززة دون المساس بالحماية والمتانة.",
        icon: "/icons/flexibility.svg",
        animation: "fade-left"
      }
    ],
    
    customizationOptions: [
      {
        name: "العلامة التجارية للشركة",
        description: "تطبيق احترافي للشعار ومطابقة الألوان لتتوافق مع هوية الشركة.",
        icon: "/icons/branding.svg",
        gradient: "from-blue-500 to-blue-700"
      },
      {
        name: "تمييز الرتب",
        description: "تسلسل هرمي بصري واضح من خلال عناصر تصميم وشارات مدروسة.",
        icon: "/icons/rank.svg",
        gradient: "from-purple-500 to-purple-700"
      },
      {
        name: "دمج السلامة",
        description: "ميزات سلامة قابلة للتخصيص بناءً على متطلبات المنشأة المحددة.",
        icon: "/icons/safety-custom.svg",
        gradient: "from-green-500 to-green-700"
      }
    ],
    
    testimonials: [
      {
        id: "testimonial-1",
        quote: "لقد حسن يونيفورم الأمن الصناعي من يونيوم بشكل كبير من فعالية فريقنا وصورتنا المهنية. الجودة والاهتمام بميزات السلامة متميزة.",
        author: "أحمد الراشد",
        position: "مدير العمليات الأمنية",
        company: "مجمع صناعي كبير، الدمام",
        image: "/images/testimonials/ahmed.jpg"
      },
      {
        id: "testimonial-2",
        quote: "المتانة والراحة في هذه اليونيفورمات أحدثت فرقاً حقيقياً في أداء فريق الأمن لدينا، خاصة خلال المناوبات الطويلة.",
        author: "فهد الحربي",
        position: "مدير أمن المنشأة",
        company: "مصنع رائد، الرياض",
        image: "/images/testimonials/fahad.jpg"
      }
    ],
    
    relatedProducts: [
      {
        name: "طقم الأمن الصناعي المتميز",
        description: "حل يونيفورم كامل مع ميزات سلامة معززة",
        image: "/images/industries/factory_industry/factory-security-premium-set.jpg",
        href: "/shop/security-uniforms/premium-industrial-set"
      },
      {
        name: "طقم دوريات الأمن لجميع الأحوال الجوية",
        description: "يونيفورم دوريات شامل لجميع الظروف الجوية",
        image: "/images/industries/factory_industry/factory-security-patrol-kit.jpg",
        href: "/shop/security-uniforms/all-weather-patrol"
      },
      {
        name: "يونيفورم القيادة الأمنية",
        description: "زي مهني لموظفي إدارة الأمن",
        image: "/images/industries/factory_industry/factory-security-command.jpg",
        href: "/shop/security-uniforms/command-uniform"
      }
    ],
    
    relatedBlogs: [
      {
        title: "الميزات الأساسية ليونيفورم الأمن الصناعي",
        excerpt: "فهم العناصر الرئيسية التي تجعل يونيفورم الأمن فعالاً في البيئات الصناعية",
        image: "/images/industries/factory_industry/factory-security-features.jpg",
        href: "/blog/industrial-security-uniform-features"
      },
      {
        title: "تعزيز العمليات الأمنية من خلال اليونيفورم المهني",
        excerpt: "كيف يمكن لليونيفورم المناسب تحسين أداء فريق الأمن وسلطته",
        image: "/images/industries/factory_industry/factory-security-operations.jpg",
        href: "/blog/security-uniform-impact"
      },
      {
        title: "ميزات السلامة الحديثة في ملابس الأمن",
        excerpt: "أحدث الابتكارات في تقنية سلامة يونيفورم الأمن",
        image: "/images/industries/factory_industry/factory-security-safety.jpg",
        href: "/blog/security-uniform-safety"
      }
    ],
    
    faq: [
      {
        question: "ما هي شهادات السلامة التي يستوفيها يونيفورم الأمن الخاص بكم؟",
        answer: "يتوافق يونيفورم الأمن الصناعي لدينا مع معايير السلامة الدولية بما في ذلك ISO 11612 لمقاومة اللهب وEN ISO 20471 لمتطلبات الرؤية العالية."
      },
      {
        question: "هل يمكن تخصيص اليونيفورم لأدوار أمنية مختلفة؟",
        answer: "نعم، نقدم خيارات تخصيص شاملة تشمل شارات الرتب، وتحديد الأقسام، والميزات الخاصة بالدور مع الحفاظ على اتساق العلامة التجارية."
      },
      {
        question: "ما هي المتانة النموذجية ليونيفورم الأمن الخاص بكم؟",
        answer: "تم تصميم يونيفورم الأمن الصناعي لدينا للحفاظ على مظهره المهني وخصائص الحماية لمدة 12-18 شهراً على الأقل من الاستخدام المنتظم مع العناية المناسبة."
      },
      {
        question: "هل تقدمون يونيفورم لبيئات صناعية محددة؟",
        answer: "نعم، نقوم بتخصيص يونيفورم الأمن بناءً على متطلبات الصناعة المحددة، بما في ذلك ميزات حماية إضافية للمصانع الكيميائية، ومنشآت النفط والغاز، أو وحدات التصنيع."
      }
    ],
    
    cta: {
      title: "ارتقِ بمعايير الأمن الصناعي",
      description: "حول فعالية فريق الأمن لديك مع يونيفورم مهني مصمم للبيئات الصناعية.",
      buttonText: "اطلب استشارة",
      buttonUrl: "/contact?industry=factory-security",
      secondaryButton: {
        text: "عرض الكتالوج",
        url: "/shop/security-uniforms"
      }
    }
  };

  return (
    <IndustryPageLayout 
      locale={locale} 
      industryData={factorySecurityData} 
      skipMainLayout={true}
    />
  );
} 