import React from "react";
import { Check } from "lucide-react";

export default function LatestActions() {
  const actions = [
    "Janela aberta com comando de voz às 10:32",
    "Ar condicionado ligado às 11:03",
  ];

  return (
    <div className="bg-zinc-900 rounded-2xl p-4 space-y-2 w-full text-sm">
      {actions.map((text, index) => (
        <div key={index} className="flex items-start gap-2 text-white">
          <Check className="text-green-500 w-4 h-4 mt-[2px]" />
          <span>{text}</span>
        </div>
      ))}
    </div>
  );
}
