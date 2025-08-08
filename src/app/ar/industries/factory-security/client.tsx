'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import IndustryPageLayout from '@/components/layout/IndustryPageLayout';
import { Cairo, Tajawal } from 'next/font/google';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Font setup
const cairoFont = Cairo({ 
  subsets: ['arabic'],
  weight: ['600', '700'],
  variable: '--font-cairo'});

const tajawalFont = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700'],
  variable: '--font-tajawal'});

export default function FactorySecurityClientPageArabic() {
  const locale = 'ar';
   
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
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
        icon: "/images/icons/safety.svg",
        gradient: "from-yellow-500 to-amber-600"
      },
      {
        title: "سلطة مهنية",
        description: "مظهر مهيب يؤسس سلطة وموثوقية أفراد الأمن.",
        icon: "/images/icons/authority.svg",
        gradient: "from-blue-600 to-indigo-700"
      },
      {
        title: "المتانة والراحة",
        description: "مواد متميزة تتحمل الظروف الصناعية مع ضمان الراحة طوال اليوم.",
        icon: "/images/icons/durability.svg",
        gradient: "from-green-600 to-emerald-700"
      },
      {
        title: "تكيف مع الطقس",
        description: "تصاميم ذكية للمناخ للعمليات الأمنية الداخلية والخارجية.",
        icon: "/images/icons/weather.svg",
        gradient: "from-cyan-500 to-blue-600"
      },
      {
        title: "التعريف والوصول",
        description: "ميزات متكاملة للشارات وبطاقات الوصول وأجهزة الاتصال.",
        icon: "/images/icons/identification.svg",
        gradient: "from-purple-600 to-violet-700"
      }
    ],
    
    products: [
      {
        id: "industrial-security-uniform",
        name: "طقم يونيفورم الأمن الصناعي",
        description: "طقم يونيفورم أمني كامل مصمم للبيئات الصناعية، يتميز بعناصر عالية الرؤية وبناء متين.",
        image: "/images/industries/factory_industry/factory-security-uniform-1.jpg",
        href: "/ar/shop/security-uniforms/supervisor-set",
        features: ["تصميم احترافي", "مواد متميزة", "شارات المشرف"]
      }
    ],
    
    fabricTechnologies: [
      {
        name: "حماية ديوراتاف™",
        description: "تقنية قماش متقدمة توفر متانة وحماية فائقة في البيئات الصناعية.",
        icon: "/images/icons/protection.svg",
        animation: "fade-right"
      },
      {
        name: "راحة التحكم بالمناخ",
        description: "تنظيم مبتكر لدرجة الحرارة للراحة المثلى في الظروف المتغيرة.",
        icon: "/images/icons/temperature.svg",
        animation: "fade-up"
      },
      {
        name: "تقنية سيفتي فلكس",
        description: "ميزات حركة معززة دون المساس بالحماية والمتانة.",
        icon: "/images/icons/flexibility.svg",
        animation: "fade-left"
      }
    ],
    
    customizationOptions: [
      {
        name: "العلامة التجارية للشركة",
        description: "تطبيق احترافي للشعار ومطابقة الألوان لتتوافق مع هوية الشركة.",
        icon: "/images/icons/branding.svg",
        gradient: "from-blue-500 to-blue-700"
      },
      {
        name: "تمييز الرتب",
        description: "تسلسل هرمي بصري واضح من خلال عناصر تصميم وشارات مدروسة.",
        icon: "/images/icons/rank.svg",
        gradient: "from-purple-500 to-purple-700"
      },
      {
        name: "دمج السلامة",
        description: "ميزات سلامة قابلة للتخصيص بناءً على متطلبات المنشأة المحددة.",
        icon: "/images/icons/safety-custom.svg",
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
      buttonUrl: "/ar/contact?industry=factory-security",
      secondaryButton: {
        text: "عرض الكتالوج",
        url: "/ar/shop/security-uniforms"
      }
    }
  };

  // Now using IndustryPageLayout without skipMainLayout since Arabic layout no longer wraps in MainLayout
  return <IndustryPageLayout locale={locale} industryData={factorySecurityData} />;
} 