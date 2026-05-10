export interface SaudiCity {
  slug: string;
  nameEn: string;
  nameAr: string;
  region: string;
  regionAr: string;
  lat: number;
  lng: number;
  populationTier: 'metro' | 'major' | 'mid' | 'regional';
  anchorIndustries: string[];
  climateVocab: { term: string; meaning: string; meaningAr: string }[];
  landmarks: string[];
  landmarksAr: string[];
  heroImage: string;

  /* ===== Wave 2 enrichment — content-domination-plan §B.3 (optional during rollout) ===== */

  /** Last updated date (ISO YYYY-MM-DD) for E-E-A-T display. */
  lastUpdated?: string;

  /** Definition Lock-in for AI citation. */
  definitionLockIn?: { en: string; ar: string };

  /** Localized Architect Equation — 60 words referencing local climate vocab + UNEOM solution. */
  localizedArchitectEquation?: { en: string; ar: string };

  /** City Profile Block — paragraphs about population, economy, key industries, GASTAT data. */
  cityProfile?: { en: string[]; ar: string[] };

  /** UNEOM-specific stat for this city (e.g. "12 partner hospitals"). */
  localStat?: {
    value: string;
    labelEn: string;
    labelAr: string;
    contextEn: string;
    contextAr: string;
  };

  /** Per-anchor-industry context — what UNEOM does specifically in this city for this industry. */
  industryContext?: Record<string, { en: string; ar: string }>;

  /** Local compliance block — Amanah + regional regulatory text. */
  localCompliance?: {
    amanahEn: string;
    amanahAr: string;
    amanahUrl: string;
    refLabelEn: string;
    refLabelAr: string;
    quoteEn: string;
    quoteAr: string;
  };

  /** 5 city-specific FAQs (AR + EN). */
  expandedFaqs?: {
    qEn: string;
    qAr: string;
    aEn: string;
    aAr: string;
  }[];
}

import { riyadh } from './riyadh';
import { jeddah } from './jeddah';
import { mecca } from './mecca';
import { medina } from './medina';
import { dammam } from './dammam';
import { khobar } from './khobar';
import { dhahran } from './dhahran';
import { alJubail } from './al-jubail';
import { alQatif } from './al-qatif';
import { alAhsa } from './al-ahsa';
import { yanbu } from './yanbu';
import { taif } from './taif';
import { abha } from './abha';
import { khamisMushait } from './khamis-mushait';
import { jazan } from './jazan';
import { najran } from './najran';
import { alBaha } from './al-baha';
import { tabuk } from './tabuk';
import { buraidah } from './buraidah';
import { hail } from './hail';
import { sakaka } from './sakaka';
import { arar } from './arar';
import { alKharj } from './al-kharj';
import { wadiAlDawasir } from './wadi-al-dawasir';

export const SAUDI_CITIES: SaudiCity[] = [
  riyadh, jeddah, mecca, medina, dammam, khobar, dhahran, alJubail,
  alQatif, alAhsa, yanbu, taif, abha, khamisMushait, jazan, najran,
  alBaha, tabuk, buraidah, hail, sakaka, arar, alKharj, wadiAlDawasir
];

export const CITIES_BY_SLUG = Object.fromEntries(
  SAUDI_CITIES.map(c => [c.slug, c])
);

export function getCity(slug: string): SaudiCity | undefined {
  return CITIES_BY_SLUG[slug];
}

export const METRO_CITIES = SAUDI_CITIES.filter(c => c.populationTier === 'metro');

export {
  riyadh, jeddah, mecca, medina, dammam, khobar, dhahran, alJubail,
  alQatif, alAhsa, yanbu, taif, abha, khamisMushait, jazan, najran,
  alBaha, tabuk, buraidah, hail, sakaka, arar, alKharj, wadiAlDawasir
};
