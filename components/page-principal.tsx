"use client";

import React from "react";
import FunctionCard from "./cards/function-card";
import { Fan, PanelTop, Wind, BatteryCharging, Mic } from "lucide-react";
import LatestActions from "./cards/latest-actions";
export default function PagePrincipal() {
  const functions = [
    {
      iconName: "Fan",
      title: "Ar-condicionado",
      status: "Ligado",
    },
    {
      iconName: "PanelTop",
      title: "Janelas",
      status: "Todas fechadas",
    },
    {
      iconName: "Wind",
      title: "Limpador",
      status: "Inativo",
      statusColor: "text-gray-400",
    },
    {
      iconName: "BatteryCharging",
      title: "Consumo de Energia",
      status: "Normal",
    },
  ];

  const actions = [
    { icon: Mic, label: "Ativar comando\npor voz" },
    { icon: PanelTop, label: "Abrir/Fechar\njanelas" },
    { icon: Fan, label: "Ligar/\nDesligar ar" },
    { icon: Wind, label: "Ativar/\nDesativar limpador" },
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
        {actions.map((action, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between"
          >
            <div className="w-[64px] h-[64px] rounded-full border-[2px] border-[#101F3D] flex items-center justify-center hover:bg-blue-500/10 transition">
              <action.icon className="text-blue-400" size={28} />
            </div>
            <span className="text-white text-center text-xs mt-2 whitespace-pre-line">
              {action.label}
            </span>
          </div>
        ))}
      </div>
      <LatestActions />
    </div>
  );
}
