
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from "sonner";
import Layout from '@/components/Layout';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('customer');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulated login - will be replaced with actual auth
      setTimeout(() => {
        toast.success("Login successful!");
        
        // Redirect based on user type
        if (userType === 'customer') {
          navigate('/customer/dashboard');
        } else {
          navigate('/agent/dashboard');
        }
        
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      setIsLoading(false);
      toast.error("Login failed. Please check your credentials.");
      console.error(error);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen pt-28 pb-16 flex items-center justify-center">
        <div className="container px-6">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brendor-50 rounded-full blur-3xl opacity-70"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brendor-50 rounded-full blur-3xl opacity-70"></div>
              
              <div className="relative glass-card rounded-3xl p-8 md:p-10 shadow-lg animate-scale-in">
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
                  <p className="text-gray-600">Sign in to your BrendorMoving account</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="h-12 rounded-xl"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="password">Password</Label>
                      <Link to="/forgot-password" className="text-sm text-brendor-600 hover:text-brendor-800">
                        Forgot password?
                      </Link>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      required
                      className="h-12 rounded-xl"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <Label>Login as</Label>
                    <RadioGroup
                      defaultValue="customer"
                      value={userType}
                      onValueChange={setUserType}
                      className="flex space-x-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="customer" id="customer" />
                        <Label htmlFor="customer" className="cursor-pointer">Customer</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="agent" id="agent" />
                        <Label htmlFor="agent" className="cursor-pointer">Agent</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-gradient-to-r from-brendor-500 to-brendor-700 text-white hover:from-brendor-600 hover:to-brendor-800 rounded-xl"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Signing in...
                      </span>
                    ) : (
                      <span>Sign In</span>
                    )}
                  </Button>
                </form>
                
                <div className="mt-6 text-center">
                  <p className="text-gray-600">
                    Don't have an account?{' '}
                    <Link to="/signup" className="text-brendor-600 hover:text-brendor-800 font-medium">
                      Sign up
                    </Link>
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex flex-col space-y-3">
                    <h3 className="text-sm font-medium text-center text-gray-500">Helpful links</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <Link to="/help" className="flex items-center justify-center p-2 rounded-lg hover:bg-gray-50 text-gray-700">
                        Help Center
                      </Link>
                      <Link to="/contact" className="flex items-center justify-center p-2 rounded-lg hover:bg-gray-50 text-gray-700">
                        Contact Support
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
