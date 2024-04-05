"use client";

import * as React from "react";
import Image from "next/image";
import PhotoUser from "@/../public/photo-user.png";
import purpleDesktop from "@/assets/shape/elipse-purple-full.png";
import { Button } from "@/components/ui/button";

interface DialogProps {
  open?: boolean;
}

function OptionProfile({ open, ...rest }: DialogProps) {
  return (
    <dialog
      open={open}
      className="fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
      {...rest}
    >
      <div
        className="
        border-none bg-neutras-neutra h-full top-[50%] fixed left-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg dark:border-neutral-800 dark:bg-neutral-950"
      >
        <div className="mx-auto flex flex-col items-center">
          <h1 className="text-2xl opacity-70 text-center my-6">Seu perfil</h1>
          <Image
            width={152}
            height={152}
            className="rounded-full "
            src={PhotoUser}
            alt="teste"
          />
          <p className="font-medium text-black text-center mt-2">Beca</p>
          <p className="font-normal text-xs text-neutras-bgBlack">
            recebecandrade@gmail.com
          </p>
        </div>
        <div className="flex flex-col justify-evenly">
          <Button variant="purple" className="bg-primary-purple100">
            Editar cadastro
          </Button>

          <Button variant="orangeSecond" className="w-full" type="reset">
            Voltar
          </Button>
        </div>

        <div className="flex flex-col items-center justify-start">
        <hr className="text-neutras-disable w-[180px] my-6 mx-auto" />
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
    </dialog>
  );
}

export default OptionProfile;
