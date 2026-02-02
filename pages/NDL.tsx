
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { CarouselContent } from '../components/CarouselContent';

const NDL: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const ndlImages = [
        '/assets/images/ndl/product1.png',
        '/assets/images/ndl/product2.png',
        '/assets/images/ndl/product3.png'
    ];

    return (
        <div className="min-h-screen bg-[#121212] text-white pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Navigation */}
                <div className="flex items-center gap-4">
                    <Link
                        to="/"
                        className="group flex items-center gap-2 text-gray-400 hover:text-[#0095ff] transition-colors"
                    >
                        <div className="p-2 rounded-full bg-white/5 group-hover:bg-[#0095ff]/10 border border-white/10 group-hover:border-[#0095ff]/30 transition-all">
                            <ChevronLeft className="w-5 h-5" />
                        </div>
                        <span className="font-medium">Volver</span>
                    </Link>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start bg-[#1a1a1a] rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
                    {/* Text Section */}
                    <div className="p-8 md:p-16 space-y-8">
                        <div className="space-y-4">
                            <span className="text-[#0095ff] font-bold tracking-[0.3em] uppercase text-xs">NDL Pro Health</span>
                            <h1 className="font-display text-4xl md:text-5xl font-black uppercase leading-tight">
                                Entrena como un Pro, <br />
                                <span className="text-gray-500 text-3xl md:text-4xl">Recupérate como un Pro</span>
                            </h1>
                        </div>

                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
                            <p>
                                He pasado por esos días en los que, por mucho que quiera, siento que al cuerpo le falta ese "plus" para terminar el entrenamiento o incluso para llegar con energía al final del día. Después de mucho buscar, me di cuenta de que la diferencia entre simplemente rendir y realmente brillar está en los pequeños detalles.
                            </p>
                            <p>
                                Por eso empecé a usar <span className="text-white font-bold">NDL Pro Health</span>. Para mí, no es solo suplementación; es la herramienta que me ayuda a mantenerme en mi mejor nivel, tal como lo hace la élite del deporte.
                            </p>
                            <p>
                                Lo que más me gusta es que tienen una solución para cada momento: desde hidratación avanzada para mis sesiones más intensas hasta complejos vitamínicos que me aseguran una recuperación real. Gracias a esto, mi única preocupación ahora es disfrutar del camino y dar lo mejor de mí.
                            </p>
                            <p className="text-white font-medium italic">
                                ¡No dejes que tu energía se agote! Quiero que tú también sientas esa diferencia y cuides tu cuerpo como se merece. Te invito a probar sus productos con este descuento especial que tengo para mi comunidad:
                            </p>
                        </div>

                        <div className="p-8 bg-[#222] rounded-2xl border border-[#0095ff]/20 space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">🚀</span>
                                <span className="font-bold text-white uppercase tracking-wider">Mi aliado: NDL Pro Health</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-lg text-gray-400">💰 Tu descuento:</span>
                                <div className="bg-black/50 p-4 rounded-xl border border-dashed border-[#0095ff] text-center">
                                    <span className="text-2xl font-black text-[#0095ff] tracking-[0.2em]">NDLPABLOLUCERO</span>
                                </div>
                                <p className="text-xs text-gray-500 text-center mt-2 uppercase tracking-widest">Usa el código al finalizar tu pedido en la web</p>
                            </div>
                            <a
                                href="https://ndlprohealth.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center bg-[#0095ff] hover:bg-[#0084e6] text-white py-4 rounded-xl font-bold transition-all shadow-lg shadow-[#0095ff]/20 uppercase tracking-widest mt-6"
                            >
                                Ir a la tienda
                            </a>
                        </div>
                    </div>

                    {/* Carousel Section - Sticky on large screens */}
                    <div className="lg:sticky lg:top-32 relative h-[600px] lg:h-[700px] overflow-hidden border-l border-white/5">
                        <CarouselContent images={ndlImages} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NDL;
