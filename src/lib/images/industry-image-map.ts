/**
 * Industry Image Mapping
 * خريطة الصور حسب القطاع
 * 
 * This module provides intelligent image selection for each industry
 * based on the available images in the project.
 */

export interface IndustryImage {
  src: string;
  alt: string;
  altAr: string;
  category: string;
  tags: string[];
}

export interface IndustryImageSet {
  hero: IndustryImage;
  featured: IndustryImage[];
  products: IndustryImage[];
  gallery: IndustryImage[];
  testimonial?: IndustryImage;
}

/**
 * Healthcare Industry Images
 */
export const HEALTHCARE_IMAGES: IndustryImageSet = {
  hero: {
    src: '/images/Healthcare_Uniforms.png',
    alt: 'Premium healthcare uniforms and medical scrubs for Saudi Arabian hospitals',
    altAr: 'أزياء طبية فاخرة وسكرابز للمستشفيات السعودية',
    category: 'healthcare',
    tags: ['hero', 'healthcare', 'medical', 'hospital']
  },
  featured: [
    {
      src: '/images/PremiumـMedicalـScrubs.png',
      alt: 'Premium medical scrubs with antimicrobial protection',
      altAr: 'سكرابز طبية فاخرة مع حماية مضادة للبكتيريا',
      category: 'healthcare',
      tags: ['scrubs', 'medical', 'premium']
    },
    {
      src: '/images/healthcare/healthcare_medical_doctor_uniform.jpg',
      alt: 'Professional doctor uniform in Saudi hospital',
      altAr: 'زي طبيب احترافي في مستشفى سعودي',
      category: 'healthcare',
      tags: ['doctor', 'medical', 'professional']
    },
    {
      src: '/images/healthcare/healthcare_nurce_uniform.jpg',
      alt: 'Comfortable nursing uniform for healthcare professionals',
      altAr: 'زي تمريض مريح للعاملين في القطاع الصحي',
      category: 'healthcare',
      tags: ['nursing', 'medical', 'comfortable']
    }
  ],
  products: [
    {
      src: '/images/products/scrubs-set.jpg',
      alt: 'Complete medical scrubs set',
      altAr: 'طقم سكرابز طبي كامل',
      category: 'healthcare',
      tags: ['scrubs', 'set', 'complete']
    },
    {
      src: '/images/products/lab-coat.jpg',
      alt: 'Professional white lab coat',
      altAr: 'معطف مختبر أبيض احترافي',
      category: 'healthcare',
      tags: ['lab-coat', 'white', 'professional']
    },
    {
      src: '/images/products/nursing-uniform.jpg',
      alt: 'Modern nursing uniform design',
      altAr: 'تصميم زي تمريض حديث',
      category: 'healthcare',
      tags: ['nursing', 'modern', 'design']
    }
  ],
  gallery: [
    {
      src: '/images/healthcare/medical_hijab_uniform.jpg',
      alt: 'Modest medical uniform with hijab for Saudi healthcare workers',
      altAr: 'زي طبي محتشم مع حجاب للعاملات السعوديات في القطاع الصحي',
      category: 'healthcare',
      tags: ['hijab', 'modest', 'saudi']
    },
    {
      src: '/images/doctors-team-walking-in-modern-hospital-corridor-indoors-poeople-group-SBI-322343728.jpg',
      alt: 'Healthcare team in professional uniforms walking in hospital corridor',
      altAr: 'فريق طبي بأزياء احترافية يسير في ممر المستشفى',
      category: 'healthcare',
      tags: ['team', 'hospital', 'corridor']
    },
    {
      src: '/images/portrait-of-diverse-female-and-male-surgeons-wearing-face-masks-and-scrubs-in-hospital-SBI-351294776.jpg',
      alt: 'Surgeons in professional scrubs with face masks',
      altAr: 'جراحون بأزياء احترافية وأقنعة وجه',
      category: 'healthcare',
      tags: ['surgeons', 'scrubs', 'masks']
    }
  ],
  testimonial: {
    src: '/images/studio-portrait-of-smiling-mature-doctor-or-nurse-wearing-scrubs-against-green-screen-SBI-351289040.jpg',
    alt: 'Smiling healthcare professional in UNEOM scrubs',
    altAr: 'متخصص صحي مبتسم بسكرابز يونيوم',
    category: 'healthcare',
    tags: ['portrait', 'smile', 'professional']
  }
};

