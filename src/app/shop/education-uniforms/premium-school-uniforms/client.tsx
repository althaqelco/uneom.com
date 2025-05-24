'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { useQuote } from '@/contexts/QuoteContext';
import AddToQuoteButton from '@/components/shop/AddToQuoteButton';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import TestimonialCard from '@/components/ui/TestimonialCard';
import Script from 'next/script';
import ClientPage from '../../[category]/[product]/ClientPage';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function PremiumSchoolUniformsClientPage() {
  const locale = 'en';
  const { addItem } = useQuote();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>('Navy Blue');
  const [selectedSize, setSelectedSize] = useState<string | null>('M');
  const [quantity, setQuantity] = useState(50);
  const [showSizeChart, setShowSizeChart] = useState(false);
  
  // Product details
  const product = {
    id: 'premium-school-uniforms',
    name: 'Premium School Uniforms',
    price: 'From SAR 249',
    basePrice: "249",
    rating: 4.8,
    reviews: 156,
    description: 'High-quality school uniforms designed specifically for Saudi educational institutions, combining durability, comfort, and cultural appropriateness.',
    longDescription: 'Our Premium School Uniforms are crafted with the specific needs of Saudi Arabian educational institutions in mind. Each uniform combines exceptional durability for active students with comfort features that make them suitable for daily wear throughout the academic year. The designs respect Saudi cultural values while offering contemporary styling that creates a sense of belonging and pride. Available in various configurations for different school levels and seasons, our uniforms feature stain-resistant, easy-care fabrics that withstand frequent washing while maintaining their appearance.',
    features: [
      'High-density poly-cotton blend (65/35) for extended durability',
      'Stain and wrinkle-resistant fabric technology',
      'Reinforced stitching at stress points',
      'Breathable and lightweight for Saudi climate',
      'Fade-resistant colorfastness even after numerous washes',
      'Modest design in accordance with cultural requirements',
      'Adjustable features to accommodate student growth'
    ],
    specifications: [
      { name: 'Material', value: '65% Polyester, 35% Cotton' },
      { name: 'Weight', value: 'Medium weight (180-200 gsm)' },
      { name: 'Care Instructions', value: 'Machine washable, tumble dry low' },
      { name: 'Available Sizes', value: 'Ages 4-18 (multiple size ranges)' },
      { name: 'Colors', value: 'Navy Blue, White, Light Blue, Black, Beige' },
      { name: 'Country of Manufacture', value: 'Saudi Arabia' },
      { name: 'Customization', value: 'School logos, name embroidery, custom colors' }
    ],
    images: [
      { src: '/images/default-placeholder.jpg', alt: 'Saudi students wearing premium school uniforms in classroom' },
      { src: '/images/default-placeholder.jpg', alt: 'Teacher and students in school uniforms' },
      { src: '/images/default-placeholder.jpg', alt: 'Group of Saudi students in coordinated uniforms' },
      { src: '/images/default-placeholder.jpg', alt: 'Saudi schoolgirl in premium uniform' }
    ],
    category: 'Education Uniforms',
    categorySlug: 'education-uniforms',
    inStock: true,
    minOrder: 50,
    leadTime: '21-30 days',
    customization: true,
    variants: [
      { name: 'Elementary School Set (Boys)', price: 'SAR 249' },
      { name: 'Elementary School Set (Girls)', price: 'SAR 249' },
      { name: 'Middle School Set (Boys)', price: 'SAR 279' },
      { name: 'Middle School Set (Girls)', price: 'SAR 279' },
      { name: 'High School Set (Boys)', price: 'SAR 299' },
      { name: 'High School Set (Girls)', price: 'SAR 299' }
    ],
    colors: [
      { name: 'Navy Blue', value: '#1a2942', image: '/images/default-placeholder.jpg' },
      { name: 'White', value: '#ffffff', image: '/images/default-placeholder.jpg' },
      { name: 'Light Blue', value: '#add8e6', image: '/images/default-placeholder.jpg' },
      { name: 'Black', value: '#222222', image: '/images/default-placeholder.jpg' },
      { name: 'Beige', value: '#f5f5dc', image: '/images/default-placeholder.jpg' }
    ],
    sizes: ['4-5', '6-7', '8-9', '10-11', '12-13', '14-15', '16-18'],
    sizeEquivalents: {
      '4-5': 'Ages 4-5 (XXS)',
      '6-7': 'Ages 6-7 (XS)',
      '8-9': 'Ages 8-9 (S)',
      '10-11': 'Ages 10-11 (M)',
      '12-13': 'Ages 12-13 (L)',
      '14-15': 'Ages 14-15 (XL)',
      '16-18': 'Ages 16-18 (XXL)'
    },
    testimonials: [
      {
        quote: "UNEOM's school uniforms have transformed our institution's appearance. The quality is outstanding, and they've maintained their appearance even after a full academic year of daily wear. Our students and parents are extremely satisfied.",
        author: "Dr. Abdullah Al-Sayed",
        position: "Principal",
        company: "Al Manar International School",
        image: "/images/avatar-placeholder.jpg"
      },
      {
        quote: "Working with UNEOM has simplified our uniform program management tremendously. Their fabrics stand up to the active lifestyles of our students, and their design team successfully incorporated our traditional values with contemporary educational needs.",
        author: "Fatima Al-Otaibi",
        position: "Administrative Director",
        company: "Riyadh Modern Academy",
        image: "/images/avatar-placeholder.jpg"
      }
    ]
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Shop', url: '/shop' },
    { name: 'Education Uniforms', url: '/shop/education-uniforms' },
    { name: 'Premium School Uniforms', url: '#', current: true }
  ];

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= product.minOrder) {
      setQuantity(value);
    }
  };

  const handleAddToQuote = () => {
    if (selectedColor && selectedSize) {
      addItem({
        id: product.id,
        name: product.name,
        color: selectedColor,
        size: selectedSize,
        quantity: quantity,
        price: product.basePrice,
        image: product.images[0].src
      });
    }
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  // Use params to get product data
  const params = {
    category: 'education-uniforms',
    product: 'premium-school-uniforms'
  };

  return (
    <>
      {/* Enhanced SEO for Google May 2025 Standards */}
      <EnhancedSEO2025 
        title="UNEOM - Professional Uniforms Saudi Arabia"
        description="Premium quality professional uniforms and workwear solutions in Saudi Arabia."
        keywords={["uniform shop","buy uniforms","professional workwear","uniform store"]}
        author="UNEOM Expert Team"
        expertise="Uniform Manufacturing & Design"
        contentType="product"
        trustSignals={[
          'ISO certified manufacturing',
          'Premium quality materials',
          'Custom design solutions',
          'Saudi Arabia market leader'
        ]}
        locale="en"
      />

      {/* Schema.org structured data for enhanced SEO */}
      <Script
        id="product-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "UNEOM Premium School Uniforms",
            "image": [
              "https://uneom.com/images/products/premium-school-uniforms.webp",
              "https://uneom.com/images/products/premium-school-uniforms-boys.webp",
              "https://uneom.com/images/products/premium-school-uniforms-girls.webp"
            ],
            "description": "High-quality school uniforms designed specifically for Saudi Arabian educational institutions. Our premium uniforms combine exceptional durability with comfort features suitable for daily wear throughout the academic year, while respecting Saudi cultural values and requirements.",
            "sku": "UNEOM-PSU-2023",
            "brand": {
              "@type": "Brand",
              "name": "UNEOM"
            },
            "manufacturer": "UNEOM Professional Workwear",
            "offers": {
              "@type": "AggregateOffer",
              "url": "https://uneom.com/shop/education-uniforms/premium-school-uniforms",
              "priceCurrency": "SAR",
              "lowPrice": "249",
              "highPrice": "299",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "156"
            }
          })
        }}
      />
      
      {/* Main product page component */}
      <ClientPage params={params} />
      
      {/* Enhanced Product Description Section */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <SectionHeading subtitle="Crafted for Saudi Arabian Educational Excellence">
            Premium School Uniforms
          </SectionHeading>
          
          <div className="max-w-4xl mx-auto mt-10">
            <div className="prose prose-lg mx-auto">
              <h2>Educational Attire Designed for Saudi Arabia's Academic Environment</h2>
              <p>
                UNEOM's premium school uniforms are meticulously engineered to meet the specific needs of educational institutions throughout the Kingdom of Saudi Arabia. From prestigious private academies in Riyadh to international schools in Jeddah and traditional educational institutions in Dammam, our uniforms combine superior durability with cultural appropriateness and student comfort to create attire that enhances the educational experience while fostering institutional identity.
              </p>
              
              <h3>Superior Fabrics for Saudi Arabian School Environments</h3>
              <p>
                Our school uniforms feature specialized textiles specifically selected for the demands of Saudi Arabian educational settings:
              </p>
              <ul>
                <li>High-density poly-cotton blend (65% polyester, 35% cotton) that provides exceptional durability while maintaining a professional appearance throughout the school year</li>
                <li>Advanced stain-resistant treatments that protect against common classroom challenges including ink, art supplies, food, and beverages</li>
                <li>Wrinkle-resistant finishes that ensure students maintain a neat appearance throughout the school day</li>
                <li>Antimicrobial fabric technologies that inhibit odor-causing bacteria, particularly important in Saudi Arabia's warm climate</li>
                <li>Fade-resistant colorfastness engineered to withstand frequent washing and exposure to Saudi Arabia's intense sunlight</li>
                <li>Breathable, lightweight construction specifically designed for comfort in both air-conditioned classrooms and outdoor activities in the Saudi climate</li>
                <li>Moisture-wicking properties that help maintain comfort during physical education and outdoor activities</li>
              </ul>
              
              <h3>Culturally Appropriate Designs for Saudi Educational Institutions</h3>
              <p>
                UNEOM understands the importance of uniforms that respect Saudi Arabian cultural values while supporting educational goals:
              </p>
              <ul>
                <li>Modest designs that comply with the Kingdom's cultural expectations while allowing for comfortable movement and activity</li>
                <li>Gender-appropriate variations that respect traditional values while promoting educational participation</li>
                <li>Coverage considerations that accommodate Saudi Arabia's climate while maintaining cultural appropriateness</li>
                <li>Hijab-friendly designs with coordinating head coverings for female students where required</li>
                <li>Traditional Saudi elements that can be incorporated to honor cultural heritage</li>
                <li>Contemporary styling that creates a sense of belonging and institutional pride</li>
                <li>Adjustable features that accommodate modest dressing requirements while ensuring comfort</li>
              </ul>
              
              <h3>Age-Appropriate Uniform Collections</h3>
              <p>
                Our comprehensive school uniform collection includes specialized options for every educational level in Saudi Arabian institutions:
              </p>
              <h4>Elementary School Uniforms (Ages 4-11)</h4>
              <ul>
                <li>Reinforced knees and elbows to withstand active play and classroom activities</li>
                <li>Easy-care fabrics that simplify maintenance for parents and school staff</li>
                <li>Adjustable waistbands and hems to accommodate rapid growth stages</li>
                <li>Simplified closures that promote independence and self-dressing skills</li>
                <li>Strategic reinforcement at stress points common in younger children's wear</li>
                <li>Comfortable, non-restrictive designs that support active learning and play</li>
              </ul>
              
              <h4>Middle School Uniforms (Ages 12-15)</h4>
              <ul>
                <li>Transitional designs that accommodate more rapid growth periods</li>
                <li>Age-appropriate styling that respects emerging adolescent identity</li>
                <li>Durable construction to withstand increased physical activity</li>
                <li>Modest yet contemporary designs that respect developmental stages</li>
                <li>Fabrics selected to maintain comfort during adolescent physical changes</li>
                <li>Thoughtful features that support growing independence</li>
              </ul>
              
              <h4>High School Uniforms (Ages 16-18)</h4>
              <ul>
                <li>More mature styling that prepares students for professional environments</li>
                <li>Sophisticated design elements that acknowledge young adult status</li>
                <li>Premium details that instill pride and professional presentation skills</li>
                <li>Enhanced durability for the active lifestyles of older students</li>
                <li>Traditional Saudi elements integrated with contemporary educational wear</li>
                <li>Professional appearance that supports career preparation</li>
              </ul>
              
              <h3>Customization for Saudi Educational Institutions</h3>
              <p>
                UNEOM offers extensive customization options to align our school uniforms with your Saudi Arabian educational institution's identity:
              </p>
              <ul>
                <li>Professional school logo embroidery that maintains clarity and color fidelity</li>
                <li>Custom color selection to match your institution's brand and traditions</li>
                <li>Special design elements that highlight your school's educational focus or heritage</li>
                <li>Grade-level distinctions through color coding, piping, or other design elements</li>
                <li>Arabic and English name embroidery options for personalization</li>
                <li>Achievement indicators that can be incorporated into uniform elements</li>
                <li>Special uniform variations for student leaders, prefects, or team captains</li>
                <li>Seasonal uniform adaptations for Saudi Arabia's climate variations</li>
              </ul>
              
              <div className="my-8 bg-primary-50 p-8 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-4">Request a Consultation for Your School Uniform Program</h3>
                <p className="mb-6">
                  Our educational attire specialists can develop a customized school uniform program tailored to your institution's specific values, identity, and requirements. We serve schools throughout Saudi Arabia with comprehensive uniform solutions that enhance school pride and support educational excellence.
                </p>
                <div className="flex justify-center">
                  <Link href="/contact">
                    <Button variant="primary" size="lg">
                      Contact Our Education Uniform Team
                    </Button>
                  </Link>
                </div>
              </div>
              
              <h3>Practical Features for Educational Settings</h3>
              <p>
                UNEOM's school uniforms include thoughtful design elements that address the practical needs of students in Saudi Arabian educational environments:
              </p>
              <ul>
                <li>Reinforced stitching at stress points to withstand active student movement</li>
                <li>Strategic pocket placement for educational essentials such as ID cards, pens, and small electronics</li>
                <li>Adjustable features including expandable waistbands and adjustable sleeve lengths to accommodate growth</li>
                <li>Easy-care finishes that maintain appearance with minimal ironing or special treatment</li>
                <li>Indoor/outdoor adaptability for transitions between air-conditioned classrooms and outdoor activities</li>
                <li>Full range of motion design that doesn't restrict educational participation or physical activity</li>
                <li>Secure closure systems that maintain modest coverage during active movement</li>
              </ul>
              
              <h3>Comprehensive School Uniform Programs</h3>
              <p>
                UNEOM specializes in providing full-scale uniform solutions for educational institutions throughout Saudi Arabia. Our dedicated education account managers work directly with school administrators, procurement teams, and parent associations to develop comprehensive uniform programs that enhance school identity while addressing the practical needs of students, parents, and staff.
              </p>
              <p>
                With local manufacturing capabilities in Saudi Arabia, we offer responsive service for both initial orders and ongoing uniform replacement as students grow. Our inventory management system can integrate with your school's operations for streamlined ordering processes, particularly valuable for large educational institutions or multiple campus operations throughout the Kingdom.
              </p>
              
              <h3>Seasonal Uniform Adaptations</h3>
              <p>
                Our school uniform collection includes seasonal variations designed for Saudi Arabia's climate conditions:
              </p>
              <ul>
                <li>Lightweight summer options for the Kingdom's hot months</li>
                <li>Layering pieces for cooler winter periods in northern regions</li>
                <li>Indoor variations optimized for air-conditioned educational environments</li>
                <li>Physical education adaptations that maintain cultural appropriateness during activity</li>
                <li>Special occasion versions for school events, competitions, and ceremonies</li>
              </ul>
              
              <h3>Quality and Durability Standards</h3>
              <p>
                Every UNEOM school uniform undergoes rigorous quality testing designed to simulate the challenging conditions found in Saudi Arabian educational environments:
              </p>
              <ul>
                <li>Abrasion resistance testing to ensure durability in high-wear areas</li>
                <li>Colorfastness testing to verify appearance retention after repeated washing and sun exposure</li>
                <li>Tensile strength testing for all critical seams and stress points</li>
                <li>Wash durability testing simulating a minimum of 100 domestic laundering cycles</li>
                <li>Pilling resistance to maintain appearance throughout the school year</li>
                <li>Dimensional stability testing to ensure consistent sizing after washing</li>
              </ul>
              <p>
                Our school uniforms are designed to maintain their professional appearance and structural integrity throughout the academic year, offering exceptional value and performance for your educational institution and the families you serve.
              </p>
            </div>
          </div>
      </Container>
      </section>
    </>
  );
} 