import React from 'react';
import { Metadata } from 'next';
import { generateMetadata2026 } from '@/lib/seo-2026';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = generateMetadata2026({
  title: 'Restaurant & F&B Staff Uniforms | Hospitality Attire KSA',
  titleAr: 'أزياء المطاعم ومقدمي الطعام | يونيوم',
  description: 'Professional, stain-resistant uniforms for restaurant and F&B staff in Saudi Arabia. Discover durable waiter shirts, aprons, and chef coats by UNEOM.',
  descriptionAr: 'أزياء احترافية مقاومة للبقع لموظفي المطاعم وقطاع الأغذية والمشروبات في السعودية. اكتشف قمصان الندل، المرايل، وسترات الطهاة عالية التحمل من يونيوم.',
  keywords: ['restaurant uniforms saudi arabia', 'waiter shirts ksa', 'f&b staff apparel riyadh', 'stain resistant hospitality clothing'],
  keywordsAr: ['زي المطاعم', 'يونيفورم مقدمي الطعام', 'أزياء المقاهي', 'ملابس مطاعم مقاومة للبقع', 'قمصان الجرسونات'],
  locale: 'en',
  pageType: 'product',
  path: '/shop/hospitality-attire/restaurant-uniform'
});

export const dynamic = 'force-static';

export default function RestaurantUniformPage() {
  return (
    <>
      <section className="bg-neutral-900 text-white">
        <Container>
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Shop', href: '/shop' },
            { label: 'Hospitality Attire', href: '/shop/hospitality-attire' },
            { label: 'Restaurant Staff', href: '/shop/hospitality-attire/restaurant-uniform' }
          ]} className="text-neutral-400 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Restaurant & <span className="text-amber-500">F&B Uniforms</span>
            </h1>
            <p className="text-xl text-neutral-300">
              Durable, stain-resistant, and stylish uniforms for fine dining, cafes, and casual restaurants. Designed for the fast-paced food and beverage industry.
            </p>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-neutral-900">Performance Meets Elegance</h2>
              <div className="prose prose-lg text-neutral-600">
                <p>
                  In the food and beverage industry, uniforms face daily challenges from spills, heat, and constant movement. Our Restaurant Uniform collection is engineered to withstand these rigors while maintaining an impeccable appearance.
                </p>
                <p>
                  From fine dining waiters in crisp, stain-resistant shirts to baristas in durable canvas aprons, UNEOM provides comprehensive F&B attire solutions for the Saudi market.
                </p>
                <h3>Our Product Range</h3>
                <ul>
                  <li><strong>Service Shirts & Blouses:</strong> Treated with Teflon™ for superior stain and spill resistance.</li>
                  <li><strong>Professional Aprons:</strong> Available in waist, bib, and cross-back styles with reinforced stitching for high-stress points.</li>
                  <li><strong>Trousers:</strong> Designed with hidden elastic waistbands for comfort during long shifts.</li>
                </ul>
              </div>
            </div>
            <div className="bg-neutral-50 p-8 rounded-xl border border-neutral-200">
              <h3 className="text-2xl font-bold mb-6 text-neutral-900">Equip Your Restaurant</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Restaurant/Cafe Name</label>
                  <input type="text" className="w-full p-3 border border-neutral-300 rounded-md" placeholder="Enter business name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Staff Size</label>
                  <select className="w-full p-3 border border-neutral-300 rounded-md">
                    <option>1-20 Employees</option>
                    <option>21-50 Employees</option>
                    <option>50+ Employees</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Contact Phone</label>
                  <input type="tel" className="w-full p-3 border border-neutral-300 rounded-md" placeholder="+966 5X XXX XXXX" />
                </div>
                <button type="button" className="w-full bg-amber-600 text-white font-bold py-3 rounded-md hover:bg-amber-700 transition">
                  Get a Bulk Quote
                </button>
              </form>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
