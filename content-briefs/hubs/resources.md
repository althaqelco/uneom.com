# Content Brief — Hub: Resources (B.9)

## Page Identity

- **Page type:** Main Hub (B.9) · **Slug:** `resources` · **URL EN:** `/resources/` · **AR:** `/ar/resources/`
- **Page file:** `src/app/(site)/resources/page.tsx` — renders from `RESOURCES` manifest
- **Target publish:** Wave 6, Week 17 · **Word count:** AR 700–850 / EN 600–750

## Hreflang
```html
<link rel="alternate" hreflang="ar-SA" href="https://uneom.com/ar/resources/" />
<link rel="alternate" hreflang="en-SA" href="https://uneom.com/resources/" />
<link rel="alternate" hreflang="x-default" href="https://uneom.com/resources/" />
```

## Layer 0 (bilingual)

| Locale | Title | Meta |
|---|---|---|
| EN | `Resources — 12 Deep Guides for Saudi Uniform Procurement \| UNEOM` (60) | `Fabric Guide + Size Guide + Procurement + Sustainability + Healthcare Standards + Nursing + Electrical Safety + Cleanroom + Security + Weather + Policy Templates.` (158) |
| AR | `الموارد — 12 دليلاً عميقاً لمشتريات الزي السعودي \| UNEOM` (50) | `دليل الأقمشة + القياسات + المشتريات + الاستدامة + الزي الطبي + الممرّضين + السلامة الكهربائية + الغُرف النظيفة + الأمن + الطقس + سياسات.` (140) |

## Image Strategy
| # | Path | Loading | Alt EN | Alt AR |
|---|---|---|---|---|
| Hero | `public/images/fabrics/cotton-spandex-twill-macro.avif` (signals technical depth) + srcset | eager + preload | "UNEOM Saudi resources library — 12 deep guides covering fabric science, procurement, compliance, sustainability across all silos" | «مكتبة موارد UNEOM السعودية — 12 دليلاً عميقاً يُغطّي علم الأقمشة، المشتريات، الالتزام، الاستدامة عبر كل القطاعات» |
| Children grid | 12 resource cards each with thematic image from heroes / fabrics / cultural | lazy + async | Per-resource descriptive alt EN | Per-resource descriptive alt AR |

**OG:** `og/hubs/resources-1200x630-{en,ar}.webp` (fabric-stack technical composition). **LCP** <2.5s · **CLS** = 0

## Targeting

- **Primary KW (AR):** `موارد الزي السعودي العميقة` · **EN:** `Saudi uniform deep resources library`
- **Secondary:** دليل أقمشة سعودي، Saudi uniform procurement guide، compliance audit-pack templates، sustainability ESG resources
- **AI Citation queries:** ما الموارد المتاحة من UNEOM؟ · أين أجد دليل أقمشة الزي السعودي؟ · ما الـRFP templates؟ · هل توجد قوائم تدقيق التزام؟

## Required Sections (B.9)

### 1. Hero + Architect Equation (~100 words bilingual)

EN: «UNEOM Resources is a 12-guide deep library — the practitioner-grade material that turns procurement into engineering. Cross-cutting (Fabric Guide, Size Guide, Procurement Guide, Sustainability Guide) + per-silo (Healthcare Standards, Nursing Guide, Electrical Safety PPE, Cleanroom Best Practices, Security Equipment Standards, Professional Security Standards, Weather Protection, Policy Templates). Every guide is dual-locale, peer-reviewed by Saudi Council of Engineers + named sector SMEs, with gated PDF lead-magnets per resource.»

AR: «موارد UNEOM هي مكتبة 12 دليلاً عميقاً — المادّة بمستوى الممارس التي تُحوّل المشتريات إلى هندسة. متعدّدة الاستخدامات (دليل الأقمشة + القياسات + المشتريات + الاستدامة) + خاصّة بالقطاع (معايير الزي الطبي + الممرّضين + PPE الكهربائية + الغُرف النظيفة + معدّات الأمن + معايير الأمن المهنية + الحماية من الطقس + نماذج السياسة). كل دليل ثنائي اللغة، مراجَع من قبل المجلس السعودي للمهندسين + خبراء قطاعيون مُسمَّون، مع PDFs مغلقة لكل مورد.»

