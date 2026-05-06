export interface Product {
  id: string;
  category: string;
  categoryNameEn: string;
  categoryNameAr: string;
  industry: string;
  nameEn: string;
  nameAr: string;
  shortDescriptionEn: string;
  shortDescriptionAr: string;
  descriptionEn: string;
  descriptionAr: string;
  longDescriptionEn?: string;
  longDescriptionAr?: string;
  featuresEn: string[];
  featuresAr: string[];
  images: { src: string; altEn: string; altAr: string }[];
  colors: { nameEn: string; nameAr: string; value: string; image?: string }[];
  sizes: string[];
  fabricDetails?: {
    compositionEn: string;
    compositionAr: string;
    gsm: string;
    featuresEn: string[];
    featuresAr: string[];
  };
  customizationOptionsEn: string[];
  customizationOptionsAr: string[];
  relatedProducts: string[];
  priceEn: string;
  priceAr: string;
  minOrder: number;
  href: string;
}

export const products: Product[] = [
  {
    id: "premium-scrubs-set",
    category: "medical-scrubs",
    categoryNameEn: "Medical Scrubs",
    categoryNameAr: "البدلات الطبية",
    industry: "healthcare",
    nameEn: "Premium Scrubs Set",
    nameAr: "طقم البدلة الطبية الممتازة",
    shortDescriptionEn: "High-performance medical scrubs for healthcare professionals",
    shortDescriptionAr: "بدلة طبية عالية الأداء للمتخصصين في الرعاية الصحية",
    descriptionEn: "High-performance medical scrubs designed for healthcare professionals who require comfort, durability, and a professional appearance.",
    descriptionAr: "بدلة طبية عالية الأداء مصممة للمتخصصين في الرعاية الصحية الذين يحتاجون إلى الراحة والمتانة والمظهر المهني.",
    featuresEn: [
      "Antimicrobial fabric treatment",
      "Moisture-wicking material",
      "Reinforced stitching",
      "Ergonomic design"
    ],
    featuresAr: [
      "معالجة مضادة للميكروبات",
      "مادة طاردة للرطوبة",
      "غرز معززة",
      "تصميم مريح"
    ],
    images: [
      { src: "/images/healthcare/scrubs-collections.jpg", altEn: "Premium Scrubs Set", altAr: "طقم البدلة الطبية الممتازة" }
    ],
    colors: [
      { nameEn: "Sky Blue", nameAr: "أزرق سماوي", value: "#3D85C6" },
      { nameEn: "Navy Blue", nameAr: "كحلي", value: "#0B2447" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    customizationOptionsEn: ["Hospital Logo Embroidery", "Name Embroidery"],
    customizationOptionsAr: ["تطريز شعار المستشفى", "تطريز الاسم"],
    relatedProducts: [],
    priceEn: "From SAR 249",
    priceAr: "من ريال 249",
    minOrder: 5,
    href: "/shop/medical-scrubs/premium-scrubs-set"
  },
  {
    id: "airline-crew-uniform",
    nameEn: "Airline Crew Uniform",
    nameAr: "زي طاقم الطيران",
    category: "aviation-uniforms",
    categoryNameEn: "Aviation Uniforms",
    categoryNameAr: "أزياء الطيران",
    industry: "aviation",
    shortDescriptionEn: "Professional airline crew uniforms",
    shortDescriptionAr: "زي طاقم الطيران المحترف",
    descriptionEn: "Professional airline crew uniforms with modern styling and comfort features.",
    descriptionAr: "زي طاقم الطيران المصمم خصيصًا يمزج بين الحداثة والراحة.",
    featuresEn: [
      "Wrinkle-resistant fabric",
      "Thermoregulating materials",
      "Cultural-appropriate designs",
      "Modest options"
    ],
    featuresAr: [
      "قماش مقاوم للتجاعيد",
      "مواد منظمة للحرارة",
      "تصاميم ملائمة ثقافيًا",
      "خيارات محتشمة"
    ],
    images: [
      { src: "/images/aviation/aviation_uniform_airline.jpg", altEn: "Airline crew uniforms", altAr: "زي طاقم الطيران" }
    ],
    colors: [
      { nameEn: "Royal Blue", nameAr: "أزرق ملكي", value: "#1e3799" },
      { nameEn: "Desert Sand", nameAr: "لون رملي صحراوي", value: "#c4a077" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    customizationOptionsEn: ["Airline logo embroidery", "Rank designations"],
    customizationOptionsAr: ["تطريز شعار شركة الطيران", "علامات الرتب"],
    relatedProducts: [],
    priceEn: "From SAR 599",
    priceAr: "من ريال 599",
    minOrder: 15,
    href: "/shop/aviation-uniforms/airline-crew-uniform"
  },
  {
    id: "luxury-hotel-uniform",
    nameEn: "Luxury Hotel Staff Uniform",
    nameAr: "زي موظفي الفنادق الفاخرة",
    category: "hospitality-attire",
    categoryNameEn: "Hospitality Uniforms",
    categoryNameAr: "أزياء الضيافة",
    industry: "hospitality",
    shortDescriptionEn: "Premium hospitality uniforms for luxury hotels",
    shortDescriptionAr: "أزياء ضيافة فاخرة للفنادق والمنتجعات",
    descriptionEn: "Elegant uniforms for front desk, concierge, and management.",
    descriptionAr: "أزياء أنيقة لموظفي الاستقبال والكونسيرج والإدارة.",
    featuresEn: [
      "Premium fabric blend",
      "Elegant design elements",
      "Tailored fit",
      "Durability for daily wear"
    ],
    featuresAr: [
      "مزيج قماش ممتاز",
      "عناصر تصميم أنيقة",
      "خياطة دقيقة",
      "متانة للاستخدام اليومي"
    ],
    images: [
      { src: "/images/hospitality/hospitality_uniform_concierge.jpg", altEn: "Luxury Hotel Uniform", altAr: "زي فندقي فاخر" }
    ],
    colors: [
      { nameEn: "Gold Accent", nameAr: "لمسة ذهبية", value: "#d4ac0d" },
      { nameEn: "Midnight Navy", nameAr: "كحلي داكن", value: "#000080" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    customizationOptionsEn: ["Hotel logo embroidery", "Name badges"],
    customizationOptionsAr: ["تطريز شعار الفندق", "بطاقات الأسماء"],
    relatedProducts: ["executive-chef-coat"],
    priceEn: "From SAR 449",
    priceAr: "من ريال 449",
    minOrder: 12,
    href: "/shop/hospitality-attire/luxury-hotel-uniform"
  },
  {
    id: "executive-suit",
    nameEn: "Executive Business Suit",
    nameAr: "بدلة أعمال تنفيذي",
    category: "corporate-workwear",
    categoryNameEn: "Corporate Workwear",
    categoryNameAr: "ملابس مؤسسية",
    industry: "corporate",
    shortDescriptionEn: "Premium business suits for executives",
    shortDescriptionAr: "بدلات أعمال فاخرة للتنفيذيين",
    descriptionEn: "High-quality business suits designed for corporate leadership.",
    descriptionAr: "بدلات أعمال عالية الجودة مصممة للقيادة المؤسسية والتميز المهني.",
    featuresEn: [
      "Tailored fit",
      "Premium wool blend",
      "Breathable lining",
      "Professional appearance"
    ],
    featuresAr: [
      "خياطة دقيقة",
      "مزيج صوف ممتاز",
      "بطانة تسمح بمرور الهواء",
      "مظهر احترافي"
    ],
    images: [
      { src: "/images/products/corporate-suit-executive.jpg", altEn: "Executive Business Suit", altAr: "بدلة أعمال تنفيذية" }
    ],
    colors: [
      { nameEn: "Charcoal Gray", nameAr: "رمادي فحمي", value: "#36454F" },
      { nameEn: "Midnight Blue", nameAr: "أزرق ليلي", value: "#191970" }
    ],
    sizes: ["46", "48", "50", "52", "54", "56", "58"],
    customizationOptionsEn: ["Monogramming", "Custom lining"],
    customizationOptionsAr: ["تطريز الأحرف الأولى", "بطانة مخصصة"],
    relatedProducts: [],
    priceEn: "From SAR 1,299",
    priceAr: "من ريال 1,299",
    minOrder: 5,
    href: "/shop/corporate-workwear/executive-suit"
  },
  {
    id: "industrial-coverall",
    nameEn: "Heavy-Duty Industrial Coverall",
    nameAr: "أفرول صناعي للأعمال الشاقة",
    category: "industrial-uniforms",
    categoryNameEn: "Industrial Uniforms",
    categoryNameAr: "أزياء صناعية",
    industry: "manufacturing",
    shortDescriptionEn: "Durable industrial coveralls",
    shortDescriptionAr: "أفرول صناعي متين للتصنيع والإنشاءات",
    descriptionEn: "Rugged industrial coveralls built to withstand harsh working conditions.",
    descriptionAr: "أفرول صناعي قوي مصمم لتحمل ظروف العمل القاسية.",
    featuresEn: [
      "Flame resistant",
      "Reinforced knees",
      "Multiple utility pockets",
      "Hi-vis strips"
    ],
    featuresAr: [
      "مقاوم للهب",
      "ركب معززة",
      "جيوب متعددة الأغراض",
      "شرائط عاكسة"
    ],
    images: [
      { src: "/images/products/fr-coverall.jpg", altEn: "Heavy-Duty Coverall", altAr: "أفرول شاق" }
    ],
    colors: [
      { nameEn: "Safety Orange", nameAr: "برتقالي للسلامة", value: "#FF5F1F" },
      { nameEn: "Workwear Blue", nameAr: "أزرق عمل", value: "#0047AB" }
    ],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL", "4XL"],
    customizationOptionsEn: ["Company logo print", "Name tag"],
    customizationOptionsAr: ["طباعة شعار الشركة", "بطاقة اسم"],
    relatedProducts: [],
    priceEn: "From SAR 189",
    priceAr: "من ريال 189",
    minOrder: 20,
    href: "/shop/industrial-uniforms/industrial-coverall"
  },
  {
    id: "security-officer-uniform",
    nameEn: "Professional Security Officer Uniform",
    nameAr: "زي ضابط الأمن الاحترافي",
    category: "security-uniforms",
    categoryNameEn: "Security Uniforms",
    categoryNameAr: "أزياء الأمن",
    industry: "security",
    shortDescriptionEn: "High-quality professional security uniform",
    shortDescriptionAr: "زي ضابط أمن احترافي عالي الجودة",
    descriptionEn: "Designed for durability, comfort, and a commanding professional appearance.",
    descriptionAr: "زي ضابط أمن مصمم للمتانة والراحة ومظهر احترافي آمر.",
    featuresEn: [
      "Durable polyester-cotton blend",
      "Moisture-wicking properties",
      "Multiple tactical pockets",
      "Reflective elements"
    ],
    featuresAr: [
      "نسيج مزيج من البوليستر والقطن",
      "خصائص امتصاص العرق",
      "جيوب تكتيكية متعددة",
      "عناصر عاكسة"
    ],
    images: [
      { src: "/images/security/security_guard.jpg", altEn: "Security Officer Uniform", altAr: "زي ضابط الأمن" }
    ],
    colors: [
      { nameEn: "Black", nameAr: "أسود", value: "#000000" },
      { nameEn: "Navy Blue", nameAr: "أزرق بحري", value: "#000080" }
    ],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL", "4XL"],
    customizationOptionsEn: ["Company logo embroidery", "Name badges"],
    customizationOptionsAr: ["تطريز شعار الشركة", "شارات الاسم"],
    relatedProducts: ["tactical-security-vest"],
    priceEn: "From SAR 329",
    priceAr: "من ريال 329",
    minOrder: 10,
    href: "/shop/security-uniforms/security-officer-uniform"
  },
  {
    id: "executive-chef-coat",
    nameEn: "Executive Chef Coat",
    nameAr: "جاكيت الشيف التنفيذي",
    category: "culinary-uniforms",
    categoryNameEn: "Culinary Uniforms",
    categoryNameAr: "أزياء الطهاة",
    industry: "hospitality",
    shortDescriptionEn: "Premium executive chef coat",
    shortDescriptionAr: "جاكيت الشيف التنفيذي الفاخر",
    descriptionEn: "Premium executive chef coat designed for leading hotels and restaurants.",
    descriptionAr: "جاكيت الشيف التنفيذي الفاخر المصمم لكبار الطهاة في المطاعم والفنادق.",
    featuresEn: [
      "Premium 100% Egyptian cotton",
      "Hidden snap closures",
      "Moisture-wicking technology",
      "Thermometer pocket"
    ],
    featuresAr: [
      "قطن مصري ممتاز 100%",
      "أزرار ضغط مخفية",
      "تقنية طرد الرطوبة",
      "جيب لمقياس الحرارة"
    ],
    images: [
      { src: "/images/hospitality/premium-chef-uniform.jpg", altEn: "Executive Chef Coat", altAr: "جاكيت الشيف التنفيذي" }
    ],
    colors: [
      { nameEn: "Classic White", nameAr: "أبيض كلاسيكي", value: "#FFFFFF" },
      { nameEn: "Black", nameAr: "أسود", value: "#000000" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"],
    customizationOptionsEn: ["Name embroidery", "Restaurant logo embroidery"],
    customizationOptionsAr: ["تطريز الاسم", "تطريز شعار المطعم"],
    relatedProducts: ["luxury-hotel-uniform"],
    priceEn: "From SAR 289",
    priceAr: "من ريال 289",
    minOrder: 5,
    href: "/shop/culinary-uniforms/executive-chef-coat"
  },
  {
    id: "premium-school-uniforms",
    nameEn: "Premium School Uniforms",
    nameAr: "زي مدرسي متميز",
    category: "education-uniforms",
    categoryNameEn: "Education Uniforms",
    categoryNameAr: "الزي المدرسي",
    industry: "education",
    shortDescriptionEn: "High-quality school uniforms",
    shortDescriptionAr: "زي مدرسي عالي الجودة",
    descriptionEn: "High-quality school uniforms designed for Saudi educational institutions.",
    descriptionAr: "زي مدرسي عالي الجودة مصمم للمؤسسات التعليمية السعودية.",
    featuresEn: [
      "Durable poly-cotton blend",
      "Stain and wrinkle-resistant",
      "Breathable and lightweight",
      "Cultural-appropriate design"
    ],
    featuresAr: [
      "مزيج بولي-قطن متين",
      "مقاوم للبقع والتجاعيد",
      "جيد التهوية وخفيف الوزن",
      "تصميم ملائم ثقافيًا"
    ],
    images: [
      { src: "/images/education/uniform_school_product-2.jpg", altEn: "Premium School Uniforms", altAr: "زي مدرسي متميز" }
    ],
    colors: [
      { nameEn: "Navy Blue", nameAr: "أزرق بحري", value: "#1a2942" },
      { nameEn: "White", nameAr: "أبيض", value: "#ffffff" }
    ],
    sizes: ["4-5", "6-7", "8-9", "10-11", "12-13", "14-15", "16-18"],
    customizationOptionsEn: ["School logo embroidery", "Name embroidery"],
    customizationOptionsAr: ["تطريز شعار المدرسة", "تطريز الاسم"],
    relatedProducts: [],
    priceEn: "From SAR 249",
    priceAr: "من ريال 249",
    minOrder: 50,
    href: "/shop/education-uniforms/premium-school-uniforms"
  },
  {
    id: "tactical-security-vest",
    nameEn: "Tactical Security Vest",
    nameAr: "سترة أمنية تكتيكية",
    category: "security-uniforms",
    categoryNameEn: "Security Uniforms",
    categoryNameAr: "أزياء الأمن",
    industry: "security",
    shortDescriptionEn: "Multi-pocket tactical vest for security personnel",
    shortDescriptionAr: "سترة تكتيكية متعددة الجيوب لرجال الأمن",
    descriptionEn: "Versatile tactical vest with multiple pockets and attachment points for equipment.",
    descriptionAr: "سترة تكتيكية متعددة الاستخدامات مع جيوب متعددة ونقاط ربط للمعدات.",
    featuresEn: [
      "Heavy-duty nylon construction",
      "Multiple equipment pockets",
      "Adjustable fit",
      "Reflective strips"
    ],
    featuresAr: [
      "هيكل نايلون شديد التحمل",
      "جيوب متعددة للمعدات",
      "مقاس قابل للتعديل",
      "شرائط عاكسة"
    ],
    images: [
      { src: "/images/products/security/tactical-vest.jpg", altEn: "Tactical Security Vest", altAr: "سترة أمنية تكتيكية" }
    ],
    colors: [
      { nameEn: "Black", nameAr: "أسود", value: "#000000" },
      { nameEn: "Olive Drab", nameAr: "زيتي", value: "#3b3c36" }
    ],
    sizes: ["S-M", "L-XL", "2XL-3XL"],
    customizationOptionsEn: ["Security patch print", "Company name embroidery"],
    customizationOptionsAr: ["طباعة شارة الأمن", "تطريز اسم الشركة"],
    relatedProducts: ["security-officer-uniform"],
    priceEn: "From SAR 179",
    priceAr: "من ريال 179",
    minOrder: 15,
    href: "/shop/security-uniforms/tactical-security-vest"
  },
  {
    id: "luxury-retail-collection",
    nameEn: "Luxury Retail Collection",
    nameAr: "مجموعة التجزئة الفاخرة",
    category: "retail-uniforms",
    categoryNameEn: "Retail Uniforms",
    categoryNameAr: "أزياء التجزئة",
    industry: "retail",
    shortDescriptionEn: "Premium uniforms for luxury retail staff",
    shortDescriptionAr: "أزياء متميزة لموظفي التجزئة الفاخرة",
    descriptionEn: "Sophisticated uniforms for high-end boutique and retail environments.",
    descriptionAr: "أزياء راقية لبيئات البوتيك والتجزئة الراقية.",
    featuresEn: [
      "Contemporary styling",
      "Premium stretch fabric",
      "Wrinkle-resistant",
      "Professional silhouette"
    ],
    featuresAr: [
      "تصميم معاصر",
      "قماش ستريتش ممتاز",
      "مقاوم للتجاعيد",
      "مظهر احترافي"
    ],
    images: [
      { src: "/images/products/retail/luxury-collection.jpg", altEn: "Luxury Retail Uniform", altAr: "زي تجزئة فاخر" }
    ],
    colors: [
      { nameEn: "Elegant Black", nameAr: "أسود أنيق", value: "#111111" },
      { nameEn: "Champagne", nameAr: "شامبين", value: "#f7e7ce" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    customizationOptionsEn: ["Brand embroidery", "Custom buttons"],
    customizationOptionsAr: ["تطريز العلامة التجارية", "أزرار مخصصة"],
    relatedProducts: [],
    priceEn: "From SAR 389",
    priceAr: "من ريال 389",
    minOrder: 10,
    href: "/shop/retail-uniforms/luxury-retail-collection"
  }
];

// Helper functions updated for localization
export function getProductById(id: string, locale: string = 'en') {
  const product = products.find(p => p.id === id);
  if (!product) return undefined;
  return localizeProduct(product, locale);
}

export function getProductsByCategory(category: string, locale: string = 'en') {
  return products
    .filter(p => p.category === category)
    .map(p => localizeProduct(p, locale));
}

export function getProductsByIndustry(industry: string, locale: string = 'en') {
  return products
    .filter(p => p.industry === industry)
    .map(p => localizeProduct(p, locale));
}

export function getAllProducts(locale: string = 'en') {
  return products.map(p => localizeProduct(p, locale));
}

function localizeProduct(product: Product, locale: string) {
  const isAr = locale === 'ar';
  return {
    id: product.id,
    category: product.category,
    categoryName: isAr ? product.categoryNameAr : product.categoryNameEn,
    industry: product.industry,
    name: isAr ? product.nameAr : product.nameEn,
    shortDescription: isAr ? product.shortDescriptionAr : product.shortDescriptionEn,
    description: isAr ? product.descriptionAr : product.descriptionEn,
    longDescription: isAr ? product.longDescriptionAr : product.longDescriptionEn,
    features: isAr ? product.featuresAr : product.featuresEn,
    images: product.images.map(img => ({
      src: img.src,
      alt: isAr ? img.altAr : img.altEn
    })),
    colors: product.colors.map(c => ({
      name: isAr ? c.nameAr : c.nameEn,
      value: c.value,
      image: c.image
    })),
    sizes: product.sizes,
    fabricDetails: product.fabricDetails ? {
      composition: isAr ? product.fabricDetails.compositionAr : product.fabricDetails.compositionEn,
      gsm: product.fabricDetails.gsm,
      features: isAr ? product.fabricDetails.featuresAr : product.fabricDetails.featuresEn
    } : undefined,
    customizationOptions: isAr ? product.customizationOptionsAr : product.customizationOptionsEn,
    relatedProducts: product.relatedProducts,
    price: isAr ? product.priceAr : product.priceEn,
    minOrder: product.minOrder,
    href: isAr ? `/ar/shop/${product.category}/${product.id}` : `/shop/${product.category}/${product.id}`
  };
}