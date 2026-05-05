import React from 'react';
import { Metadata } from 'next';
import { generateMetadata2026 } from '@/lib/seo-2026';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = generateMetadata2026({
  title: 'Corporate Uniform Programs | B2B Solutions Saudi Arabia',
  titleAr: 'برامج زي الشركات الموحد | حلول الأعمال في السعودية',
  description: 'Scalable corporate uniform programs for enterprises in KSA. Managed B2B apparel solutions including procurement, custom design, and employee portals.',
  descriptionAr: 'برامج زي موحد قابلة للتطوير للشركات الكبرى في السعودية. حلول أعمال متكاملة (B2B) تشمل التوريد، التصميم المخصص، وبوابات طلب الموظفين.',
  keywords: ['corporate uniform programs ksa', 'b2b uniform solutions riyadh', 'managed apparel programs', 'employee uniform portal'],
  keywordsAr: ['برامج زي الشركات', 'حلول الزي الموحد (B2B)', 'توريد ملابس شركات', 'إدارة أزياء الموظفين', 'عقود الزي الموحد السنوية'],
  locale: 'en',
  pageType: 'product',
  path: '/shop/workplace-uniforms/corporate-programs'
});

export const dynamic = 'force-static';

export default function CorporateProgramsPage() {
  return (
    <>
      <section className="bg-blue-900 text-white">
        <Container>
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Shop', href: '/shop' },
            { label: 'Workplace Uniforms', href: '/shop/workplace-uniforms' },
            { label: 'Corporate Programs', href: '/shop/workplace-uniforms/corporate-programs' }
          ]} className="text-blue-200 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Managed Corporate <span className="text-amber-500">Uniform Programs</span>
            </h1>
            <p className="text-xl text-blue-100">
              End-to-end B2B apparel solutions designed to simplify procurement, enforce brand consistency, and manage employee allocations for Saudi Arabia's largest enterprises.
            </p>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-neutral-900">Enterprise-Grade Apparel Management</h2>
              <div className="prose prose-lg text-neutral-600">
                <p>
                  Managing uniforms for hundreds or thousands of employees across multiple branches in Saudi Arabia is a complex logistical challenge. UNEOM's Managed Corporate Programs remove the headache of procurement, inventory, and distribution from your HR and procurement teams.
                </p>
                <p>
                  We act as your dedicated apparel partner, offering a streamlined process from the initial design phase to final employee delivery.
                </p>
                <h3>Program Benefits</h3>
                <ul>
                  <li><strong>Custom Employee Portals:</strong> A dedicated, branded e-commerce portal where your employees can order their yearly allowance directly using a point or voucher system.</li>
                  <li><strong>Inventory Management:</strong> We hold safety stock in our Riyadh and Jeddah warehouses to ensure rapid onboarding of new hires.</li>
                  <li><strong>Multi-Department Outfitting:</strong> Consistent brand identity across diverse roles—from executive management to logistics and maintenance crews.</li>
                  <li><strong>Consolidated Billing:</strong> Transparent, centralized invoicing with detailed departmental reporting to help you track your apparel spend.</li>
                </ul>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl border border-blue-200">
              <h3 className="text-2xl font-bold mb-6 text-blue-900">Speak to an Enterprise Expert</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-blue-800 mb-1">Company / Enterprise Name</label>
                  <input type="text" className="w-full p-3 border border-blue-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Enter company name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-800 mb-1">Total Employee Count</label>
                  <select className="w-full p-3 border border-blue-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                    <option>100 - 500 Employees</option>
                    <option>500 - 2,000 Employees</option>
                    <option>2,000 - 5,000 Employees</option>
                    <option>5,000+ Employees</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-800 mb-1">Current Challenge</label>
                  <select className="w-full p-3 border border-blue-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                    <option>Inconsistent Brand Look</option>
                    <option>Logistics & Distribution Issues</option>
                    <option>High Costs & Poor Quality</option>
                    <option>Launching a New Corporate Identity</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-amber-600 text-white font-bold py-3 rounded-md hover:bg-amber-700 transition">
                  Request B2B Consultation
                </button>
              </form>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
