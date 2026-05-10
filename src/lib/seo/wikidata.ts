/**
 * Wikidata Q-IDs for knowledge graph entity linking.
 * Each UNEOM industry silo links to a verified Wikidata concept.
 * Per master-plan-v11 §9.4 (T1 — Knowledge Graph anchor).
 */

export const WIKIDATA_NODES: Record<string, string> = {
  healthcare:     'https://www.wikidata.org/wiki/Q1135898',  // Medical scrubs
  hospitality:    'https://www.wikidata.org/wiki/Q5165',     // Uniform
  aviation:       'https://www.wikidata.org/wiki/Q1232378',  // Flight attendant uniform
  corporate:      'https://www.wikidata.org/wiki/Q336005',   // Business attire
  education:      'https://www.wikidata.org/wiki/Q1464829',  // School uniform
  manufacturing:  'https://www.wikidata.org/wiki/Q14001',    // Workwear
  security:       'https://www.wikidata.org/wiki/Q174330',   // Security guard uniform
  retail:         'https://www.wikidata.org/wiki/Q5165',     // Uniform (general)
};

/** Saudi Arabia Wikidata entity */
export const WIKIDATA_SAUDI = 'https://www.wikidata.org/wiki/Q851';

/** UNEOM entity — pending Wikidata creation */
export const WIKIDATA_UNEOM = ''; // To be populated after Wikidata entry is approved

/**
 * Generate sameAs array for an industry schema.
 * Includes Wikidata link for knowledge graph enrichment.
 */
export function industrySameAs(slug: string): string[] {
  const links: string[] = [];
  const wikidata = WIKIDATA_NODES[slug];
  if (wikidata) links.push(wikidata);
  return links;
}
