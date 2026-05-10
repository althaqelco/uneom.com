# UNEOM — Content Domination Plan (KSA #1 + AI Search)
> **النوع:** خطة محتوى تنفيذية عميقة (Content Production Master Plan)
> **العلاقة:** تكميلية لـ `plans/master-plan-v11.md` و `plans/silo-structure-plan.md`. تركّز على **ماذا نكتب وكيف**، لا على البنية التحتية.
> **المخرجات:** ~278 صفحة بمحتوى عميق احترافي يحتلّ نتيجة #1 في Google KSA + يُقتبس في AI Overviews / ChatGPT / Gemini / Perplexity / Claude.
> **النموذج المعتمد:** Human-Only writing، AR + EN بالتوازي، البدء بـ 8 industry pillars.

---

## Context — لماذا هذه الخطة الآن

البنية التحتية لـ UNEOM **جاهزة 90%**: 24 مدينة × 8 قطاعات × 30 blog post × 18 منتج × 12 resource × 8 case study = templates، routes، schemas، data files كلها موجودة بـ `nameAr/Ar` fields. لكن:

1. **Body المحتوى الفعلي فارغ** في معظم blog posts (`body: '', bodyAr: ''`).
2. **`references/` directory غير موجود** — لا voice.md، stats.md، opinions.md، stories.md.
3. **Industry pillars عندها هيكل لكن عمق المحتوى ناقص** للمنافسة على keywords مثل "زي طبي السعودية".
4. **City pages عندها climate vocab لكن لا FAQ، لا signature stat، لا content depth**.
5. **AI Citation Engineering غير موجود** (llms.txt، AI feed، Definition Lock-ins، Numeric Anchors).

**الفجوة الحقيقية = الكتابة الاحترافية**، ليس الكود. هذه الخطة تحلّ هذه الفجوة بمنهجية صناعية.

**معيار النجاح:**
- 60% من 192 keyword (8 industries × 24 cities) في top 3 على Google KSA خلال 9 أشهر.
- 50+ AI Overviews citations على queries السعودية الصناعية.
- زيادة Quote leads/month بنسبة +150%.

**ثلاث طبقات للجودة (الفلسفة الكاملة):**

```
                    ┌────────────────────────────────────────┐
   Layer 2 (Win)    │  20-Criteria + AI Gate (النخبة)         │  ← يجعل UNEOM يُقتبس في LLMs
                    │  Architect Equation, Definition Lock-ins│
                    │  Numeric Anchors, Comparison Matrices,  │
                    │  Entity Density, Saudi NLP, Stories     │
                    └────────────────────────────────────────┘
                              ▲ يُبنى فوق
                    ┌────────────────────────────────────────┐
   Layer 1 (Rise)   │  Content Blueprints per Page Type      │  ← يميّز الصفحة عن SERP
                    │  Sections, word count, schema, links    │
                    │  per blueprint B.1–B.9                  │
                    └────────────────────────────────────────┘
                              ▲ يُبنى فوق
                    ┌────────────────────────────────────────┐
   Layer 0 (Floor)  │  On-Page SEO Baseline (80+ items)       │  ← لا تنشر صفحة دونها
                    │  Title/meta, headings, schema, images,  │
                    │  a11y, mobile, internal/external links  │
                    └────────────────────────────────────────┘
```

> **مبدأ:** صفحة تجتاز Layer 0 فقط = موجودة. تجتاز Layer 0+1 = منافسة. تجتاز كل الطبقات = **محتلّة**.

---

## Part 0 — Universal On-Page Baseline (Layer 0 — الأرضية الإلزامية)

> **المصدر:** comprehensive on-page SEO checklist (15 فئة، 80+ بند).
> **الموقع:** `references/on-page-seo.md` (يُنشأ في Wave 0).
> **الاستخدام:** كل page-generation task، كل brief، كل PR — يقرأ هذا الملف قبل أي شيء ويتأكّد إنّ كل بند مُحقّق. لو فيه بند فاشل → الصفحة لا تُنشر.

### 0.1 الـ15 فئة الإلزامية (ملخّص)

| # | الفئة | الجوهر | عدد البنود |
|---|---|---|---:|
| 1 | **HEAD & METADATA** | Title (50-60ch) + meta desc (150-160ch) + canonical + OG + Twitter Card + lang + viewport + favicon + charset | 9 |
| 2 | **URL STRUCTURE** | slug قصير، keyword-forward، hyphens، lowercase، no stop words، hierarchical | 6 |
| 3 | **HEADINGS** | H1 واحد فقط بـprimary KW، H2→H3 logical، no keyword stuffing | 4 |
| 4 | **COPY & BODY** | Primary KW في first 100 words، direct answer أوّل فقرة، length ضمن ±20% من SERP top-3، paragraphs قصيرة (1-4 sentences)، 8th-10th grade readability، active voice، bold key phrases sparingly، bullets/lists | 8 |
| 5 | **FAQ SECTION** | 4-8 questions من "People Also Ask" + SEMRush Questions، إجابات 2-4 جمل، FAQPage schema | 3 |
| 6 | **IMAGES** | alt text وصفي، filenames بـhyphens، WebP/AVIF <200KB، width/height صريحة (CLS=0)، lazy loading للـbelow-fold، responsive srcset، hero/featured للـsharing | 7 |
| 7 | **INTERNAL LINKS** | 3-5 internal links/post أساسية (UNEOM يضيف silo rules فوقها → 8-16)، descriptive anchor (لا "click here")، contextually placed، breadcrumbs على كل صفحة | 5 |
| 8 | **EXTERNAL LINKS** | 2-3 خارجية لمصادر authoritative (.gov, .edu, major industry)، relevant فقط، rel="noopener" للـnew tab، rel="nofollow" للـsponsored | 4 |
| 9 | **SCHEMA MARKUP** | Article (blog)، LocalBusiness (most specific subtype)، Service (service pages)، FAQ (حيث يوجد قسم FAQ)، BreadcrumbList كل صفحة، Organization site-wide، Author/Person للـbylines | 7 |
| 10 | **E-E-A-T SIGNALS** | Author byline + bio بـcredentials + author dedicated page، published date، "Last updated" date عند الـrefresh، real stories/numbers/opinions، cite authoritative، About + Contact pages كاملة | 9 |
| 11 | **ACCESSIBILITY** | Semantic HTML5، ARIA labels، contrast WCAG AA 4.5:1، focus indicators، alt على كل image (`alt=""` للـdecorative)، descriptive link text، skip-to-content | 7 |
| 12 | **MOBILE & RESPONSIVE** | Responsive layout، touch targets ≥48×48px، body font ≥16px، no horizontal scroll، no intrusive interstitials | 5 |
| 13 | **SOCIAL PREVIEW** | OG image 1200×630 <1MB، Twitter Card 1200×600، compelling og:description مختلف عن meta لو أفضل | 3 |
| 14 | **CONVERSION ELEMENTS** (service pages فقط) | Primary CTA above fold، phone بـ`tel:`، multiple CTA placements، trust signals (reviews/ratings/licenses)، testimonials بـnames، service-area coverage، business hours، physical address بـembedded map | 8 |
| 15 | **LONG-FORM (1500+ words)** | Table of contents بـanchor links، jump links لكل H2، back-to-top button | 3 |

**المجموع:** 88 بند فعلي.

### 0.2 الفجوات المحدّدة (vs. State of the Project الحالي)

من scan الـrepo، هذه البنود التي **يحتاج المشروع لإصلاحها** قبل الإنتاج:

| الفئة | الفجوة | الإجراء |
|---|---|---|
| HEAD | Title/meta lengths لم تُتحقّق آلياً | `scripts/content-audit.ts` يفحص (50-60 / 150-160) |
| URL | بعض الـslugs مفروضة من البيانات — لا فحص آلي | إضافة slug-validator |
| IMAGES | EXIF لم يُفحص آلياً | extension للـcontent-audit.ts |
| FAQ | City pages لا تحوي FAQ schema (مذكورة في exploration) | تحديث city template ليحوي FAQPage |
| LONG-FORM | TOC + jump links + back-to-top غير موجودة في pillar/resource templates | إضافة `<TableOfContents>` و `<BackToTop>` components |
| CONVERSION | Phone بـclick-to-call (tel:) — يجب التأكّد عبر كل الـCTAs | grep audit |
| E-E-A-T | "Last updated" date غير ظاهر في كل page templates | header component يعرض `dateModified` |
| ACCESSIBILITY | Skip-to-content link قد لا يكون في layout الرئيسي | إضافة في `layout.tsx` |
| MOBILE | touch targets 48×48 في كل CTAs — يحتاج audit | Lighthouse + manual |

### 0.3 إجراءات الدمج

