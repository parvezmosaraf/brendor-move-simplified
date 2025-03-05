
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible!",
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our services? Our team is here to help you with anything you need.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-up">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 p-6 rounded-lg border border-gray-100 bg-white shadow-sm">
                <div className="p-3 rounded-full bg-brendor-50 text-brendor-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-500 text-sm mt-1">Mon-Fri, 9AM-6PM</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 rounded-lg border border-gray-100 bg-white shadow-sm">
                <div className="p-3 rounded-full bg-brendor-50 text-brendor-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">info@brendormoving.com</p>
                  <p className="text-gray-500 text-sm mt-1">We reply within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 rounded-lg border border-gray-100 bg-white shadow-sm">
                <div className="p-3 rounded-full bg-brendor-50 text-brendor-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Office</h3>
                  <p className="text-gray-600">123 Moving Lane, Suite 100</p>
                  <p className="text-gray-600">San Francisco, CA 94103</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 rounded-lg border border-gray-100 bg-white shadow-sm">
                <div className="p-3 rounded-full bg-brendor-50 text-brendor-600">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Business Hours</h3>
                  <p className="text-gray-600">Mon-Fri: 9AM-6PM</p>
                  <p className="text-gray-600">Sat: 10AM-4PM</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-brendor-50 text-brendor-600 flex items-center justify-center hover:bg-brendor-100 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-brendor-50 text-brendor-600 flex items-center justify-center hover:bg-brendor-100 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-brendor-50 text-brendor-600 flex items-center justify-center hover:bg-brendor-100 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-brendor-50 text-brendor-600 flex items-center justify-center hover:bg-brendor-100 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 animate-fade-up animate-delay-1">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brendor-500 focus:border-brendor-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brendor-500 focus:border-brendor-500"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brendor-500 focus:border-brendor-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brendor-500 focus:border-brendor-500"
                  required
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full bg-gradient-to-r from-brendor-500 to-brendor-700 text-white hover:from-brendor-600 hover:to-brendor-800">
                Send Message
              </Button>
            </form>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mt-20 animate-fade-up animate-delay-2">
          <h2 className="text-2xl font-bold mb-6">Our Location</h2>
          <div className="w-full h-96 bg-gray-200 rounded-xl overflow-hidden shadow-sm">
            {/* Replace with actual map integration if needed */}
            <div className="w-full h-full flex items-center justify-center bg-brendor-50 text-brendor-600">
              <p className="text-xl">Interactive Map Goes Here</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
