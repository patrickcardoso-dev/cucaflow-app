"use client";
import CreatToDo from "@/components/form/task/create";
import EditTask from "@/components/form/task/edit";
import { Button } from "@/components/ui/button";
import { getUser } from "@/services/user";
import { deleteCookies } from "@/util/coockies";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

import { ProfileForm } from "@/components/form/editUser";
import OptionProfile from "@/components/modal/optionProfile";
import DeleteAccount from "@/components/modal/deleteAccount";
import { Task } from "@/components/task";

export type UserProps = {
  user_id: string;
  token: string;
  id: string
}

type UserDataProps = {
 id: string,
 username: string,
 email: string, 
 avatar: string, 
 isSocialLogin: boolean
}

export default function Dashboard() {
  const [showEditTasks, setShowEditTasks] = useState<Boolean>(false)
  const [showAddTasks, setShowAddTasks] = useState<Boolean>(false)
  const [userData, setUserData] = useState<UserDataProps>()
  const session = useSession();
  const userSession = session.data?.user as UserProps
  
  
  useEffect(() => {
    async function userGetData() {
      try {
        const getUserData = await getUser(`user/${userSession?.user_id}`)
      setUserData(getUserData);
      } catch (error) {
        console.log(error); 
      }
      
    }
    userGetData()
  }, [session])

  

  async function getOut() {
    await signOut();
    deleteCookies()
  }

  return (
    <main className="flex flex-col min-h-screen items-center gap-6  relative overflow-hidden laptop:flex-row">
      <OptionProfile open={true} />
      {/* <ProfileForm/> */}
      <DeleteAccount open={false} />
      
      {userData ? ( 
        <div className="flex flex-col justify-center items-center gap-4">
          <h1>Username: {userData.username}</h1>
          <h1>Email: {userData.email}</h1>
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
