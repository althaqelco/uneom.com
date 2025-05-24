#!/usr/bin/env node

/**
 * Image Downloader for UNEOM
 * 
 * This script downloads relevant images for different pages of the website
 * Usage: node download-images.js [section]
 * 
 * Examples:
 *  - node download-images.js hospitality
 *  - node download-images.js healthcare
 *  - node download-images.js all
 */

const { downloadImages, downloadMultipleImageSets } = require('./unsplash-downloader');

// Image definitions for different sections
const imageSets = {
  // Hospitality section images
  hospitality: [
    {
      keyword: 'luxury hotel staff uniform professional',
      pagePath: 'industries/hospitality/hotels',
      count: 6,
      options: {
        orientation: 'landscape',
        maxWidth: 1600,
        quality: 85
      }
    },
    {
      keyword: 'hotel reception uniform',
      pagePath: 'industries/hospitality/hotels',
      count: 4,
      options: {
        orientation: 'landscape',
        maxWidth: 1600,
        quality: 85
      }
    },
    {
      keyword: 'professional restaurant staff uniform',
      pagePath: 'industries/hospitality/restaurants',
      count: 5,
      options: {
        orientation: 'landscape',
        maxWidth: 1600,
        quality: 85
      }
    },
    {
      keyword: 'chef uniform white restaurant professional',
      pagePath: 'industries/hospitality/restaurants',
      count: 5,
      options: {
        orientation: 'landscape',
        maxWidth: 1600,
        quality: 85
      }
    }
  ],
  
  // Healthcare section images
  healthcare: [
    {
      keyword: 'medical scrubs professional hospital doctor',
      pagePath: 'industries/healthcare',
      count: 4,
      options: {
        orientation: 'landscape',
        maxWidth: 1600,
        quality: 85
      }
    },
    {
      keyword: 'nurse uniform modern hospital',
      pagePath: 'industries/healthcare',
      count: 3,
      options: {
        orientation: 'landscape',
        maxWidth: 1600,
        quality: 85
      }
    },
    {
      keyword: 'lab coat medical professional',
      pagePath: 'shop/medical-scrubs',
      count: 3,
      options: {
        orientation: 'landscape',
        maxWidth: 1600,
        quality: 85
      }
    },
    {
      keyword: 'healthcare worker uniform professional',
      pagePath: 'shop/medical-scrubs',
      count: 3,
      options: {
        orientation: 'landscape',
        maxWidth: 1600,
        quality: 85
      }
    }
  ],
  
  // Corporate section images
  corporate: [
    {
      keyword: 'business professional uniform corporate',
      pagePath: 'industries/corporate',
      count: 5,
      options: {
        orientation: 'landscape',
        maxWidth: 1600,
        quality: 85
      }
    },
    {
      keyword: 'office uniform professional corporate',
      pagePath: 'shop/corporate-workwear',
      count: 5,
      options: {
        orientation: 'landscape',
        maxWidth: 1600,
        quality: 85
      }
    }
  ],
  
  // Aviation section images
  aviation: [
    {
      keyword: 'airline pilot uniform professional',
      pagePath: 'industries/aviation',
      count: 3,
      options: {
        orientation: 'landscape',
        maxWidth: 1600,
        quality: 85
      }
    },
    {
      keyword: 'flight attendant uniform professional',
      pagePath: 'industries/aviation',
      count: 3,
      options: {
        orientation: 'landscape',
        maxWidth: 1600,
        quality: 85
      }
    },
    {
      keyword: 'cabin crew uniform professional',
      pagePath: 'shop/aviation-uniforms',
      count: 4,
      options: {
        orientation: 'landscape',
        maxWidth: 1600,
        quality: 85
      }
    }
  ],
  
  // Security section images
  security: [
    {
      keyword: 'security guard uniform professional',
      pagePath: 'industries/security',
      count: 4,
      options: {
        orientation: 'landscape',
        maxWidth: 1600,
        quality: 85
      }
    },
    {
      keyword: 'professional security officer uniform',
      pagePath: 'shop/security-uniforms',
      count: 5,
      options: {
        orientation: 'landscape',
        maxWidth: 1600,
        quality: 85
      }
    }
  ],
  
  // Industrial section images
  industrial: [
    {
      keyword: 'factory worker uniform safety',
      pagePath: 'industries/factory-industry',
      count: 4,
      options: {
        orientation: 'landscape',
        maxWidth: 1600,
        quality: 85
      }
    },
    {
      keyword: 'industrial worker uniform safety',
      pagePath: 'shop/industrial-uniforms',
      count: 5,
      options: {
        orientation: 'landscape',
        maxWidth: 1600,
        quality: 85
      }
    }
  ]
};

// Main run function
async function run() {
  console.log('🖼️  UNEOM Image Downloader');
  console.log('=============================\n');
  
  // Get section from command line arguments
  const args = process.argv.slice(2);
  const section = args[0] || 'all';
  
  if (section === 'all') {
    console.log('📥 Downloading images for ALL sections...\n');
    
    // Combine all image sets
    const allJobs = [
      ...imageSets.hospitality,
      ...imageSets.healthcare,
      ...imageSets.corporate,
      ...imageSets.aviation,
      ...imageSets.security,
      ...imageSets.industrial
    ];
    
    await downloadMultipleImageSets(allJobs);
  } else if (imageSets[section]) {
    console.log(`📥 Downloading images for section: ${section.toUpperCase()}...\n`);
    await downloadMultipleImageSets(imageSets[section]);
  } else {
    console.error(`❌ Error: Section "${section}" not found!`);
    console.log('\nAvailable sections:');
    console.log('  - hospitality');
    console.log('  - healthcare');
    console.log('  - corporate');
    console.log('  - aviation');
    console.log('  - security');
    console.log('  - industrial');
    console.log('  - all');
  }
}

// Run the script
run().catch(error => {
  console.error('❌ Error running script:', error);
}); 