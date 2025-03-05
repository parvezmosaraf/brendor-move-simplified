
import React from 'react';
import { Users, Award, Heart, Clock, Truck, Shield } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Team Member Component
const TeamMember = ({ name, role, photo }: { name: string; role: string; photo: string }) => (
  <div className="flex flex-col items-center">
    <div className="w-48 h-48 mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
      <img 
        src={photo} 
        alt={name} 
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="text-xl font-bold">{name}</h3>
    <p className="text-brendor-600">{role}</p>
  </div>
);

// Value Item Component
const ValueItem = ({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) => (
  <div className="flex flex-col items-center text-center p-6 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-md bg-brendor-50/30">
    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-brendor-100 text-brendor-600 mb-4">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-gradient-to-b from-brendor-50/50 to-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12 text-center lg:text-left mb-10 lg:mb-0 animate-fade-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About BrendorMoving</h1>
              <p className="text-xl text-gray-700 mb-6">
                We're on a mission to revolutionize the moving industry by providing exceptional service with transparency, reliability and care.
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
                <span className="px-4 py-2 bg-brendor-100 text-brendor-700 rounded-full text-sm font-medium">Established 2015</span>
                <span className="px-4 py-2 bg-brendor-100 text-brendor-700 rounded-full text-sm font-medium">5,000+ Happy Customers</span>
                <span className="px-4 py-2 bg-brendor-100 text-brendor-700 rounded-full text-sm font-medium">Nationwide Service</span>
              </div>
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-brendor-500 to-brendor-700 text-white hover:from-brendor-600 hover:to-brendor-800">
                  Get in Touch
                </Button>
              </Link>
            </div>
            <div className="lg:w-1/2 relative animate-fade-in animate-delay-1">
              <div className="relative w-full max-w-lg mx-auto">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-brendor-100 to-brendor-200 transform rotate-2 scale-105"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Our team" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-xl text-gray-600 mb-8">
              BrendorMoving started as a small family business in 2015 with just two trucks and a commitment to reliable service. Today, we're proud to have grown into a nationwide moving company while maintaining our core values.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg bg-brendor-50 text-center">
                <h3 className="text-3xl font-bold text-brendor-700 mb-2">2015</h3>
                <p className="text-gray-700">Founded in San Francisco with a vision to transform moving services</p>
              </div>
              <div className="p-6 rounded-lg bg-brendor-50 text-center">
                <h3 className="text-3xl font-bold text-brendor-700 mb-2">2019</h3>
                <p className="text-gray-700">Expanded services to 12 major cities across the United States</p>
              </div>
              <div className="p-6 rounded-lg bg-brendor-50 text-center">
                <h3 className="text-3xl font-bold text-brendor-700 mb-2">2023</h3>
                <p className="text-gray-700">Launched innovative digital platform for real-time tracking and booking</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative animate-fade-in">
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1486611367184-17759508999c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Our mission" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-6 animate-fade-up animate-delay-1">
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  Our mission is to provide stress-free moving experiences through reliable service, transparent pricing, and innovative technology. We believe moving shouldn't be a burden, but a smooth transition to your next chapter.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  We aim to be the most trusted name in moving services nationwide, known for our exceptional customer care, technological innovation, and commitment to sustainability in all our operations.
                </p>
              </div>
              <div className="pt-4">
                <h4 className="font-semibold text-lg mb-3">What sets us apart:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">✓</span>
                    <span>Transparent pricing with no hidden fees</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">✓</span>
                    <span>Real-time tracking of your belongings</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">✓</span>
                    <span>Professionally trained moving specialists</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">✓</span>
                    <span>Eco-friendly packing materials</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              These principles guide every action we take and decision we make
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueItem 
              icon={Heart}
              title="Customer First"
              description="We prioritize your needs and satisfaction above all else, ensuring a personalized moving experience."
            />
            <ValueItem 
              icon={Clock}
              title="Reliability"
              description="We value your time and always strive to be punctual and dependable at every stage of the moving process."
            />
            <ValueItem 
              icon={Shield}
              title="Integrity"
              description="We maintain the highest standards of honesty and transparency in all our interactions and pricing."
            />
            <ValueItem 
              icon={Truck}
              title="Excellence"
              description="We continuously improve our processes and training to deliver exceptional service quality."
            />
            <ValueItem 
              icon={Award}
              title="Innovation"
              description="We embrace new technologies and ideas to make your moving experience simpler and more efficient."
            />
            <ValueItem 
              icon={Users}
              title="Community"
              description="We're committed to giving back to the communities we serve through sustainable practices and outreach."
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              The dedicated professionals behind BrendorMoving's success
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
            <TeamMember 
              name="Michael Chen"
              role="Founder & CEO"
              photo="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            />
            <TeamMember 
              name="Sarah Johnson"
              role="Operations Director"
              photo="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            />
            <TeamMember 
              name="David Rodriguez"
              role="Technology Lead"
              photo="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            />
            <TeamMember 
              name="Aisha Williams"
              role="Customer Experience Manager"
              photo="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            />
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/contact">
              <Button variant="outline" className="border-brendor-300 text-brendor-700 hover:bg-brendor-50">
                Join Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brendor-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to experience stress-free moving?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's make your next move the easiest one yet.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/services">
              <Button className="bg-white text-brendor-700 hover:bg-gray-100">
                Explore Our Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
