import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface FeatureDetail {
  title: string;
  description: string;
  image: string;
}

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
}

interface CaseStudy {
  title: string;
  description: string;
  link: string;
}

interface CTAButton {
  text: string;
  link: string;
}

interface ProductEnhanced {
  id?: string;
  name?: string;
  shortDescription?: string;
  description?: string;
  features?: string[];
  images?: { src: string; alt: string }[];
  colors?: { name: string; value: string; image: string }[];
  sizes?: string[];
  price?: string;
  fabricDetails?: {
    composition?: string;
    gsm?: string;
    features?: string[];
  };
  customizationOptions?: string[];
  // Enhanced properties
  detailedFeatures?: FeatureDetail[];
  testimonials?: Testimonial[];
  certifications?: string[];
  relatedCaseStudies?: CaseStudy[];
  callToAction?: {
    primary: CTAButton;
    secondary: CTAButton;
  };
  // Other properties might exist as well
  [key: string]: any;
}

interface ProductDetailProps {
  product: ProductEnhanced;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const { 
    name = '', 
    shortDescription = '', 
    description = '', 
    features = [], 
    images = [], 
    colors = [], 
    sizes = [], 
    price = '', 
    fabricDetails = { composition: '', gsm: '', features: [] }, 
    customizationOptions = [],
    detailedFeatures = [],
    testimonials = [],
    certifications = [],
    relatedCaseStudies = [],
    callToAction
  } = product;

  return (
    <div className="product-detail">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row gap-8 py-10">
        <div className="md:w-1/2">
          <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
            {images && images[0] && (
              <Image 
                src={images[0].src} 
                alt={images[0].alt} 
                fill 
                priority
                className="object-cover"
              />
            )}
          </div>
          <div className="flex mt-4 gap-2 overflow-x-auto">
            {images?.slice(1).map((image, index) => (
              <div key={index} className="relative w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
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
        
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
          <p className="text-lg text-gray-600 mt-2">{shortDescription}</p>
          <p className="text-xl font-bold text-gray-900 mt-4">{price}</p>
          
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-900">Colors</h2>
            <div className="flex mt-2 gap-2">
              {colors?.map((color, index) => (
                <div 
                  key={index} 
                  className="w-10 h-10 rounded-full cursor-pointer border-2 border-white shadow"
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                ></div>
              ))}
            </div>
          </div>
          
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-900">Sizes</h2>
            <div className="flex flex-wrap mt-2 gap-2">
              {sizes?.map((size, index) => (
                <div key={index} className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 cursor-pointer">
                  {size}
                </div>
              ))}
            </div>
          </div>
          
          {callToAction && (
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link 
                href={callToAction.primary.link}
                className="inline-flex justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {callToAction.primary.text}
              </Link>
              <Link 
                href={callToAction.secondary.link}
                className="inline-flex justify-center px-6 py-3 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {callToAction.secondary.text}
              </Link>
            </div>
          )}
        </div>
      </div>
      
      {/* Description Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900">Product Description</h2>
        <p className="mt-4 text-gray-600">{description}</p>
        
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-900">Key Features</h3>
          <ul className="mt-4 space-y-2">
            {features?.map((feature, index) => (
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
      </div>
      
      {/* Detailed Features Section */}
      {detailedFeatures && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Detailed Features</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            {detailedFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="relative h-56 w-full">
                  <Image 
                    src={feature.image} 
                    alt={feature.title} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Fabric Details Section */}
      <div className="mt-12 bg-gray-50 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900">Fabric Details</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Composition</h3>
            <p className="mt-2 text-gray-600">{fabricDetails?.composition}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">GSM</h3>
            <p className="mt-2 text-gray-600">{fabricDetails?.gsm}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Features</h3>
            <ul className="mt-2 space-y-1">
              {fabricDetails?.features.map((feature, index) => (
                <li key={index} className="text-gray-600">{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Customization Options */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">Customization Options</h2>
        <p className="mt-2 text-gray-600">Make these uniforms uniquely yours with our range of customization options:</p>
        <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
          {customizationOptions?.map((option, index) => (
            <li key={index} className="flex items-center">
              <span className="flex-shrink-0 h-5 w-5 text-indigo-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="ml-2 text-gray-600">{option}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Certifications Section */}
      {certifications && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Certifications</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {certifications.map((certification, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
              >
                {certification}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {/* Testimonials */}
      {testimonials && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Customer Testimonials</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <div className="mt-4">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Case Studies */}
      {relatedCaseStudies && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Related Case Studies</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedCaseStudies.map((caseStudy, index) => (
              <Link 
                href={caseStudy.link} 
                key={index} 
                className="group block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition duration-150"
              >
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600">{caseStudy.title}</h3>
                <p className="mt-2 text-gray-600">{caseStudy.description}</p>
                <span className="mt-4 inline-flex items-center text-indigo-600">
                  Read case study
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
      
      {/* Final CTA */}
      <div className="mt-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg text-white p-8 text-center">
        <h2 className="text-2xl font-bold">Ready to Elevate Your Brand Presence?</h2>
        <p className="mt-2">Contact our team for a customized quote tailored to your specific requirements.</p>
        {callToAction && (
          <Link 
            href={callToAction.primary.link}
            className="mt-6 inline-flex justify-center px-8 py-3 border border-transparent rounded-md shadow-sm text-indigo-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            {callToAction.primary.text}
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProductDetail; 