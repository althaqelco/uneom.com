import React from 'react';

interface ColorSwatchProps {
  color: {
    name: string;
    value: string;
  };
  selected: boolean;
  onClick: () => void;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ color, selected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-10 h-10 rounded-full flex items-center justify-center ${selected ? 'ring-2 ring-offset-2 ring-primary-500' : ''}`}
      title={color.name}
    >
      <span className="sr-only">{color.name}</span>
      <span
        className="w-8 h-8 rounded-full border border-neutral-200"
        style={{ backgroundColor: color.value }}
      />
    </button>
  );
};

export default ColorSwatch; 