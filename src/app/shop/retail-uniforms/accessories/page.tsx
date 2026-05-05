import React from 'react';
import { Metadata } from 'next';
import { generateMetadata2026 } from '@/lib/seo-2026';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = generateMetadata2026({
  title: 'Retail Uniform Accessories | Brand Identity Enhancements KSA',
  titleAr: 'إكسسوارات الزي الموحد لقطاع التجزئة | يونيوم السعودية',
  description: 'Complete your retail staff uniform with premium accessories. Custom name badges, ties, scarves, and belts designed to elevate your brand identity in Saudi Arabia.',
  descriptionAr: 'أكمل إطلالة موظفي التجزئة بإكسسوارات فاخرة. شارات أسماء مخصصة، أربطة عنق، أوشحة، وأحزمة مصممة لتعزيز الهوية البصرية لعلامتك التجارية في السعودية.',
  keywords: ['retail uniform accessories', 'custom name badges ksa', 'staff ties and scarves riyadh', 'brand identity clothing'],
  keywordsAr: ['إكسسوارات الزي الموحد', 'شارات أسماء الموظفين', 'كرافتات للشركات', 'سكارف موظفات', 'إكسسوارات المبيعات', 'هوية العلامة التجارية'],
  locale: 'en',
  pageType: 'product',
  path: '/shop/retail-uniforms/accessories'
});

export const dynamic = 'force-static';

export default function RetailAccessoriesPage() {
  return (
    <>
      <section className="bg-fuchsia-900 text-white">
        <Container>
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Shop', href: '/shop' },
            { label: 'Retail Uniforms', href: '/shop/retail-uniforms' },
            { label: 'Accessories', href: '/shop/retail-uniforms/accessories' }
          ]} className="text-fuchsia-200 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Retail Uniform <span className="text-fuchsia-400">Accessories</span>
            </h1>
            <p className="text-xl text-fuchsia-100">
              The details that define your brand. Premium custom accessories to complete your team's look and leave a lasting impression on your customers.
            </p>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-neutral-900">Perfection is in the Details</h2>
              <div className="prose prose-lg text-neutral-600">
                <p>
                  A uniform is only as strong as its finishing touches. In the highly competitive Saudi retail market, the smallest details—like a perfectly color-matched scarf or a polished metal name badge—can dramatically elevate the perceived value of your brand.
                </p>
                <p>
                  UNEOM offers a comprehensive suite of uniform accessories designed specifically for customer-facing staff in boutiques, supermarkets, and luxury retail chains.
                </p>
                <h3>Our Accessory Portfolio</h3>
                <ul>
                  <li><strong>Custom Name Badges:</strong> Available in brushed metal, premium acrylic, or eco-friendly bamboo, featuring magnetic clasps to prevent fabric damage.</li>
                  <li><strong>Ties & Scarves:</strong> Custom-dyed silk or poly-blend scarves and ties featuring your brand's exact pantone colors and subtle logo patterns.</li>
                  <li><strong>Lanyards & Card Holders:</strong> Heavy-duty branded lanyards with breakaway safety clasps, ideal for hypermarket and tech store staff.</li>
                  <li><strong>Leather Belts:</strong> Uniform black and brown genuine leather belts to ensure a cohesive look from top to bottom.</li>
                </ul>
              </div>
            </div>
            <div className="bg-fuchsia-50 p-8 rounded-xl border border-fuchsia-200">
              <h3 className="text-2xl font-bold mb-6 text-fuchsia-900">Brand Your Accessories</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-fuchsia-800 mb-1">Brand/Store Name</label>
                  <input type="text" className="w-full p-3 border border-fuchsia-300 rounded-md focus:ring-fuchsia-500 focus:border-fuchsia-500" placeholder="Enter your brand name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-fuchsia-800 mb-1">Accessory Type Needed</label>
                  <select className="w-full p-3 border border-fuchsia-300 rounded-md focus:ring-fuchsia-500 focus:border-fuchsia-500">
                    <option>Name Badges (Magnetic/Pin)</option>
                    <option>Custom Silk Scarves & Ties</option>
                    <option>Branded Lanyards</option>
                    <option>Complete Accessory Kit</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-fuchsia-800 mb-1">Upload Brand Guidelines (Optional)</label>
                  <input type="file" className="w-full p-2 border border-fuchsia-300 rounded-md text-sm" />
                </div>
                <button type="button" className="w-full bg-fuchsia-600 text-white font-bold py-3 rounded-md hover:bg-fuchsia-700 transition">
                  Request Accessory Catalog
                </button>
              </form>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
