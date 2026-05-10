import { COMPANY_STATS } from '../stats';
import { BLOG_CATEGORIES } from './categories';

// Import all posts
import { medicalScrubsEvolutionSaudi } from './posts/medical-scrubs-evolution-saudi';
import { healthcareUniformsInfectionControl } from './posts/healthcare-uniforms-infection-control';
import { nursingUniformGuide2025 } from './posts/nursing-uniform-guide-2025';
import { hotelStaffUniformGuide } from './posts/hotel-staff-uniform-guide';
import { chefUniformDesignGuide } from './posts/chef-uniform-design-guide';
import { airlineUniformDesignCulturalIdentity } from './posts/airline-uniform-design-cultural-identity';
import { corporateUniformPsychology } from './posts/corporate-uniform-psychology';
import { culturalIdentitySaudiSchoolUniforms } from './posts/cultural-identity-saudi-school-uniforms';
import { industrialSafetyWorkwearSaudi } from './posts/industrial-safety-workwear-saudi';
import { medicalHijabHealthcareStandards } from './posts/medical-hijab-healthcare-standards';
import { hospitalUniformSafetyStandards } from './posts/hospital-uniform-safety-standards';
import { advancedFabricsHealthcareUniforms } from './posts/advanced-fabrics-healthcare-uniforms';
import { hospitalityUniformsGuestExperience } from './posts/hospitality-uniforms-guest-experience';
import { hospitalityUniformsCulturalIdentity } from './posts/hospitality-uniforms-cultural-identity';
import { hajjUmrahStaffUniforms } from './posts/hajj-umrah-staff-uniforms';
import { aviationUniformsBrandIdentity } from './posts/aviation-uniforms-brand-identity';
import { materialInnovationsAviationAttire } from './posts/material-innovations-aviation-attire';
import { corporateDressCodeEvolution } from './posts/corporate-dress-code-evolution';
import { fabricsStudentUniforms } from './posts/fabrics-student-uniforms';
import { nationalDayCorporateUniforms } from './posts/national-day-corporate-uniforms';
import { industrialHeatStressManagement } from './posts/industrial-heat-stress-management';
import { industrialElectrostaticProtection } from './posts/industrial-electrostatic-protection';
import { industrialUniformColorCoding } from './posts/industrial-uniform-color-coding';
import { advancedFabricsSecurityUniforms } from './posts/advanced-fabrics-security-uniforms';
import { bulletproofProtectionTechnologies } from './posts/bulletproof-protection-technologies';
import { futureProfessionalWearDigitalAge } from './posts/future-professional-wear-digital-age';
import { mallRetailUniformsExcellence } from './posts/mall-retail-uniforms-excellence';
import { corporateSecurityBranding } from './posts/corporate-security-branding';
import { choosingUniformSupplierGuide } from './posts/choosing-uniform-supplier-guide';
import { circularEconomyUniforms } from './posts/circular-economy-uniforms';

export type BlogCategorySlug =
  | 'healthcare'
  | 'hospitality'
  | 'aviation'
  | 'corporate-education'
  | 'manufacturing-safety'
  | 'sustainability-trends';

export interface BlogCategory {
  slug: BlogCategorySlug;
  nameEn: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  industries: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  titleAr: string;
  excerpt: string;
  excerptAr: string;
  category: BlogCategorySlug;
  publishedAt: string;
  updatedAt?: string;
  hero: string;
  silo: string;
  city?: string;
  readingMinutes: number;
  lead: string;
  leadAr: string;
  sections: { heading: string; headingAr: string; body: string; bodyAr: string }[];
  faqs: { q: string; qAr: string; a: string; aAr: string }[];
  author: { name: string; nameAr: string; title: string; titleAr: string };
  reviewer?: { name: string; nameAr: string; title: string; titleAr: string; affiliation: string; affiliationAr: string };
}

export const BLOG_POSTS: BlogPost[] = [
  medicalScrubsEvolutionSaudi,
  healthcareUniformsInfectionControl,
  nursingUniformGuide2025,
  hotelStaffUniformGuide,
  chefUniformDesignGuide,
  airlineUniformDesignCulturalIdentity,
  corporateUniformPsychology,
  culturalIdentitySaudiSchoolUniforms,
  industrialSafetyWorkwearSaudi,
  medicalHijabHealthcareStandards,
  hospitalUniformSafetyStandards,
  advancedFabricsHealthcareUniforms,
  hospitalityUniformsGuestExperience,
  hospitalityUniformsCulturalIdentity,
  hajjUmrahStaffUniforms,
  aviationUniformsBrandIdentity,
  materialInnovationsAviationAttire,
  corporateDressCodeEvolution,
  fabricsStudentUniforms,
  nationalDayCorporateUniforms,
  industrialHeatStressManagement,
  industrialElectrostaticProtection,
  industrialUniformColorCoding,
  advancedFabricsSecurityUniforms,
  bulletproofProtectionTechnologies,
  futureProfessionalWearDigitalAge,
  mallRetailUniformsExcellence,
  corporateSecurityBranding,
  choosingUniformSupplierGuide,
  circularEconomyUniforms
];

export const BLOG_CATEGORIES_BY_SLUG = Object.fromEntries(
  BLOG_CATEGORIES.map(c => [c.slug, c])
) as Record<BlogCategorySlug, BlogCategory>;

export const BLOG_POSTS_BY_SLUG = Object.fromEntries(
  BLOG_POSTS.map(p => [p.slug, p])
);

export function postsByCategory(category: BlogCategorySlug) {
  return BLOG_POSTS.filter(p => p.category === category);
}

export function postsBySilo(silo: string) {
  return BLOG_POSTS.filter(p => p.silo === silo);
}

void COMPANY_STATS; // ensures stats is referenced for build
export { BLOG_CATEGORIES };
