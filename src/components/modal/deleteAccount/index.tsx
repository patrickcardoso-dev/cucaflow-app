"use client";

import DeleteForm from "@/components/form/deleteAccount";
import logoCucaflow from "../../../assets/logo/logo_cucaflow.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

import ellipsePurple from "../../../assets/shape/ellipse-purple.png"
import { Button } from "@/components/ui/button";

export default function DeleteAccount() {
    const router = useRouter();

    function handleRedirect() {
        router.push('/dashboard');
    }

    return (
        <dialog
        open
        className="fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        >
            
            <main className="flex flex-col items-center h-screen w-screen gap-3 mt-16 bg-neutras-bgWhite">
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

                <hr className="w-[180px] my-6 mx-auto" />
              
                <Button
                    type="submit"
                    variant="orangeSecond"
                    size="default"
                    className="rounded-lg w-80 lg:w-96"
                    onClick={handleRedirect}    
                >
                    <p className="text-bold text-sm">Cancelar</p>
                </Button>
                <Image
                    src={ellipsePurple}
                    alt="Elipse roxa"
                    className="absolute bottom-[30px] left-0"
                />
            </main>
        </dialog>
    )
}