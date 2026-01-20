
import React from 'react';
import { PROGRAMS } from '../constants';

const Programs: React.FC = () => {
  return (
    <section className="py-24 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-4 mb-12">
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight">Elige tu camino</h2>
          <p className="text-gray-400">Programas especializados para individuos y organizaciones.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROGRAMS.map((program) => (
            <div key={program.title} className="group relative h-[450px] rounded-2xl overflow-hidden border border-white/5">
              <img
                src={program.image}
                alt={program.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />

              <div className="relative z-20 h-full p-10 flex flex-col justify-end gap-4">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#0095ff] uppercase">{program.tag}</span>
                <h3 className="font-display text-3xl font-bold text-white uppercase">{program.title}</h3>
                <p className="text-gray-300 leading-relaxed max-w-sm">
                  {program.description}
                </p>
                {program.href ? (
                  <a
                    href={program.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-4 bg-white/10 hover:bg-[#0095ff] text-white py-4 rounded-xl font-bold transition-all backdrop-blur-sm border border-white/10 text-center"
                  >
                    {program.cta}
                  </a>
                ) : (
                  <button className="w-full mt-4 bg-white/10 hover:bg-[#0095ff] text-white py-4 rounded-xl font-bold transition-all backdrop-blur-sm border border-white/10">
                    {program.cta}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
