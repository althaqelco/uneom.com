'use client';

import React from 'react';
import IndustryPageLayout from '@/components/layout/IndustryPageLayout';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function HospitalityClientPageArabic() {
  // Set locale to Arabic
  const locale = 'ar';
  
  // بيانات المنتجات - these are mapped directly to the industryData products property
  const products = [
    {
      id: '1',
      name: 'يونيفورم استقبال الفنادق الفاخر',
      description: 'يونيفورم احترافي مصمم خصيصًا لموظفي الاستقبال في الفنادق الفاخرة، يجمع بين الأناقة والعملية ويعكس فخامة المنشأة السياحية. مناسب للفنادق من فئة الخمس نجوم والمنتجعات الراقية.',
      image: '/images/hospitality/hospitality_uniform_receiption_hotel.jpg',
      href: '/ar/images/hospitality/hospitality_uniform_chef.jpg',
      href: '/ar/images/hospitality/housekeeping-uniform.jpg',
      href: '/ar/images/hospitality/hospitality_uniform.jpg',
      href: '/ar/images/hospitality/chef-uniform.jpg',
      href: '/ar/images/hospitality/spa-uniform.jpg',
      href: '/ar/images/hospitality/resort-uniform.jpg',
      href: '/ar/images/hospitality/concierge-uniform.jpg',
      href: '/ar/images/hospitality/event-staff-uniform.jpg',
      href: '/ar/shop/hospitality-attire/premium-hotel-uniforms',
      features: ['مظهر احترافي', 'سهولة الحركة', 'أقمشة مريحة', 'تناسق مع ديكور القاعات', 'متوفر بلونين', 'مقاومة للاتساخ', 'خيارات للجنسين']
    }
  ];

  // المحتوى ذو الصلة - these are mapped directly to the industryData relatedContent property
  const relatedContent = [
    {
      title: 'كيفية اختيار يونيفورم الضيافة المناسب لفندقك',
      description: 'دليل شامل لاختيار اليونيفورم المناسب للفنادق بناءً على معايير الجودة والراحة والمظهر الاحترافي ونوع الفندق وطبيعة خدماته.',
      image: '/images/hospitality/hospitality_uniform_hotel.jpg',
      link: '/ar/blog/choosing-hospitality-uniforms'
    },
    {
      title: 'أحدث اتجاهات يونيفورم المطاعم لعام 2023',
      description: 'تعرف على أحدث صيحات يونيفورم المطاعم والمقاهي وكيفية مواكبة التصاميم العصرية التي تجمع بين الأناقة والعملية.',
      image: '/images/hospitality/hospitality_uniform_receiption_hotel.jpg',
      link: '/ar/blog/restaurant-uniform-trends'
    },
    {
      title: 'دور اليونيفورم في تعزيز هوية العلامة التجارية للفنادق',
      description: 'كيف يساهم اليونيفورم المميز في تعزيز الهوية البصرية للفنادق وترسيخ صورتها في أذهان العملاء وتحسين التجربة الكلية للضيوف.',
      image: '/images/hospitality/hospitality_uniform_chef.jpg',
      link: '/ar/blog/uniform-brand-identity'
    },
    {
      title: 'أفضل الأقمشة المستخدمة في يونيفورم الضيافة والفنادق',
      description: 'استعراض لأجود أنواع الأقمشة المستخدمة في صناعة يونيفورم الضيافة، ومميزات كل منها وملاءمتها لبيئات العمل المختلفة في قطاع الفنادق.',
      image: '/images/hospitality/hospitality_uniform.jpg',
      link: '/ar/blog/hospitality-uniform-fabrics'
    },
    {
      title: 'إرشادات العناية بيونيفورم الضيافة لإطالة عمره الافتراضي',
      description: 'نصائح عملية للحفاظ على جودة ومظهر يونيفورم الفنادق والمطاعم مع الاستخدام اليومي والغسيل المتكرر في بيئات العمل المختلفة.',
      image: '/images/hospitality/hospitality_uniform_resturant_2.jpg',
      link: '/ar/blog/hospitality-uniform-care'
    },
    {
      title: 'كيف تختار يونيفورم يناسب الطابع الثقافي لمطعمك أو فندقك',
      description: 'دليل متكامل لاختيار تصاميم يونيفورم تعكس الطابع الثقافي والتراثي للمطاعم والفنادق ذات الطابع المحلي أو العالمي المميز.',
      image: '/images/hospitality/hospitality_uniform_resturant.jpg',
      link: '/ar/blog/cultural-hospitality-uniforms'
    }
  ];

  // All content for this industry page in Arabic
  const hospitalityIndustryData = {
    title: "يونيفورم احترافي للضيافة والفنادق والمطاعم | الزي الموحد الأمثل للقطاع الفندقي",
    subtitle: "تشكيلة واسعة من يونيفورم الضيافة بأعلى معايير الجودة العالمية تناسب الفنادق والمنتجعات والمطاعم في المملكة العربية السعودية",
    heroImage: "/images/hero/group-of-chefs-standing-with-arms-crossed-in-kitch-2023-11-27-05-01-36-utc.jpg",
    introduction: [
      "يونيفورم الضيافة بمعايير عالمية وهوية سعودية أصيلة",
      "تتجه المملكة العربية السعودية نحو مستقبل واعد في قطاع السياحة والضيافة مع رؤية 2030، لذلك نوفر تشكيلة متكاملة من يونيفورم الضيافة والفنادق المصممة وفق أعلى المعايير العالمية، باستخدام أجود أنواع الأقمشة التي تضمن الراحة والمتانة والمظهر الاحترافي.",
      "تشمل منتجاتنا جميع احتياجات قطاع الضيافة بدءًا من يونيفورم الاستقبال والكونسيرج الذي يمثل واجهة المنشأة، مرورًا بيونيفورم خدمة الغرف المتطور والمطاعم، وصولًا إلى يونيفورم المطابخ والشيفات التنفيذيين بأعلى معايير الجودة والسلامة المهنية.",
      "في ظل التطور السريع لقطاع الضيافة في المملكة والمنافسة المتزايدة، تتميز يونيفورمات الضيافة لدينا بالمزج المثالي بين الأناقة والراحة والمتانة، مما يساعد فريق العمل على تقديم خدمة استثنائية مع الحفاظ على المظهر الاحترافي طوال فترة العمل.",
      "نقدم خدمات متكاملة لدمج هوية علامتك التجارية في اليونيفورم من خلال عدة طرق: استخدام ألوان العلامة التجارية، تطريز الشعار بتقنيات متطورة، إضافة تفاصيل تصميم فريدة، واستخدام قصات وأنماط معينة تميز منشأتك."
    ],
    benefits: [
      {
        title: "جودة عالمية",
        description: "نستخدم أفضل أنواع الأقمشة والخامات العالمية لضمان يونيفورم عالي الجودة يدوم طويلًا حتى مع الاستخدام اليومي المكثف والغسيل المتكرر في بيئات الضيافة.",
        icon: "/images/icons/quality.svg"
      },
      {
        title: "تصميم مخصص",
        description: "تصميم يونيفورم خاص بمؤسستك يعكس هويتك التجارية ويحقق متطلباتك الفريدة، مع فريق متخصص من المصممين لتقديم تجربة تصميم احترافية متكاملة.",
        icon: "/images/icons/branding.svg"
      },
      {
        title: "توصيل سريع",
        description: "نلتزم بمواعيد التسليم المحددة مع خدمة شحن سريعة لجميع مناطق المملكة، ونوفر خيارات تسليم عاجلة للطلبات ذات الأولوية العالية.",
        icon: "/images/icons/performance.svg"
      },
      {
        title: "تشكيلة متنوعة",
        description: "مجموعة واسعة من التصاميم والقصات والألوان تناسب كافة الأذواق والاحتياجات، مع تحديث مستمر لمواكبة أحدث اتجاهات الموضة في قطاع الضيافة.",
        icon: "/images/icons/role-identification.svg"
      },
      {
        title: "خدمة متكاملة",
        description: "من التصميم إلى التصنيع والتسليم، نقدم حلول يونيفورم متكاملة بسهولة، مع فريق دعم فني متخصص لمساعدتك في كل خطوة من عملية الطلب والتوريد.",
        icon: "/images/icons/shield-check.svg"
      },
      {
        title: "دعم ما بعد البيع",
        description: "خدمة عملاء احترافية وضمان جودة شامل مع إمكانية التعديل والصيانة، ونظام متابعة دقيق لضمان رضاكم التام عن المنتجات والخدمات المقدمة.",
        icon: "/images/icons/compliance.svg"
      },
      {
        title: "مقاومة التآكل",
        description: "أقمشة خاصة مقاومة للتآكل والبلى تضمن عمرًا أطول لليونيفورم حتى مع الاستخدام اليومي المكثف في بيئات العمل المختلفة في قطاع الضيافة.",
        icon: "/images/icons/durability.svg"
      },
      {
        title: "مقاومة البقع",
        description: "تقنيات متطورة في معالجة الأقمشة لجعلها مقاومة للبقع والسوائل، مما يجعلها مثالية لبيئات المطاعم والفنادق وأماكن تقديم الطعام.",
        icon: "/images/icons/antimicrobial.svg"
      },
      {
        title: "الراحة والمرونة",
        description: "تصاميم مدروسة تراعي راحة الموظف خلال ساعات العمل الطويلة، مع أقمشة مرنة تسمح بحرية الحركة وتقلل من الإجهاد البدني.",
        icon: "/images/icons/comfort.svg"
      },
      {
        title: "حلول موسمية",
        description: "مجموعات متخصصة لمختلف المواسم والمناسبات، سواء للصيف أو الشتاء أو للمهرجانات والفعاليات الخاصة التي تتطلب يونيفورم مميز.",
        icon: "/images/icons/climate.svg"
      }
    ],
    // Correctly formatted arrays for the IndustryPageLayout component
    products: products,
    relatedContent: relatedContent,
    testimonials: [
      {
        id: "1",
        quote: "كان التعامل مع شركة يونيفورم تجربة رائعة من البداية إلى النهاية. قدموا لنا منتجات عالية الجودة تتناسب تمامًا مع هوية فندقنا، وكان الالتزام بمواعيد التسليم مثاليًا. ساعدنا فريق التصميم المحترف في اختيار التصاميم والألوان التي تعكس الطابع الفاخر لفندقنا خمس نجوم.",
        author: "أحمد الشمري",
        position: "مدير عمليات",
        company: "فندق الريتز كارلتون - الرياض"
      },
      {
        id: "2",
        quote: "نتعامل مع شركة يونيفورم منذ أكثر من خمس سنوات، وما يميزهم هو جودة منتجاتهم الثابتة والخدمة الممتازة والمرونة في تلبية احتياجاتنا المتغيرة. لقد ساهم اليونيفورم الذي صمموه لمطاعمنا في تعزيز صورتنا لدى العملاء وزيادة ثقتهم في خدماتنا، كما أن الموظفين يشعرون بالراحة والفخر عند ارتدائه.",
        author: "سارة المهندي",
        position: "مديرة الموارد البشرية",
        company: "سلسلة مطاعم الذواقة - جدة"
      },
      {
        id: "3",
        quote: "وجدنا في يونيفورم شريكًا حقيقيًا يفهم متطلبات قطاع الضيافة والفندقة. اليونيفورم الذي صمموه لفريقنا نال إعجاب الضيوف والموظفين على حد سواء. ما أعجبني بشكل خاص هو اهتمامهم بأدق التفاصيل، واستخدامهم لأقمشة عالية الجودة مقاومة للبقع ومريحة، مما جعل موظفينا يتحركون بحرية وراحة خلال ساعات العمل الطويلة.",
        author: "خالد العتيبي",
        position: "المدير العام",
        company: "منتجع الشاطئ الذهبي - الخبر"
      },
      {
        id: "4",
        quote: "كمجموعة فنادق متوسطة الحجم، كنا نبحث عن حل متكامل ليونيفورم يمزج بين الجودة والسعر المناسب. قدمت لنا شركة يونيفورم حلاً شاملاً لجميع أقسام الفندق مع مرونة في الكميات والمقاسات. تميزت الخدمة بالسرعة والدقة في التنفيذ، والأهم من ذلك هو جودة المنتجات التي صمدت أمام الاستخدام اليومي المكثف.",
        author: "فيصل الدوسري",
        position: "مالك",
        company: "مجموعة فنادق النخبة - المنطقة الشرقية"
      },
      {
        id: "5",
        quote: "نحن نقدم تجربة ضيافة سعودية أصيلة في مطاعمنا، وكان التحدي إيجاد يونيفورم يعكس هذه الهوية التراثية مع لمسة عصرية. فاق فريق يونيفورم توقعاتنا بتصميم خاص يمزج بين العناصر التراثية السعودية والأناقة العصرية. تلقينا إشادة من عملائنا على التناسق بين ديكور المطعم ويونيفورم الموظفين، مما عزز من التجربة الكلية للضيوف.",
        author: "نورة القحطاني",
        position: "مديرة التسويق",
        company: "سلسلة مطاعم أصالة - الرياض وجدة"
      }
    ],
    cta: {
      title: "ارتقِ بمستوى خدمات الضيافة لديك مع يونيفورم عالي الجودة",
      description: "تواصل معنا اليوم لاستشارة مجانية حول كيفية تحسين مظهر فريقك وتعزيز هوية علامتك التجارية من خلال يونيفورم احترافي مخصص.",
      buttonText: "احصل على عرض سعر مجاني",
      buttonUrl: "/ar/contact?industry=hospitality"
    }
  };
  
  // Now using IndustryPageLayout without skipMainLayout since Arabic layout no longer wraps in MainLayout
  return <IndustryPageLayout locale={locale} industryData={hospitalityIndustryData} />;
} 