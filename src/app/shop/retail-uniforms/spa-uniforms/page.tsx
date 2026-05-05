import React from 'react';
import { Metadata } from 'next';
import { generateMetadata2026 } from '@/lib/seo-2026';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = generateMetadata2026({
  title: 'Luxury Spa & Salon Uniforms | Beauty Therapy Attire KSA',
  titleAr: 'أزياء السبا والصالونات الفاخرة | يونيوم لملابس التجميل',
  description: 'Premium spa and beauty salon uniforms in Saudi Arabia. Discover elegant, bleach-resistant tunics and trousers designed for therapists and aestheticians.',
  descriptionAr: 'أزياء فاخرة لصالونات التجميل ومراكز السبا في السعودية. اكتشف سترات وبناطيل أنيقة مقاومة للمواد الكيميائية ومبيضات الشعر مصممة خصيصاً لأخصائيات التجميل.',
  keywords: ['spa uniforms ksa', 'beauty salon tunics riyadh', 'therapist clothing saudi arabia', 'bleach resistant salon wear'],
  keywordsAr: ['أزياء السبا', 'يونيفورم صالون تجميل', 'ملابس أخصائية تجميل', 'سترات مقاومة للمبيضات', 'ملابس مراكز التجميل'],
  locale: 'en',
  pageType: 'product',
  path: '/shop/retail-uniforms/spa-uniforms'
});

export const dynamic = 'force-static';

export default function SpaUniformsPage() {
  return (
    <>
      <section className="bg-rose-900 text-white">
        <Container>
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Shop', href: '/shop' },
            { label: 'Retail Uniforms', href: '/shop/retail-uniforms' },
            { label: 'Spa & Salon', href: '/shop/retail-uniforms/spa-uniforms' }
          ]} className="text-rose-200 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Luxury <span className="text-rose-400">Spa & Salon Uniforms</span>
            </h1>
            <p className="text-xl text-rose-100">
              Elegance in motion. Premium tunics and trousers designed to provide beauty therapists and salon staff with supreme comfort, mobility, and chemical resistance.
            </p>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-neutral-900">Serenity Starts with the Staff</h2>
              <div className="prose prose-lg text-neutral-600">
                <p>
                  In the wellness and beauty sector, the atmosphere is everything. Your staff's appearance plays a crucial role in communicating cleanliness, luxury, and tranquility to your clients.
                </p>
                <p>
                  UNEOM's Spa & Salon collection is meticulously crafted for the Saudi beauty industry, offering an exquisite balance of Zen-inspired aesthetics and heavy-duty practical performance.
                </p>
                <h3>Why Choose Our Spa Collection?</h3>
                <ul>
                  <li><strong>Bleach-Resistant Fabrics:</strong> Specially treated materials that withstand exposure to hydrogen peroxide and salon chemicals without losing color.</li>
                  <li><strong>Bi-Stretch Technology:</strong> Fabrics that stretch both vertically and horizontally, allowing massage therapists full range of motion.</li>
                  <li><strong>Elegant Silhouettes:</strong> Asymmetrical tunics, mandarin collars, and tailored trousers that flatter all body types while maintaining modesty.</li>
                  <li><strong>Breathable Comfort:</strong> Moisture-wicking properties keep staff cool and dry during intense physical treatments.</li>
                </ul>
              </div>
            </div>
            <div className="bg-rose-50 p-8 rounded-xl border border-rose-200">
              <h3 className="text-2xl font-bold mb-6 text-rose-900">Outfit Your Wellness Center</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-rose-800 mb-1">Spa / Salon Name</label>
                  <input type="text" className="w-full p-3 border border-rose-300 rounded-md focus:ring-rose-500 focus:border-rose-500" placeholder="Enter business name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-rose-800 mb-1">Staff Roles</label>
                  <select className="w-full p-3 border border-rose-300 rounded-md focus:ring-rose-500 focus:border-rose-500">
                    <option>Massage Therapists</option>
                    <option>Hair Stylists & Colorists</option>
                    <option>Aestheticians / Skin Care</option>
                    <option>Reception & Management</option>
                    <option>All Departments</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-rose-800 mb-1">Color Preference</label>
                  <select className="w-full p-3 border border-rose-300 rounded-md focus:ring-rose-500 focus:border-rose-500">
                    <option>Classic Black (Bleach Resistant)</option>
                    <option>Earth Tones (Olive, Sand, Clay)</option>
                    <option>Clinical White</option>
                    <option>Custom Brand Color</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-rose-600 text-white font-bold py-3 rounded-md hover:bg-rose-700 transition">
                  Request Fabric Swatches
                </button>
              </form>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
