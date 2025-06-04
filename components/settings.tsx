"use client";

import Image from "next/image";
import React from "react";
import { Mic, PanelTop, Fan, Wind, Info, LogOut } from "lucide-react";
import HeaderSettings from "./header-settings";

export default function Settings() {
  const settings = [
    { icon: Mic, label: "Comandos de Voz" },
    { icon: PanelTop, label: "Janelas" },
    { icon: Fan, label: "Ar-condicionado" },
    { icon: Wind, label: "Limpador de Para-brisa" },
    { icon: Info, label: "Sobre" },
    { icon: LogOut, label: "Sair" },
  ];

  return (
    <div className="bg-gradient-to-b from-[#0f0f0f] to-[#111827] min-h-screen">
      <HeaderSettings />

      <div className="pt-[120px] flex flex-col items-center px-4 gap-12 md:gap-16 lg:gap-20">
        {/* Logo e título */}
        <div className="flex flex-col items-center gap-3">
          <Image
            src="/logo-jarvs.png"
            alt="Logo da Jarvs"
            width={100}
            height={100}
            className="object-contain w-[100px] h-[100px] md:w-[140px] md:h-[140px] lg:w-[180px] lg:h-[180px]"
          />
          <div className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
            Configurações
          </div>
        </div>

        {/* Lista de opções */}
        <div className="flex flex-col gap-6">
          {settings.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 text-white hover:text-blue-400 transition-colors cursor-pointer"
            >
              <item.icon size={24} className="text-blue-400 md:w-7 md:h-7 lg:w-8 lg:h-8" />
              <span className="text-base md:text-lg lg:text-xl">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
