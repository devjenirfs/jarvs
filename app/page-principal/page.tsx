import Header from "@/components/headers/header";
import PagePrincipal from "@/components/page-principal";
import React from "react";

export default function Home() {
  return(
    <div className="py-[60px] bg-gradient-to-r from-[#0f0f0f] to-[#111827] flex items-center justify-center">
        <Header/>
        <PagePrincipal/>
    </div>
  );
}