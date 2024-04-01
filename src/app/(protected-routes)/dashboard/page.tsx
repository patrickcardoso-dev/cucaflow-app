"use client";
import CreatToDo from "@/components/form/task/create";
import EditTask from "@/components/form/task/edit";
import { Header } from "./component/header";

import { getUser } from "@/services/user";

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

export type UserDataProps = {
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

  


  return (
    <main className="flex flex-col min-h-screen items-center gap-6  relative overflow-hidden laptop:flex-row">

      {/* <OptionProfile open={true} /> */}
      {/* <ProfileForm/> */}
      <DeleteAccount open={false} />
      

      {userData ? ( 
        <div>
          <Header userData={userData}/>
    
        </div>
      ) : (
        <div>Carregando...</div>
      )} 
      {showEditTasks && <EditTask  setShowEditTasks={setShowEditTasks}/>}
      {showAddTasks && <CreatToDo setShowAddTasks={setShowAddTasks}/> }  
    </main>
  );
}
