"use client"
import Image from "next/image";
import purpleDesktop from "../../assets/shape/elipse-purple-full.png"
import orangeDesktop from "../../assets/shape/ellipse-orange-full.png"
import cucaLogo from "../../assets/logo/logo-cucaflow-desktop.png"
import slogan from "../../assets/logo/slogan.png"
import RecoveryForm from "@/components/form/passwordRecovery";

import { useState } from "react";

export default function PasswordRecovery() {

    return ( 
        <main className="flex min-h-screen flex-col items-center justify-center relative overflow-hidden laptop:flex-row pb-24 pt-8">
            <Image
                src={orangeDesktop}
                alt="elípse laranja"
                className="absolute top-0 right-0 translate-x-44 rotate-6 -translate-y-32 -z-10 max-w-md 
                laptop:translate-x-48 
                laptop:rotate-3 laptop:-translate-y-28 laptop:max-w-lg
                "
            />
           <div className="flex flex-col justify-center items-center laptop:mr-24">
            <Image     
                src={cucaLogo}
                    alt="Logo Cucaflow"
                    width={300}
                    className="laptop:w-[500px]"
            />
            <Image
                alt="slogan"
                src={slogan}
                className="hidden laptop:block"

            />
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
                <RecoveryForm />       
            </div>
        <Image
            src={purpleDesktop}
            alt="elipse roxa"
            className="max-w-sm absolute bottom-0 left-0 -z-10 translate-y-28 -translate-x-36 rotate-7 laptop:rotate-3 laptop:-translate-x-44 laptop:translate-y-24 laptop:max-w-lg"
        />
        </main>
     )
}