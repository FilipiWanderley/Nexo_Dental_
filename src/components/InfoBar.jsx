import React from 'react';
import { Clock } from 'lucide-react';

const InfoBar = () => {
  return (
    <div className="bg-[#0B1120] text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          <div className="flex items-center gap-3">
            <div className="p-2 border border-white/20 rounded-full">
              <Clock className="text-blue-400" size={24} />
            </div>
            <span className="text-xl font-medium">Horário</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm md:text-base">
            <div className="text-center md:text-left">
              <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Segunda a Sexta</p>
              <p className="font-semibold">09:00 - 21:00</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Sábado</p>
              <p className="font-semibold">09:00 - 18:00</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Domingo</p>
              <p className="font-semibold">10:00 - 15:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
