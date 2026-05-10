/**
 * UI string registry — every visible piece of fixed copy on the site lives here,
 * keyed by lang. Routes pass `lang` to components; components read from this.
 *
 * Add a new key in BOTH languages or it won't compile. This is by design.
 */

export type Lang = 'en' | 'ar';

export const UI = {
  en: {
    nav: {
      industries: 'Industries',
      locations: 'Locations',
      services: 'Services',
      shop: 'Shop',
      resources: 'Resources',
      caseStudies: 'Case Studies',
      blog: 'Editorial',
      contact: 'Contact',
      requestQuote: 'Request Quote',
      switchLang: 'عربي',
      switchLangAria: 'Switch to Arabic',
      tagline: 'Saudi Professional Uniforms',
      home: 'Home',
      menu: 'Menu',
      close: 'Close'
    },
    cta: {
      requestQuote: 'Request a quote',
      talkToOps: 'Talk to operations',
      talkToUs: 'Talk to us',
      explore: 'Explore',
      readMore: 'Read more',
      readGuide: 'Read the guide',
      seeMore: 'See more',
      backToHome: 'Back to home',
      browseIndustries: 'Browse industries',
      sendBrief: 'Send the brief →',
      apply: 'Apply',
      sendCv: 'Send a CV',
      verifyHere: 'Verify here'
    },
    footer: {
      industries: 'Industries',
      services: 'Services',
      majorCities: 'Major Cities',
      company: 'Company',
      compliance: 'Compliance',
      legal: 'Legal',
      privacy: 'Privacy',
      terms: 'Terms',
      license: 'License',
      sitemap: 'Sitemap',
      allCities: 'All 24 cities →',
      allRights: 'All rights reserved.',
      tagline: 'Saudi Arabia\'s professional uniform partner. Twelve years of bulk programmes for healthcare, hospitality, aviation, manufacturing, and beyond — across all 24 cities.'
    },
    breadcrumb: {
      home: 'Home',
      ariaLabel: 'Breadcrumb'
    },
    sections: {
      onThisPage: 'On this page',
      contents: 'Contents',
      keyFeatures: 'Key features',
      programmeSpec: 'Programme spec',
      programmeEconomics: 'Programme economics',
      averagePerUnit: 'Average per-unit',
      leadTime: 'Lead time',
      warranty: 'Warranty',
      from: 'From',
      sizes: 'Sizes',
      colours: 'Colours',
      compliance: 'Compliance',
      fabric: 'Fabric',
      weight: 'Weight',
      relatedProducts: 'Related products',
      industryPillar: 'Industry pillar',
      category: 'Category',
      featuredProduct: 'Featured product',
      deepGuide: 'Deep guide',
      caseStudy: 'Case study',
      moreResources: 'More resources',
      moreCaseStudies: 'More case studies',
      editorial: 'Editorial',
      products: 'Products',
      resources: 'Resources',
      standardsAuthorities: 'Standards & Authorities',
      everyClaimAnchored: 'Every claim on this page is anchored to a verifiable Saudi or international body.',
      latest: 'Latest',
      sinceXyears: (n: number) => `Saudi Arabia · Since ${n} years ago`,
      industrySilo: 'Industry silo',
      geoCoverage: 'Geographic coverage',
      city: 'City',
      stats: {
        clients: 'Saudi enterprises',
        cities: 'Cities served',
        industries: 'Industry silos',
        years: 'Years in market'
      },
      faqHeading: 'Frequently asked',
      reviewedBy: 'Reviewed by'
    },
    quote: {
      industry: 'Which industry?',
      industryHelp: 'We tailor the proposal to your sector\'s regulators.',
      industryPlaceholder: 'Select an industry...',
      headcount: 'How many employees?',
      headcountHelp: 'Programme economics shift around 200, 1000, and 5000 employees.',
      headcountPlaceholder: 'Select a band...',
      city: 'Primary city of operations',
      cityHelp: 'If multi-city, pick the largest. We\'ll cover the rest.',
      cityPlaceholder: 'Select a city...',
      yourDetails: 'Your details',
      name: 'Name',
      company: 'Company',
      email: 'Work email',
      phone: 'Phone (optional)',
      notes: 'Anything specific?',
      notesPlaceholder: 'Existing programme, target launch date, custom designs...',
      sendBrief: 'Send the brief →',
      noMarketing: 'We\'ll respond within one business day. No marketing emails.'
    }
  },

  ar: {
    nav: {
      industries: 'القطاعات',
      locations: 'المدن',
      services: 'الخدمات',
      shop: 'المتجر',
      resources: 'الأدلة',
      caseStudies: 'دراسات الحالة',
      blog: 'المدوّنة',
      contact: 'اتصل بنا',
      requestQuote: 'اطلب عرض سعر',
      switchLang: 'EN',
      switchLangAria: 'التحويل إلى الإنجليزية',
      tagline: 'الأزياء المهنية السعودية',
      home: 'الرئيسية',
      menu: 'القائمة',
      close: 'إغلاق'
    },
    cta: {
      requestQuote: 'اطلب عرض سعر',
      talkToOps: 'تواصل مع العمليات',
      talkToUs: 'تواصل معنا',
      explore: 'استكشف',
      readMore: 'اقرأ المزيد',
      readGuide: 'اقرأ الدليل',
      seeMore: 'شاهد المزيد',
      backToHome: 'العودة للرئيسية',
      browseIndustries: 'تصفّح القطاعات',
      sendBrief: 'أرسل الموجز ←',
      apply: 'تقدّم',
      sendCv: 'أرسل سيرتك الذاتية',
      verifyHere: 'تحقّق هنا'
    },
    footer: {
      industries: 'القطاعات',
      services: 'الخدمات',
      majorCities: 'المدن الرئيسية',
      company: 'الشركة',
      compliance: 'الامتثال',
      legal: 'القانوني',
      privacy: 'الخصوصية',
      terms: 'الشروط',
      license: 'الترخيص',
      sitemap: 'خريطة الموقع',
      allCities: 'كل الـ 24 مدينة ←',
      allRights: 'جميع الحقوق محفوظة.',
      tagline: 'شريك المملكة العربية السعودية في الأزياء المهنية. اثنا عشر عاماً من برامج الزي المؤسسي للرعاية الصحية والضيافة والطيران والتصنيع، وعبر جميع الـ24 مدينة.'
    },
    breadcrumb: {
      home: 'الرئيسية',
      ariaLabel: 'مسار التنقّل'
    },
    sections: {
      onThisPage: 'في هذه الصفحة',
      contents: 'المحتويات',
      keyFeatures: 'المزايا الرئيسية',
      programmeSpec: 'مواصفات البرنامج',
      programmeEconomics: 'اقتصاديات البرنامج',
      averagePerUnit: 'متوسّط السعر للقطعة',
      leadTime: 'مدّة التسليم',
      warranty: 'الضمان',
      from: 'يبدأ من',
      sizes: 'المقاسات',
      colours: 'الألوان',
      compliance: 'الاعتماد',
      fabric: 'القماش',
      weight: 'الوزن',
      relatedProducts: 'منتجات ذات صلة',
      industryPillar: 'القطاع',
      category: 'التصنيف',
      featuredProduct: 'منتج مميّز',
      deepGuide: 'دليل عميق',
      caseStudy: 'دراسة حالة',
      moreResources: 'مزيد من الأدلة',
      moreCaseStudies: 'مزيد من دراسات الحالة',
      editorial: 'المدوّنة',
      products: 'المنتجات',
      resources: 'الأدلة',
      standardsAuthorities: 'المعايير والجهات المرجعية',
      everyClaimAnchored: 'كل ادعاء في هذه الصفحة مرتبط بجهة سعودية أو دولية موثّقة.',
      latest: 'الأحدث',
      sinceXyears: (n: number) => `المملكة العربية السعودية · منذ ${n} عاماً`,
      industrySilo: 'محور القطاع',
      geoCoverage: 'التغطية الجغرافية',
      city: 'المدينة',
      stats: {
        clients: 'مؤسسة سعودية',
        cities: 'مدينة',
        industries: 'قطاع',
        years: 'سنة في السوق'
      },
      faqHeading: 'الأسئلة الشائعة',
      reviewedBy: 'مراجعة من'
    },
    quote: {
      industry: 'أيّ قطاع؟',
      industryHelp: 'سنخصّص الاقتراح لجهات تنظيم قطاعك.',
      industryPlaceholder: 'اختر قطاعاً...',
      headcount: 'كم عدد الموظفين؟',
      headcountHelp: 'تتغيّر اقتصاديات البرنامج عند 200 و1000 و5000 موظف.',
      headcountPlaceholder: 'اختر شريحة...',
      city: 'المدينة الرئيسية للعمليات',
      cityHelp: 'إذا كانت العمليات متعدّدة المدن، اختر الأكبر. سنغطّي الباقي.',
      cityPlaceholder: 'اختر مدينة...',
      yourDetails: 'بياناتك',
      name: 'الاسم',
      company: 'الشركة',
      email: 'البريد الإلكتروني للعمل',
      phone: 'الهاتف (اختياري)',
      notes: 'هل من تفاصيل خاصّة؟',
      notesPlaceholder: 'برنامج حالي، تاريخ إطلاق مستهدف، تصاميم مخصّصة...',
      sendBrief: 'أرسل الموجز ←',
      noMarketing: 'سنردّ خلال يوم عمل واحد. لا رسائل تسويقية.'
    }
  }
} as const;

export function t(lang: Lang) {
  return UI[lang];
}

/**
 * Build a /<path>/ URL with the right locale prefix.
 * EN at root, AR under /ar.
 */
export function localizedHref(path: string, lang: Lang): string {
  // Always start with /
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'en') return clean;
  if (clean === '/') return '/ar/';
  return `/ar${clean}`;
}
