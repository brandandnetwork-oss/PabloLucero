
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../assets/images/fondo-runclub.JPG';

const RunClub: React.FC = () => {
  const [showTechnique, setShowTechnique] = useState(false);
  const [videos, setVideos] = useState<string[]>([]);

  useEffect(() => {
    const loadVideos = async () => {
      const modules = import.meta.glob('../assets/images/videos/*.MOV', { eager: true });
      const sortedPaths = Object.keys(modules).sort((a, b) => {
        const numA = parseInt(a.split('/').pop()?.replace('.MOV', '') || '0');
        const numB = parseInt(b.split('/').pop()?.replace('.MOV', '') || '0');
        return numA - numB;
      });
      const loadedVideos = sortedPaths.map(path => (modules[path] as any).default);
      setVideos(loadedVideos);
    };
    loadVideos();
  }, []);

  return (
    <section id="run-club" className="py-40 bg-[#0f0f0f] border-y border-white/5 overflow-hidden relative">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#0095ff]/5 blur-[120px] rounded-full -z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <span className="text-[#0095ff] font-bold tracking-[0.3em] uppercase text-xs">Comunidad </span>
              <h2 className="font-display text-5xl md:text-6xl font-black uppercase leading-[0.9]">
                RUN.CLUB <br />
                <span className="text-gray-600">No corres solo</span>
              </h2>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              Más que un grupo de entrenamiento, somos una comunidad.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Técnica de Carrera",
                "Entrenamiento en Pista",
                "Salidas en Grupo",
                "Preparación de Carreras"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0095ff]/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-[#0095ff]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                  </div>
                  <span className="font-bold text-sm uppercase tracking-wide">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/join-club"
                className="flex items-center justify-center bg-[#0095ff] hover:bg-[#0084e6] text-white px-10 py-5 rounded-xl font-bold transition-all shadow-xl shadow-[#0095ff]/20 uppercase tracking-widest text-sm text-center"
              >
                Unirse al Club
              </Link>

              <div className="flex flex-col gap-4">
                <a
                  href="https://www.instagram.com/runclubpl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-transparent border border-white/20 hover:bg-white/5 text-white px-10 py-5 rounded-xl font-bold transition-all uppercase tracking-widest text-sm text-center"
                >
                  Siguenos en Instagram
                </a>
                <button
                  onClick={() => setShowTechnique(!showTechnique)}
                  className="inline-block bg-transparent border border-[#0095ff]/30 text-[#0095ff] hover:bg-[#0095ff]/10 px-10 py-5 rounded-xl font-bold transition-all uppercase tracking-widest text-sm text-center"
                >
                  Técnica de carrera
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden border border-white/10">
              <img
                src={bgImage}
                alt="Run Club Group"
                className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#121212] via-transparent to-transparent opacity-60" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#1a1a1a] border border-white/10 p-6 rounded-2xl shadow-2xl hidden md:block">
              <div className="flex items-center gap-4">
                <div className="text-3xl font-display font-black text-[#0095ff]">200+</div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-tight">Atletas Activos <br />en el Club</div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        {showTechnique && (
          <div className="mt-24 pt-16 border-t border-white/5 animate-fade-in">
            <div className="text-center mb-16">
              <h3 className="font-display text-3xl md:text-4xl font-bold uppercase mb-4">
                Técnica de <span className="text-[#0095ff]">Carrera</span>
              </h3>
              <p className="text-gray-400">Ejercicios fundamentales para mejorar tu biomecánica</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((videoSrc, index) => (
                <div key={index} className="space-y-4 group">
                  <div className="relative aspect-[9/16] bg-black/40 rounded-2xl overflow-hidden border border-white/10 group-hover:border-[#0095ff]/30 transition-all">
                    <video controls playsInline className="w-full h-full object-cover">
                      <source src={videoSrc} type="video/quicktime" />
                      <source src={videoSrc} type="video/mp4" />
                      Tu navegador no soporta el tag de video.
                    </video>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#0095ff]/10 text-[#0095ff] flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </span>
                    <span className="text-sm font-bold uppercase tracking-wide text-gray-300">Ejercicio {index + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RunClub;
