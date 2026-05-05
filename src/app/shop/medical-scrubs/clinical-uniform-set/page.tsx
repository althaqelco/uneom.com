import React from 'react';
import { Metadata } from 'next';
import { generateMetadata2026 } from '@/lib/seo-2026';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = generateMetadata2026({
  title: 'Clinical Uniform Sets | Premium Nursing & Doctor Scrubs KSA',
  titleAr: 'أطقم السكراب الطبي والعيادات | يونيوم',
  description: 'Complete clinical uniform sets for doctors, nurses, and medical staff in Saudi Arabia. Discover anti-microbial, wrinkle-resistant scrubs with ergonomic designs.',
  descriptionAr: 'أطقم سكراب طبي متكاملة للأطباء والممرضين والكوادر الصحية في السعودية. اكتشف أزياء عيادات مقاومة للبكتيريا والتجعد بتصاميم مريحة وعملية.',
  keywords: ['clinical uniform sets ksa', 'nursing scrubs riyadh', 'doctor uniforms saudi arabia', 'anti-microbial medical apparel'],
  keywordsAr: ['سكراب طبي', 'أطقم عيادات', 'زي تمريض', 'ملابس أطباء', 'سكراب مقاوم للبكتيريا', 'أزياء طبية في السعودية'],
  locale: 'en',
  pageType: 'product',
  path: '/shop/medical-scrubs/clinical-uniform-set'
});

export const dynamic = 'force-static';

export default function ClinicalUniformSetPage() {
  return (
    <>
      <section className="bg-teal-900 text-white">
        <Container>
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Shop', href: '/shop' },
            { label: 'Medical Scrubs', href: '/shop/medical-scrubs' },
            { label: 'Clinical Sets', href: '/shop/medical-scrubs/clinical-uniform-set' }
          ]} className="text-teal-200 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Clinical <span className="text-teal-400">Uniform Sets</span>
            </h1>
            <p className="text-xl text-teal-100">
              Advanced medical apparel engineered for the heroes of healthcare. Premium coordinated scrub tops and bottoms featuring anti-microbial technology and four-way stretch.
            </p>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-neutral-900">The Next Generation of Medical Scrubs</h2>
              <div className="prose prose-lg text-neutral-600">
                <p>
                  Healthcare professionals in Saudi Arabia work long, demanding shifts where comfort and hygiene are non-negotiable. UNEOM's Clinical Uniform Sets are designed to move with you, providing athletic-level performance in a professional clinical setting.
                </p>
                <p>
                  Available in a wide spectrum of hospital-approved colors, our complete sets (Top + Pants) eliminate the guesswork of matching separates, ensuring a cohesive and highly professional look for entire departments.
                </p>
                <h3>Advanced Fabric Technology</h3>
                <ul>
                  <li><strong>SILVADUR™ Anti-Microbial:</strong> Treated to inhibit the growth of bacteria and odors, maintaining freshness throughout a 12-hour shift.</li>
                  <li><strong>4-Way Flex-Stretch:</strong> A premium blend of Polyester, Rayon, and Spandex that offers unparalleled freedom of movement.</li>
                  <li><strong>Fluid-Resistant Finish:</strong> Designed to repel liquid splatters, keeping you dry and protected in critical moments.</li>
                  <li><strong>Wrinkle-Free Care:</strong> Pull them straight from the dryer ready to wear—no ironing required.</li>
                </ul>
              </div>
            </div>
            <div className="bg-teal-50 p-8 rounded-xl border border-teal-200">
              <h3 className="text-2xl font-bold mb-6 text-teal-900">Hospital & Clinic Outfitting</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-teal-800 mb-1">Healthcare Facility Name</label>
                  <input type="text" className="w-full p-3 border border-teal-300 rounded-md focus:ring-teal-500 focus:border-teal-500" placeholder="Enter hospital or clinic name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-teal-800 mb-1">Department</label>
                  <select className="w-full p-3 border border-teal-300 rounded-md focus:ring-teal-500 focus:border-teal-500">
                    <option>Nursing</option>
                    <option>Surgery / ER</option>
                    <option>Dental / Specialty Clinic</option>
                    <option>Facility-Wide Rollout</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-teal-800 mb-1">Color Coding Required?</label>
                  <select className="w-full p-3 border border-teal-300 rounded-md focus:ring-teal-500 focus:border-teal-500">
                    <option>Yes (Different colors per department)</option>
                    <option>No (Single uniform color)</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-teal-600 text-white font-bold py-3 rounded-md hover:bg-teal-700 transition">
                  Request Free Samples & Quote
                </button>
              </form>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
