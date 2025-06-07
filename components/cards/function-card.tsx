"use client";

import React from "react";
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
  status,
  statusColor = "text-blue-400",
}: FunctionCardProps) {
  return (
    <div
      className={`flex flex-col items-center justify-between p-6 rounded-2xl border-2
        ${statusColor === "text-blue-400" ? "border-blue-400 bg-gradient-to-br from-[#203660] to-[#101F3D]" : "border-zinc-800 bg-zinc-900"}
        transition-all duration-300 w-[200px] h-[180px]
        ${statusColor !== "text-blue-400" ? "hover:bg-gradient-to-br hover:from-[#203660] hover:to-[#101F3D] hover:border-blue-400 hover:scale-[1.02]" : ""}
        cursor-pointer`}
    >
      {/* Ícone maior */}
      <Icon size={40} className={statusColor} />

      {/* Título com fonte maior */}
      <div className="text-white text-center font-medium text-lg leading-tight tracking-tight capitalize">
        {title}
      </div>

      {/* Status com fonte padrão e cor dinâmica */}
      <span className={`${statusColor} text-base font-light`}>
        {status}
      </span>
    </div>
  );
}

