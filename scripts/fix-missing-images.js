#!/usr/bin/env node

/**
 * Script to fix missing images by replacing 404 image references with available images
 */

const fs = require('fs');
const path = require('path');

// Available images mapping
const imageReplacements = {
  // Blog images
  'sustainable-trends.jpg': 'blog/sustainable-trends.jpg',
  'school-uniform-post-1.jpg': 'education/school-uniform-post-1.jpg',
  'sustainable-uniform.jpg': 'blog/sustainable-uniform.jpg',
  'placeholder-corporate1.jpg': 'blog/placeholder-corporate1.jpg',
  'placeholder-corporate2.jpg': 'blog/placeholder-corporate2.jpg',
  'placeholder-aviation1.jpg': 'blog/placeholder-aviation1.jpg',
  'placeholder-aviation2.jpg': 'blog/placeholder-aviation2.jpg',
  'placeholder1.jpg': 'blog/placeholder1.jpg',
  'placeholder2.jpg': 'blog/placeholder2.jpg',

  // Service images
  'service-overview.jpg': 'service-overview.jpg',
  'fabric-cotton-blends.webp': 'fabric-cotton-blends.webp',
  'professional-textile-expert-checking-the-quality-of-a-fabric-in-a-factory-man-SBI-300990818.jpg': 'selective-focus-of-a-male-worker-in-protective-uniform-working-on-milling-machine-as-SBI-300940118.jpg',
  'businessman-checking-documents-and-using-laptop-w-2024-11-01-23-29-12-utc.jpg': 'business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg',
  'men-shaking-hands-over-business-meeting-2025-01-25-05-47-49-utc.jpg': 'business-team-at-meeting-in-the-modern-office-c-SBI-300994903.jpg',
  'tailor-working-on-a-suit-in-his-workshop-2023-11-27-05-01-04-utc.jpg': 'sewing-machines-nobody-dressmaker-equipment-2024-12-04-15-11-57-utc.jpg',
  'uneom_antimicrobial_treatment.webp': 'services/large-water-drop-on-red-waterproof-fabric-2024-12-02-06-46-07-utc.jpg',
  'uneom_moisture_wicking.webp': 'services/colorful-samples-of-upholstery-fabrics-for-upholst-2025-01-08-10-15-26-utc.jpg',

  // Industry images
  'hero-corporate-uniforms.jpg': 'Corporate_Uniforms_Business.png',
  'hero-healthcare-uniforms.jpg': 'doctor-SBI-300813580.jpg',
  'hero-aviation-uniforms.jpg': 'cheerful-airline-workers-standing-in-airfield-unde-2024-10-20-08-49-20-utc.jpg',
  'customization-options.jpg': 'colorful-samples-of-upholstery-fabrics-for-upholst-2025-01-08-10-15-26-utc.jpg',
  'customization-aviation-uniforms.jpg': 'cheerful-women-stewardesses-standing-on-airplane-s-2023-11-27-05-08-55-utc.jpg',
  'fabric-tech-healthcare.jpg': 'doctors-team-walking-in-modern-hospital-corridor-indoors-poeople-group-SBI-322343728.jpg',

  // Product images
  'airline-1.jpg': 'aviation/aviation_uniform_airline_main_image.jpg',
  'airline-2.jpg': 'aviation/aviation_uniform_airline.jpg',
  'airline-3.jpg': 'aviation/aviation_uniform_flightـattendants.jpg',
  'corporate-shirts-blouses.jpg': 'portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg',
  'corporate-suit-executive.jpg': 'modern-arabic-businessman-SBI-300984397.jpg',
  'corporate-polo-shirts.jpg': 'business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg',
  'lab-coat.jpg': 'doctor-SBI-300813580.jpg',
  'nursing-uniform.jpg': 'doctors-team-walking-in-modern-hospital-corridor-indoors-poeople-group-SBI-322343728.jpg',

  // Hospitality images
  'hospitality_uniform_custom_logo.jpg': 'group-of-chefs-standing-with-arms-crossed-in-kitch-2023-11-27-05-01-36-utc.jpg',
  'hospitality_uniform_buttons.jpg': 'cook-flavoring-his-best-meal-2024-11-29-22-42-39-utc.jpg',
  'hospitality_uniform_fabric.jpg': 'colorful-samples-of-upholstery-fabrics-for-upholst-2025-01-08-10-15-26-utc.jpg',
  'hospitality_uniform_department.jpg': 'group-of-chefs-standing-with-arms-crossed-in-kitch-2023-11-27-05-01-36-utc.jpg',
  'hospitality_uniform_formal.jpg': 'portrait-of-an-arab-business-man-in-modern-office-SBI-300991172.jpg',
  'hospitality_uniform_concierge.jpg': 'confident-man-in-uniform-with-phone-2025-02-12-01-27-59-utc.jpg',

  // Icon replacements
  'compliance-shield.svg': 'icons/compliance-shield.svg',
  'brand-identity-aviation.svg': 'icons/brand-identity-aviation.svg',
  'modest-design-saudi.svg': 'icons/modest-design-saudi.svg',
  'fabric-tech-performance.svg': 'icons/fabric-tech-performance.svg',
  'saudi-expertise.svg': 'saudi-expertise.svg',
  'brand-aligned.svg': 'icons/custom-branding.svg'
};

