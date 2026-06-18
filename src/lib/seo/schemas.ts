/**
 * Schema.org JSON-LD generators per master-plan-v11 §4.
 *
 * CRN and VAT are UNEOM's verified business identifiers.
 * All other values (address, phone, etc.) are confirmed.
 */

import { SAUDI_CITIES } from '@/lib/data/saudi-cities';

const SITE = 'https://uneom.com';
const ORG_ID = `${SITE}/#organization`;
const WEBSITE_ID = `${SITE}/#website`;

// UNEOM verified business identifiers (confirmed 2026-05-11)
const REAL = {
  CRN: '4030253566',
  VAT: '311280328300003',
  FOUNDED: '2013',
  STREET: 'King Fahd Road',
  POSTAL_CODE: '11451',
  PHONE: '+966564612017',
  EMAIL: 'info@uneom.com',
  ISO_9001: 'ISO 9001:2015',
  OEKO_TEX: 'OEKO-TEX Standard 100'
};

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    '@id': ORG_ID,
    name: 'UNEOM',
    alternateName: 'يونيوم',
    legalName: 'UNEOM Professional Uniforms',
    url: SITE,
    mainEntityOfPage: { '@id': WEBSITE_ID },
    logo: { '@type': 'ImageObject', '@id': `${SITE}/#logo`, url: `${SITE}/images/uneom-logo.png`, width: 600, height: 200, caption: 'UNEOM' },
    image: { '@id': `${SITE}/#logo` },
    slogan: 'Saudi professional uniforms, engineered to standard.',
    description: "Saudi Arabia's B2B professional-uniform manufacturer and programme manager since 2013 — ISO 9001:2015 and OEKO-TEX Standard 100 certified, serving 8 industries across 24 cities.",
    telephone: REAL.PHONE,
    email: REAL.EMAIL,
    foundingDate: REAL.FOUNDED,
    foundingLocation: { '@type': 'Place', name: 'Riyadh, Saudi Arabia' },
    numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 50, maxValue: 200 },
    knowsLanguage: ['ar-SA', 'en'],
    priceRange: 'SAR 100–2000',
    currenciesAccepted: 'SAR',
    paymentAccepted: ['Mada', 'STC Pay', 'Apple Pay', 'SADAD', 'Bank Transfer'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: REAL.STREET,
      addressLocality: 'Riyadh',
      addressRegion: 'Riyadh Province',
      postalCode: REAL.POSTAL_CODE,
      addressCountry: 'SA'
    },
    geo: { '@type': 'GeoCoordinates', latitude: 24.7136, longitude: 46.6753 },
    taxID: REAL.VAT,
    vatID: REAL.VAT,
    identifier: [
      { '@type': 'PropertyValue', propertyID: 'CRN', name: 'Saudi Commercial Registration', value: REAL.CRN, url: `https://mc.gov.sa/ar/eServices/Pages/Commercial-data.aspx?cr=${REAL.CRN}` },
      { '@type': 'PropertyValue', propertyID: 'VAT', value: REAL.VAT, url: 'https://zatca.gov.sa' }
    ],
    hasCredential: [
      { '@type': 'EducationalOccupationalCredential', credentialCategory: REAL.ISO_9001 },
      { '@type': 'EducationalOccupationalCredential', credentialCategory: REAL.OEKO_TEX }
    ],
    // De-bloated: the Organization node ships on EVERY page, so emitting all
    // 24 cities × (City + GeoCoordinates) here put ~7,400 City + ~7,400 Geo
    // nodes across the site for zero ranking benefit. The org serves the whole
    // Kingdom — represent that as a Country plus the tier-1 metros by name.
    // Per-city geo lives on the city pages' LocalBusiness node where it counts.
    areaServed: [
      { '@type': 'Country', name: 'Saudi Arabia' },
      ...['Riyadh', 'Jeddah', 'Dammam', 'Mecca', 'Medina'].map(name => ({ '@type': 'City', name }))
    ],
    knowsAbout: [
      'Healthcare uniforms', 'Hospitality attire', 'Aviation uniforms',
      'Corporate workwear', 'Education uniforms', 'Industrial uniforms',
      'Security uniforms', 'Retail uniforms', 'Custom uniform design',
      'Bulk uniform manufacturing', 'Saudi uniform standards'
    ],
    sameAs: [
      'https://www.linkedin.com/company/uneom',
      'https://twitter.com/uneom_sa',
      'https://www.instagram.com/uneom_sa'
    ],
    contactPoint: [
      { '@type': 'ContactPoint', telephone: REAL.PHONE, contactType: 'customer service', areaServed: 'SA', availableLanguage: ['Arabic', 'English'] },
      { '@type': 'ContactPoint', telephone: REAL.PHONE, contactType: 'sales', areaServed: 'SA', availableLanguage: ['Arabic', 'English'] }
    ],
    hasMerchantReturnPolicy: {
      '@type': 'MerchantReturnPolicy',
      '@id': `${SITE}/#return-policy`,
      applicableCountry: 'SA',
      returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
      merchantReturnDays: 14,
      returnMethod: 'https://schema.org/ReturnByMail',
      returnFees: 'https://schema.org/FreeReturn'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'UNEOM Uniform Programmes',
      url: `${SITE}/shop/`,
      itemListElement: [
        { '@type': 'OfferCatalog', name: 'Healthcare Uniforms', url: `${SITE}/shop/medical-scrubs/` },
        { '@type': 'OfferCatalog', name: 'Hospitality Uniforms', url: `${SITE}/shop/hospitality-attire/` },
        { '@type': 'OfferCatalog', name: 'Industrial Uniforms', url: `${SITE}/shop/industrial-uniforms/` },
        { '@type': 'OfferCatalog', name: 'Corporate Uniforms', url: `${SITE}/shop/corporate-workwear/` }
      ]
    }
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE,
    name: 'UNEOM',
    alternateName: 'يونيوم',
    description: "Saudi Arabia's B2B professional-uniform programme partner — design, manufacture, and delivery across 8 industries and 24 cities.",
    publisher: { '@id': ORG_ID },
    inLanguage: ['en', 'ar-SA']
    // NOTE: the SearchAction (sitelinks-searchbox) was removed — it pointed at
    // /search?q=, which 404s (no site-search route exists). Advertising a
    // non-functional action is worse than omitting it. To re-enable the
    // searchbox rich result, build a real /search route, then restore:
    //   potentialAction: { '@type': 'SearchAction',
    //     target: { '@type': 'EntryPoint', urlTemplate: `${SITE}/search?q={search_term_string}` },
    //     'query-input': 'required name=search_term_string' }
  };
}

