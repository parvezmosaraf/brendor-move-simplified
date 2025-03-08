
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Home, Menu, X, LogOut, User, Settings, Bell } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

interface DashboardLayoutProps {
  children: React.ReactNode;
  userType: 'customer' | 'agent';
  userName?: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ 
  children, 
  userType,
  userName = ''
}) => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      toast.success('Logged out successfully');
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
      toast.error('Error logging out. Please try again.');
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Define navigation based on user type
  const customerNavigation = [
    { name: 'Dashboard', href: '/customer/dashboard', icon: Home },
    { name: 'Profile', href: '/customer/profile', icon: User },
    { name: 'Bookings', href: '/customer/bookings', icon: Bell },
    { name: 'Settings', href: '/customer/settings', icon: Settings },
  ];

  const agentNavigation = [
    { name: 'Dashboard', href: '/agent/dashboard', icon: Home },
    { name: 'Profile', href: '/agent/profile', icon: User },
    { name: 'Assignments', href: '/agent/assignments', icon: Bell },
    { name: 'Settings', href: '/agent/settings', icon: Settings },
  ];

  const navigation = userType === 'customer' ? customerNavigation : agentNavigation;

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar for desktop */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out md:translate-x-0 md:relative md:shadow-none",
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      )}>
        <div className="flex h-full flex-col px-4 py-8">
          <div className="mb-8 flex items-center justify-between px-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brendor-400 to-brendor-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brendor-600 to-brendor-800">
                BrendorMoving
              </span>
            </div>
            <button 
              className="md:hidden p-1 text-gray-500 hover:text-gray-800"
              onClick={toggleSidebar}
            >
              <X size={20} />
            </button>
          </div>

          <div className="mb-6 px-2">
            <div className="text-sm font-medium text-gray-500">
              Welcome, {userName || 'User'}
            </div>
            <div className="mt-1 text-lg font-semibold capitalize">
              {userType}
            </div>
          </div>

          <nav className="flex-1 space-y-1 px-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-brendor-50 hover:text-brendor-700"
              >
                <item.icon className="mr-3 h-5 w-5 flex-shrink-0 text-gray-500 group-hover:text-brendor-500" />
                {item.name}
              </a>
            ))}
          </nav>

          <div className="mt-6 px-2">
            <Button
              variant="outline"
              className="w-full justify-start text-red-600 hover:bg-red-50 hover:text-red-700 border-red-200"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="bg-white shadow-sm z-10">
          <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <button
              className="md:hidden p-2 rounded-md text-gray-500 hover:bg-gray-100"
              onClick={toggleSidebar}
            >
              <Menu size={20} />
            </button>
            <div className="flex-1 md:ml-8">
              <h1 className="text-lg font-medium capitalize">{userType} Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-1 rounded-full text-gray-500 hover:bg-gray-100">
                <Bell size={20} />
              </button>
              <div className="h-8 w-8 rounded-full bg-brendor-100 flex items-center justify-center text-brendor-600 font-medium">
                {userName ? userName.charAt(0).toUpperCase() : 'U'}
              </div>
            </div>
          </div>
        </header>

        {/* Content area */}
        <main className="flex-1 overflow-auto bg-gray-50 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default DashboardLayout;
