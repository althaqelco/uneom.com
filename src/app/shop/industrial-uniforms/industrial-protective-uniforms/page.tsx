import React from 'react';
import { Metadata } from 'next';
import { generateMetadata2026 } from '@/lib/seo-2026';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = generateMetadata2026({
  title: 'Industrial Protective Uniforms & Coveralls | UNEOM KSA',
  titleAr: 'ملابس وأفرولات الحماية الصناعية | يونيوم للزي المهني',
  description: 'High-performance protective coveralls and workwear for heavy industry, manufacturing, and construction. Arc flash and chemical splash resistant uniforms in Saudi Arabia.',
  descriptionAr: 'أفرولات وملابس حماية عالية الأداء لقطاعات الصناعة الثقيلة، التصنيع، والمقاولات. أزياء مقاومة للشرر الكهربائي والرذاذ الكيميائي في السعودية.',
  keywords: ['industrial protective uniforms ksa', 'heavy duty coveralls riyadh', 'arc flash clothing saudi arabia', 'manufacturing workwear'],
  keywordsAr: ['أفرول صناعي', 'ملابس حماية مهنية', 'زي عمال المصانع', 'أفرول مقاوم للكيماويات', 'ملابس السلامة والمقاولات'],
  locale: 'en',
  pageType: 'product',
  path: '/shop/industrial-uniforms/industrial-protective-uniforms'
});

export const dynamic = 'force-static';

export default function IndustrialProtectiveUniformsPage() {
  return (
    <>
      <section className="bg-neutral-900 text-white">
        <Container>
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Shop', href: '/shop' },
            { label: 'Industrial Uniforms', href: '/shop/industrial-uniforms' },
            { label: 'Protective Uniforms', href: '/shop/industrial-uniforms/industrial-protective-uniforms' }
          ]} className="text-neutral-400 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Industrial <span className="text-amber-500">Protective Uniforms</span>
            </h1>
            <p className="text-xl text-neutral-300">
              Engineered for the toughest environments. Premium heavy-duty coveralls and workwear sets offering unparalleled protection for Saudi Arabia's industrial workforce.
            </p>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-neutral-900">Uncompromising Safety and Durability</h2>
              <div className="prose prose-lg text-neutral-600">
                <p>
                  Industrial operations in the Kingdom demand workwear that can withstand extreme physical stress, hazardous materials, and intense climate conditions. UNEOM's Industrial Protective series is built to meet these exact challenges.
                </p>
                <p>
                  Our comprehensive range covers everything from standard poly-cotton boiler suits for general manufacturing to specialized arc-flash and chemical-resistant garments.
                </p>
                <h3>Category Highlights</h3>
                <ul>
                  <li><strong>Heavy-Duty Coveralls:</strong> Double-stitched seams and bar-tacked stress points ensure longevity even in the most demanding jobs.</li>
                  <li><strong>Two-Piece Work Sets:</strong> Matching jackets and cargo trousers offering flexibility for mechanics, technicians, and assembly line workers.</li>
                  <li><strong>Specialized Protection:</strong> Optional fabric treatments for oil resistance, water repellency, and anti-static properties (EN 1149).</li>
                  <li><strong>Ergonomic Design:</strong> Features like action-backs and elasticated waists allow for full range of motion while climbing or lifting.</li>
                </ul>
              </div>
            </div>
            <div className="bg-neutral-50 p-8 rounded-xl border border-neutral-200">
              <h3 className="text-2xl font-bold mb-6 text-neutral-900">Configure Your Workwear Program</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Sector</label>
                  <select className="w-full p-3 border border-neutral-300 rounded-md">
                    <option>Heavy Manufacturing</option>
                    <option>Automotive & Aviation</option>
                    <option>Mining & Drilling</option>
                    <option>General Contracting</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Primary Hazard</label>
                  <select className="w-full p-3 border border-neutral-300 rounded-md">
                    <option>General Wear & Tear (Dirt/Dust)</option>
                    <option>Chemical Splash / Oils</option>
                    <option>Electrical Arc / Static</option>
                    <option>Heat & Welding Sparks</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Number of Workers</label>
                  <input type="number" className="w-full p-3 border border-neutral-300 rounded-md" placeholder="e.g., 500" />
                </div>
                <button type="button" className="w-full bg-amber-600 text-white font-bold py-3 rounded-md hover:bg-amber-700 transition">
                  Contact Technical Sales
                </button>
              </form>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
