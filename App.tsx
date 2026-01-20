
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import TrustedBrands from './components/TrustedBrands';
import ZivaBanner from './components/ZivaBanner';
import Programs from './components/Programs';
import Corporate from './components/Corporate';
import RunClub from './components/RunClub';
import Footer from './components/Footer';
import Assistant from './components/Assistant';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen selection:bg-[#0095ff] selection:text-white">
      <Navbar scrolled={scrolled} />
      <main>
        <div id="home">
          <Hero />
        </div>
        <Stats />
        <div id="about">
          <About />
        </div>
        
        {/* Nueva sección de empresas aliadas */}
        <TrustedBrands />

        {/* Banner solicitado: Equipamiento/Ziva */}
        <ZivaBanner />

        <div id="services">
          <Programs />
          <Corporate />
        </div>
        <RunClub />
      </main>
      <Footer id="contact" />
      <Assistant />
    </div>
  );
};

export default App;
