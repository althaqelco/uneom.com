/**
 * Regional Link Building Strategy
 * 
 * This utility helps identify and manage potential backlink opportunities
 * specific to different Saudi regions. It categorizes local sources by
 * region, industry relevance, and authority.
 * 
 * The strategy aligns with our previously implemented corporate content structure
 * that includes detailed Saudi business environment context and regional targeting.
 */

interface LinkOpportunity {
  name: string;
  nameAr: string;
  url: string;
  city: 'riyadh' | 'jeddah' | 'dammam' | 'makkah' | 'madinah' | 'national';
  category: 'business-directory' | 'chamber-of-commerce' | 'local-news' | 'industry-association' | 'university' | 'government';
  industryRelevance: 'healthcare' | 'corporate' | 'hospitality' | 'industrial' | 'all';
  authority: 'high' | 'medium' | 'low';
  contactEmail?: string;
  contactName?: string;
  notes?: string;
  status?: 'contacted' | 'in-progress' | 'secured' | 'rejected' | 'pending';
}

// Comprehensive database of regional link opportunities
const regionalLinkOpportunities: LinkOpportunity[] = [
  // National opportunities
  {
    name: 'Saudi Chamber of Commerce',
    nameAr: 'الغرفة التجارية السعودية',
    url: 'https://csc.org.sa/',
    city: 'national',
    category: 'chamber-of-commerce',
    industryRelevance: 'all',
    authority: 'high',
    notes: 'National business directory with high domain authority'
  },
  {
    name: 'Saudi Ministry of Commerce',
    nameAr: 'وزارة التجارة السعودية',
    url: 'https://mc.gov.sa/',
    city: 'national',
    category: 'government',
    industryRelevance: 'all',
    authority: 'high',
    notes: 'Government site with business registration database'
  },
  
  // Riyadh opportunities
  {
    name: 'Riyadh Chamber of Commerce',
    nameAr: 'الغرفة التجارية بالرياض',
    url: 'https://www.chamber.sa/',
    city: 'riyadh',
    category: 'chamber-of-commerce',
    industryRelevance: 'all',
    authority: 'high',
    contactEmail: 'info@chamber.sa',
    notes: 'Business directory listing opportunity'
  },
  {
    name: 'King Saud University',
    nameAr: 'جامعة الملك سعود',
    url: 'https://ksu.edu.sa/',
    city: 'riyadh',
    category: 'university',
    industryRelevance: 'healthcare',
    authority: 'high',
    notes: 'Medical school uniform supplier listing'
  },
  {
    name: 'Saudi Health Council',
    nameAr: 'المجلس الصحي السعودي',
    url: 'https://www.shc.gov.sa/',
    city: 'riyadh',
    category: 'government',
    industryRelevance: 'healthcare',
    authority: 'high',
    notes: 'Healthcare supplier directory'
  },
  
  // Jeddah opportunities
  {
    name: 'Jeddah Chamber of Commerce',
    nameAr: 'الغرفة التجارية بجدة',
    url: 'https://www.jcci.org.sa/',
    city: 'jeddah',
    category: 'chamber-of-commerce',
    industryRelevance: 'all',
    authority: 'high',
    contactEmail: 'info@jcci.org.sa',
    notes: 'Business directory listing opportunity'
  },
  {
    name: 'Saudi Airlines Catering',
    nameAr: 'الخطوط السعودية للتموين',
    url: 'https://www.saudiacatering.com/',
    city: 'jeddah',
    category: 'industry-association',
    industryRelevance: 'hospitality',
    authority: 'medium',
    notes: 'Hospitality industry supplier listing'
  },
  {
    name: 'Red Sea Mall Business Directory',
    nameAr: 'دليل أعمال رد سي مول',
    url: 'https://redseamall.com/',
    city: 'jeddah',
    category: 'business-directory',
    industryRelevance: 'corporate',
    authority: 'medium',
    notes: 'Local business directory in major shopping center'
  },
  
  // Dammam opportunities
  {
    name: 'Eastern Province Chamber of Commerce',
    nameAr: 'الغرفة التجارية بالمنطقة الشرقية',
    url: 'https://chamber.org.sa/',
    city: 'dammam',
    category: 'chamber-of-commerce',
    industryRelevance: 'all',
    authority: 'high',
    contactEmail: 'info@chamber.org.sa',
    notes: 'Business directory listing opportunity'
  },
  {
    name: 'Saudi Aramco Suppliers',
    nameAr: 'موردي أرامكو السعودية',
    url: 'https://www.saudiaramco.com/en/creating-value/products/industrial',
    city: 'dammam',
    category: 'industry-association',
    industryRelevance: 'industrial',
    authority: 'high',
    notes: 'Oil & gas industry supplier database'
  },
  {
    name: 'Dammam Industrial City Directory',
    nameAr: 'دليل المدينة الصناعية بالدمام',
    url: 'https://www.modon.gov.sa/en/IndustrialCities/IndustrialCitiesDevelopment/EasternRegion/Pages/default.aspx',
    city: 'dammam',
    category: 'business-directory',
    industryRelevance: 'industrial',
    authority: 'medium',
    notes: 'Industrial city business directory'
  }
];

