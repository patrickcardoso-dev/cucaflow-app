"use client";

import Image from "next/image";
import logo from "../assets/logo-cuca.png";
import orangeDesktop from "../assets/shape/ellipse-orange-full.png";
import purpleDesktop from "../assets/shape/elipse-purple-full.png";
import { manrope } from "./fonts";
import { ProfileForm } from "@/components/modal/editUser";
import LoginForm from "@/components/form/login/login";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-6 relative overflow-hidden laptop:flex-row">
      <Image
        src={orangeDesktop}
        alt="elípse laranja"
        className="absolute top-0 right-0 translate-x-40 rotate-6 -translate-y-36 -z-10 max-w-md 
        laptop:translate-x-36 
        laptop:rotate-2 laptop:-translate-y-24
        desktop:translate-x-36 
        "
      />
      <div className="flex flex-col items-center justify-center ">
        <Image src={logo} alt="logo de um jacaré" />
        <p
          className={`${manrope.className} text-base text-[#211D28] font-medium text-center w-[235px] mt-2 `}
        >
          Entre e comece a transformar suas metas em realidade.
        </p>
      </div>

      <div className=" flex flex-col items-center">
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
        className="max-w-sm absolute bottom-0 left-0 -z-10 translate-y-24 -translate-x-36 rotate-7 laptop:rotate-3 laptop:-translate-x-36 laptop:translate-y-20 laptop:max-w-lg"
      />
      {/* <ProfileForm/> */}
    </main>
  );
}
