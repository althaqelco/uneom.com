import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Reusable components
const HeroSection = ({ title, subtitle, image }) => (
  <div className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white">
    <div className="absolute inset-0 opacity-30">
      <Image 
        src={image} 
        alt={title} 
        layout="fill" 
        objectFit="cover" 
        priority 
      />
    </div>
    <div className="relative container mx-auto px-4 py-20 md:py-32">
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl text-primary-100">{subtitle}</p>
        <div className="mt-8">
          <Link href="/contact?location=riyadh" legacyBehavior>
            <a className="bg-secondary-500 hover:bg-secondary-600 text-primary-900 font-bold py-3 px-6 rounded-md text-lg transition duration-300 inline-block">
              Request Consultation in Riyadh
            </a>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
      <span className="text-primary-600 text-2xl">{icon}</span>
    </div>
    <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const IndustryCard = ({ name, image, description, link }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="relative h-64">
      <Image 
        src={image} 
        alt={name} 
        layout="fill" 
        objectFit="cover" 
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-gray-800">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href={link} legacyBehavior>
        <a className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
          Learn more <span className="ml-1">→</span>
        </a>
      </Link>
    </div>
  </div>
);

const TestimonialCard = ({ text, author, position, company, logo }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="mb-4">
      <Image src={logo} alt={company} width={120} height={40} objectFit="contain" />
    </div>
    <p className="text-gray-600 italic mb-4">"{text}"</p>
    <div>
      <p className="font-bold text-gray-800">{author}</p>
      <p className="text-gray-600">{position}, {company}</p>
    </div>
  </div>
);

export default function RiyadhLocationPage() {
  const router = useRouter();
  const { locale } = router;
  
  const riyadhData = {
    title: "Professional Uniforms in Riyadh",
    subtitle: "Saudi Arabia's Leading Provider of Custom Uniforms & Workwear for Riyadh's Premier Businesses",
    heroImage: "/images/locations/riyadh-skyline.jpg",
    introduction: `
      As the vibrant capital and commercial hub of Saudi Arabia, Riyadh demands professional workwear solutions that match its status as a global business center. UNEOM's Riyadh office serves the uniform and workwear needs of the city's diverse industries, from healthcare and hospitality to corporate and industrial sectors.
      
      Our dedicated Riyadh team understands the unique challenges and requirements of businesses operating in the capital region, providing tailored solutions that reflect both Saudi traditions and international standards.
    `,
    services: [
      {
        icon: "⚙️",
        title: "Custom Uniform Manufacturing",
        description: "Bespoke uniform design and production tailored to your Riyadh business's specific needs, brand identity, and corporate culture."
      },
      {
        icon: "🚚",
        title: "Riyadh Delivery & Logistics",
        description: "Fast, reliable delivery throughout Riyadh and the Central Region, with expedited options for urgent orders within the capital."
      },
      {
        icon: "👕",
        title: "Staff Sizing & Fitting",
        description: "On-site professional sizing services at your Riyadh business location for accurate measurements and perfect fits."
      },
      {
        icon: "✂️",
        title: "Alterations & Repairs",
        description: "Quick turnaround alterations and repairs service ensuring your Riyadh team always looks professional."
      }
    ],
    industries: [
      {
        name: "Healthcare Uniforms in Riyadh",
        image: "/images/industries/healthcare/doctor-uniform.jpg",
        description: "Specialized medical uniforms for Riyadh's leading hospitals, clinics, and healthcare facilities, including King Faisal Specialist Hospital.",
        link: "/industries/healthcare/medical"
      },
      {
        name: "Corporate Attire for Riyadh Businesses",
        image: "/images/industries/corporate/business-attire.jpg",
        description: "Professional corporate uniforms for financial institutions, government offices, and multinational companies in Riyadh's business districts.",
        link: "/industries/corporate"
      },
      {
        name: "Hospitality Uniforms in Riyadh",
        image: "/images/industries/hospitality/hotel-staff.jpg",
        description: "Premium hotel and restaurant uniforms for Riyadh's luxury hospitality establishments, designed for comfort in Saudi Arabia's climate.",
        link: "/industries/hospitality/hotels"
      },
      {
        name: "Industrial Workwear for Riyadh",
        image: "/images/industries/industrial/worker-uniform.jpg",
        description: "Durable industrial workwear for manufacturing, construction, and oil & gas operations in and around Riyadh.",
        link: "/industries/industrial"
      }
    ],
    riyadhOffice: {
      address: "King Fahd Road, Al Olaya District, Riyadh 12214, Saudi Arabia",
      phone: "+966 11 123 4567",
      email: "riyadh@uneom.com",
      hours: "Sunday - Thursday: 8:30 AM - 5:30 PM",
      mapImage: "/images/locations/riyadh-map.jpg",
      mapLink: "https://goo.gl/maps/riyadhOfficeLocation"
    },
    testimonials: [
      {
        text: "UNEOM has been our trusted uniform provider for our entire hospital network in Riyadh. Their understanding of healthcare uniform requirements and ability to deliver consistent quality across large orders has made them invaluable to our operations.",
        author: "Dr. Mohammed Al-Saud",
        position: "Operations Director",
        company: "National Medical Center, Riyadh",
        logo: "/images/clients/national-medical-center-logo.png"
      },
      {
        text: "The corporate uniforms UNEOM designed for our Riyadh headquarters perfectly blend Saudi business traditions with modern professionalism. Their attention to detail and quality fabrics have impressed both our local and international clients.",
        author: "Sarah Al-Rashid",
        position: "HR Manager",
        company: "Al-Madar Financial Group, Riyadh",
        logo: "/images/clients/al-madar-group-logo.png"
      }
    ],
    keyProjects: [
      {
        name: "King Abdullah Financial District",
        description: "Provided corporate uniforms for multiple financial institutions in Riyadh's premier business district."
      },
      {
        name: "Riyadh Airports Company",
        description: "Supplied custom uniforms for customer-facing staff at King Khalid International Airport."
      },
      {
        name: "Riyadh Season",
        description: "Created event staff uniforms for Saudi Arabia's largest entertainment festival in Riyadh."
      }
    ],
    ctaTitle: "Elevate Your Riyadh Business with Professional Uniforms",
    ctaDescription: "Contact our Riyadh team for a consultation tailored to your business needs in the capital city.",
    ctaButtonText: "Contact Our Riyadh Office",
    ctaButtonUrl: "/contact?location=riyadh"
  };

  return (
    <>
      <Head>
        <title>{riyadhData.title} | UNEOM</title>
        <meta 
          name="description" 
          content="Professional uniform supplier in Riyadh, Saudi Arabia. Custom workwear for healthcare, corporate, hospitality and industrial businesses throughout the capital region." 
        />
        <meta 
          property="og:title" 
          content={riyadhData.title} 
        />
        <meta 
          property="og:description" 
          content="Professional uniform supplier in Riyadh. Custom workwear for businesses throughout the capital region." 
        />
        <meta 
          property="og:image" 
          content="https://uneom.com/images/og/riyadh-uniforms.jpg" 
        />
        <link 
          rel="canonical" 
          href="https://uneom.com/locations/riyadh" 
        />
        <link 
          rel="alternate" 
          hreflang="ar" 
          href="https://uneom.com/ar/locations/riyadh" 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main>
        {/* Hero Section */}
        <HeroSection 
          title={riyadhData.title}
          subtitle={riyadhData.subtitle}
          image={riyadhData.heroImage}
        />
        
        {/* Introduction */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">UNEOM in Riyadh</h2>
              <div className="prose prose-lg mx-auto text-gray-600">
                <p>{riyadhData.introduction}</p>
                <p className="mt-4">
                  With our centrally located Riyadh office, we provide convenient service to businesses throughout the capital region, from the bustling commercial centers to the expanding industrial areas on the outskirts of the city.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Our Services in Riyadh</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {riyadhData.services.map((service, index) => (
                <ServiceCard 
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Industries We Serve in Riyadh</h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
              {riyadhData.industries.map((industry, index) => (
                <IndustryCard 
                  key={index}
                  name={industry.name}
                  image={industry.image}
                  description={industry.description}
                  link={industry.link}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Riyadh Office Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Visit Our Riyadh Office</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div>
                <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                  <Image 
                    src={riyadhData.riyadhOffice.mapImage} 
                    alt="Map to UNEOM Riyadh Office" 
                    layout="fill" 
                    objectFit="cover" 
                  />
                </div>
                <a 
                  href={riyadhData.riyadhOffice.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                >
                  View on Google Maps <span className="ml-1">→</span>
                </a>
              </div>
              <div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Contact Information</h3>
                  <p className="mb-2"><strong>Address:</strong> {riyadhData.riyadhOffice.address}</p>
                  <p className="mb-2"><strong>Phone:</strong> {riyadhData.riyadhOffice.phone}</p>
                  <p className="mb-2"><strong>Email:</strong> {riyadhData.riyadhOffice.email}</p>
                  <p className="mb-4"><strong>Hours:</strong> {riyadhData.riyadhOffice.hours}</p>
                  <div className="mt-6">
                    <Link href={riyadhData.ctaButtonUrl} legacyBehavior>
                      <a className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded inline-flex items-center">
                        Contact Us
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Projects in Riyadh */}
        <section className="py-16 bg-primary-800 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects in Riyadh</h2>
            <div className="max-w-4xl mx-auto">
              {riyadhData.keyProjects.map((project, index) => (
                <div key={index} className="bg-primary-700 p-6 rounded-lg mb-6 last:mb-0">
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <p className="text-primary-100">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">What Riyadh Businesses Say About Us</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {riyadhData.testimonials.map((testimonial, index) => (
                <TestimonialCard 
                  key={index}
                  text={testimonial.text}
                  author={testimonial.author}
                  position={testimonial.position}
                  company={testimonial.company}
                  logo={testimonial.logo}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">{riyadhData.ctaTitle}</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">{riyadhData.ctaDescription}</p>
            <Link href={riyadhData.ctaButtonUrl} legacyBehavior>
              <a className="bg-secondary-500 hover:bg-secondary-600 text-primary-900 font-bold py-3 px-8 rounded-md text-lg transition duration-300 inline-block">
                {riyadhData.ctaButtonText}
              </a>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
} 