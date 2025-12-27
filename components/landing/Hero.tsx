"use client";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="w-full min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-black to-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Monitoramento Inteligente,
          <span className="text-yellow-400"> em Tempo Real</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl mt-4">
          Plataforma moderna para monitoramento de centrais de alarme com alta
          performance, multi-empresa, escalável e pronta para crescer com você.
        </p>

        <div className="flex gap-4 justify-center mt-8">
          <Button
            className="px-6 py-6 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold"
            onClick={() => (window.location.href = "/login")}
          >
            Acessar Painel
          </Button>

          <Button
            variant="outline"
            className="px-6 py-6 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black"
          >
            Falar com especialista
          </Button>
        </div>
      </div>
    </section>
  );
}
