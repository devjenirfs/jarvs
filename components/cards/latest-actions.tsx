"use client";

import React, { useEffect, useState } from "react";
import { Check } from "lucide-react";

type ActionLog = {
  command: string;
  createdAt: string;
};

export default function LatestActions({ trigger }: { trigger: number }) {
  const [actions, setActions] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/hardware/latest")
      .then(res => res.json())
      .then(data => {
        setActions(
          data.logs.map(
            (log: ActionLog) =>
              `${log.command.replaceAll("_", " ")} às ${new Date(log.createdAt).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}`
          )
        );
      });
  }, [trigger]);

  return (
    <div className="bg-zinc-900 rounded-2xl p-4 space-y-2 w-full text-sm max-w-[600px]">
      {actions.map((text, index) => (
        <div key={index} className="flex items-start gap-2 text-white">
          <Check className="text-green-500 w-4 h-4 mt-[2px]" />
          <span>{text}</span>
        </div>
      ))}
    </div>
  );
}