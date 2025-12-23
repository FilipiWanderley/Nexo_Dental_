import React from 'react';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Dedicados ao Seu <br />
              <span className="text-blue-600">Bem-Estar Dental</span> <br />
              e Sorrisos Radiantes
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Estamos comprometidos em fornecer o melhor atendimento odontológico em um ambiente confortável e acolhedor.
              Nossa equipe de profissionais altamente qualificados está pronta para cuidar do seu sorriso com as tecnologias mais recentes.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              De exames de rotina a procedimentos complexos, tratamos cada paciente com cuidado e atenção personalizados.
              Acreditamos que um sorriso saudável é a chave para a confiança e o bem-estar.
            </p>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors flex items-center gap-2">
              Saiba Mais <ArrowRight size={18} />
            </button>
          </div>
          
          {/* Image Composition */}
          <div className="lg:w-1/2 relative h-[600px] w-full flex justify-center items-center order-1 lg:order-2">
            <div className="relative w-full max-w-md h-full flex flex-col gap-4">
              
              {/* Top Row */}
              <div className="flex gap-4 h-1/3">
                 <div className="w-2/3 bg-blue-100 rounded-[2rem] rounded-tl-[4rem]"></div>
                 <div className="w-1/3 bg-blue-600 rounded-[2rem] rounded-tr-[3rem]"></div>
              </div>

              {/* Middle Row - Image 1 */}
              <div className="h-1/3 relative rounded-[3rem] overflow-hidden border-4 border-white shadow-lg z-10 -ml-8 w-[110%]">
                 <img 
                   src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800" 
                   alt="Dentista sorrindo" 
                   className="w-full h-full object-cover"
                 />
              </div>

              {/* Bottom Row - Image 2 & Shape */}
              <div className="flex gap-4 h-1/3 items-end">
                 <div className="w-1/3 bg-blue-500 rounded-[2rem] h-24"></div>
                 <div className="w-2/3 h-full rounded-[2rem] rounded-br-[4rem] overflow-hidden relative border-4 border-white shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800" 
                      alt="Tratamento dentário" 
                      className="w-full h-full object-cover"
                    />
                 </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-1/2 left-0 w-12 h-12 bg-yellow-400 rounded-full -translate-x-6 z-20"></div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
