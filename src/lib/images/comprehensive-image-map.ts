/**
 * Comprehensive Image Mapping for UNEOM Website
 * خريطة الصور الشاملة لموقع يونيوم
 * 
 * This module provides intelligent image mapping to eliminate placeholder images
 * and ensure all pages use relevant, high-quality images.
 * 
 * Updated: December 2025
 */

// ============================================
// TYPE DEFINITIONS
// ============================================
export interface ImageConfig {
  src: string;
  alt: string;
  altAr: string;
  category: string;
}

// ============================================
// BASE IMAGE COLLECTIONS BY CATEGORY
// ============================================

/**
 * Healthcare Images - Medical scrubs, lab coats, nursing uniforms
 */
export const HEALTHCARE_BASE_IMAGES = {
  hero: '/images/Healthcare_Uniforms.png',
  primaryProduct: '/images/PremiumـMedicalـScrubs.png',
  doctor: '/images/healthcare/healthcare_medical_doctor_uniform.jpg',
  nurse: '/images/healthcare/healthcare_nurce_uniform.jpg',
  hijab: '/images/healthcare/medical_hijab_uniform.jpg',
  fullDoctor: '/images/healthcare/full_clothes_doctor_uniform.jpg',
  hijabDoctor: '/images/healthcare/healthcare_hijab_doctor.jpg',
  medicalUniform: '/images/healthcare/healthcare_medical_uniform.jpg',
  team: '/images/doctors-team-walking-in-modern-hospital-corridor-indoors-poeople-group-SBI-322343728.jpg',
  portrait: '/images/doctor-SBI-300813580.jpg',
  surgeons: '/images/portrait-of-diverse-female-and-male-surgeons-wearing-face-masks-and-scrubs-in-hospital-SBI-351294776.jpg',
  scrubsSet: '/images/healthcare/healthcare_medical_uniform.jpg',
  labCoat: '/images/healthcare/full_clothes_doctor_uniform.jpg',
  nursingUniform: '/images/healthcare/healthcare_nurce_uniform.jpg',
  advancedMedical: '/images/products/medical/advanced-medical-uniform-main.jpg',
  nurseMain: '/images/products/medical/nurse-uniform-main.jpg',
  labCoatMain: '/images/products/medical/lab-coats-main.jpg',
};

/**
 * Corporate Images - Business suits, office attire, polo shirts
 */
export const CORPORATE_BASE_IMAGES = {
  hero: '/images/Corporate_Uniforms_Business.png',
  meeting: '/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg',
  arabBusinessman: '/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg',
  modernArabic: '/images/modern-arabic-businessman-SBI-300984397.jpg',
  womanCasual: '/images/woman-in-business-casual-attire-smiling-SBI-300979979.jpg',
  teamMeeting: '/images/business-team-at-meeting-in-the-modern-office-c-SBI-300994903.jpg',
  diverseMeeting: '/images/diverse-business-meeting-manager-brainstorming-with-meeting-participants-in-office-conf-SBI-391494217.jpg',
  businessCheck: '/images/businessman-checking-documents-and-using-laptop-w-2024-11-01-23-29-12-utc.jpg',
  corporateUniform: '/images/corporate/corporate_uniform_formal.jpg',
  corporateBrand: '/images/corporate/corporate_brand.jpg',
  corporateBusiness: '/images/corporate/corporate_business_uniform.jpg',
  executiveSuit: '/images/products/corporate-suit-executive.jpg',
  poloShirts: '/images/products/corporate-polo-shirts.jpg',
  premiumShirts: '/images/products/corporate/premium-dress-shirts-main.jpg',
  classicFit: '/images/products/corporate/classic-fit-shirts-main.jpg',
  modernFit: '/images/products/corporate/modern-fit-shirts-main.jpg',
  classicPolo: '/images/products/corporate/classic-polo-main.jpg',
  premiumPolo: '/images/products/corporate/premium-polo-main.jpg',
  performancePolo: '/images/products/corporate/performance-polo-main.jpg',
};

/**
 * Hospitality Images - Hotel, restaurant, chef uniforms
 */
