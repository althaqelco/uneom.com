import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SAUDI_CITIES, getCity } from '@/lib/data/saudi-cities';
import { INDUSTRIES } from '@/lib/data/industries';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CtaBlock } from '@/components/ui/CtaBlock';
import { JsonLd } from '@/lib/seo/JsonLd';
import { localBusinessSchema, faqSchema } from '@/lib/seo/schemas';

export const dynamicParams = false;

export function generateStaticParams() {
  return SAUDI_CITIES.map(c => ({ city: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCity(citySlug);
  if (!city) return {};
  const cityTitleMapAr: Record<string, string> = {
    riyadh: `الزي الموحد الرياض — محل الزي الموحد في الرياض`,
    jeddah: `الزي الموحد جدة — زي موحد جدة ويونيفورم`,
    dammam: `الزي الموحد الدمام — زي موحد للعمال المنطقة الشرقية`,
    mecca: `زي موحد مكة — يونيفورم موسم الحج`,
    medina: `زي موحد المدينة — يونيفورم فنادق ومدارس`,
    khobar: `زي موحد الخبر — يونيفورم المنطقة الشرقية`,
    tabuk: `زي موحد تبوك — يونيفورم منطقة نيوم`,
    abha: `زي موحد أبها — يونيفورم منطقة عسير`,
    'al-qatif': `الزي الموحد القطيف — يونيفورم`,
    'arar': `الزي الموحد عرعر — يونيفورم`,
    'hafar-al-batin': `الزي الموحد حفر الباطن — يونيفورم`,
  };
  const cityDescMapAr: Record<string, string> = {
    riyadh: `محل الزي الموحد في الرياض — سكراب طبي، الزي الموحد للشركات، يونيفورم مدارس وأفرولات. 240+ حساب نشط. معمل خياطة الزي الموحد الرياض. المظهر الطبي الرياض.`,
    jeddah: `زي موحد جدة — يونيفورم مطاعم، يونيفورم خدم، سكراب طبي وزي فنادق لموسم الحج. الزي الموحد الحمدانية وكل أحياء جدة. أقمشة مهندسة لرطوبة البحر الأحمر.`,
    dammam: `الزي الموحد الدمام — أفرولات بمواصفات أرامكو، زي موحد للعمال وملابس سلامة. خدمة الممر البتروكيماوي للمنطقة الشرقية.`,
    mecca: `يونيفورم مكة — زي فنادق، سكراب طبي وزي أمني لموسم الحج. مستودع UNEOM بمكة للاستبدال اليومي.`,
    medina: `زي موحد المدينة — يونيفورم فنادق، سكراب طبي ويونيفورم مدارس للمدينة المنورة.`,
    khobar: `يونيفورم الخبر — الزي الموحد للشركات، أفرولات صناعية وسكراب طبي. خدمة المنطقة الشرقية من عمليات محلية.`,
    'al-qatif': `الزي الموحد القطيف — يونيفورم عاملات، سكراب طبي، وزي موحد للعمال. خدمة القطيف والمنطقة الشرقية مع أوقات تسليم 14-21 يوماً.`,
    'arar': `الزي الموحد عرعر — يونيفورم مدارس، يونيفورم شتوي، وزي موحد للشركات. خدمة منطقة الحدود الشمالية بتوصيل مباشر.`,
    'hafar-al-batin': `الزي الموحد حفر الباطن — أفرولات صناعية، يونيفورم عسكري، وزي موحد للعمال. خدمة منطقة حفر الباطن والقطاع العسكري.`,
  };
  return {
    title: cityTitleMapAr[citySlug] || `الزي الموحد ${city.nameAr} — يونيفورم ${city.nameAr}`,
    description: cityDescMapAr[citySlug] || `برامج زي موحد مهني تخدم ${city.nameAr}، ${city.regionAr}. عمليات UNEOM في الرعاية الصحية والضيافة والطيران والتصنيع.`,
    alternates: {
      canonical: `https://uneom.com/ar/locations/${citySlug}/`,
      languages: {
        en: `https://uneom.com/locations/${citySlug}/`,
        'ar-SA': `https://uneom.com/ar/locations/${citySlug}/`,
        'x-default': `https://uneom.com/locations/${citySlug}/`
      }
    },
    openGraph: {
      title: `UNEOM — برامج الزي الموحّد في ${city.nameAr}`,
      images: [{ url: `/images/cities/hero-${citySlug}.avif`, width: 1920, height: 800 }]
    }
  };
}

export default async function ArCityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: citySlug } = await params;
  const city = getCity(citySlug);
  if (!city) notFound();

  const businessSchema = localBusinessSchema(citySlug, 'ar');
  const anchorIndustries = INDUSTRIES.filter(i => city.anchorIndustries.includes(i.slug));
  const otherIndustries = INDUSTRIES.filter(i => !city.anchorIndustries.includes(i.slug));

  // Build FAQ schema if city has expandedFaqs (use AR for AR page)
  const faqs = city.expandedFaqs?.map(f => ({ q: f.qAr, a: f.aAr })) ?? [];

  return (
    <>
      {businessSchema && <JsonLd data={businessSchema} />}
      {faqs.length > 0 && <JsonLd data={faqSchema(faqs)} />}
      <Breadcrumbs items={[
        { name: 'المدن', path: '/ar/locations/' },
        { name: city.nameAr, path: `/ar/locations/${city.slug}/` }
      ]} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div className="absolute inset-0">
          <picture>
            <source type="image/avif" sizes="100vw" srcSet={`/images/cities/hero-${city.slug}-640.avif 640w, /images/cities/hero-${city.slug}-960.avif 960w, /images/cities/hero-${city.slug}-1440.avif 1440w, /images/cities/hero-${city.slug}.avif 1920w`} />
            <source type="image/webp" sizes="100vw" srcSet={`/images/cities/hero-${city.slug}-640.webp 640w, /images/cities/hero-${city.slug}-960.webp 960w, /images/cities/hero-${city.slug}-1440.webp 1440w, /images/cities/hero-${city.slug}.webp 1920w`} />
            <img
              src={`/images/cities/hero-${city.slug}.avif`}
              alt=""
              role="presentation"
              className="h-full w-full object-cover opacity-50"
              fetchPriority="high"
              decoding="sync"
              width={1920}
              height={800}
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-l from-navy-950/95 via-navy-900/70 to-navy-900/30" aria-hidden />
        </div>
        <div className="relative container-page pt-12 pb-20 sm:pt-16 sm:pb-28">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-300">
              {city.regionAr}
            </span>
            <h1 className="mt-5 text-display-2xl text-white balance">
              UNEOM في <span className="text-accent-400">{city.nameAr}</span>
            </h1>
            <p className="mt-2 text-2xl text-white/80 font-medium" lang="en" dir="ltr">
              {city.nameEn} · {city.region}
            </p>
            <p className="mt-8 text-lg leading-relaxed text-white/85 lg:text-xl pretty">
              برامج زي موحّد في {city.nameAr}: {anchorIndustries.map(i => i.nameAr).join('، ')}. قياسات ميدانية، شحن مجموعات الموظفين الجدد، وتسليم دورات الاستبدال — منسّقة من فريق عمليات واحد.
            </p>
            {city.lastUpdated && (
              <p className="mt-4 text-xs text-white/50">
                آخر تحديث: <time dateTime={city.lastUpdated}>{city.lastUpdated}</time>
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={`/ar/quote/?city=${city.slug}`} className="btn-accent">طلب عرض سعر في {city.nameAr}</Link>
              <Link href="/ar/contact/" className="btn-ghost text-white border border-white/20 hover:bg-white/10 hover:text-white">
                تحدّث مع العمليات
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LOCALIZED ARCHITECT EQUATION */}
      {city.localizedArchitectEquation && (
        <section className="bg-ink-50 border-b border-ink-100">
          <div className="container-page section-tight">
            <div className="grid items-start gap-12 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">
                  معادلة المعمار المحلية
                </span>
                <p className="mt-5 text-display text-navy-900 balance">
                  {city.localizedArchitectEquation.ar}
                </p>
                {city.definitionLockIn && (
                  <blockquote className="mt-8 border-r-4 border-accent-500 bg-white p-6 text-base leading-relaxed text-navy-800 pretty">
                    <span className="block text-xs font-bold uppercase tracking-[0.18em] text-accent-700 mb-2">التعريف</span>
                    {city.definitionLockIn.ar}
                  </blockquote>
                )}
              </div>
              {city.localStat && (
                <div className="card p-8 lg:p-10">
                  <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">المعيار المحلّي</h3>
                  <p className="stat-number mt-6 text-5xl font-extrabold text-navy-900">
                    {city.localStat.value}
                  </p>
                  <p className="mt-2 text-sm text-ink-500">{city.localStat.labelAr}</p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-700 pretty">
                    {city.localStat.contextAr}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CITY PROFILE */}
      {city.cityProfile && (
        <section className="section bg-white">
          <div className="container-page">
            <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.4fr]">
              <SectionHeader
                eyebrow="ملف المدينة"
                title={`${city.nameAr} — الواقع التشغيلي.`}
                lead={`ما تعلّمه فريق عمليات UNEOM في ${city.nameAr} من تسليم برامج الزي عبر هذه المدينة.`}
              />
              <div className="prose prose-lg max-w-none text-ink-700">
                {city.cityProfile.ar.map((para, i) => (
                  <p key={i} className="leading-relaxed pretty">{para}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CLIMATE / LOCAL CONTEXT */}
      {city.climateVocab.length > 0 && (
        <section className="section-tight bg-ink-50 border-y border-ink-100">
          <div className="container-page">
            <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.4fr]">
              <SectionHeader
                eyebrow="السياق المحلي"
                title={`لماذا يهمّ مناخ ${city.nameAr} لأزياءك الموحّدة.`}
                lead="كل مواصفة قماش في UNEOM مُعيَّرة وفق الظروف التشغيلية الفعلية للمدينة التي تُشحَن إليها. هذه هي المصطلحات المحلية التي يختبر مختبرنا النسيجي ضدّها."
              />
              <ul className="space-y-6">
                {city.climateVocab.map(v => (
                  <li key={v.term} className="card p-6">
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-2xl font-bold text-navy-900">{v.term}</span>
                      <span className="text-xs font-bold uppercase tracking-wider text-accent-700">مصطلح محلّي</span>
                    </div>
                    <p className="mt-2 text-base leading-relaxed text-ink-500 pretty">
                      {v.meaningAr}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* ANCHOR INDUSTRIES (with city-specific context) */}
      <section className="section bg-white">
        <div className="container-page">
          <SectionHeader
            eyebrow={`القطاعات الرئيسية · ${city.nameAr}`}
            title={<>أين يتميّز <span className="text-accent-700">برنامج {city.nameAr}</span> من UNEOM.</>}
            lead={`هذه القطاعات الـ ${anchorIndustries.length} لها ثقل اقتصادي في ${city.nameAr} — وقاعدة عملاء راسخة لـ UNEOM في المدينة.`}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {anchorIndustries.map(industry => {
              const ctx = city.industryContext?.[industry.slug];
              return (
                <Link
                  key={industry.slug}
                  href={`/ar/industries/${industry.slug}/`}
                  className="group card-hover p-8"
                >
                  <h3 className="text-xl font-bold text-navy-900 group-hover:text-accent-700 transition-colors">
                    {industry.nameAr} في {city.nameAr}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500 pretty">
                    {ctx?.ar ?? industry.taglineAr}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent-700">
                    القطاع الرئيسي
                    <span className="transition-transform group-hover:-translate-x-1" aria-hidden>←</span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* OTHER INDUSTRIES */}
      <section className="section-tight bg-ink-50">
        <div className="container-page">
          <SectionHeader
            eyebrow="تغطية كاملة للقطاعات"
            title={`UNEOM يخدم هذه القطاعات أيضاً في ${city.nameAr}.`}
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {otherIndustries.map(industry => {
              const ctx = city.industryContext?.[industry.slug];
              return (
                <Link
                  key={industry.slug}
                  href={`/ar/industries/${industry.slug}/`}
                  className="group flex flex-col rounded-xl bg-white px-4 py-3 text-sm font-medium text-navy-900 ring-1 ring-ink-100 transition-all hover:ring-accent-500/40 hover:shadow-elevation"
                >
                  <span className="flex items-center justify-between font-bold">
                    <span>{industry.nameAr}</span>
                    <span className="text-ink-300 transition-transform group-hover:-translate-x-1 group-hover:text-accent-500" aria-hidden>←</span>
                  </span>
                  {ctx?.ar && (
                    <span className="mt-2 text-xs leading-relaxed text-ink-500 line-clamp-2">{ctx.ar}</span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOCAL COMPLIANCE BLOCK */}
      {city.localCompliance && (
        <section className="section bg-white">
          <div className="container-page">
            <SectionHeader
              eyebrow="الالتزام المحلي"
              title={`متطلّبات أمانة ${city.nameAr}.`}
              lead="برامج UNEOM مُعايرة لكلٍّ من الإطار الوطني ومتطلّبات الأمانة الخاصّة بهذه المدينة."
            />
            <article className="mt-12 max-w-3xl bg-ink-50 border border-ink-100 rounded-2xl p-8">
              <header>
                <a
                  href={city.localCompliance.amanahUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-accent-700 hover:underline"
                >
                  {city.localCompliance.amanahAr} ↗
                </a>
                <p className="mt-2 text-xs uppercase tracking-wider text-ink-400">{city.localCompliance.refLabelAr}</p>
              </header>
              <blockquote className="mt-4 border-r-2 border-accent-300 pr-4 text-base leading-relaxed text-ink-700 italic">
                «{city.localCompliance.quoteAr}»
              </blockquote>
            </article>
          </div>
        </section>
      )}

      {/* FAQ */}
      {city.expandedFaqs && city.expandedFaqs.length > 0 && (
        <section className="section bg-ink-50 border-y border-ink-100">
          <div className="container-page">
            <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.4fr]">
              <SectionHeader
                eyebrow="الأسئلة الشائعة"
                title={`أسئلة برنامج ${city.nameAr}.`}
                lead="الأسئلة التي تطرحها فِرَق المشتريات السعودية قبل التوقيع. إجابات مباشرة، بدون التواء تسويقي."
              />
              <div>
                <dl className="divide-y divide-ink-100 border-t border-ink-100">
                  {city.expandedFaqs.map(f => (
                    <div key={f.qAr} className="py-6">
                      <dt className="text-base font-bold text-navy-900">{f.qAr}</dt>
                      <dd className="mt-3 text-sm leading-relaxed text-ink-500 pretty">{f.aAr}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="container-page section">
        <CtaBlock
          dark
          eyebrow="ابدأ برنامجاً"
          heading={`شريك زي موحّد يعمل بالفعل في ${city.nameAr}.`}
          body="أخبرنا عن قطاعك وعدد موظفيك والجدول الزمني. سنعود خلال يوم عمل واحد بمقترح وعيّنات قماش تُشحَن إلى مكتبك."
          primary={{ label: `عرض سعر — ${city.nameAr}`, href: `/ar/quote/?city=${city.slug}` }}
          secondary={{ label: 'تحدّث معنا', href: '/ar/contact/' }}
        />
      </section>
    </>
  );
}
