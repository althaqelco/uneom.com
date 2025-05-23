// 'use client';

export const products = [
  // Retail Uniform Products
  {
    id: "related-product-1",
    category: "retail-uniforms",
    categoryName: "Retail Uniforms",
    industry: "retail",
    name: "Premium Retail Staff Polo",
    shortDescription: "High-quality polo shirts for luxury retail environments",
    description: "Our premium retail staff polo is designed for upscale retail environments in Saudi Arabia. Made with high-quality fabric blend that provides exceptional comfort during long shifts while maintaining a polished appearance. Each polo can be customized with your brand colors and logo placement, creating a cohesive staff look that enhances your brand identity and customer confidence.",
    features: [
      "Tailored fit with modern styling suitable for Saudi retail environments",
      "Luxury fabric blend (65% cotton, 35% polyester) for all-day comfort",
      "Wrinkle and stain-resistant for maintaining professional appearance",
      "Multiple customization options including embroidery and color matching",
      "Modest designs suitable for Saudi cultural requirements",
      "Available with coordinating accessories (name badges, scarves/ties)"
    ],
    images: [
      { src: "/images/industries/retail-shops/retail-shops-uniform-identity.jpg", alt: "Front view of retail staff polo" },
      { src: "/images/industries/retail-shops/retail-shops-uniform-shop.jpg", alt: "Retail staff wearing premium polo in store environment" },
      { src: "/images/industries/retail-shops/retail-shops-uniform-2.jpg", alt: "Detail of premium retail staff polo fabric" }
    ],
    colors: [
      { name: "Navy Blue", value: "#2c3e50", image: "/images/industries/retail-shops/retail-shops-uniform-identity.jpg" },
      { name: "Dark Blue", value: "#34495e", image: "/images/industries/retail-shops/retail-shops-uniform-identity-2.jpg" },
      { name: "Gray", value: "#7f8c8d", image: "/images/industries/retail-shops/retail-shops-uniform-identity-3.jpg" },
      { name: "Light Gray", value: "#ecf0f1", image: "/images/industries/retail-shops/retail-shops-uniform-identity-4.jpg" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    fabricDetails: {
      composition: "65% Cotton, 35% Polyester",
      gsm: "220",
      features: ["Wrinkle-resistant", "Stain-resistant", "Breathable"]
    },
    customizationOptions: [
      "Brand logo embroidery",
      "Custom collar and cuff designs",
      "Color matching to brand identity",
      "Name embroidery options",
      "Department color coding"
    ],
    relatedProducts: ["related-product-2", "related-product-3", "related-product-4"],
    price: "SAR 185",
    minOrder: 10,
    href: "/shop/retail-uniforms/related-product-1",
    
    // Arabic translation
    ar: {
      name: "بولو فاخر لموظفي المتاجر",
      shortDescription: "قمصان بولو عالية الجودة لبيئات البيع بالتجزئة الفاخرة",
      description: "تم تصميم بولو موظفي المتاجر الفاخرة لبيئات البيع بالتجزئة الراقية في المملكة العربية السعودية. مصنوعة من مزيج قماش عالي الجودة يوفر راحة استثنائية خلال المناوبات الطويلة مع الحفاظ على مظهر أنيق. يمكن تخصيص كل قميص بولو بألوان علامتك التجارية وموضع الشعار، مما يخلق مظهرًا متناسقًا للموظفين يعزز هوية علامتك التجارية وثقة العملاء.",
      features: [
        "قصة محكمة بتصميم عصري مناسب لبيئات البيع بالتجزئة السعودية",
        "مزيج قماش فاخر (65% قطن، 35% بوليستر) للراحة طوال اليوم",
        "مقاومة للتجاعيد وسهلة العناية للحفاظ على المظهر الاحترافي",
        "خيارات تخصيص متعددة تشمل التطريز ومطابقة الألوان",
        "تصاميم محتشمة مناسبة للمتطلبات الثقافية السعودية",
        "متوفرة مع إكسسوارات متناسقة (شارات الأسماء، الأوشحة/ربطات العنق)"
      ]
    },
    
    // Schema.org structured data
    schemaOrg: {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "UNEOM Premium Retail Staff Polo",
      "image": [
        "https://uneom.com/images/industries/retail-shops/retail-shops-uniform-identity.jpg",
        "https://uneom.com/images/industries/retail-shops/retail-shops-uniform-shop.jpg",
        "https://uneom.com/images/industries/retail-shops/retail-shops-uniform-2.jpg"
      ],
      "description": "Premium retail staff polo designed for upscale retail environments in Saudi Arabia, featuring luxury fabric blend and multiple customization options.",
      "sku": "UNEOM-RT-PRO-01",
      "brand": {
        "@type": "Brand",
        "name": "UNEOM"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://uneom.com/shop/retail-uniforms/related-product-1",
        "priceCurrency": "SAR",
        "price": "185",
        "priceValidUntil": "2025-12-31",
        "availability": "https://schema.org/InStock"
      }
    }
  },
  {
    id: "related-product-2",
    category: "retail-uniforms",
    categoryName: "Retail Uniforms",
    industry: "retail",
    name: "Luxury Retail Blazer Set",
    shortDescription: "Sophisticated blazer sets for high-end retail environments",
    description: "Elevate your brand with our luxury retail blazer set, designed specifically for upscale retail environments in Saudi Arabia. This professional ensemble combines exceptional elegance with superior comfort, reflecting your establishment's commitment to quality and professionalism. Carefully crafted to enhance employee confidence and customer impressions in high-end retail settings across Saudi Arabia.",
    features: [
      "Premium wool-blend fabric (80% premium polyester, 20% Australian wool) for elegant appearance and exceptional durability",
      "Advanced stain and wrinkle-resistant treatment maintains elegance throughout the workday and reduces maintenance costs",
      "Elegant details for brand identity enhancement (custom buttons, exclusive colors, distinctive pocket design)",
      "Modern cut with special attention to comfort preferences in Saudi Arabia",
      "Luxury breathable synthetic silk lining ideal for all-day wear in air-conditioned shopping environments"
    ],
    images: [
      { src: "/images/industries/retail-shops/retail-shops-uniform-brand.jpg", alt: "Front view of luxury retail blazer" },
      { src: "/images/industries/retail-shops/retail-shops-uniform-identity.jpg", alt: "Staff wearing luxury retail blazer" },
      { src: "/images/industries/retail-shops/retail-shops-uniform-identity-2.jpg", alt: "Detail of luxury blazer fabric and styling" }
    ],
    colors: [
      { name: "Navy Blue", value: "#2c3e50", image: "/images/industries/retail-shops/retail-shops-uniform-brand.jpg" },
      { name: "Dark Blue", value: "#34495e", image: "/images/industries/retail-shops/retail-shops-uniform-identity.jpg" },
      { name: "Black", value: "#000000", image: "/images/industries/retail-shops/retail-shops-uniform-identity-2.jpg" },
      { name: "Burgundy", value: "#7f0000", image: "/images/industries/retail-shops/retail-shops-uniform-identity-4.jpg" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "Custom Size"],
    fabricDetails: {
      composition: "80% Polyester, 20% Australian Wool",
      gsm: "280",
      features: ["Stain-resistant", "Wrinkle-resistant", "Breathable lining"]
    },
    customizationOptions: [
      "Brand logo integration in buttons and lining",
      "Custom color matching to brand palette",
      "Personalized internal labeling",
      "Department-specific styling options",
      "Complementary accessories design"
    ],
    relatedProducts: ["related-product-1", "related-product-3", "related-product-4"],
    price: "SAR 650",
    minOrder: 5,
    href: "/shop/retail-uniforms/related-product-2",
    
    // Arabic translation
    ar: {
      name: "طقم بليزر فاخر للبيع بالتجزئة",
      shortDescription: "أطقم بليزر أنيقة لبيئات البيع بالتجزئة الراقية",
      description: "ارتقِ بعلامتك التجارية مع مجموعة البليزر الفاخرة للبيع بالتجزئة، المصممة خصيصًا لبيئات البيع بالتجزئة الراقية في المملكة العربية السعودية. تجمع هذه المجموعة المهنية بين الأناقة الاستثنائية والراحة الفائقة، مما يعكس التزام مؤسستك بالجودة والاحترافية. تم تصميمها بعناية لتعزيز ثقة الموظفين وانطباعات العملاء في بيئات البيع بالتجزئة الفاخرة في جميع أنحاء المملكة العربية السعودية.",
      features: [
        "قماش فاخر من مزيج الصوف (80% بوليستر فاخر، 20% صوف أسترالي) لمظهر أنيق ومتانة استثنائية",
        "معالجة متقدمة مقاومة للبقع والتجاعيد تحافظ على الأناقة طوال يوم العمل وتقلل تكاليف الصيانة",
        "تفاصيل أنيقة لتعزيز هوية العلامة التجارية (أزرار مخصصة، ألوان حصرية، تصميم جيب مميز)",
        "قصة عصرية مع اهتمام خاص بتفضيلات الراحة في المملكة العربية السعودية",
        "بطانة حريرية صناعية فاخرة قابلة للتنفس مثالية للارتداء طوال اليوم في بيئات التسوق المكيفة"
      ]
    },
    
    // Schema.org structured data
    schemaOrg: {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "UNEOM Luxury Retail Blazer Set",
      "image": [
        "https://uneom.com/images/industries/retail-shops/retail-shops-uniform-brand.jpg",
        "https://uneom.com/images/industries/retail-shops/retail-shops-uniform-identity.jpg",
        "https://uneom.com/images/industries/retail-shops/retail-shops-uniform-identity-2.jpg"
      ],
      "description": "Luxury retail blazer set designed specifically for upscale retail environments in Saudi Arabia, combining exceptional elegance with superior comfort.",
      "sku": "UNEOM-RT-BLZ-01",
      "brand": {
        "@type": "Brand",
        "name": "UNEOM"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://uneom.com/shop/retail-uniforms/related-product-2",
        "priceCurrency": "SAR",
        "price": "650",
        "priceValidUntil": "2025-12-31",
        "availability": "https://schema.org/InStock"
      }
    }
  },
  {
    id: "related-product-3",
    category: "retail-uniforms",
    categoryName: "Retail Uniforms",
    industry: "retail",
    name: "Retail Department Store Set",
    shortDescription: "Practical uniform sets for multi-department retail stores",
    description: "Comprehensive and practical uniforms designed specifically for multi-department retail stores in the Saudi market. This set offers an ideal blend of professional elegance and everyday durability with cost-optimized solutions for organizations with large teams. The set features customization capabilities for different departments while maintaining visual brand consistency, providing employees with superior comfort during long shifts in active retail environments.",
    features: [
      "Durable comfortable fabric with ideal blend ratio (60% treated cotton, 40% high-performance polyester) for repeated use while maintaining elegant appearance",
      "Multi-layered design adaptable for seasonal suitability - base shirt and removable light vest/jacket",
      "Practical pockets designed for daily work needs with clear visibility for name badges and department symbols",
      "Wrinkle and stain-resistant finishes stay elegant throughout the day and reduce maintenance costs",
      "Gender-neutral design suitable for diverse teams with customization options for different departments (distinct color accents, department badges)"
    ],
    images: [
      { src: "/images/industries/retail-shops/retail-shops-uniform-brands-logo.jpg", alt: "Front view of department store uniform" },
      { src: "/images/industries/retail-shops/retail-shops-uniform-brands-logo-2.jpg", alt: "Department store uniform with branding" },
      { src: "/images/industries/retail-shops/retail-shops-uniform-shop.jpg", alt: "Staff wearing department store uniform" }
    ],
    colors: [
      { name: "Navy Blue", value: "#1d3f6e", image: "/images/industries/retail-shops/retail-shops-uniform-brands-logo.jpg" },
      { name: "Dark Gray", value: "#4a4a4a", image: "/images/industries/retail-shops/retail-shops-uniform-brands-logo-2.jpg" },
      { name: "Olive Green", value: "#556b2f", image: "/images/industries/retail-shops/retail-shops-uniform-shop.jpg" },
      { name: "Brown", value: "#654321", image: "/images/industries/retail-shops/retail-shops-uniform-shop-factory.jpg" }
    ],
    sizes: ["XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL", "Custom Sizes"],
    fabricDetails: {
      composition: "60% Treated Cotton, 40% High-Performance Polyester",
      gsm: "230",
      features: ["Wrinkle-resistant", "Stain-resistant", "Durable construction"]
    },
    customizationOptions: [
      "Department-specific color coding",
      "Role-based badge systems",
      "Seasonal variation options",
      "Modular component selection",
      "Departmental branding elements"
    ],
    relatedProducts: ["related-product-1", "related-product-2", "related-product-4"],
    price: "SAR 320",
    minOrder: 20,
    href: "/shop/retail-uniforms/related-product-3",
    
    // Arabic translation
    ar: {
      name: "طقم متجر متعدد الأقسام",
      shortDescription: "أطقم زي عملية لمتاجر البيع بالتجزئة متعددة الأقسام",
      description: "أزياء شاملة وعملية مصممة خصيصًا لمتاجر البيع بالتجزئة متعددة الأقسام في السوق السعودي. يوفر هذا الطقم مزيجًا مثاليًا من الأناقة المهنية والمتانة اليومية مع حلول مُحسّنة التكلفة للمؤسسات ذات الفرق الكبيرة. يتميز الطقم بقدرات تخصيص للأقسام المختلفة مع الحفاظ على اتساق العلامة التجارية المرئية، مما يوفر للموظفين راحة فائقة خلال المناوبات الطويلة في بيئات البيع بالتجزئة النشطة.",
      features: [
        "قماش مريح ومتين بنسبة مزج مثالية (60% قطن معالج، 40% بوليستر عالي الأداء) للاستخدام المتكرر مع الحفاظ على المظهر الأنيق",
        "تصميم متعدد الطبقات قابل للتكيف مع الملاءمة الموسمية - قميص أساسي وسترة/جاكيت خفيف قابل للإزالة",
        "جيوب عملية مصممة لاحتياجات العمل اليومية مع وضوح شارات الأسماء ورموز الأقسام",
        "تشطيبات مقاومة للتجاعيد والبقع تبقى أنيقة طوال اليوم وتقلل تكاليف الصيانة",
        "تصميم محايد للجنسين مناسب للفرق المتنوعة مع خيارات تخصيص للأقسام المختلفة (لمسات لونية مميزة، شارات الأقسام)"
      ]
    },
    
    // Schema.org structured data
    schemaOrg: {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "UNEOM Retail Department Store Set",
      "image": [
        "https://uneom.com/images/industries/retail-shops/retail-shops-uniform-brands-logo.jpg",
        "https://uneom.com/images/industries/retail-shops/retail-shops-uniform-brands-logo-2.jpg",
        "https://uneom.com/images/industries/retail-shops/retail-shops-uniform-shop.jpg"
      ],
      "description": "Practical uniform sets for multi-department retail stores in Saudi Arabia, offering professional elegance and everyday durability with customization options.",
      "sku": "UNEOM-RT-DEP-01",
      "brand": {
        "@type": "Brand",
        "name": "UNEOM"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://uneom.com/shop/retail-uniforms/related-product-3",
        "priceCurrency": "SAR",
        "price": "320",
        "priceValidUntil": "2025-12-31",
        "availability": "https://schema.org/InStock"
      }
    }
  },
  {
    id: "related-product-4",
    category: "retail-uniforms",
    categoryName: "Retail Uniforms",
    industry: "retail",
    name: "Casual Retail Team Uniform",
    shortDescription: "Contemporary casual uniforms for modern retail brands",
    description: "Contemporary and casual uniforms designed specifically to meet the needs of modern retail stores in Saudi Arabia. This attire provides an ideal blend of modern elegance and practical comfort, enhancing the shopping experience by creating a friendly, contemporary environment. Perfect for youth-oriented brands, technology stores, and entertainment retailers targeting young customers in Saudi Arabia's evolving market.",
    features: [
      "Ultra-soft cotton fabric (95% organic cotton, 5% elastane) providing exceptional flexibility and comfort throughout work periods",
      "Contemporary design with updated cuts suitable for modern Saudi taste while maintaining appropriate modesty",
      "Vibrant colors with advanced dyeing technology resistant to fading even after repeated washing",
      "Special anti-odor and antibacterial treatment suitable for long hours in active commercial environments",
      "Seasonal adaptability (interchangeable units - polo shirts, t-shirts, long-sleeve shirts)"
    ],
    images: [
      { src: "/images/industries/retail-shops/retail-shops-uniform-casual.jpg", alt: "Front view of casual retail uniform" },
      { src: "/images/industries/retail-shops/retail-shops-uniform-shop-industery.jpg", alt: "Staff wearing casual retail uniform" },
      { src: "/images/industries/retail-shops/retail-shops-uniform-identity-2.jpg", alt: "Casual uniform with modern styling" }
    ],
    colors: [
      { name: "Turquoise", value: "#2ac3e2", image: "/images/industries/retail-shops/retail-shops-uniform-casual.jpg" },
      { name: "Gray", value: "#7f8c8d", image: "/images/industries/retail-shops/retail-shops-uniform-shop-industery.jpg" },
      { name: "Olive Green", value: "#60714F", image: "/images/industries/retail-shops/retail-shops-uniform-identity-2.jpg" },
      { name: "Orange", value: "#e67e22", image: "/images/industries/retail-shops/retail-shops-uniform-identity-3.jpg" },
      { name: "Purple", value: "#8e44ad", image: "/images/industries/retail-shops/retail-shops-uniform-identity-3.jpg" },
      { name: "Amber", value: "#f39c12", image: "/images/industries/retail-shops/retail-shops-uniform-identity-3.jpg" }
    ],
    sizes: ["XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL", "Inclusive Body Types"],
    fabricDetails: {
      composition: "95% Organic Cotton, 5% Elastane",
      gsm: "180",
      features: ["Anti-bacterial", "Anti-odor", "Fade-resistant", "Stretch comfort"]
    },
    customizationOptions: [
      "Contemporary logo application techniques",
      "Seasonal variation programs",
      "Department-specific accent colors",
      "Technology pocket integration options",
      "Sustainable material upgrade options"
    ],
    relatedProducts: ["related-product-1", "related-product-2", "related-product-3"],
    price: "SAR 150",
    minOrder: 15,
    href: "/shop/retail-uniforms/related-product-4",
    
    // Arabic translation
    ar: {
      name: "زي فريق التجزئة غير الرسمي",
      shortDescription: "أزياء عصرية غير رسمية للعلامات التجارية الحديثة للبيع بالتجزئة",
      description: "أزياء عصرية وغير رسمية مصممة خصيصًا لتلبية احتياجات متاجر البيع بالتجزئة الحديثة في المملكة العربية السعودية. توفر هذه الملابس مزيجًا مثاليًا من الأناقة العصرية والراحة العملية، مما يعزز تجربة التسوق من خلال خلق بيئة ودية ومعاصرة. مثالية للعلامات التجارية الموجهة للشباب، ومتاجر التكنولوجيا، وتجار التجزئة للترفيه الذين يستهدفون العملاء الشباب في سوق المملكة العربية السعودية المتطور.",
      features: [
        "قماش قطني فائق النعومة (95% قطن عضوي، 5% إيلاستين) يوفر مرونة استثنائية وراحة طوال فترات العمل",
        "تصميم معاصر بقصات محدثة مناسبة للذوق السعودي الحديث مع الحفاظ على الحشمة المناسبة",
        "ألوان نابضة بالحياة مع تقنية صباغة متقدمة مقاومة للبهتان حتى بعد الغسيل المتكرر",
        "معالجة خاصة مضادة للروائح والبكتيريا مناسبة لساعات طويلة في البيئات التجارية النشطة",
        "قابلية التكيف الموسمي (وحدات قابلة للتبديل - قمصان بولو، تي شيرت، قمصان بأكمام طويلة)"
      ]
    },
    
    // Schema.org structured data
    schemaOrg: {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "UNEOM Casual Retail Team Uniform",
      "image": [
        "https://uneom.com/images/industries/retail-shops/retail-shops-uniform-casual.jpg",
        "https://uneom.com/images/industries/retail-shops/retail-shops-uniform-shop-industery.jpg",
        "https://uneom.com/images/industries/retail-shops/retail-shops-uniform-identity-2.jpg"
      ],
      "description": "Contemporary casual uniforms for modern retail brands in Saudi Arabia, providing modern elegance and practical comfort for youth-oriented stores.",
      "sku": "UNEOM-RT-CSL-01",
      "brand": {
        "@type": "Brand",
        "name": "UNEOM"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://uneom.com/shop/retail-uniforms/related-product-4",
        "priceCurrency": "SAR",
        "price": "150",
        "priceValidUntil": "2025-12-31",
        "availability": "https://schema.org/InStock"
      }
    }
  },
  
  // Original products continue below
  {
    id: "premium-scrubs",
    category: "medical-scrubs",
    categoryName: "Medical Scrubs",
    industry: "healthcare",
    name: "Premium Medical Scrubs",
    shortDescription: "Professional-grade scrubs with antimicrobial properties",
    description: "Our premium medical scrubs are designed specifically for healthcare professionals in Saudi Arabia. Made with antimicrobial fabric that helps reduce the risk of infection, these scrubs offer superior comfort during long shifts and durability through industrial washing. Available in a range of colors suitable for different departments.",
    features: [
      "Antimicrobial fabric technology",
      "Fluid-resistant finish",
      "Wrinkle-resistant material",
      "Multiple pockets for medical tools",
      "Modest design options for Saudi healthcare environments",
      "Hijab-friendly options available"
    ],
    images: [
      { src: "/images/products/scrubs/premium-1.jpg", alt: "Front view of premium scrubs" },
      { src: "/images/products/scrubs/premium-2.jpg", alt: "Back view of premium scrubs" },
      { src: "/images/products/scrubs/premium-3.jpg", alt: "Side view with pockets" }
    ],
    colors: [
      { name: "Hospital Blue", value: "#1a5276", image: "/images/products/scrubs/premium-blue.jpg" },
      { name: "Surgical Green", value: "#117a65", image: "/images/products/scrubs/premium-green.jpg" },
      { name: "Medical Maroon", value: "#922b21", image: "/images/products/scrubs/premium-maroon.jpg" },
      { name: "Professional Navy", value: "#1f3a63", image: "/images/products/scrubs/premium-navy.jpg" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    fabricDetails: {
      composition: "65% Polyester, 35% Cotton",
      gsm: "180",
      features: ["Antimicrobial", "Fluid-resistant", "Easy-care"]
    },
    customizationOptions: [
      "Hospital logo embroidery",
      "Department color coding",
      "Name embroidery",
      "Modest fit adjustments",
      "Hijab matching options"
    ],
    relatedProducts: ["emergency-scrubs", "surgeon-gowns", "nursing-scrubs"],
    price: "SAR 249",
    minOrder: 20,
    href: "/shop/medical-scrubs/premium-scrubs"
  },
  {
    id: "airline-crew-uniform",
    category: "aviation-uniforms",
    categoryName: "Aviation Uniforms",
    industry: "aviation",
    name: "Airline Crew Uniform",
    shortDescription: "Sophisticated airline uniforms blending Saudi heritage with international standards",
    description: "Our airline crew uniforms are designed to represent the best of Saudi hospitality while meeting international aviation standards. These uniforms blend traditional Saudi design elements with contemporary styling, creating a distinctive look that represents your airline's brand and Saudi cultural identity.",
    features: [
      "Wrinkle-resistant fabric for long-haul flights",
      "Temperature-regulating materials",
      "Culturally appropriate designs for Saudi airlines",
      "Modest options for female crew members",
      "Matching accessories available",
      "Customizable with airline branding"
    ],
    images: [
      { src: "/images/aviation/aviation_uniform_airline_main_image.jpg", alt: "Female and male airline crew uniforms" },
      { src: "/images/aviation/aviation_uniform_airline.jpg", alt: "Female crew uniform with Saudi design elements" },
      { src: "/images/aviation/aviation_uniform_flightـattendants.jpg", alt: "Male crew uniform details" }
    ],
    colors: [
      { name: "Royal Blue", value: "#1e3799", image: "/images/products/aviation/airline-blue.jpg" },
      { name: "Desert Sand", value: "#c4a077", image: "/images/products/aviation/airline-sand.jpg" },
      { name: "Corporate Navy", value: "#0c2461", image: "/images/products/aviation/airline-navy.jpg" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    fabricDetails: {
      composition: "80% Polyester, 18% Wool, 2% Elastane",
      gsm: "220",
      features: ["Wrinkle-resistant", "Stretch comfort", "Professional finish"]
    },
    customizationOptions: [
      "Airline logo embroidery",
      "Custom buttons with airline branding",
      "Rank designations",
      "Optional Saudi-inspired accessories",
      "Headscarf designs for female crew"
    ],
    relatedProducts: ["pilot-uniform", "ground-crew-uniform", "airport-security-uniform"],
    price: "SAR 599",
    minOrder: 15,
    href: "/shop/aviation-uniforms/airline-crew-uniform"
  },
  {
    id: "luxury-hotel-staff-uniform",
    category: "hospitality-attire",
    categoryName: "Hospitality Attire",
    industry: "hospitality",
    name: "Luxury Hotel Staff Uniform",
    shortDescription: "Elegant uniforms for luxury Saudi hospitality sector",
    description: "Our luxury hotel uniforms are designed for Saudi Arabia's growing premium hospitality industry. These sophisticated uniforms reflect the luxury standards of 5-star hotels while incorporating elements of Saudi heritage. Comfortable enough for long shifts while maintaining an impeccable appearance.",
    features: [
      "Premium fabrics with elegant drape",
      "Stain-resistant technology for front-of-house roles",
      "Breathable materials for Saudi climate",
      "Cultural design elements that appeal to international guests",
      "Coordinated designs across all hotel departments"
    ],
    images: [
      { src: "/images/products/hospitality/hotel-1.jpg", alt: "Front desk staff uniforms" },
      { src: "/images/products/hospitality/hotel-2.jpg", alt: "Concierge uniform" },
      { src: "/images/products/hospitality/hotel-3.jpg", alt: "Female hospitality staff uniform" }
    ],
    colors: [
      { name: "Gold Accent", value: "#d4ac0d", image: "/images/products/hospitality/hotel-gold.jpg" },
      { name: "Rich Burgundy", value: "#7b241c", image: "/images/products/hospitality/hotel-burgundy.jpg" },
      { name: "Royal Black", value: "#1c2833", image: "/images/products/hospitality/hotel-black.jpg" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    fabricDetails: {
      composition: "75% Polyester, 23% Viscose, 2% Elastane",
      gsm: "200",
      features: ["Stain-resistant", "Easy-care", "Premium feel"]
    },
    customizationOptions: [
      "Hotel logo integration",
      "Custom buttons and accents",
      "Saudi-inspired decorative elements",
      "Department color coding",
      "Modest designs for female staff"
    ],
    relatedProducts: ["hotel-front-desk", "restaurant-staff", "concierge-uniform"],
    price: "SAR 499",
    minOrder: 10,
    href: "/shop/hospitality-attire/luxury-hotel-staff-uniform"
  },
  {
    id: "industrial-coverall",
    category: "industrial-uniforms",
    categoryName: "Industrial Uniforms",
    industry: "manufacturing",
    name: "Industrial Coverall",
    shortDescription: "Durable coveralls for manufacturing and industrial settings",
    description: "Our industrial coveralls are engineered for Saudi Arabia's manufacturing sector, with heat-resistant and flame-retardant properties suitable for factories and industrial facilities. Designed with the Saudi climate in mind, they feature breathable panels while maintaining safety standards.",
    features: [
      "Flame-resistant fabric options",
      "Reinforced stitching at stress points",
      "Multiple tool pockets and D-rings",
      "Reflective safety strips",
      "Breathable vents for Saudi climate",
      "Available in standard and Islamic-compliant designs"
    ],
    images: [
      { src: "/images/products/industrial/coverall-1.jpg", alt: "Industrial coverall front view" },
      { src: "/images/products/industrial/coverall-2.jpg", alt: "Coverall with safety features highlighted" },
      { src: "/images/products/industrial/coverall-3.jpg", alt: "Back view with reflective strips" }
    ],
    colors: [
      { name: "Safety Orange", value: "#e67e22", image: "/images/products/industrial/coverall-orange.jpg" },
      { name: "Industrial Navy", value: "#21618c", image: "/images/products/industrial/coverall-navy.jpg" },
      { name: "Khaki", value: "#b7950b", image: "/images/products/industrial/coverall-khaki.jpg" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL", "3XL", "4XL"],
    fabricDetails: {
      composition: "100% Cotton (FR treated version available)",
      gsm: "260",
      features: ["Flame-resistant options", "Oil-repellent", "High durability"]
    },
    customizationOptions: [
      "Company logo application",
      "Department color-coding",
      "Name and position patches",
      "Additional safety features",
      "RFID tag pockets for facility access"
    ],
    relatedProducts: ["safety-coverall", "hi-vis-workwear", "flame-resistant-uniform"],
    price: "SAR 349",
    minOrder: 25,
    href: "/shop/industrial-uniforms/industrial-coverall"
  },
  {
    id: "executive-suit",
    category: "corporate-workwear",
    categoryName: "Corporate Workwear",
    industry: "corporate",
    name: "Executive Suit",
    shortDescription: "Professional tailored suits for Saudi corporate environments",
    description: "Our executive suits are tailored specifically for Saudi business leaders and corporate professionals. These premium suits combine international business styling with considerations for Saudi business etiquette and climate, ensuring comfort in air-conditioned offices while maintaining an authoritative presence.",
    features: [
      "Premium wool blend with breathable properties",
      "Tailored fit with attention to Saudi modest standards",
      "Wrinkle-resistant for day-long meetings",
      "Available in traditional and contemporary cuts",
      "Coordinating accessories available"
    ],
    images: [
      { src: "/images/products/corporate/executive-1.jpg", alt: "Male executive suit" },
      { src: "/images/products/corporate/executive-2.jpg", alt: "Female executive suit" },
      { src: "/images/products/corporate/executive-3.jpg", alt: "Suit details and fabric" }
    ],
    colors: [
      { name: "Charcoal Grey", value: "#515a5a", image: "/images/products/corporate/suit-grey.jpg" },
      { name: "Navy Blue", value: "#1f3a63", image: "/images/products/corporate/suit-navy.jpg" },
      { name: "Black", value: "#17202a", image: "/images/products/corporate/suit-black.jpg" }
    ],
    sizes: ["46", "48", "50", "52", "54", "56", "58", "60"],
    fabricDetails: {
      composition: "70% Wool, 28% Polyester, 2% Elastane",
      gsm: "240",
      features: ["Wrinkle-resistant", "Breathable", "Year-round weight"]
    },
    customizationOptions: [
      "Corporate brand color lining",
      "Subtle logo embroidery options",
      "Custom buttons with company branding",
      "Personalized fit adjustments",
      "Coordinated team styling"
    ],
    relatedProducts: ["business-attire", "office-uniform", "executive-wear"],
    price: "SAR 1,299",
    minOrder: 5,
    href: "/shop/corporate-workwear/executive-suit"
  },
  {
    id: "ground-crew-uniform",
    category: "aviation-uniforms",
    categoryName: "Aviation Uniforms",
    industry: "aviation",
    name: "Ground Staff Uniforms",
    shortDescription: "Practical and professional attire for airport ground personnel in Saudi aviation",
    description: "Our ground staff uniforms blend professionalism with practicality, designed specifically for the diverse roles within Saudi Arabian airports. From check-in counter staff to baggage handlers, these uniforms provide durability, comfort, and a polished appearance while representing your airline's brand identity on the ground.",
    features: [
      "Durable fabrics for high-traffic environments",
      "Practical pocket placement for essential tools and documents",
      "Weather-adaptable designs for indoor/outdoor roles",
      "Moisture-wicking properties for comfort in Saudi climate",
      "High-visibility options for ramp and tarmac roles", 
      "Culturally appropriate designs for Saudi airports"
    ],
    images: [
      { src: "/images/aviation/aviation_uniform_airline.jpg", alt: "Ground staff uniform for Saudi airports" },
      { src: "/images/products/aviation/ground-1.jpg", alt: "Ground crew uniform details" },
      { src: "/images/products/aviation/ground-2.jpg", alt: "Ground crew uniform in use" }
    ],
    colors: [
      { name: "Navy Blue", value: "#0c2461", image: "/images/products/aviation/ground-navy.jpg" },
      { name: "Charcoal Grey", value: "#2c3e50", image: "/images/products/aviation/ground-grey.jpg" },
      { name: "Corporate Black", value: "#1e272e", image: "/images/products/aviation/ground-black.jpg" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    fabricDetails: {
      composition: "65% Polyester, 35% Cotton",
      gsm: "240",
      features: ["Stain-resistant", "High durability", "Easy-care"]
    },
    customizationOptions: [
      "Airline logo application",
      "Department color-coding",
      "Role identification badges",
      "Name embroidery",
      "High-visibility stripes for ground operations"
    ],
    relatedProducts: ["airline-crew-uniform", "pilot-uniform-set", "airport-security-uniform"],
    price: "SAR 299",
    minOrder: 20,
    href: "/shop/aviation-uniforms/ground-crew-uniform"
  },
  {
    id: "pilot-uniform-set",
    category: "aviation-uniforms",
    categoryName: "Aviation Uniforms",
    industry: "aviation",
    name: "Professional Pilot Uniform Set",
    shortDescription: "Complete pilot uniform sets designed for Saudi airline captains and officers",
    description: "Our premium pilot uniforms are designed to convey the professionalism and authority expected of commercial airline pilots while offering exceptional comfort during long flights. These complete uniform sets include shirts, trousers, jackets, and accessories, all crafted to meet international aviation standards while incorporating subtle Saudi design elements.",
    features: [
      "Premium wool-blend fabrics for professional appearance",
      "Wrinkle-resistant materials for long-haul flights",
      "Traditional and contemporary design options",
      "Four-season weight options suitable for different routes",
      "Epaulette and wing badge options for all ranks",
      "Optional Saudi cultural elements in design details"
    ],
    images: [
      { src: "/images/aviation/aviation_captin_uniform.jpg", alt: "Professional pilot uniform for Saudi airlines" },
      { src: "/images/products/aviation/pilot-1.jpg", alt: "Pilot uniform jacket details" },
      { src: "/images/products/aviation/pilot-2.jpg", alt: "Complete pilot uniform set" }
    ],
    colors: [
      { name: "Pilot Black", value: "#0a0a0a", image: "/images/products/aviation/pilot-black.jpg" },
      { name: "Dark Navy", value: "#0c2461", image: "/images/products/aviation/pilot-navy.jpg" }
    ],
    sizes: ["46", "48", "50", "52", "54", "56", "58", "60", "62"],
    fabricDetails: {
      composition: "55% Wool, 45% Polyester",
      gsm: "260",
      features: ["Wrinkle-resistant", "Breathable", "Professional finish"]
    },
    customizationOptions: [
      "Airline logo embroidery",
      "Rank stripe customization",
      "Name plate options",
      "Saudi wing badge variations",
      "Optional Arabic calligraphy details"
    ],
    relatedProducts: ["airline-crew-uniform", "ground-crew-uniform", "pilot-accessories"],
    price: "SAR 1,799",
    minOrder: 5,
    href: "/shop/aviation-uniforms/pilot-uniform-set"
  },
  {
    id: "executive-protection",
    category: "security-uniforms",
    categoryName: "Security Uniforms",
    industry: "security",
    name: "Executive Protection Uniform",
    shortDescription: "High-performance, discrete protection uniforms for VIP security personnel",
    description: "Our executive protection uniforms are specifically designed for security professionals working in high-profile VIP protection roles throughout Saudi Arabia. These garments balance a professional appearance with tactical functionality, offering discrete armor compatibility and enhanced mobility. Ideal for security details at royal events, diplomatic missions, executive protection, and high-profile facilities requiring an elevated security presence.",
    features: [
      "Covert armor compatibility for ballistic protection",
      "Tear and abrasion resistant fabrics with stretch properties",
      "Moisture-wicking technology for Saudi climate comfort",
      "Enhanced mobility design with action pleats",
      "Discrete tactical pocket system for essential security tools",
      "Professional appearance that blends into executive environments",
      "Available in traditional and modern Saudi-appropriate styles"
    ],
    images: [
      { src: "/images/security/advanced-fabrics-hero.jpg", alt: "Executive protection uniform for professional security personnel" },
      { src: "/images/security/smart-fabric-technology.jpg", alt: "Advanced fabric technology in executive protection suits" },
      { src: "/images/security/stab-resistant-fabric.jpg", alt: "Protective features of executive security uniforms" },
      { src: "/images/security/saudi-events-security.jpg", alt: "Executive protection staff at Saudi formal events" }
    ],
    colors: [
      { name: "Tactical Black", value: "#1a1a1a", image: "/images/security/advanced-fabrics-hero.jpg" },
      { name: "Executive Navy", value: "#1f2937", image: "/images/security/saudi-events-security.jpg" },
      { name: "Professional Charcoal", value: "#374151", image: "/images/security/smart-fabric-technology.jpg" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL", "3XL", "Custom"],
    fabricDetails: {
      composition: "65% Polyester, 30% Cotton, 5% Elastane",
      gsm: "240",
      features: ["Tear-resistant", "Stab-resistant options", "Moisture-wicking", "4-way stretch"]
    },
    customizationOptions: [
      "Covert armor integration",
      "Communications equipment compatibility",
      "Team identification systems",
      "Company/event-specific branding",
      "Modular component system",
      "Saudi-specific cultural adaptations"
    ],
    relatedProducts: ["security-supervisor", "event-security", "hotel-security-uniform"],
    price: "SAR 899",
    minOrder: 10,
    href: "/shop/security-uniforms/executive-protection"
  },
  {
    id: "flame-resistant-workwear",
    category: "industrial-uniforms",
    categoryName: "Industrial Uniforms",
    industry: "factory-industry",
    name: "Flame-Resistant Workwear Set",
    shortDescription: "Specialized FR-certified workwear for high-risk industrial environments",
    description: "Our flame-resistant workwear sets are specifically engineered for high-risk environments in Saudi Arabia's petrochemical plants and high-temperature manufacturing facilities. These FR-certified uniforms provide maximum protection against flash fire and arc flash hazards while maintaining comfort in Saudi Arabia's challenging climate conditions.",
    features: [
      "Certified to NFPA 2112 and NFPA 70E standards",
      "Proprietary DuraShield™ FR technology maintains protection after repeated industrial washing",
      "Strategic ventilation zones for heat management in Saudi climate",
      "Enhanced mobility design for unrestricted movement",
      "Inherently flame-resistant fabric that never washes out",
      "Multiple tool pockets and specialized attachment points"
    ],
    images: [
      { src: "/images/industries/Factory_Industrial/Factory_Industrial_Workwear_product_2.webp", alt: "Flame-resistant workwear set for petrochemical industries" },
      { src: "/images/products/industrial/fr-workwear-1.jpg", alt: "FR workwear details showing safety features" },
      { src: "/images/products/industrial/fr-workwear-2.jpg", alt: "Close-up of flame-resistant fabric" }
    ],
    colors: [
      { name: "Safety Navy", value: "#1a365d", image: "/images/products/industrial/fr-navy.jpg" },
      { name: "Khaki", value: "#d6c7a1", image: "/images/products/industrial/fr-khaki.jpg" },
      { name: "Royal Blue", value: "#2563eb", image: "/images/products/industrial/fr-blue.jpg" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL", "3XL", "4XL"],
    fabricDetails: {
      composition: "88% Cotton, 12% High-Tenacity Nylon (Inherent FR)",
      gsm: "280",
      features: ["ATPV 8.7 cal/cm²", "HRC Class 2", "Inherently flame-resistant", "Chemical splash resistant"]
    },
    customizationOptions: [
      "Company logo FR application",
      "Department color-coding systems",
      "Reflective tape placement options",
      "Name and position badges",
      "Additional specialized pocket configurations"
    ],
    relatedProducts: ["industrial-coverall", "hi-vis-safety-uniform", "industrial-coverall-pro"],
    price: "SAR 499",
    minOrder: 25,
    href: "/shop/industrial-uniforms/flame-resistant-workwear"
  },
  {
    id: "hi-vis-safety-uniform",
    category: "industrial-uniforms",
    categoryName: "Industrial Uniforms",
    industry: "factory-industry",
    name: "High-Visibility Safety Uniform",
    shortDescription: "Enhanced visibility workwear for low-light industrial environments",
    description: "Our high-visibility safety uniforms are engineered for maximum visibility in low-light industrial environments throughout Saudi Arabia. Featuring Class 3 reflective elements and durable moisture-wicking fabrics, these uniforms provide essential visibility while addressing the challenges of Saudi Arabia's climate to ensure all-day comfort and protection.",
    features: [
      "Complies with ISO 20471 Class 3 high-visibility standards",
      "360-degree reflective tape pattern for maximum visibility",
      "Breathable, moisture-wicking fabric optimized for Saudi climate",
      "Durable construction with reinforced stress points",
      "UV-resistant fluorescent material maintains visibility performance",
      "Multiple secure storage pockets for tools and equipment"
    ],
    images: [
      { src: "/images/industries/Factory_Industrial/Factory_Industrial_Workwear_product_3.webp", alt: "High-visibility safety uniform with reflective elements" },
      { src: "/images/products/industrial/hi-vis-1.jpg", alt: "Night visibility demonstration of reflective elements" },
      { src: "/images/products/industrial/hi-vis-2.jpg", alt: "High-visibility uniform in use in industrial setting" }
    ],
    colors: [
      { name: "Safety Yellow", value: "#f59e0b", image: "/images/products/industrial/hi-vis-yellow.jpg" },
      { name: "Safety Orange", value: "#ea580c", image: "/images/products/industrial/hi-vis-orange.jpg" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL", "3XL", "4XL"],
    fabricDetails: {
      composition: "100% Polyester (outer shell), Cotton blend lining",
      gsm: "240",
      features: ["High-visibility fluorescent", "Moisture-wicking", "Breathable", "UV-resistant"]
    },
    customizationOptions: [
      "Company logo application in reflective or standard materials",
      "Additional reflective tape placement",
      "ID card holder integration",
      "Radio/tool clip attachments",
      "Department identification panels"
    ],
    relatedProducts: ["industrial-coverall", "flame-resistant-workwear", "industrial-coverall-pro"],
    price: "SAR 399",
    minOrder: 25,
    href: "/shop/industrial-uniforms/hi-vis-safety-uniform"
  },
  {
    id: "industrial-coverall-pro",
    category: "industrial-uniforms",
    categoryName: "Industrial Uniforms",
    industry: "factory-industry",
    name: "Industrial Coverall Pro with Cooling Technology",
    shortDescription: "Next-generation coverall with integrated cooling for extreme temperature environments",
    description: "Our Industrial Coverall Pro represents the pinnacle of workwear innovation for Saudi Arabia's extreme temperature industrial environments. Featuring advanced cooling technology, these coveralls combine superior protection with climate-specific design elements to maximize comfort and productivity in the Kingdom's most challenging work settings.",
    features: [
      "Integrated ClimaTech™ cooling zones activated by body heat and moisture",
      "Antimicrobial treatment prevents odor in high-temperature conditions",
      "Enhanced abrasion resistance for demanding industrial environments",
      "Strategic mesh ventilation panels mapped to body heat zones",
      "Moisture-activated cooling fabric technology",
      "Reinforced knee and elbow panels with flex zones",
      "Multiple specialized tool pockets and attachment points"
    ],
    images: [
      { src: "/images/industries/Factory_Industrial/industrial-coverall-pro.webp", alt: "Industrial Coverall Pro with cooling technology" },
      { src: "/images/products/industrial/cooling-tech-details.jpg", alt: "Close-up of cooling technology fabric" },
      { src: "/images/products/industrial/coverall-pro-features.jpg", alt: "Industrial Coverall Pro showing key features" }
    ],
    colors: [
      { name: "Slate Grey", value: "#64748b", image: "/images/products/industrial/coverall-pro-grey.jpg" },
      { name: "Desert Khaki", value: "#d6c7a1", image: "/images/products/industrial/coverall-pro-khaki.jpg" },
      { name: "Industrial Blue", value: "#1e40af", image: "/images/products/industrial/coverall-pro-blue.jpg" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL", "3XL", "4XL"],
    fabricDetails: {
      composition: "65% Cotton, 33% Polyester, 2% Elastane with proprietary cooling treatment",
      gsm: "260",
      features: ["Cooling technology", "Antimicrobial", "Abrasion-resistant", "4-way stretch panels"]
    },
    customizationOptions: [
      "Company logo application",
      "Department color-coding",
      "Custom pocket configuration",
      "Additional safety feature integration",
      "Name and position badges"
    ],
    relatedProducts: ["flame-resistant-workwear", "hi-vis-safety-uniform", "anti-static-industrial-uniform"],
    price: "SAR 549",
    minOrder: 20,
    href: "/shop/industrial-uniforms/industrial-coverall-pro"
  },
  {
    id: "anti-static-industrial-uniform",
    category: "industrial-uniforms",
    categoryName: "Industrial Uniforms",
    industry: "factory-industry",
    name: "Anti-Static Industrial Uniform Set",
    shortDescription: "Specialized ESD-safe workwear for electronics and hazardous environments",
    description: "Our Anti-Static Industrial Uniform Set provides essential electrostatic discharge protection for workers in Saudi Arabia's sensitive electronics manufacturing and hazardous environments. Featuring permanent anti-static properties that meet ATEX standards, these uniforms combine advanced ESD protection with chemical splash resistance and flame-retardant properties for comprehensive safety.",
    features: [
      "Permanent anti-static properties that never wash out",
      "Carbon fiber grid technology maintains consistent ESD protection",
      "Meets ATEX standards for explosive atmosphere environments",
      "Chemical splash protection for petrochemical applications",
      "Inherent flame-resistant properties for comprehensive safety",
      "Comfortable design optimized for Saudi Arabia's climate",
      "Multiple secure pockets with anti-static closures"
    ],
    images: [
      { src: "/images/industries/Factory_Industrial/anti-static-uniform.webp", alt: "Anti-static industrial uniform set" },
      { src: "/images/products/industrial/esd-testing.jpg", alt: "ESD protection testing of anti-static uniform" },
      { src: "/images/products/industrial/anti-static-detail.jpg", alt: "Carbon fiber grid detail of anti-static fabric" }
    ],
    colors: [
      { name: "ESD Blue", value: "#1e3a8a", image: "/images/products/industrial/anti-static-blue.jpg" },
      { name: "ESD Grey", value: "#4b5563", image: "/images/products/industrial/anti-static-grey.jpg" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL", "3XL", "4XL"],
    fabricDetails: {
      composition: "98% Polyester with carbon fiber grid, 2% Anti-static fiber",
      gsm: "240",
      features: ["Anti-static (ESD safe)", "Chemical resistant", "Flame retardant", "Moisture-wicking"]
    },
    customizationOptions: [
      "Company logo ESD-safe application",
      "Department color-coding compatible with ESD requirements",
      "Clean room certification options",
      "Additional pocket configurations",
      "Specialized tool loops and attachment points"
    ],
    relatedProducts: ["industrial-coverall-pro", "flame-resistant-workwear", "supervisor-industrial-uniform"],
    price: "SAR 479",
    minOrder: 20,
    href: "/shop/industrial-uniforms/anti-static-industrial-uniform"
  },
  {
    id: "supervisor-industrial-uniform",
    category: "industrial-uniforms",
    categoryName: "Industrial Uniforms",
    industry: "factory-industry",
    name: "Supervisor Industrial Uniform Package",
    shortDescription: "Distinguished workwear for production supervisors and team leaders",
    description: "Our Supervisor Industrial Uniform Package is specifically designed for production supervisors and team leaders in Saudi Arabia's manufacturing facilities. This comprehensive uniform solution combines professional distinction with full safety compliance, featuring specialized management elements while maintaining all required protection for industrial environments.",
    features: [
      "Distinguished design elements clearly identifying leadership roles",
      "Enhanced durability construction for extended facility rounds",
      "Specialized management pocket system including tablet compatibility",
      "Communication device integration features",
      "Full compliance with all industrial safety standards",
      "Climate-optimized design for Saudi manufacturing environments",
      "Professional styling with management color accents"
    ],
    images: [
      { src: "/images/industries/Factory_Industrial/supervisor-uniform.webp", alt: "Supervisor industrial uniform package" },
      { src: "/images/products/industrial/supervisor-features.jpg", alt: "Leadership features of supervisor uniform" },
      { src: "/images/products/industrial/supervisor-tablet.jpg", alt: "Tablet pocket integration on supervisor uniform" }
    ],
    colors: [
      { name: "Management Navy", value: "#0f172a", image: "/images/products/industrial/supervisor-navy.jpg" },
      { name: "Leadership Grey", value: "#334155", image: "/images/products/industrial/supervisor-grey.jpg" },
      { name: "Executive Black", value: "#0a0a0a", image: "/images/products/industrial/supervisor-black.jpg" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    fabricDetails: {
      composition: "65% Cotton, 33% Polyester, 2% Elastane",
      gsm: "260",
      features: ["Enhanced durability", "Stain-resistant", "Professional finish", "Full safety compliance"]
    },
    customizationOptions: [
      "Leadership designations",
      "Management color-coding systems",
      "Department identification",
      "Role-specific embroidery",
      "Company branding and logo application"
    ],
    relatedProducts: ["industrial-coverall-pro", "anti-static-industrial-uniform", "flame-resistant-workwear"],
    price: "SAR 629",
    minOrder: 15,
    href: "/shop/industrial-uniforms/supervisor-industrial-uniform"
  },
  {
    id: "safety-helmet-pro",
    category: "industrial-uniforms",
    categoryName: "Industrial Uniforms",
    industry: "construction",
    name: "Advanced Safety Helmet Pro",
    shortDescription: "High-impact resistant safety helmet engineered for Saudi industrial environments",
    description: "The UNEOM Advanced Safety Helmet Pro is engineered specifically for Saudi Arabia's demanding industrial and construction environments. Featuring a revolutionary impact-absorption system that exceeds GCC and international safety standards, this helmet offers superior protection against falling objects and impact hazards. Designed with the Kingdom's climate in mind, it incorporates advanced ventilation technology to maintain comfortable temperatures even during prolonged outdoor work in extreme heat conditions.",
    features: [
      "Class E electrical insulation protection (20,000 volts)",
      "Advanced impact absorption system exceeding ANSI Z89.1 Type I Class E standards",
      "UV-resistant shell maintains integrity in Saudi desert conditions",
      "Integrated ventilation system for cooling in high-temperature environments",
      "Adjustable 4-point suspension system for secure, personalized fit",
      "Compatible with face shields, earmuffs, and other PPE accessories",
      "Optional reflective stickers for enhanced visibility in low-light conditions",
      "Customizable with company logos and safety certification markings"
    ],
    images: [
      { src: "/images/products/safety/helmet-pro-1.webp", alt: "UNEOM Advanced Safety Helmet Pro - Front view showing ventilation system" },
      { src: "/images/products/safety/helmet-pro-2.webp", alt: "UNEOM Safety Helmet - Side view displaying impact absorption system" },
      { src: "/images/products/safety/helmet-pro-3.webp", alt: "Industrial worker wearing UNEOM Safety Helmet in Saudi construction site" },
      { src: "/images/products/safety/helmet-pro-4.webp", alt: "Inside view of UNEOM Safety Helmet showing 4-point suspension system" }
    ],
    colors: [
      { name: "Safety Yellow", value: "#f1c40f", image: "/images/products/safety/helmet-yellow.webp" },
      { name: "Construction White", value: "#ecf0f1", image: "/images/products/safety/helmet-white.webp" },
      { name: "Industrial Blue", value: "#2980b9", image: "/images/products/safety/helmet-blue.webp" },
      { name: "High-Visibility Orange", value: "#e67e22", image: "/images/products/safety/helmet-orange.webp" },
      { name: "Supervisor Green", value: "#27ae60", image: "/images/products/safety/helmet-green.webp" }
    ],
    sizes: ["Universal Fit (53-64cm)", "Extended Size (58-69cm)"],
    fabricDetails: {
      composition: "High-Density Polyethylene (HDPE) Shell with ABS Reinforcement",
      certifications: "ANSI Z89.1 Type I Class E, EN 397, SASO 1368",
      features: ["Impact-resistant", "UV-stabilized", "Electrical insulation", "Heat-resistant"]
    },
    customizationOptions: [
      "Company logo printing/embossing (front, sides, or rear)",
      "Department-specific color coding",
      "Reflective sticker application",
      "Emergency information integration",
      "QR code embedding for certification verification",
      "RFID tag integration for access control and inventory management"
    ],
    relatedProducts: ["industrial-coverall", "hi-vis-safety-uniform", "flame-resistant-workwear"],
    price: "SAR 189",
    minOrder: 15,
    href: "/shop/industrial-uniforms/safety-helmet-pro",
    
    // SEO optimization
    metaTitle: "Advanced Safety Helmet Pro | ANSI-Certified Industrial Head Protection | UNEOM",
    metaDescription: "UNEOM's Advanced Safety Helmet Pro provides superior protection in Saudi industrial environments with Class E electrical insulation, UV resistance, and integrated cooling system. ANSI Z89.1 & SASO 1368 certified.",
    keywords: ["safety helmet Saudi Arabia", "industrial head protection", "construction safety equipment", "ANSI certified helmet", "electrical insulation helmet", "UV-resistant safety helmet", "customizable safety helmets", "Saudi industrial PPE"],
    
    // Arabic translation
    ar: {
      name: "خوذة السلامة المتطورة برو",
      shortDescription: "خوذة سلامة مقاومة للصدمات العالية مصممة خصيصًا للبيئات الصناعية السعودية",
      description: "تم تصميم خوذة السلامة المتطورة من يونيوم خصيصًا لبيئات البناء والصناعة المتطلبة في المملكة العربية السعودية. تتميز بنظام امتصاص الصدمات الثوري الذي يتجاوز معايير السلامة الخليجية والعالمية، وتوفر هذه الخوذة حماية فائقة ضد الأجسام المتساقطة ومخاطر الاصطدام. تم تصميمها مع مراعاة مناخ المملكة، وتتضمن تقنية تهوية متطورة للحفاظ على درجات حرارة مريحة حتى أثناء العمل المطول في الهواء الطلق في ظروف الحرارة القصوى.",
      features: [
        "حماية عزل كهربائي من الفئة E (20,000 فولت)",
        "نظام امتصاص صدمات متقدم يتجاوز معايير ANSI Z89.1 نوع I فئة E",
        "غلاف مقاوم للأشعة فوق البنفسجية يحافظ على سلامته في ظروف الصحراء السعودية",
        "نظام تهوية متكامل للتبريد في البيئات ذات درجات الحرارة العالية",
        "نظام تعليق قابل للتعديل بأربع نقاط لتثبيت آمن ومخصص",
        "متوافقة مع واقيات الوجه وواقيات الأذن وملحقات معدات الحماية الشخصية الأخرى",
        "ملصقات عاكسة اختيارية لتعزيز الرؤية في ظروف الإضاءة المنخفضة",
        "قابلة للتخصيص مع شعارات الشركة وعلامات شهادة السلامة"
      ],
      metaTitle: "خوذة السلامة المتطورة برو | حماية رأس صناعية معتمدة من ANSI | يونيوم",
      metaDescription: "توفر خوذة السلامة المتطورة برو من يونيوم حماية متفوقة في البيئات الصناعية السعودية مع عزل كهربائي من الفئة E، ومقاومة للأشعة فوق البنفسجية، ونظام تبريد متكامل. معتمدة وفقًا لمعايير ANSI Z89.1 وSASO 1368.",
      keywords: ["خوذة سلامة السعودية", "حماية الرأس الصناعية", "معدات سلامة البناء", "خوذة معتمدة من ANSI", "خوذة عزل كهربائي", "خوذة سلامة مقاومة للأشعة فوق البنفسجية", "خوذات سلامة قابلة للتخصيص", "معدات الحماية الشخصية الصناعية السعودية"]
    },
    
    // Schema.org product information for enhanced SEO
    schemaOrg: {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "UNEOM Advanced Safety Helmet Pro",
      "image": [
        "https://uneom.com/images/products/safety/helmet-pro-1.webp",
        "https://uneom.com/images/products/safety/helmet-pro-2.webp",
        "https://uneom.com/images/products/safety/helmet-pro-3.webp"
      ],
      "description": "Advanced impact-resistant safety helmet engineered for Saudi industrial and construction environments, featuring Class E electrical insulation and integrated cooling system.",
      "sku": "UNEOM-SH-PRO-01",
      "brand": {
        "@type": "Brand",
        "name": "UNEOM"
      },
      "manufacturer": "UNEOM Professional Workwear",
      "offers": {
        "@type": "Offer",
        "url": "https://uneom.com/shop/industrial-uniforms/safety-helmet-pro",
        "priceCurrency": "SAR",
        "price": "189",
        "priceValidUntil": "2024-12-31",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "124"
      }
    }
  },
  {
    id: "luxury-retail-collection",
    category: "retail-uniforms",
    categoryName: "Retail Uniforms",
    industry: "retail",
    name: "Luxury Retail Collection",
    shortDescription: "Sophisticated uniforms for high-end retail environments in Saudi Arabia",
    description: "Our luxury retail collection is designed specifically for high-end retail environments in Saudi Arabia. These sophisticated uniforms project elegance and professionalism while ensuring comfort during long retail hours. The designs integrate subtle Saudi-inspired elements that resonate with local customers while meeting international luxury standards.",
    features: [
      "Premium fabric blends for comfort and appearance",
      "Wrinkle-resistant properties for all-day elegance",
      "Stain-resistant treatment for front-of-house roles",
      "Modest yet fashionable designs for Saudi retail environments",
      "Breathable materials suitable for mall environments",
      "Coordinated accessories available"
    ],
    images: [
      { src: "/images/industries/retail-shops/retail-shops-uniform-brand.jpg", alt: "Luxury retail staff uniforms" },
      { src: "/images/industries/retail-shops/retail-shops-uniform-identity.jpg", alt: "Elegantly designed retail uniforms" },
      { src: "/images/industries/retail-shops/retail-shops-uniform-identity-2.jpg", alt: "Detail of luxury uniform fabrics" }
    ],
    colors: [
      { name: "Classic Black", value: "#000000", image: "/images/industries/retail-shops/retail-shops-uniform-identity.jpg" },
      { name: "Elegant Navy", value: "#1a237e", image: "/images/industries/retail-shops/retail-shops-uniform-identity-2.jpg" },
      { name: "Rich Burgundy", value: "#7b1fa2", image: "/images/industries/retail-shops/retail-shops-uniform-brand.jpg" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    fabricDetails: {
      composition: "70% Polyester, 28% Viscose, 2% Elastane",
      gsm: "195",
      features: ["Wrinkle-resistant", "Stain-resistant", "Premium feel"]
    },
    customizationOptions: [
      "Brand logo embroidery",
      "Custom buttons and accents",
      "Brand color integration",
      "Department differentiation",
      "Saudi-inspired design elements"
    ],
    relatedProducts: ["customer-service", "store-staff", "beauty-salon"],
    price: "SAR 579",
    minOrder: 10,
    href: "/shop/retail-uniforms/luxury-retail-collection"
  },
  {
    id: "customer-service",
    category: "retail-uniforms",
    categoryName: "Retail Uniforms",
    industry: "retail",
    name: "Customer Service Attire",
    shortDescription: "Professional uniforms for retail customer service representatives",
    description: "Our customer service attire is designed for retail staff who engage directly with customers in Saudi retail environments. These uniforms are both practical and polished, allowing for ease of movement while maintaining a professional appearance that represents your brand with distinction.",
    features: [
      "Comfortable yet professional design",
      "Durable fabrics for daily wear",
      "Multiple pockets for practical functionality",
      "Modest designs suitable for Saudi retail environments",
      "Easy-care fabrics that maintain appearance",
      "Brand-friendly design for customization"
    ],
    images: [
      { src: "/images/industries/retail-shops/retail-shops-uniform-shop.jpg", alt: "Customer service staff uniforms" },
      { src: "/images/industries/retail-shops/retail-shops-uniform.jpg", alt: "Retail staff interacting with customers" },
      { src: "/images/industries/retail-shops/retail-shops-uniform-brands-logo.jpg", alt: "Branded customer service uniforms" }
    ],
    colors: [
      { name: "Corporate Blue", value: "#1976d2", image: "/images/industries/retail-shops/retail-shops-uniform-shop.jpg" },
      { name: "Professional Gray", value: "#757575", image: "/images/industries/retail-shops/retail-shops-uniform.jpg" },
      { name: "Brand Black", value: "#212121", image: "/images/industries/retail-shops/retail-shops-uniform-brands-logo.jpg" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    fabricDetails: {
      composition: "65% Polyester, 33% Cotton, 2% Elastane",
      gsm: "180",
      features: ["Easy-care", "Comfort stretch", "Durable"]
    },
    customizationOptions: [
      "Brand logo placement",
      "Color matching to brand palette",
      "Name badges integration",
      "Modest variations for different staff preferences",
      "Hijab-friendly designs"
    ],
    relatedProducts: ["luxury-retail-collection", "store-staff", "beauty-salon"],
    price: "SAR 349",
    minOrder: 15,
    href: "/shop/retail-uniforms/customer-service"
  },
  {
    id: "store-staff",
    category: "retail-uniforms",
    categoryName: "Retail Uniforms",
    industry: "retail",
    name: "Store Staff Uniforms",
    shortDescription: "Practical and stylish uniforms for general retail store staff",
    description: "Our store staff uniforms combine functionality with brand-appropriate styling for general retail environments across Saudi Arabia. These uniforms are designed to be comfortable for long shifts on the sales floor while projecting a professional image that enhances customer confidence and brand perception.",
    features: [
      "Durable fabrics for daily retail activities",
      "Stain-resistant treatment for practical use",
      "Comfortable fit for active retail roles",
      "Modest designs culturally appropriate for Saudi settings",
      "Variety of styles for different retail environments",
      "Easy identification for customers"
    ],
    images: [
      { src: "/images/industries/retail-shops/retail-shops-uniform-2.jpg", alt: "Retail store staff uniforms" },
      { src: "/images/industries/retail-shops/retail-shops-uniform-shop-industery.jpg", alt: "Staff working in retail environment" },
      { src: "/images/industries/retail-shops/retail-shops-uniform-shop-factory.jpg", alt: "Various store staff uniform options" }
    ],
    colors: [
      { name: "Retail Blue", value: "#2962ff", image: "/images/industries/retail-shops/retail-shops-uniform-2.jpg" },
      { name: "Brand Green", value: "#43a047", image: "/images/industries/retail-shops/retail-shops-uniform-shop-industery.jpg" },
      { name: "Modern Black", value: "#212121", image: "/images/industries/retail-shops/retail-shops-uniform-shop-factory.jpg" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    fabricDetails: {
      composition: "60% Cotton, 40% Polyester",
      gsm: "175",
      features: ["Breathable", "Durable", "Easy-care"]
    },
    customizationOptions: [
      "Logo embroidery or printing",
      "Department color-coding",
      "Name badge areas",
      "Position indicators",
      "Branded accessories"
    ],
    relatedProducts: ["luxury-retail-collection", "customer-service", "beauty-salon"],
    price: "SAR 299",
    minOrder: 20,
    href: "/shop/retail-uniforms/store-staff"
  },
  {
    id: "beauty-salon",
    category: "retail-uniforms",
    categoryName: "Retail Uniforms",
    industry: "retail",
    name: "Beauty Salon Attire",
    shortDescription: "Stylish and practical uniforms for beauty and salon professionals",
    description: "Our beauty salon attire is designed specifically for Saudi Arabia's growing beauty industry. These uniforms combine style with functionality, projecting a fashion-forward image while offering practical features for salon professionals. All designs respect cultural considerations while creating a distinctive and professional appearance.",
    features: [
      "Stain-resistant fabric for beauty products",
      "Fashionable yet practical designs",
      "Comfortable for long hours of standing",
      "Modest options suitable for Saudi salons",
      "Easy-care fabrics that maintain appearance",
      "Distinctive style that elevates salon brand"
    ],
    images: [
      { src: "/images/industries/retail-shops/retail-shops-uniform-identity-3.jpg", alt: "Beauty salon staff uniforms" },
      { src: "/images/industries/retail-shops/retail-shops-uniform-identity-4.jpg", alt: "Salon staff in professional attire" },
      { src: "/images/industries/retail-shops/retail-shops-uniform-shop-education.jpg", alt: "Various beauty salon uniform styles" }
    ],
    colors: [
      { name: "Salon Black", value: "#000000", image: "/images/industries/retail-shops/retail-shops-uniform-identity-3.jpg" },
      { name: "Modern Gray", value: "#616161", image: "/images/industries/retail-shops/retail-shops-uniform-identity-4.jpg" },
      { name: "Spa White", value: "#ffffff", image: "/images/industries/retail-shops/retail-shops-uniform-shop-education.jpg" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    fabricDetails: {
      composition: "65% Polyester, 30% Cotton, 5% Elastane",
      gsm: "170",
      features: ["Stain-resistant", "Comfort stretch", "Quick-dry"]
    },
    customizationOptions: [
      "Salon logo integration",
      "Color matching to salon décor",
      "Style variations for different roles",
      "Saudi-appropriate modest designs",
      "Coordinated accessories"
    ],
    relatedProducts: ["luxury-retail-collection", "customer-service", "store-staff"],
    price: "SAR 329",
    minOrder: 10,
    href: "/shop/retail-uniforms/beauty-salon"
  },
  {
    id: "mall-security",
    category: "security-uniforms",
    categoryName: "Security Uniforms",
    industry: "security",
    name: "Mall Security Uniform",
    shortDescription: "Professional security uniforms for retail and mall environments",
    description: "Our mall security uniforms are specifically designed for the unique requirements of retail and shopping mall security personnel across Saudi Arabia. These uniforms project authority while maintaining an approachable appearance suitable for high-end retail environments, balancing security presence with customer experience.",
    features: [
      "Professional and authoritative appearance",
      "Comfortable for long shifts and continuous walking",
      "Durable fabrics for daily wear",
      "Multiple functional pockets for security equipment",
      "Modest designs appropriate for Saudi environments",
      "Visible yet elegant security presence"
    ],
    images: [
      { src: "/images/industries/Security/security-uniform-1.jpg", alt: "Mall security staff uniforms" },
      { src: "/images/industries/Security/security-uniform-2.jpg", alt: "Security personnel in retail environment" },
      { src: "/images/industries/Security/security-uniform-3.jpg", alt: "Professional mall security uniforms" }
    ],
    colors: [
      { name: "Security Black", value: "#000000", image: "/images/industries/Security/security-uniform-5.jpg" },
      { name: "Navy Blue", value: "#0d47a1", image: "/images/industries/Security/security-uniform-4.jpg" },
      { name: "Professional Gray", value: "#424242", image: "/images/industries/Security/security-uniform-6.jpg" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    fabricDetails: {
      composition: "65% Polyester, 35% Cotton",
      gsm: "240",
      features: ["Durable", "Wrinkle-resistant", "Professional finish"]
    },
    customizationOptions: [
      "Mall or company logo integration",
      "Security badges and identifiers",
      "Rank designations if needed",
      "Reflective elements for visibility",
      "Custom security patches"
    ],
    relatedProducts: ["security-officer-uniform", "tactical-security-uniforms", "executive-protection"],
    price: "SAR 429",
    minOrder: 15,
    href: "/shop/security-uniforms/mall-security"
  },
  {
    id: "industrial-cooling-vest",
    category: "industrial-uniforms",
    categoryName: "Industrial Uniforms",
    industry: "manufacturing",
    name: "Industrial Cooling Vest",
    shortDescription: "Advanced cooling technology for extreme Saudi industrial environments",
    description: "Designed specifically for Saudi Arabia's extreme temperatures, our industrial cooling vests provide essential relief for workers in hot manufacturing environments, oil fields, and construction sites. Using advanced phase-change materials, these vests maintain a comfortable core temperature even in the most challenging conditions, improving worker safety and productivity.",
    features: [
      "Advanced cooling technology maintains 21-23°C for up to 4 hours",
      "Lightweight design allows full mobility",
      "Fire-resistant outer shell complies with safety regulations",
      "Machine washable and quick-drying material",
      "Compatible with other safety equipment and harnesses",
      "Adjustable fit for use over or under other protective gear"
    ],
    images: [
      { src: "/images/industries/supply-manufacturing/supply-manufacturing-uniform-product-2.jpg", alt: "Industrial cooling vest front view" },
      { src: "/images/large-water-drop-on-red-waterproof-fabric-2024-12-02-06-46-07-utc.jpg", alt: "Cooling technology fabric detail" },
      { src: "/images/firefighters-fight-the-fire-flame-to-control-fire-not-to-spreading-out-firefighter-ind-SBI-349465280.jpg", alt: "Cooling vest in industrial environment" }
    ],
    colors: [
      { name: "Safety Blue", value: "#2980b9", image: "/images/industries/supply-manufacturing/supply-manufacturing-uniform-product-2.jpg" },
      { name: "High-Vis Yellow", value: "#f1c40f", image: "/images/Heavy_Duty_Industrial_Coverall.png" },
      { name: "Industrial Gray", value: "#7f8c8d", image: "/images/factory-worker-portrait-industrial-man-looking-at-camera-close-up-of-industry-worker-p-SBI-351092701.jpg" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    fabricDetails: {
      composition: "Outer: 100% FR-Treated Polyester, Inner: Phase Change Material",
      gsm: "320",
      features: ["Heat-resistant", "Cooling technology", "Moisture-wicking", "Anti-bacterial treatment"]
    },
    customizationOptions: [
      "Company logo application",
      "Department color-coding",
      "Additional reflective strips",
      "Integration with communication systems",
      "Custom cooling duration options"
    ],
    relatedProducts: ["flame-resistant-workwear", "industrial-coverall-pro", "hi-vis-safety-uniform"],
    price: "SAR 899",
    minOrder: 10,
    href: "/shop/industrial-uniforms/industrial-cooling-vest"
  },
  {
    id: "personnel-grounding-system",
    category: "industrial-uniforms",
    categoryName: "Industrial Uniforms",
    industry: "manufacturing",
    name: "Personnel Grounding System",
    shortDescription: "Complete ESD protection for electronics manufacturing environments",
    description: "Our Personnel Grounding System provides comprehensive electrostatic discharge (ESD) protection for workers in sensitive electronics manufacturing and assembly environments across Saudi Arabia. This complete system includes specially designed footwear, garments, and wrist straps that work together to safely channel static electricity away from sensitive components, preventing costly damage and ensuring product quality.",
    features: [
      "Complete system provides consistent pathway to ground",
      "Conductive fibers woven throughout garment material",
      "Comfortable for all-day wear in climate-controlled facilities",
      "Meets international ESD safety standards (IEC 61340-5-1)",
      "Available in cleanroom-compatible versions",
      "Testing points built into garments for daily verification"
    ],
    images: [
      { src: "/images/industries/supply-manufacturing/supply-manufacturing-uniform-logos.jpg", alt: "Complete personnel grounding system" },
      { src: "/images/industries/supply-manufacturing/supply-manufacturing-uniform-identity.jpg", alt: "ESD testing verification" },
      { src: "/images/builder-in-helmet-with-a-suitcase-says-on-camera-on-a-green-screen-chroma-key-SBI-351072375.jpg", alt: "Factory worker wearing ESD protection" }
    ],
    colors: [
      { name: "Cleanroom White", value: "#f5f5f5", image: "/images/industries/supply-manufacturing/supply-manufacturing-uniform-mens.jpg" },
      { name: "ESD Blue", value: "#5d8aa8", image: "/images/industries/supply-manufacturing/supply-manufacturing-uniform-accesories.jpg" },
      { name: "Carbon Black", value: "#333333", image: "/images/industries/supply-manufacturing/supply-manufacturing-uniform-custom-workers.jpg" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    fabricDetails: {
      composition: "98% Polyester, 2% Carbon Fiber Filament",
      gsm: "180",
      features: ["Static dissipative", "Low linting", "Durable through multiple launderings", "Maintains ESD properties when damp"]
    },
    customizationOptions: [
      "Company and employee ID integration",
      "Cleanroom certification levels",
      "Additional protective properties (FR, chemical resistance)",
      "Process-specific optimizations",
      "Integration with monitoring systems"
    ],
    relatedProducts: ["anti-static-industrial-uniform", "cleanroom-apparel", "industrial-coverall-pro"],
    price: "SAR 1,299",
    minOrder: 8,
    href: "/shop/industrial-uniforms/personnel-grounding-system"
  },
  {
    id: "heat-resistant-gloves",
    category: "industrial-uniforms",
    categoryName: "Industrial Uniforms",
    industry: "manufacturing",
    name: "Premium Heat-Resistant Gloves",
    shortDescription: "Advanced thermal protection for extreme industrial environments in Saudi Arabia",
    description: "Our Premium Heat-Resistant Gloves are engineered specifically for Saudi Arabia's petrochemical, manufacturing, and metallurgical industries where extreme temperatures are a constant hazard. Developed using multi-layer composite technology with aramid fibers and advanced ceramic coatings, these gloves provide exceptional protection against heat, flames, and molten metal splashes while maintaining the dexterity and tactile sensitivity needed for precision industrial tasks. Certified to meet the rigorous safety requirements of both GCC standards and international safety protocols.",
    features: [
      "Withstands extreme temperatures up to 1000°C (1832°F)",
      "Multi-layer aramid fiber construction with ceramic coating technology",
      "Enhanced grip pattern for secure handling of hot materials",
      "Extended gauntlet design protects wrists and forearms",
      "Reinforced thumb crotch and palm for increased durability",
      "Moisture-wicking inner liner for comfort in Saudi climate conditions",
      "Pulse protection system shields arterial points",
      "Cut-resistant (Level 5) for comprehensive hand protection"
    ],
    images: [
      { src: "/images/manufacturing_manufacturing_industrial_workwear_1.webp", alt: "Premium heat-resistant gloves for extreme industrial environments" },
      { src: "/images/industries/Factory_Industrial/Factory_Industrial_Workwear_product_1.webp", alt: "Heat-resistant gloves with extended gauntlet protection" },
      { src: "/images/industries/supply-manufacturing/supply-manufacturing-uniform-safety-protection.jpg", alt: "Close-up of heat-resistant glove grip technology" }
    ],
    colors: [
      { name: "Industrial Gold", value: "#E3A81D", image: "/images/industries/Factory_Industrial/Factory_Industrial_Workwear_product_1.webp" },
      { name: "Safety Black", value: "#1a1a1a", image: "/images/industries/supply-manufacturing/supply-manufacturing-uniform-safety-protection.jpg" },
      { name: "Heat-Resistant Silver", value: "#C0C0C0", image: "/images/manufacturing_manufacturing_industrial_workwear_1.webp" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    fabricDetails: {
      composition: "External Layer: Aramid Fibers with Ceramic Coating, Middle Layer: Thermal Barrier, Inner Layer: FR Cotton with Moisture Management",
      certifications: "EN 407:2020, EN 388:2016, ASTM F2675/F2675M, SASO GSO 2550",
      features: ["Extreme heat resistance", "Cut-resistant", "Puncture-resistant", "Oil and fluid repellent"]
    },
    customizationOptions: [
      "Company logo heat-resistant application",
      "Length customization (standard or extended gauntlet)",
      "Custom color coding for different departments or heat tolerance levels",
      "Integration with safety cuff systems and PPE protocols",
      "Specialized versions for specific industrial applications"
    ],
    relatedProducts: ["flame-resistant-workwear", "industrial-coverall-pro", "safety-helmet-pro"],
    price: "SAR 349",
    minOrder: 20,
    href: "/shop/industrial-uniforms/heat-resistant-gloves",
    
    metaTitle: "Premium Heat-Resistant Gloves | 1000°C Protection | UNEOM Saudi Arabia",
    metaDescription: "Industrial-grade heat-resistant gloves providing protection up to 1000°C for Saudi petrochemical, manufacturing & metallurgical industries. EN 407 & SASO certified with advanced aramid fiber technology.",
    keywords: ["heat resistant gloves Saudi Arabia", "industrial thermal protection", "aramid fiber gloves", "petrochemical safety equipment", "metallurgy hand protection", "1000 degree heat gloves", "EN 407 certified gloves", "Saudi industrial PPE"],
    
    ar: {
      name: "قفازات مقاومة للحرارة الممتازة",
      shortDescription: "حماية حرارية متقدمة للبيئات الصناعية القاسية في المملكة العربية السعودية",
      description: "تم تصميم قفازاتنا المقاومة للحرارة خصيصًا لصناعات البتروكيماويات والتصنيع والمعادن في المملكة العربية السعودية حيث تشكل درجات الحرارة القصوى خطرًا مستمرًا. تم تطويرها باستخدام تقنية مركبة متعددة الطبقات مع ألياف الأراميد وطلاءات سيراميك متقدمة، توفر هذه القفازات حماية استثنائية ضد الحرارة واللهب ورذاذ المعادن المنصهرة مع الحفاظ على الدقة والحساسية اللمسية اللازمة للمهام الصناعية الدقيقة.",
      features: [
        "تتحمل درجات حرارة قصوى تصل إلى 1000 درجة مئوية (1832 درجة فهرنهايت)",
        "بناء متعدد الطبقات من ألياف الأراميد مع تقنية الطلاء السيراميك",
        "نمط قبضة محسّن للتعامل الآمن مع المواد الساخنة",
        "تصميم ممتد يحمي المعصمين والساعدين",
        "تقوية إضافية في منطقة الإبهام والكف لمتانة متزايدة",
        "بطانة داخلية ماصة للرطوبة للراحة في ظروف المناخ السعودي",
        "نظام حماية النبض يحمي نقاط الشرايين",
        "مقاومة للقطع (المستوى 5) لحماية شاملة لليد"
      ],
      metaTitle: "قفازات مقاومة للحرارة الممتازة | حماية حتى 1000 درجة مئوية | يونيوم السعودية",
      metaDescription: "قفازات مقاومة للحرارة صناعية توفر حماية تصل إلى 1000 درجة مئوية لصناعات البتروكيماويات والتصنيع والمعادن السعودية. معتمدة وفقًا لمعايير EN 407 و SASO مع تقنية ألياف الأراميد المتقدمة."
    },
    
    schemaOrg: {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "UNEOM Premium Heat-Resistant Gloves",
      "image": [
        "https://uneom.com/images/manufacturing_manufacturing_industrial_workwear_1.webp",
        "https://uneom.com/images/industries/Factory_Industrial/Factory_Industrial_Workwear_product_1.webp",
        "https://uneom.com/images/industries/supply-manufacturing/supply-manufacturing-uniform-safety-protection.jpg"
      ],
      "description": "Advanced heat-resistant gloves providing protection up to 1000°C for Saudi industrial environments, featuring multi-layer aramid fiber construction with ceramic coating technology.",
      "sku": "UNEOM-HRG-500",
      "brand": {
        "@type": "Brand",
        "name": "UNEOM"
      },
      "manufacturer": "UNEOM Professional Workwear",
      "offers": {
        "@type": "Offer",
        "url": "https://uneom.com/shop/industrial-uniforms/heat-resistant-gloves",
        "priceCurrency": "SAR",
        "price": "349",
        "priceValidUntil": "2024-12-31",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "87"
      }
    }
  },
  {
    id: "industrial-safety-vest",
    category: "industrial-uniforms",
    categoryName: "Industrial Uniforms",
    industry: "manufacturing",
    name: "High-Visibility Industrial Safety Vest",
    shortDescription: "ANSI/ISEA 107 Class 2 certified safety vest with 360° reflective strips",
    description: "Our premium industrial safety vests are engineered for Saudi Arabia's demanding industrial environments. Designed with 360° high-visibility reflective strips, these vests meet ANSI/ISEA 107 Class 2 certification standards while addressing the specific needs of construction, oil & gas, and manufacturing sectors. The breathable mesh design is optimized for Saudi Arabia's climate, providing adequate ventilation while maintaining maximum visibility in low-light conditions.",
    features: [
      "ANSI/ISEA 107 Class 2 certification",
      "360° high-visibility reflective strips",
      "Flame-resistant material option available",
      "Heat-resistant for extreme Saudi conditions",
      "Breathable mesh design for Saudi climate",
      "Multiple utility pockets for tools and ID cards",
      "Adjustable side straps for perfect fit over workwear"
    ],
    images: [
      { src: "/images/industries/Factory_Industrial/Factory_Industrial_Workwear_post_1.webp", alt: "High-visibility industrial safety vest front view" },
      { src: "/images/industries/Factory_Industrial/Factory_Industrial_Workwear_post_2.webp", alt: "Safety vest with reflective strips detail" },
      { src: "/images/industries/Factory_Industrial/Factory_Industrial_Workwear_post_3.webp", alt: "Safety vest in use at industrial workplace" }
    ],
    colors: [
      { name: "Safety Orange", value: "#ff7300", image: "/images/industries/Factory_Industrial/Factory_Industrial_Workwear_product_1.webp" },
      { name: "Hi-Vis Yellow", value: "#f1c40f", image: "/images/industries/Factory_Industrial/Factory_Industrial_Workwear_product_2.webp" },
      { name: "Lime Green", value: "#7FFF00", image: "/images/industries/Factory_Industrial/Factory_Industrial_Workwear_product_3.webp" }
    ],
    sizes: ["S/M", "L/XL", "2XL/3XL", "4XL/5XL"],
    fabricDetails: {
      composition: "100% Polyester Mesh (FR option: 99% FR Polyester, 1% Carbon Fiber)",
      gsm: "120 (Standard) / 180 (FR Version)",
      features: ["High-visibility", "Breathable", "Flame-resistant option", "UV-resistant"]
    },
    customizationOptions: [
      "Company logo screen printing",
      "Reflective company name across back",
      "Department color-coding",
      "Additional specialized pockets",
      "ID badge holders",
      "Radio/communication device loops"
    ],
    relatedProducts: ["flame-resistant-workwear", "industrial-coverall", "heat-resistant-gloves"],
    price: "SAR 189",
    minOrder: 25,
    href: "/shop/industrial-uniforms/industrial-safety-vest"
  },
  {
    id: "welding-apron",
    category: "industrial-uniforms",
    categoryName: "Industrial Uniforms",
    industry: "manufacturing",
    name: "Premium Leather Welding Apron",
    shortDescription: "Heavy-duty split cowhide leather welding apron with 1100°C heat protection",
    description: "Our premium leather welding aprons are designed for Saudi Arabia's industrial sector, providing superior protection for welders working in extreme conditions. Constructed from heavy-duty split cowhide leather with flame-resistant Kevlar stitching, these aprons offer protection from sparks, spatter, and temperatures up to 1100°C. The ergonomic cross-back design distributes weight evenly to reduce neck strain during extended use.",
    features: [
      "Split cowhide leather construction (3.5mm thickness)",
      "Protection against temperatures up to 1100°C",
      "Flame-resistant Kevlar stitching throughout",
      "Adjustable cross-back straps for weight distribution",
      "Extended coverage from chest to below knee",
      "Multiple reinforced tool pockets and hammer loop",
      "Reinforced stress points for extended durability",
      "Oil and chemical-resistant treatment"
    ],
    images: [
      { src: "/images/industries/manufacturing/manufacturing_uniform_product2.jpg", alt: "Premium leather welding apron front view" },
      { src: "/images/industries/manufacturing/manufacturing_uniform_hard-work.jpg", alt: "Welding apron in use with sparks" },
      { src: "/images/industries/manufacturing/manufacturing_uniform_perpare.jpg", alt: "Detail of welding apron pockets and reinforcements" }
    ],
    colors: [
      { name: "Bourbon Brown", value: "#8B4513", image: "/images/industries/manufacturing/manufacturing_uniform_product2.jpg" },
      { name: "Carbon Black", value: "#2C3539", image: "/images/industries/manufacturing/manufacturing_uniform_product3.jpg" },
      { name: "Industrial Tan", value: "#D2B48C", image: "/images/industries/manufacturing/manufacturing_uniform_product1.jpg" }
    ],
    sizes: ["Standard", "Extended"],
    fabricDetails: {
      composition: "100% Split Cowhide Leather, Kevlar Thread",
      thickness: "3.5mm",
      features: ["Heat-resistant", "Flame-resistant", "Oil-resistant", "Reinforced stress points"]
    },
    customizationOptions: [
      "Company logo embossing",
      "Custom pocket configurations",
      "Extended size options",
      "Specialized tool holder additions",
      "Optional side protection extensions",
      "Reflective safety strips for low light environments"
    ],
    relatedProducts: ["heat-resistant-gloves", "industrial-safety-vest", "flame-resistant-workwear"],
    price: "SAR 279",
    minOrder: 15,
    href: "/shop/industrial-uniforms/welding-apron"
  }
];

// Helper functions
export const getProductById = (id: string) => {
  return products.find(product => product.id === id) || null;
};

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getProductsByIndustry = (industry: string) => {
  return products.filter(product => product.industry === industry);
}; 