/* ─────────────────────────────────────────────────────────────────────────
 * 10/10 GRAPH SYSTEM
 * Google merges every JSON-LD block on a page into one graph via @id. These
 * embeddable NODE builders (no own @context) + pageGraph() assemble a single
 * connected @graph per page: WebPage ⇄ BreadcrumbList ⇄ primaryImage ⇄
 * Organization/WebSite ⇄ the page's primary entity (Product/Article/Service/…)
 * ⇄ FAQPage. Every node is @id-addressable and cross-linked.
 * ──────────────────────────────────────────────────────────────────────── */

type Locale = 'en' | 'ar';
const lang = (l?: Locale) => (l === 'ar' ? 'ar-SA' : 'en');
const abs = (p: string) => (p.startsWith('http') ? p : `${SITE}${p}`);

/** ImageObject node, @id-addressable so WebPage.primaryImageOfPage can point to it. */
export function imageObjectNode(opts: { url: string; id?: string; width?: number; height?: number; caption?: string }) {
  return {
    '@type': 'ImageObject',
    '@id': opts.id,
    url: abs(opts.url),
    contentUrl: abs(opts.url),
    ...(opts.width ? { width: opts.width } : {}),
    ...(opts.height ? { height: opts.height } : {}),
    ...(opts.caption ? { caption: opts.caption } : {})
  };
}

/** BreadcrumbList node WITH @id (so the WebPage can reference it). */
export function breadcrumbNode(items: BreadcrumbItem[], pageId: string) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${pageId}#breadcrumb`,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: abs(item.path)
    }))
  };
}

