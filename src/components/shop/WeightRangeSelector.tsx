import React from 'react';
import RangeSlider from '../ui/RangeSlider';

interface WeightRangeSelectorProps {
  minWeight: number;
  maxWeight: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
  unit?: string;
  isRTL?: boolean;
  className?: string;
}

const WeightRangeSelector: React.FC<WeightRangeSelectorProps> = ({
  minWeight,
  maxWeight,
  step = 1,
  value,
  onChange,
  unit = 'كجم',
  isRTL = false,
  className = ''}) => {
  return (
    <div className={className}>
      <h3 className={`text-sm font-medium text-neutral-900 ${isRTL ? 'text-right' : 'text-left'} mb-2`}>
        {isRTL ? 'الوزن' : 'Weight'}
      </h3>
      
      <RangeSlider
        min={minWeight}
        max={maxWeight}
        step={step}
        value={value}
        onChange={onChange}
        valueSuffix={` ${unit}`}
        isRTL={isRTL}
      />
      
      <div className="flex justify-between mt-1 text-xs text-gray-500">
        <span>{isRTL ? minWeight : maxWeight}{unit}</span>
        <span>{isRTL ? maxWeight : minWeight}{unit}</span>
      </div>
    </div>
  );
};

export default WeightRangeSelector; 