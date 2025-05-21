// src/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// URLとキーが.envファイルから正しく読み込めているか確認
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase URL and Anon Key are required. Make sure you have them in your .env file with VITE_ prefix.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)