import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Register() {
  return(
    <div className="py-[60px] bg-gradient-to-r from-[#0f0f0f] to-[#111827] flex flex-col gap-[40px] items-center justify-center">
      <Image src="/logo-jarvs.png" alt="Logo da Jarvs" width={300} height={300} />
      <div className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
        Cadastre-se
      </div>
      <div className="flex flex-col gap-4 w-full max-w-[400px]">
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
          <span className="flex items-center justify-center text-[#0f0f0f]">Cadastrar</span>
        </Link>

        <span className="text-zinc-400 text-sm">
          Já tem uma conta? <Link href="/" className="text-blue-500">Faça login</Link>
        </span>

       
      </div>
    </div>
  );
}
