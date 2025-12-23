import React from 'react';
import { ArrowRight, Sparkles, UserRound, ShieldCheck, Clock } from 'lucide-react';

const services = [
  {
    title: "Check-ups Abrangentes",
    description: "Exames dentários regulares para garantir a saúde bucal e prevenir problemas futuros.",
    icon: <ShieldCheck size={40} className="text-white" />,
    link: "Saiba Mais"
  },
  {
    title: "Implantes Dentários",
    description: "Solução permanente para dentes perdidos com resultados de aparência natural.",
    icon: <UserRound size={40} className="text-white" />,
    link: "Saiba Mais"
  },
  {
    title: "Odontologia Estética",
    description: "Melhore seu sorriso com clareamento, facetas e outros tratamentos estéticos.",
    icon: <Sparkles size={40} className="text-white" />,
    link: "Saiba Mais"
  },
  {
    title: "Alinhadores Transparentes",
    description: "Alinhe seus dentes discretamente sem aparelhos de metal tradicionais.",
    icon: <Clock size={40} className="text-white" />, // Using Clock as placeholder for aligner shape
    link: "Saiba Mais"
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-slate-500 font-semibold uppercase tracking-wider">Nossos Serviços</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Descubra Nossa Gama de <span className="text-blue-600">Soluções Odontológicas</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-b from-blue-500 to-blue-600 rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-shadow group cursor-pointer relative overflow-hidden">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
              
              <div className="mb-6 bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center backdrop-blur-sm">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-blue-100 mb-6 text-sm leading-relaxed opacity-90">
                {service.description}
              </p>
              
              <div className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all">
                {service.link} <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors inline-flex items-center gap-2">
            Ver Todos os Serviços <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
