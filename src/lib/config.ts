export interface SupabaseConfig {
  url: string
  anonKey: string
}

type EnvLike = Record<string, string | undefined>

// 환경변수에서 Supabase 연결 정보를 읽는다. 없으면 명확한 오류를 던진다.
export function readSupabaseConfig(env: EnvLike): SupabaseConfig {
  const url = env.VITE_SUPABASE_URL?.trim()
  const anonKey = env.VITE_SUPABASE_ANON_KEY?.trim()

  if (!url || !anonKey) {
    throw new Error(
      'VITE_SUPABASE_URL과 VITE_SUPABASE_ANON_KEY를 .env.local 또는 Vercel 환경변수에 설정하세요.',
    )
  }

  return { url, anonKey }
}
