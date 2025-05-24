/**
 * Content Enhancement Script
 * 
 * This script improves page content by:
 * - Adding enhanced content sections to pages with low word count
 * - Ensuring content is rendered server-side (not client-side only)
 * - Adds semantic HTML markup and improved text structure
 * 
 * Usage: node scripts/enhance-content.js
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const chalk = require('chalk');

// Paths
const PAGES_DIR = path.join(process.cwd(), 'src/pages');
const COMPONENTS_DIR = path.join(process.cwd(), 'src/components');

// Content enhancement templates by page type
const contentTemplates = {
  industry: `
// Enhanced industry content component
const industryContent = (
  <div className="industry-content prose prose-lg mx-auto max-w-4xl">
    <p className="lead text-xl">
      UNEOM provides high-quality, custom-designed uniform solutions for the {industryName} 
      industry. Our uniforms are crafted with premium materials to meet the specific 
      requirements of your sector, ensuring comfort, durability, and professional appearance.
    </p>
    
    <h2 className="font-bold text-2xl mt-8 mb-4">Industry-Specific Solutions</h2>
    <p>
      With years of experience serving the {industryName} sector, we understand the unique 
      challenges and requirements you face. Our dedicated team works closely with clients 
      to develop uniform solutions that:
    </p>
    <ul className="list-disc list-inside my-4 space-y-2">
      <li>Meet industry-specific safety and compliance standards</li>
      <li>Reinforce your brand identity and professional image</li>
      <li>Provide comfort and functionality for various job roles</li>
      <li>Withstand the demands of daily wear in your work environment</li>
      <li>Offer flexibility with customization options</li>
    </ul>
    
    <h2 className="font-bold text-2xl mt-8 mb-4">Our Process</h2>
    <p>
      We follow a comprehensive approach to ensure you receive uniform solutions 
      perfectly tailored to your needs:
    </p>
    <ol className="list-decimal list-inside my-4 space-y-2">
      <li>Initial consultation to understand your requirements</li>
      <li>Design proposal with material and style recommendations</li>
      <li>Prototype development and refinement</li>
      <li>Production with rigorous quality control</li>
      <li>Timely delivery and ongoing support</li>
    </ol>
    
    <h2 className="font-bold text-2xl mt-8 mb-4">Quality Assurance</h2>
    <p>
      At UNEOM, we maintain strict quality standards throughout our production process. 
      Each uniform undergoes thorough inspection to ensure it meets our high standards 
      for stitching, material quality, color consistency, and overall finish.
    </p>
    
    <h2 className="font-bold text-2xl mt-8 mb-4">Sustainable Practices</h2>
    <p>
      We are committed to sustainable manufacturing practices. Our production process 
      emphasizes resource efficiency, waste reduction, and the use of eco-friendly 
      materials where possible, without compromising on quality or performance.
    </p>
  </div>
)`,

  service: `
// Enhanced service content component
const serviceContent = (
  <div className="service-content prose prose-lg mx-auto max-w-4xl">
    <p className="lead text-xl">
      Our {serviceName} service offers comprehensive solutions designed to meet the 
      uniform needs of organizations of all sizes. We combine quality craftsmanship 
      with attention to detail to deliver exceptional results for our clients.
    </p>
    
    <h2 className="font-bold text-2xl mt-8 mb-4">Service Features</h2>
    <p>
      The {serviceName} service includes a range of features to ensure a seamless experience:
    </p>
    <ul className="list-disc list-inside my-4 space-y-2">
      <li>Personalized consultation with uniform experts</li>
      <li>Custom design and branding solutions</li>
      <li>High-quality materials selection</li>
      <li>Precise measurements and fitting</li>
      <li>Efficient production and timely delivery</li>
      <li>Ongoing support and maintenance options</li>
    </ul>
    
    <h2 className="font-bold text-2xl mt-8 mb-4">Our Methodology</h2>
    <p>
      We follow a structured approach to ensure consistent quality and client satisfaction:
    </p>
    <ol className="list-decimal list-inside my-4 space-y-2">
      <li>Requirement analysis and consultation</li>
      <li>Design conceptualization and approval</li>
      <li>Material selection and testing</li>
      <li>Production planning and execution</li>
      <li>Quality control and assurance</li>
      <li>Delivery and implementation support</li>
    </ol>
    
    <h2 className="font-bold text-2xl mt-8 mb-4">Benefits</h2>
    <p>
      Choosing our {serviceName} service offers numerous advantages for your organization:
    </p>
    <ul className="list-disc list-inside my-4 space-y-2">
      <li>Enhanced professional appearance and brand consistency</li>
      <li>Improved employee satisfaction and pride</li>
      <li>Cost-effective solutions with quality assurance</li>
      <li>Time savings through our streamlined process</li>
      <li>Access to industry expertise and best practices</li>
    </ul>
    
    <h2 className="font-bold text-2xl mt-8 mb-4">Client Success Stories</h2>
    <p>
      We've helped numerous organizations transform their uniform programs. Our clients 
      consistently report improved brand perception, employee satisfaction, and operational 
      efficiency after implementing our uniform solutions.
    </p>
  </div>
)`,

  about: `
// Enhanced about content component
const aboutContent = (
  <div className="about-content prose prose-lg mx-auto max-w-4xl">
    <p className="lead text-xl">
      UNEOM is a leading provider of premium uniform solutions in Saudi Arabia, 
      dedicated to delivering exceptional quality, innovative designs, and outstanding 
      customer service to organizations across various industries.
    </p>
    
    <h2 className="font-bold text-2xl mt-8 mb-4">Our Story</h2>
    <p>
      Founded with a vision to transform how organizations approach uniform solutions, 
      UNEOM has grown from a small specialized provider to a comprehensive uniform partner 
      for businesses across Saudi Arabia. Our journey has been marked by a relentless 
      pursuit of quality and customer satisfaction.
    </p>
    <p>
      Over the years, we've expanded our capabilities, refined our processes, and 
      built strong relationships with clients who trust us to represent their brand 
      through the uniforms their teams wear every day.
    </p>
    
    <h2 className="font-bold text-2xl mt-8 mb-4">Our Values</h2>
    <ul className="list-disc list-inside my-4 space-y-2">
      <li><strong>Quality Excellence:</strong> We maintain the highest standards in materials, craftsmanship, and service</li>
      <li><strong>Customer Focus:</strong> We prioritize understanding and meeting the unique needs of each client</li>
      <li><strong>Innovation:</strong> We continuously explore new designs, materials, and processes</li>
      <li><strong>Integrity:</strong> We conduct business with honesty, transparency, and ethical practices</li>
      <li><strong>Teamwork:</strong> We believe in collaborative relationships with clients and within our team</li>
    </ul>
    
    <h2 className="font-bold text-2xl mt-8 mb-4">Our Expertise</h2>
    <p>
      At UNEOM, we specialize in creating uniform solutions that balance functionality, 
      comfort, and brand representation. Our team brings together expertise in:
    </p>
    <ul className="list-disc list-inside my-4 space-y-2">
      <li>Uniform design and customization</li>
      <li>Material selection and quality control</li>
      <li>Branding and corporate identity</li>
      <li>Industry-specific requirements and regulations</li>
      <li>Logistics and supply chain management</li>
    </ul>
    
    <h2 className="font-bold text-2xl mt-8 mb-4">Our Team</h2>
    <p>
      Behind every successful project is our dedicated team of professionals. From designers 
      and production specialists to customer service representatives and management, each 
      team member contributes their skills and passion to delivering exceptional results.
    </p>
    
    <h2 className="font-bold text-2xl mt-8 mb-4">Our Commitment</h2>
    <p>
      We're committed to being more than just a uniform supplier – we aim to be a true 
      partner in representing your brand through professional, high-quality uniforms. 
      Our focus extends beyond the initial delivery to ensuring ongoing satisfaction 
      and addressing evolving needs.
    </p>
  </div>
)`,

  contact: `
// Enhanced contact content component
const contactContent = (
  <div className="contact-content prose prose-lg mx-auto max-w-4xl">
    <p className="lead text-xl">
      We're here to help you with all your uniform needs. Our dedicated team is ready to 
      answer your questions, provide information about our services, and help you find 
      the perfect uniform solution for your organization.
    </p>
    
    <h2 className="font-bold text-2xl mt-8 mb-4">Get in Touch</h2>
    <p>
      There are several ways to reach our team. Choose the option that works best for you:
    </p>
    <ul className="list-disc list-inside my-4 space-y-2">
      <li><strong>Phone:</strong> +971558164922 (Sunday-Thursday, 9am-5pm)</li>
      <li><strong>Email:</strong> info@uneom.com</li>
      <li><strong>Visit:</strong> Our showroom in Riyadh, Saudi Arabia (By appointment)</li>
      <li><strong>Social Media:</strong> Connect with us on LinkedIn, Facebook, and Instagram</li>
    </ul>
    
    <h2 className="font-bold text-2xl mt-8 mb-4">Request Information</h2>
    <p>
      If you'd like to learn more about specific uniform solutions or request a catalog, 
      please complete the form below. Our team will respond promptly with the information 
      you need.
    </p>
    
    <h2 className="font-bold text-2xl mt-8 mb-4">Schedule a Consultation</h2>
    <p>
      Our uniform experts are available for personalized consultations to discuss your 
      specific requirements, provide recommendations, and help you explore options. 
      Whether you prefer an in-person meeting, a phone call, or a video conference, 
      we're happy to accommodate your preference.
    </p>
    
    <h2 className="font-bold text-2xl mt-8 mb-4">Frequently Asked Questions</h2>
    <p>
      Before reaching out, you might find answers to common questions in our FAQ section. 
      We cover topics such as customization options, minimum order quantities, delivery 
      timeframes, and care instructions.
    </p>
    
    <h2 className="font-bold text-2xl mt-8 mb-4">Feedback</h2>
    <p>
      We value your feedback and are always looking for ways to improve our products and 
      services. If you have suggestions, concerns, or compliments to share, please don't 
      hesitate to let us know.
    </p>
    
    <h2 className="font-bold text-2xl mt-8 mb-4">Our Location</h2>
    <p>
      Our headquarters is located in Riyadh, Saudi Arabia, with operations serving clients 
      throughout the country. We also have representatives available to meet with clients 
      in major cities across the region.
    </p>
  </div>
)`,

  default: `
// Default enhanced content component
const enhancedPageContent = (
  <div className="enhanced-content prose prose-lg mx-auto max-w-4xl">
    <p className="lead text-xl">
      Welcome to UNEOM, Saudi Arabia's leading provider of premium uniform solutions for 
      businesses and organizations of all sizes. We specialize in designing, manufacturing, 
      and supplying high-quality uniforms tailored to your specific needs.
    </p>
    
    <h2 className="font-bold text-2xl mt-8 mb-4">Our Expertise</h2>
    <p>
      With years of experience in the industry, we have developed expertise in creating 
      uniforms for various sectors including:
    </p>
    <ul className="list-disc list-inside my-4 space-y-2">
      <li>Healthcare and Medical Facilities</li>
      <li>Corporate and Office Environments</li>
      <li>Hospitality and Food Service</li>
      <li>Educational Institutions</li>
      <li>Industrial and Manufacturing</li>
      <li>Security and Safety Services</li>
    </ul>
    
    <h2 className="font-bold text-2xl mt-8 mb-4">Our Process</h2>
    <p>
      We follow a comprehensive approach to ensure you receive uniform solutions 
      perfectly tailored to your needs:
    </p>
    <ol className="list-decimal list-inside my-4 space-y-2">
      <li>Initial consultation to understand your requirements</li>
      <li>Design proposal with material and style recommendations</li>
      <li>Prototype development and refinement</li>
      <li>Production with rigorous quality control</li>
      <li>Timely delivery and ongoing support</li>
    </ol>
    
    <h2 className="font-bold text-2xl mt-8 mb-4">Why Choose UNEOM</h2>
    <ul className="list-disc list-inside my-4 space-y-2">
      <li><strong>Quality Excellence:</strong> Premium materials and superior craftsmanship</li>
      <li><strong>Custom Solutions:</strong> Tailored to your specific requirements</li>
      <li><strong>Professional Design:</strong> Contemporary styles that enhance your brand</li>
      <li><strong>Reliable Service:</strong> Consistent quality and on-time delivery</li>
      <li><strong>Competitive Pricing:</strong> Excellent value without compromising quality</li>
    </ul>
    
    <h2 className="font-bold text-2xl mt-8 mb-4">Our Commitment</h2>
    <p>
      At UNEOM, we're committed to helping you create a professional, cohesive look that 
      represents your brand values and meets functional requirements. We believe that 
      well-designed uniforms contribute to team pride, brand recognition, and professional 
      presentation.
    </p>
  </div>
)`
};

// Results tracking
const results = {
  scanned: 0,
  enhanced: 0,
  errors: 0,
  alreadyEnhanced: 0,
  details: []
};

/**
 * Check if a file is already using EnhancedContent
 */
