
import React from 'react';

const Services: React.FC = () => {
    return (
        <section id="services" className="py-24 bg-[#121212] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#0095ff]/5 rounded-full blur-[120px] -z-0" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="space-y-16">
                    {/* Header */}
                    <div className="max-w-3xl space-y-6">
                        <span className="text-[#0095ff] font-bold tracking-[0.3em] uppercase text-xs">Wellness Corporativo</span>
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight">
                            Entrenamiento para Empresas: <br />
                            <span className="text-gray-500">Elevando el Valor de tu Equipo y tu Marca</span>
                        </h2>
                        <div className="w-20 h-1.5 bg-[#0095ff]" />
                    </div>

                    {/* Main Content */}
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-8">
                            <p className="text-xl text-gray-300 leading-relaxed font-light">
                                En un entorno donde el producto y el precio ya no son suficientes para diferenciarte, el verdadero valor reside en las personas. Mi programa de <span className="text-white font-bold">Entrenador para Empresas</span> está diseñado para aquellas organizaciones que quieren dar un paso más allá, cuidando el activo más importante: su capital humano y la fidelidad de sus clientes.
                            </p>

                            <div className="space-y-6">
                                <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white">¿Qué aporto a tu empresa?</h3>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    Mi enfoque no se limita al ejercicio físico; se trata de una estrategia integral para transformar la cultura corporativa y la percepción de marca:
                                </p>

                                <div className="grid gap-6">
                                    <div className="p-8 bg-white/5 border border-white/5 rounded-2xl hover:border-[#0095ff]/30 transition-all group">
                                        <h4 className="font-bold text-[#0095ff] uppercase tracking-wider mb-3">Para tus Empleados</h4>
                                        <p className="text-gray-400 leading-relaxed">
                                            Promuevo un entorno laboral saludable. Un equipo que entrena unido mejora su comunicación, aumenta su productividad y reduce el estrés. Transformamos la salud en motivación y compromiso real con la empresa.
                                        </p>
                                    </div>

                                    <div className="p-8 bg-white/5 border border-white/5 rounded-2xl hover:border-[#0095ff]/30 transition-all group">
                                        <h4 className="font-bold text-[#0095ff] uppercase tracking-wider mb-3">Para tus Clientes</h4>
                                        <p className="text-gray-400 leading-relaxed">
                                            Potenciamos la fidelidad ofreciendo programas de bienestar exclusivos. No solo vendes un servicio, vendes una experiencia de vida saludable que vincula emocionalmente al cliente con tu marca.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-12">
                            <div className="bg-[#1a1a1a] p-10 rounded-3xl border border-white/5 shadow-2xl space-y-8">
                                <div className="space-y-4">
                                    <h3 className="font-display text-2xl font-bold uppercase text-white">Propuesta de Valor Única</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        Ayudo a las empresas a destacar, ofreciendo soluciones que mejoran el bienestar general y refuerzan la identidad corporativa.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <h4 className="text-sm font-bold tracking-[0.2em] text-[#0095ff] uppercase">Experiencia Contrastada</h4>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4 group">
                                            <div className="w-10 h-10 rounded-xl bg-[#0095ff]/10 flex items-center justify-center text-[#0095ff] group-hover:bg-[#0095ff] group-hover:text-white transition-all">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                            <div>
                                                <p className="font-bold text-white uppercase text-sm tracking-wide">Kilómetros de Confianza by MAPFRE</p>
                                                <p className="text-xs text-gray-500">Uniendo el running con los valores de una gran aseguradora.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 group">
                                            <div className="w-10 h-10 rounded-xl bg-[#0095ff]/10 flex items-center justify-center text-[#0095ff] group-hover:bg-[#0095ff] group-hover:text-white transition-all">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                            <div>
                                                <p className="font-bold text-white uppercase text-sm tracking-wide">Club de Runners Décimas</p>
                                                <p className="text-xs text-gray-500">Creando comunidad y fidelización a través del deporte.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-white/5 space-y-6">
                                    <div className="space-y-2">
                                        <h3 className="font-display text-xl font-bold text-white uppercase">Todo empieza con un "porqué"</h3>
                                        <p className="text-gray-500 text-sm">
                                            Si crees que es el momento de aumentar el rendimiento de tu equipo y la satisfacción de tus clientes a través del bienestar, hablemos.
                                        </p>
                                    </div>

                                    <a
                                        href="#contact"
                                        className="flex items-center justify-center gap-3 bg-white text-black px-8 py-5 rounded-2xl font-black hover:bg-[#0095ff] hover:text-white transition-all uppercase tracking-widest text-xs shadow-xl shadow-white/5"
                                    >
                                        👉 ¿Hacemos una llamada? Contáctame aquí
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
