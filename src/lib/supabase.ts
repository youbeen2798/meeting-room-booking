import { createClient } from '@supabase/supabase-js'
import { readSupabaseConfig } from './config'

// 브라우저에는 anon(publishable) 키만 들어간다. 보호는 RLS가 담당한다.
const { url, anonKey } = readSupabaseConfig(import.meta.env)

export const supabase = createClient(url, anonKey)
