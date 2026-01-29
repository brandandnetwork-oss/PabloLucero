
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center grayscale opacity-70"
        style={{ backgroundImage: 'url(/fondo-top.png)' }}
      />
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#121212]/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/60 via-transparent to-transparent" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl space-y-8">

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] uppercase">
            Coach Triatlón
          </h1>
          <h3 className="font-display text-5xl md:text-7xl font-black leading-[0.9] uppercase">
            Run.Club
          </h3>

          <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
            Unete al club y entrena con nosotros para alcanzar tus metas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              to="/join-club"
              className="flex items-center justify-center gap-2 bg-[#0095ff] hover:bg-[#0084e6] text-white px-8 py-4 rounded-lg font-bold transition-all group"
            >
              Unete al club
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <button
              onClick={() => {
                const element = document.getElementById('about');
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop - 80,
                    behavior: 'smooth'
                  });
                }
              }}
              className="flex items-center justify-center bg-transparent border border-white/20 hover:bg-white/5 text-white px-8 py-4 rounded-lg font-bold transition-all"
            >
              Conocer a Pablo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
