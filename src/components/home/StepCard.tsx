
import React from 'react';

interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description }) => (
  <div className="relative pl-12 pb-8 md:pl-0 md:pb-0">
    {/* Line connector (only on desktop) */}
    <div className="hidden md:block absolute top-10 left-[50%] h-0.5 bg-brendor-200 w-full"></div>
    
    {/* Circle with number */}
    <div className="absolute left-0 md:static md:mb-6 flex justify-center">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brendor-500 text-white font-bold text-lg">
        {number}
      </div>
    </div>
    
    <div className="md:text-center">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default StepCard;
