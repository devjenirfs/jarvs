import Image from "next/image";
import { Settings } from "lucide-react"; //pacote de ícones Lucide React
import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 flex flex-row justify-between items-center px-[48px] py-[12px] w-full border-[2px] border-[#1F2937] bg-zinc-900/50 backdrop-blur-md hover:bg-zinc-900/80 transition-colors">
      {/* Logo */}
      <Image
        src="/icon.png"
        alt="Logo da Jarvs"
        width={60}
        height={60}
        className="object-contain"
      />

      {/* Frase de efeito */}
      <span className="text-sm sm:text-base font-light text-gray-300">
        Conduza com inteligência
      </span>

      {/* Ícone de configurações */}
      <button
        aria-label="Abrir configurações"
        className="hover:text-blue-400 transition-colors"
      >
        <Settings size={30} />
      </button>
    </header>
  );
}
