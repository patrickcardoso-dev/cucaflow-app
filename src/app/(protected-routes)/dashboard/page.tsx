"use client";
import CreatToDo from "@/components/form/task/create";
import EditTask from "@/components/form/task/edit";
import { Button } from "@/components/ui/button";
import { getUser } from "@/services/user";
import { getCookie } from "@/util/coockies";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

type UserProps = {
  user_id: string;
  token: string;
  id: string
}

export default function Dashboard() {
  const [showEditTasks, setShowEditTasks] = useState<Boolean>(false)
  const [showAddTasks, setShowAddTasks] = useState<Boolean>(false)
  const session = useSession();
  const user = session.data?.user as UserProps
  
  
  useEffect(() => {
    async function userGetData() {
      const getUserData = await getUser(`user/:${user?.user_id}`, user?.token)
      console.log(getUserData);
    }
    userGetData()
  }, [])

  

  async function getOut() {
    await signOut();
  }

  return (
    <main className="flex flex-col min-h-screen items-center gap-6  relative overflow-hidden laptop:flex-row">
      {user ? ( 
        <div className="flex flex-col justify-center items-center gap-4">
          <h1>'oi'</h1>
          <Button onClick={getOut}>Sair</Button>
          <div className="flex gap-2">
          <Button variant='orangeSecond' onClick={() => setShowAddTasks(true)}>Criar tarefa</Button>
          <Button variant='purpleSecond' onClick={() => setShowEditTasks(true)}>Editar Tarefa</Button>
          </div>
        </div>
      ) : (
        <div>Carregando...</div>
      )}
      {showEditTasks && <EditTask  setShowEditTasks={setShowEditTasks}/>}
      {showAddTasks && <CreatToDo setShowAddTasks={setShowAddTasks}/> }
        
    </main>
  );
}
