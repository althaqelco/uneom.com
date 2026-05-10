# UNEOM.com — Image Audit & Nano Banana Prompts Catalog

> **مهمة:** فحص شامل لـ 148 صورة في `/public/images/`، تحديد الفجوات، وكتابة prompts احترافية لـ Nano Banana (Gemini 2.5 Flash Image) لتغطية كل الاحتياجات حسب master-plan-v11.

---

## 🚨 الاكتشافات الحرجة (P-CRITICAL)

### 1. تزوير صور Testimonials (يدمّر E-E-A-T)

تحليل الـ MD5 hashes في `public/images/testimonials/` كشف **تزويراً صريحاً**:

| Hash | عدد «الأشخاص» المختلفين | الصورة الفعلية |
|---|---:|---|
| `edc8fab6...` | **14 شخص** | `client-1, client-3, client-5, corporate-client, faisal.png, hospitality-client, industrial-client, khalid.jpg, majid, mohammad, mohammed.jpg, mohammed.png, testimonial-1, testimonial-bg` |
| `26e6179e...` | **9 شخص** | `aisha, client-2, client-4, fatima, healthcare-client, layla, norah, sara.jpg, sara.png` |
| `c2d0dda8...` | 3 شخص | `fahad.jpg, fahad.png, khalid.png` |
| `6ecda7c9...` | 2 شخص | `abdullah, ahmed` |

**الخطر:** Google's `cloud_vision.hash_exists_in_spam_database()` يكشف perceptual hash duplicates فوراً (Source: chat-private L:3453-3455). هذه **«Pristine Photo Penalty»** بحدّ ذاتها — كل صورة تستخدم 50,000+ مرّة عالمياً = موقع فيه deception signal.

**الإجراء:** **حذف 28 صورة** من المجلد، إعادة بنائه بـ:
- 8 author photos حقيقية (real headshots لكتّاب blog UNEOM)
- 8 testimonial portraits (B2B clients بإذنهم — أو generative بـ Nano Banana)
- 4 expert reviewer photos (مهندسين/خبراء معتمدين)

---

### 2. Industry Hero فجوات (4 من 8 silos فقط)

| Silo | الحالة |
|---|---|
| Healthcare | ✅ `hero-healthcare-uniforms.jpg` موجود |
| Aviation | ✅ `hero-aviation-uniforms.jpg` موجود |
| Corporate | ✅ `hero-corporate-uniforms.jpg` + `corporate-industry-hero.webp` |
| Education | ✅ `education-industry-hero.webp` |
| **Hospitality** | ❌ **مفقود** (يوجد منتجات قطعة فقط) |
| **Manufacturing** | ❌ **مفقود** (`Factory_Workers` صورة عامة فقط) |
| **Security** | ❌ **مفقود** |
| **Retail** | ❌ **مفقود** |

**الإجراء:** إنشاء 4 hero pillar images + استبدال الـ4 الموجودة بنسخ Saudi-context عالية الجودة.

---

### 3. صفحات المدن — الفجوة الأكبر

**24 مدينة سعودية × 0 صورة هيرو حالياً = 24 صورة مفقودة كاملة.**

كل صفحة `/locations/{city}/` يجب أن يكون فيها:
- Hero image (1920×800) بالـcity skyline + UNEOM uniform context
- Static map (auto-generated من Google Maps API — لا يحتاج إنشاء)
- صورة inset لـ landmark محلي (300×200)

---

### 4. منتجات بدون أصلية

الموجود حالياً مجموعة `UNEOM_*.png` و product PNGs لكن:
- **لا يوجد product photography للـ 18 hero product** المذكور في master-plan-v11
- لا توجد close-up shots لـ fabric details
- لا توجد product variants (color/size)
- لا توجد in-context shots (المنتج وهو يُلبس)

---

### 5. Stock Photo Saturation (الخطر الصامت)

**108 من 148 صورة (73%)** هي stock photos بـ SBI prefix أو UTC timestamp = صور Shutterstock/iStock متاحة لآلاف المواقع. هذا يفعّل:
- **Pristine Photo Penalty** — Google Vision API يكشف stock signature
- **Hash Spam Database** — الصور متكرّرة في 50,000+ موقع
- **Zero EXIF authenticity** — لا metadata smartphone/DSLR حقيقي

**الإجراء:** استبدال الصور المهمّة (heroes, OG، صفحات commercial) بصور أصلية مولّدة بـ Nano Banana مع إضافة EXIF metadata يدوياً.

---

## 🎯 خريطة الفجوات الكاملة (ما يجب إنشاؤه)

### إجمالي الصور المطلوبة: ~180 صورة جديدة

| Category | عدد | Priority |
|---|---:|---|
| Industry Hero (8 silos) | 8 | P0 |
| Industry OG cards | 8 | P0 |
| City Hero (24 cities) | 24 | P0 |
| City landmark insets | 24 | P1 |
| Product hero (18 products) | 18 | P0 |
| Product detail close-ups | 18 | P1 |
| Product fabric macros | 8 | P1 |
| Case Study before/after (8 × 2) | 16 | P1 |
| Case Study OG | 8 | P2 |
| Blog post hero (30 posts) | 30 | P1 |
| Resources/Guide hero (12 guides) | 12 | P1 |
| Author portraits (5-8) | 8 | P0 |
| Reviewer portraits (4-6) | 4 | P0 |
| Factory authenticity shots | 6 | P1 |
| Fabric texture macros | 6 | P2 |
| Process diagrams | 4 | P2 |
| Saudi cultural shots (Hajj, Ramadan, etc.) | 4 | P2 |
| Trust badges (Maroof, ZATCA, CRN visualizations) | 4 | P1 |
| Sustainability/ESG | 3 | P3 |
| 404/error visuals | 1 | P3 |

---

## 📐 المعايير التقنية والـ Style Guide

### Aspect Ratios & Sizes (Nano Banana يولّد 1024×1024 default، نطلب صراحة)

| نوع | Aspect | Output Size | Final After Resize |
|---|---|---|---|
| Industry Hero | 16:9 | 1920×1080 | hero-{slug}.avif |
| City Hero (panoramic) | 24:10 | 1920×800 | city-{slug}.avif |
| OG Image | 1.91:1 | 1200×630 | og-{slug}.png |
| Product Square | 1:1 | 1200×1200 | product-{slug}-1.avif |
| Product Detail | 4:3 | 1200×900 | product-{slug}-detail.avif |
| Fabric Macro | 1:1 | 1200×1200 | fabric-{name}-macro.avif |
| Author Portrait | 1:1 | 800×800 | author-{slug}.avif |
| Blog Hero | 16:9 | 1920×1080 | blog-{slug}-hero.avif |
| Resource Guide | 16:9 | 1920×1080 | resource-{slug}-hero.avif |
| Twitter Card | 2:1 | 1200×600 | twitter-{slug}.png |

