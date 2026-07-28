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

import { seasonalRetailStaffingUniformSurges } from './posts/seasonal-retail-staffing-uniform-surges';
import { pharmacyRetailChainUniformsSaudi } from './posts/pharmacy-retail-chain-uniforms-saudi';
import { scrubsThatSurviveHospitalLaundry } from './posts/scrubs-that-survive-hospital-laundry';
import { gsmFabricWeightExplained } from './posts/gsm-fabric-weight-explained';
import { industrialLaundryPreservingFrPerformance } from './posts/industrial-laundry-preserving-fr-performance';
import { corporateAbayaBrandedTailored } from './posts/corporate-abaya-branded-tailored';
import { arcFlashRatingsExplainedProcurement } from './posts/arc-flash-ratings-explained-procurement';
import { governmentMinistryStaffUniformsSaudi } from './posts/government-ministry-staff-uniforms-saudi';
import { compoundGatedCommunitySecurityAttire } from './posts/compound-gated-community-security-attire';
import { ppeReplacementBufferStockPolicy } from './posts/ppe-replacement-buffer-stock-policy';
import { confinedSpaceTurnaroundWorkwear } from './posts/confined-space-turnaround-workwear';
import { sustainableRecycledUniformFabrics } from './posts/sustainable-recycled-uniform-fabrics';
import { patientGownProgrammesDignityLaundry } from './posts/patient-gown-programmes-dignity-laundry';
import { ppeComplianceAuditDocumentation } from './posts/ppe-compliance-audit-documentation';
import { executiveUniformProgrammesSuits } from './posts/executive-uniform-programmes-suits';
import { graduationGownsAcademicRegaliaSaudi } from './posts/graduation-gowns-academic-regalia-saudi';

import { bankBranchUniformsTellersRms } from './posts/bank-branch-uniforms-tellers-rms';
import { banquetEventsStaffUniformsRiyadh } from './posts/banquet-events-staff-uniforms-riyadh';
import { saudiNationalDayCorporateUniforms } from './posts/saudi-national-day-corporate-uniforms';
import { onboardingNewHiresUniformProgramme } from './posts/onboarding-new-hires-uniform-programme';
import { frCoverallBuyersGuideOilGas } from './posts/fr-coverall-buyers-guide-oil-gas';
import { chefWhitesWhyStillWhite } from './posts/chef-whites-why-still-white';
import { internationalSchoolUniformProgrammesRiyadh } from './posts/international-school-uniform-programmes-riyadh';
import { schoolUniformTendersBiddingSpec } from './posts/school-uniform-tenders-bidding-spec';
import { howManyScrubSetsPerNurse } from './posts/how-many-scrub-sets-per-nurse';
import { polyCottonVsPureCottonSaudi } from './posts/poly-cotton-vs-pure-cotton-saudi';
import { teacherSchoolStaffUniformsSaudi } from './posts/teacher-school-staff-uniforms-saudi';
import { universityLabCoatsFacultyAttire } from './posts/university-lab-coats-faculty-attire';
import { veterinaryClinicUniformsSaudi } from './posts/veterinary-clinic-uniforms-saudi';
import { radiologyDepartmentUniformConsiderations } from './posts/radiology-department-uniform-considerations';
import { facilityManagementStaffUniforms } from './posts/facility-management-staff-uniforms';
import { labCoatVsScrubJacket } from './posts/lab-coat-vs-scrub-jacket';

import { antimicrobialScrubsClaimsExplained } from './posts/antimicrobial-scrubs-claims-explained';
import { girlsSchoolUniformsModestyGraded } from './posts/girls-school-uniforms-modesty-graded';
import { retailUniformRollout40Stores } from './posts/retail-uniform-rollout-40-stores';
import { whyNursesUniformsFadeFast } from './posts/why-nurses-uniforms-fade-fast';
import { womenSecurityOfficerUniformsSaudi } from './posts/women-security-officer-uniforms-saudi';
import { hotelCleaningStaffUniformsVisibility } from './posts/hotel-cleaning-staff-uniforms-visibility';
import { securityGuardUniformStandardsSaudi } from './posts/security-guard-uniform-standards-saudi';
import { hijabFriendlyMedicalUniformsSaudi } from './posts/hijab-friendly-medical-uniforms-saudi';
import { embroideryVsPrintingUniforms } from './posts/embroidery-vs-printing-uniforms';
import { servicedApartmentsLongStayUniforms } from './posts/serviced-apartments-long-stay-uniforms';
import { whyUniformsFadeInSaudiSun } from './posts/why-uniforms-fade-in-saudi-sun';
import { coffeeShopApronsDenimCanvasTwill } from './posts/coffee-shop-aprons-denim-canvas-twill';
import { hajjUmrahHospitalityStaffUniforms } from './posts/hajj-umrah-hospitality-staff-uniforms';
import { realEstatePropertyTeamUniforms } from './posts/real-estate-property-team-uniforms';
import { hotelUniformStandardsByStarRating } from './posts/hotel-uniform-standards-by-star-rating';
import { luxuryRetailUniformsDressingBrand } from './posts/luxury-retail-uniforms-dressing-brand';

