
import React from 'react';
import { Clock, Award, Heart, CheckCircle } from 'lucide-react';
import FeatureItem from './FeatureItem';

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">Why Choose BrendorMoving</h2>
          <p className="text-xl text-gray-600">
            Experience the benefits that make us the preferred choice for moving services
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureItem 
            icon={Clock}
            title="Time Saving"
            description="Fast pickups and deliveries to save you valuable time"
          />
          <FeatureItem 
            icon={Award}
            title="Experienced Team"
            description="Professional movers with years of experience"
          />
          <FeatureItem 
            icon={Heart}
            title="Customer Satisfaction"
            description="Your satisfaction is our top priority"
          />
          <FeatureItem 
            icon={CheckCircle}
            title="Reliable Service"
            description="Consistent quality service you can count on"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
