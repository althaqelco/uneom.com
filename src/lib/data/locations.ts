export interface Location {
  id: string;
  nameEn: string;
  nameAr: string;
  addressEn: string;
  addressAr: string;
  phone: string;
  email: string;
  whatsapp: string;
  workingHoursEn: string;
  workingHoursAr: string;
  isHeadquarters: boolean;
  coordinates: {
    lat: number;
    lng: number;
  };
  postalCode: string;
  image: string;
  imageAltEn: string;
  imageAltAr: string;
  faqsEn: { question: string; answer: string }[];
  faqsAr: { question: string; answer: string }[];
  servicesEn: { icon: string; title: string; desc: string }[];
  servicesAr: { icon: string; title: string; desc: string }[];
}

export const locations: Location[] = [
  {
    id: "riyadh",
    nameEn: "Riyadh",
    nameAr: "الرياض",
    addressEn: "King Fahd Road, Olaya District, Riyadh 12214, Saudi Arabia",
    addressAr: "طريق الملك فهد، حي العليا، الرياض 12214، المملكة العربية السعودية",
    phone: "+966 56 461 2017",
    email: "riyadh@uneom.com",
    whatsapp: "+966564612017",
    workingHoursEn: "Sunday - Thursday: 8:30 AM - 5:30 PM",
    workingHoursAr: "الأحد - الخميس: 8:30 صباحاً - 5:30 مساءً",
    isHeadquarters: true,
    coordinates: { lat: 24.7136, lng: 46.6753 },
    postalCode: "12214",
    image: "/images/locations/riyadh-cityscape.jpg",
    imageAltEn: "UNEOM Uniforms Showroom in Riyadh",
    imageAltAr: "صالة عرض يونيوم للأزياء في الرياض",
    faqsEn: [
      { question: "Where is UNEOM located in Riyadh?", answer: "UNEOM's Riyadh headquarters is on King Fahd Road, Olaya District." },
      { question: "What are the working hours?", answer: "We are open Sun-Thu, 8:30 AM - 5:30 PM." }
    ],
    faqsAr: [
      { question: "أين يقع يونيوم في الرياض؟", answer: "يقع مقر يونيوم في الرياض على طريق الملك فهد، حي العليا." },
      { question: "ما هي ساعات العمل؟", answer: "نحن مفتوحون من الأحد إلى الخميس، من 8:30 صباحاً إلى 5:30 مساءً." }
    ],
    servicesEn: [
      { icon: "🏥", title: "Medical Uniforms", desc: "Scrubs and lab coats for hospitals" },
      { icon: "🏢", title: "Corporate Attire", desc: "Business suits and office wear" }
    ],
    servicesAr: [
      { icon: "🏥", title: "الأزياء الطبية", desc: "سكراب وبالطو للمستشفيات" },
      { icon: "🏢", title: "الملابس المؤسسية", desc: "بدلات أعمال وملابس مكاتب" }
    ]
  },
  {
    id: "jeddah",
    nameEn: "Jeddah",
    nameAr: "جدة",
    addressEn: "Prince Sultan Road, Al Rawdah District, Jeddah, Saudi Arabia",
    addressAr: "طريق الأمير سلطان، حي الروضة، جدة، المملكة العربية السعودية",
    phone: "+966 56 461 2017",
    email: "jeddah@uneom.com",
    whatsapp: "+966564612017",
    workingHoursEn: "Sunday - Thursday: 8:30 AM - 5:30 PM",
    workingHoursAr: "الأحد - الخميس: 8:30 صباحاً - 5:30 مساءً",
    isHeadquarters: false,
    coordinates: { lat: 21.5433, lng: 39.1728 },
    postalCode: "23431",
    image: "/images/locations/jeddah-city.jpg",
    imageAltEn: "UNEOM Uniforms Showroom in Jeddah",
    imageAltAr: "صالة عرض يونيوم للأزياء في جدة",
    faqsEn: [
      { question: "Do you have a showroom in Jeddah?", answer: "Yes, our Jeddah showroom is on Prince Sultan Road." }
    ],
    faqsAr: [
      { question: "هل لديكم صالة عرض في جدة؟", answer: "نعم، صالة عرضنا في جدة تقع في طريق الأمير سلطان." }
    ],
    servicesEn: [
      { icon: "🏨", title: "Hospitality Wear", desc: "Uniforms for hotels and resorts" }
    ],
    servicesAr: [
      { icon: "🏨", title: "أزياء الضيافة", desc: "زي موحد للفنادق والمنتجعات" }
    ]
  },
  {
    id: "mecca",
    nameEn: "Mecca",
    nameAr: "مكة المكرمة",
    addressEn: "Al Ibrahim Al Khalil St, Mecca, Saudi Arabia",
    addressAr: "شارع إبراهيم الخليل، مكة المكرمة، المملكة العربية السعودية",
    phone: "+966 56 461 2017",
    email: "mecca@uneom.com",
    whatsapp: "+966564612017",
    workingHoursEn: "Saturday - Thursday: 9:00 AM - 9:00 PM",
    workingHoursAr: "السبت - الخميس: 9:00 صباحاً - 9:00 مساءً",
    isHeadquarters: false,
    coordinates: { lat: 21.4225, lng: 39.8262 },
    postalCode: "24231",
    image: "/images/locations/makkah.jpg",
    imageAltEn: "UNEOM Uniforms in Mecca",
    imageAltAr: "يونيوم للأزياء في مكة المكرمة",
    faqsEn: [
      { question: "Do you supply hotel uniforms in Mecca?", answer: "Yes, we specialize in high-volume hospitality uniforms for Mecca hotels." }
    ],
    faqsAr: [
      { question: "هل توردون زي الفنادق في مكة؟", answer: "نعم، نحن متخصصون في أزياء الضيافة للفنادق الكبرى في مكة." }
    ],
    servicesEn: [
      { icon: "🏨", title: "Hospitality Wear", desc: "Hotel uniforms for pilgrims' services" }
    ],
    servicesAr: [
      { icon: "🏨", title: "أزياء الضيافة", desc: "زي فندقي لخدمات الحجاج" }
    ]
  },
  {
    id: "dammam",
    nameEn: "Dammam",
    nameAr: "الدمام",
    addressEn: "King Khalid St, Dammam, Saudi Arabia",
    addressAr: "شارع الملك خالد، الدمام، المملكة العربية السعودية",
    phone: "+966 56 461 2017",
    email: "dammam@uneom.com",
    whatsapp: "+966564612017",
    workingHoursEn: "Sunday - Thursday: 8:30 AM - 5:30 PM",
    workingHoursAr: "الأحد - الخميس: 8:30 صباحاً - 5:30 مساءً",
    isHeadquarters: false,
    coordinates: { lat: 26.4207, lng: 50.0888 },
    postalCode: "32231",
    image: "/images/locations/dammam.jpg",
    imageAltEn: "UNEOM Uniforms in Dammam",
    imageAltAr: "يونيوم للأزياء في الدمام",
    faqsEn: [
      { question: "Do you serve industrial companies in Dammam?", answer: "Yes, we are a major supplier of safety workwear for the Eastern Province." }
    ],
    faqsAr: [
      { question: "هل تخدمون الشركات الصناعية في الدمام؟", answer: "نعم، نحن مورد رئيسي لملابس السلامة في المنطقة الشرقية." }
    ],
    servicesEn: [
      { icon: "🏭", title: "Industrial Workwear", desc: "Safety wear for oil and gas industry" }
    ],
    servicesAr: [
      { icon: "🏭", title: "الملابس الصناعية", desc: "ملابس سلامة لصناعة النفط والغاز" }
    ]
  },
  {
    id: "medina",
    nameEn: "Medina",
    nameAr: "المدينة المنورة",
    addressEn: "King Fahd Rd, Medina, Saudi Arabia",
    addressAr: "طريق الملك فهد، المدينة المنورة، المملكة العربية السعودية",
    phone: "+966 56 461 2017",
    email: "medina@uneom.com",
    whatsapp: "+966564612017",
    workingHoursEn: "Saturday - Thursday: 9:00 AM - 9:00 PM",
    workingHoursAr: "السبت - الخميس: 9:00 صباحاً - 9:00 مساءً",
    isHeadquarters: false,
    coordinates: { lat: 24.4672, lng: 39.6067 },
    postalCode: "42311",
    image: "/images/locations/medina.jpg",
    imageAltEn: "UNEOM Uniforms in Medina",
    imageAltAr: "يونيوم للأزياء في المدينة المنورة",
    faqsEn: [
      { question: "Do you provide uniforms for hospitality in Medina?", answer: "Yes, we supply a wide range of uniforms for hotels and restaurants in Medina." }
    ],
    faqsAr: [
      { question: "هل توفرون زي موحد للضيافة في المدينة؟", answer: "نعم، نوفر مجموعة واسعة من أزياء الفنادق والمطاعم في المدينة." }
    ],
    servicesEn: [
      { icon: "🏨", title: "Hospitality Wear", desc: "Uniforms for tourism and hospitality" }
    ],
    servicesAr: [
      { icon: "🏨", title: "أزياء الضيافة", desc: "زي موحد للسياحة والضيافة" }
    ]
  }
];

export function getLocationById(id: string, locale: string = 'en') {
  const location = locations.find(l => l.id === id);
  if (!location) return undefined;
  return localizeLocation(location, locale);
}

export function getAllLocations(locale: string = 'en') {
  return locations.map(l => localizeLocation(l, locale));
}

function localizeLocation(location: Location, locale: string) {
  const isAr = locale === 'ar';
  return {
    id: location.id,
    name: isAr ? location.nameAr : location.nameEn,
    address: isAr ? location.addressAr : location.addressEn,
    phone: location.phone,
    email: location.email,
    whatsapp: location.whatsapp,
    workingHours: isAr ? location.workingHoursAr : location.workingHoursEn,
    isHeadquarters: location.isHeadquarters,
    coordinates: location.coordinates,
    postalCode: location.postalCode,
    image: location.image,
    imageAlt: isAr ? location.imageAltAr : location.imageAltEn,
    faqs: isAr ? location.faqsAr : location.faqsEn,
    services: isAr ? location.servicesAr : location.servicesEn,
    href: isAr ? `/ar/locations/${location.id}` : `/locations/${location.id}`
  };
}
