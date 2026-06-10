import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const isSupabaseConfigured =
  supabaseUrl !== "" &&
  supabaseUrl !== "your_supabase_url" &&
  supabaseAnonKey !== "" &&
  supabaseAnonKey !== "your_supabase_anon_key";

export const supabase = createClient(
  isSupabaseConfigured ? supabaseUrl : "https://placeholder.supabase.co",
  isSupabaseConfigured ? supabaseAnonKey : "placeholder"
);

export interface RSVPResponse {
  id: string;
  nama_tamu: string;
  kehadiran: "hadir" | "tidak_hadir";
  ucapan: string | null;
  created_at: string;
}

export async function submitRSVP(data: {
  nama_tamu: string;
  kehadiran: string;
  ucapan: string;
}) {
  if (!isSupabaseConfigured) {
    throw new Error("Supabase is not configured yet. Please update .env.local");
  }
  const { error } = await supabase.from("rsvp_responses").insert([data]);
  if (error) throw error;
}

export async function fetchRSVPResponses(): Promise<RSVPResponse[]> {
  if (!isSupabaseConfigured) return [];

  const { data, error } = await supabase
    .from("rsvp_responses")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return (data as RSVPResponse[]) || [];
}
