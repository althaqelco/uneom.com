'use client';

import React from 'react';
import ResourcePageLayout from '@/components/layout/ResourcePageLayout';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function ProcurementGuidePage() {
  const resourceData = {
    locale: 'en',
    title: "UNEOM - Professional Uniforms",
    subtitle: 'Strategic approaches to sourcing and managing uniform programs effectively',
    heroImage: '/images/corporate/corporate_team_meeting.jpg',
    overview: {
      title: 'Optimizing Your Uniform Procurement Process',
      content: `
        <p class="mb-4">
          Effective uniform procurement goes beyond simply ordering garments. It requires strategic planning, 
          thoughtful supplier selection, and ongoing program management to ensure cost-effectiveness, 
          quality control, and employee satisfaction.
        </p>
        <p class="mb-4">
          This comprehensive guide outlines best practices for procuring uniforms at scale, from 
          initial assessment to implementation and beyond. Whether you're establishing a new uniform program 
          or improving an existing one, these strategies will help you optimize your procurement process.
        </p>
      `
    },
    sections: [
      {
        title: 'Strategic Planning',
        content: `
          <p class="mb-4">Before initiating the procurement process, develop a clear strategy that addresses your organization's specific needs:</p>
          
          <div class="mb-6 bg-neutral-50 p-5 rounded-lg">
            <h4 class="font-bold text-lg mb-3">Needs Assessment</h4>
            <p class="mb-2">Conduct a thorough assessment to understand:</p>
            <ul class="list-disc pl-5 mb-3">
              <li>Functional requirements based on job roles and tasks</li>
              <li>Industry compliance and safety standards</li>
              <li>Environmental conditions where uniforms will be worn</li>
              <li>Brand and image considerations</li>
              <li>Employee preferences and comfort needs</li>
            </ul>
          </div>
          
          <div class="mb-6 bg-neutral-50 p-5 rounded-lg">
            <h4 class="font-bold text-lg mb-3">Budget Development</h4>
            <p class="mb-2">Create a comprehensive budget that accounts for:</p>
            <ul class="list-disc pl-5 mb-3">
              <li>Initial procurement costs</li>
              <li>Replacement schedules and ongoing supply</li>
              <li>Customization and branding expenses</li>
              <li>Distribution and inventory management costs</li>
              <li>Potential cost savings through bulk purchasing</li>
            </ul>
          </div>
          
          <div class="mb-6 bg-neutral-50 p-5 rounded-lg">
            <h4 class="font-bold text-lg mb-3">Procurement Timeline</h4>
            <p class="mb-2">Develop a realistic timeline that includes:</p>
            <ul class="list-disc pl-5 mb-3">
              <li>RFP development and supplier selection phase</li>
              <li>Sampling and approval processes</li>
              <li>Production leadtimes</li>
              <li>Distribution scheduling</li>
              <li>Employee fitting and rollout planning</li>
            </ul>
          </div>
        `,
        image: '/images/business-team-at-meeting-in-the-modern-office-c-SBI-300994903.jpg'},
      {
        title: 'Supplier Selection',
        content: `
          <p class="mb-4">
            Choosing the right supplier is crucial to the success of your uniform program. Consider these factors 
            during the selection process:
          </p>
          
          <div class="mb-6 bg-neutral-50 p-5 rounded-lg">
            <h4 class="font-bold text-lg mb-3">Supplier Evaluation Criteria</h4>
            <ul class="list-disc pl-5 mb-3">
              <li>Product quality and construction standards</li>
              <li>Production capacity and scalability</li>
              <li>Industry experience and reputation</li>
              <li>Financial stability and business longevity</li>
              <li>Ethical manufacturing practices and certifications</li>
              <li>Sustainability initiatives and environmental impact</li>
              <li>Customization capabilities and flexibility</li>
            </ul>
          </div>
          
          <div class="mb-6 bg-neutral-50 p-5 rounded-lg">
            <h4 class="font-bold text-lg mb-3">Service Capabilities</h4>
            <p class="mb-2">Assess the supplier's ability to provide:</p>
            <ul class="list-disc pl-5 mb-3">
              <li>Consistent quality control measures</li>
              <li>Responsive customer service and account management</li>
              <li>Efficient order processing and fulfillment</li>
              <li>Inventory management solutions</li>
              <li>Direct-to-employee distribution options</li>
              <li>Digital platforms for ordering and program management</li>
            </ul>
          </div>
          
          <div class="mb-6 bg-neutral-50 p-5 rounded-lg">
            <h4 class="font-bold text-lg mb-3">Sample Evaluation</h4>
            <p class="mb-2">Request and evaluate samples based on:</p>
            <ul class="list-disc pl-5 mb-3">
              <li>Material quality and durability</li>
              <li>Construction and finish details</li>
              <li>Sizing consistency and fit</li>
              <li>Color accuracy and fastness</li>
              <li>Performance after multiple wash cycles</li>
              <li>Comfort during extended wear testing</li>
            </ul>
          </div>
        `,
        image: '/images/factory-worker-portrait-industrial-man-looking-at-camera-close-up-of-industry-worker-p-SBI-351092701.jpg'},
      {
        title: 'Program Implementation',
        content: `
          <p class="mb-4">
            A well-planned implementation ensures a smooth transition to new uniforms and 
            minimizes disruption to your operations:
          </p>
          
          <div class="mb-6 bg-neutral-50 p-5 rounded-lg">
            <h4 class="font-bold text-lg mb-3">Sizing and Fitting Strategy</h4>
            <ul class="list-disc pl-5 mb-3">
              <li>Coordinate fitting events with trained personnel</li>
              <li>Develop clear sizing guides and instructions</li>
              <li>Consider digital sizing tools to streamline the process</li>
              <li>Establish protocols for handling special sizing needs</li>
              <li>Set up a process for size exchanges and adjustments</li>
            </ul>
          </div>
          
          <div class="mb-6 bg-neutral-50 p-5 rounded-lg">
            <h4 class="font-bold text-lg mb-3">Distribution Planning</h4>
            <ul class="list-disc pl-5 mb-3">
              <li>Determine the most efficient distribution method for your organization</li>
              <li>Create a distribution schedule by department or location</li>
              <li>Develop a system for tracking receipt of uniforms</li>
              <li>Establish a process for addressing distribution issues</li>
              <li>Consider phased rollout to minimize operational disruption</li>
            </ul>
          </div>
          
          <div class="mb-6 bg-neutral-50 p-5 rounded-lg">
            <h4 class="font-bold text-lg mb-3">Communication Strategy</h4>
            <ul class="list-disc pl-5 mb-3">
              <li>Announce the new uniform program well in advance</li>
              <li>Clearly communicate the purpose and benefits of the new uniforms</li>
              <li>Provide detailed information about the fitting and distribution process</li>
              <li>Address common questions and concerns proactively</li>
              <li>Create channels for feedback and questions</li>
            </ul>
          </div>
        `,
        image: '/images/tailor-working-on-a-suit-in-his-workshop-2023-11-27-05-01-04-utc.jpg'}
    ],
    items: [
      {
        id: "needs-assessment",
        title: "Needs Assessment",
        description: "Conduct a thorough assessment of functional requirements, compliance standards, and brand considerations.",
        image: "/images/products/uniform-collection.jpg"
      },
      {
        id: "supplier-selection",
        title: "Supplier Selection",
        description: "Choose the right supplier based on quality, capacity, experience, and ethical practices.",
        image: "/images/products/uniform-collection.jpg"
      },
      {
        id: "budget-planning",
        title: "Budget Planning",
        description: "Create a comprehensive budget accounting for initial costs, replacements, and management expenses.",
        image: "/images/products/uniform-collection.jpg"
      },
      {
        id: "implementation",
        title: "Implementation & Distribution",
        description: "Develop an effective distribution strategy and timeline for your uniform program rollout.",
        image: "/images/products/uniform-collection.jpg"
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
        title: 'Size Guide',
        description: 'Detailed sizing information for accurate uniform fitting',
        link: '/resources/size-guide',
        icon: 'size'
      },
      {
        title: 'Uniform Policy Templates',
        description: 'Customizable templates for developing comprehensive uniform policies',
        link: '/resources/policy-templates',
        icon: 'document'
      }
    ],
    cta: {
      title: 'Expert Procurement Support',
      description: 'UNEOM\'s procurement specialists can help you develop and implement an efficient uniform program tailored to your organization\'s specific needs.',
      buttonText: 'Request a Consultation',
      buttonUrl: '/contact'
    }
  };

  return <ResourcePageLayout resourceData={resourceData} skipMainLayout={true} />;
} 