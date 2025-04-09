import React from 'react';
import RangeSlider from '../ui/RangeSlider';

interface PriceRangeSelectorProps {
  minPrice: number;
  maxPrice: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
  currency?: string;
  isRTL?: boolean;
  className?: string;
}

const PriceRangeSelector: React.FC<PriceRangeSelectorProps> = ({
  minPrice,
  maxPrice,
  step = 100,
  value,
  onChange,
  currency = 'ريال',
  isRTL = false,
  className = '',
}) => {
  return (
    <div className={className}>
      <h3 className={`text-sm font-medium text-neutral-900 ${isRTL ? 'text-right' : 'text-left'} mb-2`}>
        {isRTL ? 'السعر' : 'Price'}
      </h3>
      
      <RangeSlider
        min={minPrice}
        max={maxPrice}
        step={step}
        value={value}
        onChange={onChange}
        valuePrefix={isRTL ? `${currency} ` : ''}
        valueSuffix={isRTL ? '' : ` ${currency}`}
        isRTL={isRTL}
      />
      
      <div className="flex justify-between mt-1 text-xs text-gray-500">
        <span>{isRTL ? `${currency} ${minPrice}` : `${minPrice} ${currency}`}</span>
        <span>{isRTL ? `${currency} ${maxPrice}` : `${maxPrice} ${currency}`}</span>
      </div>
    </div>
  );
};

export default PriceRangeSelector; 