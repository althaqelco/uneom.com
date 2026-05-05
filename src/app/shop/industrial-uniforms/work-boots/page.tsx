import React from 'react';
import { Metadata } from 'next';
import { generateMetadata2026 } from '@/lib/seo-2026';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = generateMetadata2026({
  title: 'Industrial Work Boots | Safety Shoes Saudi Arabia',
  titleAr: 'أحذية السلامة المهنية | سيفتي شوز يونيوم',
  description: 'Heavy-duty steel toe and composite toe work boots for industrial, construction, and petrochemical sites in KSA. Anti-slip, heat-resistant safety footwear.',
  descriptionAr: 'أحذية سلامة مهنية (سيفتي شوز) بمقدمة فولاذية لعمال الصناعة، المقاولات، والبتروكيماويات في السعودية. أحذية مقاومة للانزلاق والحرارة العالية.',
  keywords: ['safety shoes saudi arabia', 'steel toe boots riyadh', 'industrial work boots ksa', 'osha safety footwear', 'anti slip construction boots'],
  keywordsAr: ['سيفتي شوز', 'أحذية سلامة مهنية', 'حذاء سيفتي بمقدمة فولاذية', 'أحذية صناعية', 'أحذية مقاومة للانزلاق', 'حذاء عمل سعودي'],
  locale: 'en',
  pageType: 'product',
  path: '/shop/industrial-uniforms/work-boots'
});

export const dynamic = 'force-static';

export default function WorkBootsPage() {
  return (
    <>
      <section className="bg-neutral-900 text-white">
        <Container>
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Shop', href: '/shop' },
            { label: 'Industrial Uniforms', href: '/shop/industrial-uniforms' },
            { label: 'Work Boots', href: '/shop/industrial-uniforms/work-boots' }
          ]} className="text-neutral-400 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Industrial <span className="text-amber-500">Work Boots & Safety Shoes</span>
            </h1>
            <p className="text-xl text-neutral-300">
              Foundation-level protection. Rugged steel-toe and composite-toe footwear engineered to protect against impact, punctures, and slip hazards in harsh environments.
            </p>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-neutral-900">Total Foot Protection</h2>
              <div className="prose prose-lg text-neutral-600">
                <p>
                  Workplace injuries involving feet are costly and debilitating. UNEOM provides a robust lineup of safety footwear that complies with CE EN ISO 20345 standards, ensuring maximum protection for workers in Saudi Arabia's industrial sectors.
                </p>
                <p>
                  From heavy construction sites to petrochemical plants, our boots combine relentless durability with ergonomic support designed for 12-hour shifts.
                </p>
                <h3>Key Features</h3>
                <ul>
                  <li><strong>Impact Protection:</strong> Choice between traditional steel-toe caps or lightweight composite-toe caps (airport-friendly).</li>
                  <li><strong>Puncture Resistant Midsoles:</strong> Kevlar or steel plates embedded in the sole to prevent injuries from sharp objects like nails.</li>
                  <li><strong>Outsole Technology:</strong> Dual-density PU/Rubber outsoles that offer supreme slip resistance, oil resistance, and heat resistance up to 300°C.</li>
                  <li><strong>Comfort & Hygiene:</strong> Anti-bacterial inner linings and shock-absorbing EVA insoles to reduce fatigue.</li>
                </ul>
              </div>
            </div>
            <div className="bg-neutral-50 p-8 rounded-xl border border-neutral-200">
              <h3 className="text-2xl font-bold mb-6 text-neutral-900">Corporate Footwear Programs</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Company Name</label>
                  <input type="text" className="w-full p-3 border border-neutral-300 rounded-md" placeholder="Enter company name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Industry</label>
                  <select className="w-full p-3 border border-neutral-300 rounded-md">
                    <option>Construction & Contracting</option>
                    <option>Oil, Gas & Petrochemical</option>
                    <option>Logistics & Warehousing</option>
                    <option>Manufacturing</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Estimated Annual Volume</label>
                  <select className="w-full p-3 border border-neutral-300 rounded-md">
                    <option>100-500 Pairs</option>
                    <option>500-2000 Pairs</option>
                    <option>2000+ Pairs</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-amber-600 text-white font-bold py-3 rounded-md hover:bg-amber-700 transition">
                  Request Catalog & Pricing
                </button>
              </form>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
