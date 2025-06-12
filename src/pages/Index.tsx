
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Schedule from '@/components/Schedule';
import Standings from '@/components/Standings';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Schedule />
      <Standings />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Index;
