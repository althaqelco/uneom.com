'use client';

import React, { useState } from 'react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import SEO from '@/components/SEO';
import Link from 'next/link';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export default function FAQPage() {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const faqItems: FAQItem[] = [
    // General Questions
    {
      id: 'general-1',
      category: 'general',
      question: 'What types of uniforms does UNEOM manufacture?',
      answer: 'UNEOM specializes in manufacturing premium uniforms for healthcare (medical scrubs, lab coats), aviation (pilot and cabin crew uniforms), hospitality (hotel and restaurant attire), corporate (business wear), education (school uniforms), and industrial sectors. We provide custom-designed solutions tailored to each industry\'s specific requirements in Saudi Arabia.'
    },
    {
      id: 'general-2',
      category: 'general',
      question: 'Do you serve clients outside of Saudi Arabia?',
      answer: 'While UNEOM is primarily focused on serving the Saudi Arabian market, we do work with clients throughout the Gulf Cooperation Council (GCC) region. Our expertise in designing uniforms for Middle Eastern climates and cultural requirements makes us an ideal partner for organizations across the region.'
    },
    {
      id: 'general-3',
      category: 'general',
      question: 'What makes UNEOM different from other uniform suppliers?',
      answer: 'UNEOM stands out through our deep understanding of Saudi Arabian workplace requirements, climate-appropriate fabric selection, cultural sensitivity in design, and commitment to quality. We offer comprehensive services from initial design consultation to final delivery, with local manufacturing capabilities and responsive customer service.'
    },

    // Ordering Process
    {
      id: 'ordering-1',
      category: 'ordering',
      question: 'What is the minimum order quantity for uniforms?',
      answer: 'Minimum order quantities vary by product type and customization level. For standard uniforms, the minimum is typically 50 pieces per style. For fully customized uniforms with unique designs, minimums may be higher. Contact our sales team for specific requirements based on your needs.'
    },
    {
      id: 'ordering-2',
      category: 'ordering',
      question: 'How long does it take to receive my uniform order?',
      answer: 'Standard uniform orders typically take 2-4 weeks for production and delivery. Custom-designed uniforms require 4-8 weeks depending on complexity and order size. Rush orders may be accommodated for an additional fee. We provide detailed timelines during the quotation process.'
    },
    {
      id: 'ordering-3',
      category: 'ordering',
      question: 'Can I request samples before placing a large order?',
      answer: 'Yes, we encourage clients to request samples to evaluate fabric quality, fit, and design. Sample requests can be made through our contact form or by calling our offices. Sample costs may apply but are often credited toward your final order.'
    },

    // Customization
    {
      id: 'customization-1',
      category: 'customization',
      question: 'Can you add our company logo to the uniforms?',
      answer: 'Absolutely! We offer various branding options including embroidery, screen printing, heat transfer, and woven labels. Our design team works with you to determine the best placement and method for your logo to ensure durability and professional appearance.'
    },
    {
      id: 'customization-2',
      category: 'customization',
      question: 'Do you offer custom colors to match our brand?',
      answer: 'Yes, we can match specific brand colors for your uniforms. Our color matching service ensures your uniforms align perfectly with your corporate identity. We work with Pantone color references and can provide color samples for approval before production.'
    },
    {
      id: 'customization-3',
      category: 'customization',
      question: 'Can you design uniforms that comply with Islamic dress codes?',
      answer: 'UNEOM has extensive experience designing modest uniforms that respect Islamic dress requirements while maintaining professional appearance. We offer longer sleeves, appropriate necklines, hijab-friendly designs, and other modifications to ensure cultural compliance across all uniform categories.'
    },

    // Quality & Materials
    {
      id: 'quality-1',
      category: 'quality',
      question: 'What fabrics do you use for Saudi Arabia\'s climate?',
      answer: 'We select fabrics specifically suited for Saudi Arabia\'s hot climate, including moisture-wicking polyester blends, breathable cotton-poly combinations, and specialized cooling fabrics. All materials are tested for durability, comfort, and performance in high-temperature environments.'
    },
    {
      id: 'quality-2',
      category: 'quality',
      question: 'Are your uniforms certified for safety standards?',
      answer: 'Yes, UNEOM uniforms meet relevant safety and quality standards including ISO 9001:2015, OEKO-TEX Standard 100, and Saudi Quality Mark certifications. Industry-specific uniforms (healthcare, industrial) comply with additional safety requirements as needed.'
    },

    // Pricing & Payment
    {
      id: 'pricing-1',
      category: 'pricing',
      question: 'How is uniform pricing determined?',
      answer: 'Pricing depends on factors including fabric type, design complexity, customization level, order quantity, and delivery timeline. We provide detailed quotes that break down all costs. Volume discounts are available for larger orders, and we offer competitive pricing for long-term partnerships.'
    },
    {
      id: 'pricing-2',
      category: 'pricing',
      question: 'What payment methods do you accept?',
      answer: 'UNEOM accepts various payment methods including bank transfers, letters of credit, and approved corporate accounts. For large orders, we can arrange flexible payment terms. All pricing is in Saudi Riyals (SAR) with clear payment schedules provided in our quotations.'
    }
  ];

  return (
    <>
      {/* Enhanced SEO for Google May 2025 Standards */}
      <EnhancedSEO2025 
        title="UNEOM - Professional Uniforms Saudi Arabia"
        description="Premium quality professional uniforms and workwear solutions in Saudi Arabia."
        keywords={["uniform Saudi Arabia","professional uniforms","custom uniforms"]}
        author="UNEOM Expert Team"
        expertise="Uniform Manufacturing & Design"
        contentType="service"
        trustSignals={[
          'ISO certified manufacturing',
          'Premium quality materials',
          'Custom design solutions',
          'Saudi Arabia market leader'
        ]}
        locale="en"
      />

      <SEO
        title="Frequently Asked Questions | UNEOM Uniform Manufacturing"
        description="Find answers to common questions about UNEOM's uniform manufacturing services, ordering process, customization options, and quality standards in Saudi Arabia."
        canonicalUrl="https://uneom.com/faq/"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Find answers to common questions about UNEOM's uniform manufacturing services, ordering process, and quality standards.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqItems.map((item) => (
                <div key={item.id} className="border border-neutral-200 rounded-lg">
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-neutral-50 transition-colors"
                    onClick={() => setOpenFAQ(openFAQ === item.id ? null : item.id)}
                  >
                    <h3 className="text-lg font-semibold text-neutral-800 pr-4">
                      {item.question}
                    </h3>
                    <svg
                      className={`w-5 h-5 text-neutral-500 transition-transform ${
                        openFAQ === item.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFAQ === item.id && (
                    <div className="px-6 pb-4">
                      <p className="text-neutral-700 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-lg text-neutral-700 mb-8">
              Our uniform specialists are here to help. Contact us for personalized assistance with your uniform needs.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary-600 text-white hover:bg-primary-700 px-8 py-3 rounded-md font-medium text-lg shadow-md transition-colors duration-200"
            >
              Contact Our Team
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}