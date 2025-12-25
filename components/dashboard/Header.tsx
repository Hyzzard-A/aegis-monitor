"use client";

import { Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="h-16 border-b border-zinc-800 bg-zinc-950 flex items-center justify-between px-6">
      <div>
        <h2 className="text-white text-lg font-semibold">
          Dashboard
        </h2>
        <p className="text-sm text-zinc-500">
          Monitoramento em tempo real
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative text-zinc-400 hover:text-white">
          <Bell size={20} />
          <span className="absolute top-0 right-0 h-2 w-2 bg-yellow-400 rounded-full"></span>
        </button>

        <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-700 px-3 py-2 rounded-lg">
          <div className="h-8 w-8 rounded-full bg-yellow-500 text-black flex items-center justify-center font-bold">
            L
          </div>
          <div className="text-sm">
            <p className="text-white">Luiz Gustavo</p>
            <span className="text-zinc-500 text-xs">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
}
