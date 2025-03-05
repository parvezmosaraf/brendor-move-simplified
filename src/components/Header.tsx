
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-10',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-brendor-400 to-brendor-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brendor-600 to-brendor-800">
              BrendorMoving
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground/80 hover:text-brendor-600 transition">
              Home
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1 text-foreground/80 hover:text-brendor-600 transition">
                Services <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50">
                <div className="glass-card rounded-xl shadow-lg p-3 space-y-1">
                  <Link to="/service/parcel-delivery" className="block px-4 py-2 text-sm hover:bg-brendor-50 rounded-lg transition">
                    Parcel Delivery
                  </Link>
                  <Link to="/service/airport-pickup" className="block px-4 py-2 text-sm hover:bg-brendor-50 rounded-lg transition">
                    Airport Pickup
                  </Link>
                  <Link to="/service/student-pickup" className="block px-4 py-2 text-sm hover:bg-brendor-50 rounded-lg transition">
                    Student Pickup
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/about" className="text-foreground/80 hover:text-brendor-600 transition">
              About
            </Link>
            <Link to="/contact" className="text-foreground/80 hover:text-brendor-600 transition">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" className="border-brendor-300 text-brendor-700 hover:bg-brendor-50">
                Log In
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-gradient-to-r from-brendor-500 to-brendor-700 text-white hover:from-brendor-600 hover:to-brendor-800 transition-all duration-300">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-white/95 backdrop-blur-md z-40">
          <div className="container p-6 space-y-6">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-lg font-medium p-2 hover:bg-brendor-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <div className="border-t border-gray-100 pt-2">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Services</h3>
                <Link 
                  to="/service/parcel-delivery" 
                  className="block py-2 pl-4 text-foreground/80 hover:text-brendor-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Parcel Delivery
                </Link>
                <Link 
                  to="/service/airport-pickup" 
                  className="block py-2 pl-4 text-foreground/80 hover:text-brendor-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Airport Pickup
                </Link>
                <Link 
                  to="/service/student-pickup" 
                  className="block py-2 pl-4 text-foreground/80 hover:text-brendor-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Student Pickup
                </Link>
              </div>
              <Link 
                to="/about" 
                className="text-lg font-medium p-2 hover:bg-brendor-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-lg font-medium p-2 hover:bg-brendor-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
            <div className="flex flex-col space-y-4 pt-4 border-t border-gray-100">
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full border-brendor-300 text-brendor-700 hover:bg-brendor-50">
                  Log In
                </Button>
              </Link>
              <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-brendor-500 to-brendor-700 text-white hover:from-brendor-600 hover:to-brendor-800">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
