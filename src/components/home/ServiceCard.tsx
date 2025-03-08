
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  linkTo: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  linkTo
}) => (
  <div className="service-card group animate-fade-up animate-delay-2">
    <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-brendor-50 opacity-70 group-hover:bg-brendor-100 transition-all duration-500"></div>
    <div className="relative z-10">
      <div className="inline-flex p-3 rounded-xl bg-brendor-50 text-brendor-700 mb-5">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to={linkTo} className="inline-flex items-center text-brendor-600 font-medium hover:text-brendor-800 transition-colors">
        Book Now <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  </div>
);

export default ServiceCard;
