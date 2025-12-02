import React from 'react';
import { Metadata } from 'next';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: '🇸🇦 Leading Professional Uniforms & Workwear Manufacturer in Saudi Arabia | UNEOM',
  description: 'UNEOM is the leading manufacturer of professional uniforms and workwear in Saudi Arabia. We serve healthcare, aviation, hospitality, and corporate sectors with the highest quality standards. Comprehensive service nationwide.',
  keywords: 'professional uniforms Saudi Arabia, workwear manufacturer, UNEOM, medical scrubs, aviation uniforms, industrial uniforms, hospitality attire, corporate uniforms, uniform supplier, Riyadh, Jeddah, Dammam',
  alternates: {
    canonical: 'https://uneom.com',
    languages: {
      'en': 'https://uneom.com',
      'ar': 'https://uneom.com/ar',
    },
  },
  openGraph: {
    title: '🇸🇦 Leading Professional Uniforms & Workwear Manufacturer in Saudi Arabia | UNEOM',
    description: 'UNEOM is the leading manufacturer of professional uniforms and workwear in Saudi Arabia. We serve healthcare, aviation, hospitality, and corporate sectors with the highest quality standards.',
    url: 'https://uneom.com',
    siteName: 'UNEOM Professional Uniforms',
    locale: 'en',
    type: 'website',
  },
};

// Homepage content
const content = {
  hero: {
    title: '🇸🇦 Leading Professional Uniforms & Workwear Manufacturer in Saudi Arabia',
    subtitle: 'Premium quality uniforms for healthcare, aviation, hospitality, and corporate sectors',
    cta: 'Get Quote Now',
    secondaryCta: 'View Products'
  },
  stats: {
    clients: '500+ Satisfied Clients',
    pieces: '50,000+ Uniforms Delivered',
    cities: '13 Cities Served',
    experience: '10+ Years Experience'
  },
  trustSignals: {
    iso: 'ISO 9001 Certified',
    madeInSaudi: 'Made in Saudi Arabia',
    fastDelivery: '48-Hour Delivery',
    warranty: '12-Month Warranty'
  },
  industries: {
    title: 'Industries We Serve',
    subtitle: 'Professional uniforms tailored for every sector',
    healthcare: 'Healthcare',
    aviation: 'Aviation', 
    hospitality: 'Hospitality',
    corporate: 'Corporate',
    education: 'Education',
    manufacturing: 'Manufacturing',
    security: 'Security'
  }
};

export default function HomePage() {
  const locale = 'en';

  const seoData = {
    page: 'homepage',
    locale: locale,
    title: content.hero.title,
    description: content.hero.subtitle,
    keywords: ['professional uniforms', 'workwear', 'UNEOM', 'Saudi Arabia', 'medical scrubs', 'aviation uniforms'],
    url: '/',
    image: '/images/og-image.jpg',
    alternateUrls: {
      en: '/',
      ar: '/ar'
    }
  };

  return (
    <>
      <EnhancedSEO2025 {...seoData} />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {content.hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
              {content.hero.subtitle}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="/quote"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-block"
              >
                {content.hero.cta}
              </a>
              <a
                href="/shop"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all inline-block"
              >
                {content.hero.secondaryCta}
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-2">500+</div>
                <div className="text-sm opacity-80">{content.stats.clients}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-2">50K+</div>
                <div className="text-sm opacity-80">{content.stats.pieces}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-2">13</div>
                <div className="text-sm opacity-80">{content.stats.cities}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-2">10+</div>
                <div className="text-sm opacity-80">{content.stats.experience}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">{content.trustSignals.iso}</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🇸🇦</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">{content.trustSignals.madeInSaudi}</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">{content.trustSignals.fastDelivery}</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">{content.trustSignals.warranty}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {content.industries.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {content.industries.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Healthcare */}
            <a href="/industries/healthcare" className="group block">
              <div className="bg-blue-50 hover:bg-blue-100 rounded-lg p-6 transition-colors text-center">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">
                  {content.industries.healthcare}
                </h3>
              </div>
            </a>
            
            {/* Aviation */}
            <a href="/industries/aviation" className="group block">
              <div className="bg-sky-50 hover:bg-sky-100 rounded-lg p-6 transition-colors text-center">
                <div className="text-4xl mb-4">✈️</div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-sky-600">
                  {content.industries.aviation}
                </h3>
              </div>
            </a>
            
            {/* Hospitality */}
            <a href="/industries/hospitality" className="group block">
              <div className="bg-orange-50 hover:bg-orange-100 rounded-lg p-6 transition-colors text-center">
                <div className="text-4xl mb-4">🏨</div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-orange-600">
                  {content.industries.hospitality}
                </h3>
              </div>
            </a>
            
            {/* Corporate */}
            <a href="/industries/corporate" className="group block">
              <div className="bg-gray-50 hover:bg-gray-100 rounded-lg p-6 transition-colors text-center">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                  {content.industries.corporate}
                </h3>
              </div>
            </a>
            
            {/* Education */}
            <a href="/industries/education" className="group block">
              <div className="bg-green-50 hover:bg-green-100 rounded-lg p-6 transition-colors text-center">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-green-600">
                  {content.industries.education}
                </h3>
              </div>
            </a>
            
            {/* Manufacturing */}
            <a href="/industries/manufacturing" className="group block">
              <div className="bg-yellow-50 hover:bg-yellow-100 rounded-lg p-6 transition-colors text-center">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-yellow-600">
                  {content.industries.manufacturing}
                </h3>
              </div>
            </a>
            
            {/* Security */}
            <a href="/industries/security" className="group block">
              <div className="bg-red-50 hover:bg-red-100 rounded-lg p-6 transition-colors text-center">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-red-600">
                  {content.industries.security}
                </h3>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Language Switcher */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">Also available in Arabic | متوفر أيضاً باللغة العربية</p>
          <a
            href="/ar"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            العربية
          </a>
        </div>
      </section>
    </>
  );
}
