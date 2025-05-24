'use client';

import React from 'react';
import ResourcePageLayout from '@/components/layout/ResourcePageLayout';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function PolicyTemplatesPage() {
  const resourceData = {
    locale: 'en',
    title: "UNEOM - Professional Uniforms",
    subtitle: 'Customizable frameworks for developing clear and comprehensive uniform guidelines',
    heroImage: '/images/default-placeholder.jpg',
    overview: {
      title: 'Creating Effective Uniform Policies',
      content: `
        <p class="mb-4">
          Well-crafted uniform policies are essential for maintaining consistent appearance standards, 
          ensuring compliance with industry regulations, and reinforcing organizational identity. 
          These policies serve as a reference for both employees and management, clearly outlining 
          expectations and requirements.
        </p>
        <p class="mb-4">
          UNEOM's customizable policy templates provide a foundation for organizations to develop 
          comprehensive uniform guidelines tailored to their specific needs. Each template can be 
          adapted to reflect your organization's culture, industry requirements, and operational 
          considerations.
        </p>
        <p class="mb-4">
          Download and customize these templates to create clear, effective uniform policies for your organization.
        </p>
      `
    },
    sections: [
      {
        title: 'General Uniform Policy Template',
        content: `
          <p class="mb-4">
            Our comprehensive General Uniform Policy Template provides a framework suitable for most industries 
            and organizational types. This template covers all essential elements of a robust uniform policy:
          </p>
          
          <div class="mb-6 bg-neutral-50 p-5 rounded-lg">
            <h4 class="font-bold text-lg mb-3">Template Contents</h4>
            <ul class="list-disc pl-5 mb-3">
              <li>Policy purpose and scope</li>
              <li>General appearance standards</li>
              <li>Standard uniform components by job role</li>
              <li>Procedures for obtaining uniform items</li>
              <li>Care and maintenance responsibilities</li>
              <li>Enforcement guidelines and consequences for non-compliance</li>
              <li>Religious and medical accommodation procedures</li>
              <li>Uniform return procedures upon employment termination</li>
            </ul>
          </div>
          
          <div class="border border-primary-200 rounded-lg p-6 mb-6 bg-primary-50">
            <h4 class="font-bold text-lg mb-3 text-primary-700">Example: Purpose Statement</h4>
            <div class="bg-white p-4 rounded border border-gray-200 text-sm">
              <p class="font-medium italic text-neutral-700">
                "[Organization Name] requires employees to wear uniforms to present a professional and consistent 
                image to our customers/clients, promote team identity, ensure safety and practicality for job functions, 
                and comply with industry regulations. This policy outlines the standards, procedures, and responsibilities 
                related to company uniforms."
              </p>
            </div>
          </div>
          
          <a href="#" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 mb-6">
            <svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download General Policy Template (DOCX)
          </a>
          
          <p class="text-sm italic text-neutral-500 mb-4">
            Note: This template should be reviewed by your legal department or advisor before implementation to ensure 
            compliance with local labor laws and regulations.
          </p>
        `,
        image: '/images/product-placeholder.jpg',
      },
      {
        title: 'Industry-Specific Policy Templates',
        content: `
          <p class="mb-4">
            Different industries have unique uniform requirements based on regulatory standards, 
            functional needs, and customer expectations. Our industry-specific templates address 
            these specialized considerations:
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div class="border rounded-lg p-5 bg-white shadow-sm">
              <h4 class="font-bold text-lg mb-3 text-primary-700">Healthcare Uniform Policy</h4>
              <ul class="list-disc pl-5 mb-3">
                <li>Infection control standards</li>
                <li>Department color-coding systems</li>
                <li>Scrub and lab coat specifications</li>
                <li>Personal protective equipment requirements</li>
                <li>Laundering protocols</li>
                <li>Identification badge standards</li>
              </ul>
              <a href="#" class="inline-flex items-center px-3 py-1.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                <svg class="-ml-1 mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download
              </a>
            </div>
            
            <div class="border rounded-lg p-5 bg-white shadow-sm">
              <h4 class="font-bold text-lg mb-3 text-primary-700">Hospitality Uniform Policy</h4>
              <ul class="list-disc pl-5 mb-3">
                <li>Front-of-house vs. back-of-house standards</li>
                <li>Grooming and personal hygiene requirements</li>
                <li>Seasonal uniform variations</li>
                <li>Food safety considerations</li>
                <li>Branded accessories specifications</li>
                <li>Customer-facing presentation standards</li>
              </ul>
              <a href="#" class="inline-flex items-center px-3 py-1.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                <svg class="-ml-1 mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download
              </a>
            </div>
            
            <div class="border rounded-lg p-5 bg-white shadow-sm">
              <h4 class="font-bold text-lg mb-3 text-primary-700">Industrial/Manufacturing Policy</h4>
              <ul class="list-disc pl-5 mb-3">
                <li>Safety equipment integration</li>
                <li>OSHA and industry compliance requirements</li>
                <li>Hazardous environment considerations</li>
                <li>High-visibility requirements</li>
                <li>Seasonal adaptations for extreme temperatures</li>
                <li>Prohibited accessories and materials</li>
              </ul>
              <a href="#" class="inline-flex items-center px-3 py-1.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                <svg class="-ml-1 mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download
              </a>
            </div>
            
            <div class="border rounded-lg p-5 bg-white shadow-sm">
              <h4 class="font-bold text-lg mb-3 text-primary-700">Corporate Office Policy</h4>
              <ul class="list-disc pl-5 mb-3">
                <li>Professional dress code integration</li>
                <li>Branded apparel guidelines</li>
                <li>Casual/formal day specifications</li>
                <li>Client-facing vs. internal role differences</li>
                <li>Business travel considerations</li>
                <li>Accessory and personalization guidelines</li>
              </ul>
              <a href="#" class="inline-flex items-center px-3 py-1.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                <svg class="-ml-1 mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download
              </a>
            </div>
          </div>
        `,
        image: '/images/avatar-placeholder.jpg',
      },
      {
        title: 'Policy Implementation Guide',
        content: `
          <p class="mb-4">
            Creating a policy is just the first step. Successful implementation requires careful 
            planning, clear communication, and consistent enforcement:
          </p>
          
          <div class="mb-6 bg-neutral-50 p-5 rounded-lg">
            <h4 class="font-bold text-lg mb-3">Implementation Steps</h4>
            <ol class="list-decimal pl-5 mb-3 space-y-2">
              <li>
                <span class="font-medium">Stakeholder Input:</span> 
                <p class="ml-1">Gather feedback from key departments (HR, operations, employee representatives) during policy development.</p>
              </li>
              <li>
                <span class="font-medium">Legal Review:</span> 
                <p class="ml-1">Ensure compliance with local labor laws, religious accommodation requirements, and industry regulations.</p>
              </li>
              <li>
                <span class="font-medium">Phased Introduction:</span> 
                <p class="ml-1">Consider a gradual rollout, especially for significant changes to existing policies.</p>
              </li>
              <li>
                <span class="font-medium">Clear Communication:</span> 
                <p class="ml-1">Provide written policies, visual guides, and in-person briefings on new uniform requirements.</p>
              </li>
              <li>
                <span class="font-medium">Training for Supervisors:</span> 
                <p class="ml-1">Ensure managers understand policy details, enforcement guidelines, and accommodation procedures.</p>
              </li>
              <li>
                <span class="font-medium">Feedback Mechanism:</span> 
                <p class="ml-1">Establish a process for employees to ask questions or report issues with uniforms.</p>
              </li>
              <li>
                <span class="font-medium">Regular Review:</span> 
                <p class="ml-1">Schedule periodic policy reviews to address emerging issues or changing requirements.</p>
              </li>
            </ol>
          </div>
          
          <div class="border border-primary-200 rounded-lg p-6 mb-6 bg-primary-50">
            <h4 class="font-bold text-lg mb-3 text-primary-700">Implementation Checklist</h4>
            <p class="mb-3">Our comprehensive checklist helps you track the progress of your policy implementation:</p>
            <a href="#" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
              <svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Implementation Checklist (PDF)
            </a>
          </div>
        `,
        image: '/images/default-placeholder.jpg',
      }
    ],
    items: [
      {
        id: 'general-uniform-policy',
        title: 'General Uniform Policy Template',
        description: 'A comprehensive framework for establishing basic uniform standards across all departments.',
        content: 'This template provides a structured approach to creating a uniform policy that establishes clear guidelines for professional appearance, proper uniform wear, and maintenance responsibilities. It includes sections on compliance requirements, enforcement procedures, and accommodation policies.',
        image: '/images/default-placeholder.jpg'
      },
      {
        id: 'healthcare-uniform-policy',
        title: 'Healthcare Uniform Policy Template',
        description: 'Specialized guidelines addressing infection control and professional standards in healthcare settings.',
        content: 'Designed specifically for healthcare environments, this template addresses critical aspects such as infection control, identification requirements, and appropriate attire for different clinical settings. It includes guidance on laundering procedures, PPE integration, and patient safety considerations.',
        image: '/images/default-placeholder.jpg'
      },
      {
        id: 'hospitality-uniform-policy',
        title: 'Hospitality Uniform Policy Template',
        description: 'Customer-focused uniform standards for hotels, restaurants, and hospitality businesses.',
        content: 'This template focuses on creating a cohesive brand image through uniform standards in customer-facing hospitality roles. It covers grooming standards, uniform rotation systems, and guidelines for different positions from front desk to food service.',
        image: '/images/default-placeholder.jpg'
      },
      {
        id: 'corporate-uniform-policy',
        title: 'Corporate Uniform Policy Template',
        description: 'Professional dress code guidelines for office and corporate environments.',
        content: 'Establish a professional corporate image with this template that balances formality with employee comfort. It includes sections on business casual guidelines, branded apparel standards, and special event dress codes.',
        image: '/images/default-placeholder.jpg'
      },
      {
        id: 'industrial-uniform-policy',
        title: 'Industrial Uniform Policy Template',
        description: 'Safety-focused uniform requirements for manufacturing and industrial settings.',
        content: 'Safety is the priority in this template designed for industrial environments. It includes detailed sections on PPE integration, hazard-specific clothing requirements, and compliance with industry safety standards.',
        image: '/images/default-placeholder.jpg'
      },
      {
        id: 'security-uniform-policy',
        title: 'Security Uniform Policy Template',
        description: 'Guidelines for security personnel uniforms emphasizing authority and professionalism.',
        content: 'This template helps establish a uniform policy that balances authority, recognition, and functionality for security personnel. It includes sections on insignia standards, equipment integration, and appearance requirements.',
        image: '/images/default-placeholder.jpg'
      }
    ],
    relatedResources: [
      {
        title: 'Procurement Guide',
        description: 'Strategic approaches to sourcing and managing uniform programs',
        link: '/resources/procurement-guide',
        icon: 'document'
      },
      {
        title: 'Program Management Service',
        description: 'Learn about our comprehensive uniform program management solutions',
        link: '/services/program-management',
        icon: 'service'
      },
      {
        title: 'Custom Design & Branding',
        description: 'Creating distinctive uniform solutions that elevate your brand identity',
        link: '/services/custom-design',
        icon: 'design'
      }
    ],
    cta: {
      title: 'Need Custom Policy Development?',
      description: 'UNEOM\'s uniform consultants can help develop tailored policies specific to your organization\'s culture, industry, and operational needs.',
      buttonText: 'Contact Our Policy Specialists',
      buttonUrl: '/contact'
    }
  };

  return <ResourcePageLayout resourceData={resourceData} skipMainLayout={true} />;
} 