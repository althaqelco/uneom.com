import type { ProductCategory } from './index';

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  { 
    slug: 'medical-scrubs', 
    nameEn: 'Medical Scrubs', 
    nameAr: 'الزي الطبي', 
    industry: 'healthcare', 
    summary: 'Antimicrobial scrub sets, lab coats, and clinical attire — MoH-compliant for Saudi hospitals.', 
    summaryAr: 'أطقم سكراب مضادة للميكروبات، معاطف مختبر، وأزياء سريرية — مطابقة لمواصفات وزارة الصحة للمستشفيات السعودية.',
    hero: 'heroes/healthcare-pillar-hero' 
  },
  { 
    slug: 'hospitality-attire', 
    nameEn: 'Hospitality Attire', 
    nameAr: 'زي الضيافة', 
    industry: 'hospitality', 
    summary: 'Front-of-house, F&B, housekeeping, and concierge uniforms for Saudi luxury hotels and the Hajj season.', 
    summaryAr: 'أزياء الاستقبال، الأغذية والمشروبات، التدبير المنزلي، وخدمات الإرشاد للفنادق السعودية الفاخرة وموسم الحج.',
    hero: 'heroes/hospitality-pillar-hero' 
  },
  { 
    slug: 'aviation', 
    nameEn: 'Aviation', 
    nameAr: 'زي الطيران', 
    industry: 'aviation', 
    summary: 'Crew uniforms, ground-staff, and operations attire — GACA-compliant for Saudi aviation.', 
    summaryAr: 'أزياء طواقم الطيران، الموظفين الأرضيين، والعمليات — مطابقة لمواصفات هيئة الطيران المدني (GACA) للطيران السعودي.',
    hero: 'heroes/aviation-pillar-hero' 
  },
  { 
    slug: 'corporate', 
    nameEn: 'Corporate Workwear', 
    nameAr: 'الزي المؤسسي', 
    industry: 'corporate', 
    summary: 'Executive suits, business shirts, and corporate-identity programmes for Saudi enterprises.', 
    summaryAr: 'بدل تنفيذية، قمصان رسمية، وبرامج الهوية المؤسسية للشركات السعودية.',
    hero: 'heroes/corporate-pillar-hero' 
  },
  { 
    slug: 'education', 
    nameEn: 'Education', 
    nameAr: 'زي التعليم', 
    industry: 'education', 
    summary: 'School and university uniforms aligned to Saudi MoE guidelines and the academic growth curve.', 
    summaryAr: 'أزياء مدرسية وجامعية تتماشى مع إرشادات وزارة التعليم السعودية ومنحنى النمو الأكاديمي.',
    hero: 'heroes/education-pillar-hero' 
  },
  { 
    slug: 'manufacturing', 
    nameEn: 'Manufacturing', 
    nameAr: 'الزي الصناعي', 
    industry: 'manufacturing', 
    summary: 'FR coveralls, hi-vis jackets, and industrial PPE — HCIS-compliant for Saudi heat-soak environments.', 
    summaryAr: 'أفرولات مقاومة للحريق (FR)، سترات عاكسة، ومعدات سلامة صناعية — مطابقة لمواصفات الهيئة العليا للأمن الصناعي للبيئات شديدة الحرارة.',
    hero: 'heroes/manufacturing-pillar-hero' 
  },
  { 
    slug: 'security', 
    nameEn: 'Security', 
    nameAr: 'زي الأمن', 
    industry: 'security', 
    summary: 'Tactical and corporate security uniforms — HCIS-aligned, climate-tuned for Saudi shifts.', 
    summaryAr: 'أزياء أمنية تكتيكية ومؤسسية — متوافقة مع HCIS ومصممة لتلائم المناخ خلال نوبات العمل السعودية.',
    hero: 'heroes/security-pillar-hero' 
  },
  { 
    slug: 'retail', 
    nameEn: 'Retail', 
    nameAr: 'زي التجزئة', 
    industry: 'retail', 
    summary: 'Store-staff polos, branded apparel, and rotating retail programmes engineered for 200-cycle colour retention.', 
    summaryAr: 'قمصان بولو لموظفي المتاجر، ملابس تحمل العلامة التجارية، وبرامج تجزئة مصممة للحفاظ على اللون لأكثر من 200 غسلة.',
    hero: 'heroes/retail-pillar-hero' 
  }
];
