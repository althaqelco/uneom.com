/**
 * 7 core services per master-plan-v11 §2.2.
 * All deeper "*-program" variants from legacy site collapse into these.
 */

export interface ServiceSection {
  heading: string;
  headingAr: string;
  body: string;
  bodyAr: string;
}

export interface Service {
  slug: string;
  nameEn: string;
  nameAr: string;
  summary: string;
  summaryAr: string;
  description: string;
  descriptionAr: string;
  /** Hero image path (relative to /images/) — reuses existing process/product/fabric imagery */
  heroImage: string;
  /** Deep content sections for rich service pages */
  sections: ServiceSection[];
  /** Key stats shown in a feature grid */
  stats: { value: string; label: string; labelAr: string }[];
  /** Who this service is for */
  idealFor: string[];
  idealForAr: string[];
  /** Outcome metric — used in service hero block */
  outcome: { value: string; label: string };
  outcomeAr: { value: string; label: string };
}

import { customDesign } from './custom-design';
import { bulkOrdering } from './bulk-ordering';
import { programManagement } from './program-management';
import { qualityAssurance } from './quality-assurance';
import { fabricSelection } from './fabric-selection';
import { measurementServices } from './measurement-services';
import { sustainableUniforms } from './sustainable-uniforms';

export const SERVICES: Service[] = [
  customDesign,
  bulkOrdering,
  programManagement,
  qualityAssurance,
  fabricSelection,
  measurementServices,
  sustainableUniforms
];

export const SERVICES_BY_SLUG = Object.fromEntries(
  SERVICES.map(s => [s.slug, s])
);

export {
  customDesign,
  bulkOrdering,
  programManagement,
  qualityAssurance,
  fabricSelection,
  measurementServices,
  sustainableUniforms
};
