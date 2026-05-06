export interface Industry {
  id: string;
  nameEn: string;
  nameAr: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  heroImage: string;
  icon: string;
  color: string;
  products: { name: string; nameAr: string; href: string }[];
  benefitsEn: { icon: string; title: string; desc: string }[];
  benefitsAr: { icon: string; title: string; desc: string }[];
  featuresEn: string[];
  featuresAr: string[];
  faqsEn: { question: string; answer: string }[];
  faqsAr: { question: string; answer: string }[];
  featuredProducts: {
    id: string;
    nameEn: string;
    nameAr: string;
    descEn: string;
    descAr: string;
    image: string;
    priceEn: string;
    priceAr: string;
    hrefEn: string;
    hrefAr: string;
  }[];
}

export const industries: Industry[] = [
  {
    id: "healthcare",
    nameEn: "Healthcare",
    nameAr: "الرعاية الصحية",
    titleEn: "Medical Uniforms & Scrubs Saudi Arabia",
    titleAr: "الزي الطبي والسكراب في السعودية",
    descriptionEn: "Buy premium medical scrubs & healthcare uniforms in Saudi Arabia. Antimicrobial fabrics, MOH approved, for hospitals, clinics & labs.",
    descriptionAr: "اشتري أفضل سكراب طبي وزي رعاية صحية في السعودية. أقمشة مضادة للبكتيريا، معتمد من وزارة الصحة للمستشفيات والعيادات.",
    heroImage: "/images/industries/healthcare-uniforms-saudi.jpg",
    icon: "🏥",
    color: "from-blue-600 to-teal-600",
    products: [
      { name: "Premium Scrubs", nameAr: "سكراب فاخر", href: "/shop/medical-scrubs/premium-scrubs-set" },
      { name: "Lab Coats", nameAr: "معاطف مختبر", href: "/shop/medical-scrubs" }
    ],
    benefitsEn: [
      { icon: "🦠", title: "Antimicrobial Protection", desc: "Silver-ion treatment that inhibits bacterial growth." },
      { icon: "💧", title: "Moisture Management", desc: "Moisture-wicking fabrics for long shifts." }
    ],
    benefitsAr: [
      { icon: "🦠", title: "حماية مضادة للميكروبات", desc: "معالجة بأيونات الفضة تمنع نمو البكتيريا." },
      { icon: "💧", title: "إدارة الرطوبة", desc: "أقمشة تمتص العرق للمناوبات الطويلة." }
    ],
    featuresEn: ["Antimicrobial", "MOH Approved", "48hr Delivery"],
    featuresAr: ["مضاد للميكروبات", "معتمد من وزارة الصحة", "توصيل خلال 48 ساعة"],
    faqsEn: [
      { question: "Are UNEOM scrubs antimicrobial?", answer: "Yes, they feature advanced silver-ion technology." }
    ],
    faqsAr: [
      { question: "هل سكراب يونيوم مضاد للميكروبات؟", answer: "نعم، يتميز بتقنية أيونات الفضة المتطورة." }
    ],
    featuredProducts: [
      {
        id: "scrubs",
        nameEn: "Premium Medical Scrubs",
        nameAr: "سكراب طبي فاخر",
        descEn: "Antimicrobial, moisture-wicking scrubs.",
        descAr: "سكراب مضاد للميكروبات وامتصاص الرطوبة.",
        image: "/images/healthcare/scrubs-collections.jpg",
        priceEn: "From SAR 189",
        priceAr: "من 189 ريال",
        hrefEn: "/shop/medical-scrubs/premium-scrubs-set",
        hrefAr: "/ar/shop/medical-scrubs/premium-scrubs-set"
      }
    ]
  },
  {
    id: "hospitality",
    nameEn: "Hospitality",
    nameAr: "الضيافة والفنادق",
    titleEn: "Hotel & Restaurant Uniforms Saudi Arabia",
    titleAr: "زي الفنادق والمطاعم في السعودية",
    descriptionEn: "Premium uniforms for luxury hotels, resorts, and restaurants in Saudi Arabia.",
    descriptionAr: "أزياء موحدة متميزة للفنادق الفاخرة والمنتجعات والمطاعم في السعودية.",
    heroImage: "/images/industries/hospitality-uniforms.jpg",
    icon: "🏨",
    color: "from-orange-600 to-amber-600",
    products: [
      { name: "Chef Uniforms", nameAr: "زي طهاة", href: "/shop/culinary-uniforms/executive-chef-coat" },
      { name: "Reception Wear", nameAr: "زي استقبال", href: "/shop/hospitality-attire/luxury-hotel-uniform" }
    ],
    benefitsEn: [
      { icon: "✨", title: "Luxury Finish", desc: "Elegant designs for premium guest service." }
    ],
    benefitsAr: [
      { icon: "✨", title: "لمسة فاخرة", desc: "تصاميم أنيقة لخدمة ضيوف متميزة." }
    ],
    featuresEn: ["Elegant Design", "Durable Fabric", "Custom Branding"],
    featuresAr: ["تصميم أنيق", "قماش متين", "علامة تجارية مخصصة"],
    faqsEn: [
      { question: "Do you supply uniforms for large hotels?", answer: "Yes, we handle bulk orders for major hotel chains in KSA." }
    ],
    faqsAr: [
      { question: "هل تورّدون زي الفنادق الكبرى؟", answer: "نعم، نتعامل مع الطلبات الضخمة لسلاسل الفنادق الكبرى في المملكة." }
    ],
    featuredProducts: [
      {
        id: "chef",
        nameEn: "Executive Chef Uniform",
        nameAr: "زي رئيس طهاة تنفيذي",
        descEn: "High-quality, heat-resistant chef wear.",
        descAr: "ملابس طهاة عالية الجودة ومقاومة للحرارة.",
        image: "/images/hospitality/chef-uniform.jpg",
        priceEn: "From SAR 249",
        priceAr: "من 249 ريال",
        hrefEn: "/shop/culinary-uniforms/executive-chef-coat",
        hrefAr: "/ar/shop/culinary-uniforms/executive-chef-coat"
      }
    ]
  },
  {
    id: "aviation",
    nameEn: "Aviation",
    nameAr: "الطيران",
    titleEn: "Airline & Cabin Crew Uniforms Saudi Arabia",
    titleAr: "زي طاقم الطائرة والطيران في السعودية",
    descriptionEn: "Professional uniforms for pilots, cabin crew, and ground staff.",
    descriptionAr: "أزياء مهنية للطيارين وطاقم الطائرة وموظفي الأرض.",
    heroImage: "/images/industries/aviation-uniforms.jpg",
    icon: "✈️",
    color: "from-blue-700 to-indigo-800",
    products: [
      { name: "Pilot Uniforms", nameAr: "زي طيار", href: "/shop/aviation-uniforms/airline-crew-uniform" }
    ],
    benefitsEn: [
      { icon: "🌍", title: "Global Standards", desc: "Compliant with aviation safety and aesthetic standards." }
    ],
    benefitsAr: [
      { icon: "🌍", title: "معايير عالمية", desc: "متوافق مع معايير السلامة والجماليات في الطيران." }
    ],
    featuresEn: ["Tailored Fit", "Breathable Material", "Identity Branding"],
    featuresAr: ["تفصيل مثالي", "خامة تسمح بمرور الهواء", "هوية تجارية"],
    faqsEn: [],
    faqsAr: [],
    featuredProducts: []
  },
  {
    id: "corporate",
    nameEn: "Corporate",
    nameAr: "الشركات والمؤسسات",
    titleEn: "Corporate Attire & Business Suits Saudi Arabia",
    titleAr: "زي الشركات وبدلات الأعمال في السعودية",
    descriptionEn: "Tailored business wear for professional corporate environments.",
    descriptionAr: "ملابس أعمال مفصلة لبيئات الشركات المهنية.",
    heroImage: "/images/industries/corporate-uniforms.jpg",
    icon: "🏢",
    color: "from-slate-700 to-blue-900",
    products: [
      { name: "Business Suits", nameAr: "بدلات عمل", href: "/shop/corporate-workwear/executive-suit" }
    ],
    benefitsEn: [
      { icon: "💼", title: "Professional Image", desc: "Boost your brand identity with cohesive corporate wear." }
    ],
    benefitsAr: [
      { icon: "💼", title: "صورة مهنية", desc: "عزز هوية علامتك التجارية بزي مؤسسي موحد." }
    ],
    featuresEn: ["Premium Suiting", "Easy Maintenance", "Embroidery Options"],
    featuresAr: ["أقمشة بدلات فاخرة", "سهولة العناية", "خيارات التطريز"],
    faqsEn: [],
    faqsAr: [],
    featuredProducts: []
  },
  {
    id: "education",
    nameEn: "Education",
    nameAr: "التعليم",
    titleEn: "School & University Uniforms Saudi Arabia",
    titleAr: "الزي المدرسي والجامعي في السعودية",
    descriptionEn: "High-quality school uniforms and university attire for students and faculty.",
    descriptionAr: "زي مدرسي وجامعي عالي الجودة للطلاب وأعضاء هيئة التدريس.",
    heroImage: "/images/industries/education-uniforms.jpg",
    icon: "🎓",
    color: "from-indigo-600 to-purple-600",
    products: [{ name: "School Uniforms", nameAr: "زي مدرسي", href: "/shop/education-uniforms/premium-school-uniforms" }],
    benefitsEn: [{ icon: "📚", title: "Student Comfort", desc: "Durable fabrics designed for daily school activities." }],
    benefitsAr: [{ icon: "📚", title: "راحة الطلاب", desc: "أقمشة متينة مصممة للأنشطة المدرسية اليومية." }],
    featuresEn: ["Durable", "Breathable", "Custom Logos"],
    featuresAr: ["متين", "يسمح بمرور الهواء", "شعارات مخصصة"],
    faqsEn: [],
    faqsAr: [],
    featuredProducts: []
  },
  {
    id: "manufacturing",
    nameEn: "Manufacturing",
    nameAr: "التصنيع",
    titleEn: "Industrial & Factory Workwear Saudi Arabia",
    titleAr: "ملابس المصانع والعمل الصناعي في السعودية",
    descriptionEn: "Durable workwear for manufacturing and industrial environments.",
    descriptionAr: "ملابس عمل متينة لبيئات التصنيع والصناعة.",
    heroImage: "/images/industries/manufacturing-uniforms.jpg",
    icon: "🏭",
    color: "from-orange-700 to-amber-800",
    products: [{ name: "Industrial Coveralls", nameAr: "أوفرول صناعي", href: "/shop/industrial-uniforms/industrial-coverall" }],
    benefitsEn: [{ icon: "🛠️", title: "High Durability", desc: "Built to withstand tough industrial conditions." }],
    benefitsAr: [{ icon: "🛠️", title: "متانة عالية", desc: "مصممة لتحمل الظروف الصناعية القاسية." }],
    featuresEn: ["Safety First", "Heavy Duty", "Reinforced"],
    featuresAr: ["السلامة أولاً", "للأعمال الشاقة", "مقوى"],
    faqsEn: [],
    faqsAr: [],
    featuredProducts: []
  },
  {
    id: "security",
    nameEn: "Security",
    nameAr: "الأمن",
    titleEn: "Security Guard & Tactical Uniforms Saudi Arabia",
    titleAr: "زي حراس الأمن والزي التكتيكي في السعودية",
    descriptionEn: "Professional security attire for guards and tactical units.",
    descriptionAr: "زي أمني مهني للحراس والوحدات التكتيكية.",
    heroImage: "/images/industries/security-uniforms.jpg",
    icon: "🛡️",
    color: "from-gray-800 to-slate-900",
    products: [{ name: "Security Guard Set", nameAr: "طقم حارس أمن", href: "/shop/security-uniforms/security-officer-uniform" }],
    benefitsEn: [{ icon: "👮", title: "Professional Authority", desc: "Commands respect and provides clear identification." }],
    benefitsAr: [{ icon: "👮", title: "سلطة مهنية", desc: "يفرض الاحترام ويوفر تعريفاً واضحاً." }],
    featuresEn: ["Tactical Design", "All-Weather", "Durable"],
    featuresAr: ["تصميم تكتيكي", "لكل الأحوال الجوية", "متين"],
    faqsEn: [],
    faqsAr: [],
    featuredProducts: []
  },
  {
    id: "factory-industry",
    nameEn: "Factory Industry",
    nameAr: "الصناعة المصنعية",
    titleEn: "Specialized Factory Uniforms Saudi Arabia",
    titleAr: "زي المصانع المتخصص في السعودية",
    descriptionEn: "Technical workwear for specialized factory operations.",
    descriptionAr: "ملابس عمل تقنية لعمليات المصانع المتخصصة.",
    heroImage: "/images/industries/factory-uniforms.jpg",
    icon: "⚙️",
    color: "from-yellow-700 to-orange-800",
    products: [{ name: "Technical Factory Wear", nameAr: "ملابس مصانع تقنية", href: "/shop/industrial-uniforms/industrial-coverall" }],
    benefitsEn: [{ icon: "👷", title: "Operational Safety", desc: "Designed for safe operation in factory settings." }],
    benefitsAr: [{ icon: "👷", title: "سلامة العمليات", desc: "مصمم للعمل الآمن في بيئات المصانع." }],
    featuresEn: ["Heat Resistant", "Oil Resistant", "Safety Compliant"],
    featuresAr: ["مقاوم للحرارة", "مقاوم للزيوت", "متوافق مع السلامة"],
    faqsEn: [],
    faqsAr: [],
    featuredProducts: []
  },
  {
    id: "retail-shops",
    nameEn: "Retail Shops",
    nameAr: "المحلات التجارية",
    titleEn: "Retail & Sales Staff Uniforms Saudi Arabia",
    titleAr: "زي موظفي التجزئة والمبيعات في السعودية",
    descriptionEn: "Branded uniforms for retail environments and sales teams.",
    descriptionAr: "زي يحمل العلامة التجارية لبيئات التجزئة وفرق المبيعات.",
    heroImage: "/images/industries/retail-uniforms.jpg",
    icon: "🛍️",
    color: "from-pink-600 to-rose-700",
    products: [{ name: "Retail Staff Polo", nameAr: "بولو لموظفي التجزئة", href: "/shop/retail-uniforms/luxury-retail-collection" }],
    benefitsEn: [{ icon: "🏷️", title: "Brand Identity", desc: "Reinforce your retail brand with cohesive staff wear." }],
    benefitsAr: [{ icon: "🏷️", title: "هوية العلامة", desc: "عزز علامتك التجارية للتجزئة بزي موحد للموظفين." }],
    featuresEn: ["Stylish", "Comfortable", "Custom Colors"],
    featuresAr: ["أنيق", "مريح", "ألوان مخصصة"],
    faqsEn: [],
    faqsAr: [],
    featuredProducts: []
  },
  {
    id: "supply-manufacturing",
    nameEn: "Supply Manufacturing",
    nameAr: "تصنيع التوريدات",
    titleEn: "Logistics & Supply Chain Uniforms Saudi Arabia",
    titleAr: "زي الخدمات اللوجستية وسلاسل التوريد في السعودية",
    descriptionEn: "Functional uniforms for supply chain and logistics professionals.",
    descriptionAr: "زي وظيفي لمهنيي سلاسل التوريد والخدمات اللوجستية.",
    heroImage: "/images/industries/supply-uniforms.jpg",
    icon: "🚚",
    color: "from-blue-500 to-indigo-600",
    products: [{ name: "Logistics Vest", nameAr: "سترة لوجستية", href: "/shop/industrial-uniforms/industrial-coverall" }],
    benefitsEn: [{ icon: "📦", title: "Functional Mobility", desc: "Designed for ease of movement in logistics roles." }],
    benefitsAr: [{ icon: "📦", title: "حركية وظيفية", desc: "مصمم لسهولة الحركة في الأدوار اللوجستية." }],
    featuresEn: ["High Visibility", "Durable", "Breathable"],
    featuresAr: ["رؤية عالية", "متين", "يسمح بمرور الهواء"],
    faqsEn: [],
    faqsAr: [],
    featuredProducts: []
  }
];

