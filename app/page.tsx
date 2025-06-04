import Header from "@/components/header";
import PagePrincipal from "@/components/page-principal";
import React from "react";

export default function Home() {
  return(
    <div className="bg-gradient-to-b from-[#0f0f0f] to-[#111827] min-h-screen flex items-center justify-center">
        <Header/>
        <PagePrincipal/>

    </div>
  );
}