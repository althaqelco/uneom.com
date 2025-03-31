'use client';

import React from 'react';
import IndustryPageLayout from '@/components/layout/IndustryPageLayout';

export default function EducationPageArabic() {
  // Set locale to Arabic
  const locale = 'ar';
  
  // All content for this industry page in Arabic
  const educationIndustryData = {
    title: "أزياء التعليم الفاخرة في المملكة العربية السعودية",
    subtitle: "ملابس مدرسية وجامعية عالية الجودة تعزز الهوية والتميز",
    heroImage: "/images/education/uniform_school-2.jpg",
    
    introduction: [
      "تلعب أزياء التعليم دورًا حيويًا في المشهد الأكاديمي المتطور في المملكة العربية السعودية، حيث تعزز الشعور بالانتماء والفخر المؤسسي مع تشجيع الانضباط والمساواة بين الطلاب. توفر يونيوم حلول أزياء فاخرة للمؤسسات التعليمية في جميع أنحاء المملكة، من المدارس الابتدائية إلى الجامعات المرموقة.",
      
      "تشمل مجموعتنا التعليمية الشاملة الزي المدرسي، والملابس الأكاديمية، والملابس الرياضية، والأزياء الاحتفالية المصممة خصيصًا للبيئات التعليمية السعودية. توازن كل قطعة بين المتانة والراحة مع احترام القيم الثقافية السعودية ومراعاة ظروف المناخ في المملكة.",
      
      "مع فهم المتطلبات الفريدة للمؤسسات التعليمية المختلفة، نقدم خيارات تخصيص تسمح للمدارس والجامعات بدمج هويتها وقيمها في كل عنصر من عناصر الزي الموحد. من المدارس الوطنية إلى الأكاديميات الدولية ومرافق التعليم العالي، يضمن نهجنا المخصص أن يعكس زي مؤسستك فلسفتك التعليمية ومعاييرك."
    ],
    
    benefits: [
      {
        title: "الهوية والفخر",
        description: "أزياء تعزز الهوية المؤسسية وتغرس الفخر بين الطلاب وأعضاء هيئة التدريس.",
        icon: "/icons/badge-check.svg"
      },
      {
        title: "المتانة والقيمة",
        description: "تصنيع عالي الجودة يتحمل الارتداء اليومي والغسيل المتكرر طوال العام الدراسي.",
        icon: "/icons/shield-check.svg"
      },
      {
        title: "راحة مناخية",
        description: "أقمشة خفيفة وتسمح بالتنفس مصممة خصيصًا لمناخ المملكة العربية السعودية الحار والفصول الدراسية المكيفة.",
        icon: "/icons/thumb-up.svg"
      },
      {
        title: "الحساسية الثقافية",
        description: "تصميمات تحترم قواعد اللباس الإسلامي مع توفير ملابس أكاديمية مريحة وعملية.",
        icon: "/icons/globe.svg"
      }
    ],
    
    products: [
      {
        id: "school-uniforms",
        name: "أزياء المدارس (K-12)",
        description: "مجموعات شاملة من الزي المدرسي للمدارس الابتدائية والثانوية مع خيارات مخصصة حسب الجنس.",
        image: "/images/education/uniform_school_product-5.jpg",
        href: "/ar/shop/school-uniforms"
      },
      {
        id: "university-attire",
        name: "ملابس الجامعات والكليات",
        description: "حلول أزياء احترافية لمؤسسات التعليم العالي، بما في ذلك الاختلافات الخاصة بكل قسم.",
        image: "/images/education/uniform_school_product-6.jpg",
        href: "/ar/shop/university-attire"
      },
      {
        id: "pe-sports",
        name: "التربية البدنية والرياضة",
        description: "ملابس رياضية عالية الأداء لحصص التربية البدنية والفرق الرياضية المدرسية.",
        image: "/images/education/uniform_school_product-7.jpg",
        href: "/ar/shop/pe-sports"
      },
      {
        id: "academic-ceremonies",
        name: "ملابس المناسبات الأكاديمية",
        description: "عباءات التخرج، والقبعات، وملابس المناسبات مخصصة بألوان وشعارات مؤسستك.",
        image: "/images/education/uniform_educations_variations.jpg",
        href: "/ar/shop/academic-ceremonies"
      }
    ],
    
    fabricTechnologies: [
      {
        name: "أقمشة دورا سمارت™",
        description: "مزيج من الأقمشة طويلة الأمد تتحمل الغسيل المتكرر والارتداء اليومي في الفصول الدراسية.",
        icon: "/icons/shield-check.svg"
      },
      {
        name: "تقنية إيزي كلين™",
        description: "معالجات مقاومة للبقع تحافظ على مظهر الأزياء نظيفًا رغم الاستخدام اليومي.",
        icon: "/icons/sparkles.svg"
      },
      {
        name: "تصميم كلايمت كومفورت™",
        description: "أقمشة خفيفة الوزن وتسمح بالتنفس تحافظ على راحة الطلاب في مناخ المملكة العربية السعودية.",
        icon: "/icons/thermometer.svg"
      },
      {
        name: "معالجة كولور لوك™",
        description: "تثبيت متقدم للألوان يحافظ على الحيوية حتى بعد دورات غسيل متعددة.",
        icon: "/icons/color-swatch.svg"
      }
    ],
    
    customizationOptions: [
      {
        name: "العلامة التجارية المؤسسية",
        description: "دمج شعارات المدرسة وألوانها في جميع أنحاء مجموعة الزي الموحد.",
        icon: "/icons/template.svg"
      },
      {
        name: "تمييز الصفوف والأقسام",
        description: "عناصر تصميم دقيقة تميز بين المستويات الدراسية أو الأقسام الأكاديمية.",
        icon: "/icons/user-group.svg"
      },
      {
        name: "خيارات اللباس الإسلامي",
        description: "تصميمات زي موحد تستوعب الحجاب ومتطلبات اللباس المحتشم.",
        icon: "/icons/globe.svg"
      },
      {
        name: "الاعتراف بالإنجازات",
        description: "شارات وأوسمة وعناصر مخصصة تعترف بإنجازات الطلاب ومناصبهم.",
        icon: "/icons/badge-check.svg"
      }
    ],
    
    testimonials: [
      {
        id: "international-academy",
        quote: "قدمت يونيوم لأكاديميتنا الدولية أزياء تحقق التوازن المثالي بين نهجنا التعليمي الحديث واحترام التقاليد السعودية. الجودة استثنائية، وقام فريق التصميم لديهم بدمج ألوان وشعار مدرستنا بشكل جميل.",
        author: "سارة العتيبي",
        position: "مديرة المدرسة",
        company: "الأكاديمية الدولية بالرياض",
        image: "/images/education/uniform_educations_3.jpg"
      }
    ],
    
    cta: {
      title: "ارتقِ بمؤسستك التعليمية",
      description: "تواصل مع متخصصي الزي التعليمي لدينا لتطوير برنامج زي موحد شامل يعكس قيم مؤسستك ويعزز تجربة الطلاب.",
      buttonText: "طلب استشارة تعليمية",
      buttonUrl: "/contact?industry=education"
    }
  };
  
  return (
    <IndustryPageLayout 
      locale={locale}
      industryData={educationIndustryData}
      skipMainLayout={true}
    />
  );
} 
