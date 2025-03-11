// Fix for src/app/shop/aviation-uniforms/airline-service-vest/page.tsx

// Original product object had missing name and price properties required by the AddToQuoteButton component
// Here is the fix:

const product = {
  id: 'airline-service-vest',
  name: 'Airline Service Vest', // Added missing name property
  price: "320", // Added missing price property
  basePrice: "320",
  rating: 4.8,
  reviews: 39,
  inStock: true,
  minOrder: 25,
  leadTime: '14-18 days',
  customization: true,
  // other properties...
}; 