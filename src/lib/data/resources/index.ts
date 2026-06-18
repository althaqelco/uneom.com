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
import { madeInSaudiLocalContentGuide } from './made-in-saudi-uniform-local-content-guide';

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
  madeInSaudiLocalContentGuide
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
