"use client";

import React, { useState } from "react";
import { LucideIcon } from "lucide-react";

interface FunctionCardProps {
  icon: LucideIcon;
  title: string;
  status: string;
  statusColor?: string;
}

export default function FunctionCard({
  icon: Icon,
  title,
  status: initialStatus,
  statusColor = "text-blue-400",
}: FunctionCardProps) {
  const [isActive, setIsActive] = useState(initialStatus === "Ligado");
  const [currentStatus, setCurrentStatus] = useState(initialStatus);
  const [currentStatusColor, setCurrentStatusColor] = useState(statusColor);

  const handleToggle = () => {
    const newIsActive = !isActive;
    setIsActive(newIsActive);
    setCurrentStatus(newIsActive ? "Ligado" : "Inativo");
    setCurrentStatusColor(newIsActive ? "text-blue-400" : "text-gray-400");
  };

  return (
    <div 
      onClick={handleToggle}
      className="flex flex-col items-center justify-between p-6 rounded-2xl border-2 border-zinc-800 bg-zinc-900 transition-all duration-300 w-[200px] h-[180px] hover:bg-gradient-to-br hover:from-[#203660] hover:to-[#101F3D] hover:border-blue-400 hover:scale-[1.02] cursor-pointer"
    >
      {/* Ícone maior */}
      <Icon size={40} className={currentStatusColor} />

      {/* Título com fonte maior */}
      <div className="text-white text-center font-medium text-lg leading-tight tracking-tight capitalize">
        {title}
      </div>

      {/* Status com fonte padrão e cor dinâmica */}
      <span className={`${currentStatusColor} text-base font-light`}>
        {currentStatus}
      </span>
    </div>
  );
}

