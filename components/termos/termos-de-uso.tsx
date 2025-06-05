import React from "react";

export default function TermosDeUso() {
  return (
    <div className="pt-[120px] pb-[60px] bg-gradient-to-r from-[#0f0f0f] to-[#111827] text-white px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">Termos de Uso</h1>

        <p className="text-sm text-gray-300 mb-4">
          Ao utilizar o aplicativo <span className="text-white font-semibold">Jarvs</span>, você concorda com os seguintes termos:
        </p>

        <ul className="list-disc list-inside text-sm space-y-3 text-gray-300">
          <li>O Jarvs é um assistente inteligente projetado para facilitar comandos por voz em veículos.</li>
          <li>Você é responsável por utilizar o app de forma segura e consciente durante a condução.</li>
          <li>O uso indevido ou incompatível com o objetivo do aplicativo é de sua responsabilidade.</li>
          <li>Este app é um projeto acadêmico, sem fins comerciais, podendo conter limitações técnicas.</li>
          <li>Reservamo-nos o direito de atualizar estes termos a qualquer momento, sem aviso prévio.</li>
        </ul>

        <p className="mt-8 text-xs text-gray-500 text-center">
          Última atualização: Junho de 2025
        </p>
      </div>
    </div>
  );
}
