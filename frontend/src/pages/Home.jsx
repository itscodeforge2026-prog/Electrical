import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import ServicesPreview from '../components/ServicesPreview';

const Home = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      <Hero />
      <WhyChooseUs />
      <ServicesPreview />
    </div>
  );
};

export default Home;
