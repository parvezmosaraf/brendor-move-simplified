
import React, { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Car, Calendar, Clock, MapPin, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const CustomerDashboard = () => {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getProfile = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        
        if (user) {
          const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .single();
            
          if (error) throw error;
          setProfile(data);
        }
      } catch (error) {
        console.error('Error loading user data:', error);
        toast.error('Failed to load your profile data');
      } finally {
        setLoading(false);
      }
    };

    getProfile();
  }, []);

  // Function to navigate to service selection page
  const handleBookNewService = () => {
    navigate('/services');
  };

  // Mock data for upcoming bookings
  const upcomingBookings = [
    {
      id: 1,
      serviceType: 'Parcel Delivery',
      date: 'May 10, 2023',
      time: '10:00 AM - 12:00 PM',
      location: '123 Main St, New York, NY',
      status: 'confirmed'
    },
    {
      id: 2,
      serviceType: 'Airport Pickup',
      date: 'May 15, 2023',
      time: '2:30 PM - 4:00 PM',
      location: 'JFK Airport, Terminal 4',
      status: 'pending'
    }
  ];

  // Mock data for service recommendations
  const serviceRecommendations = [
    {
      id: 1,
      title: 'Student Pickup',
      description: 'Special discount for student pickups this month!',
      icon: Car
    },
    {
      id: 2,
      title: 'Package Delivery',
      description: 'Fast and reliable package delivery services',
      icon: Car
    },
    {
      id: 3,
      title: 'Airport Transfer',
      description: 'Comfortable rides to and from any airport',
      icon: Car
    }
  ];

  return (
    <DashboardLayout userType="customer" userName={profile?.full_name}>
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-brendor-600"></div>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Welcome section */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800">Welcome back, {profile?.full_name || 'User'}</h2>
            <p className="text-gray-600 mt-1">Here's what's happening with your moving services</p>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-brendor-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-brendor-100 text-brendor-700">
                    <Calendar size={20} />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-600">Upcoming Services</p>
                    <p className="text-xl font-bold">{upcomingBookings.length}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-brendor-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-brendor-100 text-brendor-700">
                    <Clock size={20} />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-600">Completed Services</p>
                    <p className="text-xl font-bold">8</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-brendor-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-brendor-100 text-brendor-700">
                    <MapPin size={20} />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-600">Saved Locations</p>
                    <p className="text-xl font-bold">3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Upcoming bookings */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Upcoming Bookings</h3>
              <Button 
                className="bg-brendor-600 hover:bg-brendor-700"
                onClick={handleBookNewService}
              >
                <PlusCircle size={16} className="mr-2" />
                Book New Service
              </Button>
            </div>
            
            {upcomingBookings.length > 0 ? (
              <div className="space-y-4">
                {upcomingBookings.map((booking) => (
                  <div key={booking.id} className="border border-gray-200 p-4 rounded-lg hover:border-brendor-300 transition">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-medium text-gray-800">{booking.serviceType}</h4>
                        <div className="mt-2 flex flex-col sm:flex-row sm:items-center text-sm text-gray-600 space-y-1 sm:space-y-0 sm:space-x-4">
                          <div className="flex items-center">
                            <Calendar size={14} className="mr-2 text-gray-400" />
                            {booking.date}
                          </div>
                          <div className="flex items-center">
                            <Clock size={14} className="mr-2 text-gray-400" />
                            {booking.time}
                          </div>
                          <div className="flex items-center">
                            <MapPin size={14} className="mr-2 text-gray-400" />
                            {booking.location}
                          </div>
                        </div>
                      </div>
                      <div>
                        <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                          booking.status === 'confirmed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {booking.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No upcoming bookings</p>
                <Button 
                  className="mt-4 bg-brendor-600 hover:bg-brendor-700"
                  onClick={handleBookNewService}
                >
                  Book Your First Service
                </Button>
              </div>
            )}
          </div>
          
          {/* Service recommendations */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Recommended Services</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {serviceRecommendations.map((service) => (
                <div 
                  key={service.id} 
                  className="border border-gray-200 p-4 rounded-lg hover:bg-brendor-50 transition cursor-pointer"
                  onClick={handleBookNewService}
                >
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-brendor-100 text-brendor-700">
                      <service.icon size={16} />
                    </div>
                    <div className="ml-3">
                      <h4 className="font-medium text-gray-800">{service.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default CustomerDashboard;
