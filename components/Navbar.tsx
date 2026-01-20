
import React from 'react';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80, // Offset para el navbar fixed
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#121212]/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-8 h-8 bg-[#0095ff] rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 10V3L4 14H11V21L20 10H13Z" />
            </svg>
          </div>
          <span className="font-display text-xl font-bold tracking-tight uppercase">Pablo Lucero</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-xs font-bold tracking-widest uppercase text-gray-400 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button className="bg-[#0095ff] hover:bg-[#0084e6] text-white px-6 py-2.5 rounded-lg text-xs font-bold transition-all shadow-lg shadow-[#0095ff]/20 uppercase tracking-widest">
          Empezar Ahora
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