/** WebPage (or subtype) node — the hub every page's graph hangs off. */
export function webPageNode(opts: {
  path: string;
  name: string;
  description: string;
  locale?: Locale;
  type?: 'WebPage' | 'CollectionPage' | 'AboutPage' | 'ContactPage' | 'ItemPage' | 'ProfilePage';
  datePublished?: string;
  dateModified?: string;
  primaryImageId?: string;
  hasBreadcrumb?: boolean;
  speakableSelectors?: string[];
}) {
  const id = `${abs(opts.path)}#webpage`;
  return {
    '@type': opts.type ?? 'WebPage',
    '@id': id,
    url: abs(opts.path),
    name: opts.name,
    description: opts.description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    inLanguage: lang(opts.locale),
    ...(opts.primaryImageId ? { primaryImageOfPage: { '@id': opts.primaryImageId }, image: { '@id': opts.primaryImageId } } : {}),
    ...(opts.hasBreadcrumb ? { breadcrumb: { '@id': `${abs(opts.path)}#breadcrumb` } } : {}),
    ...(opts.datePublished ? { datePublished: opts.datePublished } : {}),
    ...(opts.dateModified ? { dateModified: opts.dateModified } : {}),
    ...(opts.speakableSelectors ? { speakable: { '@type': 'SpeakableSpecification', cssSelector: opts.speakableSelectors } } : {})
  };
}

/**
 * pageGraph — assemble a single, fully @id-linked @graph for a page.
 * Pass the WebPage spec, the breadcrumb trail, an optional primary image, and
 * any primary entities (already built as nodes). Org + WebSite live in the
 * root layout and are referenced by @id, so they are not duplicated here.
 */
export function pageGraph(opts: {
  page: Parameters<typeof webPageNode>[0];
  breadcrumbs?: BreadcrumbItem[];
  primaryImage?: { url: string; width?: number; height?: number; caption?: string };
  entities?: object[];
}) {
  const pageId = `${abs(opts.page.path)}#webpage`;
  const primaryImageId = opts.primaryImage ? `${abs(opts.page.path)}#primaryimage` : undefined;
  const nodes: object[] = [];
  nodes.push(
    webPageNode({
      ...opts.page,
      primaryImageId,
      hasBreadcrumb: !!(opts.breadcrumbs && opts.breadcrumbs.length)
    })
  );
  if (opts.primaryImage) {
    nodes.push(imageObjectNode({ ...opts.primaryImage, id: primaryImageId }));
  }
  if (opts.breadcrumbs && opts.breadcrumbs.length) {
    nodes.push(breadcrumbNode(opts.breadcrumbs, pageId));
  }
  if (opts.entities) nodes.push(...opts.entities);
  return { '@context': 'https://schema.org', '@graph': nodes };
}

