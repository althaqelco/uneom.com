import React from 'react';
import { Metadata } from 'next';
import { generateMetadata2026 } from '@/lib/seo-2026';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = generateMetadata2026({
  title: 'Wellness & Fitness Center Uniforms | KSA Health Clubs',
  titleAr: 'أزياء المراكز الرياضية والصحية | يونيوم للياقة البدنية',
  description: 'Performance uniforms for wellness centers, gyms, and health clubs in Saudi Arabia. Moisture-wicking polo shirts, track pants, and trainer apparel.',
  descriptionAr: 'أزياء رياضية عالية الأداء للمراكز الصحية، صالات الجيم، والنوادي في السعودية. قمصان بولو طاردة للعرق، بناطيل رياضية، وملابس المدربين الشخصيين.',
  keywords: ['wellness center uniforms', 'gym staff clothing ksa', 'fitness trainer apparel saudi arabia', 'moisture wicking polo'],
  keywordsAr: ['أزياء النوادي الصحية', 'ملابس مدربي الجيم', 'يونيفورم مراكز اللياقة', 'قمصان رياضية للموظفين', 'ملابس الأندية في السعودية'],
  locale: 'en',
  pageType: 'product',
  path: '/shop/retail-uniforms/wellness-center'
});

export const dynamic = 'force-static';

export default function WellnessCenterUniformsPage() {
  return (
    <>
      <section className="bg-sky-900 text-white">
        <Container>
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Shop', href: '/shop' },
            { label: 'Retail Uniforms', href: '/shop/retail-uniforms' },
            { label: 'Wellness Centers', href: '/shop/retail-uniforms/wellness-center' }
          ]} className="text-sky-200 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Wellness & <span className="text-sky-400">Fitness Center Uniforms</span>
            </h1>
            <p className="text-xl text-sky-100">
              Activewear that works as hard as your team. High-performance, moisture-wicking uniforms designed for gyms, health clubs, and wellness centers in Saudi Arabia.
            </p>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-neutral-900">Performance-Driven Team Apparel</h2>
              <div className="prose prose-lg text-neutral-600">
                <p>
                  In the rapidly growing Saudi fitness and wellness sector, your staff are the ultimate embodiment of your brand's commitment to health and vitality. 
                </p>
                <p>
                  UNEOM's Wellness Center collection bridges the gap between professional retail uniforms and high-end athletic wear. We provide personal trainers, group instructors, and front-desk staff with attire that commands respect while offering complete physical freedom.
                </p>
                <h3>Collection Features</h3>
                <ul>
                  <li><strong>Advanced Moisture Management:</strong> Proprietary Dry-Fit fabrics that rapidly pull sweat away from the body, keeping trainers dry during active sessions.</li>
                  <li><strong>Anti-Odor Technology:</strong> Integrated silver-ion treatments that neutralize odor-causing bacteria.</li>
                  <li><strong>Athletic Polos & Tees:</strong> Featuring raglan sleeves for enhanced shoulder mobility and flatlock seams to prevent chafing.</li>
                  <li><strong>Flexible Bottoms:</strong> Premium track pants and performance shorts with 4-way stretch and secure zipper pockets for keys and timers.</li>
                </ul>
              </div>
            </div>
            <div className="bg-sky-50 p-8 rounded-xl border border-sky-200">
              <h3 className="text-2xl font-bold mb-6 text-sky-900">Equip Your Fitness Team</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-sky-800 mb-1">Gym / Club Name</label>
                  <input type="text" className="w-full p-3 border border-sky-300 rounded-md focus:ring-sky-500 focus:border-sky-500" placeholder="Enter fitness center name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-sky-800 mb-1">Staff Composition</label>
                  <select className="w-full p-3 border border-sky-300 rounded-md focus:ring-sky-500 focus:border-sky-500">
                    <option>Personal Trainers (Activewear)</option>
                    <option>Front Desk & Sales (Smart Casual)</option>
                    <option>Maintenance & Cleaning</option>
                    <option>Full Facility Outfitting</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-sky-800 mb-1">Branding Requirement</label>
                  <select className="w-full p-3 border border-sky-300 rounded-md focus:ring-sky-500 focus:border-sky-500">
                    <option>Embroidered Chest Logo</option>
                    <option>Large Screen Print (Back)</option>
                    <option>Heat Transfer (Sport Style)</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-sky-600 text-white font-bold py-3 rounded-md hover:bg-sky-700 transition">
                  Request Activewear Catalog
                </button>
              </form>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
