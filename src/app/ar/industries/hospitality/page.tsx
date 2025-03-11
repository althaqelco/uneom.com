'use client';

import React from 'react';
import IndustryPageLayout from '@/components/layout/IndustryPageLayout';

export default function HospitalityPageArabic() {
  const locale = 'ar';
  
  // Arabic content for the hospitality industry page
  const hospitalityIndustryData = {
    title: "أزياء الضيافة الفاخرة في المملكة العربية السعودية",
    subtitle: "ملابس أنيقة وعملية للفنادق والمنتجعات والمطاعم ومرافق الفعاليات",
    heroImage: "/images/industries/hospitality-hero.jpg",
    
    introduction: [
      "يشهد قطاع الضيافة في المملكة العربية السعودية نموًا غير مسبوق، مع زيادة الاستثمار في الفنادق الفاخرة والمطاعم الراقية والبنية التحتية السياحية. مع فتح المملكة أبوابها للزوار الدوليين من خلال مبادرات رؤية 2030، أصبحت أهمية مظهر الموظفين أكثر أهمية من أي وقت مضى.",
      
      "في يونيوم، نقدم أزياء ضيافة فاخرة تجمع بين الأناقة والمتانة والوظائف العملية لكل دور في منشأتك. من موظفي الاستقبال إلى التدبير المنزلي، ومن نوادل المطاعم إلى البوابين، تضمن مجموعتنا الشاملة أن يقدم فريقك بأكمله صورة متماسكة واحترافية تعكس معايير علامتك التجارية.",
      
      "تم تصميم مجموعات أزياء الضيافة لدينا خصيصًا لتتحمل متطلبات قطاع الضيافة في المملكة العربية السعودية مع توفير راحة استثنائية خلال المناوبات الطويلة. نحن ندرك أن أزياء الموظفين هي امتداد حاسم لجمالية منشأتك وهوية علامتك التجارية."
    ],
    
    benefits: [
      {
        title: "توافق العلامة التجارية",
        description: "أزياء مصممة لتعكس بشكل مثالي جمالية علامتك التجارية وألوانها وموقعها في السوق.",
        icon: "/icons/color-swatch.svg"
      },
      {
        title: "راحة الموظفين",
        description: "مصممة للحركة والراحة خلال المناوبات الطويلة في بيئات الضيافة المختلفة.",
        icon: "/icons/thumb-up.svg"
      },
      {
        title: "التكيف الثقافي",
        description: "تصاميم تحترم القيم الثقافية السعودية مع الحفاظ على معايير الضيافة المعاصرة.",
        icon: "/icons/globe.svg"
      },
      {
        title: "المتانة",
        description: "أقمشة وتقنيات بناء متميزة تتحمل الغسيل المتكرر والارتداء اليومي.",
        icon: "/icons/shield-check.svg"
      }
    ],
    
    products: [
      {
        id: "hotel-front-office",
        name: "مجموعة مكتب استقبال الفندق",
        description: "أزياء راقية لموظفي الاستقبال والكونسيرج ومسؤولي علاقات النزلاء تخلق انطباعًا أوليًا لا يُنسى.",
        image: "/images/ar/shop/hotel-front-desk.jpg",
        href: "/ar/ar/shop/hotel-front-office"
      },
      {
        id: "food-beverage",
        name: "ملابس الطعام والمشروبات",
        description: "أزياء عملية وأنيقة لنوادل المطاعم والبارمن وموظفي خدمة الطعام مع تقنيات مقاومة للبقع.",
        image: "/images/ar/shop/restaurant-staff.jpg",
        href: "/ar/ar/shop/food-beverage-uniforms"
      },
      {
        id: "housekeeping",
        name: "التدبير المنزلي والصيانة",
        description: "أزياء متينة ومريحة للتدبير المنزلي والصيانة وموظفي الدعم تسمح بسهولة الحركة.",
        image: "/images/ar/shop/housekeeping.jpg",
        href: "/ar/ar/shop/housekeeping-uniforms"
      },
      {
        id: "luxury-hospitality",
        name: "المجموعة الفاخرة",
        description: "أزياء فاخرة للمنشآت ذات الخمس نجوم تضم أقمشة عالية الجودة وحرفية مفصلة وعناصر تصميم مخصصة.",
        image: "/images/ar/shop/luxury-hospitality.jpg",
        href: "/ar/ar/shop/luxury-hospitality-uniforms"
      }
    ],
    
    fabricTechnologies: [
      {
        name: "أقمشة ستين شيلد™",
        description: "معالجة ثورية للأقمشة تصد السوائل وتمنع البقع من الطعام والمشروبات ومنتجات التنظيف.",
        icon: "/icons/beaker.svg"
      },
      {
        name: "تقنية كلايمت كنترول™",
        description: "أقمشة خفيفة قابلة للتنفس مصممة خصيصًا لمناخ المملكة العربية السعودية والبيئات المكيفة.",
        icon: "/icons/sun.svg"
      },
      {
        name: "بناء إيزي موف™",
        description: "ألواح مرنة استراتيجية وتصاميم مريحة توفر حركة غير مقيدة لأدوار الضيافة النشطة.",
        icon: "/icons/refresh.svg"
      },
      {
        name: "تشطيب لوكس ديورابل™",
        description: "تشطيب خاص للأقمشة يحافظ على المظهر والملمس الفاخر حتى بعد مئات من دورات الغسيل الصناعي.",
        icon: "/icons/sparkles.svg"
      }
    ],
    
    customizationOptions: [
      {
        name: "مطابقة ألوان العلامة التجارية",
        description: "مطابقة دقيقة للألوان مع إرشادات العلامة التجارية الخاصة بك عبر جميع عناصر الزي الموحد.",
        icon: "/icons/color-swatch.svg"
      },
      {
        name: "تطريز مخصص",
        description: "شعارات مطرزة عالية الجودة ونقوش وشارات أسماء تحتفظ بالحدة واللون.",
        icon: "/icons/template.svg"
      },
      {
        name: "تمييز الأدوار",
        description: "اختلافات تصميم دقيقة لتمييز أدوار الموظفين المختلفة بوضوح مع الحفاظ على تماسك التصميم العام.",
        icon: "/icons/user-group.svg"
      },
      {
        name: "مجموعات موسمية",
        description: "تنويعات موسمية اختيارية للتكيف مع المواسم المتغيرة أو العروض الترويجية أو المناسبات الخاصة.",
        icon: "/icons/calendar.svg"
      }
    ],
    
    testimonials: [
      {
        id: "luxury-hotel",
        quote: "قامت يونيوم بتحويل مظهر موظفينا بأزياء تعكس تموضعنا الفاخر بشكل مثالي. يشيد الضيوف غالبًا بالتصميم الأنيق، ويقدر موظفونا الراحة خلال المناوبات الطويلة. لقد قللت المتانة بشكل كبير من تكاليف الاستبدال لدينا.",
        author: "محمد الفيصل",
        position: "المدير العام",
        company: "فندق ومنتجع الواحة الكبرى، الرياض",
        image: "/images/testimonials/mohammad-al-faisal.jpg"
      }
    ],
    
    cta: {
      title: "ارتقِ بتجربة ضيوفك من الانطباع الأول",
      description: "اتصل بمتخصصي أزياء الضيافة لدينا لمناقشة كيف يمكننا تعزيز صورة منشأتك بملابس موظفين فاخرة.",
      buttonText: "طلب استشارة الضيافة",
      buttonUrl: "/ar/contact?industry=hospitality"
    }
  };
  
  return (
    <IndustryPageLayout 
      locale={locale}
      industryData={hospitalityIndustryData}
      skipMainLayout={true}
    />
  );
} 