export function localBusinessSchema(citySlug: string, locale: Locale = 'en') {
  const city = SAUDI_CITIES.find(c => c.slug === citySlug);
  if (!city) return null;
  const ar = locale === 'ar';
  const prefix = ar ? '/ar' : '';
  // Locale-correct path so the WebPage @id, url, breadcrumb ref and
  // LocalBusiness.url all match the page the markup actually renders on. The
  // previous version always emitted the EN path — on AR city pages that
  // produced a WebPage claiming the EN URL (canonical confusion) and a
  // breadcrumb ref that couldn't resolve against the AR <Breadcrumbs>.
  const path = `${prefix}/locations/${city.slug}/`;
  const cityName = ar ? city.nameAr : city.nameEn;
  const regionName = ar ? city.regionAr : city.region;
  const heroUrl = `/images/cities/hero-${city.slug}.avif`;
  const business = {
    '@type': 'LocalBusiness',
    '@id': `${SITE}${path}#business`,
    name: `UNEOM — ${cityName}`,
    image: { '@id': `${SITE}${path}#primaryimage` },
    url: `${SITE}${path}`,
    telephone: REAL.PHONE,
    email: REAL.EMAIL,
    priceRange: 'SAR 100–2000',
    address: { '@type': 'PostalAddress', addressLocality: cityName, addressRegion: regionName, addressCountry: 'SA' },
    geo: { '@type': 'GeoCoordinates', latitude: city.lat, longitude: city.lng },
    areaServed: { '@type': 'City', name: cityName },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '08:00', closes: '18:00' }
    ],
    paymentAccepted: ['Mada', 'STC Pay', 'Apple Pay', 'SADAD', 'Bank Transfer'],
    currenciesAccepted: 'SAR',
    parentOrganization: { '@id': ORG_ID },
    mainEntityOfPage: { '@id': `${SITE}${path}#webpage` }
  };
  return {
    '@context': 'https://schema.org',
    '@graph': [
      webPageNode({
        path,
        name: ar ? `UNEOM — أزياء ${cityName} الموحّدة` : `UNEOM — ${cityName} Uniforms`,
        description: ar
          ? `برامج الأزياء الموحّدة الاحترافية في ${cityName}، ${regionName}.`
          : `Professional uniform programmes serving ${cityName}, ${regionName}.`,
        locale, type: 'WebPage', primaryImageId: `${SITE}${path}#primaryimage`, hasBreadcrumb: true, speakableSelectors: ['h1']
      }),
      imageObjectNode({ url: heroUrl, id: `${SITE}${path}#primaryimage`, width: 1920, height: 800, caption: `UNEOM — ${cityName}` }),
      business
    ]
  };
}

export interface BreadcrumbItem { name: string; path: string; }

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  // @id derived from the LAST crumb (the current page) so the page's WebPage
  // node can reference it via `breadcrumb: { '@id': `${url}#breadcrumb` }`.
  const lastPath = items.length ? items[items.length - 1].path : '/';
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${SITE}${lastPath}#breadcrumb`,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE}${item.path}`
    }))
  };
}

export function serviceSchema(slug: string, name: string, description: string, locale: Locale = 'en') {
  const prefix = locale === 'ar' ? '/ar' : '';
  const path = `${prefix}/services/${slug}/`;
  const pageId = `${SITE}${path}#webpage`;
  const service = {
    '@type': 'Service',
    '@id': `${SITE}${prefix}/services/${slug}/#service`,
    name,
    description,
    serviceType: name,
    provider: { '@id': ORG_ID },
    // areaServed de-bloated from 24 City nodes to Country (was the same bloat
    // pattern fixed in the Organization node).
    areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
    audience: { '@type': 'BusinessAudience', name: 'Saudi enterprises' },
    mainEntityOfPage: { '@id': pageId },
    inLanguage: lang(locale)
  };
  return {
    '@context': 'https://schema.org',
    '@graph': [
      webPageNode({ path, name: `${name} — UNEOM`, description, locale, type: 'WebPage', hasBreadcrumb: true, speakableSelectors: ['h1'] }),
      service
    ]
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  };
}

/* ─── NEW GENERATORS ─── */

/**
 * Standalone WebPage block (own @context) for templates that emit separate
 * JSON-LD scripts. Emits the WebPage node + its primaryImage ImageObject as a
 * mini-@graph, referencing the breadcrumb (#breadcrumb, from <Breadcrumbs>),
 * Organization (#organization) and WebSite (#website) by @id — so the page's
 * full graph resolves across all its JSON-LD blocks. `hasBreadcrumb` defaults
 * true (every content page renders <Breadcrumbs>).
 */
export function webPageSchema(opts: {
  path: string;
  name: string;
  description: string;
  locale?: Locale;
  type?: 'WebPage' | 'CollectionPage' | 'AboutPage' | 'ContactPage' | 'ItemPage' | 'ProfilePage';
  datePublished?: string;
  dateModified?: string;
  primaryImage?: { url: string; width?: number; height?: number; caption?: string };
  hasBreadcrumb?: boolean;
  speakableSelectors?: string[];
}) {
  const primaryImageId = opts.primaryImage ? `${abs(opts.path)}#primaryimage` : undefined;
  const node = webPageNode({
    ...opts,
    primaryImageId,
    hasBreadcrumb: opts.hasBreadcrumb !== false
  });
  if (opts.primaryImage) {
    return { '@context': 'https://schema.org', '@graph': [node, imageObjectNode({ ...opts.primaryImage, id: primaryImageId })] };
  }
  return { '@context': 'https://schema.org', ...node };
}

