/**
 * Centralised silo → Arabic label map.
 * Used by hub pages that display `silo` or `category` slugs as user-facing text.
 */

const SILO_AR: Record<string, string> = {
  healthcare:    'الرعاية الصحية',
  hospitality:   'الضيافة',
  aviation:      'الطيران',
  corporate:     'المؤسسات',
  education:     'التعليم',
  manufacturing: 'التصنيع',
  security:      'الأمن',
  retail:        'التجزئة',
};

/** Returns the Arabic label for a silo slug, falling back to the slug itself. */
export function siloAr(slug: string): string {
  return SILO_AR[slug] ?? slug;
}
