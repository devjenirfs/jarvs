import { ArrowLeft, User } from "lucide-react";
import Link from "next/link";

export default function HeaderSettings() {
  return (
    <div className="fixed top-0 flex flex-row justify-between items-center px-[24px] md:px-[48px] py-[15px] w-full border-[2px] border-[#1F2937] bg-zinc-900/50 backdrop-blur-md hover:bg-zinc-900/80 transition-colors">
      <Link
        href="/page-principal"
        className="text-white hover:text-blue-400 transition"
        aria-label="Voltar"
      >
        <ArrowLeft size={30} />
      </Link>

      <span className="text-sm sm:text-base font-light text-gray-300">
        Conduza com inteligência
      </span>

      <Link
        href="/perfil"
        className="text-white hover:text-blue-400 transition"
        aria-label="Perfil"
      >
        <User size={30} />
      </Link>
    </div>
  );
}
