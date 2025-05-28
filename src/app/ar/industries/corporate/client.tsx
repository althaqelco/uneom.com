'use client';

import React from 'react';
import IndustryPageLayout from '@/components/layout/IndustryPageLayout';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function CorporateClientPageArabic() {
  const locale = 'ar';
  
  const corporateIndustryData = {
    title: "أزياء الشركات والمكاتب",
    subtitle: "زي موحد أنيق واحترافي للشركات والمؤسسات في المملكة العربية السعودية",
    heroImage: "/images/corporate/corporate-hero.jpg",
    introduction: [
      "تقدم يونيوم أزياء شركات احترافية تعكس هوية مؤسستك وثقافتها التنظيمية، مصممة خصيصًا لتلبية احتياجات بيئة العمل المكتبي في المملكة العربية السعودية.",
      "تتميز مجموعاتنا من الأزياء المكتبية بالأناقة والراحة والمتانة، مع مراعاة متطلبات اللباس المحافظ وظروف المناخ المحلي.",
      "سواء كنت تبحث عن بدلات تنفيذية، قمصان رسمية، أو أزياء الاستقبال، نوفر تشكيلة متكاملة من الأزياء المكتبية مع إمكانية التخصيص الكامل لتعكس هوية علامتك التجارية."
    ],
    benefits: [
      {
        title: "مظهر احترافي موحد",
        description: "زي موحد يعزز الصورة الاحترافية للمؤسسة ويخلق هوية بصرية موحدة",
        icon: "/images/icons/professional-image.svg"
      },
      {
        title: "خامات عالية الجودة",
        description: "أقمشة فاخرة تدوم طويلاً مع الاستخدام اليومي وتحافظ على مظهرها الأنيق",
        icon: "/images/icons/premium-fabric.svg"
      },
      {
        title: "راحة طوال اليوم",
        description: "تصاميم مريحة مع أقمشة تسمح بالتنفس مناسبة للعمل المكتبي لساعات طويلة",
        icon: "/images/icons/comfort.svg"
      },
      {
        title: "دمج هوية العلامة التجارية",
        description: "تخصيص الأزياء بألوان وشعارات الشركة لتعزيز الهوية المؤسسية",
        icon: "/images/icons/brand-integration.svg"
      }
    ],
    products: [
      {
        id: "executive-suits",
        name: "البدلات التنفيذية",
        description: "بدلات أنيقة للمدراء التنفيذيين والمناصب القيادية بتصاميم عصرية وخامات فاخرة",
        image: "/images/corporate/executive-suits.jpg",
        href: "/ar/images/corporate/office-attire.jpg",
        href: "/ar/images/corporate/reception-uniforms.jpg",
        href: "/ar/shop/corporate-wear/reception-collection"
      }
    ],
    testimonials: [
      {
        id: "1",
        quote: "برنامج الزي الموحد الذي صممته يونيوم لشركتنا كان له أثر إيجابي ملحوظ على مستوى الاحترافية والانتماء بين الموظفين. التصاميم تتميز بالأناقة والراحة مع الحفاظ على الطابع الرسمي.",
        author: "م. سلمان القحطاني",
        position: "مدير الموارد البشرية",
        company: "مجموعة الخليج للاستثمار"
      }
    ],
    cta: {
      title: "طوّر صورة مؤسستك المهنية",
      description: "تواصل معنا اليوم لمناقشة احتياجات شركتك من الأزياء الموحدة والحصول على عرض سعر مخصص.",
      buttonText: "طلب استشارة",
      buttonUrl: "/ar/contact"
    }
  };

  // Now using IndustryPageLayout without skipMainLayout since Arabic layout no longer wraps in MainLayout
  return <IndustryPageLayout locale={locale} industryData={corporateIndustryData} />;
} 