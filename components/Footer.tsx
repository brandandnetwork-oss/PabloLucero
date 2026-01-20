
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
              {[
                {
                  name: 'Instagram',
                  href: 'https://www.instagram.com/pablolucer0_/?hl=es',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4.162 4.162 0 110-8.324A4.162 4.162 0 0112 16zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  )
                },
                {
                  name: 'Facebook',
                  href: 'https://www.facebook.com/pablo.lucero.training/',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  )
                },
                {
                  name: 'LinkedIn',
                  href: 'https://www.linkedin.com/in/pablo-lucero-camacho/',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  )
                },
                {
                  name: 'TikTok',
                  href: 'https://www.tiktok.com/@pablolucer0_',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.13 5.35-.14 10.71-.13 16.06-1.11.02-2.22.01-3.33.02-1.35-.01-2.71-.05-4.06-.02-.1 0-.11-.08-.12-.11 0-.15-.01-.31-.01-.46a7.1 7.1 0 1 1-2.9-5.11c.54-.4 1.14-.73 1.78-.99.01-.2 0-.41.01-.61V8.62c.07-.12.2-.18.32-.23a11.13 11.13 0 0 0 3.16-1.63c.01-2.25 0-4.5 0-6.75z" />
                    </svg>
                  )
                }
              ].map(social => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#0095ff] hover:text-[#0095ff] transition-all cursor-pointer group"
                  title={social.name}
                >
                  <div className="transform group-hover:scale-110 transition-transform">
                    {social.icon}
                  </div>
                </a>
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
                  <svg fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                </div>
                info@pablolucero.com
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <div className="w-5 h-5 text-[#0095ff]">
                  <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                </div>
                Madrid, España
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
