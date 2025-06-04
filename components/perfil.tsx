"use client";

import HeaderSettings from "@/components/headers/header-settings";
import { LogOut, Mail, Lock, Palette, Pencil } from "lucide-react";
import React from "react";

export default function Perfil() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f0f] to-[#111827] text-white">
      <HeaderSettings />

      <div className="pt-[120px] flex flex-col items-center px-4 py-10 gap-8">
        {/* Avatar e nome */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-20 h-20 rounded-full bg-blue-400 flex items-center justify-center text-black text-3xl font-bold">
            N
          </div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold">Nome do Usuário</h2>
            <Pencil size={20} className="text-gray-400 hover:text-blue-400 transition cursor-pointer" aria-label="Editar nome" />
          </div>
          <p className="text-gray-400 text-sm">usuario@email.com</p>
        </div>

        {/* Informações / ações */}
        <div className="w-full max-w-sm space-y-4">
          <div className="flex items-center gap-3 p-4 bg-zinc-900 rounded-lg">
            <Mail className="text-blue-400" />
            <span className="text-sm">usuario@email.com</span>
            <Pencil size={18} className="ml-auto text-gray-400 hover:text-blue-400 transition cursor-pointer" aria-label="Editar e-mail" />
          </div>

          <div className="flex items-center gap-3 p-4 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition cursor-pointer">
            <Lock className="text-blue-400" />
            <span className="text-sm">Alterar senha</span>
            <Pencil size={18} className="ml-auto text-gray-400 hover:text-blue-400 transition cursor-pointer" aria-label="Editar senha" />
          </div>

          <div className="flex items-center gap-3 p-4 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition cursor-pointer">
            <Palette className="text-blue-400" />
            <span className="text-sm">Tema: Escuro</span>
            <Pencil size={18} className="ml-auto text-gray-400 hover:text-blue-400 transition cursor-pointer" aria-label="Editar tema" />
          </div>

          <div className="flex items-center gap-3 p-4 bg-zinc-900 rounded-lg hover:bg-red-500/10 transition cursor-pointer">
            <LogOut className="text-red-500" />
            <span className="text-sm text-red-500">Sair da conta</span>
          </div>
        </div>

        {/* Rodapé */}
        <p className="text-xs text-gray-500 mt-10">Versão 1.0.0 | Jarvs App</p>
      </div>
    </div>
  );
}
