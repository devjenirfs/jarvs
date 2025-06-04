import React from "react";

export default function PoliticaPrivacidade() {
  return (
    <div className="pt-[120px] pb-[60px] bg-gradient-to-b from-[#0f0f0f] to-[#111827] text-white px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">Política de Privacidade</h1>

        <p className="text-sm text-gray-300 mb-4">
          O <span className="text-white font-semibold">Jarvs</span> respeita sua privacidade. Esta política explica como tratamos seus dados:
        </p>

        <ul className="list-disc list-inside text-sm space-y-3 text-gray-300">
          <li>O app não coleta, armazena nem compartilha dados pessoais sensíveis.</li>
          <li>Os comandos de voz são processados localmente sempre que possível, sem envio para servidores externos.</li>
          <li>Se houver armazenamento de preferências (ex: tema, idioma), será feito apenas no dispositivo.</li>
          <li>Não utilizamos cookies, rastreamento de atividade ou coleta de localização.</li>
          <li>Você pode excluir sua conta a qualquer momento e os dados serão removidos imediatamente.</li>
        </ul>

        <p className="mt-8 text-xs text-gray-500 text-center">
          Última atualização: Junho de 2025
        </p>
      </div>
    </div>
  );
}
