import React from 'react';
import { Metadata } from 'next';
import { generateMetadata2026 } from '@/lib/seo-2026';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = generateMetadata2026({
  title: 'Flame Resistant Coveralls (FR) | Fire Retardant Workwear KSA',
  titleAr: 'أفرولات مقاومة للحريق (FR) | ملابس السلامة يونيوم',
  description: 'Certified Flame Resistant (FR) coveralls for the oil & gas industry in Saudi Arabia. EN ISO 11612 compliant protective clothing for ultimate fire safety.',
  descriptionAr: 'أفرولات معتمدة مقاومة للحريق (FR) لقطاع النفط والغاز في السعودية. ملابس واقية مطابقة لمعيار (EN ISO 11612) لتوفير أقصى درجات السلامة من الحرائق والوميض.',
  keywords: ['flame resistant coverall ksa', 'fr clothing saudi arabia', 'fire retardant uniform riyadh', 'oil and gas workwear'],
  keywordsAr: ['أفرول مقاوم للحريق', 'ملابس (FR)', 'زي أرامكو المعتمد', 'أفرول ضد النار', 'ملابس قطاع الغاز والنفط'],
  locale: 'en',
  pageType: 'product',
  path: '/shop/industrial-uniforms/flame-resistant-coverall'
});

export const dynamic = 'force-static';

export default function FlameResistantCoverallPage() {
  return (
    <>
      <section className="bg-orange-900 text-white">
        <Container>
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Shop', href: '/shop' },
            { label: 'Industrial Uniforms', href: '/shop/industrial-uniforms' },
            { label: 'Flame Resistant', href: '/shop/industrial-uniforms/flame-resistant-coverall' }
          ]} className="text-orange-400 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Flame Resistant <span className="text-orange-500">(FR) Coveralls</span>
            </h1>
            <p className="text-xl text-orange-100">
              The ultimate line of defense. Certified inherent and treated fire-retardant workwear explicitly engineered for Saudi Arabia's Oil, Gas, and Utility sectors.
            </p>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-neutral-900">Life-Saving Thermal Protection</h2>
              <div className="prose prose-lg text-neutral-600">
                <p>
                  In the energy and utility sectors, a split second of exposure to flash fires or electrical arcs can be life-threatening. UNEOM's Flame Resistant (FR) collection is designed to self-extinguish immediately upon removal of the ignition source, preventing severe burn injuries.
                </p>
                <p>
                  Rigorously tested to meet and exceed EN ISO 11612, NFPA 2112, and Aramco safety specifications, our FR garments provide a critical escape window for workers in hazardous zones.
                </p>
                <h3>FR Technology Highlights</h3>
                <ul>
                  <li><strong>Inherent vs Treated FR:</strong> Choose from inherently flame-resistant fabrics (like Modacrylic/Aramid blends where the protection never washes out) or high-quality FR-treated 100% cotton for superior comfort.</li>
                  <li><strong>Arc Flash Protection (ATPV):</strong> Certified to protect against electrical arc flashes with various cal/cm² ratings for utility workers (NFPA 70E compliant).</li>
                  <li><strong>Safety Hardware:</strong> Manufactured with heavy-duty brass zippers on Nomex® tape and fire-resistant thread throughout every seam.</li>
                  <li><strong>High-Visibility FR:</strong> Integrated FR-certified reflective striping ensuring visibility without compromising the garment's thermal integrity.</li>
                </ul>
              </div>
            </div>
            <div className="bg-orange-50 p-8 rounded-xl border border-orange-200">
              <h3 className="text-2xl font-bold mb-6 text-orange-900">Secure Your Workforce</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-orange-800 mb-1">Operating Company / Contractor</label>
                  <input type="text" className="w-full p-3 border border-orange-300 rounded-md focus:ring-orange-500 focus:border-orange-500" placeholder="Enter company name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-orange-800 mb-1">Required Safety Standard</label>
                  <select className="w-full p-3 border border-orange-300 rounded-md focus:ring-orange-500 focus:border-orange-500">
                    <option>EN ISO 11612 (General FR)</option>
                    <option>NFPA 2112 (Flash Fire)</option>
                    <option>NFPA 70E (Arc Flash Electrical)</option>
                    <option>Aramco Standard Compliance</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-orange-800 mb-1">Order Volume</label>
                  <select className="w-full p-3 border border-orange-300 rounded-md focus:ring-orange-500 focus:border-orange-500">
                    <option>100 - 500 Pieces</option>
                    <option>500 - 2000 Pieces</option>
                    <option>2000+ Pieces</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-orange-600 text-white font-bold py-3 rounded-md hover:bg-orange-700 transition">
                  Request Certification Documents
                </button>
              </form>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
