import { authors } from '../data/authors';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  featuredImage: string;
  date: string;
  author: string;
  authorId?: string;
  category: string;
  tags: string[];
  readTime?: number;
  references?: Reference[];
  expertTips?: ExpertTip[];
  relatedSlugs?: string[];
}

export interface Reference {
  title: string;
  url: string;
  publisher?: string;
  date?: string;
  type: 'academic' | 'industry' | 'government' | 'news' | 'other';
}

export interface ExpertTip {
  authorId: string;
  content: string;
}

// Mock data - in a real application this would come from a database or CMS
export function getBlogPosts(): BlogPost[] {
  return [
    {
      slug: 'corporate-security-branding',
      title: 'Corporate Security Branding: A Strategic Guide for Saudi Businesses',
      excerpt: 'How Saudi institutions can integrate corporate identity with security requirements through uniforms that reflect brand identity while enhancing security.',
      featuredImage: '/images/security/advanced-fabrics-hero.jpg',
      date: 'May 3, 2023',
      author: 'Dr. Abdullah Al-Shammari',
      authorId: 'dr-abdullah-al-shammari',
      category: 'Security',
      tags: ['security-uniforms', 'corporate-branding', 'risk-management', 'identity-management', 'saudi-facilities'],
      readTime: 8,
      references: [
        {
          title: 'Security Uniform Impact on Perceived Authority',
          url: 'https://academic.journals.com/security-studies/uniform-impact',
          publisher: 'Journal of Security Studies',
          date: '2022',
          type: 'academic'
        },
        {
          title: 'Corporate Identity Integration in Security Protocols',
          url: 'https://industry.org/security-corporate-identity',
          publisher: 'International Security Industry Association',
          date: '2021',
          type: 'industry'
        }
      ],
      expertTips: [
        {
          authorId: 'dr-abdullah-al-shammari',
          content: "When designing security uniforms with corporate branding, prioritize security functionality first, then integrate brand elements in a way that doesn't compromise security features."
        }
      ]
    },
    {
      slug: 'advanced-fabrics-security-uniforms',
      title: 'Advanced Fabrics in Security Uniforms: Technical Innovations',
      excerpt: 'Exploring cutting-edge textile technologies enhancing protection, comfort, and functionality in modern security uniforms for Saudi environments.',
      featuredImage: '/images/security/stab-resistant-fabric.jpg',
      date: 'April 15, 2023',
      author: 'Dr. Abdullah Al-Shammari',
      authorId: 'dr-abdullah-al-shammari',
      category: 'Security',
      tags: ['technical-textiles', 'protective-clothing', 'security-innovations', 'climate-adaptive'],
      readTime: 7,
      references: [
        {
          title: 'Advances in Protective Textiles for Security Applications',
          url: 'https://textilejournal.org/protective-advances',
          publisher: 'Technical Textile Research Journal',
          date: '2022',
          type: 'academic'
        },
        {
          title: 'Heat-Adaptive Fabrics for Desert Security Operations',
          url: 'https://security-research.org/heat-adaptive-fabrics',
          publisher: 'Security Research Institute',
          date: '2021',
          type: 'industry'
        }
      ]
    },
    {
      slug: 'industrial-safety-compliance-guide',
      title: 'Industrial Safety Compliance: A Guide for Saudi Manufacturers',
      excerpt: 'Comprehensive overview of safety standards and compliant uniforms for industrial companies operating in Saudi Arabia.',
      featuredImage: '/images/security/uniform-durability-test.jpg',
      date: 'March 20, 2023',
      author: 'Eng. Faisal Al-Otaibi',
      authorId: 'eng-faisal-al-otaibi',
      category: 'Industrial',
      tags: ['safety-standards', 'compliance', 'industrial-protection', 'manufacturing-safety'],
      readTime: 10,
      references: [
        {
          title: 'Saudi Industrial Safety Regulations 2022',
          url: 'https://saudi-gov.sa/industrial-safety-regulations',
          publisher: 'Saudi Ministry of Industry',
          date: '2022',
          type: 'government'
        },
        {
          title: 'Compliance Frameworks for Petrochemical Protective Clothing',
          url: 'https://industry-standards.org/petrochemical-protection',
          publisher: 'International Industrial Standards Organization',
          date: '2021',
          type: 'industry'
        }
      ],
      expertTips: [
        {
          authorId: 'eng-faisal-al-otaibi',
          content: 'Always prioritize compliance with local Saudi regulations first, then consider international standards as supplementary guidelines for your industrial uniform program.'
        }
      ]
    },
    {
      slug: 'healthcare-uniforms-innovation',
      title: 'Healthcare Uniform Innovations for Saudi Medical Facilities',
      excerpt: 'How modern healthcare textiles are improving infection control, staff comfort, and patient experiences in Saudi hospitals.',
      featuredImage: '/images/healthcare/medical-uniforms-innovation.jpg',
      date: 'February 12, 2023',
      author: 'Dr. Sarah Al-Malik',
      authorId: 'dr-sarah-al-malik',
      category: 'Healthcare',
      tags: ['medical-uniforms', 'antimicrobial-fabrics', 'healthcare-innovation', 'infection-control'],
      readTime: 6,
      references: [
        {
          title: 'Efficacy of Antimicrobial Fabrics in Clinical Settings',
          url: 'https://medical-research.org/antimicrobial-fabrics-clinical',
          publisher: 'Journal of Healthcare Textiles',
          date: '2022',
          type: 'academic'
        },
        {
          title: 'Saudi Healthcare Facility Uniform Guidelines',
          url: 'https://saudi-health.gov.sa/uniform-guidelines',
          publisher: 'Saudi Ministry of Health',
          date: '2022',
          type: 'government'
        }
      ]
    },
    {
      slug: 'antimicrobial-fabrics-healthcare',
      title: 'Antimicrobial Fabrics in Healthcare: Performance & Standards',
      excerpt: 'A detailed analysis of antimicrobial textile technologies, their efficacy in Saudi healthcare settings, and compliance with local and international standards.',
      featuredImage: '/images/healthcare/antimicrobial-fabric.jpg',
      date: 'January 25, 2023',
      author: 'Dr. Sarah Al-Malik',
      authorId: 'dr-sarah-al-malik',
      category: 'Healthcare',
      tags: ['antimicrobial-technology', 'infection-prevention', 'healthcare-compliance', 'textile-performance'],
      readTime: 9,
      references: [
        {
          title: 'Long-term Efficacy of Antimicrobial Textiles After Repeated Laundering',
          url: 'https://medical-journal.org/antimicrobial-longevity',
          publisher: 'International Medical Textile Journal',
          date: '2022',
          type: 'academic'
        },
        {
          title: 'Testing Protocols for Antimicrobial Healthcare Textiles',
          url: 'https://textile-standards.org/antimicrobial-testing',
          publisher: 'International Textile Standards Association',
          date: '2021',
          type: 'industry'
        }
      ],
      expertTips: [
        {
          authorId: 'dr-sarah-al-malik',
          content: "When selecting antimicrobial fabrics for healthcare uniforms, look beyond the marketing claims and request detailed test results showing efficacy against specific pathogens relevant to your facility."
        }
      ]
    },
    {
      slug: 'sustainable-school-uniforms-saudi',
      title: 'Sustainable School Uniforms: A New Direction for Saudi Education',
      excerpt: 'How Saudi schools are embracing eco-friendly uniform solutions while maintaining cultural values and practical requirements.',
      featuredImage: '/images/education/sustainable-school-uniforms.jpg',
      date: 'December 10, 2022',
      author: 'Noura Al-Qahtani',
      authorId: 'noura-al-qahtani',
      category: 'Education',
      tags: ['school-uniforms', 'sustainability', 'eco-friendly-textiles', 'education-standards'],
      readTime: 7,
      references: [
        {
          title: 'Environmental Impact of School Uniform Production',
          url: 'https://education-research.org/uniform-environmental-impact',
          publisher: 'Educational Sustainability Journal',
          date: '2022',
          type: 'academic'
        },
        {
          title: 'Saudi Vision 2030: Sustainability in Education',
          url: 'https://vision2030.gov.sa/education-sustainability',
          publisher: 'Saudi Vision 2030',
          date: '2021',
          type: 'government'
        }
      ]
    },
    {
      slug: 'school-uniforms-academic-performance',
      title: 'School Uniforms and Academic Performance: A Saudi Perspective',
      excerpt: 'Examining the relationship between well-designed school uniforms and student performance in Saudi educational institutions.',
      featuredImage: '/images/education/school-performance.jpg',
      date: 'November 15, 2022',
      author: 'Noura Al-Qahtani',
      authorId: 'noura-al-qahtani',
      category: 'Education',
      tags: ['academic-performance', 'school-policies', 'student-development', 'educational-psychology'],
      readTime: 8,
      references: [
        {
          title: 'Uniform Policies and Academic Outcomes: A Longitudinal Study',
          url: 'https://education-research.org/uniform-academic-outcomes',
          publisher: 'Journal of Educational Psychology',
          date: '2021',
          type: 'academic'
        },
        {
          title: 'Saudi School Uniform Policy Guidelines',
          url: 'https://saudi-education.gov.sa/uniform-policy',
          publisher: 'Saudi Ministry of Education',
          date: '2022',
          type: 'government'
        }
      ],
      expertTips: [
        {
          authorId: 'noura-al-qahtani',
          content: "When developing school uniform policies, involve students in the process to increase acceptance and ensure comfort features that don't distract from learning activities."
        }
      ]
    },
    {
      slug: 'luxury-hotel-uniform-design',
      title: 'Luxury Hotel Uniform Design: Elevating Saudi Hospitality',
      excerpt: 'Creating distinctive uniform collections that enhance brand identity while meeting the practical needs of luxury hospitality staff in Saudi Arabia.',
      featuredImage: '/images/hospitality/luxury-hotel-uniforms.jpg',
      date: 'October 20, 2022',
      author: 'Khalid Al-Harbi',
      authorId: 'khalid-al-harbi',
      category: 'Hospitality',
      tags: ['luxury-hospitality', 'hotel-uniforms', 'brand-identity', 'staff-presentation'],
      readTime: 6,
      references: [
        {
          title: 'Uniform Impact on Guest Perception in Luxury Hotels',
          url: 'https://hospitality-journal.org/uniform-guest-perception',
          publisher: 'International Journal of Hospitality Management',
          date: '2022',
          type: 'academic'
        },
        {
          title: 'Staff Uniform Comfort in Middle Eastern Climate Conditions',
          url: 'https://hospitality-research.org/uniform-comfort-middle-east',
          publisher: 'Hospitality Research Institute',
          date: '2021',
          type: 'industry'
        }
      ]
    },
    {
      slug: 'hospitality-brand-identity',
      title: 'Hospitality Uniform Programs: Building Brand Identity in Saudi Arabia',
      excerpt: 'How leading Saudi hospitality businesses use uniform programs to reinforce brand values and create memorable guest experiences.',
      featuredImage: '/images/hospitality/brand-identity-uniforms.jpg',
      date: 'September 5, 2022',
      author: 'Khalid Al-Harbi',
      authorId: 'khalid-al-harbi',
      category: 'Hospitality',
      tags: ['brand-strategy', 'hotel-management', 'staff-appearance', 'guest-experience'],
      readTime: 7,
      references: [
        {
          title: 'Uniform Design as a Brand Communication Tool',
          url: 'https://brand-management.org/uniform-brand-communication',
          publisher: 'Journal of Brand Management',
          date: '2021',
          type: 'academic'
        },
        {
          title: 'Saudi Tourism Vision: Staff Presentation Guidelines',
          url: 'https://saudi-tourism.gov.sa/staff-presentation',
          publisher: 'Saudi Tourism Authority',
          date: '2022',
          type: 'government'
        }
      ],
      expertTips: [
        {
          authorId: 'khalid-al-harbi',
          content: 'When designing hospitality uniforms, create a uniform program rather than individual pieces - this ensures consistency across departments while allowing for appropriate role differentiation.'
        }
      ]
    }
  ];
}

