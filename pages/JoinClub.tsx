
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const JoinClub: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#0f0f0f] text-white pt-32 pb-20 px-4">
            <div className="max-w-6xl mx-auto space-y-8">
                {/* Navigation */}
                <div className="flex items-center gap-4">
                    <Link
                        to="/"
                        className="group flex items-center gap-2 text-gray-400 hover:text-[#0095ff] transition-colors"
                    >
                        <div className="p-2 rounded-full bg-white/5 group-hover:bg-[#0095ff]/10 border border-white/10 group-hover:border-[#0095ff]/30 transition-all">
                            <ChevronLeft className="w-5 h-5" />
                        </div>
                        <span className="font-medium">Volver al inicio</span>
                    </Link>
                </div>

                {/* Content */}
                <div className="bg-[#1a1a1a] rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl">
                    <div className="text-center mb-10 space-y-4">
                        <h1 className="text-3xl md:text-5xl font-black italic uppercase pb-2 px-4 leading-relaxed">
                            Únete al <span className="inline-block pr-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0095ff] to-[#00c8ff]">Club</span>
                        </h1>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            Completa el formulario para formar parte de nuestra comunidad de corredores.
                        </p>
                    </div>

                    <div className="w-full flex justify-center">
                        <iframe
                            width="540"
                            height="1100"
                            src="https://9a3cfc1e.sibforms.com/serve/MUIFAAE3fQgAOt9nrvV8nwH7KsRTzVVhqk-xa3XBOd-4Ub-JYfE_VIMf7L65sbtKlYwcRStAxTsxQJ96qHX4df5OnU75YFX9aLJSgK1k8Yt7yXPvea4f_E6HQNcn4PNKxFi-lF2o40egd1xY29Sv9zv4MNGX6z7mkqWk9mJ81-Tnu0l4_ZI8FCLQoQ2ta-pLMBKAKO5RYi-2fAhAhA=="
                            frameBorder="0"
                            scrolling="no"
                            allowFullScreen
                            style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%', borderRadius: '12px' }}
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinClub;
