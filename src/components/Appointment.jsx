import React from 'react';
import { ArrowRight } from 'lucide-react';

const Appointment = () => {
  return (
    <section className="py-20 bg-[#003366] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Agende Sua Consulta</h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Pronto para transformar seu sorriso? Preencha o formulário abaixo e entraremos em contato para confirmar o horário da sua consulta.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 text-slate-800 shadow-2xl">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-600">Nome Completo</label>
              <input 
                type="text" 
                id="name" 
                placeholder="João Silva" 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-600">Endereço de E-mail</label>
              <input 
                type="email" 
                id="email" 
                placeholder="joao@exemplo.com" 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-sm font-medium text-slate-600">Telefone</label>
              <input 
                type="tel" 
                id="phone" 
                placeholder="(11) 99999-9999" 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="service" className="text-sm font-medium text-slate-600">Serviço Necessário</label>
              <select 
                id="service" 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
              >
                <option value="">Selecione um serviço</option>
                <option value="checkup">Check-up Geral</option>
                <option value="cleaning">Limpeza</option>
                <option value="whitening">Clareamento</option>
                <option value="implant">Implante</option>
                <option value="emergency">Emergência</option>
              </select>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="date" className="text-sm font-medium text-slate-600">Data Preferida</label>
              <input 
                type="date" 
                id="date" 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="time" className="text-sm font-medium text-slate-600">Horário Preferido</label>
              <select 
                id="time" 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
              >
                <option value="">Selecione um horário</option>
                <option value="morning">Manhã (9h - 12h)</option>
                <option value="afternoon">Tarde (12h - 17h)</option>
                <option value="evening">Noite (17h - 20h)</option>
              </select>
            </div>
            
            <div className="md:col-span-2 flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-600">Mensagem Adicional (Opcional)</label>
              <textarea 
                id="message" 
                rows="3" 
                placeholder="Alguma dúvida ou preocupação específica?" 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
              ></textarea>
            </div>
            
            <div className="md:col-span-2 mt-4">
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors flex justify-center items-center gap-2">
                Confirmar Agendamento <ArrowRight size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
