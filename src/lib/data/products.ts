// 'use client';

export const products = [
  // Retail Uniform Products
  {
    id: "related-product-1",
    category: "retail-uniforms",
    categoryName: "Retail Uniforms",
    industry: "retail",
    name: "Premium Retail Staff Polo",
    shortDescription: "High-quality polo shirts for luxury retail environments",
    description: "Our premium retail staff polo is designed for upscale retail environments in Saudi Arabia. Made with high-quality fabric blend that provides exceptional comfort during long shifts while maintaining a polished appearance.",
    features: [
      "Tailored fit with modern styling suitable for Saudi retail environments",
      "Luxury fabric blend (65% cotton, 35% polyester) for all-day comfort",
      "Wrinkle and stain-resistant for maintaining professional appearance",
      "Multiple customization options including embroidery and color matching",
      "Modest designs suitable for Saudi cultural requirements",
      "Available with coordinating accessories (name badges, scarves/ties)"
    ],
    images: [
      { src: "/images/industries/retail-shops/retail-shops-uniform-identity.jpg", alt: "Front view of retail staff polo" },
      { src: "/images/industries/retail-shops/retail-shops-uniform-shop.jpg", alt: "Retail staff wearing premium polo in store environment" },
      { src: "/images/industries/retail-shops/retail-shops-uniform-2.jpg", alt: "Detail of premium retail staff polo fabric" }
    ],
    colors: [
      { name: "Navy Blue", value: "#2c3e50", image: "/images/industries/retail-shops/retail-shops-uniform-identity.jpg" },
      { name: "Dark Blue", value: "#34495e", image: "/images/industries/retail-shops/retail-shops-uniform-identity-2.jpg" },
      { name: "Gray", value: "#7f8c8d", image: "/images/industries/retail-shops/retail-shops-uniform-identity-3.jpg" },
      { name: "Light Gray", value: "#ecf0f1", image: "/images/industries/retail-shops/retail-shops-uniform-identity-4.jpg" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
    fabricDetails: {
      composition: "65% Cotton, 35% Polyester",
      gsm: "220",
      features: ["Wrinkle-resistant", "Stain-resistant", "Breathable"]
    },
    customizationOptions: [
      "Brand logo embroidery",
      "Custom collar and cuff designs",
      "Color matching to brand identity",
      "Name embroidery options",
      "Department color coding"
    ],
    relatedProducts: ["related-product-2", "related-product-3", "related-product-4"],
    price: "SAR 185",
    minOrder: 10,
    href: "/shop/retail-uniforms/related-product-1"
  },
  {
    id: "airline-crew-uniform",
    name: "Airline Crew Uniform",
    category: "aviation",
    categoryName: "Aviation Uniforms",
    industry: "aviation",
    shortDescription: "Professional airline crew uniforms designed for Saudi aviation industry",
    description: "Professional airline crew uniforms designed for Saudi aviation industry with modern styling and comfort features.",
    features: [
      "Professional airline styling",
      "Comfortable fabric blend",
      "Saudi-inspired design elements",
      "Durable construction",
      "Easy care instructions"
    ],
    images: [
      { src: "/images/aviation/aviation_uniform_airline_main_image.jpg", alt: "Female and male airline crew uniforms" },
      { src: "/images/aviation/aviation_uniform_airline.jpg", alt: "Female crew uniform with Saudi design elements" },
      { src: "/images/aviation/aviation_uniform_flightـattendants.jpg", alt: "Male crew uniform details" }
    ],
    colors: [
      { name: "Royal Blue", value: "#1e3799", image: "/images/products/aviation/airline-blue.jpg" },
      { name: "Desert Sand", value: "#c4a077", image: "/images/products/aviation/airline-sand.jpg" },
      { name: "Corporate Navy", value: "#0c2461", image: "/images/products/aviation/airline-navy.jpg" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    fabricDetails: {
      composition: "80% Polyester, 18% Wool, 2% Elastane",
      gsm: "220",
      features: ["Wrinkle-resistant", "Stretch comfort", "Professional finish"]
    },
    customizationOptions: [
      "Airline logo embroidery",
      "Custom buttons with airline branding",
      "Rank designations",
      "Optional Saudi-inspired accessories",
      "Headscarf designs for female crew"
    ],
    relatedProducts: ["pilot-uniform", "ground-crew-uniform", "airport-security-uniform"],
    price: "SAR 599",
    minOrder: 15,
    href: "/shop/aviation-uniforms/airline-crew-uniform"
  },
  {
    id: "luxury-hotel-uniform",
    name: "Luxury Hotel Staff Uniform",
    category: "hospitality",
    categoryName: "Hospitality Uniforms",
    industry: "hospitality",
    shortDescription: "Premium hospitality uniforms designed for luxury hotels and resorts",
    description: "Premium hospitality uniforms designed for luxury hotels and resorts with elegant styling and comfort features.",
    features: [
      "Luxury hotel styling",
      "Premium fabric blend",
      "Elegant design elements",
      "Comfortable fit",
      "Professional appearance"
    ],
    images: [
      { src: "/images/products/hospitality/hotel-1.jpg", alt: "Front desk staff uniforms" },
      { src: "/images/products/hospitality/hotel-2.jpg", alt: "Concierge uniform" },
      { src: "/images/products/hospitality/hotel-3.jpg", alt: "Female hospitality staff uniform" }
    ],
    colors: [
      { name: "Gold Accent", value: "#d4ac0d", image: "/images/products/hospitality/hotel-gold.jpg" },
      { name: "Rich Burgundy", value: "#7b241c", image: "/images/products/hospitality/hotel-burgundy.jpg" },
      { name: "Royal Black", value: "#1c2833", image: "/images/products/hospitality/hotel-black.jpg" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    fabricDetails: {
      composition: "75% Polyester, 23% Viscose, 2% Elastane",
      gsm: "200",
      features: ["Stain-resistant", "Easy-care", "Premium feel"]
    },
    customizationOptions: [
      "Hotel logo embroidery",
      "Department color coding",
      "Name badges",
      "Custom accessories",
      "Modest design options"
    ],
    relatedProducts: ["restaurant-uniform", "concierge-uniform", "housekeeping-uniform"],
    price: "SAR 449",
    minOrder: 12,
    href: "/shop/hospitality-attire/luxury-hotel-uniform"
  }
];

// Helper function to get product by ID
export function getProductById(id: string) {
  return products.find(product => product.id === id);
}

// Helper function to get products by category
export function getProductsByCategory(category: string) {
  return products.filter(product => product.category === category);
}

// Helper function to get products by industry
export function getProductsByIndustry(industry: string) {
  return products.filter(product => product.industry === industry);
}