// Default fallbacks for different types
const defaultFallbacks = {
  corporate: 'Corporate_Uniforms_Business.png',
  healthcare: 'doctor-SBI-300813580.jpg',
  aviation: 'cheerful-airline-workers-standing-in-airfield-unde-2024-10-20-08-49-20-utc.jpg',
  hospitality: 'group-of-chefs-standing-with-arms-crossed-in-kitch-2023-11-27-05-01-36-utc.jpg',
  industrial: 'Industrial_Manufacturing_Uniforms .png',
  placeholder: 'default-placeholder.jpg',
  banner: 'banner-placeholder.jpg',
  avatar: 'avatar-placeholder.jpg',
  product: 'default5.jpg'
};

function getReplacementImage(imagePath) {
  const fileName = path.basename(imagePath);
  
  // Check direct mapping first
  if (imageReplacements[fileName]) {
    return `/images/${imageReplacements[fileName]}`;
  }
  
  // Check for category-based fallbacks
  const lowerPath = imagePath.toLowerCase();
  
  if (lowerPath.includes('corporate')) {
    return `/images/${defaultFallbacks.corporate}`;
  } else if (lowerPath.includes('healthcare') || lowerPath.includes('medical')) {
    return `/images/${defaultFallbacks.healthcare}`;
  } else if (lowerPath.includes('aviation') || lowerPath.includes('airline')) {
    return `/images/${defaultFallbacks.aviation}`;
  } else if (lowerPath.includes('hospitality') || lowerPath.includes('hotel')) {
    return `/images/${defaultFallbacks.hospitality}`;
  } else if (lowerPath.includes('industrial') || lowerPath.includes('manufacturing')) {
    return `/images/${defaultFallbacks.industrial}`;
  } else if (lowerPath.includes('placeholder')) {
    return `/images/${defaultFallbacks.placeholder}`;
  } else if (lowerPath.includes('banner')) {
    return `/images/${defaultFallbacks.banner}`;
  } else if (lowerPath.includes('avatar')) {
    return `/images/${defaultFallbacks.avatar}`;
  } else if (lowerPath.includes('product')) {
    return `/images/${defaultFallbacks.product}`;
  }
  
  // Default fallback
  return `/images/${defaultFallbacks.placeholder}`;
}

console.log('Image replacement mapping created successfully!');
console.log('Available replacements:', Object.keys(imageReplacements).length);
console.log('Default fallbacks:', Object.keys(defaultFallbacks).length);

module.exports = { getReplacementImage, imageReplacements, defaultFallbacks };