/**
 * Corporate Industry Images
 */
export const CORPORATE_IMAGES: IndustryImageSet = {
  hero: {
    src: '/images/Corporate_Uniforms_Business.png',
    alt: 'Professional corporate uniforms for Saudi businesses',
    altAr: 'أزياء شركات احترافية للأعمال السعودية',
    category: 'corporate',
    tags: ['hero', 'corporate', 'business']
  },
  featured: [
    {
      src: '/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg',
      alt: 'Business professionals in corporate attire during meeting',
      altAr: 'محترفون أعمال بأزياء رسمية في اجتماع',
      category: 'corporate',
      tags: ['meeting', 'professionals', 'conference']
    },
    {
      src: '/images/industries/corporate/corporate-team.jpg',
      alt: 'Corporate team in professional uniforms',
      altAr: 'فريق شركة بأزياء مهنية',
      category: 'corporate',
      tags: ['team', 'professional', 'uniform']
    },
    {
      src: '/images/portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg',
      alt: 'Arab businessman in modern office wearing professional attire',
      altAr: 'رجل أعمال عربي في مكتب حديث بزي مهني',
      category: 'corporate',
      tags: ['arab', 'businessman', 'office']
    }
  ],
  products: [
    {
      src: '/images/products/corporate/corporate-suit-executive.jpg',
      alt: 'Executive corporate suit for business professionals',
      altAr: 'بدلة تنفيذية للمحترفين في الأعمال',
      category: 'corporate',
      tags: ['suit', 'executive', 'professional']
    },
    {
      src: '/images/products/corporate/corporate-shirts-blouses.jpg',
      alt: 'Professional corporate shirts and blouses',
      altAr: 'قمصان وبلوزات مهنية للشركات',
      category: 'corporate',
      tags: ['shirts', 'blouses', 'professional']
    },
    {
      src: '/images/products/corporate/corporate-polo-shirts.jpg',
      alt: 'Corporate polo shirts with company branding',
      altAr: 'قمصان بولو للشركات مع شعار الشركة',
      category: 'corporate',
      tags: ['polo', 'branding', 'casual']
    }
  ],
  gallery: [
    {
      src: '/images/modern-arabic-businessman-SBI-300984397.jpg',
      alt: 'Modern Arabic businessman in professional attire',
      altAr: 'رجل أعمال عربي حديث بزي مهني',
      category: 'corporate',
      tags: ['arabic', 'modern', 'professional']
    },
    {
      src: '/images/woman-in-business-casual-attire-smiling-SBI-300979979.jpg',
      alt: 'Professional woman in business casual attire',
      altAr: 'سيدة محترفة بزي عمل كاجوال',
      category: 'corporate',
      tags: ['woman', 'casual', 'professional']
    },
    {
      src: '/images/men-shaking-hands-over-business-meeting-2025-01-25-05-47-49-utc.jpg',
      alt: 'Business handshake during professional meeting',
      altAr: 'مصافحة أعمال خلال اجتماع مهني',
      category: 'corporate',
      tags: ['handshake', 'meeting', 'business']
    }
  ]
};

/**
 * Hospitality Industry Images
 */
