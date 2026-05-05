import React from 'react';
import { Metadata } from 'next';
import { generateMetadata2026 } from '@/lib/seo-2026';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = generateMetadata2026({
  title: 'Daily Office Wear | Smart Casual Corporate Uniforms KSA',
  titleAr: 'أزياء العمل اليومية | ملابس مكتبية للشركات يونيوم',
  description: 'Smart casual daily office wear for modern businesses in Saudi Arabia. Custom-branded polo shirts, chinos, and cardigans that combine professional style with everyday comfort.',
  descriptionAr: 'أزياء عمل يومية (سمارت كاجوال) للشركات الحديثة في السعودية. قمصان بولو مخصصة بالشعار، بناطيل تشينو، وسترات تجمع بين المظهر الاحترافي والراحة اليومية.',
  keywords: ['daily office wear ksa', 'smart casual corporate uniforms', 'company polo shirts riyadh', 'modern workplace attire'],
  keywordsAr: ['أزياء العمل اليومية', 'سمارت كاجوال للشركات', 'بولو شيرت موظفين', 'ملابس مكتبية في السعودية', 'زي موحد كاجوال'],
  locale: 'en',
  pageType: 'product',
  path: '/shop/workplace-uniforms/daily-office-wear'
});

export const dynamic = 'force-static';

export default function DailyOfficeWearPage() {
  return (
    <>
      <section className="bg-slate-800 text-white">
        <Container>
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Shop', href: '/shop' },
            { label: 'Workplace Uniforms', href: '/shop/workplace-uniforms' },
            { label: 'Daily Office Wear', href: '/shop/workplace-uniforms/daily-office-wear' }
          ]} className="text-slate-300 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Daily Office & <span className="text-sky-400">Smart Casual Wear</span>
            </h1>
            <p className="text-xl text-slate-200">
              The modern workplace is evolving. Equip your team with comfortable, smart casual apparel that fosters a cohesive company culture while maintaining a professional image.
            </p>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-neutral-900">Comfort Meets Corporate Identity</h2>
              <div className="prose prose-lg text-neutral-600">
                <p>
                  As Saudi businesses shift toward modern, agile work environments, traditional rigid suits are making way for smart casual "Daily Office Wear". This transition boosts employee morale and comfort without sacrificing brand professionalism.
                </p>
                <p>
                  UNEOM's Daily Office collection is designed for tech startups, creative agencies, and progressive corporate offices that want to project a unified, approachable brand image.
                </p>
                <h3>Collection Highlights</h3>
                <ul>
                  <li><strong>Premium Polo Shirts:</strong> Made from Egyptian cotton pique or performance blends. Features reinforced collars that won't curl over time.</li>
                  <li><strong>Modern Chinos & Slacks:</strong> Stretch-cotton trousers that provide the comfort of denim with the sharp look of dress pants.</li>
                  <li><strong>Layering Essentials:</strong> Lightweight cardigans, quarter-zip pullovers, and softshell jackets perfect for heavily air-conditioned offices.</li>
                  <li><strong>Subtle Branding:</strong> High-density embroidery or tonal silicon prints that display your logo with modern sophistication.</li>
                </ul>
              </div>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <h3 className="text-2xl font-bold mb-6 text-slate-800">Modernize Your Team's Look</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                  <input type="text" className="w-full p-3 border border-slate-300 rounded-md focus:ring-slate-500 focus:border-slate-500" placeholder="Enter company name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Company Industry</label>
                  <select className="w-full p-3 border border-slate-300 rounded-md focus:ring-slate-500 focus:border-slate-500">
                    <option>Technology & IT</option>
                    <option>Creative & Media Agency</option>
                    <option>Logistics & Operations (Office)</option>
                    <option>Other / Startup</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Interested In</label>
                  <select className="w-full p-3 border border-slate-300 rounded-md focus:ring-slate-500 focus:border-slate-500">
                    <option>Branded Polo Shirts</option>
                    <option>Full Smart Casual Sets</option>
                    <option>Winter / AC Jackets</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-sky-600 text-white font-bold py-3 rounded-md hover:bg-sky-700 transition">
                  Request Sample Pack
                </button>
              </form>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
