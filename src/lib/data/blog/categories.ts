import type { BlogCategory } from './index';

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    slug: 'healthcare',
    nameEn: 'Healthcare',
    nameAr: 'الرعاية الصحية',
    description: 'Medical scrubs, fabric science, infection control, and the operational realities of Saudi hospital uniform programmes — written with practitioners, not at them.',
    descriptionAr: 'السكراب الطبي، علم المنسوجات، مكافحة العدوى، والواقع التشغيلي لبرامج الزي الموحد في المستشفيات السعودية — كتبناها مع الممارسين، وليس التنظير عليهم.',
    industries: ['healthcare']
  },
  {
    slug: 'hospitality',
    nameEn: 'Hospitality & F&B',
    nameAr: 'الضيافة',
    description: 'Front-of-house, F&B, and housekeeping — the design and operations of uniform programmes for Saudi hotels, restaurants, and the Hajj season.',
    descriptionAr: 'الاستقبال، الأغذية والمشروبات، والتدبير المنزلي — تصميم وعمليات برامج الزي الموحد للفنادق والمطاعم السعودية وموسم الحج.',
    industries: ['hospitality']
  },
  {
    slug: 'aviation',
    nameEn: 'Aviation',
    nameAr: 'الطيران',
    description: 'Crew uniforms, ground operations, GACA compliance, and the design language of Saudi aviation.',
    descriptionAr: 'أزياء طواقم الطيران، العمليات الأرضية، امتثال GACA، ولغة التصميم الخاصة بقطاع الطيران السعودي.',
    industries: ['aviation']
  },
  {
    slug: 'corporate-education',
    nameEn: 'Corporate & Education',
    nameAr: 'المؤسسات والتعليم',
    description: 'Executive attire, corporate identity programmes, and school uniforms across the Saudi enterprise and education landscape.',
    descriptionAr: 'الأزياء التنفيذية، برامج الهوية المؤسسية، والزي المدرسي عبر مشهد الشركات والتعليم في السعودية.',
    industries: ['corporate', 'education', 'retail']
  },
  {
    slug: 'manufacturing-safety',
    nameEn: 'Manufacturing & Safety',
    nameAr: 'التصنيع والسلامة',
    description: 'FR coveralls, hi-vis programmes, HCIS compliance, and the engineering of industrial workwear for Saudi heat-soak environments.',
    descriptionAr: 'أفرولات FR المقاومة للحريق، برامج السترات العاكسة، امتثال HCIS، وهندسة ملابس العمل الصناعية لبيئات الحرارة الشديدة في السعودية.',
    industries: ['manufacturing', 'security']
  },
  {
    slug: 'sustainability-trends',
    nameEn: 'Sustainability & Trends',
    nameAr: 'الاستدامة والاتجاهات',
    description: 'OEKO-TEX, recycled-poly programmes, end-of-life take-back, and the cross-industry shifts shaping how Saudi enterprises buy uniforms.',
    descriptionAr: 'شهادات OEKO-TEX، برامج البوليستر المعاد تدويره، استرداد الأزياء التالفة، والتحولات الشاملة للقطاعات التي تشكل كيفية شراء الشركات السعودية لأزيائها.',
    industries: []
  }
];
