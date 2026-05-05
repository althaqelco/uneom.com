import React from 'react';
import { Metadata } from 'next';
import { generateMetadata2026 } from '@/lib/seo-2026';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = generateMetadata2026({
  title: 'Sustainable School Uniforms in Saudi Arabia | Vision 2030',
  titleAr: 'الزي المدرسي المستدام في السعودية | رؤية 2030',
  description: 'How Saudi schools are adopting sustainable, eco-friendly uniforms to align with Vision 2030 environmental goals. Explore UNEOM\'s organic and recycled fabric options.',
  descriptionAr: 'كيف تتبنى المدارس السعودية زياً مدرسياً مستداماً وصديقاً للبيئة ليتوافق مع أهداف رؤية 2030. اكتشف خيارات الأقمشة العضوية والمعاد تدويرها من يونيوم.',
  keywords: ['sustainable school uniforms', 'eco-friendly uniforms ksa', 'vision 2030 schools', 'organic cotton school uniform'],
  keywordsAr: ['زي مدرسي مستدام', 'ملابس مدرسية صديقة للبيئة', 'مدارس رؤية 2030', 'قطن عضوي', 'إعادة تدوير الأزياء'],
  locale: 'en',
  pageType: 'article',
  path: '/blog/sustainable-school-uniforms-saudi'
});

export const dynamic = 'force-static';

export default function SustainableSchoolUniformsPage() {
  return (
    <>
      <section className="bg-emerald-800 text-white">
        <Container>
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: 'Sustainable School Uniforms', href: '/blog/sustainable-school-uniforms-saudi' }
          ]} className="text-emerald-200 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              The Rise of <span className="text-emerald-300">Sustainable School Uniforms</span> in Saudi Arabia
            </h1>
            <p className="text-xl text-emerald-100">
              Aligning educational institutions with Vision 2030's environmental goals through eco-friendly apparel solutions.
            </p>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg text-neutral-700 max-w-none">
              <p className="lead text-2xl text-neutral-600 mb-8">
                As Saudi Arabia aggressively pursues its Vision 2030 goals, sustainability has moved from a buzzword to a core operational mandate. Educational institutions across the Kingdom are now looking at their procurement processes through a green lens, and school uniforms are at the forefront of this transformation.
              </p>

              <h2>The Environmental Impact of Traditional Uniforms</h2>
              <p>
                The traditional textile industry is notoriously resource-intensive. Producing a standard poly-cotton school uniform requires significant water consumption, petroleum-based polyester creation, and chemical dyes. When multiplied by millions of students across Saudi Arabia replacing their uniforms annually, the environmental footprint is massive.
              </p>

              <h2>What Makes a Uniform "Sustainable"?</h2>
              <p>
                A sustainable school uniform addresses the environmental impact at multiple stages of its lifecycle:
              </p>
              <ul>
                <li><strong>Organic Materials:</strong> Using GOTS-certified organic cotton that requires significantly less water and zero toxic pesticides during cultivation.</li>
                <li><strong>Recycled Synthetics:</strong> Utilizing rPET (recycled polyethylene terephthalate) polyester made from post-consumer plastic bottles instead of virgin petroleum.</li>
                <li><strong>Eco-Friendly Dyes:</strong> Employing closed-loop dyeing processes that prevent toxic wastewater from entering local ecosystems.</li>
                <li><strong>Durability & Longevity:</strong> The most sustainable garment is the one that lasts. High-quality construction ensures uniforms survive the school year, reducing the need for replacement.</li>
              </ul>

              <h2>Vision 2030: The Green Education Initiative</h2>
              <p>
                The Saudi Green Initiative (SGI) emphasizes the reduction of carbon emissions and the promotion of a circular economy. Forward-thinking private and international schools in Riyadh, Jeddah, and the Eastern Province are integrating sustainability into their curriculum—and matching that ethos with their uniform policies. By choosing eco-friendly uniforms, schools provide students with a tangible daily reminder of their environmental responsibility.
              </p>

              <h2>UNEOM's Commitment to Green Apparel</h2>
              <p>
                At UNEOM, we have developed a dedicated "Green Campus" product line. Our sustainable school uniforms feature:
              </p>
              <ul>
                <li>Blends of 60% Organic Cotton and 40% Recycled Polyester.</li>
                <li>Oeko-Tex Standard 100 certification, guaranteeing the fabrics are free from harmful substances.</li>
                <li>A take-back program for end-of-year uniform recycling, preventing textiles from ending up in landfills.</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Transitioning to sustainable school uniforms is a powerful statement of intent for any educational institution in Saudi Arabia. It demonstrates a commitment to the environment, aligns with national objectives, and instills the right values in the next generation. 
              </p>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
