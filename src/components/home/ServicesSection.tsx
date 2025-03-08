
import React from 'react';
import { Truck, Plane, Users } from 'lucide-react';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">Our Premium Moving Services</h2>
          <p className="text-xl text-gray-600">
            Choose from our range of specialized moving services designed to meet your specific needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            icon={Truck}
            title="Parcel Delivery"
            description="Fast and secure delivery of your packages with real-time tracking"
            linkTo="/service/parcel-delivery"
          />
          <ServiceCard 
            icon={Plane}
            title="Airport Pickup"
            description="Comfortable transportation from the airport to your desired destination"
            linkTo="/service/airport-pickup"
          />
          <ServiceCard 
            icon={Users}
            title="Student Pickup"
            description="Specialized moving service for students with affordable rates"
            linkTo="/service/student-pickup"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
