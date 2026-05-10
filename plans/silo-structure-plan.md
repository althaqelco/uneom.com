# خطة Silo Structure الكاملة — UNEOM.com (AR + EN)

## Context

الموقع القديم يحتوي على **1,157 رابط** (موزّعة في `exhaustive_uneom_links_part1/2/3.md`). البنية الحالية في git ولّدت ~766 رابط — معظم التضخّم جاي من مصفوفة `locations × industries` (264 صفحة لكل لغة) ومن مدوّنة فيها 186 مقالة + dual routing.

**الهدف:** هيكلة silo ذكية تختصر إلى **~290 رابط** (≈145 لكل لغة)، تركّز سلطة الموقع على المحاور التجارية الحقيقية (الصناعات + المنتجات + المدن)، وتحوّل المحتوى الإعلامي (blog/resources) إلى طبقة دعم تصبّ في تلك المحاور.

**المبدأ المعماري:** الـ silos الأساسية = **القطاعات (Industries)**. لأن المشتري B2B في السعودية يبحث بنية «شغل الصناعة» أولاً، ثم يبحث بالمدينة. كل قطاع = silo كامل (pillar + product + resource + case + blog cluster). الجغرافيا والخدمات والمدوّنة طبقات عرضية تربط الـ silos ببعض.

**القرارات التي اتفقنا عليها:**
1. حذف مصفوفة `locations/[city]/[industry]/` كاملة (توفير ~500 رابط).
2. كل الـ slugs بالإنجليزية حتى تحت `/ar/` (بنية موحّدة، بدون encoding issues).
3. تقليص القطاعات من 11 → **8 قطاعات أساسية**.
4. المدوّنة: **30 مقالة evergreen + 6 category hubs** + حذف routing المزدوج `/blog/posts/`.

---

## ميزانية الروابط (URL Budget)

| Bucket | URLs / لغة | × 2 |
|---|---:|---:|
| الصفحة الرئيسية | 1 | 2 |
| صفحات ثابتة (about, contact, quote, faq, careers, privacy, terms) | 7 | 14 |
| Industries hub + 8 industry pillars | 9 | 18 |
| Locations hub + 24 city pages | 25 | 50 |
| Shop hub + 8 categories + 18 hero products | 27 | 54 |
| Services hub + 7 services | 8 | 16 |
| Resources hub + 12 deep guides | 13 | 26 |
| Case Studies hub + 8 case studies | 9 | 18 |
| Blog hub + 6 category hubs + 30 evergreen posts | 37 | 74 |
| Sitemap + robots + 404 (تقني، خارج الـ silo) | 3 | 6 |
| **المجموع** | **~139** | **~278** |

> هامش 22 رابط للتوسعات المستقبلية (مقالات إضافية أو منتجات جديدة) قبل ما نتخطّى 300.

---

## المعمار: 8 Industry Silos + 4 Cross-Cutting Layers

```
                              [HOMEPAGE]
                                  │
         ┌────────────┬───────────┼───────────┬────────────┐
         ▼            ▼           ▼           ▼            ▼
   [INDUSTRIES]    [SHOP]    [LOCATIONS]  [SERVICES]   [RESOURCES + BLOG + CASES]
       hub          hub         hub          hub             hubs
        │            │           │            │                │
        │            │           │            │                │
   ┌────┴────────────┴───────────┴────────────┴────────────────┴────┐
   │                   8 INDUSTRY SILOS (vertical)                   │
   ├──────────┬──────────┬──────────┬──────────┬──────────┬──────────┤
   │HEALTHCARE│HOSPITAL- │ AVIATION │CORPORATE │EDUCATION │MANUFAC-  │
   │          │ITY & F&B │          │          │          │TURING    │
   ├──────────┴──────────┴──────────┴──────────┴──────────┴──────────┤
   │                       SECURITY     RETAIL                       │
   └─────────────────────────────────────────────────────────────────┘
```

