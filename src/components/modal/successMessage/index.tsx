"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import SuccessImage from "@/assets/success-image.png";

interface DialogProps extends React.DialogHTMLAttributes<HTMLDialogElement> {
    txtMessage: string;
    txtButton: string;
    btnPath: string;
    open?: boolean;
}

function SuccessMessage({ txtMessage, txtButton, btnPath, open, ...rest }: DialogProps) {
    return (
        <div 
            className="fixed inset-0 z-50 bg-neutras-gray100 bg-opacity-60 backdrop-blur"
        >
            <dialog 
                open={open}
                className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed] :fade-out-0 data-[state=open]:fade-in-0"
                {...rest}
            >

                <div 
                    className="
                    border-none bg-neutras-neutra h-min top-[50%] fixed left-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg dark:border-neutral-800 dark:bg-neutral-950"
                >
                    <div className="pt-14 px-3.5 flex flex-col items-center">

                        <Image
                            width={120}
                            height={120}
                            src={SuccessImage}
                            alt="Marca de seleção branca em círculo roxo"
                            className="mb-7"
                        />

                        <h2 className="text-3xl font-extrabold text-primary-purple100 w-72 text-center">
                            {txtMessage}
                        </h2>
                
                        <Link href={btnPath}>
                            <Button 
                                variant="purpleSecond" 
                                className="mt-20 mb-14 w-full"
                            >
                                {txtButton}
                            </Button>
                        </Link>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default SuccessMessage;
