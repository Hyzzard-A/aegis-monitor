import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let _supabase: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient {
  if (typeof window === "undefined") {
    throw new Error("getSupabaseClient must be used in the browser");
  }

  if (!_supabase) {
    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error("Missing Supabase environment variables (NEXT_PUBLIC_SUPABASE_URL / ANON_KEY)");
    }
    _supabase = createClient(supabaseUrl, supabaseAnonKey);
  }

  return _supabase;
}
