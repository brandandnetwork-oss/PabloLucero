
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=2000" 
          alt="Athlete Training" 
          className="w-full h-full object-cover grayscale opacity-50"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl space-y-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#0095ff] animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase text-gray-300">Aceptando nuevos atletas</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] uppercase">
            Entrenador Personal <span className="text-[#0095ff]">&</span> <br />
            Coach de Triatlón
          </h1>

          <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
            High-performance coaching for athletes who demand results. Supera tus límites con un enfoque basado en ciencia y pasión.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="flex items-center justify-center gap-2 bg-[#0095ff] hover:bg-[#0084e6] text-white px-8 py-4 rounded-lg font-bold transition-all group">
              Ver Programas
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <button className="flex items-center justify-center bg-transparent border border-white/20 hover:bg-white/5 text-white px-8 py-4 rounded-lg font-bold transition-all">
              Conocer a Pablo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
