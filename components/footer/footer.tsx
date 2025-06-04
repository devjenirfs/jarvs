import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111827] border-t border-zinc-800 text-gray-400 text-center text-sm py-[20px]">
      <p>
        © {new Date().getFullYear()} Jarvs – Todos os direitos reservados. v1.0.0
      </p>
      <div className="flex flex-row justify-center space-x-3 mt-2">
        <a href="/settings/termos-de-uso" className="hover:text-white underline underline-offset-2">
          Termos de Uso
        </a>
        <span>|</span>
        <a href="/settings/politica-de-privacidade" className="hover:text-white underline underline-offset-2">
          Política de Privacidade
        </a>
        <span>|</span>
        <a href="/settings/sobre" className="hover:text-white underline underline-offset-2">
          Sobre
        </a>
      </div>
    </footer>
  );
}
