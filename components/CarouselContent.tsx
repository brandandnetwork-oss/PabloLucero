import React, { useState, useEffect, useRef } from 'react';

interface CarouselContentProps {
    images: string[];
}

export const CarouselContent: React.FC<CarouselContentProps> = ({ images }) => {
    // Clone first image to end for seamless loop
    const extendedImages = [...images, images[0]];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const nextSlide = () => {
        if (currentIndex >= images.length) return; // Prevent double clicks during reset
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev + 1);
    };

    const prevSlide = () => {
        if (currentIndex <= 0) {
            // Instant jump to end (clone) then slide back? 
            // For simplicity, standard prev loop or:
            // To reverse seamlessly is harder with this 1-way clone. 
            // Let's just do standard wrap for Prev manually for now, 
            // or implement dual clones (start/end) if needed. 
            // User requested "infinite loop" primarily for auto-play (forward).
            // Let's use simple logic: if 0, go to length - 1.
            // But valid request was "last to first with same animation".
            // Clone at end supports: 0 -> 1 -> ... -> last -> clone (looks like 0) -> jump to 0.
            setIsTransitioning(true);
            setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
            return;
        }
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev - 1);
    };

    // Handle the "jump" from clone to start
    useEffect(() => {
        if (currentIndex === images.length) {
            // We are at the clone (visual first slide)
            // Wait for transition to finish (700ms), then jump to index 0 without transition
            timeoutRef.current = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(0);
            }, 700);
        }
    }, [currentIndex, images.length]);

    // Auto-play
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex]); // Dep on currentIndex to ensure fresh closure, mainly nextSlide

    return (
        <>
            <div
                className={`absolute inset-0 flex select-none ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {extendedImages.map((src, index) => (
                    <div key={index} className="w-full h-full flex-shrink-0 relative">
                        <img
                            src={src}
                            alt={`Slide ${index}`}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent" />
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#0095ff] p-3 rounded-full text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-10"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#0095ff] p-3 rounded-full text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-10"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setIsTransitioning(true);
                            setCurrentIndex(index);
                        }}
                        className={`w-2 h-2 rounded-full transition-all ${index === (currentIndex % images.length) ? 'bg-[#0095ff] w-6' : 'bg-white/50 hover:bg-white'}`}
                    />
                ))}
            </div>
        </>
    );
};
