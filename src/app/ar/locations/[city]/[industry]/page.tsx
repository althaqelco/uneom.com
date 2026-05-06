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

export const revalidate = 86400;

export async function generateStaticParams() {
  const params: { city: string; industry: string }[] = [];
  for (const city of SAUDI_CITIES) {
    for (const ind of INDUSTRIES) {
      params.push({ city: city.slug, industry: ind.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: { city: string; industry: string } }): Promise<Metadata> {
  const city = getCityBySlug(params.city);
  const industry = getIndustryBySlug(params.industry);
  if (!city || !industry) return {};
  return {
    title: `أزياء ${industry.nameAr} في ${city.nameAr} | يونيوم السعودية`,
    description: `اشتري أزياء ${industry.nameAr} في ${city.nameAr}. ${industry.descriptionAr}. ${getFabricRecommendation(city.climate, 'ar')}. توصيل سريع!`,
    alternates: {
      canonical: `https://uneom.com/ar/locations/${city.slug}/${industry.slug}`,
      languages: { 'en': `https://uneom.com/locations/${city.slug}/${industry.slug}`, 'ar-SA': `https://uneom.com/ar/locations/${city.slug}/${industry.slug}` },
    },
  };
}

export default function ArCityIndustryPage({ params }: { params: { city: string; industry: string } }) {
  const city = getCityBySlug(params.city);
  const industry = getIndustryBySlug(params.industry);
  if (!city || !industry) notFound();

  const otherIndustries = INDUSTRIES.filter(ind => ind.slug !== industry.slug && city.dominantIndustries.includes(ind.slug)).slice(0, 4);
  const otherCities = SAUDI_CITIES.filter(c => c.slug !== city.slug && c.dominantIndustries.includes(industry.slug)).slice(0, 6);

  return (
    <div dir="rtl" lang="ar">
      <SEO2026
        title={`أزياء ${industry.nameAr} في ${city.nameAr}`}
        titleAr={`أزياء ${industry.nameAr} في ${city.nameAr}`}
        description={`${industry.descriptionAr} في ${city.nameAr}`}
        descriptionAr={`${industry.descriptionAr} في ${city.nameAr}`}
        locale="ar"
        pageType="location"
        mainEntity={`${industry.nameEn} Uniforms in ${city.nameEn}`}
        mainEntityAr={`أزياء ${industry.nameAr} في ${city.nameAr}`}
        primaryImage="/images/locations/city-hero.jpg"
        primaryImageAlt={`أزياء ${industry.nameAr} في ${city.nameAr}`}
        breadcrumbs={[
          { name: 'Locations', nameAr: 'المواقع', url: '/ar/locations' },
          { name: city.nameEn, nameAr: city.nameAr, url: `/ar/locations/${city.slug}` },
          { name: industry.nameEn, nameAr: industry.nameAr, url: `/ar/locations/${city.slug}/${industry.slug}` },
        ]}
        location={{
          name: `يونيوم ${city.nameAr} — ${industry.nameAr}`,
          address: `${city.districts[0] || ''}, ${city.nameAr}`,
          city: city.nameAr,
          region: city.regionAr,
          country: 'المملكة العربية السعودية',
          phone: '+966564612017',
          email: `${city.slug}@uneom.com`,
          latitude: city.lat,
          longitude: city.lng,
        }}
        conversationalKeywords={[`${industry.nameAr} ${city.nameAr}`, `شراء أزياء ${industry.nameAr} في ${city.nameAr}`]}
        voiceSearchQueries={[`أين أشتري أزياء ${industry.nameAr} في ${city.nameAr}`]}
        certifications={['ISO 9001:2015']}
        clientCount={500}
        yearsInBusiness={20}
        serviceArea={[city.nameAr, city.regionAr]}
        industry={industry.nameAr}
      />

      {/* Hero */}
      <section className={`bg-gradient-to-br ${industry.color} text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent" />
        <Container>
          <Breadcrumbs
            items={[
              { label: 'الرئيسية', href: '/ar' },
              { label: 'المواقع', href: '/ar/locations' },
              { label: city.nameAr, href: `/ar/locations/${city.slug}` },
              { label: industry.nameAr, href: `/ar/locations/${city.slug}/${industry.slug}` },
            ]}
            className="text-white/80 mb-6 relative z-10 pt-8"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="text-2xl">{industry.icon}</span>
                <span className="text-sm font-medium">متخصصون في {industry.nameAr} بـ{city.nameAr}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                أزياء {industry.nameAr} في{' '}
                <span className="underline decoration-white/30 decoration-4 underline-offset-8">{city.nameAr}</span>
              </h1>
              <p className="text-xl mb-4 text-white/90 leading-relaxed max-w-2xl">
                {industry.descriptionAr}. مصممة لمناخ {getClimateDescription(city.climate, 'ar')} في {city.nameAr} — {getFabricRecommendation(city.climate, 'ar')}.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">🌡️ مختبر حتى {city.maxTemp}°م</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">🚚 توصيل {city.nameAr}</span>
                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">🏆 ISO 9001</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href={`/ar/quote?city=${city.slug}&industry=${industry.slug}`} variant="secondary" size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold border-0">
                  عرض سعر {industry.nameAr} — {city.nameAr} ←
                </Button>
                <Button href={`/ar/industries/${industry.slug}`} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
                  تفاصيل {industry.nameAr}
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/locations/city-hero.jpg" alt={`أزياء ${industry.nameAr} في ${city.nameAr}`} fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Content */}
      <main className="py-16">
        <Container>
          <AiBaitStats cityAr={city.nameAr} cityEn={city.nameEn} industryAr={industry.nameAr} industryEn={industry.nameEn} industrySlug={industry.slug} />

          <CognitiveEstimator industryAr={industry.nameAr} industryEn={industry.nameEn} cityAr={city.nameAr} />

          {/* Products */}
          <section className="mb-20">
            <SectionHeading subtitle={`متوفر في ${city.nameAr}`} centered>منتجات {industry.nameAr}</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {industry.products.map((product) => (
                <Link key={product.href} href={`/ar${product.href}`} className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100 p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center text-white text-2xl`}>{industry.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 mb-2">{product.nameAr}</h3>
                  <p className="text-sm text-gray-500 mb-4">{product.name}</p>
                  <span className="text-blue-600 font-semibold text-sm">تسوق الآن ←</span>
                </Link>
              ))}
            </div>
          </section>

          {/* Geo-Climate */}
          <section className="mb-20 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">لماذا يختار متخصصو {industry.nameAr} في {city.nameAr} يونيوم</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>{city.nameAr}</strong> ({city.regionAr}) تضم قطاع {industry.nameAr.toLowerCase()} مزدهراً بتعداد سكاني يبلغ <strong>{(city.population / 1000000).toFixed(1)} مليون</strong> نسمة.
                  مناخ المدينة — {getClimateDescription(city.climate, 'ar')} مع درجات حرارة تصل إلى {city.maxTemp}°م — يتطلب حلول أزياء متخصصة.
                </p>
                <p>
                  أزياء يونيوم لقطاع {industry.nameAr} في {city.nameAr} تتميز بـ <strong>{getFabricRecommendation(city.climate, 'ar')}</strong>، مما يضمن راحة الموظفين طوال يوم العمل.
                </p>
                <p>نوصل لجميع أحياء {city.nameAr} بما في ذلك <strong>{city.districts.join('، ')}</strong>، مع توصيل سريع 48 ساعة للطلبات المؤسسية.</p>
              </div>
            </div>
          </section>

          {/* Internal Links */}
          {otherIndustries.length > 0 && (
            <section className="mb-20">
              <SectionHeading subtitle={`المزيد من حلول الأزياء في ${city.nameAr}`} centered>قطاعات أخرى في {city.nameAr}</SectionHeading>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {otherIndustries.map((ind) => (
                  <Link key={ind.slug} href={`/ar/locations/${city.slug}/${ind.slug}`} className="bg-white rounded-xl border border-gray-100 p-4 text-center hover:shadow-md transition-shadow">
                    <span className="text-2xl block mb-2">{ind.icon}</span>
                    <span className="text-sm font-bold text-gray-800">{ind.nameAr}</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {otherCities.length > 0 && (
            <section className="mb-20">
              <SectionHeading subtitle={`${industry.nameAr} في مدن سعودية أخرى`} centered>{industry.nameAr} في مدن أخرى</SectionHeading>
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                {otherCities.map((c) => (
                  <Link key={c.slug} href={`/ar/locations/${c.slug}/${industry.slug}`} className="bg-white px-5 py-2.5 rounded-full border border-gray-200 text-sm font-medium text-gray-700 shadow-sm hover:shadow-md hover:text-blue-600 transition-all">
                    📍 {c.nameAr}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className={`text-center bg-gradient-to-r ${industry.color} text-white rounded-2xl p-12`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">تحتاج أزياء {industry.nameAr} في {city.nameAr}؟</h2>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">احصل على عرض سعر مخصص لمنشأتك في {city.nameAr}. استشارة مجانية وأسعار تنافسية.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/ar/quote?city=${city.slug}&industry=${industry.slug}`} className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-lg">
                احصل على عرض سعر مجاني ←
              </Link>
              <Link href="/ar/contact" className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold rounded-xl transition-all">
                اتصل بنا الآن
              </Link>
            </div>
          </section>
        </Container>
      </main>

      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-3 text-sm">This page is also available in English</p>
          <Link href={`/locations/${city.slug}/${industry.slug}`} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg text-sm">
            🇬🇧 English
          </Link>
        </div>
      </section>
    </div>
  );
}
