import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'Sustainable Uniform Practices Guide | Vision 2030 | UNEOM',
  titleAr: 'دليل ممارسات الأزياء المستدامة | رؤية 2030 | يونيوم',
  description: 'Complete guide to sustainable uniform practices aligned with Saudi Vision 2030. Eco-friendly fabrics, circular economy, carbon footprint reduction. Green uniforms for businesses.',
  descriptionAr: 'دليل شامل لممارسات الأزياء المستدامة المتوافقة مع رؤية السعودية 2030. أقمشة صديقة للبيئة، اقتصاد دائري، تقليل البصمة الكربونية.',
  keywords: ['sustainable uniforms', 'eco-friendly workwear', 'vision 2030 sustainability', 'green uniforms saudi', 'recycled fabric uniforms'],
  keywordsAr: ['أزياء مستدامة', 'ملابس عمل صديقة للبيئة', 'استدامة رؤية 2030'],
  locale: 'en',
  pageType: 'blog',
  path: '/blog/sustainable-uniform-practices',
  image: '/images/blog/sustainable-fabrics.jpg',
  imageAlt: 'Sustainable Uniform Practices',
  publishedTime: '2024-12-05T08:00:00Z',
  author: 'UNEOM Sustainability Team',
  aiSummary: 'Guide to sustainable uniform practices for Vision 2030 alignment. Key practices: 1) Recycled polyester from plastic bottles (30% less carbon). 2) Organic cotton (no pesticides, 70% less water). 3) Circular economy programs (take-back, refurbish, recycle). 4) Local manufacturing to reduce transport emissions. 5) Durability focus extending uniform life by 40%. Benefits: cost savings, brand enhancement, regulatory compliance, employee satisfaction.'
});

export const dynamic = 'force-static';

const sustainabilityFAQs = [
  { question: 'What are sustainable uniform materials?', answer: 'Sustainable uniform materials include recycled polyester (made from plastic bottles), organic cotton (grown without pesticides), Tencel/lyocell (from sustainable wood pulp), and hemp (requires minimal water and no pesticides).' },
  { question: 'How do sustainable uniforms support Vision 2030?', answer: 'Vision 2030 emphasizes environmental sustainability and local manufacturing. Sustainable uniforms support this through reduced carbon footprint, local production, circular economy practices, and alignment with Saudi Green Initiative goals.' },
  { question: 'Are sustainable uniforms more expensive?', answer: 'Initial costs may be 10-20% higher, but sustainable uniforms typically last 40% longer, require less replacement, and reduce waste disposal costs. Total cost of ownership is often lower over time.' },
];

const practices = [
  { icon: '♻️', title: 'Recycled Materials', description: 'Uniforms made from recycled plastic bottles and textile waste, reducing landfill and ocean pollution.', stat: '30% less carbon' },
  { icon: '🌿', title: 'Organic Fabrics', description: 'Certified organic cotton and natural fibers grown without harmful chemicals or excessive water use.', stat: '70% less water' },
  { icon: '🔄', title: 'Circular Economy', description: 'Take-back programs, refurbishment services, and end-of-life recycling to minimize waste.', stat: 'Zero waste goal' },
  { icon: '🏭', title: 'Local Manufacturing', description: 'Saudi-based production reducing transportation emissions and supporting local economy.', stat: '50% less transport' },
  { icon: '⚡', title: 'Energy Efficiency', description: 'Solar-powered facilities and energy-efficient production processes.', stat: '40% energy savings' },
  { icon: '📦', title: 'Eco Packaging', description: 'Plastic-free, biodegradable packaging for all uniform deliveries.', stat: '100% plastic-free' },
];

