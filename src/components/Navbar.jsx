import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 text-white p-1 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <span className="text-xl font-bold text-slate-800">Nexo Dental</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-slate-600 hover:text-blue-600 font-medium">Início</a>
          <a href="#" className="text-slate-600 hover:text-blue-600 font-medium">Sobre</a>
          <a href="#" className="text-slate-600 hover:text-blue-600 font-medium">Serviços</a>
          <a href="#" className="text-slate-600 hover:text-blue-600 font-medium">Depoimentos</a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors">
            Agendar
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t p-4 flex flex-col gap-4">
          <a href="#" className="text-slate-600 font-medium">Início</a>
          <a href="#" className="text-slate-600 font-medium">Sobre</a>
          <a href="#" className="text-slate-600 font-medium">Serviços</a>
          <a href="#" className="text-slate-600 font-medium">Depoimentos</a>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium w-full">
            Agendar
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
