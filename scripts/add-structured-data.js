/**
 * Add Structured Data Script
 * 
 * This script adds structured data to pages that are missing it.
 * It implements JSON-LD structured data for different page types to improve rich results in Google.
 * 
 * Usage: node scripts/add-structured-data.js
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Fix for chalk ESM
const chalkLog = {
  green: (text) => console.log(`\x1b[32m${text}\x1b[0m`),
  blue: (text) => console.log(`\x1b[34m${text}\x1b[0m`),
  yellow: (text) => console.log(`\x1b[33m${text}\x1b[0m`),
  red: (text) => console.log(`\x1b[31m${text}\x1b[0m`),
  gray: (text) => console.log(`\x1b[90m${text}\x1b[0m`)
};

const PAGES_DIR = path.join(process.cwd(), 'src/pages');
const TEMPLATES_DIR = path.join(process.cwd(), 'src/components/templates');

// Schema templates for different page types
const schemaTemplates = {
  home: `
const homeSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'UNEOM',
  url: 'https://uneom.com',
  logo: 'https://uneom.com/logo.png',
  description: 'Premium quality uniforms and workwear solutions for corporate, healthcare, hospitality, and educational institutions across Saudi Arabia.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'Saudi Arabia',
    addressLocality: 'Riyadh'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+971558164922',
    contactType: 'customer support'
  },
  sameAs: [
    'https://www.facebook.com/uneomuniform/',
    'https://www.instagram.com/uneom_uniform',
    'https://www.linkedin.com/company/uneom'
  ]
};

<StructuredData type="Organization" data={homeSchema} />
`,

  industry: `
const industrySchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: \`\${industryName} Uniform Solutions\`,
  name: \`\${industryName} Uniform Solutions by UNEOM\`,
  description: industryDescription,
  provider: {
    '@type': 'Organization',
    name: 'UNEOM',
    url: 'https://uneom.com/'
  },
  areaServed: {
    '@type': 'Country',
    name: 'Saudi Arabia'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: \`\${industryName} Uniform Catalog\`,
    itemListElement: products.map((product, index) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Product',
        name: product.title,
        description: product.description
      }
    }))
  }
};

<StructuredData type="Service" data={industrySchema} />
`,

  about: `
const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  mainEntity: {
    '@type': 'Organization',
    name: 'UNEOM',
    description: 'Premium quality uniforms and workwear solutions across Saudi Arabia.',
    foundingDate: '2015',
    founders: [
      {
        '@type': 'Person',
        name: 'UNEOM Founder'
      }
    ],
    url: 'https://uneom.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Saudi Arabia',
      addressLocality: 'Riyadh'
    }
  }
};

<StructuredData type="AboutPage" data={aboutSchema} />
`,

  contact: `
const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  mainEntity: {
    '@type': 'Organization',
    name: 'UNEOM',
    telephone: '+971558164922',
    email: 'info@uneom.com',
    url: 'https://uneom.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Saudi Arabia',
      addressLocality: 'Riyadh'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+971558164922',
      contactType: 'customer service'
    }
  }
};

<StructuredData type="ContactPage" data={contactSchema} />
`,

  faq: `
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(item => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer
    }
  }))
};

<StructuredData type="FAQPage" data={faqSchema} />
`
};

// Pages to check and add structured data to
const pagesToCheck = [
  { path: 'index.tsx', type: 'home' },
  { path: 'about.tsx', type: 'about' },
  { path: 'contact.tsx', type: 'contact' },
  { path: 'faq.tsx', type: 'faq' },
  // Industry pages will be found dynamically
];

/**
 * Check if a file already has structured data
 */
function hasStructuredData(fileContent) {
  return fileContent.includes('<StructuredData') ||
         fileContent.includes('application/ld+json') ||
         fileContent.includes('@context') && fileContent.includes('schema.org');
}

/**
 * Add structured data to a file
 */
function addStructuredDataToFile(filePath, pageType) {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  
  if (hasStructuredData(fileContent)) {
    chalkLog.yellow(`File already has structured data: ${filePath}`);
    return false;
  }
  
  // Get the schema template for this page type
  const schemaTemplate = schemaTemplates[pageType];
  if (!schemaTemplate) {
    chalkLog.red(`No schema template found for page type: ${pageType}`);
    return false;
  }
  
  // Look for a good insertion point - after imports
  let modifiedContent = fileContent;
  
  // Check if the file already imports StructuredData
  if (!modifiedContent.includes('import StructuredData from')) {
    // Add import at the top of the file
    modifiedContent = modifiedContent.replace(
      /import.*?;(\s*import.*?;)*(\s*)/m,
      match => `${match}import StructuredData from '@/components/seo/StructuredData';\n\n`
    );
  }
  
  // Look for a return statement with JSX to insert our schema before the closing tag
  const returnRegex = /return\s*\(\s*(<.*>)([\s\S]*?)(<\/.*>)\s*\);/m;
  const matchResult = modifiedContent.match(returnRegex);
  
  if (matchResult) {
    const [fullMatch, openTag, content, closeTag] = matchResult;
    const replacedReturn = `return (
      ${openTag}
        ${content}
        ${schemaTemplate}
      ${closeTag}
    );`;
    
    modifiedContent = modifiedContent.replace(fullMatch, replacedReturn);
  } else {
    chalkLog.red(`Could not find a suitable insertion point in: ${filePath}`);
    return false;
  }
  
  // Write the modified content back to the file
  fs.writeFileSync(filePath, modifiedContent);
  chalkLog.green(`Added structured data to: ${filePath}`);
  return true;
}

/**
 * Find industry pages
 */
function findIndustryPages() {
  const industryPagesPattern = path.join(PAGES_DIR, 'industries', '**', '*.tsx');
  return glob.sync(industryPagesPattern);
}

/**
 * Process a template file by adding structured data
 */
function processTemplate(templatePath, templateType) {
  console.log(`Processing template: ${templatePath}`);
  const fileContent = fs.readFileSync(templatePath, 'utf8');
  
  if (hasStructuredData(fileContent)) {
    chalkLog.yellow(`Template already has structured data: ${templatePath}`);
    return;
  }
  
  // Add structured data to template
  addStructuredDataToFile(templatePath, templateType);
}

/**
 * Main function to add structured data
 */
async function addStructuredData() {
  console.log('Adding structured data to pages...');
  
  // Process standard pages
  for (const page of pagesToCheck) {
    const filePath = path.join(PAGES_DIR, page.path);
    if (fs.existsSync(filePath)) {
      addStructuredDataToFile(filePath, page.type);
    } else {
      chalkLog.yellow(`Page not found: ${filePath}`);
    }
  }
  
  // Process industry pages
  const industryPages = findIndustryPages();
  for (const industryPage of industryPages) {
    addStructuredDataToFile(industryPage, 'industry');
  }
  
  // Process templates
  const templateFiles = glob.sync(path.join(TEMPLATES_DIR, '*.tsx'));
  for (const templateFile of templateFiles) {
    const baseName = path.basename(templateFile, '.tsx').toLowerCase();
    let templateType = 'generic';
    
    if (baseName.includes('industry')) {
      templateType = 'industry';
    } else if (baseName.includes('service')) {
      templateType = 'service';
    } else if (baseName.includes('product')) {
      templateType = 'product';
    } else if (baseName.includes('home')) {
      templateType = 'home';
    }
    
    processTemplate(templateFile, templateType);
  }
  
  chalkLog.green('Structured data added to pages!');
}

// Run the script
addStructuredData(); 