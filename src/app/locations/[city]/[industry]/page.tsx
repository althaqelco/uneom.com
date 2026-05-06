import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SEO2026 from '@/components/seo/SEO2026';
import { SAUDI_CITIES, getCityBySlug, getClimateDescription, getFabricRecommendation } from '@/lib/data/saudi-cities';
import { INDUSTRIES, getIndustryBySlug } from '@/lib/data/industries';
import AiBaitStats from '@/components/seo/AiBaitStats';
import { CognitiveEstimator } from '@/components/behavior/CognitiveEstimator';

// ============================================
// ISR: Revalidate every 24 hours
// ============================================
export const revalidate = 86400;

// ============================================
// GENERATE ALL CITY×INDUSTRY COMBINATIONS (264 pages)
// ============================================
export async function generateStaticParams() {
  const params: { city: string; industry: string }[] = [];
  for (const city of SAUDI_CITIES) {
    for (const ind of INDUSTRIES) {
      params.push({ city: city.slug, industry: ind.slug });
    }
  }
  return params;
}

// ============================================
// DYNAMIC METADATA
// ============================================
export async function generateMetadata({
  params,
}: {
  params: { city: string; industry: string };
}): Promise<Metadata> {
  const city = getCityBySlug(params.city);
  const industry = getIndustryBySlug(params.industry);
  if (!city || !industry) return {};

  const title = `${industry.nameEn} Uniforms in ${city.nameEn} | UNEOM Saudi Arabia`;
  const description = `Buy premium ${industry.nameEn.toLowerCase()} uniforms in ${city.nameEn}, ${city.region}. ${industry.descriptionEn}. ${getFabricRecommendation(city.climate, 'en')}. Fast delivery. Free quote!`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://uneom.com/locations/${city.slug}/${industry.slug}`,
      languages: {
        'ar-SA': `https://uneom.com/ar/locations/${city.slug}/${industry.slug}`,
        'en': `https://uneom.com/locations/${city.slug}/${industry.slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `https://uneom.com/locations/${city.slug}/${industry.slug}`,
      siteName: 'UNEOM',
      locale: 'en',
      type: 'website',
    },
  };
}