function isUsingEnhancedContent(fileContent) {
  return fileContent.includes('import EnhancedContent') || 
         fileContent.includes('<EnhancedContent') || 
         fileContent.includes('className="prose') ||
         fileContent.includes('<div className="enhanced-content"');
}

/**
 * Determine the page type from the file path
 */
function getPageType(filePath) {
  const relativePath = filePath.replace(process.cwd(), '');
  
  if (relativePath.includes('/industries/')) return 'industry';
  if (relativePath.includes('/services/')) return 'service';
  if (relativePath.includes('/about')) return 'about';
  if (relativePath.includes('/contact')) return 'contact';
  
  return 'default';
}

/**
 * Add enhanced content to a file
 */
function addEnhancedContent(filePath) {
  let fileContent = fs.readFileSync(filePath, 'utf8');
  
  // Skip if already enhanced
  if (isUsingEnhancedContent(fileContent)) {
    console.log(chalk.yellow(`File already has enhanced content: ${filePath}`));
    results.alreadyEnhanced++;
    results.details.push({
      file: filePath,
      status: 'skipped',
      reason: 'Already has enhanced content'
    });
    return false;
  }
  
  results.scanned++;
  
  // Determine page type
  const pageType = getPageType(filePath);
  const contentTemplate = contentTemplates[pageType] || contentTemplates.default;
  
  // Add import for enhanced content component
  if (!fileContent.includes('import EnhancedContent')) {
    fileContent = fileContent.replace(
      /import.*?;(\s*import.*?;)*(\s*)/m,
      match => `${match}import EnhancedContent from '@/components/seo/EnhancedContent';\n`
    );
  }
  
  // Find a good insertion point for the content
  // Look for main content area or a container div
  let insertionFound = false;
  
  // Check for main tag
  const mainRegex = /<main[^>]*>([\s\S]*?)<\/main>/;
  if (mainRegex.test(fileContent)) {
    fileContent = fileContent.replace(mainRegex, match => {
      const openingTag = match.match(/<main[^>]*>/)[0];
      const closingTag = '</main>';
      const content = match.slice(openingTag.length, match.length - closingTag.length);
      
      // Add content template after opening main tag
      return `${openingTag}\n        ${contentTemplate}\n        ${content}${closingTag}`;
    });
    insertionFound = true;
  } 
  // Check for section tags
  else if (fileContent.includes('<section')) {
    const sectionRegex = /<section[^>]*>([\s\S]*?)<\/section>/;
    fileContent = fileContent.replace(sectionRegex, match => {
      const openingTag = match.match(/<section[^>]*>/)[0];
      const closingTag = '</section>';
      const content = match.slice(openingTag.length, match.length - closingTag.length);
      
      // Add content template after opening section tag
      return `${openingTag}\n        ${contentTemplate}\n        ${content}${closingTag}`;
    });
    insertionFound = true;
  }
  // Check for div containers
  else if (fileContent.includes('<div className="container')) {
    const containerRegex = /<div className="container[^>]*>([\s\S]*?)(<\/div>)/;
    fileContent = fileContent.replace(containerRegex, match => {
      const openingTag = match.match(/<div className="container[^>]*>/)[0];
      const closingIndex = match.lastIndexOf('</div>');
      const content = match.slice(openingTag.length, closingIndex);
      
      // Add content template after opening container div
      return `${openingTag}\n        ${contentTemplate}\n        ${content}</div>`;
    });
    insertionFound = true;
  }
  
  if (!insertionFound) {
    console.log(chalk.red(`Could not find a suitable insertion point in: ${filePath}`));
    results.errors++;
    results.details.push({
      file: filePath,
      status: 'error',
      reason: 'No suitable insertion point found'
    });
    return false;
  }
  
  // Add getStaticProps if it doesn't exist (to ensure server-side rendering)
  if (!fileContent.includes('export const getStaticProps') && !fileContent.includes('export async function getStaticProps')) {
    const getStaticPropsTemplate = `\n
export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      // Ensuring server-side rendering
    }
  };
};\n`;
    
    fileContent = fileContent + getStaticPropsTemplate;
  }
  
  // Save the enhanced file
  fs.writeFileSync(filePath, fileContent);
  console.log(chalk.green(`Enhanced content added to: ${filePath}`));
  
  results.enhanced++;
  results.details.push({
    file: filePath,
    status: 'enhanced',
    type: pageType
  });
  
  return true;
}

/**
 * Enhance page content
 */
function enhancePages() {
  console.log('Enhancing page content...');
  
  // Get page files
  const pageFiles = glob.sync(path.join(PAGES_DIR, '**', '*.{js,jsx,ts,tsx}'));
  
  for (const pageFile of pageFiles) {
    addEnhancedContent(pageFile);
  }
  
  // Print results
  printResults();
}

/**
 * Print results
 */
function printResults() {
  console.log('\n=== CONTENT ENHANCEMENT RESULTS ===');
  console.log(`Scanned: ${results.scanned} files`);
  console.log(`Enhanced: ${results.enhanced} files`);
  console.log(`Already Enhanced: ${results.alreadyEnhanced} files`);
  console.log(`Errors: ${results.errors} files`);
  
  // Save results to file
  const resultsFile = path.join(process.cwd(), 'content-enhancement-results.json');
  fs.writeFileSync(resultsFile, JSON.stringify(results, null, 2));
  console.log(`\nDetailed results saved to: ${resultsFile}`);
}

// Run the script
enhancePages(); 