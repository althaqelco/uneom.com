import React from 'react';
import { Metadata } from 'next';
import { generateMetadata2026 } from '@/lib/seo-2026';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = generateMetadata2026({
  title: 'High-Visibility Coveralls | Reflective Workwear Saudi Arabia',
  titleAr: 'أفرولات السلامة العاكسة | ملابس عمال عالية الوضوح يونيوم',
  description: 'EN ISO 20471 Class 3 high-visibility coveralls for night shifts and low-light environments. Premium reflective workwear for Saudi Arabia\'s logistics and construction sectors.',
  descriptionAr: 'أفرولات سلامة عاكسة (الفئة 3) للورديات الليلية وبيئات الإضاءة المنخفضة. ملابس عمل عالية الوضوح لقطاعات الخدمات اللوجستية والمقاولات في السعودية.',
  keywords: ['high visibility coverall ksa', 'reflective workwear riyadh', 'hi-vis boiler suit saudi arabia', 'night shift uniform'],
  keywordsAr: ['أفرول عاكس', 'ملابس عالية الوضوح', 'بدلة عمل ليلية', 'أفرول سلامة عاكس', 'زي مهندسين عاكس'],
  locale: 'en',
  pageType: 'product',
  path: '/shop/industrial-uniforms/high-visibility-coverall'
});

export const dynamic = 'force-static';

export default function HighVisibilityCoverallPage() {
  return (
    <>
      <section className="bg-lime-900 text-white">
        <Container>
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Shop', href: '/shop' },
            { label: 'Industrial Uniforms', href: '/shop/industrial-uniforms' },
            { label: 'Hi-Vis Coveralls', href: '/shop/industrial-uniforms/high-visibility-coverall' }
          ]} className="text-lime-400 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              High-Visibility <span className="text-lime-500">Reflective Coveralls</span>
            </h1>
            <p className="text-xl text-lime-100">
              Maximum visibility for maximum safety. EN ISO 20471 Class 3 certified boiler suits designed to keep your workforce safe during night shifts and in high-traffic zones.
            </p>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-neutral-900">Stand Out in the Dark</h2>
              <div className="prose prose-lg text-neutral-600">
                <p>
                  For industries operating around the clock, low-light conditions pose a severe risk to ground personnel. UNEOM's High-Visibility Coveralls are engineered to ensure workers are seen clearly by vehicle operators and heavy machinery drivers from all angles.
                </p>
                <p>
                  Perfect for aviation tarmac crews, highway maintenance, and overnight construction projects in Saudi Arabia, our hi-vis garments combine extreme durability with life-saving reflectivity.
                </p>
                <h3>Hi-Vis Performance Features</h3>
                <ul>
                  <li><strong>Class 3 Certification:</strong> The highest level of visibility protection under EN ISO 20471, featuring maximum background fluorescent material and retro-reflective tape area.</li>
                  <li><strong>Premium 3M™ Scotchlite™ Tape:</strong> Double-banded tape on the torso, arms, and legs that maintains its reflective properties even after intensive industrial washing.</li>
                  <li><strong>Fluorescent Dye Technology:</strong> High-fidelity neon yellow and orange dyes treated to resist fading under the harsh Saudi sun.</li>
                  <li><strong>Contrast Paneling:</strong> Navy or black fabric strategically placed in high-dirt areas (knees and cuffs) to maintain a clean, professional appearance.</li>
                </ul>
              </div>
            </div>
            <div className="bg-lime-50 p-8 rounded-xl border border-lime-200">
              <h3 className="text-2xl font-bold mb-6 text-lime-900">Secure Your Night Crew</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-lime-800 mb-1">Company / Contractor Name</label>
                  <input type="text" className="w-full p-3 border border-lime-300 rounded-md focus:ring-lime-500 focus:border-lime-500" placeholder="Enter company name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-lime-800 mb-1">Primary Work Environment</label>
                  <select className="w-full p-3 border border-lime-300 rounded-md focus:ring-lime-500 focus:border-lime-500">
                    <option>Highway / Road Construction</option>
                    <option>Airport Tarmac / Aviation</option>
                    <option>Night Logistics & Warehousing</option>
                    <option>General Night Shift Construction</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-lime-800 mb-1">Base Color Preference</label>
                  <select className="w-full p-3 border border-lime-300 rounded-md focus:ring-lime-500 focus:border-lime-500">
                    <option>Neon Yellow (Standard)</option>
                    <option>Neon Orange</option>
                    <option>Two-Tone (Neon + Navy Blue Contrast)</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-lime-600 text-white font-bold py-3 rounded-md hover:bg-lime-700 transition">
                  Request Volume Pricing
                </button>
              </form>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