// Get blog post by slug
export function getBlogPostBySlug(slug: string): BlogPost | null {
  const posts = getBlogPosts();
  return posts.find(post => post.slug === slug) || null;
}

// Get posts by author ID
export function getPostsByAuthor(authorId: string): BlogPost[] {
  const posts = getBlogPosts();
  return posts.filter(post => post.authorId === authorId);
}

// Get posts by tag
export function getPostsByTag(tag: string): BlogPost[] {
  const posts = getBlogPosts();
  return posts.filter(post => post.tags.includes(tag));
}

// Get posts by category
export function getPostsByCategory(category: string): BlogPost[] {
  const posts = getBlogPosts();
  return posts.filter(post => post.category.toLowerCase() === category.toLowerCase());
}

// Get related posts
export function getRelatedPosts(currentSlug: string, maxPosts: number = 3): BlogPost[] {
  const posts = getBlogPosts();
  const currentPost = getBlogPostBySlug(currentSlug);
  
  if (!currentPost) return [];
  
  // If the post has defined related slugs, use those
  if (currentPost.relatedSlugs && currentPost.relatedSlugs.length > 0) {
    return currentPost.relatedSlugs
      .map(slug => getBlogPostBySlug(slug))
      .filter(Boolean) as BlogPost[];
  }
  
  // Otherwise, find posts with matching tags or by the same author
  const relatedByTags = posts.filter(post => 
    post.slug !== currentSlug && 
    post.tags.some(tag => currentPost.tags.includes(tag))
  );
  
  const relatedByAuthor = posts.filter(post => 
    post.slug !== currentSlug && 
    post.authorId === currentPost.authorId
  );
  
  // Combine and remove duplicates
  const combined = [...new Set([...relatedByTags, ...relatedByAuthor])];
  
  // Return up to maxPosts posts
  return combined.slice(0, maxPosts);
}