كل silo قطاعي يحوي **6 طبقات** مرتبطة داخلياً:
1. **Pillar page** — `/industries/{slug}/`
2. **Shop category** — `/shop/{matching-category}/`
3. **2-3 hero products** — `/shop/{category}/{product-slug}/`
4. **1-2 deep resources** — `/resources/{guide-slug}/`
5. **Blog category + 4-5 posts** — `/blog/category/{slug}/` + posts
6. **1 case study** — `/case-studies/{slug}/`

---

## الجرد التفصيلي لكل Bucket

### 1. الصفحة الرئيسية + الصفحات الثابتة (8 لكل لغة = 16)

```
/                                /ar/
/about/                          /ar/about/
/contact/                        /ar/contact/
/quote/                          /ar/quote/
/faq/                            /ar/faq/
/careers/                        /ar/careers/
/privacy-policy/                 /ar/privacy-policy/
/terms-of-service/               /ar/terms-of-service/
```

**حذف:** `/portfolio/`, `/testimonials/`, `/mobile/`, `/cart/`, `/checkout/`, `/order-confirmation/` — كلها تُدمج كأقسام داخل صفحات أخرى أو تُلغى.

### 2. Industries Silo Hubs (9 لكل لغة = 18)

```
/industries/                            (hub)
/industries/healthcare/
/industries/hospitality/                (يضمّ F&B والمطاعم والفنادق)
/industries/aviation/
/industries/corporate/                  (يضمّ office/business)
/industries/education/
/industries/manufacturing/              (يضمّ heavy-industry + factory + supply)
/industries/security/                   (يضمّ tactical)
/industries/retail/
```

**حذف من القديم:** `factory-industry`, `supply-manufacturing`, `manufacturing/heavy-industry`, `manufacturing/petrochemical` → دمج كلها في `/industries/manufacturing/` كأقسام داخل الصفحة.

### 3. Locations (25 لكل لغة = 50)

```
/locations/                             (hub فيه خريطة + قائمة 24 مدينة)
/locations/riyadh/
/locations/jeddah/
/locations/mecca/
/locations/medina/
/locations/dammam/
/locations/khobar/
/locations/dhahran/
/locations/al-jubail/
/locations/al-qatif/
/locations/al-ahsa/
/locations/yanbu/
/locations/taif/
/locations/abha/
/locations/khamis-mushait/
/locations/jazan/
/locations/najran/
/locations/al-baha/
/locations/tabuk/
/locations/buraidah/
/locations/hail/
/locations/sakaka/
/locations/arar/
/locations/al-kharj/
/locations/wadi-al-dawasir/
```

**حذف كامل:** كل صفحات `/locations/{city}/{industry}/` (264 صفحة لكل لغة). كل صفحة مدينة هتربط لكل الـ 8 قطاعات بدل ما يكون في صفحة منفصلة.

### 4. Shop (27 لكل لغة = 54)

```
/shop/                                  (hub)

/shop/medical-scrubs/
/shop/medical-scrubs/scrub-set-classic/
/shop/medical-scrubs/scrub-set-premium/
/shop/medical-scrubs/lab-coat-doctor/

/shop/hospitality-attire/
/shop/hospitality-attire/hotel-front-desk/
/shop/hospitality-attire/housekeeping-set/
/shop/hospitality-attire/chef-jacket-classic/      (دمج culinary هنا)

/shop/aviation-uniforms/
/shop/aviation-uniforms/airline-crew-uniform/
/shop/aviation-uniforms/ground-staff-uniform/

/shop/corporate-workwear/
/shop/corporate-workwear/executive-suit/
/shop/corporate-workwear/business-shirt-set/

/shop/education-uniforms/
/shop/education-uniforms/student-uniform-boys/
/shop/education-uniforms/student-uniform-girls/

/shop/industrial-uniforms/
/shop/industrial-uniforms/coverall-fr/
/shop/industrial-uniforms/hi-vis-jacket/

/shop/security-uniforms/
/shop/security-uniforms/security-tactical-set/
/shop/security-uniforms/guard-uniform-classic/

/shop/retail-uniforms/
/shop/retail-uniforms/retail-staff-polo/
```

