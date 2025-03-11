'use client';

import React, { useState } from 'react';

interface SizeChartModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  sizes?: {
    size: string;
    chest: string;
    waist: string;
    hips: string;
    [key: string]: string;
  }[];
}

const SizeChartModal: React.FC<SizeChartModalProps> = ({
  isOpen,
  onClose,
  title = 'Size Chart',
  sizes = [
    { size: 'S', chest: '36-38"', waist: '30-32"', hips: '36-38"' },
    { size: 'M', chest: '38-40"', waist: '32-34"', hips: '38-40"' },
    { size: 'L', chest: '40-42"', waist: '34-36"', hips: '40-42"' },
    { size: 'XL', chest: '42-44"', waist: '36-38"', hips: '42-44"' },
    { size: '2XL', chest: '44-46"', waist: '38-40"', hips: '44-46"' },
  ]
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-auto">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold">{title}</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">Size</th>
                <th className="border p-2 text-left">Chest</th>
                <th className="border p-2 text-left">Waist</th>
                <th className="border p-2 text-left">Hips</th>
              </tr>
            </thead>
            <tbody>
              {sizes.map((size, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="border p-2">{size.size}</td>
                  <td className="border p-2">{size.chest}</td>
                  <td className="border p-2">{size.waist}</td>
                  <td className="border p-2">{size.hips}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-6 text-sm text-gray-600">
            <p>Note: These measurements are approximate. For the best fit, we recommend taking your own measurements and comparing them to the size chart.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeChartModal; 