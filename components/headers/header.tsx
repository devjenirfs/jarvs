import Image from "next/image";
import { Settings, User } from "lucide-react"; //pacote de ícones Lucide React
import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 flex flex-row justify-between items-center px-[24px] md:px-[48px] w-full border-[2px] border-[#1F2937] bg-zinc-900/50 backdrop-blur-md hover:bg-zinc-900/80 transition-colors">
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
      <div className="flex flex-row gap-4">
        <Link
          href="/perfil"
          className="group transition"
          aria-label="Perfil"
        >
          <User size={30} className="text-blue-400 group-hover:text-blue-600 transition-colors" />
        </Link>

        {/* Ícone de configurações */}
        <Link
          href="/settings"
          aria-label="Abrir configurações"
          className="group transition"
        >
          <Settings size={30} className="text-blue-400 group-hover:text-blue-600 transition-colors" />
        </Link>
      </div>
    </header>
  );
}
