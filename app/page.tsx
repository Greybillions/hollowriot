import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import React from 'react';
import ShortPortfolio from '@/components/ShortPortfolio';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <ShortPortfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