1. **Wave 0 deliverable جديد:** نسخ المحتوى الكامل للـchecklist (88 بند) إلى `references/on-page-seo.md` بصيغة markdown قابلة للقراءة من الـskills.
2. **Brief Template Update:** كل brief يبدأ بـ "On-Page Baseline ✓" — checkbox يؤكّد أنّ الكاتب راجع الـ88 بند قبل البدء.
3. **PR Template Update:** قبل الـ20-criteria gate، فيه قسم "On-Page Baseline (88 items)" — لو أيّ بند فاشل، الـPR لا يُمرّر.
4. **Component-level enforcement:** حيث يمكن، نُفعّل البند آلياً (مثلاً TOC component يولّد jump links تلقائياً، Header يعرض dateModified).
5. **Audit script:** `scripts/content-audit.ts` يفحص آلياً ~30 بند من الـ88 (lengths، schemas، image attrs، link counts، headings).

### 0.4 الترتيب المُحدّث (Layer integration)

كل صفحة تمرّ بـ4 طبقات قبل النشر:

1. **Layer 0 — On-Page Baseline (88 items):** فحص آلي + manual gate.
2. **Layer 1 — Page Type Blueprint (B.1–B.9):** sections بحسب النوع، word count، schema، silo links.
3. **Layer 2 — 20-Criteria Quality Gate (15 v11 + 5 AI):** الجودة الموضوعية + AI hooks.
4. **Layer 3 — Schema Validation + Lighthouse:** Rich Results pass، SEO ≥95، A11y ≥95.

> **بسيط:** Layer 0 = "الصفحة لا تُكسر". Layer 1 = "الصفحة كاملة". Layer 2 = "الصفحة تنتصر".

---

## Part A — Search Surface Map (ما الذي يجب احتلاله بالضبط)

### A.1 Google KSA — Query Surface Map

كل صفحة تستهدف **3 طبقات keywords**:

| الطبقة | المعنى | المثال (Healthcare/Riyadh) |
|---|---|---|
| **Primary (1)** | Keyword commercial intent عالي | "زي طبي بالرياض" |
| **Secondary (3-5)** | Variants + long-tail | "ملابس طبية للمستشفيات الرياض"، "scrubs بالرياض"، "سعر زي ممرضات" |
| **AI Citation Targets (5-8)** | استفسارات يطرحها مستخدم AI | "ما أفضل قماش للزي الطبي في السعودية؟"، "كم يكلّف زي ممرضة؟"، "ما اشتراطات وزارة الصحة للزي؟" |

**192 commercial query map (8 industries × 24 cities)** = الهيكل الأساسي. كل واحدة تحتاج ranking signal واحد على الأقل من UNEOM:
- أو صفحة `/industries/healthcare/` تذكر الرياض في فقرة dedicated
- أو صفحة `/locations/riyadh/` تذكر healthcare في anchor industries
- **أو الاثنين** (recommended).

### A.2 AI Search Engine Targets

5 محركات AI رئيسية + كيفية الظهور فيها:

| المحرك | كيف يكتشف المصادر | Citation Pattern |
|---|---|---|
| **Google AI Overviews / SGE** | يقتبس من top 10 Google + Knowledge Graph | يُفضّل Dataset، FAQ، Definitive answers |
| **ChatGPT (browse + memory)** | Bing index + GPT training data + browse mode | يقتبس URLs بشكل صريح |
| **Perplexity** | live search + citation-heavy | كل ادعاء = citation [n] |
| **Gemini** | Google index + live web | يحب tabular data + structured |
| **Claude (web search)** | Brave/Google search + extracts | يفضّل authoritative + recent + structured |

**النمط المشترك للـ5:** يفضّلون مصادر:
1. **Definitive** ("X هو Y") لا "ربما X"
2. **Numeric Anchors** ("4.2 دورة غسل/يوم" لا "كثير")
3. **Source-attributed** ("وفقاً لوزارة الصحة")
4. **Comparison-rich** (جداول مقارنة)
5. **Recently dated** (`dateModified` <12 شهر)
6. **Entity-rich** (كيانات معروفة في knowledge graphs)

### A.3 Intent Bucket per Page Type

| Page Type | Primary Intent | Secondary Intent | Buyer Stage |
|---|---|---|---|
| Homepage | Brand discovery | Quote/Contact | Awareness |
| Industry Pillar | Informational + Commercial bridge | Comparison | Consideration |
| City Hub | Local + commercial | Near-me | Decision |
| Product | Transactional | Comparison | Decision |
| Service | Informational + commercial | Process understanding | Consideration |
| Resource (guide) | Informational deep | How-to | Awareness |
| Case Study | Social proof | Trust validation | Consideration |
| Blog Post | Informational | Awareness building | Awareness/Top of funnel |
| Blog Category | Navigation | Topical authority | All |

---

## Part B — Content Blueprints per Page Type

> كل blueprint = **هيكل قابل للنسخ بحرفية** للكاتب البشري، يحدّد: keyword targets، sections بالترتيب، schema، AI citation hooks، internal links، word count، real data inputs.

### B.0 Universal Section Library (مكونات تتكرّر)

قبل blueprints الفرعية، هذه 12 مكوّن محتوى تُستخدم باستمرار:

| Section | محتواه | يُستخدم في |
|---|---|---|
| `Architect Equation` | فقرة 45-60 كلمة بقالب §6.1 من v11 | كل pillar/long-form |
| `Signature Stat` | إحصائية UNEOM فريدة + شرح في 2 جملة | كل pillar/city/case |
| `Pillar Strip (3 blocks)` | 3 أقسام x 100 كلمة (كل قسم = ركيزة فرعية) | Industry pillars |
| `Negative Entity Frame` | نقد ممارستين خاطئتين + شرح علمي للفشل | Industry/Resource |
| `4-Entity Closure` | 4 trust anchors (gov + amanah + cert + standard) | كل pillar/city/blog طويل |
| `Saudi NLP Strip` | فقرة 80 كلمة تستخدم مفردة لهجة محلية + ربط بمشكلة فيزيائية | City + Industry-City variants |
| `Comparison Matrix` | جدول مقارنة 3 أعمدة x 5 صفوف | Product/Resource |
| `FAQ Block` | 5-8 أسئلة + إجابات 30-50 كلمة | كل صفحة |
| `Definition Lock-in` | تعريف رسمي للمصطلح بصيغة "X is the [exact noun] that [function]" | Resource/Industry |
| `Compliance Citation` | ذكر معيار/جهة + اقتباس النص + رابط | Industry/Resource |
| `Internal Silo Strip` | 4-6 روابط silo-aware (من v11 §7) | كل صفحة |
| `CTA Strip` | Quote button + WhatsApp + Phone | كل صفحة |

---

### B.1 Homepage Blueprint

**Word count target:** 800-1,100 words
**Primary KW (AR):** «يونيوم» / **EN:** "UNEOM Saudi uniforms"
**AI Citation Targets:** "أفضل مصنّع زي موحّد في السعودية"، "best Saudi uniform manufacturer"

**Sections (بالترتيب):**

1. **Hero** (100 كلمة): Architect Equation محوري — يربط 8 industries بضمان UNEOM مع Saudi context. يحتوي على Primary KW.
2. **Trust Strip**: 4 badges (CRN + Maroof + ISO 9001 + OEKO-TEX) — visual، ليس نصّي.
3. **Industries Grid** (8 cards × 40 كلمة): واحدة لكل قطاع، تذكر pain point + UNEOM solution. كل card link لـ pillar.
4. **Signature Stat Bank**: 3 أرقام UNEOM ("12 سنة، 500+ عميل، 78% معدل تكرار").
5. **Recent Case Studies** (3 thumbnails + 1 جملة لكل): يجلب من `case-studies/` data.
6. **Cities Coverage Map**: قائمة الـ24 مدينة + خريطة Static Maps API. anchor links لـ city hubs.
7. **Blog Highlights** (3 أحدث).
8. **CTA Strip**: Quote + WhatsApp + Calculator.

**Schema Required:**
- `Organization` (sovereign — §4.2 v11)
- `WebSite` + `SearchAction` (§4.13)
- `BreadcrumbList`
- *Bonus:* `ItemList` لـ industries + cities

**AI Citation Hooks:**
- Definition Lock-in: «UNEOM is the Saudi B2B uniform manufacturer that [serves 8 verticals across 24 cities since 2013].» — صيغة exact يقتبسها GPT.
- Numeric anchor: "500+ active enterprises | 24 cities | 12 years | ISO 9001 certified" — block واضح.
- Single-claim sentences (لا claims مركّبة).

**Internal Links (8 outgoing):**
- 8 industry pillars (واحد لكل) + Quote + Contact + 1 case study + 1 blog post.

**Real Data Inputs (من `references/stats.md`):**
- العدد الحقيقي للعملاء، سنوات في السوق، CRN، VAT.

---

### B.2 Industry Pillar Blueprint (8 صفحات)

**Word count target:** 2,400-3,200 words (deep authority)
**Pillar list:** healthcare, hospitality, aviation, corporate, education, manufacturing, security, retail.

