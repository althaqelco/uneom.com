import React from 'react';
import RangeSlider from '../ui/RangeSlider';

interface SizeRangeSelectorProps {
  minSize: number;
  maxSize: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
  unit?: string;
  sizeLabels?: string[];
  isRTL?: boolean;
  className?: string;
}

const SizeRangeSelector: React.FC<SizeRangeSelectorProps> = ({
  minSize,
  maxSize,
  step = 1,
  value,
  onChange,
  unit = '',
  sizeLabels = [],
  isRTL = false,
  className = '',
}) => {
  // استخدام الفهرس المناسب للقيمة الحالية من مصفوفة التسميات إن وجدت
  const getSizeLabel = (val: number) => {
    if (sizeLabels.length > 0) {
      const index = Math.round((val - minSize) / step);
      return index >= 0 && index < sizeLabels.length ? sizeLabels[index] : val.toString();
    }
    return val.toString();
  };

  return (
    <div className={className}>
      <h3 className={`text-sm font-medium text-neutral-900 ${isRTL ? 'text-right' : 'text-left'} mb-2`}>
        {isRTL ? 'المقاس' : 'Size'}
      </h3>
      
      <RangeSlider
        min={minSize}
        max={maxSize}
        step={step}
        value={value}
        onChange={onChange}
        valuePrefix=""
        valueSuffix={sizeLabels.length > 0 ? ` (${getSizeLabel(value)})` : unit}
        isRTL={isRTL}
      />
      
      <div className="flex justify-between mt-1 text-xs text-gray-500">
        {isRTL ? (
          <>
            <span>{getSizeLabel(minSize)}{unit}</span>
            <span>{getSizeLabel(maxSize)}{unit}</span>
          </>
        ) : (
          <>
            <span>{getSizeLabel(minSize)}{unit}</span>
            <span>{getSizeLabel(maxSize)}{unit}</span>
          </>
        )}
      </div>
    </div>
  );
};

export default SizeRangeSelector; 