
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, role }) => (
  <div className="p-6 rounded-2xl shadow-sm border border-gray-100 bg-white">
    <p className="text-gray-600 italic mb-5">"{quote}"</p>
    <div className="flex items-center">
      <div className="w-10 h-10 rounded-full bg-brendor-100 flex items-center justify-center text-brendor-600 font-bold">
        {author.charAt(0)}
      </div>
      <div className="ml-3">
        <h4 className="font-medium">{author}</h4>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  </div>
);

export default TestimonialCard;
