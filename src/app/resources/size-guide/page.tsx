'use client';

import React from 'react';
import ResourcePageLayout from '@/components/layout/ResourcePageLayout';

export default function SizeGuidePage() {
  const resourceData = {
    locale: 'en',
    title: 'Uniform Size Guide',
    subtitle: 'Comprehensive measurements for the perfect fit across all uniform types',
    heroImage: '/images/default-placeholder.jpg',
    overview: {
      title: 'Finding the Right Fit',
      content: `
        <p class="mb-4">
          Properly fitted uniforms not only enhance appearance but also contribute to comfort, professionalism, 
          and functionality. This comprehensive guide provides detailed sizing information for all UNEOM uniform categories, 
          ensuring your team looks and performs their best.
        </p>
        <p class="mb-4">
          Use the measurement instructions and size charts below to determine the appropriate sizes for your organization's 
          uniform program. For bulk orders, consider requesting sample sizes to ensure proper fit before finalizing your order.
        </p>
      `
    },
    sections: [
      {
        title: 'How to Measure',
        content: `
          <p class="mb-4">For accurate measurements, we recommend using a flexible measuring tape and following these guidelines:</p>
          
          <div class="mb-6 bg-neutral-50 p-5 rounded-lg">
            <h4 class="font-bold text-lg mb-3">Chest/Bust</h4>
            <p class="mb-2">Measure around the fullest part of the chest/bust, keeping the tape horizontal.</p>
            <p class="italic text-sm text-neutral-600">For women: Wear a non-padded bra when taking this measurement.</p>
          </div>
          
          <div class="mb-6 bg-neutral-50 p-5 rounded-lg">
            <h4 class="font-bold text-lg mb-3">Waist</h4>
            <p>Measure around your natural waistline, keeping the tape comfortably loose.</p>
          </div>
          
          <div class="mb-6 bg-neutral-50 p-5 rounded-lg">
            <h4 class="font-bold text-lg mb-3">Hips</h4>
            <p>Measure around the fullest part of your hips, approximately 8 inches below your waistline.</p>
          </div>
          
          <div class="mb-6 bg-neutral-50 p-5 rounded-lg">
            <h4 class="font-bold text-lg mb-3">Inseam</h4>
            <p>Measure from the crotch to the bottom of the leg, where you want the hem to sit.</p>
          </div>
          
          <div class="mb-6 bg-neutral-50 p-5 rounded-lg">
            <h4 class="font-bold text-lg mb-3">Sleeve Length</h4>
            <p>Measure from the center back of the neck, over the shoulder, and down to the wrist.</p>
          </div>
          
          <div class="mb-6 bg-neutral-50 p-5 rounded-lg">
            <h4 class="font-bold text-lg mb-3">Neck</h4>
            <p>Measure around the base of the neck, where a collar would sit.</p>
          </div>
        `,
        image: '/images/default-placeholder.jpg',
      },
      {
        title: 'Standard Size Charts',
        content: `
          <p class="mb-6">
            The following size charts provide general guidelines. For industry-specific uniform categories, 
            please refer to the specialized charts below.
          </p>
          
          <h4 class="font-bold text-lg mb-3">Men's Tops (Inches)</h4>
          <div class="overflow-x-auto mb-6">
            <table class="min-w-full bg-white border border-neutral-200">
              <thead class="bg-neutral-50">
                <tr>
                  <th class="px-4 py-2 border border-neutral-200 text-left">Size</th>
                  <th class="px-4 py-2 border border-neutral-200 text-left">Chest</th>
                  <th class="px-4 py-2 border border-neutral-200 text-left">Waist</th>
                  <th class="px-4 py-2 border border-neutral-200 text-left">Neck</th>
                  <th class="px-4 py-2 border border-neutral-200 text-left">Sleeve</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="px-4 py-2 border border-neutral-200">S</td>
                  <td class="px-4 py-2 border border-neutral-200">35-37</td>
                  <td class="px-4 py-2 border border-neutral-200">29-31</td>
                  <td class="px-4 py-2 border border-neutral-200">14-14.5</td>
                  <td class="px-4 py-2 border border-neutral-200">32-33</td>
                </tr>
                <tr class="bg-neutral-50">
                  <td class="px-4 py-2 border border-neutral-200">M</td>
                  <td class="px-4 py-2 border border-neutral-200">38-40</td>
                  <td class="px-4 py-2 border border-neutral-200">32-34</td>
                  <td class="px-4 py-2 border border-neutral-200">15-15.5</td>
                  <td class="px-4 py-2 border border-neutral-200">33-34</td>
                </tr>
                <tr>
                  <td class="px-4 py-2 border border-neutral-200">L</td>
                  <td class="px-4 py-2 border border-neutral-200">41-43</td>
                  <td class="px-4 py-2 border border-neutral-200">35-37</td>
                  <td class="px-4 py-2 border border-neutral-200">16-16.5</td>
                  <td class="px-4 py-2 border border-neutral-200">34-35</td>
                </tr>
                <tr class="bg-neutral-50">
                  <td class="px-4 py-2 border border-neutral-200">XL</td>
                  <td class="px-4 py-2 border border-neutral-200">44-46</td>
                  <td class="px-4 py-2 border border-neutral-200">38-40</td>
                  <td class="px-4 py-2 border border-neutral-200">17-17.5</td>
                  <td class="px-4 py-2 border border-neutral-200">35-36</td>
                </tr>
                <tr>
                  <td class="px-4 py-2 border border-neutral-200">XXL</td>
                  <td class="px-4 py-2 border border-neutral-200">47-49</td>
                  <td class="px-4 py-2 border border-neutral-200">41-43</td>
                  <td class="px-4 py-2 border border-neutral-200">18-18.5</td>
                  <td class="px-4 py-2 border border-neutral-200">36-37</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h4 class="font-bold text-lg mb-3">Women's Tops (Inches)</h4>
          <div class="overflow-x-auto mb-6">
            <table class="min-w-full bg-white border border-neutral-200">
              <thead class="bg-neutral-50">
                <tr>
                  <th class="px-4 py-2 border border-neutral-200 text-left">Size</th>
                  <th class="px-4 py-2 border border-neutral-200 text-left">Bust</th>
                  <th class="px-4 py-2 border border-neutral-200 text-left">Waist</th>
                  <th class="px-4 py-2 border border-neutral-200 text-left">Hip</th>
                  <th class="px-4 py-2 border border-neutral-200 text-left">Sleeve</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="px-4 py-2 border border-neutral-200">XS</td>
                  <td class="px-4 py-2 border border-neutral-200">31-32</td>
                  <td class="px-4 py-2 border border-neutral-200">24-25</td>
                  <td class="px-4 py-2 border border-neutral-200">34-35</td>
                  <td class="px-4 py-2 border border-neutral-200">30-30.5</td>
                </tr>
                <tr class="bg-neutral-50">
                  <td class="px-4 py-2 border border-neutral-200">S</td>
                  <td class="px-4 py-2 border border-neutral-200">33-34</td>
                  <td class="px-4 py-2 border border-neutral-200">26-27</td>
                  <td class="px-4 py-2 border border-neutral-200">36-37</td>
                  <td class="px-4 py-2 border border-neutral-200">30.5-31</td>
                </tr>
                <tr>
                  <td class="px-4 py-2 border border-neutral-200">M</td>
                  <td class="px-4 py-2 border border-neutral-200">35-36</td>
                  <td class="px-4 py-2 border border-neutral-200">28-29</td>
                  <td class="px-4 py-2 border border-neutral-200">38-39</td>
                  <td class="px-4 py-2 border border-neutral-200">31-31.5</td>
                </tr>
                <tr class="bg-neutral-50">
                  <td class="px-4 py-2 border border-neutral-200">L</td>
                  <td class="px-4 py-2 border border-neutral-200">37-39</td>
                  <td class="px-4 py-2 border border-neutral-200">30-32</td>
                  <td class="px-4 py-2 border border-neutral-200">40-42</td>
                  <td class="px-4 py-2 border border-neutral-200">31.5-32</td>
                </tr>
                <tr>
                  <td class="px-4 py-2 border border-neutral-200">XL</td>
                  <td class="px-4 py-2 border border-neutral-200">40-42</td>
                  <td class="px-4 py-2 border border-neutral-200">33-35</td>
                  <td class="px-4 py-2 border border-neutral-200">43-45</td>
                  <td class="px-4 py-2 border border-neutral-200">32-32.5</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        image: '/images/product-placeholder.jpg',
      },
      {
        title: 'Industry-Specific Sizing',
        content: `
          <p class="mb-6">
            Different industries may require specific sizing considerations. Review the industry-specific 
            guidelines below for your uniform program.
          </p>
          
          <div class="mb-6 bg-neutral-50 p-5 rounded-lg">
            <h4 class="font-bold text-lg mb-3">Healthcare Uniforms</h4>
            <p class="mb-3">Healthcare professionals often prefer a looser fit for mobility and comfort during long shifts.</p>
            <ul class="list-disc pl-5 mb-3">
              <li>Consider sizing up for scrub tops if significant movement is required</li>
              <li>Lab coats typically fit over other clothing - account for layering</li>
              <li>Drawstring pants should sit comfortably at the waist without being restrictive</li>
            </ul>
          </div>
          
          <div class="mb-6 bg-neutral-50 p-5 rounded-lg">
            <h4 class="font-bold text-lg mb-3">Hospitality Uniforms</h4>
            <p class="mb-3">Front-of-house staff in hospitality settings often require more tailored fits for a polished appearance.</p>
            <ul class="list-disc pl-5 mb-3">
              <li>Dress shirts should allow for a finger's width of space at the collar</li>
              <li>Blazers and vests should button comfortably without pulling</li>
              <li>Consider tailoring options for a more custom appearance</li>
            </ul>
          </div>
          
          <div class="mb-6 bg-neutral-50 p-5 rounded-lg">
            <h4 class="font-bold text-lg mb-3">Industrial Workwear</h4>
            <p class="mb-3">Safety is paramount for industrial uniforms, with consideration for protective equipment.</p>
            <ul class="list-disc pl-5 mb-3">
              <li>Allow extra room for harnesses, tool belts, or safety equipment</li>
              <li>Coveralls should have sufficient length to cover clothing completely</li>
              <li>Long sleeves should extend to the wrist when arms are extended</li>
            </ul>
          </div>
        `,
        image: '/images/default-placeholder.jpg',
      }
    ],
    items: [
      {
        id: "mens-sizing",
        title: "Men's Sizing Guide",
        description: "Complete measurements and size charts for all men's uniform categories.",
        image: "/images/default-placeholder.jpg"
      },
      {
        id: "womens-sizing",
        title: "Women's Sizing Guide",
        description: "Detailed measurements for women's uniforms with size conversion tables.",
        image: "/images/default-placeholder.jpg"
      },
      {
        id: "measurement-guide",
        title: "Measurement Guide",
        description: "Instructions for taking accurate body measurements for the perfect uniform fit.",
        image: "/images/default-placeholder.jpg"
      },
      {
        id: "size-conversion",
        title: "Size Conversion Tables",
        description: "International size conversion charts for global uniform programs.",
        image: "/images/default-placeholder.jpg"
      }
    ],
    relatedResources: [
      {
        title: 'Fabric Guide',
        description: 'Understand the materials that make high-quality uniforms',
        link: '/resources/fabric-guide',
        icon: 'material'
      },
      {
        title: 'Fit Optimization',
        description: 'Tips for achieving the best fit across your organization',
        link: '/resources/fit-optimization',
        icon: 'fit'
      },
      {
        title: 'Custom Sizing Program',
        description: 'Learn about our custom sizing solutions for special requirements',
        link: '/services/custom-design',
        icon: 'tailor'
      }
    ],
    cta: {
      title: 'Need Sizing Assistance?',
      description: 'Our fitting specialists can help determine the right sizes for your team. Contact us to schedule a sizing consultation.',
      buttonText: 'Schedule a Consultation',
      buttonUrl: '/contact'
    }
  };

  return <ResourcePageLayout resourceData={resourceData} skipMainLayout={true} />;
} 