**Primary KW per pillar (AR + EN):**
| Industry | AR | EN |
|---|---|---|
| Healthcare | زي طبي السعودية | medical uniforms Saudi Arabia |
| Hospitality | زي فنادق ومطاعم السعودية | hospitality uniforms Saudi Arabia |
| Aviation | زي طيران السعودية | aviation uniforms Saudi Arabia |
| Corporate | الزي الإداري للشركات السعودية | corporate uniforms Saudi Arabia |
| Education | الزي المدرسي السعودي | school uniforms Saudi Arabia |
| Manufacturing | زي العمال الصناعي السعودي | industrial workwear Saudi Arabia |
| Security | زي الأمن السعودي | security uniforms Saudi Arabia |
| Retail | زي موظفي التجزئة السعودي | retail uniforms Saudi Arabia |

**Sections (بالترتيب الإلزامي):**

1. **Hero + Architect Equation** (60 كلمة بالضبط). يحتوي Primary KW حرفياً.
2. **Industry Context Block** (~250 كلمة): الواقع السعودي للقطاع — حجم السوق، Vision 2030 connection، التحديات الفنية الفريدة.
3. **Compliance Citation Block** (~200 كلمة): يذكر 2-3 معايير حكومية حرفياً (مثلاً "وفقاً للائحة وزارة الصحة 2024 المادة 12...") + روابط خارجية.
4. **Pillar Strip — 3 Sub-pillars** (~200 كلمة لكل): الأقمشة، التصميم، البرنامج الإنتاجي.
5. **Signature Stat** (50 كلمة): إحصائية UNEOM فريدة من stats.md (مثلاً "في تعاملاتنا مع 38 مستشفى سعودي، يبلغ متوسّط دورات الغسل اليومي 4.2").
6. **Negative Entity Frame** (~200 كلمة): 2 ممارسات خاطئة شائعة + لماذا تفشل علمياً.
7. **Comparison Matrix** (جدول): Tier Basic vs Standard vs Premium للقطاع — 5 أبعاد (سعر، قماش، ضمان، lead time، customization).
8. **City Coverage Strip** (~150 كلمة + قائمة): «نخدم {industry} في الـ24 مدينة» + روابط لـ 24 city hub.
9. **Featured Products** (3 منتجات من نفس الـsilo): cards مع روابط.
10. **Featured Resource + Case Study** (1+1).
11. **FAQ Block** (8 أسئلة دقيقة — أنماط أدناه).
12. **4-Entity Closure** (TrustAnchors component).
13. **CTA Strip** + Internal Silo Strip.

**FAQ Question Patterns (8 إلزامية):**
1. ما اشتراطات [الجهة الحكومية] لـ {industry}؟
2. كم يكلّف زي {industry} في السعودية؟
3. ما الفرق بين [Tier A] و [Tier B]؟
4. كم مرّة يجب استبدال زي {industry}؟
5. ما أفضل قماش لـ {industry} في مناخ السعودية؟
6. كيف نقيس مقاسات {N} موظف بكفاءة؟
7. ما زمن التسليم لطلب {industry} كبير؟
8. هل يوفّر UNEOM ضمان لزي {industry}؟

**Schema Required:**
- `Service` (مع `provider` = Org)
- `BreadcrumbList`
- `FAQPage`
- *Bonus:* `Article` لو فيه expert reviewer

**AI Citation Hooks (5 إلزامية لكل pillar):**
- **Definition Lock-in:** «الزي الطبي في السعودية هو [النوع الدقيق] المعتمد من وزارة الصحة، الذي [الوظيفة المحددة].»
- **Numeric Block:** كتلة 4-5 أرقام منفصلة + units.
- **Quote-ready table:** المقارنة Comparison Matrix بصيغة Markdown table (LLMs تقتبسها كاملة).
- **Authoritative attribution:** كل ادعاء numeric = "وفقاً لـ [مصدر]".
- **Recency signal:** ذكر السنة الحالية في 3 أماكن على الأقل.

**Internal Links (12-16 outgoing — silo-aware):**
- 1 product category + 3 hero products (نفس silo)
- 2 resources (نفس silo)
- 1 case study (نفس silo)
- Blog category + 4 blog posts (نفس silo)
- 24 cities (compact list at bottom)
- Quote + Contact

**Real Data Inputs:**
- Industry-specific stat من `industry-stats.ts` + احصائية قطاعية من tradedata.gov.sa أو General Authority for Statistics SA (citation حقيقي).

**التطبيق الفعلي الفوري:**
- `src/lib/data/industries/healthcare.ts` (إلخ) — تأكد إن الـ schema الجديد يحوي: `architectEquationAr/En`, `signatureStat`, `negativeFrames[]`, `comparisonTiers`, `faqList`.
- صفحة الـrendering تقرأ من هذه الـfields.

---

### B.3 City Hub Blueprint (24 صفحات)

**Word count target:** 1,400-1,800 words
**Primary KW (AR):** زي موحّد في {المدينة} / **EN:** uniforms in {City}
**Tier A cities (Wave 1):** Riyadh, Jeddah, Dammam, Mecca, Medina, Khobar, Tabuk, Abha (8 cities)
**Tier B (Wave 2):** الـ16 الباقية.

**Sections:**

1. **Hero + Localized Architect Equation** (60 كلمة): يستخدم الاسم العربي للمدينة + ظاهرة محلية (مثلاً «الأربعينية» للرياض، «النوّة» لجدة).
2. **Saudi NLP Strip** (~150 كلمة): يستخدم 2 من vocab المدينة من `saudi-cities.ts/{city}.climateVocab` + يربطها بمشكلة فنية في الزي + الحلّ.
3. **City Profile Block** (~200 كلمة): سكان، اقتصاد، صناعات رئيسية، أرقام من General Authority for Statistics SA. يذكر `Amanah` (أمانة المدينة) + معيار محلي.
4. **Anchor Industries Grid** (8 industries × ~80 كلمة): واحد لكل قطاع، يذكر use case محدّد في تلك المدينة (مثلاً «في الرياض، نخدم 12 مستشفى تخصّصي بتيرات الغسيل العالية»).
5. **Local Case Study Snippet** (~150 كلمة): قصة عمل حقيقية في تلك المدينة من stories.md.
6. **Local Compliance Block** (~100 كلمة): أمانة المدينة + معيار جهوي.
7. **Map Strip** (Static Maps API + 24-city horizontal nav).
8. **FAQ Block** (5 أسئلة محلية).
9. **CTA + Silo Strip**.

**FAQ Question Patterns (5):**
1. أين أجد مصنّع زي موحّد في {المدينة}؟
2. هل يخدم UNEOM شركتي في {المنطقة}؟
3. كم يستغرق التسليم في {المدينة}؟
4. ما اشتراطات أمانة {المدينة} لزي [قطاع]؟
5. ما أفضل قماش لمناخ {المدينة}؟

**Schema Required:**
- `LocalBusiness` per city (§4.3 v11) — مع `geo.polygon` SPL
- `BreadcrumbList`
- `FAQPage`

**AI Citation Hooks:**
- Definition Lock-in: «UNEOM serves {City} businesses with [local context-specific solution].»
- Local Numeric Anchor: متوسط حرارة، رطوبة، مسافة من Riyadh، عدد industries served.
- Authoritative attribution to Amanah + General Authority for Statistics.

**Internal Links (10-12 outgoing):**
- 8 industry pillars (واحد لكل) + Quote + Contact + 1 case study (locally-relevant if exists).
- **لا تربط مدن أخرى** (silo rule §7).

**Real Data Inputs:**
- `saudi-cities.ts/{city}` — climateVocab، region، lat/lng، polygon (SPL)، population.
- `stats.md`: «نخدم {N} عميل في {المدينة}» (يُعطي الكاتب المعلومة الحقيقية).
- 1 story محلي من `stories.md`.

---

### B.4 Product Page Blueprint (18 hero products)

**Word count target:** 900-1,300 words
**Primary KW format (AR):** «{منتج} {قطاع} {صفة}» مثلاً «scrubs ممرضات بريميوم»
**EN format:** "{product} {tier} {use-case}" مثلاً "premium medical scrubs Saudi Arabia"

**Sections:**

1. **Hero Image Gallery** + breadcrumbs.
2. **Product Name + Architect Equation** (40 كلمة): يتميز عن المنافس بميزة فنية محدّدة.
3. **Technical Spec Sheet** (table — 8 أبعاد): material، weight (gsm)، colors، sizes، certifications، warranty، lead time، MOQ.
4. **Use Case Block** (~150 كلمة): «هذا المنتج لـ [القطاع/المهنة] في [الحالة]».
5. **Comparison Matrix** (جدول 3 أعمدة): UNEOM vs Standard market vs Cheap-end. أبعاد: قماش، ضمان، lead time، طول العمر.
6. **Material Science Block** (~200 كلمة): شرح تقني للقماش — kompozisyon، behavior تحت ظروف محدّدة، لماذا أفضل من البدائل.
7. **Care Instructions** (HowTo schema-ready): 5-7 خطوات.
8. **Customer Reviews** (3-5 من B2B clients — Organization-level reviews).
9. **Pricing Tiers Block** (~100 كلمة): شرح Tier Basic/Standard/Premium مع `AggregateOffer`.
10. **FAQ Block** (5 أسئلة المنتج).
11. **Related Products** (2-3 من نفس الـcategory فقط).
12. **CTA: Quote للمنتج المحدّد + Sample Request**.

