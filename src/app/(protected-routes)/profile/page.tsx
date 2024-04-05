"use client";

import Image from "next/image";
import purpleDesktop from "@/assets/shape/elipse-purple-full.png";
import { Button } from "@/components/ui/button";
import { getUser } from "@/services/user";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ProfileForm } from "@/components/form/editUser";

export type UserProps = {
  user_id: string;
  token: string;
  id: string;
};

export type UserDataProps = {
  id: string;
  username: string;
  email: string;
  avatar: string;
  isSocialLogin: boolean;
};

export default function OptionProfile() {
  const [openEdit, setOpenEdit] = useState<boolean>(true);
  const [openProfileEditing, setProfileEditing] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserDataProps>();
  const session = useSession();
  const userSession = session.data?.user as UserProps;
  const router = useRouter();

  function handleProfileEditing() {
    setProfileEditing(true);
  }

  function handleRedirect() {
    setOpenEdit(false);
    setProfileEditing(false);
    router.push('/dashboard');
  }

  useEffect(() => {
    async function getUserData() {
      try {
        const getUserData = await getUser(`user/${userSession?.user_id}`);
        setUserData(getUserData);
      } catch (error) {
        console.error(error);
      }
    }
    getUserData();
    console.log(userData)
  }, [session]);

  return (
    <dialog
      open
      className="fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
    >
        {openProfileEditing && <ProfileForm handleRedirect={handleRedirect}/>}
        {!openProfileEditing && userData && (
          <div
            className="
            border-none bg-neutras-neutra h-full top-[50%] fixed left-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg dark:border-neutral-800 dark:bg-neutral-950"
          >
            <div className="mx-auto flex flex-col items-center">
              <h1 className="text-2xl opacity-70 text-center mt-16 mb-8">Seu perfil</h1>
              <Image
                width={152}
                height={152}
                className="rounded-full"
                src={userData.avatar.includes("null") ? "/photo-user.png" : userData.avatar} 
                alt="Foto de perfil"
              />
              <p className="font-medium text-black text-center mt-4">{userData?.username}</p>
              <p className="font-normal text-xs mt-2 text-neutras-bgBlack">
                {userData?.email}
              </p>
            </div>

            <div className="flex flex-col justify-evenly gap-6 mt-8">
              <Button variant="purple" className="bg-primary-purple100" onClick={handleProfileEditing}>
                Editar cadastro
              </Button>

              <Button variant="orangeSecond" className="w-full" type="reset" onClick={handleRedirect}>
                Voltar
              </Button>
            </div>

            <div className="flex flex-col items-center justify-start mt-20 mb-6">
              <hr className="w-[180px] my-6 mx-auto" />
              <p className="font-bold text-neutras-gray300">
                Deseja excluir conta?{" "}
                <span className="cursor-pointer text-primary-purple100">
                  Excluir
                </span>
              </p>
            </div>
            <Image
              src={purpleDesktop}
              alt="elipse roxa"
              className="max-w-sm absolute bottom-0 left-0 -z-10 translate-y-32 -translate-x-36 rotate-7 laptop:rotate-3 laptop:-translate-x-36 laptop:translate-y-20 laptop:max-w-lg"
            />
          </div>
        )}
      {!openProfileEditing && !userData && <div>Carregando...</div>}
    </dialog>
  );
};
