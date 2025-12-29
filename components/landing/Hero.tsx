"use client";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="w-full min-h-[85vh] bg-black flex items-center border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">

        <div className="flex-1">
          <span className="px-4 py-1 text-xs border border-yellow-500/40 text-yellow-400 rounded-full">
            Plataforma Profissional de Monitoramento
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-white mt-6 leading-tight">
            Controle absoluto do
            <span className="text-yellow-400"> monitoramento</span>
            <br /> da sua operação
          </h1>

          <p className="text-gray-400 text-lg mt-4">
            Painel moderno, eventos em tempo real, multi-empresa, preparado
            para alto volume e escalabilidade — com a mesma identidade do painel interno.
          </p>

          <div className="flex gap-4 mt-8">
            <Button
              className="px-6 py-6 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold"
              onClick={() => window.location.href = "/login"}
            >
              Entrar no Sistema
            </Button>

            <Button
              variant="outline"
              className="px-6 py-6 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black"
            >
              Solicitar Demonstração
            </Button>
          </div>
        </div>

        <div className="flex-1 hidden md:flex">
          <div className="w-full h-[380px] bg-gradient-to-br from-zinc-900 to-black rounded-xl border border-yellow-500/20 shadow-lg shadow-yellow-500/10 flex items-center justify-center">
            <span className="text-gray-500">
              (Mock / Print do Dashboard aqui futuramente)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
