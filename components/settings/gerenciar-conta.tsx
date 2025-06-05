'use client';
import {
    ShieldCheck,
    Mail,
    Phone,
    FileText,
    UserPlus,
    Trash2,
  } from "lucide-react";
  import React from "react";
  
  export default function GerenciarConta() {
    const actions = [
      {
        icon: ShieldCheck,
        label: "Notificações de Segurança",
        action: () => console.log("Segurança"),
      },
    
      {
        icon: Mail,
        label: "Alterar E-mail",
        action: () => console.log("Alterar E-mail"),
      },
      {
        icon: Phone,
        label: "Alterar Número",
        action: () => console.log("Alterar Número"),
      },
      {
        icon: FileText,
        label: "Solicitar Dados da Conta",
        action: () => console.log("Download Dados"),
      },
      {
        icon: UserPlus,
        label: "Adicionar Conta",
        action: () => console.log("Adicionar Conta"),
      },
    ];
  
    return (
      <div className="pt-[120px] pb-[60px] bg-gradient-to-r from-[#0f0f0f] to-[#111827] text-white">
        <div className="text-center mb-8 px-4">
          <h1 className="text-3xl font-bold">Gerenciar Conta</h1>
          <p className="text-gray-400 mt-2 text-sm">
            Gerencie sua conta e suas informações
          </p>
        </div>
  
        {/* Lista de Ações */}
        <div className="max-w-md mx-auto px-4 space-y-3">
          {actions.map((item, index) => (
            <button
              key={index}
              onClick={item.action}
              className="w-full flex items-center justify-between p-4 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition text-left"
            >
              <div className="flex items-center gap-3">
                <item.icon className="text-blue-400 w-5 h-5" />
                <span className="text-sm">{item.label}</span>
              </div>
            </button>
          ))}
  
          {/* Excluir conta */}
          <button
            onClick={() => console.log("Excluir Conta")}
            className="w-full flex items-center justify-between p-4 bg-red-900/20 hover:bg-red-800/30 rounded-lg transition"
          >
            <div className="flex items-center gap-3">
              <Trash2 className="text-red-500 w-5 h-5" />
              <span className="text-sm text-red-500">Excluir Conta</span>
            </div>
          </button>
        </div>
      </div>
    );
  }
  