/**
 * Filter link opportunities by city
 */
export const getLinkOpportunitiesByCity = (city: string): LinkOpportunity[] => {
  return regionalLinkOpportunities.filter(
    opportunity => opportunity.city === city || opportunity.city === 'national'
  );
};

/**
 * Filter link opportunities by industry
 */
export const getLinkOpportunitiesByIndustry = (industry: string): LinkOpportunity[] => {
  return regionalLinkOpportunities.filter(
    opportunity => opportunity.industryRelevance === industry || opportunity.industryRelevance === 'all'
  );
};

/**
 * Get high-priority link opportunities (high authority sources)
 */
export const getHighPriorityOpportunities = (): LinkOpportunity[] => {
  return regionalLinkOpportunities.filter(
    opportunity => opportunity.authority === 'high'
  );
};

/**
 * Generate outreach email template for a specific opportunity
 */
export const generateOutreachTemplate = (opportunity: LinkOpportunity, isArabic: boolean = false): string => {
  if (isArabic) {
    return `الموضوع: طلب إدراج يونيوم للأزياء الموحدة في دليل ${opportunity.nameAr}

السادة ${opportunity.nameAr} المحترمين،

تحية طيبة وبعد،

أكتب إليكم بخصوص إدراج شركتنا "يونيوم للأزياء الموحدة" في دليل الأعمال الخاص بكم. نحن شركة رائدة في مجال تصميم وتصنيع الزي الموحد في المملكة العربية السعودية، متخصصة في توفير حلول الزي الموحد عالية الجودة للشركات والمؤسسات الصحية والضيافة والقطاعات الصناعية.

يسعدنا أن نكون جزءًا من دليل ${opportunity.nameAr} المرموق ونعتقد أن إدراجنا سيكون مفيدًا لعملائكم الذين يبحثون عن حلول الزي الموحد.

يمكنكم زيارة موقعنا الإلكتروني على www.uneom.com للحصول على مزيد من المعلومات حول منتجاتنا وخدماتنا.

نتطلع إلى ردكم الإيجابي ونشكركم على وقتكم واهتمامكم.

مع خالص التحية والتقدير،
فريق يونيوم للأزياء الموحدة`;
  }
  
  return `Subject: UNEOM Uniform Solutions - ${opportunity.name} Directory Listing Request

Dear ${opportunity.name} Team,

I am writing regarding the inclusion of our company, UNEOM Uniform Solutions, in your business directory. We are a leading uniform design and manufacturing company in Saudi Arabia, specializing in providing high-quality uniform solutions for corporate, healthcare, hospitality, and industrial sectors.

We would be honored to be included in your esteemed ${opportunity.name} directory and believe our listing would be valuable to your users seeking uniform solutions.

You can visit our website at www.uneom.com for more information about our products and services.

We look forward to your positive response and thank you for your time and consideration.

Best regards,
UNEOM Uniform Solutions Team`;
};

/**
 * Generate a structured backlink plan for a specific region and industry
 */
export const generateBacklinkPlan = (city: string, industry: string): {
  highPriority: LinkOpportunity[];
  mediumPriority: LinkOpportunity[];
  lowPriority: LinkOpportunity[];
} => {
  // Filter opportunities by city and industry
  const relevantOpportunities = regionalLinkOpportunities.filter(
    opportunity => (
      (opportunity.city === city || opportunity.city === 'national') &&
      (opportunity.industryRelevance === industry || opportunity.industryRelevance === 'all')
    )
  );
  
  // Sort by priority
  const highPriority = relevantOpportunities.filter(o => o.authority === 'high');
  const mediumPriority = relevantOpportunities.filter(o => o.authority === 'medium');
  const lowPriority = relevantOpportunities.filter(o => o.authority === 'low');
  
  return {
    highPriority,
    mediumPriority,
    lowPriority
  };
};

export default {
  getLinkOpportunitiesByCity,
  getLinkOpportunitiesByIndustry,
  getHighPriorityOpportunities,
  generateOutreachTemplate,
  generateBacklinkPlan
};
