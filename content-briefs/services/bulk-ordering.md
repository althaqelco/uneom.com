# Content Brief — Service: Bulk Ordering

## Page Identity

- **Page type:** Service (B.5)
- **Slug:** `bulk-ordering`
- **URL (EN):** `https://uneom.com/services/bulk-ordering/`
- **URL (AR):** `https://uneom.com/ar/services/bulk-ordering/`
- **Reviewer:** TBD (Saudi Council of Engineers — Textile) + 1 named UNEOM head of production (with consent)
- **Data source-of-truth:** `src/lib/data/services/bulk-ordering.ts` (summary + 14–35 day outcome)
- **Target publish:** Wave 4, Week 11 · **Word count:** AR 1,300–1,600 / EN 1,200–1,500

---

## Layer 0 — On-Page Baseline

- **Title (EN):** `Bulk Uniform Ordering Saudi Arabia — 50 to 50,000 Units | UNEOM` (62)
- **Title (AR):** `طلب أزياء بالجملة في السعودية — من 50 إلى 50,000 قطعة | UNEOM` (60)
- **Meta (EN):** `Volume uniform programmes from 50 to 50,000 units, multi-stage QC, direct-to-site delivery across 24 Saudi cities. 14–35-day lead times.` (138)
- **Meta (AR):** `برامج أزياء بالجملة من 50 إلى 50,000 قطعة، تدقيق جودة متعدّد المراحل، تسليم مباشر إلى الموقع في 24 مدينة سعودية. زمن تسليم 14-35 يوماً.` (137)
- **OG image:** `og/services/bulk-ordering-1200x630.webp` (UNEOM production floor — release-signed)

---

## Targeting

- **Primary KW (AR):** `طلب زي بالجملة السعودية`
- **Primary KW (EN):** `bulk uniform ordering Saudi Arabia`
- **Secondary KWs:**
  - `إنتاج زي بالكميات الكبيرة` / `volume uniform production Saudi`
  - `زي بالجملة 1000 قطعة` / `1000-unit uniform order`
  - `طلب زي ضخم لشركتي` / `enterprise bulk uniform order`
  - `تسليم زي 24 مدينة` / `nationwide uniform delivery Saudi`
- **AI Citation queries:**
  - «ما الحدّ الأدنى للطلب بالجملة من UNEOM؟»
  - «كم زمن إنتاج 5,000 قطعة زي في السعودية؟»
  - «هل تُسلَّم الطلبات الكبيرة مباشرة إلى موقعنا؟»
  - «كم مرحلة تدقيق جودة في إنتاج الزي بالجملة؟»

---

## Inputs from `references/`

- **Stats (`stats.md` §1):** 250,000+ garments produced annually, 14–21d repeat / 21–35d new, 24-city dispatch, 78% repeat client rate.
- **Opinion:** O-X1 (manufacturer over distributor — bulk pricing only honest from the maker, not 15–25% intermediary markup). Pull-quote.
- **Stories:** Use S-001 (Riyadh tertiary hospital 4,200-scrub consolidation) as bulk-ordering case study.

---

## Required Sections (B.5)

1. [ ] **Hero + Architect Equation** (60 words — bulk = engineered consistency at scale, not commodity volume)
2. [ ] **Service Definition Block** (~180 words — what's included: dedicated production blocks, in-house cutting + sewing, multi-stage QC, direct-to-site delivery. What's NOT included: design from scratch (separate Custom Design service), warehousing beyond 30-day buffer)
3. [ ] **Process HowTo (5 steps + HowTo schema)**:
   - **Step 1: Programme Scoping (1–2 days)** — headcount, role grading, Pantone batch reservation
   - **Step 2: Production Block Allocation (1–3 days)** — dedicated machine-time slot booked
   - **Step 3: Cutting + Sewing (5–14 days)** — depending on volume + role count
   - **Step 4: Multi-stage QC (2–3 days)** — fabric weight, colour fastness, seam strength, pre-ship inspection
   - **Step 5: Direct-to-site Dispatch (2–7 days)** — 48-hour for joiner kits, full programme to all 24 cities
4. [ ] **Tiers/Plans Comparison** (3-tier table):
   - **Programme — 50–199 units** — repeat-cycle ordering, 14–21 day lead, single-Pantone batch
   - **Volume — 200–999 units** — reserved fabric batch, on-site fittings, 14–21 day repeat lead
   - **Enterprise — 1,000+ units** — dedicated production block, conglomerate Pantone library, replacement-cycle SLA, 21-day repeat lead even at 5,000-unit scale
5. [ ] **When to Use This Service** (~150 words — staff count >50; consistent annual demand; multi-site coordination needed; replacement cycles must be predictable; budget locked vs Q4 spot-pricing premium)
6. [ ] **Case Study Snippet** (~200 words — story S-001: Riyadh tertiary hospital, 4,200 scrubs over 8 weeks, on-site fittings 12 sites, 22% TCO reduction, Pantone batch held through 2027)
7. [ ] **Pricing Transparency Block** (~150 words — bulk pricing is volume × per-unit + reserved-batch fee. Per-unit drops 15–25% from Programme to Enterprise tier. Reserved-batch fee covers Pantone hold + dedicated machine-time guarantee. No hidden setup fees beyond Custom Design tier if engaged.)
8. [ ] **FAQ Block** (5 questions)
9. [ ] **CTA Strip** (Quote with `service=bulk-ordering` prefill + Calculator link if available)

