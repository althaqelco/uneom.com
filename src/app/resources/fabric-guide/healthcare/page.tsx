import React from 'react';
import { Metadata } from 'next';
import ResourcePageLayout from '@/components/layout/ResourcePageLayout';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'Healthcare Fabric Guide | Medical Uniform Materials in Saudi Arabia | UNEOM',
  description: 'Comprehensive guide to healthcare uniform fabrics in Saudi Arabia, including antimicrobial, fluid-resistant, and breathable materials for medical professionals.',
  keywords: 'healthcare fabrics, medical uniform materials, antimicrobial fabrics, Saudi Arabia medical textiles, hospital uniform guide, scrubs fabric, fluid-resistant materials',
  openGraph: {
    title: 'Healthcare Fabric Guide | Medical Uniform Materials in Saudi Arabia',
    description: 'Comprehensive guide to healthcare uniform fabrics in Saudi Arabia, including antimicrobial, fluid-resistant, and breathable materials for medical professionals.',
    images: [
      {
        url: 'https://uneom.com/images/healthcare/healthcare_medical_uniform.jpg',
        width: 1200,
        height: 630,
        alt: 'Healthcare professionals in Saudi Arabia wearing uniforms made with advanced medical-grade fabrics',
      },
    ],
  },
};

export default function HealthcareFabricGuidePage() {
  const resourceData = {
    locale: 'en',
    title: 'Healthcare Fabric Guide',
    subtitle: 'Advanced materials for Saudi Arabia\'s medical professionals',
    heroImage: '/images/healthcare/healthcare_medical_uniform.jpg',
    
    overview: {
      title: 'Selecting the Right Fabrics for Healthcare Environments',
      content: `
        <p>At UNEOM, we understand that healthcare uniforms require specialized fabrics that meet the unique demands of medical environments in Saudi Arabia. The right materials must balance infection control, comfort during long shifts, durability through frequent laundering, and compliance with healthcare facility regulations.</p>
        <p>This comprehensive guide explores the advanced textiles we use in our healthcare uniform solutions, their specific benefits, and how they address the particular challenges faced by medical professionals across the Kingdom.</p>
      `
    },
    
    sections: [
      {
        title: 'Antimicrobial and Fluid-Resistant Fabrics',
        content: `
          <p>Infection control is a critical concern in healthcare settings, making antimicrobial and fluid-resistant fabrics essential for medical uniforms in Saudi Arabia.</p>
          
          <h4 class="text-lg font-semibold mt-4 mb-2">MicroShield™ Technology</h4>
          <p>Our proprietary MicroShield™ fabric technology combines multiple protective properties essential for healthcare environments:</p>
          <ul class="list-disc pl-5 mb-4">
            <li>Built-in antimicrobial properties that inhibit the growth of bacteria, fungi, and certain viruses</li>
            <li>Fluid-repellent finish that prevents the absorption of bodily fluids and potential contaminants</li>
            <li>Maintains effectiveness through extensive industrial laundering cycles (up to 100+ washes)</li>
            <li>Non-leaching antimicrobial properties that remain active without releasing harmful substances</li>
          </ul>
          
          <h4 class="text-lg font-semibold mt-4 mb-2">Fluid Barrier Fabrics</h4>
          <p>For higher-risk environments such as emergency departments, surgical units, and laboratories, we offer specialized fluid barrier fabrics:</p>
          <ul class="list-disc pl-5 mb-4">
            <li><strong>FluiBlock Pro™</strong>: Impermeable to liquids while maintaining breathability through microporous technology</li>
            <li><strong>SplashGuard™</strong>: Targeted protection against fluid splashes with directional repellency</li>
            <li><strong>BarrierFlex™</strong>: Combines fluid barrier protection with enhanced stretch for unrestricted movement</li>
          </ul>
          
          <p>These technologies maintain their protective properties while being gentle on skin and compliant with all Saudi healthcare regulations for medical textiles.</p>
        `,
        image: '/images/healthcare/healthcare_medical_doctor_uniform.jpg'
      },
      {
        title: 'Climate-Optimized Comfort Fabrics',
        content: `
          <p>Saudi Arabia's climate presents unique challenges for healthcare professionals. Our climate-optimized fabrics address these specific needs through advanced textile engineering.</p>
          
          <h4 class="text-lg font-semibold mt-4 mb-2">CoolCore™ Technology</h4>
          <p>Designed specifically for Saudi Arabia's hot climate and air-conditioned medical facilities, CoolCore™ fabrics offer:</p>
          <ul class="list-disc pl-5 mb-4">
            <li>Advanced moisture-wicking properties that draw perspiration away from the body</li>
            <li>Quick-dry performance to prevent dampness during long shifts</li>
            <li>Thermoregulating properties that help maintain comfortable body temperature</li>
            <li>Four-way stretch that moves with the body during patient care activities</li>
          </ul>
          
          <h4 class="text-lg font-semibold mt-4 mb-2">TransTemp™ Fabric</h4>
          <p>Our innovative TransTemp™ fabric addresses the transition between outdoor heat and cold air-conditioned environments:</p>
          <ul class="list-disc pl-5 mb-4">
            <li>Adaptive insulation that adjusts to body temperature changes</li>
            <li>Breathable membrane technology that reduces temperature shock when moving between environments</li>
            <li>Lightweight construction that doesn't add bulk while providing comfort regulation</li>
          </ul>
          
          <div class="bg-blue-50 p-4 rounded-lg mt-4">
            <h5 class="font-semibold mb-2">Research-Backed Performance</h5>
            <p>In wear tests conducted at major Saudi healthcare facilities, medical professionals using our climate-optimized fabrics reported:</p>
            <ul class="list-disc pl-5">
              <li>43% reduction in perceived thermal discomfort during 12-hour shifts</li>
              <li>62% improvement in comfort ratings during peak summer months</li>
              <li>Significant decrease in moisture accumulation compared to standard scrubs</li>
            </ul>
          </div>
        `,
        image: '/images/healthcare/healthcare_nurce_uniform.jpg'
      },
      {
        title: 'Durability-Enhanced Medical Fabrics',
        content: `
          <p>Healthcare uniforms in Saudi Arabia undergo rigorous and frequent laundering, requiring exceptional durability without compromising performance or appearance.</p>
          
          <h4 class="text-lg font-semibold mt-4 mb-2">EnduraTech™ Fabrics</h4>
          <p>Our EnduraTech™ fabric blends are engineered specifically for the demanding laundering protocols of Saudi healthcare facilities:</p>
          <ul class="list-disc pl-5 mb-4">
            <li>Exceptional colorfastness that resists fading through industrial sanitization processes</li>
            <li>High tensile strength that prevents tearing and fabric degradation</li>
            <li>Reinforced seam technology for areas of high stress</li>
            <li>Resistance to pilling and abrasion even after hundreds of wash cycles</li>
            <li>Shape retention that maintains professional appearance throughout the garment lifecycle</li>
          </ul>
          
          <h4 class="text-lg font-semibold mt-4 mb-2">InduStrength™ Composition</h4>
          <p>For departments requiring maximum durability, such as emergency services and intensive care units, we offer InduStrength™ fabrics featuring:</p>
          <ul class="list-disc pl-5 mb-4">
            <li>Engineered fiber blends optimized for institutional laundering requirements</li>
            <li>Reinforced weave patterns that distribute tension across the fabric</li>
            <li>Specialized treatments that protect against chlorine and harsh disinfectants</li>
            <li>Quick-drying properties to accommodate frequent laundering schedules</li>
          </ul>
          
          <p>These durability enhancements translate to extended uniform lifecycles, reducing replacement frequency and improving cost-effectiveness for Saudi healthcare facilities.</p>
        `,
        image: '/images/healthcare/2_pices_nurce_uniform.jpg'
      },
      {
        title: 'Specialized Modesty-Conscious Medical Fabrics',
        content: `
          <p>Respecting cultural and religious preferences is essential in Saudi healthcare environments. Our specialized modest medical fabrics combine professional functionality with appropriate coverage.</p>
          
          <h4 class="text-lg font-semibold mt-4 mb-2">ModestCare™ Fabric Solutions</h4>
          <p>Our ModestCare™ fabric technology addresses the specific needs of healthcare professionals seeking modest uniform options:</p>
          <ul class="list-disc pl-5 mb-4">
            <li>Lightweight, opaque constructions that provide complete coverage without added bulk</li>
            <li>Enhanced breathability despite fuller coverage to maintain comfort</li>
            <li>Specially engineered drape that allows for modest silhouettes while permitting freedom of movement</li>
            <li>Wrinkle-resistant properties that maintain a professional appearance throughout long shifts</li>
          </ul>
          
          <h4 class="text-lg font-semibold mt-4 mb-2">Hijab-Compatible Performance Fabrics</h4>
          <p>For female healthcare professionals who wear hijab, we offer specialized fabrics that address unique considerations:</p>
          <ul class="list-disc pl-5 mb-4">
            <li>Breathable, lightweight constructions that minimize heat retention around the head and neck</li>
            <li>Quick-drying properties to enhance comfort during active patient care</li>
            <li>Antimicrobial treatments specifically formulated for head coverings</li>
            <li>Secure-fit textures that reduce the need for adjustment during procedures</li>
          </ul>
          
          <p>These modesty-conscious fabrics maintain all the technical performance qualities of our standard healthcare fabrics while offering appropriate coverage options for Saudi medical professionals.</p>
        `,
        image: '/images/healthcare/medical_hijab_uniform.jpg'
      },
      {
        title: 'Department-Specific Fabric Solutions',
        content: `
          <p>Different healthcare departments face unique challenges requiring specialized fabric solutions tailored to their specific environments and activities.</p>
          
          <h4 class="text-lg font-semibold mt-4 mb-2">Surgical Settings</h4>
          <p>Our surgical fabric solutions address the intense demands of operating environments:</p>
          <ul class="list-disc pl-5 mb-4">
            <li><strong>SterileGuard™</strong>: Advanced barrier technology that prevents microbial penetration</li>
            <li><strong>ThermalBalance™</strong>: Regulates body temperature under surgical lighting</li>
            <li><strong>LintMinimal™</strong>: Reduces particulate shedding to maintain clean environments</li>
            <li><strong>ComfortFlex™</strong>: Provides stretch in strategic areas for extended procedures</li>
          </ul>
          
          <h4 class="text-lg font-semibold mt-4 mb-2">Emergency and Trauma Departments</h4>
          <p>Emergency settings require fabrics that can withstand unpredictable challenges:</p>
          <ul class="list-disc pl-5 mb-4">
            <li><strong>RapidRepel™</strong>: Instantaneous fluid repellency for sudden exposure situations</li>
            <li><strong>DuraTough™</strong>: Enhanced abrasion resistance for high-activity environments</li>
            <li><strong>QuickClean™</strong>: Allows for rapid spot cleaning between patient encounters</li>
            <li><strong>MaxFlex™</strong>: Maximum stretch capability for emergency response movements</li>
          </ul>
          
          <h4 class="text-lg font-semibold mt-4 mb-2">Laboratory and Diagnostic Services</h4>
          <p>Laboratory professionals benefit from fabrics specifically designed for their environment:</p>
          <ul class="list-disc pl-5 mb-4">
            <li><strong>ChemShield™</strong>: Resistant to common laboratory chemicals and reagents</li>
            <li><strong>StainGuard™</strong>: Prevents permanent staining from biological samples and dyes</li>
            <li><strong>StaticControl™</strong>: Reduces static electricity in sensitive testing environments</li>
            <li><strong>ComfortWeave™</strong>: Enhances comfort during long periods of precision work</li>
          </ul>
          
          <p>These specialized fabrics ensure that every healthcare professional in Saudi Arabian medical facilities has access to uniform materials optimized for their specific working conditions.</p>
        `,
        image: '/images/healthcare/healthcare_hijab_doctor.jpg'
      }
    ],
    
    items: [
      {
        id: 'microshield',
        title: 'MicroShield™ Antimicrobial Fabric',
        description: 'Advanced antimicrobial protection designed specifically for healthcare environments in Saudi Arabia',
        image: '/images/healthcare/healthcare_medical_uniform.jpg'
      },
      {
        id: 'coolcore',
        title: 'CoolCore™ Climate-Optimized Fabric',
        description: 'Temperature-regulating technology for comfort in Saudi Arabia\'s climate',
        image: '/images/healthcare/healthcare_nurce_uniform.jpg'
      },
      {
        id: 'modestcare',
        title: 'ModestCare™ Medical Fabrics',
        description: 'Professional healthcare fabrics designed with modesty and cultural considerations in mind',
        image: '/images/healthcare/medical_hijab_uniform.jpg'
      }
    ],
    
    cta: {
      title: 'Need Help Selecting the Right Healthcare Fabrics?',
      description: 'Our textile experts can help you choose the optimal fabric solutions for your healthcare facility\'s specific requirements.',
      buttonText: 'Schedule a Consultation',
      buttonUrl: '/contact'
    }
  };

  return <ResourcePageLayout resourceData={resourceData} />;
} 