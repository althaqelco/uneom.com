/**
 * Government and standards entities used across UNEOM content for the
 * 4-Entity Closure rule (master-plan-v11 §5.2).
 *
 * Every authority/regulator/cert body listed here is a real Saudi or
 * international entity. We link to them externally to anchor our
 * compliance claims in verifiable third-party sources.
 */

export type EntityType = 'ministry' | 'authority' | 'amanah' | 'chamber' | 'cert-body';

export interface GovEntity {
  slug: string;
  nameEn: string;
  nameAr: string;
  url: string;
  type: EntityType;
  /** What UNEOM products/services this entity is relevant to */
  scope: string;
}

export const GOV_ENTITIES: Record<string, GovEntity> = {
  zatca: {
    slug: 'zatca',
    nameEn: 'ZATCA',
    nameAr: 'هيئة الزكاة والضريبة والجمارك',
    url: 'https://zatca.gov.sa',
    type: 'authority',
    scope: 'Tax compliance, e-invoicing, customs'
  },
  mhrsd: {
    slug: 'mhrsd',
    nameEn: 'Ministry of Human Resources and Social Development',
    nameAr: 'وزارة الموارد البشرية والتنمية الاجتماعية',
    url: 'https://hrsd.gov.sa',
    type: 'ministry',
    scope: 'Workforce regulations, Saudization (Nitaqat)'
  },
  moh: {
    slug: 'moh',
    nameEn: 'Ministry of Health',
    nameAr: 'وزارة الصحة',
    url: 'https://www.moh.gov.sa',
    type: 'ministry',
    scope: 'Healthcare uniform standards, infection control'
  },
  sfda: {
    slug: 'sfda',
    nameEn: 'Saudi Food & Drug Authority',
    nameAr: 'الهيئة العامة للغذاء والدواء',
    url: 'https://www.sfda.gov.sa',
    type: 'authority',
    scope: 'Healthcare, food service, hygiene compliance'
  },
  saso: {
    slug: 'saso',
    nameEn: 'Saudi Standards, Metrology and Quality Org.',
    nameAr: 'الهيئة السعودية للمواصفات والمقاييس والجودة',
    url: 'https://www.saso.gov.sa',
    type: 'authority',
    scope: 'Textile and product quality standards'
  },
  mc: {
    slug: 'mc',
    nameEn: 'Ministry of Commerce',
    nameAr: 'وزارة التجارة',
    url: 'https://mc.gov.sa',
    type: 'ministry',
    scope: 'Commercial registration, Maroof verification'
  },
  gaca: {
    slug: 'gaca',
    nameEn: 'General Authority of Civil Aviation',
    nameAr: 'الهيئة العامة للطيران المدني',
    url: 'https://gaca.gov.sa',
    type: 'authority',
    scope: 'Aviation crew uniform airworthiness'
  },
  hcis: {
    slug: 'hcis',
    nameEn: 'High Commission for Industrial Security',
    nameAr: 'الرئاسة العامة للأمن الصناعي',
    url: 'https://www.hcis.gov.sa',
    type: 'authority',
    scope: 'Industrial security and PPE regulations'
  },
  moe: {
    slug: 'moe',
    nameEn: 'Ministry of Education',
    nameAr: 'وزارة التعليم',
    url: 'https://moe.gov.sa',
    type: 'ministry',
    scope: 'School uniform guidelines'
  },
  mt: {
    slug: 'mt',
    nameEn: 'Ministry of Tourism',
    nameAr: 'وزارة السياحة',
    url: 'https://mt.gov.sa',
    type: 'ministry',
    scope: 'Hospitality industry oversight'
  },
  iso: {
    slug: 'iso',
    nameEn: 'ISO',
    nameAr: 'منظمة المعايير الدولية',
    url: 'https://www.iso.org',
    type: 'cert-body',
    scope: 'Quality management (ISO 9001)'
  },
  oekoTex: {
    slug: 'oeko-tex',
    nameEn: 'OEKO-TEX',
    nameAr: 'أوكو-تكس',
    url: 'https://www.oeko-tex.com',
    type: 'cert-body',
    scope: 'Textile harmful-substance certification'
  },
  sec: {
    slug: 'sec',
    nameEn: 'Saudi Council of Engineers',
    nameAr: 'الهيئة السعودية للمهندسين',
    url: 'https://saudieng.sa',
    type: 'cert-body',
    scope: 'Engineering certification (textile + safety)'
  }
};

export interface Amanah {
  slug: string;
  city: string;
  nameEn: string;
  nameAr: string;
  url: string;
}

export const AMANAT: Record<string, Amanah> = {
  riyadh: { slug: 'amanah-riyadh', city: 'riyadh', nameEn: 'Riyadh Municipality', nameAr: 'أمانة منطقة الرياض', url: 'https://www.alriyadh.gov.sa' },
  jeddah: { slug: 'amanah-jeddah', city: 'jeddah', nameEn: 'Jeddah Municipality', nameAr: 'أمانة جدة', url: 'https://www.jeddah.gov.sa' },
  mecca:  { slug: 'amanah-mecca',  city: 'mecca',  nameEn: 'Holy Makkah Municipality', nameAr: 'أمانة العاصمة المقدسة', url: 'https://www.holymakkah.gov.sa' },
  medina: { slug: 'amanah-medina', city: 'medina', nameEn: 'Madinah Municipality', nameAr: 'أمانة المدينة المنورة', url: 'https://www.amana-md.gov.sa' },
  eastern: { slug: 'amanah-eastern', city: 'dammam', nameEn: 'Eastern Province Municipality', nameAr: 'أمانة المنطقة الشرقية', url: 'https://www.eamana.gov.sa' }
};

/**
 * Build the 4-Entity Closure list for a given industry + optional city.
 * Returns 4 entities: 1 sectoral regulator, 1 quality body, 1 international cert,
 * 1 municipal authority (if city provided).
 */
export function buildClosure(regulators: string[], city?: string): GovEntity[] {
  const out: GovEntity[] = [];
  const sectoral = regulators.find(r => GOV_ENTITIES[r]?.type !== 'cert-body');
  if (sectoral) out.push(GOV_ENTITIES[sectoral]);

  const quality = regulators.find(r => r === 'saso' || r === 'iso');
  if (quality && !out.includes(GOV_ENTITIES[quality])) out.push(GOV_ENTITIES[quality]);

  if (regulators.includes('iso') && !out.find(e => e.slug === 'iso')) out.push(GOV_ENTITIES.iso);
  out.push(GOV_ENTITIES.oekoTex);

  if (city && AMANAT[city]) {
    // Cast Amanah to GovEntity-compatible shape for closure rendering
    out.push({
      slug: AMANAT[city].slug,
      nameEn: AMANAT[city].nameEn,
      nameAr: AMANAT[city].nameAr,
      url: AMANAT[city].url,
      type: 'amanah',
      scope: 'Municipal authority — workplace regulations'
    });
  }

  return out.slice(0, 4);
}
