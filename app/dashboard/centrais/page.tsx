export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Visão Geral</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
          <p className="text-sm text-zinc-400">Centrais ativas</p>
          <h2 className="text-3xl font-bold mt-2 text-yellow-400">0</h2>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
          <p className="text-sm text-zinc-400">Eventos hoje</p>
          <h2 className="text-3xl font-bold mt-2 text-yellow-400">0</h2>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
          <p className="text-sm text-zinc-400">Status do sistema</p>
          <h2 className="text-3xl font-bold mt-2 text-red-400">Offline</h2>
        </div>

      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <p className="text-sm text-zinc-400">Gráfico de centrais (em breve)</p>
        <p className="text-yellow-400">[Gráfico Placeholder]</p>
        </div>
      </div>
    </div>
  );
}
