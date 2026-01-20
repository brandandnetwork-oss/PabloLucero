
import React from 'react';

const Corporate: React.FC = () => {
  return (
    <section className="py-24 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#1a1a1a] rounded-3xl p-12 md:p-20 relative overflow-hidden border border-white/5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0095ff]/5 blur-3xl rounded-full" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-sm font-bold tracking-widest text-[#0095ff] uppercase">Wellness Corporativo</span>
                <h2 className="font-display text-4xl md:text-5xl font-black uppercase leading-tight">
                  Corporate Wellness <br />& Performance
                </h2>
              </div>
              
              <p className="text-lg text-gray-400 leading-relaxed">
                Elevate your team's potential through elite physical conditioning. 
                Merging executive performance with triathlon discipline.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition-all">
                  Contactar Ventas
                </button>
                <button className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">
                  Saber Más
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: 'trending_down', title: 'Valor', text: 'Reduce costes de salud a largo plazo.' },
                { icon: 'sentiment_satisfied', title: 'Satisfacción', text: 'Mejora la moral y retención del equipo.' },
                { icon: 'bolt', title: 'Productividad', text: 'Aumenta el enfoque y energía diaria.' },
                { icon: 'groups', title: 'Cohesión', text: 'Fortalece lazos mediante el esfuerzo.' }
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-3">
                   <div className="w-10 h-10 rounded-lg bg-[#0095ff]/20 flex items-center justify-center text-[#0095ff]">
                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 10V3L4 14H11V21L20 10H13Z" />
                     </svg>
                   </div>
                   <h4 className="font-bold text-white uppercase tracking-wide text-sm">{item.title}</h4>
                   <p className="text-xs text-gray-500 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Corporate;
