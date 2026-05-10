/**
 * Expert reviewers for resource guides and technical content.
 * Different from authors — reviewers validate accuracy without writing.
 * Per master-plan-v11 §29.
 */

export interface Reviewer {
  slug: string;
  nameEn: string;
  nameAr: string;
  title: string;
  titleAr: string;
  expertise: string[];
  image: string;
}

export const REVIEWERS: Reviewer[] = [
  {
    slug: 'dr-fatimah-al-rashidi',
    nameEn: 'Dr. Fatimah Al-Rashidi',
    nameAr: 'د. فاطمة الرشيدي',
    title: 'Healthcare Compliance Advisor',
    titleAr: 'مستشارة امتثال الرعاية الصحية',
    expertise: ['MOH standards', 'SFDA compliance', 'infection control textiles'],
    image: '/images/authors/reviewer-fatimah.avif'
  },
  {
    slug: 'eng-omar-al-harbi',
    nameEn: 'Eng. Omar Al-Harbi',
    nameAr: 'م. عمر الحربي',
    title: 'Industrial Safety Consultant',
    titleAr: 'استشاري سلامة صناعية',
    expertise: ['NFPA 70E', 'SASO standards', 'FR-rated materials', 'PPE compliance'],
    image: '/images/authors/reviewer-omar.avif'
  },
  {
    slug: 'nadia-al-zahrani',
    nameEn: 'Nadia Al-Zahrani',
    nameAr: 'نادية الزهراني',
    title: 'Hospitality Operations Expert',
    titleAr: 'خبيرة عمليات الضيافة',
    expertise: ['luxury hotel standards', '5-star uniform programmes', 'Hajj operations'],
    image: '/images/authors/reviewer-nadia.avif'
  }
];

export const REVIEWERS_BY_SLUG = Object.fromEntries(
  REVIEWERS.map(r => [r.slug, r])
);
