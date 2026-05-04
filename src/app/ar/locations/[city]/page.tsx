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
import { AiBaitStats } from '@/components/seo/AiBaitStats';

export const revalidate = 86400;

export async function generateStaticParams() {
  return SAUDI_CITIES.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const city = getCityBySlug(params.city);
  if (!city) return {};
  return {
    title: `الزي الموحد في ${city.nameAr} | يونيوم السعودية`,
    description: `يونيوم ${city.nameAr} — المورد الرائد للأزياء المهنية في ${city.nameAr}. سكراب طبي، زي شركات، زي ضيافة وملابس صناعية. ${getFabricRecommendation(city.climate, 'ar')}. توصيل سريع!`,
    alternates: {
      canonical: `https://uneom.com/ar/locations/${city.slug}`,
      languages: { 'en': `https://uneom.com/locations/${city.slug}`, 'ar-SA': `https://uneom.com/ar/locations/${city.slug}` },
    },
  };
}

export default function ArCityPage({ params }: { params: { city: string } }) {
  const city = getCityBySlug(params.city);
  if (!city) notFound();

  const relevantIndustries = INDUSTRIES.filter(ind => city.dominantIndustries.includes(ind.slug));

  return (
    <div dir="rtl" lang="ar">
      <SEO2026
        title={`الزي الموحد في ${city.nameAr} | يونيوم`}
        titleAr={`الزي الموحد في ${city.nameAr}`}
        description={`المورد الرائد للأزياء في ${city.nameAr}`}
        descriptionAr={`المورد الرائد للأزياء الموحدة في ${city.nameAr}، السعودية`}
        locale="ar"
        pageType="location"
        mainEntity={`خدمات يونيوم في ${city.nameAr}`}
        mainEntityAr={`خدمات يونيوم للأزياء في ${city.nameAr}`}
        primaryImage="/images/locations/city-hero.jpg"
        primaryImageAlt={`أزياء مهنية في ${city.nameAr}`}
        breadcrumbs={[
          { name: 'Locations', nameAr: 'المواقع', url: '/ar/locations' },
          { name: city.nameEn, nameAr: city.nameAr, url: `/ar/locations/${city.slug}` },
        ]}
        location={{
          name: `يونيوم ${city.nameAr}`,
          address: `${city.districts[0] || ''}, ${city.nameAr}`,
          city: city.nameAr,
          region: city.regionAr,
          country: 'المملكة العربية السعودية',
          phone: '+971558164922',
          email: `${city.slug}@uneom.com`,
          latitude: city.lat,
          longitude: city.lng,
        }}
        conversationalKeywords={[`يونيفورم ${city.nameAr}`, `مورد أزياء ${city.nameAr}`]}
        voiceSearchQueries={[`أين أشتري يونيفورم في ${city.nameAr}`]}
        certifications={['ISO 9001:2015']}
        clientCount={500}
        yearsInBusiness={20}
        serviceArea={[city.nameAr, city.regionAr]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent" />
        <Container>
          <Breadcrumbs
            items={[
              { label: 'الرئيسية', href: '/ar' },
              { label: 'المواقع', href: '/ar/locations' },
              { label: city.nameAr, href: `/ar/locations/${city.slug}` },
            ]}
            className="text-white/80 mb-6 relative z-10 pt-8"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="text-green-400">✓</span>
                <span className="text-sm font-medium">نخدم {city.nameAr} منذ 2015</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                الزي الموحد الاحترافي في{' '}
                <span className="bg-gradient-to-r from-blue-300 to-purple-300 text-transparent bg-clip-text">{city.nameAr}</span>
              </h1>
              <p className="text-xl mb-4 text-blue-100 leading-relaxed max-w-2xl">
                يونيوم تقدم أجود الأزياء المهنية في {city.nameAr}، {city.regionAr}. 
                أقمشتنا مصممة لمناخ {getClimateDescription(city.climate, 'ar')} — {getFabricRecommendation(city.climate, 'ar')}.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">🌡️ مختبر حتى {city.maxTemp}°م</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">🚚 توصيل سريع {city.nameAr}</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">🏆 ISO 9001</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href={`/ar/quote?city=${city.slug}`} variant="secondary" size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold border-0">
                  احصل على عرض سعر مجاني — {city.nameAr} ←
                </Button>
                <Button href="/ar/shop" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
                  تصفح الكتالوج
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/locations/city-hero.jpg" alt={`أزياء مهنية في ${city.nameAr}`} fill className="object-cover" priority />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 text-gray-900">
                <div className="text-3xl font-bold text-blue-600">{Math.round(city.population / 1000)}K+</div>
                <div className="text-sm text-gray-600">سكان {city.nameAr}</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Industries */}
      <main className="py-16">
        <Container>
          <section className="mb-20">
            <SectionHeading subtitle={`حلول الزي الموحد لصناعات ${city.nameAr}`} centered>
              القطاعات التي نخدمها في {city.nameAr}
            </SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {relevantIndustries.map((industry) => (
                <Link key={industry.slug} href={`/ar/locations/${city.slug}/${industry.slug}`} className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${industry.color}`} />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{industry.icon}</span>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{industry.nameAr}</h3>
                        <p className="text-sm text-gray-500">{industry.nameEn}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{industry.descriptionAr}</p>
                    <span className="text-blue-600 font-semibold text-sm group-hover:underline">
                      عرض {industry.nameAr} في {city.nameAr} ←
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <AiBaitStats cityAr={city.nameAr} cityEn={city.nameEn} industryAr="الأزياء المهنية" industryEn="Professional Uniforms" industrySlug="all-uniforms" />

          {/* Districts */}
          <section className="mb-20">
            <SectionHeading subtitle={`توصيل سريع لجميع مناطق ${city.nameAr}`} centered>
              نوصل لكل أحياء {city.nameAr}
            </SectionHeading>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {city.districts.map((d) => (
                <span key={d} className="bg-white px-5 py-2.5 rounded-full border border-gray-200 text-sm font-medium text-gray-700 shadow-sm">📍 {d}</span>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">تحتاج أزياء مهنية في {city.nameAr}؟</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">انضم لمئات المؤسسات في {city.nameAr} التي تثق بيونيوم.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/ar/quote?city=${city.slug}`} className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-lg">
                احصل على عرض سعر مجاني ←
              </Link>
              <Link href="/ar/contact" className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold rounded-xl transition-all">
                تواصل معنا
              </Link>
            </div>
            <div className="mt-8 text-sm text-blue-200">📞 +971 55 816 4922 &nbsp;|&nbsp; 📧 {city.slug}@uneom.com</div>
          </section>
        </Container>
      </main>

      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-3 text-sm">This page is also available in English</p>
          <Link href={`/locations/${city.slug}`} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg text-sm">
            🇬🇧 English
          </Link>
        </div>
      </section>
    </div>
  );
}
