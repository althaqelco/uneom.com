/**
 * Industry Data Registry — Maps industry slugs to rich metadata
 * Used by location×industry cross-pages for content generation
 */
export interface IndustryData {
  slug: string;
  nameEn: string;
  nameAr: string;
  icon: string;
  descriptionEn: string;
  descriptionAr: string;
  products: { name: string; nameAr: string; href: string }[];
  color: string;
}

export const INDUSTRIES: IndustryData[] = [
  { slug: 'healthcare', nameEn: 'Healthcare', nameAr: 'الرعاية الصحية', icon: '🏥', descriptionEn: 'Premium medical scrubs, lab coats, nursing uniforms with antimicrobial treatment', descriptionAr: 'سكراب طبي فاخر ومعاطف مختبر وزي تمريض بمعالجة مضادة للميكروبات', products: [{ name: 'Medical Scrubs', nameAr: 'سكراب طبي', href: '/shop/medical-scrubs' }, { name: 'Healthcare Accessories', nameAr: 'إكسسوارات طبية', href: '/shop/healthcare-accessories' }], color: 'from-teal-600 to-cyan-700' },
  { slug: 'hospitality', nameEn: 'Hospitality', nameAr: 'الضيافة', icon: '🏨', descriptionEn: 'Elegant hotel staff uniforms, chef wear, and restaurant attire', descriptionAr: 'أزياء أنيقة لموظفي الفنادق وملابس الطهاة وأزياء المطاعم', products: [{ name: 'Hospitality Attire', nameAr: 'أزياء ضيافة', href: '/shop/hospitality-attire' }, { name: 'Culinary Uniforms', nameAr: 'أزياء طهي', href: '/shop/culinary-uniforms' }], color: 'from-amber-600 to-orange-700' },
  { slug: 'corporate', nameEn: 'Corporate', nameAr: 'الشركات', icon: '🏢', descriptionEn: 'Professional corporate attire and business suits for Saudi enterprises', descriptionAr: 'ملابس مؤسسية احترافية وبدلات أعمال للمؤسسات السعودية', products: [{ name: 'Corporate Workwear', nameAr: 'ملابس مؤسسية', href: '/shop/corporate-workwear' }], color: 'from-slate-700 to-blue-800' },
  { slug: 'aviation', nameEn: 'Aviation', nameAr: 'الطيران', icon: '✈️', descriptionEn: 'Premium airline crew uniforms and pilot attire for Gulf carriers', descriptionAr: 'أزياء فاخرة لطاقم الطيران وملابس الطيارين', products: [{ name: 'Aviation Uniforms', nameAr: 'أزياء طيران', href: '/shop/aviation-uniforms' }], color: 'from-sky-700 to-indigo-800' },
  { slug: 'education', nameEn: 'Education', nameAr: 'التعليم', icon: '🎓', descriptionEn: 'School uniforms and teacher attire for Saudi schools and universities', descriptionAr: 'زي مدرسي وملابس المعلمين للمدارس والجامعات السعودية', products: [{ name: 'Education Uniforms', nameAr: 'زي تعليمي', href: '/shop/education-uniforms' }], color: 'from-green-700 to-emerald-800' },
  { slug: 'manufacturing', nameEn: 'Manufacturing', nameAr: 'التصنيع', icon: '🏭', descriptionEn: 'Industrial workwear and factory uniforms with safety compliance', descriptionAr: 'ملابس العمل الصناعية وأزياء المصانع مع معايير السلامة', products: [{ name: 'Industrial Uniforms', nameAr: 'أزياء صناعية', href: '/shop/industrial-uniforms' }, { name: 'Manufacturing Workwear', nameAr: 'ملابس تصنيع', href: '/shop/manufacturing-workwear' }], color: 'from-gray-700 to-zinc-800' },
  { slug: 'security', nameEn: 'Security', nameAr: 'الأمن', icon: '🛡️', descriptionEn: 'Professional security guard uniforms and tactical gear', descriptionAr: 'أزياء حراسة أمنية احترافية ومعدات تكتيكية', products: [{ name: 'Security Uniforms', nameAr: 'أزياء أمنية', href: '/shop/security-uniforms' }], color: 'from-red-800 to-rose-900' },
  { slug: 'retail-shops', nameEn: 'Retail', nameAr: 'التجزئة', icon: '🛍️', descriptionEn: 'Retail staff uniforms and branded store workwear', descriptionAr: 'أزياء موظفي التجزئة وملابس المتاجر ذات العلامات التجارية', products: [{ name: 'Retail Uniforms', nameAr: 'أزياء تجزئة', href: '/shop/retail-uniforms' }], color: 'from-purple-700 to-violet-800' },
  { slug: 'factory-industry', nameEn: 'Factory & Industrial', nameAr: 'المصانع والصناعات', icon: '⚙️', descriptionEn: 'Heavy-duty industrial uniforms and PPE for factory floors', descriptionAr: 'أزياء صناعية للأعمال الشاقة ومعدات الحماية الشخصية', products: [{ name: 'PPE', nameAr: 'معدات حماية', href: '/shop/ppe' }, { name: 'High-Visibility', nameAr: 'ملابس عاكسة', href: '/shop/high-visibility-clothing' }], color: 'from-yellow-700 to-amber-800' },
  { slug: 'factory-security', nameEn: 'Factory Security', nameAr: 'أمن المصانع', icon: '🏗️', descriptionEn: 'Specialized security uniforms for industrial facilities', descriptionAr: 'أزياء أمنية متخصصة للمنشآت الصناعية', products: [{ name: 'Security Uniforms', nameAr: 'أزياء أمنية', href: '/shop/security-uniforms' }], color: 'from-stone-700 to-neutral-800' },
  { slug: 'supply-manufacturing', nameEn: 'Supply & Manufacturing', nameAr: 'التوريد والتصنيع', icon: '📦', descriptionEn: 'Supply chain workwear and warehouse uniforms', descriptionAr: 'ملابس عمل سلسلة التوريد وأزياء المستودعات', products: [{ name: 'Workplace Uniforms', nameAr: 'أزياء عمل', href: '/shop/workplace-uniforms' }], color: 'from-cyan-700 to-blue-800' },
];

export function getIndustryBySlug(slug: string): IndustryData | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}

export function getAllIndustrySlugs(): string[] {
  return INDUSTRIES.map((i) => i.slug);
}