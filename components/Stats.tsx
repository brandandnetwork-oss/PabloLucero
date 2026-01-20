
import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="bg-[#1a1a1a] border-y border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-display text-4xl font-bold text-white tracking-tight">{stat.value}</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