export const HOSPITALITY_IMAGES: IndustryImageSet = {
  hero: {
    src: '/images/Luxury_Hotel Staff_Uniform.png',
    alt: 'Luxury hotel staff uniforms for Saudi hospitality industry',
    altAr: 'أزياء موظفي الفنادق الفاخرة لقطاع الضيافة السعودي',
    category: 'hospitality',
    tags: ['hero', 'hotel', 'luxury']
  },
  featured: [
    {
      src: '/images/hospitality_uniform_formal.jpg',
      alt: 'Formal hospitality uniform for hotel staff',
      altAr: 'زي ضيافة رسمي لموظفي الفندق',
      category: 'hospitality',
      tags: ['formal', 'hotel', 'staff']
    },
    {
      src: '/images/hospitality_uniform_concierge.jpg',
      alt: 'Professional concierge uniform',
      altAr: 'زي كونسيرج احترافي',
      category: 'hospitality',
      tags: ['concierge', 'professional', 'uniform']
    },
    {
      src: '/images/group-of-chefs-standing-with-arms-crossed-in-kitch-2023-11-27-05-01-36-utc.jpg',
      alt: 'Professional chefs in culinary uniforms',
      altAr: 'طهاة محترفون بأزياء الطهي',
      category: 'hospitality',
      tags: ['chefs', 'culinary', 'kitchen']
    }
  ],
  products: [
    {
      src: '/images/hospitality_uniform_department.jpg',
      alt: 'Hospitality uniforms for different departments',
      altAr: 'أزياء الضيافة للأقسام المختلفة',
      category: 'hospitality',
      tags: ['departments', 'variety', 'uniform']
    },
    {
      src: '/images/hospitality_uniform_buttons.jpg',
      alt: 'Premium hospitality uniform details and buttons',
      altAr: 'تفاصيل وأزرار أزياء الضيافة الفاخرة',
      category: 'hospitality',
      tags: ['details', 'buttons', 'premium']
    },
    {
      src: '/images/hospitality_uniform_fabric.jpg',
      alt: 'High-quality fabric for hospitality uniforms',
      altAr: 'قماش عالي الجودة لأزياء الضيافة',
      category: 'hospitality',
      tags: ['fabric', 'quality', 'material']
    }
  ],
  gallery: [
    {
      src: '/images/cook-flavoring-his-best-meal-2024-11-29-22-42-39-utc.jpg',
      alt: 'Chef in professional uniform preparing food',
      altAr: 'شيف بزي مهني يحضر الطعام',
      category: 'hospitality',
      tags: ['chef', 'cooking', 'professional']
    },
    {
      src: '/images/smiling-handsome-african-american-chef-squeezing-l-2024-11-18-08-59-30-utc.jpg',
      alt: 'Professional chef in pristine uniform',
      altAr: 'طاهي محترف بزي نظيف',
      category: 'hospitality',
      tags: ['chef', 'smile', 'professional']
    },
    {
      src: '/images/hospitality_uniform_custom_logo.jpg',
      alt: 'Custom logo on hospitality uniform',
      altAr: 'شعار مخصص على زي الضيافة',
      category: 'hospitality',
      tags: ['custom', 'logo', 'branding']
    }
  ]
};

/**
 * Aviation Industry Images
 */
export const AVIATION_IMAGES: IndustryImageSet = {
  hero: {
    src: '/images/Airline_Crew_Uniform.png',
    alt: 'Professional airline crew uniforms for Saudi aviation industry',
    altAr: 'أزياء طاقم الطيران الاحترافية لقطاع الطيران السعودي',
    category: 'aviation',
    tags: ['hero', 'airline', 'crew']
  },
  featured: [
    {
      src: '/images/cheerful-airline-workers-standing-in-airfield-unde-2024-10-20-08-49-20-utc.jpg',
      alt: 'Airline workers in professional uniforms at airfield',
      altAr: 'عمال طيران بأزياء مهنية في المطار',
      category: 'aviation',
      tags: ['airline', 'workers', 'airfield']
    },
    {
      src: '/images/cheerful-flight-attendant-standing-in-airport-term-2024-10-18-08-12-48-utc.jpg',
      alt: 'Flight attendant in elegant uniform at airport terminal',
      altAr: 'مضيفة طيران بزي أنيق في صالة المطار',
      category: 'aviation',
      tags: ['flight-attendant', 'airport', 'elegant']
    },
    {
      src: '/images/two-beautiful-stewardesses-and-an-airman-staring-a-2024-10-21-02-06-10-utc.jpg',
      alt: 'Professional airline crew in matching uniforms',
      altAr: 'طاقم طيران محترف بأزياء متناسقة',
      category: 'aviation',
      tags: ['crew', 'stewardess', 'professional']
    }
  ],
  products: [
    {
      src: '/images/products/aviation/airline-1.jpg',
      alt: 'Premium airline uniform collection',
      altAr: 'مجموعة أزياء طيران فاخرة',
      category: 'aviation',
      tags: ['collection', 'premium', 'airline']
    },
    {
      src: '/images/products/aviation/airline-2.jpg',
      alt: 'Flight crew professional attire',
      altAr: 'زي طاقم الطيران المهني',
      category: 'aviation',
      tags: ['crew', 'professional', 'attire']
    },
    {
      src: '/images/products/aviation/airline-3.jpg',
      alt: 'Aviation uniform accessories',
      altAr: 'إكسسوارات أزياء الطيران',
      category: 'aviation',
      tags: ['accessories', 'aviation', 'uniform']
    }
  ],
  gallery: [
    {
      src: '/images/smiling-airplane-crew-members-walking-together-on-2023-11-27-05-07-27-utc.jpg',
      alt: 'Smiling airplane crew walking together',
      altAr: 'طاقم طائرة مبتسم يسير معاً',
      category: 'aviation',
      tags: ['crew', 'walking', 'together']
    },
    {
      src: '/images/joyful-stewardesses-standing-near-aircraft-at-airp-2023-11-27-04-49-34-utc.jpg',
      alt: 'Joyful stewardesses near aircraft',
      altAr: 'مضيفات مرحات بجانب الطائرة',
      category: 'aviation',
      tags: ['stewardesses', 'aircraft', 'joyful']
    },
    {
      src: '/images/the-aviators-stance-2024-11-16-08-18-21-utc.jpg',
      alt: 'Professional aviator in uniform',
      altAr: 'طيار محترف بالزي الرسمي',
      category: 'aviation',
      tags: ['aviator', 'professional', 'stance']
    }
  ]
};