export function aboutPageSchema(locale: 'en' | 'ar' = 'en') {
  const prefix = locale === 'ar' ? '/ar' : '';
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${SITE}${prefix}/about/#webpage`,
    url: `${SITE}${prefix}/about/`,
    name: locale === 'ar' ? 'عن UNEOM — مصنّع الزي الموحّد السعودي منذ 2013' : 'About UNEOM — Saudi B2B Uniform Manufacturer Since 2013',
    description: locale === 'ar' ? 'شركة سعودية لتصنيع الزي الموحّد تأسّست عام 2013. معتمدون ISO 9001 + OEKO-TEX عبر 24 مدينة.' : 'Saudi-owned uniform manufacturer founded in 2013. ISO 9001 + OEKO-TEX certified, operating across 24 cities.',
    isPartOf: { '@id': `${SITE}/#website` },
    mainEntity: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    inLanguage: locale === 'ar' ? 'ar-SA' : 'en'
  };
}

export function contactPageSchema(locale: 'en' | 'ar' = 'en') {
  const prefix = locale === 'ar' ? '/ar' : '';
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${SITE}${prefix}/contact/#webpage`,
    url: `${SITE}${prefix}/contact/`,
    name: locale === 'ar' ? 'تواصل مع UNEOM — فريق العمليات السعودي' : 'Contact UNEOM — Saudi Operations Team',
    description: locale === 'ar' ? 'تحدّث مباشرة مع فريق عمليات UNEOM. راسلنا على info@uneom.com أو اتصل على +966 56 461 2017.' : 'Talk to UNEOM operations directly. Email info@uneom.com or call +966 56 461 2017.',
    isPartOf: { '@id': `${SITE}/#website` },
    mainEntity: {
      '@id': ORG_ID,
      contactPoint: [
        { '@type': 'ContactPoint', telephone: REAL.PHONE, contactType: 'customer service', email: REAL.EMAIL, areaServed: 'SA', availableLanguage: ['Arabic', 'English'], hoursAvailable: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '08:00', closes: '18:00' } }
      ]
    },
    publisher: { '@id': ORG_ID },
    inLanguage: locale === 'ar' ? 'ar-SA' : 'en'
  };
}

export interface CollectionItem { name: string; url: string; description?: string; image?: string; }

export function collectionPageSchema(opts: { path: string; name: string; description: string; items: CollectionItem[]; locale?: 'en' | 'ar' }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE}${opts.path}#webpage`,
    url: `${SITE}${opts.path}`,
    name: opts.name,
    description: opts.description,
    isPartOf: { '@id': `${SITE}/#website` },
    publisher: { '@id': ORG_ID },
    inLanguage: opts.locale === 'ar' ? 'ar-SA' : 'en',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: opts.items.length,
      itemListElement: opts.items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        url: `${SITE}${item.url}`,
        ...(item.description ? { description: item.description } : {}),
        ...(item.image ? { image: `${SITE}${item.image}` } : {})
      }))
    }
  };
}

export function merchantReturnSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MerchantReturnPolicy',
    '@id': `${SITE}/#return-policy`,
    applicableCountry: 'SA',
    returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
    merchantReturnDays: 14,
    returnMethod: 'https://schema.org/ReturnByMail',
    returnFees: 'https://schema.org/FreeReturn'
  };
}

export function warrantySchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WarrantyPromise',
    '@id': `${SITE}/#warranty`,
    durationOfWarranty: { '@type': 'QuantitativeValue', value: 12, unitCode: 'MON' },
    warrantyScope: 'https://schema.org/WarrantyFullLifetime'
  };
}

/* ─── CASE STUDY ─── */

export interface CaseStudySchemaOpts {
  slug: string;
  title: string;
  summary: string;
  image: string;
  industry: string;
  city: string;
  outcomes: { metric: string; description: string }[];
  locale?: 'en' | 'ar';
}

