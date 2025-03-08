
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <section className="py-20 bg-brendor-600 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8">
            Book your moving service today and experience the BrendorMoving difference
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup">
              <Button className="bg-white text-brendor-700 hover:bg-gray-100 px-8 py-6 h-auto text-base">
                Sign Up
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 h-auto text-base">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