// Get author expertise for a post
export function getAuthorExpertiseForPost(slug: string): string[] {
  const post = getBlogPostBySlug(slug);
  if (!post || !post.authorId) return [];
  
  const author = authors.find(a => a.id === post.authorId);
  return author ? author.expertise : [];
}

// Get e-e-a-t signals for a post
export function getEeatSignalsForPost(slug: string): {
  expertise: boolean;
  experience: boolean;
  authoritativeness: boolean;
  trustworthiness: boolean;
} {
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return {
      expertise: false,
      experience: false,
      authoritativeness: false,
      trustworthiness: false
    };
  }
  
  // Check for author expertise
  const author = post.authorId ? authors.find(a => a.id === post.authorId) : null;
  const hasExpertise = !!author && author.expertise.length > 0;
  
  // Check for experience signals
  const hasExperience = !!author && author.experience >= 5;
  
  // Check for authoritativeness signals
  const hasAuthoritativeness = (
    (!!post.references && post.references.length > 0) || 
    (!!author && !!author.publications && author.publications.length > 0)
  );
  
  // Check for trustworthiness signals
  const hasTrustworthiness = (
    (!!post.references && post.references.some(ref => 
      ref.type === 'academic' || ref.type === 'government'
    )) ||
    (!!author && !!author.credentials && author.credentials.length > 0)
  );
  
  return {
    expertise: hasExpertise,
    experience: hasExperience,
    authoritativeness: hasAuthoritativeness,
    trustworthiness: hasTrustworthiness
  };
} 