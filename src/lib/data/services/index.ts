/**
 * 7 core services per master-plan-v11 §2.2.
 * All deeper "*-program" variants from legacy site collapse into these.
 */

export interface Service {
  slug: string;
  nameEn: string;
  nameAr: string;
  summary: string;
  summaryAr: string;
  description: string;
  descriptionAr: string;
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