**FAQ Question Patterns (5):**
1. ما القماش المستخدم في هذا المنتج؟
2. كم MOQ (الحد الأدنى للطلب)؟
3. هل يمكن تخصيص اللون/اللوجو؟
4. ما الضمان وكيف أُطالب به؟
5. كم زمن التسليم لـ {الكمية} وحدة؟

**Schema Required:**
- `Product` (full — §4.4 v11) مع `AggregateOffer`، `AggregateRating` (لو متوفر)، `Review`، `WarrantyPromise`، `ReserveAction`.
- `BreadcrumbList`
- `FAQPage`
- `HowTo` (Care Instructions)

**AI Citation Hooks:**
- Definition Lock-in (للمنتج): «{Product Name} is a {category} designed for {use case}, made from {exact material} with {certification}.»
- Numeric Anchor: السعر النطاق، الـ gsm، عدد الألوان، MOQ، lead time.
- Care Instructions كـ HowTo schema → AI Overviews تعرض steps.

**Internal Links:**
- Category page + Industry pillar (للـsilo) + 2-3 منتجات من نفس category + Quote.

**Real Data Inputs:**
- مواصفات حقيقية من `products/` data.
- B2B reviews حقيقية (لا اختراع — لو ما متوفّر، نسقطها).

---

### B.5 Service Page Blueprint (7 services)

**Services list:** custom-design, bulk-ordering, program-management, quality-assurance, fabric-selection, measurement-services, sustainable-uniforms.

**Word count target:** 1,200-1,600 words
**Primary KW format:** «خدمة {اسم الخدمة} للزي الموحّد في السعودية»

**Sections:**

1. **Hero + Architect Equation**.
2. **Service Definition Block** (~150 كلمة): تعريف الخدمة + ما تشمل + ما لا تشمل (نزاهة).
3. **Process HowTo** (5-7 خطوات + HowTo schema): الخطوات الفعلية، duration لكل خطوة.
4. **Tiers/Plans Comparison** (3 tiers جدول): Starter / Pro / Enterprise.
5. **When to use this service** (~100 كلمة): use cases + decision criteria.
6. **Case Study Snippet** (~200 كلمة): من case-studies المرتبطة.
7. **Pricing Transparency Block** (~100 كلمة): "تكلفة الخدمة تعتمد على X, Y, Z" + رابط لحاسبة.
8. **FAQ Block** (5 أسئلة).
9. **CTA: Quote + Calendar booking** (لو في).

**Schema Required:**
- `Service` + `OfferCatalog` + Tiers (§4.6 v11)
- `HowTo` (Process)
- `BreadcrumbList`
- `FAQPage`

**AI Citation Hooks:**
- Process steps numbered → LLMs تقتبسها كقائمة.
- Pricing tiers في table.
- Definition Lock-in: «Custom Design service includes [X, Y, Z], delivered in [N weeks], starting at [price].»

**Internal Links:**
- Services hub + relevant industries (يدوي per service) + Quote.

---

### B.6 Resource Guide Blueprint (12 deep guides)

**Resources list (مع silo association):**
1. Fabric Guide (cross)
2. Size Guide (cross)
3. Procurement Guide (cross — corporate)
4. Sustainability Guide (cross)
5. Healthcare Uniform Standards (silo: healthcare)
6. Nursing Uniform Guide (silo: healthcare)
7. Electrical Safety PPE Guide (silo: manufacturing)
8. Cleanroom Best Practices (silo: manufacturing)
9. Security Equipment Standards (silo: security)
10. Professional Security Standards (silo: security)
11. Weather Protection Guide (silo: aviation/manufacturing)
12. Policy Templates (silo: corporate)

**Word count target:** 2,500-4,000 words (deep authority — هذه أهم الصفحات للـAI citations)
**Primary KW:** سؤال طويل + topic
**EN format:** "Guide to {topic} in Saudi Arabia"

**Sections:**

1. **Executive Summary** (Speakable schema-ready) (~150 كلمة): 5 takeaways + Definition Lock-in.
2. **Table of Contents** (auto-generated H2 anchors).
3. **Definition Block** (~200 كلمة): تعريف رسمي للموضوع + 3 مصطلحات مرتبطة معرّفة.
4. **Compliance Citation Block** (~300 كلمة): قائمة المعايير + اقتباسات حرفية + روابط خارجية.
5. **5-7 H2 Deep Sections** (~400 كلمة لكل): شرح علمي/تقني عميق.
6. **Comparison Matrix** (جدول رئيسي).
7. **Decision Framework** (~200 كلمة): "كيف تختار {X}" مع flowchart إن أمكن.
8. **Common Mistakes Block** (~250 كلمة): 4-5 ممارسات خاطئة + شرح فيزيائي للفشل.
9. **Saudi Context Block** (~200 كلمة): تطبيق المعايير في سياق السعودية + amanat references.
10. **FAQ Block** (10-12 أسئلة).
11. **Downloadable Resource** (PDF checklist، lead magnet).
12. **Related Reading** (silo-aware).
13. **CTA**.

**Schema Required:**
- `Article` + `Person` (author + reviewer من saudieng.sa) + graph (§4.5 v11)
- `HowTo` (لو فيه steps)
- `FAQPage` (10+ أسئلة)
- `Speakable` (Executive Summary + FAQ)
- `Dataset` (للـ price-index-ksa فقط)

**AI Citation Hooks (الأهم):**
- Executive Summary بـ 5 bullet points → AI Overviews تقتبسها مباشرة.
- Multiple Definition Lock-ins per guide.
- Numeric Anchors في كل H2.
- Comparison Matrix كـ Markdown table.
- Compliance Citations مع نصوص محدّدة.
- **Source attribution كثيف**: "وفقاً لـ {gov entity}" يتكرر 8-12 مرة.

**Internal Links (15-20):**
- Industry pillar (silo) + 2 products + 2 blog posts + 1 case study + 2 related resources + Quote.

**Real Data Inputs:**
- معايير حكومية حرفية من gov.sa sources.
- Internal UNEOM benchmarks من stats.md.
- Expert reviewer name + credentials.

---

### B.7 Case Study Blueprint (8 cases)

**Word count target:** 1,000-1,400 words
**Primary KW:** "{client type} {industry} uniform case study Saudi Arabia"

**Sections (Story arc):**

1. **Hero (Before/After Slider)** + client name (or anonymized type).
2. **Challenge Block** (~200 كلمة): problem statement + measurable pain.
3. **Approach Block** (~250 كلمة): UNEOM methodology + decisions + tradeoffs.
4. **Solution Detail** (~250 كلمة): exact products + materials + customization.
5. **Numbers Block** (Result Stats): 4-6 measurable outcomes (cost saved، defect reduction، lead time، satisfaction score).
6. **Quote from Client** (testimonial — مع approval).
7. **Lessons Learned** (~150 كلمة): 3 takeaways قابلة للنقل لشركات أخرى.
8. **Related Products + Industry Pillar Link**.
9. **CTA**.

**Schema Required:**
- `Article` + `Review` (Organization-level)
- `BreadcrumbList`

**AI Citation Hooks:**
- Numbers Block = Numeric Anchors محبوبة من LLMs.
- Quote from named source (مع approved title) = high citation value.
- Definition Lock-in: «{Project name}: {industry} uniform program for {client type}, {N} units, {timeline}.»

**Internal Links (6-8):**
- Industry pillar + 2 related products + Quote.

**Real Data Inputs:** stories.md (1 لكل case study).

---

### B.8 Blog Post Blueprint (30 evergreen posts)

**Word count target:** 1,500-2,400 words
**Distribution:** 6 healthcare + 5 hospitality + 3 aviation + 5 corporate-education + 6 manufacturing-security + 5 sustainability-trends.

**Sections:**

1. **Hook Paragraph** (~80 كلمة): مفتاح الانتباه + تحديد المشكلة.
2. **Definition / Context Block** (~200 كلمة): يحوي Architect Equation.
3. **5-7 H2 Sections** (~250 كلمة لكل): شرح، أمثلة، أرقام.
4. **Saudi-Specific Application** (~200 كلمة): استخدام الـtopic في السياق المحلي.
5. **Common Misconceptions** (~150 كلمة): 2-3 خرافات + تفنيدها.
6. **Practical Checklist** (Interactive Checklist component) (~150 كلمة).
7. **Story / Anecdote** (~200 كلمة): من stories.md (1 stories file consumption per post).
8. **FAQ Block** (5-6 أسئلة).
9. **CTA + Internal Silo Strip**.

**Schema Required:**
- `Article` + `Person` (author) + graph
- `BreadcrumbList`
- `FAQPage`
- `Speakable` (Definition Block)

**AI Citation Hooks:**
- 1 Definition Lock-in في Definition Block.
- 3-5 Numeric Anchors عبر الـpost.
- 1 Comparison في الأقل (table).
- Authority attribution.
- Author credentials في الـPerson schema.

**Internal Links (8-10 — silo-aware):**
- Blog category + Industry pillar + 1 product + 1 resource + 1 case study (كلها من نفس silo).

