import React from 'react';
import { Metadata } from 'next';
import { generateMetadata2026 } from '@/lib/seo-2026';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = generateMetadata2026({
  title: 'Executive Wear & Tailored Suits | Corporate Uniforms KSA',
  titleAr: 'أزياء الإدارة التنفيذية | بدلات رسمية للشركات يونيوم',
  description: 'Premium tailored suits and executive wear for corporate management in Saudi Arabia. Discover our bespoke tailoring service for banks, airlines, and luxury hospitality.',
  descriptionAr: 'بدلات رسمية وأزياء إدارية فاخرة للإدارة التنفيذية في السعودية. اكتشف خدمة الخياطة المخصصة لقطاعات البنوك، الطيران، والضيافة الفاخرة.',
  keywords: ['executive suits saudi arabia', 'tailored corporate wear riyadh', 'bank uniforms ksa', 'management attire'],
  keywordsAr: ['أزياء الإدارة التنفيذية', 'بدلات رسمية للشركات', 'زي موظفي البنوك', 'ملابس الإدارة', 'تفصيل بدلات شركات'],
  locale: 'en',
  pageType: 'product',
  path: '/shop/workplace-uniforms/executive-wear'
});

export const dynamic = 'force-static';

export default function ExecutiveWearPage() {
  return (
    <>
      <section className="bg-zinc-900 text-white">
        <Container>
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Shop', href: '/shop' },
            { label: 'Workplace Uniforms', href: '/shop/workplace-uniforms' },
            { label: 'Executive Wear', href: '/shop/workplace-uniforms/executive-wear' }
          ]} className="text-zinc-400 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Executive Wear & <span className="text-yellow-500">Tailored Suits</span>
            </h1>
            <p className="text-xl text-zinc-300">
              Command respect with impeccable tailoring. Premium bespoke and made-to-measure suiting designed for corporate leadership, banking, and luxury sectors in Saudi Arabia.
            </p>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-neutral-900">The Power of a Perfect Fit</h2>
              <div className="prose prose-lg text-neutral-600">
                <p>
                  For executive management and client-facing leadership teams, standard off-the-rack uniforms are insufficient. A perfectly tailored suit communicates authority, attention to detail, and uncompromising quality to your clients.
                </p>
                <p>
                  UNEOM's Executive Wear division provides a premium suiting experience for Saudi Arabia's most prestigious organizations, from major financial institutions to VIP hospitality teams.
                </p>
                <h3>The Executive Standard</h3>
                <ul>
                  <li><strong>Premium Fabrics:</strong> Sourced directly from renowned mills in Italy and the UK. We offer high-twist wools (Super 120s to Super 150s) that drape beautifully and resist creasing during travel.</li>
                  <li><strong>Made-to-Measure Service:</strong> Our master tailors conduct on-site fitting sessions at your corporate headquarters to ensure every executive receives a flawless fit.</li>
                  <li><strong>Corporate Detailing:</strong> Custom monograms, branded silk linings, and custom-dyed fabrics to subtly integrate your corporate identity into high-end fashion.</li>
                  <li><strong>Comprehensive Wardrobe:</strong> Beyond suits, we provide tailored shirts, silk ties, and premium leather accessories.</li>
                </ul>
              </div>
            </div>
            <div className="bg-zinc-50 p-8 rounded-xl border border-zinc-200">
              <h3 className="text-2xl font-bold mb-6 text-zinc-900">Schedule a Fitting Session</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1">Organization Name</label>
                  <input type="text" className="w-full p-3 border border-zinc-300 rounded-md focus:ring-zinc-500 focus:border-zinc-500" placeholder="Enter organization name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1">Industry</label>
                  <select className="w-full p-3 border border-zinc-300 rounded-md focus:ring-zinc-500 focus:border-zinc-500">
                    <option>Banking & Finance</option>
                    <option>Aviation / Airlines</option>
                    <option>Luxury Hospitality / VIP</option>
                    <option>Corporate C-Suite</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1">Number of Executives</label>
                  <select className="w-full p-3 border border-zinc-300 rounded-md focus:ring-zinc-500 focus:border-zinc-500">
                    <option>1 - 10 Executives</option>
                    <option>11 - 50 Executives</option>
                    <option>50+ Executives (Branch Rollout)</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-yellow-600 text-zinc-900 font-bold py-3 rounded-md hover:bg-yellow-500 transition">
                  Book VIP Consultation
                </button>
              </form>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
