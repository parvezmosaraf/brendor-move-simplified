
import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Plane, Users, ArrowRight, CheckCircle, Clock, Award, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import { useIsMobile } from '@/hooks/use-mobile';

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  linkTo 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  linkTo: string;
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

const FeatureItem = ({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) => (
  <div className="flex flex-col items-center text-center p-6 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-md">
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brendor-50 text-brendor-600 mb-4">
      <Icon size={20} />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const StepCard = ({ number, title, description }: { number: number; title: string; description: string }) => (
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

const TestimonialCard = ({ quote, author, role }: { quote: string; author: string; role: string }) => (
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

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <Layout>
      {/* Hero Section */}
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

      {/* Services Section */}
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

      {/* How It Works Section */}
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

      {/* Features Section */}
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

      {/* Testimonials Section */}
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

      {/* CTA Section */}
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
    </Layout>
  );
};

export default Index;
