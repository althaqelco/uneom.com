'use client';

import React from 'react';
import IndustryPageLayout from '@/components/layout/IndustryPageLayout';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function EducationClientPageArabic() {
  const locale = 'ar';
  
  const educationIndustryData = {
    title: "أزياء وملابس قطاع التعليم",
    subtitle: "توفر يونيوم أزياء وزي مدرسي عالي الجودة مصمم خصيصًا لمؤسسات التعليم في المملكة العربية السعودية، من المدارس الابتدائية إلى الجامعات",
    heroImage: "/images/education-industry-hero.webp",
    introduction: [
      "تقدم يونيوم مجموعة شاملة من الأزياء المدرسية والجامعية المصممة خصيصًا لتلبية احتياجات المؤسسات التعليمية في المملكة العربية السعودية. نحن نفهم أهمية الزي الموحد في خلق بيئة تعليمية منظمة وتعزيز الانتماء والهوية المؤسسية.",
      "تجمع تصاميمنا بين الطابع الرسمي والراحة والمتانة لتناسب الاستخدام اليومي للطلاب والمعلمين. نستخدم أقمشة عالية الجودة مقاومة للتلف والاهتراء لضمان عمر أطول للزي المدرسي، مع الحفاظ على مظهر أنيق وجذاب.",
      "نوفر حلولًا متكاملة لأزياء الطلاب والمعلمين والإداريين وموظفي الخدمات، مع إمكانية تخصيص كاملة وفقًا لهوية المؤسسة التعليمية وألوانها وشعارها."
    ],
    benefits: [
    {
      title: "هوية مؤسسية موحدة",
      description: "تصاميم تعزز الانتماء والهوية المشتركة بين جميع منسوبي المؤسسة التعليمية",
      icon: "/images/icons/identity.svg"
    },
    {
      title: "متانة استثنائية",
      description: "أقمشة متينة تتحمل الاستخدام اليومي المكثف وتدوم لفترات طويلة",
      icon: "/images/icons/durability.svg"
    },
    {
      title: "راحة فائقة",
      description: "تصاميم مريحة تناسب البيئة التعليمية وتسمح بحرية الحركة طوال اليوم",
      icon: "/images/icons/comfort.svg"
    },
    {
      title: "سهولة العناية",
      description: "أقمشة سهلة الغسيل والعناية تحافظ على مظهرها الأنيق مع الاستخدام المتكرر",
      icon: "/images/icons/maintenance.svg"
    },
    {
      title: "تخصيص شامل",
      description: "إمكانية تخصيص كاملة وفقًا لألوان المدرسة وشعارها ومتطلباتها المحددة",
      icon: "/images/icons/customize.svg"
    },
    {
      title: "توريد موثوق",
      description: "نظام توريد منتظم يضمن توفر الزي المدرسي على مدار العام الدراسي",
      icon: "/images/icons/supply-chain.svg"
    }
    ],
    products: [
    {
      id: "school-uniform",
      name: "زي مدرسي كامل",
      description: "مجموعة كاملة من الزي المدرسي للطلاب والطالبات بتصاميم أنيقة ومريحة",
      image: "/images/school-uniform.webp",
        href: "/ar/images/pe-uniform.webp",
        href: "/ar/images/faculty-uniform.webp",
        href: "/ar/shop/education-uniforms/faculty-professional-attire"
    }
    ],
    testimonials: [
    {
      id: "1",
        quote: "التعامل مع يونيوم كان تجربة استثنائية. لقد قدموا حلولًا مبتكرة للزي المدرسي الخاص بمدرستنا مع الالتزام بأعلى معايير الجودة. تمكنوا من تلبية احتياجاتنا الفريدة وتقديم خدمة متميزة من البداية إلى النهاية.",
      author: "د. فيصل العمري",
      position: "مدير مدرسة",
        company: "مدارس المستقبل الدولية"
    }
    ],
    cta: {
      title: "ارتقِ بهوية مؤسستك التعليمية",
      description: "تواصل مع فريق الخبراء لدينا للحصول على استشارة مجانية حول تصميم وتنفيذ الزي المدرسي المثالي لمؤسستك.",
      buttonText: "طلب عرض سعر",
      buttonUrl: "/ar/quote?industry=education"
    }
  };

  // Now using IndustryPageLayout without skipMainLayout since Arabic layout no longer wraps in MainLayout
  return <IndustryPageLayout locale={locale} industryData={educationIndustryData} />;
} 