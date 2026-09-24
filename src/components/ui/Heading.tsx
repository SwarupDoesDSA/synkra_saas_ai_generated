import React from 'react';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps {
  level: HeadingLevel;
  children: React.ReactNode;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({ level, children, className = '' }) => {
  const Component = level === 'h1' ? 'h1' : level === 'h2' ? 'h2' : level === 'h3' ? 'h3' : level === 'h4' ? 'h4' : level === 'h5' ? 'h5' : 'h6';

  return (
    <Component className={`heading-${level} ${className}`}>
      {children}
    </Component>
  );
};
