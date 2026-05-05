import React from 'react';
import { Metadata } from 'next';
import { generateMetadata2026 } from '@/lib/seo-2026';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = generateMetadata2026({
  title: 'Safety Coveralls & Boiler Suits | Industrial Uniforms KSA',
  titleAr: 'أفرولات السلامة المهنية | ملابس عمال المصانع والمقاولات يونيوم',
  description: 'Durable safety coveralls and poly-cotton boiler suits for general contracting, manufacturing, and maintenance crews in Saudi Arabia.',
  descriptionAr: 'أفرولات سلامة مهنية متينة (بولي-قطن) لعمال المقاولات العامة، التصنيع، وفرق الصيانة في السعودية. مصممة لتحمل ظروف العمل القاسية بأسعار تنافسية.',
  keywords: ['safety coveralls saudi arabia', 'boiler suits riyadh', 'industrial workwear ksa', 'poly-cotton overall', 'mechanic uniform'],
  keywordsAr: ['أفرول سلامة', 'بدلة عمل قطعة واحدة', 'ملابس عمال المقاولات', 'أفرول ميكانيكي', 'أفرول قطن', 'زي عمال مصانع'],
  locale: 'en',
  pageType: 'product',
  path: '/shop/industrial-uniforms/safety-coveralls'
});

export const dynamic = 'force-static';

export default function SafetyCoverallsPage() {
  return (
    <>
      <section className="bg-slate-900 text-white">
        <Container>
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Shop', href: '/shop' },
            { label: 'Industrial Uniforms', href: '/shop/industrial-uniforms' },
            { label: 'Safety Coveralls', href: '/shop/industrial-uniforms/safety-coveralls' }
          ]} className="text-slate-400 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              General <span className="text-amber-500">Safety Coveralls</span>
            </h1>
            <p className="text-xl text-slate-300">
              The backbone of Saudi Arabia's industrial workforce. Durable, breathable, and functional boiler suits designed for everyday protection in general contracting, maintenance, and manufacturing.
            </p>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-neutral-900">Built for the Daily Grind</h2>
              <div className="prose prose-lg text-neutral-600">
                <p>
                  Not every job requires specialized FR or chemical suits, but every worker deserves durable, comfortable protection against general dirt, grime, and minor abrasions. UNEOM's general Safety Coveralls are the industry standard for Saudi Arabia's vast construction and maintenance sectors.
                </p>
                <p>
                  Crafted from high-grade poly-cotton blends (typically 65% Polyester / 35% Cotton), these boiler suits offer the perfect balance between long-lasting durability and breathable comfort in hot environments.
                </p>
                <h3>Coverall Features</h3>
                <ul>
                  <li><strong>Reinforced Construction:</strong> Triple-stitched main seams and bar-tacking at all stress points (pockets, crotch, underarms) prevent tearing during strenuous physical labor.</li>
                  <li><strong>Functional Storage:</strong> Features 6+ pockets including a dedicated rule pocket, pen slots on the sleeve, and secure chest pockets for smartphones or radios.</li>
                  <li><strong>Ease of Movement:</strong> Designed with an elasticated back waist and a pleated 'action back' that allows workers to bend and stretch without restriction.</li>
                  <li><strong>Customizable:</strong> Available in a wide spectrum of corporate colors with optional custom embroidery or screen printing for your company logo.</li>
                </ul>
              </div>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Bulk Contracting Orders</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-1">Company / Contractor Name</label>
                  <input type="text" className="w-full p-3 border border-slate-300 rounded-md focus:ring-slate-500 focus:border-slate-500" placeholder="Enter company name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-1">Fabric Weight Preference</label>
                  <select className="w-full p-3 border border-slate-300 rounded-md focus:ring-slate-500 focus:border-slate-500">
                    <option>Lightweight (Summer / Indoor) - 190gsm</option>
                    <option>Medium Weight (All Season) - 240gsm</option>
                    <option>Heavyweight (Winter / Rough Duty) - 300gsm+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-1">Quantity Required</label>
                  <select className="w-full p-3 border border-slate-300 rounded-md focus:ring-slate-500 focus:border-slate-500">
                    <option>100 - 500 Coveralls</option>
                    <option>500 - 2000 Coveralls</option>
                    <option>2000+ Coveralls</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-amber-600 text-white font-bold py-3 rounded-md hover:bg-amber-700 transition">
                  Request Volume Pricing & Samples
                </button>
              </form>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
