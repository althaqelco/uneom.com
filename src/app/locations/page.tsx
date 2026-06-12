import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';
import { SAUDI_CITIES } from '@/lib/data/saudi-cities';
import { INDUSTRIES } from '@/lib/data/industries';
import { TrustSignals } from '@/components/seo/TrustSignals';

// ============================================
// SEO METADATA
// ============================================
export const metadata: Metadata = generateMetadata2026({
  title: 'UNEOM Locations Across Saudi Arabia | 24 Cities Served',
  titleAr: 'مواقع يونيوم في السعودية | نخدم 24 مدينة',
  description: 'UNEOM serves 24 cities across Saudi Arabia with professional uniforms. Find us in Riyadh, Jeddah, Dammam, Mecca, Medina, and more. Fast delivery, local expertise.',
  descriptionAr: 'يونيوم تخدم 24 مدينة في السعودية بالأزياء المهنية. نتواجد في الرياض، جدة، الدمام، مكة، المدينة والمزيد. توصيل سريع وخبرة محلية.',
  keywords: ['uniform locations saudi', 'uneom locations', 'uniform delivery saudi arabia', 'uniforms riyadh', 'uniforms jeddah'],
  keywordsAr: ['مواقع يونيوم', 'توصيل أزياء السعودية', 'يونيفورم الرياض'],
  locale: 'en',
  pageType: 'location',
  path: '/locations',
  aiSummary: 'UNEOM has locations and delivery coverage across 24 major Saudi cities. Headquarters in Riyadh with showrooms. We deliver medical, corporate, hospitality, and industrial uniforms to all regions.',
  aiSummaryAr: 'يونيوم لديها تغطية توصيل في 24 مدينة سعودية رئيسية. المقر الرئيسي في الرياض مع صالات عرض. نوصل الأزياء الطبية والمؤسسية والضيافة والصناعية لجميع المناطق.',
});

export const dynamic = 'force-static';

// Group cities by region
function getCitiesByRegion() {
  const regionMap: Record<string, typeof SAUDI_CITIES> = {};
  for (const city of SAUDI_CITIES) {
    if (!regionMap[city.region]) regionMap[city.region] = [];
    regionMap[city.region].push(city);
  }
  return regionMap;
}

