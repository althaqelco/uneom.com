import React from 'react';
import { Metadata } from 'next';
import ResourcePageLayout from '@/components/layout/ResourcePageLayout';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'Medical Uniform Size Guide | Healthcare Scrubs Sizing in Saudi Arabia | UNEOM',
  description: 'Comprehensive sizing guide for medical uniforms in Saudi Arabia, including measurement charts for scrubs, lab coats, and nursing uniforms to ensure proper fit.',
  keywords: 'medical uniform sizing, healthcare scrubs size guide, Saudi Arabia medical uniform measurements, lab coat sizing, nursing uniform fit, hospital uniform sizes',
  openGraph: {
    title: 'Medical Uniform Size Guide | Healthcare Scrubs Sizing in Saudi Arabia',
    description: 'Comprehensive sizing guide for medical uniforms in Saudi Arabia, including measurement charts for scrubs, lab coats, and nursing uniforms to ensure proper fit.',
    images: [
      {
        url: 'https://uneom.com/images/healthcare/healthcare_medical_uniform.jpg',
        width: 1200,
        height: 630,
        alt: 'Healthcare professionals in properly fitted medical uniforms in Saudi Arabia',
      },
    ],
  },
};

export default function MedicalSizeGuidePage() {
  const resourceData = {
    locale: 'en',
    title: 'Medical Uniform Size Guide',
    subtitle: 'Finding the perfect fit for Saudi healthcare professionals',
    heroImage: '/images/healthcare/healthcare_medical_uniform.jpg',
    
    overview: {
      title: 'The Importance of Proper Fit in Medical Environments',
      content: `
        <p>At UNEOM, we understand that properly fitted medical uniforms are essential for healthcare professionals in Saudi Arabia. The right fit ensures comfort during long shifts, freedom of movement during patient care, and a professional appearance that instills confidence.</p>
        <p>This comprehensive sizing guide is designed to help Saudi healthcare facilities and individual professionals find the perfect fit for various medical uniform pieces, from scrubs and lab coats to specialized departmental attire.</p>
      `
    },
    
    sections: [
      {
        title: 'How to Measure for Medical Uniforms',
        content: `
          <p>Taking accurate measurements is the first step to finding the perfect fit for your medical uniforms. Follow these guidelines for precise results:</p>
          
          <h4 class="text-lg font-semibold mt-4 mb-2">Essential Measurements for Healthcare Professionals</h4>
          <ul class="list-disc pl-5 mb-4">
            <li><strong>Chest/Bust:</strong> Measure at the fullest part, keeping the tape measure parallel to the floor</li>
            <li><strong>Waist:</strong> Measure at your natural waistline, typically the narrowest part of your torso</li>
            <li><strong>Hips:</strong> Measure around the fullest part of your hips and buttocks</li>
            <li><strong>Inseam:</strong> Measure from the crotch seam to the desired pant length</li>
            <li><strong>Shoulders:</strong> Measure across the back from the edge of one shoulder to the other</li>
            <li><strong>Sleeve Length:</strong> Measure from the shoulder seam to the desired sleeve end</li>
          </ul>
          
          <div class="bg-blue-50 p-4 rounded-lg mt-4 mb-6">
            <h5 class="font-semibold mb-2">Pro Measurement Tips:</h5>
            <ul class="list-disc pl-5">
              <li>Have someone else take your measurements for the most accurate results</li>
              <li>Wear fitted clothing when being measured, not bulky items</li>
              <li>Stand naturally with arms relaxed at sides for most measurements</li>
              <li>Use a fabric measuring tape, not a metal construction tape</li>
              <li>When in doubt between sizes, choose the larger size for comfort</li>
            </ul>
          </div>
          
          <p>For the most accurate fit, consider scheduling a professional fitting session with our UNEOM specialists, available at our locations in Riyadh, Jeddah, and Dammam.</p>
        `,
        image: '/images/healthcare/healthcare_hijab_doctor.jpg'
      },
      {
        title: 'Medical Scrubs Sizing Charts',
        content: `
          <p>Medical scrubs are the foundation of many healthcare professionals' wardrobes. Our Saudi-specific sizing takes into account local preferences for fit and coverage.</p>
          
          <h4 class="text-lg font-semibold mt-4 mb-2">Women's Scrub Tops (Measurements in cm)</h4>
          <div class="overflow-x-auto mb-6">
            <table class="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr class="bg-gray-100">
                  <th class="border border-gray-300 px-4 py-2">Size</th>
                  <th class="border border-gray-300 px-4 py-2">Bust</th>
                  <th class="border border-gray-300 px-4 py-2">Waist</th>
                  <th class="border border-gray-300 px-4 py-2">Hip</th>
                  <th class="border border-gray-300 px-4 py-2">Length</th>
                  <th class="border border-gray-300 px-4 py-2">Shoulder</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 px-4 py-2">XS</td>
                  <td class="border border-gray-300 px-4 py-2">86-90</td>
                  <td class="border border-gray-300 px-4 py-2">66-70</td>
                  <td class="border border-gray-300 px-4 py-2">91-95</td>
                  <td class="border border-gray-300 px-4 py-2">68</td>
                  <td class="border border-gray-300 px-4 py-2">37</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-2">S</td>
                  <td class="border border-gray-300 px-4 py-2">91-95</td>
                  <td class="border border-gray-300 px-4 py-2">71-75</td>
                  <td class="border border-gray-300 px-4 py-2">96-100</td>
                  <td class="border border-gray-300 px-4 py-2">69</td>
                  <td class="border border-gray-300 px-4 py-2">38</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-2">M</td>
                  <td class="border border-gray-300 px-4 py-2">96-100</td>
                  <td class="border border-gray-300 px-4 py-2">76-80</td>
                  <td class="border border-gray-300 px-4 py-2">101-105</td>
                  <td class="border border-gray-300 px-4 py-2">70</td>
                  <td class="border border-gray-300 px-4 py-2">39</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-2">L</td>
                  <td class="border border-gray-300 px-4 py-2">101-105</td>
                  <td class="border border-gray-300 px-4 py-2">81-85</td>
                  <td class="border border-gray-300 px-4 py-2">106-110</td>
                  <td class="border border-gray-300 px-4 py-2">71</td>
                  <td class="border border-gray-300 px-4 py-2">40</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-2">XL</td>
                  <td class="border border-gray-300 px-4 py-2">106-110</td>
                  <td class="border border-gray-300 px-4 py-2">86-90</td>
                  <td class="border border-gray-300 px-4 py-2">111-115</td>
                  <td class="border border-gray-300 px-4 py-2">72</td>
                  <td class="border border-gray-300 px-4 py-2">41</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-2">2XL</td>
                  <td class="border border-gray-300 px-4 py-2">111-115</td>
                  <td class="border border-gray-300 px-4 py-2">91-95</td>
                  <td class="border border-gray-300 px-4 py-2">116-120</td>
                  <td class="border border-gray-300 px-4 py-2">73</td>
                  <td class="border border-gray-300 px-4 py-2">42</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-2">3XL</td>
                  <td class="border border-gray-300 px-4 py-2">116-120</td>
                  <td class="border border-gray-300 px-4 py-2">96-100</td>
                  <td class="border border-gray-300 px-4 py-2">121-125</td>
                  <td class="border border-gray-300 px-4 py-2">74</td>
                  <td class="border border-gray-300 px-4 py-2">43</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h4 class="text-lg font-semibold mt-4 mb-2">Men's Scrub Tops (Measurements in cm)</h4>
          <div class="overflow-x-auto mb-6">
            <table class="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr class="bg-gray-100">
                  <th class="border border-gray-300 px-4 py-2">Size</th>
                  <th class="border border-gray-300 px-4 py-2">Chest</th>
                  <th class="border border-gray-300 px-4 py-2">Waist</th>
                  <th class="border border-gray-300 px-4 py-2">Length</th>
                  <th class="border border-gray-300 px-4 py-2">Shoulder</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 px-4 py-2">XS</td>
                  <td class="border border-gray-300 px-4 py-2">86-90</td>
                  <td class="border border-gray-300 px-4 py-2">76-80</td>
                  <td class="border border-gray-300 px-4 py-2">71</td>
                  <td class="border border-gray-300 px-4 py-2">42</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-2">S</td>
                  <td class="border border-gray-300 px-4 py-2">91-95</td>
                  <td class="border border-gray-300 px-4 py-2">81-85</td>
                  <td class="border border-gray-300 px-4 py-2">72</td>
                  <td class="border border-gray-300 px-4 py-2">43</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-2">M</td>
                  <td class="border border-gray-300 px-4 py-2">96-100</td>
                  <td class="border border-gray-300 px-4 py-2">86-90</td>
                  <td class="border border-gray-300 px-4 py-2">73</td>
                  <td class="border border-gray-300 px-4 py-2">44</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-2">L</td>
                  <td class="border border-gray-300 px-4 py-2">101-105</td>
                  <td class="border border-gray-300 px-4 py-2">91-95</td>
                  <td class="border border-gray-300 px-4 py-2">74</td>
                  <td class="border border-gray-300 px-4 py-2">45</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-2">XL</td>
                  <td class="border border-gray-300 px-4 py-2">106-110</td>
                  <td class="border border-gray-300 px-4 py-2">96-100</td>
                  <td class="border border-gray-300 px-4 py-2">75</td>
                  <td class="border border-gray-300 px-4 py-2">46</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-2">2XL</td>
                  <td class="border border-gray-300 px-4 py-2">111-115</td>
                  <td class="border border-gray-300 px-4 py-2">101-105</td>
                  <td class="border border-gray-300 px-4 py-2">76</td>
                  <td class="border border-gray-300 px-4 py-2">47</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-2">3XL</td>
                  <td class="border border-gray-300 px-4 py-2">116-120</td>
                  <td class="border border-gray-300 px-4 py-2">106-110</td>
                  <td class="border border-gray-300 px-4 py-2">77</td>
                  <td class="border border-gray-300 px-4 py-2">48</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p>Our medical scrubs include features specifically designed for the Saudi market, including modest fit options, extended length variants, and specialized cuts for healthcare professionals who wear hijab.</p>
        `,
        image: '/images/healthcare/healthcare_nurce_uniform.jpg'
      },
      {
        title: 'Lab Coat and Medical Jacket Sizing',
        content: `
          <p>Lab coats and medical jackets require precise sizing to ensure a professional appearance while allowing freedom of movement in clinical settings.</p>
          
          <h4 class="text-lg font-semibold mt-4 mb-2">Women's Lab Coats (Measurements in cm)</h4>
          <div class="overflow-x-auto mb-6">
            <table class="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr class="bg-gray-100">
                  <th class="border border-gray-300 px-4 py-2">Size</th>
                  <th class="border border-gray-300 px-4 py-2">Bust</th>
                  <th class="border border-gray-300 px-4 py-2">Waist</th>
                  <th class="border border-gray-300 px-4 py-2">Hip</th>
                  <th class="border border-gray-300 px-4 py-2">Length</th>
                  <th class="border border-gray-300 px-4 py-2">Sleeve</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 px-4 py-2">XS</td>
                  <td class="border border-gray-300 px-4 py-2">86-90</td>
                  <td class="border border-gray-300 px-4 py-2">66-70</td>
                  <td class="border border-gray-300 px-4 py-2">91-95</td>
                  <td class="border border-gray-300 px-4 py-2">85</td>
                  <td class="border border-gray-300 px-4 py-2">57</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-2">S</td>
                  <td class="border border-gray-300 px-4 py-2">91-95</td>
                  <td class="border border-gray-300 px-4 py-2">71-75</td>
                  <td class="border border-gray-300 px-4 py-2">96-100</td>
                  <td class="border border-gray-300 px-4 py-2">86</td>
                  <td class="border border-gray-300 px-4 py-2">58</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-2">M</td>
                  <td class="border border-gray-300 px-4 py-2">96-100</td>
                  <td class="border border-gray-300 px-4 py-2">76-80</td>
                  <td class="border border-gray-300 px-4 py-2">101-105</td>
                  <td class="border border-gray-300 px-4 py-2">87</td>
                  <td class="border border-gray-300 px-4 py-2">59</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-2">L</td>
                  <td class="border border-gray-300 px-4 py-2">101-105</td>
                  <td class="border border-gray-300 px-4 py-2">81-85</td>
                  <td class="border border-gray-300 px-4 py-2">106-110</td>
                  <td class="border border-gray-300 px-4 py-2">88</td>
                  <td class="border border-gray-300 px-4 py-2">60</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-2">XL</td>
                  <td class="border border-gray-300 px-4 py-2">106-110</td>
                  <td class="border border-gray-300 px-4 py-2">86-90</td>
                  <td class="border border-gray-300 px-4 py-2">111-115</td>
                  <td class="border border-gray-300 px-4 py-2">89</td>
                  <td class="border border-gray-300 px-4 py-2">61</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-2">2XL</td>
                  <td class="border border-gray-300 px-4 py-2">111-115</td>
                  <td class="border border-gray-300 px-4 py-2">91-95</td>
                  <td class="border border-gray-300 px-4 py-2">116-120</td>
                  <td class="border border-gray-300 px-4 py-2">90</td>
                  <td class="border border-gray-300 px-4 py-2">62</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h4 class="text-lg font-semibold mt-6 mb-2">Men's Lab Coats (Measurements in cm)</h4>
          <div class="overflow-x-auto mb-6">
            <table class="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr class="bg-gray-100">
                  <th class="border border-gray-300 px-4 py-2">Size</th>
                  <th class="border border-gray-300 px-4 py-2">Chest</th>
                  <th class="border border-gray-300 px-4 py-2">Waist</th>
                  <th class="border border-gray-300 px-4 py-2">Length</th>
                  <th class="border border-gray-300 px-4 py-2">Sleeve</th>
                  <th class="border border-gray-300 px-4 py-2">Shoulder</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 px-4 py-2">XS</td>
                  <td class="border border-gray-300 px-4 py-2">86-90</td>
                  <td class="border border-gray-300 px-4 py-2">76-80</td>
                  <td class="border border-gray-300 px-4 py-2">90</td>
                  <td class="border border-gray-300 px-4 py-2">60</td>
                  <td class="border border-gray-300 px-4 py-2">42</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-2">S</td>
                  <td class="border border-gray-300 px-4 py-2">91-95</td>
                  <td class="border border-gray-300 px-4 py-2">81-85</td>
                  <td class="border border-gray-300 px-4 py-2">91</td>
                  <td class="border border-gray-300 px-4 py-2">61</td>
                  <td class="border border-gray-300 px-4 py-2">43</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-2">M</td>
                  <td class="border border-gray-300 px-4 py-2">96-100</td>
                  <td class="border border-gray-300 px-4 py-2">86-90</td>
                  <td class="border border-gray-300 px-4 py-2">92</td>
                  <td class="border border-gray-300 px-4 py-2">62</td>
                  <td class="border border-gray-300 px-4 py-2">44</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-2">L</td>
                  <td class="border border-gray-300 px-4 py-2">101-105</td>
                  <td class="border border-gray-300 px-4 py-2">91-95</td>
                  <td class="border border-gray-300 px-4 py-2">93</td>
                  <td class="border border-gray-300 px-4 py-2">63</td>
                  <td class="border border-gray-300 px-4 py-2">45</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-2">XL</td>
                  <td class="border border-gray-300 px-4 py-2">106-110</td>
                  <td class="border border-gray-300 px-4 py-2">96-100</td>
                  <td class="border border-gray-300 px-4 py-2">94</td>
                  <td class="border border-gray-300 px-4 py-2">64</td>
                  <td class="border border-gray-300 px-4 py-2">46</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 px-4 py-2">2XL</td>
                  <td class="border border-gray-300 px-4 py-2">111-115</td>
                  <td class="border border-gray-300 px-4 py-2">101-105</td>
                  <td class="border border-gray-300 px-4 py-2">95</td>
                  <td class="border border-gray-300 px-4 py-2">65</td>
                  <td class="border border-gray-300 px-4 py-2">47</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div class="bg-yellow-50 p-4 rounded-lg mt-4 mb-6">
            <h5 class="font-semibold mb-2">Lab Coat Fit Guide:</h5>
            <ul class="list-disc pl-5">
              <li>For professionals who wear layers underneath, consider sizing up</li>
              <li>Lab coats should allow comfortable arm movement when extended forward</li>
              <li>Female professionals who wear hijab may prefer our specialized modest fit lab coats with adjusted shoulder and chest dimensions</li>
              <li>The bottom of the lab coat should fall at mid-thigh to knee level, depending on style and preference</li>
              <li>Sleeve length should end just above the wrist bone for optimal functionality and cleanliness</li>
            </ul>
          </div>
          
          <p>UNEOM offers custom embroidery options for all lab coats, including names, credentials, department information, and hospital logos to enhance professional appearance.</p>
        `,
        image: '/images/healthcare/healthcare_medical_doctor_uniform.jpg'
      },
      {
        title: 'Specialized Sizing and Custom Uniform Options',
        content: `
          <p>We understand that standard sizing doesn't always meet the needs of every healthcare professional. UNEOM offers specialized sizing and custom uniform options for the Saudi healthcare market.</p>
          
          <h4 class="text-lg font-semibold mt-4 mb-2">Extended Size Range</h4>
          <p>Our extended size range goes beyond standard offerings:</p>
          <ul class="list-disc pl-5 mb-4">
            <li>Women's sizes from 2XS to 5XL</li>
            <li>Men's sizes from XS to 5XL</li>
            <li>Tall options with additional length in torso and sleeves</li>
            <li>Petite options with adjusted proportions for smaller frames</li>
          </ul>
          
          <h4 class="text-lg font-semibold mt-4 mb-2">Custom Uniform Program</h4>
          <p>For healthcare facilities with specific requirements, our custom uniform program offers:</p>
          <ul class="list-disc pl-5 mb-4">
            <li>Made-to-measure options for staff with unique sizing needs</li>
            <li>Department-specific modifications to standard patterns</li>
            <li>Specialized designs for different medical roles and functions</li>
            <li>Adaptations for specific medical environments and requirements</li>
            <li>Custom color matching to facility branding standards</li>
          </ul>
          
          <h4 class="text-lg font-semibold mt-4 mb-2">Modest Fit Options</h4>
          <p>Our modest fit collection is specifically designed for Saudi healthcare professionals with cultural and religious preferences:</p>
          <ul class="list-disc pl-5 mb-4">
            <li>Looser fit through chest, waist, and hips for increased coverage</li>
            <li>Extended sleeve and pant lengths</li>
            <li>Higher necklines and longer hemlines</li>
            <li>Specialized hijab-compatible designs that maintain professional appearance</li>
            <li>Layering pieces designed to work seamlessly with medical uniforms</li>
          </ul>
          
          <p>The modest fit collection maintains all the functional features of our standard medical uniforms while providing appropriate coverage options that comply with cultural preferences in Saudi healthcare environments.</p>
        `,
        image: '/images/healthcare/medical_hijab_uniform.jpg'
      }
    ],
    
    items: [
      {
        id: 'womens-scrubs',
        title: 'Women\'s Medical Scrubs Size Guide',
        description: 'Comprehensive sizing information for women\'s medical scrubs, including standard and modest fit options',
        image: '/images/healthcare/healthcare_nurce_uniform.jpg'
      },
      {
        id: 'mens-scrubs',
        title: 'Men\'s Medical Scrubs Size Guide',
        description: 'Detailed measurements and fit guidance for men\'s medical scrubs and healthcare uniforms',
        image: '/images/healthcare/healthcare_medical_uniform.jpg'
      },
      {
        id: 'lab-coats',
        title: 'Lab Coat Sizing Guide',
        description: 'Professional lab coat measurements for physicians, researchers, and healthcare specialists',
        image: '/images/healthcare/healthcare_medical_doctor_uniform.jpg'
      }
    ],
    
    cta: {
      title: 'Need Help Finding Your Perfect Size?',
      description: 'Our sizing specialists can provide personalized assistance to ensure your medical uniforms fit perfectly.',
      buttonText: 'Contact Our Team',
      buttonUrl: '/contact'
    }
  };

  return <ResourcePageLayout resourceData={resourceData} />;
} 