/**
 * Resources / deep guides per master-plan-v11 §6.
 * All guides separated into individual files.
 */

export interface Resource {
  slug: string;
  title: string;
  titleAr: string;
  summary: string;
  summaryAr: string;
  hero: string;
  silo: string;
  readingMinutes: number;
  lead: string;
  leadAr: string;
  sections: { heading: string; body: string }[];
  sectionsAr: { heading: string; body: string }[];
  relatedPosts?: string[];
  relatedCategories?: string[];
  references?: { name: string; url: string }[];
  /** Schema @type for the article node. Technical/standards guides use 'TechArticle'. Defaults to 'Article'. */
  schemaType?: 'Article' | 'TechArticle';
  datePublished?: string;
  dateModified?: string;
  /** Optional FAQ. When present, the page renders a visible FAQ section AND emits FAQPage JSON-LD (schema must mirror visible content). */
  faqs?: { q: string; a: string }[];
  faqsAr?: { q: string; a: string }[];
}

import { fabricGuide } from './fabric-guide';
import { sizeGuide } from './size-guide';
import { procurementGuide } from './procurement-guide';
import { sustainabilityGuide } from './sustainability-guide';
import { healthcareUniformStandards } from './healthcare-uniform-standards';
import { nursingUniformGuide } from './nursing-uniform-guide';
import { electricalSafetyPpeGuide } from './electrical-safety-ppe-guide';
import { cleanroomBestPractices } from './cleanroom-best-practices';
import { securityEquipmentStandards } from './security-equipment-standards';
import { professionalSecurityStandards } from './professional-security-standards';
import { weatherProtectionGuide } from './weather-protection-guide';
import { policyTemplates } from './policy-templates';
import { polyCottonBlendRatiosGuide } from './poly-cotton-blend-ratios-guide';
import { coolingMoistureWickingFabricGuide } from './cooling-moisture-wicking-uniform-fabric-guide';
import { uniformRentalVsPurchaseGuide } from './uniform-rental-vs-purchase-guide';
import { uniformLogoBrandingMethodsGuide } from './uniform-logo-branding-methods-guide';
import { cafeBaristaUniformsSaudiArabia } from './cafe-barista-uniforms-saudi-arabia';
import { qsrVsFineDiningUniformsGuide } from './qsr-vs-fine-dining-uniforms-guide';
import { uniformFabricWeightGsmGuide } from './uniform-fabric-weight-gsm-guide';
import { uniformColourfastnessUvGuide } from './uniform-colourfastness-uv-guide';
import { saudiUniformBuyersGuide } from './saudi-uniform-buyers-guide';
import { modestHospitalityUniformsSaudiArabia } from './modest-hospitality-uniforms-saudi-arabia';
import { spaWellnessStaffUniformsSaudiArabia } from './spa-wellness-staff-uniforms-saudi-arabia';
import { schoolPeSportsKitSaudiArabia } from './school-pe-sports-kit-saudi-arabia';
import { nurseryKindergartenUniformsSaudiArabia } from './nursery-kindergarten-uniforms-saudi-arabia';
import { uniformTotalCostOfOwnershipGuide } from './uniform-total-cost-of-ownership-guide';
import { uniformInventoryReorderManagementGuide } from './uniform-inventory-reorder-management-guide';

export const RESOURCES: Resource[] = [
  fabricGuide,
  sizeGuide,
  procurementGuide,
  sustainabilityGuide,
  healthcareUniformStandards,
  nursingUniformGuide,
  electricalSafetyPpeGuide,
  cleanroomBestPractices,
  securityEquipmentStandards,
  professionalSecurityStandards,
  weatherProtectionGuide,
  policyTemplates,
  polyCottonBlendRatiosGuide,
  coolingMoistureWickingFabricGuide,
  uniformRentalVsPurchaseGuide,
  uniformLogoBrandingMethodsGuide,
  cafeBaristaUniformsSaudiArabia,
  qsrVsFineDiningUniformsGuide,
  uniformFabricWeightGsmGuide,
  uniformColourfastnessUvGuide,
  saudiUniformBuyersGuide,
  modestHospitalityUniformsSaudiArabia,
  spaWellnessStaffUniformsSaudiArabia,
  schoolPeSportsKitSaudiArabia,
  nurseryKindergartenUniformsSaudiArabia,
  uniformTotalCostOfOwnershipGuide,
  uniformInventoryReorderManagementGuide
];

export const RESOURCES_BY_SLUG = Object.fromEntries(
  RESOURCES.map(r => [r.slug, r])
);

export function resourcesBySilo(silo: string) {
  return RESOURCES.filter(r => r.silo === silo);
}

export {
  fabricGuide,
  sizeGuide,
  procurementGuide,
  sustainabilityGuide,
  healthcareUniformStandards,
  nursingUniformGuide,
  electricalSafetyPpeGuide,
  cleanroomBestPractices,
  securityEquipmentStandards,
  professionalSecurityStandards,
  weatherProtectionGuide,
  policyTemplates
};
