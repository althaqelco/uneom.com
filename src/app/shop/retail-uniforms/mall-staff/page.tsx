import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Enhanced SEO Metadata
export const metadata: Metadata = {
  title: 'Premium Mall Staff Uniforms in Saudi Arabia | UNEOM',
  description: 'High-quality, customizable uniforms for mall staff, customer service, and information desk personnel in Saudi Arabia. Enhance your brand identity with professional attire.',
  keywords: 'mall staff uniforms Saudi Arabia, shopping center uniforms Riyadh, premium retail uniforms KSA, customer service uniforms, information desk uniforms, reception staff uniforms, mall brand identity, professional retail appearance',
  openGraph: {
    title: 'Premium Mall Staff Uniforms in Saudi Arabia | UNEOM',
    description: "Enhance your shopping center's professional image with customized, high-quality uniforms for all customer-facing staff positions.",
    images: ['/images/industries/retail-shops/retail-shops-uniform.jpg'],
    type: 'website',
    locale: 'en'}
};

export default function MallStaffUniform() {
  const locale = 'en';

  const product = {
    id: "mall-staff-uniforms",
    name: "Premium Mall Staff Uniform Collection",
    tagline: "Elevate Your Shopping Center's Professional Image",
    description: "Professionally designed uniform collection specifically created for shopping centers and retail environments. Our premium mall staff uniforms combine sophisticated style with practical functionality, helping your staff deliver exceptional customer experiences while elevating your retail brand.",
    detailedDescription: `
      <p>In the competitive retail landscape of Saudi Arabia, the appearance of your mall staff directly impacts customer perception and brand reputation. UNEOM's Premium Mall Staff Uniform Collection delivers the perfect balance of professional image, brand consistency, and all-day comfort for customer-facing personnel.</p>
      
      <p>Each uniform in this comprehensive collection is meticulously crafted to enhance your mall's visual identity while ensuring your staff can perform at their best throughout demanding retail shifts. From reception areas and information desks to customer service centers and common areas, our uniforms create instant recognition and establish authority.</p>
      
      <p>The Premium Mall Staff Collection features multiple coordinated pieces that can be mixed and matched to create distinctive looks for different departments and positions while maintaining consistent branding throughout your facility. Our thoughtfully engineered designs incorporate:</p>
      
      <ul>
        <li><strong>Perfect brand integration</strong> with precise Pantone color matching and strategic logo placement</li>
        <li><strong>Superior comfort technology</strong> with breathable, moisture-wicking fabrics ideal for extended wear</li>
        <li><strong>Practical design elements</strong> including accessible pockets for essential tools and devices</li>
        <li><strong>Distinguished styling</strong> that helps customers immediately identify staff members</li>
        <li><strong>Durability features</strong> ensuring a professional appearance throughout demanding shifts</li>
      </ul>
      
      <p>Our mall uniforms have been engineered based on extensive research in retail environments across Saudi Arabia, addressing the specific needs of mall personnel while projecting professionalism and approachability.</p>
    `,
    price: "SAR 350 - 750",
    minOrder: "20 pieces",
    productCode: "RTL-MSU-2024",
    images: [
      {
        src: "/images/industries/retail-shops/retail-shops-uniform.jpg",
        alt: "Front view of Premium Mall Staff Uniform"
      },
      {
        src: "/images/industries/retail-shops/retail-shops-uniform-2.jpg",
        alt: "Mall staff wearing Premium Uniforms"
      },
      {
        src: "/images/industries/retail-shops/retail-shops-uniform-shop.jpg",
        alt: "Complete Mall Staff Uniform Collection"
      }
    ],
    colors: [
      { name: "Corporate Navy", hex: "#1C3B6E" },
      { name: "Professional Black", hex: "#171717" },
      { name: "Executive Burgundy", hex: "#6E1C3B" },
      { name: "Refined Charcoal", hex: "#3C3C3C" },
      { name: "Signature Royal", hex: "#2D365C" },
      { name: "Custom Brand Colors", hex: "#FFFFFF" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "Custom Sizing"],
    
    features: [
      {
        title: "Brand-Forward Design",
        description: "Professionally designed uniforms that prominently display your mall or retail center branding through strategic logo placement, custom color matching, and cohesive styling."
      },
      {
        title: "Role Differentiation",
        description: "Subtle design variations that distinguish different staff roles and departments while maintaining a consistent visual identity throughout your facility."
      },
      {
        title: "Premium Comfort Features",
        description: "Advanced fabric technology providing all-day comfort during extended shifts, with moisture management, temperature regulation, and strategic flexibility zones."
      },
      {
        title: "Professional Styling",
        description: "Contemporary silhouettes and refined details that project a distinguished, authoritative appearance appropriate for premium retail environments."
      },
      {
        title: "Practical Functionality",
        description: "Thoughtfully designed pockets and features that accommodate communication devices, name badges, and essential retail tools."
      }
    ],
    
    specifications: [
      {
        category: "Fabric Composition",
        details: "Premium poly-cotton blend (65% polyester, 35% cotton) or 100% performance polyester options"
      },
      {
        category: "Weight",
        details: "Medium weight (5.5-6.5 oz) for optimal comfort in climate-controlled environments"
      },
      {
        category: "Care Instructions",
        details: "Machine washable, color-fast, minimal ironing required"
      },
      {
        category: "Durability Rating",
        details: "Reinforced construction for extended wear, rated for 50+ wash cycles"
      },
      {
        category: "Production Time",
        details: "4-6 weeks standard, expedited options available"
      }
    ],
    
    customizationOptions: [
      {
        name: "Embroidered Logos",
        description: "High-definition logo application with perfect color matching"
      },
      {
        name: "Name Personalization",
        description: "Individual staff names embroidered or printed on garments"
      },
      {
        name: "Department Identification",
        description: "Color-coding, badges, or text indicating different departments or specializations"
      },
      {
        name: "Fabric Upgrades",
        description: "Premium fabric options including performance blends and luxury textiles"
      },
      {
        name: "Measurement Tailoring",
        description: "Custom sizing and fit adjustments for optimal staff comfort"
      }
    ],
    
    certifications: [
      {
        name: "OEKO-TEX® Standard 100",
        description: "Certified free from harmful substances and skin-friendly"
      },
      {
        name: "ISO 9001:2015",
        description: "Quality management system certification ensuring consistent quality"
      },
      {
        name: "Fair Labor Standards",
        description: "Manufactured under ethical labor conditions"
      }
    ],
    
    relatedProducts: [
      {
        name: "Luxury Retail Store Collection",
        description: "High-end uniforms for luxury retail brands and boutique stores",
        image: "/images/industries/retail-shops/retail-shops-uniform-identity-3.jpg",
        link: "/shop/retail-uniforms/customer-service"
      }
    ],
    
    industries: [
      "Shopping Centers",
      "Retail Malls",
      "Department Stores",
      "Exhibition Centers",
      "Entertainment Complexes"
    ]
  };

  return (
    <div className="container mx-auto py-10">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-wrap">
          {/* Product Images */}
          <div className="w-full md:w-1/2 p-6">
            <div className="relative h-96 rounded-lg overflow-hidden mb-4">
              <Image 
                src={product.images[0].src} 
                alt={product.images[0].alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {product.images.slice(1).map((image, index) => (
                <div key={index} className="relative h-24 rounded-lg overflow-hidden">
                  <Image 
                    src={image.src} 
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Product Information */}
          <div className="w-full md:w-1/2 p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
            <p className="text-lg text-primary-600 mb-4">{product.tagline}</p>
            <p className="text-gray-700 mb-6">{product.description}</p>
            
            <div className="mb-6">
              <p className="text-xl font-semibold mb-1">Price Range</p>
              <p className="text-2xl text-primary-600">{product.price}</p>
              <p className="text-sm text-gray-500">Minimum Order: {product.minOrder}</p>
            </div>
            
            <div className="mb-6">
              <p className="text-lg font-semibold mb-2">Available Colors</p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color, index) => (
                  <div 
                    key={index} 
                    className="w-8 h-8 rounded-full border border-gray-300 cursor-pointer hover:scale-110 transition" 
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <p className="text-lg font-semibold mb-2">Available Sizes</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size, index) => (
                  <span key={index} className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-100">
                    {size}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-8">
              <Link 
                href={`/contact?product=${product.id}`} 
                className="px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition"
              >
                Request Quote
              </Link>
              <Link 
                href="/contact" 
                className="px-6 py-3 border border-primary-600 text-primary-600 rounded-md hover:bg-primary-50 transition"
              >
                Request Information
              </Link>
            </div>
          </div>
        </div>
        
        {/* Product Description */}
        <div className="p-6 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Product Description</h2>
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: product.detailedDescription }} />
        </div>
        
        {/* Product Features */}
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {product.features.map((feature, index) => (
              <div key={index} className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-primary-600 mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Product Specifications */}
        <div className="p-6 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Specifications</h2>
          <div className="overflow-hidden rounded-lg border border-gray-200">
            {product.specifications.map((spec, index) => (
              <div key={index} className={`flex border-b border-gray-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                <div className="w-1/3 p-3 font-semibold">{spec.category}</div>
                <div className="w-2/3 p-3">{spec.details}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Customization Options */}
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Customization Options</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {product.customizationOptions.map((option, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-primary-600 mb-2">{option.name}</h3>
                <p className="text-sm text-gray-700">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Related Products */}
        <div className="p-6 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {product.relatedProducts.map((relatedProduct, index) => (
              <Link key={index} href={relatedProduct.link} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                  <div className="relative h-48">
                    <Image 
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover group-hover:scale-105 transition"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 group-hover:text-primary-600 transition">{relatedProduct.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{relatedProduct.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Call To Action */}
        <div className="p-8 bg-primary-600 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to Enhance Your Mall Staff's Professional Image?</h2>
          <p className="max-w-2xl mx-auto mb-6">Contact our uniform specialists for personalized recommendations and custom quotes.</p>
          <Link 
            href={`/contact?product=${product.id}`} 
            className="inline-block px-6 py-3 bg-white text-primary-600 rounded-md hover:bg-gray-100 transition"
          >
            Request Consultation
          </Link>
        </div>
      </div>
    </div>
  );
} 