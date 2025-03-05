
import React, { useState } from 'react';
import { Check, Info, DollarSign, Scale, Truck, Plane, Users, HelpCircle } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Define toggle type
type PricingToggle = 'parcel' | 'airport' | 'student';

// Pricing Feature Component
const PricingFeature = ({ feature, included = true }: { feature: string; included?: boolean }) => (
  <div className="flex items-center py-3">
    <div className="mr-3">
      {included ? (
        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
          <Check size={12} className="text-green-600" />
        </div>
      ) : (
        <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
          <span className="text-gray-400 text-xs">-</span>
        </div>
      )}
    </div>
    <span className={`text-sm ${included ? 'text-gray-700' : 'text-gray-400'}`}>{feature}</span>
  </div>
);

// Pricing Card Component
const PricingCard = ({ 
  title, 
  description, 
  price, 
  unit, 
  features, 
  popular = false,
  serviceType,
}: { 
  title: string; 
  description: string; 
  price: string | React.ReactNode;
  unit: string;
  features: { feature: string; included: boolean }[];
  popular?: boolean;
  serviceType: string;
}) => (
  <div className={`relative rounded-2xl border ${popular ? 'border-brendor-300 shadow-md' : 'border-gray-200'} bg-white p-6 transition-all`}>
    {popular && (
      <div className="absolute -top-4 left-0 right-0 mx-auto w-32 rounded-full bg-brendor-500 py-1 text-center text-sm font-medium text-white">
        Most Popular
      </div>
    )}
    
    <div className="mb-5">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-500 mt-2 text-sm">{description}</p>
    </div>
    
    <div className="mb-6">
      <div className="flex items-baseline">
        <span className="text-3xl font-bold">{price}</span>
        <span className="text-gray-500 ml-1">{unit}</span>
      </div>
    </div>
    
    <div className="space-y-1 mb-8">
      {features.map((item, i) => (
        <PricingFeature key={i} feature={item.feature} included={item.included} />
      ))}
    </div>
    
    <Link to={`/service/${serviceType}`} className="block">
      <Button className={`w-full ${popular ? 'bg-brendor-600 hover:bg-brendor-700' : 'bg-brendor-500 hover:bg-brendor-600'} text-white`}>
        Choose Plan
      </Button>
    </Link>
  </div>
);

