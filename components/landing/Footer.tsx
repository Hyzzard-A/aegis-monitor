export default function Footer() {
  return (
    <footer className="bg-black py-10 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-white text-lg font-semibold">
          Aegis Monitor
        </h3>

        <p className="text-gray-500 text-sm mt-2">
          Plataforma de monitoramento inteligente — Performance, segurança e escalabilidade.
        </p>

        <p className="text-gray-600 text-xs mt-6">
          © {new Date().getFullYear()} — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
