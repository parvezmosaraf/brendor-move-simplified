
import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">What Our Customers Say</h2>
          <p className="text-xl text-gray-600">
            Read testimonials from our satisfied customers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="BrendorMoving made my relocation stress-free! Their student pickup service was affordable and their team was very professional."
            author="Sarah Johnson"
            role="University Student"
          />
          <TestimonialCard 
            quote="I've been using their parcel delivery service for my online business, and they've never disappointed. Fast, reliable, and great customer service!"
            author="Mark Williams"
            role="Business Owner"
          />
          <TestimonialCard 
            quote="After a long flight, their airport pickup service was exactly what I needed. The driver was on time and the ride was comfortable."
            author="James Peterson"
            role="Business Traveler"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
