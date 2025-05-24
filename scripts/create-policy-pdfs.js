const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

// Create directory if it doesn't exist
const dir = path.join(__dirname, '../public/downloads/policy-templates');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Company information
const companyInfo = {
  name: 'UNEOM',
  fullName: 'United Uniform Manufacturing Company',
  website: 'www.uneom.com',
  email: 'info@uneom.com',
  phone: '+966 13 123 4567',
  address: 'Industrial Area, Dammam, Saudi Arabia'
};

// Helper function to create header
function createHeader(doc, title) {
  doc.fontSize(24)
     .font('Helvetica-Bold')
     .text(companyInfo.name, 50, 50)
     .fontSize(10)
     .font('Helvetica')
     .text(companyInfo.fullName, 50, 80)
     .text(companyInfo.website + ' | ' + companyInfo.email, 50, 95);
  
  doc.moveTo(50, 115)
     .lineTo(550, 115)
     .stroke();
  
  doc.fontSize(20)
     .font('Helvetica-Bold')
     .text(title, 50, 140, { align: 'center' });
  
  return 180;
}

// Helper function to add section
function addSection(doc, y, title, content) {
  doc.fontSize(14)
     .font('Helvetica-Bold')
     .text(title, 50, y);
  
  doc.fontSize(11)
     .font('Helvetica')
     .text(content, 50, y + 20, {
       width: 500,
       align: 'justify'
     });
  
  return doc.y + 20;
}

// 1. General Uniform Policy Template
function createGeneralPolicy() {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream(path.join(dir, 'general-uniform-policy-template.pdf')));
  
  let y = createHeader(doc, 'General Uniform Policy Template');
  
  y = addSection(doc, y, '1. PURPOSE', 
    `${companyInfo.name} requires employees to wear uniforms to present a professional and consistent image to our customers, promote team identity, ensure safety and practicality for job functions, and comply with industry regulations. This policy outlines the standards, procedures, and responsibilities related to company uniforms.`
  );
  
  y = addSection(doc, y, '2. SCOPE', 
    'This policy applies to all employees, contractors, and temporary staff who are required to wear company uniforms as part of their job responsibilities.'
  );
  
  y = addSection(doc, y, '3. GENERAL APPEARANCE STANDARDS', 
    '• Uniforms must be clean, pressed, and in good repair at all times\n' +
    '• All required uniform components must be worn during working hours\n' +
    '• Personal hygiene standards must be maintained\n' +
    '• Uniforms should fit properly - not too tight or too loose\n' +
    '• Only approved uniform items may be worn'
  );
  
  y = addSection(doc, y, '4. UNIFORM COMPONENTS', 
    'Standard uniform components vary by department and role. Employees will receive:\n' +
    '• Shirts/blouses (quantity based on role)\n' +
    '• Pants/skirts\n' +
    '• Outerwear (if applicable)\n' +
    '• Safety equipment (as required)\n' +
    '• Name badges and identification'
  );
  
  doc.addPage();
  y = 50;
  
  y = addSection(doc, y, '5. OBTAINING UNIFORMS', 
    'New employees will be measured and fitted for uniforms during orientation. Uniforms will be provided at no cost to the employee. Replacement uniforms due to normal wear and tear will be provided by the company. Lost or damaged uniforms due to negligence may be replaced at employee expense.'
  );
  
  y = addSection(doc, y, '6. CARE AND MAINTENANCE', 
    'Employees are responsible for:\n' +
    '• Laundering uniforms regularly\n' +
    '• Following care instructions on garment labels\n' +
    '• Reporting damaged uniforms promptly\n' +
    '• Returning uniforms in acceptable condition upon termination'
  );
  
  y = addSection(doc, y, '7. RELIGIOUS AND MEDICAL ACCOMMODATIONS', 
    `${companyInfo.name} will make reasonable accommodations for religious beliefs and medical conditions that affect uniform wear. Employees requesting accommodations should contact Human Resources with documentation as required.`
  );
  
  y = addSection(doc, y, '8. ENFORCEMENT', 
    'Supervisors are responsible for enforcing this policy. Progressive discipline for non-compliance includes:\n' +
    '• Verbal warning\n' +
    '• Written warning\n' +
    '• Suspension\n' +
    '• Termination'
  );
  
  doc.fontSize(10)
     .font('Helvetica-Oblique')
     .text('This template should be customized to meet your organization\'s specific needs and reviewed by legal counsel.', 50, 700);
  
  doc.end();
}