export const HOSPITALITY_BASE_IMAGES = {
  hero: '/images/Luxury_Hotel Staff_Uniform.png',
  formal: '/images/hospitality_uniform_formal.jpg',
  concierge: '/images/hospitality/hospitality_uniform_concierge.jpg',
  hotelService: '/images/hospitality/hospitality_uniform_hotel_service.jpg',
  hotel: '/images/hospitality/hospitality_uniform_hotel.jpg',
  reception: '/images/hospitality/hospitality_reception.jpg',
  chef: '/images/hospitality/hospitality_uniform_chef.jpg',
  restaurant: '/images/hospitality/hospitality_uniform_resturant.jpg',
  restaurant2: '/images/hospitality/hospitality_uniform_resturant_2.jpg',
  department: '/images/hospitality/hospitality_uniform_department.jpg',
  management: '/images/hospitality/hospitality_uniform_management.jpg',
  fullLook: '/images/hospitality/hospitality_full_look.jpg',
  fabric: '/images/hospitality/hospitality_uniform_fabric.jpg',
  spaUniform: '/images/hospitality/hospitality_spa_uniform.jpg',
  receptionHotel: '/images/hospitality/hospitality_uniform_receiption_hotel.jpg',
  chefsGroup: '/images/group-of-chefs-standing-with-arms-crossed-in-kitch-2023-11-27-05-01-36-utc.jpg',
  cookFlavoring: '/images/cook-flavoring-his-best-meal-2024-11-29-22-42-39-utc.jpg',
  premiumChef: '/images/hospitality/premium-chef-uniform.jpg',
  executiveHospitality: '/images/hospitality/executive-hospitality-suit.jpg',
  chefProfessional: '/images/hospitality/chef-uniform-professional.jpg',
};

/**
 * Aviation Images - Airline crew, pilots, ground staff
 */
export const AVIATION_BASE_IMAGES = {
  hero: '/images/Airline_Crew_Uniform.png',
  uniforms: '/images/Aviation_Uniforms.png',
  airlineMain: '/images/aviation/aviation_uniform_main.jpg',
  airline: '/images/aviation/aviation_uniform_airline.jpg',
  flightAttendant: '/images/aviation/aviation_flight_attendant_uniforms.jpg',
  groundStaff: '/images/aviation/aviation_airline_ground_staff_uniform.jpg',
  captain: '/images/aviation/aviation_captin_uniform.jpg',
  cabinCrewFormal: '/images/aviation_cabin_crew_formal.jpg',
  pilot: '/images/portrait-of-an-adult-male-pilot-in-uniform-posing-2024-09-04-02-33-44-utc.jpg',
  stewardesses: '/images/cheerful-women-stewardesses-standing-on-airplane-s-2023-11-27-05-08-55-utc.jpg',
  airlineWorkers: '/images/cheerful-airline-workers-standing-in-airfield-unde-2024-10-20-08-49-20-utc.jpg',
  airline1: '/images/aviation/aviation_flight_attendant_uniforms.jpg',
  airline2: '/images/aviation/aviation_airline_ground_staff_uniform.jpg',
  airline3: '/images/aviation/aviation_captin_uniform.jpg',
  pilotMain: '/images/products/aviation/pilot-uniform-main.jpg',
  flightAttendantMain: '/images/products/aviation/flight-attendant-dress-main.jpg',
  groundCrewMain: '/images/products/aviation/ground-crew-uniform-main.jpg',
};

/**
 * Industrial/Manufacturing Images - Factory workers, safety gear
 */
