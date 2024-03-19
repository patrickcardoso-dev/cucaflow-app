'use client'
import CreatToDo from "@/components/form/toDo";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";

export  default  function Dashboard() {
  const session = useSession()
  const user = session.data?.user
  
  async function getOut() {
    await signOut()
  }
  
  return (
    <main className="flex min-h-screen items-center justify-center gap-6 p-6 relative overflow-hidden laptop:flex-row">
      {user ? (<div className="flex flex-col justify-center items-center gap-4">
      <h1>{user?.name}</h1>
      <h2>{user?.email}</h2>
      <img src={user?.image ?? ''} alt="" />
      <Button onClick={getOut}>Sair</Button>
      </div>) : (<div>Carregando...</div>)}
      <CreatToDo/>
    </main>
  )
}