/**
 * Industrial/Manufacturing Images
 */
export const INDUSTRIAL_IMAGES: IndustryImageSet = {
  hero: {
    src: '/images/ Industrial_Manufacturing_Uniforms .png',
    alt: 'Industrial and manufacturing uniforms for Saudi factories',
    altAr: 'أزياء صناعية وتصنيعية للمصانع السعودية',
    category: 'industrial',
    tags: ['hero', 'industrial', 'manufacturing']
  },
  featured: [
    {
      src: '/images/Heavy_Duty_Industrial_Coverall.png',
      alt: 'Heavy duty industrial coverall for factory workers',
      altAr: 'أفرول صناعي ثقيل لعمال المصانع',
      category: 'industrial',
      tags: ['coverall', 'heavy-duty', 'factory']
    },
    {
      src: '/images/factory-worker-portrait-industrial-man-looking-at-camera-close-up-of-industry-worker-p-SBI-351092701.jpg',
      alt: 'Industrial worker in professional uniform',
      altAr: 'عامل صناعي بزي مهني',
      category: 'industrial',
      tags: ['worker', 'portrait', 'industrial']
    },
    {
      src: '/images/selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg',
      alt: 'Factory worker operating machinery in protective uniform',
      altAr: 'عامل مصنع يشغل الآلات بزي واقي',
      category: 'industrial',
      tags: ['machinery', 'protective', 'factory']
    }
  ],
  products: [
    {
      src: '/images/products/industrial/factory-1.jpg',
      alt: 'Factory uniform for industrial workers',
      altAr: 'زي مصنع للعمال الصناعيين',
      category: 'industrial',
      tags: ['factory', 'uniform', 'workers']
    },
    {
      src: '/images/products/industrial/safety-1.jpg',
      alt: 'Safety uniform with protective features',
      altAr: 'زي سلامة مع ميزات واقية',
      category: 'industrial',
      tags: ['safety', 'protective', 'features']
    },
    {
      src: '/images/products/industrial/heavy-duty-coverall-featured.svg',
      alt: 'Heavy duty coverall features diagram',
      altAr: 'رسم تخطيطي لميزات الأفرول الثقيل',
      category: 'industrial',
      tags: ['coverall', 'features', 'diagram']
    }
  ],
  gallery: [
    {
      src: '/images/industries/Factory_Industrial/Factory_Industrial_Workwear_2.jpg',
      alt: 'Industrial workwear for Saudi factories',
      altAr: 'ملابس عمل صناعية للمصانع السعودية',
      category: 'industrial',
      tags: ['workwear', 'factory', 'saudi']
    },
    {
      src: '/images/industries/manufacturing/manufacturing_uniform_main.jpg',
      alt: 'Main manufacturing uniform collection',
      altAr: 'مجموعة أزياء التصنيع الرئيسية',
      category: 'industrial',
      tags: ['manufacturing', 'collection', 'main']
    },
    {
      src: '/images/a-brunette-man-with-a-beard-in-a-white-protective-uniform-and-an-orange-vest-presses-c-SBI-351495165.jpg',
      alt: 'Worker in protective uniform with safety vest',
      altAr: 'عامل بزي واقي مع سترة سلامة',
      category: 'industrial',
      tags: ['protective', 'safety-vest', 'worker']
    }
  ]
};