export const INDUSTRIAL_BASE_IMAGES = {
  hero: '/images/Factory_Workers_Manufacturing.png',
  worker: '/images/factory-worker-portrait-industrial-man-looking-at-camera-close-up-of-industry-worker-p-SBI-351092701.jpg',
  millingMachine: '/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg',
  warehouseWorkers: '/images/selective-focus-of-two-warehouse-workers-wearing-2024-09-20-08-02-30-utc.jpg',
  brunetteWorker: '/images/a-brunette-man-with-a-beard-in-a-white-protective-uniform-and-an-orange-vest-presses-c-SBI-351495165.jpg',
  delivery: '/images/a-delivery-person-dressed-in-a-red-polo-and-cap-shows-approval-with-a-thumbs-up-while--SBI-350024443.jpg',
  diverseWorkers: '/images/diverse-workers-in-a-protective-workwear-SBI-300873394.jpg',
  coverall: '/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg',
  heavyDutyCoverall: '/images/new-products/heavy_duty_industrial_coverall.png',
  highVisibility: '/images/products/high-visibility-vest.jpg',
  safetyStandards: '/images/industrial/saudi-safety-standards.jpg',
  petrochemical: '/images/industrial/saudi-petrochemical-plant.jpg',
  petrochemicalWorkers: '/images/industrial/saudi-petrochemical-workers.jpg',
  heavyDutyMain: '/images/products/industrial/heavy-duty-coverall-main.jpg',
  flameResistant: '/images/products/industrial/flame-resistant-coverall.jpg',
  chemicalResistant: '/images/products/industrial/chemical-resistant-suit.jpg',
  safetyVest: '/images/products/industrial/high-visibility-coverall.jpg',
  manufacturingMain: '/images/industries/manufacturing/manufacturing_uniform_main.jpg',
  manufacturingFull: '/images/industries/manufacturing/manufacturing_uniform_full.jpg',
};

/**
 * Education Images - School uniforms, teacher attire
 */
export const EDUCATION_BASE_IMAGES = {
  hero: '/images/Education_Uniform_School.png',
  students: '/images/group-of-elementary-school-pupils-wearing-uniform-folding-arms-against-red-studio-back-SBI-349929394.jpg',
  studentsReading: '/images/4k-top-view-of-little-asian-students-with-uniforms-reading-book-in-library-together-SBI-351422735.jpg',
  studentsNew: '/images/group-of-elementary-school-pupils-wearing-uniform-2024-10-19-12-09-06-utc.jpg',
  premiumSchool: '/images/education/premium-school-uniforms.jpg',
  premiumBoys: '/images/education/premium-boys-uniform.jpg',
  modernEducation: '/images/education/modern-education-uniforms.jpg',
  teacherHero: '/images/education/teacher-hero-background.jpg',
  teacherElementary: '/images/education/teacher-elementary.jpg',
  adminSuitModern: '/images/education/admin-suit-modern.jpg',
  adminSuitClassic: '/images/education/admin-suit-classic.jpg',
  supportStaff: '/images/education/support-staff-hero.jpg',
  schoolProduct2: '/images/education/uniform_school_product-2.jpg',
  schoolProduct4: '/images/education/uniform_school_product-4.jpg',
  schoolProduct5: '/images/education/uniform_school_product-5.jpg',
  schoolProduct7: '/images/education/uniform_school_product-7.jpg',
  educationVariations: '/images/education/uniform_educations_variations.jpg',
};

/**
 * Security Images - Guards, tactical gear, protective equipment
 */
export const SECURITY_BASE_IMAGES = {
  hero: '/images/Security_Uniforms.png',
  military: '/images/Military Uniform.H03.2k.png',
  confident: '/images/confident-man-in-uniform-with-phone-2025-02-12-01-27-59-utc.jpg',
  firefighter: '/images/a-firefighter-giving-instructions-to-her-team-SBI-301057339.jpg',
  firefighterAction: '/images/firefighters-fight-the-fire-flame-to-control-fire-not-to-spreading-out-firefighter-ind-SBI-349465280.jpg',
  airportSecurity: '/images/african-american-security-staff-working-at-airport-SBI-338134198.jpg',
  securityOfficer: '/images/products/security-officer-uniform.jpg',
  tacticalVest: '/images/products/security/professional-tactical-vest-main.jpg',
  patrolPants: '/images/products/security/executive-patrol-pants-main.jpg',
  securityJacket: '/images/products/security/professional-security-jacket-main.jpg',
  securityKit: '/images/products/security/professional-security-kit-main.jpg',
};

/**
 * Retail Images - Store staff, sales associates
 */
