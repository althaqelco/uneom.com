import React from 'react';
import { Metadata } from 'next';
import { generateMetadata2026 } from '@/lib/seo-2026';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = generateMetadata2026({
  title: 'High-Visibility Safety Vests | Reflective Gear Saudi Arabia',
  titleAr: 'سترات السلامة العاكسة | فيست المهندسين والعمال يونيوم',
  description: 'Lightweight high-visibility safety vests with premium reflective tape. Essential PPE for construction sites, logistics, and traffic management in Saudi Arabia.',
  descriptionAr: 'سترات سلامة عاكسة (فيست) خفيفة الوزن بأشرطة عاكسة ممتازة. معدات حماية شخصية أساسية لمواقع البناء، اللوجستيات، وإدارة المرور في السعودية.',
  keywords: ['high visibility vest saudi arabia', 'reflective safety vest riyadh', 'construction vest ksa', 'traffic safety gear'],
  keywordsAr: ['فيست عاكس', 'سترات مهندسين عاكسة', 'سترة سلامة مرور', 'فيست أصفر نيون', 'معدات حماية شخصية (PPE)'],
  locale: 'en',
  pageType: 'product',
  path: '/shop/industrial-uniforms/high-visibility-vest'
});

export const dynamic = 'force-static';

export default function HighVisibilityVestPage() {
  return (
    <>
      <section className="bg-red-900 text-white">
        <Container>
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Shop', href: '/shop' },
            { label: 'Industrial Uniforms', href: '/shop/industrial-uniforms' },
            { label: 'Hi-Vis Vests', href: '/shop/industrial-uniforms/high-visibility-vest' }
          ]} className="text-red-300 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              High-Visibility <span className="text-red-500">Safety Vests</span>
            </h1>
            <p className="text-xl text-red-100">
              Essential lightweight visibility. Premium reflective vests designed to keep your workforce conspicuous and safe in high-traffic and construction environments across Saudi Arabia.
            </p>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-neutral-900">Lightweight Protection, Maximum Visibility</h2>
              <div className="prose prose-lg text-neutral-600">
                <p>
                  A safety vest is often the most critical and universally required piece of Personal Protective Equipment (PPE) on any active site. UNEOM's High-Visibility Vests provide immediate visual identification for workers without adding thermal burden during the hot Saudi summer.
                </p>
                <p>
                  From simple mesh slip-ons for temporary site visitors to multi-pocket executive surveyor vests for engineers, we supply the complete spectrum of visibility solutions.
                </p>
                <h3>Vest Types & Features</h3>
                <ul>
                  <li><strong>Standard Mesh Vests (Class 2):</strong> Ultra-breathable 100% polyester mesh construction, ideal for extreme heat conditions. Features basic velcro closures.</li>
                  <li><strong>Executive / Surveyor Vests:</strong> Solid front with mesh back. Includes heavy-duty front zipper, transparent ID pocket, pen slots, and large cargo pockets for plans and tablets.</li>
                  <li><strong>Two-Tone Designs:</strong> Combines neon yellow and orange for enhanced daytime contrast against complex backgrounds.</li>
                  <li><strong>Custom Branding:</strong> Large printable area on the back for your company logo or safety slogans (e.g., "Safety First").</li>
                </ul>
              </div>
            </div>
            <div className="bg-red-50 p-8 rounded-xl border border-red-200">
              <h3 className="text-2xl font-bold mb-6 text-red-900">Bulk PPE Procurement</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-red-800 mb-1">Company / Contractor</label>
                  <input type="text" className="w-full p-3 border border-red-300 rounded-md focus:ring-red-500 focus:border-red-500" placeholder="Enter company name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-red-800 mb-1">Vest Style</label>
                  <select className="w-full p-3 border border-red-300 rounded-md focus:ring-red-500 focus:border-red-500">
                    <option>Standard Mesh (Velcro)</option>
                    <option>Executive Multi-Pocket (Zipper)</option>
                    <option>Traffic / Police Style (Reflective Checkered)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-red-800 mb-1">Estimated Quantity</label>
                  <select className="w-full p-3 border border-red-300 rounded-md focus:ring-red-500 focus:border-red-500">
                    <option>100 - 500 Vests</option>
                    <option>500 - 2,000 Vests</option>
                    <option>2,000+ Vests</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-red-600 text-white font-bold py-3 rounded-md hover:bg-red-700 transition">
                  Request Volume Quote
                </button>
              </form>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
