
import React from 'react';

const BRANDS = [
  {
    name: 'Huawei',
    logo: '/assets/images/logo-huawei.png',
    url: 'https://www.huawei.com',
    className: 'h-14 md:h-20'
  },
  {
    name: 'BCMAD',
    logo: '/assets/images/logo-bcnmad.png',
    url: 'https://bcmad.es',
    className: 'h-12 md:h-16'
  },
  {
    name: 'Decimas',
    logo: '/assets/images/logo-decimas.png',
    url: 'https://www.decimas.es',
    className: 'h-8 md:h-12'
  },
  {
    name: 'NDL pro-health',
    logo: '/assets/images/logo-ndl.png',
    url: 'https://ndlprohealth.com',
    className: 'h-12 md:h-16'
  },
  {
    name: 'FDL fitness deluxe',
    logo: '/assets/images/logo-fdl.png',
    url: 'https://fitnessdeluxe.es',
    className: 'h-12 md:h-16'
  },
  {
    name: 'PT Online Training',
    logo: '/assets/images/logo-pt.png',
    url: 'https://pablolucero.com',
    className: 'h-14 md:h-20'
  },
  {
    name: 'Ziva',
    logo: '/assets/images/logo-ziva.png',
    url: 'https://zivalife.com',
    className: 'h-10 md:h-14'
  },
  {
    name: 'Mapfre',
    logo: '/assets/images/logo-mapfre.png',
    url: 'https://www.mapfre.es',
    className: 'h-10 md:h-14'
  },
];

const TrustedBrands: React.FC = () => {
  return (
    <section id="brands" className="py-20 bg-[#121212] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-[10px] font-bold tracking-[0.5em] text-[#0095ff] uppercase opacity-80">
            Empresas que confían en mi método
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:flex-wrap items-center justify-center gap-12 md:gap-20">
          {BRANDS.map((brand) => (
            <a
              key={brand.name}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center transition-all hover:scale-110 duration-500 group cursor-pointer"
              title={brand.name}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className={`max-w-[200px] object-contain transition-all duration-500 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 mix-blend-screen ${brand.className}`}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    const span = document.createElement('span');
                    span.className = 'text-[9px] font-black text-gray-500 text-center uppercase tracking-widest opacity-60 group-hover:opacity-100 group-hover:text-[#0095ff] transition-all';
                    span.innerText = brand.name;
                    parent.appendChild(span);
                  }
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
