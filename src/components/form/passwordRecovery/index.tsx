"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { manrope } from "../../../app/fonts";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import formSchema from "./schema";
import Link from "next/link";

function RecoveryForm() {
    const [email, setEmail] = useState("")

    function handleResendEmail() {
        console.log("email: ",email)
    }

    function handleBackToEmail() {
        setEmail("")
    }

    type formSchemaRecovery = z.infer<typeof formSchema>;
    const [isFieldEdited, setIsFieldEdited] = useState(false);
    const form = useForm<formSchemaRecovery>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        email: ""
    },
    });

    useEffect(() => {
    setIsFieldEdited(form.formState.isValid);
    }, [form.formState.isValid]);

    function onSubmit(values: formSchemaRecovery) {
    setEmail(values.email)
    console.log("email: ", values.email);
    }

    return (
        <>
            {(!email) ? (
                <Form {...form}>
                <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col h-full gap-3 "
                >
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <p className="w-72 text-center">
                            Digite o e-mail cadastrado para redefinição de senha.
                        </p>
                        <FormLabel
                        className={`text-sm ${manrope.className} desktop:text-base`}
                        >
                        E-mail
                        </FormLabel>
                        <FormControl>
                        <Input placeholder="Ex: cucaflow@gmail.com" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
    
                <Button
                    type="submit"
                    variant="purple"
                    className={`mt-6 ${
                    isFieldEdited
                        ? "bg-primary-purple100"
                        : "bg-neutras-disable cursor-not-allowed"
                    } `}
                    disabled={!isFieldEdited}
                >
                    Enviar
                </Button>
                        <Link href="/">
                        <Button
                    className="mt-8 w-80 lg:w-96"
                    type="reset"
                    variant="orangeSecond"
                >
                    Voltar
                </Button>
                        </Link>
                </form>
            </Form>
            ) : (
                    <div>
                        <p className="w-80 text-center mt-4 mb-12">
                            Um link para redefinição de senha foi enviado para o seu email.
                        </p>
                        <p className="text-center">Não recebeu o email?</p>
                        <Button
                            type="submit"
                            variant="purple"
                            className="mt-8 w-80 lg:w-96"
                            onClick={handleResendEmail}
                        >
                            Enviar novamente
                        </Button>
                        <hr />
                <Button
                    className="mt-8 w-80 lg:w-96"
                    type="reset"
                    variant="orangeSecond"
                    onClick={handleBackToEmail}
                >
                    Voltar
                </Button>
                    </div>
            )}
        </>
    );
    }

export default RecoveryForm;