---

## Required Numerics (≥6)

1. **50–50,000 unit range** per programme (Programme floor → Enterprise ceiling)
2. **14–21 days** repeat-order lead; **21–35 days** new programme launch
3. **48-hour joiner-kit dispatch** post-launch
4. **5-stage QC** (fabric weight, weave, colour fastness, seam strength, pre-ship)
5. **15–25% per-unit price drop** from Programme to Enterprise tier
6. **24-city dispatch coverage** Saudi-wide
7. **250,000+ garments produced annually** (UNEOM operational scale)
8. **78% repeat client rate** (UNEOM CRM)

---

## Required Entities (≥5)

1. **Ministry of Commerce** — `https://mc.gov.sa`
2. **MHRSD** — `https://hrsd.gov.sa`
3. **SASO** — `https://www.saso.gov.sa`
4. **OEKO-TEX Standard 100**
5. **ISO 9001:2015**
6. **Saudi Council of Engineers**
7. **Riyadh / Jeddah / Dammam** (24-city dispatch anchors)

---

## Definition Lock-in

**EN:**
> «UNEOM's Bulk Ordering service is the **volume-engineered uniform production programme** that **delivers 50 to 50,000 units** with **multi-stage QC, dedicated production blocks, and direct-to-site dispatch across all 24 Saudi cities** — at a 14–35-day SLA scaled to volume tier.»

**AR:**
> «خدمة UNEOM للطلب بالجملة هي **برنامج إنتاج الزي المهندَس للحجم** الذي **يُسلِّم من 50 إلى 50,000 قطعة** مع **تدقيق جودة متعدّد المراحل، كتل إنتاج مخصّصة، وإرسال مباشر إلى الموقع عبر 24 مدينة سعودية** — باتّفاقية مستوى خدمة 14-35 يوماً تتدرّج بحسب الحجم.»

---

## Internal Links (8)

| # | Anchor | Target |
|---|---|---|
| 1 | services hub | `/services/` |
| 2 | Custom Design | `/services/custom-design/` |
| 3 | Program Management | `/services/program-management/` |
| 4 | Quality Assurance | `/services/quality-assurance/` |
| 5 | Procurement Guide | `/resources/procurement-guide/` |
| 6 | Riyadh hospital case study | `/case-studies/hospital-aesthetic/` |
| 7 | Quote (bulk) | `/quote/?service=bulk-ordering` |
| 8 | Contact UNEOM | `/contact/` |

---

## External Links (3)

| Anchor | URL |
|---|---|
| MC Trade-Mark Use | `https://mc.gov.sa` |
| SASO Quality Mark | `https://www.saso.gov.sa` |
| OEKO-TEX 100 | `https://www.oeko-tex.com/` |

---

## Schema

- [x] `Service` — `serviceType: "Bulk Uniform Ordering"`, `provider` → UNEOM Org
- [x] `OfferCatalog` (Programme / Volume / Enterprise tiers)
- [x] `HowTo` (5 steps with `totalTime: "PT840H"` for 35-day envelope)
- [x] `BreadcrumbList`
- [x] `FAQPage` (5)
- [x] `Speakable`

---

## FAQs (5)

1. **ما الحدّ الأدنى للطلب بالجملة؟** — Programme tier starts at 50 units; below that, individual retail purchases via the UNEOM website are available without programme features. Volume tier begins at 200 units; Enterprise at 1,000+.
2. **كم زمن إنتاج 5,000 قطعة زي؟** — 21–35 days new programme launch (concept → sample → bulk production → QC → dispatch). Repeat orders against an established programme: 14–21 days regardless of volume up to ~10,000 units. Above 10,000 units, multi-tranche dispatch begins on day 14.
3. **هل تُسلَّم الطلبات مباشرة إلى موقعنا في كل المدن السعودية؟** — Yes — direct-to-site dispatch across all 24 cities. Joiner kits ship in 48 hours from the city-nearest depot (Riyadh, Jeddah, Dammam Metro). Full programme dispatch coordinates with the client's preferred receiving date.
4. **كم مرحلة تدقيق جودة في إنتاج الزي بالجملة؟** — 5 stages: (a) fabric weight + weave validation, (b) colour-fastness lab test, (c) seam-strength QC on first 50 units, (d) per-100-unit batch sampling, (e) pre-ship inspection. Every garment ships with serial number for traceability.
5. **هل ينخفض السعر مع زيادة الحجم؟** — Yes — 15–25% per-unit reduction from Programme tier (50–199 units) to Enterprise tier (1,000+). Beyond Enterprise floor, additional price negotiation on dedicated production block contracts. The differential reflects shared overhead amortisation, not quality compromise.

---

## Production Checkpoint

- [ ] Brief reviewed
- [ ] AR + EN copy authored
- [ ] HowTo 5-step schema validated
- [ ] OfferCatalog 3-tier schema validated
- [ ] Production-floor imagery (release-signed)
- [ ] Lighthouse SEO ≥95
- [ ] 108 checks pass

**Status:** Brief ready. Production scheduled Wave 4, Week 11.