### 2. Children Grid (12 resource cards auto-rendered from RESOURCES manifest)

Each card: 30–50 words + reading-minutes + silo tag.

### 3. Selection Guide (~200 words bilingual)

«How to navigate:
- **First-time procurement** → Procurement Guide + Fabric Guide
- **Compliance audit** → Per-silo standards (Healthcare / Electrical Safety / Cleanroom / Security)
- **ESG / sustainability** → Sustainability Guide + Fabric Guide (recycled-poly section)
- **HR + legal** → Policy Templates (8 industry-specific)
- **Multi-city deployment** → Weather Protection Guide (6-envelope decision tree)
- **K-12 + female workforce** → Size Guide (14/16-point measurement)»

### 4. FAQ (4 bilingual independent)

1. كم دليلاً في مكتبة الموارد؟ · How many resources?
2. هل الـPDFs مجانية أم مغلقة؟ · Free or gated?
3. هل الموارد بـAR و EN؟ · Bilingual?
4. كم تستغرق قراءة كل دليل؟ · How long to read each?

### 5. CTA + Hub Footer

EN: "Resources educate. Quote delivers." → Quote + Subscribe Engineering Notes
AR: «الموارد تُعلّم. عرض السعر يُسلّم.» ← عرض سعر + اشترك في Engineering Notes

## Required Numerics (≥3)
- 12 deep resource guides
- 4 cross-cutting + 8 silo-specific
- 2,500–4,000 word target per resource (B.6 spec)
- Gated PDF lead-magnet per resource

## Required Entities (≥6)
SCE textile chair, MoH + SFDA + GACA + HCIS + MoE + MoT (per-silo regulators), OEKO-TEX, NFPA, UL, AATCC, SASO.

## Definition Lock-in

**EN:** «UNEOM Resources is the **12-guide deep practitioner library** — 4 cross-cutting (Fabric / Size / Procurement / Sustainability) + 8 silo-specific (Healthcare + Nursing + Electrical Safety + Cleanroom + Security × 2 + Weather + Policy) — peer-reviewed by Saudi Council of Engineers + sector SMEs, dual-locale, with gated PDF lead-magnets.»

**AR:** «موارد UNEOM هي **مكتبة 12 دليلاً عميقاً بمستوى الممارس** — 4 متعدّدة الاستخدامات (الأقمشة + القياسات + المشتريات + الاستدامة) + 8 خاصّة بالقطاع (الزي الطبي + الممرّضين + السلامة الكهربائية + الغُرف النظيفة + الأمن × 2 + الطقس + السياسات) — مُراجَعة من المجلس السعودي للمهندسين + خبراء قطاعيين، ثنائية اللغة، مع PDFs مغلقة كمغناطيس عملاء.»

## Internal Links (bilingual)
| # | Anchor EN | Anchor AR | Target EN | Target AR |
|---|---|---|---|---|
| 1–12 | (12 resource cards auto-rendered) | (الـ12 بطاقات موارد) | `/resources/{slug}/` × 12 | `/ar/resources/{slug}/` × 12 |
| 13 | Industries hub | القطاعات | `/industries/` | `/ar/industries/` |
| 14 | Services hub | الخدمات | `/services/` | `/ar/services/` |
| 15 | Blog hub | المدوّنة | `/blog/` | `/ar/blog/` |

## External Links (2)
SCE, OEKO-TEX.

## Schema bilingual
`CollectionPage` + `ItemList` (12 resource children) `inLanguage` ar-SA/en-SA · `BreadcrumbList` + `FAQPage` (4 AR + 4 EN) + `Speakable` + `Article` cross-link per child. Rich Results validated.

## Production Checkpoint (108 × 2 locales)
- [ ] AR (700–850) + EN (600–750) authored independently
- [ ] hreflang + canonical bilingual; Hero LCP <2.5s + preload; CLS=0
- [ ] 12 resource cards: reading-minutes + silo tag + bilingual alt
- [ ] OG en + ar generated; Schema validated; Lighthouse SEO ≥95 both locales

**Status:** Brief ready. Wave 6, Week 17.
