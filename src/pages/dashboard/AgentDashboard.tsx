
import React, { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Calendar, Clock, MapPin, CheckCircle, XCircle, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const AgentDashboard = () => {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

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

  // Mock data for assigned tasks
  const assignedTasks = [
    {
      id: 1,
      customerName: 'John Smith',
      serviceType: 'Parcel Delivery',
      date: 'May 10, 2023',
      time: '10:00 AM - 12:00 PM',
      location: '123 Main St, New York, NY',
      status: 'assigned'
    },
    {
      id: 2,
      customerName: 'Sarah Johnson',
      serviceType: 'Airport Pickup',
      date: 'May 15, 2023',
      time: '2:30 PM - 4:00 PM',
      location: 'JFK Airport, Terminal 4',
      status: 'in-progress'
    },
    {
      id: 3,
      customerName: 'Michael Brown',
      serviceType: 'Student Pickup',
      date: 'May 18, 2023',
      time: '9:00 AM - 11:00 AM',
      location: 'Columbia University, 116th St',
      status: 'assigned'
    }
  ];

  // Mock data for performance metrics
  const performanceMetrics = {
    completedTasks: 12,
    onTimeDelivery: '95%',
    customerRating: '4.8',
    totalHours: '36'
  };

  const acceptTask = (taskId: number) => {
    toast.success('Task accepted successfully');
    // In a real app, we would update the task status in the database
  };

  const declineTask = (taskId: number) => {
    toast.info('Task declined');
    // In a real app, we would update the task status in the database
  };

  return (
    <DashboardLayout userType="agent" userName={profile?.full_name}>
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-brendor-600"></div>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Welcome section */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800">Welcome back, {profile?.full_name || 'Agent'}</h2>
            <p className="text-gray-600 mt-1">Here's your current performance and assigned tasks</p>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-brendor-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-brendor-100 text-brendor-700">
                    <CheckCircle size={20} />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-600">Completed Tasks</p>
                    <p className="text-xl font-bold">{performanceMetrics.completedTasks}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-brendor-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-brendor-100 text-brendor-700">
                    <Clock size={20} />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-600">On-Time Rate</p>
                    <p className="text-xl font-bold">{performanceMetrics.onTimeDelivery}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-brendor-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-brendor-100 text-brendor-700">
                    <User size={20} />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-600">Customer Rating</p>
                    <p className="text-xl font-bold">{performanceMetrics.customerRating}/5.0</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-brendor-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-brendor-100 text-brendor-700">
                    <Clock size={20} />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-600">Hours This Week</p>
                    <p className="text-xl font-bold">{performanceMetrics.totalHours}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Assigned tasks */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Your Assigned Tasks</h3>
            
            {assignedTasks.length > 0 ? (
              <div className="space-y-4">
                {assignedTasks.map((task) => (
                  <div key={task.id} className="border border-gray-200 p-4 rounded-lg hover:border-brendor-300 transition">
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                      <div>
                        <div className="flex items-center">
                          <h4 className="font-medium text-gray-800">{task.serviceType}</h4>
                          <span className={`ml-2 inline-block px-2 py-1 text-xs font-medium rounded-full ${
                            task.status === 'assigned' 
                              ? 'bg-blue-100 text-blue-800' 
                              : 'bg-green-100 text-green-800'
                          }`}>
                            {task.status === 'assigned' ? 'Assigned' : 'In Progress'}
                          </span>
                        </div>
                        
                        <p className="text-sm text-gray-600 mt-1">
                          <span className="font-medium">Customer:</span> {task.customerName}
                        </p>
                        
                        <div className="mt-2 flex flex-col sm:flex-row sm:items-center text-sm text-gray-600 space-y-1 sm:space-y-0 sm:space-x-4">
                          <div className="flex items-center">
                            <Calendar size={14} className="mr-2 text-gray-400" />
                            {task.date}
                          </div>
                          <div className="flex items-center">
                            <Clock size={14} className="mr-2 text-gray-400" />
                            {task.time}
                          </div>
                          <div className="flex items-center">
                            <MapPin size={14} className="mr-2 text-gray-400" />
                            {task.location}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 sm:mt-0 flex items-center space-x-2">
                        {task.status === 'assigned' && (
                          <>
                            <Button 
                              variant="outline" 
                              className="border-red-300 text-red-600 hover:bg-red-50"
                              size="sm"
                              onClick={() => declineTask(task.id)}
                            >
                              <XCircle size={14} className="mr-1" />
                              Decline
                            </Button>
                            <Button 
                              className="bg-brendor-600 hover:bg-brendor-700"
                              size="sm"
                              onClick={() => acceptTask(task.id)}
                            >
                              <CheckCircle size={14} className="mr-1" />
                              Accept
                            </Button>
                          </>
                        )}
                        
                        {task.status === 'in-progress' && (
                          <Button 
                            className="bg-green-600 hover:bg-green-700"
                            size="sm"
                          >
                            <CheckCircle size={14} className="mr-1" />
                            Mark Complete
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No tasks assigned to you yet</p>
              </div>
            )}
          </div>
          
          {/* Schedule section */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Your Schedule</h3>
              <Button variant="outline" className="border-brendor-300 text-brendor-700 hover:bg-brendor-50">
                View Full Calendar
              </Button>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <p className="text-center text-gray-600">Your schedule for the week will appear here</p>
              <p className="text-center text-sm text-gray-500 mt-2">Coming soon: Calendar integration</p>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default AgentDashboard;
