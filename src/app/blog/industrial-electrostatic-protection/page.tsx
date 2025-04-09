import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt, FaClock, FaTags, FaBolt, FaIndustry, FaShieldAlt, FaFlask, FaHardHat } from 'react-icons/fa';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SectionHeading from '@/components/ui/SectionHeading';
import BlogAuthor from '@/components/blog/BlogAuthor';
import TableOfContents from '@/components/blog/TableOfContents';

export const metadata: Metadata = {
  title: 'Electrostatic Protection in High-Risk Industrial Environments | UNEOM',
  description: 'Comprehensive guide to implementing anti-static technology in Saudi industrial environments, including standards compliance, risk assessment, and protective clothing solutions for electronics and petrochemical facilities.',
  keywords: 'anti-static workwear, industrial electrostatic protection, ESD safety Saudi Arabia, static discharge prevention, petrochemical static risks, electronics manufacturing safety, industrial anti-static standards, ATEX compliance',
  metadataBase: new URL('https://uneom.com'),
  openGraph: {
    title: 'Electrostatic Protection in High-Risk Industrial Environments | UNEOM',
    description: 'Understanding anti-static technology implementation in Saudi petrochemical and electronics manufacturing facilities to prevent hazardous discharge events.',
    images: [
      {
        url: 'https://uneom.com/images/industries/Factory_Industrial/Factory_Industrial_Anti_Static.webp',
        width: 1200,
        height: 630,
        alt: 'Electrostatic protection in industrial environments',
      }
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Electrostatic Protection in High-Risk Industrial Environments',
    description: 'Understanding anti-static technology implementation in Saudi petrochemical and electronics manufacturing facilities to prevent hazardous discharge events.',
    images: ['https://uneom.com/images/industries/Factory_Industrial/Factory_Industrial_Anti_Static.webp'],
  },
};

export default function ElectrostaticProtectionPage() {
  // Blog post data
  const post = {
    slug: 'industrial-electrostatic-protection',
    title: 'Electrostatic Protection in High-Risk Industrial Environments',
    excerpt: 'A comprehensive guide to electrostatic discharge risk management and protective solutions for Saudi Arabia\'s industrial facilities, particularly in petrochemical and electronics manufacturing.',
    coverImage: '/images/industries/Factory_Industrial/Factory_Industrial_Anti_Static.webp',
    date: 'May 15, 2024',
    readTime: '11 min read',
    author: {
      name: 'Dr. Faisal Al-Ghamdi',
      avatar: '/images/blog/author-faisal.jpg',
      title: 'Industrial Safety Engineer, Ph.D.'
    },
    categories: ['Industrial Safety', 'Technical Fabrics', 'Risk Management']
  };

  // Table of contents data
  const tableOfContents = [
    {
      id: 'introduction',
      title: 'Introduction to Electrostatic Risks',
    },
    {
      id: 'science',
      title: 'The Science of Static Electricity in Industrial Settings',
      subItems: [
        { id: 'generation', title: 'Static Generation Mechanisms' },
        { id: 'hazards', title: 'Associated Hazards' },
      ]
    },
    {
      id: 'standards',
      title: 'Regulatory Standards in Saudi Arabia',
    },
    {
      id: 'workwear',
      title: 'Anti-Static Workwear Solutions',
      subItems: [
        { id: 'technologies', title: 'Current Technologies' },
        { id: 'implementation', title: 'Implementation Strategies' },
      ]
    },
    {
      id: 'assessment',
      title: 'Conducting Electrostatic Risk Assessments',
    },
    {
      id: 'case-studies',
      title: 'Saudi Industry Case Studies',
    },
    {
      id: 'conclusion',
      title: 'Conclusion',
    }
  ];

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Electrostatic Protection in High-Risk Industrial Environments",
    "image": "https://uneom.com/images/industries/Factory_Industrial/Factory_Industrial_Anti_Static.webp",
    "datePublished": "2024-05-15T08:00:00+03:00",
    "dateModified": "2024-05-20T10:30:00+03:00",
    "author": {
      "@type": "Person",
      "name": "Dr. Faisal Al-Ghamdi",
      "url": "https://www.uneom.com/authors/faisal-al-ghamdi"
    },
    "publisher": {
      "@type": "Organization",
      "name": "UNEOM",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.uneom.com/images/logo.png"
      }
    },
    "description": "Understanding anti-static technology implementation in Saudi petrochemical and electronics manufacturing facilities to prevent hazardous discharge events.",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.uneom.com/blog/industrial-electrostatic-protection"
    }
  };

  return (
    <div className="bg-white pt-6 pb-12">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Breadcrumbs */}
      <Container>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: post.title, href: `/blog/${post.slug}` }
          ]}
        />
      </Container>
      
      {/* Blog Post Header */}
      <Container className="mt-8">
        <div className="mx-auto max-w-4xl">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((category, index) => (
              <span 
                key={index}
                className="inline-block bg-neutral-100 px-3 py-1 rounded-full text-sm text-neutral-700"
              >
                {category}
              </span>
            ))}
          </div>
          
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            {post.title}
          </h1>
          
          {/* Author and Date Info */}
          <BlogAuthor
            name={post.author.name}
            title={post.author.title}
            image={post.author.avatar}
            date={post.date}
            readTime={post.readTime}
          />
          
          {/* Cover Image */}
          <div className="relative aspect-video w-full overflow-hidden rounded-xl mb-10 mt-8">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Container>
      
      {/* Blog Post Content */}
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar with TOC on desktop */}
            <div className="md:w-1/4">
              <div className="sticky top-24">
                <TableOfContents items={tableOfContents} />
              </div>
            </div>
            
            {/* Main Content */}
            <div className="md:w-3/4">
              <div className="prose prose-lg max-w-none">
                <p className="lead">
                  In industrial environments across Saudi Arabia, particularly in petrochemical processing and electronics manufacturing, 
                  electrostatic discharge (ESD) represents a significant safety hazard with potentially catastrophic consequences. 
                  This comprehensive guide examines the implementation of anti-static technologies and protective measures essential 
                  for maintaining safety in high-risk industrial environments.
                </p>
                
                <h2 id="introduction">Introduction to Electrostatic Risks</h2>
                
                <p>
                  Static electricity generation is an inevitable consequence of industrial processes involving material movement, 
                  particularly in Saudi Arabia's dry climate conditions. When materials separate or rub together—common in manufacturing 
                  and processing activities—electrostatic charges accumulate. In non-hazardous environments, these charges might cause 
                  minor nuisances like small shocks or material handling difficulties. However, in environments where flammable materials, 
                  sensitive electronics, or explosive atmospheres are present, uncontrolled electrostatic discharge can lead to:
                </p>
                
                <ul>
                  <li>Ignition of flammable atmospheres in petrochemical facilities</li>
                  <li>Damage to sensitive electronic components during manufacturing</li>
                  <li>Process control system failures resulting in operational disruptions</li>
                  <li>Accelerated material degradation through attraction of contaminants</li>
                  <li>Workplace accidents resulting from startle reactions to unexpected discharges</li>
                </ul>
                
                <h2 id="science">The Science of Static Electricity in Industrial Settings</h2>
                
                <div className="bg-neutral-50 p-6 rounded-lg my-8">
                  <h3 id="generation" className="text-xl font-bold mb-3 flex items-center">
                    <FaBolt className="text-amber-500 mr-2" /> Static Generation Mechanisms
                  </h3>
                  <p>
                    In industrial environments, static electricity primarily builds through these mechanisms:
                  </p>
                  <ul>
                    <li><strong>Triboelectric charging:</strong> Occurs when materials contact and separate (conveyor belts, material transfers)</li>
                    <li><strong>Induction:</strong> Charge separation due to proximity to charged objects without direct contact</li>
                    <li><strong>Conduction:</strong> Direct transfer of charges between objects in contact</li>
                    <li><strong>Flow electrification:</strong> Generated by liquid or powder movement through pipes or containers</li>
                  </ul>
                </div>
                
                <h3 id="hazards">Associated Hazards in Saudi Industrial Contexts</h3>
                
                <p>
                  Saudi Arabia's industrial sector faces unique electrostatic challenges due to several factors:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                    <h4 className="font-bold text-red-800 flex items-center mb-3">
                      <FaIndustry className="mr-2" /> Petrochemical Industry Risks
                    </h4>
                    <ul className="space-y-2 text-red-800">
                      <li>Flammable vapor ignition in processing units</li>
                      <li>Powder explosions during material handling</li>
                      <li>Tank cleaning operations creating explosive atmospheres</li>
                      <li>Loading/unloading operations for flammable liquids</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                    <h4 className="font-bold text-blue-800 flex items-center mb-3">
                      <FaFlask className="mr-2" /> Electronics Manufacturing Risks
                    </h4>
                    <ul className="space-y-2 text-blue-800">
                      <li>Component damage during assembly processes</li>
                      <li>Latent defects from low-level ESD exposure</li>
                      <li>Production yield reductions from undetected damage</li>
                      <li>Quality control issues in final products</li>
                    </ul>
                  </div>
                </div>
                
                <div className="relative aspect-video w-full overflow-hidden rounded-lg my-6">
                  <Image
                    src="/images/industries/Factory_Industrial/esd-damage-example.jpg"
                    alt="ESD damage to electronic components"
                    fill
                    className="object-cover"
                  />
                  <p className="text-sm text-neutral-500 mt-2 text-center italic">
                    Microscopic damage to electronic components caused by electrostatic discharge
                  </p>
                </div>
                
                <h2 id="standards">Regulatory Standards in Saudi Arabia</h2>
                
                <p>
                  Saudi Arabian industrial facilities must comply with several regulatory frameworks governing electrostatic safety:
                </p>
                
                <ul>
                  <li>
                    <strong>SASO IEC 61340 Series:</strong> Saudi adoption of international standards for electrostatic control 
                    in electronics manufacturing and handling
                  </li>
                  <li>
                    <strong>SASO EN 1149 Series:</strong> Standards specifying requirements for electrostatic properties of protective clothing
                  </li>
                  <li>
                    <strong>ATEX Directive Compliance:</strong> Required for facilities with potentially explosive atmospheres, 
                    implemented through Saudi Civil Defense regulations
                  </li>
                  <li>
                    <strong>Industry-Specific Standards:</strong> Additional requirements from Saudi Aramco Engineering Standards, 
                    SABIC specifications, and Royal Commission for Jubail and Yanbu guidelines
                  </li>
                </ul>
                
                <blockquote>
                  "The often overlooked role of proper anti-static workwear cannot be underestimated in our petrochemical facilities. 
                  A single spark in the wrong location can lead to catastrophic consequences, making comprehensive ESD programs a 
                  fundamental safety requirement, not an optional precaution."
                  <footer>— Dr. Ibrahim Al-Otaibi, Safety Director, SABIC</footer>
                </blockquote>
                
                <h2 id="workwear">Anti-Static Workwear Solutions</h2>
                
                <h3 id="technologies">Current Anti-Static Technologies</h3>
                
                <p>
                  Modern anti-static workwear relies on several key technologies to provide reliable protection:
                </p>
                
                <div className="my-8">
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-200">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="px-4 py-2 border-b border-r border-gray-200 text-left">Technology</th>
                          <th className="px-4 py-2 border-b border-r border-gray-200 text-left">Mechanism</th>
                          <th className="px-4 py-2 border-b border-gray-200 text-left">Applications</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-4 py-2 border-b border-r border-gray-200 font-medium">Conductive Fiber Grid</td>
                          <td className="px-4 py-2 border-b border-r border-gray-200">
                            Network of carbon or metal fibers creating pathways for charge dissipation
                          </td>
                          <td className="px-4 py-2 border-b border-gray-200">
                            Petrochemical processing, explosive environments
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b border-r border-gray-200 font-medium">Carbon-Loaded Fibers</td>
                          <td className="px-4 py-2 border-b border-r border-gray-200">
                            Polymer fibers with embedded carbon particles providing consistent conductivity
                          </td>
                          <td className="px-4 py-2 border-b border-gray-200">
                            Electronics manufacturing, cleanroom environments
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b border-r border-gray-200 font-medium">Inherently Conductive Polymers</td>
                          <td className="px-4 py-2 border-b border-r border-gray-200">
                            Specialized polymers with intrinsic conductivity properties
                          </td>
                          <td className="px-4 py-2 border-b border-gray-200">
                            Precision electronics, semiconductor manufacturing
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b border-r border-gray-200 font-medium">Metal Fiber Blends</td>
                          <td className="px-4 py-2 border-b border-r border-gray-200">
                            Incorporation of stainless steel or other metal fibers throughout fabric
                          </td>
                          <td className="px-4 py-2 border-b border-gray-200">
                            High-risk explosive environments, heavy industry
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-r border-gray-200 font-medium">Topical Treatments</td>
                          <td className="px-4 py-2 border-r border-gray-200">
                            Surface-applied chemical treatments that enhance conductivity
                          </td>
                          <td className="px-4 py-2 border-gray-200">
                            Temporary protection, lower-risk environments
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <h3 id="implementation">Implementation Strategies</h3>
                
                <div className="bg-gray-50 p-6 rounded-lg my-8">
                  <h4 className="font-bold text-gray-800 mb-4">Comprehensive ESD Protection Program Components:</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary-100 p-2 rounded-full flex-shrink-0 mr-3">
                        <FaShieldAlt className="text-primary-600" />
                      </div>
                      <div>
                        <h5 className="font-medium">Risk Assessment & Classification</h5>
                        <p className="text-sm text-gray-600">
                          Systematic evaluation of facility areas based on explosion risk zones, 
                          electronics sensitivity, or process requirements
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary-100 p-2 rounded-full flex-shrink-0 mr-3">
                        <FaHardHat className="text-primary-600" />
                      </div>
                      <div>
                        <h5 className="font-medium">Workwear Selection Criteria</h5>
                        <p className="text-sm text-gray-600">
                          Matching appropriate anti-static technologies to specific risk profiles 
                          while considering comfort in Saudi Arabia's climate
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary-100 p-2 rounded-full flex-shrink-0 mr-3">
                        <FaIndustry className="text-primary-600" />
                      </div>
                      <div>
                        <h5 className="font-medium">Integration with Facility Grounding Systems</h5>
                        <p className="text-sm text-gray-600">
                          Ensuring proper connection between personnel, workwear, footwear, and 
                          facility grounding infrastructure
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary-100 p-2 rounded-full flex-shrink-0 mr-3">
                        <FaBolt className="text-primary-600" />
                      </div>
                      <div>
                        <h5 className="font-medium">Testing & Verification Protocols</h5>
                        <p className="text-sm text-gray-600">
                          Implementing regular testing of workwear conductivity, resistance measurements, 
                          and documentation systems to ensure ongoing protection
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h2 id="assessment">Conducting Electrostatic Risk Assessments</h2>
                
                <p>
                  Effective electrostatic protection begins with thorough risk assessment. Saudi facilities 
                  should implement structured assessment methodologies:
                </p>
                
                <ol>
                  <li>
                    <strong>Process Analysis:</strong> Systematic evaluation of all facility processes to 
                    identify potential static generation points
                  </li>
                  <li>
                    <strong>Material Characterization:</strong> Assessment of raw materials, intermediates, 
                    and finished products for static properties
                  </li>
                  <li>
                    <strong>Environmental Factors:</strong> Consideration of Saudi Arabia's climate conditions, 
                    including low humidity and high temperatures
                  </li>
                  <li>
                    <strong>Control Measure Evaluation:</strong> Analysis of existing controls against identified risks
                  </li>
                  <li>
                    <strong>Documentation and Implementation:</strong> Development of comprehensive ESD control programs
                  </li>
                </ol>
                
                <div className="relative aspect-video w-full overflow-hidden rounded-lg my-6">
                  <Image
                    src="/images/industries/Factory_Industrial/esd-assessment-process.jpg"
                    alt="Electrostatic risk assessment in a Saudi industrial facility"
                    fill
                    className="object-cover"
                  />
                  <p className="text-sm text-neutral-500 mt-2 text-center italic">
                    Engineers conducting electrostatic risk assessment at a manufacturing facility in Jubail Industrial City
                  </p>
                </div>
                
                <h2 id="case-studies">Saudi Industry Case Studies</h2>
                
                <h3>Case Study 1: Petrochemical Processing Facility in Jubail</h3>
                
                <p>
                  A major petrochemical facility in Jubail Industrial City experienced a near-miss incident 
                  when static discharge occurred during maintenance operations in a solvent storage area. The 
                  subsequent investigation revealed inadequate anti-static workwear implementation despite 
                  formal procedures requiring it.
                </p>
                
                <p>
                  <strong>Solution Implemented:</strong> The facility developed a comprehensive anti-static 
                  program including:
                </p>
                
                <ul>
                  <li>Implementation of permanently anti-static coveralls with carbon fiber grid technology</li>
                  <li>Daily verification testing system for all personnel entering high-risk zones</li>
                  <li>Integration with conductive footwear and grounding systems</li>
                  <li>Climate-optimized designs to ensure compliance during hot weather</li>
                </ul>
                
                <p>
                  <strong>Results:</strong> Following implementation, the facility recorded:
                </p>
                
                <ul>
                  <li>Zero static-related incidents over a 36-month period</li>
                  <li>Improved compliance with anti-static protocols from 76% to 97%</li>
                  <li>Enhanced worker acceptance due to improved comfort features</li>
                </ul>
                
                <h3>Case Study 2: Electronics Manufacturing in Riyadh</h3>
                
                <p>
                  A precision electronics manufacturer in Riyadh's Industrial City was experiencing yield 
                  losses of 4.2% due to suspected ESD damage. Investigations revealed inconsistent use of 
                  anti-static workwear due to comfort issues in the factory environment.
                </p>
                
                <p>
                  <strong>Solution Implemented:</strong> The company:
                </p>
                
                <ul>
                  <li>Redesigned their cleanroom garments using carbon-loaded continuous filament technology</li>
                  <li>Implemented climate control improvements in critical assembly areas</li>
                  <li>Developed a comprehensive testing and verification system</li>
                  <li>Introduced wrist strap integration points in all workwear</li>
                </ul>
                
                <p>
                  <strong>Results:</strong> The comprehensive approach yielded:
                </p>
                
                <ul>
                  <li>Reduction in ESD-related yield losses from 4.2% to 0.7%</li>
                  <li>Annual savings of approximately SAR 3.4 million</li>
                  <li>Improvement in product reliability metrics</li>
                </ul>
                
                <h2 id="conclusion">Conclusion: The Path Forward</h2>
                
                <p>
                  As Saudi Arabia continues its industrial expansion under Vision 2030, electrostatic 
                  protection must remain a priority in facility design and operational protocols. Effective 
                  electrostatic protection programs require:
                </p>
                
                <ul>
                  <li>
                    <strong>Integrated Approach:</strong> Combining workwear solutions with facility grounding, 
                    process controls, and material handling procedures
                  </li>
                  <li>
                    <strong>Climate Adaptation:</strong> Developing solutions that maintain protection while 
                    addressing Saudi Arabia's unique climate challenges
                  </li>
                  <li>
                    <strong>Continuous Improvement:</strong> Regular assessment and technology adoption as 
                    newer anti-static solutions emerge
                  </li>
                  <li>
                    <strong>Standards Compliance:</strong> Ensuring alignment with both Saudi and 
                    international electrostatic protection standards
                  </li>
                </ul>
                
                <p>
                  By implementing comprehensive electrostatic protection strategies—including appropriate 
                  anti-static workwear programs—Saudi industrial facilities can significantly reduce risks 
                  while improving operational efficiency and product quality. The investment in proper 
                  anti-static technologies delivers measurable returns through incident prevention, 
                  equipment protection, and process reliability.
                </p>
              </div>
              
              {/* Author Bio */}
              <div className="bg-neutral-50 p-6 rounded-xl mt-12">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="sm:w-24 flex-shrink-0">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={96}
                      height={96}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-1">{post.author.name}</h3>
                    <p className="text-neutral-600 mb-3">{post.author.title}</p>
                    <p className="text-neutral-700">
                      Dr. Faisal Al-Ghamdi is a leading expert in industrial safety engineering with a specialization in electrostatic hazard management. He holds a Ph.D. in Safety Engineering from King Fahd University of Petroleum and Minerals and has consulted with major industrial organizations across Saudi Arabia on implementing comprehensive ESD protection programs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Custom CTA Section */}
          <section className="bg-neutral-50 p-8 rounded-xl my-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                Need Anti-Static Workwear Solutions for Your Industrial Facility?
              </h2>
              <p className="text-lg text-neutral-700 mb-8 max-w-3xl mx-auto">
                UNEOM offers specialized anti-static workwear designed specifically for Saudi Arabia's industrial environments, with comprehensive testing and certification documentation.
              </p>
              <Link href="/quote?product=anti-static-industrial-uniform">
                <Button size="lg" className="px-8">
                  Request Anti-Static Workwear Consultation
                </Button>
              </Link>
            </div>
          </section>
          
          {/* Related Products */}
          <div className="mt-12">
            <SectionHeading>Related Anti-Static Solutions</SectionHeading>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition border border-gray-100">
                <div className="relative aspect-square w-full">
                  <Image
                    src="/images/industries/Factory_Industrial/anti-static-uniform.webp"
                    alt="Anti-Static Industrial Uniform Set"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs px-2 py-1 rounded-full">
                    ATEX Certified
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2">Anti-Static Industrial Uniform Set</h3>
                  <p className="text-neutral-600 text-sm mb-4">
                    Complete protection system with carbon fiber grid technology for high-risk industrial environments.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">SAR 479</span>
                    <Link href="/shop/industrial-uniforms/anti-static-industrial-uniform">
                      <Button>View Details</Button>
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition border border-gray-100">
                <div className="relative aspect-square w-full">
                  <Image
                    src="/images/industries/Factory_Industrial/esd-footwear.webp"
                    alt="Conductive Safety Footwear"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    IEC 61340 Compliant
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2">Conductive Safety Footwear</h3>
                  <p className="text-neutral-600 text-sm mb-4">
                    Integrated safety footwear with reliable grounding capabilities and comfort features.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">SAR 329</span>
                    <Link href="/shop/industrial-uniforms/conductive-safety-footwear">
                      <Button>View Details</Button>
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition border border-gray-100">
                <div className="relative aspect-square w-full">
                  <Image
                    src="/images/industries/Factory_Industrial/wrist-grounding-system.webp"
                    alt="Personnel Grounding System"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                    Complete System
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2">Personnel Grounding System</h3>
                  <p className="text-neutral-600 text-sm mb-4">
                    Comprehensive solution including wrist straps, testing equipment, and monitoring devices.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">SAR 599</span>
                    <Link href="/shop/industrial-uniforms/personnel-grounding-system">
                      <Button>View Details</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
} 