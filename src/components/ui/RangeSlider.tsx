import React, { useState, useEffect } from 'react';

interface RangeSliderProps {
  min: number;
  max: number;
  step?: number;
  defaultValue?: number;
  value?: number;
  onChange: (value: number) => void;
  label?: string;
  displayValue?: boolean;
  valuePrefix?: string;
  valueSuffix?: string;
  isRTL?: boolean;
  className?: string;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  min,
  max,
  step = 1,
  defaultValue,
  value,
  onChange,
  label,
  displayValue = true,
  valuePrefix = '',
  valueSuffix = '',
  isRTL = false,
  className = '',
}) => {
  // استخدام القيمة المتحكم بها إن وجدت، وإلا استخدام القيمة الافتراضية
  const [internalValue, setInternalValue] = useState<number>(
    value !== undefined ? value : defaultValue !== undefined ? defaultValue : min
  );

  // تحديث القيمة الداخلية عند تغير القيمة من الخارج
  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  // معالجة التغيير على شريط التمرير
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setInternalValue(newValue);
    onChange(newValue);
  };

  // تحويل القيمة الفعلية إلى قيمة العرض لـ RTL
  const getSliderValue = () => {
    if (isRTL) {
      // في حالة RTL، نعكس قيمة الشريط لتتوافق مع الاتجاه
      return max - (internalValue - min);
    }
    return internalValue;
  };

  // تحويل قيمة العرض إلى القيمة الفعلية لـ RTL
  const getRealValue = (displayValue: number) => {
    if (isRTL) {
      // تحويل قيمة الشريط المعكوسة إلى القيمة الحقيقية
      return max - (displayValue - min);
    }
    return displayValue;
  };

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1 dir-auto">
          {label}
        </label>
      )}
      
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <div className="w-full">
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={getSliderValue()}
            onChange={(e) => {
              const displayValue = Number(e.target.value);
              const realValue = getRealValue(displayValue);
              setInternalValue(realValue);
              onChange(realValue);
            }}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
            aria-label={label || `Adjust value from ${min} to ${max}`}
            title={label ? `Adjust ${label.toLowerCase()}` : `Set value between ${min} and ${max}`}
          />
        </div>
        
        {displayValue && (
          <div className={`text-sm font-medium min-w-[60px] text-${isRTL ? 'right' : 'left'}`}>
            {valuePrefix}{internalValue}{valueSuffix}
          </div>
        )}
      </div>
    </div>
  );
};

export default RangeSlider; 