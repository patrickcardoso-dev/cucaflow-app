"use client";

import DeleteForm from "@/components/form/deleteAccount";
import logoCucaflow from "../../../assets/logo_cucaflow.png";
import Image from "next/image";
import { manrope } from "@/app/fonts";
import ellipsePurple from "../../../assets/shape/mobile/elipse-purple-1.png"

interface DialogProps extends React.DialogHTMLAttributes<HTMLDialogElement> {
    open?: boolean;
  }

export default function DeleteAccount({ open, ...rest }: DialogProps) {
    return (
        <dialog open={open}
        className="fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
            {...rest}>
            
            <main className={`${manrope.className} flex flex-col items-center h-full gap-3 overflow-y-auto font-manrope`}>
                <div className="flex flex-col items-center justify-center gap-3 mb-5 w-72">
                    <Image
                        src={logoCucaflow}
                        alt="Logo Cucaflow"
                    />
                    <h1 className="text-3xl font-bold text-primary-purple100">Tem Certeza?</h1>
                    <p className="text-center text-base text-primary-purple100">Ao deletar sua conta seus dados serão apagados permanentemente.</p>
                    <p className="text-center text-base text-primary-purple100"><strong>Deseja apagar todos os seus dados?</strong></p>
                </div>
                <DeleteForm />
                <Image
                    src={ellipsePurple}
                    alt="Elipse roxa"
                    className="absolute bottom-[-100px] left-[-130px]"
                />
            </main>
        </dialog>
    )
}