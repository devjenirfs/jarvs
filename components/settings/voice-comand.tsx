"use client";

import { Mic, Volume2 } from "lucide-react";
import { useState } from "react";
import Historico from "../cards/historico";

export default function ComandosDeVoz() {
  const [vozAtiva, setVozAtiva] = useState(false);
  const [testeMicrofone, setTesteMicrofone] = useState(false);
  const [testandoReconhecimento, setTestandoReconhecimento] = useState(false);
  const [reconhecimentoOk, setReconhecimentoOk] = useState(false);

  const handleTestarAgora = () => {
    setTestandoReconhecimento(true);
    setReconhecimentoOk(false);
    setTimeout(() => {
      setTestandoReconhecimento(false);
      setReconhecimentoOk(true);
      setTimeout(() => setReconhecimentoOk(false), 2000);
    }, 2000);
  };

  const handleTesteMicrofone = () => {
    setTesteMicrofone((prev) => !prev);
  };

  return (
    <div className="pt-[120px] pb-[60px] bg-gradient-to-r from-[#0f0f0f] to-[#111827] text-white">
      {/* Título */}
      <div className="text-center mt-10 mb-8 px-4">
        <h1 className="text-3xl font-bold">Comandos de Voz</h1>
        <p className="text-gray-400 mt-2 text-sm">Configure o controle por voz do seu Jarvs</p>
      </div>

      {/* Ações */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto px-6">
        {/* Ativar voz */}
        <div className="bg-zinc-900 p-5 rounded-xl flex flex-col items-center gap-3 hover:bg-zinc-800 transition">
          <Mic size={32} className="text-blue-400" />
          <h2 className="text-lg font-medium">Comando por Voz</h2>
          <button
            aria-label={vozAtiva ? 'Desativar comando de voz' : 'Ativar comando de voz'}
            className={`mt-2 px-4 py-2 rounded-md text-sm transition-colors ${vozAtiva ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
            onClick={() => setVozAtiva((prev) => !prev)}
            autoFocus
          >
            {vozAtiva ? 'Desativar' : 'Ativar'}
          </button>
          <span className={`flex items-center gap-2 text-xs mt-1 ${vozAtiva ? 'text-green-400' : 'text-gray-400'}`}>
            {vozAtiva && <div className="w-3 h-3 bg-green-400 rounded-full animate-ping" />}
            {vozAtiva ? 'Comando de voz ativado' : 'Comando de voz desativado'}
          </span>
        </div>

        {/* Testar comando */}
        <div className="bg-zinc-900 p-5 rounded-xl flex flex-col items-center gap-3 hover:bg-zinc-800 transition">
          <Volume2 size={32} className="text-blue-400" />
          <h2 className="text-lg font-medium">Testar Reconhecimento</h2>
          <button
            aria-label="Testar reconhecimento de voz"
            className="mt-2 border border-blue-400 text-blue-400 px-4 py-2 rounded-md text-sm hover:bg-blue-400/10 disabled:opacity-60 disabled:cursor-not-allowed"
            onClick={handleTestarAgora}
            disabled={testandoReconhecimento}
          >
            {testandoReconhecimento ? 'Testando...' : 'Testar agora'}
          </button>
          {reconhecimentoOk && (
            <span className="text-green-400 text-xs mt-2">Reconhecimento testado com sucesso!</span>
          )}
        </div>
      </div>

      {/* Teste do Microfone */}
      <div className="max-w-xl mx-auto mt-16 px-6">
        <h2 className="text-base font-semibold mb-1">Teste Do Microfone</h2>
        <p className="text-gray-300 text-sm mb-4">
          Está tendo problemas com o microfone? Inicie um teste e fale alguma bobeira, nós reproduziremos sua voz de volta para você.
        </p>
        <div className="flex items-center gap-4">
          <button
            aria-label={testeMicrofone ? 'Parar teste do microfone' : 'Iniciar teste do microfone'}
            className={`px-4 py-2 rounded-md text-sm font-medium transition text-white ${testeMicrofone ? 'bg-red-500 hover:bg-red-600' : 'bg-indigo-500 hover:bg-indigo-600'}`}
            onClick={handleTesteMicrofone}
          >
            {testeMicrofone ? 'Parar teste' : 'Vamos verificar'}
          </button>
          <div className="flex gap-[2px]">
            {Array.from({ length: 60 }).map((_, i) => (
              <div
                key={i}
                className={`w-1 h-4 rounded ${testeMicrofone ? 'bg-indigo-400 opacity-100 animate-pulse' : 'bg-gray-400 opacity-60 animate-pulse'}`}
                style={{ animationDelay: `${i * 0.03}s` }}
              />
            ))}
          </div>
        </div>
        {testeMicrofone && (
          <span className="text-indigo-400 text-xs mt-2 block">Teste em andamento...</span>
        )}
      </div>

        {/* Histórico */}
        <Historico/>
    </div>
  );
}