// ============================================
// LOCATIONS HUB PAGE
// ============================================
export default function LocationsPage() {
  const regionMap = getCitiesByRegion();
  const topCities = SAUDI_CITIES.filter(c => ['riyadh', 'jeddah', 'dammam', 'mecca', 'medina'].includes(c.slug));

  return (
    <>
      <SEO2026
        title="UNEOM Locations | All Saudi Arabia"
        titleAr="مواقع يونيوم | كل السعودية"
        description="Find UNEOM uniform services across 24 Saudi cities"
        descriptionAr="اعثر على خدمات يونيوم للأزياء في 24 مدينة سعودية"
        locale="en"
        pageType="location"
        mainEntity="UNEOM Saudi Arabia Locations"
        mainEntityAr="مواقع يونيوم في السعودية"
        primaryImage="/images/locations/default-location.jpg"
        primaryImageAlt="UNEOM locations across Saudi Arabia"
        breadcrumbs={[
          { name: 'Locations', nameAr: 'المواقع', url: '/locations' },
        ]}
        conversationalKeywords={['UNEOM locations', 'uniform delivery Saudi Arabia']}
        voiceSearchQueries={['Where is UNEOM located', 'UNEOM delivery areas']}
        certifications={['ISO 9001:2015']}
        clientCount={500}
        yearsInBusiness={20}
        serviceArea={['Saudi Arabia', 'UAE', 'GCC']}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        <Container>
          <div className="py-20 lg:py-28 relative z-10 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-6">
              <span className="text-green-400">📍</span>
              <span className="text-sm font-medium">Serving 24 Saudi Cities</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              UNEOM Locations Across{' '}
              <span className="bg-gradient-to-r from-blue-300 to-purple-300 text-transparent bg-clip-text">
                Saudi Arabia
              </span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto mb-8">
              From Riyadh to Jeddah, Dammam to Tabuk — we deliver premium professional uniforms 
              to every major city in the Kingdom. Climate-tested, locally tailored.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold text-blue-300">24</div>
                <div className="text-sm text-blue-200">Cities</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold text-blue-300">11</div>
                <div className="text-sm text-blue-200">Industries</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold text-blue-300">500+</div>
                <div className="text-sm text-blue-200">Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold text-blue-300">48hr</div>
                <div className="text-sm text-blue-200">Express</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          {/* Top 5 Major Cities */}
          <section className="mb-20">
            <SectionHeading subtitle="Our primary service hubs" centered>
              Major Cities
            </SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {topCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/locations/${city.slug}`}
                  className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
                >
                  <div className="h-2 bg-gradient-to-r from-blue-600 to-purple-600" />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {city.nameEn}
                        </h3>
                        <p className="text-sm text-gray-500 font-medium">{city.nameAr} — {city.region}</p>
                      </div>
                      {city.slug === 'riyadh' && (
                        <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-1 rounded-full">HQ</span>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">🌡️ {city.maxTemp}°C</span>
                      <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">👥 {(city.population / 1000000).toFixed(1)}M</span>
                      <span className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded">{city.dominantIndustries.length} industries</span>
                    </div>

                    <p className="text-gray-600 text-sm mb-4">
                      Delivering to {city.districts.slice(0, 3).join(', ')}{city.districts.length > 3 ? ` +${city.districts.length - 3} more` : ''}
                    </p>

                    <span className="text-blue-600 font-semibold text-sm group-hover:underline">
                      View {city.nameEn} Services →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* All Cities by Region */}
          <section className="mb-20">
            <SectionHeading subtitle="Complete coverage across the Kingdom" centered>
              All 24 Cities by Region
            </SectionHeading>
            <div className="mt-12 space-y-10">
              {Object.entries(regionMap).map(([region, cities]) => (
                <div key={region}>
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full" />
                    {region}
                    <span className="text-sm font-normal text-gray-400">({cities.length} {cities.length === 1 ? 'city' : 'cities'})</span>
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {cities.map((city) => (
                      <Link
                        key={city.slug}
                        href={`/locations/${city.slug}`}
                        className="bg-white rounded-xl border border-gray-100 p-4 text-center hover:shadow-md hover:border-blue-200 transition-all group"
                      >
                        <div className="text-sm font-bold text-gray-900 group-hover:text-blue-600">{city.nameEn}</div>
                        <div className="text-xs text-gray-500 mt-1">{city.nameAr}</div>
                        <div className="text-[10px] text-gray-400 mt-1">🌡️ {city.maxTemp}°C</div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Industries Cross-Reference */}
          <section className="mb-20">
            <SectionHeading subtitle="Find uniforms by industry in any city" centered>
              Industries We Serve
            </SectionHeading>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
              {INDUSTRIES.map((ind) => (
                <div key={ind.slug} className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{ind.icon}</span>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{ind.nameEn}</div>
                      <div className="text-xs text-gray-500">{ind.nameAr}</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {SAUDI_CITIES.filter(c => c.dominantIndustries.includes(ind.slug)).slice(0, 4).map((city) => (
                      <Link
                        key={city.slug}
                        href={`/locations/${city.slug}/${ind.slug}`}
                        className="text-[10px] bg-gray-50 hover:bg-blue-50 text-gray-600 hover:text-blue-600 px-2 py-1 rounded-full transition-colors"
                      >
                        {city.nameEn}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Trust Signals */}
          <TrustSignals />

          {/* CTA */}
          <section className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Uniforms Anywhere in Saudi Arabia?</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              We deliver to all 24 cities. Get a free quote tailored to your location and industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-lg">
                Get Free Quote →
              </Link>
              <Link href="/contact" className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold rounded-xl transition-all">
                Contact Us
              </Link>
            </div>
          </section>
        </Container>
      </main>

      {/* Language Switcher */}
      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-3 text-sm">This page is also available in Arabic</p>
          <Link href="/ar/locations" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg text-sm">
            🇸🇦 العربية
          </Link>
        </div>
      </section>
    </>
  );
}
