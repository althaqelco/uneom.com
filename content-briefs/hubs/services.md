# Content Brief — Hub: Services (B.9)

## Page Identity

- **Page type:** Main Hub (B.9) · **Slug:** `services` · **URL EN:** `/services/` · **AR:** `/ar/services/`
- **Page file:** `src/app/(site)/services/page.tsx` — renders from `SERVICES` manifest
- **Target publish:** Wave 6, Week 17 · **Word count:** AR 700–850 / EN 600–750

## Hreflang
```html
<link rel="alternate" hreflang="ar-SA" href="https://uneom.com/ar/services/" />
<link rel="alternate" hreflang="en-SA" href="https://uneom.com/services/" />
<link rel="alternate" hreflang="x-default" href="https://uneom.com/services/" />
```

## Layer 0 (bilingual)

| Locale | Title | Meta |
|---|---|---|
| EN | `Services — 7 Programmes for Saudi Enterprises \| UNEOM` (52) | `Custom Design + Bulk Ordering + Program Management + Quality Assurance + Fabric Selection + On-Site Measurement + Sustainable Uniforms — the engineered services stack.` (160→trim 155) |
| AR | `الخدمات — 7 برامج للمؤسّسات السعودية \| UNEOM` (42) | `التصميم المخصّص + الطلب بالجملة + إدارة البرنامج + ضمان الجودة + اختيار الأقمشة + القياسات الميدانية + الأزياء المستدامة — ستاك الخدمات المهندَس.` (140) |

## Image Strategy
| # | Path | Loading | Alt EN | Alt AR |
|---|---|---|---|---|
| Hero | `public/images/heroes/corporate-pillar-hero.avif` (executive context) + srcset | eager + preload | "UNEOM Saudi services stack — Custom Design + Bulk + Program Management + QA + Fabric + Measurement + Sustainable" | «ستاك خدمات UNEOM السعودي — تصميم مخصّص + بالجملة + إدارة برنامج + ضمان جودة + اختيار أقمشة + قياسات + مستدامة» |
| Children grid | Each card uses thematic crop from heroes / fabrics / cultural folders | lazy + async | Per-service descriptive alt EN | Per-service descriptive alt AR |

**OG:** `og/hubs/services-1200x630-{en,ar}.webp` · **LCP** <2.5s · **CLS** = 0

## Targeting

- **Primary KW (AR):** `خدمات الزي للمؤسّسات السعودية` · **EN:** `Saudi enterprise uniform services`
- **Secondary:** خدمات Custom Design Saudi، Bulk Ordering uniform، Program Management 200+ headcount، Sustainable Uniforms Saudi
- **AI Citation queries:** ما الخدمات الـ7 لـUNEOM؟ · ما الفرق بين Custom Design وBulk Ordering؟ · هل Program Management لمن؟ · ما تكلفة كل خدمة؟

## Required Sections (B.9)

### 1. Hero + Architect Equation (~80 words bilingual)

EN: «UNEOM's services stack is 7 integrated programmes — from concept-to-sample Custom Design (14 days), through 50–50,000-unit Bulk Ordering, into ongoing Program Management (200+ headcount), backed by 5-stage Quality Assurance, 40+-fabric Selection lab, 24-city Measurement Services, and 3-pillar Sustainable Uniforms — engineered to interoperate, not stand alone.»

AR: «ستاك خدمات UNEOM هو 7 برامج متكاملة — من التصميم المخصّص من الفكرة للعينة (14 يوماً)، عبر الطلب بالجملة 50-50,000 قطعة، إلى إدارة البرنامج المستمرّة (200+ موظف)، مدعومة بضمان الجودة 5 مراحل، مختبر اختيار 40+ قماشاً، خدمات القياسات في 24 مدينة، والأزياء المستدامة ثلاثية الركائز — مهندَسة للتشغيل المتبادل، لا الفردية.»

### 2. Children Grid (7 service cards auto-rendered from SERVICES)

### 3. Selection Guide (~180 words bilingual)

«How to engage UNEOM services:
- **First-time programme** → Custom Design + Bulk Ordering (concept → bulk in 21–35 days)
- **Existing programme refresh** → Bulk Ordering + Quality Assurance (re-spec + per-batch audit)
- **Multi-site enterprise** → Program Management + Measurement Services (joiner kits + 24-city dispatch)
- **Regulated procurement** → Quality Assurance Audit-Pack tier + Fabric Selection
- **ESG-driven** → Sustainable Uniforms + Fabric Selection (OEKO-TEX + recycled-poly + closed-loop)»

### 4. FAQ (4 bilingual independent)

1. كم خدمة لـUNEOM؟ · How many services?
2. هل الخدمات متكاملة أم منفصلة؟ · Are services integrated or standalone?
3. ما الـSLA الأشيع لكل خدمة؟ · What's the typical SLA per service?
4. هل تتقاطع الخدمات؟ · Do services overlap?

### 5. CTA + Hub Footer

EN: "Start with a Quote. We'll suggest the services." → Quote + Calendar
AR: «ابدأ بعرض سعر. نقترح الخدمات.» ← عرض سعر + موعد

## Required Numerics (≥3)
- 7 services
- 14-day concept-to-sample (Custom Design canonical)
- 48-hour joiner-kit SLA (Program Management canonical)
- 40+ fabrics in active rotation (Fabric Selection)

## Required Entities (≥4)
MC, MHRSD, SASO, OEKO-TEX, Saudi Council of Engineers.

## Definition Lock-in

**EN:** «UNEOM Services is the **7-integrated-programme stack** — Custom Design + Bulk Ordering + Program Management + Quality Assurance + Fabric Selection + Measurement Services + Sustainable Uniforms — engineered to interoperate across Saudi enterprise client lifecycle from concept through 18-month-plus rotation cycles.»

**AR:** «خدمات UNEOM هي **ستاك 7 برامج متكاملة** — التصميم المخصّص + الطلب بالجملة + إدارة البرنامج + ضمان الجودة + اختيار الأقمشة + القياسات الميدانية + الأزياء المستدامة — مهندَسة للتشغيل المتبادل عبر دورة حياة العميل المؤسّسي السعودي من الفكرة عبر دورات تدوير 18 شهراً+.»

## Internal Links (bilingual)

| # | Anchor EN | Anchor AR | Target EN | Target AR |
|---|---|---|---|---|
| 1–7 | (7 service cards auto-rendered) | (الـ7 بطاقات خدمات) | `/services/{slug}/` × 7 | `/ar/services/{slug}/` × 7 |
| 8 | Industries hub | القطاعات | `/industries/` | `/ar/industries/` |
| 9 | Resources hub | الموارد | `/resources/` | `/ar/resources/` |
| 10 | Quote | عرض سعر | `/quote/` | `/ar/quote/` |

## External Links (2)
MC, OEKO-TEX.

## Schema bilingual
`CollectionPage` + `ItemList` (7 service children) `inLanguage` ar-SA/en-SA · `BreadcrumbList` + `FAQPage` (4 AR + 4 EN independent) + `Speakable` + `OfferCatalog` references. Rich Results validated.

## Production Checkpoint (108 × 2 locales)
- [ ] AR (700–850) + EN (600–750) authored independently
- [ ] hreflang + canonical bilingual; Hero LCP <2.5s + preload; CLS=0
- [ ] 7 service cards: bilingual alt + SLA per card; OG en + ar generated
- [ ] Schema validated; Lighthouse SEO ≥95 both locales

**Status:** Brief ready. Wave 6, Week 17.