**حذف من القديم:** `culinary-uniforms` كفئة منفصلة (يدمج تحت hospitality-attire).

### 5. Services (8 لكل لغة = 16)

```
/services/                              (hub)
/services/custom-design/
/services/bulk-ordering/
/services/program-management/           (دمج uniform-program-management + corporate-programs)
/services/quality-assurance/
/services/fabric-selection/
/services/measurement-services/
/services/sustainable-uniforms/
```

**حذف:** كل الـ `*-program/` المتشعّبة (healthcare-uniform-program, security-uniform-program, lightweight-tactical-program, ppe-program-management, professional-security-program, tactical-equipment-program, tactical-patrol-program, weather-protection-program) → تتحوّل لأقسام داخل `/services/program-management/` أو تُذكر في صفحات الـ industries.

### 6. Resources (13 لكل لغة = 26)

```
/resources/                             (hub)
/resources/fabric-guide/
/resources/size-guide/
/resources/procurement-guide/
/resources/sustainability-guide/

/resources/healthcare-uniform-standards/    (silo: healthcare)
/resources/nursing-uniform-guide/           (silo: healthcare)

/resources/electrical-safety-ppe-guide/     (silo: manufacturing)
/resources/cleanroom-best-practices/        (silo: manufacturing)

/resources/security-equipment-standards/    (silo: security)
/resources/professional-security-standards/ (silo: security)

/resources/weather-protection-guide/        (silo: aviation/manufacturing)
/resources/policy-templates/                (cross: corporate)
```

**حذف:** `nfpa70e-guide`, `tactical-equipment-standards`, `tactical-outerwear-standards`, `lightweight-tactical-guide`, `fit-optimization`, `events`, `case-studies` (نسخة داخل /resources/), `fabric-technology` (يُدمج في fabric-guide) — توّفر ~12 صفحة.

### 7. Case Studies (9 لكل لغة = 18)

```
/case-studies/                          (hub)
/case-studies/hospital-aesthetic-clinic/        → silo: healthcare
/case-studies/5-star-hotel-spa/                 → silo: hospitality
/case-studies/luxury-salon-evolution/           → silo: hospitality
/case-studies/spa-chain-rebranding/             → silo: hospitality
/case-studies/factory-safety-improvement/       → silo: manufacturing
/case-studies/nationwide-retail-branding/       → silo: retail
/case-studies/retail-brand-transformation/      → silo: retail
/case-studies/beauty-chain-standardization/     → silo: retail
```

### 8. Blog (37 لكل لغة = 74)

```
/blog/                                  (hub فيه آخر 12 مقالة + روابط للـ 6 category hubs)

/blog/category/healthcare/
/blog/category/hospitality/
/blog/category/aviation/
/blog/category/corporate-education/     (دمج corporate + education)
/blog/category/manufacturing-safety/    (دمج manufacturing + security)
/blog/category/sustainability-trends/   (cross-cutting)
```

**30 مقالة evergreen** موزّعة هكذا (كل واحدة بـ slug إنجليزي تحت /blog/ في كلا اللغتين):

**Healthcare (6):**
- `medical-scrubs-evolution-saudi`
- `healthcare-uniforms-infection-control`
- `nursing-uniform-guide-2025`
- `medical-hijab-healthcare-standards`
- `hospital-uniform-safety-standards`
- `advanced-fabrics-healthcare-uniforms`

**Hospitality (5):**
- `hotel-staff-uniform-guide`
- `hospitality-uniforms-guest-experience`
- `chef-uniform-design-guide`
- `hospitality-uniforms-cultural-identity`
- `hajj-umrah-staff-uniforms`

**Aviation (3):**
- `airline-uniform-design-cultural-identity`
- `aviation-uniforms-brand-identity`
- `material-innovations-aviation-attire`

**Corporate + Education (5):**
- `corporate-uniform-psychology`
- `corporate-dress-code-evolution`
- `cultural-identity-saudi-school-uniforms`
- `fabrics-student-uniforms`
- `national-day-corporate-uniforms`

