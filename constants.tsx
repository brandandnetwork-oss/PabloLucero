
import { NavItem, StatItem, ProgramItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Sobre Mí', href: '#about' },
  { label: 'Servicios', href: '#services' },
  { label: 'Run Club', href: '#run-club' },
  { label: 'Contacto', href: '#contact' },
];

export const STATS: StatItem[] = [
  { value: '15+', label: 'Años de Experiencia' },
  { value: '500+', label: 'Atletas Entrenados' },
  { value: 'IM 70.3', label: 'Especialista Ironman' },
  { value: '100%', label: 'Compromiso' },
];

export const PROGRAMS: ProgramItem[] = [
  {
    title: 'RUN CLUB',
    description: 'Únete a una comunidad apasionada. Entrenamientos grupales, técnica de carrera y apoyo mutuo para alcanzar tu próxima meta.',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=1000',
    cta: 'Unirse Ahora',
    tag: 'COMUNIDAD'
  },
  {
    title: 'EMPRESAS',
    description: 'Wellness Corporativo. Soluciones de salud integral para equipos de alto rendimiento. Reduce el estrés y aumenta la productividad.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000',
    cta: 'Más Información',
    tag: 'TEAM BUILDING'
  }
];
