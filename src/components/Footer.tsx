
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 pt-16 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-brendor-400 to-brendor-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brendor-600 to-brendor-800">
                BrendorMoving
              </span>
            </Link>
            <p className="text-gray-600 max-w-xs">
              Professional moving services for parcel delivery, airport pickup, and student relocation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brendor-500 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brendor-500 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brendor-500 transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/service/parcel-delivery" className="text-gray-600 hover:text-brendor-600 transition">
                  Parcel Delivery
                </Link>
              </li>
              <li>
                <Link to="/service/airport-pickup" className="text-gray-600 hover:text-brendor-600 transition">
                  Airport Pickup
                </Link>
              </li>
              <li>
                <Link to="/service/student-pickup" className="text-gray-600 hover:text-brendor-600 transition">
                  Student Pickup
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 hover:text-brendor-600 transition">
                  Pricing & Rates
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-brendor-600 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-brendor-600 transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:text-brendor-600 transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-brendor-600 transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-brendor-500 mt-1 flex-shrink-0" />
                <span className="text-gray-600">
                  123 Moving Street, Transport City, TC 10010
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-brendor-500 flex-shrink-0" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-brendor-500 flex-shrink-0" />
                <span className="text-gray-600">contact@brendormoving.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} BrendorMoving. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <Link to="/terms" className="text-gray-500 hover:text-brendor-600 text-sm">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-gray-500 hover:text-brendor-600 text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className="text-gray-500 hover:text-brendor-600 text-sm">
                    Cookies Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
