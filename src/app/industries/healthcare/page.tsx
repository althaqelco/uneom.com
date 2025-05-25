import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ProductCard from '@/components/ui/ProductCard';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'Healthcare Uniforms & Medical Scrubs | Professional Medical Attire | Uneom',
  description: 'Premium healthcare uniforms and medical scrubs designed for Saudi Arabian healthcare professionals. Antimicrobial fabrics, comfortable fits, and professional designs for hospitals, clinics, and medical facilities.',
  keywords: 'healthcare uniforms, medical scrubs, hospital uniforms, nursing uniforms, doctor scrubs, antimicrobial uniforms, medical attire Saudi Arabia, healthcare workwear',
  openGraph: {
    title: 'Healthcare Uniforms & Medical Scrubs | Professional Medical Attire | Uneom',
    description: 'Premium healthcare uniforms and medical scrubs designed for Saudi Arabian healthcare professionals.',
    url: 'https://uneom.com/industries/healthcare/',
    siteName: 'Uneom',
    images: [
      {
        url: 'https://uneom.com/images/Healthcare_Uniforms.png',
        width: 1200,
        height: 630,
        alt: 'Healthcare Uniforms by Uneom'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/industries/healthcare/',
    languages: {
      'en-SA': 'https://uneom.com/industries/healthcare/',
      'ar-SA': 'https://uneom.com/ar/industries/healthcare/',
      'x-default': 'https://uneom.com/industries/healthcare/'
    }
  }
};

export const dynamic = 'force-static';

// Featured healthcare products
const featuredProducts = [
  {
    id: '1',
    name: 'Premium Medical Scrubs',
    image: '/images/PremiumـMedicalـScrubs.png',
    price: 'Request Quote',
    href: '/shop/medical-scrubs/premium-medical-scrubs/',
    category: 'Medical Scrubs'
  },
  {
    id: '2',
    name: 'Professional Lab Coats',
    image: '/images/Healthcare_Uniforms.png',
    price: 'Request Quote',
    href: '/shop/medical-scrubs/professional-lab-coat/',
    category: 'Lab Coats'
  },
  {
    id: '3',
    name: 'Nursing Uniforms',
    image: '/images/healthcare/medical_hijab_uniform.jpg',
    price: 'Request Quote',
    href: '/shop/medical-scrubs/nursing-scrubs/',
    category: 'Nursing Uniforms'
  }
];

// Healthcare benefits
const healthcareBenefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Antimicrobial Protection',
    description: 'Advanced antimicrobial treatments that inhibit bacterial growth and maintain hygiene standards throughout long shifts.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Moisture Management',
    description: 'Moisture-wicking fabrics keep healthcare professionals dry and comfortable during demanding work environments.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Comfort & Durability',
    description: 'Ergonomic designs with reinforced stress points ensure long-lasting comfort and professional appearance.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: 'Compliance Ready',
    description: 'All uniforms meet Saudi healthcare regulations and international quality standards for medical environments.'
  }
];

// Fabric technologies
const fabricTechnologies = [
  {
    name: 'Antimicrobial Treatment',
    description: 'Silver-ion technology that provides lasting protection against bacteria and odors',
    image: '/images/uneom_antimicrobial_treatment.webp'
  },
  {
    name: 'Moisture Wicking',
    description: 'Advanced polyester blends that move moisture away from the skin',
    image: '/images/uneom_moisture_wicking.webp'
  },
  {
    name: 'Stain Release',
    description: 'Special fabric treatments that make cleaning easier and maintain appearance',
    image: '/images/fabric-cotton-blends.webp'
  }
];