export const INDUSTRIES = industries.map(i => ({
  slug: i.id,
  nameEn: i.nameEn,
  nameAr: i.nameAr,
  descriptionEn: i.descriptionEn,
  descriptionAr: i.descriptionAr,
  icon: i.icon,
  color: i.color,
  products: i.products
}));

export function getIndustryBySlug(slug: string, locale: string = 'en') {
  const industry = industries.find(i => i.id === slug);
  if (!industry) return undefined;
  
  // Backward compatibility for legacy pages
  const legacyMatch = INDUSTRIES.find(i => i.slug === slug);
  if (legacyMatch && !locale) return legacyMatch;

  return localizeIndustry(industry, locale);
}

function localizeIndustry(industry: Industry, locale: string) {
  const isAr = locale === 'ar';
  return {
    id: industry.id,
    name: isAr ? industry.nameAr : industry.nameEn,
    title: isAr ? industry.titleAr : industry.titleEn,
    description: isAr ? industry.descriptionAr : industry.descriptionEn,
    heroImage: industry.heroImage,
    icon: industry.icon,
    benefits: isAr ? industry.benefitsAr : industry.benefitsEn,
    features: isAr ? industry.featuresAr : industry.featuresEn,
    faqs: isAr ? industry.faqsAr : industry.faqsEn,
    featuredProducts: industry.featuredProducts.map(p => ({
      id: p.id,
      name: isAr ? p.nameAr : p.nameEn,
      desc: isAr ? p.descAr : p.descEn,
      image: p.image,
      price: isAr ? p.priceAr : p.priceEn,
      href: isAr ? p.hrefAr : p.hrefEn
    })),
    href: isAr ? `/ar/industries/${industry.id}` : `/industries/${industry.id}`
  };
}