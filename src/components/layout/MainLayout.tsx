import React from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative min-h-screen flex"
      style={{ backgroundColor: 'var(--background)' }}
    >
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 px-6 py-8 spotlight-bg transition-colors duration-300">
          {children}
        </main>
      </div>
    </div>
  );
}
