// src/components/FeatureCard.tsx
import React from 'react';
import { IconType } from 'react-icons';

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="feature-card p-6 rounded-lg shadow-lg bg-glass transform transition-transform hover:scale-105 hover:shadow-teal-500/50">
      <div className="flex items-center justify-center mb-4 text-teal-500">
        <Icon className="w-12 h-12" />
      </div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default FeatureCard;
