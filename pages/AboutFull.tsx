
/// <reference types="vite/client" />
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CarouselContent } from '../components/CarouselContent';

const AboutFull: React.FC = () => {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        // Load images dynamically from the assets/images/carrusel folder
        // Note: Path is relative to the source file or absolute from root if configured in Vite.
        // Using absolute alias logic often works in Vite if /assets is mapped or relative to root.
        // .. goes to pages, .. goes to root, then assets.
        const modules = import.meta.glob('../assets/images/carrusel/*.{png,jpg,jpeg,svg,webp}', { eager: true });

        // Fallback if the path needs to be relative
        // const modules = import.meta.glob('../../assets/images/carrusel/*.{png,jpg,jpeg,svg,webp}', { eager: true });

        const imagePaths = Object.values(modules).map((mod: any) => mod.default);
        setImages(imagePaths);
    }, []);



    return (
        <div className="pt-32 pb-24 bg-[#121212] min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-8">
                    <Link to="/#about" className="inline-flex items-center gap-2 text-[#0095ff] hover:text-white transition-colors cursor-pointer">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        <span>Volver</span>
                    </Link>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Biography Text */}
                    <div className="space-y-8">
                        <h1 className="font-display text-4xl md:text-5xl font-bold uppercase leading-tight">
                            Biografía <span className="text-[#0095ff]">Completa</span>
                        </h1>

                        <div className="space-y-12 text-gray-300 text-lg leading-loose font-light">
                            <p>
                                Comencé en el mundo del ciclismo con apenas 9 años, y durante muchas temporadas competí, disfrutando de cada momento. Sin embargo, fue cuando el running y el triatlón se cruzaron en mi camino que realmente comprendí la amplitud de mi pasión por el deporte. La combinación de estas disciplinas me mostró una nueva forma de desafiarme a mí mismo.
                            </p>

                            <p>
                                Mi trayectoria en el triatlón ha sido extensa y gratificante. Durante más de 11 años, he tenido el honor de formar parte de la selección Española de Triatlón (Como Técnico), participando en campeonatos europeos y mundiales en diversos países. Teniendo la oportunidad de dirigir a una atleta en los JJPP de Paris 2024.
                            </p>
                        </div>
                    </div>

                    {/* Carousel */}
                    <div className="relative group rounded-2xl overflow-hidden h-[600px] bg-[#1a1a1a] border border-white/10 shadow-2xl shadow-[#0095ff]/10">
                        {images.length > 0 ? (
                            <CarouselContent images={images} />
                        ) : (
                            <div className="flex flex-col items-center justify-center h-full text-gray-500">
                                <svg className="w-16 h-16 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                <p>Añade imágenes a la carpeta</p>
                                <code className="text-xs mt-2 bg-black/30 px-2 py-1 rounded text-[#0095ff]">assets/images/carrusel</code>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutFull;
