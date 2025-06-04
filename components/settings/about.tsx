import React from "react";

export default function About() {
  return (
    <div className="pt-[120px] pb-[60px] bg-gradient-to-b from-[#0f0f0f] to-[#111827] text-white px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Sobre o Jarvs</h1>

        <p className="text-gray-300 mb-6">
          O <span className="text-white font-semibold">Jarvs</span> é um assistente inteligente veicular que permite controlar recursos como ar-condicionado, janelas, limpador e mais, usando apenas comandos de voz. 
          O foco é oferecer uma experiência de condução mais segura, fluida e moderna.
        </p>

        <div className="text-left text-sm space-y-4 bg-zinc-900 p-6 rounded-xl">
          <p>
            <span className="font-semibold text-white">🚀 Versão:</span> 1.0.0
          </p>
          <p>
            <span className="font-semibold text-white">🛠 Tecnologias:</span> Next.js, Tailwind CSS, TypeScript, Lucide Icons, Web Speech API
          </p>
          <p>
            <span className="font-semibold text-white">👩‍💻 Desenvolvido por:</span> Jeniffer Souza
          </p>
          <p>
            <span className="font-semibold text-white">🏫 Projeto acadêmico:</span> Inatel – Instituto Nacional de Telecomunicações
          </p>
          <p>
            <span className="font-semibold text-white">📫 Contato: </span> 
            <a
              href="mailto:jeniffer.souza@ges.inatel.br"
              className="no-underline hover:text-blue-300 transition"
            >
              jeniffer.souza@ges.inatel.br
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
