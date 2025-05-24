'use client';

import React, { useState } from 'react';
import WeightRangeSelector from '@/components/shop/WeightRangeSelector';
import SizeRangeSelector from '@/components/shop/SizeRangeSelector';
import PriceRangeSelector from '@/components/shop/PriceRangeSelector';
import RangeSlider from '@/components/ui/RangeSlider';

export default function ProductSlidersExamplePage() {
  // State for slider values
  const [weight, setWeight] = useState<number>(75);
  const [size, setSize] = useState<number>(42);
  const [price, setPrice] = useState<number>(1500);
  const [customValue, setCustomValue] = useState<number>(50);

  // Size labels for clothing
  const sizeLabels = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'];

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-8">Range Slider Components Example</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-6">Weight Slider</h2>
          <WeightRangeSelector
            minWeight={40}
            maxWeight={120}
            step={1}
            value={weight}
            onChange={setWeight}
            unit="kg"
            isRTL={false}
            className="mb-10"
          />
          
          <div className="mt-4 p-4 bg-gray-50 rounded-md">
            <p className="text-sm text-gray-600">Current value: <span className="font-semibold">{weight} kg</span></p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-6">Size Slider</h2>
          <SizeRangeSelector
            minSize={36}
            maxSize={48}
            step={2}
            value={size}
            onChange={setSize}
            sizeLabels={sizeLabels}
            isRTL={false}
            className="mb-10"
          />
          
          <div className="mt-4 p-4 bg-gray-50 rounded-md">
            <p className="text-sm text-gray-600">Current size: <span className="font-semibold">{size} ({sizeLabels[Math.floor((size - 36) / 2)]})</span></p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-6">Price Slider</h2>
          <PriceRangeSelector
            minPrice={500}
            maxPrice={5000}
            step={100}
            value={price}
            onChange={setPrice}
            currency="SAR"
            isRTL={false}
            className="mb-10"
          />
          
          <div className="mt-4 p-4 bg-gray-50 rounded-md">
            <p className="text-sm text-gray-600">Current price: <span className="font-semibold">{price} SAR</span></p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-6">Generic Range Slider</h2>
          <RangeSlider
            min={0}
            max={100}
            step={5}
            value={customValue}
            onChange={setCustomValue}
            label="Percentage"
            valueSuffix="%"
            isRTL={false}
            className="mb-10"
          />
          
          <div className="mt-4 p-4 bg-gray-50 rounded-md">
            <p className="text-sm text-gray-600">Current value: <span className="font-semibold">{customValue}%</span></p>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-10">
        <h2 className="text-xl font-semibold mb-4">Developer Notes</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>All sliders have both LTR and RTL support.</li>
          <li>The issue with values moving in the opposite direction has been fixed.</li>
          <li>These components can be used in all product pages and filter sections.</li>
          <li>All components work with either <code>dir="ltr"</code> or <code>isRTL={false}</code>.</li>
        </ul>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-6">Usage Example</h2>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
{`// Import the component
import WeightRangeSelector from '@/components/shop/WeightRangeSelector';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Use the component
const [weight, setWeight] = useState(75);

<WeightRangeSelector
  minWeight={40}
  maxWeight={120}
  step={1}
  value={weight}
  onChange={setWeight}
  unit="kg"
  isRTL={false}
/>
`}
        </pre>
      </div>
      
      <div className="flex justify-center mt-10">
        <a 
          href="/ar/shop/examples/product-sliders" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
        >
          View Arabic Version
        </a>
      </div>
    </div>
  );
} 