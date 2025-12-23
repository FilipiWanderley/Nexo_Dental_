import React from 'react';
import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-[#0055A4] text-white py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-12 text-center">
          
          {/* Text Content */}
          <div className="w-full max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Sua Solução para <br /> 
              um Sorriso <span className="relative inline-block">
                Radiante
                {/* Smile curve decoration */}
                <svg className="absolute w-full h-4 -bottom-2 left-0 text-blue-300" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 0 Q 50 20 100 0" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>
            
            <p className="text-blue-100 mb-10 text-lg leading-relaxed max-w-2xl mx-auto">
              Criando sorrisos radiantes, cultivando saúde vitalícia e restaurando a confiança, um paciente de cada vez.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-500/30 flex items-center gap-2">
                Saiba Mais <span className="text-xl">→</span>
              </button>
              
              <button className="flex items-center gap-3 text-white hover:text-blue-200 transition-colors group">
                <div className="w-12 h-12 border-2 border-white/30 rounded-full flex items-center justify-center group-hover:bg-white/10 transition-all">
                  <Play size={20} fill="currentColor" className="ml-1" />
                </div>
                <span className="font-medium text-lg">Ver Vídeo</span>
              </button>
            </div>
          </div>

        </div>
      </div>
      
      {/* Background Elements/Glows */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-400/5 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-blue-300/10 blur-[100px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default Hero;