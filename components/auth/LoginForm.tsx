"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { Lock, Mail, Loader2 } from "lucide-react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);

  function validarEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setErro("");

    // 🔎 validações
    if (!email || !senha) {
      return setErro("Preencha todos os campos.");
    }

    if (!validarEmail(email)) {
      return setErro("Insira um email válido.");
    }

    if (senha.length < 6) {
      return setErro("A senha deve ter pelo menos 6 caracteres.");
    }

    // 🚀 loading ON
    setLoading(true);

    // simulação de requisição
    await new Promise((res) => setTimeout(res, 1500));

    // aqui futuramente entra o login real...
    console.log("Login enviado:", { email, senha });

    setLoading(false);
  }

  return (
    <div className="w-full max-w-sm bg-zinc-950 border border-zinc-800 rounded-xl p-8 shadow-xl">
      <h1 className="text-2xl font-semibold text-white mb-2">
        Acessar painel
      </h1>
      <p className="text-sm text-zinc-400 mb-6">
        Sistema de monitoramento profissional
      </p>

      {erro && (
        <div className="mb-4 text-red-400 text-sm bg-red-950/40 border border-red-800 rounded p-2">
          {erro}
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="text-sm text-zinc-300">Email</label>
          <div className="relative mt-1">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
            <input
              type="email"
              placeholder="seu@email.com"
              className="pl-10 bg-zinc-900 border border-zinc-700 text-white w-full h-10 rounded"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>
        </div>

        <div>
          <label className="text-sm text-zinc-300">Senha</label>
          <div className="relative mt-1">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
            <input
              type="password"
              placeholder="••••••••"
              className="pl-10 bg-zinc-900 border border-zinc-700 text-white w-full h-10 rounded"
              value={senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setSenha(e.target.value)}
              disabled={loading}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 rounded"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Entrando...
            </span>
          ) : (
            "Entrar"
          )}
        </button>
      </form>
    </div>
  );
}