export const RETAIL_BASE_IMAGES = {
  showcase: '/images/retail-shops/retail-showcase.jpg',
  identity: '/images/industries/retail-shops/retail-shops-uniform-identity.jpg',
  shop: '/images/industries/retail-shops/retail-shops-uniform-shop.jpg',
  uniform2: '/images/industries/retail-shops/retail-shops-uniform-2.jpg',
  uniform: '/images/industries/retail-shops/retail-shops-uniform.jpg',
  brandsLogo: '/images/industries/retail-shops/retail-shops-uniform-brands-logo-2.jpg',
  shopFactory: '/images/industries/retail-shops/retail-shops-uniform-shop-factory.jpg',
  raincoats: '/images/bright-raincoats-hanging-at-a-fashion-store-2024-12-16-06-50-01-utc.jpg',
};

/**
 * General/Service Images - Tailoring, fabric, quality
 */
export const GENERAL_BASE_IMAGES = {
  tailor: '/images/tailor-working-on-a-suit-in-his-workshop-2023-11-27-05-01-04-utc.jpg',
  fabricExpert: '/images/professional-textile-expert-checking-the-quality-of-a-fabric-in-a-factory-man-SBI-300990818.jpg',
  fabricCotton: '/images/fabric-cotton-blends.webp',
  fabricMaterial: '/images/fabric-material-2024-12-06-03-35-02-utc.jpg',
  fabricSamples: '/images/colorful-samples-of-upholstery-fabrics-for-upholst-2025-01-08-10-15-26-utc.jpg',
  waterproof: '/images/large-water-drop-on-red-waterproof-fabric-2024-12-02-06-46-07-utc.jpg',
  groupProfessions: '/images/group-of-successful-people-with-various-profession-2024-11-14-15-58-51-utc.jpg',
  judgeCourierChef: '/images/judge-chef-and-courier-isolated-on-white-2024-11-17-23-15-00-utc.jpg',
  courier: '/images/close-up-of-asian-male-courier-in-blue-uniform-showing-a-carton-to-camera-and-smiling--SBI-351601765.jpg',
  mailman: '/images/a-young-handsome-mailman-smiles-at-the-camera-green-screen-studio-SBI-351078959.jpg',
};

/**
 * Author/Testimonial Images - People portraits
 */
export const AUTHOR_IMAGES = {
  abdullahQahtani: '/images/about/Team/Abdullah_Al-Qahtani-2.png',
  saraHarbi: '/images/about/Team/Sara_Al-Harbi.png',
  mohammedOtaibi: '/images/about/Team/Mohammed_Al-Otaibi.png',
  linaRashid: '/images/about/Team/Lina_Al-Rashid.png',
  arabWomanHijab: '/images/adult-beautiful-muslim-woman-with-hijab-on-head-smiling-for-camera-in-room-SBI-351089408.jpg',
  arabMan: '/images/clients/modern-arabic-businessman-SBI-300984397.jpg',
  arabSheikh: '/images/clients/portrait-of-an-arab-man-sheikh-SBI-300981247.jpg',
  stewardess: '/images/clients/smiling-attractive-stewardess-getting-ready-to-fli-2024-10-18-12-57-27-utc.jpg',
  muslimWoman: '/images/clients/young-muslim-arab-woman-wearing-hijab-veiling-face-looking-at-camera-outdoors-during-s-SBI-351149151.jpg',
  muslimWalking: '/images/portrait-of-young-female-arab-with-covered-head-walking-on-street-near-temple-muslim-w-SBI-349947081.jpg',
};

/**
 * Location Images - Saudi cities
 */
export const LOCATION_IMAGES = {
  riyadh: '/images/locations/riyadh-cityscape.jpg',
  jeddah: '/images/locations/jeddah-cityscape.jpg',
  dammam: '/images/locations/dammam-cityscape.jpg',
  mecca: '/images/locations/mecca-cityscape.jpg',
  medina: '/images/locations/medina-cityscape.jpg',
  saudiMap: '/images/locations/saudi-arabia-locations-map.jpg',
};

/**
 * Blog Images - Article thumbnails and featured images
 */
