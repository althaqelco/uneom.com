'use client';

import React from 'react';
import IndustryPageLayout from '@/components/layout/IndustryPageLayout';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function FactoryIndustryClientPageArabic() {
  const locale = 'ar';
  
  // بيانات صناعة المصانع باللغة العربية
  const factoryIndustryData = {
    title: "أزياء موحدة للمصانع والقطاع الصناعي",
    subtitle: "ملابس صناعية عملية وأزياء موحدة للمصانع والمنشآت الصناعية في المملكة العربية السعودية، تلبي أعلى معايير السلامة والجودة",
    heroImage: "/images/factory/factory-hero.jpg",
    introduction: [
      "تُعد بيئة المصانع والمرافق الصناعية من البيئات ذات المتطلبات الخاصة التي تستلزم ملابس وأزياء موحدة تجمع بين معايير السلامة المهنية العالية والراحة اللازمة للعمل لساعات طويلة.",
      "تقدم يونيوم مجموعة متكاملة من الأزياء والملابس المصممة خصيصًا للبيئات الصناعية، بدءًا من ملابس خط الإنتاج المقاومة للاشتعال إلى أزياء المهندسين والفنيين والمشرفين.",
      "جميع منتجاتنا مصنوعة من أقمشة عالية المتانة ومعالجة بطرق خاصة لتلبية احتياجات المصانع المختلفة، مع مراعاة متطلبات OSHA والمعايير السعودية للسلامة الصناعية."
    ],
    benefits: [
    {
        title: "معايير سلامة عالمية",
        description: "ملابس مصممة وفقًا لمعايير السلامة الدولية والسعودية، مع خيارات متعددة للحماية من المخاطر المختلفة",
        icon: "/icons/safety-standards.svg"
    },
    {
      title: "متانة استثنائية",
        description: "أقمشة صناعية متينة تتحمل ظروف العمل القاسية والاستخدام المتكرر والغسيل الصناعي",
      icon: "/icons/durability.svg"
    },
    {
        title: "راحة وظيفية",
        description: "تصميم يراعي الراحة والقدرة على الحركة بحرية أثناء تأدية المهام المختلفة في البيئات الصناعية",
      icon: "/icons/comfort.svg"
    },
    {
        title: "تخصيص حسب المنشأة",
        description: "إمكانية تخصيص الأزياء الموحدة بألوان وشعارات المنشأة مع مراعاة متطلبات السلامة الخاصة بكل مصنع",
        icon: "/icons/customization.svg"
    }
    ],
    products: [
    {
        id: "production-line-uniforms",
        name: "أزياء خط الإنتاج",
        description: "ملابس متينة ومقاومة للمخاطر لعمال خطوط الإنتاج، مصممة للحماية والراحة أثناء العمل",
        image: "/images/factory/production-line-uniforms.jpg",
        href: "/ar/shop/factory-workwear/production-line"
    },
    {
        id: "engineering-uniforms",
        name: "أزياء المهندسين والفنيين",
        description: "ملابس احترافية للمهندسين والفنيين تجمع بين المظهر المهني والوظائف العملية للعمل في المصانع",
        image: "/images/factory/engineering-uniforms.jpg",
        href: "/ar/shop/factory-workwear/engineering-collection"
    },
    {
        id: "safety-workwear",
        name: "ملابس السلامة الصناعية",
        description: "ملابس وقائية متخصصة مقاومة للحرارة والاشتعال والمواد الكيميائية ومختلف المخاطر الصناعية",
        image: "/images/factory/safety-workwear.jpg",
        href: "/ar/shop/factory-workwear/safety-collection"
    }
    ],
    testimonials: [
    {
      id: "1",
        quote: "تعاملنا مع يونيوم لتوفير الأزياء الموحدة لمصنعنا الذي يضم أكثر من 500 عامل كان من أفضل القرارات التي اتخذناها. تميزت منتجاتهم بالجودة العالية والالتزام بمعايير السلامة، مما انعكس إيجابًا على بيئة العمل وسلامة الموظفين.",
        author: "م. فيصل الزهراني",
        position: "مدير السلامة والجودة",
        company: "مصانع المستقبل للتقنيات"
      }
    ],
    cta: {
      title: "حلول متكاملة للأزياء الموحدة في المصانع",
      description: "تواصل معنا اليوم للحصول على استشارة مجانية واكتشاف كيف يمكن لبرنامج الأزياء الموحدة المخصص أن يحسن السلامة والإنتاجية في منشأتك الصناعية.",
      buttonText: "طلب عرض سعر",
      buttonUrl: "/ar/contact"
    }
  };

  // استخدام IndustryPageLayout مباشرة مع skipMainLayout=true
  return <IndustryPageLayout locale={locale} industryData={factoryIndustryData} skipMainLayout={true} />;
} 