// 2. Healthcare Uniform Policy
function createHealthcarePolicy() {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream(path.join(dir, 'healthcare-uniform-policy.pdf')));
  
  let y = createHeader(doc, 'Healthcare Uniform Policy');
  
  y = addSection(doc, y, '1. PURPOSE', 
    'This policy establishes uniform standards for healthcare facilities to ensure infection control, professional appearance, and easy identification of staff roles. Compliance with this policy is mandatory for patient safety and regulatory requirements.'
  );
  
  y = addSection(doc, y, '2. INFECTION CONTROL STANDARDS', 
    '• Uniforms must be changed daily or when visibly soiled\n' +
    '• Scrubs worn in surgical areas must not be worn outside designated zones\n' +
    '• Home laundering must use hot water (minimum 60°C) and appropriate detergent\n' +
    '• Uniforms exposed to infectious materials must be changed immediately\n' +
    '• Personal protective equipment must be worn as required'
  );
  
  y = addSection(doc, y, '3. DEPARTMENT COLOR CODING', 
    '• Nursing Staff: Navy Blue\n' +
    '• Physicians: White coat over professional attire\n' +
    '• Surgical Team: Hospital-provided surgical scrubs\n' +
    '• Emergency Department: Red scrubs\n' +
    '• Pediatrics: Colorful prints approved by department\n' +
    '• Support Staff: Gray or khaki'
  );
  
  doc.addPage();
  y = 50;
  
  y = addSection(doc, y, '4. IDENTIFICATION REQUIREMENTS', 
    '• Photo ID badge must be worn above waist level and clearly visible\n' +
    '• Department and role must be clearly indicated\n' +
    '• Temporary staff must wear designated identification\n' +
    '• Access cards must not be shared or loaned'
  );
  
  y = addSection(doc, y, '5. PERSONAL PROTECTIVE EQUIPMENT', 
    'PPE must be worn according to infection control protocols:\n' +
    '• Gloves for all patient contact\n' +
    '• Masks in designated areas or during procedures\n' +
    '• Eye protection when splash risk exists\n' +
    '• Gowns for isolation precautions\n' +
    '• Proper disposal after single use'
  );
  
  y = addSection(doc, y, '6. GROOMING AND HYGIENE', 
    '• Hair must be clean and secured away from face\n' +
    '• Fingernails must be short and clean (no artificial nails)\n' +
    '• Minimal jewelry (wedding band, small earrings only)\n' +
    '• No visible tattoos in patient care areas\n' +
    '• Perfume/cologne should be avoided'
  );
  
  y = addSection(doc, y, '7. FOOTWEAR REQUIREMENTS', 
    '• Closed-toe, non-slip shoes required\n' +
    '• Shoes must be clean and in good repair\n' +
    '• No cloth or canvas shoes in clinical areas\n' +
    '• Operating room requires designated OR shoes'
  );
  
  doc.fontSize(10)
     .font('Helvetica')
     .text(`For more information, contact ${companyInfo.name} Healthcare Division`, 50, 700)
     .text(`${companyInfo.phone} | ${companyInfo.email}`, 50, 715);
  
  doc.end();
}

// 3. Hospitality Uniform Policy
function createHospitalityPolicy() {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream(path.join(dir, 'hospitality-uniform-policy.pdf')));
  
  let y = createHeader(doc, 'Hospitality Uniform Policy');
  
  y = addSection(doc, y, '1. PURPOSE', 
    'This policy ensures all hospitality staff present a professional, cohesive brand image that enhances guest experience and maintains our luxury service standards. Uniforms are a vital part of our brand identity and guest perception.'
  );
  
  y = addSection(doc, y, '2. FRONT-OF-HOUSE STANDARDS', 
    '• Uniforms must be immaculate - cleaned, pressed, and lint-free\n' +
    '• All buttons, badges, and accessories must be properly aligned\n' +
    '• Shoes must be polished daily\n' +
    '• Name tags must be worn on the right side\n' +
    '• Seasonal variations must be approved by management'
  );
  
  y = addSection(doc, y, '3. GROOMING STANDARDS', 
    'Male Staff:\n' +
    '• Clean-shaven or well-groomed facial hair\n' +
    '• Hair neat and above collar\n' +
    '• Minimal cologne\n\n' +
    'Female Staff:\n' +
    '• Professional hairstyle, secured if long\n' +
    '• Natural-looking makeup\n' +
    '• Minimal perfume\n' +
    '• Conservative nail polish colors'
  );
  
  doc.addPage();
  y = 50;
  
  y = addSection(doc, y, '4. POSITION-SPECIFIC REQUIREMENTS', 
    '• Front Desk: Business formal with company blazer\n' +
    '• Concierge: Traditional formal uniform with gold accents\n' +
    '• Housekeeping: Practical uniform with apron\n' +
    '• Restaurant Service: Black and white formal service attire\n' +
    '• Valet: Outdoor uniform with weather protection'
  );
  
  y = addSection(doc, y, '5. FOOD SAFETY CONSIDERATIONS', 
    'Food service staff must:\n' +
    '• Wear hair nets or chef hats in kitchen areas\n' +
    '• Remove all jewelry except wedding bands\n' +
    '• Maintain short, clean fingernails\n' +
    '• Change aprons when moving between areas\n' +
    '• Wear non-slip shoes in kitchen areas'
  );
  
  y = addSection(doc, y, '6. CULTURAL CONSIDERATIONS', 
    `${companyInfo.name} respects cultural and religious requirements:\n` +
    '• Hijab in company colors is permitted\n' +
    '• Modest uniform options available\n' +
    '• Religious jewelry may be worn if discrete\n' +
    '• Accommodation requests handled confidentially'
  );
  
  doc.fontSize(10)
     .font('Helvetica')
     .text('Creating exceptional guest experiences through professional presentation', 50, 700, { align: 'center' });
  
  doc.end();
}

