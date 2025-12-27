export default function HowWorks() {
  return (
    <section className="bg-[#0d0d0d] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Simples de usar, poderoso para escalar
        </h2>

        <p className="text-gray-400 mt-4">
          Conecte suas centrais → Receba eventos → Gerencie com segurança.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="border border-zinc-800 bg-black p-6 rounded-xl">
            <span className="text-yellow-400 text-4xl font-bold">1</span>
            <h3 className="text-white font-semibold text-xl mt-2">
              Conecte a Central
            </h3>
            <p className="text-gray-400 mt-2">
              Cadastro simples e rápido das centrais monitoradas.
            </p>
          </div>

          <div className="border border-zinc-800 bg-black p-6 rounded-xl">
            <span className="text-yellow-400 text-4xl font-bold">2</span>
            <h3 className="text-white font-semibold text-xl mt-2">
              Receba eventos
            </h3>
            <p className="text-gray-400 mt-2">
              Processamento inteligente com classificação automática.
            </p>
          </div>

          <div className="border border-zinc-800 bg-black p-6 rounded-xl">
            <span className="text-yellow-400 text-4xl font-bold">3</span>
            <h3 className="text-white font-semibold text-xl mt-2">
              Gerencie tudo
            </h3>
            <p className="text-gray-400 mt-2">
              Painel moderno com histórico, filtros e insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
