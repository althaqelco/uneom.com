'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import AddToQuoteButton from '@/components/shop/AddToQuoteButton';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import CustomizationOptions from '@/components/shop/CustomizationOptions';
import RelatedProducts from '@/components/shop/RelatedProducts';
import ColorSwatches from '@/components/shop/ColorSwatches';
import SizeSelector from '@/components/shop/SizeSelector';
import FeaturesGrid from '@/components/shop/FeaturesGrid';
import TabNavigation from '@/components/ui/TabNavigation';
import RequestInfoForm from '@/components/forms/RequestInfoForm';
import { StarIcon } from '@heroicons/react/24/solid';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function LuxuryHotelUniformPage() {
  const locale = 'en';
  const [selectedColor, setSelectedColor] = useState<string | null>('Dark Gray');
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [activeTab, setActiveTab] = useState('description');
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [quantity, setQuantity] = useState(30);

  // Product data
  const product = {
    id: 'luxury-hotel-uniform',
    name: 'Premium Luxury Hotel Staff Uniform',
    price: 'SAR 349',
    basePrice: 349,
    category: 'Hospitality Attire',
    categorySlug: 'hospitality-attire',
    minOrder: 10,
    rating: 4.8,
    reviewCount: 86,
    description: `
      <p>Elevate your hotel's brand image with our Premium Luxury Hotel Staff Uniform, meticulously designed for Saudi Arabia's upscale hospitality sector. Striking the perfect balance between sophistication, professionalism, and comfort, these uniforms embody the essence of luxury hospitality.</p>
      
      <p>Crafted from premium Egyptian cotton blend fabrics with specialized finishing, our hotel uniforms maintain their pristine appearance even after extensive wear and washing. The superior tailoring features modern silhouettes with traditional Saudi-inspired design elements, creating a distinctive look that resonates with the Kingdom's rich heritage and aligns with international luxury standards.</p>
      
      <p>Designed with Saudi Arabia's climate in mind, these breathable yet formal uniforms offer all-day comfort without compromising on the polished appearance expected in five-star establishments. Available for all hotel departments including front desk, concierge, housekeeping, food service, and management, with customization options to reflect your brand's unique identity.</p>
    `,
    features: [
      {
        title: "Premium Fabric Blend",
        description: "Luxury Egyptian cotton blend (65% cotton, 35% performance polyester) with wrinkle-resistant finish",
        icon: "sparkles"
      },
      {
        title: "Climate-Optimized Design",
        description: "Breathable construction with moisture-wicking technology for Saudi Arabia's climate",
        icon: "sun"
      },
      {
        title: "Superior Tailoring",
        description: "Precision tailoring with reinforced seams and structured silhouettes for a consistently professional appearance",
        icon: "scissors"
      },
      {
        title: "Distinctive Aesthetic",
        description: "Modern design with subtle Saudi-inspired details that honor local heritage while meeting international luxury standards",
        icon: "star"
      },
      {
        title: "Comfort Features",
        description: "Strategic stretch panels, ergonomic cuts, and premium linings for all-day comfort during extended shifts",
        icon: "heart"
      },
      {
        title: "Durability Focus",
        description: "Industrial laundry compatible with colorfastness guaranteed for minimum 100 washes",
        icon: "shield-check"
      }
    ],
    specifications: [
      { name: "Material", value: "65% Egyptian Cotton, 35% Performance Polyester, 180-220 GSM depending on piece" },
      { name: "Design Origin", value: "Exclusive designs developed specifically for Saudi luxury hospitality market" },
      { name: "Closure Types", value: "Hidden placket buttons, premium zippers, and custom metal hardware with logo options" },
      { name: "Care", value: "Industrial laundry safe, colorfast for 100+ washes, minimal ironing required" },
      { name: "Customization", value: "Premium embroidery, custom buttons, specialty fabrics, and department-specific variations" },
      { name: "Sizes", value: "XS-3XL with petite, regular, and tall options" },
      { name: "Lead Time", value: "3-4 weeks standard, 2 weeks expedited service available" }
    ],
    images: [
      { src: '/images/products/hotel-uniform.jpg', alt: 'Premium Luxury Hotel Uniform - Front View' },
      { src: '/images/hospitality/hospitality_uniform_hotel.jpg', alt: 'Hotel Staff in Professional Uniforms' },
      { src: '/images/hospitality/hospitality_uniform_receiption_hotel.jpg', alt: 'Hotel Reception Staff Uniform' },
      { src: '/images/hospitality/hospitality_uniform_resturant.jpg', alt: 'Hotel Restaurant Staff Uniform' }
    ],
    colors: [
      { name: 'Navy Blue', value: '#0a1845', inStock: true },
      { name: 'Charcoal Gray', value: '#36454f', inStock: true },
      { name: 'Burgundy', value: '#800020', inStock: true },
      { name: 'Forest Green', value: '#014421', inStock: true },
      { name: 'Royal Purple', value: '#7851a9', inStock: true },
      { name: 'Gold Accent', value: '#d4af37', inStock: true }
    ],
    sizes: [
      { name: 'XS', description: 'Extra Small', inStock: true },
      { name: 'S', description: 'Small', inStock: true },
      { name: 'M', description: 'Medium', inStock: true },
      { name: 'L', description: 'Large', inStock: true },
      { name: 'XL', description: 'Extra Large', inStock: true },
      { name: 'XXL', description: '2X Large', inStock: true },
      { name: '3XL', description: '3X Large', inStock: true }
    ],
    customizationOptions: [
      { 
        name: "Premium Logo Embroidery", 
        description: "High-definition embroidery with metallic thread options - SAR 60 per uniform",
        image: "/images/Luxury_Hotel Staff_Uniform.png"
      },
      { 
        name: "Custom Metal Buttons and Hardware", 
        description: "Branded metal buttons and accents - SAR 85 per uniform set",
        image: "/images/cook-flavoring-his-best-meal-2024-11-29-22-42-39-utc.jpg"
      },
      { 
        name: "Specialty Fabric Upgrades", 
        description: "Ultra-premium fabric options including performance wool blends - SAR 120 per uniform",
        image: "/images/services/group-of-chefs-standing-with-arms-crossed-in-kitch-2023-11-27-05-01-36-utc.jpg"
      }
    ],
    relatedProducts: [
      {
        id: 'executive-hospitality-suit',
        name: 'Executive Hospitality Suit',
        image: '/images/judge-chef-and-courier-isolated-on-white-2024-11-17-23-15-00-utc.jpg',
        price: 'From SAR 399',
        href: '/shop/hospitality-attire/concierge-uniform-set'
      }
    ],
    bulkPricing: [
      { quantity: '10-49', pricePerUnit: 'SAR 349' },
      { quantity: '50-99', pricePerUnit: 'SAR 329' },
      { quantity: '100-499', pricePerUnit: 'SAR 299' },
      { quantity: '500+', pricePerUnit: 'SAR 279' }
    ]
  };
  
  // Extract size names for the SizeSelector component
  const sizeNames = product.sizes.map(size => size.name);
  
  // Customer reviews
  const reviews = [
    {
      id: 1,
      rating: 5,
      content: "These uniforms have transformed our hotel's image completely. The quality is exceptional, and the subtle Saudi-inspired details have been appreciated by both our local and international guests. Worth every riyal invested.",
      author: "Fahad Al-Otaibi, Operations Director at Royal Riyadh Palace Hotel",
      date: "March 15, 2024"
    },
    {
      id: 2,
      rating: 5,
      content: "After switching to these premium uniforms, our staff comfort and morale has significantly improved. The breathable fabric works wonderfully in Jeddah's humid climate, and they maintain their pristine appearance even after multiple laundry cycles.",
      author: "Lina Al-Ghamdi, Human Resources Manager at Red Sea Luxury Resort",
      date: "February 23, 2024"
    },
    {
      id: 3,
      rating: 4,
      content: "Exceptional quality and distinctive design that perfectly represents our luxury brand. The only improvement would be more size variations for our international staff. Otherwise, these uniforms exceed our expectations in every aspect.",
      author: "Abdullah Al-Saud, General Manager at Al Khobar Grand Hotel",
      date: "January 17, 2024"
    },
    {
      id: 4,
      rating: 5,
      content: "The durability of these uniforms is remarkable. Even with daily wear and regular washing, they maintain their color and shape perfectly. Our front desk staff receives compliments daily on their professional appearance.",
      author: "Noura Al-Qahtani, Front Office Manager at Riyadh Royal Suites",
      date: "December 8, 2023"
    }
  ];
  
  // Handle quantity change
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    }
  };
  
  // Handle add to quote
  const handleAddToQuote = () => {
    console.log('Added to quote:', {
      product: product.id,
      color: selectedColor,
      size: selectedSize,
      quantity
    });
    alert('Product added to your quote request. Our team will contact you shortly.');
  };
  
  // Generate pricing display based on quantity
  const getPriceDisplay = () => {
    if (quantity >= 500) {
      return 'SAR ' + ((349 * 0.8) * quantity).toLocaleString();
    } else if (quantity >= 100) {
      return 'SAR ' + ((349 * 0.86) * quantity).toLocaleString();
    } else if (quantity >= 50) {
      return 'SAR ' + ((349 * 0.94) * quantity).toLocaleString();
    } else {
      return 'SAR ' + (349 * quantity).toLocaleString();
    }
  };

  return (
    <div className="bg-white">
    
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <Container>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="text-sm text-gray-700 hover:text-primary-600">Home</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <Link href="/shop" className="text-sm text-gray-700 hover:text-primary-600 ml-1 md:ml-2">Shop</Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <Link href="/shop/hospitality-attire" className="text-sm text-gray-700 hover:text-primary-600 ml-1 md:ml-2">
              Hospitality Attire
            </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="text-sm text-gray-500 ml-1 md:ml-2">{product.name}</span>
          </div>
              </li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* Product Details Section */}
      <section className="py-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden bg-neutral-100 mb-4">
              <Image
                  src={product.images[0].src}
                  alt={product.images[0].alt}
                fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className="relative aspect-square rounded-md overflow-hidden bg-neutral-100"
                  >
                  <Image
                      src={image.src}
                      alt={image.alt}
                    fill
                    className="object-cover"
                      sizes="(max-width: 1024px) 25vw, 12vw"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold text-neutral-900 mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={`h-5 w-5 ${
                        product.rating > rating ? 'text-yellow-400' : 'text-neutral-300'
                      }`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-neutral-600">{product.reviewCount} reviews</span>
                </div>
              
              <p className="text-2xl font-bold text-neutral-900 mb-4">{product.price}</p>
              
              <div className="mt-4 mb-6">
                <div dangerouslySetInnerHTML={{ __html: product.description }} className="text-neutral-600 space-y-3" />
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <h2 className="text-sm font-medium text-neutral-900 mb-2">Color</h2>
                <ColorSwatches
                  colors={product.colors}
                  selectedColor={selectedColor}
                  onChange={setSelectedColor}
                />
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <h2 className="text-sm font-medium text-neutral-900 mb-2">Size</h2>
                <SizeSelector
                  sizes={sizeNames}
                  selectedSize={selectedSize}
                  onChange={setSelectedSize}
                />
              </div>
              
              {/* Quantity Selection */}
              <div className="mb-6">
                <h2 className="text-sm font-medium text-neutral-900 mb-2">Quantity (Minimum: {product.minOrder})</h2>
                <div className="flex items-center">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(product.minOrder, quantity - 1))}
                    className="p-2 border border-neutral-300 rounded-l-md"
                  >
                    <svg className="h-4 w-4 text-neutral-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    min={product.minOrder}
                    className="p-2 w-16 text-center border-t border-b border-neutral-300"
                  />
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 border border-neutral-300 rounded-r-md"
                  >
                    <svg className="h-4 w-4 text-neutral-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Total Price */}
              <div className="mb-6">
                <h2 className="text-sm font-medium text-neutral-900 mb-2">Total Price</h2>
                <p className="text-xl font-bold text-neutral-900">{getPriceDisplay()}</p>
                <p className="text-sm text-neutral-500">Includes bulk discount if applicable</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col space-y-3 mb-6">
                <Button
                  onClick={handleAddToQuote}
                  className="w-full py-3 px-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md"
                >
                  Add to Quote
                </Button>
                
                <Button
                  onClick={() => setShowRequestForm(true)}
                  className="w-full py-3 px-4 bg-white border border-neutral-300 hover:bg-neutral-50 text-neutral-900 font-medium rounded-md"
                >
                  Request More Information
                </Button>
              </div>
              
              <div className="text-sm text-neutral-500">
                <p>Minimum Order: {product.minOrder} units</p>
                <p>Estimated Lead Time: 3-4 weeks</p>
            </div>
          </motion.div>
          </div>

          {/* Tab Navigation */}
          <div className="mt-16">
            <TabNavigation
              tabs={[
                { id: 'description', label: 'Description' },
                { id: 'features', label: 'Features' },
                { id: 'specifications', label: 'Specifications' },
                { id: 'customization', label: 'Customization' },
                { id: 'reviews', label: 'Reviews' }
              ]}
              activeTab={activeTab}
              onChange={setActiveTab}
            />
            
            <div className="mt-8 bg-white p-6 rounded-lg border border-neutral-200">
              {/* Description Tab */}
              <div className={`${activeTab === 'description' ? 'block' : 'hidden'}`}>
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Product Description</h3>
                <div dangerouslySetInnerHTML={{ __html: product.description }} className="text-neutral-600 space-y-4" />
                
                <div className="mt-8">
                  <h4 className="text-md font-semibold text-neutral-900 mb-3">Designed for Saudi Arabia's Luxury Hospitality Sector</h4>
                  <p className="text-neutral-600 mb-4">Our Premium Luxury Hotel Staff Uniforms are specifically designed for the unique requirements of Saudi Arabia's growing luxury hospitality industry. With the Kingdom's Vision 2030 initiatives driving tourism and hospitality development, these uniforms perfectly align with the high standards expected in world-class establishments.</p>
                  
                  <h4 className="text-md font-semibold text-neutral-900 mb-3">Department-Specific Designs</h4>
                  <p className="text-neutral-600 mb-4">Our comprehensive collection includes specialized uniform designs for every hotel department:</p>
                  <ul className="list-disc pl-5 text-neutral-600 mb-4 space-y-2">
                    <li><span className="font-medium">Front Desk & Reception:</span> Sophisticated blazers and tailored suits that create a striking first impression</li>
                    <li><span className="font-medium">Concierge & Bell Staff:</span> Distinguished uniforms with premium detailing that embody hospitality excellence</li>
                    <li><span className="font-medium">Housekeeping:</span> Professional yet practical designs that balance formality with functionality</li>
                    <li><span className="font-medium">Food & Beverage Service:</span> Elegant server attire that enhances the dining experience</li>
                    <li><span className="font-medium">Management:</span> Executive-level uniforms that convey authority and brand representation</li>
                  </ul>
                  
                  <h4 className="text-md font-semibold text-neutral-900 mb-3">Premium Brand Representation</h4>
                  <p className="text-neutral-600">Your staff uniforms are a walking representation of your hotel's brand values. Our designs can be customized to incorporate your brand colors, logo, and unique stylistic elements, creating a cohesive visual identity that reinforces your establishment's positioning in the luxury market.</p>
                </div>
              </div>
              
              {/* Features Tab */}
              <div className={`${activeTab === 'features' ? 'block' : 'hidden'}`}>
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Key Features</h3>
                <FeaturesGrid features={product.features} columns={2} />
                
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-neutral-50 p-6 rounded-lg">
                    <h4 className="text-md font-semibold text-neutral-900 mb-3">Comfort in Saudi Climate</h4>
                    <p className="text-neutral-600">Our uniforms are engineered with advanced moisture-wicking technology and breathable construction specifically for Saudi Arabia's climate conditions. Staff members remain comfortable during long shifts in both air-conditioned environments and outdoor settings.</p>
                  </div>
                  
                  <div className="bg-neutral-50 p-6 rounded-lg">
                    <h4 className="text-md font-semibold text-neutral-900 mb-3">Cultural Considerations</h4>
                    <p className="text-neutral-600">Our designs thoughtfully incorporate elements that respect Saudi cultural sensibilities while maintaining international luxury standards. Options include appropriate coverage, modest yet modern silhouettes, and design elements inspired by traditional Saudi motifs.</p>
                  </div>
                </div>
              </div>
              
              {/* Specifications Tab */}
              <div className={`${activeTab === 'specifications' ? 'block' : 'hidden'}`}>
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Technical Specifications</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-neutral-200">
                    <tbody className="divide-y divide-neutral-200">
                {product.specifications.map((spec, index) => (
                        <tr key={index}>
                          <td className="py-4 text-sm font-medium text-neutral-900 w-1/3">{spec.name}</td>
                          <td className="py-4 text-sm text-neutral-600">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-md font-semibold text-neutral-900 mb-3">Bulk Pricing Information</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-neutral-200">
                      <thead className="bg-neutral-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Quantity Range</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Price Per Unit</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Savings</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-200">
                        {product.bulkPricing.map((tier, index) => (
                          <tr key={index} className={quantity >= parseInt(tier.quantity.split('-')[0]) && (tier.quantity.includes('+') || quantity <= parseInt(tier.quantity.split('-')[1])) ? 'bg-primary-50' : ''}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900">{tier.quantity}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700">{tier.pricePerUnit}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700">
                              {index === 0 ? 'Base Price' : `Save ${index * 5 + 5}%`}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              
              {/* Customization Tab */}
              <div className={`${activeTab === 'customization' ? 'block' : 'hidden'}`}>
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Available Customization Options</h3>
                <p className="text-neutral-600 mb-6">Enhance your hotel uniforms with these premium customization options:</p>
                
                <CustomizationOptions options={product.customizationOptions} />
                
                <div className="mt-8 bg-primary-50 p-6 rounded-lg">
                  <h4 className="text-md font-semibold text-neutral-900 mb-3">Custom Brand Integration</h4>
                  <p className="text-neutral-600">Our design team can work directly with your brand management to create completely custom uniform solutions that perfectly align with your hotel's visual identity and brand guidelines. Contact us for a personalized consultation.</p>
                </div>
              </div>

              {/* Reviews Tab */}
              <div className={`${activeTab === 'reviews' ? 'block' : 'hidden'}`}>
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Customer Reviews</h3>

              <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-neutral-200 pb-6 last:border-b-0">
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              className={`h-5 w-5 ${
                                review.rating > rating ? 'text-yellow-400' : 'text-neutral-300'
                              }`}
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-neutral-600">{review.rating}/5</span>
                      </div>
                      <p className="text-neutral-700 mb-2">"{review.content}"</p>
                      <div className="flex justify-between items-center text-sm text-neutral-500">
                        <span className="font-medium">{review.author}</span>
                        <span>{review.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        {/* Related Products */}
        <div className="mt-16">
            <SectionHeading className="mb-8">Related Products</SectionHeading>
            <RelatedProducts products={product.relatedProducts} />
        </div>
      </Container>
      </section>

      {/* Request Info Form Modal */}
      {showRequestForm && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="request-form-title" role="dialog" aria-modal="true">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
            <div className="fixed inset-0 bg-neutral-900 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={() => setShowRequestForm(false)}></div>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg leading-6 font-medium text-neutral-900" id="request-form-title">
                    Request Information about {product.name}
                  </h3>
                <button
                    type="button"
                    className="bg-white rounded-md text-neutral-400 hover:text-neutral-500"
                  onClick={() => setShowRequestForm(false)}
                >
                  <span className="sr-only">Close</span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
                <div className="mt-4">
                  <RequestInfoForm
                    productId={product.id}
                    productName={product.name}
                  />
                  </div>
              </div>
            </div>
          </div>
        </div>
      )}
    
      </div>
  );
} 