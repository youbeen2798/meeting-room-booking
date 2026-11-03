import { readSupabaseConfig } from './lib/config'
import './App.css'

function checkConfig(): string {
  try {
    readSupabaseConfig(import.meta.env)
    return 'Supabase 설정 확인됨'
  } catch (error) {
    return error instanceof Error ? error.message : '설정 확인 실패'
  }
}

export default function App() {
  return (
    <main>
      <h1>회의실 예약</h1>
      <p>{checkConfig()}</p>
    </main>
  )
}
