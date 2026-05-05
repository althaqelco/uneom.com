import React from 'react';
import { Metadata } from 'next';
import { generateMetadata2026 } from '@/lib/seo-2026';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = generateMetadata2026({
  title: 'High-Visibility Safety Vests | Industrial PPE Saudi Arabia',
  titleAr: 'سترات السلامة العاكسة | معدات الحماية الصناعية يونيوم',
  description: 'OSHA & EN ISO 20471 compliant high-visibility safety vests for construction, manufacturing, and logistics workers in Saudi Arabia. Custom logo printing available.',
  descriptionAr: 'سترات سلامة عاكسة مطابقة لمواصفات الأوشا (OSHA) و (EN ISO 20471) لعمال المقاولات والمصانع والخدمات اللوجستية في السعودية. يتوفر طباعة الشعار المخصص.',
  keywords: ['safety vests saudi arabia', 'high visibility vests riyadh', 'reflective gear ksa', 'osha compliant vest'],
  keywordsAr: ['سترات السلامة', 'فيست عاكس', 'معدات الحماية الشخصية', 'سترات مهندسين', 'ملابس السلامة المهنية', 'سترات عاكسة للضوء'],
  locale: 'en',
  pageType: 'product',
  path: '/shop/industrial-uniforms/safety-vests'
});

export const dynamic = 'force-static';

export default function SafetyVestsPage() {
  return (
    <>
      <section className="bg-neutral-900 text-white">
        <Container>
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Shop', href: '/shop' },
            { label: 'Industrial Uniforms', href: '/shop/industrial-uniforms' },
            { label: 'Safety Vests', href: '/shop/industrial-uniforms/safety-vests' }
          ]} className="text-neutral-400 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              High-Visibility <span className="text-red-500">Safety Vests</span>
            </h1>
            <p className="text-xl text-neutral-300">
              Be seen, stay safe. Industrial-grade reflective safety vests engineered to meet rigorous international safety standards for the Saudi construction and logistics sectors.
            </p>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-neutral-900">Essential Protection for High-Risk Environments</h2>
              <div className="prose prose-lg text-neutral-600">
                <p>
                  Visibility is the first line of defense in active worksites. UNEOM's collection of high-visibility safety vests is designed specifically for the demanding environments of Saudi Arabia's mega-projects, from NEOM to the Red Sea.
                </p>
                <p>
                  Our vests comply with OSHA and EN ISO 20471 standards, featuring premium 3M Scotchlite™ reflective materials that ensure maximum visibility in both daytime and low-light conditions.
                </p>
                <h3>Technical Specifications</h3>
                <ul>
                  <li><strong>Class 2 & Class 3 Options:</strong> Suitable for varying speed zones and risk levels.</li>
                  <li><strong>Breathable Mesh:</strong> Perfect for the Saudi summer heat, keeping workers cool without compromising safety.</li>
                  <li><strong>Multi-Pocket Design:</strong> Features dedicated pockets for ID cards, radios, and smartphones.</li>
                  <li><strong>Durable Zippers:</strong> Heavy-duty front closures that withstand harsh dust and sand environments.</li>
                </ul>
              </div>
            </div>
            <div className="bg-neutral-50 p-8 rounded-xl border border-neutral-200">
              <h3 className="text-2xl font-bold mb-6 text-neutral-900">Bulk PPE Orders</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Company Name</label>
                  <input type="text" className="w-full p-3 border border-neutral-300 rounded-md" placeholder="Enter contracting company" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Quantity Required</label>
                  <select className="w-full p-3 border border-neutral-300 rounded-md">
                    <option>50-200 Vests</option>
                    <option>201-1000 Vests</option>
                    <option>1000+ Vests</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Customization</label>
                  <select className="w-full p-3 border border-neutral-300 rounded-md">
                    <option>No Customization</option>
                    <option>Company Logo (Screen Print)</option>
                    <option>Role/Title Print on Back</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-red-600 text-white font-bold py-3 rounded-md hover:bg-red-700 transition">
                  Request Commercial Quote
                </button>
              </form>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
