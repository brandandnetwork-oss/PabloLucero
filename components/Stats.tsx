
import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="bg-[#1a1a1a] border-y border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2">
              <span className="font-display text-4xl md:text-5xl font-black text-white tracking-tighter">{stat.value}</span>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#0095ff] font-bold">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
