import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-screen bg-zinc-950 text-white flex items-center justify-center">
      <div className="max-w-md text-center p-8 bg-zinc-900 border border-zinc-800 rounded">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-gray-300 mb-6">Página não encontrada — parece que você se perdeu.</p>
        <div className="flex gap-3 justify-center">
          <Link href="/" className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded text-sm">
            Início
          </Link>
          <Link href="/login" className="px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-black rounded text-sm">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
