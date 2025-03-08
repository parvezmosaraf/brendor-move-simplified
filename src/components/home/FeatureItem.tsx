
import React from 'react';

interface FeatureItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-md">
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brendor-50 text-brendor-600 mb-4">
      <Icon size={20} />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default FeatureItem;