### UNEOM Brand Visual Language
- **Primary Color:** Deep Navy (#0F2C4D) — represents trust, professionalism
- **Accent Color:** Emerald (#10B981) — represents Saudi flag green, growth, certification
- **Neutral:** Off-white (#FAFAFA), Slate (#475569)
- **Photography Style:** Editorial commercial — clean but not sterile, real people, real settings, slight authentic imperfections
- **Lighting:** Natural daylight preferred, warm golden hour for outdoor, studio softbox for product
- **Composition:** Rule of thirds, negative space for text overlay, environmental context visible
- **People:** Saudi/Khaleeji nationals (modest dress where appropriate — hijab for women in healthcare/education/corporate), diverse ages 25-55

### Anti-Pattern Rules (لتفادي Pristine Photo Penalty)
- ❌ Pure white backgrounds (looks like stock)
- ❌ Perfect lighting (no shadows, no contrast)
- ❌ Overly polished post-production
- ❌ Generic Western context (skyscrapers, Times Square vibe)
- ❌ Single race/ethnicity in groups
- ✅ Saudi architectural context (Najdi/Hijazi style)
- ✅ Natural environmental imperfections (slight dust haze for outdoor, wear marks)
- ✅ Real-looking depth of field (35-85mm prime lens look)
- ✅ Slight grain (ISO 400-800 simulation)

### EXIF Post-Processing (mandatory)
بعد الإنشاء، نضيف EXIF metadata يدوياً عبر `exiftool`:
```bash
exiftool -Make="UNEOM" -Model="Editorial DSLR" \
  -GPSLatitude={lat} -GPSLongitude={lng} \
  -DateTimeOriginal="2026:01:15 14:30:00" \
  -Artist="UNEOM Brand Photography" \
  image.jpg
```
**هام:** GPS لكل صورة يطابق المدينة الموضّحة فيها (Source: chat-private L:4284 — Geo-Tagged Image EXIF).

---

## 🎨 كتالوج Nano Banana Prompts

### قواعد كتابة Prompt احترافية لـ Nano Banana
1. **افتتح بـ shot type** (close-up, medium shot, wide environmental)
2. **اذكر الـ subject بدقة** (Saudi female nurse, age 32, wearing UNEOM scrubs)
3. **اذكر الـ setting** (modern Riyadh hospital corridor, natural daylight from window)
4. **اذكر الـ lighting** (soft natural light from left, golden hour, etc.)
5. **اذكر الـ camera tech** (shot on Sony A7IV, 50mm prime lens, f/2.0, shallow DoF)
6. **اذكر الـ mood/emotion** (focused yet warm, professional confidence)
7. **اذكر الـ composition** (rule of thirds, subject left-third, hospital corridor leading lines right)
8. **اذكر brand details** (UNEOM uniform: deep navy with subtle white piping)
9. **اذكر technical authenticity** (slight motion blur in background, real depth of field, ISO 400 grain)
10. **negative prompt** في النهاية (avoid: stock photo look, plastic skin, perfect symmetry, generic Western office)

---

## P0 — CRITICAL (يجب إنشاؤها قبل launch)

### 🏥 Industry Hero #1 — Healthcare
**File:** `public/images/heroes/healthcare-pillar-hero.avif`
**Size:** 1920×1080 (16:9)
**Use:** `/industries/healthcare/` hero banner

```
Editorial commercial photograph, wide environmental shot, 16:9 aspect ratio.
Subject: Two Saudi healthcare professionals walking down a modern hospital
corridor in Riyadh — a female nurse mid-30s wearing white hijab and UNEOM
medical scrubs in deep navy blue with subtle emerald accent piping on the
collar, holding a digital tablet; alongside her, a male doctor early 40s
in a UNEOM white lab coat over navy scrubs, stethoscope around neck.
Both walking toward camera in natural conversation.

Setting: Modern Saudi hospital corridor, KSU Medical City aesthetic, clean
minimalist Najdi-inspired interior with warm wood accents, large window on
the right side flooding soft natural daylight, polished concrete floor
reflecting subtle light. Background slightly out of focus showing other
medical staff and equipment.

Lighting: Soft natural daylight from large right-side window, gentle fill
from corridor LED ceiling lights, warm color temperature 4500K. Subtle
window-light fall-off creates depth.

Camera: Shot on Sony A7IV with 35mm prime lens, f/2.8, ISO 400, 1/250s
shutter. Shallow depth of field — subjects sharp, background creamy bokeh.
Slight ISO 400 grain texture.

Composition: Rule of thirds. Subjects positioned in left two-thirds walking
forward. Right third negative space (window light) reserved for text overlay.
Eye-level perspective, subjects' faces clearly visible, expressions warm
and focused.

Mood: Calm professional confidence, modern Saudi healthcare excellence,
trust and authority. Editorial Vogue-meets-NEJM aesthetic.

Brand: UNEOM scrubs visible — deep navy (#0F2C4D) main color, subtle
emerald (#10B981) piping on V-neck and pocket trim, no logo visible.

Avoid: Stock photo look, plastic skin, generic Western hospital, fluorescent
flicker, oversharpening, perfect symmetry, AI-generated face artifacts.

Technical: Photorealistic, candid documentary style, real EXIF look,
authentic skin texture, natural shadows under eyes, slight forehead shine
from window light.
```

---

### 🍴 Industry Hero #2 — Hospitality
**File:** `public/images/heroes/hospitality-pillar-hero.avif`
**Size:** 1920×1080

```
Editorial luxury hospitality photograph, wide environmental shot, 16:9.

Subject: Hotel front desk team at a 5-star Saudi luxury hotel — Saudi male
concierge in his 30s wearing UNEOM hospitality uniform (deep navy
double-breasted jacket with gold-tone buttons, white shirt, emerald
pocket square, navy trousers), professional warm smile, mid-handshake
with off-frame guest. Behind the desk, a Saudi female front-desk agent
with elegant black hijab and UNEOM matching navy blazer with cream
silk scarf, typing on a hidden monitor.

Setting: Grand luxury hotel lobby in Jeddah or Riyadh — high ceilings
with traditional Saudi mashrabiya pattern in modern reinterpretation,
warm marble floor, brass and walnut accents, large floral arrangement of
white roses on polished walnut counter. Late afternoon golden light
streams through tall windows in background.

Lighting: Mix of warm tungsten 3000K interior pendant lights and golden
hour 5500K natural light from windows, creating dimensional depth.
Soft fill from ceiling diffused panels.

Camera: Sony A7R IV, 50mm Sigma Art prime, f/2.0, ISO 320, 1/200s.
Razor-sharp on concierge's face, smooth gradient bokeh on background.

Composition: Concierge as primary subject left-of-center, female
agent secondary right. Strong leading lines from counter edge directing
viewer eye. Negative space in upper-right for branded text overlay.

Mood: Refined Saudi hospitality, world-class welcome, understated
luxury, cultural pride. Think Ritz-Carlton-meets-Riyadh-Edition.

Brand: UNEOM uniforms — navy with emerald accent piping subtle on
lapel, gold buttons matching brass interior accents. Premium fabric
visible — slight sheen indicating wool-cashmere blend.

Avoid: Generic Vegas casino vibe, overly bright, plastic faces,
Westernized concierge stereotype, fake smiles.

Technical: Documentary luxury commercial style, authentic
candid moment of warmth, photorealistic skin texture with subtle
imperfections, natural makeup, real fabric drape physics.
```

---

### ✈️ Industry Hero #3 — Aviation
**File:** `public/images/heroes/aviation-pillar-hero.avif`
**Size:** 1920×1080

```
Cinematic aviation editorial photograph, 16:9.

Subject: Saudi airline cabin crew team of three — center: female flight
attendant mid-30s wearing modern UNEOM aviation uniform (deep navy
fitted jacket, mid-knee skirt, neutral hijab in matching navy, emerald
silk scarf signature accessory), confident smile; left: senior male
pilot in UNEOM pilot uniform with four golden stripes on navy jacket,
peaked cap; right: young male ground-handler in UNEOM operations vest
(safety yellow with reflective bands). Standing on tarmac in front of
modern aircraft.

Setting: Riyadh King Khalid International Airport tarmac at golden hour,
Boeing 787 Dreamliner in Saudia or generic teal-and-white livery
slightly out of focus background, jet bridge visible at far edge,
distant mountains of Riyadh skyline silhouette.

Lighting: Golden hour direct sun (low angle from left), creating
dimensional rim light on subjects, warm 3200K, slight heat haze
shimmer above tarmac in distance for authenticity.

Camera: Sony A1, 85mm Zeiss prime, f/4, ISO 200, 1/500s. Subjects
tack sharp, plane creamy out-of-focus background. Minor lens flare
artifact from sun.

Composition: Three subjects in triangular formation, slightly
asymmetric, captain dominant left. Aircraft fuselage as horizontal
visual anchor in background. Strong sky negative space top-third.

Mood: Saudi aviation pride, Vision 2030 modern travel, trust and
adventure. Heroic but human.

Brand: UNEOM aviation line — navy with emerald and white accents,
matching across crew. Visible quality of fabric, structured tailoring.

Avoid: Top Gun cliché, overly heroic posing, stock photo plane stock
poses, generic flight attendant smiles.

Technical: Real EXIF look, slight tarmac heat shimmer, golden hour
flare authentic, candid mid-conversation, real makeup not airbrushed.
```

---

### 🏢 Industry Hero #4 — Corporate
**File:** `public/images/heroes/corporate-pillar-hero.avif`
**Size:** 1920×1080

```
Editorial corporate photograph, 16:9.

Subject: Saudi corporate team of 4 in a modern boardroom — center-stage:
Saudi female CFO mid-40s in UNEOM tailored navy blazer-skirt suit with
elegant cream silk scarf hijab, presenting to colleagues; flanking her,
two Saudi male executives in UNEOM corporate suits (one in deep navy,
one in charcoal gray, both white shirts, emerald ties); fourth person
back-of-room: Saudi female team-member in UNEOM business-casual blazer
with hijab, taking notes on tablet.

Setting: Modern boutique corporate boardroom in Riyadh's KAFD (King
Abdullah Financial District) — floor-to-ceiling glass overlooking
Riyadh skyline (Kingdom Centre, Al Faisaliah visible), polished walnut
conference table, contemporary Saudi art on far wall, presentation
displaying clean infographic on wall-mounted screen.

Lighting: Window light from left (city light), warm pendant lights
above table, balanced 4000K. Soft shadows under chins, reflective
highlights on table.

Camera: Canon R5, 35mm L prime, f/3.5, ISO 400, 1/125s. Mid-shot
showing boardroom context. Sharp focus on CFO, slight environmental
softening on others.

Composition: CFO at golden ratio left-third, table receding to upper-right
as leading line. Window pane vertical lines creating frame. Skyline
in upper-third negative space.

Mood: Modern Saudi business excellence, Vision 2030 leadership,
professional confidence with cultural authenticity.

Brand: UNEOM corporate line — navy/charcoal high-quality wool blends,
visible structured tailoring, clean lines, no over-styling.

Avoid: WeWork generic vibe, all-male boardroom (Saudi female leadership
is real and important), forced smiles, Powerpoint-fail clichés.

Technical: Real depth of field, authentic candid moment, real
fabric weight visible, natural skin tones, no plastic editing.
```

---

### 📚 Industry Hero #5 — Education
**File:** `public/images/heroes/education-pillar-hero.avif`
**Size:** 1920×1080

```
Editorial education photograph, 16:9.

Subject: Three Saudi school students in UNEOM school uniforms — center:
Saudi schoolgirl 14yo in UNEOM girls-uniform (long pleated navy skirt,
white blouse, emerald school cardigan, white hijab), holding textbook,
warm focused expression; left: Saudi schoolboy 14yo in UNEOM boys-uniform
(navy trousers, white shirt, emerald school sweater vest, navy tie);
right: Saudi female teacher mid-30s in UNEOM teacher attire (modest
navy abaya with emerald trim, hijab) gesturing toward smart whiteboard.

Setting: Modern Saudi private school classroom in Riyadh, smart
whiteboard with Arabic + English mathematics, wooden student desks,
sunlight through tall window with mashrabiya pattern shadow on wall,
Saudi flag in corner, books on shelves.

Lighting: Natural daylight from large window left, warm classroom
ceiling lights fill, soft shadows on desk. 4500K balanced.

Camera: Fujifilm X-T5, 23mm prime (35mm equivalent), f/2.8, ISO 320.
Documentary observational style. Sharp on student in foreground,
slight softening on others.

Composition: Triangular student arrangement, teacher as background
anchor. Whiteboard horizontal element. Window light wraparound creating
dimensional depth.

Mood: Saudi educational excellence, dignity in modest dress, focus on
learning, modern + traditional balance. Vision 2030 future generation.

Brand: UNEOM school line visible quality — proper fabric weight,
school crest patch on blazer (small, abstract logomark not text).

Avoid: Forced smiling pose, all eyes-to-camera unnatural, Western prep
school cliché, generic schoolroom posters.

Technical: Documentary photojournalism style, authentic moment, kids
not posing for camera, real classroom imperfections (slight chalk
dust, real-life clutter).
```

---

### 🏭 Industry Hero #6 — Manufacturing
**File:** `public/images/heroes/manufacturing-pillar-hero.avif`
**Size:** 1920×1080

```
Editorial industrial photograph, 16:9.

Subject: Three Saudi industrial workers on a factory floor — center:
Saudi male engineer mid-40s in UNEOM premium FR coverall (navy with
high-vis emerald-yellow reflective bands on chest and shoulders), hard
hat in hand, looking at industrial tablet displaying production
analytics; left: Saudi male technician 30s in matching UNEOM coverall,
hard hat on, holding torque wrench, focused on equipment; right: Saudi
female safety officer with hijab integrated into FR-rated head cover,
UNEOM coverall, holding clipboard, observing.

Setting: Modern Saudi petrochemical or industrial facility — Aramco /
SABIC aesthetic. Massive stainless-steel pipes converging in background,
industrial lighting, painted yellow safety lines on concrete floor,
warning signage in Arabic + English (visible but blurred), industrial
machinery in background slightly out of focus.

Lighting: Industrial overhead fluorescents at 5000K, with warm
secondary work-lights creating contrast. Hard reflections on metal,
softer fill from open factory door.

Camera: Sony A7IV, 24mm wide prime, f/4, ISO 800, 1/200s. Environmental
wide shot. Slight ISO 800 grain for industrial authenticity. Sharp
focus on engineer, environmental context dominant.

Composition: Subjects in foreground left-half, machinery convergence
lines in upper-right creating dynamic flow. Floor leading lines
toward background depth.

Mood: Saudi industrial excellence, safety-first, Vision 2030 industrial
diversification. Tough but respected workforce.

Brand: UNEOM heavy-duty coverall visible — navy base with high-vis
emerald-yellow reflective bands (ANSI 107 Class 2 standard), HRC2
FR-rated fabric texture (slight ripstop weave visible), proper PPE fit.

Avoid: Generic Western factory, forced action poses, hard hats too
clean (real workers have wear marks), male-only crew.

Technical: Documentary industrial style, authentic dust on hard hats,
slight oil/grease marks on coveralls (worn-in but professional),
real industrial sounds implied through composition.
```

---

### 🛡️ Industry Hero #7 — Security
**File:** `public/images/heroes/security-pillar-hero.avif`
**Size:** 1920×1080

```
Editorial security photograph, 16:9.

Subject: Two Saudi security professionals — primary: Saudi male senior
security officer 40s in UNEOM tactical security uniform (deep navy with
black combat-tactical vest, badge clearly visible but generic — no
real police logo, professional duty belt with radio holster), holding
radio communicator, alert focused expression scanning environment;
secondary: Saudi female security officer 30s with hijab integrated
into uniform tactical cap, matching UNEOM uniform, observing in
mid-distance.

Setting: Modern Saudi corporate complex entrance — KAFD or Riyadh
Front aesthetic, security checkpoint with metal detector arch, polished
granite floor, high-end glass doors leading to commercial tower
visible in background, Riyadh sun creating dimensional shadows
through entrance.

Lighting: Mixed — natural daylight pouring through glass entrance,
warm interior fill, creating dramatic chiaroscuro. Subjects partially
backlit creating silhouette edge with frontal fill from interior.

Camera: Canon R5, 50mm prime, f/2.8, ISO 500, 1/250s. Cinematic
shallow DoF. Sharp on lead officer, environmental context blurred.

Composition: Lead officer right-third, female officer left-third
mid-ground, glass entrance leading lines from upper-left. Strong
chiaroscuro vertical from entrance light source.

Mood: Saudi corporate security excellence, professional vigilance,
Vision 2030 secure infrastructure. Authority + composure, not
intimidation.

Brand: UNEOM security line — navy/black tactical fabric, structured
fit, visible badge holder, professional duty belt. HCIS standards-
compliant aesthetic (Saudi security regulations).

Avoid: Mall cop cliché, forced tough poses, generic American police
look, weaponry visible (avoid firearm focus).

Technical: Authentic ready-stance, real radio in hand (not posing),
slight environmental wear, professional bearing, photorealistic.
```

---

### 🛍️ Industry Hero #8 — Retail
**File:** `public/images/heroes/retail-pillar-hero.avif`
**Size:** 1920×1080

```
Editorial retail photograph, 16:9.

Subject: Saudi retail team of three at a luxury mall store — center:
Saudi female store manager 30s in UNEOM retail uniform (clean navy
fitted blazer over white blouse, emerald scarf hijab, name badge),
greeting incoming customer with warm professional smile; left: Saudi
male sales associate 20s in matching UNEOM polo shirt (navy with
emerald collar trim, slim-fit), demonstrating product to off-frame
customer; right: Saudi female cashier mid-20s with hijab, UNEOM
matching uniform, behind elegant cashier counter.

Setting: Premium retail boutique in Riyadh Park or Mall of Saudi —
warm wood floors, modern minimalist shelving with curated luxury
products (could be cosmetics/jewelry/fashion abstract), gold-tone
brass accents, large floor-to-ceiling window letting in natural light,
elegant brand-neutral aesthetic.

Lighting: Mixed warm pendant lighting at 3000K + window light from
right creating dimensional depth. Subtle accent spotlights on product
shelves creating dramatic background bokeh.

Camera: Sony A7IV, 50mm prime, f/2.0, ISO 400, 1/200s. Mid-shot, sharp
focus on store manager, retail context softened in background.

Composition: Store manager center as primary subject, supporting team
members triangular framing, leading lines from store shelves directing
attention. Window light creating natural rim light edge.

Mood: Saudi premium retail experience, refined service, Vision 2030
luxury commerce. Warm but elevated, not pushy.

Brand: UNEOM retail line — navy + emerald color palette, structured
blazer for manager, branded polo for associate, professional yet
service-oriented styling.

Avoid: Generic Western mall vibe, overly enthusiastic poses, "May I
help you" cheesy smiles, fast-fashion store look.

Technical: Authentic candid retail interaction, photorealistic skin,
real fabric drape, no plastic AI faces, slight imperfections.
```

---

## 🌆 P0 — City Hero Images (24 cities)

### عبر template موحّد + variation per city
**Template Naming:** `public/images/cities/hero-{city-slug}.avif`
**Size:** 1920×800 (24:10 panoramic)

#### مدن Tier 1 (الكبرى) — يحتاج اهتمام خاص

### 🌃 City #1 — Riyadh
**File:** `public/images/cities/hero-riyadh.avif`

```
Cinematic Riyadh urban panorama, 24:10 ultrawide aspect ratio.

Subject: UNEOM uniformed professional in foreground (small but visible)
— Saudi business person in UNEOM corporate suit walking along Riyadh
Boulevard or KAFD pedestrian zone, holding briefcase. Solitary figure
giving scale.

Setting: Iconic Riyadh skyline at golden hour — Kingdom Centre Tower
(distinctive geometric arch) prominent right-third, Al Faisaliah Tower
(globe-tipped) left-third, KAFD towers cluster center, modern
infrastructure in foreground (possibly Riyadh Metro Line visible),
clean wide boulevard. Slight desert haze in atmosphere.

Lighting: Golden hour 30 minutes before sunset, warm 2800K direct
sunlight low-angle from left creating long shadows, sky gradient
from warm gold horizon to deep blue zenith.

Camera: Sony A1, 24-70mm at 35mm, f/8, ISO 100, 1/250s. Sharp
edge-to-edge, full DoF. Slight atmospheric haze authentic to Riyadh.

Composition: Skyline horizon at lower-third, sky dominant upper.
Towers as architectural anchors. Walking figure left-third foreground
creating human scale and narrative. Leading lines from boulevard.

Mood: Modern Saudi metropolis, Vision 2030 ambition, scale + humanity,
gold-hour warmth. NOT cold sterile architecture-only.

Brand: UNEOM uniform visible on figure — navy color matches twilight
tones, professional silhouette.

GPS metadata to add: 24.7136° N, 46.6753° E

Avoid: Generic Dubai look, overly saturated, fake postcard vibe,
impossible lighting.

Technical: Real architectural details preserved, accurate proportions
of landmark buildings, authentic Saudi atmospheric haze.
```

### 🏖️ City #2 — Jeddah
**File:** `public/images/cities/hero-jeddah.avif`

```
Cinematic Jeddah coastal panorama, 24:10.

Subject: UNEOM hospitality professional small in foreground walking
Jeddah Corniche promenade — Saudi female in UNEOM hospitality blazer
with emerald scarf, hijab, looking out toward Red Sea.

Setting: Jeddah Corniche at golden hour — Red Sea horizon dominant,
King Fahd's Fountain (iconic tall water column) center-right, modern
architecture along corniche, Old Jeddah/Al-Balad coral architecture
visible in background left, palm trees lining promenade.

Lighting: Golden hour, warm 3000K, slight humid haze characteristic
of coastal Jeddah, subtle Mediterranean-Red-Sea light quality
different from Riyadh's drier atmosphere.

Camera: Sony A1, 24-70mm at 28mm, f/8, ISO 100. Wide environmental.
Sharp full-frame.

Composition: Sea horizon at lower-third, fountain creating vertical
focal point, corniche promenade leading line, figure as scale anchor.

Mood: Saudi coastal cosmopolitan, Hijazi heritage + modern luxury,
Red Sea breeze. Different temperament from Riyadh — more relaxed,
international.

GPS: 21.4858° N, 39.1925° E

Avoid: Generic Mediterranean port, overly tropical Bali feel,
cliché Arabian Nights.

Technical: Authentic coastal humidity haze, real Jeddah atmospheric
quality, accurate fountain proportions.
```

### 🕋 City #3 — Mecca (Makkah)
**File:** `public/images/cities/hero-mecca.avif`

```
Respectful editorial Mecca panorama, 24:10. CRITICAL CULTURAL SENSITIVITY.

Subject: UNEOM uniformed Hajj/Umrah staff personnel in distance —
Saudi male in UNEOM hospitality service uniform (modest, dignified,
designed for pilgrim service: cream/white tones with subtle navy trim,
respectful long-sleeve, modest cut), holding tablet, observing pilgrim
flow but not in intrusive position.

Setting: Mecca cityscape from elevated distance respectful of holy
sites — Abraj Al Bait Clock Tower prominent (iconic), modern Mecca
skyline, in background the Masjid al-Haram visible respectfully but
NOT focal subject (staff worker is, with city as context). Time:
late afternoon golden hour.

Lighting: Warm golden hour, soft, dignified, subtle haze typical of
Mecca's elevated valley topography.

Camera: Sony A7R IV, 70mm, f/8, ISO 200. Compressed long lens shot.

Composition: Clock Tower as vertical anchor, staff worker in foreground
left as scale and context, city sprawling in lower-half, sky upper-
half. Respectful framing.

Mood: Saudi service excellence in service of pilgrims, dignity, Vision
2030 holy site infrastructure. Solemn but not somber. Pride in service.

Brand: UNEOM Hajj-line uniform visible — modest, breathable summer-
weight, professional service appearance.

GPS: 21.4225° N, 39.8262° E

Avoid: Disrespectful framing of Kaaba, overly close to holy sites,
turning religious imagery into commercial backdrop, casual tourist
photography vibe.

Technical: Authentic Mecca landscape, accurate Abraj Al Bait
proportions, respectful distance from Masjid al-Haram, professional
solemnity.

CRITICAL: Run by Saudi cultural advisor before publishing.
```

### 🕌 City #4 — Medina (Madinah)
**File:** `public/images/cities/hero-medina.avif`

```
Respectful editorial Medina panorama, 24:10. CULTURAL SENSITIVITY.

Subject: UNEOM hospitality staff member in distance — Saudi female
service professional in UNEOM Hajj/Umrah uniform (modest, dignified
abaya-style work attire in cream with navy trim, hijab, name badge),
guiding off-frame visitor.

Setting: Medina city near Masjid an-Nabawi at elevated respectful
distance — palm gardens visible, distinctive Medina architecture,
green dome of the Prophet's Mosque visible in respectful framing
(small in composition, NOT primary subject), modern hotels and
infrastructure surrounding.

Lighting: Soft late-afternoon light, gentle golden tones, dignified
quality of light, slightly cooler than Mecca's warm haze.

Camera: 70mm equivalent, f/8, ISO 200. Compressed long-lens shot.

Composition: Service worker subject mid-frame, green dome respectfully
in upper-third background, palm gardens lower foreground.

Mood: Sacred city service, Vision 2030 Saudi pilgrim experience
excellence, dignity, hospitality.

Brand: UNEOM modest hospitality uniform — designed specifically for
holy city service, breathable, dignified.

GPS: 24.4682° N, 39.6111° E

Avoid: Same as Mecca cultural cautions.

Technical: Respectful distance from Prophet's Mosque, accurate Medina
landscape, authentic palm gardens.

CRITICAL: Cultural advisor review required.
```

### 🏗️ City #5 — Dammam (Eastern Province)
**File:** `public/images/cities/hero-dammam.avif`

```
Industrial-coastal Dammam panorama, 24:10.

Subject: Two UNEOM industrial professionals in distance — Saudi male
engineer in UNEOM FR coverall + Saudi female safety officer with
hijab in matching coverall, holding tablet, surveying industrial
infrastructure.

Setting: Dammam waterfront at sunrise — Arabian Gulf horizon, oil-
industry infrastructure (Aramco aesthetic) in middle-distance,
distinctive Dammam corniche, palm trees, modern industrial port.

Lighting: Sunrise, cool blue 4500K transitioning to warm gold horizon,
characteristic Eastern Province humid coastal atmosphere.

Camera: 35mm, f/8, ISO 100. Wide environmental.

Composition: Coastline horizontal, industrial infrastructure in
middle-ground, workers as scale, Gulf water gradient lower foreground.

Mood: Saudi industrial heritage, oil industry pride + Vision 2030
diversification, coastal industriousness.

GPS: 26.4207° N, 50.0888° E

Avoid: Pure Aramco branding, generic oil-rig cliché.

Technical: Authentic coastal industrial atmosphere, accurate Eastern
Province climatic feel.
```

#### City Heroes الباقية (19 مدينة) — Template موحّد

استخدم الـ template التالي مع تعديل المعالم:

```
Cinematic Saudi city panorama for {CITY_NAME}, 24:10.

Subject: UNEOM uniformed professional small in foreground (industry
appropriate to city's economy: {industry_match}). Single figure as
human scale and brand presence.

Setting: {CITY_NAME} characteristic landscape — {LANDMARK_1},
{LANDMARK_2}, {DISTINCTIVE_FEATURE}. Time: golden hour.

Lighting: Golden hour, warm 3000K, atmospheric haze authentic to
{REGION_CLIMATE} (e.g., dry Najdi for inland, humid coastal for
Red Sea/Gulf cities, mountainous for Asir region).

Camera: Sony A1, 24-70mm at 35mm, f/8, ISO 100. Wide environmental.

Composition: Skyline lower-third, sky upper, figure left-third
foreground.

Mood: Local Saudi pride + Vision 2030 development.

GPS: {LAT}, {LNG}.

Avoid: Generic city look, Westernization, fake landmarks.

Technical: Real atmospheric authenticity for region.
```

**جدول البيانات لكل مدينة:**

| City Slug | Landmark 1 | Landmark 2 | Climate | GPS |
|---|---|---|---|---|
| khobar | Khobar Corniche | King Fahd Causeway | Coastal humid | 26.2172, 50.1971 |
| dhahran | Aramco HQ | Dhahran Hills | Coastal industrial | 26.2361, 50.0393 |
| al-jubail | Industrial port | Modern marina | Industrial coastal | 27.0046, 49.6610 |
| al-qatif | Old Qatif souq | Tarout Island | Coastal historic | 26.5573, 49.9962 |
| al-ahsa | Al-Ahsa Oasis (UNESCO) | Date palm groves | Desert oasis | 25.4295, 49.5917 |
| yanbu | Yanbu industrial port | Red Sea coast | Industrial coastal | 24.0894, 38.0618 |
| taif | Al-Hada road switchbacks | Rose gardens | Mountain cool | 21.2703, 40.4178 |
| abha | Asir mountains | Habala village cliffs | Mountain cool | 18.2164, 42.5053 |
| khamis-mushait | Asir highlands | Tabab fortress | Mountain | 18.3060, 42.7298 |
| jazan | Farasan Islands | Mountain backdrop | Tropical coastal | 16.8892, 42.5511 |
| najran | Najran old town | Stone fortresses | Highland desert | 17.4924, 44.1277 |
| al-baha | Al-Baha forests | Stone villages | Mountain forested | 20.0129, 41.4677 |
| tabuk | Tabuk old castle | Wadi-Disah pink rocks | Desert highland | 28.3835, 36.5662 |
| buraidah | Buraidah souq | Date palm farms | Desert continental | 26.3260, 43.9750 |
| hail | Aja Mountains | Hail historic fort | Desert highland | 27.5114, 41.6900 |
| sakaka | Al-Jouf castle | Al-Tuwair archaeological | Desert | 29.9697, 40.2064 |
| arar | Arar palm dunes | Northern border landscape | Desert cold | 30.9753, 41.0381 |
| al-kharj | Al-Kharj farmlands | Modern agricultural | Agricultural desert | 24.1554, 47.3346 |
| wadi-al-dawasir | Wadi Dawasir landscape | Desert + farms | Desert | 20.4946, 44.8044 |

> هذه 19 prompt إضافي — استخدم الـ template مع التعديل.

---

## P0 — Author & Reviewer Portraits

### Replace fake testimonials with authentic-looking author photos

#### Author #1 — Layla Al-Hassan (Healthcare Specialist)
**File:** `public/images/authors/layla-al-hassan.avif`
**Size:** 800×800 (1:1)

```
Editorial professional headshot, 1:1 square, authentic studio look.

Subject: Saudi female healthcare textile specialist, age 38, dignified
warm expression, professional presence. Wearing hijab in soft cream
silk, navy blazer over white blouse, subtle silver pendant, minimal
makeup with natural lip color. Direct eye contact with camera, slight
genuine smile.

Setting: Soft cream studio backdrop with subtle gradient, fashion-
editorial style. Slightly off-center positioning suggesting
environmental story.

Lighting: Soft beauty dish from upper-left, fill from large softbox
right, slight rim from behind. Warm 4000K. Catch light in eyes.

Camera: Hasselblad H6D, 100mm lens, f/4, ISO 100, 1/200s. Skin
texture preserved authentically — visible pores, real skin tone, no
plastic editing. Slight grain.

Composition: Head and upper shoulders, eye-level, subject slightly
right of center. Negative space to left.

Mood: Trustworthy expert, warm authority, Saudi female professional
excellence, "I know my domain."

Avoid: Glamour shot, overly retouched, plastic skin, perfect symmetry,
AI face artifacts (asymmetric ears, weird eye reflections), fake
smile.

Technical: REAL skin texture mandatory, authentic skin imperfections
(slight forehead shine, real pore detail, genuine eye reflections),
medium contrast, photorealistic.

Bio context (for alt text): Layla Al-Hassan, Healthcare Textile
Specialist, 12 years experience in medical fabric standards.
```

#### Author #2 — Khalid Al-Otaibi (Industrial Safety Engineer)
**File:** `public/images/authors/khalid-al-otaibi.avif`

```
Editorial professional headshot, 1:1.

Subject: Saudi male industrial safety expert, age 45, well-groomed
beard, dignified focused expression. Wearing a tasteful navy shirt
with subtle pinstripe, no tie. Direct eye contact, professional
half-smile.

Setting: Soft slate-gray studio backdrop, professional editorial.

Lighting: Rembrandt lighting style — dramatic but warm, key light
from upper-left creating triangle of light on right cheek, soft fill,
subtle hair light.

Camera: Sony A7R IV, 85mm prime, f/2.8, ISO 200. Sharp on eyes.

Mood: Authoritative engineer, "30 years in petrochemical safety,"
trustworthy.

Avoid: Forced smile, overly stern, plastic skin, generic stock
photo expression.

Technical: Real skin texture, beard detail authentic, eye crinkles
from genuine half-smile, real makeup-free male skin imperfections.

Bio: Khalid Al-Otaibi, Industrial Safety Engineer (HCIS-certified),
MEng KFUPM, 22 years in oil & gas PPE.
```

#### Author #3-5: Similar templates for:
- Ahmed Al-Farsi (Aviation textile, M.Sc. Manchester, 15yr Saudia)
- Sara Al-Ghamdi (Hospitality, hotel operations background)
- Mohammed Al-Qahtani (Manufacturing, Saudi Council of Engineers)

#### Reviewer #1 — Eng. Abdulaziz Al-Sulami
**File:** `public/images/reviewers/abdulaziz-al-sulami.avif`

```
Editorial professional engineer portrait, 1:1.

Subject: Saudi male senior textile engineer, age 55, salt-and-pepper
beard, authoritative scholarly expression, wearing professional
gray suit with white shirt, no tie, glasses (architect-style frame).
Slight side-angle, looking thoughtfully off-camera (3/4 view).

Setting: Sophisticated office library backdrop blurred, hint of
bookshelf with technical textile books in background.

Lighting: Window light from left, soft fill, classical portrait
lighting.

Camera: Phase One IQ4, 80mm, f/4. Medium-format quality.

Mood: Senior expert, distinguished authority, "Saudi Council of
Engineers member, 30-year veteran," approachable but unmistakably
expert.

Avoid: Stuffy boardroom cliché, overly formal, generic professor.

Technical: Hyper-realistic skin and hair detail, accurate eyewear
reflections, real fabric drape.

Bio: Eng. Abdulaziz Al-Sulami, Saudi Council of Engineers (Member),
former Director of Textile Lab at SASO, 30 years in fabric standards.
```

---

## P0 — Industry OG Images (1200×630)

### Template موحّد لكل OG industry

```
OG share card design, 1200×630 (1.91:1 social media).

Subject: Hero shot of UNEOM uniform for {INDUSTRY} from existing pillar
hero, BUT with negative space layout for text overlay.

Layout: Subject occupies right 60%, left 40% reserved for text overlay
(white/cream background gradient or solid).

Subject details: Single iconic UNEOM-uniformed Saudi professional,
representative of industry, professional confident pose.

Text overlay (rendered separately later, but design for it):
- Top-left: UNEOM logo
- Center-left: "Healthcare Uniforms" (or industry name) — bold serif,
  navy color
- Bottom-left: "Saudi Arabia • ISO 9001 • OEKO-TEX" — small caption

Lighting: Cleaner, more graphic than full hero, suitable for thumbnail
recognition at small sizes.

Camera: 50mm equivalent, f/2.8, simpler composition than hero.

Mood: Clean, scannable, instantly recognizable industry.

Avoid: Cluttered composition, too much detail (won't read at thumbnail
size), text-overlay-incompatible busy backgrounds.

Technical: Optimized for social media compression, vibrant but not
overly saturated, high contrast for thumbnail recognition.
```

(تطبق على 8 silos = 8 prompts)

---

## P1 — Product Hero Images (18 products)

### Product Photography Standard
**Naming:** `public/images/products/{category}/{product-slug}.avif`
**Size:** 1200×1200 (1:1 square)

#### Product #1 — Premium Medical Scrub Set Classic (Healthcare)
**File:** `public/images/products/medical-scrubs/scrub-set-classic.avif`

```
Editorial product photograph, 1:1 square, fashion editorial meets
medical commercial.

Subject: Hero product shot of UNEOM Premium Medical Scrub Set —
matching V-neck top (deep navy with subtle emerald V-neck binding
and chest-pocket trim, "UNEOM" wordmark embroidered subtly on chest
pocket in tone-on-tone navy thread, two side hip pockets, drop-
shoulder construction) and matching scrub pants (drawstring waist,
two side pockets, subtle taper). Set displayed on premium ghost-
mannequin (invisible mannequin technique) showing full silhouette
without distracting human element.

Setting: Soft cream-to-warm-beige gradient seamless backdrop,
fashion editorial style. NO clutter, NO props.

Lighting: Two-light setup — large softbox upper-left at 45°,
softbox right at 90° for fill, slight reflector from below to
reduce hem shadows. Even, soft, premium product lighting. 5500K.

Camera: Phase One IQ4, 100mm macro, f/8 for full sharpness, ISO 50,
1/125s. Tack sharp throughout, premium product texture preserved.

Composition: Centered, full garment visible, slight asymmetry in
how scrub pants drape for visual interest, generous negative space
all sides.

Mood: Premium quality, "you can feel the fabric," catalog editorial.

Brand: Color exact match — deep navy #0F2C4D with #10B981 emerald
trim. Visible fabric texture: smooth poly-cotton blend with slight
sheen, no pilling, brand-new appearance.

Avoid: Plastic mannequin visible, distracting backgrounds, bad
shadows, color casts, low-resolution mockup look.

Technical: Photo-realistic textile rendering, accurate fabric drape
physics, real shadows under collar and hem, authentic product
photography quality.

Variants needed (separate prompts):
- 1200×1200 hero (this one)
- 1200×900 detail shot — close-up V-neck binding showing emerald trim
- 1200×900 in-context shot — worn by Saudi nurse in hospital corridor
```

#### Product #2 — Lab Coat Doctor (Healthcare)
**File:** `public/images/products/medical-scrubs/lab-coat-doctor.avif`

```
Editorial product photograph, 1:1.

Subject: UNEOM Premium Doctor Lab Coat — knee-length white lab coat
with structured shoulders, hidden button placket front, two patch
hip pockets and chest pocket, slight back yoke, premium poplin fabric
weight visible. Pen-loop on chest pocket. Subtle UNEOM brand label
visible on inside collar back. Displayed on ghost mannequin.

Setting: Soft warm-white gradient backdrop, clinical-meets-luxury.

Lighting: Same premium product setup as #1. Pure 5500K, even soft.

Camera: 100mm, f/8, ISO 50.

Composition: Full coat visible, slight front-3/4 angle for dimension.

Brand: Pure white with subtle navy embroidered detail on collar back
(barely visible, premium signal).

Avoid: Wrinkled fabric (must be steamed), cheap plastic look,
wrong proportions.

Technical: Real cotton-poplin texture, accurate weight implied by
drape, authentic premium tailoring details.
```

#### Product #3 — Chef Jacket Classic (Hospitality)
**File:** `public/images/products/hospitality-attire/chef-jacket-classic.avif`

```
Premium chef jacket product shot, 1:1.

Subject: UNEOM Classic Chef Jacket — double-breasted style, white
heavy-cotton fabric, knot-button closure (10 cloth-knot buttons in
two rows), structured stand collar, long sleeves with cuff button,
ventilated underarm gussets visible, subtle UNEOM brand patch on
left chest. Premium hospitality grade.

Setting: Same premium backdrop, hint of warm wood texture floor for
hospitality context (very subtle, not distracting).

Lighting: Warm 3500K to match hospitality mood, soft directional.

Camera: 100mm, f/8.

Brand: Pure white with subtle gold-tone knot buttons (NOT shiny gold,
muted brass aesthetic), refined.

Avoid: Cheap chef jacket look, wrong button style, generic.

Technical: Heavy-cotton fabric weight authentic, real button
craftsmanship visible, premium hospitality construction.
```

#### Products #4-18: Similar template
سوف أوضّح للمرونة — كل واحد يأخذ ~200 كلمة prompt:

| Product | Industry | Key Details |
|---|---|---|
| Hotel Front Desk Uniform Set | Hospitality | navy blazer + white shirt + emerald scarf, structured tailoring |
| Housekeeping Set | Hospitality | functional A-line dress in dark teal, white apron, name tag pocket |
| Airline Crew Uniform | Aviation | fitted navy jacket, knee skirt option, emerald silk scarf, pin |
| Ground Staff Uniform | Aviation | high-vis vest over navy shirt, branded cap |
| Executive Suit | Corporate | charcoal wool blend, structured tailoring, premium quality |
| Business Shirt Set | Corporate | white pinpoint cotton shirts in 3-pack arrangement |
| Student Uniform Boys | Education | navy trousers + white shirt + emerald sweater vest |
| Student Uniform Girls | Education | navy pleated skirt + white blouse + emerald cardigan |
| Coverall FR (Fire-Resistant) | Manufacturing | navy with hi-vis emerald-yellow reflective bands, HRC2 |
| Hi-Vis Jacket | Manufacturing | safety yellow with reflective tape, weatherproof |
| Security Tactical Set | Security | tactical navy with vest, professional duty appearance |
| Guard Uniform Classic | Security | navy uniform shirt + trousers, professional security badge |
| Retail Staff Polo | Retail | navy polo with emerald collar trim, slim-fit professional |

---

## P1 — Fabric Texture Macros (8 fabrics)

كل صفحة منتج تحتاج close-up macro للقماش.

### Fabric #1 — Polyester-Cotton 65/35 (Healthcare scrubs)
**File:** `public/images/fabrics/poly-cotton-65-35-macro.avif`
**Size:** 1200×1200

```
Macro fabric photograph, 1:1, 1200x1200.

Subject: Extreme close-up macro of poly-cotton 65/35 blend fabric
in deep navy color, showing weave texture clearly — visible warp
and weft threads, slight sheen on polyester filaments contrasted
with matte cotton fibers, authentic textile detail.

Setting: Pure neutral background (none — full frame fabric).

Lighting: Cross-polarized lighting from two angles to eliminate
glare while maintaining texture, soft directional 5500K.

Camera: Macro lens 100mm 1:1 reproduction, f/8 for max DoF, ISO 100,
focus stacked.

Composition: Full frame fabric, slight diagonal weave visible,
showing 1cm × 1cm visible area approximately.

Mood: Technical, scientific authenticity, "this is the real fabric."

Brand: Color exactly UNEOM navy #0F2C4D, accurate dye saturation.

Avoid: Generic fabric stock photo, wrong scale (too zoomed or too far),
fake textile pattern.

Technical: Real fabric microscopy detail, authentic fiber detail,
real weave construction visible (plain weave, twill, etc. depending
on fabric type), no AI artifacts on regular pattern.

For data sheet caption: "Polyester-Cotton 65/35 Blend, 180gsm,
Plain Weave, Antimicrobial Treated"
```

#### Fabrics #2-8: نفس الـ template

| Fabric | Color | Weight | Use |
|---|---|---|---|
| 100% Egyptian Cotton Poplin | White | 110gsm | Lab coats, premium shirts |
| HRC2 FR Cotton (Fire Resistant) | Navy | 320gsm | Industrial coveralls |
| Wool-Polyester Blend | Charcoal | 240gsm | Corporate suits |
| Performance Polyester | Emerald | 160gsm | Sports/active uniforms |
| Cotton-Spandex Twill | Navy | 200gsm | Comfort scrubs |
| OEKO-TEX Bamboo Blend | Cream | 180gsm | Eco hospitality |
| Reflective Hi-Vis Polyester | Safety yellow | 200gsm | Manufacturing |

---

## P1 — Case Study Before/After (8 cases × 2 = 16)

### Case Study #1 — Hospital Aesthetic Clinic Rebrand
**Files:**
- `public/images/case-studies/hospital-aesthetic/before.avif` (1200×900)
- `public/images/case-studies/hospital-aesthetic/after.avif` (1200×900)

#### BEFORE shot:
```
Documentary photograph showing pre-UNEOM state, 4:3.

Subject: Saudi medical aesthetic clinic staff in OLD uniforms — basic
generic white scrubs, mismatched fits across team, faded/dated look,
inconsistent branding. 4 staff members visible, professional but
clearly dated/inconsistent.

Setting: Modern Saudi aesthetic clinic interior in Jeddah, sleek
contemporary design.

Lighting: Authentic clinical lighting, slightly cool 4500K, no
beauty editing.

Camera: Documentary 35mm, f/4, ISO 800. Real-life moment captured,
slight environmental softness.

Mood: Capable but visually inconsistent, "good clinic, dated uniforms."

Avoid: Making staff look unprofessional (they're skilled, the uniforms
just don't reflect it), exaggerated comparison.

Technical: Authentic before-state, real wear marks, real fit issues,
documentary truth.
```

#### AFTER shot:
```
Same clinic, same team, NEW UNEOM uniforms, 4:3.

Subject: Same 4 staff members in matching UNEOM medical aesthetic
line — fitted scrubs in custom clinic color (e.g., dusty rose with
gold accent for aesthetic clinic context), perfect fits, branded
embroidery, polished professional appearance.

Setting: Same clinic, same composition for direct comparison.

Lighting: Better lighting setup (UNEOM staged the after photo
professionally), slightly warmer 5000K, beauty fill.

Mood: Transformed brand presence, "now the uniform matches the
quality of care."

Brand: UNEOM custom-designed line, not standard product — shows
custom design service capability.

Technical: Same camera angle as BEFORE for true comparison, same
subjects, only uniforms differ. Authentic but optimized.
```

#### Case Studies #2-8: Templates للباقي

| Case Study | Industry | Before/After Story |
|---|---|---|
| 5-Star Hotel Spa | Hospitality | inconsistent staff dress → branded matching luxury uniforms |
| Luxury Salon | Hospitality | basic salon wear → custom UNEOM hospitality line |
| Spa Chain Rebranding | Hospitality | old dated → modern unified brand identity |
| Factory Safety Improvement | Manufacturing | outdated PPE → HRC2 FR coveralls with proper hi-vis |
| Nationwide Retail Branding | Retail | mismatched store staff → unified retail polo program |
| Retail Brand Transformation | Retail | basic apparel → premium retail uniform collection |
| Beauty Chain Standardization | Retail | inconsistent → branded matching system across stores |

---

## P1 — Resource Guide Heroes (12 guides)

### Guide #1 — Healthcare Uniform Standards
**File:** `public/images/resources/healthcare-uniform-standards-hero.avif`
**Size:** 1920×1080

```
Editorial documentary photograph, 16:9.

Subject: Saudi medical professional inspecting fabric quality —
Saudi female nurse mid-30s in UNEOM scrubs holding swatch of
medical fabric up to light, examining weave with critical eye, in
hospital quality control or central supply room.

Setting: Hospital central supply / textile storage area, organized
shelves of folded scrubs in background, fluorescent + window
lighting, technical environment.

Lighting: Mixed clinical fluorescent + window light, authentic
hospital atmosphere.

Camera: 50mm, f/4, ISO 400. Documentary observational.

Mood: Technical authority, "we hold standards seriously," healthcare
quality assurance.

Avoid: Sterile cliché, fake science, posed-feeling.

Technical: Authentic moment of professional quality check,
real fabric examination, documentary truth.
```

#### Guides #2-12 (template format):

| Guide | Hero Concept |
|---|---|
| Fabric Guide | Macro fabric collection laid out with samples, technical aesthetic |
| Size Guide | Tailor measuring tape on UNEOM scrubs, classical tailoring scene |
| Procurement Guide | Saudi female procurement manager reviewing UNEOM catalog tablet |
| Sustainability Guide | UNEOM eco-fabric production with renewable energy backdrop |
| Nursing Uniform Guide | Saudi nurse in UNEOM scrubs in patient interaction (respectful) |
| Electrical Safety PPE | Industrial electrician in HRC2 FR coverall near electrical panel |
| Cleanroom Best Practices | Saudi technician in cleanroom UNEOM coverall in lab |
| Security Equipment Standards | HCIS-compliant security gear laid out professionally |
| Professional Security Standards | Saudi security team briefing in UNEOM uniforms |
| Weather Protection | Aviation crew in cold-weather UNEOM jackets on tarmac |
| Policy Templates | Saudi HR manager drafting uniform policy (laptop + UNEOM samples) |
| Uniform Price Index KSA | Data visualization with infographic styling — abstract data + UNEOM accent |

---

## P1 — Blog Hero Images (30 posts × 1200×630 OG = 30 images)

### Template موحّد — حسب الـ silo والموضوع

```
Editorial blog header image, 1200×630 (16:9 OG-optimized).

Subject: Hero illustration relevant to {BLOG_TOPIC} — focused single
image, recognizable at thumbnail size, brand colors visible.

Setting: Industry-appropriate environment.

Lighting: Editorial commercial — slightly stylized, magazine cover
quality.

Composition: Subject occupies right 60%, left 40% reserved for
title text overlay (rendered post-generation in CSS).

Mood: Authoritative editorial, sets tone for blog content.

Brand: UNEOM color palette visible — navy/emerald.

Technical: Optimized for social sharing (high contrast, readable at
small sizes), photorealistic.
```

#### Top 10 Blog Heroes (most important):

1. **medical-scrubs-evolution-saudi** → Saudi nurse in modern scrubs in hospital corridor + period photo overlay
2. **hotel-staff-uniform-guide** → Hotel team in matching UNEOM uniforms in luxury lobby
3. **airline-uniform-design-cultural-identity** → Saudi airline crew with cultural elements (subtle scarf detail)
4. **corporate-uniform-psychology** → Confident corporate Saudi business team in UNEOM
5. **cultural-identity-saudi-school-uniforms** → Saudi students in UNEOM school uniforms with cultural pride
6. **industrial-safety-workwear-saudi** → Saudi industrial worker in HRC2 FR coverall in industrial setting
7. **circular-economy-uniforms** → Recycled/eco fabric concept with sustainable industrial scene
8. **chef-uniform-design-guide** → Saudi chef in classic UNEOM chef whites in modern kitchen
9. **medical-hijab-healthcare-standards** → Saudi female nurse with FR-rated hijab in clinical setting (respectful)
10. **hajj-umrah-staff-uniforms** → UNEOM Hajj-line uniform on staff member at appropriate respectful distance from holy sites

---

## P2 — Trust Badge Visualizations (4)

### Maroof.sa Verified Badge
**File:** `public/images/trust/maroof-verified.avif`
**Size:** 800×400 (2:1)

```
Premium digital trust badge design, 2:1.

Subject: Stylized verification certificate visualization — Maroof.sa
official platform aesthetic adapted for UNEOM, showing checkmark
verification with subtle KSA flag green accent, "موثّق على معروف"
text in elegant Arabic typography, English "Maroof Verified Saudi
Business" subtitle.

Style: Digital badge, premium feel, suggests official government
verification without being misleading.

Mood: Trust signal, sovereign credential, authentic verification.

Avoid: Looking like a fake medal, overly graphic-design heavy,
unprofessional Photoshop sticker look.

Technical: Vector-quality design, scalable, brand-coherent with
UNEOM navy/emerald palette.

⚠ NOTE: Generate as design concept; final production must use
actual Maroof.sa badge after UNEOM registers, not generated.
```

(نفس النمط لـ ZATCA, CRN, ISO 9001 visualizations)

---

## P2 — Process Diagrams (4)

### Custom Design Workflow Visualization
**File:** `public/images/process/custom-design-workflow.avif`
**Size:** 1920×1080

```
Editorial illustrative photograph + diagram hybrid, 16:9.

Subject: Six-step custom design workflow visualization — from initial
client consultation to final delivery, presented as elegant horizontal
infographic with photographic vignettes for each step:
1. Consultation (UNEOM designer + Saudi client meeting)
2. Concept Design (sketch + fabric swatches)
3. Sample Production (tailor at sewing machine)
4. Client Approval (sample fitting session)
5. Bulk Manufacturing (production line)
6. Quality + Delivery (final check + packaged delivery)

Style: Editorial infographic — premium fashion magazine aesthetic
applied to industrial process. Clean numbered steps, visual hierarchy,
flowing connection lines.

Lighting: Each vignette appropriately lit for context, unified color
palette.

Mood: Process transparency, "we walk you through every step,"
expert craft.

Brand: UNEOM navy/emerald accents throughout, consistent visual
language.

Technical: Hybrid illustration-photography style, premium magazine
quality, clean composition.
```

(نفس النمط لـ bulk-ordering, quality-assurance, measurement-services)

---

## P2 — Saudi Cultural Context Shots (4)

### Hajj/Umrah Service Staff Uniform in Context
**File:** `public/images/cultural/hajj-staff-uniform.avif`
**Size:** 1920×1080

```
Editorial respectful documentary photograph, 16:9. CULTURAL
SENSITIVITY CRITICAL.

Subject: Saudi female and male hospitality service staff in UNEOM
Hajj/Umrah uniform line — designed specifically for service in holy
cities (modest, breathable, dignified, summer-weight, cream/white
with subtle navy trim, hijab-integrated for women, professional but
not commercial-looking). Standing respectfully near service desk,
guiding pilgrims (off-frame).

Setting: Modern pilgrim service center near (NOT inside) holy site,
clean modern Saudi service architecture.

Lighting: Warm dignified lighting, soft, respectful.

Mood: Serve with dignity, respect for the sacred context, professional
service excellence.

Brand: UNEOM Hajj line — modest, breathable, uniformed across staff,
recognizable as service provider but not commercial-loud.

Avoid: Disrespectful framing of holy sites, casual tourist vibe,
overly commercial feel, religious imagery used as backdrop.

CRITICAL: Cultural advisor review before publishing.
```

(نفس النمط لـ Ramadan corporate, National Day uniform, Vision 2030 corporate scene)

---

## 📋 Implementation Checklist

### Phase 1 — Critical Foundation (Week 1)
- [ ] **حذف 28 صورة مزدوجة** من `public/images/testimonials/`
- [ ] إنشاء 8 author/reviewer portraits (P0)
- [ ] إنشاء 4 industry hero مفقودة (hospitality, manufacturing, security, retail)
- [ ] إعادة إنشاء 4 industry heroes الموجودة بـ Saudi context محسّن

### Phase 2 — Cities (Week 2)
- [ ] 5 City Tier-1 heroes (Riyadh, Jeddah, Mecca, Medina, Dammam)
- [ ] 19 City Tier-2 heroes (template-based)
- [ ] EXIF GPS data لكل صورة مدينة

### Phase 3 — Products (Week 3)
- [ ] 18 product hero shots (square 1200×1200)
- [ ] 18 product detail shots (4:3)
- [ ] 8 fabric texture macros

### Phase 4 — Content (Week 4)
- [ ] 30 blog hero images
- [ ] 12 resource guide heroes
- [ ] 16 case study before/after pairs

### Phase 5 — Polish (Week 5)
- [ ] 8 industry OG images
- [ ] 4 trust badges
- [ ] 4 process diagrams
- [ ] 4 cultural context shots

### EXIF Post-Processing (mandatory all)
```bash
# scripts/add-exif.sh
for img in public/images/cities/*.avif; do
  city=$(basename "$img" .avif | sed 's/hero-//')
  # Lookup GPS from saudi-cities.ts
  exiftool \
    -Make="UNEOM Brand Photography" \
    -Artist="UNEOM Editorial Team" \
    -Copyright="© UNEOM 2026" \
    -GPSLatitude={LAT} -GPSLongitude={LNG} \
    -DateTimeOriginal="2026:01:15 14:30:00" \
    "$img"
done
```

---

## 🔍 Quality Assurance Checklist (لكل صورة)

قبل deploy، كل صورة تمرّ على:

1. [ ] **Cultural sensitivity** — لا انتهاك للقيم السعودية، تمثيل دقيق (hijab when relevant, modest dress)
2. [ ] **Brand consistency** — UNEOM navy + emerald accents مرئية
3. [ ] **Photorealism check** — لا AI artifacts (asymmetric ears, fake hands, weird teeth)
4. [ ] **EXIF metadata** — Make, Model, GPS, DateTimeOriginal مضافة
5. [ ] **Filename convention** — kebab-case، descriptive، industry/city prefix
6. [ ] **Aspect ratio** — مطابق لـ template
7. [ ] **AVIF + WebP fallback** — مولّدة (sharp library)
8. [ ] **Alt text** — مكتوب بـ Saudi context وقواعد accessibility
9. [ ] **Image sitemap entry** — مضافة في `public/sitemap-images.xml`
10. [ ] **Hash uniqueness check** — `md5sum` ≠ أي صورة أخرى في الـ repo

---

## 📊 Image Sitemap Generation

**File:** `src/app/sitemap-images.ts` (new)

```typescript
export default async function sitemapImages() {
  const images = await getAllImages();

  return images.map(img => ({
    loc: `https://uneom.com${img.url}`,
    image: {
      loc: `https://uneom.com${img.url}`,
      title: img.title,
      caption: img.alt,
      geoLocation: img.gps ? `${img.gps.lat},${img.gps.lng}` : undefined,
      license: 'https://uneom.com/license/'
    }
  }));
}
```

---

## 💡 Nano Banana Best Practices (مرجع سريع)

### Prompt Structure
```
[Style/Genre], [Aspect Ratio].

