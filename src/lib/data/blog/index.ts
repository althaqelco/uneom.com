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
import { maidUniformGuideSaudi } from './posts/maid-uniform-guide-saudi';
import { medicalScrubsBuyingGuide } from './posts/medical-scrubs-buying-guide-price';
import { restaurantUniformGuideSaudi } from './posts/restaurant-uniform-guide-saudi';
import { industrialCoverallSpecificationGuide } from './posts/industrial-coverall-specification-guide';
import { corporateUniformProgrammeRoi } from './posts/corporate-uniform-programme-roi';
import { schoolUniformProcurementSaudi } from './posts/school-uniform-procurement-saudi';
import { uniformSupplierRiyadhJeddahDammam } from './posts/uniform-shop-riyadh-jeddah-dammam';
import { riyadhAirAviationUniformStandards } from './posts/riyadh-air-aviation-uniform-standards';
import { uniformFabricGuideSaudiClimate } from './posts/uniform-fabric-guide-saudi-climate';
import { customUniformTailoringProcess } from './posts/custom-uniform-tailoring-process';
import { uniformProcurementTenderGuideSaudi } from './posts/uniform-procurement-tender-guide-saudi';

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
  /** Long-form unique intro rendered on the category page to lift these
   *  editorial listing pages out of the thin/soft-404 bucket. */
  intro: string;
  introAr: string;
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

import { schoolUniformProcurementTimelineSaudi } from './posts/school-uniform-procurement-timeline-saudi';
import { backToSchoolUniformOrderingSaudi } from './posts/back-to-school-uniform-ordering-saudi';
import { securityUniformAccessoriesLoadCarriage } from './posts/security-uniform-accessories-load-carriage';
import { insuranceFinanceSectorUniformStandards } from './posts/insurance-finance-sector-uniform-standards';
import { restaurantUniformGuideFohBohSaudi } from './posts/restaurant-uniform-guide-foh-boh-saudi';
import { hospitalScrubColourPolicyByDepartment } from './posts/hospital-scrub-colour-policy-by-department';
import { stretchFabricsActiveUniformRoles } from './posts/stretch-fabrics-active-uniform-roles';

import { employeeResistanceNewUniforms } from './posts/employee-resistance-new-uniforms';
import { pilotUniformRankInsigniaSaudi } from './posts/pilot-uniform-rank-insignia-saudi';
import { telecomRetailStaffUniformsSaudi } from './posts/telecom-retail-staff-uniforms-saudi';
import { receptionFrontDeskUniformsSaudi } from './posts/reception-front-desk-uniforms-saudi';
import { hotelUniformsGuestExperienceSaudi } from './posts/hotel-uniforms-guest-experience-saudi';
import { hiVisClassSelectionGuideSaudi } from './posts/hi-vis-class-selection-guide-saudi';
import { weldingPpeSelectionGuideSaudi } from './posts/welding-ppe-selection-guide-saudi';

const ALL_BLOG_POSTS: BlogPost[] = [
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
  circularEconomyUniforms,
  maidUniformGuideSaudi,
  medicalScrubsBuyingGuide,
  restaurantUniformGuideSaudi,
  industrialCoverallSpecificationGuide,
  corporateUniformProgrammeRoi,
  schoolUniformProcurementSaudi,
  uniformSupplierRiyadhJeddahDammam,
  riyadhAirAviationUniformStandards,
  uniformFabricGuideSaudiClimate,
  customUniformTailoringProcess,
  uniformProcurementTenderGuideSaudi,
  schoolUniformProcurementTimelineSaudi,
  backToSchoolUniformOrderingSaudi,
  securityUniformAccessoriesLoadCarriage,
  insuranceFinanceSectorUniformStandards,
  restaurantUniformGuideFohBohSaudi,
  hospitalScrubColourPolicyByDepartment,
  stretchFabricsActiveUniformRoles,
  employeeResistanceNewUniforms,
  pilotUniformRankInsigniaSaudi,
  telecomRetailStaffUniformsSaudi,
  receptionFrontDeskUniformsSaudi,
  hotelUniformsGuestExperienceSaudi,
  hiVisClassSelectionGuideSaudi,
  weldingPpeSelectionGuideSaudi,
];

/**
 * SCHEDULED PUBLISHING GATE
 * --------------------------------------------------------------------------
 * Posts carry a real `publishedAt`. Anything dated in the future is excluded
 * from the build entirely — it is not listed, not in the sitemap, not in
 * /llms.txt, and `generateStaticParams` never emits it, so the URL 404s until
 * its date arrives. That keeps Google from ever seeing a half-published or
 * pre-announced article.
 *
 * A scheduled daily rebuild (.github/workflows/scheduled-publish.yml) is what
 * moves the line forward: each run re-evaluates "today" and the posts due that
 * day enter the build naturally, spread across the Saudi work week.
 *
 * `PUBLISH_CUTOFF_OVERRIDE` exists only so the schedule can be simulated and
 * tested locally — set it to an ISO date to build the site "as of" that day.
 */
const PUBLISH_CUTOFF_OVERRIDE = process.env.UNEOM_PUBLISH_DATE;

function publishCutoff(): string {
  return (PUBLISH_CUTOFF_OVERRIDE || new Date().toISOString().slice(0, 10));
}

/** Every post ever authored, including future-dated drafts. Authoring only. */
export { ALL_BLOG_POSTS };

/** Posts live as of the build date — this is what the whole site renders from. */
export const BLOG_POSTS: BlogPost[] = ALL_BLOG_POSTS
  .filter(p => p.publishedAt.slice(0, 10) <= publishCutoff());


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
