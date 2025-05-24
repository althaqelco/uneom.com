'use client';

import React from 'react';
import ResourcePageLayout from '@/components/layout/ResourcePageLayout';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function FabricGuidePage() {
  const resourceData = {
    locale: 'en',
    title: "UNEOM - Professional Uniforms",
    subtitle: 'Understanding the materials that make quality uniforms',
    heroImage: '/images/default-placeholder.jpg',
    
    overview: {
      title: 'The Importance of Fabric Selection',
      content: `
        <p>At UNEOM, we understand that the foundation of an exceptional uniform lies in the quality and appropriateness of its fabric. The right material not only enhances comfort and durability but also contributes to the overall professional appearance and functionality required by different industries.</p>
        <p>This comprehensive fabric guide is designed to help you understand the various textiles we use in our uniform solutions, their characteristics, advantages, and ideal applications across different work environments.</p>
      `
    },
    
    sections: [
      {
        title: 'Cotton and Cotton Blends',
        content: `
          <p>Cotton is prized for its exceptional breathability, softness, and moisture-absorbing qualities. It's ideal for environments where comfort and hypoallergenic properties are paramount.</p>
          
          <h4 class="text-lg font-semibold mt-4 mb-2">Key Benefits:</h4>
          <ul class="list-disc pl-5 mb-4">
            <li>Natural breathability and comfort</li>
            <li>Excellent moisture absorption</li>
            <li>Hypoallergenic and gentle on skin</li>
            <li>Gets softer with each wash</li>
          </ul>
          
          <h4 class="text-lg font-semibold mt-4 mb-2">Common Applications:</h4>
          <ul class="list-disc pl-5 mb-4">
            <li>Healthcare uniforms in non-critical areas</li>
            <li>Hospitality uniforms for hot environments</li>
            <li>Corporate casual wear</li>
          </ul>
          
          <h4 class="text-lg font-semibold mt-4 mb-2">Cotton Blends:</h4>
          <p>Cotton is often blended with synthetic fibers like polyester or elastane to enhance performance while maintaining comfort:</p>
          <ul class="list-disc pl-5">
            <li><strong>Cotton-Polyester (65/35 or 50/50):</strong> Combines comfort with wrinkle resistance and durability</li>
            <li><strong>Cotton-Elastane:</strong> Adds stretch and flexibility to cotton garments</li>
          </ul>
        `,
        image: '/images/default-placeholder.jpg'
      },
      {
        title: 'Polyester and Synthetic Fabrics',
        content: `
          <p>Modern polyester and other synthetic fabrics have come a long way from their early iterations. Today's advanced synthetic textiles offer exceptional durability, color retention, and easy-care properties that make them ideal for demanding uniform applications.</p>
          
          <h4 class="text-lg font-semibold mt-4 mb-2">Key Benefits:</h4>
          <ul class="list-disc pl-5 mb-4">
            <li>Superior durability and longevity</li>
            <li>Excellent color retention</li>
            <li>Wrinkle and fade resistance</li>
            <li>Quick-drying properties</li>
            <li>Low maintenance and easy care</li>
          </ul>
          
          <h4 class="text-lg font-semibold mt-4 mb-2">Common Applications:</h4>
          <ul class="list-disc pl-5 mb-4">
            <li>Corporate uniforms requiring crisp appearance</li>
            <li>Security and formal workwear</li>
            <li>Outdoor work environments</li>
          </ul>
          
          <h4 class="text-lg font-semibold mt-4 mb-2">Advanced Synthetic Options:</h4>
          <ul class="list-disc pl-5">
            <li><strong>Micro-Polyester:</strong> Finer threads create a softer, more breathable fabric</li>
            <li><strong>Recycled Polyester:</strong> Eco-friendly option made from recycled plastic</li>
            <li><strong>Poly-Spandex Blends:</strong> Adds stretch while maintaining polyester's benefits</li>
          </ul>
        `,
        image: '/images/default-placeholder.jpg'
      },
      {
        title: 'Performance and Technical Fabrics',
        content: `
          <p>Modern performance fabrics incorporate advanced technologies to provide specific functional benefits crucial for specialized work environments, from moisture management to antimicrobial protection.</p>
          
          <h4 class="text-lg font-semibold mt-4 mb-2">UNEOM's Premium Performance Technologies:</h4>
          
          <div class="mt-4">
            <h5 class="font-medium">DryTech™</h5>
            <p>Our moisture-wicking technology that draws perspiration away from the body to the outer surface of the fabric where it can evaporate quickly, keeping wearers dry and comfortable.</p>
          </div>
          
          <div class="mt-4">
            <h5 class="font-medium">MicroGuard™</h5>
            <p>Antimicrobial treatment that inhibits the growth of bacteria, fungi, and other microorganisms, reducing odors and extending garment freshness between washes.</p>
          </div>
          
          <div class="mt-4">
            <h5 class="font-medium">DuraFlex™</h5>
            <p>Enhanced stretch and recovery properties that allow for maximum movement and comfort without sacrificing professional appearance.</p>
          </div>
          
          <div class="mt-4">
            <h5 class="font-medium">ThermoBalance™</h5>
            <p>Temperature-regulating technology that helps maintain optimal body temperature in changing environments.</p>
          </div>
          
          <h4 class="text-lg font-semibold mt-4 mb-2">Common Applications:</h4>
          <ul class="list-disc pl-5">
            <li>Healthcare uniforms in critical care environments</li>
            <li>Culinary uniforms for hot kitchens</li>
            <li>Security and outdoor workwear</li>
            <li>Aviation uniforms requiring maximum comfort during long shifts</li>
          </ul>
        `,
        image: '/images/default-placeholder.jpg'
      },
      {
        title: 'Sustainable and Eco-Friendly Options',
        content: `
          <p>As part of our commitment to environmental responsibility, UNEOM offers a growing range of sustainable fabric options that reduce environmental impact without compromising on quality or performance.</p>
          
          <h4 class="text-lg font-semibold mt-4 mb-2">Our Eco-Conscious Fabrics:</h4>
          
          <div class="mt-4">
            <h5 class="font-medium">Organic Cotton</h5>
            <p>Grown without synthetic pesticides or fertilizers, organic cotton reduces environmental impact while providing all the comfort benefits of traditional cotton.</p>
          </div>
          
          <div class="mt-4">
            <h5 class="font-medium">Recycled Polyester (rPET)</h5>
            <p>Made from post-consumer plastic bottles, our recycled polyester reduces waste while maintaining the durability and performance of traditional polyester.</p>
          </div>
          
          <div class="mt-4">
            <h5 class="font-medium">TENCEL™ Lyocell</h5>
            <p>A sustainable fiber made from wood pulp from responsibly harvested forests. It offers exceptional breathability, moisture management, and a silky-smooth feel.</p>
          </div>
          
          <div class="mt-4">
            <h5 class="font-medium">EcoTwill™</h5>
            <p>Our proprietary blend of recycled and sustainable fibers, designed to minimize environmental impact while maximizing durability and performance.</p>
          </div>
          
          <p class="mt-4">Our sustainable uniform options are particularly popular in corporate environments, educational institutions, and organizations with strong environmental commitments.</p>
        `,
        image: '/images/default-placeholder.jpg'
      }
    ],
    
    items: [
      {
        id: 'cotton',
        title: 'Premium Cotton',
        description: 'Our highest quality 100% cotton fabric, ideal for comfort and breathability in moderate climates.',
        image: '/images/default-placeholder.jpg',
        properties: {
          'Composition': '100% Cotton',
          'Weight': '180-220 GSM',
          'Breathability': 'Excellent',
          'Durability': 'Good',
          'Maintenance': 'Regular washing'
        }
      },
      {
        id: 'poly-cotton',
        title: 'Poly-Cotton Blend',
        description: 'The perfect balance of comfort and durability, with enhanced wrinkle resistance.',
        image: '/images/default-placeholder.jpg',
        properties: {
          'Composition': '65% Polyester, 35% Cotton',
          'Weight': '190-240 GSM',
          'Breathability': 'Good',
          'Durability': 'Excellent',
          'Maintenance': 'Easy care'
        }
      },
      {
        id: 'performance',
        title: 'Performance Fabric',
        description: 'Advanced technical fabric with moisture-wicking and antimicrobial properties.',
        image: '/images/default-placeholder.jpg',
        properties: {
          'Composition': 'Poly-Spandex Blend',
          'Weight': '160-200 GSM',
          'Breathability': 'Excellent',
          'Durability': 'Very High',
          'Maintenance': 'Minimal care needed'
        }
      }
    ],
    
    relatedResources: [
      {
        title: 'Size Guide',
        description: 'Find the perfect fit for all our uniform styles with our comprehensive sizing charts.',
        link: '/resources/size-guide',
        icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h10a2 2 0 012 2v12a4 4 0 01-4 4H7m-4-4v-6a3 3 0 013-3h10a3 3 0 013 3v6m0 0a2 2 0 01-2 2h-4a2 2 0 01-2-2v-2a2 2 0 012-2h4a2 2 0 012 2v2z'
      },
      {
        title: 'Care & Maintenance Guide',
        description: 'Learn how to properly care for your uniforms to extend their life and maintain appearance.',
        link: '/blog/uniform-care-maintenance',
        icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h10a2 2 0 012 2v12a4 4 0 01-4 4H7m6-4h3a5 5 0 005-5V6a2 2 0 00-2-2H4a2 2 0 00-2 2v6a5 5 0 005 5h3'
      },
      {
        title: 'Customization Options',
        description: 'Explore ways to personalize your uniforms with embroidery, printing, and special features.',
        link: '/services/custom-design',
        icon: 'M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122'
      }
    ],
    
    cta: {
      title: 'Need Help Selecting the Right Fabric?',
      description: 'Our uniform consultants can guide you through fabric options to find the perfect match for your specific needs.',
      buttonText: 'Request a Consultation',
      buttonUrl: '/contact?inquiry=fabric-consultation'
    }
  };
  
  return <ResourcePageLayout resourceData={resourceData} skipMainLayout={true} />;
} 