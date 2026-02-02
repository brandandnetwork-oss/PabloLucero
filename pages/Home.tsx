
import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Services from '../components/Services';
import TrustedBrands from '../components/TrustedBrands';
import ZivaBanner from '../components/ZivaBanner';
import RunClub from '../components/RunClub';

const Home: React.FC = () => {
    return (
        <>
            <div id="home">
                <Hero />
            </div>
            <Stats />
            <div id="about">
                <About />
            </div>
            <Services />
            <TrustedBrands />
            <ZivaBanner />
            <RunClub />
        </>
    );
};

export default Home;
