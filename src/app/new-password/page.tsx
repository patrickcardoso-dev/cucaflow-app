"use client"
import Image from "next/image";
import purpleDesktop from "../../assets/shape/elipse-purple-full.png"
import orangeDesktop from "../../assets/shape/ellipse-orange-full.png"
import cucaLogo from "../../assets/logo/logo-cucaflow-desktop.png"
import RecoveryForm from "@/components/form/passwordRecovery";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import NewPasswordForm from "@/components/form/newPassword";

export default function NewPassword() {

    return ( 
        <main className="flex min-h-screen flex-col items-center justify-center relative overflow-hidden laptop:flex-row pb-24 pt-8">
            <Image
                src={orangeDesktop}
                alt="elípse laranja"
                className="absolute w-96 top-0 right-0 translate-x-40 rotate-6 -translate-y-28 -z-10 max-w-md 
                laptop:translate-x-32 
                laptop:rotate-2 laptop:-translate-y-24
                desktop:translate-x-36 
                "
            />
            <Image     
                src={cucaLogo}
                    alt="Logo Cucaflow"
                    width={300}
            />
            <div className="flex flex-col items-center justify-center gap-2">
                <NewPasswordForm/>    
            </div>
        <Image
            src={purpleDesktop}
            alt="elipse roxa"
            className="max-w-sm absolute bottom-0 left-0 -z-10 translate-y-28 -translate-x-36 rotate-7 laptop:rotate-3 laptop:-translate-x-44 laptop:translate-y-24 laptop:max-w-lg"
        />
        </main>

     )
}