
import React from 'react';
import StepCard from './StepCard';

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">How It Works</h2>
          <p className="text-xl text-gray-600">
            Simple steps to book your moving service with BrendorMoving
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          <StepCard 
            number={1}
            title="Choose Your Service"
            description="Select the type of moving service that best fits your needs"
          />
          <StepCard 
            number={2}
            title="Book Online"
            description="Fill in your details, locations and schedule your pickup time"
          />
          <StepCard 
            number={3}
            title="Track & Receive"
            description="Track your delivery in real-time and receive it at your destination"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
