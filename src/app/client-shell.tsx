"use client";

import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Bubbles from "@/components/Bubbles";

export default function ClientShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-app text-slate-900">
      <div className="relative">
        <Bubbles />
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