export function caseStudySchema(opts: CaseStudySchemaOpts) {
  const prefix = opts.locale === 'ar' ? '/ar' : '';
  const path = `${prefix}/case-studies/${opts.slug}/`;
  const pageId = `${SITE}${path}#webpage`;
  const imgId = `${SITE}${path}#primaryimage`;
  const article = {
    '@type': 'Article',
    '@id': `${SITE}${path}#article`,
    headline: opts.title,
    description: opts.summary,
    image: { '@id': imgId },
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: { '@id': pageId },
    isPartOf: { '@id': pageId },
    articleSection: opts.industry,
    inLanguage: opts.locale === 'ar' ? 'ar-SA' : 'en',
    about: {
      '@type': 'CreativeWork',
      name: opts.title,
      locationCreated: { '@type': 'City', name: opts.city },
      result: opts.outcomes.map(o => ({
        '@type': 'QuantitativeValue',
        name: o.description,
        value: o.metric
      }))
    }
  };
  return {
    '@context': 'https://schema.org',
    '@graph': [
      webPageNode({
        path, name: opts.title, description: opts.summary, locale: opts.locale,
        type: 'WebPage', primaryImageId: imgId, hasBreadcrumb: true, speakableSelectors: ['h1']
      }),
      imageObjectNode({ url: opts.image, id: imgId, width: 1920, height: 1080, caption: opts.title }),
      article
    ]
  };
}

/* ─── JOB POSTING ─── */

export interface JobPostingOpts {
  title: string;
  city: string;
  team: string;
  type: string;
}

export function jobPostingSchema(jobs: JobPostingOpts[]) {
  return jobs.map(j => ({
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: j.title,
    hiringOrganization: { '@id': ORG_ID },
    jobLocation: {
      '@type': 'Place',
      address: { '@type': 'PostalAddress', addressLocality: j.city, addressCountry: 'SA' }
    },
    employmentType: j.type === 'Full-time' ? 'FULL_TIME' : 'PART_TIME',
    datePosted: '2026-01-15',
    validThrough: '2026-12-31',
    industry: 'Uniform Manufacturing',
    occupationalCategory: j.team
  }));
}

/* ─── RESOURCE / GUIDE ─── */

export function guideSchema(opts: {
  slug: string;
  title: string;
  summary: string;
  image?: string;
  locale?: 'en' | 'ar';
  /** 'TechArticle' for standards/compliance/technical guides; defaults to 'Article'. */
  type?: 'Article' | 'TechArticle';
  datePublished?: string;
  dateModified?: string;
  proficiencyLevel?: 'Beginner' | 'Expert';
  /** Topic entities for entity-SEO (rendered as schema:about Thing nodes). */
  about?: string[];
  keywords?: string;
  /** When provided, emits a FAQPage node. The caller MUST also render these FAQs visibly — schema has to mirror on-page content. */
  faqs?: { q: string; a: string }[];
}) {
  const prefix = opts.locale === 'ar' ? '/ar' : '';
  const path = `${prefix}/resources/${opts.slug}/`;
  const pageId = `${SITE}${path}#webpage`;
  const imgId = `${SITE}${path}#primaryimage`;
  const dateModified = opts.dateModified || opts.datePublished;
  // Article vs TechArticle: technical/standards guides (Aramco PPE, FR specs,
  // compliance checklists) are TechArticle — more specific, signals expert
  // reference content. Never HowTo here (these are reference guides, not
  // step-by-step procedures; a stepless HowTo is invalid and Google rejects it).
  const article = {
    '@type': opts.type ?? 'Article',
    '@id': `${SITE}${path}#article`,
    headline: opts.title,
    name: opts.title,
    description: opts.summary,
    ...(opts.image ? { image: { '@id': imgId } } : {}),
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: { '@id': pageId },
    isPartOf: { '@id': pageId },
    inLanguage: opts.locale === 'ar' ? 'ar-SA' : 'en',
    ...(opts.datePublished ? { datePublished: opts.datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
    ...(opts.type === 'TechArticle' && opts.proficiencyLevel ? { proficiencyLevel: opts.proficiencyLevel } : {}),
    ...(opts.about && opts.about.length ? { about: opts.about.map(name => ({ '@type': 'Thing', name })) } : {}),
    ...(opts.keywords ? { keywords: opts.keywords } : {})
  };
  const graph: object[] = [
    webPageNode({
      path, name: opts.title, description: opts.summary, locale: opts.locale,
      type: 'WebPage', datePublished: opts.datePublished, dateModified,
      primaryImageId: opts.image ? imgId : undefined, hasBreadcrumb: true, speakableSelectors: ['h1']
    }),
    ...(opts.image ? [imageObjectNode({ url: opts.image, id: imgId, width: 1920, height: 1080, caption: opts.title })] : []),
    article
  ];
  if (opts.faqs && opts.faqs.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${SITE}${path}#faq`,
      isPartOf: { '@id': pageId },
      inLanguage: opts.locale === 'ar' ? 'ar-SA' : 'en',
      mainEntity: opts.faqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a }
      }))
    });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

