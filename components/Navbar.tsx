
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close mobile menu if open

    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const targetId = href.replace('#', '');
          const element = document.getElementById(targetId);
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }, 100);
      } else {
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#121212]/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'
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

        {/* Desktop Menu */}
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
          <Link
            to="/join-club"
            className="bg-[#0095ff] hover:bg-[#0084e6] text-white px-4 py-2.5 rounded-lg text-xs font-bold transition-all shadow-lg shadow-[#0095ff]/20 uppercase tracking-widest"
          >
            Empezar Ahora
          </Link>
        </div>

        {/* Mobile Menu Button - "Logo azul de arriba a la derecha" */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 bg-[#0095ff] rounded-lg flex items-center justify-center text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[80px] bg-[#121212]/95 backdrop-blur-xl z-40 md:hidden animate-fade-in border-t border-white/10 h-screen overflow-y-auto pb-40">
          <div className="flex flex-col p-6 gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-2xl font-display font-bold uppercase text-gray-300 hover:text-[#0095ff] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/join-club"
              onClick={() => setIsMenuOpen(false)}
              className="bg-[#0095ff] text-center text-white p-4 rounded-xl font-bold uppercase tracking-widest mt-4"
            >
              Empezar Ahora
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
