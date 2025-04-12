'use client';

import React from 'react';
import IndustryPageLayout from '@/components/layout/IndustryPageLayout';
import { Metadata } from 'next';

export default function SupplyManufacturingPageArabic() {
  // Use Arabic locale
  const locale = 'ar';
  
  // All content for this industry page in Arabic with enhanced SEO and design elements
  const supplyManufacturingData = {
    title: "حلول تصنيع وتوريد الزي الموحد المتميزة في المملكة العربية السعودية",
    subtitle: "خدمات متكاملة من التصميم والإنتاج إلى التوريد وإدارة البرامج بمعايير تصنيع محلية عالية الجودة",
    heroImage: "/images/industries/supply-manufacturing/supply-manufacturing-uniform-1.jpg",
    seoKeywords: "تصنيع الزي الموحد السعودية, إنتاج اليونيفورم الرياض, سلسلة توريد الملابس الموحدة, تصنيع الزي الموحد المخصص, موردي اليونيفورم السعودي, إنتاج الزي الموحد الصناعي, تصنيع ملابس العمل السعودية, حلول توريد اليونيفورم",
    
    introduction: [
      "يونيوم هي الشريك الرائد في تصنيع وتوريد الأزياء الموحدة في المملكة العربية السعودية، حيث نقدم حلولاً شاملة متكاملة من التصميم والإنتاج إلى التسليم وإدارة البرامج. تجمع منشآت التصنيع المتطورة لدينا في الرياض وجدة والدمام مع شبكة التوريد العالمية لتوفير قدرات لا مثيل لها في إنتاج الزي الموحد.",
      
      "تتيح لنا بنيتنا التحتية الشاملة للتصنيع والتوريد توفير مرونة استثنائية في الجودة والتكلفة ومواعيد التسليم. سواء كنت بحاجة إلى أزياء موحدة منتجة محلياً تدعم أهداف التوطين في رؤية السعودية 2030 أو ملابس عمل متميزة مستوردة من شركائنا الدوليين الموثوقين، فإن حلولنا مصممة خصيصاً لتلبية متطلباتك المحددة.",
      
      "مع التركيز على ضمان الجودة والتميز في التصنيع وشفافية سلسلة التوريد، توفر يونيوم حلولاً موثوقة ومتسقة للمؤسسات من جميع الأحجام في المملكة. من الشركات الصغيرة إلى المؤسسات الكبرى والجهات الحكومية، تضمن قدراتنا في التصنيع والتوريد تلبية متطلبات الزي الموحد الخاص بك بدقة وخبرة."
    ],
    
    benefits: [
      {
        title: "تميز التصنيع المحلي",
        description: "منشآت إنتاج سعودية مجهزة بأحدث التقنيات، مما يضمن أوقات تسليم أسرع، وتكاليف شحن أقل، ودعم تطوير الصناعة المحلية.",
        icon: "/images/icons/premium-quality.svg",
        animation: {
          type: "fadeInUp",
          delay: 0.1,
          duration: 0.8,
          hoverEffect: "pulse"
        },
        iconBackground: "linear-gradient(135deg, #0072ff 0%, #00c6ff 100%)",
        highlight: true
      },
      {
        title: "شبكة توريد عالمية",
        description: "شراكات استراتيجية مع موردي الأزياء الموحدة المتميزين في تركيا والإمارات والصين وأوروبا للمتطلبات المتخصصة والمواد المبتكرة.",
        icon: "/images/icons/comprehensive-support.svg",
        animation: {
          type: "fadeInUp",
          delay: 0.2,
          duration: 0.8,
          hoverEffect: "grow"
        },
        iconBackground: "linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)",
        highlight: false
      },
      {
        title: "ضمان جودة متقدم",
        description: "عمليات مراقبة جودة معتمدة بشهادة ISO 9001 في كل مرحلة من مراحل الإنتاج، مع اختبارات دقيقة لضمان معايير عالية متسقة في جميع الطلبات.",
        icon: "/images/icons/custom-branding.svg",
        animation: {
          type: "fadeInUp",
          delay: 0.3,
          duration: 0.8,
          hoverEffect: "pulse"
        },
        iconBackground: "linear-gradient(135deg, #36D1DC 0%, #5B86E5 100%)",
        highlight: false
      },
      {
        title: "قدرة إنتاجية قابلة للتوسع",
        description: "قدرات تصنيع مرنة للتعامل مع طلبات من أي حجم، من الشركات الصغيرة إلى العقود الحكومية التي تتطلب آلاف القطع من الزي الموحد.",
        icon: "/images/icons/timely-delivery.svg",
        animation: {
          type: "fadeInUp",
          delay: 0.4,
          duration: 0.8,
          hoverEffect: "grow"
        },
        iconBackground: "linear-gradient(135deg, #38ef7d 0%, #11998e 100%)",
        highlight: false
      },
      {
        title: "شفافية كاملة لسلسلة التوريد",
        description: "رؤية شاملة لمراحل الإنتاج ومصادر المواد ومواعيد التسليم للتخطيط الأفضل وراحة البال.",
        icon: "/images/icons/climate-adapted.svg",
        animation: {
          type: "fadeInUp",
          delay: 0.5,
          duration: 0.8,
          hoverEffect: "pulse"
        },
        iconBackground: "linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%)",
        highlight: false
      }
    ],
    
    // Add a configuration for how to display the benefits section
    benefitsDisplay: {
      layout: "grid",
      iconSize: "large",
      animationEnabled: true,
      style: "premium",
      title: "مزايا التصنيع والتوريد",
      subtitle: "توفر قدراتنا المتكاملة في التصنيع والتوريد قيمة استثنائية من خلال هذه المزايا الرئيسية:",
      callToAction: {
        text: "استكشف منشآت التصنيع لدينا",
        link: "/ar/services/manufacturing-tour"
      }
    },
    
    products: [
      {
        id: "uniform-manufacturing-service",
        name: "خدمة تصنيع الزي الموحد المتميزة",
        description: "إنتاج شامل للأزياء الموحدة عالية الجودة في منشآتنا السعودية بآلات متطورة وحرفية ماهرة لمتانة وتشطيب استثنائيين.",
        image: "/images/industries/supply-manufacturing/supply-manufacturing-uniform-product-1.jpg",
        href: "/ar/services/manufacturing"
      },
      {
        id: "custom-uniform-production",
        name: "تصميم وإنتاج الزي الموحد المخصص",
        description: "خدمة متكاملة لتصميم وتصنيع الزي الموحد المخصص، من الفكرة إلى الإنتاج، باستخدام مواد متميزة واهتمام بالتفاصيل.",
        image: "/images/industries/supply-manufacturing/supply-manufacturing-uniform-product-2.jpg",
        href: "/ar/services/custom-design"
      },
      {
        id: "bulk-uniform-supply",
        name: "برنامج توريد الزي الموحد بالجملة",
        description: "حلول شاملة لتوريد الزي الموحد بالجملة للمؤسسات الكبيرة، مع جودة متسقة وتسليم في الوقت المحدد ودعم إدارة البرنامج.",
        image: "/images/industries/supply-manufacturing/supply-manufacturing-uniform-product-3.jpg",
        href: "/ar/services/bulk-ordering"
      }
    ],
    
    fabricTechnologies: {
      title: "تقنيات التصنيع المتقدمة",
      description: "تتضمن منشآت التصنيع المتطورة لدينا تقنيات وعمليات حديثة لضمان جودة فائقة واتساق وكفاءة في إنتاج الزي الموحد.",
      items: [
        {
          name: "إنتاج الأقمشة السعودية",
          description: "أقمشة متميزة مصنعة محلياً ومصممة خصيصاً لمناخ وظروف العمل في المملكة العربية السعودية، مما يدعم أهداف التنمية الاقتصادية للمملكة.",
          image: "/images/industries/supply-manufacturing/supply-manufacturing-uniform-mens.jpg"
        },
        {
          name: "القص الرقمي الدقيق",
          description: "آلات قص تعمل بالكمبيوتر تضمن دقة مثالية وحد أدنى من النفايات في عملية التصنيع للحصول على مقاسات ومناسبة متسقة.",
          image: "/images/industries/supply-manufacturing/supply-manufacturing-uniform-custom-workers.jpg"
        },
        {
          name: "تطريز وعلامات تجارية متقدمة",
          description: "تقنيات تطريز رقمية عالية الدقة وتطبيق العلامات التجارية بشكل مثالي على جميع عناصر الزي الموحد.",
          image: "/images/industries/supply-manufacturing/supply-manufacturing-uniform-logos.jpg"
        },
        {
          name: "تقنية مراقبة الجودة",
          description: "أنظمة فحص جودة آلية مدمجة مع التحقق البشري الخبير لضمان تلبية كل قطعة من الزي الموحد لمعاييرنا الصارمة للجودة.",
          image: "/images/industries/supply-manufacturing/supply-manufacturing-uniform-identity.jpg"
        }
      ]
    },
    
    customization: {
      title: "حلول تصنيع مخصصة",
      description: "يتيح نهجنا المرن في التصنيع والتوريد تخصيص كل جانب من جوانب برنامج الزي الموحد الخاص بك لتلبية المتطلبات التنظيمية المحددة.",
      options: [
        {
          name: "مرونة حجم الإنتاج",
          description: "كميات طلبات قابلة للتخصيص من الدفعات الصغيرة إلى عمليات الإنتاج واسعة النطاق مع الحفاظ على الجودة المتسقة في جميع الكميات.",
          image: "/images/industries/supply-manufacturing/supply-manufacturing-uniform-post-1.jpg"
        },
        {
          name: "اختيار المواد المتميزة",
          description: "مكتبة أقمشة واسعة مع خيارات تتراوح من المصادر المحلية إلى المواد المستوردة المتميزة لمختلف المتطلبات والبيئات.",
          image: "/images/industries/supply-manufacturing/supply-manufacturing-uniform-post-2.jpg"
        },
        {
          name: "برامج تسليم مخصصة",
          description: "جداول تسليم وخطط توزيع مصممة خصيصاً بناءً على متطلبات الطرح الخاصة بمؤسستك واحتياجات الجدول الزمني.",
          image: "/images/industries/supply-manufacturing/supply-manufacturing-uniform-post-3.jpg"
        },
        {
          name: "خيارات مستويات الجودة",
          description: "مستويات جودة متعددة متاحة لتناسب متطلبات الميزانية المختلفة مع الحفاظ على المعايير المناسبة لكل حالة استخدام.",
          image: "/images/industries/supply-manufacturing/supply-manufacturing-uniform-accesories.jpg"
        }
      ]
    },
    
    testimonials: [
      {
        id: "testimonial-1",
        quote: "لقد أحدثت قدرات يونيوم في التصنيع ثورة في برنامج الزي الموحد لدينا. توفر مرافق الإنتاج المحلية لديهم عمليات تسليم سريعة لأكثر من 3000 موظف، بينما تضمن عمليات مراقبة الجودة تميزاً متسقاً. قدرتهم على توسيع نطاق الإنتاج مع الحفاظ على الدقة أمر ملحوظ.",
        author: "د. خالد الزهراني",
        position: "مدير المشتريات",
        company: "المجموعة الوطنية للرعاية الصحية"
      },
      {
        id: "testimonial-2",
        quote: "كمقاول حكومي، نقدر نهج يونيوم الشامل في تصنيع وتوريد الزي الموحد. جعلت وثائقهم الشفافة وعمليات ضمان الجودة والتسليم في الوقت المحدد منهم شريكاً موثوقاً لجميع متطلبات الزي الموحد عبر عملياتنا.",
        author: "إبراهيم العتيبي",
        position: "مدير سلسلة التوريد",
        company: "خدمات الحكومة السعودية"
      }
    ],
    
    relatedContent: [
      {
        title: "تصنيع ملابس العمل المقاومة للحرارة الصناعية",
        description: "كيف تعمل تقنيات التصنيع المبتكرة على إنتاج ملابس عمل متقدمة مقاومة للحرارة للبيئات الصناعية السعودية",
        image: "/images/industries/supply-manufacturing/supply-manufacturing-uniform-post-1.jpg",
        link: "/ar/blog/industrial-heat-stress-management"
      },
      {
        title: "ممارسات تصنيع الزي الموحد المستدامة",
        description: "استكشاف عمليات التصنيع والمواد الصديقة للبيئة في صناعة إنتاج الزي الموحد بالمملكة العربية السعودية",
        image: "/images/industries/supply-manufacturing/supply-manufacturing-uniform-post-2.jpg",
        link: "/ar/blog/sustainable-uniforms-2024-trends"
      },
      {
        title: "تقنيات تصنيع الزي الموحد المضاد للكهرباء الإستاتيكية",
        description: "تقنيات إنتاج متقدمة لإنشاء أزياء موحدة للحماية من الكهرباء الإستاتيكية للبيئات الصناعية عالية المخاطر",
        image: "/images/industries/supply-manufacturing/supply-manufacturing-uniform-post-3.jpg",
        link: "/ar/blog/industrial-electrostatic-protection"
      }
    ],
    
    featuredProducts: [
      {
        id: "industrial-coverall-pro",
        name: "غطاء الجسم الصناعي المتميز",
        description: "غطاء جسم صناعي متين مصنع من قماش مقاوم للهب وخياطات معززة لأقصى درجات الحماية والمتانة.",
        price: "من ٢٨٩ ريال سعودي",
        image: "/images/industries/supply-manufacturing/supply-manufacturing-uniform-product-1.jpg",
        href: "/ar/shop/industrial-uniforms/industrial-coverall-pro",
        features: ["مصنّع محلياً", "مقاوم للهب", "خياطات معززة", "حماية متقدمة"],
        badge: "الأكثر مبيعاً"
      },
      {
        id: "hi-vis-safety-uniform",
        name: "زي الأمان عالي الوضوح",
        description: "زي أمان متميز عالي الوضوح مع عناصر عاكسة مصنع للبيئات الصناعية الخطرة.",
        price: "من ٢٤٩ ريال سعودي",
        image: "/images/industries/supply-manufacturing/supply-manufacturing-uniform-product-2.jpg",
        href: "/ar/shop/industrial-uniforms/hi-vis-safety-uniform",
        features: ["وضوح محسّن", "بناء متين", "تصميم يركز على الراحة", "جيوب متعددة"],
        badge: "جودة متميزة"
      },
      {
        id: "supervisor-industrial-uniform",
        name: "زي المشرف الصناعي",
        description: "زي مشرف احترافي مصمم للموظفين الإداريين الصناعيين، يجمع بين السلطة والوظائف العملية.",
        price: "من ٣٤٩ ريال سعودي",
        image: "/images/industries/supply-manufacturing/supply-manufacturing-uniform-product-3.jpg",
        href: "/ar/shop/industrial-uniforms/supervisor-industrial-uniform",
        features: ["تصميم احترافي", "مواد متينة", "وضوح للإدارة", "تركيز على الراحة"],
        badge: "جودة إدارية"
      }
    ],
    
    faq: [
      {
        question: "ما هي قدرة التصنيع وفترة التسليم النموذجية لديكم؟",
        answer: "يمكن لمرافقنا المتطورة إنتاج ما يصل إلى 75,000 قطعة زي موحد شهرياً عبر مواقع التصنيع السعودية. تتراوح فترات التسليم القياسية من 2-3 أسابيع للطلبات العادية، مع توفر الإنتاج المعجل للمتطلبات العاجلة. تتطلب الطلبات كبيرة الحجم عادةً 4-6 أسابيع للتسليم الكامل، اعتماداً على المواصفات ومتطلبات التخصيص."
      },
      {
        question: "هل تحصلون على المواد محلياً أم دولياً؟",
        answer: "نحافظ على نهج هجين استراتيجي، حيث نوفر الأقمشة والمواد المتميزة محلياً من الموردين السعوديين ودولياً من شركائنا الموثوقين في تركيا والإمارات والصين وأوروبا. تتيح لنا هذه المرونة موازنة الجودة والتكلفة والمتطلبات المحددة للاحتياجات الفريدة لكل عميل، مع دعم أهداف التوطين في رؤية السعودية 2030 كلما أمكن ذلك."
      },
      {
        question: "كيف تضمنون الجودة المتسقة عبر طلبات التصنيع الكبيرة؟",
        answer: "نقوم بتنفيذ نظام إدارة جودة شامل معتمد بشهادة ISO 9001 يتضمن اختبار المواد وفحص خط الإنتاج ومراقبة الجودة الإحصائية وأخذ العينات العشوائية والتحقق النهائي من الجودة قبل الشحن. يضمن نظام التتبع الرقمي لدينا أن كل قطعة تلبي معايير الجودة المعتمدة لدينا في جميع مراحل عملية التصنيع."
      },
      {
        question: "هل يمكنكم تلبية متطلبات المناقصات الحكومية لتصنيع الزي الموحد؟",
        answer: "نعم، لدينا خبرة واسعة في العقود والمناقصات الحكومية لتصنيع وتوريد الزي الموحد. تلبي وثائقنا وتصاريح الأمن ومستويات السعودة وشهادات الجودة جميع متطلبات عمليات الشراء الحكومية. يتخصص فريق الخدمات الحكومية المخصص لدينا في إعداد وتنفيذ المناقصات."
      }
    ],
    
    cta: {
      title: "حوّل برنامج الزي الموحد لديك مع التصنيع والتوريد المتميز",
      description: "تواصل مع فريق الخبراء لدينا لمناقشة متطلبات التصنيع والتوريد للزي الموحد لمؤسستك. من التصميم والإنتاج إلى التسليم وإدارة البرنامج، تقدم يونيوم التميز في كل مرحلة.",
      buttonText: "طلب استشارة التصنيع",
      buttonUrl: "/ar/contact?industry=supply-manufacturing"
    }
  };

  return <IndustryPageLayout locale={locale} industryData={supplyManufacturingData} />;
} 