**Manufacturing + Security (6):**
- `industrial-safety-workwear-saudi`
- `industrial-heat-stress-management`
- `industrial-electrostatic-protection`
- `industrial-uniform-color-coding`
- `advanced-fabrics-security-uniforms`
- `bulletproof-protection-technologies`

**Sustainability + Trends (5):**
- `circular-economy-uniforms`
- `future-professional-wear-digital-age`
- `mall-retail-uniforms-excellence`
- `corporate-security-branding`
- `choosing-uniform-supplier-guide`

**حذف نهائي:**
- كل `placeholder-*` posts (8 مقالات)
- routing مزدوج `/blog/posts/{slug}/` (يحوّل 301 → `/blog/{slug}/`)
- صفحات `/blog/tag/{tag}/` (≈60 صفحة بالعربي + الإنجليزي) — تتحوّل لـ category hubs
- صفحات `/authors/` (11 صفحة) — يبقى بايو المؤلف داخل الـ post نفسه (Person schema) بدون صفحة منفصلة

---

## قواعد الربط الداخلي (Internal Linking — أهم جزء في الـ silo)

> الهدف: يفهم Google إن كل silo كيان مستقل، وإن السلطة تتركّز على الـ pillar pages.

### قاعدة 1 — Industry Pillar
كل صفحة `/industries/{slug}/` تربط:
- **داخل silo:** product category المطابق + 2-3 منتجات + 1-2 resource(s) + case study + blog category + 3-4 blog posts
- **عرضي:** كل الـ 24 مدينة (block "نخدم في") + Services hub + Quote
- **لا تربط:** أي industry آخر (لا cross-silo)

### قاعدة 2 — Product Page
كل `/shop/{cat}/{product}/`:
- **يربط لأعلى:** category page → industry pillar → shop hub
- **عرضي:** 2-3 منتجات «ذات صلة» **داخل نفس الـ category** فقط
- **لا تربط:** منتجات في categories أخرى

### قاعدة 3 — Blog Post
كل `/blog/{slug}/`:
- **يربط لأعلى:** blog category → blog hub
- **داخل silo:** industry pillar + 1 product + 1 resource + 1 case study (كلها من نفس الـ silo)
- **سبب:** يضمن إن المحتوى الإعلامي يصبّ سلطة في الجزء التجاري

### قاعدة 4 — City Page
كل `/locations/{city}/`:
- **يربط:** كل الـ 8 industry pillars + Quote + Contact
- **لا تربط:** مدن أخرى (تجنّب link bloat)

### قاعدة 5 — Resource Page
كل `/resources/{guide}/`:
- **يربط لأعلى:** Resources hub
- **داخل silo:** industry pillar المرتبط + 1 product + 1 blog post + 1 case study

### قاعدة 6 — Case Study
كل `/case-studies/{slug}/`:
- **يربط لأعلى:** Case Studies hub
- **داخل silo:** industry pillar + 1 product + Quote

### قاعدة 7 — Hub Pages
- `/industries/`, `/shop/`, `/locations/`, `/services/`, `/blog/`, `/resources/`, `/case-studies/` كلها صفحات «بوابة» تربط لكل children فقط.
- الصفحة الرئيسية `/` تربط للـ 7 hubs + 4 industries الكبرى (healthcare, hospitality, manufacturing, aviation) كـ feature.

---

## خريطة Redirects (القديم → الجديد)

> ملاحظة: في `next.config.mjs → redirects()` (Firebase App Hosting يدعمها). كلها 301.

### دفعة 1 — حذف مصفوفة locations × industries (~500 redirect)
```
/locations/{city}/{industry}/   →   /locations/{city}/
/ar/locations/{city}/{industry}/ → /ar/locations/{city}/
```
قاعدة واحدة بـ regex catch-all.

### دفعة 2 — توحيد routing المدوّنة
```
/blog/posts/{slug}/             →   /blog/{slug}/
/ar/blog/posts/{slug}/          →   /ar/blog/{slug}/
/blog/tag/{anything}/           →   /blog/  (مع trailing 301)
/authors/{slug}/                →   /about/
/ar/authors/{slug}/             →   /ar/about/
```

