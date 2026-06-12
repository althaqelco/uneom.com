import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { SaudiCity, getClimateDescription, getFabricRecommendation } from '@/lib/data/saudi-cities';
import { industries } from '@/lib/data/industries';

/**
 * CityHub — server-rendered fallback hub for cities that have a pSEO
 * city×industry matrix but no rich office page in lib/data/locations.ts.
 * Purpose: every /locations/{city}/ URL referenced by the footer, the
 * homepage city grid, and the cross-page breadcrumbs resolves to a real,
 * useful, internally-linked page (previously a 404 / soft-404).
 */
export default function CityHub({ city, locale }: { city: SaudiCity; locale: 'en' | 'ar' }) {
  const isAr = locale === 'ar';
  const prefix = isAr ? '/ar' : '';
  const cityName = isAr ? city.nameAr : city.nameEn;
  const regionName = isAr ? city.regionAr : city.region;
  const climate = getClimateDescription(city.climate, locale);
  const fabric = getFabricRecommendation(city.climate, locale);
  const cityIndustries = industries.filter(i => city.dominantIndustries.includes(i.id));
  const otherIndustries = industries.filter(i => !city.dominantIndustries.includes(i.id));
  const populationM = (city.population / 1_000_000).toFixed(1);

  return (
    <main dir={isAr ? 'rtl' : 'ltr'} lang={locale}>
      {/* Hero */}
      <section className="relative bg-primary-900 text-white">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/locations/default-location.jpg"
            alt={isAr ? `توريد الزي الموحد في ${cityName}` : `Uniform supply in ${cityName}`}
            fill
            className="object-cover"
            priority
          />
        </div>
        <Container>
          <div className="relative py-20">
            <nav aria-label={isAr ? 'مسار التنقل' : 'Breadcrumb'} className="mb-6 text-sm text-white/80">
              <Link href={`${prefix}/`} className="hover:text-white">{isAr ? 'الرئيسية' : 'Home'}</Link>
              <span className="mx-2">/</span>
              <Link href={`${prefix}/locations/`} className="hover:text-white">{isAr ? 'المواقع' : 'Locations'}</Link>
              <span className="mx-2">/</span>
              <span aria-current="page">{cityName}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {isAr
                ? `الزي الموحد في ${cityName} — تصنيع وتوريد لكل القطاعات`
                : `Uniforms in ${cityName} — Manufacturing & Supply for Every Sector`}
            </h1>
            <p className="text-lg text-white/90 max-w-3xl">
              {isAr
                ? `تورّد يونيوم الأزياء المهنية والزي الموحد للمنشآت في ${cityName} (${regionName}) — من السكراب الطبي إلى أزياء الضيافة وملابس السلامة الصناعية، مع التطريز بشعار منشأتك وتسليم موثوق.`
                : `UNEOM supplies professional uniforms to organisations across ${cityName} (${regionName}) — from medical scrubs to hospitality attire and industrial safety workwear, with logo embroidery and dependable delivery.`}
            </p>
          </div>
        </Container>
      </section>

      {/* Local context */}
      <section className="py-14 bg-neutral-50">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-xl font-bold mb-3">{isAr ? 'لماذا التوطين مهم؟' : 'Why local matters'}</h2>
              <p className="text-neutral-700">
                {isAr
                  ? `${climate} — لذلك نوصي عملاءنا في ${cityName} بما يلي: ${fabric}.`
                  : `${climate} — so for ${cityName} clients we recommend: ${fabric}.`}
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-xl font-bold mb-3">{isAr ? 'نطاق الخدمة' : 'Service coverage'}</h2>
              <p className="text-neutral-700">
                {isAr
                  ? `نخدم المنشآت في ${cityName} وعمومها (${populationM} مليون نسمة تقريباً) بما في ذلك أحياء ${city.districts.slice(0, 3).join('، ')} وما حولها.`
                  : `We serve organisations throughout ${cityName} (approx. ${populationM}M residents), including ${city.districts.slice(0, 3).join(', ')} and surrounding districts.`}
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-xl font-bold mb-3">{isAr ? 'طلبات الجملة' : 'Bulk programmes'}</h2>
              <p className="text-neutral-700">
                {isAr
                  ? 'حد أدنى مرن يبدأ من 10 قطع، خصومات كميات تصل إلى 30%، وبرنامج إدارة زي موحد للعقود المستمرة.'
                  : 'Flexible minimums from 10 pieces, volume discounts up to 30%, and a managed uniform programme for ongoing contracts.'}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Industry matrix — the core internal-linking purpose of this hub */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-3">
            {isAr ? `قطاعات نخدمها في ${cityName}` : `Industries we serve in ${cityName}`}
          </h2>
          <p className="text-center text-neutral-600 mb-10">
            {isAr ? 'اختر قطاعك لتفاصيل الأقمشة والمنتجات والتوريد في مدينتك' : 'Pick your sector for fabrics, products and supply details in your city'}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...cityIndustries, ...otherIndustries].map(ind => (
              <Link
                key={ind.id}
                href={`${prefix}/locations/${city.slug}/${ind.id}/`}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all p-7"
              >
                <div className="text-3xl mb-3" aria-hidden="true">{ind.icon}</div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary-600">
                  {isAr ? `${ind.nameAr} في ${cityName}` : `${ind.nameEn} in ${cityName}`}
                </h3>
                <p className="text-sm text-neutral-600 line-clamp-2">
                  {isAr ? ind.descriptionAr : ind.descriptionEn}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-900 text-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              {isAr ? `جاهز لتوريد زي موحد في ${cityName}؟` : `Ready to order uniforms in ${cityName}?`}
            </h2>
            <p className="text-white/85 mb-8">
              {isAr
                ? 'أرسل تفاصيل احتياجك واستلم عرض سعر مفصلاً خلال 24 ساعة عمل.'
                : 'Send your requirements and receive a detailed quotation within 24 business hours.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href={`${prefix}/quote/`} className="inline-block bg-white text-primary-900 font-semibold rounded-xl px-8 py-4 hover:bg-primary-50 transition">
                {isAr ? 'اطلب عرض سعر' : 'Request a Quote'}
              </Link>
              <Link href={`${prefix}/contact/`} className="inline-block border border-white/50 rounded-xl px-8 py-4 hover:bg-white/10 transition">
                {isAr ? 'تواصل معنا' : 'Contact Us'}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