**Real Data Inputs:**
- 1 story من stories.md (one-time consumption).
- 1 stat من stats.md.
- 1 opinion من opinions.md.

---

### B.9 Hub Pages Blueprint (Industries hub, Shop hub, Locations hub, Services hub, Resources hub, Blog hub, Case Studies hub, Blog Categories × 6)

**Word count target:** 600-900 words لكل hub
**الفلسفة:** Hubs = navigation + topical signal، not deep content. لكن tidak تكون فارغة.

**Sections:**

1. **Hero + Brief Architect Equation** (~80 كلمة).
2. **Children Grid** (cards مع 30-50 كلمة لكل).
3. **Selection Guide Block** (~200 كلمة): "كيف تختار" + decision criteria.
4. **FAQ Block** (3-5 أسئلة).
5. **CTA**.

**Schema:**
- `CollectionPage` + `ItemList` (children)
- `BreadcrumbList`
- `FAQPage`

---

## Part C — AI Citation Engineering Layer

> هذا القسم = **سرّ الظهور في AI search**. تطبق هذه التقنيات داخل blueprints أعلاه.

### C.1 Definition Lock-in Pattern

**القاعدة:** كل صفحة جوهرية تحوي 1+ "Definition Lock-in" — جملة بصيغة:

> **"X is the [exact noun] that [function] for [audience] in [context]."**

**أمثلة:**
- «Medical scrubs in Saudi Arabia are the **antimicrobial-treated polyester-cotton uniforms** that **healthcare workers wear** for **infection control** in **hospitals across all 24 Saudi cities**.»
- «UNEOM's bulk ordering service is the **B2B procurement program** that **manages uniform orders** for **enterprises with 50-5,000+ employees** across **8 industry verticals**.»

**لماذا:** LLMs (خاصة GPT و Claude) يقتبسون جمل بهذا النمط حرفياً عند الإجابة على أسئلة "ما هو X؟"

**التطبيق:** كل pillar/resource/product يحوي 1-3 Definition Lock-ins. تُكتب كأول جملة في الـsection المعني.

### C.2 Numeric Anchor Strategy

**القاعدة:** كل صفحة تحوي **5-12 رقم محدّد** بـ:
- وحدة قياس صريحة (SAR، days، gsm، washes)
- attribution (لو خارجي)
- year context

**Anti-pattern (لا تكتب):**
- ❌ "ضمان طويل" → ✅ "ضمان 18 شهر"
- ❌ "أسعار تنافسية" → ✅ "180-450 SAR لكل طقم scrub في 2026"
- ❌ "سريع التسليم" → ✅ "زمن إنتاج 14-21 يوم لطلب 100-500 وحدة"

**التطبيق:** قبل publish، count the numerics. لو أقل من 5، الصفحة لا تمرّ الـquality gate.

### C.3 Comparison Matrix Pattern (الأقوى للـAI)

**القاعدة:** كل pillar/product/resource يحوي **1+ جدول مقارنة** بـ:
- 3+ أعمدة (UNEOM/competitor1/competitor2 أو Tier1/Tier2/Tier3)
- 5+ صفوف (أبعاد المقارنة)
- صيغة Markdown table في الـsource (LLMs تقتبسها كاملة)

**مثال (Healthcare scrubs):**

| Dimension | UNEOM Premium | Standard Market | Cheap Import |
|---|---|---|---|
| Fabric | Poly-cotton 65/35 antimicrobial | Cotton 100% | Poly 100% |
| GSM | 220 | 180 | 140 |
| Wash cycles | 200+ | 60-80 | 30-40 |
| Warranty | 18 months | 6 months | None |
| Lead time | 14-21 days | 30+ days | Stock only |

**لماذا:** Perplexity و Gemini يحبون الـtables. AI Overviews يعرضها مباشرة.

### C.4 Entity Mention Density (ED)

**القاعدة:** كل صفحة جوهرية تذكر:
- **3-5 government entities** بالاسم الكامل + الرابط
- **2-3 standards** (ISO 9001, OEKO-TEX, SASO)
- **2-4 cities** (مرتبطة بسياق)
- **1-2 named experts** (Person schema reviewer)

**كثافة الكيانات (ED) = 1 entity mention per 200 words على الأقل.**

**لماذا:** Knowledge Graph algorithms تعزّز الصفحات بـED عالي. AI citation rate تتضاعف.

### C.5 llms.txt + AI Feed Implementation

**Action items:**
1. كتابة `public/llms.txt` (template في v11 §9.1) — **حقائق فقط**، CRN/VAT حقيقية، 5-7 authoritative pages مذكورة.
2. تنفيذ `src/app/api/ai-feed/[city]/route.ts` (template في v11 §9.2) — markdown content للـAI bots.
3. إضافة `/ai-feed/[industry]` parallel للـcity feed.
4. تحديث robots.txt للسماح صراحة لـ: GPTBot, Google-Extended, ClaudeBot, PerplexityBot, OAI-SearchBot, CCBot (template في v11 §11.3).

### C.6 Patterns LLMs Love to Quote

**نمط 1: "There are N types of X"**
- ❌ "في عدّة أنواع من الزي الطبي"
- ✅ "هناك 5 أنواع من الزي الطبي في السعودية: scrubs، lab coats، operating gowns، pediatric uniforms، dental uniforms."

**نمط 2: "X is regulated by Y"**
- ✅ "الزي الطبي في السعودية يخضع لـ3 جهات: وزارة الصحة (للاشتراطات السريرية)، SFDA (للمواد الكيميائية)، SASO (لجودة النسيج)."

**نمط 3: "The standard rate/range is N"**
- ✅ "متوسط استبدال scrub في مستشفى سعودي = كل 8 أشهر (وفقاً لبيانات UNEOM 2026)."

**نمط 4: "If X then Y"**
- ✅ "إذا كان عدد الموظفين أكثر من 200، يُوصى بـbulk procurement program مع تقسيط على 3 دفعات."

**نمط 5: Step-by-step (HowTo schema-ready)**
- ✅ مفصّلة بـ "Step 1, Step 2..." لو عملي.

---

## Part D — Saudi NLP & Cultural Layer

### D.1 Per-City Vocabulary Bank

**موجود في** `src/lib/data/saudi-cities.ts/{city}.climateVocab` (تم التحقق).

**القاعدة الإلزامية للكاتب:**
- كل صفحة `/locations/{city}/` تستخدم 2 من vocab المدينة في **Saudi NLP Strip section**.
- كل blog post لو الموضوع geo-specific (أو يذكر مدينة) يستخدم 1 على الأقل.

**أمثلة من الموجود:**
| City | Vocab | الربط الفني (للكاتب) |
|---|---|---|
| Riyadh | الأربعينية، السموم | تقلّبات حرارية: قماش بـthermal range واسع |
| Jeddah | النوّة، خماسين الصيف | رطوبة 90%: anti-microbial + breathable |
| Dammam/Khobar | الموسم البحري، صدأ الهواء | تآكل كلوريدي: corrosion-resistant fasteners |
| Mecca | حرّ الحج، موسم العمرة | UV + ازدحام: heat dissipation |
| Tabuk | شتاء العشرة، الزكاة الشتوية | برد: layered warmth |
| Abha | أجواء العسير | معتدل لكن ممطر: water-resistant |

### D.2 Seasonal & Religious Context (للـSeasonalHero و blog)

**الجدول الزمني (لـ Hero rotation و blog cadence):**

| الفترة | المحور | القطاعات الحرجة |
|---|---|---|
| رمضان | جداول العمل المختصرة + ضيافة مكثّفة | Hospitality, Retail |
| الحج | خدمات الحجيج، PPE | Hospitality, Healthcare, Security |
| العمرة (دائم) | استمرار التشغيل | Hospitality |
| موسم الرياض | فعاليات، توسّع التجزئة | Retail, Security, Hospitality |
| اليوم الوطني (سبتمبر) | corporate branding + cultural | Corporate, Retail |
| العودة للمدارس (أغسطس-سبتمبر) | الزي المدرسي | Education |
| Q1 (يناير-مارس) | تخطيط الميزانيات السنوية | Corporate, Manufacturing |
| Q2 (أبريل-يونيو) | تسليمات قبل الصيف | All |
| Q3 (يوليو-سبتمبر) | الحج + Back-to-school | Hospitality + Education |
| Q4 (أكتوبر-ديسمبر) | end-of-year procurement | Corporate, Manufacturing |

### D.3 Government Entity Grammar (ربط حكومي صحيح)

**القاعدة:** كل صفحة pillar/resource تذكر الجهة بـ:
1. **اسم رسمي كامل** أوّل مرة («الهيئة العامة للغذاء والدواء (SFDA)»).
2. **رابط خارجي** للـsection ذات الصلة (لا homepage).
3. **اقتباس حرفي** للنص التنظيمي (لو متاح public) بـ`<blockquote>`.
4. **سنة المرجعية** ("لائحة 2024" لا "اللائحة الحالية").

