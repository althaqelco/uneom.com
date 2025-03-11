import React from 'react';

interface SizeSelectorProps {
  sizes: string[];
  selectedSize: string;
  onChange: (size: string) => void;
}

const SizeSelector: React.FC<SizeSelectorProps> = ({ sizes, selectedSize, onChange }) => {
  return (
    <div className="grid grid-cols-7 gap-2">
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => onChange(size)}
          className={`py-2 border rounded-md ${
            selectedSize === size
              ? 'bg-primary-50 border-primary-500 text-primary-700'
              : 'border-neutral-200 text-neutral-700 hover:border-neutral-300'
          }`}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizeSelector; 