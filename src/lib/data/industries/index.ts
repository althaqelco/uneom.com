/**
 * Industries — 8 silos per master-plan-v11 §2.2.
 * Each industry is in its own file for easy editing.
 * This index re-exports everything with the same API as before.
 */

export interface Industry {
  slug: string;
  nameEn: string;
  nameAr: string;
  tagline: string;
  taglineAr: string;
  architectEquation: string;
  architectEquationAr: string;
  pillars: { title: string; body: string }[];
  pillarsAr: { title: string; body: string }[];
  signatureStat: { value: string; label: string; context: string };
  signatureStatAr: { label: string; context: string };
  regulators: string[];
  anchorCity: string;
  heroImage: string;
  productCategories: string[];
  resources: string[];
  caseStudies: string[];
  blogCategory: string;

  /* ===== Wave 1 enrichment — content-domination-plan §B.2 (optional during rollout) ===== */

  /** Definition Lock-in pattern for AI citation. «X is the [noun] that [function] for [audience] in [context].» */
  definitionLockIn?: { en: string; ar: string };

  /** Industry Context Block — Saudi market reality, Vision 2030, technical challenges (~250 words). */
  industryContext?: {
    en: string[];  // paragraphs
    ar: string[];
  };

  /** Compliance Citation Block — literal regulatory quotes with attribution. */
  complianceCitations?: {
    entityEn: string;
    entityAr: string;
    refLabelEn: string;     // e.g. "Article 12, MoH Healthcare Textile Regulation 2024"
    refLabelAr: string;
    quoteEn: string;
    quoteAr: string;
    url: string;
  }[];

  /** Negative Entity Frame — 2 wrong practices + scientific failure explanation. */
  negativeFrames?: {
    practiceEn: string;
    practiceAr: string;
    whyFailsEn: string;
    whyFailsAr: string;
    solutionEn: string;
    solutionAr: string;
  }[];

  /** Comparison Matrix — UNEOM Premium vs Standard vs Cheap. */
  comparisonMatrix?: {
    titleEn: string;
    titleAr: string;
    columnsEn: string[];   // e.g. ["UNEOM Premium", "Market Standard", "Cheap Import"]
    columnsAr: string[];
    rows: {
      dimensionEn: string;
      dimensionAr: string;
      valuesEn: string[];
      valuesAr: string[];
    }[];
  };

  /** Expanded 8-question FAQ (overrides default 5). */
  expandedFaqs?: {
    qEn: string;
    qAr: string;
    aEn: string;
    aAr: string;
  }[];

  /** Featured product slugs for Featured Products grid (3 items expected). */
  featuredProductSlugs?: string[];

  /** Last updated date (ISO YYYY-MM-DD) — for E-E-A-T "Last updated" display. */
  lastUpdated?: string;

  /** Authoritative sources for external citations on this page. */
  externalSources?: {
    nameEn: string;
    nameAr: string;
    url: string;
  }[];
}

import { healthcare } from './healthcare';
import { hospitality } from './hospitality';
import { aviation } from './aviation';
import { corporate } from './corporate';
import { education } from './education';
import { manufacturing } from './manufacturing';
import { security } from './security';
import { retail } from './retail';

export const INDUSTRIES: Industry[] = [
  healthcare, hospitality, aviation, corporate,
  education, manufacturing, security, retail
];

export const INDUSTRIES_BY_SLUG = Object.fromEntries(
  INDUSTRIES.map(i => [i.slug, i])
);

export function getIndustry(slug: string): Industry | undefined {
  return INDUSTRIES_BY_SLUG[slug];
}

export { healthcare, hospitality, aviation, corporate, education, manufacturing, security, retail };