**Mapping Grid (من `trust-anchors.ts` — موجود):**
- Healthcare → MoH، SFDA، SASO، ISO
- Hospitality → MOT، SFDA، SASO
- Aviation → GACA، SASO، ISO
- Corporate → MC، MHRSD
- Education → MoE، SASO
- Manufacturing → HCIS، SASO، SCE، ISO
- Security → HCIS، MHRSD
- Retail → MC، MHRSD، SASO

---

## Part E — Production System

### E.1 References Library — أول ما يجب إنشاؤه

**Action: إنشاء `references/` directory في root الـrepo بـ5 ملفات (4 محتوى + 1 baseline).**

#### `references/on-page-seo.md` (Layer 0 — الأرضية الإلزامية)
**Content:** نسخة كاملة من checklist الـ88 بند بصيغة markdown (الفئات الـ15 من Part 0.1 أعلاه).
**Usage:** كل page-generation skill يقرأه قبل توليد أيّ صفحة. كل brief يستشهد به. كل PR يفحصه.
**Why first:** هذا هو الأرضية. لا يُكتب محتوى عميق على أرضية متشقّقة.

#### `references/voice.md`
**Content (الكاتب يحفظ + يستخدم قبل كل صفحة):**
- **Anti-pattern phrases (محظورة):** "unlock", "leverage", "seamless", "world-class", "in today's fast-paced world", "elevate", "best-in-class", "cutting-edge", "نُحرّر إمكاناتكم"، "نقدّم أفضل الحلول"، "في عالم اليوم سريع التغيّر".
- **Sentence rhythm:** قصيرة → متوسطة → طويلة → قصيرة (إيقاع).
- **Vocabulary:** synonyms محلية. لا تكرار مفردات في فقرة.
- **Formatting:** لا exclamation marks. لا emojis (إلا في CTA strip).
- **Tone:** Authoritative warm — "نقول الحقيقة، حتى لو ما تخدمنا."
- **AI-tells (احذف):** "Furthermore"، "Moreover"، "It is important to note"، "In conclusion".

#### `references/stats.md`
**Content (المستخدم يملأها — Critical input):**
- عدد العملاء الحقيقي
- سنوات في السوق (12)
- متوسط حجم طلب (SAR)
- مدّة الإنتاج للطلبات (14-21 يوم؟)
- ضمان الجودة (12-18 شهر؟)
- معدّل العملاء المتكرّرين (78%؟)
- 8 industry-specific stats (يكونوا في `industry-stats.ts` بشكل أعمق)
- 24 city-specific stats (نخدم N عميل في {city})

#### `references/opinions.md`
**Content (15-20 hot takes مدعومة بأرقام):**
- "70% من الشركات السعودية تشتري الزي بالسعر، 40% منها يندم خلال 6 أشهر"
- "أرخص coverall FR = أغلى coverall لو حصلت إصابة"
- إلخ. (للاستخدام كـpull quotes في blog/pillar — مرّة واحدة فقط لكل opinion).

#### `references/stories.md`
**Content (20-30 حكايات حقيقية من UNEOM):**
- نجاحات + إخفاقات + قرارات صعبة.
- كل حكاية = 3 فقرات (السياق، القرار، النتيجة).
- **Rule:** كل حكاية تُستخدم مرّة واحدة فقط (في case study أو blog post، ليس الاثنين).
- بدون أسماء عملاء بدون موافقة كتابية.

### E.2 Content Brief Template (لكل صفحة قبل الكتابة)

**Action: إنشاء `content-briefs/` directory + `BRIEF_TEMPLATE.md`.**

**Brief Template:**
```markdown
# Content Brief: [Page Type] — [Slug]

## Layer 0 — On-Page Baseline Check (mandatory before writing)
- [ ] Read `references/on-page-seo.md` (88 items, 15 categories)
- [ ] Title tag plan (50-60 chars, primary KW near start): __
- [ ] Meta description plan (150-160 chars, KW + benefit + soft CTA): __
- [ ] URL slug confirmed (short, hyphens, no stop words): __
- [ ] Canonical + hreflang AR↔EN URLs noted

## Targeting
- Primary KW (AR): __
- Primary KW (EN): __
- Secondary KWs: __
- AI Citation queries: __
- Word count target: __ – __

## Inputs from references/
- Stats to use: [from stats.md] __
- Opinion to anchor: [from opinions.md] __
- Story to weave in: [from stories.md, if applicable] __
- Vocab terms (Saudi NLP): __

## Required Sections (from blueprint)
- [list from B.X]

## Required Numerics (≥5)
1. __ (with attribution)
2. __
3. __
4. __
5. __

## Required Entities (≥3 gov + 2 standards)
1. __ (with link)
2. __
...

## Definition Lock-in (1-3)
1. "{exact wording}"

## Comparison Matrix (1+)
- Title:
- Columns:
- Rows:

## Internal Links Plan (silo-aware, from §7 v11)
- [list 8-16 with anchor text]

## Schema checklist
- [ ] _Required schemas listed_

## Layer 0 — On-Page Baseline (88 items) — auto-checked + manual review
- [ ] HEAD & METADATA (9): all set
- [ ] URL STRUCTURE (6): clean, keyword-forward
- [ ] HEADINGS (4): one H1, logical H2→H3
- [ ] COPY & BODY (8): KW first 100 words, paragraphs short, readability OK
- [ ] FAQ SECTION (3): 4-8 Qs + FAQPage schema
- [ ] IMAGES (7): alt + filename + WebP/AVIF + dimensions + lazy + srcset
- [ ] INTERNAL LINKS (5): silo-aware + breadcrumbs
- [ ] EXTERNAL LINKS (4): 2-3 to authoritative sources
- [ ] SCHEMA MARKUP (7): all required JSON-LD present
- [ ] E-E-A-T (9): byline, bio, dates, sources cited
- [ ] ACCESSIBILITY (7): semantic HTML5, ARIA, contrast, focus, alt
- [ ] MOBILE (5): touch targets, font, no scroll
- [ ] SOCIAL PREVIEW (3): OG + Twitter Card images
- [ ] CONVERSION (8) — service pages only: CTA, tel:, trust signals
- [ ] LONG-FORM (3) — 1500+ word pages: TOC, jump links, back-to-top

## 15-Criteria Gate (from v11 §6.3)
- [ ] (1) Architect Equation in first 60 words
- [ ] (2) 3-5 real numbers from stats.md
... [all 15]

## 5-Criteria AI Gate (NEW)
- [ ] (16) ≥1 Definition Lock-in
- [ ] (17) ≥5 Numeric Anchors with units
- [ ] (18) ≥1 Comparison Matrix as Markdown table
- [ ] (19) Entity Density: 1 entity per 200 words
- [ ] (20) llms.txt-aligned authoritative sources
```

### E.3 Writing → Review → Publish Workflow

**5-Stage Pipeline (per page):**

| Stage | Owner | Duration | Output |
|---|---|---|---|
| 1. Brief | Lead writer | 30 min | Brief filed to `content-briefs/` |
| 2. Draft AR | Writer | 2-4 hours | Draft.md (AR primary) |
| 3. Draft EN | Writer | 1.5-2 hours | EN parallel (not literal translation — adapted) |
| 4. Editorial Review | Editor | 30 min | 15+5 criteria gate pass |
| 5. Schema + Publish | Dev/Editor | 20 min | Page rendered, schema validated, indexed |

**Per-week throughput target (Human-Only model):** 4-6 deep pages/week (industries + resources) أو 8-10 صفحات أبسط (cities, products, blog).

### E.4 The Triple Gate (88 + 15 + 5 = 108 checks per page)

كل صفحة تجتاز **3 طبقات** قبل النشر:

**Layer 0 — On-Page Baseline (88 items)** من `references/on-page-seo.md`:
- 15 فئة شاملة (HEAD, URL, headings, copy, FAQ, images, internal/external links, schema, EEAT, a11y, mobile, social, conversion, long-form)
- Auto-checked: ~30 بند عبر `scripts/content-audit.ts`
- Manual review: الباقي عبر editor checklist
- **لو فشل بند واحد → الصفحة لا تُنشر.**

**Layer 1 — 15-Criteria Quality Gate (v11 §6.3):** Architect Equation, 3-5 numbers, 4-Entity, FAQ ≥5, إلخ.

**Layer 2 — 5 AI-Specific Criteria (جديدة):**
- (16) ≥1 Definition Lock-in بصيغة "X is the [noun] that [function]"
- (17) ≥5 Numeric Anchors بـ units صريحة + attribution
- (18) ≥1 Comparison Matrix as Markdown table (3+ cols, 5+ rows)
- (19) Entity Density: 1 entity mention per 200 words minimum
- (20) ≥1 source attribution per H2 section ("وفقاً لـ X")

**Implementation:**
- Update `.github/pull_request_template.md` لإضافة الـ3 طبقات (88 + 15 + 5 = 108 checks).
- Build script `scripts/content-audit.ts` يفحص آلياً:
  - **Layer 0 (auto-check ~30/88):** title length (50-60), meta length (150-160), single H1, image dimensions, image filenames pattern, alt presence, schema JSON-LD validity, internal links count (3-5+), external links count (2-3+), word count vs target, breadcrumb presence, canonical, hreflang pairs.
  - **Layer 1+2:** word count vs blueprint target, numeric mentions count, entity link count, Markdown table presence, "وفقاً لـ"/"according to" frequency, definition lock-in pattern detection.
