'use client';

interface Benefit {
  title: string;
  description: string;
  icon: string;
}

interface Category {
  name: string;
  products: string[];
}

interface FabricTechnology {
  name: string;
  description: string;
}

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

interface CallToAction {
  text: string;
  buttonUrl: string;
  buttonText: string;
}

interface Industry {
  id: string;
  name: string;
  nameAr?: string;
  title: string;
  description: string;
  descriptionAr?: string;
  image: string;
  heroImage: string;
  benefits: Benefit[];
  categories: Category[];
  fabricTechnologies: FabricTechnology[];
  testimonials: Testimonial[];
  cta: CallToAction;
}

export const industries: Industry[] = [
  {
    id: "healthcare",
    name: "Healthcare",
    nameAr: "الرعاية الصحية",
    title: "Professional Medical Scrubs & Healthcare Uniforms in Saudi Arabia",
    description: "High-quality medical uniforms designed for comfort and functionality in Saudi healthcare settings. Compliant with local regulations and suitable for the Kingdom's climate.",
    descriptionAr: "يونيفورم طبي عالي الجودة مصمم للراحة والوظائف العملية في بيئات الرعاية الصحية السعودية. متوافق مع اللوائح المحلية ومناسب لمناخ المملكة.",
    image: "/images/industries/industries/healthcare-hero.jpg",
    benefits: [
      { 
        title: "Saudi Healthcare Compliance", 
        description: "All uniforms comply with Saudi Ministry of Health standards and guidelines.",
        icon: "shield-check"
      },
      { 
        title: "Islamic Dress Code Options", 
        description: "Modest designs available with hijab-friendly options for female healthcare professionals.",
        icon: "user-circle"
      },
      { 
        title: "Climate-Appropriate Fabrics", 
        description: "Breathable, antimicrobial fabrics suitable for Saudi Arabia's arid climate.",
        icon: "sun"
      },
      { 
        title: "Custom Branding Solutions", 
        description: "Hospital and clinic logos can be elegantly incorporated into uniform designs.",
        icon: "tag"
      }
    ],
    categories: [
      { 
        name: "Emergency Department", 
        products: ["emergency-scrubs", "trauma-team-uniforms", "emergency-hijab-caps"] 
      },
      { 
        name: "Surgery", 
        products: ["surgical-scrubs", "surgeon-gowns", "surgical-caps"]
      },
      { 
        name: "Pediatrics", 
        products: ["pediatric-friendly-scrubs", "children-hospital-uniforms"] 
      },
      { 
        name: "Nursing", 
        products: ["nursing-scrubs", "nursing-dresses", "nursing-hijabs"] 
      }
    ],
    fabricTechnologies: [
      {
        name: "Antimicrobial Protection",
        description: "Fabric treated with antimicrobial technology to reduce infection risk."
      },
      {
        name: "Fluid Repellent",
        description: "Resists fluid penetration for improved hygiene and safety."
      },
      {
        name: "Quick-Dry Technology",
        description: "Advanced moisture-wicking properties for comfort in Saudi climate."
      }
    ],
    testimonials: [
      {
        quote: "UNEOM's medical uniforms have transformed our hospital staff's comfort and professional appearance. The antimicrobial protection gives us added confidence.",
        author: "Dr. Layla Al-Sulaiman",
        position: "Chief Medical Officer",
        company: "King Faisal Specialist Hospital",
        image: "/images/testimonials/layla.png"
      },
      {
        quote: "The modest options for female staff are exceptionally well-designed, allowing our team to work comfortably while adhering to Islamic dress principles.",
        author: "Faisal Al-Otaibi",
        position: "HR Director",
        company: "Saudi German Hospital",
        image: "/images/testimonials/faisal.png"
      }
    ],
    cta: {
      text: "Request Healthcare Uniform Consultation",
      buttonUrl: "/contact?industry=healthcare",
      buttonText: "Request Consultation"
    }
  },
  {
    id: "aviation",
    name: "Aviation",
    nameAr: "الطيران",
    title: "Professional Airline & Airport Uniforms in Saudi Arabia",
    description: "Sophisticated airline uniforms that blend Saudi cultural heritage with modern aviation standards. Designed for aircrew, ground staff, and airport personnel.",
    descriptionAr: "يونيفورم طيران متطور يمزج بين التراث الثقافي السعودي ومعايير الطيران الحديثة. مصمم لطاقم الطائرة وطاقم الأرض وموظفي المطار.",
    image: "/images/industries/industries/aviation-hero.jpg",
    benefits: [
      { 
        title: "Cultural Authenticity", 
        description: "Designs that incorporate Saudi heritage elements while meeting international aviation standards.",
        icon: "globe"
      },
      { 
        title: "Comfort on Long-Haul Flights", 
        description: "Fabrics selected for comfort during extended wear on international routes.",
        icon: "clock"
      },
      { 
        title: "Climate Adaptability", 
        description: "Suitable for transitioning between Saudi heat and aircraft cabin environments.",
        icon: "sun"
      },
      { 
        title: "Brand Representation", 
        description: "Uniforms designed to embody your airline's brand identity and values.",
        icon: "badge-check"
      }
    ],
    categories: [
      { 
        name: "Cabin Crew", 
        products: ["cabin-crew-suits", "flight-attendant-abayas", "cabin-crew-accessories"] 
      },
      { 
        name: "Pilots", 
        products: ["pilot-uniforms", "captain-shirts", "pilot-accessories"]
      },
      { 
        name: "Ground Staff", 
        products: ["check-in-uniforms", "ground-handling-attire", "customer-service-uniforms"] 
      }
    ],
    fabricTechnologies: [
      {
        name: "Wrinkle-Resistant",
        description: "Maintains a professional appearance throughout long shifts and flights."
      },
      {
        name: "Stretch Comfort",
        description: "Four-way stretch fabric for ease of movement in cabin environments."
      },
      {
        name: "Temperature Regulation",
        description: "Adapts to varying temperatures between airport and aircraft."
      }
    ],
    testimonials: [
      {
        quote: "UNEOM's aviation uniforms perfectly capture our airline's blend of Saudi heritage and modern elegance. The fabrics perform exceptionally well in our demanding environment.",
        author: "Mohammad Al-Jasser",
        position: "Uniform Standards Manager",
        company: "Saudia Airlines",
        image: "/images/testimonials/mohammad.png"
      }
    ],
    cta: {
      text: "Request Aviation Uniform Consultation",
      buttonUrl: "/contact?industry=aviation",
      buttonText: "Request Consultation"
    }
  },
  {
    id: "hospitality",
    name: "Hospitality",
    nameAr: "الضيافة",
    title: "Luxury Hotel & Restaurant Uniforms in Saudi Arabia",
    description: "Elegant hospitality uniforms tailored for Saudi Arabia's growing luxury tourism sector. Designed for hotels, resorts, restaurants, and events.",
    descriptionAr: "زي موحد للضيافة أنيق مصمم خصيصًا لقطاع السياحة الفاخرة المتنامي في المملكة العربية السعودية. مصمم للفنادق والمنتجعات والمطاعم والفعاليات.",
    image: "/images/industries/industries/hospitality-hero.jpg",
    benefits: [
      { 
        title: "Luxurious Impressions", 
        description: "Premium fabrics and tailoring that reflect the luxury standards of Saudi hospitality.",
        icon: "star"
      },
      { 
        title: "Cultural Sensitivity", 
        description: "Designs that respect local customs while appealing to international guests.",
        icon: "users"
      },
      { 
        title: "Comfort in Service Roles", 
        description: "Ergonomic designs for staff who are on their feet for extended periods.",
        icon: "hand"
      },
      { 
        title: "Brand Enhancement", 
        description: "Uniforms that become an extension of your hospitality brand's aesthetic.",
        icon: "sparkles"
      }
    ],
    categories: [
      { 
        name: "Front Office", 
        products: ["reception-uniforms", "concierge-attire", "guest-relations-uniforms"] 
      },
      { 
        name: "Food & Beverage", 
        products: ["chef-uniforms", "server-attire", "barista-uniforms"]
      },
      { 
        name: "Housekeeping", 
        products: ["housekeeping-uniforms", "room-service-attire"] 
      }
    ],
    fabricTechnologies: [
      {
        name: "Stain-Resistant",
        description: "Repels spills and stains for a consistently professional appearance."
      },
      {
        name: "Easy-Care",
        description: "Low-maintenance fabrics that withstand frequent commercial laundering."
      },
      {
        name: "Stretch Comfort",
        description: "Flexible materials that allow ease of movement during service duties."
      }
    ],
    testimonials: [
      {
        quote: "Our staff uniforms from UNEOM have become part of our brand identity. Guests frequently compliment the elegant designs that perfectly blend Saudi hospitality traditions with contemporary luxury.",
        author: "Sara Al-Mansour",
        position: "Hotel Manager",
        company: "The Ritz-Carlton, Riyadh",
        image: "/images/testimonials/sara.png"
      }
    ],
    cta: {
      text: "Request Hospitality Uniform Consultation",
      buttonUrl: "/contact?industry=hospitality",
      buttonText: "Request Consultation"
    }
  },
  {
    id: "corporate",
    name: "Corporate",
    nameAr: "الشركات",
    title: "Professional Corporate Workwear & Office Uniforms in Saudi Arabia",
    description: "Sophisticated corporate attire designed for Saudi business environments. Projecting professionalism while ensuring comfort in office settings.",
    descriptionAr: "ملابس شركات متطورة مصممة لبيئات الأعمال السعودية. تعكس الاحترافية مع ضمان الراحة في بيئات المكاتب.",
    image: "/images/modern-arabic-businessman-SBI-300984397.jpg",
    heroImage: "/images/arabic-businessman-in-the-middle-east-SBI-300984430.jpg",
    benefits: [
      { 
        title: "Professional Brand Image", 
        description: "Uniforms that reinforce your corporate identity and professionalism.",
        icon: "briefcase"
      },
      { 
        title: "Saudi Business Etiquette", 
        description: "Designs aligned with local business dress codes and cultural expectations.",
        icon: "document-text"
      },
      { 
        title: "All-Day Comfort", 
        description: "Breathable fabrics suitable for long office hours in air-conditioned environments.",
        icon: "office-building"
      },
      { 
        title: "Gender-Appropriate Options", 
        description: "Respectful designs for both male and female employees in Saudi corporate settings.",
        icon: "user-group"
      }
    ],
    categories: [
      { 
        name: "Executive", 
        products: ["executive-suits", "leadership-attire", "executive-accessories"] 
      },
      { 
        name: "Administrative", 
        products: ["office-uniforms", "administrative-workwear", "reception-attire"]
      },
      { 
        name: "Sales & Customer Service", 
        products: ["sales-team-uniforms", "customer-service-attire"] 
      }
    ],
    fabricTechnologies: [
      {
        name: "Performance Stretch",
        description: "Comfortable stretch fabrics that maintain their shape throughout the workday."
      },
      {
        name: "Breathable Construction",
        description: "Designs that provide comfort in air-conditioned office environments."
      },
      {
        name: "Easy-Care Finishes",
        description: "Low-maintenance fabrics that stay crisp and professional with minimal effort."
      }
    ],
    testimonials: [
      {
        quote: "UNEOM has transformed our corporate image with uniforms that perfectly balance professionalism with comfort. Our team feels proud wearing attire that represents our company values.",
        author: "Khalid Al-Rasheed",
        position: "CEO",
        company: "Saudi Digital Solutions",
        image: "/images/testimonials/khalid.png"
      }
    ],
    cta: {
      text: "Request Corporate Uniform Consultation",
      buttonUrl: "/contact?industry=corporate",
      buttonText: "Request Consultation"
    }
  },
  {
    id: "education",
    name: "Education",
    nameAr: "التعليم",
    title: "School Uniforms & Educational Attire in Saudi Arabia",
    description: "High-quality school uniforms designed for Saudi educational institutions. Combining comfort, durability, and adherence to educational standards.",
    descriptionAr: "زي مدرسي عالي الجودة مصمم للمؤسسات التعليمية السعودية. يجمع بين الراحة والمتانة والالتزام بالمعايير التعليمية.",
    image: "/images/group-of-elementary-school-pupils-wearing-uniform-folding-arms-against-red-studio-back-SBI-349929394.jpg",
    heroImage: "/images/4k-top-view-of-little-asian-students-with-uniforms-reading-book-in-library-together-SBI-351422735.jpg",
    benefits: [
      { 
        title: "Durable Construction", 
        description: "Uniforms built to withstand daily wear and active student lifestyles.",
        icon: "shield-check"
      },
      { 
        title: "Cultural Sensitivity", 
        description: "Designs that respect Saudi cultural values and educational requirements.",
        icon: "user-circle"
      },
      { 
        title: "Comfortable for Learning", 
        description: "Breathable fabrics suitable for classroom environments.",
        icon: "academic-cap"
      },
      { 
        title: "Institutional Branding", 
        description: "School logos and colors incorporated elegantly into uniform designs.",
        icon: "tag"
      }
    ],
    categories: [
      { 
        name: "Primary Schools", 
        products: ["primary-uniforms", "elementary-school-attire"] 
      },
      { 
        name: "Secondary Schools", 
        products: ["secondary-uniforms", "high-school-attire"]
      },
      { 
        name: "Universities", 
        products: ["university-uniforms", "college-attire"] 
      }
    ],
    fabricTechnologies: [
      {
        name: "Stain-Resistant",
        description: "Fabrics that resist common classroom stains and maintain appearance."
      },
      {
        name: "Easy-Care",
        description: "Low-maintenance materials that simplify washing and care for busy families."
      },
      {
        name: "Durable Construction",
        description: "Reinforced seams and quality materials that withstand active student life."
      }
    ],
    testimonials: [
      {
        quote: "UNEOM's school uniforms have transformed our students' appearance and pride in their school identity. The quality and durability are exceptional.",
        author: "Fatima Al-Harbi",
        position: "Principal",
        company: "Al-Noor International School",
        image: "/images/testimonials/fatima.png"
      }
    ],
    cta: {
      text: "Request School Uniform Consultation",
      buttonUrl: "/contact?industry=education",
      buttonText: "Request Consultation"
    }
  },
  {
    id: "security",
    name: "Security",
    nameAr: "الأمن",
    title: "Professional Security Uniforms in Saudi Arabia",
    description: "Durable and functional security uniforms designed for Saudi security personnel. Combining professional appearance with practical features for security operations.",
    descriptionAr: "زي أمني متين وعملي مصمم لأفراد الأمن السعوديين. يجمع بين المظهر المهني والميزات العملية لعمليات الأمن.",
    image: "/images/confident-man-in-uniform-with-phone-2025-02-12-01-27-59-utc.jpg",
    heroImage: "/images/confident-man-in-uniform-with-phone-2025-02-12-01-27-59-utc.jpg",
    benefits: [
      { 
        title: "Professional Authority", 
        description: "Uniforms that convey authority and professionalism in security roles.",
        icon: "shield-check"
      },
      { 
        title: "Functional Design", 
        description: "Practical features for security equipment and daily operations.",
        icon: "lock-closed"
      },
      { 
        title: "Climate Adaptability", 
        description: "Materials suitable for both indoor and outdoor security operations in Saudi climate.",
        icon: "sun"
      },
      { 
        title: "Institutional Identity", 
        description: "Security company branding integrated seamlessly into uniform design.",
        icon: "identification"
      }
    ],
    categories: [
      { 
        name: "Corporate Security", 
        products: ["corporate-security-uniforms", "office-security-attire"] 
      },
      { 
        name: "Event Security", 
        products: ["event-security-uniforms", "crowd-management-attire"]
      },
      { 
        name: "Facility Protection", 
        products: ["facility-guard-uniforms", "property-security-attire"] 
      }
    ],
    fabricTechnologies: [
      {
        name: "Durable Ripstop",
        description: "Tear-resistant fabrics that withstand demanding security operations."
      },
      {
        name: "Moisture Management",
        description: "Materials that keep security personnel comfortable during long shifts."
      },
      {
        name: "Tactical Construction",
        description: "Reinforced designs with practical pockets and features for security equipment."
      }
    ],
    testimonials: [
      {
        quote: "Our security team's professional appearance has significantly improved with UNEOM's uniforms. The durability and functionality meet our demanding operational requirements.",
        author: "Mohammed Al-Qahtani",
        position: "Security Director",
        company: "Riyadh Protection Services",
        image: "/images/testimonials/mohammed.png"
      }
    ],
    cta: {
      text: "Request Security Uniform Consultation",
      buttonUrl: "/contact?industry=security",
      buttonText: "Request Consultation"
    }
  },
  {
    id: "firefighting",
    name: "Firefighting",
    nameAr: "مكافحة الحرائق",
    title: "Professional Firefighting Uniforms in Saudi Arabia",
    description: "High-performance firefighting gear designed for Saudi fire services. Meeting international safety standards while adapted for local conditions.",
    descriptionAr: "معدات إطفاء عالية الأداء مصممة لخدمات الإطفاء السعودية. تلبي معايير السلامة الدولية مع التكيف مع الظروف المحلية.",
    image: "/images/firefighters-fight-the-fire-flame-to-control-fire-not-to-spreading-out-firefighter-ind-SBI-349465280.jpg",
    heroImage: "/images/a-firefighter-giving-instructions-to-her-team-SBI-301057339.jpg",
    benefits: [
      { 
        title: "International Safety Standards", 
        description: "Uniforms that meet or exceed global firefighting safety requirements.",
        icon: "shield-check"
      },
      { 
        title: "Heat and Flame Resistance", 
        description: "Advanced materials that provide protection in extreme conditions.",
        icon: "fire"
      },
      { 
        title: "Adapted for Saudi Climate", 
        description: "Designs that consider the unique challenges of firefighting in Saudi Arabia's climate.",
        icon: "sun"
      },
      { 
        title: "Visibility and Identification", 
        description: "High-visibility elements and clear identification for emergency operations.",
        icon: "eye"
      }
    ],
    categories: [
      { 
        name: "Structural Firefighting", 
        products: ["structural-firefighting-gear", "building-fire-uniforms"] 
      },
      { 
        name: "Industrial Firefighting", 
        products: ["industrial-fire-uniforms", "oil-gas-firefighting-gear"]
      },
      { 
        name: "Emergency Response", 
        products: ["emergency-response-uniforms", "first-responder-gear"] 
      }
    ],
    fabricTechnologies: [
      {
        name: "Advanced Thermal Protection",
        description: "Multi-layer systems that shield firefighters from extreme heat."
      },
      {
        name: "Moisture Barrier",
        description: "Waterproof yet breathable materials for challenging firefighting conditions."
      },
      {
        name: "High-Visibility Integration",
        description: "Reflective elements that ensure visibility in smoke and low-light conditions."
      }
    ],
    testimonials: [
      {
        quote: "UNEOM's firefighting gear provides our team with the protection and functionality needed for our demanding work. The adaptations for Saudi Arabia's climate make a significant difference in our operations.",
        author: "Abdullah Al-Otaibi",
        position: "Fire Chief",
        company: "Jeddah Civil Defense",
        image: "/images/testimonials/abdullah.png"
      }
    ],
    cta: {
      text: "Request Firefighting Gear Consultation",
      buttonUrl: "/contact?industry=firefighting",
      buttonText: "Request Consultation"
    }
  },
  {
    id: "delivery",
    name: "Delivery Services",
    nameAr: "خدمات التوصيل",
    title: "Professional Delivery Uniforms in Saudi Arabia",
    description: "Practical and recognizable uniforms for Saudi delivery services. Designed for comfort during long delivery shifts in various weather conditions.",
    descriptionAr: "يونيفورم عملي ومميز لخدمات التوصيل السعودية. مصمم للراحة أثناء مناوبات التوصيل الطويلة في مختلف الظروف الجوية.",
    image: "/images/a-delivery-person-dressed-in-a-red-polo-and-cap-shows-approval-with-a-thumbs-up-while--SBI-350024443.jpg",
    heroImage: "/images/caucasian-delivery-man-checking-a-list-of-deliveri-2025-01-30-20-43-07-utc.jpg",
    benefits: [
      { 
        title: "Brand Recognition", 
        description: "Distinctive uniforms that make delivery personnel easily identifiable to customers.",
        icon: "identification"
      },
      { 
        title: "Weather Adaptability", 
        description: "Designs suitable for Saudi Arabia's climate variations throughout the year.",
        icon: "sun"
      },
      { 
        title: "Functional Features", 
        description: "Practical pockets and elements for delivery tools and devices.",
        icon: "device-mobile"
      },
      { 
        title: "Comfort for Long Shifts", 
        description: "Materials and cuts that remain comfortable during extended delivery operations.",
        icon: "clock"
      }
    ],
    categories: [
      { 
        name: "Food Delivery", 
        products: ["food-delivery-uniforms", "restaurant-delivery-attire"] 
      },
      { 
        name: "Package Delivery", 
        products: ["package-courier-uniforms", "parcel-delivery-attire"]
      },
      { 
        name: "Logistics Services", 
        products: ["logistics-uniforms", "supply-chain-attire"] 
      }
    ],
    fabricTechnologies: [
      {
        name: "Quick-Dry Materials",
        description: "Fabrics that manage perspiration during active delivery work."
      },
      {
        name: "Stretch Comfort",
        description: "Flexible materials that accommodate the movement required in delivery operations."
      },
      {
        name: "High-Visibility Elements",
        description: "Reflective details for safety during evening and night deliveries."
      }
    ],
    testimonials: [
      {
        quote: "Our delivery team loves UNEOM's uniforms for their comfort and practicality. Customers immediately recognize our brand, and our staff can work comfortably in all conditions.",
        author: "Sara Al-Qahtani",
        position: "Operations Manager",
        company: "Swift Delivery Services",
        image: "/images/testimonials/sara.png"
      }
    ],
    cta: {
      text: "Request Delivery Uniform Consultation",
      buttonUrl: "/contact?industry=delivery",
      buttonText: "Request Consultation"
    }
  }
];

// Helper function to get industry by ID
export const getIndustryById = (id: string): Industry | undefined => {
  return industries.find(industry => industry.id === id);
}; 