export const BLOG_IMAGES = {
  textileInnovations: '/images/blog/textile-innovations.jpg',
  sustainableUniform: '/images/blog/sustainable-uniform.jpg',
  sustainableFabrics: '/images/blog/sustainable-fabrics.jpg',
  healthcareUniforms: '/images/blog/healthcare-uniforms.jpg',
  hospitalityUniforms: '/images/blog/hospitality-uniforms.jpg',
  industrialSafety: '/images/blog/industrial-safety.jpg',
  corporateAttire: '/images/blog/corporate-attire.jpg',
  schoolUniforms: '/images/blog/school-uniforms.jpg',
  vision2030: '/images/blog/vision-2030.jpg',
  modernDesign: '/images/blog/modern-uniform-design-showcase.jpg',
  securityUniforms: '/images/blog/smart-security-uniforms.jpg',
  sustainableRetail: '/images/blog/sustainable-retail-uniforms.jpg',
  industrialCompliance: '/images/blog/industrial-safety-compliance.jpg',
};

// ============================================
// IMAGE RESOLUTION FUNCTIONS
// ============================================

/**
 * Get the most appropriate image for a given category
 * Eliminates placeholder images by returning real category images
 */
export function getCategoryImage(category: string, variant: string = 'hero'): string {
  const categoryMap: Record<string, Record<string, string>> = {
    healthcare: HEALTHCARE_BASE_IMAGES,
    medical: HEALTHCARE_BASE_IMAGES,
    corporate: CORPORATE_BASE_IMAGES,
    business: CORPORATE_BASE_IMAGES,
    hospitality: HOSPITALITY_BASE_IMAGES,
    hotel: HOSPITALITY_BASE_IMAGES,
    restaurant: HOSPITALITY_BASE_IMAGES,
    aviation: AVIATION_BASE_IMAGES,
    airline: AVIATION_BASE_IMAGES,
    industrial: INDUSTRIAL_BASE_IMAGES,
    manufacturing: INDUSTRIAL_BASE_IMAGES,
    factory: INDUSTRIAL_BASE_IMAGES,
    education: EDUCATION_BASE_IMAGES,
    school: EDUCATION_BASE_IMAGES,
    security: SECURITY_BASE_IMAGES,
    retail: RETAIL_BASE_IMAGES,
  };

  const images = categoryMap[category.toLowerCase()];
  if (images && images[variant]) {
    return images[variant];
  }
  
  // Fallback to hero if variant not found
  if (images && images.hero) {
    return images.hero;
  }
  
  // Ultimate fallback
  return GENERAL_BASE_IMAGES.groupProfessions;
}

/**
 * Replace placeholder images with appropriate category images
 */
export function resolvePlaceholderImage(imagePath: string, context?: string): string {
  // If it's not a placeholder, return as-is
  if (!imagePath.includes('placeholder')) {
    return imagePath;
  }

  // Determine category from context or use generic
  const contextLower = (context || '').toLowerCase();
  
  if (contextLower.includes('healthcare') || contextLower.includes('medical')) {
    return HEALTHCARE_BASE_IMAGES.hero;
  }
  if (contextLower.includes('corporate') || contextLower.includes('business')) {
    return CORPORATE_BASE_IMAGES.meeting;
  }
  if (contextLower.includes('hospitality') || contextLower.includes('hotel')) {
    return HOSPITALITY_BASE_IMAGES.formal;
  }
  if (contextLower.includes('aviation') || contextLower.includes('airline')) {
    return AVIATION_BASE_IMAGES.hero;
  }
  if (contextLower.includes('industrial') || contextLower.includes('factory')) {
    return INDUSTRIAL_BASE_IMAGES.worker;
  }
  if (contextLower.includes('education') || contextLower.includes('school')) {
    return EDUCATION_BASE_IMAGES.students;
  }
  if (contextLower.includes('security')) {
    return SECURITY_BASE_IMAGES.confident;
  }
  if (contextLower.includes('retail')) {
    return RETAIL_BASE_IMAGES.showcase;
  }
  if (contextLower.includes('author') || contextLower.includes('avatar')) {
    return AUTHOR_IMAGES.arabMan;
  }
  if (contextLower.includes('banner')) {
    return GENERAL_BASE_IMAGES.tailor;
  }
  if (contextLower.includes('product')) {
    return GENERAL_BASE_IMAGES.fabricExpert;
  }

  // Default fallback
  return GENERAL_BASE_IMAGES.groupProfessions;
}

