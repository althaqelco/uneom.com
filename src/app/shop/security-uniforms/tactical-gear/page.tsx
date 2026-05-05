import React from 'react';
import { Metadata } from 'next';
import { generateMetadata2026 } from '@/lib/seo-2026';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = generateMetadata2026({
  title: 'Tactical Gear & Security Equipment | UNEOM Saudi Arabia',
  titleAr: 'المعدات التكتيكية والأمنية | يونيوم السعودية',
  description: 'Professional tactical gear and security equipment in Saudi Arabia. Discover duty belts, tactical boots, holsters, and high-performance security accessories.',
  descriptionAr: 'معدات تكتيكية وأمنية احترافية في السعودية. اكتشف أحزمة المهام، الأحذية التكتيكية، وحقائب الحفظ، وإكسسوارات الأمن عالية الأداء.',
  keywords: ['tactical gear saudi arabia', 'security equipment ksa', 'duty belts riyadh', 'tactical boots', 'security guard accessories'],
  keywordsAr: ['معدات تكتيكية', 'تجهيزات أمنية', 'حزام مهام', 'بسطار تكتيكي', 'معدات حراس أمن', 'إكسسوارات عسكرية'],
  locale: 'en',
  pageType: 'product',
  path: '/shop/security-uniforms/tactical-gear'
});

export const dynamic = 'force-static';

export default function TacticalGearPage() {
  return (
    <>
      <section className="bg-slate-900 text-white">
        <Container>
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Shop', href: '/shop' },
            { label: 'Security Uniforms', href: '/shop/security-uniforms' },
            { label: 'Tactical Gear', href: '/shop/security-uniforms/tactical-gear' }
          ]} className="text-slate-400 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Tactical Gear & <span className="text-slate-400">Security Equipment</span>
            </h1>
            <p className="text-xl text-slate-300">
              Complete your security uniform with professional-grade tactical gear. Heavy-duty accessories engineered for rapid response and operational readiness in KSA.
            </p>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-neutral-900">Operational Excellence in Every Detail</h2>
              <div className="prose prose-lg text-neutral-600">
                <p>
                  A security professional's effectiveness relies heavily on their equipment. UNEOM provides a comprehensive selection of tactical gear designed to complement our security uniforms, ensuring personnel are fully equipped for any situation in Saudi Arabia.
                </p>
                <p>
                  From high-retention duty belts to lightweight tactical boots designed for long patrols, our equipment meets the rigorous standards required by private security firms and corporate protection teams.
                </p>
                <h3>Essential Tactical Equipment</h3>
                <ul>
                  <li><strong>Heavy-Duty Duty Belts:</strong> Nylon and leather options featuring dual-retention buckles and modular attachment points for radios, flashlights, and cuffs.</li>
                  <li><strong>Tactical Footwear (Boots):</strong> Lightweight, anti-slip boots with side-zips for rapid deployment and reinforced ankle support for extended standing.</li>
                  <li><strong>High-Lumen Flashlights & Holders:</strong> Aviation-grade aluminum flashlights with dedicated belt holsters.</li>
                  <li><strong>Communication Accessories:</strong> Earpieces, radio harnesses, and tactical vests designed for seamless team coordination.</li>
                </ul>
              </div>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Equip Your Security Detail</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-1">Security Company / Organization</label>
                  <input type="text" className="w-full p-3 border border-slate-300 rounded-md focus:ring-slate-500 focus:border-slate-500" placeholder="Enter company name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-1">Equipment Needed</label>
                  <select className="w-full p-3 border border-slate-300 rounded-md focus:ring-slate-500 focus:border-slate-500">
                    <option>Full Tactical Kits (Belts + Boots + Gear)</option>
                    <option>Duty Belts & Pouches Only</option>
                    <option>Tactical Footwear Only</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-1">Number of Personnel</label>
                  <input type="number" className="w-full p-3 border border-slate-300 rounded-md focus:ring-slate-500 focus:border-slate-500" placeholder="e.g., 100" />
                </div>
                <button type="button" className="w-full bg-slate-800 text-white font-bold py-3 rounded-md hover:bg-slate-900 transition">
                  Request Tactical Gear Quote
                </button>
              </form>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