// ============================================
// CITY × INDUSTRY CROSS-PAGE COMPONENT
// ============================================
export default function CityIndustryPage({
  params,
}: {
  params: { city: string; industry: string };
}) {
  const city = getCityBySlug(params.city);
  const industry = getIndustryBySlug(params.industry);
  if (!city || !industry) notFound();

  // Other industries in this city for internal linking
  const otherIndustries = INDUSTRIES.filter(
    (ind) => ind.slug !== industry.slug && city.dominantIndustries.includes(ind.slug)
  ).slice(0, 4);

  // Other cities for this industry for internal linking
  const otherCities = SAUDI_CITIES.filter(
    (c) => c.slug !== city.slug && c.dominantIndustries.includes(industry.slug)
  ).slice(0, 6);

  return (
    <>
      {/* SEO 2026 Schema */}
      <SEO2026
        title={`${industry.nameEn} Uniforms in ${city.nameEn}`}
        titleAr={`أزياء ${industry.nameAr} في ${city.nameAr}`}
        description={`${industry.descriptionEn} in ${city.nameEn}`}
        descriptionAr={`${industry.descriptionAr} في ${city.nameAr}`}
        locale="en"
        pageType="location"
        mainEntity={`${industry.nameEn} Uniforms in ${city.nameEn}`}
        mainEntityAr={`أزياء ${industry.nameAr} في ${city.nameAr}`}
        primaryImage="/images/locations/city-hero.jpg"
        primaryImageAlt={`${industry.nameEn} uniforms in ${city.nameEn}`}
        breadcrumbs={[
          { name: 'Locations', nameAr: 'المواقع', url: '/locations' },
          { name: city.nameEn, nameAr: city.nameAr, url: `/locations/${city.slug}` },
          { name: industry.nameEn, nameAr: industry.nameAr, url: `/locations/${city.slug}/${industry.slug}` },
        ]}
        location={{
          name: `UNEOM ${city.nameEn} — ${industry.nameEn}`,
          address: `${city.districts[0] || ''}, ${city.nameEn}`,
          city: city.nameEn,
          region: city.region,
          country: 'Saudi Arabia',
          phone: '+966564612017',
          email: `${city.slug}@uneom.com`,
          latitude: city.lat,
          longitude: city.lng,
        }}
        conversationalKeywords={[
          `${industry.nameEn.toLowerCase()} uniforms in ${city.nameEn}`,
          `buy ${industry.nameEn.toLowerCase()} uniforms ${city.nameEn}`,
          `${industry.nameEn.toLowerCase()} uniform supplier ${city.nameEn}`,
        ]}
        voiceSearchQueries={[
          `Find ${industry.nameEn.toLowerCase()} uniforms in ${city.nameEn}`,
        ]}
        certifications={['ISO 9001:2015']}
        clientCount={500}
        yearsInBusiness={20}
        serviceArea={[city.nameEn, city.region]}
        industry={industry.nameEn}
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": `${industry.nameEn} Uniform Services — ${city.nameEn}`,
            "provider": {
              "@type": "Organization",
              "name": "UNEOM",
              "url": "https://uneom.com",
            },
            "areaServed": {
              "@type": "City",
              "name": city.nameEn,
              "containedInPlace": { "@type": "Country", "name": "Saudi Arabia" },
            },
            "serviceType": `${industry.nameEn} Uniform Supply`,
            "description": `${industry.descriptionEn} in ${city.nameEn}, ${city.region}, Saudi Arabia`,
            "offers": {
              "@type": "Offer",
              "priceCurrency": "SAR",
              "availability": "https://schema.org/InStock",
            },
          }),
        }}
      />

      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <section className={`bg-gradient-to-br ${industry.color} text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Locations', href: '/locations' },
              { label: city.nameEn, href: `/locations/${city.slug}` },
              { label: industry.nameEn, href: `/locations/${city.slug}/${industry.slug}` },
            ]}
            className="text-white/80 mb-6 relative z-10 pt-8"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="text-2xl">{industry.icon}</span>
                <span className="text-sm font-medium">{industry.nameEn} Specialists in {city.nameEn}</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {industry.nameEn} Uniforms in{' '}
                <span className="underline decoration-white/30 decoration-4 underline-offset-8">
                  {city.nameEn}
                </span>
              </h1>

              <p className="text-xl mb-4 text-white/90 leading-relaxed max-w-2xl">
                {industry.descriptionEn}. Engineered for {city.nameEn}&apos;s {getClimateDescription(city.climate)} with {getFabricRecommendation(city.climate, 'en')}.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">🌡️ {city.maxTemp}°C Rated</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">🚚 {city.nameEn} Delivery</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">🏆 ISO 9001</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">✅ MOH Compliant</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  href={`/quote?city=${city.slug}&industry=${industry.slug}`}
                  variant="secondary"
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold border-0"
                >
                  Get {industry.nameEn} Quote — {city.nameEn} →
                </Button>
                <Button
                  href={`/industries/${industry.slug}`}
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-gray-900"
                >
                  View {industry.nameEn} Details
                </Button>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/locations/city-hero.jpg"
                  alt={`${industry.nameEn} uniforms in ${city.nameEn}`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================ */}
      {/* MAIN CONTENT */}
      {/* ============================================ */}
      <main className="py-16">
        <Container>
          {/* AI Bait Stats */}
          <AiBaitStats
            cityAr={city.nameAr}
            cityEn={city.nameEn}
            industryAr={industry.nameAr}
            industryEn={industry.nameEn}
            industrySlug={industry.slug}
          />

          {/* Interactive Cost Calculator */}
          <CognitiveEstimator
            industryAr={industry.nameAr}
            industryEn={industry.nameEn}
            cityAr={city.nameAr}
          />

          {/* Products for this Industry */}
          <section className="mb-20">
            <SectionHeading subtitle={`Available in ${city.nameEn}`} centered>
              {industry.nameEn} Products
            </SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {industry.products.map((product) => (
                <Link
                  key={product.href}
                  href={product.href}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100 p-8 text-center"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center text-white text-2xl`}>
                    {industry.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{product.nameAr}</p>
                  <span className="text-blue-600 font-semibold text-sm">Shop Now →</span>
                </Link>
              ))}
            </div>
          </section>

          {/* Geo-Climate Expertise */}
          <section className="mb-20 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Why {city.nameEn} {industry.nameEn} Professionals Choose UNEOM
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>{city.nameEn}</strong> ({city.regionAr}) is home to a thriving {industry.nameEn.toLowerCase()} sector
                  with a population of <strong>{(city.population / 1000000).toFixed(1)} million</strong> residents.
                  The city&apos;s {getClimateDescription(city.climate)} — with peak temperatures of {city.maxTemp}°C —
                  demands specialized uniform solutions.
                </p>
                <p>
                  UNEOM&apos;s {industry.nameEn.toLowerCase()} uniforms for {city.nameEn} feature{' '}
                  <strong>{getFabricRecommendation(city.climate, 'en')}</strong>,
                  ensuring employee comfort throughout the workday. All garments undergo rigorous
                  climate-simulation testing before deployment to {city.nameEn} clients.
                </p>
                <p>
                  We deliver to all {city.nameEn} areas including{' '}
                  <strong>{city.districts.join(', ')}</strong>, with express 48-hour delivery
                  available for urgent institutional orders.
                </p>
              </div>
            </div>
          </section>

          {/* Internal Linking: Other Industries in This City */}
          {otherIndustries.length > 0 && (
            <section className="mb-20">
              <SectionHeading subtitle={`More uniform solutions in ${city.nameEn}`} centered>
                Other Industries in {city.nameEn}
              </SectionHeading>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {otherIndustries.map((ind) => (
                  <Link
                    key={ind.slug}
                    href={`/locations/${city.slug}/${ind.slug}`}
                    className="bg-white rounded-xl border border-gray-100 p-4 text-center hover:shadow-md transition-shadow"
                  >
                    <span className="text-2xl block mb-2">{ind.icon}</span>
                    <span className="text-sm font-bold text-gray-800">{ind.nameEn}</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Internal Linking: Same Industry in Other Cities */}
          {otherCities.length > 0 && (
            <section className="mb-20">
              <SectionHeading subtitle={`${industry.nameEn} uniforms in other Saudi cities`} centered>
                {industry.nameEn} in Other Cities
              </SectionHeading>
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                {otherCities.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/locations/${c.slug}/${industry.slug}`}
                    className="bg-white px-5 py-2.5 rounded-full border border-gray-200 text-sm font-medium text-gray-700 shadow-sm hover:shadow-md hover:text-blue-600 transition-all"
                  >
                    📍 {c.nameEn}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className={`text-center bg-gradient-to-r ${industry.color} text-white rounded-2xl p-12 relative overflow-hidden`}>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need {industry.nameEn} Uniforms in {city.nameEn}?
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
                Get a custom quote tailored for your {city.nameEn} {industry.nameEn.toLowerCase()} facility.
                Free consultation, competitive pricing, fast delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={`/quote?city=${city.slug}&industry=${industry.slug}`}
                  className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-lg"
                >
                  Get Free {industry.nameEn} Quote →
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold rounded-xl transition-all"
                >
                  Call Us Now
                </Link>
              </div>
            </div>
          </section>
        </Container>
      </main>

      {/* Language Switcher */}
      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-3 text-sm">This page is also available in Arabic</p>
          <Link
            href={`/ar/locations/${city.slug}/${industry.slug}`}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
          >
            🇸🇦 العربية
          </Link>
        </div>
      </section>
    </>
  );
}