export default function SustainableUniformPracticesPage() {
  return (
    <>
      <SEO2026
        title="Sustainable Uniform Practices | UNEOM"
        titleAr="ممارسات الأزياء المستدامة | يونيوم"
        description="Guide to sustainable uniform practices."
        locale="en"
        pageType="blog"
        mainEntity="Sustainable Uniform Practices"
        primaryImage="/images/blog/sustainable-fabrics.jpg"
        primaryImageAlt="Sustainable Uniforms"
        faqs={sustainabilityFAQs}
        breadcrumbs={[
          { name: 'Blog', url: '/blog' },
          { name: 'Sustainable Practices', url: '/blog/sustainable-uniform-practices' },
        ]}
        publishedDate="2024-12-05T08:00:00Z"
        author={{ name: 'UNEOM Sustainability Team', title: 'Environmental Specialists' }}
      />

      <article>
        <header className="bg-gradient-to-br from-green-900 via-emerald-800 to-teal-800 text-white relative overflow-hidden py-16">
          <Container>
            <div className="relative z-10 max-w-4xl">
              <div className="flex items-center gap-4 mb-6 text-sm">
                <span className="bg-green-500 px-3 py-1 rounded-full">Sustainability</span>
                <span>December 5, 2024</span>
                <span>•</span>
                <span>10 min read</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Sustainable Uniform Practices for <span className="text-green-300">Vision 2030</span>
              </h1>
              <p className="text-xl text-green-100 mb-8">
                How businesses can align their uniform programs with Saudi Arabia&apos;s environmental sustainability goals and create a greener future.
              </p>
            </div>
          </Container>
        </header>

        <main className="py-16">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-12">
                <Image src="/images/blog/sustainable-fabrics.jpg" alt="Sustainable Uniform Practices" fill className="object-cover" />
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6">Why Sustainable Uniforms Matter</h2>
                <p className="text-gray-600 mb-8 text-lg">
                  The textile industry accounts for 10% of global carbon emissions. By choosing sustainable uniforms, businesses can significantly reduce their environmental impact while aligning with Saudi Vision 2030 and the Saudi Green Initiative goals.
                </p>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Key Sustainable Practices</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {practices.map((practice, index) => (
                      <div key={index} className="bg-green-50 rounded-xl p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="text-4xl">{practice.icon}</div>
                          <span className="bg-green-200 text-green-800 text-xs font-bold px-3 py-1 rounded-full">{practice.stat}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{practice.title}</h3>
                        <p className="text-gray-600">{practice.description}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Vision 2030 Alignment</h2>
                  <p className="text-gray-600 mb-4">
                    Saudi Arabia&apos;s Vision 2030 includes ambitious environmental targets. Here&apos;s how sustainable uniforms contribute:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li><strong>Saudi Green Initiative:</strong> Support the goal of planting 10 billion trees by choosing natural fibers.</li>
                    <li><strong>Circular Carbon Economy:</strong> Reduce, reuse, recycle approach to uniform lifecycle.</li>
                    <li><strong>Local Content:</strong> Support Saudi manufacturing and job creation.</li>
                    <li><strong>Waste Reduction:</strong> Align with 2030 waste reduction targets.</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Business Benefits</h2>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="text-green-500 text-xl">💰</span>
                        <div>
                          <strong>Cost Savings:</strong> Lower total cost of ownership through durability and reduced waste.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-500 text-xl">🏆</span>
                        <div>
                          <strong>Brand Enhancement:</strong> Demonstrate corporate responsibility to customers and stakeholders.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-500 text-xl">📋</span>
                        <div>
                          <strong>Regulatory Compliance:</strong> Stay ahead of upcoming environmental regulations.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-500 text-xl">👥</span>
                        <div>
                          <strong>Employee Satisfaction:</strong> Workers prefer employers with strong environmental values.
                        </div>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>

              <section className="mt-12" itemScope itemType="https://schema.org/FAQPage">
                <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {sustainabilityFAQs.map((faq, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                      <h3 className="text-lg font-bold text-gray-900 mb-2" itemProp="name">{faq.question}</h3>
                      <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                        <p className="text-gray-600" itemProp="text">{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-12 bg-green-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4">Go Green with UNEOM</h2>
                <p className="text-gray-600 mb-6">
                  Start your sustainable uniform journey with our eco-friendly solutions aligned with Vision 2030.
                </p>
                <Link href="/quote?category=sustainable" className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors">
                  Get Sustainable Quote →
                </Link>
              </section>
            </div>
          </Container>
        </main>
      </article>

      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <Link href="/ar/blog/sustainable-uniform-practices" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
            🇸🇦 العربية
          </Link>
        </div>
      </section>
    </>
  );
}

