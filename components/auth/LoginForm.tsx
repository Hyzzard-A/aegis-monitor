"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { Lock, Mail, Loader2 } from "lucide-react";
import { getSupabaseClient } from "@/app/lib/supabase";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    setErrorMsg("");

    if (!email || !password) {
      setErrorMsg("Preencha email e senha.");
      return;
    }

    try {
      setLoading(true);

      const supabase = getSupabaseClient();
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setErrorMsg(error.message);
        return;
      }

      const accessToken = data?.session?.access_token;
      if (accessToken) {
        try {
          await fetch("/api/auth/set-cookie", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ access_token: accessToken }),
          });
        } catch (err) {
          // non-fatal: proceed to dashboard even if cookie set fails
        }
      }

      router.push("/dashboard");
    } catch (error) {
      setErrorMsg("Erro inesperado. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      {errorMsg && (
        <div className="bg-red-500/10 border border-red-500 text-red-400 p-3 rounded-md text-sm">
          {errorMsg}
        </div>
      )}

      <div>
        <label className="text-sm text-gray-300 flex items-center gap-2">
          <Mail size={16} /> Email
        </label>
        <input
          type="email"
          placeholder="seu@email.com"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          className="w-full h-10 rounded bg-zinc-900 border border-zinc-700 text-white px-3"
          disabled={loading}
        />
      </div>

      <div>
        <label className="text-sm text-gray-300 flex items-center gap-2">
          <Lock size={16} /> Senha
        </label>
        <input
          type="password"
          placeholder="••••••••••"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          className="w-full h-10 rounded bg-zinc-900 border border-zinc-700 text-white px-3"
          disabled={loading}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center gap-2 justify-center bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 rounded"
      >
        {loading && <Loader2 size={18} className="animate-spin" />}
        Entrar
      </button>
    </form>
  );
}
