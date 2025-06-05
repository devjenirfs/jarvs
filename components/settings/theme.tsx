"use client";

import { Sun, Moon } from "lucide-react";
import Historico from "../cards/historico";
import { useState } from "react";

export default function Tema() {
  const [tema, setTema] = useState<'claro' | 'escuro'>('escuro');

  return (
    <div className="pt-[120px] pb-[60px] bg-gradient-to-r from-[#0f0f0f] to-[#111827] text-white">
        {/* Título */}
        <div className="text-center mt-10 mb-8 px-4">
            <h1 className="text-3xl font-bold">Tema</h1>
            <p className="text-gray-400 mt-2 text-sm">Configure o tema do seu Jarvs</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto px-6">
            {/* Tema Claro */}
            <div
              className={`bg-zinc-900 p-5 rounded-xl flex flex-col items-center gap-3 hover:bg-gradient-to-b from-[#0f0f0f] to-[#111827] transition cursor-pointer border-2 ${tema === 'claro' ? 'border-blue-400' : 'border-transparent'}`}
              onClick={() => setTema('claro')}
            >
                <Sun size={32} className={tema === 'claro' ? 'text-blue-400' : 'text-gray-500'} />
                <h2 className="text-lg font-medium">Tema Claro</h2>
                <span className={`mt-2 px-4 py-1 rounded-full text-xs font-semibold ${tema === 'claro' ? 'bg-blue-500 text-white' : 'bg-zinc-800 text-gray-400'}`}>
                  {tema === 'claro' ? 'Ligado' : 'Desligado'}
                </span>
            </div>
            {/* Tema Escuro */}
            <div
              className={`bg-zinc-900 p-5 rounded-xl flex flex-col items-center gap-3 hover:bg-gradient-to-b from-[#0f0f0f] to-[#111827] transition cursor-pointer border-2 ${tema === 'escuro' ? 'border-blue-400' : 'border-transparent'}`}
              onClick={() => setTema('escuro')}
            >
                <Moon size={32} className={tema === 'escuro' ? 'text-blue-400' : 'text-gray-500'} />
                <h2 className="text-lg font-medium">Tema Escuro</h2>
                <span className={`mt-2 px-4 py-1 rounded-full text-xs font-semibold ${tema === 'escuro' ? 'bg-blue-500 text-white' : 'bg-zinc-800 text-gray-400'}`}>
                  {tema === 'escuro' ? 'Ligado' : 'Desligado'}
                </span>
            </div>
        </div>
        
        {/* Histórico */}
        <Historico/>
    </div>
  );
}