// 4. Industrial/Manufacturing Policy
function createIndustrialPolicy() {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream(path.join(dir, 'industrial-manufacturing-policy.pdf')));
  
  let y = createHeader(doc, 'Industrial & Manufacturing Uniform Policy');
  
  y = addSection(doc, y, '1. PURPOSE', 
    'This policy prioritizes worker safety while maintaining professional standards in industrial environments. All uniform requirements are designed to meet or exceed OSHA standards and industry-specific safety regulations.'
  );
  
  y = addSection(doc, y, '2. SAFETY REQUIREMENTS', 
    '• High-visibility clothing required in designated areas\n' +
    '• Flame-resistant garments for welding/hot work\n' +
    '• Chemical-resistant clothing in chemical handling areas\n' +
    '• Steel-toed boots mandatory in all production areas\n' +
    '• Hard hats required in construction zones'
  );
  
  y = addSection(doc, y, '3. PROHIBITED ITEMS', 
    'For safety reasons, the following are strictly prohibited:\n' +
    '• Loose clothing that could catch in machinery\n' +
    '• Jewelry including rings, necklaces, and dangling earrings\n' +
    '• Synthetic materials in high-heat areas\n' +
    '• Open-toed shoes or sandals\n' +
    '• Clothing with tears or frayed edges'
  );
  
  doc.addPage();
  y = 50;
  
  y = addSection(doc, y, '4. PERSONAL PROTECTIVE EQUIPMENT', 
    'Required PPE by area:\n' +
    '• Safety glasses in all production areas\n' +
    '• Hearing protection in high-noise zones\n' +
    '• Respirators in designated areas\n' +
    '• Cut-resistant gloves for sharp materials\n' +
    '• Fall protection harnesses when working at height'
  );
  
  y = addSection(doc, y, '5. SEASONAL ADAPTATIONS', 
    'Summer:\n' +
    '• Moisture-wicking fabrics permitted\n' +
    '• Cooling vests available for extreme heat\n' +
    '• Additional hydration breaks\n\n' +
    'Winter:\n' +
    '• Insulated coveralls provided\n' +
    '• Cold weather gloves\n' +
    '• Thermal undergarments permitted'
  );
  
  y = addSection(doc, y, '6. MAINTENANCE AND INSPECTION', 
    '• Daily pre-shift uniform inspection required\n' +
    '• Damaged items must be reported immediately\n' +
    '• Company laundering service for contaminated garments\n' +
    '• Annual PPE certification and replacement\n' +
    '• Emergency replacement available on-site'
  );
  
  doc.fontSize(12)
     .font('Helvetica-Bold')
     .text('SAFETY FIRST - ALWAYS', 50, 700, { align: 'center' });
  
  doc.end();
}

