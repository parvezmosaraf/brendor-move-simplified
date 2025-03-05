
import React from 'react';
import { Truck, Plane, Users, ArrowRight, PackageCheck, MapPin, Clock, Shield, Zap } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features,
  linkTo 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
  features: string[];
  linkTo: string;
}) => (
  <div className="service-card group bg-white rounded-2xl border border-gray-100 shadow-sm p-8 transition-all duration-300 hover:shadow-md animate-fade-up">
    <div className="inline-flex p-4 rounded-xl bg-brendor-50 text-brendor-600 mb-6">
      <Icon size={30} />
    </div>
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600 mb-6">{description}</p>
    
    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <span className="mr-3 text-green-500">
            <PackageCheck size={18} />
          </span>
          <span className="text-gray-700">{feature}</span>
        </li>
      ))}
    </ul>
    
    <Link to={linkTo} className="inline-flex items-center text-brendor-600 font-medium hover:text-brendor-800 transition-colors">
      Learn More <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
    </Link>
  </div>
);

const FeatureItem = ({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) => (
  <div className="flex flex-col p-6 bg-white rounded-xl shadow-sm border border-gray-100">
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brendor-50 text-brendor-600 mb-4">
      <Icon size={20} />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ProcessStep = ({ number, title, description }: { number: number; title: string; description: string }) => (
  <div className="flex">
    <div className="mr-6">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brendor-100 text-brendor-700 font-bold text-xl">
        {number}
      </div>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const ExploreServices = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 bg-gradient-to-b from-brendor-50/50 to-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[30%] -right-[10%] w-[500px] h-[500px] rounded-full bg-brendor-100/60 blur-3xl"></div>
          <div className="absolute top-[50%] -left-[10%] w-[300px] h-[300px] rounded-full bg-brendor-50/60 blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Moving Services</h1>
            <p className="text-xl text-gray-700 mb-8">
              Explore our comprehensive range of moving solutions designed to meet your specific needs with reliability and care.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#parcel-delivery" className="px-6 py-2 bg-brendor-50 text-brendor-700 rounded-full hover:bg-brendor-100 transition-colors">
                Parcel Delivery
              </a>
              <a href="#airport-pickup" className="px-6 py-2 bg-brendor-50 text-brendor-700 rounded-full hover:bg-brendor-100 transition-colors">
                Airport Pickup
              </a>
              <a href="#student-pickup" className="px-6 py-2 bg-brendor-50 text-brendor-700 rounded-full hover:bg-brendor-100 transition-colors">
                Student Pickup
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div id="parcel-delivery" className="mb-20 scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 animate-fade-up">
                <h2 className="text-3xl font-bold mb-6">Parcel Delivery</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our parcel delivery service offers fast, secure, and reliable transportation of your packages, with real-time tracking capabilities so you always know where your items are.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-green-100 text-green-600 mr-4">
                      <PackageCheck size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Customized to Your Needs</h3>
                      <p className="text-gray-600">Whether it's a small package or large parcels, we handle all sizes with care.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-green-100 text-green-600 mr-4">
                      <Zap size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Express Delivery Options</h3>
                      <p className="text-gray-600">When time is critical, our expedited delivery ensures your package arrives on schedule.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-green-100 text-green-600 mr-4">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Accurate Pricing</h3>
                      <p className="text-gray-600">Our pricing is based on package weight and distance for complete transparency.</p>
                    </div>
                  </div>
                </div>
                
                <Link to="/service/parcel-delivery">
                  <Button className="bg-gradient-to-r from-brendor-500 to-brendor-700 text-white hover:from-brendor-600 hover:to-brendor-800">
                    Book Parcel Delivery
                  </Button>
                </Link>
              </div>
              
              <div className="order-1 lg:order-2 relative animate-fade-in">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-brendor-100 to-brendor-200 transform rotate-3 scale-105"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Parcel delivery service" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div id="airport-pickup" className="mb-20 scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative animate-fade-in">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-brendor-100 to-brendor-200 transform -rotate-3 scale-105"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Airport pickup service" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="animate-fade-up">
                <h2 className="text-3xl font-bold mb-6">Airport Pickup</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Arrive at your destination stress-free with our airport pickup service. We ensure punctual pickups and comfortable transportation from the airport to your desired location.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-green-100 text-green-600 mr-4">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Punctual Service</h3>
                      <p className="text-gray-600">We monitor flight schedules to ensure we're there when you arrive, even if your flight is delayed.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-green-100 text-green-600 mr-4">
                      <Shield size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Safety First</h3>
                      <p className="text-gray-600">Travel with peace of mind knowing our drivers are vetted, trained professionals.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-green-100 text-green-600 mr-4">
                      <Users size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Group Accommodations</h3>
                      <p className="text-gray-600">Whether traveling solo or with a group, we have vehicles to accommodate all party sizes.</p>
                    </div>
                  </div>
                </div>
                
                <Link to="/service/airport-pickup">
                  <Button className="bg-gradient-to-r from-brendor-500 to-brendor-700 text-white hover:from-brendor-600 hover:to-brendor-800">
                    Schedule Airport Pickup
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div id="student-pickup" className="scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 animate-fade-up">
                <h2 className="text-3xl font-bold mb-6">Student Pickup</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our specialized student pickup service is designed to help students relocate with ease. We understand student budgets and offer affordable rates without compromising on service quality.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-green-100 text-green-600 mr-4">
                      <Truck size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Vehicle Options</h3>
                      <p className="text-gray-600">Choose from a range of vehicle types based on your moving needs and budget.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-green-100 text-green-600 mr-4">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Campus Familiarity</h3>
                      <p className="text-gray-600">Our drivers are familiar with major university campuses and dorm locations.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-green-100 text-green-600 mr-4">
                      <Zap size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Special Student Rates</h3>
                      <p className="text-gray-600">Exclusive discounts for students with valid ID, making moving affordable.</p>
                    </div>
                  </div>
                </div>
                
                <Link to="/service/student-pickup">
                  <Button className="bg-gradient-to-r from-brendor-500 to-brendor-700 text-white hover:from-brendor-600 hover:to-brendor-800">
                    Book Student Moving
                  </Button>
                </Link>
              </div>
              
              <div className="order-1 lg:order-2 relative animate-fade-in">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-brendor-100 to-brendor-200 transform rotate-3 scale-105"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Student pickup service" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Why Choose Our Services</h2>
            <p className="text-xl text-gray-600">
              Benefit from our commitment to excellence across all our moving solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureItem 
              icon={Clock}
              title="Timely Delivery"
              description="We understand the importance of punctuality and strive to deliver on-time, every time."
            />
            <FeatureItem 
              icon={Shield}
              title="Secure Handling"
              description="Your possessions are treated with the utmost care and security throughout transit."
            />
            <FeatureItem 
              icon={Zap}
              title="Efficient Process"
              description="Our streamlined booking and delivery process saves you time and hassle."
            />
            <FeatureItem 
              icon={MapPin}
              title="Live Tracking"
              description="Track your delivery in real-time through our intuitive mobile application."
            />
            <FeatureItem 
              icon={PackageCheck}
              title="Insurance Coverage"
              description="Peace of mind with comprehensive insurance coverage for all items in transit."
            />
            <FeatureItem 
              icon={Users}
              title="Expert Team"
              description="Our professional staff is trained to handle all types of moving scenarios."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">How It Works</h2>
            <p className="text-xl text-gray-600">
              Our simple process makes booking and using our services a breeze
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-12">
            <ProcessStep 
              number={1}
              title="Select Your Service"
              description="Choose from our range of moving services - Parcel Delivery, Airport Pickup, or Student Pickup."
            />
            <ProcessStep 
              number={2}
              title="Book Online"
              description="Enter your location details, preferred date and time, and any specific requirements."
            />
            <ProcessStep 
              number={3}
              title="Get a Quote"
              description="Receive an instant, transparent price quote based on your service selection and details."
            />
            <ProcessStep 
              number={4}
              title="Confirm Booking"
              description="Review your details, make payment securely, and receive booking confirmation."
            />
            <ProcessStep 
              number={5}
              title="Track Real-Time"
              description="Follow your delivery or pickup in real-time through our mobile app or website."
            />
          </div>
        </div>
      </section>

      {/* Compare Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Compare Our Services</h2>
            <p className="text-xl text-gray-600">
              Find the perfect moving solution for your specific needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <ServiceCard 
              icon={Truck}
              title="Parcel Delivery"
              description="Fast and secure delivery of your packages with real-time tracking."
              features={[
                "Delivery of small to large packages",
                "Weight-based pricing",
                "Express delivery option",
                "Insurance coverage",
                "Real-time tracking"
              ]}
              linkTo="/service/parcel-delivery"
            />
            <ServiceCard 
              icon={Plane}
              title="Airport Pickup"
              description="Comfortable transportation from the airport to your desired destination."
              features={[
                "Flight monitoring",
                "Door-to-door service",
                "Multiple vehicle options",
                "Professional drivers",
                "Group accommodations"
              ]}
              linkTo="/service/airport-pickup"
            />
            <ServiceCard 
              icon={Users}
              title="Student Pickup"
              description="Specialized moving service for students with affordable rates."
              features={[
                "Student discounts",
                "Vehicle type selection",
                "Campus familiarity",
                "Flexible scheduling",
                "Help with moving in/out"
              ]}
              linkTo="/service/student-pickup"
            />
          </div>
          
          <div className="text-center">
            <p className="text-lg mb-6">
              Not sure which service is right for you? We're happy to help!
            </p>
            <Link to="/contact">
              <Button variant="outline" className="border-brendor-300 text-brendor-700 hover:bg-brendor-50">
                Contact Us For Advice
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brendor-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Moving?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Book your service today and experience the BrendorMoving difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/pricing">
              <Button className="bg-white text-brendor-700 hover:bg-gray-100">
                View Pricing
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ExploreServices;
