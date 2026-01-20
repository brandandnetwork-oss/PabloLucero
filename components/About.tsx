
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-[#121212] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0095ff]/5 rounded-full blur-[120px] -z-0" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight uppercase">
                La Mente Detrás <br />
                <span className="text-gray-500">Del Rendimiento</span>
              </h2>
              <div className="w-16 h-1 bg-[#0095ff]" />
            </div>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Mi filosofía se basa en la disciplina, la ciencia y la consistencia. No se trata solo de entrenar más duro, sino de entrenar más inteligente.
              </p>
              <p>
                Como atleta de Ironman y entrenador certificado, entiendo los desafíos físicos y mentales que enfrentas. Diseño planes que se adaptan a tu vida y maximizan tu potencial.
              </p>
            </div>

            <button className="flex items-center gap-3 text-[#0095ff] font-bold text-lg group">
              Leer biografía completa
              <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 border border-white/10 rounded-2xl group-hover:border-[#0095ff]/30 transition-colors" />
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden grayscale contrast-125 bg-[#1a1a1a]">
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000" 
                alt="Professional Trainer" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
