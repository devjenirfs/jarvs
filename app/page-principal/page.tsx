"use client";

import LatestActions from "@/components/cards/latest-actions";
import Header from "@/components/headers/header";
import PagePrincipal from "@/components/page-principal";
import React from "react";

export default function Home() {
  const [historyTrigger, setHistoryTrigger] = React.useState(0);
  return(
    <div className="flex flex-col gap-12 py-[60px] bg-gradient-to-r from-[#0f0f0f] to-[#111827] items-center justify-center">
        <Header/>
        <PagePrincipal setHistoryTrigger={setHistoryTrigger} />
        <LatestActions trigger={historyTrigger} />
    </div>
  );
}