/**
 * Get product images for a specific product type
 */
export function getProductImages(productType: string): ImageConfig[] {
  const productImageMap: Record<string, ImageConfig[]> = {
    'medical-scrubs': [
      { src: HEALTHCARE_BASE_IMAGES.primaryProduct, alt: 'Premium Medical Scrubs', altAr: 'سكراب طبي فاخر', category: 'healthcare' },
      { src: HEALTHCARE_BASE_IMAGES.doctor, alt: 'Doctor Medical Uniform', altAr: 'زي طبيب', category: 'healthcare' },
      { src: HEALTHCARE_BASE_IMAGES.nurse, alt: 'Nursing Uniform', altAr: 'زي تمريض', category: 'healthcare' },
    ],
    'lab-coat': [
      { src: HEALTHCARE_BASE_IMAGES.labCoat, alt: 'Professional Lab Coat', altAr: 'معطف مختبر', category: 'healthcare' },
      { src: HEALTHCARE_BASE_IMAGES.fullDoctor, alt: 'Full Doctor Uniform', altAr: 'زي طبيب كامل', category: 'healthcare' },
    ],
    'corporate-suit': [
      { src: CORPORATE_BASE_IMAGES.executiveSuit, alt: 'Executive Corporate Suit', altAr: 'بدلة تنفيذية', category: 'corporate' },
      { src: CORPORATE_BASE_IMAGES.corporateUniform, alt: 'Corporate Formal Uniform', altAr: 'زي رسمي للشركات', category: 'corporate' },
    ],
    'hotel-uniform': [
      { src: HOSPITALITY_BASE_IMAGES.formal, alt: 'Hotel Staff Uniform', altAr: 'زي موظفي الفندق', category: 'hospitality' },
      { src: HOSPITALITY_BASE_IMAGES.concierge, alt: 'Concierge Uniform', altAr: 'زي الكونسيرج', category: 'hospitality' },
    ],
    'chef-uniform': [
      { src: HOSPITALITY_BASE_IMAGES.chef, alt: 'Professional Chef Uniform', altAr: 'زي طاهي محترف', category: 'hospitality' },
      { src: HOSPITALITY_BASE_IMAGES.chefsGroup, alt: 'Chef Team Uniforms', altAr: 'أزياء فريق الطهاة', category: 'hospitality' },
    ],
    'airline-uniform': [
      { src: AVIATION_BASE_IMAGES.hero, alt: 'Airline Crew Uniform', altAr: 'زي طاقم الطيران', category: 'aviation' },
      { src: AVIATION_BASE_IMAGES.flightAttendant, alt: 'Flight Attendant Uniform', altAr: 'زي مضيفة طيران', category: 'aviation' },
    ],
    'industrial-coverall': [
      { src: INDUSTRIAL_BASE_IMAGES.coverall, alt: 'Industrial Coverall', altAr: 'أفرول صناعي', category: 'industrial' },
      { src: INDUSTRIAL_BASE_IMAGES.worker, alt: 'Factory Worker Uniform', altAr: 'زي عامل مصنع', category: 'industrial' },
    ],
    'school-uniform': [
      { src: EDUCATION_BASE_IMAGES.students, alt: 'School Students Uniform', altAr: 'زي طلاب المدرسة', category: 'education' },
      { src: EDUCATION_BASE_IMAGES.premiumSchool, alt: 'Premium School Uniform', altAr: 'زي مدرسي فاخر', category: 'education' },
    ],
    'security-uniform': [
      { src: SECURITY_BASE_IMAGES.confident, alt: 'Security Officer Uniform', altAr: 'زي ضابط أمن', category: 'security' },
      { src: SECURITY_BASE_IMAGES.tacticalVest, alt: 'Tactical Security Vest', altAr: 'سترة أمنية تكتيكية', category: 'security' },
    ],
  };

  return productImageMap[productType] || [
    { src: GENERAL_BASE_IMAGES.fabricExpert, alt: 'Professional Uniform', altAr: 'زي مهني', category: 'general' }
  ];
}