import { exhibitionStaffUniformsSaudiEvents } from './posts/exhibition-staff-uniforms-saudi-events';
import { cleaningJanitorialUniformProgrammesSaudi } from './posts/cleaning-janitorial-uniform-programmes-saudi';
import { makeSchoolUniformsLastTheYear } from './posts/make-school-uniforms-last-the-year';
import { conciergeUniformsFirstImpression } from './posts/concierge-uniforms-first-impression';
import { heatStressSaudiIndustrialWorkwear } from './posts/heat-stress-saudi-industrial-workwear';
import { constructionWorkwearSaudiMegaprojects } from './posts/construction-workwear-saudi-megaprojects';
import { winterWorkwearSaudiIndustrialSites } from './posts/winter-workwear-saudi-industrial-sites';
import { kindergartenUniformsSafeEasyWear } from './posts/kindergarten-uniforms-safe-easy-wear';
import { newClinicOpeningUniformChecklistRiyadh } from './posts/new-clinic-opening-uniform-checklist-riyadh';
import { hotelSpaTherapistUniformRequirements } from './posts/hotel-spa-therapist-uniform-requirements';
import { corporateDressCodePolicyThatWorks } from './posts/corporate-dress-code-policy-that-works';
import { aviationUniformFabricFlameResistance } from './posts/aviation-uniform-fabric-flame-resistance';
import { uniformBrandGuidelinesPantonePlacement } from './posts/uniform-brand-guidelines-pantone-placement';
import { hospitalUniformBudgetPlanning } from './posts/hospital-uniform-budget-planning';
import { switchingUniformSuppliersMidContract } from './posts/switching-uniform-suppliers-mid-contract';
import { groundHandlingCrewPpeSaudiAirports } from './posts/ground-handling-crew-ppe-saudi-airports';

