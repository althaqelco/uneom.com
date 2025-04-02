import React from 'react';

interface Color {
  name: string;
  value: string;
}

interface ColorSwatchProps {
  color?: Color;
  colors?: Color[];
  selected?: boolean;
  selectedColor?: string;
  onClick?: () => void;
  onChange?: (color: string) => void;
}

const ColorSwatch: React.FC<ColorSwatchProps> = (props) => { 
  // Use a safer approach by not destructuring props immediately
  const { 
    color = undefined,
    colors = undefined,
    selected = false,
    selectedColor = '',
    onClick = () => {},
    onChange = () => {}
  } = props || {};

  // Return null if neither color nor colors is provided or if props is undefined
  if (!props || (!color && !colors)) {
    return null;
  }

  // If single color mode and color is valid
  if (color && typeof color === 'object' && 'name' in color && 'value' in color) {
    return (
      <button
        type="button"
        onClick={() => onClick()}
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
  }

  // If multiple colors mode and colors array is valid
  if (Array.isArray(colors) && colors.length > 0) {
    return (
      <div className="flex gap-2">
        {colors.map((c) => (
          <button
            key={c.name}
            type="button"
            onClick={() => onChange(c.name)}
            className={`w-10 h-10 rounded-full flex items-center justify-center ${selectedColor === c.name ? 'ring-2 ring-offset-2 ring-primary-500' : ''}`}
            title={c.name}
          >
            <span className="sr-only">{c.name}</span>
            <span
              className="w-8 h-8 rounded-full border border-neutral-200"
              style={{ backgroundColor: c.value }}
            />
          </button>
        ))}
      </div>
    );
  }

  return null;
};

export default ColorSwatch; 