/* ─── PRODUCT (CENTRALIZED) ─── */

export interface ProductSchemaOpts {
  slug: string;
  category: string;
  name: string;
  alternateName?: string;
  description: string;
  image: string;
  categoryName: string;
  fabric: string;
  priceFrom: number;
  sizes: string[];
  colors: string[];
  locale?: 'en' | 'ar';
  sku?: string;
  moq?: number;
  warrantyMonths?: number;
  compliance?: string[];
}

export function productSchema(opts: ProductSchemaOpts) {
  const prefix = opts.locale === 'ar' ? '/ar' : '';
  const path = `${prefix}/shop/${opts.category}/${opts.slug}/`;
  const pageId = `${SITE}${path}#webpage`;
  const imgId = `${SITE}${path}#primaryimage`;
  const product = {
    '@type': 'Product',
    '@id': `${SITE}${prefix}/shop/${opts.category}/${opts.slug}/#product`,
    name: opts.name,
    ...(opts.alternateName ? { alternateName: opts.alternateName } : {}),
    description: opts.description,
    image: { '@type': 'ImageObject', '@id': imgId, url: `${SITE}/images/${opts.image}.avif`, contentUrl: `${SITE}/images/${opts.image}.avif`, width: 1920, height: 1080, caption: opts.name },
    sku: opts.sku || `UNEOM-${opts.slug.toUpperCase()}`,
    mpn: `UNEOM-${opts.slug.toUpperCase()}`,
    brand: { '@type': 'Brand', name: 'UNEOM' },
    manufacturer: { '@id': ORG_ID },
    category: opts.categoryName,
    material: opts.fabric,
    countryOfOrigin: { '@type': 'Country', name: 'Saudi Arabia' },
    audience: { '@type': 'BusinessAudience', audienceType: 'Saudi enterprises' },
    mainEntityOfPage: { '@id': pageId },
    isPartOf: { '@id': pageId },
    inLanguage: opts.locale === 'ar' ? 'ar-SA' : 'en',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'SAR',
      lowPrice: opts.priceFrom,
      offerCount: opts.sizes.length * opts.colors.length,
      // Google recommends priceValidUntil on offers; baked at build time as
      // ~1 year out and refreshed every deploy. Without it, Merchant/Rich
      // Results flags the offer as incomplete.
      priceValidUntil: (() => { const d = new Date(); d.setFullYear(d.getFullYear() + 1); return d.toISOString().slice(0, 10); })(),
      availability: 'https://schema.org/InStock',
      seller: { '@id': ORG_ID },
      hasMerchantReturnPolicy: { '@id': `${SITE}/#return-policy` },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: { '@type': 'MonetaryAmount', value: 0, currency: 'SAR' },
        shippingDestination: { '@type': 'DefinedRegion', addressCountry: 'SA' },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: { '@type': 'QuantitativeValue', minValue: 3, maxValue: 7, unitCode: 'DAY' },
          transitTime: { '@type': 'QuantitativeValue', minValue: 2, maxValue: 5, unitCode: 'DAY' }
        }
      },
      potentialAction: { '@type': 'ReserveAction', target: { '@type': 'EntryPoint', urlTemplate: `${SITE}${prefix}/quote/?product=${opts.slug}` } }
    },
    // NOTE: aggregateRating + review intentionally OMITTED. The prior values
    // (ratingValue 4.8 / ratingCount 127 / reviewCount 89, plus a seller-
    // authored 5-star Review) were HARDCODED IDENTICAL on all 36 products —
    // a Google fake-review structured-data policy violation (manual-action /
    // rich-result-suppression risk). Re-add ONLY when wired to a real,
    // per-product review source. Do not ship fabricated ratings.
    ...(opts.compliance && opts.compliance.length > 0 ? {
      additionalProperty: opts.compliance.map(c => ({
        '@type': 'PropertyValue',
        name: 'Compliance',
        value: c
      }))
    } : {}),
    ...(opts.warrantyMonths ? {
      hasWarranty: {
        '@type': 'WarrantyPromise',
        durationOfWarranty: { '@type': 'QuantitativeValue', value: opts.warrantyMonths, unitCode: 'MON' },
        warrantyScope: 'https://schema.org/WarrantyFullLifetime'
      }
    } : {})
  };
  return {
    '@context': 'https://schema.org',
    '@graph': [
      webPageNode({
        path, name: opts.name, description: opts.description, locale: opts.locale,
        type: 'ItemPage', primaryImageId: imgId, hasBreadcrumb: true, speakableSelectors: ['h1']
      }),
      product
    ]
  };
}