### دفعة 3 — مقالات placeholder وأي مقالة محذوفة من الـ 30 evergreen
كل `/blog/{slug}/` غير موجود → redirect لـ blog category hub المناسب (mapping يدوي في jsonمنفصل: `redirects/blog-deprecated.json`).

### دفعة 4 — Services المُدمَجة
```
/services/healthcare-uniform-program/   →   /industries/healthcare/
/services/security-uniform-program/     →   /industries/security/
/services/professional-security-program/→   /industries/security/
/services/tactical-*/                   →   /industries/security/
/services/lightweight-tactical-program/ →   /industries/security/
/services/ppe-program-management/       →   /services/program-management/
/services/uniform-program-management/   →   /services/program-management/
/services/corporate-programs/           →   /services/program-management/
/services/weather-protection-program/   →   /resources/weather-protection-guide/
```

### دفعة 5 — Industries المُدمَجة
```
/industries/factory-industry/           →   /industries/manufacturing/
/industries/supply-manufacturing/       →   /industries/manufacturing/
/industries/manufacturing/heavy-industry/→  /industries/manufacturing/#heavy-industry
/industries/manufacturing/petrochemical/→   /industries/manufacturing/#petrochemical
/industries/retail-shops/               →   /industries/retail/
```

### دفعة 6 — Shop المُدمَج
```
/shop/culinary-uniforms/                →   /shop/hospitality-attire/
/shop/culinary-uniforms/{any}/          →   /shop/hospitality-attire/{best-match}/
```

### دفعة 7 — Resources المُلغاة
```
/resources/nfpa70e-guide/               →   /resources/electrical-safety-ppe-guide/
/resources/tactical-*-standards/        →   /resources/security-equipment-standards/
/resources/lightweight-tactical-guide/  →   /resources/security-equipment-standards/
/resources/fit-optimization/            →   /resources/size-guide/
/resources/fabric-technology/           →   /resources/fabric-guide/
/resources/events/                      →   /resources/
/resources/case-studies/                →   /case-studies/
```

---

## الملفات الحرجة المطلوب تعديلها (للتنفيذ بعد اعتماد الخطة)

| الملف | التعديل |
|---|---|
| `src/lib/data/industries.ts` | تقليص لـ 8 entries بالـ slugs المحدّدة + nameAr |
| `src/lib/data/saudi-cities.ts` | يبقى 24 مدينة كما هو (لا تغيير) |
| `src/lib/data/products.ts` | تقليص + إعادة تنظيم تحت 8 categories بالـ hero products |
| `src/lib/data/services.ts` | تقليص لـ 7 services |
| `src/lib/data/blogPostsArray.ts` | تقليص لـ 30 مقالة + إضافة `category` field |
| `src/lib/data/blogCategories.ts` | **ملف جديد** — 6 categories |
| `src/app/sitemap.ts` | **حذف** كل city×industry generation + إضافة category hubs + إزالة authors/tags |
| `src/app/locations/[city]/[industry]/page.tsx` | **حذف الملف بالكامل** (وكذلك /ar/) |
| `src/app/blog/posts/[slug]/page.tsx` | **حذف الملف** (الـ redirect يكفي) |
| `src/app/blog/tag/[tag]/page.tsx` | **حذف** + AR |
| `src/app/authors/[slug]/page.tsx` | **حذف** + AR |
| `src/app/blog/category/[slug]/page.tsx` | **ملف جديد** — generateStaticParams من blogCategories |
| `next.config.mjs` | إضافة `async redirects()` بكل القواعد أعلاه |
| `src/components/seo/Breadcrumbs.tsx` | تأكد إن كل صفحة عندها breadcrumb يعكس الـ silo (Home → Industries → Healthcare) |
| `src/components/InternalLinkBlock.tsx` | **مكوّن جديد** يأخذ `silo` prop ويرنّ روابط silo-aware (يطبّق قواعد الربط أعلاه) |

