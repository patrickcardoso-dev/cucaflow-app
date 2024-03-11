"use client";

import Image from "next/image";
import logo from "../assets/logo-cuca.png";
import logoDesktop from "../assets/logo/logo-cucaflow-desktop.png";
import orangeDesktop from "../assets/shape/ellipse-orange-full.png";
import purpleDesktop from "../assets/shape/elipse-purple-full.png";
import { manrope } from "./fonts";
import { ProfileForm } from "@/components/modal/editUser";
import LoginForm from "@/components/form/login/login";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(0);
  const mobileText = "Entre e comece a transformar suas metas em realidade.";
  const desktopText = "Seu assistente pessoal de produtividade.";
  const textStyle = `${manrope.className} font-normal text-center`;

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      <div className="flex flex-col items-center justify-center laptop:mr-44 ">
        <Image
          src={windowWidth < 992 ? logo : logoDesktop}
          alt="logo de um jacaré"
          className={windowWidth < 992 ? "" : "w-[500px]"}
        />
        <p
          className={
            windowWidth < 992
              ? `${textStyle} text-base text-neutras-bgBlack  w-[235px] mt-2 `
              : ` ${textStyle} text-4xl text-primary-purple100 w-[422px] leading-8`
          }
        >
          {windowWidth < 992 ? mobileText : desktopText}
        </p>
      </div>

      <div className=" flex flex-col items-center">
        <p
          className={`hidden laptop:block ${manrope.className} text-2xl text-primary-purple100 font-normal text-center w-[358px] mb-6 `}
        >
          Entre e comece a <b>transformar</b> suas <b>metas</b> em{" "}
          <b>realidade</b>.
        </p>
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