/* ─── BLOG ARTICLE (CENTRALIZED) ─── */

export interface ArticleSchemaOpts {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  authorTitle: string;
  reviewerName?: string;
  reviewerTitle?: string;
  reviewerAffiliation?: string;
  section?: string;
  wordCount: number;
  locale?: 'en' | 'ar';
}

export function articleSchema(opts: ArticleSchemaOpts) {
  const prefix = opts.locale === 'ar' ? '/ar' : '';
  const path = `${prefix}/blog/${opts.slug}/`;
  const pageId = `${SITE}${path}#webpage`;
  const imgId = `${SITE}${path}#primaryimage`;
  const article = {
    '@type': 'Article',
    '@id': `${SITE}${prefix}/blog/${opts.slug}/#article`,
    headline: opts.title,
    description: opts.excerpt,
    image: { '@type': 'ImageObject', '@id': imgId, url: `${SITE}/images/${opts.image}.avif`, contentUrl: `${SITE}/images/${opts.image}.avif`, width: 1920, height: 1080, caption: opts.title },
    thumbnailUrl: `${SITE}/images/${opts.image}-640.avif`,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified || opts.datePublished,
    author: {
      '@type': 'Person',
      name: opts.authorName,
      jobTitle: opts.authorTitle,
      worksFor: { '@id': ORG_ID }
    },
    ...(opts.reviewerName ? {
      reviewedBy: {
        '@type': 'Person',
        name: opts.reviewerName,
        jobTitle: opts.reviewerTitle,
        ...(opts.reviewerAffiliation ? { memberOf: { '@type': 'Organization', name: opts.reviewerAffiliation } } : {})
      }
    } : {}),
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: { '@id': pageId },
    isPartOf: { '@id': pageId },
    ...(opts.section ? { articleSection: opts.section } : {}),
    inLanguage: opts.locale === 'ar' ? 'ar-SA' : 'en',
    wordCount: opts.wordCount,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.lead', 'article > p:first-of-type']
    },
    isAccessibleForFree: true
  };
  return {
    '@context': 'https://schema.org',
    '@graph': [
      webPageNode({
        path, name: opts.title, description: opts.excerpt, locale: opts.locale,
        type: 'WebPage', datePublished: opts.datePublished, dateModified: opts.dateModified || opts.datePublished,
        primaryImageId: imgId, hasBreadcrumb: true, speakableSelectors: ['h1', '.lead']
      }),
      article
    ]
  };
}

// JsonLd component lives in @/lib/seo/JsonLd.tsx (separate JSX module).
