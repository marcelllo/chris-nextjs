import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Olá</h1>
      <Link href="/users">Usuários</Link>
    </main>
  )
}
