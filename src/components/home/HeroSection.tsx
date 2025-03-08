
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 hero-gradient overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[500px] h-[500px] rounded-full bg-brendor-100/60 blur-3xl"></div>
        <div className="absolute top-[50%] -left-[10%] w-[300px] h-[300px] rounded-full bg-brendor-50/60 blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up">
              Your Reliable Partner for <span className="text-brendor-600">Moving Services</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up animate-delay-1">
              Fast, safe and affordable moving solutions for parcel delivery, airport pickup and student relocation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-fade-up animate-delay-2">
              <Link to="/services">
                <Button className="btn-gradient text-white px-8 py-6 h-auto text-base">
                  Explore Services
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="btn-outline px-8 py-6 h-auto text-base">
                  Contact Us
                </Button>
              </Link>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8 animate-fade-up animate-delay-3">
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle className="text-green-500" size={18} />
                <span className="text-sm">Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle className="text-green-500" size={18} />
                <span className="text-sm">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle className="text-green-500" size={18} />
                <span className="text-sm">Affordable Rates</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative animate-fade-in animate-delay-2">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-brendor-100 to-brendor-200 transform rotate-3 scale-105"></div>
              <div className="relative glass-card rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1629760946220-5693ee4c46ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Moving service" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