// FAQ Item Component
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 py-5">
      <button
        className="flex w-full items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{question}</span>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="mt-3 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const Pricing = () => {
  const [activeToggle, setActiveToggle] = useState<PricingToggle>('parcel');

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-brendor-50/50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-700 mb-8">
              Choose from our range of affordable moving services with no hidden fees or surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Toggle Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-brendor-50 p-2 rounded-xl flex justify-center">
              <div className="grid grid-cols-3 w-full max-w-lg">
                <button
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    activeToggle === 'parcel' ? 'bg-white shadow-sm text-brendor-700' : 'text-gray-600 hover:text-brendor-600'
                  }`}
                  onClick={() => setActiveToggle('parcel')}
                >
                  Parcel Delivery
                </button>
                <button
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    activeToggle === 'airport' ? 'bg-white shadow-sm text-brendor-700' : 'text-gray-600 hover:text-brendor-600'
                  }`}
                  onClick={() => setActiveToggle('airport')}
                >
                  Airport Pickup
                </button>
                <button
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    activeToggle === 'student' ? 'bg-white shadow-sm text-brendor-700' : 'text-gray-600 hover:text-brendor-600'
                  }`}
                  onClick={() => setActiveToggle('student')}
                >
                  Student Pickup
                </button>
              </div>
            </div>
          </div>

          {/* Parcel Delivery Pricing */}
          {activeToggle === 'parcel' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <PricingCard
                title="Standard Delivery"
                description="Best for non-urgent small to medium parcels"
                price={
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="flex items-baseline">
                        $2.50
                        <HelpCircle size={16} className="ml-1 text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="w-[200px] text-sm">Base rate per mile plus weight charge</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                }
                unit="/mile + weight"
                features={[
                  { feature: "1-3 business days delivery", included: true },
                  { feature: "Up to 50 lbs packages", included: true },
                  { feature: "Real-time tracking", included: true },
                  { feature: "Basic insurance coverage", included: true },
                  { feature: "Signature confirmation", included: false },
                  { feature: "Priority handling", included: false }
                ]}
                serviceType="parcel-delivery"
              />
              <PricingCard
                title="Express Delivery"
                description="Perfect for time-sensitive deliveries"
                price={
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="flex items-baseline">
                        $3.75
                        <HelpCircle size={16} className="ml-1 text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="w-[200px] text-sm">Base rate per mile plus weight charge</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                }
                unit="/mile + weight"
                features={[
                  { feature: "Same-day or next-day delivery", included: true },
                  { feature: "Up to 50 lbs packages", included: true },
                  { feature: "Real-time tracking", included: true },
                  { feature: "Enhanced insurance coverage", included: true },
                  { feature: "Signature confirmation", included: true },
                  { feature: "Priority handling", included: false }
                ]}
                popular={true}
                serviceType="parcel-delivery"
              />
              <PricingCard
                title="Premium Delivery"
                description="For valuable or oversized items requiring special care"
                price={
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="flex items-baseline">
                        $5.00
                        <HelpCircle size={16} className="ml-1 text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="w-[200px] text-sm">Base rate per mile plus weight charge</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                }
                unit="/mile + weight"
                features={[
                  { feature: "Same-day or scheduled delivery", included: true },
                  { feature: "Up to 100 lbs packages", included: true },
                  { feature: "Real-time tracking", included: true },
                  { feature: "Premium insurance coverage", included: true },
                  { feature: "Signature confirmation", included: true },
                  { feature: "Priority handling", included: true }
                ]}
                serviceType="parcel-delivery"
              />
            </div>
          )}

          {/* Airport Pickup Pricing */}
          {activeToggle === 'airport' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <PricingCard
                title="Standard Pickup"
                description="Comfortable ride for individuals or small groups"
                price={
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="flex items-baseline">
                        $3.00
                        <HelpCircle size={16} className="ml-1 text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="w-[200px] text-sm">Base rate per mile plus per person fee</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                }
                unit="/mile + person"
                features={[
                  { feature: "Sedan or small SUV", included: true },
                  { feature: "Flight monitoring", included: true },
                  { feature: "Up to 2 passengers", included: true },
                  { feature: "Standard luggage allowance", included: true },
                  { feature: "Water bottles included", included: false },
                  { feature: "Meet & greet service", included: false }
                ]}
                serviceType="airport-pickup"
              />
              <PricingCard
                title="Business Pickup"
                description="Enhanced comfort for business travelers"
                price={
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="flex items-baseline">
                        $4.50
                        <HelpCircle size={16} className="ml-1 text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="w-[200px] text-sm">Base rate per mile plus per person fee</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                }
                unit="/mile + person"
                features={[
                  { feature: "Luxury sedan or SUV", included: true },
                  { feature: "Flight monitoring", included: true },
                  { feature: "Up to 4 passengers", included: true },
                  { feature: "Extended luggage allowance", included: true },
                  { feature: "Complimentary refreshments", included: true },
                  { feature: "Meet & greet service", included: false }
                ]}
                popular={true}
                serviceType="airport-pickup"
              />
              <PricingCard
                title="Group Pickup"
                description="Spacious vehicles for larger groups or families"
                price={
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="flex items-baseline">
                        $6.00
                        <HelpCircle size={16} className="ml-1 text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="w-[200px] text-sm">Base rate per mile plus per person fee</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                }
                unit="/mile + person"
                features={[
                  { feature: "Van or large SUV", included: true },
                  { feature: "Flight monitoring", included: true },
                  { feature: "Up to 8 passengers", included: true },
                  { feature: "Extended luggage allowance", included: true },
                  { feature: "Complimentary refreshments", included: true },
                  { feature: "Meet & greet service", included: true }
                ]}
                serviceType="airport-pickup"
              />
            </div>
          )}

          {/* Student Pickup Pricing */}
          {activeToggle === 'student' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <PricingCard
                title="Economy Student"
                description="Budget-friendly option for light movers"
                price={
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="flex items-baseline">
                        $2.50
                        <HelpCircle size={16} className="ml-1 text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="w-[200px] text-sm">Base rate per mile plus vehicle charge</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                }
                unit="/mile + car type"
                features={[
                  { feature: "Compact vehicle", included: true },
                  { feature: "Basic moving assistance", included: true },
                  { feature: "10% student discount", included: true },
                  { feature: "Basic insurance", included: true },
                  { feature: "Extra helping hands", included: false },
                  { feature: "Moving supplies included", included: false }
                ]}
                serviceType="student-pickup"
              />
              <PricingCard
                title="Standard Student"
                description="Our most popular student moving option"
                price={
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="flex items-baseline">
                        $3.50
                        <HelpCircle size={16} className="ml-1 text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="w-[200px] text-sm">Base rate per mile plus vehicle charge</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                }
                unit="/mile + car type"
                features={[
                  { feature: "Midsize vehicle or small van", included: true },
                  { feature: "Full moving assistance", included: true },
                  { feature: "15% student discount", included: true },
                  { feature: "Standard insurance", included: true },
                  { feature: "Extra helping hands", included: true },
                  { feature: "Moving supplies included", included: false }
                ]}
                popular={true}
                serviceType="student-pickup"
              />
              <PricingCard
                title="Premium Student"
                description="Full-service moving solution for students"
                price={
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="flex items-baseline">
                        $5.00
                        <HelpCircle size={16} className="ml-1 text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="w-[200px] text-sm">Base rate per mile plus vehicle charge</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                }
                unit="/mile + car type"
                features={[
                  { feature: "Large van or small truck", included: true },
                  { feature: "Premium moving assistance", included: true },
                  { feature: "20% student discount", included: true },
                  { feature: "Premium insurance", included: true },
                  { feature: "Extra helping hands", included: true },
                  { feature: "Moving supplies included", included: true }
                ]}
                serviceType="student-pickup"
              />
            </div>
          )}
        </div>
      </section>

      {/* Additional Costs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Additional Pricing Information</h2>
            <p className="text-lg text-gray-600">
              Transparent breakdown of calculation factors and additional service fees
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="mb-4 p-3 rounded-full bg-brendor-50 text-brendor-600 inline-block">
                <DollarSign size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Base Pricing Factors</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">•</span>
                  <span>Distance (calculated in miles)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">•</span>
                  <span>Service type selection</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">•</span>
                  <span>Time of day (rush hour adjustments)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">•</span>
                  <span>Day of week (weekend premium)</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="mb-4 p-3 rounded-full bg-brendor-50 text-brendor-600 inline-block">
                <Scale size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Parcel Weight Pricing</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">•</span>
                  <span>0-10 lbs: No additional charge</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">•</span>
                  <span>11-25 lbs: +$5 flat fee</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">•</span>
                  <span>26-50 lbs: +$15 flat fee</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">•</span>
                  <span>51-100 lbs: +$30 flat fee</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">•</span>
                  <span>100+ lbs: Custom quote</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="mb-4 p-3 rounded-full bg-brendor-50 text-brendor-600 inline-block">
                <Truck size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Additional Services</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">•</span>
                  <span>Express handling: +25%</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">•</span>
                  <span>Fragile item handling: +$10</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">•</span>
                  <span>Extra insurance: +$5 per $500 value</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">•</span>
                  <span>Furniture disassembly/assembly: $25/item</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">•</span>
                  <span>Additional helper: $20/hour</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-brendor-50 rounded-2xl p-8 md:p-12 text-center flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Get an Exact Quote for Your Move</h2>
            <p className="text-lg text-gray-700 mb-8">
              Use our detailed calculator to get a precise price for your specific moving needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/service/parcel-delivery">
                <Button className="bg-brendor-600 text-white hover:bg-brendor-700 min-w-[180px]">
                  Parcel Calculator
                </Button>
              </Link>
              <Link to="/service/airport-pickup">
                <Button className="bg-brendor-600 text-white hover:bg-brendor-700 min-w-[180px]">
                  Airport Calculator
                </Button>
              </Link>
              <Link to="/service/student-pickup">
                <Button className="bg-brendor-600 text-white hover:bg-brendor-700 min-w-[180px]">
                  Student Calculator
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our pricing and services
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <FAQItem 
              question="How do you calculate the distance for pricing?"
              answer="We calculate the distance using the most efficient route between your pickup location and destination. This is determined using our mapping technology which takes into account current traffic conditions and road closures."
            />
            <FAQItem 
              question="Are there any hidden fees I should be aware of?"
              answer="No, we pride ourselves on transparent pricing. The quote you receive includes all standard service fees. Additional services like express handling or special item care will be clearly itemized if selected."
            />
            <FAQItem 
              question="Do you offer any discounts?"
              answer="Yes, we offer several discounts including student discounts with valid ID, first-time customer discounts, and loyalty discounts for returning customers. We also run seasonal promotions throughout the year."
            />
            <FAQItem 
              question="How accurate is the price quote I receive online?"
              answer="Our online quotes are highly accurate as they use real-time distance calculations and current pricing. However, final pricing may vary slightly if details change (like package weight or additional services) at the time of pickup."
            />
            <FAQItem 
              question="What payment methods do you accept?"
              answer="We accept all major credit cards, digital payment methods (PayPal, Apple Pay, Google Pay), and ACH bank transfers. For corporate accounts, we also offer invoicing options with net-30 terms."
            />
            <FAQItem 
              question="Is tipping expected or included in the price?"
              answer="Tipping is not included in our pricing and is completely at your discretion. Our team members always appreciate recognition for excellent service, but it is never required or expected."
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-brendor-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Book Your Service?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Sign up now and get 10% off your first booking with code WELCOME10
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/signup">
              <Button className="bg-white text-brendor-700 hover:bg-gray-100 px-8 py-6 h-auto text-base">
                Create Account
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 h-auto text-base">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
