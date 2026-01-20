
import React from 'react';

const Footer: React.FC<{ id?: string }> = ({ id }) => {
  return (
    <footer id={id} className="bg-[#0f0f0f] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#0095ff] rounded flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14H11V21L20 10H13Z" />
                </svg>
              </div>
              <span className="font-display text-lg font-bold uppercase">Pablo Lucero</span>
            </div>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
              Ayudando a atletas a alcanzar su máximo potencial a través de entrenamiento inteligente y dedicación constante.
            </p>
            <div className="flex gap-4">
              {['instagram', 'twitter', 'facebook'].map(social => (
                <div key={social} className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#0095ff] hover:text-[#0095ff] transition-all cursor-pointer">
                   <span className="text-xs font-bold uppercase tracking-tighter">{social[0]}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-6">Navegación</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#about" className="hover:text-white transition-colors">Sobre Mí</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Programas</a></li>
              <li><a href="#run-club" className="hover:text-white transition-colors">Run Club</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-6">Servicios</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Coaching 1 a 1</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Triatlón Elite</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Empresas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Nutrición</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <div className="w-5 h-5 text-[#0095ff]">
                  <svg fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </div>
                info@pablolucero.com
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <div className="w-5 h-5 text-[#0095ff]">
                  <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                </div>
                Buenos Aires, Argentina
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-xs text-gray-600">
          <p>© 2024 Pablo Lucero Coaching. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