export default function HealthcareIndustryPage() {
  return (
    <div>
      <EnhancedSEO2025 
        title="Healthcare Uniforms & Medical Scrubs | Professional Medical Attire | Uneom"
        description="Premium healthcare uniforms and medical scrubs designed for Saudi Arabian healthcare professionals. Antimicrobial fabrics, comfortable fits, and professional designs."
        canonicalUrl="https://uneom.com/industries/healthcare/"
        locale="en"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-700 text-white py-20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/Healthcare_Uniforms.png"
            alt="Healthcare Uniforms by Uneom"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Industries', href: '/industries' },
              { label: 'Healthcare', href: '/industries/healthcare' }
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Healthcare Uniforms & Medical Scrubs</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl">
              Professional medical attire designed for Saudi Arabian healthcare professionals. Featuring antimicrobial protection, moisture management, and superior comfort for demanding healthcare environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href="/quote"
                variant="secondary" 
                size="lg"
              >
                Request Healthcare Quote
              </Button>
              <Button 
                href="#featured-products"
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-700"
              >
                View Products
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          {/* Introduction */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading subtitle="Professional Medical Attire">
                  Excellence in Healthcare Uniforms
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  At Uneom, we understand that healthcare professionals need uniforms that perform as hard as they do. Our healthcare uniform collection combines cutting-edge fabric technology with professional styling to create medical attire that meets the demanding requirements of Saudi Arabian healthcare facilities.
                </p>
                <p className="text-gray-600 mb-8">
                  From antimicrobial treatments that maintain hygiene standards to moisture-wicking fabrics that ensure comfort during long shifts, every detail is designed with healthcare professionals in mind.
                </p>
                <Button href="/contact" variant="primary" size="lg">
                  Discuss Your Requirements
                </Button>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/PremiumـMedicalـScrubs.png"
                  alt="Premium Medical Scrubs"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Key Benefits */}
          <section className="mb-16">
            <SectionHeading subtitle="Why Choose Uneom Healthcare Uniforms" centered>
              Advanced Features for Healthcare Professionals
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {healthcareBenefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Products */}
          <section id="featured-products" className="mb-16">
            <SectionHeading subtitle="Our Healthcare Collection" centered>
              Featured Medical Uniforms
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button href="/shop/medical-scrubs/" variant="primary" size="lg">
                View All Healthcare Products
              </Button>
            </div>
          </section>

          {/* Fabric Technologies */}
          <section className="mb-16">
            <SectionHeading subtitle="Advanced Fabric Technology" centered>
              Innovation in Medical Textiles
            </SectionHeading>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {fabricTechnologies.map((tech, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative aspect-video">
                    <Image
                      src={tech.image}
                      alt={tech.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{tech.name}</h3>
                    <p className="text-gray-600">{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Customization Options */}
          <section className="mb-16 bg-gray-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src="/images/healthcare/medical_hijab_uniform.jpg"
                  alt="Custom Healthcare Uniforms"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <SectionHeading subtitle="Tailored Solutions">
                  Custom Healthcare Uniforms
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  Every healthcare facility has unique requirements. Our customization services ensure your uniforms reflect your brand while meeting specific functional needs.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Custom embroidery and logo placement
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Department-specific color coding
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Specialized pocket configurations
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Size range from XS to 5XL
                  </li>
                </ul>
                <Button href="/services/custom-design/" variant="primary" size="lg">
                  Explore Customization
                </Button>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="mb-16">
            <SectionHeading subtitle="Client Success Stories" centered>
              Trusted by Healthcare Professionals
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-600 font-semibold">KF</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">King Faisal Hospital</h4>
                    <p className="text-sm text-gray-500">Riyadh</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "The antimicrobial properties and comfort of Uneom's scrubs have significantly improved our staff satisfaction. The quality is exceptional."
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-600 font-semibold">SMC</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Saudi Medical Center</h4>
                    <p className="text-sm text-gray-500">Jeddah</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Professional appearance and durability that withstands frequent washing. Our nursing staff loves the comfortable fit."
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-600 font-semibold">DHH</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Dammam Health Hub</h4>
                    <p className="text-sm text-gray-500">Dammam</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Excellent customization options allowed us to maintain our brand identity while ensuring compliance with health regulations."
                </p>
              </div>
            </div>
          </section>

          {/* Related Blog Posts */}
          <section className="mb-16">
            <SectionHeading subtitle="Healthcare Insights" centered>
              Latest Healthcare Uniform Trends
            </SectionHeading>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-video">
                  <Image
                    src="/images/professional-textile-expert-checking-the-quality-of-a-fabric-in-a-factory-man-SBI-300990818.jpg"
                    alt="Healthcare Uniform Innovation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Innovation in Medical Textiles</h3>
                  <p className="text-gray-600 mb-4">Discover the latest advances in antimicrobial treatments and moisture-wicking technologies for healthcare uniforms.</p>
                  <Link href="/blog/medical-textile-innovation/" className="text-primary-600 hover:text-primary-700 font-medium">
                    Read More →
                  </Link>
                </div>
              </article>
              
              <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-video">
                  <Image
                    src="/images/Healthcare_Uniforms.png"
                    alt="Healthcare Compliance"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Healthcare Compliance Standards</h3>
                  <p className="text-gray-600 mb-4">Understanding Saudi healthcare regulations and how proper uniforms contribute to compliance and safety.</p>
                  <Link href="/blog/healthcare-compliance-guide/" className="text-primary-600 hover:text-primary-700 font-medium">
                    Read More →
                  </Link>
                </div>
              </article>
              
              <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-video">
                  <Image
                    src="/images/PremiumـMedicalـScrubs.png"
                    alt="Sustainable Healthcare Uniforms"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Sustainable Healthcare Uniforms</h3>
                  <p className="text-gray-600 mb-4">How eco-friendly materials and manufacturing processes are shaping the future of medical attire.</p>
                  <Link href="/blog/sustainable-healthcare-uniforms/" className="text-primary-600 hover:text-primary-700 font-medium">
                    Read More →
                  </Link>
                </div>
              </article>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center bg-primary-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Healthcare Uniforms?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join hundreds of healthcare facilities across Saudi Arabia who trust Uneom for their professional medical attire needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/quote" variant="primary" size="lg">
                Get Healthcare Quote
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Schedule Consultation
              </Button>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}