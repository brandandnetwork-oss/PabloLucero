
import React from 'react';

const ZivaBanner: React.FC = () => {
  return (
    <section className="bg-white text-black py-0 overflow-hidden border-y border-gray-100">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Columna de Texto */}
          <div className="p-12 md:p-24 space-y-10 bg-white">
            <div className="flex flex-col items-start gap-2">
              {/* Logo ZIVA recreado fielmente a la imagen proporcionada */}
              <div className="flex flex-col items-center group cursor-default">
                <h2 className="font-display font-black text-6xl md:text-7xl tracking-[-0.05em] leading-none mb-3">ZIVA</h2>
                <div className="flex items-center w-full gap-4">
                  <div className="h-[1.5px] flex-grow bg-black"></div>
                  <span className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] whitespace-nowrap uppercase">The Way to Live</span>
                  <div className="h-[1.5px] flex-grow bg-black"></div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight leading-tight max-w-md">
                Haz el deporte tu estilo de vida
              </h3>

              <p className="text-gray-500 text-lg leading-relaxed max-w-lg font-medium">
                Entrena desde casa, a tu tiempo, a tu ritmo. Equípate con ZIVA: mancuernas, tapetes, pelotas, ligas, barras y todos los accesorios necesarios para una rutina de nivel profesional.
              </p>

              <a
                href="https://eu.ziva.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black hover:bg-gray-800 text-white px-10 py-4 rounded-none font-black transition-all text-xs uppercase tracking-[0.2em] mt-4 shadow-lg shadow-black/10"
              >
                Ver Colección
              </a>
            </div>
          </div>

          {/* Columna de Imagen */}
          <div className="relative h-[600px] md:h-full min-h-[700px] bg-[#f8f8f8] flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=1200"
              alt="Elite Gym Equipment"
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-105 contrast-110"
            />
            <div className="absolute inset-0 bg-black/5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZivaBanner;
