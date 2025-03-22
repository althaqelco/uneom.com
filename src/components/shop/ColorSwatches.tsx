import React from 'react';
import ColorSwatch from './ColorSwatch';

interface Color {
  name: string;
  value: string;
  inStock?: boolean;
}

interface ColorSwatchesProps {
  colors: Color[];
  selectedColor: string | null;
  onChange: (color: string) => void;
}

const ColorSwatches: React.FC<ColorSwatchesProps> = ({ 
  colors, 
  selectedColor, 
  onChange 
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      {colors.map((color) => (
        <ColorSwatch
          key={color.name}
          color={color}
          selected={selectedColor === color.name}
          onClick={() => onChange(color.name)}
        />
      ))}
    </div>
  );
};

export default ColorSwatches; 