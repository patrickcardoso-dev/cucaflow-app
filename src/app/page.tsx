"use client";

import Image from "next/image";
import logoDesktop from "../assets/logo/logo-cucaflow-desktop.png";
import slogan from "../assets/logo/slogan.png";
import orangeDesktop from "../assets/shape/ellipse-orange-full.png";
import purpleDesktop from "../assets/shape/elipse-purple-full.png";
import { manrope } from "./fonts";
import { ProfileForm } from "@/components/form/editUser";
import LoginForm from "@/components/form/login/login";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { toastify } from "@/lib/Toast";
import OptionProfile from "@/components/modal/optionProfile";
import { Input } from "@/components/ui/input";




  export  default  function Home() {
  const textStyle = `${manrope.className} font-normal text-center`;

  async function handleLoginGoogle () {
  const result =  await signIn('google', {callbackUrl: "/dashboard"});
  if (result?.error) {
    toastify.error(result.error);
    return
  }
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-6 relative overflow-hidden laptop:flex-row">
      {/* <OptionProfile open={true} /> */}

      <Image
        src={orangeDesktop}
        alt="elípse laranja"
        className="absolute top-0 right-0 translate-x-40 rotate-6 -translate-y-36 -z-10 max-w-md 
        laptop:translate-x-36 
        laptop:rotate-2 laptop:-translate-y-24
        desktop:translate-x-36 
        "
      />
      <div className="flex flex-col items-center justify-center laptop:mr-40 ">
        <Image
          src={logoDesktop}
          alt="logo de um jacaré"
          className="w-9/12 laptop:w-[450px]"
        />
        <Image
          src={slogan}
          alt="slogan: seu assistente pessoal de produtividade"
          className="hidden laptop:block "
        />

        <p
          className={`
          ${textStyle} text-base text-neutras-bgBlack  w-[235px] mt-2 laptop:hidden`}
        >
          Entre e comece a transformar suas metas em realidade.
        </p>
      </div>

      <div className=" flex flex-col items-center">
        <p
          className={`hidden laptop:block ${manrope.className} text-2xl text-primary-purple100 font-normal text-center w-[358px] mb-6 `}
        >
          Entre e comece a <b>transformar</b> suas <b>metas</b> em{" "}
          <b>realidade</b>.
        </p>
        <Button variant='orange' className="mt-2 w-full" onClick={handleLoginGoogle}>Entrar com Google</Button>
        <hr className="w-[180px] my-6 mx-auto" />
        <LoginForm />
        <hr className="w-[180px] my-6 mx-auto" />
        <p
          className={`text-center font-bold mt-1 text-sm text-[#49484D] ${manrope.className}`}
        >
          Não possui conta?{" "}
          <strong className="cursor-pointer text-primary-purple100 font-bold">
            Cadastre-se
          </strong>
        </p>
      </div>
      <Image
        src={purpleDesktop}
        alt="elipse roxa"
        className="max-w-sm absolute bottom-0 left-0 -z-10 translate-y-32 -translate-x-36 rotate-7 laptop:rotate-3 laptop:-translate-x-36 laptop:translate-y-20 laptop:max-w-lg"
      />
      
      {/* <ProfileForm/> */}
    </main>
  );
}