---

## خطوات التنفيذ المرتّبة

1. **استعادة الـ working tree** أولاً — حالياً معظم الملفات في حالة `D` (deleted). نحتاج `git restore .` أو نقرّر إذا كانت الحذف مقصود ونعتمد المرجعية من commit `d43eb3096`.
2. **إنشاء الـ data files الجديدة:** `industries.ts` (8)، `blogCategories.ts` (6)، تحديث `blogPostsArray.ts` (30 + category)، `services.ts` (7).
3. **حذف routes الزائدة:**
   - `src/app/locations/[city]/[industry]/` و `src/app/ar/locations/[city]/[industry]/`
   - `src/app/blog/posts/`, `src/app/blog/tag/`, `src/app/authors/` (وAR)
4. **إنشاء routes جديدة:** `src/app/blog/category/[slug]/page.tsx` + AR.
5. **تحديث `sitemap.ts`** ليعكس الـ ~278 رابط بالضبط (assertion في الـ build لو خرج عن المدى).
6. **كتابة `next.config.mjs → redirects()`** بكل القواعد (≥600 redirect rule محسومة كلها بـ 7 wildcards + جدول mapping للمقالات المحذوفة).
7. **بناء `InternalLinkBlock` component** يطبّق قواعد الربط الـ 7.
8. **حقن المكوّن في كل templates:** `IndustryPage`, `ProductPage`, `BlogPost`, `CityPage`, `ResourcePage`, `CaseStudyPage`.
9. **تحديث `Breadcrumbs.tsx`** لتعكس الهرمية (silo path).
10. **توليد محتوى الـ category hubs الستة** (نص ~400 كلمة لكل واحد + قائمة المقالات داخله).
11. **مراجعة voice** على كل صفحة جديدة بالرجوع لـ `references/voice.md` (ملاحظة: المجلد مفقود حالياً، يحتاج إنشاء أو تأكيد).

---

## Verification

### قبل ما نقول «خلصنا»
1. `npm run build` يكمل بدون errors.
2. كل route يطلع `○ (Static)` في الـ build log.
3. **Sitemap assertion:** `app/sitemap.ts` يخرج بين 270-300 entry. لو خرج، الـ build يفشل (نضيف `if (entries.length > 300) throw`).
4. **Redirect tests:** سكربت `scripts/verify-redirects.ts` يلفّ على كل URL في `exhaustive_uneom_links_part1/2/3.md` ويتأكد إنه إمّا موجود (200) أو يحوّل بـ 301 لصفحة موجودة. لازم 100% pass.
5. **Internal link audit:** سكربت يفحص إن كل blog post عنده link واحد على الأقل لـ industry pillar من نفس الـ silo (anti-orphan check).
6. **View-source check:** على 10 صفحات عينة، التأكد من JSON-LD (BreadcrumbList + الـ schema المطلوب لكل نوع).
7. **Voice check:** تشغيل `references/voice.md → "Tells that it's AI-written"` على أي محتوى جديد كُتب للـ category hubs أو الـ pillar pages.

### بعد الـ deploy
- Google Search Console: مراقبة coverage report لمدة 14 يوم بعد deploy. التأكد من إن الـ 1,157 رابط القديم كلها deindexed أو redirected (وليس 404).
- فحص Lighthouse على الـ pillar pages الـ 8: target 95+ في SEO + Performance.

---

## ملخص الفائدة المتوقعة

| المقياس | قبل | بعد |
|---|---:|---:|
| إجمالي URLs | ~1,157 (legacy) / ~766 (current build) | **~278** |
| Crawl budget consumption | عالي جداً | **−76%** |
| Cannibalization risk (نفس keyword لصفحات متعددة) | شديد | منخفض |
| Topical authority concentration per silo | مشتّت | **مركّز** على 8 pillars |
| Internal link efficiency | بدون قواعد | **silo-aware**، كل link يخدم هدف واضح |
| Maintenance burden | 766 صفحة | **278 صفحة + قواعد** |
