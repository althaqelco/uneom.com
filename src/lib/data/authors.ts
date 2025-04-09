export interface Author {
  id: string;
  name: string;
  title: string;
  avatar: string;
  bio: string;
  shortBio: string;
  experience: number;
  expertise: string[];
  credentials: string[];
  industries: string[];
  featured: boolean;
  linkedin?: string;
  twitter?: string;
  education?: string[];
  publications?: {
    title: string;
    url?: string;
    publisher: string;
    year: number;
  }[];
  certifications?: string[];
  contributions?: string[];
}

export const authors: Author[] = [
  {
    id: 'abdullah-al-qahtani',
    name: 'Dr. Abdullah Al-Qahtani',
    title: 'Chief Technical Officer',
    avatar: '/images/authors/abdullah-al-qahtani.jpg',
    bio: 'Dr. Abdullah Al-Qahtani holds a Ph.D. in Textile Engineering and has over 20 years of experience in fabric technology and industrial uniform design. He leads UNEOM\'s technical development team, specializing in performance fabrics for extreme environments. His work focuses on developing innovative textiles for Saudi Arabia\'s unique climate challenges, particularly in the oil, gas, and construction sectors. Dr. Al-Qahtani previously served as a technical consultant for major petrochemical companies in the Kingdom and has published extensively on heat-resistant and flame-retardant materials.',
    shortBio: 'Textile engineer with 20+ years experience in technical fabrics and industrial uniforms for extreme environments.',
    experience: 20,
    expertise: [
      'Technical Textile Development',
      'Heat-Resistant Materials',
      'Flame-Retardant Fabrics',
      'Industrial Safety Standards',
      'Climate-Adaptive Textiles'
    ],
    credentials: [
      'Ph.D. in Textile Engineering, Manchester University',
      'M.Sc. in Material Science, King Fahd University of Petroleum and Minerals',
      'Fellow, Saudi Society for Textiles and Fashion'
    ],
    industries: ['Industrial', 'Oil & Gas', 'Construction', 'Manufacturing'],
    featured: true,
    linkedin: 'https://linkedin.com/in/abdullah-al-qahtani',
    publications: [
      {
        title: 'Advancements in Heat-Resistant Textiles for Industrial Applications in the GCC',
        publisher: 'Journal of Technical Textiles',
        year: 2021
      },
      {
        title: 'Durability of Flame-Retardant Fabrics in High-Temperature Industrial Environments',
        publisher: 'International Journal of Protective Clothing',
        year: 2019
      }
    ],
    certifications: [
      'Certified Safety Professional (CSP)',
      'Advanced Technical Textiles Specialist'
    ]
  },
  {
    id: 'noura-al-ahmad',
    name: 'Noura Al-Ahmad',
    title: 'Healthcare Uniform Specialist',
    avatar: '/images/authors/noura-al-ahmad.jpg',
    bio: 'Noura Al-Ahmad is UNEOM\'s leading expert in healthcare uniforms with 15 years of experience in medical textiles and antimicrobial fabrics. She has worked with major hospitals and healthcare networks throughout Saudi Arabia to develop scrubs and uniforms that meet rigorous infection control standards while ensuring comfort in long shifts. Noura specializes in antimicrobial textiles and has pioneered several innovations in stain-resistant and fluid-repellent fabrics for healthcare environments. Her background includes extensive research on textile properties that reduce hospital-acquired infections and improve durability through industrial laundering processes.',
    shortBio: 'Healthcare uniform specialist with expertise in antimicrobial fabrics and infection control standards for medical environments.',
    experience: 15,
    expertise: [
      'Healthcare Uniform Design',
      'Antimicrobial Textiles',
      'Infection Control Standards',
      'Medical Scrubs Development',
      'Hospital Uniform Programs'
    ],
    credentials: [
      'Master\'s in Healthcare Management, King Saud University',
      'Bachelor\'s in Textile Science, Riyadh University',
      'Healthcare Textile Specialist Certification'
    ],
    industries: ['Healthcare', 'Medical', 'Pharmaceutical'],
    featured: true,
    linkedin: 'https://linkedin.com/in/noura-al-ahmad',
    twitter: 'https://twitter.com/noura_textiles',
    publications: [
      {
        title: 'Effectiveness of Antimicrobial Fabrics in Reducing Healthcare-Associated Infections',
        publisher: 'Saudi Journal of Medical Sciences',
        year: 2022
      }
    ],
    certifications: [
      'Certified Healthcare Environmental Services Professional',
      'Infection Control Risk Assessment Certification'
    ]
  },
  {
    id: 'khalid-ibrahim',
    name: 'Khalid Ibrahim',
    title: 'Security Uniform Director',
    avatar: '/images/authors/khalid-ibrahim.jpg',
    bio: 'Khalid Ibrahim brings 18 years of experience in security uniform design and implementation for government, private security firms, and corporate security departments. With a background in both military and private security sectors, Khalid specializes in developing uniform systems that combine professional appearance with practical functionality for security personnel. His expertise includes ballistic-resistant materials, concealed body armor integration, and uniform standards that comply with Saudi regulatory requirements. Khalid has worked extensively with security teams at major Saudi institutions, government facilities, and international events hosted in the Kingdom.',
    shortBio: 'Security uniform expert with extensive experience designing protective and functional uniforms for government and private security sectors.',
    experience: 18,
    expertise: [
      'Security Uniform Standards',
      'Tactical Gear Integration',
      'Body Armor Compatibility',
      'Government Security Requirements',
      'Corporate Security Programs'
    ],
    credentials: [
      'Security Management Certification, International Security Academy',
      'Advanced Course in Protective Equipment Standards',
      'Former Captain, Royal Saudi Land Forces'
    ],
    industries: ['Security', 'Government', 'Defense', 'Corporate'],
    featured: true,
    linkedin: 'https://linkedin.com/in/khalid-ibrahim-security',
    certifications: [
      'Certified Protection Professional (CPP)',
      'Security Uniform Standards Specialist'
    ],
    contributions: [
      'Developed security uniform standards for the G20 Summit hosting in Riyadh',
      'Advisory committee member for Saudi Security Forces uniform modernization'
    ]
  },
  {
    id: 'fatima-al-sulaiman',
    name: 'Fatima Al-Sulaiman',
    title: 'Hospitality Uniform Designer',
    avatar: '/images/authors/fatima-al-sulaiman.jpg',
    bio: 'Fatima Al-Sulaiman is an award-winning uniform designer specializing in luxury hospitality and tourism sectors. With 12 years of experience creating distinctive uniform collections for five-star hotels, resorts, and airlines, Fatima combines traditional Saudi design elements with contemporary fashion. Her approach emphasizes brand identity expression through uniform design while ensuring functionality and comfort for staff. Fatima has developed signature uniform collections for major hotel chains in Saudi Arabia and the wider GCC region, creating distinctive looks that reflect each property\'s unique character while maintaining operational practicality.',
    shortBio: 'Luxury hospitality uniform designer creating distinctive, brand-aligned uniforms for hotels, resorts and tourism operators.',
    experience: 12,
    expertise: [
      'Luxury Hotel Uniforms',
      'Brand Identity Integration',
      'Traditional-Contemporary Fusion',
      'Tourism Sector Uniforms',
      'Staff Uniform Programs'
    ],
    credentials: [
      'Master\'s in Fashion Design, Milan Fashion Institute',
      'Bachelor\'s in Textile Design, Saudi Institute of Design',
      'Luxury Hospitality Design Certification'
    ],
    industries: ['Hospitality', 'Tourism', 'Luxury Retail', 'Aviation'],
    featured: true,
    linkedin: 'https://linkedin.com/in/fatima-al-sulaiman',
    twitter: 'https://twitter.com/fatima_design',
    education: [
      'Master\'s in Fashion Design, Milan Fashion Institute',
      'Bachelor\'s in Textile Design, Saudi Institute of Design'
    ],
    certifications: [
      'Luxury Hospitality Brand Standards Certification',
      'Sustainable Fashion Design Specialist'
    ]
  },
  {
    id: 'mohammed-al-otaibi',
    name: 'Mohammed Al-Otaibi',
    title: 'Education Sector Specialist',
    avatar: '/images/authors/mohammed-al-otaibi.jpg',
    bio: 'Mohammed Al-Otaibi has specialized in educational institution uniforms for 14 years, working with schools, universities, and educational authorities throughout Saudi Arabia. His expertise covers developing comprehensive uniform programs that align with educational values, practical requirements, and cultural considerations. Mohammed has pioneered approaches to school uniform design that focus on durability, comfort in Saudi climate conditions, and age-appropriate styling. He has consulted with the Ministry of Education on uniform standards and works closely with educational institutions to create identity-reinforcing uniform systems.',
    shortBio: 'Education sector uniform specialist designing practical, identity-reinforcing uniforms for schools and universities across Saudi Arabia.',
    experience: 14,
    expertise: [
      'School Uniform Programs',
      'University Identity Systems',
      'Educational Dress Codes',
      'Climate-Appropriate Schoolwear',
      'Sports Uniform Integration'
    ],
    credentials: [
      'Educational Administration Certification, King Saud University',
      'Textile Product Development Specialist',
      'Former Educational Institution Administrator'
    ],
    industries: ['Education', 'Schools', 'Universities', 'Sports'],
    featured: false,
    linkedin: 'https://linkedin.com/in/mohammed-al-otaibi',
    contributions: [
      'Developed uniform standards guidelines for Saudi private schools',
      'Consultant to Ministry of Education on national school uniform policies'
    ]
  },
  {
    id: 'sara-al-ghamdi',
    name: 'Sara Al-Ghamdi',
    title: 'Sustainable Textiles Director',
    avatar: '/images/authors/sara-al-ghamdi.jpg',
    bio: 'Sara Al-Ghamdi leads UNEOM\'s sustainability initiatives, bringing 10 years of expertise in eco-friendly textile development and sustainable uniform production. She specializes in developing uniform solutions that reduce environmental impact while maintaining performance standards and cost-effectiveness. Sara has implemented comprehensive sustainability programs throughout UNEOM\'s supply chain and manufacturing processes, focusing on water conservation techniques particularly relevant to Saudi Arabia\'s climate challenges. Her approach emphasizes circular economy principles in uniform lifecycle management.',
    shortBio: 'Sustainable textile expert implementing eco-friendly practices in uniform design and production with focus on water conservation.',
    experience: 10,
    expertise: [
      'Sustainable Textile Sourcing',
      'Eco-Friendly Production Methods',
      'Water Conservation in Manufacturing',
      'Circular Economy Applications',
      'Environmental Compliance'
    ],
    credentials: [
      'M.Sc. in Environmental Management, King Abdullah University of Science and Technology',
      'B.Sc. in Textile Engineering, King Fahd University',
      'Sustainable Textile Certification'
    ],
    industries: ['Sustainability', 'Manufacturing', 'Corporate', 'Education'],
    featured: false,
    linkedin: 'https://linkedin.com/in/sara-al-ghamdi',
    twitter: 'https://twitter.com/sara_sustainable',
    publications: [
      {
        title: 'Water Conservation Techniques in Textile Manufacturing for Arid Environments',
        publisher: 'Journal of Sustainable Textiles',
        year: 2023
      }
    ],
    certifications: [
      'Certified Sustainability Professional',
      'Global Organic Textile Standard (GOTS) Expert'
    ]
  },
  {
    id: 'ahmad-al-farsi',
    name: 'Ahmad Al-Farsi',
    title: 'Industrial Uniform Safety Expert',
    avatar: '/images/authors/ahmad-al-farsi.jpg',
    bio: 'Ahmad Al-Farsi has 16 years of specialized experience in industrial safety uniforms, particularly for oil and gas, construction, and manufacturing sectors. His expertise centers on developing protective workwear that meets international safety standards while being adapted to Saudi Arabia\'s climate conditions. Ahmad has extensive knowledge of flame-resistant fabrics, chemical protection standards, and high-visibility safety requirements. He has developed comprehensive uniform programs for major industrial operations throughout the Kingdom, focusing on compliance with both Saudi and international workplace safety regulations.',
    shortBio: 'Industrial safety uniform specialist with expertise in protective workwear for oil, gas, construction and manufacturing sectors.',
    experience: 16,
    expertise: [
      'Industrial Safety Standards',
      'Flame-Resistant Workwear',
      'Chemical Protection Uniforms',
      'High-Visibility Requirements',
      'Heat Stress Management'
    ],
    credentials: [
      'Certified Safety Professional (CSP)',
      'Industrial Hygiene Specialist',
      'NEBOSH International Diploma in Occupational Health and Safety'
    ],
    industries: ['Oil & Gas', 'Construction', 'Manufacturing', 'Chemical'],
    featured: false,
    linkedin: 'https://linkedin.com/in/ahmad-al-farsi',
    certifications: [
      'OSHA Authorized Safety Trainer',
      'Hazardous Materials Management Specialist'
    ],
    contributions: [
      'Developed heat stress management protocols for industrial workwear in Saudi climate',
      'Advisory board member for Saudi Industrial Safety Council'
    ]
  },
  {
    id: 'layla-hassan',
    name: 'Layla Hassan',
    title: 'Corporate Uniform Program Manager',
    avatar: '/images/authors/layla-hassan.jpg',
    bio: 'Layla Hassan specializes in developing comprehensive corporate uniform programs that align with brand identity and organizational culture. With 13 years of experience working with major Saudi corporations, banks, and retail chains, she brings expertise in large-scale uniform implementation, staff onboarding, and ongoing program management. Layla\'s approach focuses on creating uniform systems that enhance brand recognition while ensuring practical functionality across diverse job roles. She has pioneered digital uniform management systems for large organizations, streamlining ordering, replacement, and inventory control processes.',
    shortBio: 'Corporate uniform specialist developing brand-aligned uniform programs for major Saudi corporations, banks and retail chains.',
    experience: 13,
    expertise: [
      'Corporate Identity Integration',
      'Large-Scale Uniform Programs',
      'Brand Alignment Strategies',
      'Uniform Management Systems',
      'Multi-Department Coordination'
    ],
    credentials: [
      'MBA with Marketing Specialization, King Abdulaziz University',
      'B.Sc. in Business Administration',
      'Project Management Professional (PMP)'
    ],
    industries: ['Corporate', 'Banking', 'Retail', 'Telecommunications'],
    featured: false,
    linkedin: 'https://linkedin.com/in/layla-hassan',
    certifications: [
      'Brand Identity Management Certification',
      'Corporate Uniform Program Specialist'
    ]
  },
  {
    id: 'faisal-al-dawsari',
    name: 'Faisal Al-Dawsari',
    title: 'Cultural Heritage Consultant',
    avatar: '/images/authors/faisal-al-dawsari.jpg',
    bio: 'Faisal Al-Dawsari brings 17 years of expertise in integrating traditional Saudi design elements into contemporary uniform collections. His work focuses on preserving cultural heritage while creating modern, functional uniforms for government, tourism, and ceremonial applications. Faisal has extensive knowledge of regional variations in traditional Saudi dress and their historical significance, allowing him to incorporate authentic cultural elements appropriately in professional contexts. He has contributed to significant national projects, including uniform design for cultural festivals, heritage sites, and diplomatic functions.',
    shortBio: 'Cultural heritage specialist incorporating traditional Saudi design elements into contemporary uniform collections for government and tourism sectors.',
    experience: 17,
    expertise: [
      'Traditional Saudi Dress Elements',
      'Cultural Heritage Preservation',
      'Contemporary-Traditional Fusion',
      'Ceremonial Uniform Design',
      'Regional Design Variations'
    ],
    credentials: [
      'Master\'s in Cultural Heritage Preservation, King Saud University',
      'Bachelor\'s in Saudi Studies',
      'Traditional Craft Documentation Specialist'
    ],
    industries: ['Government', 'Tourism', 'Cultural Institutions', 'Diplomatic'],
    featured: false,
    linkedin: 'https://linkedin.com/in/faisal-al-dawsari',
    publications: [
      {
        title: 'Evolution of Traditional Saudi Dress Elements in Modern Professional Contexts',
        publisher: 'Journal of Middle Eastern Cultural Studies',
        year: 2020
      }
    ],
    contributions: [
      'Advisor to Royal Commission for AlUla on heritage guide uniforms',
      'Design consultant for Saudi Tourism Authority staff uniforms'
    ]
  },
  {
    id: 'amina-bakr',
    name: 'Amina Bakr',
    title: 'Textile Quality Control Manager',
    avatar: '/images/authors/amina-bakr.jpg',
    bio: 'Amina Bakr oversees UNEOM\'s quality assurance processes with 15 years of experience in textile testing, performance standards, and manufacturing quality control. Her expertise ensures all uniform products meet rigorous quality benchmarks for durability, comfort, and performance in their intended environments. Amina has developed comprehensive testing protocols specifically adapted for Saudi Arabia\'s climate conditions and usage patterns, with particular attention to color fastness, durability, and performance under heat stress. Her background includes extensive experience with international textile quality standards and certification systems.',
    shortBio: 'Textile quality assurance expert ensuring uniform durability, comfort and performance through rigorous testing and quality control.',
    experience: 15,
    expertise: [
      'Textile Performance Testing',
      'Quality Assurance Systems',
      'Durability Standards',
      'Manufacturing Quality Control',
      'Performance Certification'
    ],
    credentials: [
      'M.Sc. in Quality Engineering, King Fahd University',
      'B.Sc. in Textile Technology',
      'Certified Quality Engineer (CQE)'
    ],
    industries: ['Manufacturing', 'Textiles', 'Quality Assurance', 'Standards'],
    featured: false,
    linkedin: 'https://linkedin.com/in/amina-bakr',
    certifications: [
      'ISO 9001 Lead Auditor',
      'Six Sigma Black Belt',
      'Textile Testing Laboratory Manager'
    ]
  }
]; 