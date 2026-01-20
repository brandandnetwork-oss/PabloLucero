
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setAnswer('');
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Actúa como el asistente virtual de Pablo Lucero, un coach de triatlón de alto rendimiento. Responde a esta pregunta de un potencial atleta de forma profesional y motivadora: ${query}`,
        config: {
          systemInstruction: "Eres un asistente profesional de coaching deportivo. Habla siempre sobre los beneficios del entrenamiento estructurado, la consistencia y la ciencia del deporte."
        }
      });
      setAnswer(response.text || 'Lo siento, hubo un error procesando tu consulta.');
    } catch (err) {
      setAnswer('Hubo un problema al conectar con el asistente. Por favor, intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 md:w-96 bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-[#0095ff] p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
               <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                  </svg>
               </div>
               <span className="text-sm font-bold text-white">AI Training Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:opacity-70 transition-opacity">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="p-4 flex flex-col gap-4">
            <div className="h-48 overflow-y-auto text-sm text-gray-400 leading-relaxed scrollbar-hide">
              {answer ? (
                <p className="bg-white/5 p-3 rounded-lg border border-white/5">{answer}</p>
              ) : loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#0095ff] rounded-full animate-bounce" />
                  <div className="w-1.5 h-1.5 bg-[#0095ff] rounded-full animate-bounce delay-75" />
                  <div className="w-1.5 h-1.5 bg-[#0095ff] rounded-full animate-bounce delay-150" />
                  <span className="text-xs">Pensando...</span>
                </div>
              ) : (
                <p className="italic">¿Tienes dudas sobre los planes de entrenamiento? Pregúntame.</p>
              )}
            </div>

            <form onSubmit={handleAsk} className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Escribe tu consulta..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0095ff] transition-colors pr-10"
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-[#0095ff]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#0095ff] rounded-full flex items-center justify-center shadow-lg shadow-[#0095ff]/30 hover:scale-110 transition-transform"
      >
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>
    </div>
  );
};

export default Assistant;
