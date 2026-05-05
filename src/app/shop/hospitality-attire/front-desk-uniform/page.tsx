import React from 'react';
import { Metadata } from 'next';
import { generateMetadata2026 } from '@/lib/seo-2026';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = generateMetadata2026({
  title: 'Front Desk & Reception Uniforms | Premium Hospitality Attire KSA',
  titleAr: 'أزياء الاستقبال والمكاتب الأمامية | يونيوم للضيافة',
  description: 'Elevate your hotel\'s first impression with premium front desk uniforms. Custom-tailored suits, dresses, and blazers designed for Saudi hospitality professionals.',
  descriptionAr: 'ارتقِ بالانطباع الأول لفندقك مع أزياء الاستقبال الفاخرة من يونيوم. بدلات، فساتين، وسترات مصممة خصيصاً لموظفي الضيافة في السعودية.',
  keywords: ['front desk uniforms ksa', 'receptionist attire saudi arabia', 'hotel staff suits riyadh', 'premium hospitality clothing'],
  keywordsAr: ['أزياء الاستقبال', 'يونيفورم المكاتب الأمامية', 'بدلات موظفي الفنادق', 'ملابس الضيافة في السعودية', 'زي الفنادق'],
  locale: 'en',
  pageType: 'product',
  path: '/shop/hospitality-attire/front-desk-uniform'
});

export const dynamic = 'force-static';

export default function FrontDeskUniformPage() {
  return (
    <>
      <section className="bg-neutral-900 text-white">
        <Container>
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Shop', href: '/shop' },
            { label: 'Hospitality Attire', href: '/shop/hospitality-attire' },
            { label: 'Front Desk', href: '/shop/hospitality-attire/front-desk-uniform' }
          ]} className="text-neutral-400 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Front Desk & <span className="text-amber-500">Reception Uniforms</span>
            </h1>
            <p className="text-xl text-neutral-300">
              The first point of contact sets the standard. Outfit your reception staff in impeccably tailored suits and dresses that blend luxury with all-day comfort.
            </p>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-neutral-900">Making the Right First Impression</h2>
              <div className="prose prose-lg text-neutral-600">
                <p>
                  In the luxury hospitality sector, your front desk staff are the ambassadors of your brand. Our Front Desk Collection is engineered specifically for the demands of the modern hotel lobby in Saudi Arabia.
                </p>
                <p>
                  We utilize advanced worsted wool blends and mechanical stretch fabrics that resist wrinkling, ensuring your team looks as sharp at the end of their shift as they did at the beginning.
                </p>
                <h3>Collection Highlights</h3>
                <ul>
                  <li><strong>Tailored Fit:</strong> Precision cuts that offer a modern, professional silhouette without restricting movement.</li>
                  <li><strong>Climate-Adaptive:</strong> Breathable linings designed for the transition between air-conditioned lobbies and outdoor environments.</li>
                  <li><strong>Brand Integration:</strong> Subtle custom embroidery and bespoke lapel pins to incorporate your hotel's crest.</li>
                </ul>
              </div>
            </div>
            <div className="bg-neutral-50 p-8 rounded-xl border border-neutral-200">
              <h3 className="text-2xl font-bold mb-6 text-neutral-900">Request Custom Design</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Hotel/Property Name</label>
                  <input type="text" className="w-full p-3 border border-neutral-300 rounded-md" placeholder="Enter your hotel name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Number of Staff</label>
                  <select className="w-full p-3 border border-neutral-300 rounded-md">
                    <option>1-10 Employees</option>
                    <option>11-50 Employees</option>
                    <option>50+ Employees</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Contact Email</label>
                  <input type="email" className="w-full p-3 border border-neutral-300 rounded-md" placeholder="your@email.com" />
                </div>
                <button type="button" className="w-full bg-amber-600 text-white font-bold py-3 rounded-md hover:bg-amber-700 transition">
                  Request Consultation
                </button>
              </form>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
