/**
 * 8 case studies per master-plan-v11. Each has paired before/after images
 * already in /public/images/case-studies/{slug}/.
 * Separated into individual files for modularity.
 */

export interface CaseStudy {
  slug: string;
  title: string;
  titleAr: string;
  summary: string;
  summaryAr: string;
  silo: string;
  city: string;
  clientType: string;
  clientTypeAr: string;
  headline: { value: string; label: string };
  headlineAr: { value: string; label: string };
  duration: string;
  durationAr: string;
  scope: string;
  scopeAr: string;
  outcomes: { metric: string; description: string }[];
  outcomesAr: { metric: string; description: string }[];
  story: { heading: string; body: string }[];
  storyAr: { heading: string; body: string }[];
  imageFolder: string;
}

import { hospitalAesthetic } from './hospital-aesthetic';
import { fiveStarHotelSpa } from './5-star-hotel-spa';
import { luxurySalon } from './luxury-salon';
import { spaChainRebranding } from './spa-chain-rebranding';
import { factorySafetyImprovement } from './factory-safety-improvement';
import { nationwideRetailBranding } from './nationwide-retail-branding';
import { retailBrandTransformation } from './retail-brand-transformation';
import { beautyChainStandardization } from './beauty-chain-standardization';

export const CASE_STUDIES: CaseStudy[] = [
  hospitalAesthetic,
  fiveStarHotelSpa,
  luxurySalon,
  spaChainRebranding,
  factorySafetyImprovement,
  nationwideRetailBranding,
  retailBrandTransformation,
  beautyChainStandardization
];

export const CASE_STUDIES_BY_SLUG = Object.fromEntries(
  CASE_STUDIES.map(c => [c.slug, c])
);

export function caseStudiesBySilo(silo: string) {
  return CASE_STUDIES.filter(c => c.silo === silo);
}

export {
  hospitalAesthetic,
  fiveStarHotelSpa,
  luxurySalon,
  spaChainRebranding,
  factorySafetyImprovement,
  nationwideRetailBranding,
  retailBrandTransformation,
  beautyChainStandardization
};
