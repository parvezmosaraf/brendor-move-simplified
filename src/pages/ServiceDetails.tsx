
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Package, Plane, Users, MapPin, CreditCard, ArrowRight, Clock, CheckCircle, AlertCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import Layout from '@/components/Layout';
import { toast } from "sonner";

const services = {
  'parcel-delivery': {
    title: 'Parcel Delivery Service',
    description: 'Fast, reliable, and secure delivery of your packages across the city and beyond.',
    icon: Package,
    priceFormula: 'Distance (km) × $2 + Weight (kg) × $1.5',
    features: [
      'Real-time package tracking',
      'Secure handling of packages',
      'Same-day delivery for local orders',
      'Insurance coverage available',
      'Proof of delivery confirmation'
    ],
    requiresWeight: true,
    requiresPersonCount: false,
    requiresVehicleType: false,
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  'airport-pickup': {
    title: 'Airport Pickup Service',
    description: 'Comfortable and convenient transportation from the airport to your preferred destination.',
    icon: Plane,
    priceFormula: 'Distance (km) × $3 + Number of Passengers × $5',
    features: [
      'Flight tracking for accurate pickup timing',
      'Meet and greet service available',
      'Spacious vehicles for luggage',
      'Professional and courteous drivers',
      '24/7 service availability'
    ],
    requiresWeight: false,
    requiresPersonCount: true,
    requiresVehicleType: false,
    image: 'https://images.unsplash.com/photo-1592495989226-03f88104f8cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
  },
  'student-pickup': {
    title: 'Student Pickup Service',
    description: 'Specialized moving service for students relocating to a new accommodation or campus.',
    icon: Users,
    priceFormula: 'Distance (km) × $2 + Vehicle Type Surcharge',
    features: [
      'Special student discounts available',
      'Assistance with loading and unloading',
      'Multiple vehicle options',
      'Experienced in campus regulations',
      'Weekend and holiday availability'
    ],
    requiresWeight: false,
    requiresPersonCount: false,
    requiresVehicleType: true,
    image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  }
};

const vehicleTypes = [
  { id: 'sedan', name: 'Sedan', surcharge: 10, capacity: 'Up to 2 suitcases' },
  { id: 'suv', name: 'SUV', surcharge: 20, capacity: 'Up to 4 suitcases' },
  { id: 'van', name: 'Van', surcharge: 30, capacity: 'Up to 8 suitcases' }
];

// Time slots for pickup scheduling
const timeSlots = [
  '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
  '06:00 PM', '07:00 PM', '08:00 PM'
];

const ServiceDetails = () => {
  const { serviceType } = useParams<{ serviceType: 'parcel-delivery' | 'airport-pickup' | 'student-pickup' }>();
  const service = serviceType ? services[serviceType] : null;
  
  const [pickupLocation, setPickupLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [distance, setDistance] = useState<number | null>(null);
  const [weight, setWeight] = useState<number | null>(null);
  const [personCount, setPersonCount] = useState<number>(1);
  const [vehicleType, setVehicleType] = useState('sedan');
  const [price, setPrice] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  
  // New state for schedule pickup
  const [scheduleDate, setScheduleDate] = useState<Date | undefined>(undefined);
  const [scheduleTime, setScheduleTime] = useState<string | undefined>(undefined);
  
  if (!service) {
    return (
      <Layout>
        <div className="min-h-screen pt-28 flex items-center justify-center">
          <div className="text-center">
            <AlertCircle className="mx-auto h-12 w-12 text-red-500" />
            <h2 className="mt-4 text-2xl font-bold">Service Not Found</h2>
            <p className="mt-2 text-gray-600">The requested service does not exist.</p>
            <Link to="/">
              <Button className="mt-6">Go Back Home</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
  
  const Icon = service.icon;
  
  const calculateDistance = () => {
    if (!pickupLocation || !destination) {
      toast.error("Please enter both pickup and destination locations");
      return;
    }
    
    setIsCalculating(true);
    
    // Simulate API call for distance calculation
    setTimeout(() => {
      // Random distance between 5 and 30 km
      const calculatedDistance = Math.floor(Math.random() * 26) + 5;
      setDistance(calculatedDistance);
      calculatePrice(calculatedDistance);
      setIsCalculating(false);
    }, 1500);
  };
  
  const calculatePrice = (calculatedDistance: number) => {
    let calculatedPrice = 0;
    
    if (serviceType === 'parcel-delivery' && weight !== null) {
      calculatedPrice = calculatedDistance * 2 + weight * 1.5;
    } else if (serviceType === 'airport-pickup') {
      calculatedPrice = calculatedDistance * 3 + personCount * 5;
    } else if (serviceType === 'student-pickup') {
      const selectedVehicle = vehicleTypes.find(v => v.id === vehicleType);
      const surcharge = selectedVehicle ? selectedVehicle.surcharge : 0;
      calculatedPrice = calculatedDistance * 2 + surcharge;
    }
    
    setPrice(parseFloat(calculatedPrice.toFixed(2)));
  };
  
  const handleBook = () => {
    if (!scheduleDate || !scheduleTime) {
      toast.error("Please select a pickup date and time");
      return;
    }
    
    // This would be connected to actual booking logic
    toast.success(`Booking successful! Your ${service.title} is scheduled for ${format(scheduleDate, 'EEEE, MMMM d, yyyy')} at ${scheduleTime}. An agent will contact you shortly.`);
    
    // Redirect to dashboard would happen here in a real app
    setTimeout(() => {
      window.location.href = '/customer/dashboard';
    }, 2000);
  };
  
  // Determine if the booking button should be disabled
  const isBookingDisabled = !scheduleDate || !scheduleTime || price === null;
  
  return (
    <Layout>
      <div className="min-h-screen pt-28 pb-16">
        <div className="container px-6 mx-auto">
          {/* Hero Section */}
          <div className="relative mb-16 animate-fade-up">
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <div 
                className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'blur(2px)'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
            </div>
            
            <div className="relative py-20 px-8 md:px-12 lg:px-16 text-white">
              <div className="max-w-3xl">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-5">
                  <Icon size={18} />
                  <span>BrendorMoving Service</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-5">{service.title}</h1>
                <p className="text-xl text-white/90 mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-3">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                      <CheckCircle className="text-brendor-300" size={16} />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Booking Form */}
            <div className="lg:col-span-2 space-y-10">
              <div className="glass-card rounded-3xl p-8 animate-fade-up animate-delay-1">
                <h2 className="text-2xl font-bold mb-6">Book Your Service</h2>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2" htmlFor="pickup">
                        Pickup Location
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                        <input
                          id="pickup"
                          type="text"
                          placeholder="Enter pickup address"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-brendor-400 focus:ring focus:ring-brendor-100 transition"
                          value={pickupLocation}
                          onChange={(e) => setPickupLocation(e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2" htmlFor="destination">
                        Destination
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                        <input
                          id="destination"
                          type="text"
                          placeholder="Enter destination address"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-brendor-400 focus:ring focus:ring-brendor-100 transition"
                          value={destination}
                          onChange={(e) => setDestination(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Schedule Pickup Date and Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="block text-sm font-medium mb-2">Pickup Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full pl-3 text-left font-normal border border-gray-200 rounded-xl h-[50px] focus:border-brendor-400 focus:ring focus:ring-brendor-100",
                              !scheduleDate && "text-muted-foreground"
                            )}
                          >
                            {scheduleDate ? (
                              format(scheduleDate, "EEEE, MMMM d, yyyy")
                            ) : (
                              <span>Select pickup date</span>
                            )}
                            <Calendar className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <CalendarComponent
                            mode="single"
                            selected={scheduleDate}
                            onSelect={setScheduleDate}
                            disabled={(date) => date < new Date()}
                            initialFocus
                            className={cn("p-3 pointer-events-auto")}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    <div>
                      <Label className="block text-sm font-medium mb-2">Pickup Time</Label>
                      <select
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brendor-400 focus:ring focus:ring-brendor-100 transition"
                        value={scheduleTime || ""}
                        onChange={(e) => setScheduleTime(e.target.value)}
                      >
                        <option value="" disabled>Select pickup time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  {service.requiresWeight && (
                    <div>
                      <label className="block text-sm font-medium mb-2" htmlFor="weight">
                        Parcel Weight (kg)
                      </label>
                      <input
                        id="weight"
                        type="number"
                        min="0.1"
                        step="0.1"
                        placeholder="Enter parcel weight"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brendor-400 focus:ring focus:ring-brendor-100 transition"
                        value={weight || ''}
                        onChange={(e) => setWeight(parseFloat(e.target.value) || null)}
                      />
                    </div>
                  )}
                  
                  {service.requiresPersonCount && (
                    <div>
                      <label className="block text-sm font-medium mb-2" htmlFor="personCount">
                        Number of Passengers
                      </label>
                      <input
                        id="personCount"
                        type="number"
                        min="1"
                        max="8"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brendor-400 focus:ring focus:ring-brendor-100 transition"
                        value={personCount}
                        onChange={(e) => setPersonCount(parseInt(e.target.value) || 1)}
                      />
                    </div>
                  )}
                  
                  {service.requiresVehicleType && (
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Vehicle Type
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {vehicleTypes.map((vehicle) => (
                          <div 
                            key={vehicle.id}
                            className={`border rounded-xl p-4 cursor-pointer transition-all ${
                              vehicleType === vehicle.id
                                ? 'border-brendor-400 bg-brendor-50 shadow-sm'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                            onClick={() => setVehicleType(vehicle.id)}
                          >
                            <h4 className="font-medium mb-1">{vehicle.name}</h4>
                            <p className="text-xs text-gray-500">{vehicle.capacity}</p>
                            <div className="mt-2 text-sm font-medium text-brendor-600">
                              +${vehicle.surcharge} surcharge
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="pt-2">
                    <Button 
                      onClick={calculateDistance}
                      className="w-full py-6 h-auto bg-gradient-to-r from-brendor-500 to-brendor-700 text-white hover:from-brendor-600 hover:to-brendor-800 rounded-xl"
                      disabled={isCalculating}
                    >
                      {isCalculating ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Calculating...
                        </span>
                      ) : (
                        <span>Calculate Price</span>
                      )}
                    </Button>
                  </div>
                </div>
                
                {distance !== null && price !== null && (
                  <div className="mt-8 pt-6 border-t border-gray-200 animate-fade-up">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="text-xl font-semibold mb-4">Booking Summary</h3>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Distance:</span>
                          <span className="font-medium">{distance} km</span>
                        </div>
                        
                        {scheduleDate && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Pickup Date:</span>
                            <span className="font-medium">{format(scheduleDate, 'EEEE, MMMM d, yyyy')}</span>
                          </div>
                        )}
                        
                        {scheduleTime && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Pickup Time:</span>
                            <span className="font-medium">{scheduleTime}</span>
                          </div>
                        )}
                        
                        {service.requiresWeight && weight !== null && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Parcel Weight:</span>
                            <span className="font-medium">{weight} kg</span>
                          </div>
                        )}
                        
                        {service.requiresPersonCount && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Passengers:</span>
                            <span className="font-medium">{personCount}</span>
                          </div>
                        )}
                        
                        {service.requiresVehicleType && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Vehicle Type:</span>
                            <span className="font-medium">
                              {vehicleTypes.find(v => v.id === vehicleType)?.name}
                            </span>
                          </div>
                        )}
                        
                        <div className="border-t border-gray-200 pt-3 mt-3">
                          <div className="flex justify-between items-center">
                            <span className="text-lg">Total Price:</span>
                            <span className="text-2xl font-bold text-brendor-600">${price}</span>
                          </div>
                        </div>
                      </div>
                      
                      <Button
                        onClick={handleBook}
                        className="w-full mt-6 py-6 h-auto bg-brendor-600 hover:bg-brendor-700 text-white rounded-xl"
                        disabled={isBookingDisabled}
                      >
                        {isBookingDisabled ? 
                          "Please select date and time" : 
                          `Schedule Pickup for ${scheduleDate ? format(scheduleDate, 'MMM d') : ''} at ${scheduleTime || ''}`
                        }
                      </Button>
                      
                      <p className="text-xs text-center text-gray-500 mt-3">
                        By booking, you agree to our terms and conditions
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Service Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="glass-card rounded-3xl p-8 animate-fade-up animate-delay-2">
                <h3 className="text-xl font-bold mb-4">Pricing Information</h3>
                <p className="text-gray-600 mb-4">
                  Our pricing is transparent and calculated based on:
                </p>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="font-medium text-center">{service.priceFormula}</p>
                </div>
                
                <div className="mt-6 space-y-3">
                  <h4 className="font-medium">Additional Information:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <Clock className="text-brendor-500 mt-1 flex-shrink-0" size={16} />
                      <span className="text-sm text-gray-600">
                        Average delivery time: 1-3 hours depending on distance
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CreditCard className="text-brendor-500 mt-1 flex-shrink-0" size={16} />
                      <span className="text-sm text-gray-600">
                        Pay securely online or in cash upon delivery
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="glass-card rounded-3xl p-8 animate-fade-up animate-delay-3">
                <h3 className="text-xl font-bold mb-4">Service Features</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={18} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="glass-card rounded-3xl p-8 animate-fade-up animate-delay-4">
                <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                <p className="text-gray-600 mb-6">
                  Our customer support team is available 24/7 to assist you with any questions.
                </p>
                <Link to="/contact">
                  <Button 
                    variant="outline" 
                    className="w-full border-brendor-300 text-brendor-700 hover:bg-brendor-50"
                  >
                    Contact Support
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServiceDetails;
