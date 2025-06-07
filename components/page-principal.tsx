"use client";

import React, { useState } from "react";
import FunctionCard from "./cards/function-card";
import { Fan, PanelTop, Wind, BatteryCharging, Mic } from "lucide-react";

const initialStatus = {
  ar: "Desligado",
  janelas: "Todas fechadas",
  limpador: "Inativo",
  energia: "Normal",
};

export default function PagePrincipal({ setHistoryTrigger }: { setHistoryTrigger: React.Dispatch<React.SetStateAction<number>> }) {
  const [status, setStatus] = useState(initialStatus);
  const [loading, setLoading] = useState<string | null>(null);

  const functions = [
    {
      iconName: "Fan",
      title: "Ar-condicionado",
      status: status.ar,
      statusColor: status.ar === "Ligado" ? "text-blue-400" : "text-gray-400",
    },
    {
      iconName: "PanelTop",
      title: "Janelas",
      status: status.janelas,
      statusColor: status.janelas !== "Todas fechadas" ? "text-blue-400" : "text-gray-400",
    },
    {
      iconName: "Wind",
      title: "Limpador",
      status: status.limpador,
      statusColor: status.limpador === "Ativo" ? "text-blue-400" : "text-gray-400",
    },
    {
      iconName: "BatteryCharging",
      title: "Consumo de Energia",
      status: status.energia,
      statusColor: "text-blue-400",
    },
  ];

  const actionCommands = [
    {
      icon: Mic,
      label: "Ativar comando\npor voz",
      command: "ativar_comando_voz",
      update: () => {},
      isActive: false,
    },
    {
      icon: PanelTop,
      label: status.janelas === "Todas fechadas" ? "Abrir\njanelas" : "Fechar\njanelas",
      command: status.janelas === "Todas fechadas" ? "abrir_janelas" : "fechar_janelas",
      update: () =>
        setStatus((prev) => ({
          ...prev,
          janelas: prev.janelas === "Todas fechadas" ? "Abertas" : "Todas fechadas",
        })),
      isActive: status.janelas !== "Todas fechadas",
    },
    {
      icon: Fan,
      label: status.ar === "Desligado" ? "Ligar ar" : "Desligar ar",
      command: status.ar === "Desligado" ? "ligar_ar_condicionado" : "desligar_ar_condicionado",
      update: () =>
        setStatus((prev) => ({
          ...prev,
          ar: prev.ar === "Desligado" ? "Ligado" : "Desligado",
        })),
      isActive: status.ar === "Ligado",
    },
    {
      icon: Wind,
      label: status.limpador === "Inativo" ? "Ativar limpador" : "Desativar limpador",
      command: status.limpador === "Inativo" ? "ativar_limpador" : "desativar_limpador",
      update: () =>
        setStatus((prev) => ({
          ...prev,
          limpador: prev.limpador === "Inativo" ? "Ativo" : "Inativo",
        })),
      isActive: status.limpador === "Ativo",
    },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Fan":
        return Fan;
      case "PanelTop":
        return PanelTop;
      case "Wind":
        return Wind;
      case "BatteryCharging":
        return BatteryCharging;
      default:
        return Fan;
    }
  };

  const handleAction = async (command: string, updateStatus: () => void) => {
    setLoading(command);
    updateStatus();
    try {
      await fetch("/api/hardware/comando", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ command }),
      });
    } catch {
      alert("Erro ao enviar comando!");
    } finally {
      setLoading(null);
    }
    setHistoryTrigger(prev => prev + 1);
  };

  console.log(status);

  return (
    <div className="py-[60px] flex flex-col gap-12 items-center ">
      {/* Grid dos cards principais */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[40px]">
        {functions.map((item, index) => (
          <FunctionCard
            key={index}
            icon={getIcon(item.iconName)}
            title={item.title}
            status={item.status}
            statusColor={item.statusColor}
          />
        ))}
      </div>

      {/* Controles de ação rápida */}
      <div className="flex flex-wrap justify-center gap-8">
        {actionCommands.map((action, index) => (
          <button
            key={index}
            className="flex flex-col items-center justify-between focus:outline-none"
            onClick={() => handleAction(action.command, action.update)}
            disabled={loading === action.command}
          >
            <div
              className={`w-[64px] h-[64px] rounded-full border-[2px] border-[#101F3D] flex items-center justify-center transition
                ${action.isActive ? "bg-blue-500/10" : "hover:bg-blue-500/10"}
                ${loading === action.command ? "opacity-50" : ""}
              `}
            >
              <action.icon className="text-blue-400" size={28} />
            </div>
            <span className="text-white text-center text-xs mt-2 whitespace-pre-line">
              {action.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