// 5. Corporate Office Policy
function createCorporatePolicy() {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream(path.join(dir, 'corporate-office-policy.pdf')));
  
  let y = createHeader(doc, 'Corporate Office Uniform Policy');
  
  y = addSection(doc, y, '1. PURPOSE', 
    `This policy establishes professional dress standards that reflect ${companyInfo.name}'s corporate image while allowing appropriate flexibility for different roles and occasions. Our appearance represents our brand to clients, partners, and stakeholders.`
  );
  
  y = addSection(doc, y, '2. BUSINESS PROFESSIONAL ATTIRE', 
    'Men:\n' +
    '• Suit or dress pants with dress shirt\n' +
    '• Tie required for client meetings\n' +
    '• Leather dress shoes\n' +
    '• Conservative colors (navy, gray, black)\n\n' +
    'Women:\n' +
    '• Business suit, dress, or coordinated separates\n' +
    '• Modest necklines and hemlines\n' +
    '• Closed-toe professional shoes\n' +
    '• Conservative colors and patterns'
  );
  
  y = addSection(doc, y, '3. BUSINESS CASUAL GUIDELINES', 
    'Acceptable:\n' +
    '• Dress pants or khakis\n' +
    '• Collared shirts or blouses\n' +
    '• Sweaters or cardigans\n' +
    '• Loafers or professional flats\n\n' +
    'Not Acceptable:\n' +
    '• Jeans (except designated casual days)\n' +
    '• T-shirts or tank tops\n' +
    '• Sneakers or sandals\n' +
    '• Shorts or mini-skirts'
  );
  
  doc.addPage();
  y = 50;
  
  y = addSection(doc, y, '4. BRANDED APPAREL', 
    `• ${companyInfo.name} branded items may be worn on designated days\n` +
    '• Branded polo shirts acceptable for business casual\n' +
    '• Company fleece or blazer for client visits\n' +
    '• Branded accessories must be professional\n' +
    '• Items must be in good condition'
  );
  
  y = addSection(doc, y, '5. SPECIAL OCCASIONS', 
    'Client Entertainment:\n' +
    '• Business formal unless otherwise specified\n' +
    '• Cultural sensitivity considerations\n\n' +
    'Company Events:\n' +
    '• Dress code specified in invitation\n' +
    '• "Smart casual" typically means no jeans\n\n' +
    'Video Calls:\n' +
    '• Professional appearance from waist up minimum\n' +
    '• Solid colors preferred for video'
  );
  
  y = addSection(doc, y, '6. FRIDAY DRESS CODE', 
    'Casual Fridays (when authorized):\n' +
    '• Nice jeans permitted (no tears or fading)\n' +
    '• Company polo shirts encouraged\n' +
    '• Sneakers must be clean and professional\n' +
    '• No athletic wear or beach attire\n' +
    '• Client meetings still require business attire'
  );
  
  doc.fontSize(10)
     .font('Helvetica-Oblique')
     .text('Professional appearance is an investment in your career success', 50, 700, { align: 'center' });
  
  doc.end();
}

// 6. Implementation Checklist
function createImplementationChecklist() {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream(path.join(dir, 'uniform-policy-implementation-checklist.pdf')));
  
  let y = createHeader(doc, 'Uniform Policy Implementation Checklist');
  
  doc.fontSize(12)
     .font('Helvetica')
     .text('Use this checklist to ensure successful implementation of your uniform policy:', 50, y);
  
  y += 30;
  
  const checklistItems = [
    { phase: 'Planning Phase', items: [
      'Conduct employee survey for input',
      'Review industry regulations and standards',
      'Establish budget for uniform program',
      'Select uniform supplier (consider UNEOM)',
      'Create timeline for implementation'
    ]},
    { phase: 'Development Phase', items: [
      'Draft comprehensive policy document',
      'Include accommodation procedures',
      'Define enforcement guidelines',
      'Obtain legal review',
      'Get executive approval'
    ]},
    { phase: 'Communication Phase', items: [
      'Create visual uniform guide',
      'Schedule all-hands meetings',
      'Prepare FAQ document',
      'Train supervisors on policy',
      'Set up feedback mechanism'
    ]},
    { phase: 'Implementation Phase', items: [
      'Conduct sizing and fitting sessions',
      'Distribute initial uniform sets',
      'Post policy in common areas',
      'Begin grace period for compliance',
      'Monitor and address issues'
    ]},
    { phase: 'Maintenance Phase', items: [
      'Establish replacement procedures',
      'Schedule regular policy reviews',
      'Track compliance metrics',
      'Gather ongoing feedback',
      'Update policy as needed'
    ]}
  ];
  
  checklistItems.forEach(phase => {
    if (y > 650) {
      doc.addPage();
      y = 50;
    }
    
    doc.fontSize(14)
       .font('Helvetica-Bold')
       .text(phase.phase, 50, y);
    y += 20;
    
    phase.items.forEach(item => {
      doc.fontSize(11)
         .font('Helvetica')
         .text('☐  ' + item, 70, y);
      y += 20;
    });
    
    y += 10;
  });
  
  doc.addPage();
  
  doc.fontSize(14)
     .font('Helvetica-Bold')
     .text('Notes:', 50, 50);
  
  // Add lines for notes
  let noteY = 80;
  for (let i = 0; i < 20; i++) {
    doc.moveTo(50, noteY)
       .lineTo(550, noteY)
       .stroke('#cccccc');
    noteY += 25;
  }
  
  doc.fontSize(10)
     .font('Helvetica')
     .text(`For uniform solutions and consultation, contact ${companyInfo.name}`, 50, 680)
     .text(`${companyInfo.phone} | ${companyInfo.email} | ${companyInfo.website}`, 50, 695);
  
  doc.end();
}

// Create all PDFs
console.log('Creating policy template PDFs...');
createGeneralPolicy();
createHealthcarePolicy();
createHospitalityPolicy();
createIndustrialPolicy();
createCorporatePolicy();
createImplementationChecklist();
console.log('PDFs created successfully!');