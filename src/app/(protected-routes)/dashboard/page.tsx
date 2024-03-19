"use client";
import CreatToDo from "@/components/form/task/create";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";

export default function Dashboard() {
  const [showModal, setShowModal] = useState<Boolean>(false);
  const session = useSession();
  const user = session.data?.user;

  async function getOut() {
    await signOut();
  }

  return (
    <main className="flex flex-col min-h-screen items-center gap-6  relative overflow-hidden laptop:flex-row">
      {user ? (
        <div className="flex flex-col justify-center items-center gap-4">
          <h1>{user?.name}</h1>
          <h2>{user?.email}</h2>
          <img src={user?.image ?? ""} alt="" />
          <Button onClick={getOut}>Sair</Button>
          <Button onClick={() => setShowModal(true)}>+</Button>
        </div>
      ) : (
        <div>Carregando...</div>
      )}
      {showModal && <section className="absolute w-full h-full bg-neutras-bgBlack/60 flex items-center">
        <div className="bg-neutras-neutra w-full p-6 rounded-2xl mt-auto">
          <CreatToDo setShowModal={setShowModal}/>
        </div>
      </section>}
    </main>
  );
}
