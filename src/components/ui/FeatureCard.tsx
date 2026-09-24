import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, className = '' }) => {
  return (
    <div className={`feature-card ${className}`}>
      <h4 className="feature-card-title">{title}</h4>
      <p className="feature-card-description">{description}</p>
    </div>
  );
};
