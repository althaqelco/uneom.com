'use client';

export const products = [
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
      { src: "/images/products/aviation/airline-1.jpg", alt: "Female and male airline crew uniforms" },
      { src: "/images/products/aviation/airline-2.jpg", alt: "Female crew uniform with Saudi design elements" },
      { src: "/images/products/aviation/airline-3.jpg", alt: "Male crew uniform details" }
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