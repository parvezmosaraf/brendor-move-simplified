
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaSection from '@/components/home/CtaSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CtaSection />
    </Layout>
  );
};

export default Index;
