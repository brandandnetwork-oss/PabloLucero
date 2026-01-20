
import React from 'react';

const BRANDS = [
  { 
    name: 'Huawei', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Huawei_logo.svg/2500px-Huawei_logo.svg.png',
    className: 'h-10 md:h-12' 
  },
  { 
    name: 'BCMAD', 
    logo: 'https://bcmad.es/wp-content/uploads/2021/04/Logo-BCMAD-Blanco.png',
    className: 'h-8 md:h-10' 
  },
  { 
    name: 'Decimas', 
    logo: 'https://logodownload.org/wp-content/uploads/2021/03/decimas-logo.png',
    invert: true,
    className: 'h-6 md:h-7' 
  },
  { 
    name: 'NDL pro-health', 
    logo: 'https://ndlprohealth.com/cdn/shop/files/NDL_Logotipo_Blanco_Principal.png',
    className: 'h-9 md:h-11' 
  },
  { 
    name: 'FDL fitness deluxe', 
    logo: 'https://fitnessdeluxe.es/wp-content/uploads/2022/02/Logo-Fitness-Deluxe-Blanco.png',
    className: 'h-9 md:h-11' 
  },
  { 
    name: 'PT Online Training', 
    logo: 'https://pablolucero.com/wp-content/uploads/2022/10/logo-pt-online-white.png',
    className: 'h-10 md:h-12' 
  },
  { 
    name: 'Ziva', 
    logo: 'https://zivalife.com/wp-content/uploads/2022/07/Ziva-Logo-Yellow-Black.png',
    invert: true,
    className: 'h-8 md:h-10' 
  },
  { 
    name: 'Mapfre', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/MAPFRE_logo.svg/2560px-MAPFRE_logo.svg.png',
    className: 'h-7 md:h-9' 
  },
];

const TrustedBrands: React.FC = () => {
  return (
    <section className="py-20 bg-[#121212] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-[10px] font-bold tracking-[0.5em] text-[#0095ff] uppercase opacity-80">
            Empresas que confían en mi método
          </span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:flex-wrap items-center justify-center gap-10 md:gap-16">
          {BRANDS.map((brand) => (
            <div 
              key={brand.name} 
              className="flex items-center justify-center transition-all hover:scale-105 duration-500 group"
              title={brand.name}
            >
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className={`max-w-[140px] object-contain transition-all duration-500 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 ${brand.invert ? 'brightness-0 invert' : ''} ${brand.className}`}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
