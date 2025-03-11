# Fix for Vercel Deployment Error

## Issue
There was a type error in the file `src/app/shop/aviation-uniforms/airline-service-vest/page.tsx` that was causing the build to fail on Vercel. The error was:

```
Type error: Type '{ id: string; basePrice: string; rating: number; reviews: number; inStock: boolean; minOrder: number; leadTime: string; customization: boolean; images: { src: string; alt: string; }[]; colors: { name: string; value: string; }[]; sizes: string[]; relatedProducts: { ...; }[]; }' is missing the following properties from type 'Product': name, price
```

## Fix
The problem was that the `product` object being passed to the `AddToQuoteButton` component was missing the `name` and `price` properties that are required by the `Product` type defined in the `AddToQuoteButton` component.

The fix was to add these missing properties to the `product` object:

```javascript
const product = {
  id: 'airline-service-vest',
  name: 'Airline Service Vest', // Added missing name property
  price: "320", // Added missing price property
  basePrice: "320",
  rating: 4.8,
  // other properties...
};
```

This ensures that the `product` object matches the `Product` type expected by the `AddToQuoteButton` component. 