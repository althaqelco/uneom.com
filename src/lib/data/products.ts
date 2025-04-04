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