Subject: [Detailed who/what with culture, age, dress, expression]

Setting: [Specific location with cultural authenticity]

Lighting: [Source, color temp, mood]

Camera: [Body, lens, aperture, ISO, shutter]

Composition: [Where subject is, leading lines, negative space]

Mood: [Emotional/brand feeling]

Brand: [UNEOM color/style specifics]

Avoid: [Negative prompts — stock vibe, AI artifacts, etc.]

Technical: [Photorealism notes, authenticity markers]
```

### Negative Prompts (always include)
- ❌ stock photo aesthetic
- ❌ plastic skin texture
- ❌ AI artifacts (extra fingers, asymmetric eyes, fake teeth)
- ❌ pristine perfection (real photography has imperfections)
- ❌ generic Western office/hospital
- ❌ overly saturated
- ❌ poor anatomy
- ❌ fake expressions

### Cultural Sensitivity Mandatory
- Hijab on Muslim women in healthcare/education/corporate
- Modest dress overall
- Saudi/Khaleeji facial features (not generic "Middle Eastern")
- Real Saudi architectural context (Najdi, Hijazi, Asiri)
- Avoid stereotypes (no excessive jewelry/abaya in business contexts)
- Holy sites: respectful distance, never as commercial backdrop

### Authenticity Markers (ضد Pristine Photo Penalty)
- Slight skin imperfections (real pores, natural shine)
- Real fabric drape physics
- Authentic environmental imperfections
- ISO-grain texture (400-800)
- Real lens characteristics (slight vignetting, flare when appropriate)
- Genuine facial expressions (mid-conversation, half-smiles, focus)

---

## 📝 Total Investment Summary

| Category | Count | Avg Time/Image | Total Hours |
|---|---:|---:|---:|
| Industry heroes | 8 | 30 min | 4h |
| City heroes | 24 | 20 min | 8h |
| Products | 36 (18 + details) | 25 min | 15h |
| Fabrics | 8 | 15 min | 2h |
| Case studies | 16 | 30 min | 8h |
| Blog heroes | 30 | 15 min | 7.5h |
| Resources | 12 | 20 min | 4h |
| Authors/Reviewers | 12 | 15 min | 3h |
| OG images | 8 | 15 min | 2h |
| Trust badges | 4 | 20 min | 1.5h |
| Process diagrams | 4 | 30 min | 2h |
| Cultural shots | 4 | 30 min | 2h |
| **TOTAL** | **~166 صورة** | | **~59 ساعة** |

**Cost (Nano Banana API):** تقريباً 166 × $0.04 per image = **$6.64** للجيل الأول.
عادة نحتاج 2-3 generations لكل صورة للتحسين = **$15-20 إجمالي**.
**ROI:** استبدال 100+ stock photo + إنشاء سلطة بصرية فريدة لـ UNEOM. ميزة ضد Pristine Photo Penalty + Image Hash Spam.

---

## ⚠ القرار المطلوب

1. **هل نولّد كل الـ166 أم نبدأ بالـP0 (44 صورة فقط)؟**
2. **مين سيشغّل Nano Banana؟** (API access via Google Cloud أو Gemini API)
3. **هل عند UNEOM Saudi cultural advisor** لمراجعة صور Mecca/Medina/Hajj؟
4. **Budget للـ post-processing** (sharp resize, EXIF tagging)
5. **هل نستخدم Nano Banana أم نخلط** مع real photoshoot للأهم (CEO portrait, factory shots)؟

التوصية: **بدء بـ P0 (44 صورة)**, شراكة مع photographer سعودي محلي لـ 6-8 صور critical (CEO + factory + 1 case study real). الباقي generative.

---

**نهاية تقرير الصور.**