- Manual editor review for remaining ~58 items (mostly subjective: readability, voice, anchor text quality, accessibility, conversion UX).

---

## Part F — Execution Roadmap (Wave-based)

### Wave 0 — Foundation (Week 1)

**Action items (مرتّبة حسب الأولوية):**
- [ ] **إنشاء `references/on-page-seo.md` أوّلاً** (88 بند، 15 فئة) — الأرضية الإلزامية لكل skill
- [ ] إنشاء `references/voice.md` (الكاتب الرئيسي + المستخدم)
- [ ] إنشاء `references/stats.md` (المستخدم يجمع الأرقام الحقيقية)
- [ ] إنشاء `references/opinions.md` (15 hot takes)
- [ ] إنشاء `references/stories.md` (20-30 stories، NDA-respected)
- [ ] إنشاء `content-briefs/BRIEF_TEMPLATE.md` (يستشهد بـon-page-seo.md في رأسه)
- [ ] تحديث `.github/pull_request_template.md` بـ3 طبقات (88+15+5)
- [ ] كتابة `scripts/content-audit.ts` (auto-check ~30 من Layer 0 + Layer 1+2)
- [ ] كتابة `public/llms.txt` بحقائق UNEOM الحقيقية
- [ ] تنفيذ `src/app/api/ai-feed/[city]/route.ts` و `[industry]`
- [ ] تأكيد robots.txt يسمح للـ6 AI bots
- [ ] **Component-level baseline enforcement:**
  - [ ] إضافة `<TableOfContents>` component للصفحات 1500+ كلمة
  - [ ] إضافة `<BackToTop>` component
  - [ ] إضافة "Last updated" date display في layouts
  - [ ] إضافة skip-to-content link في `layout.tsx`
  - [ ] تحويل city pages لتحوي FAQPage schema (الفجوة المكتشفة من exploration)
  - [ ] grep audit لـtel: على كل phone CTAs

### Wave 1 — Industry Pillars (Weeks 2-5)

**Target:** 8 industry pillars × 2 langs = 16 deep pages.

**Order (revenue-priority):**
1. Healthcare (Week 2)
2. Manufacturing (Week 2)
3. Hospitality (Week 3)
4. Aviation (Week 3)
5. Corporate (Week 4)
6. Security (Week 4)
7. Education (Week 5)
8. Retail (Week 5)

**Per-pillar deliverables:**
- Brief filed
- AR draft (~2,800 كلمة)
- EN draft (~2,400 كلمة، adapted not literal)
- Schema validated (Service + FAQ + Breadcrumb + Article-if-reviewer)
- Internal links 12-16 (silo-aware)
- 4-entity closure + Wikidata link
- 8 FAQ items
- Comparison matrix
- Hero image AVIF (با EXIF authentic)
- Indexing API push on publish

**Metrics check Week 5:** Lighthouse SEO ≥95 لكل pillar، Rich Results pass.

### Wave 2 — Top Cities (Weeks 6-7)

**Target:** 8 Tier-A cities × 2 langs = 16 pages.

**Order:**
- Riyadh, Jeddah (Week 6)
- Dammam, Khobar, Mecca, Medina (Week 7)
- Tabuk, Abha (Week 7)

**Per-city deliverables:**
- Local Architect Equation
- Saudi NLP strip with vocab from `climateVocab`
- 8-industry anchor grid
- 5 city-specific FAQs
- LocalBusiness schema with SPL polygon
- Map static API
- Internal links to 8 industry pillars

### Wave 3 — Hero Products (Weeks 8-10)

**Target:** 18 hero products × 2 langs = 36 pages.

**Order (by Wave 1 industry priority):**
- Healthcare products: 3 (Week 8)
- Manufacturing products: 2 (Week 8)
- Hospitality products: 3 (Week 9)
- Aviation products: 2 (Week 9)
- Corporate products: 2 (Week 9)
- Security products: 2 (Week 10)
- Education products: 2 (Week 10)
- Retail products: 1 (Week 10)
- Sub-categories products + balance: 1 (Week 10)

**Per-product deliverables:**
- Technical spec sheet (real specs)
- Comparison matrix (UNEOM vs market)
- Material science block (~200 words)
- HowTo Care Instructions
- Product schema with full offers + warranty
- 5 product FAQs

### Wave 4 — Services + Resources (Weeks 11-12)

**Target:** 7 services × 2 + 12 resources × 2 = 38 pages.
- Services (Week 11): all 7
- Resources (Week 11-12): 6 cross-cutting + 6 silo-specific

**Resources priority:**
- Wave 1: Fabric Guide, Procurement Guide, Healthcare Standards, Electrical Safety PPE, Sustainability Guide, Size Guide (Week 11)
- Wave 2: Nursing Guide, Cleanroom, Security Standards, Weather Protection, Policy Templates, Professional Security Standards (Week 12)

**Resources are the highest AI-citation pages** — extra care required.

### Wave 5 — Tier-B Cities + Case Studies (Weeks 13-14)

**Target:** 16 remaining cities × 2 + 8 case studies × 2 = 48 pages.
- Cities (Week 13): batches of 8
- Case studies (Week 14): all 8 with story arcs from stories.md

### Wave 6 — Blog Posts + Hubs (Weeks 15-17)

**Target:** 30 blog posts × 2 langs = 60 pages + 8 hubs × 2 = 16 hub pages.

**Per-week:** 10-12 posts/week (Human-Only with batched briefs).

**Order by silo:**
- Week 15: Healthcare (6) + Hospitality (5)
- Week 16: Manufacturing-Security (6) + Corporate-Education (5)
- Week 17: Aviation (3) + Sustainability-Trends (5) + Hubs (8)

### Wave 7 — Homepage + Final Polish (Week 18)

- [ ] Homepage final copy (most important — gets ~30% of organic traffic)
- [ ] Cross-link audit (silo rules from v11 §7)
- [ ] Schema validation full sweep (Rich Results Test on 30+ pages)
- [ ] Lighthouse CI on 25+ pages ≥95
- [ ] Indexing API push for 25 anchor pages
- [ ] Press release draft
- [ ] Wikidata entry submission (parallel)

### Post-Launch — Ongoing Cadence (Months 5-12)

**Monthly:**
- 4 new blog posts (per silo rotation)
- 2 resource updates (Semantic Diff ≥40%)
- 1 case study (when project completes)

**Quarterly:**
- Price Index update (Dataset refresh)
- NSR audit (delete 0-traffic pages)
- 8 pillar pages refresh (1 per industry, semantic diff ≥40%)
- A/B test winner shipped

**Annually:**
- Wikidata refresh
- Voice.md update (drift check)
- Backlink audit + outreach

---

## Part G — Measurement & Feedback Loop

### G.1 Per-Page KPIs

| KPI | Target (3 mo) | Target (9 mo) | Tool |
|---|---|---|---|
| Impressions | 100+ | 1,000+ | GSC |
| Average position | <30 | <10 | GSC |
| CTR | >2% | >5% | GSC |
| AI Overviews appearance | rare | regular | manual SERP check + Ahrefs |
| Time on page | >90s | >180s | GA4 |
| Quote conversion | 0.1% | 1% | GA4 events |

### G.2 Site-wide KPIs (يُربط بـv11 §1.3)

- Total impressions GSC: +200% by Q4 2026, +500% by Q4 2027
- Position 1-3 for 192 keyword: 60% by Q4 2026, 85% by Q4 2027
- AI Overviews citations: 50+ by Q4 2026, 200+ by Q4 2027
- Quote leads/month: +150% by Q4 2026

### G.3 Feedback Loop (Monthly)

1. **GSC export** → spreadsheet
2. **Identify top 10 pages with impressions but CTR <2%** → improve title/meta
3. **Identify top 10 pages with rank 11-20** → enrich content (add 200-400 words + 1 numeric anchor + 1 entity)
4. **Identify top 10 keywords near top 3 (rank 4-7)** → add internal link from 2-3 high-PR pages
5. **Identify pages with AI citation potential not yet cited** → add Definition Lock-in + Numeric Block

### G.4 AI Citation Tracking (Manual + Tool)

**Manual (weekly):**
- Search ChatGPT/Perplexity/Gemini for top 10 commercial KSA queries
- Note if UNEOM cited
- Log in `tracking/ai-citations.md`

**Tool: Ahrefs Brand Radar** (موجود في MCP) — track UNEOM mentions across AI engines.

---

## Part H — Critical Files Manifest (للتنفيذ بعد اعتماد الخطة)

> هذه قائمة الملفات التي ستُنشأ/تُعدّل **خصيصاً للمحتوى** — تكميلية لـv11 §29.

