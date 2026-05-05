import React from 'react';
import { Metadata } from 'next';
import { generateMetadata2026 } from '@/lib/seo-2026';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = generateMetadata2026({
  title: 'Welding Coveralls & Leather Aprons | Heavy Duty Workwear KSA',
  titleAr: 'أفرولات لحام ومرايل جلدية | معدات الحماية الشاقة يونيوم',
  description: 'Heavy-duty welding coveralls, leather aprons, and spatter-resistant workwear for metal fabrication and shipyard workers in Saudi Arabia. EN ISO 11611 certified.',
  descriptionAr: 'أفرولات لحام للخدمة الشاقة، ومرايل جلدية مقاومة لشرر اللحام والمعادن المنصهرة. ملابس عمل معتمدة (EN ISO 11611) لعمال تشكيل المعادن في السعودية.',
  keywords: ['welding coveralls ksa', 'leather welding apron', 'spatter resistant uniform saudi arabia', 'metal fabrication workwear'],
  keywordsAr: ['أفرول لحام', 'مريلة جلد للحدادين', 'ملابس لحام', 'بدلة ضد شرر اللحام', 'واقي جلد لحام'],
  locale: 'en',
  pageType: 'product',
  path: '/shop/industrial-uniforms/welding-coverall'
});

export const dynamic = 'force-static';

export default function WeldingCoverallPage() {
  return (
    <>
      <section className="bg-stone-900 text-white">
        <Container>
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Shop', href: '/shop' },
            { label: 'Industrial Uniforms', href: '/shop/industrial-uniforms' },
            { label: 'Welding Gear', href: '/shop/industrial-uniforms/welding-coverall' }
          ]} className="text-stone-400 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Heavy-Duty <span className="text-amber-600">Welding Coveralls</span>
            </h1>
            <p className="text-xl text-stone-300">
              Impenetrable defense against extreme heat and molten metal. EN ISO 11611 certified welding garments designed for Saudi Arabia's heavy manufacturing and fabrication sectors.
            </p>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-neutral-900">Forged for the Fiercest Environments</h2>
              <div className="prose prose-lg text-neutral-600">
                <p>
                  Welding and metal fabrication present unique hazards that standard industrial clothing simply cannot withstand. UNEOM provides specialized welding PPE designed to protect workers from radiant heat, molten metal splashes, and intense UV radiation.
                </p>
                <p>
                  Our welding range complies with EN ISO 11611 standards (Class 1 and Class 2), offering varying levels of protection depending on the welding techniques employed (TIG, MIG, MAG, or heavy structural welding).
                </p>
                <h3>Welding Protection Features</h3>
                <ul>
                  <li><strong>Premium Split Cowhide Leather:</strong> For maximum spatter resistance, we offer heavy-duty leather aprons, sleeves, and gaiters that provide an impenetrable barrier.</li>
                  <li><strong>Treated FR Cotton:</strong> High-density (320gsm+) flame-retardant cotton coveralls that offer flexibility and breathability while resisting sparks and slag.</li>
                  <li><strong>Kevlar® Stitching:</strong> All critical seams are sewn with heat-resistant Kevlar thread to prevent the garment from falling apart under extreme thermal stress.</li>
                  <li><strong>Strategic Design:</strong> Features concealed snap fasteners and angled pockets specifically designed to prevent hot slag from collecting in folds.</li>
                </ul>
              </div>
            </div>
            <div className="bg-stone-100 p-8 rounded-xl border border-stone-200">
              <h3 className="text-2xl font-bold mb-6 text-stone-900">Equip Your Fabrication Team</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Company / Workshop Name</label>
                  <input type="text" className="w-full p-3 border border-stone-300 rounded-md focus:ring-stone-500 focus:border-stone-500" placeholder="Enter business name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Type of Welding Performed</label>
                  <select className="w-full p-3 border border-stone-300 rounded-md focus:ring-stone-500 focus:border-stone-500">
                    <option>Light TIG / Gas Welding (Class 1)</option>
                    <option>Heavy MIG / MMA / Plasma (Class 2)</option>
                    <option>Mixed Fabrication</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Equipment Needed</label>
                  <select className="w-full p-3 border border-stone-300 rounded-md focus:ring-stone-500 focus:border-stone-500">
                    <option>FR Cotton Welding Coveralls</option>
                    <option>Split Leather Aprons & Sleeves</option>
                    <option>Full Welding Kits (Coverall + Leather)</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-amber-600 text-white font-bold py-3 rounded-md hover:bg-amber-700 transition">
                  Request Technical Quote
                </button>
              </form>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
