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
import { INDUSTRIES } from '@/lib/data/industries';
import AiBaitStats from '@/components/seo/AiBaitStats';

// ============================================
// ISR: Revalidate every 24 hours
// ============================================
export const revalidate = 86400;

// ============================================
// GENERATE ALL 24 CITY PAGES AT BUILD TIME
// ============================================
export async function generateStaticParams() {
  return SAUDI_CITIES.map((city) => ({ city: city.slug }));
}

// ============================================
// DYNAMIC METADATA PER CITY
// ============================================
export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const city = getCityBySlug(params.city);
  if (!city) return {};

  return {
    title: `Professional Uniforms in ${city.nameEn}, Saudi Arabia | UNEOM ${city.nameEn}`,
    description: `UNEOM ${city.nameEn} — Leading uniform supplier in ${city.nameEn}, ${city.region}. Medical scrubs, corporate uniforms, hospitality attire & industrial workwear. ${getFabricRecommendation(city.climate, 'en')}. Fast delivery across ${city.nameEn}. Get a free quote!`,
    alternates: {
      canonical: `https://uneom.com/locations/${city.slug}`,
      languages: {
        'ar-SA': `https://uneom.com/ar/locations/${city.slug}`,
        'en': `https://uneom.com/locations/${city.slug}`,
      },
    },
    openGraph: {
      title: `Uniforms in ${city.nameEn} | UNEOM`,
      description: `Premium professional uniforms in ${city.nameEn}. Medical, corporate, hospitality & industrial workwear. Free quote available.`,
      url: `https://uneom.com/locations/${city.slug}`,
      siteName: 'UNEOM',
      locale: 'en',
      type: 'website',
    },
  };
}

