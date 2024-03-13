'use client'
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";

export  default  function Dashboard() {
  const session = useSession()
  console.log('dash', session)
  const user = session.data?.user
  async function sair() {
    await signOut()
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-6 relative overflow-hidden laptop:flex-row">
      <h1>Nome</h1>
      <h2>{user?.email}</h2>
      <img src={user?.image ?? ''} alt="" />
      <button onClick={sair}>Sair</button>
    </main>
  )
}