"use client";

import Image from "next/image";
import React from "react";
import { Mic, Info, LogOut, Sun, User, FileText } from "lucide-react";
import Link from "next/link";

export default function Settings() {
  const settings = [
    { icon: User, label: "Conta", href: "settings/gerenciar-conta" },
    { icon: Mic, label: "Comandos de Voz", href: "settings/comando-voz" },
    { icon: Sun, label: "Tema", href: "settings/tema" },
    { icon: Info, label: "Sobre", href: "settings/sobre" },
    { icon: FileText, label: "Termos de Uso", href: "settings/termos-de-uso" },
    { icon: FileText, label: "Política de Privacidade", href: "settings/politica-de-privacidade" },
    { icon: LogOut, label: "Sair", href: "/" },
  ];

  return (
    <div className="bg-gradient-to-r from-[#0f0f0f] to-[#111827]">
      <div className="py-[60px] flex flex-col items-center px-4 gap-12 md:gap-16 lg:gap-20">
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
            <Link
              key={index}
              href={item.href}
              className="group flex items-center gap-4 text-white transition-colors cursor-pointer"
            >
              <item.icon
                size={24}
                className="text-blue-400 transition-colors md:w-7 md:h-7 lg:w-8 lg:h-8 group-hover:text-[#0f0f0f]"
              />
              <span className="text-base md:text-lg lg:text-xl group-hover:text-[#0f0f0f]">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