import { housekeepingUniformsThatLast } from './posts/housekeeping-uniforms-that-last';
import { retailStaffUniformsSaudiMalls } from './posts/retail-staff-uniforms-saudi-malls';
import { valetDoormanUniformsSaudiSummer } from './posts/valet-doorman-uniforms-saudi-summer';
import { cabinCrewUniformStandardsSaudiAviation } from './posts/cabin-crew-uniform-standards-saudi-aviation';
import { highVisibilityUniformsTrafficMarshals } from './posts/high-visibility-uniforms-traffic-marshals';
import { physiotherapyRehabStaffUniformsSaudi } from './posts/physiotherapy-rehab-staff-uniforms-saudi';
import { supermarketHypermarketStaffUniforms } from './posts/supermarket-hypermarket-staff-uniforms';
import { showroomAutomotiveRetailUniforms } from './posts/showroom-automotive-retail-uniforms';
import { fabricTestReportsWhatToAskFor } from './posts/fabric-test-reports-what-to-ask-for';
import { eventCrowdSecurityUniformsSaudi } from './posts/event-crowd-security-uniforms-saudi';
import { chemicalSplashProtectiveClothingTypes } from './posts/chemical-splash-protective-clothing-types';
import { schoolPeKitSaudiHeat } from './posts/school-pe-kit-saudi-heat';
import { coverallSizingLargeWorkforce } from './posts/coverall-sizing-large-workforce';
import { hijabInAviationUniformProgrammes } from './posts/hijab-in-aviation-uniform-programmes';
import { resortBeachClubStaffUniforms } from './posts/resort-beach-club-staff-uniforms';
import { antiStaticWorkwearWhenYouNeedIt } from './posts/anti-static-workwear-when-you-need-it';
import { moistureWickingFabricsGulfHeat } from './posts/moisture-wicking-fabrics-gulf-heat';
import { cabinCrewGroomingAppearancePolicy } from './posts/cabin-crew-grooming-appearance-policy';
import { airlineUniformTendersHowTheyAreWon } from './posts/airline-uniform-tenders-how-they-are-won';
import { medicalScrubsSizingSaudiHospitals } from './posts/medical-scrubs-sizing-saudi-hospitals';
import { airportRetailLoungeStaffUniforms } from './posts/airport-retail-lounge-staff-uniforms';
import { homeVisitNursingUniformsSaudi } from './posts/home-visit-nursing-uniforms-saudi';
import { ramadanIftarStaffUniformsPlanning } from './posts/ramadan-iftar-staff-uniforms-planning';

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
  seasonalRetailStaffingUniformSurges,
  pharmacyRetailChainUniformsSaudi,
  scrubsThatSurviveHospitalLaundry,
  gsmFabricWeightExplained,
  industrialLaundryPreservingFrPerformance,
  corporateAbayaBrandedTailored,
  arcFlashRatingsExplainedProcurement,
  governmentMinistryStaffUniformsSaudi,
  compoundGatedCommunitySecurityAttire,
  ppeReplacementBufferStockPolicy,
  confinedSpaceTurnaroundWorkwear,
  sustainableRecycledUniformFabrics,
  patientGownProgrammesDignityLaundry,
  ppeComplianceAuditDocumentation,
  executiveUniformProgrammesSuits,
  graduationGownsAcademicRegaliaSaudi,
  bankBranchUniformsTellersRms,
  banquetEventsStaffUniformsRiyadh,
  saudiNationalDayCorporateUniforms,
  onboardingNewHiresUniformProgramme,
  frCoverallBuyersGuideOilGas,
  chefWhitesWhyStillWhite,
  internationalSchoolUniformProgrammesRiyadh,
  schoolUniformTendersBiddingSpec,
  howManyScrubSetsPerNurse,
  polyCottonVsPureCottonSaudi,
  teacherSchoolStaffUniformsSaudi,
  universityLabCoatsFacultyAttire,
  veterinaryClinicUniformsSaudi,
  radiologyDepartmentUniformConsiderations,
  facilityManagementStaffUniforms,
  labCoatVsScrubJacket,
  antimicrobialScrubsClaimsExplained,
  girlsSchoolUniformsModestyGraded,
  retailUniformRollout40Stores,
  whyNursesUniformsFadeFast,
  womenSecurityOfficerUniformsSaudi,
  hotelCleaningStaffUniformsVisibility,
  securityGuardUniformStandardsSaudi,
  hijabFriendlyMedicalUniformsSaudi,
  embroideryVsPrintingUniforms,
  servicedApartmentsLongStayUniforms,
  whyUniformsFadeInSaudiSun,
  coffeeShopApronsDenimCanvasTwill,
  hajjUmrahHospitalityStaffUniforms,
  realEstatePropertyTeamUniforms,
  hotelUniformStandardsByStarRating,
  luxuryRetailUniformsDressingBrand,
  exhibitionStaffUniformsSaudiEvents,
  cleaningJanitorialUniformProgrammesSaudi,
  makeSchoolUniformsLastTheYear,
  conciergeUniformsFirstImpression,
  heatStressSaudiIndustrialWorkwear,
  constructionWorkwearSaudiMegaprojects,
  winterWorkwearSaudiIndustrialSites,
  kindergartenUniformsSafeEasyWear,
  newClinicOpeningUniformChecklistRiyadh,
  hotelSpaTherapistUniformRequirements,
  corporateDressCodePolicyThatWorks,
  aviationUniformFabricFlameResistance,
  uniformBrandGuidelinesPantonePlacement,
  hospitalUniformBudgetPlanning,
  switchingUniformSuppliersMidContract,
  groundHandlingCrewPpeSaudiAirports,
  housekeepingUniformsThatLast,
  retailStaffUniformsSaudiMalls,
  valetDoormanUniformsSaudiSummer,
  cabinCrewUniformStandardsSaudiAviation,
  highVisibilityUniformsTrafficMarshals,
  physiotherapyRehabStaffUniformsSaudi,
  supermarketHypermarketStaffUniforms,
  showroomAutomotiveRetailUniforms,
  fabricTestReportsWhatToAskFor,
  eventCrowdSecurityUniformsSaudi,
  chemicalSplashProtectiveClothingTypes,
  schoolPeKitSaudiHeat,
  coverallSizingLargeWorkforce,
  hijabInAviationUniformProgrammes,
  resortBeachClubStaffUniforms,
  antiStaticWorkwearWhenYouNeedIt,
  moistureWickingFabricsGulfHeat,
  cabinCrewGroomingAppearancePolicy,
  airlineUniformTendersHowTheyAreWon,
  medicalScrubsSizingSaudiHospitals,
  airportRetailLoungeStaffUniforms,
  homeVisitNursingUniformsSaudi,
  ramadanIftarStaffUniformsPlanning,
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
