import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Paciente",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "Eu estava nervosa com meu tratamento de canal, mas a equipe me deixou completamente à vontade. O procedimento foi indolor e rápido!"
  },
  {
    name: "Michael Chen",
    role: "Paciente",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Melhor experiência odontológica que já tive. A equipe é amigável e a clínica é de última geração. Altamente recomendado!"
  },
  {
    name: "Emily Davis",
    role: "Mãe",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote: "Meus filhos adoram ir ao dentista agora! O Dr. Silva é incrível com crianças e explica tudo com clareza."
  },
  {
    name: "James Wilson",
    role: "Executivo",
    image: "https://randomuser.me/api/portraits/men/86.jpg",
    quote: "Fiz o Invisalign aqui e os resultados são incríveis. O processo foi tranquilo e se encaixou perfeitamente na minha agenda lotada."
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Depoimentos de <span className="text-blue-600">Pacientes Felizes</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-xl overflow-hidden mb-6 bg-blue-100">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-lg font-bold text-slate-900">{testimonial.name}</h3>
              <p className="text-blue-500 text-sm mb-4">{testimonial.role}</p>
              
              <div className="flex gap-1 mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-slate-600 text-sm italic leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors inline-flex items-center gap-2">
            Ver Todos os Depoimentos <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
