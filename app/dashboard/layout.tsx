"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import { supabase } from "@/app/lib/supabase";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    let mounted = true;

    supabase.auth
      .getSession()
      .then(({ data }) => {
        const session = data?.session;
        if (!mounted) return;
        if (!session) {
          router.replace("/login");
        } else {
          setChecking(false);
        }
      })
      .catch(() => {
        if (mounted) router.replace("/login");
      });

    return () => {
      mounted = false;
    };
  }, [router]);

  if (checking) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-white bg-zinc-950">
        Carregando...
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-zinc-950 text-white flex">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
