"use client";

import { ShieldAlert, LayoutDashboard, Server, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { label: "Visão Geral", icon: LayoutDashboard, href: "/dashboard" },
  { label: "Centrais", icon: Server, href: "/dashboard/centrais" },
  { label: "Eventos", icon: ShieldAlert, href: "/dashboard/eventos" },
  { label: "Configurações", icon: Settings, href: "/dashboard/config" },
];

export default function Sidebar() {
  const path = usePathname();

  return (
    <aside className="h-full w-64 bg-zinc-950 border-r border-zinc-800 flex flex-col">
      <div className="p-6 border-b border-zinc-800">
        <h1 className="text-xl font-bold text-white tracking-wide">
          Aegis <span className="text-yellow-400">Monitor</span>
        </h1>
        <p className="text-xs text-zinc-500 mt-1">
          Painel de monitoramento
        </p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;
          const active = path === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition 
                ${
                  active
                    ? "bg-yellow-500 text-black font-semibold"
                    : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
                }`}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-zinc-800 text-zinc-500 text-xs">
        v1.0 • SaaS Monitoramento
      </div>
    </aside>
  );
}
