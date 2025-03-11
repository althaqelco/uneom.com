import React from 'react';
import Image from 'next/image';

interface CustomizationOption {
  name: string;
  description: string;
  image?: string;
}

interface CustomizationOptionsProps {
  options: CustomizationOption[];
  title?: string;
}

const CustomizationOptions: React.FC<CustomizationOptionsProps> = ({ 
  options,
  title = "Customization Options"
}) => {
  return (
    <div className="space-y-6">
      {title && (
        <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
      )}
      <p className="text-neutral-700">
        Enhance your product with these customization options to perfectly match your requirements:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {options.map((option, index) => (
          <div key={index} className="flex items-start space-x-4">
            {option.image && (
              <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-100">
                <Image
                  src={option.image}
                  alt={option.name}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
            )}
            <div>
              <h4 className="font-medium text-neutral-900">{option.name}</h4>
              <p className="text-sm text-neutral-600 mt-1">{option.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomizationOptions; 