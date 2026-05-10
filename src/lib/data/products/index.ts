export interface ProductCategory {
  slug: string;
  nameEn: string;
  nameAr: string;
  industry: string;
  summary: string;
  summaryAr: string;
  hero: string;
}

export interface Product {
  slug: string;
  category: string;
  industry: string;
  nameEn: string;
  nameAr: string;
  summary: string;
  summaryAr: string;
  description: string;
  descriptionAr: string;
  fabric: string;
  fabricAr: string;
  fabricWeight: string;
  fabricWeightAr: string;
  priceFrom: number;
  image: string;
  sizes: string[];
  colors: string[];
  colorsAr: string[];
  features: string[];
  featuresAr: string[];
  compliance: string[];

  /* ===== Wave 3 enrichment — content-domination-plan §B.4 (optional during rollout) ===== */

  /** Last updated date (ISO YYYY-MM-DD) for E-E-A-T display. */
  lastUpdated?: string;

  /** Definition Lock-in for AI citation. */
  definitionLockIn?: { en: string; ar: string };

  /** Architect Equation — 40 words explaining what makes this product different. */
  architectEquation?: { en: string; ar: string };

  /** Material Science block — ~200 words explaining fabric chemistry, behavior, why it matters. */
  materialScience?: { en: string; ar: string };

  /** Use case block — who uses this and when. */
  useCase?: { en: string; ar: string };

  /** Comparison matrix vs market alternatives. */
  comparisonMatrix?: {
    titleEn: string;
    titleAr: string;
    columnsEn: string[];
    columnsAr: string[];
    rows: {
      dimensionEn: string;
      dimensionAr: string;
      valuesEn: string[];
      valuesAr: string[];
    }[];
  };

  /** Care instructions (HowTo schema-ready). */
  careInstructions?: {
    en: { step: string; description: string }[];
    ar: { step: string; description: string }[];
  };

  /** Pricing tiers (Basic/Standard/Premium). */
  pricingTiers?: {
    nameEn: string;
    nameAr: string;
    priceFrom: number;
    fabricEn: string;
    fabricAr: string;
    warrantyMonths: number;
    summaryEn: string;
    summaryAr: string;
  }[];

  /** Product-specific FAQs (5+ Qs). */
  expandedFaqs?: {
    qEn: string;
    qAr: string;
    aEn: string;
    aAr: string;
  }[];

  /** Order-of-magnitude figures for AI citations (e.g., MOQ, lead time, GSM). */
  numericAnchors?: {
    moqUnits?: number;
    leadTimeDaysFrom?: number;
    leadTimeDaysTo?: number;
    warrantyMonths?: number;
    washCyclesValidated?: number;
  };
}

import { PRODUCT_CATEGORIES } from './categories';
import { medicalScrubs } from './medical-scrubs';
import { hospitalityAttire } from './hospitality';
import { aviationProducts } from './aviation';
import { corporateProducts } from './corporate';
import { educationProducts } from './education';
import { manufacturingProducts } from './manufacturing';
import { securityProducts } from './security';
import { retailProducts } from './retail';

export const PRODUCTS: Product[] = [
  ...medicalScrubs,
  ...hospitalityAttire,
  ...aviationProducts,
  ...corporateProducts,
  ...educationProducts,
  ...manufacturingProducts,
  ...securityProducts,
  ...retailProducts
];

export const PRODUCT_CATEGORIES_BY_SLUG = Object.fromEntries(
  PRODUCT_CATEGORIES.map(c => [c.slug, c])
);

export const PRODUCTS_BY_SLUG = Object.fromEntries(
  PRODUCTS.map(p => [p.slug, p])
);

export function productsByCategory(category: string) {
  return PRODUCTS.filter(p => p.category === category);
}

export function productsByIndustry(industry: string) {
  return PRODUCTS.filter(p => p.industry === industry);
}

export { PRODUCT_CATEGORIES };
