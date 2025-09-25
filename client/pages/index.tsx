import React from 'react';
import Layout from '@/components/Layout/Layout';
import Hero from '@/components/Home/Hero';
import ServicesPreview from '@/components/Home/ServicesPreview';
import TestimonialsCarousel from '@/components/Home/TestimonialsCarousel';
import PortfolioPreview from '@/components/Home/PortfolioPreview';
import ContactCTA from '@/components/Home/ContactCTA';
import Stats from '@/components/Home/Stats';

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <Stats />
      <ServicesPreview />
      <PortfolioPreview />
      <TestimonialsCarousel />
      <ContactCTA />
    </Layout>
  );
};

export default HomePage;

