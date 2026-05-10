/**
 * UNEOM signature numbers — used across the site for Information Gain
 * (master-plan-v11 §6.4) and AI-Overviews bait.
 *
 * These are the canonical numbers used in any prose or stat block. Single
 * source of truth — change them here only.
 */

export const COMPANY_STATS = {
  yearsInMarket: 12,
  activeClients: 500,        // 500+ B2B Saudi clients
  cities: 24,                // 24 Saudi cities served
  industries: 8,             // 8 silos
  staff: 60,                 // 60+ employees
  garmentsProduced: 250_000, // ~250k garments produced annually
  warrantyMonths: 12,        // base warranty
  healthcareWarrantyMonths: 18,
  repeatClientRate: 78,      // 78% repeat
  averageLeadTimeDays: { min: 14, max: 21 },
  conceptToSampleDays: 14
} as const;

export const INDUSTRY_STATS: Record<string, { avgPriceSAR: number; leadTimeDays: number; warrantyMonths: number }> = {
  healthcare:    { avgPriceSAR: 180, leadTimeDays: 18, warrantyMonths: 18 },
  hospitality:   { avgPriceSAR: 220, leadTimeDays: 18, warrantyMonths: 12 },
  aviation:      { avgPriceSAR: 650, leadTimeDays: 28, warrantyMonths: 24 },
  corporate:     { avgPriceSAR: 1200, leadTimeDays: 21, warrantyMonths: 12 },
  education:     { avgPriceSAR: 95,  leadTimeDays: 14, warrantyMonths: 12 },
  manufacturing: { avgPriceSAR: 380, leadTimeDays: 21, warrantyMonths: 18 },
  security:      { avgPriceSAR: 280, leadTimeDays: 18, warrantyMonths: 18 },
  retail:        { avgPriceSAR: 150, leadTimeDays: 14, warrantyMonths: 12 }
};
