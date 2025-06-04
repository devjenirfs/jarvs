import { CheckCircle } from "lucide-react";
import React from "react";

export default function Historico() {
  return (
    <div>
        <div className="max-w-md mx-auto mt-10 px-6">
        <h3 className="text-sm text-gray-400 mb-3">Últimos comandos:</h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-green-400">
            <CheckCircle className="w-4 h-4" />
            <span>“Ligar ar-condicionado”</span>
          </div>
          <div className="flex items-center gap-2 text-green-400">
            <CheckCircle className="w-4 h-4" />
            <span>“Fechar janelas”</span>
          </div>
        </div>
      </div>
    </div>
  );
}