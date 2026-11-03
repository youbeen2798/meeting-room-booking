import { describe, expect, it } from 'vitest'
import { readSupabaseConfig } from './config'

describe('readSupabaseConfig', () => {
  it('URL과 anon 키가 있으면 값을 돌려준다', () => {
    const config = readSupabaseConfig({
      VITE_SUPABASE_URL: 'https://example.supabase.co',
      VITE_SUPABASE_ANON_KEY: 'anon-key',
    })
    expect(config).toEqual({
      url: 'https://example.supabase.co',
      anonKey: 'anon-key',
    })
  })

  it('키가 없으면 오류를 던진다', () => {
    expect(() => readSupabaseConfig({ VITE_SUPABASE_URL: 'https://x.supabase.co' })).toThrow()
  })

  it('공백만 있는 값도 없는 것으로 본다', () => {
    expect(() =>
      readSupabaseConfig({ VITE_SUPABASE_URL: '  ', VITE_SUPABASE_ANON_KEY: 'k' }),
    ).toThrow()
  })
})
