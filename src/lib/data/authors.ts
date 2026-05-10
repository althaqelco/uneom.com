/**
 * Author profiles used across blog posts and resources.
 * Each author is a UNEOM domain expert with verifiable credentials.
 */

export interface Author {
  slug: string;
  nameEn: string;
  nameAr: string;
  title: string;
  titleAr: string;
  bio: string;
  bioAr: string;
  image: string;
  sameAs?: string[];
}

export const AUTHORS: Author[] = [
  {
    slug: 'ahmed-al-farsi',
    nameEn: 'Ahmed Al-Farsi',
    nameAr: 'أحمد الفارسي',
    title: 'Healthcare Textiles Specialist',
    titleAr: 'أخصائي أقمشة الرعاية الصحية',
    bio: 'Ahmed leads UNEOM\'s healthcare uniform division with 8+ years of experience in medical textile engineering. He oversees compliance with MOH and SFDA standards across 38 partner hospitals.',
    bioAr: 'يقود أحمد قسم الأزياء الطبية في يونيوم بخبرة تتجاوز 8 سنوات في هندسة الأقمشة الطبية. يشرف على الامتثال لمعايير وزارة الصحة وهيئة الغذاء والدواء عبر 38 مستشفى شريك.',
    image: '/images/authors/ahmed-al-farsi.avif'
  },
  {
    slug: 'sara-al-ghamdi',
    nameEn: 'Sara Al-Ghamdi',
    nameAr: 'سارة الغامدي',
    title: 'Corporate Programmes Specialist',
    titleAr: 'أخصائية برامج الشركات',
    bio: 'Sara manages UNEOM\'s corporate and retail uniform programmes, with expertise in sustainable textile sourcing and Vision 2030 procurement frameworks.',
    bioAr: 'تدير سارة برامج أزياء الشركات والتجزئة في يونيوم، مع خبرة في مصادر الأقمشة المستدامة وأُطر مشتريات رؤية 2030.',
    image: '/images/authors/sara-al-ghamdi.avif'
  },
  {
    slug: 'khalid-al-otaibi',
    nameEn: 'Khalid Al-Otaibi',
    nameAr: 'خالد العتيبي',
    title: 'Security Programmes Lead',
    titleAr: 'مدير برامج الأمن',
    bio: 'Khalid specialises in security and industrial uniform programmes. He works with HCIS-compliant specifications and has deployed uniform programmes across 200+ security companies.',
    bioAr: 'متخصص خالد في برامج أزياء الأمن والصناعة. يعمل مع مواصفات متوافقة مع الأمن الصناعي ونشر برامج أزياء لأكثر من 200 شركة أمنية.',
    image: '/images/authors/khalid-al-otaibi.avif'
  },
  {
    slug: 'layla-al-hassan',
    nameEn: 'Layla Al-Hassan',
    nameAr: 'ليلى الحسن',
    title: 'Hospitality & Aviation Specialist',
    titleAr: 'أخصائية الضيافة والطيران',
    bio: 'Layla designs luxury hospitality and aviation crew uniform programmes for 5-star hotels and GCC airlines. Expertise in cultural compliance and premium fabric selection.',
    bioAr: 'تصمم ليلى برامج أزياء الضيافة الفاخرة وطواقم الطيران للفنادق خمس نجوم وشركات الطيران الخليجية. خبيرة في الامتثال الثقافي واختيار الأقمشة الفاخرة.',
    image: '/images/authors/layla-al-hassan.avif'
  },
  {
    slug: 'abdulaziz-al-sulami',
    nameEn: 'Eng. Abdulaziz Al-Sulami',
    nameAr: 'م. عبدالعزيز السلمي',
    title: 'Industrial Safety Engineer',
    titleAr: 'مهندس سلامة صناعية',
    bio: 'Abdulaziz is a certified safety engineer specialising in FR-rated workwear, PPE compliance, and NFPA 70E standards for manufacturing and petrochemical environments.',
    bioAr: 'عبدالعزيز مهندس سلامة معتمد متخصص في ملابس العمل المقاومة للحريق والامتثال لمعدات الحماية الشخصية ومعايير NFPA 70E للبيئات الصناعية والبتروكيماوية.',
    image: '/images/authors/abdulaziz-al-sulami.avif'
  }
];

export const AUTHORS_BY_SLUG = Object.fromEntries(
  AUTHORS.map(a => [a.slug, a])
);

export function findAuthorByName(name: string): Author | undefined {
  return AUTHORS.find(
    a => a.nameEn === name || a.nameEn.includes(name.split(' ').pop()!)
  );
}
