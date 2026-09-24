import React from 'react';

interface ColorSwatchProps {
  color: string;
  hex: string;
  label: string;
}

export const ColorSwatch: React.FC<ColorSwatchProps> = ({ color, hex, label }) => {
  return (
    <div className="color-swatch">
      <div className="swatch-preview" style={{ backgroundColor: color }} />
      <div className="swatch-info">
        <span className="swatch-hex">{hex}</span>
        <span className="swatch-label">{label}</span>
      </div>
    </div>
  );
};