/**
 * Education Industry Images
 */
export const EDUCATION_IMAGES: IndustryImageSet = {
  hero: {
    src: '/images/group-of-elementary-school-pupils-wearing-uniform-2024-10-19-12-09-06-utc.jpg',
    alt: 'Elementary school students in professional uniforms',
    altAr: 'طلاب المرحلة الابتدائية بأزياء مدرسية',
    category: 'education',
    tags: ['hero', 'school', 'students']
  },
  featured: [
    {
      src: '/images/industries/education/school-uniform-01.webp',
      alt: 'Modern Saudi school uniform design',
      altAr: 'تصميم زي مدرسي سعودي حديث',
      category: 'education',
      tags: ['school', 'modern', 'design']
    },
    {
      src: '/images/industries/education/school-uniform-02.webp',
      alt: 'Premium school uniform collection',
      altAr: 'مجموعة أزياء مدرسية فاخرة',
      category: 'education',
      tags: ['premium', 'collection', 'school']
    },
    {
      src: '/images/4k-top-view-of-little-asian-students-with-uniforms-reading-book-in-library-together-SBI-351422735.jpg',
      alt: 'Students in school uniforms reading in library',
      altAr: 'طلاب بأزياء مدرسية يقرؤون في المكتبة',
      category: 'education',
      tags: ['students', 'library', 'reading']
    }
  ],
  products: [
    {
      src: '/images/industries/education/school-uniform-03.webp',
      alt: 'Boys school uniform set',
      altAr: 'طقم زي مدرسي للأولاد',
      category: 'education',
      tags: ['boys', 'uniform', 'set']
    },
    {
      src: '/images/industries/education/school-uniform-04.webp',
      alt: 'Girls school uniform collection',
      altAr: 'مجموعة أزياء مدرسية للبنات',
      category: 'education',
      tags: ['girls', 'collection', 'uniform']
    },
    {
      src: '/images/industries/education/school-uniform-05.webp',
      alt: 'Sports uniform for school activities',
      altAr: 'زي رياضي للأنشطة المدرسية',
      category: 'education',
      tags: ['sports', 'activities', 'uniform']
    }
  ],
  gallery: [
    {
      src: '/images/schoolchildren-pretending-to-be-businesspeople-wit-2024-11-08-16-13-21-utc.jpg',
      alt: 'Schoolchildren in professional uniforms',
      altAr: 'أطفال مدرسة بأزياء مهنية',
      category: 'education',
      tags: ['children', 'professional', 'pretend']
    },
    {
      src: '/images/back-to-elementary-school-concept-children-hold-h-2024-11-29-15-57-59-utc.jpg',
      alt: 'Back to school with new uniforms',
      altAr: 'العودة للمدرسة بأزياء جديدة',
      category: 'education',
      tags: ['back-to-school', 'new', 'uniforms']
    },
    {
      src: '/images/group-of-elementary-school-pupils-wearing-uniform-folding-arms-against-red-studio-back-SBI-349929394.jpg',
      alt: 'Confident students in school uniforms',
      altAr: 'طلاب واثقون بأزياء مدرسية',
      category: 'education',
      tags: ['confident', 'students', 'studio']
    }
  ]
};

/**
 * Security Industry Images
 */