/**
 * Get blog images for a specific topic
 */
export function getBlogImage(topic: string): string {
  const topicLower = topic.toLowerCase();
  
  if (topicLower.includes('healthcare') || topicLower.includes('medical')) {
    return BLOG_IMAGES.healthcareUniforms;
  }
  if (topicLower.includes('corporate') || topicLower.includes('business')) {
    return BLOG_IMAGES.corporateAttire;
  }
  if (topicLower.includes('hospitality') || topicLower.includes('hotel')) {
    return BLOG_IMAGES.hospitalityUniforms;
  }
  if (topicLower.includes('industrial') || topicLower.includes('safety')) {
    return BLOG_IMAGES.industrialSafety;
  }
  if (topicLower.includes('sustainable') || topicLower.includes('eco')) {
    return BLOG_IMAGES.sustainableFabrics;
  }
  if (topicLower.includes('school') || topicLower.includes('education')) {
    return BLOG_IMAGES.schoolUniforms;
  }
  if (topicLower.includes('security')) {
    return BLOG_IMAGES.securityUniforms;
  }
  if (topicLower.includes('textile') || topicLower.includes('fabric')) {
    return BLOG_IMAGES.textileInnovations;
  }
  if (topicLower.includes('vision') || topicLower.includes('2030')) {
    return BLOG_IMAGES.vision2030;
  }
  if (topicLower.includes('retail')) {
    return BLOG_IMAGES.sustainableRetail;
  }

  return BLOG_IMAGES.modernDesign;
}

/**
 * Get author/avatar image
 */
export function getAuthorImage(authorName?: string): string {
  if (!authorName) return AUTHOR_IMAGES.arabMan;
  
  const nameLower = authorName.toLowerCase();
  
  if (nameLower.includes('abdullah') || nameLower.includes('qahtani')) {
    return AUTHOR_IMAGES.abdullahQahtani;
  }
  if (nameLower.includes('sara') || nameLower.includes('harbi')) {
    return AUTHOR_IMAGES.saraHarbi;
  }
  if (nameLower.includes('mohammed') || nameLower.includes('otaibi')) {
    return AUTHOR_IMAGES.mohammedOtaibi;
  }
  if (nameLower.includes('lina') || nameLower.includes('rashid')) {
    return AUTHOR_IMAGES.linaRashid;
  }
  
  // Default professional image
  return AUTHOR_IMAGES.arabMan;
}

/**
 * Get location-specific image
 */
export function getLocationImage(location: string): string {
  const locationLower = location.toLowerCase();
  
  if (locationLower.includes('riyadh')) return LOCATION_IMAGES.riyadh;
  if (locationLower.includes('jeddah')) return LOCATION_IMAGES.jeddah;
  if (locationLower.includes('dammam')) return LOCATION_IMAGES.dammam;
  if (locationLower.includes('mecca') || locationLower.includes('makkah')) return LOCATION_IMAGES.mecca;
  if (locationLower.includes('medina') || locationLower.includes('madinah')) return LOCATION_IMAGES.medina;
  
  return LOCATION_IMAGES.saudiMap;
}

// ============================================
// EXPORTS
// ============================================
export default {
  getCategoryImage,
  resolvePlaceholderImage,
  getProductImages,
  getBlogImage,
  getAuthorImage,
  getLocationImage,
  HEALTHCARE_BASE_IMAGES,
  CORPORATE_BASE_IMAGES,
  HOSPITALITY_BASE_IMAGES,
  AVIATION_BASE_IMAGES,
  INDUSTRIAL_BASE_IMAGES,
  EDUCATION_BASE_IMAGES,
  SECURITY_BASE_IMAGES,
  RETAIL_BASE_IMAGES,
  GENERAL_BASE_IMAGES,
  AUTHOR_IMAGES,
  LOCATION_IMAGES,
  BLOG_IMAGES,
};

