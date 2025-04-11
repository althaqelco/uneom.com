import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Professional Mall Security Uniforms | Saudi Arabia Retail Security | UNEOM',
  description: 'UNEOM\'s Mall Security Uniforms combine professional authority with approachable design for Saudi retail environments. Durable, functional uniforms with customization options for shopping centers in Riyadh, Jeddah, and across KSA.',
  openGraph: {
    title: 'Professional Mall Security Uniforms | Saudi Arabia Retail Security | UNEOM',
    description: 'UNEOM\'s Mall Security Uniforms combine professional authority with approachable design for Saudi retail environments. Durable, functional uniforms with customization options.',
    images: ['/images/industries/Security/security-uniform-1.jpg'],
    url: 'https://uneom.com/shop/security-uniforms/mall-security',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/shop/security-uniforms/mall-security',
    languages: {
      'en': 'https://uneom.com/shop/security-uniforms/mall-security',
      'ar': 'https://uneom.com/ar/shop/security-uniforms/mall-security',
    },
  },
  keywords: 'mall security uniforms Saudi Arabia, retail security staff attire KSA, professional security uniforms Riyadh, shopping center security clothing, Saudi mall security apparel, retail protection uniforms, professional security staff uniforms Jeddah',
};

export default function MallSecurityPage() {
  // Hardcoded product data instead of fetching from products.ts
  const product = {
    id: "mall-security",
    category: "security-uniforms",
    categoryName: "Security Uniforms",
    industry: "security",
    name: "Mall Security Uniform",
    shortDescription: "Professional security uniforms for retail and mall environments across Saudi Arabia",
    description: "Our mall security uniforms are specifically designed for Saudi Arabia's retail environments, balancing professional authority with an approachable presence. These uniforms feature strategic functionality for security personnel while maintaining a customer-friendly appearance appropriate for premium shopping destinations in Riyadh, Jeddah, and across the Kingdom.",
    features: [
      "Professional security appearance with approachable design elements",
      "Durable, high-quality fabrics that maintain appearance through long shifts",
      "Multiple tactical pockets and equipment attachment points",
      "Climate-optimized for indoor retail environments",
      "Reinforced stress points for enhanced durability"
    ],
    images: [
      { src: "/images/industries/Security/security-uniform-1.jpg", alt: "Mall security staff uniforms" },
      { src: "/images/industries/Security/security-uniform-2.jpg", alt: "Security personnel in retail environment" },
      { src: "/images/industries/Security/security-uniform-3.jpg", alt: "Professional mall security uniforms" }
    ],
    price: "SAR 429"
  };

  return (
    <main className="bg-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Image */}
          <div className="md:w-1/2">
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
              <Image 
                src={product.images[0].src} 
                alt={product.images[0].alt}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Product Info */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-lg text-gray-600 mt-2">{product.shortDescription}</p>
            <p className="text-xl font-bold text-gray-900 mt-4">{product.price}</p>
            
            <div className="mt-8">
              <Link 
                href={`/contact?product=${product.id}`}
                className="inline-flex justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Request Security Uniform Quote
              </Link>
            </div>
          </div>
        </div>
        
        {/* Description */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Product Description</h2>
          <p className="mt-4 text-gray-600">{product.description}</p>
        </div>
        
        {/* Features */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-900">Key Features</h3>
          <ul className="mt-4 space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 text-indigo-500">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="ml-2 text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg text-white p-8 text-center">
          <h2 className="text-2xl font-bold">Ready to Enhance Your Security Team's Presence?</h2>
          <p className="mt-2">Contact our team for a customized quote tailored to your specific security requirements.</p>
          <Link 
            href={`/contact?product=${product.id}`}
            className="mt-6 inline-flex justify-center px-8 py-3 border border-transparent rounded-md shadow-sm text-indigo-700 bg-white hover:bg-gray-100 focus:outline-none"
          >
            Request Security Uniform Quote
          </Link>
        </div>
      </div>
    </main>
  );
} 