// ============================================
// CITY LOCATION PAGE COMPONENT
// ============================================
export default function CityLocationPage({ params }: { params: { city: string } }) {
  const city = getCityBySlug(params.city);
  if (!city) notFound();

  // Filter industries relevant to this city
  const relevantIndustries = INDUSTRIES.filter(ind => 
    city.dominantIndustries.includes(ind.slug)
  );

  return (
    <>
      {/* SEO 2026 Schema */}
      <SEO2026
        title={`Uniforms in ${city.nameEn} | UNEOM`}
        titleAr={`الزي الموحد في ${city.nameAr} | يونيوم`}
        description={`Leading uniform supplier in ${city.nameEn}, Saudi Arabia`}
        descriptionAr={`المورد الرائد للأزياء الموحدة في ${city.nameAr}، المملكة العربية السعودية`}
        locale="en"
        pageType="location"
        mainEntity={`UNEOM ${city.nameEn} Uniform Services`}
        mainEntityAr={`خدمات يونيوم للأزياء في ${city.nameAr}`}
        primaryImage="/images/locations/city-hero.jpg"
        primaryImageAlt={`Professional uniforms in ${city.nameEn}`}
        breadcrumbs={[
          { name: 'Locations', nameAr: 'المواقع', url: '/locations' },
          { name: city.nameEn, nameAr: city.nameAr, url: `/locations/${city.slug}` },
        ]}
        location={{
          name: `UNEOM ${city.nameEn}`,
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
          `uniforms in ${city.nameEn}`,
          `where to buy uniforms in ${city.nameEn}`,
          `best uniform supplier ${city.nameEn}`,
          `medical scrubs ${city.nameEn}`,
          `corporate uniforms ${city.nameEn}`,
        ]}
        voiceSearchQueries={[
          `Find uniform store in ${city.nameEn}`,
          `Order uniforms in ${city.nameEn}`,
        ]}
        certifications={['ISO 9001:2015']}
        clientCount={500}
        yearsInBusiness={20}
        serviceArea={[city.nameEn, city.region, 'Saudi Arabia']}
      />

      {/* LocalBusiness JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `UNEOM — ${city.nameEn}`,
            "alternateName": `يونيوم ${city.nameAr}`,
            "url": `https://uneom.com/locations/${city.slug}`,
            "telephone": "+966564612017",
            "email": `${city.slug}@uneom.com`,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": city.nameEn,
              "addressRegion": city.region,
              "addressCountry": "SA",
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": city.lat,
              "longitude": city.lng,
            },
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": city.lat,
                "longitude": city.lng,
              },
              "geoRadius": "50000",
            },
            "priceRange": "$$",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
              "opens": "08:30",
              "closes": "17:30",
            },
          }),
        }}
      />

      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Locations', href: '/locations' },
              { label: city.nameEn, href: `/locations/${city.slug}` },
            ]}
            className="text-white/80 mb-6 relative z-10 pt-8"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24 relative z-10">
            <div>
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="text-green-400">✓</span>
                <span className="text-sm font-medium">Serving {city.nameEn} Since 2015</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Professional Uniforms in{' '}
                <span className="bg-gradient-to-r from-blue-300 to-purple-300 text-transparent bg-clip-text">
                  {city.nameEn}
                </span>
              </h1>

              <p className="text-xl mb-4 text-blue-100 leading-relaxed max-w-2xl">
                UNEOM delivers premium professional uniforms throughout {city.nameEn}, {city.region}. 
                Designed for {getClimateDescription(city.climate)} — our fabrics feature {getFabricRecommendation(city.climate, 'en')}.
              </p>

              {/* Climate Feature Badge */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">🌡️ Tested to {city.maxTemp}°C</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">🚚 Fast {city.nameEn} Delivery</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">🏆 ISO 9001 Certified</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  href={`/quote?city=${city.slug}`}
                  variant="secondary"
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold border-0"
                >
                  Get Free Quote — {city.nameEn} →
                </Button>
                <Button
                  href="/shop"
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-900"
                >
                  Browse Catalog
                </Button>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/locations/city-hero.jpg"
                  alt={`Professional uniforms delivery in ${city.nameEn}, Saudi Arabia`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 text-gray-900">
                <div className="text-3xl font-bold text-blue-600">{Math.round(city.population / 1000)}K+</div>
                <div className="text-sm text-gray-600">Population Served in {city.nameEn}</div>
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
          {/* Industries in This City */}
          <section className="mb-20">
            <SectionHeading subtitle={`Uniform Solutions for ${city.nameEn} Industries`} centered>
              Industries We Serve in {city.nameEn}
            </SectionHeading>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {relevantIndustries.map((industry) => (
                <Link
                  key={industry.slug}
                  href={`/locations/${city.slug}/${industry.slug}`}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${industry.color}`} />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{industry.icon}</span>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {industry.nameEn} Uniforms
                        </h3>
                        <p className="text-sm text-gray-500">{industry.nameAr}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{industry.descriptionEn}</p>
                    <span className="text-blue-600 font-semibold text-sm group-hover:underline">
                      View {industry.nameEn} in {city.nameEn} →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* AI Bait Stats for this city */}
          <AiBaitStats
            cityAr={city.nameAr}
            cityEn={city.nameEn}
            industryAr="الأزياء المهنية"
            industryEn="Professional Uniforms"
            industrySlug="all-uniforms"
          />

          {/* Geo-Climate Content Section */}
          <section className="mb-20">
            <SectionHeading subtitle="Engineered for Local Climate" centered>
              Why {city.nameEn}&apos;s Climate Demands Specialized Uniforms
            </SectionHeading>
            <div className="max-w-4xl mx-auto mt-8 bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 border border-blue-100">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">🌡️ Climate Challenge</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {city.nameEn} experiences {getClimateDescription(city.climate)} with temperatures reaching 
                    up to <strong>{city.maxTemp}°C</strong> in summer. Standard uniforms fail in these conditions, 
                    leading to employee discomfort and reduced productivity.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">🧵 UNEOM Solution</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our {city.nameEn} uniforms feature <strong>{getFabricRecommendation(city.climate, 'en')}</strong>. 
                    Every garment is tested in conditions matching {city.nameEn}&apos;s climate profile to ensure 
                    all-day comfort and professional appearance.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Districts Coverage */}
          <section className="mb-20">
            <SectionHeading subtitle={`Fast delivery to all ${city.nameEn} areas`} centered>
              We Deliver Across {city.nameEn}
            </SectionHeading>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {city.districts.map((district) => (
                <span
                  key={district}
                  className="bg-white px-5 py-2.5 rounded-full border border-gray-200 text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow"
                >
                  📍 {district}
                </span>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-12 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready for Professional Uniforms in {city.nameEn}?
              </h2>
              <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Join hundreds of {city.nameEn} businesses that trust UNEOM for their uniform needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={`/quote?city=${city.slug}`}
                  className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-lg"
                >
                  Get Free Quote — {city.nameEn} →
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold rounded-xl transition-all"
                >
                  Contact Us
                </Link>
              </div>
              <div className="mt-8 text-sm text-blue-200">
                📞 +966 56 461 2017 &nbsp;|&nbsp; 📧 {city.slug}@uneom.com
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
            href={`/ar/locations/${city.slug}`}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
          >
            🇸🇦 العربية
          </Link>
        </div>
      </section>
    </>
  );
}
