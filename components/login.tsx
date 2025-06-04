import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Login() {
  return(
    <div className="py-[60px] bg-gradient-to-b from-[#0f0f0f] to-[#111827] flex flex-col items-center justify-center">
      <Image src="/logo-jarvs.png" alt="Logo da Jarvs" width={300} height={300} />
      <div className="flex flex-col gap-4 w-full max-w-[400px] ">
        <input
          type="email"
          placeholder="Email"
          className="border-2 border-zinc-800 bg-zinc-900 p-4 rounded-md w-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition"
        />
        <input
          type="password"
          placeholder="Senha"
          className="border-2 border-zinc-800 bg-zinc-900 p-4 rounded-md w-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition mt-4"
        />

        <Link href="/page-principal" className="bg-blue-500 text-white p-4 rounded-md w-full max-w-[400px]">
          <span className="flex items-center justify-center text-[#0f0f0f]">Login</span>
        </Link>

        <span className="text-zinc-400 text-sm">
          Não tem uma conta? <Link href="/register" className="text-blue-500">Cadastre-se</Link>
        </span>

        <span className="text-zinc-400 text-sm">
          Esqueceu sua senha? <Link href="/forgot-password" className="text-blue-500">Recuperar senha</Link>
        </span>
      </div>
    </div>
  );
}