### Net New (محتوى)
| File | Purpose |
|---|---|
| `references/on-page-seo.md` | **Layer 0 baseline** — 88 items, 15 categories — read by every skill before page generation |
| `references/voice.md` | Voice guide (immediately) |
| `references/stats.md` | UNEOM real numbers |
| `references/opinions.md` | Hot takes |
| `references/stories.md` | Brand anecdotes |
| `content-briefs/BRIEF_TEMPLATE.md` | Per-page brief template (cites on-page-seo.md at top) |
| `content-briefs/industries/healthcare.md` | First brief (example) |
| `content-briefs/industries/{7 others}.md` | Wave 1 briefs |
| `content-briefs/locations/{24 cities}.md` | Wave 2 briefs |
| `content-briefs/products/{18}.md` | Wave 3 briefs |
| `content-briefs/services/{7}.md` | Wave 4 briefs |
| `content-briefs/resources/{12}.md` | Wave 4 briefs |
| `content-briefs/case-studies/{8}.md` | Wave 5 briefs |
| `content-briefs/blog/{30}.md` | Wave 6 briefs |
| `tracking/ai-citations.md` | Manual citation log |
| `tracking/keyword-rankings.md` | Monthly GSC summary |
| `public/llms.txt` | AI directive (real facts) |

### Modified (data layer enrichment)
| File | Changes |
|---|---|
| `src/lib/data/industries/{8}.ts` | Add `architectEquationAr/En`, `signatureStat`, `negativeFrames[]`, `comparisonTiers`, `definitionLockIn` fields |
| `src/lib/data/saudi-cities/{24}.ts` | Add `localStat`, `anchorIndustriesContext[]`, `localStory` field |
| `src/lib/data/products/*.ts` | Add `materialScience`, `comparisonMatrix`, `careInstructions[]` |
| `src/lib/data/blog/*.ts` | Fill `body, bodyAr` (per blueprint B.8) |
| `src/lib/data/resources/*.ts` | Add `executiveSummary`, `complianceCitations[]` |
| `src/lib/data/industry-stats.ts` | Expand to all fields city pages need |
| `src/lib/data/stats.ts` | Expand from 12 lines to full UNEOM benchmarks |
| `src/lib/data/reviewers.ts` | Add 3-5 named expert reviewers (with LinkedIn) |
| `.github/pull_request_template.md` | 20-criteria gate |

### New (infrastructure for AI)
| File | Purpose |
|---|---|
| `src/app/api/ai-feed/[city]/route.ts` | Markdown for AI bots (city) |
| `src/app/api/ai-feed/[industry]/route.ts` | Markdown for AI bots (industry) |
| `scripts/content-audit.ts` | 3-layer automated checker (Layer 0 ~30 items + Layer 1 + Layer 2) |
| `src/components/ui/TableOfContents.tsx` | Auto-generated TOC for 1500+ word pages (Layer 0 #15) |
| `src/components/ui/BackToTop.tsx` | Sticky back-to-top button (Layer 0 #15) |
| `src/components/ui/SkipToContent.tsx` | A11y skip link in root layout (Layer 0 #11) |
| `src/components/ui/LastUpdated.tsx` | Displays `dateModified` for E-E-A-T (Layer 0 #10) |
| `scripts/keyword-density-check.ts` | Primary KW frequency validator |
| `scripts/ai-citation-track.ts` | Manual logger for SERP/AI checks |

### Existing (reuse — لا تُكتب من جديد)
| File | Reuse for |
|---|---|
| `src/lib/seo/organizationSchema.ts` | Already mature — extend with Wikidata |
| `src/lib/seo/localBusinessSchema.ts` | Already per-city — add SPL polygon |
| `src/lib/seo/faqSchema.ts` | Already on industry pages — extend to cities/products |
| `src/lib/seo/breadcrumbSchema.ts` | Already mature |
| `src/lib/data/trust-anchors.ts` | Already 42 entries — use as is |
| Industry/City/Product page templates | Already built — fill data, not rewrite |

---

## Verification

### قبل الـlaunch (Wave 7 end)

- [ ] `references/` directory complete (5 ملفات: on-page-seo.md + voice + stats + opinions + stories).
- [ ] `content-briefs/` directory ≥80 brief files (one per page).
- [ ] `npm run build` 0 errors.
- [ ] `scripts/content-audit.ts` يمرّ على ≥95% من الصفحات بـ**108 checks pass** (88 baseline + 15 quality + 5 AI).
- [ ] **Layer 0 enforcement:** كل صفحة تجتاز الـ88 بند (auto + manual review).
- [ ] Rich Results Test على 30 pages: 0 errors.
- [ ] Lighthouse SEO ≥95 على 25+ pages.
- [ ] All pillars: ≥1 Definition Lock-in, ≥5 numeric anchors, ≥1 comparison matrix.
- [ ] llms.txt + ai-feed routes return correct content.
- [ ] Word count averages: pillars 2,400+, resources 2,500+, blog 1,500+, cities 1,400+, products 900+.
- [ ] Internal links audit: 0 orphan pages, every page has ≥3 incoming links.
- [ ] Sitemap: 270-300 URLs (assertion من v11).
- [ ] hreflang: 0 mismatches AR↔EN.

### Post-Launch (Week 1-4)

- [ ] GSC: 100% of submitted pages indexed within 14 days
- [ ] AI bots access logs (Cloudflare): ≥1 visit/day from each of GPTBot, Google-Extended, ClaudeBot, PerplexityBot
- [ ] First 5 AI Overviews appearances logged within 60 days
- [ ] Manual SERP check on 24 priority queries: UNEOM in top 20 for ≥40%

### Ongoing (monthly)

- [ ] 95% of new content passes triple gate (108 checks)
- [ ] No stale `dateModified` without ≥40% semantic diff
- [ ] NSR audit: 0 pages with 0 impressions left untreated for >90 days
- [ ] On-page-seo.md reviewed quarterly — لو Google تغيّر السلوك، نُحدّث الـ88 بند

---

## Open Decisions (يحتاج حسم من المستخدم)

> هذه قرارات حرجة لاتخاذها قبل أو خلال Wave 0:

1. **Lead writer hire/identify** — من سيكتب 80+ pages (deep)؟ Single writer أم 2-3 with editor؟
2. **Editor identification** — من يطبّق الـ20 criteria gate؟
3. **Real stats compilation** — يحتاج 2-4 ساعات من المستخدم لجمع `stats.md` (الأرقام الحقيقية).
4. **Stories release approval** — أي عملاء يمكن ذكرهم بالاسم في case studies؟
5. **Expert reviewers recruitment** — 3-5 named experts من Saudi Council of Engineers أو institutions أخرى (للـ Article schema reviewer).
6. **Customer reviews collection** — لـProduct schema، يحتاج 3-5 quotes معتمدة لكل hero product.
7. **Risk appetite confirmation** — T1 + T2 (الموصى به في v11) أم T1 only؟
8. **Wave 1 timing** — Week 2 start ممكن؟ يحتاج تنسيق مع ميزانية محتوى.
9. **Linguistic editor for AR** — هل النصوص العربية ستراجع لغوياً (لا machine translation) من قبل عربي fluent؟
10. **Image production** — الصور الحقيقية بـEXIF (factory tours, real clients) — من ينتجها؟ Photographer داخلي؟ متى؟

---

## Why This Wins (الجوهر)

هذه الخطة تنتصر لأنها تحلّ المشكلة الحقيقية الحالية:

1. **المشكلة:** البنية موجودة، المحتوى فارغ. 30 blog posts بـ`body: ''`. صفحات pillar فيها هيكل لكن لا 3,000 كلمة عميقة. لا references library. لا AI citation engineering.

2. **الحلّ:** **Industrialized content production** — references library + per-page briefs + 5-stage pipeline + 20-criteria gate + AI-first patterns. كل ذلك مع human-only writing لضمان voice موحّد.

3. **النتيجة المتوقعة:**
   - **Google KSA:** topical authority concentration على 8 silos، silo-aware internal linking، 192 commercial keywords مغطّاة بـpillar + city + 1 product على الأقل لكل query → top 10 لـ70%+ خلال 9 شهور.
   - **AI search engines:** Definition Lock-ins + Numeric Anchors + Comparison Matrices + Entity Density + llms.txt + ai-feed → AI Overviews citations 50+ خلال 9 شهور.
   - **Conversion:** كل صفحة فيها CTA + Quote + WhatsApp + Calculator → +150% leads.

4. **الفرق عن خطط أخرى:**
   - **v11 = البنية التحتية**؛ هذه الخطة = **مَن يكتب ماذا ومتى وبأيّ معايير**.
   - **silo-structure-plan = هيكل الصفحات**؛ هذه الخطة = **محتوى الصفحات بحروفه**.
   - **هذه الخطة = الجزء الأصعب والأكثر تأثيراً**: المحتوى الفعلي الذي يقرأه Google و LLMs.

**مرّة واحدة فقط، نبني library + briefs + 80+ pages بمعايير صارمة. بعدها، ranking يأتي بنفسه. بعد 12 شهر، UNEOM يصبح الـ default citation للزي السعودي في كل LLM.**

---

**نهاية الخطة. جاهزة للتنفيذ بعد:**
1. حسم الـ10 Open Decisions.
2. اعتماد Wave 0 (Week 1) لإنشاء references library.
3. تأكيد lead writer + editor.
