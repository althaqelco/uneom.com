import React from 'react';
import { Metadata } from 'next';
import { generateMetadata2026 } from '@/lib/seo-2026';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = generateMetadata2026({
  title: 'Chemical Resistant Suits | Petrochemical Workwear Saudi Arabia',
  titleAr: 'بدل الحماية من المواد الكيميائية | ملابس البتروكيماويات يونيوم',
  description: 'EN 13034 compliant chemical resistant suits and coveralls for Saudi Arabia\'s petrochemical and laboratory sectors. Protection against liquid chemicals and splashes.',
  descriptionAr: 'بدل وأفرولات مقاومة للمواد الكيميائية مطابقة لمعيار (EN 13034) لقطاعات البتروكيماويات والمختبرات في السعودية. حماية مؤكدة ضد رذاذ وتناثر السوائل الكيميائية.',
  keywords: ['chemical resistant suit ksa', 'petrochemical uniform saudi arabia', 'acid proof coverall', 'EN 13034 workwear riyadh'],
  keywordsAr: ['بدلة مقاومة للكيماويات', 'ملابس البتروكيماويات', 'أفرول ضد الأسيد', 'ملابس مختبرات', 'حماية كيميائية', 'زي أرامكو'],
  locale: 'en',
  pageType: 'product',
  path: '/shop/industrial-uniforms/chemical-resistant-suit'
});

export const dynamic = 'force-static';

export default function ChemicalResistantSuitPage() {
  return (
    <>
      <section className="bg-emerald-900 text-white">
        <Container>
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Shop', href: '/shop' },
            { label: 'Industrial Uniforms', href: '/shop/industrial-uniforms' },
            { label: 'Chemical Resistant', href: '/shop/industrial-uniforms/chemical-resistant-suit' }
          ]} className="text-emerald-400 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Chemical <span className="text-emerald-400">Resistant Suits</span>
            </h1>
            <p className="text-xl text-emerald-100">
              Critical protection for high-risk environments. Specialized workwear engineered to shield workers from liquid chemicals, acids, and hazardous splashes in the petrochemical sector.
            </p>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-neutral-900">Defend Against Hazardous Splashes</h2>
              <div className="prose prose-lg text-neutral-600">
                <p>
                  Saudi Arabia's thriving petrochemical, pharmaceutical, and manufacturing industries require uncompromised safety standards. UNEOM's Chemical Resistant suits are designed to serve as a reliable barrier between your workforce and hazardous substances.
                </p>
                <p>
                  Our garments are certified to EN 13034 (Type 6) standards, offering limited protective performance against liquid chemicals, ensuring safety during accidental exposure to light sprays or splashes.
                </p>
                <h3>Advanced Fabric Protection</h3>
                <ul>
                  <li><strong>Fluorocarbon Treatment:</strong> The fabric is treated with a specialized repellent finish that forces hazardous liquids, oils, and acids to bead up and roll off rather than absorbing.</li>
                  <li><strong>Seam Integrity:</strong> Engineered with bounded or taped seams to prevent chemical penetration through stitch holes.</li>
                  <li><strong>Multi-Hazard Options:</strong> Available in multi-norm variants that combine chemical resistance with anti-static (EN 1149) and flame-retardant (EN ISO 11612) properties.</li>
                  <li><strong>Breathable Barriers:</strong> Despite the high protection level, the fabric maintains breathability to prevent heat stress during long shifts in Saudi climates.</li>
                </ul>
              </div>
            </div>
            <div className="bg-emerald-50 p-8 rounded-xl border border-emerald-200">
              <h3 className="text-2xl font-bold mb-6 text-emerald-900">Equip Your Plant</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-emerald-800 mb-1">Company / Plant Name</label>
                  <input type="text" className="w-full p-3 border border-emerald-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500" placeholder="Enter facility name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-emerald-800 mb-1">Primary Chemical Hazards</label>
                  <input type="text" className="w-full p-3 border border-emerald-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500" placeholder="e.g., Solvents, Acids, Oils" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-emerald-800 mb-1">Quantity Required</label>
                  <select className="w-full p-3 border border-emerald-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500">
                    <option>50 - 200 Suits</option>
                    <option>200 - 1000 Suits</option>
                    <option>1000+ Suits</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-emerald-600 text-white font-bold py-3 rounded-md hover:bg-emerald-700 transition">
                  Request Technical Specifications
                </button>
              </form>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
