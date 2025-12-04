import React from 'react';
import { Metadata } from 'next';
import ResourcePageLayout from '@/components/layout/ResourcePageLayout';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'Hospital Uniform Policies | Medical Dress Code Templates | Saudi Arabia | UNEOM',
  description: 'Download customizable hospital uniform policy templates for Saudi healthcare facilities. Includes Sharia-compliant dress codes, infection control guidelines, and department-specific uniform standards.',
  keywords: 'hospital uniform policy Saudi Arabia, medical dress code templates, healthcare uniform guidelines, Sharia-compliant medical dress code, infection control uniform policy',
  openGraph: {
    title: 'Hospital Uniform Policies & Medical Dress Code Templates for Saudi Arabia',
    description: 'Download customizable hospital uniform policy templates for Saudi healthcare facilities. Includes Sharia-compliant dress codes, infection control guidelines, and department-specific uniform standards.',
    images: [
      {
        url: 'https://uneom.com/images/healthcare/healthcare_medical_uniform.jpg',
        width: 1200,
        height: 630,
        alt: 'Saudi hospital uniform policy templates and medical dress code guidelines'},
    ]}};

export default function HospitalPolicyTemplatesPage() {
  const resourceData = {
    locale: 'en',
    title: 'Hospital Uniform Policy Templates',
    subtitle: 'Comprehensive dress code guidelines for Saudi healthcare facilities',
    heroImage: '/images/healthcare/healthcare_medical_doctor_uniform.jpg',
    
    overview: {
      title: 'Essential Uniform Policies for Saudi Healthcare Institutions',
      content: `
        <p>Establishing clear and comprehensive uniform policies is crucial for healthcare facilities in Saudi Arabia. Properly documented guidelines ensure consistency, professionalism, and compliance with both healthcare standards and cultural expectations.</p>
        <p>UNEOM provides customizable policy templates developed specifically for Saudi healthcare institutions, addressing infection control, professional standards, cultural considerations, and department-specific requirements. These templates can be easily adapted to your facility's specific needs and implemented into your operational framework.</p>
      `
    },
    
    sections: [
      {
        title: 'Components of Effective Healthcare Uniform Policies',
        content: `
          <p>A well-designed uniform policy should address multiple aspects of healthcare attire to ensure clarity and compliance. Key components include:</p>
          
          <h4 class="text-lg font-semibold mt-4 mb-2">Core Policy Elements</h4>
          <ul class="list-disc pl-5 mb-4">
            <li><strong>Purpose Statement:</strong> Clearly defines the goals of the uniform policy, including infection control, professional image, and patient confidence</li>
            <li><strong>Scope:</strong> Identifies which staff members, departments, and positions are covered by the policy</li>
            <li><strong>Cultural & Religious Considerations:</strong> Addresses appropriate accommodations for cultural and religious needs, including hijab options and modest alternatives</li>
            <li><strong>General Appearance Standards:</strong> Outlines requirements for cleanliness, neatness, and overall professional appearance</li>
            <li><strong>Department-Specific Guidelines:</strong> Provides specialized requirements for different hospital departments and roles</li>
            <li><strong>Enforcement Procedures:</strong> Establishes clear processes for policy enforcement and addressing non-compliance</li>
          </ul>
          
          <div class="bg-blue-50 p-4 rounded-lg mt-4 mb-6">
            <h5 class="font-semibold mb-2">Policy Development Best Practices:</h5>
            <ul class="list-disc pl-5">
              <li>Involve representatives from different departments in policy development</li>
              <li>Consider feedback from staff who will be subject to the policies</li>
              <li>Ensure alignment with Ministry of Health guidelines and regulations</li>
              <li>Review infection control standards from international sources like CDC and WHO</li>
              <li>Develop clear visual references for approved uniforms and styles</li>
            </ul>
          </div>
          
          <p>Our downloadable templates include all these key components, with customizable sections that can be tailored to your specific institutional requirements.</p>
        `,
        image: '/images/healthcare/healthcare_medical_uniform.jpg'
      },
      {
        title: 'Infection Control & Safety Considerations',
        content: `
          <p>Uniform policies play a crucial role in infection prevention and control within healthcare settings. Proper guidelines can significantly reduce cross-contamination risks and protect both patients and staff.</p>
          
          <h4 class="text-lg font-semibold mt-4 mb-2">Essential Infection Control Elements</h4>
          <ul class="list-disc pl-5 mb-4">
            <li><strong>Fabric Requirements:</strong> Specifications for antimicrobial fabrics, fluid-resistant materials, and easy-to-clean surfaces</li>
            <li><strong>Laundering Protocols:</strong> Guidelines for proper cleaning, frequency, and handling of contaminated uniforms</li>
            <li><strong>Home vs. Facility Laundering:</strong> Requirements for laundering location and transportation of uniforms</li>
            <li><strong>Change Frequency:</strong> Clear guidelines on how often uniforms should be changed</li>
            <li><strong>Department-Specific Requirements:</strong> Enhanced specifications for high-risk areas like operating rooms, ICUs, and isolation units</li>
          </ul>
          
          <h4 class="text-lg font-semibold mt-4 mb-2">Safety Requirements</h4>
          <ul class="list-disc pl-5 mb-4">
            <li><strong>Range of Motion:</strong> Ensuring uniforms allow proper movement for clinical procedures</li>
            <li><strong>ID Badge Visibility:</strong> Requirements for displaying identification appropriately</li>
            <li><strong>Footwear Standards:</strong> Specifications for safe, closed-toe, non-slip shoes</li>
            <li><strong>PPE Compatibility:</strong> Guidelines ensuring uniforms work effectively with required personal protective equipment</li>
          </ul>
          
          <p>Our infection control policy templates are developed in accordance with Saudi Ministry of Health guidelines, World Health Organization recommendations, and international best practices, ensuring your facility implements the highest standards of safety.</p>
        `,
        image: '/images/healthcare/healthcare_hijab_doctor.jpg'
      },
      {
        title: 'Cultural Considerations in Saudi Healthcare Settings',
        content: `
          <p>Healthcare uniform policies in Saudi Arabia must respectfully incorporate cultural and religious considerations while maintaining clinical standards. Our templates address these important aspects with sensitivity and practical guidelines.</p>
          
          <h4 class="text-lg font-semibold mt-4 mb-2">Cultural Accommodation Guidelines</h4>
          <ul class="list-disc pl-5 mb-4">
            <li><strong>Modest Uniform Options:</strong> Guidelines for appropriate coverage, including longer sleeve lengths, higher necklines, and looser-fitting garments</li>
            <li><strong>Hijab Standards:</strong> Specifications for appropriate medical hijabs that maintain safety and hygiene standards</li>
            <li><strong>Gender-Specific Considerations:</strong> Separate guidelines for male and female staff that respect cultural norms</li>
            <li><strong>Prayer Accommodation:</strong> Policies for uniform modifications or alternatives during prayer times</li>
          </ul>
          
          <h4 class="text-lg font-semibold mt-4 mb-2">Balancing Culture and Clinical Requirements</h4>
          <p>Our policy templates provide clear guidance on balancing cultural sensitivity with clinical necessities:</p>
          <ul class="list-disc pl-5 mb-4">
            <li>Appropriate undergarments and coverage while maintaining range of motion</li>
            <li>Securing loose garments safely during clinical procedures</li>
            <li>Ensuring head coverings meet both religious requirements and hygiene standards</li>
            <li>Maintaining professional appearance while accommodating cultural dress preferences</li>
          </ul>
          
          <div class="bg-yellow-50 p-4 rounded-lg mt-4 mb-6">
            <h5 class="font-semibold mb-2">Implementing Cultural Considerations:</h5>
            <p>Cultural accommodation should be integrated thoughtfully into uniform policies, not added as an afterthought. Our templates provide comprehensive guidelines that respect Saudi cultural values while prioritizing patient safety and clinical excellence.</p>
          </div>
        `,
        image: '/images/healthcare/medical_hijab_uniform.jpg'
      },
      {
        title: 'Department-Specific Uniform Standards',
        content: `
          <p>Different hospital departments have unique uniform requirements based on their specific functions, exposure risks, and patient interactions. Our policy templates include customizable sections for major hospital departments.</p>
          
          <h4 class="text-lg font-semibold mt-4 mb-2">Specialized Department Guidelines</h4>
          
          <strong>Surgery & Operating Rooms</strong>
          <ul class="list-disc pl-5 mb-4">
            <li>Scrub color coding systems for role identification</li>
            <li>Specialized head covering requirements</li>
            <li>Restricted zone uniform protocols</li>
            <li>Shoe and foot covering specifications</li>
          </ul>
          
          <strong>Emergency & Trauma Departments</strong>
          <ul class="list-disc pl-5 mb-4">
            <li>High-visibility elements for quick identification</li>
            <li>Enhanced fluid-resistant specifications</li>
            <li>Rapid-change uniform options for contamination events</li>
            <li>Durability requirements for high-intensity environments</li>
          </ul>
          
          <strong>Intensive Care Units</strong>
          <ul class="list-disc pl-5 mb-4">
            <li>Enhanced infection control standards</li>
            <li>Unit-specific color coding</li>
            <li>Specialized pocketing for essential tools</li>
            <li>Compatibility with frequent PPE changes</li>
          </ul>
          
          <strong>Pediatric Departments</strong>
          <ul class="list-disc pl-5 mb-4">
            <li>Child-friendly design elements</li>
            <li>Department-specific prints or colors</li>
            <li>Additional durability specifications</li>
            <li>Enhanced pocket configurations for pediatric tools</li>
          </ul>
          
          <strong>Administrative & Non-Clinical Staff</strong>
          <ul class="list-disc pl-5 mb-4">
            <li>Professional business attire guidelines</li>
            <li>Modest dress standards aligned with hospital values</li>
            <li>ID and role identification requirements</li>
            <li>Cultural accommodation within professional standards</li>
          </ul>
          
          <p>Each departmental template can be further customized to reflect your facility's specific needs, branding, and specializations. Our comprehensive approach ensures consistency across departments while acknowledging unique functional requirements.</p>
        `,
        image: '/images/healthcare/healthcare_nurce_uniform.jpg'
      }
    ],
    
    items: [
      {
        id: 'general-policy',
        title: 'General Hospital Uniform Policy Template',
        description: 'Comprehensive template covering all aspects of healthcare uniform standards with customizable sections for different facility types',
        image: '/images/healthcare/full_clothes_doctor_uniform.jpg'
      },
      {
        id: 'infection-control',
        title: 'Infection Control Uniform Guidelines',
        description: 'Specialized policy focusing on infection prevention aspects of healthcare attire, including laundering protocols and fabric specifications',
        image: '/images/healthcare/antimicrobial-fabric.jpg'
      },
      {
        id: 'cultural-guidelines',
        title: 'Cultural Accommodation Guidelines',
        description: 'Policy template addressing cultural and religious considerations for healthcare uniforms in Saudi Arabia, including modest uniform options',
        image: '/images/healthcare/healthcare_hijab_doctor.jpg'
      }
    ],
    
    cta: {
      title: 'Request Policy Templates',
      description: 'Access our customizable hospital uniform policy templates tailored for Saudi healthcare facilities.',
      buttonText: 'Download Templates',
      buttonUrl: '/contact?resource=hospital-policy-templates'
    }
  };

  return <ResourcePageLayout resourceData={resourceData} />;
} 