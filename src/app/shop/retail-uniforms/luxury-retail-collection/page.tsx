import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Premium Luxury Retail Collection | High-End Store Uniforms | UNEOM Saudi Arabia',
  description: 'Elevate your retail brand with UNEOM\'s premium Luxury Retail Collection uniforms. Sophisticated, Saudi-appropriate designs with premium fabrics and customization options. Perfect for luxury retail environments in Riyadh, Jeddah, and across KSA.',
  openGraph: {
    title: 'Premium Luxury Retail Collection | High-End Store Uniforms | UNEOM Saudi Arabia',
    description: 'Elevate your retail brand with UNEOM\'s premium Luxury Retail Collection uniforms. Sophisticated, Saudi-appropriate designs with premium fabrics and customization options.',
    images: ['/images/industries/retail-shops/retail-shops-uniform-brand.jpg'],
    url: 'https://uneom.com/shop/retail-uniforms/luxury-retail-collection',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/shop/retail-uniforms/luxury-retail-collection',
    languages: {
      'en': 'https://uneom.com/shop/retail-uniforms/luxury-retail-collection',
      'ar': 'https://uneom.com/ar/shop/retail-uniforms/luxury-retail-collection',
    },
  },
  keywords: 'luxury retail uniforms Saudi Arabia, premium store staff attire KSA, high-end retail uniforms Riyadh, luxury boutique uniforms, Saudi retail brand uniforms, designer retail staff clothing, premium mall staff uniforms Jeddah',
};

export default function LuxuryRetailCollectionPage() {
  // Hardcoded product data instead of fetching from products.ts
  const product = {
    id: "luxury-retail-collection",
    category: "retail-uniforms",
    categoryName: "Retail Uniforms",
    industry: "retail",
    name: "Luxury Retail Collection",
    shortDescription: "Sophisticated uniforms for high-end retail environments in Saudi Arabia",
    description: "Our luxury retail collection is designed specifically for high-end retail environments in Saudi Arabia. These sophisticated uniforms project elegance and professionalism while ensuring comfort during long retail hours. The designs integrate subtle Saudi-inspired elements that resonate with local customers while meeting international luxury standards.",
    features: [
      "Premium fabric blends for sophisticated appearance and durability",
      "Custom color options that align with your luxury brand identity",
      "Subtle Saudi-inspired design elements",
      "Climate-optimized construction for comfort in retail environments",
      "Multiple customization options for brand integration"
    ],
    images: [
      { src: "/images/industries/retail-shops/retail-shops-uniform-brand.jpg", alt: "Luxury retail uniforms" },
      { src: "/images/industries/retail-shops/retail-shops-uniform-identity-2.jpg", alt: "High-end store staff attire" },
      { src: "/images/industries/retail-shops/retail-shops-uniform-identity.jpg", alt: "Premium retail collection" }
    ],
    price: "SAR 579"
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
                Request Custom Quote
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
          <h2 className="text-2xl font-bold">Ready to Elevate Your Brand Presence?</h2>
          <p className="mt-2">Contact our team for a customized quote tailored to your specific requirements.</p>
          <Link 
            href={`/contact?product=${product.id}`}
            className="mt-6 inline-flex justify-center px-8 py-3 border border-transparent rounded-md shadow-sm text-indigo-700 bg-white hover:bg-gray-100 focus:outline-none"
          >
            Request Custom Quote
          </Link>
        </div>
      </div>
    </main>
  );
} 