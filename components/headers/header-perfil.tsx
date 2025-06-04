"use client";

import { ArrowLeft, Settings } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HeaderSettings() {
  const router = useRouter();

  return (
    <div className="fixed top-0 flex flex-row justify-between items-center px-[24px] md:px-[48px] py-[15px] w-full border-[2px] border-[#1F2937] bg-zinc-900/50 backdrop-blur-md hover:bg-zinc-900/80 transition-colors">
      <button
        onClick={() => router.back()}
        className="text-white hover:text-blue-400 transition"
        aria-label="Voltar"
      >
        <ArrowLeft size={30} />
      </button>

      <span className="text-sm sm:text-base font-light text-gray-300">
        Conduza com inteligência
      </span>

      <Link
        href="/settings"
        className="text-white hover:text-blue-400 transition"
        aria-label="Perfil"
      >
        <Settings size={30} />
      </Link>
    </div>
  );
}