export const SECURITY_IMAGES: IndustryImageSet = {
  hero: {
    src: '/images/Military Uniform.H03.2k.png',
    alt: 'Professional security and military uniforms',
    altAr: 'أزياء أمن وعسكرية احترافية',
    category: 'security',
    tags: ['hero', 'security', 'military']
  },
  featured: [
    {
      src: '/images/industries/Security/security-uniform-main.jpg',
      alt: 'Main security uniform collection',
      altAr: 'مجموعة أزياء الأمن الرئيسية',
      category: 'security',
      tags: ['main', 'collection', 'security']
    },
    {
      src: '/images/confident-man-in-uniform-with-phone-2025-02-12-01-27-59-utc.jpg',
      alt: 'Confident security professional in uniform',
      altAr: 'محترف أمن واثق بالزي الرسمي',
      category: 'security',
      tags: ['confident', 'professional', 'phone']
    },
    {
      src: '/images/a-firefighter-giving-instructions-to-her-team-SBI-301057339.jpg',
      alt: 'Emergency services professional in uniform',
      altAr: 'محترف خدمات الطوارئ بالزي الرسمي',
      category: 'security',
      tags: ['emergency', 'firefighter', 'team']
    }
  ],
  products: [
    {
      src: '/images/products/security/executive-patrol-pants-main.svg',
      alt: 'Executive security patrol pants',
      altAr: 'بنطلون دوريات أمنية تنفيذي',
      category: 'security',
      tags: ['patrol', 'pants', 'executive']
    },
    {
      src: '/images/products/security/tactical-patrol-pants-main.svg',
      alt: 'Tactical patrol pants for security',
      altAr: 'بنطلون دوريات تكتيكي للأمن',
      category: 'security',
      tags: ['tactical', 'patrol', 'pants']
    },
    {
      src: '/images/products/security/weather-protection-kit-main.svg',
      alt: 'Weather protection kit for security personnel',
      altAr: 'طقم حماية من الطقس لأفراد الأمن',
      category: 'security',
      tags: ['weather', 'protection', 'kit']
    }
  ],
  gallery: [
    {
      src: '/images/firefighters-fight-the-fire-flame-to-control-fire-not-to-spreading-out-firefighter-ind-SBI-349465280.jpg',
      alt: 'Firefighters in action wearing protective gear',
      altAr: 'رجال إطفاء أثناء العمل بمعدات واقية',
      category: 'security',
      tags: ['firefighters', 'action', 'protective']
    }
  ]
};

/**
 * Get images for a specific industry
 */
export function getIndustryImages(industry: string): IndustryImageSet | null {
  const industryMap: Record<string, IndustryImageSet> = {
    healthcare: HEALTHCARE_IMAGES,
    corporate: CORPORATE_IMAGES,
    hospitality: HOSPITALITY_IMAGES,
    aviation: AVIATION_IMAGES,
    industrial: INDUSTRIAL_IMAGES,
    manufacturing: INDUSTRIAL_IMAGES,
    'factory-industry': INDUSTRIAL_IMAGES,
    education: EDUCATION_IMAGES,
    security: SECURITY_IMAGES
  };
  
  return industryMap[industry.toLowerCase()] || null;
}

/**
 * Get a random image from a category
 */
export function getRandomIndustryImage(industry: string, category: 'hero' | 'featured' | 'products' | 'gallery'): IndustryImage | null {
  const images = getIndustryImages(industry);
  if (!images) return null;
  
  if (category === 'hero') return images.hero;
  
  const categoryImages = images[category];
  if (!categoryImages || categoryImages.length === 0) return null;
  
  return categoryImages[Math.floor(Math.random() * categoryImages.length)];
}

/**
 * Get image by tag
 */
export function getImageByTag(industry: string, tag: string): IndustryImage | null {
  const images = getIndustryImages(industry);
  if (!images) return null;
  
  // Search all categories
  const allImages = [
    images.hero,
    ...images.featured,
    ...images.products,
    ...images.gallery
  ];
  
  return allImages.find(img => img.tags.includes(tag)) || null;
}

export default {
  HEALTHCARE_IMAGES,
  CORPORATE_IMAGES,
  HOSPITALITY_IMAGES,
  AVIATION_IMAGES,
  INDUSTRIAL_IMAGES,
  EDUCATION_IMAGES,
  SECURITY_IMAGES,
  getIndustryImages,
  getRandomIndustryImage,
  getImageByTag
};

